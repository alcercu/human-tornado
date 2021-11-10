import stringifyBigInts from "websnark/tools/stringifybigint";
import bigInt from "snarkjs.bigInt";
import merkleTree from "fixed-merkle-tree";
import { toHex } from ".";


export async function generateMerkleProof(deposit, contract) {
  const events = await contract.getPastEvents(
    'Deposit',
    { fromBlock: 0, toBlock: 'latest' }
  )
  const leaves = events
     // Sort events in chronological order
    .sort((a, b) => a.returnValues.leafIndex - b.returnValues.leafIndex)
    .map((e) => e.returnValues.commitment)
  const tree = new merkleTree(MERKLE_TREE_HEIGHT, leaves)

  // Find current commitment in the tree
  let depositEvent = events.find((e) => (
    e.returnValues.commitment === toHex(deposit.commitment))
  );
  let leafIndex = depositEvent ? depositEvent.returnValues.leafIndex : -1

  // Validate that our data is correct (optional)
  const isValidRoot = await contract.methods
    .isKnownRoot(toHex(tree.root()))
    .call()
  const isSpent = await contract.methods
    .isSpent(toHex(deposit.nullifierHash))
    .call()
  assert(isValidRoot === true, 'Merkle tree is corrupted')
  assert(isSpent === false, 'The note is already spent')
  assert(leafIndex >= 0, 'The deposit is not found in the tree')

  // Compute merkle proof of our commitment
  const { pathElements, pathIndices } = tree.path(leafIndex)
  return { pathElements, pathIndices, root: tree.root() }
}

const generateWithdraw = (recipient, sender, root, deposit, contract) => {
  const { root, pathElements, pathIndices } = await generateMerkleProof(
    deposit, contract
  );

  const input = stringifyBigInts({
    root,
    nullifierHash: pedersenHash(deposit.nullifier.leInt2Buff(31)),
    relayer: sender,
    recipient,
    fee: bigInt(0),
    refund: bigInt(0),
    nullifier: deposit.nullifier,
    secret: deposit.secret,
    pathElements,
    pathIndices,
  });

  const proofData = await websnarkUtils.genWitnessAndProve(
    groth16, input, circuit, proving_key
  );
  const { proof } = websnarkUtils.toSolidityInput(proofData);

  const args = [
    toFixedHex(input.root),
    toFixedHex(input.nullifierHash),
    toFixedHex(input.recipient, 20),
    toFixedHex(input.relayer, 20),
    toFixedHex(input.fee),
    toFixedHex(input.refund),
  ]

  return([proof, ...args]);
}

export default generateWithdraw;

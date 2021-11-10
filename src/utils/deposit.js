import { rbigint, pedersenHash, toHex } from ".";


function generateDeposit() {
  const secret = rbigint(31);
  const nullifier = rbigint(31);
  const preimage = Buffer.concat(
    [nullifier.leInt2Buff(31), secret.leInt2Buff(31)]
  );

  const deposit = {
    secret,
    nullifier,
    preimage,
    commitment: pedersenHash(preimage),
    nullifierHash: pedersenHash(nullifier.leInt2Buff(31))
  }

  const note = `tornado-${toHex(deposit.preimage, 62)}`

  return { commit: deposit.commitment, note };
}

export default generateDeposit;

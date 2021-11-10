import generateDeposit from "../utils/deposit";
import { useTornadoFunction } from "./use-tornado";


const useDeposit = (setNote, setDepositState) => {
  const { send, state } = useTornadoFunction("deposit");

  return () => {
    const { commit, note } = generateDeposit();
    setDepositState(state);
    setNote(note);
  }
}

export default useDeposit;

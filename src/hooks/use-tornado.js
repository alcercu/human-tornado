import {
  useContractFunction, useContractCall, ContractCall
} from "@usedapp/core";
import useContract from "./use-contract";


export const useTornadoFunction = (method) => {
  const contract = useContract("tornado");
  return useContractFunction(contract, method);
}

export const useTornadoCall = (method, ...args) => {
  const contract = useContract("tornado");
  const contractCall = new ContractCall(
    contract.interface, contract.address, method, args
  )
  return useContractCall(contractCall);
}

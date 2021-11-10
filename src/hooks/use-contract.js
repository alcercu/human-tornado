import { useEthers } from "@usedapp/core";
import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import tornado from "../constants/contracts/tornado";


const useContract = (contractName) => {
  const { chainId } = useEthers();
  const contractInterface = new utils.Interface(tornado.abi);
  return new Contract(tornado.address[chainId], contractInterface);
}

export default useContract;

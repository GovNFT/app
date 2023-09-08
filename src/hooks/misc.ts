import { useQuery } from "@tanstack/react-query";
import { getContract, getProvider } from "@wagmi/core";

async function fetchDeployed(address) {
  const signerOrProvider = await getProvider();
  const contract = getContract({ address, abi: [], signerOrProvider });

  try {
    await contract.deployed();
  } catch (error) {
    return false;
  }

  return true;
}

export function useContractDeployed(address, opts = {}) {
  return useQuery(["fetchDeployed"], () => fetchDeployed(address), opts);
}

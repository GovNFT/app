import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";
import config from "../rpc";
import { Address, GovNft } from "./types";

import { GOVNFT_SUGAR_ABI, GOVNFT_SUGAR_ADDRESS } from "../constants";

async function fetchGovNfts(account: Address, isMinted: boolean): Promise<GovNft[]> {
  const govnfts = await readContract(config, {
    address: GOVNFT_SUGAR_ADDRESS,
    abi: GOVNFT_SUGAR_ABI,
    functionName: "all",
    args: [account],
  });

  const mintedGovnfts = govnfts.filter((gnft) => gnft.minter.toLowerCase() === account.toLowerCase());

  return isMinted ? Promise.all(mintedGovnfts) : Promise.all(govnfts);
}

export function useGovNfts(accountAddress, isMinted = false, opts = {}) {
  return useQuery({
    queryKey: ["fetchGovNfts"],
    queryFn: () => fetchGovNfts(accountAddress, isMinted),
    ...opts,
    placeholderData: [],
    // @ts-ignore
    keepPreviousData: true,
  });
}

import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";
import config from "../rpc";
import { GovNft } from "./types";

import { GOVNFT_SUGAR_ABI, GOVNFT_SUGAR_ADDRESS } from "../constants";

async function fetchGovNfts(account): Promise<GovNft[]> {
  const govnfts = await readContract(config, {
    address: GOVNFT_SUGAR_ADDRESS,
    abi: GOVNFT_SUGAR_ABI,
    functionName: "all",
    args: [account],
  });

  // @ts-ignore
  return govnfts;
}

export function useGovNfts(accountAddress, opts = {}) {
  return useQuery({
    queryKey: ["fetchGovNfts"],
    queryFn: () => fetchGovNfts(accountAddress),
    ...opts,
    placeholderData: [],
    // @ts-ignore
    cacheTime: 5_000 * 60, // 5 minute
    keepPreviousData: true,
  });
}

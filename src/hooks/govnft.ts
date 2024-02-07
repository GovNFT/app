import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";
import { formatUnits } from "viem";
import config from "../rpc";
import { GovNft } from "./types";
import { ZERO_ADDRESS } from "../constants";

import { GOVNFT_SUGAR_ABI, GOVNFT_SUGAR_ADDRESS } from "../constants";

function postFetch(nft, account) {
  const vestedPct = Math.trunc(
    100 - (Number(formatUnits(nft.amount, 0)) / Number(formatUnits(nft.total_locked, 0))) * 100,
  );

  const isOwner = nft.owner.toLowerCase() === account.toLowerCase();
  const isMinter = nft.minter.toLowerCase() === account.toLowerCase();
  const isDelegated = nft.delegated.toLowerCase() !== ZERO_ADDRESS;
  return { ...nft, isOwner, isMinter, isDelegated, vestedPct };
}

async function fetchGovNfts(account): Promise<GovNft[]> {
  return await readContract(config, {
    address: GOVNFT_SUGAR_ADDRESS,
    abi: GOVNFT_SUGAR_ABI,
    functionName: "all",
    args: [account],
  }).then((nfts) => nfts.map((nft) => postFetch(nft, account)));
}

export function useGovNfts(accountAddress, opts = {}) {
  return useQuery({
    queryKey: ["fetchGovNfts"],
    queryFn: () => fetchGovNfts(accountAddress),
    ...opts,
    placeholderData: [],
    // @ts-ignore
    keepPreviousData: true,
  });
}

import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";
import config from "../rpc";
import { GovNft } from "./types";

import { GOVNFT_SUGAR_ABI, GOVNFT_SUGAR_ADDRESS } from "../constants";

async function fetchGovNfts(account): Promise<GovNft[]> {
  const govnfts = (
    await readContract(config, {
      address: GOVNFT_SUGAR_ADDRESS,
      abi: GOVNFT_SUGAR_ABI,
      functionName: "all",
      args: [account],
    })
  ).map((nft) => {
    return {
      id: Number(nft.id),
      total_locked: nft.total_locked,
      amount: nft.amount,
      total_claimed: nft.total_claimed,
      claimable: nft.claimable,
      split_count: Number(nft.split_count),
      cliff_length: Number(nft.cliff_length),
      start: Number(nft.start),
      end: Number(nft.end),
      token: nft.token,
      vault: nft.vault,
      minter: nft.minter,
      owner: nft.owner,
      address: nft.address,
      delegated: nft.delegated,
    };
  });

  return govnfts;
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

import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";
import { formatUnits } from "viem";
import { Address } from "viem";
import { ZERO_ADDRESS } from "../constants";
import config from "../rpc";
import { GovNft } from "./types";

import { GOVNFT_SUGAR_ABI, GOVNFT_SUGAR_ADDRESS } from "../constants";

function postFetch(nft, account: Address) {
  const vestedPct = Math.trunc(
    100 - (Number(formatUnits(nft.amount, 0)) / Number(formatUnits(nft.total_locked, 0))) * 100,
  );

  const isOwner = nft.owner.toLowerCase() === account.toLowerCase();
  const isMinter = nft.minter.toLowerCase() === account.toLowerCase();
  const isDelegated = nft.delegated.toLowerCase() !== ZERO_ADDRESS;
  return { ...nft, isOwner, isMinter, isDelegated, vestedPct, name: "" };
}

async function fetchMintedNfts(account: Address, collection: Address): Promise<GovNft[]> {
  return await readContract(config, {
    address: GOVNFT_SUGAR_ADDRESS,
    abi: GOVNFT_SUGAR_ABI,
    functionName: "minted",
    args: [account, collection],
  }).then((nfts) => nfts.map((nft) => postFetch(nft, account)));
}

async function fetchOwnedNfts(account: Address, collection: Address): Promise<GovNft[]> {
  return await readContract(config, {
    address: GOVNFT_SUGAR_ADDRESS,
    abi: GOVNFT_SUGAR_ABI,
    functionName: "owned",
    args: [account, collection],
  }).then((nfts) => nfts.map((nft) => postFetch(nft, account)));
}

async function fetchNft(id, account: Address, collection: Address): Promise<GovNft> {
  const nft = await readContract(config, {
    address: GOVNFT_SUGAR_ADDRESS,
    abi: GOVNFT_SUGAR_ABI,
    functionName: "byId",
    args: [id as bigint, collection],
  });

  return postFetch(nft, account);
}

export function useMintedNfts(accountAddress: Address, collection: Address, opts = {}) {
  return useQuery({
    queryKey: ["fetchMintedNfts"],
    queryFn: () => fetchMintedNfts(accountAddress, collection),
    enabled: !!collection,
    ...opts,
    placeholderData: [],
    // @ts-ignore
    keepPreviousData: true,
  });
}

export function useOwnedNfts(accountAddress: Address, collection: Address, opts = {}) {
  return useQuery({
    queryKey: ["fetchOwnedNfts"],
    queryFn: () => fetchOwnedNfts(accountAddress, collection),
    enabled: !!collection,
    ...opts,
    placeholderData: [],
    // @ts-ignore
    keepPreviousData: true,
  });
}

export function useNft(id, accountAddress: Address, collection: Address, opts = {}) {
  return useQuery({
    queryKey: ["fetchNft"],
    queryFn: () => fetchNft(id, accountAddress, collection),
    enabled: !!collection,
    ...opts,
    // @ts-ignore
    keepPreviousData: true,
  });
}

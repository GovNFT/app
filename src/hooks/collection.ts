import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";
import config from "../rpc";
import { Collection } from "./types";

import { GOVNFT_SUGAR_ABI, GOVNFT_SUGAR_ADDRESS } from "../constants";

async function fetchCollections(): Promise<Collection[]> {
  const collections = await readContract(config, {
    address: GOVNFT_SUGAR_ADDRESS,
    abi: GOVNFT_SUGAR_ABI,
    functionName: "collections",
    args: [],
  });

  return Promise.all(collections);
}

export function useCollections(opts = {}) {
  return useQuery({
    queryKey: ["fetchCollections"],
    queryFn: () => fetchCollections(),
    ...opts,
    placeholderData: [],
    // @ts-ignore
    keepPreviousData: true,
  });
}

import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";
import { isEmpty } from "lodash";
import { useMemo } from "react";
import { useSearch } from "wouter";

import config from "#/rpc";
import type { Collection } from "./types";

import { GOVNFT_SUGAR_ABI, GOVNFT_SUGAR_ADDRESS } from "#/constants";

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

export function useCollection() {
  const searchString = useSearch();
  const { data: collections } = useCollections();

  const collection = useMemo(() => {
    if (isEmpty(collections)) return;

    const params = new URLSearchParams(searchString);
    const colAddress = String(params.get("collection") || "");

    return collections.find((c) => c.address.toLowerCase() === colAddress.toLowerCase()) || collections[0];
  }, [searchString, collections]);

  return collection;
}

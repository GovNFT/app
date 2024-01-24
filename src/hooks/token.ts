import { useQuery } from "@tanstack/react-query";
import { getBalance } from "@wagmi/core";

import { TOKEN_ADDRESSES } from "../constants";
import config from "../rpc";
import { Address, Token } from "./types";

async function fetchTokens(accountAddress: Address): Promise<Token[]> {
  const tokens = TOKEN_ADDRESSES.map(
    async (tokenAddress: Address): Promise<Token> => {
      const token = await getBalance(config, {
        address: accountAddress,
        token: tokenAddress,
      });
      return { ...token, address: tokenAddress };
    },
  );

  return Promise.all(tokens);
}

export function useTokens(accountAddress, opts = {}) {
  return useQuery({
    queryKey: ["fetchTokens"],
    queryFn: () => fetchTokens(accountAddress),
    ...opts,
    placeholderData: [],
    // @ts-ignore
    cacheTime: 5_000 * 60, // 5 minute
    keepPreviousData: true,
  });
}

import { useQuery } from "@tanstack/react-query";
import { fetchBalance } from "@wagmi/core";

import { TOKEN_ADDRESSES } from "../constants";

async function fetchTokens(accountAddress) {
  const tokens = TOKEN_ADDRESSES.map(async (tokenAddress) => {
    const token = await fetchBalance({
      address: accountAddress,
      token: tokenAddress  as `0x${string}`,
    });
    return { ...token, address: tokenAddress };
  });

  return Promise.all(tokens);
}

export function useTokens(accountAddress, opts = {}) {
  return useQuery(["fetchTokens"], () => fetchTokens(accountAddress), {
    ...opts,
    // @ts-ignore
    placeholderData: [],
    // 5 minute
    cacheTime: 5_000 * 60,
    keepPreviousData: true,
  });
}

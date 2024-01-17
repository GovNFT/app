import { useQuery } from "@tanstack/react-query";
import { getBalance } from "@wagmi/core";

import { TOKEN_ADDRESSES } from "../constants";
import wagmiConfig from "../wagmiconfig";

export async function fetchTokens(accountAddress) {
  const tokens = TOKEN_ADDRESSES.map(async (tokenAddress) => {
    const token = await getBalance(wagmiConfig, {
      address: accountAddress,
      token: tokenAddress as `0x${string}`,
    });
    return { ...token, address: tokenAddress };
  });

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

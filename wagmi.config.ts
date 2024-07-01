import { defineConfig, loadEnv } from "@wagmi/cli";
import { etherscan } from "@wagmi/cli/plugins";
import type { Address } from "viem";
import { optimism } from "viem/chains";

export default defineConfig(() => {
  loadEnv({
    mode: process.env.NODE_ENV ?? "development",
    envDir: process.cwd(),
  });

  return {
    out: "src/generated.ts",
    contracts: [],
    plugins: [
      etherscan({
        apiKey: process.env.ETHERSCAN_API_KEY as string,
        chainId: optimism.id,
        contracts: [
          {
            name: "govnftSugar",
            address: process.env.VITE_GOVNFT_SUGAR_ADDRESS as Address,
          },
          {
            name: "govnft",
            address: process.env.VITE_GOVNFT_ADDRESS as Address,
          },
        ],
      }),
    ],
  };
});

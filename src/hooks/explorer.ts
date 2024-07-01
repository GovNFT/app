import { useAccount } from "wagmi";
import { DEFAULT_CHAIN } from "../constants";

type Explorer = ReturnType<typeof useAccount>["chain"]["blockExplorers"]["key"];

export const useExplorer = (): { explorer: Explorer } => {
  const { chain } = useAccount();

  const explorers = chain?.blockExplorers || DEFAULT_CHAIN.blockExplorers;
  const explorer = explorers.default;

  return { explorer };
};

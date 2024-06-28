import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import ActionLink from "../../../components/ActionLink";
import { GOVNFT_ABI } from "../../../constants";
import { GovNft } from "../../../hooks/types";

export default function ClaimButton({ nft }: { nft: GovNft }) {
  const { address } = useAccount();

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  return (
    <ActionLink
      onClick={() =>
        writeContract({
          abi: GOVNFT_ABI,
          address: nft.address,
          functionName: "claim",
          args: [nft.id, address, nft.claimable],
        })
      }
      disabled={isPending || isConfirmed}
    >
      Claim
    </ActionLink>
  );
}

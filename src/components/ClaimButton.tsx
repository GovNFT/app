import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import { GOVNFT_ABI } from "#/constants";
import type { GovNft } from "#/hooks/types";
import ActionLink from "./ActionLink";

export default function ClaimButton({ nft }: { nft: GovNft }) {
  const { address } = useAccount();

  const { data: hash, isPending, writeContract } = useWriteContract();

  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  if (nft.claimable === 0n) {
    return <></>;
  }

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

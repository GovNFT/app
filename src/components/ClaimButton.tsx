import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import { GOVNFT_ABI, GOVNFT_ADDRESS } from "../constants";
import ActionLink from "./ActionLink";

export default function ClaimButton({ id, amount }: { id: bigint; amount: bigint }) {
  const { address } = useAccount();

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  if (amount === 0n) {
    return <></>;
  }

  return (
    <>
      <ActionLink
        onClick={() =>
          writeContract({
            abi: GOVNFT_ABI,
            address: GOVNFT_ADDRESS,
            functionName: "claim",
            args: [id, address, amount],
          })
        }
        disabled={isPending || isConfirmed}
      >
        Claim
      </ActionLink>
    </>
  );
}

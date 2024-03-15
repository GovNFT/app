import { Button } from "flowbite-react";
import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import { GOVNFT_ABI, GOVNFT_ADDRESS } from "../../../constants";

export default function DelegateButton({ id, delegatee }: { id: bigint; delegatee: Address }) {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  return (
    <>
      <Button
        onClick={() =>
          writeContract({
            abi: GOVNFT_ABI,
            address: GOVNFT_ADDRESS,
            functionName: "delegate",
            args: [id, delegatee],
          })
        }
        className="w-full"
        disabled={isPending || isConfirmed}
      >
        {isPending ? "Confirming..." : isConfirmed ? "Delegated" : "Delegate"}
      </Button>
    </>
  );
}

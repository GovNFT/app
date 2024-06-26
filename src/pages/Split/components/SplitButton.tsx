import { Button } from "flowbite-react";
import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { GOVNFT_ABI, GOVNFT_ADDRESS } from "../../../constants";

export default function SplitButton({
  id,
  recipient,
  amount,
  start,
  end,
  cliff,
  description,
}: { id: bigint; recipient: Address; amount: bigint; start: bigint; end: bigint; cliff: bigint; description: string }) {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  return (
    <Button
      onClick={() =>
        writeContract({
          abi: GOVNFT_ABI,
          address: GOVNFT_ADDRESS,
          functionName: "split",
          args: [
            id,
            {
              beneficiary: recipient,
              start: start,
              end: end,
              cliff: cliff,
              amount: amount,
              description: description,
            },
          ],
        })
      }
      className="w-full"
      disabled={isPending || isConfirmed}
    >
      {isPending ? "Confirming..." : isConfirmed ? "Split Confirmed" : "Split"}
    </Button>
  );
}
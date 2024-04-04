import { Button } from "flowbite-react";
import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import { GOVNFT_ABI, GOVNFT_ADDRESS } from "../../../constants";

export default function TransferButton({ id, recipient }: { id: bigint; recipient: Address }) {
  const { address } = useAccount();

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
            functionName: "transferFrom",
            args: [address, recipient, id],
          })
        }
        className="w-full"
        disabled={isPending || isConfirmed}
      >
        {isPending ? "Confirming..." : isConfirmed ? "Transferred" : "Transfer"}
      </Button>
    </>
  );
}

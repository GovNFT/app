import { Button } from "flowbite-react";
import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { GOVNFT_ABI } from "../../../constants";
import { useCollection } from "../../../hooks/collection";

export default function CreateButton({
  token,
  recipient,
  amount,
  start,
  end,
  cliff,
  description,
}: {
  token: Address;
  recipient: Address;
  amount: bigint;
  start: bigint;
  end: bigint;
  cliff: bigint;
  description: string;
}) {
  const collection = useCollection();
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
            address: collection?.address,
            functionName: "createLock",
            args: [token, recipient, amount, start, end, cliff, description],
            enabled: !!collection,
          })
        }
        className="w-full"
        disabled={isPending || isConfirmed}
      >
        {isPending ? "Confirming..." : isConfirmed ? "Created" : "Create"}
      </Button>
    </>
  );
}

import { Button } from "flowbite-react";
import { ExternalLinkIcon } from "lucide-react";
import { useEffect } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useLocation } from "wouter";
import Toaster from "#/components/Toaster";
import { GOVNFT_ABI } from "#/constants";
import { useCollection } from "#/hooks/collection";
import type { Address } from "#/hooks/types";

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
  const [, navigate] = useLocation();
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (error) {
      // @ts-ignore
      Toaster.toast(error);
    } else if (isConfirmed) {
      navigate("~/minted");
      Toaster.toast.success("GovNFT created!");
    }
  }, [error, isConfirmed, navigate]);

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
        disabled={isPending || isConfirmed || isConfirming}
      >
        {isPending ? "Confirming..." : isConfirmed ? "Created" : "Create"}
      </Button>
    </>
  );
}

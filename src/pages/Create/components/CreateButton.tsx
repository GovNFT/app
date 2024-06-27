import { Button } from "flowbite-react";
import { ExternalLinkIcon } from "lucide-react";
import { useEffect } from "react";
import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import Toaster from "../../../components/Toaster";
import { GOVNFT_ABI, GOVNFT_ADDRESS } from "../../../constants";

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
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (error) {
      // @ts-ignore
      Toaster.toast(error);
    } else if (isConfirmed) {
      Toaster.toast.success(
        <a href={"/minted"} target="_blank" rel="noreferrer">
          "GovNFT grant is successful!" <ExternalLinkIcon size={12} className="inline" />
        </a>,
      );
    }
  }, [error, isConfirmed]);

  return (
    <>
      <Button
        onClick={() =>
          writeContract({
            abi: GOVNFT_ABI,
            address: GOVNFT_ADDRESS,
            functionName: "createLock",
            args: [token, recipient, amount, start, end, cliff, description],
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

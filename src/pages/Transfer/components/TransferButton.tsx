import { Button } from "flowbite-react";
import { useEffect } from "react";
import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import { useLocation } from "wouter";

import Toaster from "../../../components/Toaster";
import { GOVNFT_ABI, GOVNFT_ADDRESS } from "../../../constants";

export default function TransferButton({ id, recipient }: { id: bigint; recipient: Address }) {
  const { address } = useAccount();
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
      navigate("~/dash");
      Toaster.toast.success("GovNFT transfered!");
    }
  }, [error, isConfirmed, navigate]);

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
        disabled={isPending || isConfirmed || isConfirming}
      >
        {isPending ? "Confirming..." : isConfirmed ? "Transferred" : "Transfer"}
      </Button>
    </>
  );
}

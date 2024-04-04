import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import ActionLink from "../../../components/ActionLink";
import { GOVNFT_ABI, GOVNFT_ADDRESS } from "../../../constants";

export default function ClaimButton({ id, amount }: { id: bigint; amount: bigint }) {
  const { address } = useAccount();

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

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

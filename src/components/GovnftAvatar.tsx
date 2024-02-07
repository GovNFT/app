import { Spinner, Tooltip } from "flowbite-react";
import { Lock as LockIcon } from "lucide-react";
import { GovNft } from "../hooks/types";

import Amount from "./Amount";
import DateFromNow from "./DateFromNow";

export default function GovnftAvatar({
  nft,
}: {
  nft: GovNft;
}) {
  if (!nft) {
    return (
      <div className="flex gap-3 items-center">
        <Spinner size="sm" color="gray" />
        <div className="text-xs text-gray-600 dark:text-gray-400">Loading Lock...</div>
      </div>
    );
  }

  return (
    <div className="flex gap-5 items-center">
      <div className="bg-gray-100 dark:bg-gray-700/20 h-14 w-14 flex items-center justify-center rounded-2xl">
        <img src="govnft.svg" className="w-6 grayscale" alt="GovNFT" />
      </div>
      <div>
        <div className="flex gap-2 items-center text-gray-800 dark:text-gray-200 font-semibold text-sm">
          GovNFT #{String(nft.id)}
          <LockIcon size={12} />
        </div>
        <div className="text-xs pt-1.5 text-gray-600 dark:text-gray-400 whitespace-nowrap flex items-center">
          <Amount amount={nft.amount} tokenAddress={nft.token} showLogo={false} />
          &nbsp;
          <DateFromNow ts={nft.end} prefix="vesting until" pastPrefix="vested" />
        </div>
      </div>
    </div>
  );
}

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { GovNft } from "../hooks/types";

import { formatUnits } from "viem";
import DateFromNow from "./DateFromNow";

export default function GovnftStatus({
  nft,
}: {
  nft: GovNft;
}) {
  const currentTime = Math.round(Date.now() / 1000);

  if (!nft) {
    return <></>;
  }

  if (nft.vestedPct === 0 && nft.start > currentTime) {
    return (
      <div className="flex flex-col justify-center items-end rounded-md">
        <div className="flex gap-2.5 items-center text-amber-600">
          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
          Vessting Scheduled
        </div>
        <div className="text-gray-600 dark:text-gray-400 pt-1.5 text-xs">
          <DateFromNow ts={nft.start} prefix="vesting starts in" pastPrefix="vesting started" tooltip={false} />
        </div>
      </div>
    );
  }

  if (nft.vestedPct === 100) {
    return (
      <div className="flex flex-col justify-center items-end rounded-md">
        <div className="flex gap-2.5 items-center text-gray-500">Vested</div>
        <div className="text-gray-500 pt-1.5 text-xs">
          <DateFromNow ts={nft.end} pastPrefix="vesting ended" tooltip={false} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-end rounded-md">
      <div className="flex gap-2.5 items-center text-green-500">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        Vesting
      </div>
      <div className="text-gray-600 dark:text-gray-400 pt-1.5 text-xs">
        <DateFromNow ts={nft.end} prefix="vesting ends in" pastPrefix="vesting ended" tooltip={false} />
      </div>
    </div>
  );
}

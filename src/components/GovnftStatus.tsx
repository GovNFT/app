import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { GovNft } from "../hooks/types";

import { formatUnits } from "viem";
import DateFormat from "./DateFormat";
import DateFromNow from "./DateFromNow";

export default function GovnftStatus({
  nft,
}: {
  nft: GovNft;
}) {
  if (!nft) {
    return <></>;
  }

  return (
    <div className="flex flex-col justify-center items-end rounded-md">
      <div className="flex gap-3 items-center">
        {nft.vestedPct === 0 && (
          <div className="flex gap-2.5 items-center">
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
            <DateFormat ts={nft.start} />
          </div>
        )}
        {nft.vestedPct !== 0 && (
          <div className="flex gap-2.5 items-center">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <DateFormat ts={nft.end} />
          </div>
        )}
      </div>

      {nft.vestedPct === 0 && (
        <div className="text-amber-600 pt-1.5 text-xs">
          <DateFromNow ts={nft.start} prefix="vesting starts in" tooltip={false} />
        </div>
      )}
      {nft.vestedPct !== 0 && (
        <div className="text-gray-600 dark:text-gray-400 pt-1.5 text-xs">
          <DateFromNow ts={nft.end} prefix="vesting ends in" pastPrefix="vesting ended" tooltip={false} />
        </div>
      )}
    </div>
  );
}
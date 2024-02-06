import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { GovNft } from "../hooks/types";

/* Enable relative time plugin */
dayjs.extend(relativeTime);
import { formatUnits } from "viem";
import DateFromNow from "./DateFromNow";

export default function GovnftStatus({ 
  govnft 
}: {
  govnft: GovNft,
}) {
  if (!govnft) {
    return <></>;
  }

  const startDate = dayjs.unix(Number(govnft.start)).add(Number(govnft.cliff_length), "seconds");
  const endDate = dayjs.unix(Number(govnft.end));

  return (
    <div className="flex flex-col justify-center items-end rounded-md">
      <div className="flex gap-3 items-center">
        {govnft.amount === govnft.total_locked && (
          <div className="flex gap-2.5 items-center">
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
            {startDate.format("MMM DD, YYYY")}
          </div>
        )}
        {govnft.amount !== govnft.total_locked && (
          <div className="flex gap-2.5 items-center">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            {endDate.format("MMM DD, YYYY")}
          </div>
        )}
      </div>

      {govnft.amount === govnft.total_locked && (
        <div className="text-amber-600 pt-1.5 text-xs">
          <DateFromNow ts={startDate} prefix="vesting starts in" tooltip={false} />
        </div>
      )}
      {govnft.amount !== govnft.total_locked && (
        <div className="text-gray-600 dark:text-gray-400 pt-1.5 text-xs">
          <DateFromNow ts={endDate} prefix="vesting ends in" pastPrefix="vesting ended" tooltip={false} />
        </div>
      )}
    </div>
  );
}

import dayjs from "dayjs";
import { formatUnits } from "viem";
import DateFromNow from "./DateFromNow";

export default function GovnftStatus({ govnft }) {
  const startDate = dayjs.unix(Number(govnft.start)).add(govnft.cliff_length, "seconds");
  const endDate = dayjs.unix(Number(govnft.end));

  if (govnft.amount === govnft.total_locked) {
    return (
      <div className="flex flex-col justify-center items-end rounded-md">
        <div className="flex gap-2.5 items-center text-sm">
          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse">&nbsp;</div>
          {startDate.format("MMM DD, YYYY")}
        </div>
        <div className="text-amber-600 pt-1.5 text-xs">
          <DateFromNow ts={startDate} prefix="vesting starts in" tooltip={false} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-end rounded-md">
      <div className="flex gap-2.5 items-center text-sm">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse">&nbsp;</div>
        {endDate.format("MMM DD, YYYY")}
      </div>
      <div className="text-gray-400 dark:text-gray-600 pt-1.5 text-xs">
        <DateFromNow ts={endDate} prefix="vesting ends in" pastPrefix="vesting ended" tooltip={false} />
      </div>
    </div>
  );
}

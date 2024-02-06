import { Calendar as CalendarIcon, Check as CheckIcon } from "lucide-react";
import { formatUnits } from "viem";

export default function GovnftProgress({
  amount,
  totalAmount,
}: {
  amount: bigint;
  totalAmount: bigint;
}) {
  const percent = Math.trunc(100 - (Number(formatUnits(amount, 0)) / Number(formatUnits(totalAmount, 0))) * 100);

  if (percent === 100) {
    return (
      <div className="w-16 h-16 flex items-center justify-center">
        <div className="p-5 rounded-full border-[3px] border-gray-100 dark:border-gray-950/30 text-green-500 flex items-center justify-center">
          <CheckIcon size={13} />
        </div>
      </div>
    );
  }

  if (percent === 0) {
    return (
      <div className="w-16 h-16 flex items-center justify-center">
        <div className="p-5 rounded-full border-[3px] border-gray-100 dark:border-gray-950/30 text-amber-600 flex items-center justify-center">
          <CalendarIcon size={13} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 36 36" className="stroke-green-500">
        <title>Vested</title>
        <path
          className="fill-none stroke-gray-100 dark:stroke-gray-950/30 stroke-2"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          stroke-dasharray={`${percent}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className="absolute w-16 h-16 top-0 left-0 flex items-center justify-center text-gray-600 dark:text-gray-400 text-xs">
        {percent}%
      </div>
    </div>
  );
}

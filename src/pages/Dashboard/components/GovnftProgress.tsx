import { Check as CheckIcon, Hourglass as HourglassIcon } from "lucide-react";

export default function GovnftProgress({ startDate, endDate }) {
  if (endDate.isAfter()) {
    return (
      <div className="w-16 h-16 rounded-full border border-green-500 text-green-500 flex items-center justify-center">
        <CheckIcon size={16} />
      </div>
    );
  }

  if (!startDate.isBefore()) {
    return (
      <div className="w-16 h-16 rounded-full border border-gray-500 text-gray-500 flex items-center justify-center">
        <HourglassIcon size={16} />
      </div>
    );
  }

  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 36 36" className="stroke-green-500">
        <title>progress</title>
        <path
          className="fill-none stroke-gray-200 dark:stroke-gray-900 stroke-[3px]"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          stroke-dasharray="40, 100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className="absolute w-16 h-16 top-0 left-0 flex items-center justify-center text-gray-600 dark:text-gray-400 text-xs">
        30%
      </div>
    </div>
  );
}

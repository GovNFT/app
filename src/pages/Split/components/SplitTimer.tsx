import { Button } from "flowbite-react";
import { History as HistoryIcon, Split as SplitIcon } from "lucide-react";
import { useEffect, useState } from "react";

import SplitButton from "./SplitButton";

export default function SplitTimer({ timer, setTimer }) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (timer) {
      setTimeLeft(59);
    } else if (!timer) {
      setTimeLeft(0);
    }
  }, [timer]);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);

    // clear interval on re-render to avoid memory leaks
  }, [timeLeft]);

  if (!timer) {
    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
          <SplitIcon size={18} />
          <div>Begin Split Process</div>
        </div>
        <Button className="w-full" onClick={() => setTimer(true)}>
          <div className="flex w-full justify-between gap-3 items-center">
            <div>Start Transaction Timer</div>
            <HistoryIcon size={18} />
          </div>
        </Button>
      </div>
    );
  }

  if (timeLeft !== 0) {
    return (
      <div className="space-y-6">
        <div className="text-sm flex items-center text-green-500 gap-2">
          <HistoryIcon size={18} />
          <div>Transaction Timer:</div>
          <div className="font-bold">{timeLeft} seconds</div>
          <div
            className="text-sm underline hover:no-underline cursor-pointer text-gray-600 dark:text-gray-400"
            onClick={() => setTimer(false)}
          >
            Cancel
          </div>
        </div>
        <div className="text-sm pr-16 text-gray-400 dark:text-gray-600">
          Waiting for transaction timer to complete. Once the transaction is done, you will be able to sign the final
          split
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-600 dark:text-gray-400">
        Ready for final split. Complete a second transaction to finalise the split.
      </div>
      <SplitButton />
    </div>
  );
}

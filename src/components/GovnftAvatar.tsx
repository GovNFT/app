import { Spinner, Tooltip } from "flowbite-react";
import { Lock as LockIcon } from "lucide-react";

import Amount from "./Amount";
import DateFromNow from "./DateFromNow";

export default function GovnftAvatar({ govnft, expTooltip = true }) {
  if (!govnft) {
    return (
      <div className="flex gap-3 items-center">
        <Spinner size="sm" color="gray" />
        <div className="text-xs text-gray-600 dark:text-gray-400">Loading Lock...</div>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <div>
        <div className="flex gap-2 items-center text-gray-800 dark:text-gray-200 font-semibold text-sm">
          GovNFT #{String(govnft.id)}
          <LockIcon size={12} />
        </div>
        <div className="text-xs pt-1.5 text-gray-600 dark:text-gray-400 whitespace-nowrap flex items-center">
          <Amount amount={govnft.amount} tokenAddress={govnft.token} showLogo={false} />
          &nbsp;
          <DateFromNow ts={govnft.end} prefix="locked for" pastPrefix="unlocked" tooltip={expTooltip} />
        </div>
      </div>
    </div>
  );
}

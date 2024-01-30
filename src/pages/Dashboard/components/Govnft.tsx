import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Tooltip } from "flowbite-react";
import { ChevronRight as ChevronRightIcon, Lock as LockIcon, TrendingUp as TrendingUpIcon } from "lucide-react";

/* Enable relative time plugin */
dayjs.extend(relativeTime);
import { formatUnits } from "viem";

import ActionLink from "../../../components/ActionLink";
import Amount from "../../../components/Amount";
import DateFromNow from "../../../components/DateFromNow";
import GovnftAvatar from "../../../components/GovnftAvatar";
import GovnftProgress from "../../../components/GovnftProgress";
import NavLink from "../../../components/NavLink";

export default function Govnft({ govnft }) {
  const startDate = dayjs.unix(Number(govnft.start)).add(govnft.cliff_length, "seconds");
  const endDate = dayjs.unix(Number(govnft.end));

  return (
    <div className="bg-white hover:bg-white/50 dark:bg-white/[.04] dark:hover:bg-white/[.05] rounded-lg text-sm pl-8 pr-4 py-4 shadow-sm">
      <div className="flex justify-between gap-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 sm:items-center">
          <GovnftProgress amount={govnft.amount} totalAmount={govnft.total_locked} />
          <div className="sm:grow">
            <GovnftAvatar govnft={govnft} />
            <div className="flex items-center gap-2">
              <div className="text-gray-600 dark:text-gray-400 pt-2 text-xs">Name Unknown</div>
              <div className="text-gray-400 dark:text-gray-600 pt-2 text-xs underline">Edit</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="px-5 py-4 w-52 flex flex-col justify-center items-end rounded-md">
            <div className="text-gray-400 dark:text-gray-600 pb-2 text-xs">Status</div>
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
              <div className="text-amber-600 pt-2 text-xs">
                <DateFromNow ts={startDate} prefix="vesting starts in" tooltip={false} />
              </div>
            )}
            {govnft.amount !== govnft.total_locked && (
              <div className="text-gray-600 dark:text-gray-400 pt-2 text-xs">
                <DateFromNow ts={endDate} prefix="vesting ends in" pastPrefix="vesting ended" tooltip={false} />
              </div>
            )}
          </div>

          <div className="px-5 py-4 w-52 flex flex-col justify-center items-end bg-gray-50 dark:bg-gray-900/40 rounded-md">
            <div className="text-gray-400 dark:text-gray-600 pb-2 text-xs">Locked</div>
            <Amount tokenAddress={govnft.token} amount={govnft.amount} showLogo={true} />
            <div className="text-gray-600 dark:text-gray-400 pt-2 text-xs flex gap-1 items-center">
              of <Amount tokenAddress={govnft.token} amount={govnft.total_locked} showLogo={false} /> total
            </div>
          </div>

          <div className="px-5 py-4 w-52 flex flex-col justify-center items-end bg-gray-50 dark:bg-gray-900/40 rounded-md">
            <div className="text-gray-400 dark:text-gray-600 pb-2 text-xs">Claimable</div>
            <Amount tokenAddress={govnft.token} amount={govnft.claimable} showLogo={false} />
            <div className="pt-2 text-xs flex gap-2 items-center">
              <ActionLink onClick="#">Claim</ActionLink>
            </div>
          </div>

          <NavLink href={`/govnft?id=${govnft.id}`} className="h-full">
            <div className="px-3 h-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-900/20 hover:dark:bg-gray-900/40 flex items-center rounded-md cursor-pointer">
              <ChevronRightIcon size={14} />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

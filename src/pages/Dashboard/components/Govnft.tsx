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
  const startDate = dayjs(govnft.start).add(govnft.cliff_length, "seconds");
  const endDate = dayjs(govnft.end);
  const percent = Math.trunc(
    100 - (Number(formatUnits(govnft.amount, 2)) / Number(formatUnits(govnft.total_locked, 2))) * 100,
  );

  return (
    <div className="bg-white hover:bg-white/50 dark:bg-white/[.04] dark:hover:bg-white/[.05] rounded-lg text-sm pl-8 pr-4 py-4 shadow-sm">
      <div className="flex justify-between gap-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 sm:items-center">
          <GovnftProgress amount={govnft.amount} totalAmount={govnft.total_locked} />
          <div className="space-y-1.5 sm:grow">
            <GovnftAvatar govnft={govnft} />
            <div className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5 pt-1">
              <NavLink href="/transfer" className="underline hover:no-underline">
                Transfer
              </NavLink>
              <span className="text-gray-400 dark:text-gray-600">&middot;</span>
              <NavLink href="/transfer" className="underline hover:no-underline">
                Split
              </NavLink>
              <span className="text-gray-400 dark:text-gray-600">&middot;</span>
              <NavLink href="/transfer" className="underline hover:no-underline">
                Delegate
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="px-5 py-4 w-52 flex flex-col justify-center items-end rounded-md">
            <div className="text-gray-400 dark:text-gray-600 pb-2 text-xs">Timeframe</div>
            <div className="flex gap-3 items-center">
              {startDate.isBefore() && (
                <>
                  {govnft.cliff_length !== 0n && (
                    <Tooltip content="Starts with a Cliff">
                      <TrendingUpIcon size={12} className="text-green-500" />
                    </Tooltip>
                  )}
                  {startDate.format("MMM DD, YYYY")}
                </>
              )}

              {startDate.isAfter() && endDate.format("MMM DD, YYYY")}
            </div>
            <div className="text-gray-400 dark:text-gray-600 pt-2 text-xs">
              {startDate.isBefore() && <DateFromNow ts={govnft.start} prefix="vesting starts in" tooltip={false} />}
              {startDate.isAfter() && (
                <DateFromNow ts={govnft.end} prefix="vesting ends in" pastPrefix="vesting ended" tooltip={false} />
              )}
            </div>
          </div>

          <div className="px-5 py-4 w-52 flex flex-col justify-center items-end bg-gray-50 dark:bg-gray-900/40 rounded-md">
            <div className="text-gray-400 dark:text-gray-600 pb-2 text-xs">Locked</div>
            <Amount tokenAddress={govnft.token} amount={govnft.amount} showLogo={true} />
            <div className="text-gray-400 dark:text-gray-600 pt-2 text-xs flex gap-1 items-center">
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

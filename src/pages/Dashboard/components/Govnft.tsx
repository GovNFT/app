import { Tooltip } from "flowbite-react";
import {
  ChevronRight as ChevronRightIcon,
  Info as InfoIcon,
  Lock as LockIcon,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";

import ActionLink from "../../../components/ActionLink";
import Amount from "../../../components/Amount";
import GovnftAvatar from "../../../components/GovnftAvatar";
import GovnftProgress from "../../../components/GovnftProgress";
import GovnftStatus from "../../../components/GovnftStatus";
import NavLink from "../../../components/NavLink";

export default function Govnft({ govnft }) {
  return (
    <div className="bg-white hover:bg-white/50 dark:bg-white/[.04] dark:hover:bg-white/[.05] rounded-lg text-sm pl-8 pr-4 py-4 shadow-sm border border-gray-200 dark:border-gray-700/50">
      <div className="flex justify-between gap-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 sm:items-center">
          <div className="sm:grow">
            <GovnftAvatar govnft={govnft} />
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600 text-xs pt-3">
              <div>
                <InfoIcon size={12} />
              </div>
              <div>Name Unknown</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex gap-6 items-center pr-3">
            <GovnftStatus govnft={govnft} />
            <GovnftProgress amount={govnft.amount} totalAmount={govnft.total_locked} />
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

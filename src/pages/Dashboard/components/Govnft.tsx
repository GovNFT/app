import { Tooltip } from "flowbite-react";
import {
  ChevronRight as ChevronRightIcon,
  Info as InfoIcon,
  Link as LinkIcon,
  Lock as LockIcon,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";

import ActionLink from "#/components/ActionLink";
import AddressMask from "#/components/AddressMask";
import Amount from "#/components/Amount";
import ClaimButton from "#/components/ClaimButton";
import GovnftAvatar from "#/components/GovnftAvatar";
import GovnftProgress from "#/components/GovnftProgress";
import GovnftStatus from "#/components/GovnftStatus";
import NavLink from "#/components/NavLink";
import type { GovNft } from "#/hooks/types";

export default function Govnft({
  nft,
}: {
  nft: GovNft;
}) {
  return (
    <div className="bg-white hover:bg-white/50 dark:bg-white/[.04] dark:hover:bg-white/[.05] rounded-lg text-sm pl-6 pr-4 py-4 shadow-sm border border-gray-100 dark:border-gray-700/20">
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 sm:items-center">
          <div className="sm:grow">
            <GovnftAvatar nft={nft} />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden lg:flex gap-5 items-center pr-3">
            <GovnftStatus nft={nft} />
            <GovnftProgress vestedPct={nft.vestedPct} vestingStarted={nft.vestingStarted} />
          </div>
          <div className="px-6 py-2 w-52 hidden xl:flex flex-col gap-2 justify-center items-end border-l border-gray-100 dark:border-gray-950/20">
            <div className="text-gray-400 dark:text-gray-600 text-xs">Locked</div>
            <Amount tokenAddress={nft.token} amount={nft.amount} showLogo={true} />
            <div className="text-gray-600 dark:text-gray-400 text-xs flex gap-1 items-center">
              of <Amount tokenAddress={nft.token} amount={nft.total_locked} showLogo={false} /> total
            </div>
          </div>
          <div className="sm:px-6 w-full sm:w-52 flex flex-row gap-6 sm:flex-col sm:gap-2 sm:justify-center items-center sm:items-end sm:border-l border-gray-100 dark:border-gray-950/20">
            <div className="text-gray-400 dark:text-gray-600 text-xs">Claimable</div>
            <Amount tokenAddress={nft.token} amount={nft.claimable} showLogo={false} />
            <div className="text-xs">
              <ClaimButton nft={nft} />
            </div>
            {nft.claimable === 0n && (
              <NavLink href={`~/nft/${nft.id}`}>
                <div className="text-xs text-gray-400 dark:text-gray-600 underline hover:no-underline">Review</div>
              </NavLink>
            )}
          </div>
          <NavLink href={`~/nft/${nft.id}`} className="flex h-full ">
            <div className="hidden sm:flex items-center px-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700/10 hover:dark:bg-gray-700/20 rounded-md cursor-pointer">
              <ChevronRightIcon size={14} />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

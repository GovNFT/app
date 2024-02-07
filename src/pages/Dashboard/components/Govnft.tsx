import { Tooltip } from "flowbite-react";
import {
  ChevronRight as ChevronRightIcon,
  Info as InfoIcon,
  Lock as LockIcon,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";

import ActionLink from "../../../components/ActionLink";
import AddressMask from "../../../components/AddressMask";
import Amount from "../../../components/Amount";
import GovnftAvatar from "../../../components/GovnftAvatar";
import GovnftProgress from "../../../components/GovnftProgress";
import GovnftStatus from "../../../components/GovnftStatus";
import NavLink from "../../../components/NavLink";
import { GovNft } from "../../../hooks/types";

export default function Govnft({
  nft,
}: {
  nft: GovNft;
}) {
  return (
    <NavLink href={`/govnft?id=${nft.id}`} className="block">
      <div className="bg-white hover:bg-white/50 dark:bg-white/[.04] dark:hover:bg-white/[.05] rounded-lg text-sm pl-6 pr-4 py-4 shadow-sm border border-gray-100 dark:border-gray-700/20">
        <div className="flex justify-between gap-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 sm:items-center">
            <div className="sm:grow space-y-5">
              <GovnftAvatar nft={nft} />
              <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600 text-xs">
                <AddressMask address={nft.address} />
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-5 items-center pr-3">
              <GovnftStatus nft={nft} />
              <GovnftProgress vestedPct={nft.vestedPct} />
            </div>
            <div className="px-6 py-4 w-52 flex flex-col justify-center items-end border-l border-gray-100 dark:border-gray-950/20">
              <div className="text-gray-400 dark:text-gray-600 pb-2 text-xs">Locked</div>
              <Amount tokenAddress={nft.token} amount={nft.amount} showLogo={true} />
              <div className="text-gray-600 dark:text-gray-400 pt-2 text-xs flex gap-1 items-center">
                of <Amount tokenAddress={nft.token} amount={nft.total_locked} showLogo={false} /> total
              </div>
            </div>
            <div className="px-6 py-4 w-52 flex flex-col justify-center items-end border-l border-gray-100 dark:border-gray-950/20">
              <div className="text-gray-400 dark:text-gray-600 pb-2 text-xs">Claimable</div>
              <Amount tokenAddress={nft.token} amount={nft.claimable} showLogo={false} />
              <div className="pt-2 text-xs flex gap-2 items-center">
                <ActionLink onClick="#">Claim</ActionLink>
              </div>
            </div>
            <div className="px-3 h-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-700/10 hover:dark:bg-gray-700/20 flex items-center rounded-md cursor-pointer">
              <ChevronRightIcon size={14} />
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

import { Button } from "flowbite-react";
import { MoreVertical as MoreVerticalIcon, Share2 as Share2Icon } from "lucide-react";
import { useState } from "react";
import { useAccount } from "wagmi";

import { GovNft } from "../hooks/types";
import GovnftAvatar from "./GovnftAvatar";
import GovnftNavbar from "./GovnftNavbar";
import GovnftProgress from "./GovnftProgress";
import GovnftStatus from "./GovnftStatus";
import NavLink from "./NavLink";

export default function GovnftHeader({
  nft,
  active = "overview",
}: {
  nft: GovNft;
  active: string;
}) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <div className="mx-auto bg-white shadow-lg dark:bg-white/5 rounded-lg mb-4 sm:mb-6 border border-gray-100 dark:border-gray-700/20">
        <div className="flex gap-4 items-center justify-between p-2 md:p-4 md:mb-1">
          <div className="flex gap-4 items-center pl-2 py-2">
            <GovnftAvatar nft={nft} />
          </div>
          <div className="hidden sm:flex gap-5 items-center pr-1 text-sm">
            <GovnftStatus nft={nft} />
            <GovnftProgress vestedPct={nft.vestedPct} />
          </div>
        </div>
        <>
          {/* DESKTOP MENU */}
          <div className="hidden sm:flex justify-between text-xs border-t border-gray-100 dark:border-gray-950/30">
            <div className="flex text-gray-700 dark:text-gray-300">
              <GovnftNavbar nft={nft} active={active} />
            </div>
            {/* TODO: Add eterscan url */}
            <a href="https://etherscan.io/" target="_blank" rel="noreferrer">
              <div className="flex gap-3 items-center px-7 py-4 text-gray-600 dark:text-gray-400 underline hover:no-underline">
                <Share2Icon size={12} />
                Etherscan
              </div>
            </a>
          </div>

          {/* MOBILE MENU */}
          <div className="block sm:hidden">
            <div
              className="flex justify-between sm:hidden px-5 py-4 text-xs bg-gray-100/20 dark:bg-gray-950/10 text-gray-600 dark:text-gray-400"
              onClick={() => setShowOptions(showOptions === true ? false : true)}
            >
              Settings
              <MoreVerticalIcon size={14} />
            </div>

            {showOptions && (
              <div className="text-xs text-gray-700 dark:text-gray-300">
                <GovnftNavbar nft={nft} active={active} />
              </div>
            )}
          </div>
        </>
      </div>
    </>
  );
}

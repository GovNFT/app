import { Button } from "flowbite-react";
import { useAccount } from "wagmi";
import GovnftAvatar from "./GovnftAvatar";
import GovnftNavbar from "./GovnftNavbar";
import GovnftProgress from "./GovnftProgress";
import GovnftStatus from "./GovnftStatus";
import NavLink from "./NavLink";
import { GovNft } from "../hooks/types";

export default function GovnftHeader({ 
  nft, 
  active = "overview" 
}: {
  nft: GovNft;
  active: string;
}) {
  return (
    <>
      <div className="mx-auto bg-white shadow-lg dark:bg-white/5 rounded-lg mb-6 border border-gray-100 dark:border-gray-700/20">
        <div className="flex gap-4 items-center justify-between p-2 md:p-4 md:mb-1">
          <div className="flex gap-4 items-center pl-2">
            <GovnftAvatar nft={nft} />
          </div>
          <div className="flex gap-5 items-center pr-1 text-sm">
            <GovnftStatus nft={nft} />
            <GovnftProgress vestedPct={nft.vestedPct} />
          </div>
        </div>
        {nft.isOwner && <GovnftNavbar nft={nft} active={active} />}
      </div>
    </>
  );
}

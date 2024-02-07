import { Share2 as MoreVerticalIcon } from "lucide-react";
import NavLink from "./NavLink";
import { GovNft } from "../hooks/types";

export default function GovnftNavbar({ 
  nft, 
  active = "overview" 
}: {
  nft:GovNft;
  active: string;
}) {
  const classActive = "border-t border-primary bg-gray-50 dark:bg-gray-700/10 ";
  const navs = {
    overview: "overview",
    delegate: "delegate",
    split: "split",
    transfer: "transfer",
  }

  return (
    <div className="flex justify-between text-xs border-t border-gray-100 dark:border-gray-950/30">
      <div className="flex text-gray-700 dark:text-gray-300">
        {Object.keys(navs).map((nav) => (
          <NavLink href={`/${nav}?id=${nft.id}`}>
            <div
              className={`${
                active === nav ? classActive : "border-t border-transparent"
              } hover:bg-gray-50 hover:dark:bg-gray-700/20 rounded-bl-lg`}
            >
              <div className="px-8 py-4 uppercase tracking-widest">{nav}</div>
            </div>
          </NavLink>
        ))}
      </div>
      {/* TODO: Add share component */}
      <NavLink href={`/transfer?id=${nft.id}`}>
        <div className="flex gap-3 items-center px-7 py-4 text-gray-600 dark:text-gray-400 underline hover:no-underline">
          <MoreVerticalIcon size={12} />
          Share GovNFT
        </div>
      </NavLink>
    </div>
  );
}

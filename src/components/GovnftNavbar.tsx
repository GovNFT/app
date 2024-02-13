import { Share2 as MoreVerticalIcon } from "lucide-react";
import { GovNft } from "../hooks/types";
import NavLink from "./NavLink";

export default function GovnftNavbar({
  nft,
  active = "overview",
}: {
  nft: GovNft;
  active: string;
}) {
  const classActive = "border-t border-primary bg-gray-50 dark:bg-gray-700/10 ";
  const navs = {
    nft: "overview",
    delegate: "delegate",
    split: "split",
    transfer: "transfer",
  };

  return (
    <div className="flex justify-between text-xs border-t border-gray-100 dark:border-gray-950/30">
      <div className="flex text-gray-700 dark:text-gray-300">
        {Object.entries(navs).map(([nav, title]) => (
          <NavLink href={`~/nft/${nft.id}/${nav === "nft" ? "" : nav}`}>
            <div
              className={`${
                active === nav ? classActive : "border-t border-transparent"
              } hover:bg-gray-50 hover:dark:bg-gray-700/20`}
            >
              <div className="px-8 py-4 uppercase tracking-widest">{title}</div>
            </div>
          </NavLink>
        ))}
      </div>
      {/* TODO: Add eterscan url */}
      <a href="https://etherscan.io/" target="_blank" rel="noreferrer">
        <div className="flex gap-3 items-center px-7 py-4 text-gray-600 dark:text-gray-400 underline hover:no-underline">
          <MoreVerticalIcon size={12} />
          Etherscan
        </div>
      </a>
    </div>
  );
}

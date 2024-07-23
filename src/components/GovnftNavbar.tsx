import { useAccount } from "wagmi";

import type { GovNft } from "#/hooks/types";
import NavLink from "./NavLink";

const SAFE_NAVS = {
  "": "overview",
};

const UNSAFE_NAVS = {
  delegate: "delegate",
  split: "split",
  transfer: "transfer",
};

export default function GovnftNavbar({
  nft,
  active = "overview",
}: {
  nft: GovNft;
  active: string;
}) {
  const { address, isConnected } = useAccount();

  const isOwner = isConnected && String(address).toLowerCase() === nft.owner.toLowerCase();
  const navs = Object.assign({}, SAFE_NAVS, isOwner ? UNSAFE_NAVS : {});
  const classActive = "sm:border-t border-t-primary bg-gray-50 dark:bg-gray-700/10 ";

  return (
    <>
      {Object.entries(navs).map(([nav, title]) => (
        <NavLink
          href={`/nft/${nft.id}/${nav}`}
          key={String(nav)}
          className={`${
            active === nav ? classActive : "border-t border-transparent"
          } hover:bg-gray-50 hover:dark:bg-gray-700/20 first:rounded-bl-lg`}
        >
          <div className="px-5 sm:px-8 py-4 uppercase tracking-widest">{title}</div>
        </NavLink>
      ))}
    </>
  );
}

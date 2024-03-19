import { GovNft } from "../hooks/types";
import NavLink from "./NavLink";

export default function GovnftNavbar({
  nft,
  active = "overview",
}: {
  nft: GovNft;
  active: string;
}) {
  const classActive = "sm:border-t border-t-primary bg-gray-50 dark:bg-gray-700/10 ";
  const navs = {
    "": "overview",
    delegate: "delegate",
    split: "split",
    transfer: "transfer",
  };

  return (
    <>
      {Object.entries(navs).map(([nav, title]) => (
        <NavLink href={`~/nft/${nft.id}/${nav}`}>
          <div
            className={`${
              active === nav ? classActive : "border-t border-transparent"
            } hover:bg-gray-50 hover:dark:bg-gray-700/20`}
          >
            <div className="px-5 sm:px-8 py-4 uppercase tracking-widest">{title}</div>
          </div>
        </NavLink>
      ))}
    </>
  );
}

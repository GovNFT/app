import { Button } from "flowbite-react";
import GovnftAvatar from "./GovnftAvatar";
import GovnftNavbar from "./GovnftNavbar";
import GovnftProgress from "./GovnftProgress";
import GovnftStatus from "./GovnftStatus";
import NavLink from "./NavLink";
import { useAccount } from "wagmi";

export default function GovnftHeader({ govnft, isOwner = false, active = "overview" }) {

  return (
    <>
      <div className="mx-auto bg-white shadow-lg dark:bg-white/5 rounded-lg mb-6 border border-gray-100 dark:border-gray-700/20">
        <div className="flex gap-4 items-center justify-between p-2 md:p-4 md:mb-1">
          <div className="flex gap-4 items-center pl-2">
            <GovnftAvatar govnft={govnft} />
          </div>
          <div className="flex gap-5 items-center pr-1">
            <GovnftStatus govnft={govnft} />
            <GovnftProgress amount={govnft.amount} totalAmount={govnft.total_locked} />
          </div>
        </div>
        {isOwner && (
          <GovnftNavbar govnft={govnft} active={active} />
        )}
      </div>
    </>
  );
}

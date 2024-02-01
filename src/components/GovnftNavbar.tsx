import { Share2 as MoreVerticalIcon } from "lucide-react";
import NavLink from "./NavLink";

export default function GovnftNavbar({ govnft, active = "overview" }) {
  const classActive = "border-t border-primary bg-gray-50 dark:bg-gray-700/10 ";

  return (
    <div className="flex justify-between text-xs border-t border-gray-100 dark:border-gray-950/30">
      <div className="flex text-gray-700 dark:text-gray-300">
        <NavLink href={`/govnft?id=${govnft.id}`}>
          <div
            className={`${
              active === "overview" ? classActive : "border-t border-transparent"
            } hover:bg-gray-50 hover:dark:bg-gray-700/20 rounded-bl-lg`}
          >
            <div className="px-8 py-4 uppercase tracking-widest">Overview</div>
          </div>
        </NavLink>
        <NavLink href={`/delegate?id=${govnft.id}`}>
          <div
            className={`${
              active === "delegate" ? classActive : "border-t border-transparent"
            } hover:bg-gray-50 hover:dark:bg-gray-700/20`}
          >
            <div className="px-8 py-4 uppercase tracking-widest">Delegate</div>
          </div>
        </NavLink>
        <NavLink href={`/split?id=${govnft.id}`}>
          <div
            className={`${
              active === "split" ? classActive : "border-t border-transparent"
            } hover:bg-gray-50 hover:dark:bg-gray-700/20`}
          >
            <div className="px-8 py-4 uppercase tracking-widest">Split</div>
          </div>
        </NavLink>
        <NavLink href={`/transfer?id=${govnft.id}`}>
          <div
            className={`${
              active === "transfer" ? classActive : "border-t border-transparent"
            } hover:bg-gray-50 hover:dark:bg-gray-700/20`}
          >
            <div className="px-8 py-4 uppercase tracking-widest">Transfer</div>
          </div>
        </NavLink>
      </div>
      <NavLink href={`/transfer?id=${govnft.id}`}>
        <div className="flex gap-3 items-center px-7 py-4 text-gray-600 dark:text-gray-400 underline hover:no-underline">
          <MoreVerticalIcon size={12} />
          Share GovNFT
        </div>
      </NavLink>
    </div>
  );
}

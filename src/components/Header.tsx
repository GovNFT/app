import { Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { SvgLoader } from "react-svgmt";

import { useAccount, useSwitchChain } from "wagmi";
import { CollectionSwitcher } from "#/components/CollectionSwitcher";
import NavLink from "#/components/NavLink";
import Profile from "#/components/Profile";
import { DEFAULT_CHAIN } from "#/constants";
import HeaderNav from "./HeaderNav";

export default function Header() {
  const { chain, isConnected } = useAccount();
  const { switchChain } = useSwitchChain();
  const [showMenu, setShowMenu] = useState(false);

  const isInvalidChain = isConnected && chain?.id !== DEFAULT_CHAIN.id;
  return (
    <div className={isInvalidChain ? "sm:pt-4 pb-24 mt-16 md:mt-10" : "pt-2 sm:pt-4 pb-24"}>
      {isInvalidChain && (
        <div
          className={
            "absolute top-0 left-0 w-full bg-black/[.03] dark:bg-white/[.03] py-3 text-center text-gray-600 dark:text-gray-400 text-xs px-8"
          }
        >
          <span className="hidden sm:inline">You're connected to a different network.</span>{" "}
          <span
            onClick={() => switchChain({ chainId: DEFAULT_CHAIN.id })}
            className={"font-extrabold text-primary underline cursor-pointer"}
          >
            Switch to {DEFAULT_CHAIN.name}
          </span>{" "}
          and continue using the app.
        </div>
      )}

      <div className="flex justify-between">
        <NavLink className="flex gap-1 items-center" href="/">
          <SvgLoader src="/govnft.svg" className="block h-7 w-auto mr-4" alt="GOVNFT" />
          <SvgLoader src="/wordmark.svg" className="hidden lg:block h-5 w-auto dark:text-white" alt="GOVNFT" />
        </NavLink>

        <div className="flex gap-2 items-center">
          {/* DESKTOP MENU */}
          {isConnected && (
            <>
              <div className="hidden md:flex gap-2 items-center">
                <HeaderNav />
              </div>
              <div className="hidden md:block px-2 text-xs text-gray-500">&middot;</div>
            </>
          )}

          <CollectionSwitcher />
          <Profile />

          {isConnected && (
            <div
              className="flex md:hidden items-center h-10 flex py-2 px-3 text-xs bg-gray-900 bg-opacity-5 hover:bg-opacity-10 dark:bg-gray-700 dark:bg-opacity-20 dark:hover:bg-opacity-40 rounded-lg cursor-pointer text-gray-600 dark:text-gray-400"
              onClick={() => setShowMenu((bool) => !bool)}
            >
              <MenuIcon size={14} />
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {showMenu && (
        <div className="py-6 flex flex-col gap-2">
          <HeaderNav />
        </div>
      )}
    </div>
  );
}

import { Navbar } from "flowbite-react";
import { SvgLoader } from "react-svgmt";

import { useAccount, useSwitchChain } from "wagmi";
import { CollectionSwitcher } from "#/components/CollectionSwitcher";
import NavLink from "#/components/NavLink";
import Profile from "#/components/Profile";
import { DEFAULT_CHAIN } from "#/constants";

export default function Header() {
  const { chain, isConnected } = useAccount();
  const { switchChain } = useSwitchChain();

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
      <Navbar fluid={true} rounded={true} border={false}>
        <Navbar.Brand href="/">
          <SvgLoader src="/govnft.svg" className="block h-7 w-auto mr-4" alt="GOVNFT" />
          <SvgLoader src="/wordmark.svg" className="h-5 w-auto dark:text-white" alt="GOVNFT" />
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <div className="flex gap-2 items-center justify-between bg-gray-300/20 md:bg-transparent dark:bg-gray-700/10 md:dark:bg-transparent md:bg-transparent p-4 md:p-0 rounded-lg">
            <div className="flex gap-2 items-center">
              <NavLink size="sm" color="light" href="/dash">
                <div className="h-10 border border-gray-200 hover:border-gray-300 dark:border-gray-700/40 hover:dark:border-gray-700/80 px-4 rounded-xl flex items-center justify-center">
                  <div className="uppercase font-bold tracking-widest text-[11px] px-2">Dashboard</div>
                </div>
              </NavLink>

              <NavLink size="sm" color="light" href="/create">
                <div className="h-10 border border-gray-200 hover:border-gray-300 dark:border-gray-700/40 hover:dark:border-gray-700/80 px-4 rounded-xl flex items-center justify-center">
                  <div className="uppercase font-bold tracking-widest text-[11px] px-2">Create</div>
                </div>
              </NavLink>
            </div>

            <div className="flex gap-2 items-center">
              <CollectionSwitcher />
              <Profile />
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

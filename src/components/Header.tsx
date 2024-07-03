import { Navbar } from "flowbite-react";
import { SvgLoader } from "react-svgmt";

import { CollectionSwitcher } from "#/components/CollectionSwitcher";
import NavLink from "#/components/NavLink";
import Profile from "#/components/Profile";

export default function Header() {
  return (
    <div className="pt-2 sm:pt-4 pb-24">
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

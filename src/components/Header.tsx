import { Navbar } from "flowbite-react";
import { Plus as PlusIcon } from "lucide-react";
import { SvgLoader } from "react-svgmt";

import NavLink from "../components/NavLink";
import Profile from "../components/Profile";

export default function Header() {
  return (
    <div className="pt-2 pb-24">
      <Navbar fluid={true} rounded={true} border={false}>
        <Navbar.Brand href="/">
          <img src="/govnft.svg" className="mr-5 h-6 sm:h-7" alt="GOVNFT" />
          <SvgLoader src="/wordmark.svg" className="hidden sm:block h-4 w-auto dark:text-white" alt="GOVNFT" />
        </Navbar.Brand>
        <Profile>
          <NavLink size="sm" color="light" href="~/dash">
            <div className="h-10 border border-gray-200 hover:border-gray-300 dark:border-gray-700/40 hover:dark:border-gray-700/80 px-4 rounded-xl flex items-center justify-center">
              <div className="uppercase font-bold tracking-widest text-[11px] px-2">Dashboard</div>
            </div>
          </NavLink>

          <NavLink size="sm" color="light" href="~/create">
            <div className="h-10 border border-gray-200 hover:border-gray-300 dark:border-gray-700/40 hover:dark:border-gray-700/80 px-4 rounded-xl flex items-center justify-center">
              <div className="hidden sm:block uppercase font-bold tracking-widest text-[11px] px-2">Create</div>
              <div className="py-0.5 sm:hidden uppercase font-bold tracking-widest">
                <PlusIcon size={16} />
              </div>
            </div>
          </NavLink>
        </Profile>
      </Navbar>
    </div>
  );
}

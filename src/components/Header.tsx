import { Navbar } from "flowbite-react";
import { Plus as PlusIcon } from "lucide-react";
import { SvgLoader } from "react-svgmt";

import NavLink from "../components/NavLink";
import Profile from "../components/Profile";

export default function Header() {
  return (
    <div className="pt-4 pb-24">
      <Navbar fluid={true} rounded={true} border={false}>
        <Navbar.Brand href="/">
          <img src="govnft.svg" className="mr-5 h-6 sm:h-7" alt="GOVNFT" />
          <SvgLoader src="/wordmark.svg" className="hidden sm:block h-4 w-auto dark:text-white" alt="GOVNFT" />
        </Navbar.Brand>
        <Profile>
          <NavLink useButton={true} size="sm" color="light" href="/dash">
            <div className="uppercase font-bold tracking-widest text-[11px]">Dashboard</div>
          </NavLink>

          <NavLink useButton={true} size="sm" color="light" href="/create">
            <div className="hidden sm:block uppercase font-bold tracking-widest text-[11px]">Create</div>
            <div className="py-0.5 sm:hidden uppercase font-bold tracking-widest">
              <PlusIcon size={16} />
            </div>
          </NavLink>
        </Profile>
      </Navbar>
    </div>
  );
}

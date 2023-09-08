import { Navbar } from "flowbite-react";
import { SvgLoader } from "react-svgmt";

import Profile from "../components/Profile";

export default function Header() {
  return (
    <div className="pt-4 pb-24">
      <Navbar fluid={true} rounded={true} border={false}>
        <Navbar.Brand href="/">
          <img src="govnft.svg" className="mr-5 h-6 sm:h-7" alt="GOVNFT" />
          <SvgLoader
            src="/wordmark.svg"
            className="hidden sm:block h-4 w-auto dark:text-white"
            alt="GOVNFT"
          />
        </Navbar.Brand>
        <Profile />
      </Navbar>
    </div>
  );
}

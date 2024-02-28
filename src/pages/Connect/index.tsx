import { useEffect } from "react";
import { SvgLoader } from "react-svgmt";
import { useAccount } from "wagmi";
import { useLocation } from "wouter";

import Footer from "../../components/Footer";
import NavLink from "../../components/NavLink";
import Connectors from "./components/Connectors";

export default function Connect() {
  const { isConnected } = useAccount();
  const [_location, navigate] = useLocation();

  useEffect(() => {
    isConnected && navigate("/dash");
  }, [isConnected, navigate]);

  return (
    <>
      <div className="container mx-auto px-4 lg:px-8">
        <NavLink href="/" className="flex items-center justify-center pt-24 pb-4">
          <SvgLoader src="/govnft.svg" className="block h-7 w-auto mr-4" alt="GOVNFT" />
          <SvgLoader src="/wordmark.svg" className="hidden sm:block h-5 w-auto dark:text-white" alt="GOVNFT" />
        </NavLink>

        <div className="pt-16 pb-32">{!isConnected && <Connectors className="flex justify-center" />}</div>

        <Footer />
      </div>
    </>
  );
}

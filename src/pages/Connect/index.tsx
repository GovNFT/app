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
        <NavLink href="/" className="flex flex-col justify-center gap-6 pt-24 pb-4">
          <img src="govnft.svg" alt="GovNFT" className="h-8 mr-1.5" />
          <SvgLoader src="/wordmark.svg" alt="GOVNFT" className="block h-4 w-auto dark:text-white" />
        </NavLink>

        <div className="pt-16 pb-32">{!isConnected && <Connectors className="flex justify-center" />}</div>

        <Footer />
      </div>
    </>
  );
}

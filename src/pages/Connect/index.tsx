import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SvgLoader } from "react-svgmt";
import { useAccount } from "wagmi";

import Footer from "../../components/Footer";
import NavLink from "../../components/NavLink";
import Connectors from "./components/Connectors";

export default function Connect() {
  const { isConnected } = useAccount();
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    isConnected && navigate(`/dash${search}`);
  }, [isConnected]);

  return (
    <>
      <div className="container mx-auto px-4 lg:px-8">
        <NavLink
          href="/"
          className="flex flex-col justify-center gap-6 pt-24 pb-4"
        >
          <img src="govnft.svg" className="h-8 mr-1.5" alt="GOVNFT" />
          <SvgLoader
            src="/wordmark.svg"
            className="hidden sm:block h-4 w-auto dark:text-white"
            alt="GOVNFT"
          />
        </NavLink>

        <div className="pt-16 pb-32">
          <a href="/landing" className="inline lg:hidden">
            <div className="flex justify-center py-16">
              <div className="flex items-center">
                <img src="govnft.svg" className="ml-2 mr-3 h-9" alt="GOVNFT" />
              </div>
            </div>
          </a>
          {!isConnected && <Connectors className="flex justify-center" />}
        </div>

        <Footer />
      </div>
    </>
  );
}

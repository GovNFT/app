import { isEmpty } from "lodash";
import { useAccount } from "wagmi";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useOwnedNfts } from "../../hooks/govnft";
import Govnfts from "./components/Govnfts";

export default function Dashboard() {
  const { address } = useAccount();
  const { data: nfts } = useOwnedNfts(address);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="max-w-screen-xl mx-auto">
        {isEmpty(nfts) ? <LoadingPlaceholder message="Loading your gonfts..." /> : <Govnfts nfts={nfts} />}
      </div>

      <Footer />
    </div>
  );
}

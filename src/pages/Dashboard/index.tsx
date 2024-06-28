import { useAccount } from "wagmi";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useOwnedNfts } from "../../hooks/govnft";
import Govnfts from "./components/Govnfts";

export default function Dashboard() {
  const { address } = useAccount();
  const { data: nfts = [], isLoading } = useOwnedNfts(address);
  console.log(nfts);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <Header />

      <div className="max-w-screen-xl mx-auto">
        {isLoading ? <LoadingPlaceholder message="Loading your gov nfts..." /> : <Govnfts nfts={nfts} />}
      </div>

      <Footer />
    </div>
  );
}

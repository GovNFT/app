import { isEmpty } from "lodash";
import { useAccount } from "wagmi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useGovNfts } from "../../hooks/govnft";
import MintedGovnfts from "./components/MintedGovnfts";

export default function Dashboard() {
  const { address } = useAccount();
  const isMinted = true;
  const { data: govnfts } = useGovNfts(address, isMinted);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="max-w-screen-xl mx-auto">
        {isEmpty(govnfts) ? (
          <LoadingPlaceholder message="Loading onchain data..." />
        ) : (
          <MintedGovnfts govnfts={govnfts} />
        )}
      </div>

      <Footer />
    </div>
  );
}

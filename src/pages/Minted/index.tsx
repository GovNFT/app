import { isEmpty } from "lodash";
import { useAccount } from "wagmi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useGovNfts } from "../../hooks/govnft";
import Minted from "./components/Minted";

export default function Dashboard() {
  const { address } = useAccount();
  const { data: nfts } = useGovNfts(address);

  const mintedNfts = nfts.filter((nft) => nft.isMinter);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="max-w-screen-xl mx-auto">
        {isEmpty(mintedNfts) ? <LoadingPlaceholder message="Loading onchain data..." /> : <Minted nfts={mintedNfts} />}
      </div>

      <Footer />
    </div>
  );
}

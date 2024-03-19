import { isEmpty } from "lodash";
import { useAccount } from "wagmi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useMintedNfts } from "../../hooks/govnft";
import Minted from "./components/Minted";

export default function Dashboard() {
  const { address } = useAccount();
  const { data: nfts } = useMintedNfts(address);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <Header />

      <div className="max-w-screen-xl mx-auto">
        {isEmpty(nfts) ? <LoadingPlaceholder message="Loading onchain data..." /> : <Minted nfts={nfts} />}
      </div>

      <Footer />
    </div>
  );
}

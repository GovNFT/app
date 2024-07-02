import { useAccount } from "wagmi";
import Footer from "#/components/Footer";
import Header from "#/components/Header";
import LoadingPlaceholder from "#/components/LoadingPlaceholder";
import { useCollection } from "#/hooks/collection";
import { useMintedNfts } from "#/hooks/govnft";
import Minted from "./components/Minted";

export default function Dashboard() {
  const { address } = useAccount();
  const collection = useCollection();
  const { data: nfts = [], isLoading } = useMintedNfts(address, collection?.address);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <Header />

      <div className="max-w-screen-xl mx-auto">
        {isLoading ? <LoadingPlaceholder message="Loading onchain data..." /> : <Minted nfts={nfts} />}
      </div>

      <Footer />
    </div>
  );
}

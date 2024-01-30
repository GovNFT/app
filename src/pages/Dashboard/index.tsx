import { isEmpty } from "lodash";
import { useAccount } from "wagmi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useGovNfts } from "../../hooks/govnft";
import Govnfts from "./components/Govnfts";
import MintedGovnfts from "./components/MintedGovnfts";

export default function Dashboard() {
  const { address } = useAccount();
  const { data: govnfts } = useGovNfts(address);

  const ownedGovnfts = govnfts.filter((gn) => gn.owner.toLowerCase() === address.toLowerCase());
  const mintedGovnfts = govnfts.filter((e) => e.minter.toLowerCase() === address.toLowerCase());

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="max-w-screen-xl mx-auto">
        {isEmpty(ownedGovnfts) ? (
          <LoadingPlaceholder message="Loading your gonfts..." />
        ) : (
          <Govnfts govnfts={ownedGovnfts} />
        )}

        {isEmpty(mintedGovnfts) ? (
          <LoadingPlaceholder message="Loading activities..." />
        ) : (
          <MintedGovnfts govnfts={mintedGovnfts} />
        )}
      </div>

      <Footer />
    </div>
  );
}

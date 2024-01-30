import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useGovNfts } from "../../hooks/govnft";
import useSearchParams from "../../utils/useSearchParams";
import DelegateNft from "./components/DelegateNft";

export default function Delegate() {
  const [searchParams, _] = useSearchParams();
  const id = searchParams.get("id");
  const { address } = useAccount();
  const { data: govnfts } = useGovNfts(address);
  const [govnft, setGovnft] = useState(null);

  useEffect(() => {
    const byId = govnfts?.find((gnft) => gnft.id.toString() === id.toString());
    setGovnft(byId);
  }, [govnfts, id]);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      {isEmpty(govnft) ? <LoadingPlaceholder message="Loading data..." /> : <DelegateNft govnft={govnft} />}

      <Footer />
    </div>
  );
}

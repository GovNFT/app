import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useParams } from "wouter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useGovNfts } from "../../hooks/govnft";
import TransferNft from "./components/TransferNft";

export default function Delegate() {
  const params = useParams();
  const { address } = useAccount();
  const { data: nfts } = useGovNfts(address);
  const [nft, setNft] = useState(null);

  useEffect(() => {
    /* @ts-ignore */
    const byId = nfts?.find((gnft) => gnft.id.toString() === params.id);
    setNft(byId);
  }, [nfts, params]);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      {isEmpty(nft) ? <LoadingPlaceholder message="Loading data..." /> : <TransferNft nft={nft} />}

      <Footer />
    </div>
  );
}

import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useParams } from "wouter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useCollection } from "../../hooks/collection";
import { useNft } from "../../hooks/govnft";
import DelegateNft from "./components/DelegateNft";

export default function Delegate() {
  // @ts-ignore
  const { id } = useParams();
  const { address } = useAccount();
  const collection = useCollection();
  const { data: nft } = useNft(Number(id), address, collection?.address);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <Header />

      {isEmpty(nft) ? <LoadingPlaceholder message="Loading data..." /> : <DelegateNft nft={nft} />}

      <Footer />
    </div>
  );
}

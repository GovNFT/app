import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useParams } from "wouter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useNft } from "../../hooks/govnft";
import TransferNft from "./components/TransferNft";

export default function Delegate() {
  const params = useParams();
  const { address } = useAccount();
  /* @ts-ignore */
  const { data: nft } = useNft(Number(params.id), address);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <Header />

      {isEmpty(nft) ? <LoadingPlaceholder message="Loading data..." /> : <TransferNft nft={nft} />}

      <Footer />
    </div>
  );
}

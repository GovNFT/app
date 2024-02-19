import { isEmpty } from "lodash";
import { Info as InfoIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useParams } from "wouter";
import AddressMask from "../../components/AddressMask";
import Amount from "../../components/Amount";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useNft } from "../../hooks/govnft";
import Overview from "./components/Overview";

export default function Govnft() {
  const params = useParams();
  const { address } = useAccount();
  const { data: nft } = useNft(Number(params.id), address);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      {isEmpty(nft) ? <LoadingPlaceholder message="Loading gonft..." /> : <Overview nft={nft} />}

      <Footer />
    </div>
  );
}

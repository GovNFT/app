import { isEmpty } from "lodash";
import { useAccount } from "wagmi";
import { useParams } from "wouter";
import Footer from "#/components/Footer";
import Header from "#/components/Header";
import LoadingPlaceholder from "#/components/LoadingPlaceholder";
import { ZERO_ADDRESS } from "#/constants";
import { useCollection } from "#/hooks/collection";
import { useNft } from "#/hooks/govnft";

import Overview from "./components/Overview";

export default function Govnft() {
  // @ts-ignore
  const { id } = useParams();
  const { address } = useAccount();
  const collection = useCollection();
  const { data: nft } = useNft(Number(id), address || ZERO_ADDRESS, collection?.address);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <Header />

      {isEmpty(nft) ? <LoadingPlaceholder message="Loading gonft..." /> : <Overview nft={nft} />}

      <Footer />
    </div>
  );
}

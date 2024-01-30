import { isEmpty } from "lodash";
import { Info as InfoIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import AddressMask from "../../components/AddressMask";
import Amount from "../../components/Amount";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import { useGovNfts } from "../../hooks/govnft";
import useSearchParams from "../../utils/useSearchParams";
import GovnftOverview from "./components/GovnftOverview";

export default function Govnft() {
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

      {isEmpty(govnft) ? <LoadingPlaceholder message="Loading gonft..." /> : <GovnftOverview govnft={govnft} />}

      <Footer />
    </div>
  );
}

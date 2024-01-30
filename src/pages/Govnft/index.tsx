import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useSearchParams from "../../utils/useSearchParams";
import { useAccount } from "wagmi";
import { useGovNfts } from "../../hooks/govnft";
import { useEffect, useState } from "react";

export default function Govnft() {
  const [searchParams, _] = useSearchParams();
  const id = searchParams.get("id");
  const { address } = useAccount();
  const { data: govnfts } = useGovNfts(address);
  const [govnft, setGovnft] = useState(null);

  useEffect(() => {
    const byId = govnfts?.find((gnft) => gnft.id.toString() == id.toString());
    setGovnft(byId);
  }, [govnfts, id]);

  console.log(govnft)

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="max-w-screen-xl mx-auto">
        GovNFT {govnft?.id}
      </div>

      <Footer />
    </div>
  );
}

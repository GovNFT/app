import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import TransferNft from "./components/TransferNft";

export default function Transfer() {
  // TODO: Import real govnft that needs deletagion
  const govnft = true;

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      {!govnft ? <LoadingPlaceholder message="Loading data..." /> : <TransferNft />}

      <Footer />
    </div>
  );
}

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingPlaceholder from "../../components/LoadingPlaceholder";
import DelegateNft from "./components/DelegateNft";

export default function Delegate() {
  // TODO: Import real govnft that needs deletagion
  const govnft = true;

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      {!govnft ? (
        <LoadingPlaceholder message="Loading data..." />
      ) : (
        <DelegateNft />
      )}

      <Footer />
    </div>
  );
}

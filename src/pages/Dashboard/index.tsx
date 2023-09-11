import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Govnfts from "./components/Govnfts";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="max-w-screen-xl mx-auto">
        <Govnfts />
      </div>

      <Footer />
    </div>
  );
}

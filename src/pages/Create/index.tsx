import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Creator from "./components/Creator";

export default function CreateGovnft() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="lg:max-w-screen-lg mx-auto">
        <div className="lg:flex gap-6">
          <Creator />
        </div>
      </div>

      <Footer />
    </div>
  );
}

import Footer from "#/components/Footer";
import Header from "#/components/Header";
import Specification from "../../../contracts/SPECIFICATION.md";
import MdComponents from "./md-components";

export default function Docs() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <Header />

      <div className="max-w-screen-xl mx-auto">
        <Specification components={MdComponents} />
      </div>

      <Footer />
    </div>
  );
}

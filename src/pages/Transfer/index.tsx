import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Create() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="md:w-1/2 xl:w-1/3 mx-auto text-center pt-16 pb-32">
        Create
      </div>

      <Footer />
    </div>
  );
}

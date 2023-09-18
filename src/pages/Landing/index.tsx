import { SvgLoader } from "react-svgmt";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Landing() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="md:w-1/2 xl:w-1/3 mx-auto text-center pt-28 pb-48">
        <div className="text-3xl leading-10 px-8">
          The central grant management hub on Optimism network
        </div>
        <div className="flex justify-center pt-12">
          <SvgLoader src="./svg/illustration.svg" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

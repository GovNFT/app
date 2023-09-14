import { SvgLoader } from "react-svgmt";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Landing() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="md:w-1/2 xl:w-1/3 mx-auto text-center pt-16 pb-32">
        <div className="uppercase text-xl">How it works</div>
        <div className="text-sm pt-8 opacity-40 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>
        <div className="flex justify-center pt-12">
          <SvgLoader src="./svg/illustration.svg" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

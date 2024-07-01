import { Button } from "flowbite-react";

import Footer from "#/components/Footer";
import Header from "#/components/Header";

export default function Landing() {
  return (
    <div className="container mx-auto px-4 lg:px-8 h-screen flex flex-col justify-between">
      <Header />

      <div className="text-center">
        <div className="text-lg md:text-4xl leading-tight pb-8 px-4">
          Mint NFTs for
          <br /> vesting and distribution
          <br /> of (governance) tokens
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Funded by the <span className="font-bold italic">OPTIMISM</span> Collective
        </div>
      </div>

      <Footer />
    </div>
  );
}

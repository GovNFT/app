import { Button } from "flowbite-react";
import { Github as GithubIcon } from "lucide-react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Landing() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="text-center pt-20 pb-32">
        <div className="text-lg md:text-4xl leading-tight pb-8 px-4">
          Mint NFTs for
          <br /> vesting and distribution
          <br /> of (governance) tokens
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          A public good supported by <span className="font-bold italic">OPTIMISM</span>
        </div>

        <div className="flex justify-center pt-12">
          <Button href="https://github.com/velodrome-finance/govnft" target="_blank" color="light" size="sm">
            <div className="flex items-center gap-3 px-2 text-sm">
              GitHub
              <GithubIcon size={14} />
            </div>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

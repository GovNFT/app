import { Button } from "flowbite-react";
import { Github as GithubIcon } from "lucide-react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Landing() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="w-full text-center flex flex-col items-center">
        <div className="py-20 space-y-28 flex flex-col items-center">
          <div className="text-center md:w-7/12 bg-gradient-to-r from-red-600 via-fuchsia-800 to-fuchsia-600 inline-block text-transparent bg-clip-text">
            <div className="text-lg md:text-4xl font-bold pb-8">
              veToken{" "}
              <span className="bg-fuchsia-900 text-neutral-100 dark:text-gray-900 px-3 py-1.5">
                Governance
              </span>
            </div>
            <div className="text-lg md:text-4xl leading-tight pb-8 px-4">
              Vest tokens as veNFTs (ERC-721) for better governance and
              long-term incentive alignment. Compatible with any ERC-20 token.
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 pb-32">
          <span className="w-44 md:w-fit text-gray-400 dark:text-gray-600 text-sm">
            A public good supported by{" "}
            <span className="font-bold italic">OPTIMISM</span>
          </span>
          <Button color="light" size="sm">
            <div className="flex items-center gap-3 px-2 text-sm">
              Git Hub
              <GithubIcon size={14} />
            </div>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

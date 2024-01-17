import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { useChainId, useConnect } from "wagmi";

import ConnectorButton from "./ConnectorButton";

export default function Connectors({ className }) {
  const chainId = useChainId();
  const { connectors, connect } = useConnect();

  return (
    <div className={className}>
      <div className="bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded-lg text-sm py-6 sm:py-10 px-5 sm:px-12 max-w-sm">
        <p>
          You'll need an Ethereum Wallet to sign-in.{" "}
          <a
            href="https://ethereum.org/en/wallets/"
            target="_blank"
            rel="noreferrer"
            className="inline text-primary underline hover:no-underline"
          >
            Learn more
            <ExternalLinkIcon size={12} className="inline ml-1" />
          </a>
        </p>
        <div className="pt-6 pb-3 text-xs opacity-50">Connect with:</div>
        <div className="space-y-2">
          {connectors.map((connector) => (
            <ConnectorButton
              key={connector.uid}
              connector={connector}
              onClick={() => connect({ connector, chainId })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

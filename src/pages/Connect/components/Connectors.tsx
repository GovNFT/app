import { Button, Spinner } from "flowbite-react";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { useEffect } from "react";
import { useConnect } from "wagmi";

import { DEFAULT_CHAIN } from "../../../constants";
import { wagmiConfig } from "../../../main";

export default function Connectors({ className }) {
  const { connect, connectors, isLoading, pendingConnector } = useConnect({
    chainId: DEFAULT_CHAIN.id,
  });

  // Auto-connect to Safe if available
  useEffect(() => {
    const safeConnector = connectors.find((c) => c.id === "safe" && c.ready);

    if (safeConnector) {
      connect({ connector: safeConnector });
    } else {
      // Comment out to disable auto-connect...
      wagmiConfig.autoConnect();
    }
  }, [connect, connectors]);

  return (
    <div className={className}>
      <div className="bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded-lg text-sm py-6 sm:py-10 px-5 sm:px-12 max-w-sm">
        <p>
          You'll need an Ethereum
          <br /> Wallet to sign-in.{" "}
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

        <div className="pt-6 space-y-2">
          {connectors.map((connector) => (
            <Button
              size="sm"
              disabled={!connector.ready || isLoading}
              key={connector.id}
              onClick={() => connect({ connector })}
              className="w-full flex items-start !justify-start py-1"
              color="gray"
            >
              {isLoading && connector.id === pendingConnector?.id && (
                <div className="mr-2">
                  <Spinner size="xs" color="gray" />
                </div>
              )}
              <div className="flex items-center gap-3 !justify-start">
                <img
                  src={`svg/icn-connect-${connector.id}.svg`}
                  className="hidden sm:inline"
                />
                <span className="text-sm">Connect with {connector.name}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Button } from "flowbite-react";
import { useEffect, useState } from "react";

export default function ConnectorButton({ connector, onClick }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <>
      <Button
        size="sm"
        disabled={!ready}
        onClick={onClick}
        type="button"
        className="w-full flex items-start !justify-start py-1 text-sm"
        color="gray"
      >
        <div className="flex items-center gap-3 !justify-start">
          <img
            src={connector.icon ? connector.icon : `svg/icn-connect-${connector.id}.svg`}
            className="h-6"
            alt={`Connect with ${connector.name}`}
          />
          {connector.id === "injected" ? "Browser Wallet" : connector.name}
        </div>
      </Button>
    </>
  );
}

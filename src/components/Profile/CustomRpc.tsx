import { Button, TextInput } from "flowbite-react";
import { PlugZap as PlugZapIcon } from "lucide-react";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

import { CUSTOM_RPC_URI_KEY } from "#/rpc";

export default function CustomRpc() {
  const [customRpc, setCustomRpc] = useLocalStorageState(CUSTOM_RPC_URI_KEY, {
    defaultValue: "",
    serializer: { stringify: String, parse: String },
  });
  const [rpc, setRpc] = useState<string>(customRpc);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 p-6 rounded-lg">
      <div className="text-gray-600 dark:text-gray-400 w-full">
        <div className="pr-16">
          To communicate with the network with your personal RPC, add it here and reload the page. This is saved only in
          your browser, locally.
        </div>
        <div className="flex gap-4 ites-center justify-between pt-8">
          <TextInput
            rightIcon={PlugZapIcon}
            value={rpc}
            // @ts-ignore
            onClick={(e) => e.target.select()}
            onChange={(e) => setRpc(e.target.value)}
            placeholder="RPC URL ..."
            className="grow"
          />
          <Button
            onClick={() => {
              setCustomRpc(rpc);
              window.location.reload();
            }}
          >
            Save
          </Button>
        </div>
        <div className="pt-4 text-xs text-gray-500">Leave blank if you want to use the RPC provided by us.</div>
      </div>
    </div>
  );
}

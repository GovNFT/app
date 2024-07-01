import { TextInput } from "flowbite-react";
import { PlugZap as PlugZapIcon } from "lucide-react";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useAccount } from "wagmi";

import ActionLink from "#/components/ActionLink";
import { CUSTOM_RPC_URI_KEY } from "#/rpc";

export default function CustomRpc() {
  const [customRpc, setCustomRpc] = useLocalStorageState(CUSTOM_RPC_URI_KEY, {
    defaultValue: "",
    serializer: { stringify: String, parse: String },
  });
  const [rpc, setRpc] = useState<string>(customRpc);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 p-6 rounded-lg">
      <div className="flex justify-between items-center gap-8 text-gray-600 dark:text-gray-400">
        <div className="w-full">
          <div className="pb-4">
            To communicate with the network with your personal RPC, add it here and reload the page. This is saved only
            in your browser, locally.
          </div>

          <div className="flex justify-between">
            <TextInput
              className="w-4/5"
              rightIcon={PlugZapIcon}
              value={rpc}
              // @ts-ignore
              onClick={(e) => e.target.select()}
              onChange={(e) => setRpc(e.target.value)}
              placeholder="RPC URL ..."
            />
            <ActionLink
              useButton={true}
              onClick={() => {
                setCustomRpc(rpc);
                window.location.reload();
              }}
            >
              Save
            </ActionLink>
          </div>

          <div className="pt-3 text-xs opacity-50">Leave blank if you want to use the RPC provided by us.</div>
        </div>
      </div>
    </div>
  );
}

import { TextInput } from "flowbite-react";
import { isEmpty } from "lodash";
import { PlugZap as PlugZapIcon } from "lucide-react";
import useLocalStorageState from "use-local-storage-state";

import { RPC_URI } from "../../constants";

export default function CustomRpc() {
  const [customRpc, setCustomRpc] = useLocalStorageState("customRPC", {
    defaultValue: "",
    serializer: { stringify: String, parse: String },
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 p-6 rounded-lg">
      <div className="flex justify-between items-center gap-8 text-gray-600 dark:text-gray-400">
        <div className="w-full">
          <div className="pb-4">
            To communicate with the network with your personal RPC, add it here
            and reload the page. This is saved only in your browser, locally.
          </div>

          <TextInput
            rightIcon={PlugZapIcon}
            value={customRpc}
            // @ts-ignore
            onClick={(e) => e.target.select()}
            onChange={(e) => setCustomRpc(e.target.value)}
            placeholder="RPC URL ..."
          />
          <div className="pt-3 text-xs opacity-50">
            Leave blank if you want to use the RPC provided by us.
          </div>
        </div>
      </div>
    </div>
  );
}

CustomRpc.getRpc = function () {
  const customRpc = window.localStorage.getItem("customRPC");

  if (isEmpty(customRpc)) {
    return RPC_URI;
  }

  return customRpc;
};

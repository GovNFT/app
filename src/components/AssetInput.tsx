import { Spinner, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { formatUnits, parseUnits } from "viem";

import type { Token } from "#/hooks/types";

import ActionLink from "./ActionLink";
import Amount from "./Amount";
import AssetSelect from "./AssetSelect";
import Toaster from "./Toaster";

export default function AssetInput({
  assets,
  asset,
  setAsset,
  amount,
  setAmount,
  disabled = false,
  title = "",
}: {
  assets: Token[];
  asset: Token | null;
  setAsset: (asset: Token | null) => void;
  amount: bigint;
  setAmount: (amount: bigint) => void;
  disabled?: boolean;
  title?: string;
}) {
  const [invalid, setInvalid] = useState(false);
  const [value, setValue] = useState(formatUnits(amount, asset?.decimals));

  function setFromBalance() {
    if (disabled) {
      return;
    }

    setValue(formatUnits(asset.value, asset.decimals));
  }

  useEffect(() => {
    setInvalid(false);

    let parsedAmount = 0n;

    try {
      parsedAmount = parseUnits(value, asset?.decimals);
    } catch (error) {
      value !== "" && Toaster.toast(error);
    }

    if (parsedAmount !== 0n && asset?.value && asset.value < parsedAmount) {
      setInvalid(true);
    }

    setAmount?.(parsedAmount);
  }, [value, asset, setAmount]);

  return (
    <div>
      <div className="flex flex-row justify-between items-baseline mb-3">
        <div className="text-xs text-gray-600 dark:text-gray-400 grow">{title}</div>
        <div className="text-xs text-right flex gap-3 items-center">
          {!asset && <Spinner size="xs" color="gray" />}

          {asset?.value && (
            <ActionLink className="no-underline" onClick={() => setFromBalance()}>
              <div className="text-gray-500 hover:text-gray-600 hover:dark:text-gray-400 flex gap-1 items-center">
                <div className="text-gray-400 dark:text-gray-600">Available</div>
                <Amount tokenAddress={asset.address} decimals={asset.decimals} amount={asset.value} showLogo={false} />
              </div>
            </ActionLink>
          )}
        </div>
      </div>

      <TextInput
        required={true}
        disabled={disabled}
        value={disabled ? formatUnits(amount || 0n, asset?.decimals) : value}
        // @ts-ignore
        onClick={(e) => e.target.select()}
        onChange={(e) => !disabled && setValue(e.target.value)}
        color={invalid ? "warning" : "gray"}
        addon={<AssetSelect className="w-28" assets={assets} selectedAsset={asset} onSelect={setAsset} />}
      />
    </div>
  );
}

import { Spinner, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { formatUnits, parseUnits } from "viem";

import { Token } from "../hooks/types";
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
  validate = true,
  title = "",
}: {
  assets: Token[];
  asset: Token | null;
  setAsset: (asset: Token | null) => void;
  amount: bigint;
  setAmount: (amount: bigint) => void;
  disabled?: boolean;
  validate?: boolean;
  title?: string;
}) {
  const [invalid, setInvalid] = useState(false);

  const [value, setValue] = useState(formatUnits(amount, asset?.decimals));

  function setFromBalance() {
    if (disabled) {
      return;
    }

    setValue(asset?.formatted);
  }

  useEffect(() => {
    setInvalid(false);

    let parsedAmount = parseUnits("0", asset?.decimals);

    try {
      parsedAmount = parseUnits(value, asset?.decimals);
    } catch (error) {
      value !== "" && Toaster.toast(error);
    }

    // @ts-ignore
    if (parsedAmount !== 0 && asset?.value && asset.value < parsedAmount) {
      if (validate) {
        setFromBalance();
      }
      setInvalid(true);
    }

    if (!validate) {
      setAmount(parsedAmount);
    }
  }, [value, asset, validate, setAmount]);

  return (
    <div>
      <div className="flex flex-col gap-1.5 sm:flex-row justify-between items-baseline mb-3">
        <div className="text-xs text-gray-600 dark:text-gray-400 grow">{title}</div>
        <div className="text-xs text-right flex gap-3 items-center">
          {!asset && <Spinner size="xs" color="gray" />}

          {asset?.value && (
            <ActionLink className="no-underline" onClick={() => setFromBalance()}>
              Available{" "}
              <Amount
                tokenAddress={asset.address}
                decimals={asset.decimals}
                amount={asset.value}
                symbol={asset.symbol}
                showLogo={false}
              />
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

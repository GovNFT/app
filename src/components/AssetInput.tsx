import { Spinner, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { formatUnits, parseUnits } from "viem";

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

    // @ts-ignore
    let parsedAmount = parseUnits("0");

    try {
      // @ts-ignore
      parsedAmount = parseUnits(value);
    } catch (error) {
      value !== "" && Toaster.toast(error);
    }

    if (
      // @ts-ignore
      parsedAmount == 0 &&
      asset?.value
      // TODO: Make input validate above max amount, that thing below is not working
      // && asset.value.lt(parsedAmount)
    ) {
      if (validate) {
        setFromBalance();
      }
      setInvalid(true);
    }

    if (!validate) {
      setAmount?.(parsedAmount);
    }
  }, [value, asset]);

  return (
    <div>
      <div className="flex flex-col gap-1.5 sm:flex-row justify-between items-baseline mb-3">
        <div className="text-xs opacity-30 dark:opacity-20 grow">{title}</div>
        <div className="text-xs opacity-80 text-right flex gap-3 items-center">
          {!asset && <Spinner size="xs" color="gray" />}

          {asset && asset?.value && (
            <ActionLink
              className="no-underline"
              onClick={() => setFromBalance()}
            >
              Available{" "}
              <Amount
                tokenAddress={asset.address}
                amount={asset.formatted}
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
        value={disabled ? formatUnits(amount || 0, asset?.decimals) : value}
        // @ts-ignore
        onClick={(e) => e.target.select()}
        onChange={(e) => !disabled && setValue(e.target.value)}
        color={invalid ? "warning" : "gray"}
        addon={
          <AssetSelect
            className="w-28"
            assets={assets}
            selectedAsset={asset}
            onSelect={setAsset}
          />
        }
      />
    </div>
  );
}

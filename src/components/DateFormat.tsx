import dayjs, { Dayjs } from "dayjs";
import { formatUnits } from "viem";

export default function DateFormat({
  ts,
}: {
  ts: Dayjs | bigint;
}) {
  if (!ts) {
    return <></>;
  }

  const parsed = dayjs.isDayjs(ts) ? ts : dayjs.unix(Number(ts));

  return <>{parsed.format("MMM DD, YYYY")}</>;
}

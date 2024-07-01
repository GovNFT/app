import dayjs, { type Dayjs } from "dayjs";

export default function DateFormat({
  ts,
}: {
  ts: Dayjs | bigint | number;
}) {
  if (!ts) {
    return <></>;
  }

  const parsed = dayjs.isDayjs(ts) ? ts : dayjs.unix(Number(ts));

  return <>{parsed.format("MMM DD, YYYY")}</>;
}

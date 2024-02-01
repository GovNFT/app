import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Tooltip } from "flowbite-react";

/* Enable relative time plugin */
dayjs.extend(relativeTime);

export default function DateFromNow({ ts, prefix = "", pastPrefix = "", deltaDays = 0, tooltip = true }) {
  if (!ts) {
    return <></>;
  }

  const parsed = dayjs.isDayjs(ts) ? ts : dayjs.unix(ts);
  const date = parsed.add(deltaDays, "day");
  const tooltipContent = date.toDate().toString();

  const Wrapper = tooltip ? Tooltip : "span";

  if (date.isBefore()) {
    return (
      <Wrapper content={tooltipContent}>
        {pastPrefix} {date.fromNow()}
      </Wrapper>
    );
  }
  return (
    <Wrapper content={tooltipContent}>
      {prefix} {date.fromNow(true)}
    </Wrapper>
  );
}

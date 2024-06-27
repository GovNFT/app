import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import { useCallback, useMemo, useState } from "react";

import type { Interval } from "./types";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export const useDuration = (initialInterval: Interval, initialDuration = 0) => {
  //note setDuration is not exposed outside this hook
  const [duration, setDuration] = useState<number>(initialDuration); //stored in seconds
  const [interval, setInterval] = useState<Interval>(initialInterval);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleDuration = useCallback(
    (value: string) => {
      const amount = Number.parseFloat(value);
      //this condition is to allow an empty input field where value would be `""`
      if (Number.isNaN(amount)) {
        setDuration(0);
        setIsEmpty(true);
        return;
      }
      setIsEmpty(false);
      setDuration(dayjs.duration({ [interval]: amount }).asSeconds());
    },
    [interval],
  );
  //derive displayed vesting from single state var to not duplicate state
  const displayedDuration = useMemo(() => {
    if (isEmpty) return 0;

    const dayJSDur = dayjs.duration({ seconds: duration });
    if (interval === "years") {
      return dayJSDur.asYears();
    }
    if (interval === "months") {
      return dayJSDur.asMonths();
    }
    if (interval === "weeks") {
      return dayJSDur.asWeeks();
    }
    return dayJSDur.asDays();
  }, [duration, interval, isEmpty]);

  return [duration, handleDuration, interval, setInterval, displayedDuration] as const;
};

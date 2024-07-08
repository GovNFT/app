import { Timeline } from "flowbite-react";
import { AlertTriangle as AlertTriangleIcon, Check as CheckIcon, Hourglass as HourglassIcon } from "lucide-react";

export default function FlowPoint({ value, icon = null, error = false }) {
  let PIcon = value ? CheckIcon : HourglassIcon;
  let pColor = value ? "!text-green-500" : "!text-amber-400 animate-pulse";

  if (error) {
    PIcon = AlertTriangleIcon;
    pColor = "!text-red-600";
  }

  // Overwrite any default icons...
  if (icon) {
    PIcon = icon;
  }

  return <Timeline.Point icon={() => <PIcon size={12} className={pColor} />} />;
}

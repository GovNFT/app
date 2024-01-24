import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import dayjs from "dayjs";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

export default function Chart({
  vestingDuration,
  vestingInterval,
  cliffDuration,
  cliffInterval,
  selectedStartDate,
}) {
  const startDate = dayjs(selectedStartDate);
  const endDate = dayjs(startDate).add(vestingDuration, vestingInterval);
  const cliffDate = dayjs(startDate).add(cliffDuration, cliffInterval);

  const options = {
    // responsive: true,
    // @ts-ignore
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)",
          padding: 10,
        },
      },
      y: {
        position: "right",
        beginAtZero: true,
        ticks: {
          display: true,
          font: {
            size: 10,
          },
          callback: function (value) {
            return " -  " + value + "%";
          },
        },
      },
    },
  };

  const totalWeeks = endDate.diff(startDate, "weeks");
  const clifWeeks = cliffDate.diff(startDate, "weeks");
  const cliff = (clifWeeks / totalWeeks) * 100;

  const labels = [
    startDate.format("MMM YYYY"),
    "•",
    "•",
    "•",
    "•",
    endDate.format("MMM YYYY"),
  ];

  const vestingData =
    (cliff == 0 && [0, 20, 40, 60, 80, 100]) ||
    (cliff > 0 && cliff <= 20 && [NaN, 20, 40, 60, 80, 100]) ||
    (cliff > 20 && cliff <= 40 && [NaN, NaN, 40, 60, 80, 100]) ||
    (cliff > 40 && cliff <= 60 && [NaN, NaN, NaN, 60, 80, 100]) ||
    (cliff > 60 && [NaN, NaN, NaN, NaN, 80, 100]);

  const cliffData =
    cliff > 0 && cliff <= 20
      ? [0, 100]
      : NaN || (cliff > 20 && cliff <= 40)
      ? [0, 0, 100]
      : NaN || (cliff > 40 && cliff <= 60)
      ? [0, 0, 0, 100]
      : NaN || (cliff > 60 && cliff <= 80)
      ? [0, 0, 0, 0, 100]
      : NaN || (cliff > 80 && cliff <= 100)
      ? [0, 0, 0, 0, 100]
      : NaN;

  const data = {
    labels,
    datasets: [
      {
        label: "Vesting",
        data: vestingData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235)",
        borderWidth: 1,
        radius: 2,
        fill: "start",
      },
      {
        label: "Cliff",
        data: cliffData,
        borderDash: [1, 3],
        borderColor: "rgb(250, 218, 94)",
        backgroundColor: "rgba(250, 218, 94)",
        borderWidth: 1,
        radius: 2,
        stepped: true,
      },
    ],
  };

  if (dayjs(cliffDate).isAfter(dayjs(endDate))) {
    return (
      <div className="my-8 text-xs bg-black/5 dark:bg-black/5 p-6 text-center">
        Cliff can't be higher then the vesting period.
      </div>
    );
  }

  return (
    <div className="my-8 text-xs">
      {/* @ts-ignore */}
      <Line options={options} data={data} />
    </div>
  );
}

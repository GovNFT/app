import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement } from "chart.js";
import dayjs, { type Dayjs } from "dayjs";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

export default function Chart({
  vestingDuration,
  cliffDuration,
  startDate,
}: {
  vestingDuration: number;
  cliffDuration: number;
  startDate: Dayjs | null;
}) {
  const endDate = dayjs(startDate).add(vestingDuration, "seconds");
  const cliffDate = dayjs(startDate).add(cliffDuration, "seconds");

  const options = {
    responsive: true,
    // @ts-ignore
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "rgba(127, 127, 127)",
        },
      },
      y: {
        position: "right",
        beginAtZero: true,
        ticks: {
          color: "rgba(127, 127, 127)",
          display: true,
          font: {
            size: 10,
          },
          callback: (value) => ` -  ${value} %`,
        },
      },
    },
  };

  const totalWeeks = endDate.diff(startDate, "weeks");
  const clifWeeks = cliffDate.diff(startDate, "weeks");
  const cliff = (clifWeeks / totalWeeks) * 100;

  const labels = [startDate.format("MMM YYYY"), "•", "•", "•", "•", endDate.format("MMM YYYY")];

  const vestingData =
    // Display 6 nodes on the graph.
    // If Cliff is set, we will hide the graph based on the Cliff percentage.

    // No cliff
    (cliff === 0 && [0, 20, 40, 60, 80, 100]) ||
    // Cliff 0 to 20 percent
    (cliff > 0 && cliff <= 20 && [Number.NaN, 20, 40, 60, 80, 100]) ||
    // Cliff 20 to 40 percent
    (cliff > 20 && cliff <= 40 && [Number.NaN, Number.NaN, 40, 60, 80, 100]) ||
    // Cliff 40 to 60 percent
    (cliff > 40 && cliff <= 60 && [Number.NaN, Number.NaN, Number.NaN, 60, 80, 100]) ||
    // Cliff higher than 60 percent
    (cliff > 60 && [Number.NaN, Number.NaN, Number.NaN, Number.NaN, 80, 100]);

  const cliffData =
    // Calculat ethe length of the cliff.

    // Cliff 0 to 20 percent
    cliff > 0 && cliff <= 20
      ? [0, 100]
      : Number.NaN ||
          // Cliff 20 to 40 percent
          (cliff > 20 && cliff <= 40)
        ? [0, 0, 100]
        : Number.NaN ||
            // Cliff 40 to 60 percent
            (cliff > 40 && cliff <= 60)
          ? [0, 0, 0, 100]
          : Number.NaN ||
              // Cliff 60 to 100 percent
              (cliff > 60 && cliff <= 100)
            ? [0, 0, 0, 0, 100]
            : Number.NaN;

  const data = {
    labels,
    datasets: [
      {
        label: "Vesting",
        data: vestingData,
        borderColor: "rgb(78, 157, 114)",
        backgroundColor: "rgba(78, 157, 114)",
        borderWidth: 1,
        radius: 2,
        fill: "start",
      },
      {
        label: "Cliff",
        data: cliffData,
        borderDash: [1, 3],
        borderColor: "rgb(127, 127, 127)",
        backgroundColor: "rgba(127, 127, 127)",
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

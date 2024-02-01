import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement } from "chart.js";
import dayjs, { Dayjs } from "dayjs";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

export default function Chart({
  vestingDuration,
  vestingInterval,
  cliffDuration,
  cliffInterval,
  startDate,
}: {
  vestingDuration: number;
  vestingInterval: string;
  cliffDuration: number;
  cliffInterval: string;
  startDate: Dayjs | null;
}) {
  // @ts-ignore
  const endDate = dayjs(startDate).add(vestingDuration, vestingInterval);
  // @ts-ignore
  const cliffDate = dayjs(startDate).add(cliffDuration, cliffInterval);

  console.log(typeof startDate);

  const options = {
    responsive: true,
    // @ts-ignore
    scales: {
      x: {
        ticks: {
          color: "rgba(90,90,90)",
          padding: 20,
        },
      },
      y: {
        position: "right",
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          color: "rgba(90,90,90)",
          display: true,
          font: {
            size: 9,
          },
          callback: (value) => `      ${value} %`,
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
    (cliff > 0 && cliff <= 20 && [NaN, 20, 40, 60, 80, 100]) ||
    // Cliff 20 to 40 percent
    (cliff > 20 && cliff <= 40 && [NaN, NaN, 40, 60, 80, 100]) ||
    // Cliff 40 to 60 percent
    (cliff > 40 && cliff <= 60 && [NaN, NaN, NaN, 60, 80, 100]) ||
    // Cliff higher than 60 percent
    (cliff > 60 && [NaN, NaN, NaN, NaN, 80, 100]);

  const cliffData =
    // Calculat ethe length of the cliff.

    // Cliff 0 to 20 percent
    cliff > 0 && cliff <= 20
      ? [0, 100]
      : NaN ||
          // Cliff 20 to 40 percent
          (cliff > 20 && cliff <= 40)
        ? [0, 0, 100]
        : NaN ||
            // Cliff 40 to 60 percent
            (cliff > 40 && cliff <= 60)
          ? [0, 0, 0, 100]
          : NaN ||
              // Cliff 60 to 100 percent
              (cliff > 60 && cliff <= 100)
            ? [0, 0, 0, 0, 100]
            : NaN;

  const data = {
    labels,
    datasets: [
      {
        label: "Vesting",
        data: vestingData,
        borderColor: "rgb(21, 128, 61)",
        backgroundColor: "rgba(21, 128, 61)",
        borderWidth: 1,
        radius: 3,
        fill: true,
      },
      {
        label: "Cliff",
        data: cliffData,
        borderDash: [1, 3],
        borderColor: "rgb(251, 191, 36)",
        backgroundColor: "rgba(251, 191, 36)",
        borderWidth: 1,
        radius: 3,
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

import "chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm";

import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";
import dayjs from "dayjs";
import { format, from } from "dnum";
import { Line } from "react-chartjs-2";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function Graph({
  vestingDuration,
  vestingInterval,
  cliffDuration,
  cliffInterval,
  selectedStartDate,
  amount,
}) {
  const startDate = dayjs(selectedStartDate);
  const endDate = dayjs(startDate).add(vestingDuration, vestingInterval);
  const cliffDate = dayjs(startDate).add(cliffDuration, cliffInterval);

  const totalWeeks = endDate.diff(startDate, "weeks");
  const clifWeeks = cliffDate.diff(startDate, "weeks");
  const cliffPercentage = (clifWeeks / totalWeeks) * 100;

  const tooltip = (tooltipItems) => {
    let vested = "0";
    const totalAmount = format(from([amount, 18]), 5);
    const cliffAmount = (Number(totalAmount) / 100) * Number(cliffPercentage);

    // @ts-ignore
    const clifVestedAmount = format(from([cliffAmount]), 5);

    tooltipItems.forEach(function (tooltipItem) {
      if (tooltipItem.dataIndex === 2) {
        vested = totalAmount;
      } else if (tooltipItem.dataIndex === 1) {
        vested = clifVestedAmount;
      } else if (tooltipItem.dataIndex === 0) {
        vested = "0";
      }
    });

    return "Amount: " + vested;
  };

  const options = {
    responsive: true,
    animation: false,
    tooltips: {},
    // @ts-ignore
    scales: {
      x: {
        display: true,
        beginAtZero: true,
        type: "time",
        time: {
          unit: "year",
        },
        grid: {
          display: false,
        },
      },
      y: {
        position: "right",
        beginAtZero: true,
        ticks: {
          display: true,
          callback: function (value) {
            return "-  " + value + "%";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          footer: tooltip,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  const labels = [
    startDate.format("YYYY-MM-DD"),
    cliffDate.format("YYYY-MM-DD"),
    endDate.format("YYYY-MM-DD"),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Vesting",
        data: [NaN, cliffPercentage, 100],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235)",
        borderWidth: 1,
        radius: 2,
      },
      {
        label: "Cliff",
        data: cliffDuration == 0 ? NaN : [0, 100],
        borderDash: [1, 3],
        borderColor: "rgb(250, 218, 94)",
        backgroundColor: "rgba(250, 218, 94)",
        borderWidth: 1,
        radius: 2,
        stepped: true,
      },
    ],
  };

  if (dayjs(startDate).isAfter(dayjs(endDate))) {
    return (
      <div className="my-8 text-xs bg-black/5 dark:bg-black/5 p-6 text-center">
        Vesting Duration error
      </div>
    );
  }

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

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import dayjs from "dayjs";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

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

  const totalWeeks = endDate.diff(startDate, "weeks");
  const clifWeeks = cliffDate.diff(startDate, "weeks");
  const cliffPercentage = (clifWeeks / totalWeeks) * 100;

  const options = {
    responsive: true,
    // @ts-ignore
    scales: {
      x: {
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
            return " —  " + value + "%";
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = [
    startDate.format("MMM YYYY"),
    cliffDate.format("MMM YYYY"),
    endDate.format("MMM YYYY"),
  ];

  const vestingData =
    cliffDuration == 0 ? [0, 50, 100] : [NaN, cliffPercentage, 100];
  const cliffData = cliffDuration == 0 ? NaN : [0, 100];

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

// x: ...
// type: "line",
// time: {
//   parser: 'YYYY-MM-DD',
//   displayFormats: { month: 'MMM YYYY' },
//   tooltipFormat: 'DD/MM/YY',
//   unit: 'month',
// },

// ticks: {
//   autoSkip: true,
//   maxTicksLimit: 3,
// },
import React, {useState} from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Dropdown from "./dropdown.component";

const data_1 = {
  labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
  datasets: [
    {
      data: [250, 350, 300, 400, 450, 400],
      fill: false,
      borderColor: "#E9A0A0",
      tension: 0.4,
    },
    {
      data: [150, 250, 350, 450, 350, 250],
      fill: false,
      borderColor: "#9BDD7C",
      tension: 0.4,
    },
  ],
};


const data_2 = {
  labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
  datasets: [
    {
      data: [100, 200, 150, 250, 300, 250],
      fill: false,
      borderColor: "#E9A0A0",
      tension: 0.4,
    },
    {
      data: [50, 150, 200, 100, 80, 100],
      fill: false,
      borderColor: "#9BDD7C",
      tension: 0.4,
    },
  ],
};


const data_3 = {
  labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
  datasets: [
    {
      data: [150, 250, 200, 300, 350, 300],
      fill: false,
      borderColor: "#E9A0A0",
      tension: 0.4,
    },
    {
      data: [70, 200, 250, 150, 100, 150],
      fill: false,
      borderColor: "#9BDD7C",
      tension: 0.4,
    },
  ],
};


const options = {
    layout: {
        padding: 0,
      },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        color: "#858585",
        font: {
            size: 14
        }
      },
      grid: {
        display: false, // hide x-axis vertical grid lines
      },
      border: {
        display: false, // hide x-axis border
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        padding: 8,
        color: "#858585",
        stepSize: 100,
        suggestedMax: 500,
        suggestedMin: 0,
        font: {
            size: 14
        }
      },
      border: {
        display: false, // hide x-axis vertical grid lines
      },
    },
  },
};

const Graph = () => {
  const [data, setData] = useState({
    labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
    datasets: [
      {
        data: [250, 350, 300, 400, 450, 400],
        fill: false,
        borderColor: "#E9A0A0",
        tension: 0.4,
      },
      {
        data: [150, 250, 350, 450, 350, 250],
        fill: false,
        borderColor: "#9BDD7C",
        tension: 0.4,
      },
    ],
  })

  const handleOptionSelect = (option) => {
    // Logic to handle selected option in parent component
    console.log('Selected Option:', option);
    if (option === 'Jan - Feb 2021') setData(data_1)
    if (option === 'Mar - April 2021') setData(data_2)
    if (option === 'May - June 2021') setData(data_3)

  };

  return (
    <div className="h-[400px] bg-white rounded-2xl ml-8 mr-8 xl:mr-16 mt-10">
      <div className="relative pt-7 pl-10">
        <h2 className="text-lg font-bold text-black tracking-wide">
          Activities
        </h2>
        <Dropdown
          options={["May - June 2021", "Jan - Feb 2021", "Mar - April 2021"]}
          className="w-[128px] mt-1"
          onOptionSelect={handleOptionSelect} 
        />
        <div className="absolute right-2 top-8 min-[396px]:right-4 sm:right-14 min-[396px]:top-10 flex justify-center items-center">
          <div className="flex justify-center items-center mr-3">
            <div className="w-5 h-[22px]">
              <span className="inline-block w-3 h-3 bg-[#E9A0A0] rounded-full"></span>
            </div>
            <span className="font-lato text-sm font-regular text-black">
              Guest
            </span>
          </div>
          <div>
            <div className="flex justify-center items-center mr-3">
              <div className="w-5 h-[22px]">
                <span className="inline-block w-3 h-3 bg-[#9BDD7C] rounded-full"></span>
              </div>
              <span className="font-lato text-sm font-regular text-black">
                User
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-x-auto no-scrollbar">
      <div className="font-lato pl-8 pr-12 pt-4 min-w-[964px] w-full h-[280px]">
        <Line
          data={data}
          options={options}
        />
      </div>
      </div>
    </div>
  );
};

export default Graph;

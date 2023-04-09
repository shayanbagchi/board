import React, {useState} from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Dropdown from "./dropdown.component";

const data_1 = {
  datasets: [
    {
      data: [55, 31, 14],
      backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      hoverBackgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
    },
  ],
};

const data_2 = {
  datasets: [
    {
      data: [60, 25, 15],
      backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      hoverBackgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
    },
  ],
};

const data_3 = {
  datasets: [
    {
      data: [30, 40, 30],
      backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      hoverBackgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
    },
  ],
};

const options = {
  responsive: true,
  width: 146,
  height: 146,
};

function PieChart() {
  const [data, setData] = useState({
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
        hoverBackgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      },
    ],
  })

  const handleOptionSelect = (option) => {
    // Logic to handle selected option in parent component
    if (option === 'Jan - Feb 2021') setData(data_1)
    if (option === 'Mar - April 2021') setData(data_2)
    if (option === 'May - June 2021') setData(data_3)

  };

  return (
    <div className="w-auto mx-8 md:mx-0 md:w-[480px] h-[256px] mb-8 md:mb-0 bg-white rounded-2xl">
      <div className="w-full flex justify-between px-10 pt-8">
        <p className="text-[18px] font-bold text-black">Top Products</p>
        <Dropdown
          options={["May - June 2021", "Jan - Feb 2021", "Mar - April 2021"]}
          className="w-[128px] mt-1"
          onOptionSelect={handleOptionSelect}
        />
      </div>
      <div className="flex">
        <div className="w-[146px] h-[146px] mx-2 mt-1 min-[396px]:mx-4 min-[396px]:mt-2 sm:ml-10 sm:mt-6 sm:mb-8">
          <Pie data={data} options={options} />
        </div>
        <div className="mx-2 mt-1 min-[396px]:mx-4 min-[396px]:mt-6 sm:ml-16 sm:mt-8">
          <div className="flex items-center">
            <div className="w-5 h-[22px]">
              <span className="inline-block w-3 h-3 bg-[#98D89E] rounded-full"></span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-black">Basic Tees</span>
          </div>
          <div className="pl-5">
            <span className="font-lato text-[12px] font-normal text-[#858585]">{data.datasets[0].data[0]}%</span>
          </div>

          <div className="flex items-center">
            <div className="w-5 h-[22px]">
              <span className="inline-block w-3 h-3 bg-[#F6DC7D] rounded-full"></span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-black">
              Custom Short Pants
            </span>
          </div>
          <div className="pl-5">
            <span className="font-lato text-[12px] font-normal text-[#858585]">{data.datasets[0].data[1]}%</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-[22px]">
              <span className="inline-block w-3 h-3 bg-[#EE8484] rounded-full"></span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-black">Super Hoodies</span>
          </div>
          <div className="pl-5">
            <span className="font-lato text-[12px] font-normal text-[#858585]">{data.datasets[0].data[2]}%</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PieChart;

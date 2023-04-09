import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Dropdown from "./dropdown.component";

function PieChart() {
  const data = {
    datasets: [
      {
        data: [55, 31, 14],
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

  return (
    <div className="w-auto mx-8 md:mx-0 md:w-[480px] h-[256px] mb-8 md:mb-0 bg-white rounded-2xl">
      <div className="w-full flex justify-between px-10 pt-8">
        <p className="text-[18px] font-bold text-black">Top Products</p>
        <Dropdown
          options={["May - June 2021", "Jan - Feb 2021", "Mar - April 2021"]}
          className="w-[128px] mt-1"
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
            <span className="font-lato text-[12px] font-normal text-[#858585]">65%</span>
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
            <span className="font-lato text-[12px] font-normal text-[#858585]">65%</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-[22px]">
              <span className="inline-block w-3 h-3 bg-[#EE8484] rounded-full"></span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-black">Super Hoodies</span>
          </div>
          <div className="pl-5">
            <span className="font-lato text-[12px] font-normal text-[#858585]">65%</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PieChart;

import React from "react";
import { ReactComponent as ChevronRightIcon } from "../assets/chevron_right_icon.svg";

function Schedule() {
  return (
    <div className="w-auto mx-8 md:mx-0 md:w-[480px] h-[256px] mb-8 md:mb-0 bg-white rounded-2xl">
      <div className="w-full flex justify-between items-center px-10 pt-8">
        <p className="text-[18px] font-bold text-black">Today's schedule</p>
        <div className={`relative inline-block`}>
          <button
            type="button"
            className="flex items-center justify-between w-full text-sm text-[#858585] font-normal focus:outline-none"
          >
            <span>See All</span>
            <ChevronRightIcon className="w-2 h-2 ml-1" />
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="mx-6 sm:ml-10 mt-6">

          <div className="flex items-center mb-3">
            <div className="inline-block w-[6px] h-[70px] bg-[#98D89E]"></div>
            <div className="h-[70px] pl-4">
              <span className="text-xs md:text-sm font-bold text-[#666666] pb-1">
                Meeting with suppliers from Kuta Bali
              </span>
              <span className="block text-xs font-normal text-[#999999] pb-1">
                14:00-15:00
              </span>
              <span className="block text-xs font-normal text-[#999999]">
                at Sunset Road, Kuta, Bali
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="inline-block w-[6px] h-[70px] bg-[#6972C3]"></div>
            <div className="h-[70px] pl-4">
              <span className="text-xs md:text-sm font-bold text-[#666666] pb-1">
                Check operation at Giga Factory 1
              </span>
              <span className="block text-xs font-normal text-[#999999] pb-1">
                18:00-20:00
              </span>
              <span className="block text-xs font-normal text-[#999999]">
                at Central Jakarta 
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Schedule;

import React from "react";
import { ReactComponent as DashboardIcon } from "../assets/dashboard_icon.svg";
import { ReactComponent as TransactionsIcon } from "../assets/transaction_icon.svg";
import { ReactComponent as SchedulesIcon } from "../assets/schedule_icon.svg";
import { ReactComponent as UsersIcon } from "../assets/user_icon.svg";
import { ReactComponent as SettingsIcon } from "../assets/setting_icon.svg";
import { ReactComponent as CloseIcon } from "../assets/close-icon.svg";


function SideBarMobile({toggleSidebar}) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="w-4/5 h-[90%] bg-black rounded-2xl">
        <div className="flex justify-end mt-8 mr-8">
          <CloseIcon className="cursor-pointer" onClick={() => toggleSidebar()} />
        </div>
        <h1 className="text-4xl font-bold text-white pl-12 pt-14">Board.</h1>
        <ul className="mt-12 pl-12">
          <li className="flex items-center py-3">
            <DashboardIcon />
            <a
              href="#"
              className="pl-5 text-white font-normal text-lg focus:font-bold"
            >
              Dashboard
            </a>
          </li>
          <li className="flex items-center py-3">
            <TransactionsIcon />
            <a
              href="#"
              className="pl-5 text-white font-normal text-lg focus:font-bold"
            >
              Transactions
            </a>
          </li>
          <li className="flex items-center py-3">
            <SchedulesIcon />
            <a
              href="#"
              className="pl-5 text-white font-normal text-lg focus:font-bold"
            >
              Schedules
            </a>
          </li>
          <li className="flex items-center py-3">
            <UsersIcon />
            <a
              href="#"
              className="pl-5 text-white font-normal text-lg focus:font-bold"
            >
              Users
            </a>
          </li>
          <li className="flex items-center py-3">
            <SettingsIcon />
            <a
              href="#"
              className="pl-5 text-white font-normal text-lg focus:font-bold"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBarMobile;

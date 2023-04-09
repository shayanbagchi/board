import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";
import { ReactComponent as NotificationIcon } from "../assets/notification_icon.svg";
import { ReactComponent as MenuIcon } from "../assets/menu_icon.svg";
import SideBarMobile from "./mobileSidebar.component";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Add state to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the state on menu icon click
  };

  return (
    <div className="w-full">
      {isSidebarOpen ? (
        <SideBarMobile toggleSidebar={toggleSidebar} />
      ) : (
        <nav className="flex justify-between items-center h-8 ml-8 mr-8 xl:mr-16 mt-10 xl:mt-16">
          <div className="flex items-center">
            <div
              className="block xl:hidden m-2 hover:cursor-pointer z-100"
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </div>
            <div className="hidden sm:block sm:ml-4">
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block relative">
              <input
                className="appearance-none rounded-xl w-full py-2 px-3 font-lato font-normal text-base leading-tight bg-white focus:outline-none placeholder:text-base placeholder:text-[#B0B0B0]"
                type="text"
                placeholder="Search..."
              />
              <div className="absolute top-0 right-0 px-3 py-2">
                <button type="submit" className="focus:outline-none">
                  <SearchIcon />
                </button>
              </div>
            </div>
            <div className="block sm:hidden">
              <SearchIcon />
            </div>
            <div className="flex justify-center items-center h-10 rounded-full ml-7 cursor-pointer">
              <NotificationIcon />
            </div>
            <div className="profile-icon w-10 h-10 ml-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-sm cursor-pointer">
              SB
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default NavBar;

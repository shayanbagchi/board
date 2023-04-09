import React from "react";
import SideBar from "./sidebar.component";
import NavBar from "./navbar.component";
import CardContainer from "./cardContainer.component";
import Graph from "./graph.component";
import PieChart from "./piechart.component";
import Schedule from "./schedule.component";

function Dashboard() {
  return (
    <div className="relative flex w-screen h-[100%] bg-bgwhite overflow-y-auto">
      <SideBar />
      <div className="fixed top-0 bottom-0 right-0 w-full xl:w-3/4 overflow-y-auto">
        <NavBar />
        <CardContainer />
        <Graph />
        <div className="flex flex-wrap justify-center md:justify-around xl:justify-between md:ml-8 md:mr-16 mt-10">
          <div className="w-full md:w-auto mb-8 md:mb-10 md:m-2">
            <PieChart />
          </div>
          <div className="w-full md:w-auto mb-8 md:mb-10 md:m-2">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

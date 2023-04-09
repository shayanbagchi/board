import React from "react";

function Card({color, icon, query, data}) {    
  return (
    <div className="w-full sm:w-[220px] md:w-[220px] lg:w-[220px] h-[120px] rounded-[20px] shadow mx-2 my-4 sm:mx-2 sm:my-4 md:mx-2 md:my-4 lg:mx-2 lg:my-4 py-4 px-6" style={{ backgroundColor: `${color}` }}>
      <div className="flex justify-end">
        <span className="h-6 w-auto">{icon}</span>
      </div>
      <div className="text-left py-4">
        <p className="font-lato text-black font-normal text-sm">Total {query}</p>
        <p className="text-black font-bold text-2xl">{data}</p>
      </div>
    </div>
  );
}

export default Card;
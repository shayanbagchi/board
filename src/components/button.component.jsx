import React from "react";
import { Link } from "react-router-dom";

function Button({ icon, text }) {

  return (
    <Link to={"/dashboard"}>
      <div
        className={`flex w-44 h-8 bg-white rounded-xl hover:cursor-pointer`}
      >
        <span className="py-2 pl-4">{icon}</span>
        <span className="py-2 pl-3 font-normal text-xs text-[#858585]">
          {" "}
          Sign in with {text}
        </span>
      </div>
    </Link>
  );
}

export default Button;

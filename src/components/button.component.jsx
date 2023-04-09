import React from "react";

function Button({ icon, text, margin }) {

  const smMargin = (margin === undefined) ? 0 : (margin - 13);
  const bgMargin = (margin === undefined) ? 0 : margin;

  return (
    <div
      className={`flex w-44 h-8 bg-white rounded-xl mr-[${smMargin}px] sm:mr-[${bgMargin}px] hover:cursor-pointer`}
    >
      <span className="py-2 pl-4">{icon}</span>
      <span className="py-2 pl-3 font-normal text-xs text-[#858585]">
        {" "}
        Sign in with {text}
      </span>
    </div>
  );
}

export default Button;
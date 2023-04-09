import React from "react";
import SignIn from "./signIn.component";


function Home() {
  return (
    <>
      <div className="hidden lg:flex justify-center items-center w-full lg:w-2/5 h-full bg-black">
        <h1 className="font-bold text-4xl md:text-7xl text-white">Board.</h1>
      </div>
      <div className="flex w-full lg:w-3/5 h-full bg-bgwhite">
        <SignIn />
      </div>
    </>
  );
}

export default Home;

import React from "react";
import Button from "./button.component";
import { ReactComponent as Google } from "../assets/google-icon.svg";
import { ReactComponent as Apple } from "../assets/apple-icon.svg";
import SignInForm from "./signInForm.component";

function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[380px]">
        <p className="text-2xl md:text-4xl font-bold">Sign In</p>
        <p className="font-lato text-base font-normal">
          Sign in to your account
        </p>
      </div>
      <div className="flex my-6">
        <Button icon={<Google />} text={"google"} margin={25} />
        <Button icon={<Apple />} text={"apple"} />
      </div>
      <div className="w-full md:w-[380px] h-80">
        <SignInForm />
        <div className="flex justify-center items-center my-5">
          <p className="font-lato text-base font-normal mr-1">
            Don't have an account?
          </p>
          <a
            className="font-lato font-normal text-base text-link-blue hover:underline hover:underline-offset-2"
            href="#"
          >
            Register here
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

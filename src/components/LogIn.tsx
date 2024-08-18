import React from "react";

const LogIn = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="m-4">
        <div className="rounded-md shadow-lg w-[305px] h-[420px] p-4 md:w-[350px] lg:w-[400px]">
          <h2 className="font-bold text-xl lg:text-2xl ml-[-10px] md:ml-2 lg:ml-8">Log In</h2>
          <form
            action=""
            className="flex flex-col justify-center items-center "
          >
            <div className="form-group mt-4 lg:mt-10 mb-3 text-sm lg:text-lg">
              <label
                htmlFor="username"
                className="text-base font-medium mb-2"
              >
                Email Address or Phone Number
              </label>
              <input
                type="email"
                className="form-control rouded-md  w-[280px] h-12 lg:w-[400] text-sm"
                id="username"
                aria-describedby="emailHelp"
                placeholder="Enter your email or phone number"
              />
            </div>
            <div className="form-group text-sm lg:text-lg">
              <label
                htmlFor="password"
                className="text-base font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-md  w-[280px] h-12 lg:w-[400] text-sm"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-[#DF2B4A] rounded-md w-[280px] lg:w-[400] text-white font-medium text-base lg:text-lg h-12  mt-4 lg:mt-10"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex flex-row text-xs lg:text-[1rem] font-extralight mt-2">
          <span className="hover:underline mr-3 md:mx-5 lg:mx-3">Forget Password?</span>{" "}
          <span className="hover:underline">
            Don't have an account? Sign up here
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

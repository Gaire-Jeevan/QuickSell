import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center ">
      <div className="m-4">
        <div className="rounded-md shadow-lg w-[305px] h-[540px] p-4 md:w-[350px] lg:w-[500px] ">
          <h2 className="font-bold text-xl lg:text-2xl ml-[-10px]  lg:ml-[-3px]">
            Sign Up
          </h2>
          <form
            action=""
            className="flex flex-col justify-center lg:w[400px] ml-[-10px] "
          >
            <div className="form-group mt-4 lg:mt-10 mb-3 text-sm lg:text-lg">
              <label htmlFor="username1" className="text-base font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="form-control rouded-md  w-[280px] h-12 md:w-[320px] lg:w-[450px] text-sm"
                id="username1"
                aria-describedby="emailHelp"
                maxLength={100}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group mb-3 text-sm lg:text-lg">
              <label htmlFor="email" className="text-base font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="form-control rouded-md  w-[280px] h-12 md:w-[320px] lg:w-[450px] text-sm"
                id="username"
                aria-describedby="emailHelp"
                maxLength={50}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group text-sm lg:text-lg">
              <label htmlFor="password" className="text-base font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-md  w-[280px] h-12 md:w-[320px] lg:w-[450px] text-sm"
                id="password"
                maxLength={25}
                minLength={8}
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group text-sm lg:text-lg mt-3">
              <label
                htmlFor="confirmPassword"
                className="text-base font-medium mb-2 "
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control rounded-md  w-[280px] h-12 md:w-[320px] lg:w-[450px] text-sm"
                id="confirmPassword"
                maxLength={25}
                minLength={8}
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-success rounded-md w-[280px] md:w-[320px] lg:w-[450px] text-white font-medium text-base lg:text-lg h-12  mt-4 lg:mt-10"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex flex-row text-xs lg:text-[1rem] font-extralight mt-2">
          <span className="hover:underline ml-10 mr-3 md:ml-16 lg:ml-24 lg:mr-4">
           Already have an account?
          </span>{" "}
          <span className="hover:underline">
            Log in here
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

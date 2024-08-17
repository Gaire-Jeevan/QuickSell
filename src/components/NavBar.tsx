import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mx-4 my-2">
        <p className="text-lg font-bold ">QuickSell</p>

        <ul className="hidden lg:flex lg:flex-row lg:space-x-16">
          <li className="list-item hover:underline font-bold ">Home</li>
          <li className="list-item hover:underline font-bold ">
            Browse Product
          </li>
          <li className="list-item hover:underline font-bold ">
            Sell Your Product
          </li>
          <li className="list-item hover:underline font-bold ">About Us</li>
          <li className="list-item hover:underline font-bold ">Contact Us</li>
        </ul>

        <div className="flex w-44 justify-between">
          <button className="btn btn-success m-0 h-auto">Sign Up</button>
          <button className="btn btn-primary h-auto">Log In</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default NavBar;

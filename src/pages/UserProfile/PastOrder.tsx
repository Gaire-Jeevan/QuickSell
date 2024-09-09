import React from "react";
import sofaset from "../assets/sofaSet.png";

const PastOrder = () => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-medium ">Past Orders</h3>
      <div className="flex shadow-md mt-3 p-2 justify-between items-center mb-2">
        <div className="flex">
          <img
            className="rounded-lg w-[80px] h-[80px]"
            src={sofaset}
            alt="pastOrder"
          />
          <div className="flex flex-col ml-4 mr-2">
            <h4 className="text-lg font-medium">Classic Leather Shoes</h4>
            <p className="flex-1">Order #12345 - Delivered</p>
          </div>
        </div>
        <div className="font-bold text-xl">
          <p>$59.99</p>
        </div>
      </div>
      <div className="flex justify-between shadow-md p-2 items-center mb-2">
        <div className="flex">
          <img
            className="rounded-lg w-[80px] h-[80px]"
            src={sofaset}
            alt="pastOrder"
          />
          <div className="flex flex-col ml-4 mr-2">
            <h4 className="text-lg font-medium">Classic Leather Shoes</h4>
            <p className="">Order #12345 - Delivered</p>
          </div>
        </div>
        <div className="font-bold text-xl">
          <p>$59.99</p>
        </div>
      </div>
    </div>
  );
};

export default PastOrder;

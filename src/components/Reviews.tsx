import React from "react";
import sofaset from "../assets/sofaSet.png";

const Reviews = () => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-medium ">Reviews</h3>
      <div
        className="flex shadow-md p-2 bg-[#f9f9fa] my-3 
      "
      >
        <img
          className="rounded-lg w-[80px] h-[80px]"
          src={sofaset}
          alt="pastOrder"
        />
        <div className="flex flex-col ml-4">
          <h4 className="text-lg font-medium">Classic Leather Shoes</h4>
          <p>
            The leather shoes are very comfortable and durable. I'm impressed
            with the quality.
          </p>
        </div>
      </div>

      <div
        className="flex shadow-md p-2 bg-[#f9f9fa] my-3
      "
      >
        <img
          className="rounded-lg w-[80px] h-[80px]"
          src={sofaset}
          alt="pastOrder"
        />
        <div className="flex flex-col ml-4">
          <h4 className="text-lg font-medium">Classic Leather Shoes</h4>
          <p>
            The leather shoes are very comfortable and durable. I'm impressed
            with the quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

import { useState } from "react";

const SellerLevel = () => {
  const [progress, setProgress] = useState(75); // Set the initial progress

  return (
    <div className="shadow-lg rounded-lg p-4 bg-[#fff] ">
      <div className="mb-5">
        <h2 className="text-3xl font-bold">Seller Level</h2>
        <p className="text-lg">Your current seller status</p>
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-xl">Level 3 Seller</h3>
          <p className="text-xl">750 / 1000 XP</p>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
          <div
            className="bg-black h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mb-5"><p className="text-lg">250 XP needed for Level 4</p></div>

        <div><button className="w-full btn btn-outline-secondary text-black text-lg font-medium">View Benefits</button></div>
      </div>
    </div>
  );
};

export default SellerLevel;

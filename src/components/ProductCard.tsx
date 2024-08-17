import React from "react";
import sofa from "../assets/sofaSet.png";

const ProductCard = () => {
  return (
    <div className="rounded-md shadow-lg bg-[#ffffff] flex flex-col  justify-between p-3 my-3 mx-3">
      <img src={sofa} alt="Vintage Leather Sofa" className="w-full  h-[70%]" />
      <div className="mt-4">
        <h3 className="font-bold text-2xl my-1">Vintage Leather Sofa</h3>
        <p className="mb-2 text-lg">Comfortable and stylish pre-owned sofa in excellent condition.</p>
        <div className="flex justify-between items-center mt-3 ">
          <span className="text-blue-700">$210</span>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

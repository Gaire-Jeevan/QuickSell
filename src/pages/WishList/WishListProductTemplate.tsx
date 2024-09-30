import React from "react";
import sofa from "../../assets/sofaSet.png"
import { FiShoppingCart } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const WishListProductTemplate = () => {
  return (
    <div className="shadow-lg rounded-lg border border-gray-600 p-3">
      {/* product image */}
      <span>
        <img src={sofa} alt="" className="rounded-t-lg transform transition-transform hover:scale-105" />
      </span>

      {/* detail of product */}
      <div className="my-3 flex flex-col space-y-2">
        <span className="text-2xl font-bold">
          <h4>Smartphone</h4>
        </span>
        <span className="text-xl font-medium">
          <p>$599.99</p>
        </span>
      </div>

      {/* buttons */}
      <div className="mt-5 flex justify-between items-center ">
        <span className="btn btn-dark transform transition-transform hover:scale-110 flex justify-between items-center px-3 gap-3">
        <FiShoppingCart size={20}/>
          <button>Add to Cart</button>
        </span>

        <span className="btn btn-outline-secondary transform transition-transform hover:scale-110 flex justify-between items-center px-3 gap-1">
        <RxCross1 />
          <button>Remove</button>
        </span>
      </div>
    </div>
  );
};

export default WishListProductTemplate;

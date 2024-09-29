import sofa from "../../assets/sofaSet.png";

import { FaStar } from "react-icons/fa";

const productCard = () => {
  return (
    // total product page
    <div className="shadow-lg rounded-lg">
      <div className="">
        <img
          src={sofa}
          className="h-[250px] w-full rounded-lg"
          alt=""
        />
      </div>

      {/* product detail */}
      <div className="bg-[#fff] p-3 space-y-1">
        <h3 className="font-bold text-lg">Wireless Headphones</h3>
        <span className="flex justify-start gap-1 items-center">
          <FaStar className="text-yellow-400" />
          <p>4.5</p>
        </span>
        <span>
          <p className="font-bold text-2xl">$199.99</p>
        </span>
        <div className="mt-3">
          <button className="w-full btn btn-dark  transform transition-transform duration-300 hover:scale-105 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default productCard;

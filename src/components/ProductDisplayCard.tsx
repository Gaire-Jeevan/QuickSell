import { FaStar } from "react-icons/fa";
import sofaSet from "../assets/sofaSet.png";

interface Props {
  name: string;
  price: string;
}

const ProductDisplayCard = ({ name, price }: Props) => {
  return (
    <div className=" shadow-md rounded-lg p-3  md:mb-4 ">
      <div className="relative">
        <img src={sofaSet} alt="" className="" />
      </div>
      <div>
        <h3 className="text-lg font-medium mt-3 mb-1">{name}</h3>
        <div className="flex gap-3 mb-2">
          <div className="flex">
            <FaStar className="text-red-500" />
            <FaStar className="text-red-500" />
            <FaStar className="text-red-500" />
            <FaStar className="text-red-500" />
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-sm">(4.3)</p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium">₹{price}</p>
          <span className="border border-gray-800 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-[#ffffff] ">
            Used
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayCard;

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartProductTemplate = () => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-center p-2 md:p-5  bg-[#fff] shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center md:space-x-4">
        <span className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] bg-gray-400"></span>
        <div className="flex flex-col justify-center md:justify-start md:items-start items-center space-y-1">
          <h4 className="font-bold md:text-xl">Wireless Headphones</h4>
          <p className="md:text-xl">$199.99</p>
        </div>
      </div>

      <div className="flex items-center space-x-3 flex-wrap">
        <span className="w-8 h-8 md:w-11 md:h-12 border border-gray-400 rounded-lg flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105">
          <AiOutlineMinus size={15} />
        </span>
        <span className="w-12 h-8 md:w-16 md:h-12 border border-gray-400 rounded-lg flex justify-center items-center cursor-pointer">
          <p className="text-center">1</p>
        </span>

        <span className="w-8 h-8 md:w-11 md:h-12 border border-gray-400 rounded-lg flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105">
          <AiOutlinePlus size={15} />
        </span>

        <span className="w-8 h-8 md:w-12 md:h-12  flex justify-center items-center cursor-pointer bg-red-600 rounded-lg transition-transform duration-300 hover:scale-105">
          <RiDeleteBin5Line className="text-white" size={20} />
        </span>
      </div>
    </div>
  );
};

export default CartProductTemplate;

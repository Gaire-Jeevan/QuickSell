import { AiOutlineCalendar } from "react-icons/ai";
import { BiCube } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="flex justify-center items-center  m-2 md:h-screen">
      <div className="shadow-lg rounded-lg bg-[#fff] p-9 md:w-full md:max-w-3xl">
        <div className="flex flex-col justify-center items-center mb-3 space-y-1">
          <FaCheckCircle style={{ color: "#28a745", fontSize: "54px" }} />
          <h2 className="font-bold text-xl md:text-3xl">Order Confirmed</h2>
          <p>Thank you for your purchase!</p>
        </div>

        <div className="flex flex-row justify-between items-center my-4">
          <div className="flex flex-col space-y-1">
            <span className="text-lg">Order Number</span>
            <span className="text-lg font-medium">QS12345678</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-lg">Order Date</span>
            <span className="text-lg font-medium">June 15, 2023</span>
          </div>
        </div>

        {/* Estimated Delivery */}
        <div className="flex flex-row items-center shadow-lg rounded-lg bg-gray-300 p-3 my-5 gap-4">
          <span>
            <FiTruck style={{ color: "#000", fontSize: "35px" }} />
          </span>
          <div>
            <span>
              <p className="text-lg font-bold">Estimated Delivery Date</p>
            </span>
            <span>
              <p className="text-lg">June 20,2023</p>
            </span>
          </div>
        </div>

        <div className="">
          <form action="">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg">Wireless Headphone x 1</span>
                <span className="text-lg">$199.99</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">Smartphone x 1</span>
                <span className="text-lg">$699.99</span>
              </div>

              <hr />

              <div className="flex justify-between items-center">
                <span className="text-lg">Subtotal</span>
                <span className="text-lg">$899.99</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">Shipping</span>
                <span className="text-lg">$10.00</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">Tax</span>
                <span className="text-lg">$90.00</span>
              </div>

              <hr />

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-lg font-bold">$999.98</span>
              </div>
            </div>
          </form>
        </div>

        {/* For View Order and Track Package button */}
        <div className="flex justify-center gap-2 mt-5">
          <span>
            <NavLink to="" className="btn flex items-center space-x-1">
              <BiCube size={24} color="black" />
              <p className="font-medium">View Order</p>
            </NavLink>
          </span>
          
          <span>
            <NavLink to="" className="btn btn-dark flex items-center space-x-1">
              <AiOutlineCalendar size={24} color="white" />
              <p className="font-medium">Track Package</p>
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;

import React from "react";
import { NavLink } from "react-router-dom";

const Review = () => {
  return (
    <div className="flex justify-center items-center  m-2 md:h-screen">
      <div className="shadow-lg rounded-lg bg-[#fff] p-9 md:w-full md:max-w-3xl">
        <div className="flex flex-col mb-3 space-y-3">
          <h2 className="font-bold text-xl mb-3 md:text-3xl">Order Summary</h2>
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

            {/* Shipping Address */}
            <div className="mt-4 space-y-1">
              <span>
                <h4 className="text-lg font-bold">Shipping Address</h4>
              </span>

              <div>
                <span className="text-lg">Jeevan Gaire</span>
              </div>
              <div>
                <span className="text-lg">Mullana</span>
              </div>
              <div>
                <span className="text-lg">Ambala</span>
              </div>
              <div>
                <span className="text-lg">India</span>
              </div>
              <div>
                <span className="text-lg">133207</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-4 space-y-1">
              <span>
                <h4 className="text-lg font-bold">Shipping Address</h4>
              </span>
              <span>Credit Cart</span>
            </div>
          </form>
        </div>

        {/* For Previous and Next button */}
        <div className="flex justify-between mt-3">
          <span>
            <NavLink to="/payment" className="btn btn-outline-secondary">
              Previous
            </NavLink>
          </span>
          <span>
            <NavLink to="/Confirmation" className="btn btn-dark">
              PlaceOrder
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;

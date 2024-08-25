import React from "react";
import NavBar from "../components/NavBar";
import OrderSummary from "../components/OrderSummary";
import ShippingInformation from "../components/ShippingInformation";

const CheckoutPage = () => {
  return (
    <>
      <NavBar showFullNav={false} />
      <div className="shadow-md m-2 lg:m-4 p-2 pt-0">
        <div className="ml-5">
          <h2 className="text-lg font-bold ml-3 pt-4">Checkout</h2>
          <hr />
        </div>
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 lg:gap-8 xl:gap-12">
          <div className="l">
            <OrderSummary />
          </div>
          <div className="lg:w-[49.5%]">
            <ShippingInformation />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;

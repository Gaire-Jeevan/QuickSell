import { useState } from "react";
import Confirmation from "./Confirmation";
import Payment from "./Payment";
import Review from "./Review";
import Shipping from "./Shipping";
import { Outlet, useNavigate } from "react-router-dom";



const CheckoutPage = () => {
  

  return (
    <div className="p-10">
      {/* outlet */}
      <Shipping />
    </div>
  );
};

export default CheckoutPage;

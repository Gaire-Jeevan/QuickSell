import { useState } from "react";
import OrderStatusCard from "./OrderStatusCard";

const OrderHistoryPage = () => {
  const [allOrders, setAllOrders] = useState([]);
  return (
    <div className="shadow-lg rounded-lg bg-[#ffffff] p-4">
      <div className="mb-5">
        <h2 className="font-medium text-3xl">Order History</h2>
        <p className="text-lg">View your past orders and their status.</p>
      </div>

      <div>
        <OrderStatusCard />
        <OrderStatusCard />
        <OrderStatusCard />
      </div>
    </div>
  );
};

export default OrderHistoryPage;

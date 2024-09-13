import { useEffect, useState } from "react";
import OrderStatusCard from "./OrderStatusCard";
import Cookies from "universal-cookie";
import { getAllOrders } from "../../utils/API";

interface ProductInfo {
  productId: string;
  costPrice: number;
}

interface Order {
  id: string;
  productInfo: ProductInfo[];
  orderStatus: string;
  createdAt: string;
}

const OrderHistoryPage = () => {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const cookies = new Cookies();

  useEffect(() => {
    const profile = cookies.get("profile");
    console.log(profile.id);
    getAllOrders(cookies.get("jwt_authorization"), profile.id)
      .then((product) => {
        console.log(product);
        setAllOrders(product);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="shadow-lg rounded-lg bg-[#ffffff] p-4">
      <div className="mb-5">
        <h2 className="font-medium text-2xl md:text-3xl">Order History</h2>
        <p className="md:text-lg">View your past orders and their status.</p>
      </div>

      <div>{
        allOrders.map((order) => (

          <OrderStatusCard
          key={order.id}
            productName={order.productInfo[0]?.productId || "Unknown Product"}
            price={order.productInfo[0]?.costPrice || 0}
            orderStatus={order.orderStatus}
            createdAt={order.createdAt.slice(0, 10)}
          />
        ))
        }
      </div>
    </div>
  );
};

export default OrderHistoryPage;

import { useEffect, useState } from "react";
import RecentSalesCard from "./RecentSalesCard";
import Cookies from "universal-cookie";
import { getAllProducts } from "../../utils/API";

interface Product {
  id: string;
  name: string;
  createdDate: string;
  price: number;
  orderStaus: string;
}

const RecentSales = () => {
  const [allSales, setAllSales] = useState<Product[]>([]);
  const cookies = new Cookies();

  useEffect(() => {
    const profile = cookies.get("profile");
    console.log(profile);
    getAllProducts(cookies.get("jwt_authorization"), profile.id)
      .then((product) => {
        console.log(product);
        setAllSales(product);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="mt-5 shadow-lg rounded-lg p-4 bg-[#fff]">
      <div className="mb-5 space-y-1">
        <h3 className="text-xl md:text-3xl font-bold">Recent Sales</h3>
        <p className="md:text-lg">Your latest sales</p>
      </div>

      <div>
        {allSales.map((product) => (
          <RecentSalesCard
          key={product.id}
            productName={product.name}
            createdDate={product?.createdDate || "0000-00-00"}
            price={product.price}
            orderStatus={product?.orderStaus || "Unknown"}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentSales;

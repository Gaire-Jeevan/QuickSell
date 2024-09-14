import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { getAllOrders } from "../../utils/API";
import RecentPurchaseCard from "./RecentPurchaseCard";


interface ProductInfo {
  productId: string;
  costPrice: number;
}

interface Purchase {
  id: string;
  productInfo: ProductInfo[];
  orderStatus: string;
  createdAt: string;
}


const RecentPurchases = () => {
  const [allPurchases, setAllPurchases] = useState<Purchase[]>();
  const cookies = new Cookies();

  useEffect(() => {
    const profile = cookies.get("profile");
    console.log(profile)
    const token = cookies.get("jwt_authorization");
    getAllOrders(token, profile.id)
      .then((product) => {
        setAllPurchases(product);
        console.log(product);
        console.log("this is state hook");
        console.log(allPurchases);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="mt-5 shadow-lg rounded-lg p-4 bg-[#fff]">
      <div className="mb-5 space-y-1">
        <h3 className="text-3xl font-bold">Recent Purchases</h3>
        <p className="text-lg">Your latest purchases</p>
      </div>

      <div>
        {allPurchases?.map((product) => (
          <RecentPurchaseCard
          productName={product.productInfo[0]?.productId || "Unknown Product"}
          price={product.productInfo[0]?.costPrice || 0}
          orderStatus={product.orderStatus}
          createdAt={product.createdAt.slice(0, 10)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentPurchases;

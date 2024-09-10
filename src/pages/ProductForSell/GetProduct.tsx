import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { getAllProducts } from "../../utils/API";
import ProductDisplayCard from "./ProductDisplayCard";

interface Product {
  id: number;
  name: string;
  price: string;
}

const GetProduct = () => {
  const [allProducts, setAllProducts] = useState<Product[] | []>([]);
  const cookies = new Cookies();

  useEffect(() => {
    const profile = cookies.get("profile");
    // console.log(profile.id);
    getAllProducts(cookies.get("jwt_authorization"), profile.id)
      .then((products) => {
        console.log(products);
        setAllProducts(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allProducts.map((product) => (
          <ProductDisplayCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default GetProduct;

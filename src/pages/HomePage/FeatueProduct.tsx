import ProductCard from "../../components/ProductCard";



const FeatueProduct = () => {
  return (
    <section className="bg-[#f1f5f9]" mx-4>
      <div className="flex flex-col justify-center items-center">
          <h2 className=" text-2xl font-bold mt-10 mb-3 lg:text-4xl">Featured Products</h2>
          <p className="text-lg lg:text-xl">
            Discover a wide range of high-quality, pre-owned items that are perfect
            for your needs.
          </p>
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-2">
    
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
</div>
    </section>
  );
};

export default FeatueProduct;

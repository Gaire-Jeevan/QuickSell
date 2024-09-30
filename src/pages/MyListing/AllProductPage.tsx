import GetProduct from "./GetProduct";
import NavBar from "../../components/NavBar";
import ProductDisplayCard from "./ProductDisplayCard";

const AllProductPage = () => {
  return (
    <div>
      <NavBar showFullNav={false} />
      <div className="m-6">
        {/* <ProductDisplayCard /> */}
        <div>
          <div className="my-5">
            <span className="text-3xl font-bold">
              <h2>MyListing</h2>
            </span>
          </div>

          <div>
            <form className="" role="search">
              {/* for search buuton */}
              <div className="flex flex-col md:flex-row w-full gap-3">
                <div className="flex w-full">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search for products"
                  />
                  {/* <button className="btn btn-outline-success" type="submit">
                    Search
                  </button> */}
                </div>
                {/* for status of product */}
                <div className="w-full">
                  <select
                    className="form-select"
                    aria-label="Status of product sold or available"
                  >
                    <option selected>All</option>
                    <option value="available">Available</option>
                    <option value="sold">Sold</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex flex-col space-y-2">
                <span className="text-lg font-medium">
                  <p>Price Range: </p>
                </span>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  className="w-full h-2 bg-gray-200 rounded-lg " //appearance-none cursor-pointer
                  style={{
                    accentColor: "transparent",
                  }}
                />
              </div>
            </form>
          </div>

          <div className="mt-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center">
            {/* <GetProduct /> */}
            <ProductDisplayCard name={"Wireless Headphones"} price={"$99.99"} />
            <ProductDisplayCard name={"Wireless Headphones"} price={"$99.99"} />
            <ProductDisplayCard name={"Wireless Headphones"} price={"$99.99"} />
            <ProductDisplayCard name={"Wireless Headphones"} price={"$99.99"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductPage;

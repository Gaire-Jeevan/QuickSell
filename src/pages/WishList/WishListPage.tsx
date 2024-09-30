import React from "react";
import WishListProductTemplate from "./WishListProductTemplate";
import { CgChevronLeft } from "react-icons/cg";

const WishListPage = () => {
  return (
    <div className="m-2">
      <span className="btn btn-outline-secondary transform transition-transform hover:scale-110 flex justify-center items-center gap-1 w-fit">
      <CgChevronLeft size={25}/>
        <button className="text-base">Back to Products</button>
      </span>

      <div>
        <h2 className="text-3xl font-bold my-4">My Wishlist</h2>
      </div>

      <div>
        <form className="" role="search">
          {/* for search buuton */}
          <div className="flex flex-col md:flex-row w-full gap-3">
            <div className="flex w-full text-lg">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Filter wishlist items..."
                aria-label="filterItem"
              />
              {/* <button className="btn btn-outline-success" type="submit">
                    Search
                  </button> */}
            </div>
            {/* for status of product */}
            <div className="w-full text-lg">
              <select
                className="form-select"
                aria-label="sorting wishlist products"
              >
                <option selected>Sort</option>
                <option value="priceHighToLow">Price: Low to High</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="sortByName">Name: A to Z</option>
              </select>
            </div>
          </div>
        </form>

        
      </div>

      {/* products */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <WishListProductTemplate />
        <WishListProductTemplate />
        <WishListProductTemplate />
        <WishListProductTemplate />
      </div>
    </div>
  );
};

export default WishListPage;

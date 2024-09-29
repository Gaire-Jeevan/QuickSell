import { IoCartOutline, IoShareSocialOutline } from "react-icons/io5";
import sofa from "../../assets/sofaSet.png";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import Suggestions from "./Suggestions";

const ProductDetailPage = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="m-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* for image */}

        <div className="flex flex-col justify-center">
          <div>
            <img src={sofa} alt="The product picture" className="rounded-lg" />
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <span>
              <img src={sofa} className="rounded-lg" alt="" />
            </span>
            <span>
              <img src={sofa} className="rounded-lg" alt="" />
            </span>
            <span>
              <img src={sofa} className="rounded-lg" alt="" />
            </span>
            <span>
              <img src={sofa} className="rounded-lg" alt="" />
            </span>
          </div>
        </div>
        {/* for description */}
        <div>
          <span>
            <h3 className="text-3xl md:text-4xl font-bold my-3">
              Classic Leather Jacket
            </h3>
          </span>
          <span className=" font-medium text-2xl">
            <p className="mb-3">$199.99</p>
          </span>

          {/* product description */}
          <span>
            <p className="text-lg md:text-xl">
              A timeless leather jacket that never goes out of style. Made from
              premium quality leather, this jacket features a sleek design with
              a comfortable fit. Perfect for any casual or semi-formal occasion.
            </p>
          </span>

          {/* Color */}
          <div className="my-4 space-y-3">
            <span className="font-bold text-xl">
              <h4>Color</h4>
            </span>
            <div className="flex space-x-2">
              <p className="w-2 h-7 rounded-lg bg-black"></p>
              <p className="w-2 h-7 rounded-lg bg-[#ff0000]"></p>
              <p className="w-2 h-7 rounded-lg bg-[#0000ff]"></p>
            </div>
          </div>

          {/* Size */}
          <div className="my-4 space-y-3">
            <span className="font-bold text-xl">
              <p>Size</p>
            </span>
            <div className="flex space-x-2">
              <span className="bg-[#f3f4f6] p-3 text-lg font-medium rounded-lg">
                <p>S</p>
              </span>
              <span className="bg-[#f3f4f6] p-3 text-lg font-medium rounded-lg">
                <p>M</p>
              </span>
              <span className="bg-[#f3f4f6] p-3 text-lg font-medium rounded-lg">
                <p>L</p>
              </span>
              <span className="bg-[#f3f4f6] p-3 text-lg font-medium rounded-lg">
                <p>XL</p>
              </span>
            </div>

            {/* buttons */}
            <div className="flex gap-4 mt-4">
              <span className="btn btn-dark w-full transform transition-transform duration-300 hover:scale-110 flex items-center justify-center gap-3">
                <IoCartOutline size={30} />
                <button>Add to Cart</button>
              </span>
              <span className="btn bg-[#f4f4f5] w-full  transform transition-transform duration-300 hover:scale-110">
                <button>Buy Now</button>
              </span>
            </div>
            {/* wishlist button */}
            <div className="flex space-x-4 mt-4">
              <span className="btn  bg-[#fff] shadow-lg py-1 px-3  transform transition-transform duration-300 hover:scale-110 flex items-center justify-center gap-3 md:gap-5">
                <CiHeart size={30} />
                <button>Add to Wishlist</button>
              </span>
              <span className="btn bg-[#fff] shadow-lg p-1 px-3 transform transition-transform duration-300 hover:scale-110 flex items-center justify-center gap-2">
                <IoShareSocialOutline size={20} />
                <button>Share </button>
              </span>
            </div>

            {/* active tab for details, shipping, returns */}
            <div className="mt-4">
              <div className="flex space-x-5 items-center text-lg">
                <span
                  className={
                    activeTab == "details"
                      ? "shadow-lg rounded-lg p-2 bg-[#fff]"
                      : ""
                  }
                  onClick={() => setActiveTab("details")}
                >
                  <p className=" hover:cursor-pointer" >Details</p>
                </span>

                <span
                  className={
                    activeTab == "shipping"
                      ? "shadow-lg rounded-lg p-2 bg-[#fff]"
                      : ""
                  }
                  onClick={() => setActiveTab("shipping")}
                >
                  <p className=" hover:cursor-pointer" >Shipping</p>
                </span>

                <span
                  className={
                    activeTab == "returns"
                      ? "shadow-lg rounded-lg p-2 bg-[#fff]"
                      : ""
                  }
                  onClick={() => setActiveTab("returns")}
                >
                  <p className="hover:cursor-pointer" >Returns</p>
                </span>
              </div>

              <div className="mt-3">
                {activeTab == "details" && (
                  <div className="flex flex-col text-lg space-y-1">
                    <span className="flex space-x-2 ">
                      <p>Material:</p>
                      <p>100% Genuine Leather</p>
                    </span>

                    <span className="flex space-x-2">
                      <p>Lining:</p>
                      <p>100% Polyester</p>
                    </span>

                    <span className="flex space-x-2">
                      <p>Closure:</p>
                      <p>Zipper</p>
                    </span>

                    <span className="flex space-x-2">
                      <p>Care:</p>
                      <p>Professional leather clean only</p>
                    </span>
                  </div>
                )}

                {activeTab == "shipping" && (
                  <div className="flex flex-col text-lg space-y-1">
                    <span>
                      <p>Free standard shipping on orders over $100</p>
                    </span>

                    <span className="flex space-x-2">
                      <p>Estimated delivery:</p>
                      <p>3-5 business days</p>
                    </span>

                    <span>
                      <p>Expedited shipping options available at checkout</p>
                    </span>
                  </div>
                )}

                {activeTab == "returns" && (
                  <div className="flex flex-col text-lg space-y-1">
                    <span>
                      <p>Free returns within 30 days of purchase</p>
                    </span>

                    <span>
                      <p>Item must be unworn and in original condition</p>
                    </span>

                    <span>
                      <p>See our full return policy for more details</p>
                    </span>
                  </div>
                )}
              </div>

              {/* area to display details, shipping, returns */}
            </div>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div>
        <Suggestions />
      </div>
    </div>
  );
};

export default ProductDetailPage;

import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import CartProductTemplate from "./CartProductTemplate";

const ShopingCartPage = () => {
  return (
    <div>
        <div><NavBar showFullNav={false} /></div>
      <div className="m-3">
        <div className="my-5">
          <h2 className="font-bold text-4xl">Your Shopping Cart</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <CartProductTemplate />
            <CartProductTemplate />
            <CartProductTemplate />
          </div>
          <div>
            <div className="shadow-lg rounded-lg bg-[#fff] p-4">
              <div>
                <h3 className="font-medium text-2xl">Order Summary</h3>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex text-lg justify-between items-center">
                  <span>
                    <p>Subtotal</p>
                  </span>
                  <span>
                    <p>$2199.97</p>
                  </span>
                </div>
                <div className="flex text-lg justify-between items-center">
                  <span>
                    <p>Tax</p>
                  </span>
                  <span>
                    <p>$220.00</p>
                  </span>
                </div>
                <hr />
                <div className="flex text-lg justify-between items-center">
                  <span>
                    <p>Total</p>
                  </span>
                  <span>
                    <p>$2419.97</p>
                  </span>
                </div>
                <div className="mt-4 bg-black text-white w-full h-8 flex justify-center items-center rounded-lg transition-transform duration-300 hover:scale-105">
                  <button>Proceed to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/browseProduct"
          className="mt-4 border border-gray-500 rounded-lg inline-flex items-center space-x-2 p-1 transition-transform duration-300 hover:scale-105 mb-10"
        >
          <span>
            <IoChevronBack />
          </span>
          <span>
            <p>Continue Shoping</p>
          </span>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ShopingCartPage;

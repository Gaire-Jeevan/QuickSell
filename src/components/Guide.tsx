import { CiSearch } from "react-icons/ci";
import { FaCheck, FaListUl } from "react-icons/fa";

const Guide = () => {
  return (
    <>
      <div className="mt-20 lg:mt-36 mx-4 mb-14">
        <div className="flex flex-col justify-center items-center mb-24">
          <h2 className="font-bold text-4xl lg:text-6xl">How It Works</h2>
          <p className="mt-3 text-lg">
            QuickSell makes it easy to buy and sell pre-owned items in your
            local community. Here's how it works:
          </p>
        </div>
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4">
          <div className="mr-6 flex flex-col items-center text-center h-full mb-5">
            <div className="flex flex-col items-center justify-center">
              <FaListUl className="text-4xl mb-4" />
              <h1 className="font-bold text-2xl">List Your Items</h1>
              <p className="mt-3 text-lg">
                Create a detailed listing with photos, descriptions, and pricing
                to showcase your items.
              </p>
            </div>
          </div>
          <div className="mr-6 flex flex-col items-center text-center h-full mb-5">
            <div className="flex flex-col items-center justify-center">
              <CiSearch className="text-4xl mb-4" />
              <h1 className="font-bold text-2xl">Browse Products</h1>
              <p className="mt-3 text-lg">
                Use our intuitive search and filtering tools to find the perfect
                pre-owned items in your area.
              </p>
            </div>
          </div>
          <div className="mr-6 flex flex-col items-center text-center h-full mb-5">
            <div className="flex flex-col items-center justify-center">
              <FaCheck className="text-4xl mb-4" />
              <h1 className="font-bold text-2xl">Complete Purchases</h1>
              <p className="mt-3 text-lg">
                Securely complete your transactions and arrange for local pickup
                or delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;

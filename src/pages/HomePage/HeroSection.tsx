import { CiSearch } from "react-icons/ci";
import { FaListUl, FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { RiFocus3Line } from "react-icons/ri";

const HeroSection = () => {
  return (
    <section className="mx-4 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 lg:mt-32 ">
        <div>
          <h2 className="font-bold text-4xl lg:text-6xl">
            Buy and Sell Quality Second-Hand Goods Locally
          </h2>
          <p className="mt-3 text-xl">
            QuickSell is the easiest way to buy and sell pre-owned items in your
            local community.
          </p>
          <div className="relative mt-10">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CiSearch className="text-gray-500" />
            </span>
            <input
              type="text"
              className="form-control pl-10 py-3 w-full border rounded-md"
              aria-label="Large"
              id="search"
              name="search"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search for Products..."
            />
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-36  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="mr-6 flex flex-col items-center text-center h-full  mb-5">
          <div className="flex flex-col items-center justify-center">
            <FaRegUser className="text-4xl mb-4" />
            <h1 className="font-bold text-2xl">User-Friendly Interface</h1>
            <p className="text-lg mt-3 ">
              Our platform is designed to be intuitive and easy to navigate,
              making buying and selling a breeze.
            </p>
          </div>
        </div>
        <div className="mr-6 flex flex-col items-center text-center h-full  mb-5">
          <div className="flex flex-col items-center justify-center">
            <MdLockOutline className="text-4xl mb-4" />
            <h1 className="font-bold text-2xl">Secure Transactions</h1>
            <p className="mt-3 text-lg">
              We prioritize the safety and security of our users, ensuring all
              transactions are protected.
            </p>
          </div>
        </div>
        <div className="mr-6 flex flex-col items-center text-center h-full mb-5">
          <div className="flex flex-col items-center justify-center">
            <RiFocus3Line className="text-4xl mb-4" />
            <h1 className="font-bold text-2xl">Local Focus</h1>
            <p className="mt-3 text-lg">
              QuickSell connects buyers and sellers within your local community,
              promoting sustainable and eco-friendly practices.
            </p>
          </div>
        </div>
        <div className="mr-6 flex flex-col items-center text-center h-full mb-5">
          <div className="flex flex-col items-center justify-center">
            <FaListUl className="text-4xl mb-4" />
            <h1 className="font-bold text-2xl">Detailed Listings</h1>
            <p className="mt-3 text-lg">
              Our product listings provide comprehensive information to help you
              make informed purchasing decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

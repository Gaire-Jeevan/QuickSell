import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import DashboardSummary from "./DashboardSummary";
import NewMessages from "./NewMessages";
import RecentPurchases from "./RecentPurchases";
import RecentSales from "./RecentSales";
import SellerLevel from "./SellerLevel";

const UserDashBoardPage = () => {
  const [activeTab, setActiveTab] = useState("recent-purchases");

  const renderContent = () => {
    switch (activeTab) {
      case "recent-purchases":
        return <RecentPurchases />;
      case "recent-sales":
        return <RecentSales />;

      case "new-messages":
        return <NewMessages />;

      default:
        return <RecentPurchases />;
    }
  };

  return (
    <div>
      <NavBar showFullNav={false} />
      <div className=" bg-[#f3f4f6]">
        <div className="mt-10 mx-3 mb-5">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex items-center space-x-5">
              <div>
                <CgProfile size={50} />
              </div>
              <div className="flex flex-col space-y-1">
                <h2 className="text-3xl font-bold">Welcome back, John!</h2>
                <p className="font-light text-lg">
                  Here's what's happening with your account today.
                </p>
              </div>
            </div>
            <div className="bg-black text-white py-2 px-2 md:px-3 rounded-lg flex items-center space-x-2 xxs:mt-2 md:mt-0">
              <FiShoppingBag size={30} />
              <p>Start Selling</p>
            </div>
          </div>
          <div>
            <DashboardSummary />
          </div>
          <div className="flex md:space-x-12 md:text-lg mt-5 ">
            <button
              onClick={() => setActiveTab("recent-purchases")}
              className={`${
                activeTab === "recent-purchases"
                  ? "shadow-md rounded-lg p-2 bg-[#ffffff] font-medium"
                  : ""
              }`}
            >
              Recent Purchases
            </button>

            <button
              onClick={() => setActiveTab("recent-sales")}
              className={`${
                activeTab === "recent-sales"
                  ? "shadow-md rounded-lg p-2 bg-[#ffffff] font-medium"
                  : ""
              }`}
            >
              Recent Sales
            </button>

            <button
              onClick={() => setActiveTab("new-messages")}
              className={`${
                activeTab === "new-messages"
                  ? "shadow-md rounded-lg p-2 bg-[#ffffff] font-medium"
                  : ""
              }`}
            >
              New Messages
            </button>
          </div>

          <div>{renderContent()}</div>

          <div className="mt-5">
            <SellerLevel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashBoardPage;

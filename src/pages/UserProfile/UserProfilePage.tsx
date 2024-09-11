import { useState } from "react";
import NavBar from "../../components/NavBar";
import EditProfile from "./EditProfile";
import OrderHistoryPage from "./OrderHistoryPage";
import ProfileSummary from "./ProfileSummary";
import PaymentMethods from "./PaymentMethods";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal-info");

  const renderContent = () => {
    switch (activeTab) {
      case "personal-info":
        return <EditProfile />;
      case "order-history":
        return <OrderHistoryPage />;

      case "payment-methods":
        return <PaymentMethods />;

      default:
        return <EditProfile />;
    }
  };

  return (
    <>
      <NavBar showFullNav={false} />
      <div className="m-2 p-3 bg-[#f3f4f6]">
        <h2 className="text-4xl font-bold">My Profile</h2>

        <div className="my-5">
          <ProfileSummary />
        </div>
        {/* Tab navigations */}
        <div className="border-b-2 mb-8 flex space-x-10 text-lg">
          <button
            onClick={() => setActiveTab("personal-info")}
            className={`${activeTab === "personal-info" ? "shadow-md rounded-lg p-2 bg-[#ffffff] font-medium" : ""}`}
          >
            Personal Info
          </button>

          <button
            onClick={() => setActiveTab("order-history")}
            className={`${activeTab === "order-history" ? "shadow-md rounded-lg p-2 bg-[#ffffff] font-medium" : ""}`}
          >
            Order History
          </button>

          <button
            onClick={() => setActiveTab("payment-methods")}
            className={`${activeTab === "payment-methods" ? "shadow-md rounded-lg p-2 bg-[#ffffff] font-medium" : ""}`}
          >
            Payment Methods
          </button>
        </div>

        {/* Content area */}
        <div>{renderContent()}</div>
      </div>
    </>
  );
};

export default UserProfilePage;

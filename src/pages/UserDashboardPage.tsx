import React from "react";
import RecentPurchases from "../components/userDashboard/RecentPurchases";
import RecentSales from "../components/userDashboard/RecentSales";
import NewMessages from "../components/userDashboard/NewMessages";
import TransactionHistory from "../components/userDashboard/TransactionHistory";
import ProductListing from "../components/userDashboard/ProductListing";
import NavBar from "../components/NavBar";

const UserDashboardPage = () => {
  return (
    <>
      <NavBar showFullNav={false} />
      <div className="m-4">
        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-3">
          <RecentPurchases />
          <RecentSales />
          <NewMessages />
        </div>

        <TransactionHistory />
        <ProductListing />
      </div>
    </>
  );
};

export default UserDashboardPage;

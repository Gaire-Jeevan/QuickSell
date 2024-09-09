import React from "react";
import RecentPurchases from "./userDashboard/RecentPurchases";
import RecentSales from "./userDashboard/RecentSales";
import NewMessages from "./userDashboard/NewMessages";
import TransactionHistory from "./userDashboard/TransactionHistory";
import ProductListing from "./userDashboard/ProductListing";
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

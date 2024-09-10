import NavBar from "../components/NavBar";
import NewMessages from "./userDashboard/NewMessages";
import ProductListing from "./userDashboard/ProductListing";
import RecentPurchases from "./userDashboard/RecentPurchases";
import RecentSales from "./userDashboard/RecentSales";
import TransactionHistory from "./userDashboard/TransactionHistory";

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

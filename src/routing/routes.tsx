import { createBrowserRouter } from "react-router-dom";
import AddEditProduct from "../pages/AddEditProduct/AddEditProduct";
import CheckoutPage from "../pages/CheckOut/CheckoutPage";
import Confirmation from "../pages/CheckOut/Confirmation";
import Payment from "../pages/CheckOut/Payment";
import Review from "../pages/CheckOut/Review";
import Shipping from "../pages/CheckOut/Shipping";
import ContactUsPage from "../pages/ContactUs/ContactUsPage";
import HomePage from "../pages/HomePage/HomePage";
import LogInPage from "../pages/Login/LogInPage";
import AllProductPage from "../pages/ProductForSell/AllProductPage";
import ShopingCartPage from "../pages/ShoppigCart/ShopingCartPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import UserProfilePage from "../pages/UserProfile/UserProfilePage";
import UserDashBoardPage from "../pages/userDashboard/UserDashBoardPage";
import ErrorPage from "./ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
// Import the new ProtectedRoute component

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
  },
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LogInPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/home", element: <HomePage /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "profile",
        element: <UserProfilePage />,
      },

      {
        path: "sell",
        element: <AddEditProduct />,
      },

      {
        path: "contactUs",
        element: <ContactUsPage />,
      },

      {
        path: "dashboard",
        element: <UserDashBoardPage />,
      },
      {
        path: "browseProduct",
        element: <AllProductPage />,
      },
      {
        path: "cart",
        element: <ShopingCartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },

      {
        path: "shipping",
        element: <Shipping />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "Confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);

export default router;

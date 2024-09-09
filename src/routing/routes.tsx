import { createBrowserRouter } from "react-router-dom";
import AddEditProduct from "../pages/AddEditProduct/AddEditProduct";
import HomePage from "../pages/HomePage/HomePage";
import ContactUsPage from "../pages/ContactUs/ContactUsPage";
import UserDashboardPage from "../pages/UserDashboardPage";
import ErrorPage from "./ErrorPage";
import AllProductPage from "../pages/ProductForSell/AllProductPage";
import LogInPage from "../pages/Login/LogInPage";
import SignUpPage from "../pages/SignUp/SignUpPage";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
  },
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LogInPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/sell", element: <AddEditProduct /> },
  { path: "/contactUs", element: <ContactUsPage /> },
  { path: "/dashboard", element: <UserDashboardPage /> },
  { path: "/browseProduct", element: <AllProductPage /> },
]);

export default router;

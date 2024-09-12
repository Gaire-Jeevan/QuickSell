import { createBrowserRouter } from "react-router-dom";
import AddEditProduct from "../pages/AddEditProduct/AddEditProduct";
import ContactUsPage from "../pages/ContactUs/ContactUsPage";
import HomePage from "../pages/HomePage/HomePage";
import LogInPage from "../pages/Login/LogInPage";
import AllProductPage from "../pages/ProductForSell/AllProductPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import UserProfilePage from "../pages/UserProfile/UserProfilePage";
import UserDashBoardPage from "../pages/userDashboard/UserDashBoardPage";
import ErrorPage from "./ErrorPage";

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
  { path: "/dashboard", element: <UserDashBoardPage /> },
  { path: "/browseProduct", element: <AllProductPage /> },
  { path: "/profile", element: <UserProfilePage /> },
]);

export default router;

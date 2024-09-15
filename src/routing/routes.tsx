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
import ProtectedRoute from "./ProtectedRoute";
import ShopingCartPage from "../pages/ShoppigCart/ShopingCartPage";
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
        element: <UserDashBoardPage />
      },
      {
        path: "browseProduct",
        element: <AllProductPage />
      },
      {
        path: "cart",
        element: <ShopingCartPage />
      }

      
    ],
  },
  
]);

export default router;

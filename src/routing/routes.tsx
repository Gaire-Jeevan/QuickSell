import { createBrowserRouter } from "react-router-dom";
import AddEditProduct from "../components/AddEditProduct";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import ContactUsPage from "../pages/ContactUsPage";
import UserDashboardPage from "../pages/UserDashboardPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LogInPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/home", element: <HomePage /> },
  
  { path: "/signup", element: <SignUpPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/sell", element: <AddEditProduct /> },
  { path: "/contactUs", element: <ContactUsPage /> },
  { path: "/dashboard", element: <UserDashboardPage /> },

]);

export default router;

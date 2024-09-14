import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();


const isAuthenticated = () => {
    return !!cookies.get("jwt_authorization");
}

// const ProtectedRoute = ({children}:{ children: React.ReactNode }) => {
//     return isAuthenticated() ? children : <Navigate to="/home" />
// }

const ProtectedRoute = () => {
  
    if (!isAuthenticated()) {
      return <Navigate to="/home" />;
    }
  
    return <Outlet />;
  };
  

export default ProtectedRoute;
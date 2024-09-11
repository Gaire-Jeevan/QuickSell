import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { fetchProfile } from "../utils/API";
import { MdLogout } from "react-icons/md";
import logo from "../assets/QuickSellLogoWithoutBg.webp";
import { RxAvatar } from "react-icons/rx";

interface Props {
  showFullNav: boolean;
}

const NavBar = ({ showFullNav }: Props) => {
  const [user, setUser] = useState(null);
  const cookies = new Cookies();

  useEffect(() => {
    const profile = cookies.get("profile");

    fetchProfile(cookies.get("jwt_authorization"))
      .then((profile) => {
        console.log(profile.firstName);
        setUser(profile.firstName);
      })
      .catch((error) => {
        console.error("Error fetching userName:- ", error);
      });
  }, []);

  const logOut = () => {
    cookies.remove("jwt_authorization", { path: "/" });
    cookies.remove("profile", { path: "/" });

    setUser(null);
    console.log("Cookie removed");
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center mx-4 my-2">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="QuickSellLogo" className="w-[140px] h-24" />
        </Link>

        {showFullNav && (
          <>
            <ul className="hidden lg:flex lg:flex-row lg:space-x-16">
              <Link to="/home" className="list-item hover:underline font-bold">
                Home
              </Link>
              <Link
                to="/browseProduct"
                className="list-item hover:underline font-bold"
              >
                Browse Product
              </Link>
              <Link to="/sell" className="list-item hover:underline font-bold">
                Sell Your Product
              </Link>
              <Link
                to="/aboutUs"
                className="list-item hover:underline font-bold"
              >
                About Us
              </Link>
              <Link
                to="/contactUs"
                className="list-item hover:underline font-bold"
              >
                Contact Us
              </Link>
            </ul>

            <div>
              {!user ? (
                <div className="flex w-44 justify-between ">
                  <Link to="/signup" className="btn btn-success m-0 h-auto">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-primary h-auto">
                    Log In
                  </Link>
                </div>
              ) : (
                <div className="flex">
                  <Link to={"/profile"}>
                    <RxAvatar size={40} />
                  </Link>

                  {/* <button className="flex text-lg font-medium" onClick={logOut}>
                  <MdLogout className="w-8 h-8 mr-2" />
                  LogOut
                  </button> */}
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <hr />
    </>
  );
};

export default NavBar;

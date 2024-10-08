import axios from "axios";
import { useState } from "react";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import { fetchProfile } from "../../utils/API";

const LogIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const cookies = new Cookies(); // Initialize cookies
  const navigate = useNavigate();

  const loginHandler = async (e: any) => {
    e.preventDefault();
    console.log(email, password);
    const URL = "http://localhost:8080/api/user/login";

    axios
      .post(URL, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);

        // Store the token in cookies
        cookies.set("jwt_authorization", res.data, {
          path: "/", // Cookie is accessible throughout the app
          expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Expire in 8 hours
          secure: true, // Set to true in production if using HTTPS
          sameSite: "lax", // Helps with CSRF protection
        });
        fetchProfile(res.data).then((profile) => {
          console.log(profile);

          cookies.set("profile", profile, {
            path: "/", // Cookie is accessible throughout the app
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Expire in 8 hours
            secure: true, // Set to true in production if using HTTPS
            sameSite: "lax", // Helps with CSRF protection
          });
        });
        // Navigate to the dashboard after successful login
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="m-4">
        <div className="rounded-md shadow-lg w-[305px] h-[420px] p-4 md:w-[350px] lg:w-[400px]">
          <h2 className="font-bold text-xl lg:text-2xl ml-[-10px] md:ml-2 lg:ml-8">
            Log In
          </h2>
          <form
            onSubmit={loginHandler}
            className="flex flex-col justify-center items-center "
          >
            <div className="form-group mt-4 lg:mt-10 mb-3 text-sm lg:text-lg">
              <label htmlFor="email" className="text-base font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control rouded-md  w-[280px] h-12 lg:w-[400] text-sm"
                maxLength={100}
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group text-sm lg:text-lg">
              <label htmlFor="password" className="text-base font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control rounded-md  w-[280px] h-12 lg:w-[400] text-sm"
                maxLength={100}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-[#DF2B4A] rounded-md w-[280px] lg:w-[400] text-white font-medium text-base lg:text-lg h-12  mt-4 lg:mt-10"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex flex-row text-xs lg:text-[1rem] font-extralight mt-2">
          <span className="hover:underline mr-3 md:mx-5 lg:mx-3">
            Forget Password?
          </span>{" "}
          <Link to="/signup" className="hover:underline">
            Don't have an account? Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = (e: any) => {
    e.preventDefault();

    const URL = "http://localhost:8080/api/user/register";

    axios
      .post(URL, {
        firstName,
        lastName,
        email,
        mobile,
        countryCode,
        phone,
        password,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log("Internal error occured:- ", err);
      });
  };

  return (
    <div className="flex justify-center ">
      <div className="m-4">
        <div className="rounded-md shadow-lg  p-4  ">
          <h2 className="font-bold text-xl lg:text-2xl ml-[-10px]  lg:ml-[-3px]">
            Sign Up
          </h2>
          <form
            onSubmit={registerUser}
            className="flex flex-col justify-center lg:w[400px] ml-[-10px] "
          >
            <div className="form-group mt-4 lg:mt-10 mb-3 text-sm lg:text-lg">
              <label htmlFor="firstName" className="text-base font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control rouded-md  w-[280px] h-12 md:w-[320px] lg:w-[450px] text-sm"
                aria-describedby="first name of user to register"
                maxLength={100}
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3 text-sm lg:text-lg">
              <label htmlFor="lastName" className="text-base font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control rouded-md  w-[280px] h-12 md:w-[320px] lg:w-[450px] text-sm"
                aria-describedby="last name of user to register"
                maxLength={35}
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3 text-sm lg:text-lg">
              <label htmlFor="email" className="text-base font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control rouded-md  w-[280px] h-12 md:w-[320px] lg:w-[450px] text-sm"
                aria-describedby="email of user to register"
                maxLength={50}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3 text-sm lg:text-lg">
              <label
                htmlFor="countryCode"
                className="text-base font-medium mb-2"
              >
                Country Code
              </label>
              <input
                type="text"
                id="countryCode"
                className="form-control rouded-md  w-[280px] h-12 md:w-[320px] lg:w-[450px] text-sm"
                // value={countryCode}
                aria-describedby="country of user to register"
                maxLength={5}
                placeholder="Enter your country code"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3 text-sm lg:text-lg">
              <label htmlFor="phone" className="text-base font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control rouded-md  w-[280px] h-12 md:w-[320px] lg:w-[450px] text-sm"
                // value={countryCode}
                aria-describedby="Mobile number of user to register"
                maxLength={20}
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group text-sm lg:text-lg">
              <label htmlFor="password" className="text-base font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-md  w-[280px] h-12 md:w-[320px] lg:w-[450px] text-sm"
                id="password"
                maxLength={25}
                minLength={8}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-success rounded-md w-[280px] md:w-[320px] lg:w-[450px] text-white font-medium text-base lg:text-lg h-12  mt-4 lg:mt-10"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex flex-row text-xs lg:text-[1rem] font-extralight mt-2">
          <span className="hover:underline ml-10 mr-3 md:ml-16 lg:ml-24 lg:mr-4">
            Already have an account?
          </span>{" "}
          <Link to="/login" className="hover:underline">
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

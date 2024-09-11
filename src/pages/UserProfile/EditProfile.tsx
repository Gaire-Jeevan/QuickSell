import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { fetchProfile } from "../../utils/API";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [userId, setUserId] = useState<string | null>(null);

  const cookies = new Cookies();
  const token = cookies.get("jwt_authorization");
  console.log(token);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const profile = await fetchProfile(token);
        setUserId(profile.id);
      } catch (error) {
        console.log("Error fetching profile: ", error);
      }
    };
    getUserProfile();
  }, [token]);

  const editProfile = (e: any) => {
    e.preventDefault();

    if (!userId) {
      console.log("User ID is not available");
      return;
    }
    const URL = `http://localhost:8080/api/user/${userId}`;
    axios
      .put(URL, {
        firstName,
        lastName,
        email,
        countryCode,
        phone,
        password,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="mt-10 shadow-xl p-4 bg-[#ffffff]">
      <div className="mb-10 space-y-1">
        <h3 className="text-3xl font-bold ">Personal Inforamtion</h3>
        <p className="text-lg">Update your personal details here.</p>
      </div>
      <div className="">
        <form
          action=""
          onSubmit={editProfile}
          className="flex flex-col p-2 mt-3"
        >
          <div className="flex space-x-5">
            <div className="form-group mb-3 text-sm lg:text-lg w-full">
              <label htmlFor="firstName" className="text-base font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                className="form-control rouded-md  h-12 text-sm"
                id="firstName"
                maxLength={20}
                aria-describedby="first name of user"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
              />
            </div>

            <div className="form-group mb-3 text-sm lg:text-lg w-full">
              <label htmlFor="lastName" className="text-base font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="form-control rouded-md  h-12 text-sm"
                id="lastName"
                maxLength={20}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                aria-describedby="last name of user"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label htmlFor="userEmail" className="text-base font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="form-control rouded-md  h-12 text-sm"
              id="userEmail"
              maxLength={50}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="user email id"
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label htmlFor="countryCode" className="text-base font-medium mb-2">
              Country Code
            </label>
            <input
              type="text"
              className="form-control rouded-md  h-12 text-sm"
              id="countryCode"
              maxLength={10}
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              aria-describedby="user country code"
              placeholder="+91"
            />
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label htmlFor="userPhone" className="text-base font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              className="form-control rouded-md  h-12 text-sm"
              id="userPhone"
              maxLength={15}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-describedby="user phone number"
              placeholder="+1 (555) 555-5555"
            />
          </div>

          <div className="form-group text-sm lg:text-lg">
            <label htmlFor="password" className="text-base font-medium mb-2">
              Change Password
            </label>
            <input
              type="password"
              className="form-control rounded-md  h-12 text-sm"
              id="password"
              maxLength={20}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a new password"
            />
          </div>

          <button
            type="submit"
            className="bg-[#DF2B4A] rounded-md text-white font-medium text-base lg:text-lg h-12  mt-4 lg:mt-10"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

import Cookies from "universal-cookie";
import sofaSet from "../../assets/sofaSet.png";
import { useEffect, useState } from "react";
import { fetchProfile } from "../../utils/API";

const ProfileSummary = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [phone, setPhone] = useState(null);

  const cookies = new Cookies();

  const token = cookies.get("jwt_authorization");
  console.log(token);

  useEffect(() => {
    const getUserProfile = async () => {

    try{
      const profile = await fetchProfile(token);
      setFirstName(profile.firstName);
      setLastName(profile.lastName);
      setUserEmail(profile.email);
      setCountryCode(profile.countryCode);
      setPhone(profile.phone);
    }
    catch(err) {
      console.log("Error fetching profile: ", err)
    }
  }
  getUserProfile();
  }, []);

  return (
    <div className="mt-4">
      
      <div className="shadow-md rounded-lg flex flex-col justify-center md:justify-start  items-center md:flex-row mt-3 p-2 md:p-4 bg-[#ffffff]">
        <div >
          <img
            className="w-[70px] h-[70px] rounded-full"
            src={sofaSet}
            alt="profile picture of user"
          />
        </div>
        <div className="flex flex-col justify-center  md:items-start items-center ml-5">
          <h4 className="font-medium text-lg">{firstName} {lastName}</h4>
          <p >{userEmail}</p>
          <p>{countryCode} {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;

import axios from "axios";

export const fetchProfile = async (token: string) => {
  const URL = "http://localhost:8080/api/user/profile";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return (await axios.get(URL, { headers })).data;
};

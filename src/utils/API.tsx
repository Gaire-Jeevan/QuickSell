import axios from "axios";

export const fetchProfile = async (token: string) => {
  const URL = "http://localhost:8080/api/user/profile";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return (await axios.get(URL, { headers })).data;
};

export const getAllProducts = async (token:string, userID:string) => {
    const URL = "http://localhost:8080/api/products/user/"+userID;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return (await axios.get(URL, { headers })).data;
}


export const getAllOrders = async (token:string, order_id:string) => {
  const URL = "http://localhost:8080/api/order/user/"+order_id;
  
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return (await axios.get(URL, { headers })).data;
}
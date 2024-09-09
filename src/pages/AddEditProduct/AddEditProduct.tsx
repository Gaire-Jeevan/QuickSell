import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const AddEditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  // Initialize cookies
  const cookies = new Cookies();
  const token = cookies.get("jwt_authorization"); // Get the token

  const addEditProduct = async (e: any) => {
    e.preventDefault();

    const URL = "http://localhost:8080/api/products";

    axios
      .post(
        URL,
        {
          name,
          price,
          category,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Authorization header
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      })
      .catch((err) =>
        console.error("Error adding product:", err.response?.data || err)
      );
  };
  return (
    <div className="flex justify-center m-3 lg:m-4">
      <div className="rounded-md shadow-lg w-[310px] md:w-[755px] lg:w-[1005px]  p-4 ">
        <h2 className="font-bold text-xl lg:text-2xl ml-[-10px]  lg:ml-[-3px]">
          Add/Edit Product
        </h2>
        <form
          onSubmit={addEditProduct}
          className="flex flex-col justify-center  ml-[-10px] "
        >
          <div className="form-group mt-4 lg:mt-10 mb-3 text-sm lg:text-lg">
            <label
              htmlFor="productTitle"
              className="text-base font-medium mb-2"
            >
              Product Title
            </label>
            <input
              type="text"
              className="form-control rouded-md   h-12   text-sm"
              id="productTitle"
              aria-describedby="emailHelp"
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label
              htmlFor="productDescription"
              className="text-base font-medium mb-2"
            >
              Description
            </label>
            <textarea
              className="form-control text-sm"
              id="productDescription"
              rows={5}
              maxLength={75}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the product details"
              required
            ></textarea>
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label
              htmlFor="productCategory"
              className="text-base font-medium mb-2"
            >
              Category
            </label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Clothing</option>
              <option>Accessories</option>
            </select>
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label htmlFor="price" className="text-base font-medium mb-2">
              Price
            </label>
            <input
              type="number"
              className="form-control rouded-md h-12 text-sm"
              id="price"
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            {/* <button
              type="submit"
              className="btn btn-outline-secondary rounded-md text-black font-medium text-base lg:text-lg w-30 h-12  mt-4 lg:mt-10"
            >
              Save
            </button> */}
            <button
              type="submit"
              className="btn btn-success rounded-md text-white font-medium text-base lg:text-lg h-12 w-30 ml-2 mt-4 lg:mt-10"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditProduct;

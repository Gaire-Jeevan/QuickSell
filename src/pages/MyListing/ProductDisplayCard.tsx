import { FaStar } from "react-icons/fa";
import sofaSet from "../../assets/sofaSet.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

interface Props {
  name: string;
  price: string;
}

const ProductDisplayCard = ({ name, price }: Props) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className=" shadow-md rounded-lg p-3 w-fit md:mb-4 border border-gray-300">
      <div className="relative">
        <img src={sofaSet} alt="" className="rounded-t-lg" />
      </div>

      <div className="space-y-3">
        {/* when we don't click edit button */}
        {!editProduct && (
          <div>
            <h3 className="text-lg md:text-xl font-medium mt-3 mb-1">{name}</h3>
            <div>
              <p className="font-medium text-lg md:text-xl ">₹{price}</p>
              <p className="text-lg">High-quality wireless headphones</p>
            </div>
          </div>
        )}

        {/* if we click edit button */}
        {editProduct && (
          <div className="mt-4 flex flex-col space-y-2">
            {/* Product Name */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="productName"
                aria-describedby="name of product added on sell"
                placeholder="Wireless Headphones"
              />
            </div>

            {/* price */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="productPrice"
                aria-describedby="price of product added on sell"
                placeholder="$99.99"
              />
            </div>

            {/* description */}
            <div className="form-group">
              <textarea
                className="form-control"
                id="productDescription"
                rows={2}
                placeholder="High-quality wireless headphones"
              ></textarea>
            </div>
          </div>
        )}
        {/* 
        <div className="flex gap-3 mb-2">
          <div className="flex">
            <FaStar className="text-red-500" />
            <FaStar className="text-red-500" />
            <FaStar className="text-red-500" />
            <FaStar className="text-red-500" />
            <FaStar className="text-gray-300" />
          </div> 
          <p className="text-sm">(4.3)</p> 
        </div>
        */}
        <div className="flex flex-col space-y-3">
          <span className="border border-gray-800 text-gray-800 font-medium me-2 px-2.5 py-0.5 rounded-full bg-[#ffffff] w-fit ">
            Available
          </span>
        </div>

        <div className="flex gap-4 w-full items-end justify-between mt-5">
          {editProduct || (
            <button
              className="btn btn-outline-secondary px-5"
              onClick={() => setEditProduct(true)}
            >
              Edit
            </button>
          )}

          {editProduct && (
            <button
              className="btn btn-outline-secondary px-5"
              onClick={() => setEditProduct(false)}
            >
              Save
            </button>
          )}

          <button className="flex items-center gap-2 btn btn-danger">
            <RiDeleteBin6Line size={20} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayCard;
import React from "react";

const AddEditProduct = () => {
  return (
    <div className="flex justify-center m-3 lg:m-4">
      <div className="rounded-md shadow-lg w-[310px] md:w-[755px] lg:w-[1005px]  p-4 ">
        <h2 className="font-bold text-xl lg:text-2xl ml-[-10px]  lg:ml-[-3px]">
          Add/Edit Product
        </h2>
        <form action="" className="flex flex-col justify-center  ml-[-10px] ">
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
              placeholder="Enter product name"
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
              placeholder="Describe the product details"
            ></textarea>
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label
              htmlFor="productCategory"
              className="text-base font-medium mb-2"
            >
              Category
            </label>
            <select className="form-control">
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
            />
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label htmlFor="uploadImage" className="text-base font-medium mb-2">
              Upload Images
            </label>
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 lg:flex-row lg:space-y-0">
              <input
                type="file"
                accept="image/*"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
              <input
                type="file"
                accept="image/*"
                className="form-control-file"
                id="exampleFormControlFile2"
              />
              <input
                type="file"
                accept="image/*"
                className="form-control-file"
                id="exampleFormControlFile3"
              />
            </div>
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label htmlFor="location" className="text-base font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              className="form-control rouded-md h-12 text-sm"
              id="location"
              maxLength={50}
              placeholder="Enter product location"
            />
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label htmlFor="location" className="text-base font-medium mb-2">
              Condition
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="radioNew"
                value="option1"
              />
              <label className="form-check-label" htmlFor="radioNew">
                New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="radioUsed"
                value="option2"
              />
              <label className="form-check-label" htmlFor="radioUsed">
                Used
              </label>
            </div>
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label
              htmlFor="stockQuantity"
              className="text-base font-medium mb-2"
            >
              Stock Quantity
            </label>
            <input
              type="number"
              className="form-control rouded-md h-12 text-sm"
              id="stockQuantity"
              placeholder="Enter available quantity"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-outline-secondary rounded-md text-black font-medium text-base lg:text-lg w-30 h-12  mt-4 lg:mt-10"
            >
              Save
            </button>
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

import React from "react";

const ShippingInformation = () => {
  return (
    <div className="m-2 xl:w-[700px]">
      <h3 className="font-medium text-md mt-2 ml-2 pt-3">Shipping Information</h3>
      <div className="shadow-md mr-2 ml-2 mt-2 mb-2lg:mr-0 p-4 bg-[#f9f9fa]">
        <form action="" className="space-y-3">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name in shipping"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email in shipping"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              aria-describedby="phone in shipping"
              placeholder="Enter phone number"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  aria-describedby="city in shipping"
                  placeholder="Enter your city"
                />
              </div>
            </div>
            <div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  aria-describedby="state in shipping"
                  placeholder="Enter your state"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <div className="form-group">
                <label htmlFor="city">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  aria-describedby="city in shipping"
                  placeholder="Enter your zip"
                />
              </div>
            </div>
            <div>
              <div className="form-group">
                <label htmlFor="state">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  value="India"
                  readOnly
                  aria-describedby="state in shipping"
                  placeholder="Enter your state"
                />
              </div>
            </div>
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ShippingInformation;

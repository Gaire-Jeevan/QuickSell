import { NavLink } from "react-router-dom";

const Shipping = () => {
  

  return (
    <div className="flex justify-center items-center md:h-screen">
      <div className="shadow-lg rounded-lg p-5 bg-[#fff] md:w-full md:max-w-3xl">
        <div className="flex flex-col mb-3 md:mb-">
          <h2 className="font-bold text-xl md:text-3xl">
            Shipping Information
          </h2>
        </div>

        <div>
          <form >
            <div className="form-group mb-3">
              <label
                htmlFor="nameForShipping"
                className="text-sm md:text-lg mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameForShipping"
                aria-describedby=""
                placeholder=""
                name="fullName"
              />
            </div>

            <div className="form-group mb-3">
              <label
                htmlFor="addressForShipping"
                className="text-sm md:text-lg mb-2"
              >
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="addressForShipping"
                aria-describedby=""
                placeholder=""
                name="address"
              />
            </div>

            <div className="flex space-x-2 items-center justify-between">
              <div className="form-group text-lg mb-3 w-full">
                <label
                  htmlFor="nameForShipping"
                  className="text-sm md:text-lg mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameForShipping"
                  aria-describedby=""
                  placeholder=""
                  name="city"
                />
              </div>

              <div className="form-group  mb-3 w-full">
                <label
                  htmlFor="countryForShipping"
                  className="text-sm md:text-lg mb-2"
                >
                  Country
                </label>
                <select
                  className="form-control"
                  id="countryForShipping"
                  aria-describedby=""
                  name="country"
                >
                  <option value="">Select country</option>
                  <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                </select>
              </div>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="postalForShipping"
                className="text-sm md:text-lg mb-2"
              >
                Postal Address
              </label>
              <input
                type="text"
                className="form-control"
                id="postalForShipping"
                aria-describedby=""
                placeholder=""
                name="postalCode"
              />
            </div>
          </form>
        </div>

        {/* For Next button */}
        <div className="flex justify-end mt-5">
          <NavLink to="/payment" className="btn btn-dark">
            Next
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Shipping;

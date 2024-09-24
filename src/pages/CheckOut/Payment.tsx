import { Link, NavLink } from "react-router-dom";

const Payment = () => {
  return (
    <div className="flex justify-center items-center  m-2 md:h-screen">
      <div className="shadow-lg rounded-lg bg-[#fff] p-9 md:w-full md:max-w-3xl">
        <div className="flex flex-col mb-3 md:mb-">
          <h2 className="font-bold text-xl mb-3 md:text-3xl">Payment Method</h2>
        </div>

        <div className="">
          <form>
            <div className="space-y-3 mb-8">
              <div className="form-check">
                <input
                  className="form-check-input font-medium text-lg"
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  defaultChecked
                />
                <label
                  className="form-check-label font-medium text-lg"
                  htmlFor="creditCard"
                >
                  Credit Card
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input font-medium text-lg"
                  type="radio"
                  name="paymentMethod"
                  id="payPal"
                  value="payPal"
                />
                <label
                  className="form-check-label font-medium text-lg"
                  htmlFor="payPal"
                >
                  PayPal
                </label>
              </div>
            </div>

            {/* Card Number */}
            <div className="form-group mb-4">
              <label htmlFor="cardNumber" className="text-base md:text-lg mb-1">
                Card Number
              </label>
              <input
                type="number"
                className="form-control"
                id="cardNumber"
                aria-describedby=""
                value="cardNumber"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="flex space-x-2 items-center justify-between">
              <div className="form-group text-lg mb-4 w-full">
                <label
                  htmlFor="creditCardForPayment"
                  className="text-base md:text-lg mb-1"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="creditCardForPayment"
                  aria-describedby="expirationDateOfCreditCard"
                  value="expiryDate"
                  placeholder="MM/YYYY"
                />
              </div>

              {/* three digit security code that is present in backside of credit card */}
              <div className="form-group  mb-4 w-full">
                <label
                  htmlFor="cvvForPayment"
                  className="text-base md:text-lg mb-1"
                >
                  CVV
                </label>
                <input
                  className="form-control"
                  id="cvvForPayment"
                  aria-describedby="cvvOfCreditCard"
                  placeholder="123"
                  value="cvv"
                />
              </div>
            </div>
          </form>
        </div>

        {/* For Previous and Next button */}
        {/* Navigation buttons */}
        <div className="flex justify-between mt-3">
          <span>
            <Link to="/shipping" className="btn btn-outline-secondary">
              Previous
            </Link>
          </span>
          <span>
            <Link to="/review" className="btn btn-dark">
              Next
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Payment;

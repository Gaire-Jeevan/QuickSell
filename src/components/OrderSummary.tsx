import sofaSet from "../assets/sofaSet.png";

const OrderSummary = () => {
  return (
    <div className="lg:w-[495px] xl:w-[680px] xl:ml-[-190px]">
      <h3 className="font-medium text-xl mt-5 mb-4 ml-4 pt-3">Order Summary</h3>
      <div className="shadow-md mr-2 ml-2 mt-2 mb-2 lg:mr-0 p-2 bg-[#f9f9fa]">
        <div className="p-2 space-y-4 mb-3">
          {/* Adjusted flex and width properties */}
          <div className="flex justify-between items-center space-x-2">
            {/* Reduced spacing to allow more room for the text */}
            <div className="flex space-x-4 w-full">
              <img
                className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-cover rounded-md"
                src={sofaSet}
                alt=""
              />
              {/* Set a flexible width for the text container to allow wrapping */}
              <div className="flex flex-col mt-2 text-sm md:text-lg flex-1">
                <h4 className="font-medium">Classic Leather Shoes</h4>
                <p>Quantity: 1</p>
              </div>
            </div>
            {/* Adjusted text size for better alignment on smaller screens */}
            <div className="text-base md:text-xl font-bold">$59.99</div>
          </div>
          {/* Applied similar adjustments to the second item */}
          <div className="flex justify-between items-center space-x-2">
            {/* Reduced spacing to allow more room for the text */}
            <div className="flex space-x-4 w-full">
              <img
                className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-cover rounded-md"
                src={sofaSet}
                alt=""
              />
              {/* Set a flexible width for the text container to allow wrapping */}
              <div className="flex flex-col mt-2 text-sm md:text-lg flex-1">
                <h4 className="font-medium">Classic Leather Shoes</h4>
                <p>Quantity: 1</p>
              </div>
            </div>
            {/* Adjusted text size for better alignment on smaller screens */}
            <div className="text-base md:text-xl font-bold">$59.99</div>
          </div>
        </div>
        <hr />
        <div className="mt-4 ml-2 space-y-3 text-lg font-medium">
          <span className="flex justify-between">
            <h4>Subtotal:</h4>
            <p>$149.98</p>
          </span>
          <span className="flex justify-between">
            <h4>Shipping:</h4>
            <p>$5.00</p>
          </span>
          <span className="flex justify-between">
            <h4>Tax:</h4>
            <p>$12.00</p>
          </span>
          <span className="flex justify-between">
            <h4>Total:</h4>
            <p className="text-lg font-bold">$166.98</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

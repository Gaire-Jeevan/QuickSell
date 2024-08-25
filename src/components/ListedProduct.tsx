import sofaset from "../assets/sofaSet.png";

const ListedProduct = () => {
  return (
    <div className="mt-4 lg:mt-10">
      <h3 className="text-xl font-medium ">Listed Product</h3>
      <div className="flex mt-3 bg-[#f9f9fa] shadow-md p-2 justify-between items-center mb-4">
        <div className="flex">
          <img
            className="rounded-lg w-[80px] h-[80px]"
            src={sofaset}
            alt="pastOrder"
          />
          <div className="flex flex-col ml-4">
            <h4 className="text-lg font-medium">Vintage Camera</h4>
            <p>A classic film camera in excellent condition.</p>
          </div>
        </div>

        <span className="bg-red-600 text-white rounded-lg w-12 h-7 text-center">Sold</span>
      </div>

      <div className="flex mt-2 bg-[#f9f9fa] shadow-md p-2 justify-between items-center mb-4">
        <div className="flex">
          <img
            className="rounded-lg w-[80px] h-[80px]"
            src={sofaset}
            alt="pastOrder"
          />
          <div className="flex flex-col ml-4">
            <h4 className="text-lg font-medium">Vintage Camera</h4>
            <p>A classic film camera in excellent condition.</p>
          </div>
        </div>

        <span className="bg-red-600 text-white rounded-lg w-12 h-7 text-center">Sold</span>
      </div>
    </div>
  );
};

export default ListedProduct;

import { FiDollarSign, FiShoppingBag } from "react-icons/fi"

const RecentSales = () => {
  return (
    <div className="mt-5 shadow-lg rounded-lg p-4 bg-[#fff]">
      <div className="mb-5 space-y-1">
        <h3 className="text-3xl font-bold">Recent Sales</h3>
        <p className="text-lg">Your latest sales</p>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between items-center shadow-lg p-3 md:p-4 rounded-lg bg-[#fff]">
          <div className="flex items-center space-x-2 md:space-x-6 ">
            <span>
              <FiShoppingBag size={30} />
            </span>
            <div className="flex flex-col">
              <h4 className="textlg md:text-xl font-medium">Vintage Camera</h4>
              <p className="text-sm md:text-lg">May 1, 2023</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="textlg md:text-xl font-medium">$120.00</h4>
            <p className="text-sm md:text-lg">Delivered</p>
          </div>
        </div>

        <div className="flex justify-between items-center shadow-lg p-3 md:p-4 rounded-lg bg-[#fff]">
          <div className="flex items-center space-x-2 md:space-x-6 ">
            <span>
              <FiDollarSign size={30} />
            </span>
            <div className="flex flex-col">
              <h4 className="textlg md:text-xl font-medium">Mountain Bike</h4>
              <p className="text-sm md:text-lg">April 28, 2023</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="textlg md:text-xl font-medium">$350.00</h4>
            <p className="text-sm md:text-lg">Shipped</p>
          </div>
        </div>

        <div className="flex justify-between items-center shadow-lg p-3 md:p-4 rounded-lg bg-[#fff]">
          <div className="flex items-center space-x-2 md:space-x-6 ">
            <span>
              <FiShoppingBag size={30} />
            </span>
            <div className="flex flex-col">
              <h4 className="textlg md:text-xl font-medium">Leather Jacket</h4>
              <p className="text-sm md:text-lg">April 15, 2023</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="textlg md:text-xl font-medium xxs:ml-2">$85.50</h4>
            <p className="text-sm md:text-lg">Processing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentSales
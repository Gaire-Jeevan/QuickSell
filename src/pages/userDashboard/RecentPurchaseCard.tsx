import { FiShoppingBag } from 'react-icons/fi';

interface Props {
    productName: string;
    price: number;
    orderStatus: string;
    createdAt: string;
  
  }

const RecentPurchaseCard = ({productName, price, orderStatus, createdAt}: Props) => {
  return (
    <div className="flex justify-between items-center shadow-lg p-3 md:p-4 rounded-lg bg-[#fff]">
          <div className="flex items-center space-x-2 md:space-x-6 ">
            <span>
              <FiShoppingBag size={30} />
            </span>
            <div className="flex flex-col">
              <h4 className="textlg md:text-xl font-medium">{productName}</h4>
              <p className="text-sm md:text-lg">{createdAt}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="textlg md:text-xl font-medium">{price}</h4>
            <p className="text-sm md:text-lg">{orderStatus}</p>
          </div>
        </div>
  )
}

export default RecentPurchaseCard
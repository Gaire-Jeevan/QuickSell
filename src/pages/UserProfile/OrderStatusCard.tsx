import { FaChevronRight } from 'react-icons/fa'

interface Props {
  productName: string;
  price: number;
  orderStatus: string;
  createdAt: string;

}
const OrderStatusCard = ({productName, price,createdAt,  orderStatus}: Props) => {
  return (
    <div className="shadow-lg rounded-lg p-3 bg-[#ffffff] flex justify-between items-center mb-3">
        <div className="flex flex-col">
          <p className="textlg md:text-xl font-medium">{productName}</p>
          <p className='text-sm md:text-lg'>{createdAt}</p>
        </div>
        <div>
          <p className="textlg md:text-xl font-medium">{price}</p>
          <p className='text-sm md:text-lg'>{orderStatus}</p>
        </div>
        <span><FaChevronRight size={20}/></span>

      </div>
  )
}

export default OrderStatusCard
import { FaChevronRight } from 'react-icons/fa'

const OrderStatusCard = () => {
  return (
    <div className="shadow-lg rounded-lg p-3 bg-[#ffffff] flex justify-between items-center mb-3">
        <div className="flex flex-col">
          <p className="textlg md:text-xl font-medium">Order#1234</p>
          <p className='text-sm md:text-lg'>May 1, 2023</p>
        </div>
        <div>
          <p className="textlg md:text-xl font-medium">$120.00</p>
          <p className='text-sm md:text-lg'>Delivered</p>
        </div>
        <span><FaChevronRight size={20}/></span>

      </div>
  )
}

export default OrderStatusCard
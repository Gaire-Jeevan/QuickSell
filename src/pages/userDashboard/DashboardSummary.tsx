import { FiBox, FiDollarSign, FiHeart, FiShoppingBag } from 'react-icons/fi'

const DashboardSummary = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
        <div className='flex space-x-5 items-center p-4 shadow-lg rounded-lg bg-[#ffffff]'>
            <span><FiBox size={30}/></span>
            <div>
                <h4 className='text-xl '>Active Listings</h4>
                <p className='font-bold text-3xl'>12</p>
            </div>
        </div>

        <div className='flex space-x-5 items-center p-4 shadow-lg rounded-lg bg-[#ffffff]'>
            <span><FiShoppingBag size={30}/></span>
            <div>
                <h4 className='text-xl '>Completed Sales</h4>
                <p className='font-bold text-3xl'>48</p>
            </div>
        </div>

        <div className='flex space-x-5 items-center p-4 shadow-lg rounded-lg bg-[#ffffff]'>
            <span><FiHeart size={30}/></span>
            <div>
                <h4 className='text-xl '>Saved Items</h4>
                <p className='font-bold text-3xl'>23</p>
            </div>
        </div>

        <div className='flex space-x-5 items-center p-4 shadow-lg rounded-lg bg-[#ffffff]'>
            <span><FiDollarSign size={30}/></span>
            <div className='space-y-1'>
                <h4 className='text-xl '>Total Earnings</h4>
                <p className='font-bold text-3xl'>$1,234.56</p>
            </div>
        </div>
    </div>
  )
}

export default DashboardSummary
import React from 'react'
import { FiCreditCard } from 'react-icons/fi'

const PaymentMethods = () => {
  return (
    <div className="shadow-lg rounded-lg bg-[#ffffff] p-4">
      <div className="mb-5">
        <h2 className="font-medium text-2xl md:text-3xl">Order History</h2>
        <p className="md:text-lg">View your past orders and their status.</p>
      </div>

      <div>
      

      <div className="shadow-lg rounded-lg p-3 bg-[#ffffff] flex justify-between items-center mb-3">
        <div className='flex items-center space-x-5'>
            <div className="flex flex-col">
            <FiCreditCard size={30}/>
            </div>
            <div>
              <p className="md:text-xl font-medium">Visa ending in 4321</p>
              <p className='text-sm'>Expires 12/24</p>
            </div>
        </div>
        <span className='md:text-lg font-medium'>Edit</span>

      </div>

      <div className='mt-8'><button className='bg-black text-white w-full p-2 rounded-lg'>Add New Payment Method</button></div>
      </div>
    </div>
  )
}

export default PaymentMethods
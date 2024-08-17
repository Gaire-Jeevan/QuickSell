import React from 'react'

const Footer = () => {
  return (
    
    <div className='bg-[#f1f5f9]'>
      <div className=' grid grid-cols-1 mx-7 md:grid-cols-2 lg:grid-cols-3 justify-between'>
          <div className='flex flex-col mt-8'>
              <h3 className='mb-2 text-xl font-bold'>Quick Links</h3>
              <span  className='mb-2 text-[16px]  hover:underline'>Home</span>
              <span  className='mb-2 text-[16px]  hover:underline'>Browse Product</span>
              <span  className='mb-2 text-[16px]  hover:underline'>Sell Your Items</span>
              <span  className='mb-2 text-[16px]  hover:underline'>About Us</span>
              <span  className='mb-2 text-[16px]  hover:underline'>Contact Us</span>
          </div>
          <div className='flex flex-col mt-8'>
              <h3 className='mb-2 text-xl font-bold'>Legal</h3>
              <span  className='mb-2 text-[16px]  hover:underline'>Terms of Service</span>
              <span  className='mb-2 text-[16px]  hover:underline'>Privacy Policy</span>
              <span  className='mb-2 text-[16px]  hover:underline'>Cookie Policy</span>
          </div>
          <div className='flex flex-col mt-8 mb-2'>
              <h3 className='mb-2 text-xl font-bold'>Support</h3>
              <span  className='mb-2 text-[16px]  hover:underline'>FAQs</span>
          </div>
      </div>
    </div>
  )
}

export default Footer
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
    <div className='bg-[#f1f5f9]'>
      <div className=' grid grid-cols-1 mx-7 md:grid-cols-2 lg:grid-cols-3 justify-between'>
          <div className='flex flex-col mt-8'>
              <h3 className='mb-2 text-xl font-bold'>Quick Links</h3>
              <Link to="/home"  className='mb-2 text-[16px]  hover:underline'>Home</Link>
              <Link to="/browseProduct" className='mb-2 text-[16px]  hover:underline'>Browse Product</Link>
              <Link to="/sell" className='mb-2 text-[16px]  hover:underline'>Sell Your Items</Link>
              <Link to="/aboutUs"  className='mb-2 text-[16px]  hover:underline'>About Us</Link>
              <Link to="/contactUs"  className='mb-2 text-[16px]  hover:underline'>Contact Us</Link>
          </div>
          <div className='flex flex-col mt-8'>
              <h3 className='mb-2 text-xl font-bold'>Legal</h3>
              <Link to="/termsOfCondition"  className='mb-2 text-[16px]  hover:underline'>Terms of Service</Link>
              <Link to="/privacyPolicy"  className='mb-2 text-[16px]  hover:underline'>Privacy Policy</Link>
              <Link to="cookiePolicy"  className='mb-2 text-[16px]  hover:underline'>Cookie Policy</Link>
          </div>
          <div className='flex flex-col mt-8 mb-2'>
              <h3 className='mb-2 text-xl font-bold'>Support</h3>
              <Link to="/faqs"  className='mb-2 text-[16px]  hover:underline'>FAQs</Link>
          </div>
      </div>
    </div>
  )
}

export default Footer
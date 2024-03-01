import React from 'react'
import paylogo from '../assests/codeswearpay.png'
import codeswearlogo from '../assests/logo.png'



const Footer = () => {
  return (
    
      <div className=' px-12 py-3 bg-gray-100'>
    <div className='w-[90%] mx-auto flex flex-col gap-y-2 '>
        <div className='my-8 flex lg:flex-row flex-col items-center gap-y-10  flex-wrap lg:gap-x-1 lg:justify-between'>
          <div className='lg:text-left text-center'>
              <img className='w-64' src={codeswearlogo} alt="" />
               <p className='text-gray-500 text-sm ms-2 mt-2'>Wear the code </p>
               <p className='text-gray-500 text-sm ms-2'>Premium coding tshirts, hoodies</p>
               <p className='text-gray-500 text-sm ms-2'>and apparals</p>
          </div>
          <div className='lg:text-left text-center'>
              <h3 className='text-base text-gray-600 uppercase font-medium mb-4'>Shop</h3>
               <p className='text-gray-500 text-base '>Tshirt</p>
               <p className='text-gray-500 text-base '>Sweat</p>
               <p className='text-gray-500 text-base '>Hoodies</p>
               <p className='text-gray-500 text-base '>Zipper Hoodies</p>
               <p className='text-gray-500 text-base '>Mug</p>
          </div>
          <div className='lg:text-left text-center'>
              <h3 className='text-base text-gray-600 uppercase font-medium mb-4'>Customer Service</h3>
               <p className='text-gray-500 text-base '>Contact Us </p>
               <p className='text-gray-500 text-base '>About</p>
               <p className='text-gray-500 text-base '>Return Policy</p>
          </div>
          <div className='lg:text-left text-center'>
          <h3 className='text-base text-gray-600 uppercase font-medium mb-4'>Policy</h3>
          <p className='text-gray-500 text-base '>Privacy Policy </p>
               <p className='text-gray-500 text-base '>Terms and Condition</p>
               <p className='text-gray-500 text-base '>Return Policy</p>
          </div>
          <div className='text-left my-auto'>
           <img className='w-56' src={paylogo} alt="" />
          </div>
        </div>
        <div>
          <p>© 2024 CodesWear.com — All Rights Reserved</p>
        </div>
    </div>
 </div>
    
  )
}

export default Footer

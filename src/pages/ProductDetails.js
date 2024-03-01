import React from 'react'
import product_details from '../assests/product-details.webp'

const ProductDetails = () => {
  return (
    <>
      <div className='md:h-screen w-full flex md:flex-row flex-col items-center max-w-[1200px] mx-auto  gap-20'>

        <div className='flex items-center p-2 '>
          <div>
            <img className=' w-full h-96 rounded-lg object-cover hover:object-fill' src={product_details} alt="" />
          </div>
        </div>


        <div className='flex flex-col md:items-start items-center md:justify-start  gap-3 px-4 md:px-0 md:pt-10 border-b-2 border-gray-300 w-full'>
          <p className='text-4xl font-semibold text-black'>Swag Dekh Sarcastic Graphic Printed Oversizedtshirt (S/Black)</p>
          <p className='text-2xl font-medium text-black'>₹ 499</p>
          <p className='text-lg text-gray-500 font-normal'>Bold and eye-catching "Swag Dekh" graphic print</p>

          <div className='flex justify-between w-[10rem] border-2 border-black rounded-md overflow-hidden'>
            <div className='w-12 h-9 flex justify-center items-center text-lg font-medium bg-gray-300 cursor-pointer'>+</div>
            <div className='w-12 h-9 flex justify-center items-center text-lg font-medium'>0</div>
            <div className='w-12 h-9 flex justify-center items-center text-lg font-medium bg-gray-300 cursor-pointer'>-</div>
          </div>

          <div className='flex justify-between w-auto  rounded-md overflow-hidden mt-2'>
            {["S","M","L","XL","XXL"].map((item,i) => (
              <div key={i} className='w-12 h-9 mx-2 flex justify-center items-center text-xl text-black border-2 border-black font-medium rounded-md  cursor-pointer'>{item}</div>
            ))}
          </div>
          

          <button className=' w-[10rem] py-2 px-5 bg-purple-800 font-medium text-lg rounded-md text-white my-5 transition delay-150 ease-in-out hover:bg-purple-700 '>Add to cart</button>
           <div className='border-t-2 border-dashed border-black py-4 text-center'>
              <p className='text-lg text-gray-500 font-medium'>Add a touch of attitude and sarcasm to your wardrobe with the "Swag Dekh Sarcastic Graphic Printed Oversized T-shirt". This trendy and edgy t-shirt features a bold and eye-catching graphic print that showcases your unique sense of style.</p>
               <p className='text-lg text-gray-500 font-medium'>our item must be unused and in the same condition that you received it.</p>
           </div>
        </div>

        


      </div>
    </>
  )
}

export default ProductDetails

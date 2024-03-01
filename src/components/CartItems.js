import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import cartImg from '../assests/productRated.webp'
const CartItems = () => {
  return (
    <div>
        <div className='py-4 flex justify-between gap-4 border-b-2 border-gray-300'>

            <div>
                <img className='w-24 h-24' src={cartImg} alt="" />
            </div>

             <div>
                <p className='text-base text-gray-500 font-medium leading-normal'>Monkey D. Luffy Poster with Frame</p>
                <p className='text-lg font-medium '>₹ 110</p>
                <div className='flex justify-between w-28 border-2 border-black'>
                    <div className='text-xl cursor-pointer  px-3 bg-gray-300 text-black flex justify-center items-center'>+</div>
                    <div className='text-xl  px-2  text-black flex justify-center items-center '>0</div>
                    <div className='text-xl  cursor-pointer px-3 bg-gray-300 text-black flex justify-center items-center'>-</div>
                </div>
                <p className=' font-medium mt-2'>subTotal: ₹ 110 </p>
             </div>

            <div>
            <AiOutlineClose className='cursor-pointer'  />
            </div>

        </div> 
    </div>
  )
}

export default CartItems

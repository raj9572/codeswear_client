import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import CartItems from './CartItems'
const Cart = ({onClose}) => {
    return (

        <div className=' fixed top-0 left-0 h-full w-full z-40 flex justify-end'>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-55 ' onClick={onClose}></div>

            <div className='animate-[wiggle_1s_ease-in-out_forwards] h-screen relative w-80 px-2  z-50  bg-white  '>
                    {/* header section */}
                <div className='h-12 py-6 flex justify-between items-center border-b-2 border-gray-400'>
                    <h3 className='text-black text-xl font-medium'>Shoping Cart</h3>
                    <div onClick={onClose} className='cursor-pointer hover:text-gray-500 text-balck text-lg font-normal flex items-center gap-x-1 '><AiOutlineClose className='w-7 h-5 ' /> close</div>
                </div>
                    {/* cart section */}
                <div>
                    <CartItems/>
                    <CartItems/>
                </div>

            </div>
        </div>

    )
}

export default Cart

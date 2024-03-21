import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import cartImg from '../assests/productRated.webp'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, removeItemFromCart } from '../redux/Slice/cartSlice'
const CartItems = ({cart}) => {
  const dispatch = useDispatch()
  return (
    <div>
        <div className='py-4 flex justify-between gap-4 border-b-2 border-gray-300'>

            <div>
                <img className='w-24 h-24' src={cart?.productImage?.url || cartImg} alt="" />
            </div>

             <div>
                <p className='text-base text-gray-500 font-medium leading-normal'>{cart?.title.slice(0,20)}...</p>
                <p className='text-lg font-medium '>₹ {cart?.price} </p>
                <div className='flex justify-between w-28 border-2 border-black'>
                    <div onClick={()=>{dispatch(addToCart({product:cart}))}}  className='text-xl cursor-pointer  px-3 bg-gray-300 text-black flex justify-center items-center'>+</div>
                    <div className='text-xl  px-2  text-black flex justify-center items-center '>{cart? cart.quantity : 0}</div>
                    <div onClick={()=>{dispatch(removeFromCart(cart))}} className='text-xl  cursor-pointer px-3 bg-gray-300 text-black flex justify-center items-center'>-</div>
                </div>
                <p className=' font-medium mt-2'>subTotal: ₹ {cart?.price * cart.quantity } </p>
             </div>

            <div>
            <AiOutlineClose onClick={()=>{dispatch(removeItemFromCart(cart))}} className='cursor-pointer'  />
            </div>

        </div> 
    </div>
  )
}

export default CartItems

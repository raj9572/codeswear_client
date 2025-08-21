/* eslint-disable no-unused-vars */
import React from 'react'
import topRatedProduct from '../assests/topRatedProduct.webp'
import { useNavigate } from 'react-router-dom'
import { FcLike } from 'react-icons/fc'
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { WishListProduct } from '../redux/Slice/appConfigSlice'
// import changeImage from '../assests/productRated.webp'
const Product = ({product}) => {
  const user = useSelector(state => state.appConfigReducer.myProfile)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div  className='cursor-pointer p-4  md:w-auto sm:w-[45%]   py-6  rounded-lg shadow-lg overflow-hidden '>
       <img onClick={()=>{navigate(`/product-details/${product?._id}`)}} className=' w-64 h-72  object-cover  rounded-sm transition delay-150 hover:scale-105 mx-auto ' src={product?.productImage.url} alt="" />
       {/* <img className='h-[75%] rounded-sm hover:block ' src={changeImage} alt="" /> */}
       <h3 className='text-gray-400 font-medium text-xl mt-1 '>{product?.category.category}</h3>
       <p className='text-lg text-black font-medium tracking-wide '>{product?.title.slice(0,20)}....</p>
       <div className='flex justify-between'>
       <p className='text-black text-base font-medium '> <span className='text-gray-500  font-medium'>₹{Number(product?.price) + 100} </span> ₹{product?.price}</p>
          {user?.wishlist?.includes(product._id) ? <FcLike onClick={()=>dispatch(WishListProduct(product._id))} className='w-6 h-6'/> : <FaHeart onClick={()=>dispatch(WishListProduct(product._id))} className='text-gray-200 shadow-2xl w-6 h-6'/>}  
       </div>

    </div>
  )
}

export default Product

import React from 'react'
import topRatedProduct from '../assests/topRatedProduct.webp'
import { useNavigate } from 'react-router-dom'
// import changeImage from '../assests/productRated.webp'
const Product = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>{navigate("/product-details/dsl")}} className='cursor-pointer lg:p-4 lg:w-[18%] lg:h-[30rem]  h-[20rem] py-6  rounded-lg shadow-lg overflow-hidden '>
       <img className=' h-[75%]  object-cover rounded-sm transition delay-150 hover:scale-105 ' src={topRatedProduct} alt="" />
       {/* <img className='h-[75%] rounded-sm hover:block ' src={changeImage} alt="" /> */}
       <h3 className='text-gray-400 font-medium text-xl mt-1 '>category</h3>
       <p className='text-2xl text-black font-medium tracking-wide '>title</p>
       <p className='text-black text-lg font-medium '> <span className='text-gray-500 text-lg font-medium'>400₹</span> 300₹</p>

    </div>
  )
}

export default Product

import React from 'react'
import tshirt1 from '../assests/Tshirt1.jfif'
import {  useNavigate } from 'react-router-dom'
const Collections = ({category}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>{navigate(`/categories/${category.category}`)}} className='cursor-pointer md:w-[28%] sm:w-[48%] w-[48%]  h-80 relative rounded-md border-2 overflow-hidden border-black transition delay-150  hover:scale-105'>
        <img className='w-full h-full object-fill   transition delay-150  hover:scale-105' src={category?.categoryImage?.url || tshirt1} alt="" /> 
        <p className='absolute bottom-4 left-1/2 -translate-x-1/2 text-3xl text-white font-semibold '>{category.category.toUpperCase()}</p>
    </div>
  )
}

export default Collections

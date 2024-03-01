import React from 'react'
import tshirt1 from '../assests/Tshirt1.jfif'
import {  useNavigate } from 'react-router-dom'
const Collections = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>{navigate("/categories/dfkdl")}} className='cursor-pointer w-auto   my-4 md:h-72 sm:h-60 h-44 relative rounded-md border-2 overflow-hidden border-black transition delay-150  hover:scale-105'>
        <img className='w-full h-full object-fill   transition delay-150  hover:scale-105' src={tshirt1} alt="" /> 
        <p className='absolute bottom-4 left-1/2 -translate-x-1/2 text-3xl text-white font-semibold '>Tshirt</p>
    </div>
  )
}

export default Collections

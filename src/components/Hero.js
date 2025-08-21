/* eslint-disable no-unused-vars */
import React from 'react'
import heroimg from '../assests/heroimg.png'
import mobileHero from '../assests/mobileHero.webp'
import { useNavigate } from 'react-router-dom'
import HeroBanner from './HeroBanner'
const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='mb-5 border-2 border-black w-full md:h-[64vh] h-[80vh]  relative md:shadow-xl '>
        {/* <img  className='h-full w-full object-fit object-center hidden md:block' src={heroimg} alt="" />
        <img className='w-full h-full md:hidden block' src={mobileHero} alt="" />
        <div className='absolute w-full h-full left-0 top-0 transition duration-700 ease-in-out hover:bg-black hover:opacity-30'></div>
         <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
             <p className='text-2xl font-medium md:text-white text-pink-700  shadow-white brightness-200 md:shadow-slate-700'>wear the code with codewears.com</p>
             <p className='text-xl font-normal text-white my-3 '>Whatever you want? you want code? so why not weat the code?</p>
             <button onClick={()=>{navigate("/categories")}} className='bg-rose-500 py-1 px-3 rounded-md font-medium text-base text-white hover:bg-rose-600'>explore more</button>
         </div> */}
         <HeroBanner/>
    </div>
  )
}

export default Hero

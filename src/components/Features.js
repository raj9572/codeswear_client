import React from 'react'
import { TbHanger } from 'react-icons/tb'

const Features = () => {
  return (
    <div className='px-8 py-10'>
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4 '>
      <div className='lg:w-[24rem] md:w-[20rem] w-[18rem] text-center px-6 py-8 flex flex-col items-center gap-y-1 border-2 border-slate-100 shadow-md'>
          <div className='w-10 h-10 rounded-full bg-pink-200'><TbHanger className='w-10 h-10 text-pink-400 p-1'/></div>
          <p className='text-2xl text-black font-medium'>Premium Tshirts</p>
          <p className='text-base text-gray-600'>Our T-Shirts are 100% made of cotton.</p>
      </div>
      <div className='lg:w-[24rem] md:w-[20rem] w-[18rem] text-center px-6 py-8 flex flex-col items-center gap-y-1 border-2 border-slate-100 shadow-md'>
          <div className='w-10 h-10 rounded-full bg-pink-200'><TbHanger className='w-10 h-10 text-pink-400 p-1'/></div>
          <p className='text-2xl text-black font-medium'>Premium Tshirts</p>
          <p className='text-base text-gray-600'>Our T-Shirts are 100% made of cotton.</p>
      </div>
      <div className='lg:w-[24rem] md:w-[20rem] w-[18rem] text-center px-6 py-8 flex flex-col items-center gap-y-1 border-2 border-slate-100 shadow-md'>
          <div className='w-10 h-10 rounded-full bg-pink-200'><TbHanger className='w-10 h-10 text-pink-400 p-1'/></div>
          <p className='text-2xl text-black font-medium'>Premium Tshirts</p>
          <p className='text-base text-gray-600'>Our T-Shirts are 100% made of cotton.</p>
      </div>
    </div>
</div>
  )
}

export default Features

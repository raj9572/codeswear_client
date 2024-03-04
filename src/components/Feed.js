import React from 'react'
import Hero from './Hero'
import Collections from './Collections'
import Product from './Product'
import Features from './Features'


const Feed = () => {
  return (
    <>
      <Hero />
      <div className='px-14 py-10 '>
        <div className='flex flex-col flex-wrap'>
          <div className='text-center mb-12'>
            <p className='sm:text-4xl text-3xl font-bold uppercase tracking-wide '>Collections</p>
          </div>
          <div className='flex flex-wrap md:gap-4 gap-2 justify-center'>
            <Collections />
            <Collections />
            <Collections />
            <Collections />
           

          </div>


        </div>
      </div>

      <div className='px-14 py-10' >

        <div className='flex flex-col gap-y-6'>
          <div>
            <p className='sm:text-4xl text-3xl ms-6  text-black font-semibold tracking-wide'>Bestselling Products</p>
            <div className=' ms-6 h-2  border-b-4 rounded-md border-red-400 w-32 mt-2'></div>
          </div>
          <div className='flex flex-wrap gap-2 md:gap-4 justify-center'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>

       
       <Features/>
     
     
     {/* Footer start here */}
    


    </>
  )
}

export default Feed

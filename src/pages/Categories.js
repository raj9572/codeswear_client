import React from 'react'
import { FcClearFilters } from 'react-icons/fc'
import Product from '../components/Product'
const Categories = () => {
  const categories = ["Tshirt", "Hoodies", "Stickers", "Mug"]
  const themes = ["Anime", "Coding", "Charactor", "Gaming", "Motivational", "Hacking"]
  return (
    <>
      <div className='py-8'>
        <div className='flex flex-start  px-10 md:gap-12 gap-2'>

          <div className='md:w-[20rem] w-[10rem]  h-fit border-2 border-black   '>

            <div className='flex justify-between  border-b-2 border-black pb-4'>
              <h1 className='text-4xl font-medium text-black'>Filters</h1>
              <FcClearFilters className='w-10 h-10' />
            </div>

            <div className='py-4 px-3'>
              <p className='text-xl font-medium text-black px-5'>Category</p>
              {
                categories?.map((item, i) => (
                  <div key={i} className='flex md:px-10 gap-2 my-2 '>
                    <input type="radio" name="category" id={item} className='w-4 cursor-pointer ' />
                    <label htmlFor={item} className='text-xl font-medium cursor-pointer'>{item}</label>
                  </div>
                ))
              }
            </div >


            <div className='py-4 px-3' >
              <p className='text-xl font-medium text-black px-5'>Theme</p>
              {
                themes?.map((item, i) => (
                  <div key={i} className='flex md:px-10 gap-2 my-2 '>
                    <input type="checkbox" name="category" id={item} className='w-4 cursor-pointer ' />
                    <label htmlFor={item} className='text-xl font-medium cursor-pointer'>{item}</label>
                  </div>
                ))
              }
            </div>

            <div className='py-4 px-3'>
              <button className='bg-pink-700 text-base py-2 px-3 rounded-2xl hover:bg-pink-900 text-white font-medium '>Apply Filter</button>

            </div>


          </div>


          <div className='w-screen border-2 border-black   md:px-10 flex flex-wrap gap-4'>
            <h1 className=' mx-auto text-4xl text-black font-semibold tracking-wide'>Explore Our Hoodies Collection</h1>
            <div className='text-center text-sm text-gray-900  font-medium '>
              Stay warm and stylish with the wide selection of hoodies available at Codeswear.com. Our hoodies are perfect for every occasion, whether you're looking for a casual everyday hoodie or something to wear to the gym. We have a variety of styles to choose from, including coding hoodies, anime hoodies, and casual hoodies for everyday wear. All of our hoodies are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect hoodie for you!
            </div>
            <div className=' flex flex-wrap gap-6 '>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
            </div>

          </div>


        </div>

      </div>
    </>
  )
}

export default Categories

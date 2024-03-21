import React, { useEffect } from 'react'
import Hero from './Hero'
import Collections from './Collections'
import Product from './Product'
import Features from './Features'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory, getAllProduct } from '../redux/Slice/productSlice'

const Feed = () => {
    const collections = [
        {  _id:"385058",
           category:"tshirt",
           url:"https://res.cloudinary.com/dic1czm4k/image/upload/v1709561940/codeswear%20Images/iauq5f1tjptjbwmykewb.webp"
        },
        {
           _id:"304937",
           category:"hoodies",
           url:"https://res.cloudinary.com/dic1czm4k/image/upload/v1709561626/codeswear%20Images/q6phytctzfyi4omgls5g.jpg"
        },
        {
           _id:"485790",
           category:"sticker",
           url:"https://res.cloudinary.com/dic1czm4k/image/upload/v1709563011/codeswear%20Images/b4zxkmjaupvpzkcpksw1.jpg"
        },
        {
           _id:"483985",
           category:"mug",
           url:"https://res.cloudinary.com/dic1czm4k/image/upload/v1709562558/codeswear%20Images/v40myss8rbfpq8peuwss.jpg"
        },
   ]
   const dispatch = useDispatch()
   const topProducts = useSelector(state => state.productReducer.isTopProduct)
   const categories = useSelector(state => state.productReducer.categories) 

  

   useEffect(()=>{
       dispatch(getAllProduct())
       dispatch(fetchCategory())
   },[])
   
  return (
    <>
      <Hero />
      <div className=' py-10 '>
        <div className='flex flex-col '>
          <div className='text-center mb-12'>
            <p className='sm:text-4xl text-3xl font-bold uppercase tracking-wide '>Collections</p>
          </div>
          <div className='flex flex-wrap justify-center md:gap-4 gap-2 '>
            {
                categories?.map((category)=>(<Collections key={category._id} category={category}/>))
            }
           

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
            {
              topProducts?.map(item =>( <Product key={item._id} product={item}/>))
            }
          </div>
        </div>
      </div>

       
       <Features/>
     
     
     {/* Footer start here */}
    


    </>
  )
}

export default Feed

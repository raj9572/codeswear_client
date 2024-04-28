import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {BiArrowBack} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
    const navigate = useNavigate()
  return (
    <>
      <Carousel 
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
    //   stopOnHover={true}
      showStatus={false}
      transitionTime={1000}
      showArrows={false}
      renderArrowPrev={(clickHandler,hasPrev)=>(
         <div
         onClick={clickHandler}
         className='absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
         >
            <BiArrowBack className='text-sm md:text-lg text-white'/>
         </div>
      )}
      renderArrowNext={(clickHandler,hasNext)=>(
         <div
         onClick={clickHandler}
         className='absolute right-0  bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
         >
            <BiArrowBack className='rotate-180 text-sm md:text-lg text-white'/>
         </div>
      )}

      >
                <div className=' w-full md:h-[64vh] h-[80vh]'>
                    <img src="Hero4.jpg" alt='hero1' className='h-full w-full object-fit object-center hidden md:block' />
                    <button onClick={()=>navigate("/categories")} className=
                    'text-white font-medium rounded-3xl px-3 py-1 text-lg bg-pink-500 absolute  bottom-12 left-1/2 -translate-x-1/2   '
                    >
                        Shop Now</button>
                </div>
                <div className=' w-full md:h-[64vh] h-[80vh]'>
                    <img src="Hero5.jpg" alt='hero1' className='h-full w-full object-fit object-center hidden md:block' />
                    <button onClick={()=>navigate("/categories")} className=
                    'text-white font-medium rounded-3xl px-3 py-1 text-lg bg-pink-500 absolute  bottom-12 left-1/2 -translate-x-1/2   '
                    >
                        Shop Now</button>
                </div>
                <div className=' w-full md:h-[64vh] h-[80vh]'>
                    <img src="hero7.jpg" alt='hero1' className='h-full w-full object-fit object-center hidden md:block' />
                    <button onClick={()=>navigate("/categories")} className=
                    'text-white font-medium rounded-3xl px-3 py-1 text-lg bg-pink-500 absolute  bottom-12 left-1/2 -translate-x-1/2   '
                    >
                        Shop Now</button>
                </div>
                
         </Carousel>
    </>
  )
}

export default HeroBanner

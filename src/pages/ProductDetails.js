/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
// import product_details from '../assests/product-details.webp'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosClient, createAxiosClient } from '../Utils/axiosClient'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/Slice/cartSlice'
import { WishListProduct, openCart, setLoading } from '../redux/Slice/appConfigSlice'
import Product from '../components/Product'
import { FcLike } from 'react-icons/fc'
import { FaHeart } from 'react-icons/fa'
import ReletedProduct from '../components/ReletedProduct'
import ReviewSection from '../components/ReviewSection'
import { store } from '../redux/store'

const ProductDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [reletedProducts, setReletedProducts] = useState([])
  const [varient, setVarient] = useState("S")
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer.cart)
  const cartProduct = cart.filter(item => item?._id === params?.productId)
  const user = useSelector(state => state.appConfigReducer.myProfile)


  async function fetchProductDetails() {
    const axiosClient = createAxiosClient(store)
    try {
      // dispatch(setLoading(true))
      const res = await axiosClient.get(`/products/${params?.productId}`)

      setProduct(res.data.productDetails)
      setReletedProducts(res.data.reletedProducts)

      // dispatch(setLoading(false))

    } catch (error) {
      // dispatch(setLoading(false))
    }
    // console.log("response",res.data)
  }

  // console.log('releted', reletedProducts)

  useEffect(() => {
    if (params.productId) {
      fetchProductDetails()
    }
  }, [params.productId])

  function handleVarientChange(item) {
    const varient = item
    setVarient(varient)
  }

  function handleBuyNow(product, varient) {
    dispatch(openCart(true))
    dispatch(addToCart({ product, varient }))
  }

  return (
    <>
      <div className='md:h-screen w-full flex md:flex-row flex-col items-center max-w-[1200px] mx-auto  gap-20'>

        <div className='flex items-center p-2 '>
          <div>
            <img className=' w-full h-96 rounded-lg object-cover hover:object-fill' src={product?.productImage?.url} alt="" />
          </div>
        </div>


        <div className='flex flex-col md:items-start items-center md:justify-start  gap-3 px-4 md:px-0  border-b-2 border-gray-300 w-full'>
          <p className='text-4xl font-semibold text-black'>{product?.title}</p>
          <p className='text-2xl font-medium text-black'>₹ {["mug", "sticker"].includes(product?.category.category) ? product?.price : product?.prices[0][varient]}</p>
          <p className='text-lg text-gray-500 font-normal'>Bold and eye-catching "Swag Dekh" graphic print</p>

          <div className='flex justify-between w-[10rem] border-2 border-black rounded-md overflow-hidden'>
            <div onClick={() => dispatch(addToCart({ product, varient }))} className='w-12 h-9 flex justify-center items-center text-lg font-medium bg-gray-300 cursor-pointer'>+</div>
            <div className='w-12 h-9 flex justify-center items-center text-lg font-medium'>{cartProduct[0] ? cartProduct[0].quantity : 0}</div>
            <div onClick={() => dispatch(removeFromCart(product))} className='w-12 h-9 flex justify-center items-center text-lg font-medium bg-gray-300 cursor-pointer'>-</div>
          </div>

          <div className='flex justify-between w-auto  rounded-md overflow-hidden mt-2'>
            {!["mug", "sticker"].includes(product?.category.category) && product?.varients?.map((item, i) => (
              <div key={i} onClick={() => { handleVarientChange(item) }} className='w-12 h-9 mx-2 flex justify-center items-center text-xl text-black border-2 border-black font-medium rounded-md active:border-2 active:border-pink-900   cursor-pointer'>{item}</div>
            ))}
          </div>

          <div className='flex gap-2'>
            <button onClick={() => dispatch(addToCart({ product, varient }))} className=' w-[10rem] py-2 px-5 bg-purple-800 font-medium text-lg rounded-md text-white my-5 transition delay-150 ease-in-out hover:bg-purple-700 '>Add to cart</button>
            <button onClick={() => handleBuyNow(product, varient)} className=' w-[10rem] py-2 px-5 bg-purple-800 font-medium text-lg rounded-md text-white my-5 transition delay-150 ease-in-out hover:bg-purple-700 '>Buy now</button>
            {user?.wishlist?.includes(product?._id)
              ? <button onClick={() => navigate("/wishlist")} className=' min-w-[10rem] py-2 px-5 bg-purple-800 font-medium text-lg rounded-md text-white my-5 transition delay-150 ease-in-out hover:bg-purple-700 uppercase flex gap-x-2 items-center '> <FcLike className='w-6 h-6' /> WishListed  </button>
              : <button onClick={() => dispatch(WishListProduct(product?._id))} className=' min-w-[10rem] py-2 px-5 bg-purple-800 font-medium text-lg rounded-md text-white my-5 transition delay-150 ease-in-out hover:bg-purple-700 uppercase flex gap-x-2 items-center '> <FaHeart className='w-6 h-6' /> WishList  </button>
            }

          </div>

          <div className='border-t-2 border-dashed border-black py-4 text-center'>
            <p className='text-lg text-gray-500 font-medium'>{product?.description}</p>
            <p className='text-lg text-gray-500 font-medium'>our item must be unused and in the same condition that you received it.</p>
          </div>
        </div>




      </div>

      {/* { reletedProducts.length !== 0 && <div className=' flex flex-col items-center max-w-[1200px] mx-auto border-2 border-gray-500'>
            <h1 className='text-3xl font-medium '>
              Releted Products
              <div className='border-2 border-pink-600 w-[50%] '></div>
              </h1>

              <div className='marquee relative w-full h-[420px] overflow-hidden'>
                <div className='
                flex flex-row justify-center gap-8
                 absolute whitespace-nowrap will-change-transform
                 w-[180%]
                 animate-[marquee_15s_linear_infinite]
                 
                   '>
                    {
                      reletedProducts?.map(product=>(
                        <Product key={product._id} product={product}/>
                      ))
                    }
                </div>
              </div>
              
            
            
      </div>
      } */}

      <div className='max-w-[1200px] mx-auto  my-8 shadow-4xl p-4' >
        <ReviewSection product={product} />
      </div>












      {reletedProducts?.length !== 0 && (<div className='max-w-[1200px] mx-auto  my-8 ' >
        <div className='text-2xl font-bold mb-8'>You Might Also Like</div>
        <ReletedProduct reletedProducts={reletedProducts} />
      </div>)}
    </>
  )
}

export default ProductDetails

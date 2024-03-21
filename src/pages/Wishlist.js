import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishListProduct } from '../redux/Slice/appConfigSlice'
import Product from '../components/Product'

const Wishlist = () => {
     const dispatch = useDispatch()
     const wishListProducts = useSelector(state => state.appConfigReducer.wishListProducts)

    useEffect(()=>{
        dispatch(getWishListProduct())
    },[])
    


  return (
    <div className='px-10 py-5'>
    <p className='text-3xl font-bold my-10'> Your WishList Product </p>

    {(!wishListProducts || wishListProducts.length === 0) && (
         <p className='text-bold my-5'>No result Found</p>
    )}

     <div className='flex flex-wrap gap-2 md:gap-16 justify-center'>
        {wishListProducts?.map(product=>(
            <Product key={product._id} product={product} />
        ))}
     </div>
</div>
  )
}

export default Wishlist

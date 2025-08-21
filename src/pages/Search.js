import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosClient } from '../Utils/axiosClient'
import Product from '../components/Product'

const Search = () => {
    const params = useParams()
    const [products , setProducts] = useState([])

    useEffect(()=>{
         if(params.query){
            fetchSearchProduct(params.query)
         }
    },[params])


    async function fetchSearchProduct(query){
            try {
                 const res = await axiosClient.get(`/products/search/${query}`)
               //   console.log(res)
                 const result = res.data
                 setProducts(result)
            } catch (error) {
                console.log('error in search product',error)
            }
    }

  return (
    <div className='px-10 py-5'>
        <p className='text-3xl font-bold my-10'> Search result for {params.query}</p>

        {(!products || products.length === 0) && (
             <p className='text-bold my-5'>No result Found</p>
        )}

         <div className='flex flex-wrap gap-2 md:gap-16 justify-center'>
            {products?.map(product=>(
                <Product key={product._id} product={product} />
            ))}
         </div>
    </div>
  )
}

export default Search

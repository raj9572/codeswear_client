import React, { useCallback, useEffect, useState } from 'react'
import { FcClearFilters } from 'react-icons/fc'
import Product from '../components/Product'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosClient } from '../Utils/axiosClient'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../redux/Slice/appConfigSlice'
const Categories = () => {
  // const categories = [
  //   {
  //     category: "Tshirt",
  //     key: "tshirt",
  //   },
  //   {
  //     category: "Hoodies",
  //     key: "hoodies",
  //   },
  //   {
  //     category: "Sticker",
  //     key: "sticker",
  //   },
  //   {
  //     category: "Mug",
  //     key: "mug",
  //   },

  // ]

  const sortOptions = [
    {
      key: 'price-asc',
      value: 'Price - Low To High',
      sort: 'price-asc'
    },
    {
      key: 'price-desc',
      value: 'Price - High To Low',
      sort: 'price-desc'
    },
    {
      key: 'newest-first',
      value: 'Newest First',
      sort: 'newestFirst'
    },
    {
      key: 'oldest-first',
      value: 'Oldest First',
      sort: 'oldestFirst'
    },
  ]
  
  const categories = useSelector(state => state.productReducer.categories)
  const navigate = useNavigate()
  const params = useParams()
  const themes = ["Anime", "Coding", "Charactor", "Gaming", "Motivational", "Hacking"]
  const [products, setProducts] = useState([])
  const [sortBy, setsortBy] = useState(sortOptions[0].sort)


  async function fetchProduct() {
    // dispatch(setLoading(true))
      try {
        const url = params.categoryId ? `/categories/category-product?category=${params.categoryId}&sort=${sortBy}` : `/categories/category-product?sort=${sortBy}`
        const res = await axiosClient.get(url)
        setProducts(res.data)
      } catch (error) {
        console.log('error',error)
      }
    // dispatch(setLoading(false))
  }


   useEffect(()=>{
      fetchProduct()
      // eslint-disable-next-line
   },[params,sortBy])

  //  const memoizedFun = useCallback(fetchProduct,[params,sortBy])

  const handleSortChange = (e) => {
    const sortKey = e.target.value
    setsortBy(sortKey)
  }

  const updateCategory = (e) => {
    navigate(`/categories/${e.target.value}`)

  }

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
                categories?.map((category) => (
                  <div key={category._id} className='flex md:px-10 gap-2 my-2 '>
                    <input type="radio" name="category" value={category.category} onChange={updateCategory} checked={category.category === params.categoryId} id={category._id} className='w-4 cursor-pointer ' />
                    <label htmlFor={category._id} className='text-xl font-medium cursor-pointer'>{category.category}</label>
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


          <div className='  border-2  border-black   md:px-10 py-1 flex flex-col flex-wrap gap-4'>
             <div className='flex flex-wrap gap-2'>
             <h1 className=' mx-auto text-4xl text-black font-semibold tracking-wide'>Explore Our {params?.categoryId  || "All Category"} Collection</h1>
            <div className="sort-by-container">
              <h3 className='text-lg text-black font-medium'>Sort By</h3>
              <select className='border-2 border-gray-300' name="sort-by" id="sort-by" onChange={handleSortChange}>
                {sortOptions.map(item => <option key={item.key} value={item.sort}>{item.value}</option>)}
              </select>
            </div>
             </div>
            <div className='text-center text-sm text-gray-900  font-medium '>
              Stay warm and stylish with the wide selection of hoodies available at Codeswear.com. Our hoodies are perfect for every occasion, whether you're looking for a casual everyday hoodie or something to wear to the gym. We have a variety of styles to choose from, including coding hoodies, anime hoodies, and casual hoodies for everyday wear. All of our hoodies are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect hoodie for you!
            </div>
            <div className=' flex flex-wrap gap-2 md:gap-4 justify-center '>
              {
                products?.map(product => <Product key={product?._id} product={product} />)
              }
            </div>

          </div>


        </div>

      </div>
    </>
  )
}

export default Categories

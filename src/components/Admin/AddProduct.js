/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import {axiosClient} from '../../Utils/axiosClient'
import {useDispatch} from 'react-redux'
import { setLoading, showToast } from '../../redux/Slice/appConfigSlice'
import { TOAST_FAILURE, TOAST_SUCCESS } from '../../App'
const AddProduct = () => {
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [small, setSmall] = useState('')
  const [medium, setMedium] = useState('')
  const [large, setLarge] = useState('')
  const [extralarge, setExtraLarge] = useState('')
  const [productImage, setProductImage] = useState('')
  const dispatch = useDispatch()

  async function handleAddProduct(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("category", category)
    formData.append("price", price)
    formData.append("small", small)
    formData.append("medium", medium)
    formData.append("large", large)
    formData.append("extralarge", extralarge)
    formData.append("productImage", productImage)
    

    try {
      dispatch(setLoading(true))
      const res = await axiosClient.post("/products/add-product",formData)
     if(res.status === "ok"){
       dispatch(showToast({type:TOAST_SUCCESS,message:res.message}))
       dispatch(setLoading(false))
       
     }
     else{ 
      dispatch(showToast({type:TOAST_FAILURE,message:res.message}))
      dispatch(setLoading(false))
      
     }
    } catch (error) {
      console.log('error while add product',error)
      dispatch(setLoading(false))

    }
  }

  return (
    <div>
      <form onSubmit={handleAddProduct}  >
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">title</span>
          <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} value={title} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">description</span>
          <input type="text" name='description' onChange={(e) => setDescription(e.target.value)} value={description} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">category</span>
          <input type="text" onChange={(e) => setCategory(e.target.value)} value={category} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">price</span>
          <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">small price</span>
          <input type="text" onChange={(e) => setSmall(e.target.value)} value={small} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">medium price</span>
          <input type="text" onChange={(e) => setMedium(e.target.value)} value={medium} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">large price</span>
          <input type="text" onChange={(e) => setLarge(e.target.value)} value={large} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">extralarge price</span>
          <input type="text" onChange={(e) => setExtraLarge(e.target.value)} value={extralarge} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">product image</span>
          <input type="file" name='productImage' onChange={(e) => setProductImage(e.target.files[0])} accept="image/*" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
        </label>

        <button className='py-1 px-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg mt-4'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct

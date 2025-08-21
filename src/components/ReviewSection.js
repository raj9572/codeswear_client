/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import { axiosClient } from '../Utils/axiosClient'
import {useDispatch} from 'react-redux'
import { setLoading, showToast } from '../redux/Slice/appConfigSlice'
import {TOAST_FAILURE,TOAST_SUCCESS} from '../App'
import ReviewList from './ReviewList'

const ReviewSection = ({product}) => {
    const dispatch = useDispatch()
    const [rating, setRating] = useState(0)
    const [reviewText , setReviewText] = useState('')
    const [productReview , setProductReview] = useState([])



    const handleSubmitReview = async()=>{
        try {
            dispatch(setLoading(true))
            const res = await axiosClient.post(`/products/create-review/${product._id}`,{reviewText,rating})
            dispatch(setLoading(false))
            dispatch(showToast({type:TOAST_SUCCESS,message:res.data.message}))
            res?.data && getReviewList()
            setReviewText("")
            setRating(0)
            
        } catch (error) {
            console.log('error in review submit',error)
            dispatch(setLoading(false))
        }
    }


    const getReviewList = async()=>{
        try {
            const res = await axiosClient.get(`/products/get_product_review/${product._id}`)
            setProductReview(res.data)
        } catch (error) {
            console.log('error in get review list',error)
        }
         
    }

    useEffect(()=>{
        product && getReviewList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[product])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='flex flex-col gap-2 p-5 shadow-lg rounded border h-fit'>
        <label htmlFor="message" class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white">Your message</label>
        <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} />
        <textarea value={reviewText} onChange={(e)=>setReviewText(e.target.value)} id="message"  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        <button onClick={handleSubmitReview} disabled={rating===0 || !reviewText} className='py-2 px-4 bg-pink-500 text-lg  hover:bg-pink-700 text-white font-semibold rounded '>Submit</button>
        </div>

        {
            productReview.length === 0 && (
                <div className='col-span-2 '>
                   { [1,2,3,4].map((item,index)=>(
                        <div key={index} className='h-[100px] w-full bg-slate-200 animate-pulse rounded-lg my-2'></div>
                    ))}
                </div>
            )
        }
        
        <div className='col-span-2'>
            <ReviewList reviewList={productReview}/>
        </div>
    </div>
  )
}

export default ReviewSection

import { Rating } from '@smastrom/react-rating'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import moment from 'moment'

const ReviewList = ({reviewList}) => {
  return (
    <div className='flex flex-col gap-5'>
       {
        reviewList && reviewList?.map(review => (
            <div key={review._id} className='flex gap-5 items-center border rounded-lg p-5'>
                <FaUserCircle className='w-8 h-8  text-pink-500'/>
                <div>
                    <h2>{review.reviewText}</h2>
                 <Rating style={{ maxWidth: 70 }} value={review.rating} />
                    <h2 className='text-sm text-black '> <span className='font-medium'>{review.username} </span>at  {moment(review.createdAt).format("DD MMM yyyy")} </h2>

                </div>
            </div>
        ))
       }
    </div>
  )
}

export default ReviewList

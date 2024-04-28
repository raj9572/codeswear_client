import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { axiosClient } from '../Utils/axiosClient';


const stripePromise = loadStripe("pk_test_51Mh7qiSFVs0Xzc6RrNM9wRdf7SAMV1BBPTsyQ7IXOak3nsqws77Vv9cmdsAZ9Y65sSiZG1aAKk5hlhuhSLNv2NeF00N2y803RB");



const CheckOut = ({ cart }) => {
  const user = useSelector(state => state.appConfigReducer.myProfile)
  const [error, setError] = useState('')


  const CreateCheckOutSession = async () => {
    try {
      const res = await axiosClient.post("/orders/place-order",
        {
          cartItems: cart,
          user: user
        }
      )

      console.log('response',res)

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: res.data.sessionId
      })

      if (error) {
        setError(error.message);
      }
    } catch (error) {
      console.log('error in checkout', error)
    }
  }



  return (
    
    <div className='bg-pink-600 py-1 px-3 w-full font-medium text-lg rounded-xl text-center text-white md:my-4 cursor-pointer hover:bg-pink-800 ' >
      <button onClick={CreateCheckOutSession}>checkOut</button>
      <p className='text-red-500 text-sm font-medium'>{error}</p>
    </div>
  )
}

export default CheckOut

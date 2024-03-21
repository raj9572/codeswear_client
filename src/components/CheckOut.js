import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { axiosClient } from '../Utils/axiosClient';
import { useNavigate } from 'react-router-dom';


const stripePromise = loadStripe("pk_test_51Mh7qiSFVs0Xzc6RrNM9wRdf7SAMV1BBPTsyQ7IXOak3nsqws77Vv9cmdsAZ9Y65sSiZG1aAKk5hlhuhSLNv2NeF00N2y803RB");



const CheckOut = () => {
  const navigate = useNavigate()
  const cart = useSelector(state => state.cartReducer.cart)
  const user = useSelector(state => state.appConfigReducer.myProfile)

  //  

  //! this is from stripe
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    if (cart.length > 0) {
      CreateCheckOutSession()
    } else{
      navigate("/")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CreateCheckOutSession = async () => {
    try {
      const res = await axiosClient.post("/orders/place-order",
        {
          cartItems: cart,
          user: user
        }
      )
      console.log(res)
      const clientSecret = res?.data
      setClientSecret(clientSecret)
    } catch (error) {
      console.log('error in checkout', error)
    }
  }



  return (
    <div id="checkout">
      {
        clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )
      }
    </div>
  )
}

export default CheckOut

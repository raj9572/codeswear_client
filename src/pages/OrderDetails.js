import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchOrderDetails } from '../redux/Slice/orderSlice'

const OrderDetails = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const [order,customer] = useSelector(state => state.orderReducer.orderDetails)

  // const {street, city, state, postalCode, country} = order?.shippingAddress

  useEffect(() => {
    dispatch(fetchOrderDetails(params.orderId))
  }, [params])

  return (
    <div className='flex flex-col p-10 gap-5'>
        <p className='text-base-bold'>
          Order ID : <span className='text-base-medium'>{order?._id}</span>
        </p>
        <p className='text-base-bold'>
          Customer Name : <span className='text-base-medium'>{customer?.name}</span>
        </p>
        <p className='text-base-bold'>
          Customer Email : <span className='text-base-medium'>{customer?.email}</span>
        </p>
        <p className='text-base-bold'>
          Shipping address : <span className='text-base-medium'>{order?.shippingAddress?.street}, {order?.shippingAddress?.city},  {order?.shippingAddress?.state},  {order?.shippingAddress?.postalCode },  {order?.shippingAddress?.country}  </span>
        </p>
        <p className='text-base-bold'>
          Total Paid : <span className='text-base-medium'>₹ {order?.totalAmount}  </span>
        </p>
        <p className='text-base-bold'>
          Shipping rate ID : <span className='text-base-medium'>{order?.shippingRate}  </span>
        </p>

        <table className="w-full border-collapse border border-slate-500 ...">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">Product</th>
            <th className="border border-slate-600 ...">Category</th>
            <th className="border border-slate-600 ...">Varient</th>
            <th className="border border-slate-600 ...">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            order?.products?.map(product => (
              <tr key={product?._id}>
                
                <td className="border border-slate-700">
                  <Link  to={`/product-details/${product?.productId._id}`} className='text-pink-500 text-medium' >{product?.productId.title}</Link>
                  <img className='w-[50px] h-[50px] rounded-full inline ms-2' src={product?.image} alt="" />
                  </td>
               
                <td className="border border-slate-700 ...">
                  {product?.category}
                </td>
                <td className="border border-slate-700 ...">{product?.varient}</td>
                
                <td className="border border-slate-700 ...">
                  {product?.quantity}
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default OrderDetails

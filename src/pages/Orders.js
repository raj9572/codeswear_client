import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyOrders } from '../redux/Slice/orderSlice'
import { Link } from 'react-router-dom'

const Orders = () => {

  const dispatch = useDispatch()
  const orders = useSelector(state => state.orderReducer.customerOrders)

  useEffect(()=>{
      dispatch(fetchMyOrders())
  },[])


  return (
    <div>
      <div className='flex flex-col items-center gap-2 p-4'>
        <h1 className='text-2xl text-black font-medium '>Order details</h1>
        <div className='border-2 border-pink-600 w-24'></div>
        <table className="border-collapse border border-slate-500  w-full md:mt-4">
          <thead className='p-2 text-xl text-pink-600 '>
            <tr>
              <th className="border border-slate-600 ...">Order</th>
              <th className="border border-slate-600 ...">Product</th>
              <th className="border border-slate-600 ...">Total($)</th>
              <th className="border border-slate-600 ...">Created At</th>
            </tr>
          </thead>
          <tbody className=''>
            {orders?.map((order) => (
              <tr key={order._id} className='text-lg font-medium text-gray-600' >
                <td className="border border-slate-700 p-4">
                  <Link to={`/orders/${order._id}`} className='text-pink-500'> {order._id}</Link>
                </td>
                <td className="border border-slate-700 p-4">{order?.products}</td>
                <td className="border border-slate-700 p-4">₹ {order.totalAmount}</td>
                <td className="border border-slate-700 p-4">{order.createdAt}</td>
              </tr>
            ))}



          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Orders

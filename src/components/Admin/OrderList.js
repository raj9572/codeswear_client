/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllOrders } from '../../redux/Slice/orderSlice'
import { Link } from 'react-router-dom'

const OrderList = () => {
  const dispatch = useDispatch()
  const orderList = useSelector(state => state.orderReducer.orderList)
  useEffect(()=>{
    dispatch(fetchAllOrders())
  },[])

  return (
    <div>
    <table className="w-full border-collapse border border-slate-500 ...">
      <thead>
        <tr>
          <th className="border border-slate-600 ...">Order</th>
          <th className="border border-slate-600 ...">Customer</th>
          <th className="border border-slate-600 ...">Products</th>
          <th className="border border-slate-600 ...">Total($)</th>
          <th className="border border-slate-600 ...">Created At</th>
        </tr>
      </thead>
      <tbody>
        {
          orderList?.map(order => (
            <tr key={order._id}>
              
              <td className="border border-slate-700 ...">
                <Link to={`/admin/orders/${order._id}`} className='text-pink-500'>{order._id}</Link>
              </td>
              <td className="border border-slate-700 ...">
                {order.customer}
              </td>
              <td className="border border-slate-700 ...">{order.products}</td>
              <td className="border border-slate-700 ">{order.totalAmount}
              </td>
              <td className="border border-slate-700 ...">{order.createdAt}
              </td>
            </tr>
          ))
        }

      </tbody>
    </table>
  </div>
  )
}

export default OrderList

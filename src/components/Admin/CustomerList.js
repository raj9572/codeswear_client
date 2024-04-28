import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCustomers } from '../../redux/Slice/orderSlice'

const CustomerList = () => {
  const dispatch = useDispatch()
  const customers = useSelector(state => state.orderReducer.customers)

  useEffect(()=>{
     dispatch(fetchAllCustomers())
  },[])

  return (
    <div>
      
      <table className="w-full border-collapse border border-slate-500 ...">
      <thead>
        <tr>
          <th className="border border-slate-600 ...">customerId</th>
          <th className="border border-slate-600 ...">Name</th>
          <th className="border border-slate-600 ...">Email</th>
        </tr>
      </thead>
      <tbody>
        {
          customers?.map(customer => (
            <tr key={customer._id}>
              
              <td className="border border-slate-700 ...">
                {customer._id}
              </td>
              <td className="border border-slate-700 ...">
                {customer?.name}
              </td>
              <td className="border border-slate-700 ...">{customer?.email}</td>
              
            </tr>
          ))
        }

      </tbody>
    </table>
    </div>
  )
}

export default CustomerList

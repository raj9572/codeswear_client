import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminScreen = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
      <div className='h-[60px] bg-black text-white text-center py-2 text-3xl font-semibold'>Admin Panel</div>
         
        <div className='grid md:grid-cols-12 gap-4  md:px-10 py-4 ' >

          <div className='md:col-span-2   border-2 border-black md:min-h-[400px] flex md:flex-col  flex-row gap-2'>
            <button onClick={() => { navigate("/admin/userlist") }} className=' md:text-2xl text-base font-medium text-white hover:bg-pink-600 bg-pink-500 md:w-full w-1/4 md:h-28'>All Users</button>
            <button onClick={() => { navigate("/admin/all-products") }} className=' md:text-2xl font-base font-medium text-white hover:bg-pink-600 bg-pink-500 md:w-full w-1/4 md:h-28'>All Products</button>
            <button onClick={() => { navigate("/admin/add-product") }} className=' md:text-2xl font-base font-medium text-white hover:bg-pink-600 bg-pink-500 md:w-full w-1/4 md:h-28'>Add Product</button>
            <button onClick={() => { navigate("/admin/orders") }} className=' md:text-2xl font-base font-medium text-white hover:bg-pink-600 bg-pink-500 md:w-full w-1/4 md:h-28'>All Orders</button>
            <button onClick={() => { navigate("/admin/customers") }} className=' md:text-2xl font-base font-medium text-white hover:bg-pink-600 bg-pink-500 md:w-full w-1/4 md:h-28'>All Customer</button>
          </div>

          <div className='md:col-span-10 md:p-6 p-2  border-2 border-pink-500 min-h-[400px]'>
            <Outlet />
          </div>

        </div>
      </div>

    </>
  )
}

export default AdminScreen

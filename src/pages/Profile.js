import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
      <div className='flex flex-col gap-4 items-center m-8'>
        <h1 className='text-3xl font-bold text-black'>Update your Account</h1>
        <div className='w-1/3 bg-pink-500 text-white p-8 rounded-lg text-2xl'>
          <p > <span className='text-black font-medium'>Name : </span> Safiullah Ansari</p>
          <p><span className='text-black font-medium'>Email : </span> rajali1432@gmail.com</p>
          <p><span className='text-black font-medium'>Phone no : </span>  9572125942 </p>
          <div className='mt-4 text-center'>
            <Link className=' text-xl border-[1px] border-black px-3 py-1 rounded-xl hover:bg-gray-100  bg-white text-black font-medium' to={"/admin"}>Go To Admin</Link>

          </div>
        </div>
      </div>
      <div className='mx-4 my-8'>
        <h1 className='text-2xl text-black font-medium mb-2'>2. Change Password</h1>
        {/* <div className='flex flex-wrap gap-4'>
                  <input className='w-1/4 text-xl text-white  py-2 px-4 rounded-lg bg-slate-500  ' type="text" placeholder='Enter old Passoword' />
                <input className='w-1/4 text-xl text-white  py-2 px-4 rounded-lg bg-slate-500  ' type="text" placeholder='Enter New Passoword' />
                <input className='w-1/4 text-xl text-white  py-2 px-4 rounded-lg bg-slate-500  ' type="text" placeholder='conform your Passoword' />
              </div>
              <button className='text-lg font-semibold text-white mx-2 my-4 bg-pink-600 hover:bg-pink-700 rounded-2xl py-1 px-3'>Submit</button> */}
        <form className='md:flex flex-wrap gap-4'  action="">
          <label className="block md:w-1/4 ">
            <span className="block md:text-base text-sm font-medium text-slate-700">Old Password</span>
            <input type="password" autocomplete="off" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
                  
          </label>
          <label className="block md:w-1/4">
            <span className="block md:text-base text-sm font-medium text-slate-700">New Password</span>
            <input type="password" autocomplete="off" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
          </label>
          <label className="block md:w-1/4">
            <span className="block md:text-base text-sm font-medium text-slate-700">Verify Passowrd</span>
            <input type="password" autocomplete="off" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
          </label>

        </form>
        <button className='text-lg font-semibold text-white mx-2 my-4 bg-pink-600 hover:bg-pink-700 rounded-2xl py-1 px-3'>Submit</button>
      </div>
    </>
  )
}

export default Profile

import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  const [showPassword,setShowPassword] = useState(false)
  return (
    <>
       {/* <div className='flex justify-center items-center h-screen bg-gray-500'>
        <div className='w-1/2  py-8  border-2 border-white rounded-2xl bg-gray-400'>
           
            <div className='flex justify-evenly items-center gap-y-2 my-4'>
                <label className='text-2xl text-white font-medium ' htmlFor="">Enter your email:</label>
                <input className='text-xl  py-2 px-4 rounded-lg  ' type="email" />
            </div>
            <div className='flex justify-evenly items-center gap-y-2 my-4'>
                <label className='text-2xl text-white font-medium ' htmlFor="">Enter password:</label>
                <input className='text-xl  py-2 px-4 rounded-lg   ' type="text" />
            </div>

            <button className="border-1 border-black py-2 px-5 text-xl font-medium text-center bg-pink-600 rounded-2xl mx-auto block mt-4">login</button>
            <p className='tracking-wide text-center mt-2 text-xl'> have not account ? <span className='cursor-pointer text-white '>sign in</span></p>
        </div>
       </div> */}
        <div className='h-screen w-full flex justify-center '>
        <form className='w-auto  p-5 shadow-sm shadow-gray-400 h-fit md:mt-20 '>
          
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">email</span>
            <input type="text"   className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50  
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label className="block relative">
            <span className="block text-sm font-medium text-slate-700">password</span>
            <input type={showPassword ? "text" : "password"} autoComplete="off"   className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50  
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              
            "/>
           
             {showPassword 
               ? <FaEyeSlash onClick={()=>{setShowPassword(false)}} className='text-2xl absolute right-1 top-8' />
               : <FaEye onClick={()=>{setShowPassword(true)}} className='text-2xl absolute right-1 top-8 cursor-pointer' />
              }
          </label>
          <button className='text-white font-medium px-3 py-1 bg-pink-600 rounded-lg my-2'>login</button>
             <p className='font-medium'>do not have account ? <Link to="/signup" className='text-pink-500'>signup</Link></p>
      </form>
      
        </div>
    </>
  )
}

export default Login

import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { axiosClient } from '../Utils/axiosClient'

const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setfullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


 async function handleUserSignup(e){
      e.preventDefault()
      try {
      const res= await axiosClient.post("/users/signup",{fullName,username,email,password})
        if(res.data.status === "ok"){
          console.log('user register successfully')
          navigate("/login")
        }
      } catch (error) {
        console.log('error in signup user',error)
      }
  }


  return (
    <>

      <div className='h-screen w-full flex justify-center '>
        <form onSubmit={handleUserSignup} className='w-auto  p-5 shadow-sm shadow-gray-400 h-fit md:mt-20 '>
          <label className="block">
            <span className="block text-base font-medium text-slate-700">fullName</span>
            <input value={fullName} onChange={(e)=>{setfullName(e.target.value)}} type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label className="block">
            <span className="block text-base font-medium text-slate-700">Username</span>
            <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">email</span>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50  
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label className="block relative">
            <span className="block text-sm font-medium text-slate-700">password</span>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type={showPassword ? "text" : "password"} autoComplete="off" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50  
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
            {showPassword
              ? <FaEyeSlash onClick={() => { setShowPassword(false) }} className='text-2xl absolute right-1 top-8 cursor-pointer' />
              : <FaEye onClick={() => { setShowPassword(true) }} className='text-2xl absolute right-1 top-8 cursor-pointer' />
            }
          </label>
          <button onSubmit={handleUserSignup} type='submit' className='text-white font-medium px-3 py-1 bg-pink-600 rounded-lg my-2 hover:bg-pink-700'>signup</button>
          <p className='font-medium'>already have account ? <Link to="/login" className='text-pink-500'>login</Link></p>
        </form>

      </div>
    </>
  )
}

export default Signup

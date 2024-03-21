import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showToast, updateMyProfile } from '../redux/Slice/appConfigSlice'
import { axiosClient } from '../Utils/axiosClient'
import { TOAST_FAILURE, TOAST_SUCCESS } from '../App'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const myProfile = useSelector(state => state.appConfigReducer.myProfile)
  const [fullName , setFullName] = useState(myProfile?.fullName)
  const [username , setUsername] = useState(myProfile?.username)
  const [email , setEmail] = useState(myProfile?.email)
  const [updateFullName , setUpdateFullName] = useState('')
  const [updateUsername , setUpdateUsername] = useState('')
  const [updateEmail , setUpdateEmail] = useState('')
  const [oldPassword , setOldPassword] = useState("")
  const [newPassword , setNewPassword] = useState("")
  const [verifyPassword , setVerifyPassword] = useState("")
  const [error, setError] = useState("")

  const onChange = (e)=>{
     if(e.target.name === "fullName"){
      setFullName(e.target.value)
      setUpdateFullName(e.target.value)
     } else if(e.target.name === "username"){
      setUsername(e.target.value)
      setUpdateUsername(e.target.value)
     } else if(e.target.name === "email"){
      setEmail(e.target.value)
      setUpdateEmail(e.target.value)
     }
  }


  const handleUpdateProfile = ()=>{
      dispatch(updateMyProfile({
        fullName:updateFullName,
        email:updateEmail,
        username:updateUsername
      }))
      setUpdateEmail("")
      setUpdateFullName("")
      setUpdateUsername("")
  }


  const handleUpdatePassword = async()=>{
      if(newPassword !== verifyPassword){
        setError("password does not mated")
      }
      try {
         const res = await axiosClient.post("/users/change-password",{oldPassword,newPassword})
         if(res.status === "ok"){
            dispatch(showToast({type:TOAST_SUCCESS,message:res.message}))
            setOldPassword("")
            setNewPassword("")
            setVerifyPassword("")
         }else{
          dispatch(showToast({type:TOAST_FAILURE,message:res.message}))
         }
      } catch (error) {
        console.log('error in change in password')
      }
  }

  return (
    <>
      <div className=' m-8'>
        <h1 className='text-3xl font-bold text-black'>Update your Account</h1>
        <form className='md:flex flex-wrap gap-4'>
          <label className="block md:w-1/4">
            <span className="block md:text-base text-sm font-medium text-slate-700">Full Name</span>
            <input type="text" name='fullName' value={fullName} onChange={onChange}  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
          </label>
          <label className="block md:w-1/4">
            <span className="block md:text-base text-sm font-medium text-slate-700">username</span>
            <input type="text" name='username' value={username}  onChange={onChange}   className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
          </label>
          <label className="block md:w-1/4">
            <span className="block md:text-base text-sm font-medium text-slate-700">email</span>
            <input type="text" name='email' autoComplete="off" value={email}  onChange={onChange}   className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
          </label>
        </form>
        <button disabled={updateEmail==="" && updateFullName === "" && updateUsername===""} onClick={handleUpdateProfile} className='text-lg font-semibold text-white mx-2 my-4 bg-pink-600 hover:bg-pink-700 rounded-2xl py-1 px-3'>update Profile</button>
       {myProfile?.isAdmin === "ADMIN" &&  <button  onClick={()=>navigate("/admin")} className='text-lg font-semibold text-white mx-2 my-4 bg-pink-600 hover:bg-pink-700 rounded-2xl py-1 px-3'>admin section</button>}

      </div>
      <div className='mx-4 my-8'>
        <h1 className='text-2xl text-black font-medium mb-2'>2. Change Password</h1>
        {/* <div className='flex flex-wrap gap-4'>
                  <input className='w-1/4 text-xl text-white  py-2 px-4 rounded-lg bg-slate-500  ' type="text" placeholder='Enter old Passoword' />
                <input className='w-1/4 text-xl text-white  py-2 px-4 rounded-lg bg-slate-500  ' type="text" placeholder='Enter New Passoword' />
                <input className='w-1/4 text-xl text-white  py-2 px-4 rounded-lg bg-slate-500  ' type="text" placeholder='conform your Passoword' />
              </div>
              <button className='text-lg font-semibold text-white mx-2 my-4 bg-pink-600 hover:bg-pink-700 rounded-2xl py-1 px-3'>Submit</button> */}
        <form className='md:flex flex-wrap gap-4' action="">
          <label className="block md:w-1/4 ">
            <span className="block md:text-base text-sm font-medium text-slate-700">Old Password</span>
            <input type="password" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} autoComplete="off" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>

          </label>
          <label className="block md:w-1/4">
            <span className="block md:text-base text-sm font-medium text-slate-700">New Password</span>
            <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} autoComplete="off" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
          </label>
          <label className="block md:w-1/4">
            <span className="block md:text-base text-sm font-medium text-slate-700">Verify Passowrd</span>
            <input type="password" value={verifyPassword} onChange={(e)=>setVerifyPassword(e.target.value)} autoComplete="off" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
          </label>

        </form>
        {error && <p className='text-red-500 text-sm font-medium '>{error}</p> }
        <button onClick={handleUpdatePassword} disabled={oldPassword==="" || newPassword==="" || verifyPassword===""} className='text-lg font-semibold text-white mx-2 my-4 bg-pink-600 hover:bg-pink-700 rounded-2xl py-1 px-3'>Submit</button>
      </div>
    </>
  )
}

export default Profile

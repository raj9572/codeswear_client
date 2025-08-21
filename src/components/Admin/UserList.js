/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { axiosClient } from '../../Utils/axiosClient'
import { useDispatch, useSelector } from 'react-redux'
import {AiFillDelete} from 'react-icons/ai'
import { changeUserisAdmin, deleteUser, getAllUsers } from '../../redux/Slice/userSlice'

const UserList = () => {
 const dispatch = useDispatch()
 const users = useSelector(state => state.userConfigReducer.users)

  useEffect(()=>{
    dispatch(getAllUsers())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div>
      <table className="w-full border-collapse border border-slate-500 ...">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">Name</th>
            <th className="border border-slate-600 ...">Email</th>
            <th className="border border-slate-600 ...">username</th>
            <th className="border border-slate-600 ...">delete</th>
            <th className="border border-slate-600 ...">status</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map(user => (
              <tr key={user._id}>
                
                <td className="border border-slate-700 ...">{user.fullName}</td>
                <td className="border border-slate-700 ...">
                  {user.email}
                </td>
                <td className="border border-slate-700 ...">{user.username}</td>
                <td className="border border-slate-700 ">
                <AiFillDelete onClick={()=>dispatch(deleteUser(user._id))} className="text-red-500 cursor-pointer text-xl block mx-auto "/>
                </td>
                <td className="border border-slate-700 ...">
                 {/* {user.isAdmin === "ADMIN" ? <button onClick={()=>dispatch(changeUserisAdmin(user._id))} className='bg-pink-500 text-white text-lg  border-black rounded-xl  px-3 my-1 block mx-auto hover:bg-pink-600 '> remove admin </button> : <button onClick={()=>dispatch(changeUserisAdmin(user._id))} className='bg-pink-500 text-white text-lg  border-black rounded-xl  px-3 my-1 block mx-auto hover:bg-pink-600 '> make admin </button> }  */}
                 <button onClick={()=>dispatch(changeUserisAdmin(user._id))} className='bg-pink-500 text-white text-lg  border-black rounded-xl  px-3 my-1 block mx-auto hover:bg-pink-600 '> {user.isAdmin === "ADMIN" ? "remove Admin" : "make Admin"} </button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default UserList

import React from 'react'
import { KEY_ACCESS_TOKEN, getItem } from '../Utils/localStorageManage'
import { Navigate, Outlet } from 'react-router-dom'

const OnlyifNotLogin = () => {
    
  return (
    <div>
       {getItem(KEY_ACCESS_TOKEN) ? <Navigate to="/" /> : <Outlet/>}
    </div>
  )
}

export default OnlyifNotLogin

import React from 'react'
import { KEY_ACCESS_TOKEN, getItem } from '../Utils/localStorageManage'
import { Navigate, Outlet } from 'react-router-dom'

const UserRequire = () => {
  return (
    <div>
       {getItem(KEY_ACCESS_TOKEN) ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default UserRequire

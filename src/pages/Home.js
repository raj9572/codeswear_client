import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from '../redux/Slice/appConfigSlice'
const Home = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])


  return (
    <>

      <Navbar />

      <div className='outlet'>
        <Outlet />
      </div>

      <Footer />


    </>
  )
}

export default Home

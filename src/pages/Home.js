import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      
      <Navbar/>
      <div className='outlet'>
           <Outlet/>
      </div>
      <Footer/>
    

    </>
  )
}

export default Home

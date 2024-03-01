import React, { useState } from 'react'
import logo from '../assests/logo.png'
import { FaUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openCart , setOpenCart] = useState(false)
    const [dropdown,setDropdown] = useState(false)
    return (
        <>
        
        <div className='w-full h-16 sticky top-0 z-20 bg-white  shadow-md shadow-gray-300 flex justify-between items-center px-8 mb-0.5'>

            <div >
                <Link to="/">
                <img className='w-48 h-auto cursor-pointer' src={logo} alt="" />
                </Link>
            </div>
            <div>
                <ul className='md:flex gap-2 hidden'>
                    <Link to='/categories/tshirt'  className='mx-4 text-black font-semibold text-xl cursor-pointer'>Tshirt</Link>
                    <Link to="/categories/hoodies" className='mx-4 text-black font-semibold text-xl cursor-pointer'>Hoodies</Link>
                    <Link to="/categories/stickers" className='mx-4 text-black font-semibold text-xl cursor-pointer'>Stickers</Link>
                    <Link to="/categories/mug" className='mx-4 text-black font-semibold text-xl cursor-pointer'>Mug</Link>
                </ul>
            </div>

            <div className='ml-4 flex gap-2'>
                {dropdown && <div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute right-5 bg-white py-4 top-12 rounded-md px-2 w-36">
                    <ul>
                        <Link to={'/profile/ffdk'}><li className='py-1 font-medium text-sm hover:text-base hover:text-pink-500'>My Account</li></Link>
                        <Link to={'/orders'}><li className='py-1 font-medium  text-sm hover:text-base hover:text-pink-500'>Order</li></Link>
                        <li onClick={()=>{}} className='py-1 font-medium   cursor-pointer text-sm hover:text-base hover:text-pink-500'>Logout</li>
                    </ul>
                </div>}
                <FaUserCircle onMouseOver={()=>{setDropdown(true)}} className='w-8 h-8 cursor-pointer text-pink-500 ' />
                <div className='relative ' onClick={()=>{setOpenCart(!openCart)}}>
                    <BsCart2 className='w-8 h-8 cursor-pointer text-pink-600' />
                    <span className='flex items-center justify-center  absolute -top-2  -right-1 w-4 h-4 rounded-full  bg-pink-700 text-white text-xs'>4</span>
                </div>
            </div>


        </div>

        {openCart && <Cart onClose={()=>{setOpenCart(false)}}/> }  
        </>
    )
}

export default Navbar

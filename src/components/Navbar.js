import React, { useState } from 'react'
import logo from '../assests/logo.png'
import { FaUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import Cart from './Cart';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN, removeItem } from '../Utils/localStorageManage';
import { axiosClient } from '../Utils/axiosClient';
import { openCart } from '../redux/Slice/appConfigSlice';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    // const [openCart , setOpenCart] = useState(false)
    const pathname = useLocation()
    const [query, setQuery] = useState('')
    const [dropdown,setDropdown] = useState(false)
    const cartItem = useSelector(state => state.cartReducer.cart)
    const addToCartQuantity = cartItem?.reduce((x,item)=> x + item.quantity ,0)
    const navigate = useNavigate()
    const categories = useSelector(state => state.productReducer.categories)
    const dispatch = useDispatch()
    const cartOpen = useSelector(state => state.appConfigReducer.openCart)
    

   async function handleLogout (){
    try {
        await axiosClient.get('/users/logout');
        removeItem(KEY_ACCESS_TOKEN)
        removeItem(KEY_REFRESH_TOKEN)
        navigate('/login');
     } catch (error) {
       console.log(error)
     }
   }

    return (
        <>
        
        <div className='w-full h-16 sticky top-0 z-20 bg-white  shadow-md shadow-gray-300 flex justify-between items-center px-8 mb-0.5'>

            <div >
                <Link to="/">
                <img className='w-48 h-auto cursor-pointer' src={logo} alt="" />
                </Link>
            </div>
            <div className='flex gap-3 border-2 border-black px-3 py-1 items-center rounded-lg'>
                <input
                className='outline-none '
                placeholder='search....'
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                />
                <button disabled={query === ''} onClick={()=>navigate(`/search/${query}`)} >
                 <FaSearch className='cursor-pointer h-4 w-4 hover:text-pink-500'/>
                </button>
            </div>
            <div>
                <ul className='md:flex gap-2 hidden'>
                    {
                        categories?.map(category=>(
                            <Link key={category._id} to={`/categories/${category.category}`}  className={` hover:text-pink-700 mx-4  font-semibold text-xl cursor-pointer ${pathname === `/categories/${category.category}` && "text-pink-800" } `}>{ category.category.charAt(0).toUpperCase() + category.category.slice(1)}</Link>
                        ))
                    }
                    {/* <Link to="/categories/hoodies" className='mx-4 text-black font-semibold text-xl cursor-pointer'>Hoodies</Link>
                    <Link to="/categories/sticker" className='mx-4 text-black font-semibold text-xl cursor-pointer'>Stickers</Link>
                    <Link to="/categories/mug" className='mx-4 text-black font-semibold text-xl cursor-pointer'>Mug</Link> */}
                </ul>
            </div>

            <div className='ml-4 flex gap-2'>
                {dropdown && <div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute right-5 bg-white py-4 top-12 rounded-md px-2 w-36">
                    <ul>
                        <Link to={'/profile'}><li className='py-1 font-medium text-sm hover:text-base hover:text-pink-500'>My Account</li></Link>
                        <Link to={'/orders'}><li className='py-1 font-medium  text-sm hover:text-base hover:text-pink-500'>Order</li></Link>
                        <Link to={'/wishlist'}><li className='py-1 font-medium  text-sm hover:text-base hover:text-pink-500'>Wishlist</li></Link>
                        <li onClick={handleLogout} className='py-1 font-medium   cursor-pointer text-sm hover:text-base hover:text-pink-500'>Logout</li>
                    </ul>
                </div>}
                <FaUserCircle onMouseOver={()=>{setDropdown(true)}} className='w-8 h-8 cursor-pointer text-pink-500 ' />
                <div className='relative ' onClick={()=>dispatch(openCart(true))}>
                    <BsCart2 className='w-8 h-8 cursor-pointer text-pink-600' />
                    <span className='flex items-center justify-center  absolute -top-2  -right-1 w-4 h-4 rounded-full  bg-pink-700 text-white text-xs'>{addToCartQuantity}</span>
                </div>
            </div>


        </div>

        {cartOpen && <Cart /> }  
        </>
    )
}

export default Navbar

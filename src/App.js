import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import {
  Routes, Route

} from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import PaymentStatus from './pages/PaymentStatus';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import AdminScreen from './pages/AdminScreen';
import UserList from './components/Admin/UserList';
import OrderList from './components/Admin/OrderList';
import ProductList from './components/Admin/ProductList';
import AddProduct from './components/Admin/AddProduct';
import Orders from './pages/Orders';
import Feed from './components/Feed';
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import EditProduct from './components/Admin/EditProduct';
import UserRequire from './components/UserRequire';
import CheckOut from './components/CheckOut';
import Return from './components/Return';
import CustomerList from './components/Admin/CustomerList';
import OrderDetails from './components/Admin/OrderDetails';
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';
export const TOAST_SUCCESS = 'toast_success'
export const TOAST_FAILURE = 'toast_failure'


function App() {
  const loadingRef = useRef(null)
  const isLoading = useSelector(state => state.appConfigReducer.isLoading)
  const toastData = useSelector(state => state.appConfigReducer.toastData)


  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    }
    else {
      loadingRef.current?.complete()
    }
  }, [isLoading])


  useEffect(() => {
    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message)
        break;

      case TOAST_FAILURE:
        toast.error(toastData.message)
        break;

      default : 
    }
  }, [toastData])
  
  return (
    <>
    <LoadingBar height={3} color='#f11946' ref={loadingRef} />
    <ToastContainer />
      <Routes>
        <Route element={<UserRequire/>} >
          <Route element={<Home />}>

            <Route path='/' element={<Feed />}></Route>
            <Route path='/profile/:userId?' element={<Profile />}></Route>
            <Route path='/product-details/:productId' element={<ProductDetails />}></Route>
            <Route path='/categories/:categoryId?' element={<Categories />}></Route>
            <Route path='/success' element={<PaymentStatus />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/checkout' element={<CheckOut />}></Route>
            <Route path='/return?' element={<Return />}></Route>
            <Route path='/orders/:orderId' element={<OrderDetails />}></Route>
            <Route path='/search/:query' element={<Search />}></Route>
            <Route path='/wishlist' element={<Wishlist />}></Route>

            <Route path='/admin' element={<AdminScreen />}>
              <Route path='' element={<UserList />}></Route>
              <Route path='userlist' element={<UserList />}></Route>
              <Route path='all-products' element={<ProductList />}></Route>
              <Route path='add-product' element={<AddProduct />}></Route>
              <Route path='editproduct/:productId' element={<EditProduct />}></Route>
              <Route path='orders' element={<OrderList />}></Route>
              <Route path='orders/:orderId' element={<OrderDetails />}></Route>
              <Route path='customers' element={<CustomerList />}></Route>
            </Route>

          </Route>
        </Route>

        <Route >
          
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Route>
      </Routes>

    </>

  );
}

export default App;

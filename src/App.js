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

function App() {




  
  return (
    <>

      <Routes>
        <Route >
          <Route element={<Home />}>
            <Route path='/' element={<Feed />}></Route>
            <Route path='/profile/:userId' element={<Profile />}></Route>
            <Route path='/product-details/:productId' element={<ProductDetails />}></Route>
            <Route path='/categories/:category?' element={<Categories />}></Route>
            <Route path='/payment/:status' element={<PaymentStatus />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/admin' element={<AdminScreen />}>
              <Route path='' element={<UserList />}></Route>
              <Route path='userlist' element={<UserList />}></Route>
              <Route path='all-products' element={<ProductList />}></Route>
              <Route path='add-product' element={<AddProduct />}></Route>
              <Route path='orderlist' element={<OrderList />}></Route>
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

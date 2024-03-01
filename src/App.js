import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {
  Routes,Route
  
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

function App() {
  return (
    <div className='bg-white' >
         <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/profile/:userId' element={<Profile/>}></Route>
            <Route path='/product-details/:productId' element={<ProductDetails/>}></Route>
            <Route path='/categories/:category?' element={<Categories/>}></Route>
            <Route path='/payment/:status' element={<PaymentStatus/>}></Route>
            <Route path='/orders' element={<Orders/>}></Route>
            <Route path='/admin' element={<AdminScreen/>}>
               <Route path='' element={<UserList/>}></Route>
               <Route path='userlist' element={<UserList/>}></Route>
               <Route path='all-products' element={<ProductList/>}></Route>
               <Route path='add-product' element={<AddProduct/>}></Route>
               <Route path='orderlist' element={<OrderList/>}></Route>
            </Route>

            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
         </Routes>
         
         <Footer/>
    </div>
  );
}

export default App;

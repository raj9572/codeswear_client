import { configureStore } from '@reduxjs/toolkit'
import appConfigReducer from './Slice/appConfigSlice'
import productReducer from './Slice/productSlice'
import cartReducer from './Slice/cartSlice'
import userConfigReducer from './Slice/userSlice'
import orderReducer from './Slice/orderSlice'
 const store = configureStore({
  reducer: {
    appConfigReducer,
    productReducer,
    cartReducer,
    userConfigReducer,
    orderReducer
  },
})

export default store
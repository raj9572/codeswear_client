import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appConfigReducer from './Slice/appConfigSlice'
import productReducer from './Slice/productSlice'
import cartReducer from './Slice/cartSlice'
import userConfigReducer from './Slice/userSlice'
import orderReducer from './Slice/orderSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const rootReducer = combineReducers({
  appConfigReducer,
  productReducer,
  cartReducer,
  userConfigReducer,
  orderReducer
})


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer'],
  
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);


export {store, persistor};



 
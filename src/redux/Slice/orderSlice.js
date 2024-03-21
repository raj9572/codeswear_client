import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../Utils/axiosClient';



export const fetchAllOrders = createAsyncThunk('orders/fetch-orders', async (body, thunkAPI) => {

  try {
      
      const response = await axiosClient.get(`/orders/all-orders`)
    //    console.log('orderlist response',response)
      return response
  } catch (error) {
      return Promise.reject(error)
  }

}
)



export const fetchOrderDetails = createAsyncThunk('orders/order_details', async (body, thunkAPI) => {

  try {
      const response = await axiosClient.get(`/orders/orderDetails/${body}`)
    //    console.log('orderlist response',response)
      return response
  } catch (error) {
      return Promise.reject(error)
  }

}
)



export const fetchAllCustomers = createAsyncThunk('orders/all-customers', async (body, thunkAPI) => {

  try {
      const response = await axiosClient.get(`/orders/all-customers`)
    //    console.log('orderlist response',response)
      return response
  } catch (error) {
      return Promise.reject(error)
  }

}
)



export const fetchMyOrders = createAsyncThunk('orders/my-order', async (body, thunkAPI) => {

  try {
      const response = await axiosClient.get(`/orders/my-orders`)
    //    console.log('orderlist response',response)
      return response
  } catch (error) {
      return Promise.reject(error)
  }

}
)








export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
      orderList:[],
      orderDetails:[],
      customers:[],
      customerOrders:[]
  },

  reducers: {
   
    
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchAllOrders.fulfilled, (state, action) => {
            state.orderList = action.payload?.data
        })
        .addCase(fetchOrderDetails.fulfilled, (state, action) => {
            state.orderDetails = action.payload?.data
        })
        .addCase(fetchAllCustomers.fulfilled, (state, action) => {
            state.customers = action.payload?.data
        })
        .addCase(fetchMyOrders.fulfilled, (state, action) => {
            state.customerOrders = action.payload?.data
        })
        
        
        
}
})

// Action creators are generated for each case reducer function
export const { _ } = orderSlice.actions

export default orderSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient, createAxiosClient } from '../../Utils/axiosClient';
import Swal from 'sweetalert2'
import { setLoading } from './appConfigSlice';
import { store } from '../store';


export const getAllProduct = createAsyncThunk('product/get-all-product', async (body, thunkAPI) => {
         const axiosClient = createAxiosClient(store)
  try {
       
      const response = await axiosClient.get('/products/all-products')
      //  console.log('slice response',response.data)
      return response
  } catch (error) {
      return Promise.reject(error)
  }
  

}
)


export const deleteSingleProduct = createAsyncThunk('product/delete-product', async (body, thunkAPI) => {

  try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })

     if(result.isConfirmed){
        const response = await axiosClient.delete(`/products/${body}`)
        //  console.log('slice response',response.data)
        return response
     }
     
  } catch (error) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error while deleting pizza!',
    })
      return Promise.reject(error)
  }

}
)

export const getProductById = createAsyncThunk('product/get-product-details', async (body, thunkAPI) => {

  try {
    thunkAPI.dispatch(setLoading(true))
    const response = await axiosClient.get(`/products/${body}`)
    //  console.log('slice response',response.data)
    thunkAPI.dispatch(setLoading(false))
    return response
} catch (error) {
      thunkAPI.dispatch(setLoading(false))
      return Promise.reject(error)
  }

}
)
export const updateProductDetails = createAsyncThunk('product/update-product-details', async (body, thunkAPI) => {

  try {
      console.log(body)
      const response = await axiosClient.put(`/products/updateproduct`,{body})
      //  console.log('slice response',response.data)
      return response
  } catch (error) {
      return Promise.reject(error)
  }

}
)
export const fetchCategory = createAsyncThunk('categories/fetch-category', async (body, thunkAPI) => {

  try {
      
      const response = await axiosClient.get(`/categories/fetch-category`)
      //  console.log('slice response',response.data)
      return response
  } catch (error) {
      return Promise.reject(error)
  }

}
)









export const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
      products:[],
      isTopProduct : [],
      productDetails:{},
      categories:[]
  },

  reducers: {
   
    
  },
  extraReducers: (builder) => {
    builder
        .addCase(getAllProduct.fulfilled, (state, action) => {
            state.products = action.payload?.data
            state.isTopProduct = state.products.filter(product => product.isTop === true)
        })
        .addCase(deleteSingleProduct.fulfilled, (state, action) => {
            const deleteProduct = action.payload?.data
            state.products = state.products.filter(item => item._id !== deleteProduct?._id)
        })
        .addCase(getProductById.fulfilled, (state, action) => {
            state.productDetails = action.payload?.data
        })
        .addCase(fetchCategory.fulfilled, (state, action) => {
            state.categories = action.payload?.data
        })
        
        
        
}
})

// Action creators are generated for each case reducer function
export const { _ } = productSlice.actions

export default productSlice.reducer
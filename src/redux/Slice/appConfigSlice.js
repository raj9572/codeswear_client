import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../Utils/axiosClient';



export const getCurrentUser = createAsyncThunk('user/current-user', async (body, thunkAPI) => {

  try {
      const response = await axiosClient.get('/users/current-user')
      //  console.log('slice response',response.data)
      return response.data;
  } catch (error) {
      return Promise.reject(error)
  }
  

}
)

export const updateMyProfile = createAsyncThunk('users/update-account', async (body, thunkAPI) => {
  try {
   
      const response = await axiosClient.patch('/users/update-account', body)
       return response.data

  } catch (error) {
      console.log('error in update profile',error)
  }
  

})


export const WishListProduct = createAsyncThunk('products/wishlist', async (body, thunkAPI) => {

  try {
      
      const response = await axiosClient.get(`/products/wishlist/${body}`)
      //  console.log('wishlist response',response)
      return response.data
  } catch (error) {
      return Promise.reject(error)
  }

}
)
export const getWishListProduct = createAsyncThunk('products/getWishlist', async (body, thunkAPI) => {

  try {
      
      const response = await axiosClient.get(`/products/getwishlist/wishlistproducts`)
      //  console.log('wishlist response',response)
      return response.data
  } catch (error) {
      return Promise.reject(error)
  }

}
)


export const appConfigeSlice = createSlice({
  name: 'appConfigeSlice',
  initialState: {
      isLoading:false,
      myProfile: null,
      openCart:false,
      toastData:{},
      wishListProducts:[]
  },

  reducers: {
    setLoading: (state,action) => {
         state.isLoading = action.payload
    },
    showToast: (state,action) => {
         state.toastData=action.payload
    },
    openCart:(state, action)=>{
      state.openCart = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(getCurrentUser.fulfilled, (state, action) => {
            state.myProfile = action.payload
        })
        .addCase(WishListProduct.fulfilled, (state, action) => {
            const productId  = action.payload._id
            console.log(productId)
            const index = state.myProfile?.wishlist?.findIndex(item => item === productId)
            console.log(index)
            if(index !== -1){
              state.myProfile.wishlist = state.myProfile?.wishlist?.filter(item => item !== productId)
              state.wishListProducts = state.wishListProducts?.filter(item => item._id !== productId)
            } else{
              //  state.myProfile = {...state.myProfile,wishlist:[...state.myProfile.wishlist,productId]}
               state.myProfile?.wishlist?.push(productId)
            }
        })

        .addCase(getWishListProduct.fulfilled, (state, action) => {
          state.wishListProducts = action.payload
      })
        .addCase(updateMyProfile.fulfilled, (state, action) => {
          state.myProfile = action.payload
      })
        
}
})

// Action creators are generated for each case reducer function
export const { setLoading, showToast,openCart } = appConfigeSlice.actions

export default appConfigeSlice.reducer
import {  createSlice } from '@reduxjs/toolkit'








export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
      cart:[]
  },

  reducers: {
    addToCart : (state,action)=>{
        // console.log(action.payload)
        const curItem = action.payload
        // console.log(curItem.varient)
        const addedProduct = {
            _id:curItem.product._id,
            varient:curItem.varient ? curItem.varient : curItem.product?.varient,
            category:curItem.product.category.category,
            title:curItem.product.title,
            description:curItem.product.description,
            price:curItem.varient === "S" ? curItem.product.price : curItem.product.prices[0][curItem.varient] ,
            prices:curItem.product.prices,
            productImage:curItem.product.productImage
        }

       
        const index = state.cart?.findIndex(item => item?._id === addedProduct?._id)

        if(index === -1){
            state.cart.push({...addedProduct,quantity:1})
        }else{
            state.cart[index].quantity += 1
            if(curItem.varient){
                state.cart[index].varient = addedProduct.varient
            }
        }


    },
    removeFromCart : (state,action)=>{
        const curItem = action.payload
        const index = state.cart?.findIndex(item => item?._id === curItem?._id)

        if(index === -1)  return 
        if(state.cart[index].quantity === 1){
            state.cart = state.cart.filter(item => item?._id !== curItem?._id)
        }
        else{
            state.cart[index].quantity -= 1
        }

    },
    removeItemFromCart : (state,action)=>{
        const curItem = action.payload
         state.cart = state.cart?.filter(item => item?._id !== curItem?._id)

    },

    resetCart : (state,cart)=>{
        state.cart = []
    }
    
  },
  
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,removeItemFromCart,resetCart } = cartSlice.actions

export default cartSlice.reducer
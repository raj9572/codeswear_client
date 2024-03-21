import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../Utils/axiosClient';
import Swal from 'sweetalert2';



export const getAllUsers = createAsyncThunk('user/get-all-user', async (body, thunkAPI) => {

  try {
      const response = await axiosClient.get('/users/getallusers')
      //  console.log('slice response',response.data)
      return response;
  } catch (error) {
      return Promise.reject(error)
  }
  

}
)
export const deleteUser = createAsyncThunk('user/delete-user', async (body, thunkAPI) => {

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
        const response = await axiosClient.delete(`/users/${body}`)
        //  console.log('slice response',response.data)
        return response;
     }
     
  } catch (error) {
      return Promise.reject(error)
  }
  

}
)

export const changeUserisAdmin = createAsyncThunk('user/admin-user', async (body, thunkAPI) => {

  try {
    console.log(body)
      const response = await axiosClient.patch(`/users/${body}`)
      //  console.log('slice response',response.data)
      return response;
  } catch (error) {
      return Promise.reject(error)
  }
  

}
)




// export const updateMyProfile = createAsyncThunk('users/update-account', async (body, thunkAPI) => {
//   try {
//       const response = await axiosClient.put('/users/update-account', body)
//       window.location.reload()
//       return response.result;



//   } catch (error) {
//       return Promise.reject(error)
//   }
  

// })


export const userConfigSlice = createSlice({
  name: 'userSlice',
  initialState: {
      users:[]
  },

  reducers: {
    
    
  },
  extraReducers: (builder) => {
    builder
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload.data
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            const deleteUser = action.payload?.data
            state.users = state.users.filter(item => item._id !== deleteUser?._id)
        })
        .addCase(changeUserisAdmin.fulfilled, (state, action) => {
            const user = action.payload.data
            const index = state.users.findIndex(item => item._id === user._id)

            if(index !== -1){
                state.users[index].isAdmin = user.isAdmin
            }
        })
}
})

// Action creators are generated for each case reducer function
export const { _} = userConfigSlice.actions

export default userConfigSlice.reducer
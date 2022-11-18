import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    user : []
}

export const userSlice = createSlice({
   name: 'user',
   initialState : initialState,
   reducers: {
        getUser : (state, action) =>{
            state.user = [action.payload]
        },
        logoutUser : (state, action) =>{
            state.user = []
        }
      }
    })

export const { getUser, logoutUser } = userSlice.actions

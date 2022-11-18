import { createSlice } from '@reduxjs/toolkit';


const initialState ={
    task : []
}

export const taskSlice = createSlice({
   name: 'task',
   initialState : initialState,
   reducers: {
        storeTaskUser : (state, action) =>{
            state.task = [action.payload]
        },
        complete : (state, action) =>{
            const index = state.task[0].findIndex(obj =>{
              return obj.id === action.payload.id
            })
            state.task[0][index].complete = action.payload.complete
        },
        createTask :(state, action) =>{
          state.task = [...state.task, action.payload]
        },
        deleteTask :(state, action)=>{
          // state.task = [state.task[0].filter(t => t.id !== action.payload.id)]
          const data = state.task[0].filter(t =>t.id !== action.payload.id)
          state.task = [data]
        },
        cleanStateTask : (state) =>{
          state.task = []
        }
      }
    })

export const { storeTaskUser, complete, createTask, deleteTask, cleanStateTask } = taskSlice.actions
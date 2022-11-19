import { createSlice } from '@reduxjs/toolkit';


const initialState ={
    task : []
}

export const taskSlice = createSlice({
   name: 'task',
   initialState : initialState,
   reducers: {
        storeTaskUser : (state, action) =>{
            state.task = action.payload
        },
        complete : (state, action) =>{
            const index = state.task.findIndex(obj =>{
              return obj.id === action.payload.id
            })
            state.task[index].complete = action.payload.complete
        },
        createTask :(state, action) =>{
          state.task = [...state.task, action.payload]
        },
        deleteTask :(state, action)=>{
          // const data = state.task.filter(t => t.id !== action.payload.id)
            state.task = state.task.filter(t => t.id !== action.payload)
        },
        cleanStateTask : (state) =>{
          state.task = []
          state.errors = {}
        }
      }
    })

export const { storeTaskUser, complete, createTask, deleteTask, cleanStateTask, taskError } = taskSlice.actions
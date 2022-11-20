import {api} from '../../../service'
import {storeTaskUser, complete} from  './index'
import { createTask } from './taskSlices'
import { deleteTask } from './taskSlices'
import swal from 'sweetalert'


export const getTask =(id)=>{
  return async (dispatch) => {
    try {
      const {data} = await api.get(`tareas/tareas/${id}`)
      dispatch(storeTaskUser(data))
    } catch (error) {
      console.log(error);
      return {
        status : false
      }
    }
  }}

export const completeTask = (id, status) => {
  return async (dispatch) => {
    const { data } = await api.patch(`tareas/completar/${id}/`, {complete : status})
    dispatch(complete(data))
  }
}

export const taskModifier = (id, currentInfo) => {
  return async (dispatch) => {
     await api.put(`tareas/modificar/${id}/`, currentInfo)
    
  }
}

export const taskCreator =(task, id) =>{
  return async(dispatch) =>{
    try {
      const {data} = await api.post('tareas/tareas/', task)
      dispatch(createTask(data))
      return {
        status : true
      }
    } catch (error) {
      console.log(error);
      return error
      
    }
  }
}

export const taskDeleter = (id)=>{  
  return async(dispatch) =>{
    await api.delete(`tareas/eliminar/${id}`)
    return dispatch(deleteTask(id))
  }
}

export const taskSearch = (info, id)=>{  
  return async(dispatch) =>{
    await api.get(`tareas/buscar/${info}/${id}`).then((res)=>{
          if(res.data.length === 0){
            swal({
              title: "ATENCIÓN",
                text: `No se encontro ninguna tarea asociada a la busqueda`,
                icon: "warning",
                button: "Ok",
              })  
              dispatch(getTask(id))
          } else {
            dispatch(storeTaskUser(res.data))    
          }
      }).catch((error)=>{
        return error
      })
  }
}  
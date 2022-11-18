import {api} from '../../../service'
import {getUser, logoutUser} from  './index'
import {cleanStateTask} from '../tasks'
import swal from 'sweetalert'


export const postUser = (input) => {
    return async (dispatch) => {
      try {
        const { data } = await api.post('', {username: input.username, password: input.password})
        dispatch(await getUser(data))
      } catch (error) {
        console.log(error);
        swal({
          title: "ALTO",
        text: `Usuario o contraseña incorrecto`,
        icon: "error",
        button: "Ok",
        })
      }
    }
  }

  export const logout =(token) =>{
    return async(dispatch)=>{
      await api.get(`logout?token=${token}`)
      dispatch(logoutUser())
      dispatch(cleanStateTask())
    }
  }


  export const userCreator = (user)=>{
    return async(dispatch)=>{
      try {
        await api.post(`usuario/usuarios/`, user)
      } catch (error) {
          console.log(error)
          return swal({
            title: "ERROR",
            text: `el usuario se encuentra registrado`,
            icon: "error",
            sbutton: "Ok",
        })        
      }
    }
  }
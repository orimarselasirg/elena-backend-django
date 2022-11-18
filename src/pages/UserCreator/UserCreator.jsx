import React, {useState} from 'react';
import {useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { FaUserAlt,  } from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {CgPassword} from "react-icons/cg";
import swal from 'sweetalert'
import {userCreator} from '../../redux'
import './usercreator.css'

function UserCreator(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: '',
        last_name : '',
        username : '',
        email: '',
        password : ''
    })

    const changeHandler=(e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const clickHandler=async(e, data)=>{
        e.preventDefault()
            const info = dispatch(userCreator(data))
            if(await info === undefined){
                navigate('/')
                return swal({
                    title: "REGISTRADO",
                    text: `El usuario ha sido registrado con exito`,
                    icon: "success",
                    button: "Ok",
                })
            }
    }
    return (
        <div className='creator'>
            <div className='creator-con'>
                <div className="field">
                    <label className="label">Nombre</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Ingrese su nombre" name = 'name' onChange={(e)=>changeHandler(e)}/>
                    </div>
                </div>

            <div className="field">
            <label className="label">Apellido</label>
            {/* <div className="control has-icons-left has-icons-right"> */}
                <input className="input" type="text" placeholder="Ingrese su apellido" name = 'last_name' onChange={(e)=>changeHandler(e)}/>
            {/* <p className="help is-success">This username is available</p> */}
            </div>
            
            <div className="field">
                <label className="label">Nombre de Usuario</label>
                <div className="control">
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Ingrese su nombre de usuario" name = 'username' onChange={(e)=>changeHandler(e)}/>
                    <span className="icon is-small is-left">
                        <i><FaUserAlt/></i>
                    </span>
                </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Ingrese su email" name ='email' onChange={(e)=>changeHandler(e)}/>
                    <span className="icon is-small is-left">
                        <i><FiMail/></i>
                    </span>
                    
                </div>
            {/* <p className="help is-danger">This email is invalid</p> */}
            </div>

            <div className="field">
                <label className="label">Contraseña</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="password" placeholder="Registre una contraseña" name ='password' onChange={(e)=>changeHandler(e)}/>
                    <span className="icon is-small is-left">
                        <i><CgPassword/></i>
                    </span>
                </div>
            {/* <p className="help is-danger">This email is invalid</p> */}
            </div>
            <div className="field is-grouped">
            <div className="control">
                {data.username ==='' || data.name === '' || data.last_name==='' || data.password === '' || data.email=== '' ?
                <button className="button is-link" disabled>Registrar</button> : <button className="button is-link" onClick={(e)=>clickHandler(e, data)}>Registrar</button> 
            }
            </div>
            <div className="control">
                <button className="button is-link is-light" onClick={()=>navigate('/')}>Cancelar</button>
            </div>
            </div>
            </div>
        </div>
    );
}

export default UserCreator;
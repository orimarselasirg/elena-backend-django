import React from "react";
import { BsFillPersonFill, BsArrowRightShort } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import {postUser} from '../.././redux'

import "./login.css";

function Login(props) {

    
const dispatch = useDispatch()
const navigate = useNavigate()


const [input, setInput] = useState({
    username : '',
    password : ''
})


function inputHandler(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })

}

const handlerClick =(e)=>{
    e.preventDefault()
    dispatch(postUser(input))
    navigate('/home')
}

  return (
    <div className="box login">
        <div className="login-container">
            <h2 className="title is-4">Gestor de Tareas Elenas</h2>
            <br/>
            <div className="field" width='100px' >
                <label className="label">Nombre de usuario</label>
                <div className="control has-icons-left">
                <input className="input is-normal is-rounded" type="text" name = 'username' placeholder="Ingrese el username" onChange={e => inputHandler(e)}/>
                <span className="icon is-small is-left">
                    <i><BsFillPersonFill/></i>
                </span>
                </div>
            </div>
                
            <div className="field">
                <label className="label">Contraseña</label>
                <div className="control has-icons-left">
                <input className="input is-normal is-rounded" type="password" name = 'password' placeholder="Ingrese su contraseña" onChange={e => inputHandler(e)}/>
                <span className="icon is-small is-left">
                    <i><BsArrowRightShort/></i>
                </span>
                </div>
            </div>
            <br/>
            <div className="buttons">
                <button className="button is-primary" onClick={(e)=> handlerClick(e)}>Ingresar</button>
                <NavLink to='/createuser'>
                    <button className="button is-link">Registar</button>
                </NavLink>
            </div>
        </div>
    </div>
  );
}

export default Login;

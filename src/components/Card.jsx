import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch} from'react-redux' 
import { taskDeleter, deleteTask, completeTask } from '../redux';
import './card.css'

function Card({id, task, description, status, user}) {
    const dispatch = useDispatch()
    
    const [complete, setComplete] =useState(!status)
    
    function handleClick(e){
        e.preventDefault()
        setComplete(!complete)
        dispatch(completeTask(id, complete))
    }

    const handlerDeleter=(e)=>{
        e.preventDefault()
        dispatch(taskDeleter(id))
        dispatch(deleteTask(id))
    }
    
    return (
        <div className='card-container'>
            <div className='card card-card'>
                <p className='title is-4 title-card'>{task}</p>
                <div className='content content-card'>{description}</div>
            </div>
            <div className='buttons buttons-card'>
                <NavLink to = {`/taskdetail/${id}`}>
                    <button className="button is-small is-link is-outlined navlink-button">Editar</button>
                </NavLink>
                {!complete ? <button className='button is-small is-link is-outlined' onClick={(e)=>handleClick(e)}>Completa</button>: <button className='button is-small is-success is-outlined' onClick={(e)=>handleClick(e)}>Pendiente</button>}
                <button className="button is-primary is-small is-danger is-outlined" onClick={(e)=>handlerDeleter(e)} >Eliminar</button>
            </div>

        </div>
    );
}

export default Card;
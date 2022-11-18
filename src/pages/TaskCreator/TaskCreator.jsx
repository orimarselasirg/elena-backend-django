import React,{useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {taskCreator} from '../../redux/slices/tasks/thunk'
import swal from 'sweetalert'
import './taskcreator.css'

function TaskCreator(props) {
const user = useSelector(state => state.data.user[0])
const dispatch = useDispatch()
const navigate = useNavigate()
const [data, setData] = useState({
    task : '',
    description : '',
    user : user.user.id
})

function handlerChange(e){
    setData({
        ...data,
        [e.target.name] : e.target.value
    })
}

function handlerClick(e){
    e.preventDefault()
    if(data.task === '' || data.description === ''){
        return swal({
            title: "ALTO",
            text: `Tienes campos obligatorios que estan vacios`,
            icon: "error",
            button: "Ok",
        })
    }
    dispatch(taskCreator(data))
    setData({
        task : '',
        description : '',
        user : user.user.id
    })
    navigate('/home')
}

    return (
        <div className='taskcreator-container'>
        <div className='field creator-container' id='form-task'>
            <label className="label  label-task">TAREA</label>
            {data.task === '' ? <p className='danger help is-danger'>Debe indicar una Tarea</p> : '' }
            <div className="control">
                <input className="input" type="text" placeholder="Nombre de la tarea" name='task' onChange={e=>handlerChange(e)}/>

            </div>
            <div className="field">
                <label className="label label-description">DESCRIPCIÓN</label>
                {data.description === '' ? <p className='danger help is-danger'>Descripción no puede estar vacio</p> : '' }
                <div className="control">
                    <textarea className="textarea" placeholder="Describa su tarea" name='description' onChange={e=>handlerChange(e)}></textarea>
                </div>
            </div>
            <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" onClick={(e)=>handlerClick(e)}>Crear Tarea</button>
            </div>
            <div className="control">
                <button className="button is-link is-light" onClick={()=>navigate('/home')} >Volver</button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default TaskCreator;
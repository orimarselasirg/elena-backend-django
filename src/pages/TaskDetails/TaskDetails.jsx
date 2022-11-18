import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import {taskModifier} from '../../redux/index'
import './taskdetails.css'

function TaskDetails(props) {
const tasks = useSelector(state => state.task.task[0])
const {id} = useParams()

const task = tasks.filter(task => task.id === parseInt(id)) // Siempre es necesario parsear el id de params


const dispatch = useDispatch()
const navigate = useNavigate()
const [input, setInput] = useState({
    task : task[0].task,
    description : task[0].description,
    complete : task[0].complete,
    user : parseInt(task[0].user)
})

function handlerChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}

function handlerClick(e){
    e.preventDefault()
    dispatch(taskModifier(parseInt(id), input))
    navigate('/home')
}
    return (
        <div className='taskdetail-container'>
        <div className='field detail-container' id='form-task'>
            <label className="label  label-task">Nuevo nombre de la tarea</label>
            <div className="control">
                <input className="input" type="text" placeholder={input.task} name='task' onChange={e=>handlerChange(e)}/>

            </div>
            <div className="field">
                <label className="label label-description">Nueva descrición de la tarea</label>
                <div className="control">
                    <textarea className="textarea" placeholder={input.description} name='description' onChange={e=>handlerChange(e)}></textarea>
                </div>
            </div>
            <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" onClick={(e)=>handlerClick(e)}>Guardar</button>
            </div>
            {/* <div className="control">
                <button className="button is-link is-light" onClick='' >Volver</button>
            </div> */}
        </div>
        </div>
        </div>
    );
}

export default TaskDetails;
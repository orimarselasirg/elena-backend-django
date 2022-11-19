import React, {useEffect, useState} from 'react';
import swal from 'sweetalert'
import {useSelector, useDispatch} from'react-redux'
import {useNavigate} from 'react-router-dom'
import { getTask } from '../../redux/index';
import Navbar from '../.././components/Navbar'
import Card from '../../components/Card'
import Paginator from '../../components/Paginator'
import './home.css'

function Home(props) {
const navigate = useNavigate()
const dataTasks = useSelector(state => state.task)
const tasks = dataTasks.task
const dataUser = useSelector(state => state.data)
const userId = dataUser.user.user.id
const page = 4
const [sum, setSum] = useState(0); // estado pagina prev
const [sum2, setSum2] = useState(page); // estado pagina next

const longitude = Array.from({length: Math.ceil(tasks.length/page) }, (v, i) => i+1);

const dispatch = useDispatch()

/* eslint-disable */
useEffect(()=>{
    dispatch(getTask(userId)).then(res=>{
        if(res.response.status === 404){
            swal({
                title: 'No tiene taras creadas',
                text: 'Puedes crear una en este momento, ¿Deseas hacerlo?',
                icon: 'warning',
                buttons :{
                Si: true,
                No : true,
                }
            }).then((value)=>{
                switch(value){
                case 'No':
                    break
                default:
                    navigate('/taskcreator')
                    break
                }
            })
        }
    }).catch((e)=>{
        // console.log(e);
    })
},[])

    return (
        <div className='home-container'>
            <Navbar/>
        <div className='body-home-container'>
            <div className='cards-container'>
            {   
                tasks.length === 0 ? <div className='notask'><p className='tag is-info is-light'>Aun no tiene tareas creadas</p></div>
                : tasks && tasks.slice(sum, sum2).map(task => (
                    <Card key={task.id} id ={task.id} task={task.task} description={task.description} status={task.complete} user={dataUser} ></Card>
                ))
            }
            </div>
            <Paginator task = {tasks} sum={sum} setSum={setSum} sum2={sum2} setSum2={setSum2} page={page} longPage={longitude}/>
        </div>
            
        </div>
    );
}

export default Home;
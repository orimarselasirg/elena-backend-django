import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from'react-redux'
import { getTask } from '../../redux/index';
import Navbar from '../.././components/Navbar'
import Card from '../../components/Card'
import Paginator from '../../components/Paginator'
import './home.css'

function Home(props) {
const tasks = useSelector(state => state.task.task)
const user = useSelector(state => state.data.user)
const [sum, setSum] = useState(0); // estado pagina prev
const page = 4
const [sum2, setSum2] = useState(page); // estado pagina next
const longitude = [1]
const task = (Math.ceil(tasks[0]?.length/page))

for(let i = 1; i < task; i++) {
    longitude.push(i+1)
};

/* eslint-disable */
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getTask(user[0].user.id))
},[])


    return (
        <div className='home-container'>
            <Navbar/>
        <div className='body-home-container'>
            <div className='cards-container'>
            {   
                tasks[0]?.slice(sum, sum2).map(task => (
                    <Card key={task.id} id ={task.id} task={task.task} description={task.description} status={task.complete} user={user} ></Card>
                ))
            }
            </div>
            <Paginator task = {tasks} sum={sum} setSum={setSum} sum2={sum2} setSum2={setSum2} page={page} longPage={longitude}/>
        </div>
            
        </div>
    );
}

export default Home;
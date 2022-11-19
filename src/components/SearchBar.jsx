import React, {useState} from 'react';
import swal from 'sweetalert';
import {NavLink} from 'react-router-dom'
import {taskSearch, getTask} from '../redux'
import {useDispatch, useSelector} from 'react-redux'
import './searchbar.css'
 
function SearchBar(props) {
    const dispatch = useDispatch()
    
    const dataUser = useSelector(state => state.data)
    const userId = dataUser.user.user.id
    const [search, setSearch] = useState('')
    const handlerChange=(e) =>{
        setSearch(e.target.value)
    }

    const handlerClick = (e) =>{
        e.preventDefault()
        if(search=== ''){
            swal({
                title: "ATENCIÓN",
                text: `No colocaste nada en la barra de busqueda`,
                icon: "warning",
                button: "Ok",
            })
            dispatch(getTask(userId))
        } else {
            dispatch(taskSearch(search, userId))
            setSearch(e.target.value = '')
        }
    }
    return (
        <div className='search-container'>
            <input className="input-search input is-rounded" type="text" value={search} name = 'search' placeholder="Buscar tarea" id='prueba' onChange={(e)=>handlerChange(e)}></input>
            <button className='button is-primary is-small is-outlined' onClick={(e)=>handlerClick(e)}>Buscar</button>
            <NavLink to = '/taskcreator'>
                <button className='button is-link is-small is-outlined'>Crear Tarea</button>
            </NavLink>
            
        </div>
    );
}

export default SearchBar;
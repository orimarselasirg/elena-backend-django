import React, {useState} from 'react';
import './searchbar.css'
import {NavLink} from 'react-router-dom'
import {taskSearch} from '../redux'
import {useDispatch, useSelector} from 'react-redux'
 
function SearchBar(props) {
    const dispatch = useDispatch()
    const userId = useSelector(state=> state.data.user[0].user.id)
    
    const [search, setSearch] = useState('')
    const handlerChange=(e) =>{
        setSearch(e.target.value)
    }
    return (
        <div className='search-container'>
            <input className="input-search input is-rounded" type="text" name = 'search' placeholder="Buscar tarea" onChange={(e)=>handlerChange(e)}></input>
            <button className='button is-primary is-small is-outlined' onClick={()=>dispatch(taskSearch(search, userId))}>Buscar</button>
            {/* <Route path="/taskcreator" element={user.length>0 ? <Home/> : <TaskCreator/>} /> */}
            <NavLink to = '/taskcreator'>
                <button className='button is-link is-small is-outlined'>Crear Tarea</button>
            </NavLink>
            
        </div>
    );
}

export default SearchBar;
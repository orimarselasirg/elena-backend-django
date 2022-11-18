import React from 'react';
import SearchBar from './SearchBar';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux';
import './navbar.css'

function Navbar(props) {
    const user = useSelector(state => state.data.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = user[0].token

    const handlerClick=(e, token)=>{
        e.preventDefault()
        dispatch(logout(token))
        navigate('/')
    }
    return (
        <div>
            <nav className="navbar navbar-container" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://www.elenas.co/co/wp-content/uploads/2022/09/elenas.png" width="112" height="28" alt=''/>
                    </a>
                </div>
                <div className='searchbar-container'>
                    <SearchBar/>
                </div>
                <div className="navbar-end ending">
                    <div className="navbar-item">
                        <div className="buttons profile">
                            <span className='help is-success'>{user[0].user.name}</span>
                            <div className="logout-button button is-primary" onClick={(e)=>handlerClick(e, token)}>
                            <strong>Salir</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
            
export default Navbar;
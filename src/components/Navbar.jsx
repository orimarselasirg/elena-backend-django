import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux';
import SearchBar from './SearchBar';
import './navbar.css'

function Navbar(props) {
    const dataUser = useSelector(state => state.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = dataUser.user.token
    const userName = dataUser.user.user.name

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
                            <span className='help is-success'>{userName}</span>
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
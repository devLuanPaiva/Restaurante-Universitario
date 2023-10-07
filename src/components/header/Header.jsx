import React from 'react'
import './Header.css'
import logo from '../../imgs/logo.png'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <React.Fragment>
            <header>
                <div className="logo" >
                    <Link to={'/'}><img src={logo} alt="logo" /></Link>
                </div>
                <div className="titulo">
                    <h1>{props.titulo}</h1>
                </div>
                <div className="auxiliar"></div>
            </header>
        </React.Fragment>
    )
}

export default Header

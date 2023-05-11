import React from "react"
import './style.scss'

import Logo from '../../assets/logo.png'

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={Logo}/>
                <p>Globe Experience</p>
            </div>

            <div className="links">
                <a>Linkedin</a>
                <a>GitHub</a>
                <a>Email</a>
            </div>
        </header>
    )
}
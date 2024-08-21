import React from "react";
import pfp from '../img/pfp.jpg'
import '../css/home.css'

function Header(){
    return(
        <>
            <nav id="header">
                <h1 id="webName">Nombre de la Web</h1>
                <div>
                    <img id="userImage" src={pfp} alt="Imagen del usuario"/> 
                    <span id="userName">Usuario</span>
                </div>
            </nav>

            <div id="main-content">
                <div className="search-bar">
                <input type="text" className="search-input" placeholder="Buscar..." />
                <button className="search-button">Buscar</button>
                </div>
            </div>
        </>
    )

}

export default Header
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../Style/Estilos.css';

class Navegacion extends Component {
  render() {
    return (
      
        <header className="cabeza" >
          <nav className="navbar navbar-expand-md navbar-dark fixed-static max-width: 100%">
            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png" alt="" width="70" height="70" />
            <label className="Titulo">ODIN</label>
            <div className="navegacion" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                 
                  <button className="botones" type="button">DIGITAR QUEJA</button>
                
                </li>
                <li className="nav-item">
                  
                  <button className="botones" type="button">BUZON DE MENSAJES</button>
                  
                </li>
                <li className="nav-item">
                
                  <button className="botones" type="button">PERFIL</button>
                  
                </li>
                <li className="nav-item">
                
                 <Link to='/registro'><button className="botones" type="button">INICIO DE SESION</button></Link>
                  
                </li>
              </ul>
            </div>
          </nav>
        </header>
      
    );
  }
}

export default Navegacion
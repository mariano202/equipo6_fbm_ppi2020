import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../Style/Estilos.css';

class Navegacion extends Component {
  render() {
    return (
      <body>
        <header className="header">
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-rgba(154, 148, 96, 1)">
            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png" alt="" width="70" height="70" />
            <Link to='/'><label className="Titulo">ODIN</label></Link>
            <div className="navegacion" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">DIGITAR QUEJA</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">BUZON DE MENSAJES</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">PERFIL</button>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </body>
    );
  }
}

export default Navegacion
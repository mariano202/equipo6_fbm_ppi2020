import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Navegacion extends Component {
  render() {
    return (
      
        <header className="cabeza" >
          <div className="container">
          <div className="row">
          <nav className="navbar navbar-expand-md navbar-dark  max-width: 100%">
            <img className="mb-4 col-lg-4" src=
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png"
             alt="" width="70" height="70" />
            <div className="navegacion" id="navbarCollapse">
              </div>
              <div className="col-lg-7">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                 
                  <Link to='/digitar_queja'><button className="botones" type="button">DIGITAR QUEJA</button></Link>
                
                </li>
                <li className="nav-item">
                  
                  <button className="botones" type="button">BUZON DE MENSAJES</button>
                  
                </li>
                <li className="nav-item">
                
                  <Link to='/'><button className="botones" type="button">CERRAR SESION</button></Link>
                  
                </li>
              </ul>
            </div>
          </nav>

          </div>
          </div>
        </header>
      
    );
  }
}

export default Navegacion
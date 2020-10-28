import React, {Component} from 'react'

import '../Style/Estilos.css';

class Menu extends Component{
    render(){
        return(
            
<body>
    <header>
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png" alt="" width="70" height="70"/>
           <label className="Titulo">ODIN</label>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
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
    <label className="Titulo">ODIN</label>
    <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png" alt="" width="70" height="70"/>
  </nav>
</header>


</body>

        );
    }
}

export default Menu
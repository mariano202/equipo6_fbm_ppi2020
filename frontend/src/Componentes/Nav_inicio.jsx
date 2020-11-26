import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Label,ModalBody, Button, Modal, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';
class Nav_inicio extends Component{
  state={
    abierto: false,
  }
  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }
    render(){
        return(
            <header className="cabeza" >
            <nav className="navbar navbar-expand-md navbar-dark fixed-static max-width: 100%">
              <img className="mb-4" src=
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png"
               alt="" width="70" height="70" />
              <label className="Titulo">ODIN</label>
              <div className="navegacion" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                   
                  </li>

                  <li className="nav-item">
                  
                   <button className="botones" type="button" onClick={this.abrirModal}>INICIO DE SESION</button>
                   
                  </li>

                  <li className="nav-item active">

                  <Link to='/registra'><button className="botones" type="button">REGISTRARSE</button></Link>
                  </li>
          
                </ul>
                <Modal isOpen={this.state.abierto}>
<ModalHeader>
  ¿QUE USUARIO ERES?
</ModalHeader>
<ModalBody>
<FormGroup>
 <Link to='registro'> <Button className="botones" type="button" color="succes">Usuario Estudiante</Button></Link>
</FormGroup>

<FormGroup>
  <Link to='registro'><Button className="botones" type="button" color="succes">Usuario Docente</Button></Link>
</FormGroup>
<FormGroup>
 <Link to='registro_admin'><Button className="botones" type="button" color="succes">Administrador Rector o coordinador</Button></Link>
</FormGroup>

</ModalBody>
<ModalFooter>
<Button className="botones" type="button" onClick={this.abrirModal}>Cerrar</Button>

</ModalFooter>
                </Modal>
              </div>
            </nav>
          </header> 
        )
    }
}
export default Nav_inicio;
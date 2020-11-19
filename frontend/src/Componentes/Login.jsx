import React, { Component } from 'react'
import '../Style/Estilos.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            
                <center>
                    <div className="container">
                        <form className="form-signin">
                            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png"
                                alt="" width="400" height="200" />
                            <h1 className="informativo">INICIAR SESION</h1>
                            <label for="inputEmail" className="sr-only">Correo electronico</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electronico" required="" autofocus="" />
                            <label for="inputPassword" className="sr-only">Contraseña</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required="" />
                            <div className="checkbox mb-3">
                            </div>
                            <Link to='menu' type="button" className="btn btn-success">Ingresar</Link>
                            <p classNameName="aling=right">©2020</p>
                        </form>
                    </div>
                </center>
            
        );
    }
}
export default Login;

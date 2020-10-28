

import React, {Component} from 'react'

import '../Style/Estilos.css';

class Login extends Component{
    render(){
        return(
            <body className="color: 9A9460">
            <div className="container">
            <form className="form-signin">
           <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valknut.svg/1200px-Valknut.svg.png" 
           alt="" width="1050" height="200"/>
          
               <h1 className="center h3 mb-3 font-weight-normal">POR FAVOR REGISTRATE</h1>
         <label for="inputEmail" className="sr-only">Correo electronico</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electronico" required="" autofocus=""/>
      <label for="inputPassword" className="sr-only">Contraseña</label>
   <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required=""/>
       <div className="checkbox mb-3">
  
       </div>
         <button className="" type="submit">Ingresar</button>
         <p className="aling=right">©2020</p>
    </form>
    </div>  
    </body>
            );
    }
}
export default Login
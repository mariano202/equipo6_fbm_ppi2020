import React, { Component } from 'react'
import '../Style/Estilos.css';
import valknut from '../imagenes/valknut.png'
import { Link } from 'react-router-dom';
class Queja_cuerpo extends Component{
    render(){
        return(
 <body>
         <center>
          <div className="container">
  <div className="py-5 text-center">
    <img src={valknut} alt=""alt="" width="75" height="75"/>
    <h2>Formulario de Queja</h2>
    <p className="lead">A continuacion, encontraran el formulario para el registro de una queja,
    se debe diligenciar completamente para su correcto envio, recuerde que toda la información
    presentada sera utilizada para la resolucion de la situacion presentada.</p>
 
 <div className="row">
 <div className="col-md-5 order-md-3 mb-4">
 <h4 className="d-flex justify-content-between align-items-center mb-3">
     </h4>
 </div>
  
 <div className="col-md-5 order-md-2"> 
   <h4 className="mb-"></h4>
   <form className="needs-validation" novalidate="">
     <div className="row">

       <div className="col-md-5 mb-2">
         <label for="firstName">Nombres</label>
         <input type="text" class="form-control" id="firstName" placeholder="Nombres" value="" required=""/>
         <div className="invalid-feedback">
           Valid first name is required.
         </div>
       </div>
       <div className="col-md-5 mb-2">
         <label for="lastName">Apellidos</label>
         <input type="text" class="form-control" id="lastName" placeholder="Apellidos" value="" required=""/>
         <div className="invalid-feedback">
           Valid last name is required.
         </div>
       </div>
     </div>

     <div className="mb-5">
       <label for="username">Usuario</label>
       <div className="input-group">
         <div className="input-group-prepend">
           <span className="input-group-text">@</span>
         </div>
         <input type="text" className="form-control" id="usuario" placeholder="Osorio123... etc" required=""/>
         <div className="invalid-feedback" >
           Your username is required.
         </div>
       </div>
     </div>

     <div className="mb-5">
       <label for="email"> Queja <span class="text-muted">(Obligatorio)</span></label>
       <input type="email" className="form-control" id="email" placeholder="se presento una situación de agresión en..."/>
      
       <div className="invalid-feedback">
       Your Queja is required.
       </div>
     </div>

     <div className="row">
       <div className="col-md-5 mb-2">
         <label for="country">Grado</label>
         <select className="custom-select d-block w-100" id="country" required="">
           <option value="">Seleccionar...</option>
           <option>6</option>
           <option>7</option>
           <option>8</option>
           <option>9</option>
           <option>10</option>
           <option>11</option>
         </select>
         <div className="invalid-feedback">
           
         </div>
       </div>
       <div className="col-md-5 mb-2">
         <label for="state">Grupo</label>
         <select className="custom-select d-block w-100" id="state" required="">
           <option value="">Seleccionar...</option>
           <option>1</option>
           <option>2</option>
           <option>3</option>
         </select>
         <div className="invalid-feedback">
         
       <div className="col-md-5 mb-3">
         <label for="Manual">Tipos Faltas</label>
         <select className="custom-select d-block w-100" id="Manual" required="">
           <option value="">Seleccionar...</option>
           <option>Tipo-1</option>
           <option>Tipo-2</option>
           <option>Tipo-3</option>
         </select>
         <div className="invalid-feedback">
         </div>
       </div>
     </div>
     <div className="col-md-4 mb-3">
         <label for="Calendario">Fecha</label>
         <select className="custom-select d-block w-100" id="Calendario" required="">
           <option value="">Seleccionar...</option>
           <option>...1</option>
           <option>...1</option>
           <option>...1</option>
         </select>
         <div className="invalid-feedback">
         </div>
       </div>
         </div>
       </div>

     
     <div className="row">
       <div className="col-md-5 mb-3">
         <label for="cc-number">Ubicación</label>
         <input type="text" className="form-control" id="cc-number" placeholder="Cafeteria,Etc..." required=""/>
         <div className="invalid-feedback">
         </div>
       </div>
     </div>
          <Link to='/Menu'><button className="botones" type="button">Finalizar.</button></Link>

   </form>
 </div>
</div>
</div>
</div>
</center>
</body>

        )
    }
  }
export default Queja_cuerpo;

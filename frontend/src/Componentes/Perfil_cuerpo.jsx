import React, { Component } from 'react';
import '../Style/Estilos.css';
import valknut from '../imagenes/valknut.png';

class Perfil_cuerpo extends Component {
  render() {
    return (
<center>
      <div className="container">
        <div className="py-7 text-center">
          <img src={valknut} alt="" width="102" />
          <h2>PERFIL</h2>
          <p className="lead">Tus datos anteriormente diligenciados se encuentran aqui</p>

            <div className="row">
            <div className="col-md-7 order-md-7 mb-4 text-center ">
              <h4 className="d-flex justify-content-between align-items-center mb-7">
              </h4>
              
            </div>

            <div className="col-md-9 order-md-1">
              <h4 className="mb-1 text-center">Usuario</h4>
              <form className="needs-validation" novalidate="">
 
                <div className="row">
                  <div className="col-md-6 mb-1">
                    <label for="firstName">Tus nombres</label>
                    <input type="text-center" class="form-control" id="firstName" placeholder="" value="" required="" />
                    <div className="invalid-feedback">
                     </div>
                  </div>

                  <div className="col-md-6 mb-1">
                    <label for="lastName">Tus apellidos</label>
                    <input type="text-center" class="form-control" id="lastName" placeholder="" value="" required="" />
                    <div className="invalid-feedback">
                      Valid last name is required.
                   </div>
                  </div>


                </div>
                 
                

                <div className="mb-1">
                  <label for="username">Tu Correo</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Correo" required="" />
                    <div className="invalid-feedback" >
                    </div>
                  </div>
                </div>
          
                <div className="row">

                <div className="col-md-6 mb-1">
                  <label for="username">Contraseña</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Confirmar contraseña" required="" />
                    <div className="invalid-feedback" >
                    </div>
                  </div>
                </div>
                </div>


                

              </form>
            </div>
          </div>
        </div>
      </div>
</center>

    )
  }
}
export default Perfil_cuerpo
import React, { Component } from 'react';
import '../Style/Estilos.css';


class Perfil_cuerpo extends Component {
  render() {
    return (
<center>
      <div className="container">
        <div className="py-7 text-center">
          <img className="d-block mx-auto mb-7"
            src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h2>Usuario</h2>
          <p className="lead">############################################</p>
          <div className="row">
            <div className="col-md-7 order-md-7 mb-4 text-center ">
              <h4 className="d-flex justify-content-between align-items-center mb-7">
              </h4>
            </div>

            <div className="col-md-9 order-md-9">
              <h4 className="mb-1 text-center">Usuario</h4>
              <form className="needs-validation" novalidate="">
                <div className="row">


                  <div className="col-md-6 mb-4">
                    <label for="firstName">Nombres</label>
                    <input type="text-center" class="form-control" id="firstName" placeholder="" value="" required="" />
                    <div className="invalid-feedback">
                      Valid first name is required.
         </div>
                  </div>

                  <div className="col-md-6 mb-1">
                    <label for="lastName">Apellidos</label>
                    <input type="text-center" class="form-control" id="lastName" placeholder="" value="" required="" />
                    <div className="invalid-feedback">
                      Valid last name is required.
         </div>
                  </div>


                </div>

                <div className="mb-1">
                  <label for="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                    <div className="invalid-feedback" >
                      Your username is required.
         </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="email">Email <span class="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
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
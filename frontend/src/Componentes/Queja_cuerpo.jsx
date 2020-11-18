import React, { Component } from 'react'
import '../Style/Estilos.css';


class Queja_cuerpo extends Component{
    render(){
        return(
          <div className="container">

          <div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
            <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Formulario de pago</font></font></h2>
            <p className="lead"></p>
          </div>
        
         <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tu carrito</font></font></span>
                <span className="badge badge-secondary badge-pill"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3</font></font></span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nombre del producto</font></font></h6>
                    <small className="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Breve descripción</font></font></small>
                  </div>
                  <span className="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 12</font></font></span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Segundo producto</font></font></h6>
                    <small className="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Breve descripción</font></font></small>
                  </div>
                  <span className="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 8</font></font></span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tercer artículo</font></font></h6>
                    <small className="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Breve descripción</font></font></small>
                  </div>
                  <span className="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 5</font></font></span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Código promocional</font></font></h6>
                    <small><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EJEMPLO CÓDIGO</font></font></small>
                  </div>
                  <span className="text-success"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- $ 5</font></font></span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Total (USD)</font></font></span>
                  <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 20</font></font></strong>
                </li>
              </ul>
        
              <form className="card p-2">
                <div className="input-group">
                  <input type="text" class="form-control" placeholder="Código promocional"/>
                  <div className="input-group-append">
                    <button type="submit" class="btn btn-secondary"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redimir</font></font></button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dirección de Envio</font></font></h4>
              <form className="needs-validation" novalidate="">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nombre de pila</font></font></label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Apellido</font></font></label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
        
                <div className="mb-3">
                  <label for="username"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nombre de usuario</font></font></label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@</font></font></span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Nombre de usuario" required=""/>
                    <div className="invalid-feedback" style="width: 100%;">
                      Your username is required.
                    </div>
                  </div>
                </div>
        
                <div className="mb-3">
                  <label for="email"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Correo electrónico </font></font><span class="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">(opcional)</font></font></span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
        
                <div className="mb-3">
                  <label for="address"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Habla a</font></font></label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""/>
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
        
                <div className="mb-3">
                  <label for="address2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dirección 2 </font></font><span class="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">(opcional)</font></font></span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Apartamento o suite"/>
                </div>
        
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label for="country"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">País</font></font></label>
                    <select className="custom-select d-block w-100" id="country" required="">
                      <option value=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Escoger...</font></font></option>
                      <option><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Estados Unidos</font></font></option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="state"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Estado</font></font></label>
                    <select className="custom-select d-block w-100" id="state" required="">
                      <option value=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Escoger...</font></font></option>
                      <option></option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="zip"></label>
                    <input type="text" class="form-control" id="zip" placeholder="" required=""/>
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr className="mb-4"/>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="same-address"/>
                  <label className="custom-control-label" for="same-address"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">La dirección de envío es la misma que mi dirección de facturación</font></font></label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="save-info"/>
                  <label className="custom-control-label" for="save-info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Guarde esta información para la próxima vez</font></font></label>
                </div>
                <hr className="mb-4"/>
        
                <h4 className="mb-3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pago</font></font></h4>
        
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required=""/>
                    <label className="custom-control-label" for="credit">tarjeta de credito</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                    <label className="custom-control-label" for="debit">tarjeta de devito</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                    <label className="custom-control-label" for="paypal">paypal</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="cc-name"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nombre en la tarjeta</font></font></label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                    <small className="text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nombre completo como se muestra en la tarjeta</font></font></small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="cc-number"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Número de tarjeta de crédito</font></font></label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label for="cc-expiration"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vencimiento</font></font></label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="cc-cvv"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CVV</font></font></label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr class="mb-4"/>
                <button class="btn btn-primary btn-lg btn-block" type="submit"></button>
              </form>
            </div>
          </div>
        </div>        
        )
    }
}
export default Queja_cuerpo
import React, { Component } from 'react';
import '../Style/Estilos.css'
import valknut from '../imagenes/valknut.png'
import {Link} from 'react-router-dom'
class Bienvenida extends Component {
    render() {
        return (
            <div>
                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="titulo_parrafo">ODIN</h2>
                        <p className="parrafo">Es un servicio para empleados y empleadores que desean generar una forma de resolución de conflictos evitando la confrontación directa entre los implicados, que producirá no solo un ambiente tranquilo, también uno seguro, es una plataforma web que permitirá informar y recibir quejas problemáticas que suceda en el ambiente, de forma anónima y segura, siendo puntual en la resolución del problema presentado, nuestro producto le permitirá al informante notificar con agilidad y certeza la situación a los directivos, quienes realizaran el conducto regular.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={valknut} alt=""/>
                    </div>
                </div>

            </div>
        )
    }
}
export default Bienvenida;

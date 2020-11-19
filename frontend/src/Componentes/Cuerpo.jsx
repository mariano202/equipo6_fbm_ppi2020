import React, { Component } from 'react';
import valknut from '../imagenes/valknut.png'
import equipo6 from '../imagenes/equipo6.jpg'


class Cuerpo extends Component {
    render() {
        return (
            <main role="main">

                

                <div className="container marketing">

                   
    <div className="row">
                        <div className="col-lg-4">
                            <img src="https://www.master2000.net/recursos/uploads/110/2204escudoppal.png" alt="" width="250" height="170"/>
                            <h2 className="titulo_parrafo">Nuestra Institucion:</h2>
                            <p className="parrafo">La Institución Educativa Félix de Bedout Moreno forma niñas, niños y jóvenes en el ser y el conocer, implementando un aprendizaje-significativo-problémico, enmarcado en avances tecnológicos, que posibilitan la reflexión, la investigación, la participación en la educación superior y la convivencia pacífica, contribuyendo a un eficiente desempeño, personal, social y laboral</p>
                            <p><a className="btn btn-success" href="https://www.iefelixdebedoutmoreno.edu.co/index.php" role="button" target='_blank'>Ver Mas»</a></p>
                        </div>
      <div className="col-lg-4">
                            <img src="https://www.politecnicojic.edu.co/images/logo/logo-negro.png" alt="" width="350" height="170"/>
                            <h2 className="titulo_parrafo">Nuestra Educación Superior:</h2>
                            <p className="parrafo">La Institución Educativa Félix de Bedout Moreno, interesada en el harás de mejorar la calidad de la Educación que presta y con el fin de ofrecerle a los estudiantes nuevas oportunidades laborales e introducirlos en la educación superior, ha estado ofreciendo la Media Técnica en Diseño y Desarrollo de Software, desde el año 2005, en convenio con el Politécnico Colombiano Jaime Isaza Cadavid.</p>
                            <p><a className="btn btn-success" href="https://www.politecnicojic.edu.co/" role="button" target='_blank'>Ver Mas»</a></p>
                        </div>
      <div className="col-lg-4">
                            <img src="https://pngimg.com/uploads/github/github_PNG15.png" alt="" width="250" height="170"/>
                            <h2 className="titulo_parrafo">Nuestro Repositorio:</h2>
                            <p className="parrafo">GitHub es un sistema de gestión de proyectos y control de versiones de código, así como una plataforma de red social diseñada para desarrolladores,permite trabajar en colaboración con otras personas de todo el mundo, planificar proyectos y realizar un seguimiento del trabajo.</p>
                            <p><a className="btn btn-success" href="https://github.com/mariano202/equipo6_fbm_ppi2020.git" role="button" target='_blank'>Ver Mas»</a></p>
                        </div>
    </div>


    

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

                        <hr className="featurette-divider"/>

                            <div className="row featurette">
                                <div className="col-md-7 order-md-2">
                                    <h2 className="titulo_parrafo">QUIENES SOMOS:</h2>
                                    <p className="parrafo">Nosotros somos el equipo #6 de los proyectos ppi de el año 2020</p>
                                </div>

                                <div className="col-md-5 order-md-3">
                                <img src={equipo6} alt=""/>    
                                </div>
                            </div>

                            
  </div>


  
</main>
        )
    }
}
export default Cuerpo
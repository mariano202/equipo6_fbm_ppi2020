import React from 'react';
import Footer from '../Componentes/Footer';
import Navegacion from '../Componentes/Navegacion';
import Cuerpo from '../Componentes/Cuerpo';
import Queja_cuerpo from '../Componentes/Queja_cuerpo';



export default function Menu() {
    return (
        <>
            
                    <Navegacion />
                
                <Queja_cuerpo/>
                
                    <Cuerpo />
                
               
                    <Footer />
                
            
        </>
    )
}


import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registro from '../pages/Registro';
import Menu from '../pages/Menu';
import Digitar_queja from '../pages/Digitar_queja';
import Registra from '../pages/Registra';
import Inicio from '../pages/Inicio';
import Menu_admin from '../pages/Menu_admin';
import Registro_admin from '../pages/Registro_admin';
import Perfil1 from '../pages/Perfil1';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/menu"component={Menu}/>
        <Route path="/registro_admin"component={Registro_admin}/>
        <Route path="/menu_admin"component={Menu_admin}/>
        <Route path="/registro"component={Registro}/>
        <Route path="/Inicio"component={Inicio}/>
        <Route path="/perfil" component={Perfil1}/>
        <Route path="/digitar_queja"component={Digitar_queja}/>
        <Route path="/inicio" component={Inicio}/>
        <Route path="/registra" component={Registra}/>


      </Switch>





    </BrowserRouter>
  );
}
export default App

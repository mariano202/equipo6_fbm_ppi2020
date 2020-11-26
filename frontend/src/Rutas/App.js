import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Registro from '../pages/Registro'
import Menu from '../pages/Menu'
import Digitar_queja from '../pages/Digitar_queja'
import Inicio from '../pages/Inicio';
import Registra from '../pages/Registra';
=======
import Registro from '../pages/Registro';
import Menu from '../pages/Menu';
import Digitar_queja from '../pages/Digitar_queja';
import Perfil from '../pages/Perfil';
import Inicio from '../pages/Inicio';
import Menu_admin from '../pages/Menu_admin';
import Registro_admin from '../pages/Registro_admin';

>>>>>>> bb7b611bd9f2e60166fdb27b195e64d8f8ea0e3d
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/menu"component={Menu}/>
        <Route path="/registro_admin"component={Registro_admin}/>
        <Route path="/menu_admin"component={Menu_admin}/>
        <Route path="/registro"component={Registro}/>
        <Route path="/digitar_queja"component={Digitar_queja}/>
        <Route path="/inicio" component={Inicio}/>
        <Route path="/registra" component={Registra}/>
      </Switch>





    </BrowserRouter>
  );
}
export default App

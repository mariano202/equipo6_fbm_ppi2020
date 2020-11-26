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
        <Route exact path="/" component={Digitar_queja} />
        <Route path="/menu"component={Menu}/>
        <Route path="/registro_admin"component={Registro_admin}/>
        <Route path="/menu_admin"component={Menu_admin}/>
        <Route path="/registro"component={Registro}/>
<<<<<<< HEAD
        <Route path="/Inicio"component={Inicio}/>
        <Route path="/perfil" component={Perfil}/>
=======
        <Route path="/digitar_queja"component={Digitar_queja}/>
        <Route path="/inicio" component={Inicio}/>
        <Route path="/registra" component={Registra}/>
>>>>>>> caca684b097da6b4f26bd06f75c5edf817df77c1
      </Switch>





    </BrowserRouter>
  );
}
export default App

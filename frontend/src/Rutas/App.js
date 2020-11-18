import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Registro from '../pages/Registro'
import Menu from '../pages/Menu'
import Digitar_queja from '../pages/Digitar_queja'
=======
import Registro from '../pages/Registro';
import Menu from '../pages/Menu';
import Digitar_queja from '../pages/Digitar_queja';
>>>>>>> 813aab180d409311a5aabeb6d1f43abae960f350
import Perfil from '../pages/Perfil';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Digitar_queja} />
        <Route path="/menu"component={Menu}/>
        <Route path="/registro"component={Registro}/>
        <Route path="/perfil"component={Perfil}/>
        
        
=======
        <Route exact path="/" component={Perfil} />
        <Route path="/menu"component={Menu}/>
        <Route path="/registro"component={Registro}/>
        <Route path="/Digitar_queja"component={Digitar_queja}/>
>>>>>>> 813aab180d409311a5aabeb6d1f43abae960f350
      </Switch>





    </BrowserRouter>
  );
}
export default App

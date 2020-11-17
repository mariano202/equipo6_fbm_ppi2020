import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Registro from '../pages/Registro'
import Menu from '../pages/Menu'
import Digitar_queja from '../pages/Digitar_queja'
import Perfil from '../pages/Perfil';
=======
import Registro from '../pages/Registro';
import Menu from '../pages/Menu';
import Digitar_queja from '../pages/Digitar_queja';
>>>>>>> 4b824e679104052fab6caa6decd6611e51d6847e

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Perfil} />
        <Route path="/menu"component={Menu}/>
        
        
=======
        <Route exact path="/Queja_cuerpo" component={Digitar_queja}/>
        <Route path="/menu"component={Menu}/>
        //<Route path="/registro"component={Registro}/>//
>>>>>>> 4b824e679104052fab6caa6decd6611e51d6847e
      </Switch>





    </BrowserRouter>
  );
}
export default App

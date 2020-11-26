import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registro from '../pages/Registro'
import Menu from '../pages/Menu'
import Digitar_queja from '../pages/Digitar_queja'
import Inicio from '../pages/Inicio';
import Registra from '../pages/Registra';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/menu"component={Menu}/>
        <Route path="/registro"component={Registro}/>
        <Route path="/digitar_queja"component={Digitar_queja}/>
        <Route path="/inicio" component={Inicio}/>
        <Route path="/registra" component={Registra}/>
      </Switch>





    </BrowserRouter>
  );
}
export default App

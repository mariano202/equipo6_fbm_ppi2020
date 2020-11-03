import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registro from '../pages/Registro'
import Menu from '../pages/Menu'
import Digitar_queja from '../pages/Digitar_queja'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Registro} />
        <Route path="/menu"component={Menu}/>
      </Switch>





    </BrowserRouter>
  );
}
export default App

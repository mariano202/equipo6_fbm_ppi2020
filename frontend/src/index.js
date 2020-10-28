import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import App from './pages/App'
import Registro from './pages/Registro';
import Menu from './Componentes/Menu';

ReactDOM.render(
  <React.StrictMode>
    <Registro/> 
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


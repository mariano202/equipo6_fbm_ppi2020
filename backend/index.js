const express= require('express');
const app = express();

// definir todos los componentes, modulos app
//const routes= require('./routes/routes');// crud
const Usuario = require('./routes/Usuario');// crud
//const colegios = require('./routes/colegios');// crud


//ajustes
app.set('port',3000)



// Middleware
app.use(express.json());


// ajustess
app.use('/api',Usuario);
//app.use('/api/modulos',modulos);
//app.use('/api/colegios',colegios);


app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
}) 

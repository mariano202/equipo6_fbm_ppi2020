const express= require('express')
const app = express();
const routes= require('../backend/routes/usuario')


const usuario= require('./routes/usuario')
//ajusta
app.set('port',3000)

//middleware
app.use(express.json());


//ajustes
app.use('/api',routes);

app.use('/api/modulos',modulos)
app.use('/api/usuaros'.usuario);
//app.listen(app.get('port'),()=>{
  //console.log('servidor corriendo en puerto ${app.get('port')}')
//})
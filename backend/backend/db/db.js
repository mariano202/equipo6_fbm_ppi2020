const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({
    host:'b0kr46uuv8pfa9qy2hot-mysql.services.clever-cloud.com',
    user:'u6zbamoregabtyzw',
    password:'xIhboRMedn7nGUoBFYtI',
    database:'b0kr46uuv8pfa9qy2hot',
    meltipleStaterents:true,
})

mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
return;
    }else{
        console.log('base de datos conectada')

    }
})
module.exports = mysqlConnection;
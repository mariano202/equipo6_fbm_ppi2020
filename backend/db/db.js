const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({
    // db creada https://console.clever-cloud.com/
host:'bxptumgzvvkoplc1mxrf-mysql.services.clever-cloud.com',
user:'upldlwltdktlb8dc',
password:'ZZNlUesrbwGknzGiKaZX',
database:'bxptumgzvvkoplc1mxrf',
multipleStatements:true
/*
host:'181.133.136.83',
user:'mediatecnica',
password:'123',
database:'lab_mediatecnica',
*/
});

mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{

    console.log('base de datos conectada');
}

})
module.exports = mysqlConnection;
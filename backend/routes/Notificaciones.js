const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');

/// contenido y configuraciones
router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM tblnotificacion',(err,rows,fields)=>{
        // si no hay un error
        if(!err){
         // verdadero
         res.json(rows);  // traer las filas con los datos   
        }else{ // sino  
        // entonces hay un error
        console.log(err);
        } // fin si
    });// fin conexion
    });//  router.get fin de mostrar todos datos de la tabla modulos
    
    router.get('/modulo/:id',(req,res)=>{
    const { id } = req.params; // params´id
    mysqlConnection.query('SELECT * FROM modulos WHERE id =?',[id],
    (err,rows,fields)=>{
    
    if(!err){
    res.json(rows[0]); // traiga los otros campos
    }else{
        console.log(err);
    }
    })// fin conexion
    });
    // agregar un modòdulo
    
    router.post('/nuevo-modulo',(req,res)=>{
        const {modulo,mod_prefijo}=req.body;
        
        let alumno =[modulo,mod_prefijo];
        
        let nuevoAModulos =`INSERT INTO modulos(modulo, mod_prefijo)
        VALUES(?,?)`;
        mysqlConnection.query(nuevoAlumno,alumno,(err,results,fields)=>{
        if(err){
           return console.error(err.message);
        }else{
           res.json({message:`Módulo agregado`})
        }
        })});
    
    // Editar mòdulo
    router.put('/modulo/:id',(req,res)=>{
       const {modulo,mod_prefijo}=req.body;
       const {id} =req.params;
       
       
       mysqlConnection.query(`UPDATE modulos SET modulo=?,mod_prefijo=? WHERE id=?`,
       [modulo,mod_prefijo,id],(err,rows,fields)=>{
       if(!err){
          
          res.json({status:`Módulo Actualizado`});
       }else{
          console.log(err);
       }
       })});
    
    
    
     // Borrar probar desde de postman
    router.delete('/borrar/:id',(req,res)=>{
        const { id } = req.params; // params´id
        mysqlConnection.query('DELETE FROM modulos WHERE id =?',[id],
        (err,rows,fields)=>{
            if(!err){
        res.json({message: 'Módulo '+ id + 'Borrado'}); // traiga los otros campos
        }else{
            console.log(err);
        }})// fin conexion
        });
    // exportar


/// contenido

module.exports = router;
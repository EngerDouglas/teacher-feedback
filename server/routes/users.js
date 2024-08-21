var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'teacherfeedback'
})

connection.connect();

router.post('/create', function(req, res, next){
  try{
    console.log('req.body', req.body)
    
    if(req.body.signname && req.body.signemail && req.body.signpass && req.body.opcionesCareer){

      const data = {
        username: req.body?.signname,
        email: req.body?.signemail,
        password: req.body?.signpass,
        carrera: req.bod?.opcionesCareer
      }
      console.log("hola")
  
      connection.query(`INSERT INTO usuario (id_Usuario , Username, Email, Password, id_Carrera, Rol) VALUES ('NULL','${data.username}', '${data.email}', '${data.password}' , '${data.carrera}' , 'user')`, function(error, results, fields){
        if(error){
        throw error;
  
        
        console. log('The solution is: ', results[0])
        console. log('fields: ', fields)
        }
      });
      
      return res.json({
        'error': false,
        'message': 'El usuario ha sido creado correctamente'
      });

    }
   

  }catch(e){
    return res.status(500).json({
      'error': true,
      'message':'Ha ocurrido un error.'
    });
  }
  
});

module.exports = router;

//Boton de Submit en Sign Up




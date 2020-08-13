const express = require ('express');
// const path = require('path') ....Para hacer el routeo




//Inicializaciones
const app = express();
require ('./database');
//settings
app.set('port', process.env.PORT || 3001);

//midelwares

//global variables

//routes


//static File

//server listening
app.listen(app.get('port'),()=>{
    console.log('SERVER LISTEN IN PORT YOU KNOW', app.get('port'));
})
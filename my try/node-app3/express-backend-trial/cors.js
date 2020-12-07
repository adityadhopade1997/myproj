const express= require('express');
const cors= require('cors');

const app=express();
const whitelist=['http://localhost:4200'];

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  
var corsOptionDelegate= (req,callback)=>{
    var corsOptions;
     if(whitelist.indexOf(req.header('Origin'))!== -1){
         corsOptions = {origin:true};
     }
     else{
         corsOptions = {origin:false};
     }
     callback(null,corsOptions);
}

exports.cors=cors();
exports.corsWithOptions= cors(corsOptionDelegate);
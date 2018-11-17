var mongoose = require('mongoose');
var express = require('express');
var http=require('http');
var path=require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var Users = require("./models/User");
var cors= require("cors");
var srcpath  =path.join(__dirname,'../public') ;  
app.use(express.static('public'));  

mongoose.connect('mongodb://localhost:27017/replicatemedium');
mongoose.connection.once('open', function (){
   console.log('MongoDB connection open');
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post('/Login', function(req, res) {
  Users.findOne({
    username: req.body.username, password:req.body.password
  }, function(err, data) {
    if (err) 
    {
      res.send('login failed')
    }
    else{
      console.log(data)
      res.json({
         status: 'success',
         login: data
      })
    }
  })
})
app.get("*",function(req,res){   
    res.sendFile(srcpath +'/index.html');  
}) 

app.listen(3002, function () {
  console.log('app listening on port 3002');
})




var mongoose = require('mongoose');
var express = require('express');
var http=require('http');
var path=require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var Users = require("./models/User");
var Stories= require("./models/Story");
var cors= require("cors");
app.use(cors());

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
app.post('/Story', function(req, res){
  Stories.create({
    title:req.body.title, description:req.body.description, category:req.body.category, content:req.body.content
  }, function(err, data){
    if(err){
      res.send('Story not created')
    }
    else{
      console.log(data)
      res.json({
        status: 'success',
      })

    }
  })
})
app.post('/',(req,res)=>{

Stories.find(function(err, data){

if(err){

res.send('no stories')

}else{


res.json({
status:"success",
story:data
});

}

})

})



app.listen(3002, function () {
  console.log('app listening on port 3002');
})





















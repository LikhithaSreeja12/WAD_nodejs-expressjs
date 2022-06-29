var express = require('express');
var path = require('path')
var router = express.Router();
var mysql=require('../database/db');
// /* GET home page. */
// router.get('/', function(req, res, next) {
//  // res.render('index', { title: 'Express' });
// //res.sendFile(path.resolve("public/index1.html"));
// res.send("<h1>Hello This is developed by Sreeja</h1>")

// });
// // router.get('/login', function(req, res, next) {
// //   // res.render('index', { title: 'Express' });
// //  res.sendFile(path.resolve("public/index1.html"));
// // });

// router.get('/index_express', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//  res.sendFile(path.resolve("public/index_express.html"));
// });

// router.get('/login', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//  res.sendFile(path.resolve("public/login.html"));
// });

// router.get('/sign up', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//  res.sendFile(path.resolve("public/sign up.html"));
// });

// router.get('/contact us', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//  res.sendFile(path.resolve("public/contact us.html"));
// });

// router.post('/login submit', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//  res.sendFile(req.body) 
// });

// // router.post('/contact us', function(req, res, next) {
// //   // res.render('index', { title: 'Express' });
// //  //res.sendFile(path.resolve("public/contact us.html"));
// //  var output="user name:"+req.body.loginid+"<br>password:"+req.body.pwd
// //  res.send(output)
// });
// router.get('/sree', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//  res.sendFile(path.resolve("public/registration_form.html"));
// });
// router.post('/registration_form', function(req, res, next) {
  // res.render('index', { title: 'Express' });
 //res.sendFile(path.resolve("public/contact us.html"));
//  var output="<table><tr><td>Name of the student :</td><td>"+req.body.Name of the student+"</td></tr><tr><td>last name :"</td><td>"+req.body.last name+"</td></tr>Gender :</td><td>"+req.body.Gender+"</td></tr><tr><td></td>"
//  res.send(req.body)
// });
// module.exports = router;

// router.get("/likhitha",function(req,res,next){
//   //res.sendFile(path.resolve("./public/form.html"));
//   res.render('index',{title:"Embedded Java Script Code Template"});
// });

// router.get("/fbposts",function(req,res,next){
//   //res.sendFile(path.resolve("./public/form.html"));
//   var posts=[
//     {title : "hbd",message: "happy birthday to you"},
//     {title : "casual",message: "Hello ,how are you"},
//     {title : "Aannouncement",message: "Bahubali 2 movie is relaesing  soon"},
//     {title : "greetings",message: "Greetings of the day"},
//     {title : "Events",message: "Marriage"},
//   ];
//   res.render('index',{title:"Facebook",posts:posts})
// });


// router.get("/selectqry",function(req,res,next){
//   mysql.getConnection((err, connection) => {
//   if(err) throw err;
//     connection.query('SELECT * from student1 limit 4', (err, rows) => {
//     connection.release(); 
//     if(err) throw err;
//      res.render('datadisplay', {rows:rows,title:"student details"});
//       //res.send(rows); 
//   });
// });
// });
 

 router.get("/askregno",function(req,res,next){
  res.sendFile(path.resolve("./public/form.html"));
 });
 router.post("/selectqry",function(req,res,next){
  var regno = req.body.regno;
  mysql.getConnection((err, connection) => {
  if(err) throw err;
  connection.query('SELECT * from student1 where regno ='+regno, (err, rows) => {
  connection.release(); 
  if(err) throw err;
  res.render('datadisplay', {rows:rows,title:"student details"});
      //res.send(rows); 
  });
});
});

 module.exports = router;
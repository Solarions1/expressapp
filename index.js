'use strict'
// import libaries

const express = require('express');
const server = express();
const port = 4000;

// set the view engine to ejs

server.set('view engine', 'ejs');

// use res.render to load up and ejs view file

//index page
server.get('/', function(req, res){
	var services = [

	{name:'dDos Attack safety', organization: "QSafe Security"},
	{name:'Websites support 24/7', organization: "QSafe Security"},
	{name:'Hosting web', organization: "QSafe Security", serv: "Node, html, python, ejs, c#"}
	];

	var tagline = "Welcome to QSafe Security";
	res.render('pages/index',{
		services: services, 
		tagline: tagline
		
	});
});

// About page
server.get('/about', function(req, res){
	res.render('pages/about');
});

server.listen(port, ()=>{
	console.log('Server runningin ' + port);
});

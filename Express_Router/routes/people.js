const express = require('express');

const route = express.Router();

//Middleware
route.use((req,res,next)=>{
	console.log("Middleware Being Used");
	next();
});

route.get('/', (req,res)=>{
	res.send('/ being hit');
});

route.get('/example', (req,res)=>{
	res.send('/example being hit');
})


module.exports = route;
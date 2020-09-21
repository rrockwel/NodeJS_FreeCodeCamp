const express = require('express');

let app = express();

app.get('/', (req,res)=>{
	res.send("hello there");
});

app.get('/example', (req,res)=>{
	res.send('example route');

});

app.get('/example/:name/:age', (req,res)=>{
	console.log(req.params);
	console.log(req.query);
	// Transform req.params.name to All UPPERCASE
	req.params.name=(req.params.name).toUpperCase();
	res.send(`${req.params.name}: ${req.params.age}`);

});


app.listen(3000);

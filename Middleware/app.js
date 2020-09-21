const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//Initiate Middleware
app.use((req,res,next)=>{
	req.banana = 'banana';
	next();
});

app.get('/', (req,res)=>{
	console.log(req.banana);
	res.send('hello');
});

app.listen(3000);
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');


//Initialize Express App
const app = express();

// Setup static file for use by Express App
app.use('/public', express.static(path.join(__dirname, 'static')));

// Allow Parsing of URL Encoded Forms
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.get('/', (req,res)=>{
	res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/', (req,res)=>{
	console.log(req.body);

	// Define Validation Schema
	const schema = Joi.object().keys({
		// Require Email
		email : Joi.string().trim().email().required(),
		// Require Password
		password : Joi.string().min(5).max(10).required()
	});
	Joi.validate(req.body, schema, (err, result)=>{
		if(err){
			console.log(err);
			res.send('An Error Has Occurred');
		}else{
		console.log(result);
		res.send("Successfully Posted Data");
		}

	});
});

app.listen(3000);

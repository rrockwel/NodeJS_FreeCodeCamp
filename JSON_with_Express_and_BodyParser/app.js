const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

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
	// Database work here
	// Send Response To USer
	res.json({success:true});
	
})

app.listen(3000);

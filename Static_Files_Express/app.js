const express = require('express');
const path = require('path');

const app = express();

// Inform express of your static folder
app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req,res)=>{
	res.sendFile(path.join(__dirname,"static","index.html"));
});

app.listen(3000);


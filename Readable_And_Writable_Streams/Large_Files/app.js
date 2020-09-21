const fs = require('fs');

// Without Read Stream
// fs.readFile('./LargeExample.txt','utf8', (err,file)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(file);
// 	}
// });

// With Read Stream
const readStream = fs.createReadStream('./LargeExample.txt','utf8');

readStream.on('data', (chunk)=>{
	console.log(chunk);
});
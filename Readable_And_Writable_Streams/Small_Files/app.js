const fs = require('fs');

// Create Read Stream
const readStream = fs.createReadStream('./readFrom.txt', 'utf8');
// Create Write Stream
const writeStream = fs.createWriteStream('example2.txt');

readStream.on('data', (chunk)=>{
	writeStream.write(chunk);
});


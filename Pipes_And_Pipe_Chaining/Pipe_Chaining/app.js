const fs = require('fs');
const zlib = require('zlib');

// Read File, Compress, Write File

//Create TRANSFORM Stream to Compress Readstream
// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeStream = fs.createWriteStream('example2.txt.gz');
// readStream.pipe(gzip).pipe(writeStream);


// Read File, Uncompress, Write File

const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('example2.txt');

readStream.pipe(gunzip).pipe(writeStream);

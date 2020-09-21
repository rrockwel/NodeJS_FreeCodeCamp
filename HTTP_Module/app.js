const http = require('http');

let server = http.createServer((req, res)=>{
	if(req.url === '/'){
		res.write('Home');
		res.end();
		console.log('Home');
	}else if(req.url !== '/'){
		res.write(`Welcome to our ${req.url} page`);
		res.end();
		console.log(`${req.url}`);
	}
});

server.listen('3000');
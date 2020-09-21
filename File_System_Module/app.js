const fs = require('fs');

//Create A File
// fs.writeFile('example.txt', "this is an example file", (err)=>{
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log('File Created');
// 	}
// });

// //Read A File
// fs.readFile('example.txt','utf8',(err,file)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(file);
// 	}
// });


// // Rename A file
// fs.rename('example.txt','example2.txt', (err)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Successfully Renamed File");
// 	}
// });

// //Append Data To File
// fs.appendFile('example2.txt', '\nSome more text here', (err)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Successfully added to file");
// 	}
// })

// Delete File
fs.unlink('example2.txt',(err)=>{
	if(err){
		console.log(err);
	}else{
		console.log("Successfuly Deleted");
	}
});
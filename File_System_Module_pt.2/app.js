const fs = require('fs');

// Create A Directory
// fs.mkdir('tutorial', (err)=>{
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log("Directory Created");

// 	}
// });

// Delete A Directory
// fs.rmdir('tutorial', (err)=>{
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log("Successfully removed directory");
// 	}
// });


// Create New File within New Directory
// fs.mkdir('Directory', (err)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		fs.writeFile("./Directory/example.txt", "New File Inside Directory", (err)=>{
// 			if(err){
// 				console.log(err);
// 			}else{
// 				console.log('New File Created Inside New Directory');
// 			}
// 		});
// 	}
// });

// //Remove Directory With One File
// fs.unlink('./Directory/example.txt', (err)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Successfully Deleted File");
// 	}
// });
// fs.rmdir('Directory', (err)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Successfully Deleted Directory");
// 	}
// });


// Remove Contents of Directory
fs.readdir('Directory', (err, files)=>{
	if(err){
		console.log(err);
	}else{
		for(let file of files){
			fs.unlink('./Directory/'+ file,(err)=>{
				if(err){
					console.log(err);
				}else{
					console.log("Successfully Deleted File");
				}
			});
		}
	}
});
/*$(document).ready(()=>{
	console.log("Testing Client Side");
	$('#form').submit((e)=>{
		e.preventDefault();
		$.ajax({
			url: '/',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify($('#form').serializeArray()),
			success: (response)=>{
				console.log('Successfully Got Response');
				console.log(response);
			}
		});
	});
});

*/
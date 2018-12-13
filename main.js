$(document).ready(function(){
	$("#add").on('click', function(){
		
		var a = Number($("#num_one").val());  
		
		var b = Number($("#num_two").val());
		
		var c = a + b
		
		$("#answer").val(c)
	})

	$("#subtract").on('click', function(){
		
		var a = Number($("#num_one").val());  
		
		var b = Number($("#num_two").val());
		
		var c = a - b
		
		$("#answer").val(c)
	})

	

	$("#multiply").on('click', function(){
		
		var a = Number($("#num_one").val());  
		
		var b = Number($("#num_two").val());
		
		var c = a * b
		
		$("#answer").val(c)
	})

	$("#divide").on('click', function(){
		
		var a = Number($("#num_one").val());  
		
		var b = Number($("#num_two").val());
		
		var c = a / b
		
		$("#answer").val(c)
	})


})
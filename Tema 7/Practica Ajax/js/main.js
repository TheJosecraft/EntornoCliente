$(document).ready(function() {
	$.ajax({
		url: 'http://www.rtve.es/api/noticias.json',
		data: '0',
		type: 'GET',
		dataType: 'json'
	}).done(function(json){
		console.log(json);
        $('#info').html(json["page"]).appendTo('body');
	}).fail(function(){
		alert("ERROR");
	});
});
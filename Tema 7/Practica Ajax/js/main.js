$(document).ready(function() {
	$.ajax({
		url: 'http://www.rtve.es/api/noticias.json',
		data: {page : 2},
		type: 'GET',
		dataType: 'json'
	}).done(function(json){
		console.log(json["page"]);
        $('#info').html(json["page"]).appendTo('body');
	}).fail(function(){
		alert("ERROR");
	});
});
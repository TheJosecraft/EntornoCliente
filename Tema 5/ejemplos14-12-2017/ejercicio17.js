window.addEventListener("load",Inicio);

function Inicio()
{
	
	document.addEventListener("scroll",Pegar);
}


function Pegar()
{
	var div=document.querySelector("#info");
	if(document.documentElement.scrollTop>200)
	{
       div.style.position="fixed";
       div.style.top="0px";
	}else{
       div.style.position="absolute";
       div.style.top="200px";
	}
}

function orden(a,b)
{
	return b-a;
}

var numeros=[19,82,13,76,9];

numeros.sort((a,b)=>{return a-b;});

alert(numeros);
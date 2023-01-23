document.addEventListener('DOMContentLoaded', function(event) { 

/*Identifica o nome do usuario*/
var div = document.getElementById("tblMessage");
var nome = div.getElementsByTagName("strong")[0];
var usuario = nome.innerText;

/*Lista de nomes com usuarios permitidos*/
var usuariosPermitidos = ['George Martins', 'Andre Soares', 'Gabriel Lima'];

/*Verifica se o usuario está na lista*/  
if (usuariosPermitidos.indexOf(usuario) > -1) {
	console.log("Usuario com permissão");
	} else {
		/*Se o usuario NÃO estiver na lista, ocultar o campo DOCUMENTO*/
		console.log("Usuario sem permissão");
		document.getElementById( 'td0documento' ).style.display = 'none';
		document.getElementById( 'td1documento' ).style.display = 'none';
}
  
console.log(usuariosPermitidos);
console.log(usuario);  

});
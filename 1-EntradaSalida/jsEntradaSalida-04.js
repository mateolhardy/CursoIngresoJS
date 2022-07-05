/* 

Lodewyckx Hardy Mateo Iván

Ejercicio E/S 04

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	var mensajeRetorno;

	nombre=prompt("Ingrese su nombre", "Mateo");

	mensajeRetorno="su nombre es:" + nombre;

	document.getElementById("txtIdNombre").value = mensajeRetorno;


}


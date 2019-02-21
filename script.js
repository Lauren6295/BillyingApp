(function () {
	function facturar ()
	{
	//Obtenemos el valor de los datos digitados.
		let nombre = document.getElementById("nombre").value;
		let cantidad = document.getElementById("cantidad").value;
		let fecha = document.getElementById("fecha").value;
		let tipo = document.getElementById('tipo').value;
		let totalA=0;
		let totalB=0;
		let totalC=0;

	//Reviza si la informacion esta completa
		if(nombre === '' || cantidad==='' || fecha ==='' || tipo===''){
	//Muestra un mensaje si falta algun dato
		alert("Digite todos los datos");
		return false;
			}else{
	//almacenamos la informacion para mostrarla 
		let factura = [nombre, cantidad, fecha, tipo ];
		document.getElementById("datos-factura").innerHTML += "<li>" + (factura) + "</li>";
	//Comparamos el tipo de factura para ir sumando el total.
		if (tipo ==="A"){

		totalA = totalA + cantidad;
		}
			else if(tipo ==="B"){
			totalB = totalB + cantidad;
			
		}
			else{
			totalC = totalC + cantidad;	
		}
	//Limpia los datos para poder ingresar nueva informacion
		reset();
		document.getElementById("total").innerHTML += "<li>" + "total A=" + (totalA)+ "</li>"
		+ "<li>" + "total B=" + (totalB) + "</li>"
		+ "<li>" + "total C=" + (totalC) + "</li>"	 ;
	}

	}
	function reset() {
		nombre.value = '';
		cantidad.value = '';
		fecha.value = '';
		tipo.value = '';
		}
		document.getElementById("boton").addEventListener("click", facturar);
		document.getElementById("borrar").addEventListener("click", reset);
		
})();
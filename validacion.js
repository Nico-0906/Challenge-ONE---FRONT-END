function validarDatos(){
	window.event.preventDefault();

	if(document.getElementById("name").value == ""){
		alert("Campo nombre obligatorio");
		document.getElementById("name").focus();
	}else if(document.getElementById("mail").value.indexOf("@") == -1 || document.getElementById("mail").value.indexOf(".") == -1){
		alert("Debe ingresar un mail correcto");
		document.getElementById("mail").focus();
	}else if(document.getElementById("asunto").value == ""){
		alert("Campo asunto obligatorio");
		document.getElementById("asunto").focus();
	}else if(document.getElementById("msg").value == "" || document.getElementById("msg").value.length <= 50){
		alert("Campo mensaje es obligatorio y debe tener mas de 50 caracteres.");
		document.getElementById("msg").focus();
	}

}

document.querySelector("form").addEventListener("submit", validarDatos);


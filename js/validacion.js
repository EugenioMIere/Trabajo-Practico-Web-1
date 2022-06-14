$(document).ready(function(){
	$("#formcontact").submit(function(e){
		e.preventDefault();
		validar();
	});
});

function validar(){
	var error=false;
	var mensajesError="";
	var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	var regextelefono = /^\d{4}-\d{4}$/;
	var caracteresMinimos=10;
	
	reset();
	if($("#nombre").val()==""){
		error=true;
		mensajesError+="<p>El campo nombre es obligatorio</p>";
		$("#nombre").addClass('input_error');
	}
	if($("#email").val()==""){
		error=true;
		mensajesError+="<p>El campo email es obligatorio</p>";
		$("#email").addClass('input_error');
	}else if(!$("#email").val().match(regexemail)){
		error=true;
		mensajesError+="<p>El formato de email no es valido (example@ex.com)</p>";
		$("#email").addClass('input_error');
	}
	if($("#telefono").val()==""){
		error=true;
		mensajesError+="<p>El campo telefono es obligatorio</p>";
		$("#telefono").addClass('input_error');
	}else if(!$("#telefono").val().match(regextelefono)){
		error=true;
		mensajesError+="<p>El formato del telefono no es valido (4444-4444)</p>";
		$("#telefono").addClass('input_error');
	}
	if($("#consulta").val().length<caracteresMinimos){
		error=true;
		mensajesError+="<p>Ingrese un minimo de 10 caracteres para su consulta</p>";
		$("#consulta").addClass('input_error');
	}


	if(error){
		$("#mensaje").append(mensajesError);
	}
}

function reset(){
    $("#nombre").removeClass('input_error');
    $("#email").removeClass('input_error');
	$("#telefono").removeClass('input_error');
	$("#consulta").removeClass('input_error');
    $("#mensaje").empty(); 
}

function contarCaracteres(){
	var maximosCaracteres=1000;
	var caracteresActuales= $("#consulta").val().length;
	var advertenciaCaracteres= 950;


	if(caracteresActuales >= maximosCaracteres){
		$("#caracteresRestantes").text=('<p style="color: red;">' + maxLength + ' /1000</p>');
	}
	else if(caracteresActuales >= advertenciaCaracteres){
		$("#caracteresRestantes").text='<p style="color: rgb(255, 165, 0);">' + maxLength + ' /1000</p>';
	}else{
		$("#caracteresRestantes").text=(caracteresActuales);
	}
}
$(document).ready(function(){

    $(".clonar").click(function(){
    	var clonar=$("#ultimo").clone(true); 
        $("#ultimo").after(clonar);
    });
        
    $(".eliminar").click(function(){
        var cant = $(".div_inputs").toArray().length;
        if(cant>3){
    	    $(this).parent().remove();
        }
    });

        $('#btnEnviar').click(function(){
           setTimeout(function(){ 
			toastr.success("Todo enviado");
            Ladda.stopAll();
		},1000);
        });
});
var cont=0;
$(document).ready(function(){
    $(".btn_comprar").click(function(){
        cont++;
        $("#cantidadCarrito").text(cont);
    });
});
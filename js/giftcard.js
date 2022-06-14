$(document).ready(function(){

    $("#nombre").keyup(function(){
        $("#texto").text($(this).val());
    });

    $("#monto").keyup(function(){
        $("#montogif").text($(this).val());
    });

    $("input[name='color']").change(function(){
        //console.log($(this).val());
        $("#texto").removeClass("negro blanco rojo gris");
        $("#texto").addClass($(this).val());
    });

    $("input[name='tamano']").change(function(){
        //console.log($(this).val());
        $("#texto").removeClass("veinteocho treintados cuarentaocho sesenta");
        $("#texto").addClass($(this).val());
    });

    $("input[name='fondo']").change(function(){
        $(".vista-previa").removeClass("fondo1 fondo2 fondo3");
        $(".vista-previa").addClass("fondo"+$(this).val());

    });

    $("input[name='Ubicacion']").change(function(){
        $(".vista-previa").removeClass("UbicacionIzquierda UbicacionCentro UbicacionDerecha");
        $(".vista-previa").addClass("Ubicacion"+$(this).val());

    });

});
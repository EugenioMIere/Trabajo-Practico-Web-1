window.onload=function(){
    var mensajeText = document.getElementById('consulta');
    mensajeText.onkeyup = contarCaracteres;
    function contarCaracteres() {
        var maximosCaracteres=1000;
        var caracteresActuales = document.getElementById("consulta").value.length;
        var advertenciaCaracteres= 950;

        if (caracteresActuales >= maximosCaracteres) {
            document.getElementById("caracteresRestantes").innerHTML = '<p style="color: red;">' + maximosCaracteres + ' /1000</p>';
        }
        else if (caracteresActuales >= advertenciaCaracteres) {
            document.getElementById("caracteresRestantes").innerHTML = '<p style="color: rgb(255, 165, 0);">' + caracteresActuales + ' /1000</p>';
        } else {
            document.getElementById("caracteresRestantes").innerHTML = caracteresActuales + ' /1000';
        }
    }
}

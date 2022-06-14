window.onload=function(){
    var boton= document.getElementsByClassName("div_unidades");
    boton.onclick=acordeon();
    function acordeon(){
        var acc = document.getElementsByClassName("div_unidades");
        var i;
        var j;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var contenido = this.nextElementSibling;
                if (contenido.style.maxHeight) {
                contenido.style.maxHeight = null;
                } else {
                contenido.style.maxHeight = contenido.scrollHeight + "px";
                } 
            });
        }   
    }
}
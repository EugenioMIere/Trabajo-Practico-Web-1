$(document).ready(function(){ 
    $("a.desplegable").click(function(){
        /* alert("realizo clic"); */
      if(!$(".nav_paginas").is(":visible")){
          $(".nav_paginas").slideDown();

      }else{
        $(".nav_paginas").slideUp();

      }
    });
        /* $(window).resize(function(){
        if($(this).width()>768){
            $(".nav_paginas").show();
        } else{
            $(".nav_paginas").hide();
        }
    });  */
});

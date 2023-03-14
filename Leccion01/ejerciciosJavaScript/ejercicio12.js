function funcion1(){
     var a = 3;
     function funcion3(){
        var b = 5;
        //las funciones anidadas tienen acceso a todas las variables de sus padres
        function funcion5(){
            console.log(a,b);
        }
     }
}

function funcion2(){
    var a = 7;
    function funcion4(){

    }
}
funcion1();

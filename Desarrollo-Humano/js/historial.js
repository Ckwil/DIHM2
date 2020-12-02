function DatosHistorial(){
    var srcimage = document.querySelectorAll("#imagen_selec");
    var articulo = document.querySelectorAll("#articulo_selec");
    var cantidad = document.querySelectorAll("#cantidad_selec");
    var fechaSol= Date().slice(11, 15)+"-"+12+"-"+Date().slice(8, 10);
    var fechaDev = document.querySelectorAll("#fecha_devolucion");

    for(var i=0;i<srcimage.length;i++){
        var infoProducto = [{
            imagen: srcimage[i].src,
            artic: articulo[i].textContent,
            cant: cantidad[i].value,
            fechaS: fechaSol,
            fechaD: fechaDev[i].value
        }];
        /* var arrayhist =[];
        arrayhist.push(infoProducto); */
        if(localStorage.getItem('historial') === null){
            localStorage.setItem('historial', JSON.stringify(infoProducto)); 
        }
        else{
            var articulos = JSON.parse(localStorage.getItem('historial'));
            localStorage.setItem('historial', JSON.stringify(articulos.concat(infoProducto)));
        }
    }
    
}






if(localStorage.getItem('historial') === null){
    var srcimage = ["file:///C:/Users/jcke2/OneDrive/Documentos/Desarrollo-Humano/img/balon-futbol.png",
                "file:///C:/Users/jcke2/OneDrive/Documentos/Desarrollo-Humano/img/balon-volibol.png",
                "file:///C:/Users/jcke2/OneDrive/Documentos/Desarrollo-Humano/img/balon-tenis.png",
                "file:///C:/Users/jcke2/OneDrive/Documentos/Desarrollo-Humano/img/aro.png",
                "file:///C:/Users/jcke2/OneDrive/Documentos/Desarrollo-Humano/img/cono.png",
                "file:///C:/Users/jcke2/OneDrive/Documentos/Desarrollo-Humano/img/raqueta-ping.png"]
    var articulo = ["Balón Fútbol","Balón Volibol","Pelota Tenis","Aros","Conos","Raqueta Ping Pong"]
    var cantidad = [4,5,2,3,5,5]
    var fechaSol= Date().slice(11, 15)+"-"+10+"-"+Date().slice(8, 10);
    var fechaDev = ["2020-10-11","2020-10-17","2020-10-18","2020-10-17","2020-10-15","2020-10-16"]



    for(var i=0;i<srcimage.length;i++){
        var infoProducto = [{
            imagen: srcimage[i],
            artic: articulo[i],
            cant: cantidad[i],
            fechaS: fechaSol,
            fechaD: fechaDev[i]
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

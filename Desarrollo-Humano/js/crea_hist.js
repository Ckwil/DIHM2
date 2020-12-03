


if(localStorage.getItem('historial') === null){
    var srcimage = ["./img/balon-futbol.png",
                "./img/balon-volibol.png",
                "./img/balon-tenis.png",
                "./img/aro.png",
                "./img/cono.png",
                "./img/raqueta-ping.png",
                "./img/raqueta-ping.png",
                "./img/aro.png",
                "./img/cono.png"]
    var articulo = ["Balón Fútbol","Balón Volibol","Pelota Tenis","Aros","Conos","Raqueta Ping Pong","Raqueta Ping Pong","Aros","Conos"]
    var cantidad = [4,3,2,3,2,4,2,1,5]
    var fechaSol= Date().slice(11, 15)+"-"+10+"-"+Date().slice(8, 10);
    var fechaDev = ["2020-10-11","2020-10-17","2020-10-18","2020-10-17","2020-10-15","2020-10-16","2020-10-16","2020-10-16","2020-10-18"]



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

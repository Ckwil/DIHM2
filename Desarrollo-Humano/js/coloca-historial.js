

let historial;
historial = JSON.parse(localStorage.getItem('historial'));
historial.forEach(function (producto,indice){
    const row = document.createElement('tr');
    var numero = "gris";
    if(indice%2==1){
        numero = "blanco";
    }
    row.innerHTML = `
        <td class="${"colortd"+numero}">
            ${indice+1}
        </td>
        <td class="${"colortd"+numero}">
            <img src="${producto.imagen}" width=30>
        </td>
        
        <td class="${"colortd"+numero}">${producto.artic}</td>
                
         <td class="${"colortd"+numero}">${producto.cant}</td>

        <td class="${"colortd"+numero}">${producto.fechaS}</td>

        <td class="${"colortd"+numero}">${producto.fechaD}</td>
    `;
    document.getElementById("lista-compra").appendChild(row);
});
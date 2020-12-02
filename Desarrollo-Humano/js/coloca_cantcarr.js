const row = document.createElement('li');
var producto = JSON.parse(localStorage.getItem('productos')); 
var longitud = producto.length
    row.innerHTML = `
        <li style="color: #ffffff; font-size: 24px;">(${longitud})</li>
    `;
    document.getElementById("canastabar").appendChild(row);
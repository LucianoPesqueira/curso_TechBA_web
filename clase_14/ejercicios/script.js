//-----------LOCALSTORAGE-----------------------
localStorage.setItem('tema', 'oscuro'); //almacenar datos

let usuario = localStorage.getItem('usuario'); //obtener datos
console.log(usuario);

localStorage.removeItem('usuario');//eliminar un dato especifico

localStorage.clear();//eliminar todos los datos


//-----------SESSIONSTORAGE-----------------
sessionStorage.setItem('pasoActual', '2');//almacenar datos temporales

let usuario2 = sessionStorage.getItem('usuario');

sessionStorage.removeItem('usuario');

sessionStorage.clear();

//---------------CARRITO DE COMPRAS CON LOCAL Y SESSION - STORAGE--------------
//EJERCICIO PRACTICO: CARRITO DE COMPRAS
document.addEventListener('DOMContentLoaded', function () {
    cargarCarrito();
});

//AGREGAR PRODUCTO AL CARRITO
var botonAgregar = document.getElementsByClassName('agregar-carrito');
for (var i = 0; i < botonAgregar.length; i++) {
    botonAgregar[i].addEventListener('click', agregarProducto);
}

//VARICAR CARRITO
document.getElementById('vaciar-carrito').addEventListener('click', function () {
    localStorage.removeItem('carrito');
    cargarCarrito();
});



function agregarProducto(event) {
    var id = event.target.getAttribute('data-id');
    var nombre = event.target.getAttribute('data-nombre');
    var precio = event.target.getAttribute('data-precio');

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    var existsProduct = carrito.find(producto => producto.id === id);

    if (existsProduct) {
        existsProduct.cantidad += 1;
    } else {
        carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function cargarCarrito() {
    var listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = "";

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];
        var li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio} - ${producto.cantidad}`;
        listaCarrito.appendChild(li);
    }
}

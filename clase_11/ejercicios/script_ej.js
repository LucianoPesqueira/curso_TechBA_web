let edad = 18;
let miembroVip = true;

if (edad >= 18 && miembroVip == true){
    console.log("Acceso concedido al VIP")
} else if (edad >= 18 && miembroVip == false) {
    console.log("Puede pasar al area comun")
} else {
    console.log("No puede pasar!")
}

// bucles
//while
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

//do while
let num = 16;

do {
    console.log(num);
    num++;
} while ( num < 18)

//for
i = 0;
for (i = 0; i < 3; i++){
    console.log(`${i+1}: ${i}`);
}

//iterar con for con lista:
let productos = ['monitor', 'teclado', 'mouse'];

for (i = 0; i < productos.length; i++){
    console.log(`producto ${i+1}: ${productos[i]}`);
}

// iterar for con lista de diccionario de productos con descuento
let listDictProductos = [
    {nombre: 'monitor', descuento: true},
    {nombre: 'teclado', descuento: false},
    {nombre: 'mouse', descuento: false},
    {nombre: 'camara', descuento: false},
    {nombre: 'microfono', descuento: true},
    {nombre: 'procesador', descuento: false},
]
console.log("Lista de productos con descuento:")
for (i=0; i < listDictProductos.length; i++){
    if (listDictProductos[i].descuento){
        console.log(listDictProductos[i].nombre);
    }
}
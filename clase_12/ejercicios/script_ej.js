//funcion simple
function calcularArea(largo, ancho){
    return largo * ancho
}

console.log(calcularArea(12, 8));

//-----------------------------------
//funcion con parametro y salida
function saludo(name){
    console.log(`Hola: ${name}`);
}

saludo("Luciano");

//--------------------------------------
//funcion sin parametro
function saludar(){
    console.log("Hola, Python");
}

saludar();

//-----------------------------------------
//scope(alcance) global(se define fuera de la funct)
let global_name = "Luciano";

function mensaje(){
    console.log(`Hola soy ${global_name}, y estoy aprendiendo JS`)
}

mensaje();
//------------------------------------------
//scope(local) se define dentro de la func
function mensaje2(){
    let name = "Luciano";
    console.log(`Hola soy ${name}, y estoy aprendiendo JS`)
}

mensaje2();
//-------------------------------------------
//modular
let base = 5;
let altura = 10;

function calcAreaRectangulo(base, altura){
    return base * altura;
}

function imprimirArea(area){
    console.log(`El area del rectangulo es: ${area}`);
}

imprimirArea(calcAreaRectangulo(base, altura));
//-------------------------------------------
//funciones nativas: prompt, alert
// let nombre1 = prompt("Ingrese su nombre: ");
// if (nombre1){
//     let saludo = `Hola ${nombre1.toUpperCase()}!`;
//     alert(saludo);
//     console.log(`El usuario es: ${nombre1}`)
// }
//-----------------EJERCICIO 1--------------------------------
function validarEdad(nombre, edad){
    if (edad >= 18){
        console.log(`${nombre}, es mayor de edad`);
    }
    else{
        console.log(`A ${nombre}, le faltan ${18 - parseInt(edad)} años, para se mayor de edad`);
    }
}
let nombre = prompt("Ingrese su nombre: ");
let edad = parseInt(prompt("Ingrese su edad: "));

validarEdad(nombre, edad);
//------------------EJERCICIO 2:-------------------------------
function calcularPrecio(precio, porcentaje = 0.21){
    console.log(`El precio toal con IVA: ${porcentaje} es: $${precio * (1 + porcentaje)}`);
}

let precio = parseFloat(prompt("Ingrese el precio del producto: $"));
let iva = prompt("Ingrese el valor del IVA: ")
if (iva === "" || iva === null){
    iva = 0.21;
}else{
    iva = parseFloat(iva);
}
calcularPrecio(precio, iva);
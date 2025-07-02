console.log("Hola mundo");

// Variable let
let iva = 10.5;
iva = 21;//imprime

console.log(iva);
//----------------------------------
// variable const
const IVA = 11;
//IVA = 12;// da error porque no se puede reasignar un valor a una constante

console.log(IVA);

// -------------------  ejercicio 01  --------------------------------------
let num1 = prompt("Ingrese el primer numero: ");
let num2 = prompt("Ingrese el segundo numero: ");
let valorDado = 25;
let esMayor = false;
let suma = 0;
let resta = 0;
let multi = 0;
let div = 0;

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Uno o ambos valores no son números.");
}
else {
    suma = parseFloat(num1) + parseFloat(num2);
    resta = parseFloat(num1) - parseFloat(num2);
    multi = parseFloat(num1) * parseFloat(num2);
    if (num1 > 0 && num2 > 0) {
        div = parseFloat(num1) / parseFloat(num2);
    }
    esMayor = suma > valorDado ? "verdadero" : "Falso"; // operador ternario
}

console.log(`num1: ${num1}, num2: ${num2}, valorDado: ${valorDado}`);
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicacion: ${multi}`);
console.log(`Division: ${div}`);
console.log(`La suma ${suma} es mayor que ${valorDado}?: ${esMayor}`);

// -------------------  ejercicio 02  --------------------------------------
let nombre = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");

console.log(`Su nombre y edad concatenado es: ${nombre + edad}, ${isNaN(edad) > 18 ? "Es moyor de edad" : "Es menor de edad"}`);

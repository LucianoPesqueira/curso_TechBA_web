//interfaz
//API --> el navegador tiene una interfaz para interactuar con el DOM

document.getElementById("label1").textContent = "N1:";
document.getElementById("label2").textContent = "N2:";

let num1 = parseInt(document.getElementById("num1").value);
let num2 = parseInt(document.getElementById("num2").value);

document.getElementById("suma").value = num1 + num2;
document.getElementById("resta").value = num1 - num2;
document.getElementById("multiplicacion").value = num1 * num2;
document.getElementById("division").value = num1 / num2;


//condicionales
let edad = document.getElementById("edad").value;

if (edad >= 18){
    document.getElementById("state").textContent = "Es MAYOR de edad";
}else{
    document.getElementById("state").textContent = "Es MENOR de edad";
}
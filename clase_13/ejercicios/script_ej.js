//POR ID
let elemTitulo = document.getElementById("titulo");
console.log(elemTitulo);

//POR CLASES
let cajas = document.getElementsByClassName("caja");
console.log(cajas);
for (let i = 0; i < cajas.length; i++){
    cajas[i].style.color="red";
}

//SELECCIONA EL PRIMER ELEMENTO QUE COINCIDE
let elemQuery = document.querySelector(".contenedor .texto");
console.log(elemQuery);
elemQuery.textContent = "texto 1 --> QuerySelector";

//SELECCIONA TODOS LOS ELEMENTOS QUE COINCIDE
let elemQuerys = document.querySelectorAll(".contenedor .texto");
console.log(elemQuerys);

elemQuerys.forEach(element =>{
    element.style.color = "green";
});

//CREACION DIMANICA: MODIFICAR O AGREGAR NUEVOS ELEMENTOS
let newElement = document.createElement("li"); //CREO EL ELEMENTO
newElement.textContent = "Elemento 3"; //DEFINO EL CONTENIDO DEL ELEMENTO
document.getElementById("lista").appendChild(newElement); //AÑADO EL NUEVO ELEMENTO DENTRO DEL UL CON ID LISTA

//MODIFICAR ELEMENTOS con innerHTML
let modTexto = document.getElementById("modificar");
modTexto.innerHTML = "Texto --> Texto modificado con innerHTML";

//ELIMINAR ELEMENTOS
let delElement = document.getElementById("item3");
delElement.remove();


//----------------------------------------------------
//AddEventListener por BOTON
let boton = document.getElementById("miBoton");
boton.addEventListener("click", function(){
    alert("Hiciste click en el boton");
});
//por EVENTOS
let lista = document.getElementById("addEvent");
lista.addEventListener("click", function(event){
    if (event.target.tagName === "LI") {
        alert("Hiciste click en: " + event.target.textContent);
    }
});

//----------------------------------------------------------------
//EJERCICIO 1:

let ejemplo1 = document.getElementById("ejemplo1");
ejemplo1.addEventListener("click", function(){
    document.getElementById("txtInicial").textContent = "El texto ha sido modificado con JavaScript";
});


//EJERCICIO 2:
let newElem = document.createElement("li");
newElem.textContent = "Nuevo Elemento";

let ejemplo2 = document.getElementById("ejemplo2");
ejemplo2.addEventListener("click", function() {
    document.getElementById("ulLista").appendChild(newElem);
    alert("Se ha añadido un nuevo elemento");
});

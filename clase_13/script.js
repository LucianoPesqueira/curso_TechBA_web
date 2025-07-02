// de la clase 11 eventos

//addEventListener

function validarAcceso() {
    const edad2 = parseInt(document.getElementById("edad2").value);
    console.log("edad2: " + edad2);
    console.log("es de tipo: " + typeof (edad2));
    const esVip = document.getElementById("esVip").checked;
    console.log("esVip: " + esVip);
    console.log("es de tipo: " + typeof (esVip));
    if (isNaN(edad2)) {
        document.getElementById("acceso").textContent = "Debe ingresar un número";
    } else {
        if ((edad2 >= 18) && (esVip == true)) {
            console.log(edad2 >= 18 && esVip == true); //para ver en consola qué resultado da esa expresión
            document.getElementById("acceso").style.color = "green";
            document.getElementById("acceso").textContent = "ADELANTE!";
        } else {
            console.log(edad2 >= 18 && esVip == true); //para ver en consola qué resultado da esa expresión
            document.getElementById("acceso").style.color = "red";
            document.getElementById("acceso").textContent = "NO PUEDE PASAR";
        }
    }
}

let bontonVerificar = document.getElementById("botonVerificar");
bontonVerificar.addEventListener("click", validarAcceso);
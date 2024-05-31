function validarForm(){
    let nombre = $("nombre").value;
    let apellido = $("apellido").value;
    let edad = $("edad").value;
    let altura = $("altura").value;
    let email = $("email").value;

    let mensaje = $("mensaje");

    let errores = [];

    if(nombre === "") {
        errores.push("El nombre no puede estar vacio");
    }
    if(apellido === "") {
        errores.push("el apellido no puede estar vacio");

    }
    if(edad < 18){
        errores.push("La edad no puede ser negativa y no puede ser menor de 18 años");
    }
    if(altura < 0) {
        errores.push("La altura no puede ser menor a 0");
    }
    if(email === "") {
        errores.push("El correo email no puede estar vacio")
    }

    if (errores.length > 0) {
        mensaje.innerHTML = errores.join("<br>");
        mensaje.className = "invalid";
    } else {
        mensaje.innerHTML = "Todas la validaciones son correctas";
        mensaje.className = "Valid"
    }
}

function $(elementos) {
    return document.getElementById(elementos);
};
function resultadoImc(){
    const estatura = $("estatura");
    const peso = $("peso");

    let imc = (peso.value/Math.pow(estatura.value,2));

    alert(imc);

}

/*
resultado.onclick = () => {
    const imcResultado = (peso.value / Math.pow(altura.value,2));
    alert( `el valor es : ${imcResultado}`);
};
*/

function $(elementos) {
    return document.getElementById(elementos);
};
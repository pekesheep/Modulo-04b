var resultadoParcial = 0;
var num = 0;

//BOTÓN "C" PARA LIMPIAR
function limpiaRegistro() {
    resultadoParcial = 0;
    num = 0;
    document.getElementById("valor-numerico").value = "";
    document.getElementById("valor-resultado").innerHTML = "";
    document.getElementById("texto-resultado").innerHTML = "";
    document.getElementById("valor-numerico").focus();
}

//BOTÓN RESULTADO DESACTIVADO SI EL INPUT ESTÁ VACÍO
function activarBoton() {
    if (document.getElementById("valor-numerico").value === "") {
        document.getElementById("boton-resultado").disabled = true;
    } else {
        document.getElementById("boton-resultado").disabled = false;
    }
}

function suma() {
    num = document.getElementById("valor-numerico").value === "" ? 0 : parseFloat(document.getElementById("valor-numerico").value);
    resultadoParcial = resultadoParcial + num;
    document.getElementById("valor-numerico").focus();
    document.getElementById("valor-numerico").select();
}

function resta() {
    num = document.getElementById("valor-numerico").value === "" ? 0 : parseFloat(document.getElementById("valor-numerico").value);
    resultadoParcial = resultadoParcial - num;
    document.getElementById("valor-numerico").focus();
    document.getElementById("valor-numerico").select();
}

function multiplica() {
    num = document.getElementById("valor-numerico").value === "" ? 0 : parseFloat(document.getElementById("valor-numerico").value);
    resultadoParcial = resultadoParcial * num;
    document.getElementById("valor-numerico").focus();
    document.getElementById("valor-numerico").select();
}

function divide() {
    num = document.getElementById("valor-numerico").value === "" ? 0 : parseFloat(document.getElementById("valor-numerico").value);
    resultadoParcial = resultadoParcial / num;
    document.getElementById("valor-numerico").focus();
    document.getElementById("valor-numerico").select();
}

resultado = () => {
    document.getElementById("texto-resultado").innerHTML = "El resultado es: ";
    document.getElementById("valor-resultado").innerHTML = resultadoParcial;
}
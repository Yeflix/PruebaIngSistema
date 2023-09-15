let botonEnviarDatos= document.getElementById('enviar')
let resultadosP = document.getElementById("resutadosPrueba")
    resultadosP.addEventListener('click', resultadosPruebaMain)
let prueba = document.getElementById('prueba')
let resultados = document.getElementById("resultados")
let registro = document.getElementById('registro')
let resultadoFinal = document.getElementById("resultadoFinal")


function desaparecer() {
    prueba.style.display = "none"  
    resultados.style.display = "none"
    resultadoFinal.style.display = "none"
    botonEnviarDatos.addEventListener('click', aparecer)
}
function aparecer() {
    let inputNombre = document.getElementById("name2").value
    alert("Hola " + inputNombre + " !!")
    alert("Si estas en esta prueba, felicidades!! eso quiere decir que estas capacitado para aprobar esta prueba")
    alert("Que tengas Mucho Exito y recuerda. El conocimiento es poder")
    
    registro.style.display = "none" 
    prueba.style.display = "flex"  
    resultados.style.display = "flex"
    resultadosP.addEventListener('click', resutaldosFinales)
}
function resultadosPruebaMain() {
const opcion1 = document.querySelector('#P1');
const opcion2 = document.querySelector('#P2');
const opcion3 = document.querySelector('#P3');

if (opcion1.checked) {
 crearMensaje1('La respuesta 1 de la primera pregunta es la incorrecta');
} else if (opcion2.checked) {
 crearMensaje1('La respuesta 2 de la primera pregunta es la correcta');
} else if (opcion3.checked) {
 crearMensaje1('La respuesta 3 de la primera pregunta es la correcta');
} else {
 crearMensaje1('Ninguna opción está seleccionada');
}
////////
const opcion4 = document.querySelector('#P4');
const opcion5 = document.querySelector('#P5');
const opcion6 = document.querySelector('#P6');

if (opcion4.checked) {
    crearMensaje2('La respuesta 1 de la segunda pregunta es la correcta');
   } else if (opcion5.checked) {
    crearMensaje2('La respuesta 2 de la segunda pregunta  es la incorrecta');
   } else if (opcion6.checked) {
    crearMensaje2('La respuesta 3 de la segunda pregunta  es la incorrecta');
   } else {
    crearMensaje2('Ninguna opción está seleccionada');
   }
////////////////
const opcion7 = document.querySelector('#P7');
const opcion8 = document.querySelector('#P8');
const opcion9 = document.querySelector('#P9');

if (opcion7.checked) {
    crearMensaje3('La respuesta 1 de la tercera pregunta es la incorrecta');
   } else if (opcion8.checked) {
    crearMensaje3('La respuesta 2 de la tercera pregunta  es la correcta');
   } else if (opcion9.checked) {
    crearMensaje3('La respuesta 3 de la tercera pregunta  es la incorrecta');
   } else {
    crearMensaje3('Ninguna opción está seleccionada');
   }
 
////////////////
const opcion10 = document.querySelector('#P10');
const opcion11 = document.querySelector('#P11');
const opcion12 = document.querySelector('#P12' );

if (opcion10.checked) {
    crearMensaje4('La respuesta 1 de la cuarta pregunta es la incorrecta');
   } else if (opcion11.checked) {
    crearMensaje4('La respuesta 2 de la cuarta pregunta  es la incorrecta');
   } else if (opcion12.checked) {
    crearMensaje4('La respuesta 3 de la cuarta pregunta  es la correcta');
   } else {
    crearMensaje4('Ninguna opción está seleccionada');
   }
////////////////
const opcion13 = document.querySelector('#P13');
const opcion14 = document.querySelector('#P14');
const opcion15 = document.querySelector('#P15');

if (opcion13.checked) {
    crearMensaje5('La respuesta 1 de la quinta pregunta es la incorrecta');
   } else if (opcion14.checked) {
    crearMensaje5('La respuesta 2 de la quinta pregunta  es la correcta');
   } else if (opcion15.checked) {
    crearMensaje5('La respuesta 3 de la quinta pregunta  es la incorrecta');
   } else {
    crearMensaje5('Ninguna opción está seleccionada');
   }
////////////////
const opcion16 = document.querySelector('#P16');
const opcion17 = document.querySelector('#P17');
const opcion18 = document.querySelector('#P18');

if (opcion16.checked) {
    crearMensaje6('La respuesta 1 de la sexta pregunta es la incorrecta');
   } else if (opcion17.checked) {
    crearMensaje6('  La respuesta 2 de la sexta pregunta  es la correcta');
   } else if (opcion18.checked) {
    crearMensaje6('  La respuesta 3 de la sexta pregunta  es la incorrecta');
   } else {
    crearMensaje6('Ninguna opción está seleccionada');
   }
////////////////
const opcion19 = document.querySelector('#P19');
const opcion20 = document.querySelector('#P20');
const opcion21 = document.querySelector('#P21');

if (opcion19.checked) {
    crearMensaje7('  La respuesta 1 de la septima pregunta es la correcta');
   } else if (opcion20.checked) {
    crearMensaje7('  La respuesta 2 de la septima pregunta  es la incorrecta');
   } else if (opcion21.checked) {
    crearMensaje7('  La respuesta 3 de la septima pregunta  es la incorrecta');
   } else {
    crearMensaje7('Ninguna opción está seleccionada');
   } 


////////////////
const opcion22 = document.querySelector('#P22');
const opcion23 = document.querySelector('#P23');
const opcion24 = document.querySelector('#P24');

if (opcion22.checked) {
    crearMensaje8('  La respuesta 1 de la octava pregunta es la incorrecta');
   } else if (opcion23.checked) {
    crearMensaje8('  La respuesta 2 de la octava pregunta  es la incorrecta');
   } else if (opcion24.checked) {
    crearMensaje8('  La respuesta 3 de la octava pregunta  es la correcta');
   } else {
    crearMensaje8('Ninguna opción está seleccionada');
   } 
////////////////
const opcion25 = document.querySelector('#P25');
const opcion26 = document.querySelector('#P26');
const opcion27 = document.querySelector('#P27');

if (opcion25.checked)  {
    crearMensaje9('  La respuesta 1 de la novena pregunta es la correcta');
   } else if (opcion26.checked) {
    crearMensaje9('  La respuesta 2 de la novena pregunta  es la incorrecta');
   } else if (opcion27.checked) {
    crearMensaje9('  La respuesta 3 de la novena pregunta  es la incorrecta');
   } else {
    crearMensaje9('Ninguna opción está seleccionada');
   }   }

function crearMensaje1(resultado1) {
    let yefri1 = document.getElementById("yefri")
    yefri1.innerHTML = resultado1
}
function crearMensaje2(resutaldo2) {
    let yefri2 = document.getElementById("yefri2")
    yefri2.innerHTML = resutaldo2
}
function crearMensaje3(resultado3) {
    let yefri3 = document.getElementById("yefri3")
    yefri3.innerHTML = resultado3
}
function crearMensaje4(resultado4) {
    let yefri4 = document.getElementById("yefri4")
    yefri4.innerHTML = resultado4
}
function crearMensaje5(resultado5) {
    let yefri5 = document.getElementById("yefri5")
    yefri5.innerHTML = resultado5
}
function crearMensaje6(resultado6) {
    let yefri6 = document.getElementById("yefri6")
    yefri6.innerHTML = resultado6
}
function crearMensaje7(resultado7) {
    let yefri7 = document.getElementById("yefri7")
    yefri7.innerHTML = resultado7
}
function crearMensaje8(resultado8) {
    let yefri8 = document.getElementById("yefri8")
    yefri8.innerHTML = resultado8
}
function crearMensaje9(resultado9) {
    let yefri9 = document.getElementById("yefri9")
    yefri9.innerHTML = resultado9
}

function resutaldosFinales() {
    registro.style.display = "none" 
    prueba.style.display = "none"  
    resultados.style.display = "none"
    resultadoFinal.style.display = "flex"
}
window.addEventListener('load', desaparecer)
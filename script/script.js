let botonEnviarDatos= document.getElementById('enviar')
let resultadosP = document.getElementById("resutadosPrueba")
    resultadosP.addEventListener('click', resultadosPruebaMain)



function desaparecer() {
    let prueba = document.getElementById('prueba')
    prueba.style.display = "none"  
    let resultados = document.getElementById("resultados")
    resultados.style.display = "none"
    botonEnviarDatos.addEventListener('click', aparecer)
}
function aparecer() {
    let inputNombre = document.getElementById("name2").value
    alert("Hola " + inputNombre + " !!")
    alert("Si estas en esta prueba, felicidades!! eso quiere decir que estas capacitado para aprobar esta prueba")
    alert("Que tengas Mucho Exito y recuerda. El conocimiento es poder")
    
    let registro = document.getElementById('registro')
    registro.style.display = "none" 
    let prueba = document.getElementById('prueba')
    prueba.style.display = "flex"  
    let resultados = document.getElementById("resultados")
    resultados.style.display = "flex"
}


function resultadosPruebaMain() {
const opcion1 = document.querySelector('#P1');
const opcion2 = document.querySelector('#P2');
const opcion3 = document.querySelector('#P3');

if (opcion1.checked) {
 alert('La opción 1 de la primera pregunta  es la incorrecta');
} else if (opcion2.checked) {
 alert('La opción 2 de la primera pregunta es la correcta');
} else if (opcion3.checked) {
 alert('La opción 3 de la primera pregunta es la correcta');
} else {
 alert('Ninguna opción está seleccionada');
}

////////

const opcion4 = document.querySelector('#P4');
const opcion5 = document.querySelector('#P5');
const opcion6 = document.querySelector('#P6');

if (opcion4.checked) {
    alert('La opción 1 de la segunda pregunta es la correcta');
   } else if (opcion5.checked) {
    alert('La opción 2 de la segunda pregunta  es la incorrecta');
   } else if (opcion6.checked) {
    alert('La opción 3 de la segunda pregunta  es la incorrecta');
   } else {
    alert('Ninguna opción está seleccionada');
   }
////////////////
const opcion7 = document.querySelector('#P7');
const opcion8 = document.querySelector('#P8');
const opcion9 = document.querySelector('#P9');

if (opcion7.checked) {
    alert('La opción 1 de la tercera pregunta es la incorrecta');
   } else if (opcion8.checked) {
    alert('La opción 2 de la tercera pregunta  es la correcta');
   } else if (opcion9.checked) {
    alert('La opción 3 de la tercera pregunta  es la incorrecta');
   } else {
    alert('Ninguna opción está seleccionada');
   }
////////////////
const opcion10 = document.querySelector('#P10');
const opcion11 = document.querySelector('#P11');
const opcion12 = document.querySelector('#P12');

if (opcion10.checked) {
    alert('La opción 1 de la cuarta pregunta es la incorrecta');
   } else if (opcion11.checked) {
    alert('La opción 2 de la cuarta pregunta  es la incorrecta');
   } else if (opcion12.checked) {
    alert('La opción 3 de la cuarta pregunta  es la correcta');
   } else {
    alert('Ninguna opción está seleccionada');
   }
////////////////
const opcion13 = document.querySelector('#P13');
const opcion14 = document.querySelector('#P14');
const opcion15 = document.querySelector('#P15');

if (opcion13.checked) {
    alert('La opción 1 de la quinta pregunta es la incorrecta');
   } else if (opcion14.checked) {
    alert('La opción 2 de la quinta pregunta  es la correcta');
   } else if (opcion15.checked) {
    alert('La opción 3 de la quinta pregunta  es la incorrecta');
   } else {
    alert('Ninguna opción está seleccionada');
   }
////////////////
const opcion16 = document.querySelector('#P16');
const opcion17 = document.querySelector('#P17');
const opcion18 = document.querySelector('#P18');

if (opcion16.checked) {
    alert('La opción 1 de la sexta pregunta es la incorrecta');
   } else if (opcion17.checked) {
    alert('La opción 2 de la sexta pregunta  es la correcta');
   } else if (opcion18.checked) {
    alert('La opción 3 de la sexta pregunta  es la incorrecta');
   } else {
    alert('Ninguna opción está seleccionada');
   }
////////////////
const opcion19 = document.querySelector('#P19');
const opcion20 = document.querySelector('#P20');
const opcion21 = document.querySelector('#P21');

if (opcion19.checked) {
    alert('La opción 1 de la septima pregunta es la correcta');
   } else if (opcion20.checked) {
    alert('La opción 2 de la septima pregunta  es la incorrecta');
   } else if (opcion21.checked) {
    alert('La opción 3 de la septima pregunta  es la incorrecta');
   } else {
    alert('Ninguna opción está seleccionada');
   } 


////////////////
const opcion22 = document.querySelector('#P22');
const opcion23 = document.querySelector('#P23');
const opcion24 = document.querySelector('#P24');

if (opcion22.checked) {
    alert('La opción 1 de la octava pregunta es la incorrecta');
   } else if (opcion23.checked) {
    alert('La opción 2 de la octava pregunta  es la incorrecta');
   } else if (opcion24.checked) {
    alert('La opción 3 de la octava pregunta  es la correcta');
   } else {
    alert('Ninguna opción está seleccionada');
   } 

////////////////
const opcion25 = document.querySelector('#P25');
const opcion26 = document.querySelector('#P26');
const opcion27 = document.querySelector('#P27');

if (opcion25.checked) {
    alert('La opción 1 de la novena pregunta es la correcta');
   } else if (opcion26.checked) {
    alert('La opción 2 de la novena pregunta  es la incorrecta');
   } else if (opcion27.checked) {
    alert('La opción 3 de la novena pregunta  es la incorrecta');
   } else {
    alert('Ninguna opción está seleccionada');
   } 
   
} 
   




window.addEventListener('load', desaparecer)
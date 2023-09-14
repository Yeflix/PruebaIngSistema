let botonEnviarDatos= document.getElementById('enviar')



function desaparecer() {
    let prueba = document.getElementById('prueba')
    prueba.style.display = "none"  
    let resultados = document.getElementById("resultados")
    resultados.style.display = "none"
    botonEnviarDatos.addEventListener('click', aparecer)
}
function aparecer() {
    let inputNombre = document.getElementById("name2").value
    alert("bienvenid@ " + inputNombre)
    alert("Si estas en esta prueba, felicidades!! eso quiere decir que estas capacitado para aprobar esta prueba")
    alert("Que tengas Mucho Exito y recuerda. El conocimiento es poder")
    
    let registro = document.getElementById('registro')
    registro.style.display = "none" 
    let prueba = document.getElementById('prueba')
    prueba.style.display = "flex"  
    let resultados = document.getElementById("resultados")
    resultados.style.display = "flex"
}

window.addEventListener('load', desaparecer)
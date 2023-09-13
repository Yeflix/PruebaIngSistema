function desaparecer() {
    let prueba = document.getElementById('prueba')
    prueba.style.display = "none"  
    let resultados = document.getElementById("resultados")
    resultados.style.display = "none"
    let botonEnviarDatos = document.getElementById('enviar')
    botonEnviarDatos.addEventListener('click', aparecer)  
}

function aparecer() {
    let registro = document.getElementById('registro')
    registro.style.display = "none" 
    let prueba = document.getElementById('prueba')
    prueba.style.display = "flex"  
    let resultados = document.getElementById("resultados")
    resultados.style.display = "flex"
}

window.addEventListener('load', desaparecer)
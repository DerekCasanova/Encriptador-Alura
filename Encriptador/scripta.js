const textArea = document.querySelector(".areaTexto")
const mensaje = document.querySelector(".mensaje")
const copia = document.querySelector(".copiar");

function validarTexto(){
    let textoEscrito = document.querySelector(".areaTexto").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

validarTexto()


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"

}



function encriptar(stringEncriptado){
    let matrixCod= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrixCod.length; i++){
        
        if(stringEncriptado.includes(matrixCod[i][0])){

            stringEncriptado = stringEncriptado.replaceAll(matrixCod[i][0], matrixCod[i][1]);


        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}


function desencriptar(stringDesencriptado){
    let matrixCod= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrixCod.length; i++){
    
        if(stringDesencriptado.includes(matrixCod[i][1])){

            stringDesencriptado = stringDesencriptado.replaceAll(matrixCod[i][1], matrixCod[i][0]);


        }
    }
    return stringDesencriptado
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}


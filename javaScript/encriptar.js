function encriptar() {
    var texto = document.getElementById("entradaTexto");

    if (!validar(texto)) {
        var frase = texto.value;

        frase = frase.replace(/e/g, "enter");
        frase = frase.replace(/i/g, "imes");
        frase = frase.replace(/a/g, "ai");
        frase = frase.replace(/o/g, "ober");
        frase = frase.replace(/u/g, "ufat");  

        document.getElementById("resultado").value = frase;   
    }
}

function desencriptar() {
    var texto = document.getElementById("entradaTexto");

    if (!validar(texto)) {
        var frase = texto.value;

        frase = frase.replace(/enter/g, "e");
        frase = frase.replace(/imes/g, "i");
        frase = frase.replace(/ai/g, "a");
        frase = frase.replace(/ober/g, "o");
        frase = frase.replace(/ufat/g, "u");
    
        document.getElementById("resultado").value = frase;
    }
}

function validar(frase) {
    if (frase.value === "") {
        document.getElementById("rectangulo").style.display = "none";
        return true;
    } else {
        document.getElementById("rectangulo").style.display = "inline";
        return false;
    }
}

function copiar() {
    var texto = document.getElementById("resultado");
    texto.select();

    document.execCommand("copy");
}

function pegar() {
    navigator.clipboard.readText()
        .then(text => {
        document.getElementById("entradaTexto").value = text;
        })
        .catch(err => {
        console.error(err);
        });
}
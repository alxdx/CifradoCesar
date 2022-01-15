var textoLlanoArea;
var textoCifradoArea;
var textoDescifradoArea;
var kOffsetArea;

var cifrar = ()=>{
    let offset = parseInt(kOffsetArea.value,10);
    let llano = textoLlanoArea.value;
    let cifrado = "";
    for (let char = 0; char < llano.length; char++) {
        let newChar = (parseInt(llano.charCodeAt(char))+offset)%128;
        //console.log("original ",llano.charCodeAt(char));
        //console.log("cifr ",newChar);
        cifrado += String.fromCharCode(newChar);
    }
    textoCifradoArea.value = cifrado;
    descifrar();
}
var descifrar = ()=>{
    let offset = parseInt(kOffsetArea.value,10);
    let cifrado = textoCifradoArea.value;
    let descifrado = "";
    for (let char = 0; char < cifrado.length; char++){
        //console.log("cifr2",cifrado.charCodeAt(char));
        let newChar = ((parseInt(cifrado.charCodeAt(char),10))+128-offset)%128; //check
        //console.log("des ",newChar);
        descifrado += String.fromCharCode(newChar);
    }
    textoDescifradoArea.value = descifrado;
}

window.onload = ()=>{
    textoLlanoArea = document.getElementById("texto-llano");
    textoCifradoArea = document.getElementById("texto-cifrado");
    textoDescifradoArea = document.getElementById("texto-descifrado");
    kOffsetArea = document.getElementById("k-offset");

    textoLlanoArea.addEventListener("input",cifrar);
    kOffsetArea.addEventListener("input",cifrar);
}



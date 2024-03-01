
function minusculas() {
    var textoMinuscula = document.getElementById('texto');
    textoMinuscula.value = acentos(textoMinuscula.value).toLowerCase();
}
function acentos(texto) {
    texto = texto.replace(/[^a-z]/g, '');
    return texto
        .replace(/[áäâà]/g, 'a')
        .replace(/[éëêè]/g, 'e')
        .replace(/[íïîì]/g, 'i')
        .replace(/[óöôò]/g, 'o')
        .replace(/[úüûù]/g, 'u');
    
}
function ActualizarColumna2() {
    var textoEnColumna1 = document.getElementById('texto').value.trim();
    var columna2 = document.getElementById('columna2');
    var logo2 = document.querySelector('.logo2');
    var texto2 = document.querySelector('.texto2');
    var mensaje2 = document.querySelector('.mensaje2');
    var copiado = document.querySelector('.Copiado');

    if (textoEnColumna1 === '') {
        logo2.style.display = 'block';
        texto2.style.display = 'none';
        copiado.style.display = 'none';
        mensaje2.style.display = 'block';
    } else {
        logo2.style.display = 'none';
        texto2.style.display = 'block';
        copiado.style.display = 'block';
        mensaje2.style.display = 'none';
    }
}
function Encriptador(){
    
    const texto_encriptar = Encriptar(texto.value);
    mensaje.value = texto_encriptar; 
    ActualizarColumna2();
}
function Desencriptador(){
    const texto_encriptado = Desencriptar(texto.value);
    mensaje.value = texto_encriptado; 
    ActualizarColumna2();
}
function Encriptar(palabra){
    palabra = palabra.replace(/e/g, 'enter');
    palabra = palabra.replace(/i/g, 'imes');
    palabra = palabra.replace(/a/g, 'ai');
    palabra = palabra.replace(/o/g, 'ober');
    palabra = palabra.replace(/u/g, 'ufat');

    return palabra;
}
function Desencriptar(frase){
    frase = frase.replace(/enter/g, 'e');
    frase = frase.replace(/imes/g, 'i');
    frase = frase.replace(/ai/g, 'a');
    frase = frase.replace(/ober/g, 'o');
    frase = frase.replace(/ufat/g, 'u');

    return frase;
}
function Copiado() {
    var mensaje = document.getElementById('mensaje');
    mensaje.select();

    try {
        navigator.clipboard.writeText(mensaje.value);
        alert('Texto copiado al portapapeles');
    } catch (err) {
        console.error('No se pudo copiar el texto al portapapeles', err);
    }
}

window.onload = function () {
    ActualizarColumna2();
};
/*var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hello world!';*/
var miImage = document.querySelector('img');
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/header-image.jpg'){
        miImage.setAttribute('src','images/header-image-2.jpg');
    }else{
        miImage.setAttribute('src','images/header-image.jpg');
    }
}
function estableceNombreUsuario(){
    var miNombre = prompt('Introduce tu nombre: ');
    //localStorage permite almacenar datos en el navegador.
    localStorage.setItem('nombre',miNombre);
    miTitulo.textContent('Bienvenido '+miNombre+ '¿En que puedo ayudarte?');
}
//Si ya hay creado una variable nombre en el navegador se muestra el usuario si no se pide
if(!localStorage.getItem('nombre')){
    estableceNombreUsuario();
}else{
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenid@ '+nombreAlmacenado+ '. ¿En que puedo ayudarte?';
}
miBoton.onclick = function(){
    estableceNombreUsuario();
}
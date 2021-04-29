// Desde ES6
import {} from './events/events.js'; // Carga el archivo y ejecuta todo lo que esta ahi adentro
import UserProfile from './model/user_profile.js';
import Producto from './model/producto.js';

let myUserProfile = new UserProfile();

myUserProfile.load();

console.log("Mi darkmode es: " + myUserProfile.darkmode);

let myInput = 'n';//prompt("Quiere pasar a darkmode? [S]i o [N]o");

if( myInput.toLowerCase() == "s"){
    myUserProfile.darkmode = true;
    myUserProfile.save();
}

// salida en modo objeto del DOM
console.dir(document);

// Salida en modo texto del html
console.log(document);

console.dir(document.body.children);

for (const element of document.body.children) {
    console.dir(element);
}

let signupButton = document.body.children[2]; // Es el tercer elemento dentro de body, osea indice 2 del array

signupButton.innerHTML = "Registrar";

console.dir(signupButton);

let buttonLogin = $("#login"); //$("login");
let buttons_css = $(".button"); //document.getElementsByClassName("button");
let all_buttons = $("button"); //document.getElementsByTagName("button");

console.log(buttonLogin);

for (const elements of buttons_css) {
    console.log(elements);
}

for (const elements of all_buttons) {
    console.log(elements);
}

//////////////////////////////////////
// Javascript Vainilla - YA NO LO USAMOS MAS
////////////////////////////////////////
// Creo elemento
//let myElementP = document.createElement("p");

//myElementP.innerHTML = "<h2> Hola Coderhouse </h2>";

// se lo agrego al buttonlogin
//buttonLogin.appendChild(myElementP);

//////////////////////////////////////
// Ahora lo hago por jQuery
////////////////////////////////////////
buttonLogin.append("<h2> Hola Coderhouse </h2>");

// Aca busco el elemento <h2> que antes agregue
// Se que es el primer y unico childen del buton
// entonces lo remuevo.
(buttonLogin.children()[0]).remove();


// Conozco el parent de myElementP
//buttonLogin.removeChild(myElementP);

// Y si no se que se encuentra en buttoLogin?
//myElementP.parentNode.removeChild(myElementP);

let myUserInput = $("#usuario");

// Asi cambio el valor del elemento.
myUserInput.val("HOMERO SIMPSONs");

let myListPersonas = $("#personas");

let personasList = ["HOMERO", "MARGE", "LISA", "BART"];

// Agrego a UL la lista de personas en el array
for (const persona of personasList) {
    myListPersonas.append("<li>" + persona + "</li>");
}


let myTempObj = {id: 0, marca:"CocaCola", precio:120, inflacion: 1000 } //tramedatos(URL); //

let myProducto = new Producto( myTempObj.id, myTempObj.marca, myTempObj.precio );

localStorage.setItem("producto", JSON.stringify(myProducto));

let myTempObj2 = {id: 0, marca:"Pepsi", precio:120, inflacion: 1000 } //tramedatos(URL); //

let myProducto2 = new Producto( myTempObj2.id, myTempObj2.marca, myTempObj2.precio );

let myCarrito = [] // Que pasa si en lugar de usar un array uso objeto carrito?

let storedCarrito = sessionStorage.getItem("carrito");

if( storedCarrito != null){
    // primero cargo como array

    let tempMyCarrito = JSON.parse(storedCarrito); // Estoy un array de ojbetos que NO son Producto

    for (const producto of tempMyCarrito) {
        let loadedProduct = new Producto(producto.id, producto.marca, producto.precio)
        myCarrito.push(loadedProduct);
    }

} else{
    myCarrito.push(myProducto);
    myCarrito.push(myProducto2);
}
sessionStorage.setItem("carrito", JSON.stringify(myCarrito));


// vamos a pintar un carrito
let myHTMLCarrito = $("#myCarrito");

for (const product of myCarrito) {
    myHTMLCarrito.append("<li>" + product.getHTML() + "</li>");
}
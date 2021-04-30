///////////////////////////////
/// Coder cartel
$("body").prepend('<p class="titulo">Coder House </p>');

$(".titulo").animate({
    left: "250px",
    opacity: "0.2",
    width: "150px",
    height: "150px"
},
    2500,
    () => {
        console.log("Termino animacion")
    });

///////////////////////////////////
// Concatenar animaciones
$("body").prepend('<p id="p1" > Coder Animation </p>');

$("#p1").css("color", "red")
    .slideUp(2000) // recomendacion, extraer valores numericos a constantes
    .delay(2500)
    .slideDown(2000);

////////////////////////
/// Cartel de bienvenida al usuario
let welcome = $("body > p:nth-child(3)")

// Esto es un ejemplo pero recomiendo cambiar el CSS
// dinamicamente solo a partir de interacciones
// con el usuario.

const myWelcomeCSS = {
    "display": "none",
    "font-size": "40px"
};

welcome.css(myWelcomeCSS)
welcome.toggle("slow", () => welcome.toggle(2500));

/////////////////////////////////////////////////////////
// Animo para hacer un scroll hasta el ultimo formulario
//let elementP = document.createElement("p"); // <- Cual es el reemplazo de jQuery?
$("body").prepend(`</div>
                <a href="#"> IR al formulario </a>
                <p style="height: 200px"></p>
                </div>`);

$('a').click((evento) => {
    evento.preventDefault();
    $('html, body').animate({
        scrollTop: $("#support").offset().top
    }, 2000);
});

let myButtonsLogin = $("button");//document.getElementsByTagName("button");

// Primero defino una funcion
function myButtonClicked(parametro) {
    console.log("Boton clickeado");
    console.dir(parametro);
}

function myButtonMouseMove() {
    console.log("Boton Mouse move");
}

// luego gestiono los eventos
// Con Event Listener
//myButtonLogin.addEventListener("click", myButtonClicked);

// Asigne a todos los botones la misma funcion
for (const button of myButtonsLogin) {
    $(button).click(myButtonClicked);
    $(button).on("mousemove", myButtonMouseMove);
    //button.addEventListener("click", myButtonClicked);
    //button.addEventListener("mousemove", myButtonMouseMove);
}


let limpiar = $("#clean");

limpiar.click(() => {
    let lista = $("#myCarrito");
    // Esto es removeChild pero no es jQuery
    //lista.parentNode.removeChild(lista)

    // En cambio lo vamos a esconder en 1500 ms
    // lista.hide(1500);

    // 2da opcion, lo escondo en 1500 ms y lo muestro al final.
    lista.hide(1500, () => lista.show(1000));

    console.log("Voy a limpiar el carrito")
});


// Ahora Arroy function
//myButtonLogin.onclick = (parametro) => console.log("Boton clickeado" + parametro);


/////////////////////////////////////////////////
// Ahora capturamos input del usuario
let myNewUserInput = $("#usuario");

myNewUserInput.onkeydown = () => console.log("tecla presionada");
myNewUserInput.onkeyup = () => console.log("se dejo presionar tecla")



/////////////////////////////////////////////////////
// Capturo texto del form y lo mandamos al textarea
let myForm = $("#support");
let mySupportInput = $("#supportInput");
let mySupportChat = $("#supportChat");

// Proxima clase vemos eventos con jQuery
//myForm.addEventListener("submit", sendChatText);
myForm.submit(sendChatText);

function sendChatText(evento) {
    // Como se que es un evento submit... prevengo/evito el comportamiento default
    // Que es volver a cargar la pagina
    evento.preventDefault();
    console.dir(mySupportInput);
    console.log("Enviando" + mySupportInput.val());
    mySupportChat.text(mySupportChat.text() + mySupportInput.val())
    mySupportInput.val("");

    //recorro todos los childen del evento.target
    let formulario = evento.target;
    for (const child of formulario.children) {
        console.log(child)
    }


}

$(document).ready(() => {
    $(".btnProducto").click((e) => {
        console.log(e.target);
    });
});


export default {}
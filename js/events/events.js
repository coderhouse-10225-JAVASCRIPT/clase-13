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

limpiar.onclick = () => {
    let lista = $("#myCarrito");
    lista.parentNode.removeChild(lista)
    console.log("Voy a limpiar el carrito")
};


// Ahora Arroy function
//myButtonLogin.onclick = (parametro) => console.log("Boton clickeado" + parametro);


/////////////////////////////////////////////////
// Ahora capturamos input del usuario
let myNewUserInput = $("#usuario");

myNewUserInput.onkeydown = () => console.log("tecla presionada");
myNewUserInput.onkeyup =  () => console.log("se dejo presionar tecla")



/////////////////////////////////////////////////////
// Capturo texto del form y lo mandamos al textarea
let myForm = $("#support");
let mySupportInput = $("#supportInput");
let mySupportChat = $("#supportChat");

// Proxima clase vemos eventos con jQuery
//myForm.addEventListener("submit", sendChatText);
myForm.submit(sendChatText);

function sendChatText(evento){
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
    $(".btnProducto").click((e)=>{
        console.log(e.target);
    });
});


export default {}
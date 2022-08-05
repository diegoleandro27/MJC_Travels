// Funcionalidad para la barra de navegacion y los botonos que conlleva 

let navbar = document.querySelector('.navbar')
let login = document.querySelector('.login-form')
let signUp = document.querySelector('.signup-form')


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    login.classList.remove('active');
    signUp.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
    navbar.classList.remove('active');
    signUp.classList.remove('active');
}

document.querySelector('#create').onclick = () => {
    signUp.classList.toggle('active');
    login.classList.remove('active');
}

document.querySelector('#login-back').onclick = () => {
    login.classList.toggle('active');
    signUp.classList.remove('active');
}


Window.onscroll = () => {
    navbar.classList.remove('active');
    login.classList.remove('active');
    signUp.classList.remove('active');
}


// Funcionalidad de tema oscuro

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
};

// funcionalidad y aspectos sobre la seccion de reviews

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 30,
    centerSlides: true,
    autoplay:{
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});

// Funcion para desplegar mensaje que pida codigo para entrar en la pagina de administrador

function adminCode(){
    var codeAdmin = prompt('Insert the administrator code'); 

    if(codeAdmin == "admin01"){
        alert("Access granted, Welcome Administrator");
        window.location.href = "administrator.html";
     }else{
        alert('Invalid code, try again');
        return null;
    }
}

// Funcion para desplegar un mensaje de envio correcto de comentario 

function confirmContacting(){
    confirm("Your comment has been sent successfully, Thanks for the feedback :) ");
    window.location.href = "home.html";
}

// Funcion de redireccionamiento de boton hacia pagina de tickets

function sendToTickets(){
    window.location.href = "tickets.html";
}

// Funcion de mensaje de añadido realizado correctamente 
function changeSaved(){
    confirm("Changes have been made correctly");
    window.location.href = "administrator.html"
}
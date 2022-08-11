let cards = document.querySelector('.offers');
let checkout = document.querySelector('.container');
let boardingPass = document.querySelector('.boarding-pass') 

function openCheckOut(){ 
    document.querySelector('.container').classList.toggle('on');
    document.querySelector('.offers').classList.toggle('off');
}

function closeCheckOut(){
    checkout.classList.remove('on');
    boardingPass.classList.toggle('give');
}


document.getElementById("forms").addEventListener('submit', function(e){
    e.preventDefault(); 
})

document.querySelector('#proceedToBoard').onclick = () =>{
    boardingPass.classList.toggle('give'); 
    checkout.classList.remove('on');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
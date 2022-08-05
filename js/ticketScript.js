let cards = document.querySelector('.offers');
let checkout = document.querySelector('.container');
let boardingPass = document.querySelector('.boarding-pass') 


// let list = document.querySelectorAll('.btn');
// for (i=0; i<list.length; i++){
//     list[i].onclick = function(){
//     list[i].addEventListener('click', function(){
//         checkout.classList.toggle('on');
//     })
//     }
// }

function openCheckOut(){ 
    document.querySelector('.container').classList.toggle('on');
}

document.querySelector('#prueba').onclick = () => {
    checkout.classList.toggle('on');
    cards.classList.toggle('off');
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
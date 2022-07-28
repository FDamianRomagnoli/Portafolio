const btnNav = document.querySelector(".header__nav-button");
const menu = document.querySelector(".header__nav");
const btnNav1 = document.querySelector(".nav-sobremi");
const btnNav2 = document.querySelector(".nav-habilidades");
const btnNav3 = document.querySelector(".nav-portafolio");
const btnNav4 = document.querySelector(".nav-contacto");
let estado = false;

btnNav.addEventListener("click",() =>{
    estado = !estado;
    efectoMenu(estado);
});

function efectoMenu(b){
    if(b){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}

btnNav1.addEventListener("click",() =>{
    location.href = "#sobremi";
    estado = !estado;
    efectoMenu(estado);
});

btnNav2.addEventListener("click",() =>{
    location.href = "#habilidades";
    estado = !estado;
    efectoMenu(estado);
});

btnNav3.addEventListener("click",() =>{
    location.href = "#portafolio";
    estado = !estado;
    efectoMenu(estado);
});

btnNav4.addEventListener("click",() =>{
    location.href = "#contacto";
    estado = !estado;
    efectoMenu(estado);
});
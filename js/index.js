const btnNav1 = document.querySelector(".nav-sobremi");
const btnNav2 = document.querySelector(".nav-habilidades");
const btnNav3 = document.querySelector(".nav-portafolio");
const btnNav4 = document.querySelector(".nav-contacto");
const btnNav1_d = document.querySelector(".nav-sobremi-d");
const btnNav2_d = document.querySelector(".nav-habilidades-d");
const btnNav3_d = document.querySelector(".nav-portafolio-d");
const btnNav4_d = document.querySelector(".nav-contacto-d");
const btnDownloadPdf = document.querySelector(".portada-cv");
const pag = document.querySelector("main");

const btnLinkedin = document.querySelectorAll(".portada-redes-linkedin");
const btnGithub = document.querySelectorAll(".portada-redes-github");

const logoHeader = document.querySelector(".header__logo");

btnGithub.forEach(element => {
    element.addEventListener("click", () =>{
        setTimeout(()=>{
            visitarProyecto('https://github.com/FDamianRomagnoli');
            closeNavMobile();
        },800);
        
    });
});

btnLinkedin.forEach(element => {
    element.addEventListener("click", () =>{
        setTimeout(()=>{
            visitarProyecto('https://www.linkedin.com/in/francorm/');
            closeNavMobile();
        },800);
        
    });
});


logoHeader.addEventListener("click", goToIndex);

function goToIndex(){
    location.href = "#";
}

const mainPortafolio = document.querySelector(".main__portafolio");
let estado = false;


btnNav1.addEventListener("click",() =>{
    location.href = "#sobremi";
    closeNavMobile();
    opacityBody();
});

btnNav2.addEventListener("click",() =>{
    location.href = "#habilidades";
    closeNavMobile();
    opacityBody();
});

btnNav3.addEventListener("click",() =>{
    location.href = "#portafolio";
    closeNavMobile();
    opacityBody();
});

btnNav4.addEventListener("click",() =>{
    location.href = "#contacto";
    closeNavMobile();
    opacityBody();
});

function cerrarMenu(){

}

/* NAV DESKTOP */

btnNav1_d.addEventListener("click",() =>{
    location.href = "#sobremi";
    opacityBody();
    
});

btnNav2_d.addEventListener("click",() =>{
    location.href = "#habilidades";
    opacityBody();
});

btnNav3_d.addEventListener("click",() =>{
    location.href = "#portafolio";
    opacityBody();
});

btnNav4_d.addEventListener("click",() =>{
    location.href = "#contacto";
    opacityBody();
});

btnDownloadPdf.addEventListener("click", () =>{
    window.open('./CV.pdf',"_blank");
})

function opacityBody(){
    pag.style.animationName = "quiensoy";
    pag.style.animationDuration = "1.2s";
    setTimeout(() => {
        pag.style.animation = 'none';
    },1300);
}

function visitarProyecto(url){
    window.open(url,"_blank");
}


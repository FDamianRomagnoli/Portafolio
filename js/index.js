const btnNav = document.querySelector(".header__nav-button");
const menu = document.querySelector(".header__nav-mobile");
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
            estado = false;
            efectoMenu(estado);
        },800);
        
    });
});

btnLinkedin.forEach(element => {
    element.addEventListener("click", () =>{
        setTimeout(()=>{
            visitarProyecto('https://www.linkedin.com/in/francorm/');
            estado = false;
            efectoMenu(estado);
        },800);
        
    });
});


logoHeader.addEventListener("click", goToIndex);

function goToIndex(){
    location.href = "#";
}

const mainPortafolio = document.querySelector(".main__portafolio");
let estado = false;


btnNav.addEventListener("click",() =>{
    estado = !estado;
    efectoMenu(estado);
});

function efectoMenu(b){
    if(b){
        menu.style.right = "1px"
        animationButton(btnNav,"url(./img/bar-x.svg)");
        
    }else{
        menu.style.right = "-1000px"
        animationButton(btnNav,"url(./img/bar.svg)" )
    }
}

function animationButton(btn,url){
    btn.style.animationTimingFunction = 'lineal';
    btn.style.animation = 'navButton';
    btn.style.animationDuration = '.5s';
    setTimeout(()=>{
        btn.style.backgroundImage = url;
    },250);
    setTimeout(() =>{
        btn.style.animation = 'none';
    },500);
}

btnNav1.addEventListener("click",() =>{
    location.href = "#sobremi";
    estado = !estado;
    efectoMenu(estado);
    opacityBody();
});

btnNav2.addEventListener("click",() =>{
    location.href = "#habilidades";
    estado = !estado;
    efectoMenu(estado);
    opacityBody();
});

btnNav3.addEventListener("click",() =>{
    location.href = "#portafolio";
    estado = !estado;
    efectoMenu(estado);
    opacityBody();
});

btnNav4.addEventListener("click",() =>{
    location.href = "#contacto";
    estado = !estado;
    efectoMenu(estado);
    opacityBody();
});

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
    pag.style.animationDuration = "1.5s";
    setTimeout(() => {
        pag.style.animation = 'none';
    },1000);
}

function visitarProyecto(url){
    window.open(url,"_blank");
}


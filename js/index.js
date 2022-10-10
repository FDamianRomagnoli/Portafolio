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
let listID = ['sobremi','habilidades','portafolio','contacto','inicio'];

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


logoHeader.addEventListener("click", () => scrollGoTo(4));

function goToIndex(){
    location.href = "#";
}

const mainPortafolio = document.querySelector(".main__portafolio");
let estado = false;


btnNav1.addEventListener("click",() =>{
    scrollGoTo(0)
    closeNavMobile()
});

btnNav2.addEventListener("click",() =>{
    scrollGoTo(1)
    closeNavMobile()
});

btnNav3.addEventListener("click",() =>{
    scrollGoTo(2)
    closeNavMobile()
});

btnNav4.addEventListener("click",() =>{
    scrollGoTo(3)
    closeNavMobile()
});

function cerrarMenu(){

}

/* NAV DESKTOP */

btnNav1_d.addEventListener("click", () => scrollGoTo(0));

btnNav2_d.addEventListener("click", () => scrollGoTo(1));

btnNav3_d.addEventListener("click", () => scrollGoTo(2));

btnNav4_d.addEventListener("click", () => scrollGoTo(3));

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

function scrollGoTo(index){
    let positionElement = document.getElementById(listID[index]).getBoundingClientRect().top
    positionElement = index === 4 ? positionElement - 70 : positionElement 
    scrollBy({
        top: positionElement,
        behavior: "smooth"
    })
}

particlesJS({
  "particles": {
    "number": {
      "value": 52,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})
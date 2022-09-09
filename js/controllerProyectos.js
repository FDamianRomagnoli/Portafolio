btnAtras = document.querySelectorAll(".btnAtras");
btnSiguiente = document.querySelectorAll(".btnSiguiente");
counter = document.querySelector(".portafolio-counter");
counterTitle = document.querySelector(".portafolio-counter-title");



function main(){
    selectCard(1);
}



function selectCard(num){

    fetch('./json/portafolio.json')
        .then(response => {
            return response.json();
        })
        .then(jsondata => {

            tamanioJSON = jsondata.length;
            counter.innerHTML =  num + " de " + tamanioJSON;
            counterTitle.innerHTML =  "(" + num + " de " + tamanioJSON + ")";
            updateCard(jsondata[num-1]);

            btnAtras.forEach(btn => {
                btn.addEventListener("click", () => {
                    num = num == 1 ? 1 : num - 1;
                    counter.innerHTML =  num + " de " + tamanioJSON;
                    counterTitle.innerHTML =  "   (" + num + " de " + tamanioJSON + ")";
                    updateCard(jsondata[num-1]);
                })
            });

            btnSiguiente.forEach(btn => {
                btn.addEventListener("click", () => {
                    num = num < tamanioJSON ? num + 1 : num;
                    counter.innerHTML =  num + " de " + tamanioJSON;
                    counterTitle.innerHTML = "   (" + num + " de " + tamanioJSON + ")";
                    updateCard(jsondata[num-1]);
                })
            });
        
            
        });

}

function updateCard(obj){
    let card = document.querySelector("proyect-card");
    card.setAttribute("nombre",obj["name"]);
    card.setAttribute("imagen",obj["imagen"]);
    card.setAttribute("url",obj["url"]);
    card.setAttribute("descripcion",obj["descripcion"]);
    card.setAttribute("produccion",obj["produccion"]);
    card.setAttribute("herramientas",obj["herramientas"]);

}

main();
btnAtras = document.querySelector(".btnAtras");
btnSiguiente = document.querySelector(".btnSiguiente");
counter = document.querySelector(".portafolio-counter");



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

            btnAtras.addEventListener("click", () => {
                num = num == 1 ? 1 : num - 1;
                counter.innerHTML =  num + " de " + tamanioJSON;
            })
        
            btnSiguiente.addEventListener("click", () => {
                num = num < tamanioJSON ? num + 1 : num;
                counter.innerHTML =  num + " de " + tamanioJSON;
            })
        });

}



main();
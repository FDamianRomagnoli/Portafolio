let container = document.querySelector(".habilidades-container");


function main(){

    document.onreadystatechange = () => {
        if (document.readyState === 'interactive') {
            fetch('./json/habilidad.json')
                .then(response => {return response.json();})
                .then(myJson => {
                    let code = "";
                    myJson.forEach(element => {
                        code = code + `
                            <skill-card nombre="${element["name"]}" imagen="${element["url"]}"
                            descripcion="${element["descripcion"]}" nivel="${element["nivel"]}">
                            </skill-card>
                        `;
                    });
                    container.innerHTML = code;
                })
            }
        }

}





main();
class skillCard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes() {
        return ["nombre","nivel","descripcion","imagen"];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "nombre") {
          this.nombre = newVal;
        }
        if (attr === "nivel") {
            this.nivel = newVal;
          }
        if (attr === "imagen") {
          this.imagen = newVal;
        }
        if (attr === "descripcion") {
          this.descripcion = newVal;
        }

      }

    getTemplate(){
        const template = document.createElement("TEMPLATE");

        template.innerHTML = `
            <div class="card-container">
                <div class="logo-container">
                    <span class="logo"></span>
                </div>
                <div class="info-container">
                    <h2 class="card-title">${this.nombre}</h2>
                    <p class="card-description">${this.descripcion}</p>
                    <p class="card-level"><b>Mi nivel: </b>${this.nivel}</p>
                </div>
            </div>

            <style>
                ${this.getStyle()}
            </style>

        `;
        return template;
    }

    getStyle(){
        return `

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .card-container{
                background-color: #252525;
                box-shadow: 0px 4px 4px rgb(0, 0, 0);
                color: #E8E8E8;
                display: grid;
                padding: 20px 0;
                margin: 0px auto;
                height: 330px;
                width: 240px;
            }

            .logo-container{
                display: flex;
                justify-content: center;
            }

            .logo{
                display: inline-block;
                width: 101px;
                height : 109px;
                background-image: url(${this.imagen});
                background-repeat: no-repeat;
                background-size: contain;
            }

            .info-container{
                display: flex;
                position: relative;
                flex-direction: column;
                gap: 7px;
                padding: 0px 15px;
            }

            .card-title{
                text-align: center;
                font-weight: 600;
                font-size: 20px;
                width: fit-content;
                align-self: center;
                border-bottom: 1.5px solid #E8E8E8;
                letter-spacing: 1.5px;
            }

            .card-description,.card-level{
                font-weight: 400;
                font-size: 15px;
                line-height: 16px;
                letter-spacing: 0.05em;
            }

            .card-description{
                display: flex;
                flex-direction: column;
                height: 80px;
                justify-content: center;
            }

            .card-level{
                position: absolute;
                bottom: 0px;
            }

            @media (min-width: 380px){
                .card-container{
                    padding: 20px 0;
                    height: 200px;
                    width: 350px;
                    grid-template-columns: 150px 200px;
                    margin: 0px 0px;
                }
                .logo-container{
                    align-self: center;
                }
            }

            @media (min-width: 700px){
                .card-container{
                    transform: scale(1.1);
                }
            }

            @media (min-width: 800px){
                .card-container{
                    transform: scale(1);
                }
            }


        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        this.shadowRoot.innerHTML = "";
    }

}

customElements.define("skill-card", skillCard);
class proyectCard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes() {
        return ["nombre","imagen","descripcion","produccion","herramientas","url"];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "nombre") {
          this.nombre = newVal;
        }
        if (attr === "imagen") {
          this.imagen = newVal;
        }
        if (attr === "descripcion") {
          this.descripcion = newVal;
        }
        if (attr === "produccion") {
          this.produccion = newVal;
        }
        if (attr === "herramientas") {
          this.herramientas = newVal;
        }
        if (attr === "url") {
            this.url = newVal;
          }
        this.disconnectedCallback();
        this.connectedCallback();
      }

    getTemplate(){
        const template = document.createElement("TEMPLATE");

        template.innerHTML = `
            <article class="proyect-card">
                <h3>${this.nombre}</h3>
                <a href="${this.url}" target="_blank"></a>
                <p class="name"><b>Nombre del proyecto: </b>${this.nombre}</p>
                <p class="herramientas"><b>Tecnologías utilizadas: </b>${this.herramientas}</p>
                <p class="produccion"><b>Producido en: </b>${this.produccion}</p>
                <p class="descripcion"><b>Descripción: </b>${this.descripcion}</p>
            </article>

            <style>
                ${this.getStyle()}
            </style>

        `;
        return template;
    }

    getStyle(){
        return `
            .proyect-card{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0 auto;
                max-width: 361px;
                height: 550px;
            }

            .name{
                display: none;
            }

            a{
                background-image: url(${this.imagen});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                height: 215px;
                max-width: 350px;
                border: 2px solid #000;
                margin: 20px 0;
                filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.7));
                border-radius: 5px;
            }

            .proyect-card h3{
                margin: 0 auto;
                width: fit-content;
                text-align: center;
                font-size: min(8vw,36px);
                font-weight: 300;
                border-bottom: 1px solid #000; 
            }

            p{
                font-size: 15px;
            }

            @media (min-width: 500px){
                .proyect-card{
                    max-width: 500px;
                    height: 650px;
                }

                a{
                    max-width: 500px;
                    height: 270px;
                }

                p{
                    font-size: 18px;
                }
            }

            @media (min-width: 550px){

                a{
                    height: 300px;
                }

            }

            @media (min-width: 570px){

                a{
                    height: 350px;
                }

                p{
                    font-size: 19px;
                }

            }

            @media (min-width: 1200px){
                h3{
                    display: none;
                }
                .name{
                    display: inline-block;
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

customElements.define("proyect-card", proyectCard);
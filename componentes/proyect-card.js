class proyectCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes() {
        return ["title","description","image"];
    }

    attributeChangedCallback(atributo, valorAntiguo, valorNuevo) {
        if (valorAntiguo !== valorNuevo) {
            this[atributo] = valorNuevo;
        }
    }

    getTemplate(){
        const template = document.createElement("TEMPLATE");

        template.innerHTML = `
            <a class="proyect-card" href="#contacto">

                <div class="proyect-card__front">
                    <h2>${this.title}</h2>
                </div>

                <div class="proyect-card__description">
                    <p>${this.description}</p>
                </div>

            </a>

            <style>
                ${this.getStyle()}
            </style>

        `;
        return template;
    }

    getStyle(){
        return `

        *{
            margin: 0;
            padding: 0;
            box-sizing:border-box;
        }


        div{
            width: 80%;
            height: 600px;
        }

        .proyect-card__front{
            height: 40%;
        }
        
        .proyect-card__description{
            height: 60%;
        }

        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }

}

customElements.define("proyect-card", proyectCard);
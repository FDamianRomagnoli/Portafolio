class proyectCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes() {
        return ["title","description","image","url"];
    }

    attributeChangedCallback(atributo, valorAntiguo, valorNuevo) {
        if (valorAntiguo !== valorNuevo) {
            this[atributo] = valorNuevo;
        }
    }

    getTemplate(){
        const template = document.createElement("TEMPLATE");

        template.innerHTML = `
            <article class="proyect-card">

                <div class="proyect-card__front">
                    <h2>${this.title}</h2>
                </div>

                <div class="proyect-card__description">
                    <p>${this.description}</p>
                    <button class="proyect-card__button" onclick="visitarProyecto('${this.url}')">Visitar</button>
                </div>

            </article>

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

        :host{
            max-width:300px;
        }


        .proyect-card{
            width: 100%;
            height: 420px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }

        .proyect-card__front{
            height: 45%;
            background: black;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        
        .proyect-card__description{
            height: 60%;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
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
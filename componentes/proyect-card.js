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
            <div class="proyect-card>

                <div class="proyect-card__front>

                </div>

                <div class="proyect-card__description>
                
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
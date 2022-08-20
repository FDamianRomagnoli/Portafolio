class barCircle extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes() {
        return ["percentage"];
    }

    attributeChangedCallback(atributo, valorAntiguo, valorNuevo) {
        if (valorAntiguo !== valorNuevo) {
            this[atributo] = valorNuevo;
        }
    }

    getTemplate(){
        const template = document.createElement("TEMPLATE");

        template.innerHTML = `
            <div class="circle">
                <div class="circle-fill">${this.percentage}%</div>
            </div>

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

        .circle{
            margin: 0px auto;
            width: 200px;
            height: 200px;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.78));
            background: conic-gradient(#AB2E2E ${(this.percentage * 360 / 100)}deg, #f2f2f2 0deg)
        }

        .circle-fill{
            background-color: #222;
            width: 85%;
            height: 85%;
            border-radius: 100px;
            text-align: center;
            padding-top: 30%;
            font-size: 40px;
            color: #f2f2f2;
            font-family: 'Inter';
            filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.78));
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

customElements.define("bar-circle", barCircle);
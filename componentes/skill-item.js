class skillItem extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes() {
        return ["steel","percentage"];
    }

    attributeChangedCallback(atributo, valorAntiguo, valorNuevo) {
        if (valorAntiguo !== valorNuevo) {
            this[atributo] = valorNuevo;
        }
    }

    getTemplate(){
        const template = document.createElement("TEMPLATE");

        template.innerHTML = `
            <div class="skill">
                <p class="skill-name">
                    ${this.steel}
                </p>
                <div class="skill-bar">
                    <span class="skill-p">${this.percentage}%</span>
                    <div class="skill-bar_fill"></div>
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
        *{
            margin: 0;
            padding: 0;
            box-sizing:border-box;
        }

        .skill-name{
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.64) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;  
            letter-spacing: 1.8px;
            margin-bottom: 4px;
            max-width: 135px;
        }

        .skill-bar{
            position: relative;
            width: 100%;
            height: 14px;
            background-color: #F4F4F4;
            box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.35);
        }

        .skill-bar_fill{
            position: absolute;
            left: 0;
            background-color: #AB2E2E;
            border: 1px solid #AB2E2E;
            height: 14px;
            width: ${this.percentage}%;
        }

        .skill-p{
            width: 33px;
            height: 53px;
            position: absolute;
            left: calc( ${this.percentage}% - 33px );
            top: -32px;
            background-image: url('src/skill_p.svg');
            background-size: contain;
            background-repeat: no-repeat;
            font-size: 12px;
            font-weight: 800;
            text-align: center;
            padding-top: 3.3px;
            text-shadow: .2px 0px 0px #222;
            color: #222;

        }

        @media (min-width: 280px){
            .skill-name{
                font-size: calc(3vw + 2vmin);
                letter-spacing: 1px;
            }
        }

        @media (min-width: 320px){
            .skill-name{
                font-size: 16px;
            }
        }

        @media (min-width: 500px){
            .skill-name{
                max-width: none;
            }
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

customElements.define("skill-item", skillItem);
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
                <p class="skill-steel">${this.steel}</p>
                <div class= "skill-bar">
                    <div class= "skill-bar__percentage"> </div>
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

        :host{
            min-width: 200px;
            height: 30px;
        }

        .skill{
            display: flex;
        }

        .skill-steel{
            display: inline-block;
            height: 30px;
            width: 25%;
            font-weight: 800;
            text-align: center;
            vertical-align: middle;
            font-family: 'Raleway', sans-serif;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.86) 0%, rgba(0, 0, 0, 0.48) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 15px;
            padding-top: 4px;
        }

        .skill-bar{
            justify-self: flex-end;
            display: inline-block;
            margin-left: 5px;
            width: 60%;
            min-width: 70px;
            height: 25px;
            border-radius: 5px;
            box-shadow: 0px 2px 5px .2px rgba(0,0,0,.9);
            background-color: #ECECEC;
        }

        .skill-bar__percentage{
            width: ${this.percentage}%;
            background: linear-gradient(90deg, #5182A6 0%, rgba(81, 130, 166, 0.53) 100%);
            height: 100%;
            border-radius: 5px 0px 0px 5px;
        }

        @media (min-width: 300px){
            .skill-steel{
                font-size: 20px;
                padding-top: 6.5px;
            }

            .skill-bar{
                height: 35px;
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
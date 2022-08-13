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
                    <div class="card-opacity"></div>
                    <h2>${this.title}</h2>
                </div>

                <div class="proyect-card__description">
                    <p>${this.description}</p>
                    <button class="proyect-card__button" onclick="visitarProyecto('${this.url}')">VISITAR</button>
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
            display: flex;
            justify-content: center;
        }


        .proyect-card{
            width: 100%;
            max-width: 320px;
            height: 380px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
        }

        .proyect-card__front{
            position: relative;
            height: 45%;
            background: black;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-image: url('${this.image}');
            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: 0px 1px 4px #000000;
        }

        .card-opacity{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: rgba(0,0,0,.5);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .proyect-card__front h2{
            font-style: normal;
            font-weight: 500;
            text-shadow: 1px 1px 2px #FFF;
            line-height: 28px;
            position: relative;
            text-align: center;
            top: calc( 50% - 10px );
            color: #FFFFFF;
            font-size: 20px;
            z-index: 2;
        }
        
        .proyect-card__description{
            position: relative;
            height: 55%;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            padding: 20px;
        }

        .proyect-card__description p{
            font-size: 14px;
            font-weight: 500;
            color: #000;
        }

        .proyect-card__button{
            position: absolute;
            left: calc( 50% - 75px );
            bottom: 10px;
            background: #0E0E0E;
            border-radius: 20px;
            outline: none;
            height: 35px;
            width: 150px;
            border: none;
            color: #FFFFFF;
            box-shadow: 0px 0px 4px 0px #000;
            font-family: 'Raleway';
            font-size: 15px;
            font-weight: 700;
        }

        @media (min-width: 310px){
            .proyect-card{
                height: calc( 80vw * 1.5 );
                max-height: 490px;
            }
        }

        @media (min-width: 330px){

            .proyect-card__description p{
                font-size: 16px;
            }
        }

        @media (min-width: 370px){

            .proyect-card__description p{
                font-size: 18px;
            }

            .proyect-card__front h2{
                position: relative;
                text-align: center;
                top: calc( 50% - 15px );
                color: #FFFFFF;
                font-size: 25px;
            }            
        }

        @media (min-width: 700px){
            :host{
                display: inline-block;
                width: 320px;
            }
        }
        @media (min-width: 1000px){
            :host{
                width: 400px;
                height: 600px;
            }

            .proyect-card{
                max-height: 600px;
                max-width: 400px;
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

customElements.define("proyect-card", proyectCard);
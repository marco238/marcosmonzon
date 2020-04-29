import { html, css, LitElement } from 'lit-element';

import { SharedStyles } from '../../assets/sharedStyles';

class MainView extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          width: calc(98vw - var(--nav-bar-width));
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
        }

        .presentation-text {
          margin-top: -50px;
          margin-right: 50px;
          margin-left: 50px;
          animation: falling 0.5s ease;
        }

        .presentation-text p {
          font-size: 46px;
          margin: 0 0 15px 0;
        }

        .presentation-text h1 {
          font-family: 'Playfair Display', serif;
          font-size: 62px;
          width: 380px;
          margin: 0 0 20px 0;
          line-height: 62px;
        }

        .presentation-text .description {
          display: block;
          font-size: 28px;
          width: 300px;
        }

        .presentation-buttons button, .presentation-buttons #hire-me {
          position: relative;
          font-size: 14px;
          margin: 20px 20px 0 0;
          cursor: pointer;
          transition: all 0.1s ease;
          border-radius: 0 0 10px 0;
        }

        .presentation-buttons button:hover, .presentation-buttons #hire-me:hover {
          box-shadow: 0 0 10px var(--app-blue-color);
        }
        
        .presentation-buttons button:focus { 
          outline: none;
        }
        
        .presentation-buttons #hire-me {
          background-color: var(--app-blue-color);
          border: 1px solid var(--app-blue-color);
          color: var(--app-grey-color);
          padding: 10px 20px;
          font-weight: 700;
          text-decoration: none;
        }
        
        .presentation-buttons button {
          background-color: transparent;
          border: 1px solid var(--app-blue-color);
          color: var(--app-blue-color);
          padding: 10px 15px;
        }
        
        .presentation-buttons #hire-me span {
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: -7px;
          right: -7px;
          background-color: var(--app-grey-color);
          border-top: 1px solid var(--app-grey-color);
          transform: rotate(-45deg);
        }
        
        .presentation-buttons button span {
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: -6px;
          right: -6px;
          background-color: var(--app-grey-color);
          border-top: 1px solid var(--app-blue-color);
          transform: rotate(-45deg);
        }

        .feathers {
          position: relative;
          width: 500px;
          height: 400px;
          animation: fadeIn 1s ease-in;
        }

        img:first-child {
          position: absolute;
          width: 500px;
          transform: rotate(-30deg);
          z-index: 1;
        }

        img:nth-child(2) {
          position: absolute;
          width: 220px;
          transform: translate(40px, -50px) scaleX(-1);
          filter: blur(5px);
        }

        img:last-child {
          position: absolute;
          width: 550px;
          transform: rotate(-60deg) translate(0px, 100px);
          filter: blur(2px);
        }
      `
    ];
  }

  static get properties() {
    return {
      name: {type: String},
      job: {type: String},
      mail: {type: String}
    };
  }

  constructor() {
    super();
    this.name = 'MARCOS A. MONZÓN';
    this.job = 'Frontend Web Developer';
    this.mail = 'marcomonzip@gmail.com';
  }

  render() {
    return html`
      <div class="presentation-text">
        <p>I am,</p>
        <h1>${this.name}</h1>
        <span class="description"> => ${this.job}</span>
        <div class="presentation-buttons">
          <a id="hire-me" href="mailto:${this.mail}?Subject=Quiero%20contar%20con%20tus%20servicios">HIRE ME</a>
          <a id="download-resume" @click="${this._downloadResume}">
            <button>DOWNLOAD RESUME</button>
          </a>
        </div>
      </div>
      <div class="feathers">
        <img src="assets/images/feather-image.png" alt="Feather">
        <img src="assets/images/feather-image.png" alt="Feather">
        <img src="assets/images/feather-image.png" alt="Feather">
      </div>
    `;
  }

  _downloadResume() {
    fetch('https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588150941/M.pdf')
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = "Marcos_Monzon.pdf";
        a.click();    
      })
  }
}

customElements.define('main-view', MainView);
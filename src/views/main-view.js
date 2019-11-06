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

        .presentation-buttons button, .presentation-buttons a {
          position: relative;
          font-size: 14px;
          margin: 20px 20px 0 0;
          cursor: pointer;
          transition: all 0.1s ease;
          border-radius: 0 0 10px 0;
        }

        .presentation-buttons button:hover, .presentation-buttons a:hover {
          box-shadow: 0 0 10px var(--app-blue-color);
        }
        
        .presentation-buttons button:focus { 
          outline: none;
        }
        
        .presentation-buttons a {
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
        
        .presentation-buttons a span {
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
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="presentation-text">
        <p>I am,</p>
        <h1>MARCOS A. MONZÓN</h1>
        <span class="description"> => Frontend Web Developer</span>
        <div class="presentation-buttons">
          <a href="mailto:marcomonzip@gmail.com?Subject=Quiero%20contar%20con%20tus%20servicios">HIRE ME</a>
          <button>DOWNLOAD RESUME</button>
        </div>
      </div>
      <div class="feathers">
        <img src="../../assets/images/feather-image.png" alt="Feather">
        <img src="../../assets/images/feather-image.png" alt="Feather">
        <img src="../../assets/images/feather-image.png" alt="Feather">
      </div>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define('main-view', MainView);
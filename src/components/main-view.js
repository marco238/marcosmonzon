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
        }

        .presentation-text p {
          font-size: 50px;
          margin: 0 0 20px 0;
        }

        .presentation-text h1 {
          font-size: 68px;
          width: 380px;
          margin: 0 0 20px 0;
          line-height: 60px;
        }

        .presentation-text .description {
          display: block;
          font-size: 32px;
          width: 300px;
        }

        .presentation-text button {
          position: relative;
          font-size: 14px;
          margin: 20px 20px 0 0;
          border: none;
        }

        
        .presentation-text button:first-child {
          background-color: var(--app-blue-color);
          color: var(--app-grey-color);
          padding: 10px 20px;
        }
        
        .presentation-text button:last-child {
          background-color: transparent;
          border: 1px solid var(--app-blue-color);
          color: var(--app-blue-color);
          padding: 10px 15px;
        }
        
        .presentation-text button:first-child span {
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: -6px;
          right: -6px;
          background-color: var(--app-grey-color);
          border-top: 1px solid var(--app-grey-color);
          transform: rotate(-45deg);
        }
        
        .presentation-text button:last-child span {
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
        <span class="description">I'm a Frontend Web Developer</span>
        <div class="presentation-buttons">
          <button>HIRE ME <span></span></button>
          <button>DOWNLOAD RESUME <span></span></button>
        </div>
      </div>
      <div class="feathers">
        <img src="../../assets/images/feather-image.png" alt="Lion Image">
        <img src="../../assets/images/feather-image.png" alt="Lion Image">
        <img src="../../assets/images/feather-image.png" alt="Lion Image">
      </div>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define('main-view', MainView);
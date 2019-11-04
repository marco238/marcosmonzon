import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../assets/sharedStyles';

class CardElement  extends LitElement {

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          position: relative;
          width: 250px;
          height: 370px;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 5px 5px 20px #00000058;
        }

        .card-container {
          background-size: 100%;
          filter: grayscale(0.3);
          width: 100%;
          height: 100%;
        }
        
        img {
          width: 100%;
        }

        .card-info {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-height: 85px;
          justify-content: space-between;
          color: #737373;
        }

        .card-info h2 {
          margin: 0 0 10px 0;
        }

        .card-info p {
          margin: 0 0 10px 0;
          font-size: 12px;
          height: 45px;
          overflow: hidden;
        }

        .tech-logos {
          display: flex;
          position: absolute;
          bottom: -35px;
        }

        .logo {
          width: 25px;
          height: 25px;
          margin-right: 3px;
          background-repeat: no-repeat;
          background-position: center;
        }

        .card-info a {
          position: absolute;
          bottom: -37px;
          right: 0;
          padding: 8px 10px;
          border-radius: 20px;
          font-size: 10px;
          background-color: transparent;
          border: 1px solid var(--app-grey-color);
          color: var(--app-grey-color);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.1s ease;
        }

        .card-info a:hover {
          background-color: var(--app-grey-color);
          color: #ffffff;
        }

        .card-info a:focus {
          outline: none;
        }
      `
    ];
  }

  static get properties() {
    return {
      title: {type: String},
      description: {type: String},
      backgroundImage: {type: String},
      icons: {type: Array},
      redirectUrl: {type: String}
    };
  }

  constructor() {
    super();
    this.title = 'Title';
    this.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    this.backgroundImage = '';
    this.icons = [];
    this.redirectUrl = '#';
  }

  render() {
    return html`
      <div class="card-container" style="background-image: url(${this.backgroundImage})">
        <img src="../../../assets/images/cloudyShape.svg" alt="Cloudy Shape">
        <div class="card-info">
          <h2>${this.title}</h2>
          <p>${this.description}</p>
          <div class="tech-logos">
            ${this._generateIcons()}
          </div>
          <a href="${this.redirectUrl}" target="_blank">CHECK IT</a>
        </div>
      </div>
    `;
  }

  _generateIcons() {
    return this.icons.map((icon) => {
      return html`<img src="${icon}" class="logo">`;
    });
  }
}

// eslint-disable-next-line no-undef
customElements.define('card-element', CardElement);
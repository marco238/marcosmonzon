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
          animation: flipIn 0.5s ease;
        }
        
        .card-container {
          background-size: cover;
          filter: grayscale(0.3);
          background-repeat: no-repeat;
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
          margin: 5px 0 10px 0;
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
          max-width: 150px;
          overflow: hidden;
        }

        .logo {
          width: 22px;
          height: 22px;
          margin-right: 5px;
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

  firstUpdated() {
    const logoNode = this.shadowRoot.querySelectorAll('.logo');
    logoNode.forEach(node => node.addEventListener('mouseover', this._mouseOverHandler));
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
      return html`<img src="${icon.url}" class="logo" alt="${icon.alt}">`;
    });
  }

  _mouseOverHandler(event) {
    const detail = {
      alt: event.target.alt,
      top: event.screenX,
      left: event.screenY
    };
    this.dispatchEvent(new CustomEvent('showBadge', detail));
    console.log(event.screenX);
  }
}

// eslint-disable-next-line no-undef
customElements.define('card-element', CardElement);
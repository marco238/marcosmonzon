import { LitElement, html, css } from 'lit-element';

import { menuIcon } from '../../assets/icons';
import { SharedStyles } from '../../assets/sharedStyles';

class SocialMediaBar extends LitElement {

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          width: var(--nav-bar-width);
          height: 100vh;
          color: #ffffff50;
          position: absolute;
          left: 0;
          z-index: 10;
        }

        nav {
          --nav-padding: 22px;
          width: calc(var(--nav-bar-width) - var(--nav-padding) * 2);
          height: calc(100% - 2 * var(--nav-padding));
          background-color: var(--app-grey-color);
          box-shadow: 0 0 20px #13a6fb55;
          display: flex;
          flex-flow: column;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: var(--nav-padding);
          z-index: 10;
          transition: all 0.2s ease;
        }

        .menu-button {
          cursor: pointer;
        }

        .social-media-text {
          font-size: 11px;
          writing-mode: vertical-rl;
          text-orientation: upright;
        }

        .social-links {
          height: 170px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .opened {
          width: 300px;
          align-items: flex-end;
        }

        @media screen and (max-width: 720px) {
          :host {
            display: none;
          }
        }
      `
    ];
  }

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <nav>
        <div class="menu-button" @click="${this._toogleBar}">
          ${menuIcon}
        </div>
        <span class="social-media-text">SOCIAL MEDIA</span>
        <div class="social-links">
          <a href="https://github.com/marco238" target="_blank">
            <img src="../../assets/images/github-logo.svg" width="34" alt="Github icon">
          </a>
          <a href="https://www.linkedin.com/in/marcomonzon/" target="_blank">
            <img src="../../assets/images/linkedin-logo.svg" width="30" alt="Linkedin icon">
          </a>
          <a href="mailto:marcomonzip@gmail.com?Subject=Vengo%20desde%20tu%20web">
            <img src="../../assets/images/email-logo.svg" width="30" alt="Email icon">
          </a>
          <a href="https://wa.me/692949758" target="_blank">
            <img src="../../assets/images/whatsapp-logo.svg" width="30" alt="Whatsapp icon">
          </a>
        </div>
      </nav>
    `;
  }

  _toogleBar() {
    const node = this.shadowRoot.querySelector('nav');
    node.classList.toggle('opened');
  }
}

// eslint-disable-next-line no-undef
customElements.define('social-media-bar', SocialMediaBar);
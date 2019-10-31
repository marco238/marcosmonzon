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
          background-color: var(--app-grey-color);
          box-shadow: 0 0 20px #13a6fb55;
          color: #ffffff50;
          float: left;
          margin-right: 20px;
        }

        nav {
          --nav-padding: 22px;
          display: flex;
          flex-flow: column;
          height: calc(100% - 2 * var(--nav-padding));
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: var(--nav-padding);
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
        <div class="menu-button">
          ${menuIcon}
        </div>
        <span class="social-media-text">SOCIAL MEDIA</span>
        <div class="social-links">
          <a href="https://github.com/marco238" target="_blank">
            <img src="../../assets/images/github-icon.png" width="34" alt="Github icon">
          </a>
          <a href="https://www.linkedin.com/in/marcomonzon/" target="_blank">
            <img src="../../assets/images/linkedin-icon.png" width="30" alt="Linkedin icon">
          </a>
          <a href="mailto:marcomonzip@gmail.com?Subject=Vengo%20desde%20tu%20web">
            <img src="../../assets/images/email-icon.png" width="30" alt="Email icon">
          </a>
          <a href="https://wa.me/692949758" target="_blank">
            <img src="../../assets/images/whatsapp-icon.png" width="30" alt="Whatsapp icon">
          </a>
        </div>
      </nav>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define('social-media-bar', SocialMediaBar);
import { LitElement, html, css } from 'lit-element';

import { menuIcon } from '../../assets/icons';

class NavBar extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        width: 70px;
        height: 100vh;
        background-color: #24262E;
        box-shadow: 0 0 40px #13A6FB;
        color: #ffffff50;
        float: left;
        margin-right: 20px;
      }

      nav {
        display: flex;
        flex-flow: column;
        height: calc(100% - 44px);
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 22px;
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
    `;
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
          <a href="">
            <img src="../../assets/github-icon.png" width="34" alt="Github icon">
          </a>
          <a href="">
            <img src="../../assets/linkedin-icon.png" width="30" alt="Linkedin icon">
          </a>
          <a href="">
            <img src="../../assets/email-icon.png" width="30" alt="Email icon">
          </a>
          <a href="">
            <img src="../../assets/whatsapp-icon.png" width="30" alt="Whatsapp icon">
          </a>
        </div>
      </nav>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define('nav-bar', NavBar);
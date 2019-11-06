import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../assets/sharedStyles';

class NavBar  extends LitElement {

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 70px;
        }

        nav {
          padding-right: 50px;
        }

        nav a {
          padding: 25px;
          margin: -25px 30px -25px -25px;
          text-decoration: none;
          color: #ffffff;
        }

        nav a[active] {
          color: var(--app-grey-color);
          background-image: url('../../assets/images/blue-splash.png');
          background-position-x: center;
          background-position-y: 45%;
          background-size: 90px;
          background-repeat: no-repeat;
          animation: fadeIn 0.5s ease;
        }
      `
    ];
  }

  static get properties() {
    return {
      path: { type: String }
    };
  }

  constructor() {
    super();
    this.path = location.pathname;
  }

  render() {
    return html`
      <nav>
        <a href="/home" ?active="${this.path === '/home' || this.path === '/'}" @click="${() => this._updatePath('/home')}">HOME</a>
        <a href="/work" ?active="${this.path === '/work'}" @click="${() => this._updatePath('/work')}">WORK</a>
        <a href="/about" ?active="${this.path === '/about'}" @click="${() => this._updatePath('/about')}">ABOUT</a>
        <a href="/contact" ?active="${this.path === '/contact'}" @click="${() => this._updatePath('/contact')}">CONTACT</a>
      </nav>
    `;
  }
  
  _updatePath(from) {
    this.path = from;
  }
}

// eslint-disable-next-line no-undef
customElements.define('nav-bar', NavBar);
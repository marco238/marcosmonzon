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
          margin-right: 30px;
          text-decoration: none;
          color: #ffffff;
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
      <nav>
        <a href="/home">HOME</a>
        <a href="/work">WORK</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
      </nav>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define('nav-bar', NavBar);
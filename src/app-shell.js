import { html, css, LitElement } from 'lit-element';

import './components/nav-bar';
import './components/social-media-bar';
import { initRouter } from './router';

class AppShell extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
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
      <social-media-bar></social-media-bar>
      <nav-bar></nav-bar>
      <main></main>
    `;
  }

  firstUpdated() {
    const node = this.shadowRoot.querySelector('main');
    initRouter(node);
  }
}

// eslint-disable-next-line no-undef
customElements.define('app-shell', AppShell);
import { html, css, LitElement } from 'lit-element';

import './components/nav-bar';
import './components/social-media-bar';
import { initRouter } from './router';
import { SharedStyles } from '../assets/sharedStyles';

class AppShell extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
          padding-left: var(--nav-bar-width);
        }
      `
    ];
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
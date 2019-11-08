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
        }

        .badge {
          position: absolute;
          font-size: 12px;
          color: #fff;
          background: linear-gradient(45deg, var(--app-grey-color), var(--app-blue-color));
          border-radius: 2px;
          padding: 2px 5px;
          z-index: 20;
          display: none;
        }

        @media screen and (min-width: 720px) {
          :host {
            padding-left: var(--nav-bar-width);
          }
        }
      `
    ];
  }

  firstUpdated() {
    const node = this.shadowRoot.querySelector('main');
    initRouter(node);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('showBadge', this._openBadge);
    this.addEventListener('hideBadge', this._hideBadge);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('showBadge', this._openBadge);
    this.removeEventListener('hideBadge', this._hideBadge);
  }

  render() {
    return html`
      <social-media-bar></social-media-bar>
      <nav-bar></nav-bar>
      <main></main>
      <span class="badge"></span>
    `;
  }

  _openBadge(e) {
    let badge = this.shadowRoot.querySelector('.badge');
    badge.textContent = e.detail.alt;
    badge.style.display = 'block';
    badge.style.top = `${e.detail.top}px`;
    badge.style.left = `${e.detail.left}px`;
  }

  _hideBadge() {
    let badge = this.shadowRoot.querySelector('.badge');
    badge.textContent = '';
    badge.style.display = 'none';
    badge.style.top = 0;
    badge.style.left = 0;
  }
}

// eslint-disable-next-line no-undef
customElements.define('app-shell', AppShell);
import { html, css, LitElement } from 'lit-element';

class MainView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <span>Main view works!</span>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define('main-view', MainView);
import { html, css, LitElement } from 'lit-element';

class AppShell extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        --app-shell-h1-color: teal;
      }

      h1 {
        color: --app-shell-h1-color;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'marcomonzon';
  }

  render() {
    return html`
      <h1>${this.title}</h1>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define('app-shell', AppShell);
import { LitElement, html, css } from "lit-element";

import { SharedStyles } from "../../assets/sharedStyles";

class View404 extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: #ffffff;
        }
      `,
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
      <h2>404 - Not found :(</h2>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define("view-404", View404);

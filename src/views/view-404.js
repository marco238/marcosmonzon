import { LitElement, html, css } from "lit-element";

import { SharedStyles } from "../../assets/sharedStyles";
import { notFoundIcon } from "../../assets/icons";

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

        .not-found-container {
          width: 700px;
          animation: fadeIn 0.5s ease-in;
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
      <div class="not-found-container">
        ${notFoundIcon}
      </div>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define("view-404", View404);

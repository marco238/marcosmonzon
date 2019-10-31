import { LitElement, html, css } from 'lit-element';

import './card-element';

import { SharedStyles } from '../../../assets/sharedStyles';

class WorkView  extends LitElement {

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
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
      <div class="work-container">
        <card-element></card-element>
      </div>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define('work-view', WorkView);
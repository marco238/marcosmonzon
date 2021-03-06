import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../assets/sharedStyles';

class AboutView  extends LitElement {

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
        }

        h2 {
          font-size: 36px;
          height: 100%;
          margin-bottom: 40px;
          color: var(--app-blue-color);
          animation: fromLeft 0.5s ease;
        }

        p {
          font-size: 20px;
          width: 480px;
          margin-top: 10px;
          letter-spacing: 1px;
          animation: fromRight 0.5s ease;
        }
      `
    ];
  }

  render() {
    return html`
      <div>
        <h2>About me</h2>
        <p>&nbsp;&nbsp;&nbsp;I studied Automatic Control Engineering, since then I love programming, specifically web development. Currently, I dedicate myself to "Frontend" with Javascript and it's definitely my thing. I've been working with technologies like React, Angular, Vue, LitElement & Polymer 3; in addition to many others a little more specific. I love studying new tech and if I had time I would master them all.</p>
      </div>
    `;
  }
}

customElements.define('about-view', AboutView);
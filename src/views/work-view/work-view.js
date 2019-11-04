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
    return {
      projects: {type: Array}
    };
  }

  constructor() {
    super();
    this.projects = [
      {
        title: 'Community',
        description: 'Community is a digital product to improve neighborhood coexistence.',
        backgroundImage: '../../../assets/images/community.png',
        icons: [],
        redirectUrl: 'https://ihcommunity.github.io/Community-web/',
      }
    ];
  }

  render() {
    return html`
      <div class="work-container">
        ${this._generateProjects()}
      </div>
    `;
  }

  _generateProjects() {
    return this.projects.map((project) => {
      return html`
        <card-element
          title="${project.title}"
          description="${project.description}"
          backgroundImage="${project.backgroundImage}"
          redirectUrl="${project.redirectUrl}">
        </card-element>
      `;
    });
  }
}

// eslint-disable-next-line no-undef
customElements.define('work-view', WorkView);
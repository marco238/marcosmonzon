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

        .work-container {
          width: 100%;
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
        icons: [
          '../../../assets/images/angular-logo.svg',
          '../../../assets/images/node-logo.svg',
          '../../../assets/images/firebase-logo.svg',
          '../../../assets/images/dialogflow-logo.svg',
          '../../../assets/images/mongodb-logo.svg'
        ],
        redirectUrl: 'https://ihcommunity.github.io/Community-web/',
      },
      {
        title: 'Memory Game',
        description: 'It is the classic memory game where you need to match 2 cards to keep them flipped. You win if you get to flip them all.',
        backgroundImage: '../../../assets/images/ironman.jpg',
        icons: [
          '../../../assets/images/jquery-logo.svg',
          '../../../assets/images/js-logo.svg'
        ],
        redirectUrl: 'https://marco238.github.io/memory-game/starter-code/memory.html',
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
          .icons=${project.icons}
          redirectUrl="${project.redirectUrl}">
        </card-element>
      `;
    });
  }
}

// eslint-disable-next-line no-undef
customElements.define('work-view', WorkView);
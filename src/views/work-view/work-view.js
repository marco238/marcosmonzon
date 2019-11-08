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
          max-height: 80%;
          min-width: 320px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 250px));
          /* grid-template-rows: 400px; */
          grid-gap: 30px;
          justify-content: center;
          padding: 30px;
        }

        card-element {
          box-shadow: 5px 5px 20px #00000058;
          transition: all 0.2s ease;
        }

        card-element:hover {
          box-shadow: 5px 5px 20px #0acafa1c;
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
          {url: '../../../assets/images/angular-logo.svg', alt: 'Angular'},
          {url: '../../../assets/images/node-logo.svg', alt: 'NodeJS'},
          {url: '../../../assets/images/firebase-logo.svg', alt: 'Firebase'},
          {url: '../../../assets/images/dialogflow-logo.svg', alt: 'Dialogflow'},
          {url: '../../../assets/images/mongodb-logo.svg', alt: 'MongoDB'}
        ],
        redirectUrl: 'https://ihcommunity.github.io/Community-web/',
      },
      {
        title: 'Memory Game',
        description: 'It is the classic memory game where you need to match 2 cards to keep them flipped. You win if you get to flip them all.',
        backgroundImage: '../../../assets/images/ironman.jpg',
        icons: [
          {url: '../../../assets/images/jquery-logo.svg', alt: 'jQuery'},
          {url: '../../../assets/images/js-logo.svg', alt: 'Javascript'}
        ],
        redirectUrl: 'https://marco238.github.io/memory-game/starter-code/memory.html',
      },
      {
        title: 'SmartUp Xperience',
        description: 'SmartUp Xperience is much more than a simple experience ... Here we will have the opportunity to develop your professional career and at the same time grow as a person in a technological and close environment. Do you want to know us more thoroughly? Be smart!',
        backgroundImage: '../../../assets/images/SmartUp-Xperience.png',
        icons: [
          {url: '../../../assets/images/polymer-logo.svg', alt: 'Polymer'},
          {url: '../../../assets/images/js-logo.svg', alt: 'Javascript'}
        ],
        redirectUrl: 'http://public-web.apps.12b5129e45db47179d12.westeurope.aksapp.io/home',
      },
      {
        title: 'Anything Finder',
        description: 'Very simple app to find your fav movies & series. LitElement, Rollup, CI/CD with TravisCI, Karma-Mocha-Chai, etc.',
        backgroundImage: '../../../assets/images/Anything-Finder.png',
        icons: [
          {url: '../../../assets/images/litelement-logo.svg', alt: 'LitElement'},
          {url: '../../../assets/images/js-logo.svg', alt: 'Javascript'}
        ],
        redirectUrl: 'https://marco238.github.io/anything-finder',
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
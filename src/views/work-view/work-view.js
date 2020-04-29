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
          box-shadow: none;
        }
      `
    ];
  }

  static get properties() {
    return {
      assetsBasePath: {type: String},
      projects: {type: Array}
    };
  }

  constructor() {
    super();
    this.assetsBasePath = 'https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588156329/marcomonzon';
    this.projects = [
      {
        title: 'Community',
        description: 'Community is a digital product to improve neighborhood coexistence.',
        backgroundImage: `${this.assetsBasePath}/community.png`,
        icons: [
          {url: `${this.assetsBasePath}/angular-logo.svg`, alt: 'Angular'},
          {url: `${this.assetsBasePath}/node-logo.svg`, alt: 'NodeJS'},
          {url: `${this.assetsBasePath}/firebase-logo.svg`, alt: 'Firebase'},
          {url: `${this.assetsBasePath}/dialogflow-logo.svg`, alt: 'Dialogflow'},
          {url: `${this.assetsBasePath}/mongodb-logo.svg`, alt: 'MongoDB'}
        ],
        redirectUrl: 'https://ihcommunity.github.io/Community-web/',
      },
      {
        title: 'Memory Game',
        description: 'It is the classic memory game where you need to match 2 cards to keep them flipped. You win if you get to flip them all.',
        backgroundImage: `${this.assetsBasePath}/ironman.jpg`,
        icons: [
          {url: `${this.assetsBasePath}/jquery-logo.svg`, alt: 'jQuery'},
          {url: `${this.assetsBasePath}/js-logo.svg`, alt: 'Javascript'}
        ],
        redirectUrl: 'https://marco238.github.io/memory-game/starter-code/memory.html',
      },
      {
        title: 'SmartUp Xperience',
        description: 'SmartUp Xperience is much more than a simple experience ... Here we will have the opportunity to develop your professional career and at the same time grow as a person in a technological and close environment. Do you want to know us more thoroughly? Be smart!',
        backgroundImage: `${this.assetsBasePath}/SmartUp-Xperience.png`,
        icons: [
          {url: `${this.assetsBasePath}/polymer-logo.svg`, alt: 'Polymer'},
          {url: `${this.assetsBasePath}/js-logo.svg`, alt: 'Javascript'}
        ],
        redirectUrl: 'http://public-web.apps.12b5129e45db47179d12.westeurope.aksapp.io/home',
      },
      {
        title: 'Anything Finder',
        description: 'Very simple app to find your fav movies & series. LitElement, Rollup, CI/CD with TravisCI, Karma-Mocha-Chai, etc.',
        backgroundImage: `${this.assetsBasePath}/Anything-Finder.png`,
        icons: [
          {url: `${this.assetsBasePath}/litelement-logo.svg`, alt: 'LitElement'},
          {url: `${this.assetsBasePath}/js-logo.svg`, alt: 'Javascript'}
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
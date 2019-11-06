import { L as LitElement, S as SharedStyles, c as css, h as html } from './sharedStyles-aab5eaaf.js';

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<img src=\"", "\" class=\"logo\">"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"card-container\" style=\"background-image: url(", ")\">\n        <img src=\"../../../assets/images/cloudyShape.svg\" alt=\"Cloudy Shape\">\n        <div class=\"card-info\">\n          <h2>", "</h2>\n          <p>", "</p>\n          <div class=\"tech-logos\">\n            ", "\n          </div>\n          <a href=\"", "\" target=\"_blank\">CHECK IT</a>\n        </div>\n      </div>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          position: relative;\n          width: 250px;\n          height: 370px;\n          border-radius: 25px;\n          overflow: hidden;\n          box-shadow: 5px 5px 20px #00000058;\n          margin: 10px 20px;\n          animation: flipIn 0.5s ease;\n        }\n        \n        .card-container {\n          background-size: cover;\n          filter: grayscale(0.3);\n          background-repeat: no-repeat;\n          width: 100%;\n          height: 100%;\n        }\n        \n        img {\n          width: 100%;\n        }\n\n        .card-info {\n          position: absolute;\n          bottom: 50px;\n          left: 50%;\n          transform: translateX(-50%);\n          width: 90%;\n          max-height: 85px;\n          justify-content: space-between;\n          color: #737373;\n        }\n\n        .card-info h2 {\n          margin: 5px 0 10px 0;\n        }\n\n        .card-info p {\n          margin: 0 0 10px 0;\n          font-size: 12px;\n          height: 45px;\n          overflow: hidden;\n        }\n\n        .tech-logos {\n          display: flex;\n          position: absolute;\n          bottom: -35px;\n          max-width: 150px;\n          overflow: hidden;\n        }\n\n        .logo {\n          width: 22px;\n          height: 22px;\n          margin-right: 5px;\n          background-repeat: no-repeat;\n          background-position: center;\n        }\n\n        .card-info a {\n          position: absolute;\n          bottom: -37px;\n          right: 0;\n          padding: 8px 10px;\n          border-radius: 20px;\n          font-size: 10px;\n          background-color: transparent;\n          border: 1px solid var(--app-grey-color);\n          color: var(--app-grey-color);\n          cursor: pointer;\n          text-decoration: none;\n          transition: all 0.1s ease;\n        }\n\n        .card-info a:hover {\n          background-color: var(--app-grey-color);\n          color: #ffffff;\n        }\n\n        .card-info a:focus {\n          outline: none;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

class CardElement extends LitElement {
  static get styles() {
    return [SharedStyles, css(_templateObject())];
  }

  static get properties() {
    return {
      title: {
        type: String
      },
      description: {
        type: String
      },
      backgroundImage: {
        type: String
      },
      icons: {
        type: Array
      },
      redirectUrl: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.title = 'Title';
    this.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    this.backgroundImage = '';
    this.icons = [];
    this.redirectUrl = '#';
  }

  render() {
    return html(_templateObject2(), this.backgroundImage, this.title, this.description, this._generateIcons(), this.redirectUrl);
  }

  _generateIcons() {
    return this.icons.map(icon => {
      return html(_templateObject3(), icon);
    });
  }

} // eslint-disable-next-line no-undef


customElements.define('card-element', CardElement);

function _templateObject3$1() {
  var data = _taggedTemplateLiteral$1(["\n        <card-element\n          title=\"", "\"\n          description=\"", "\"\n          backgroundImage=\"", "\"\n          .icons=", "\n          redirectUrl=\"", "\">\n        </card-element>\n      "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral$1(["\n      <div class=\"work-container\">\n        ", "\n      </div>\n    "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral$1(["\n        :host {\n          height: 100vh;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n\n        .work-container {\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n      "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral$1(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

class WorkView extends LitElement {
  static get styles() {
    return [SharedStyles, css(_templateObject$1())];
  }

  static get properties() {
    return {
      projects: {
        type: Array
      }
    };
  }

  constructor() {
    super();
    this.projects = [{
      title: 'Community',
      description: 'Community is a digital product to improve neighborhood coexistence.',
      backgroundImage: '../../../assets/images/community.png',
      icons: ['../../../assets/images/angular-logo.svg', '../../../assets/images/node-logo.svg', '../../../assets/images/firebase-logo.svg', '../../../assets/images/dialogflow-logo.svg', '../../../assets/images/mongodb-logo.svg'],
      redirectUrl: 'https://ihcommunity.github.io/Community-web/'
    }, {
      title: 'Memory Game',
      description: 'It is the classic memory game where you need to match 2 cards to keep them flipped. You win if you get to flip them all.',
      backgroundImage: '../../../assets/images/ironman.jpg',
      icons: ['../../../assets/images/jquery-logo.svg', '../../../assets/images/js-logo.svg'],
      redirectUrl: 'https://marco238.github.io/memory-game/starter-code/memory.html'
    }];
  }

  render() {
    return html(_templateObject2$1(), this._generateProjects());
  }

  _generateProjects() {
    return this.projects.map(project => {
      return html(_templateObject3$1(), project.title, project.description, project.backgroundImage, project.icons, project.redirectUrl);
    });
  }

} // eslint-disable-next-line no-undef


customElements.define('work-view', WorkView);

import { L as LitElement, S as SharedStyles, c as css, h as html } from './sharedStyles-aab5eaaf.js';

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <h2>Work in progress!</h2>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 100vh;\n          color: #ffffff;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

class View404 extends LitElement {
  static get styles() {
    return [SharedStyles, css(_templateObject())];
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html(_templateObject2());
  }

} // eslint-disable-next-line no-undef


customElements.define('view-404', View404);

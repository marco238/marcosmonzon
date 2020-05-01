(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{4:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i(1);class r extends n.a{static get styles(){return[o.a,n.b`
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
      `]}static get properties(){return{title:{type:String},description:{type:String}}}constructor(){super(),this.title="About me",this.description="\n      Guess what... I love programming 😄, specially\n      web development. Currently, I dedicate myself to \"Frontend\" with\n      Javascript and it's definitely my thing. I've been working with\n      frameworks like React, Angular, Vue, LitElement & Polymer; also\n      with all those other tools involved in the web dev experience 🙄.\n      I love studying new tech and if I had enough time I would learn\n      them all.\n    "}render(){return n.c`
      <div>
        <h2>${this.title}</h2>
        <p>${this.description}</p>
      </div>
    `}}customElements.define("about-view",r)}}]);
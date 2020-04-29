(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{6:function(e,t,s){"use strict";s.r(t);var o=s(0),a=s(1);class r extends o.a{static get styles(){return[a.a,o.b`
        :host {
          position: relative;
          width: 250px;
          height: 370px;
          border-radius: 25px;
          overflow: hidden;
          animation: flipIn 0.5s ease;
        }
        
        .card-container {
          background-size: cover;
          filter: grayscale(0.3);
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
        }
        
        img {
          width: 100%;
        }

        .card-info {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-height: 85px;
          justify-content: space-between;
          color: #737373;
        }

        .card-info h2 {
          margin: 5px 0 10px 0;
        }

        .card-info p {
          margin: 0 0 10px 0;
          font-size: 12px;
          height: 45px;
          overflow: hidden;
        }

        .tech-logos {
          display: flex;
          position: absolute;
          bottom: -35px;
          max-width: 150px;
          overflow: hidden;
        }

        .logo {
          width: 22px;
          height: 22px;
          margin-right: 5px;
          background-repeat: no-repeat;
          background-position: center;
        }

        .card-info a {
          position: absolute;
          bottom: -37px;
          right: 0;
          padding: 8px 10px;
          border-radius: 20px;
          font-size: 10px;
          background-color: transparent;
          border: 1px solid var(--app-grey-color);
          color: var(--app-grey-color);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.1s ease;
        }

        .card-info a:hover {
          background-color: var(--app-grey-color);
          color: #ffffff;
        }

        .card-info a:focus {
          outline: none;
        }
      `]}static get properties(){return{title:{type:String},description:{type:String},backgroundImage:{type:String},icons:{type:Array},redirectUrl:{type:String}}}constructor(){super(),this.title="Title",this.description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",this.backgroundImage="",this.icons=[],this.redirectUrl="#"}firstUpdated(){const e=this.shadowRoot.querySelectorAll(".logo");e.forEach(e=>e.addEventListener("mouseenter",this._mouseOverHandler)),e.forEach(e=>e.addEventListener("mouseleave",this._mouseOverHandler))}render(){return o.c`
      <div class="card-container" style="background-image: url(${this.backgroundImage})">
        <img src="https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588156329/marcomonzon/cloudyShape.svg" alt="Cloudy Shape">
        <div class="card-info">
          <h2>${this.title}</h2>
          <p>${this.description}</p>
          <div class="tech-logos">
            ${this._generateIcons()}
          </div>
          <a href="${this.redirectUrl}" target="_blank">CHECK IT</a>
        </div>
      </div>
    `}_generateIcons(){return this.icons.map(e=>o.c`<img src="${e.url}" class="logo" alt="${e.alt}">`)}_mouseOverHandler(e){"mouseenter"===e.type?this.dispatchEvent(new CustomEvent("showBadge",{composed:!0,detail:{alt:e.target.alt,top:e.clientY-30,left:e.clientX}})):"mouseleave"===e.type&&this.dispatchEvent(new CustomEvent("hideBadge",{composed:!0}))}}customElements.define("card-element",r);class i extends o.a{static get styles(){return[a.a,o.b`
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
      `]}static get properties(){return{assetsBasePath:{type:String},projects:{type:Array}}}constructor(){super(),this.assetsBasePath="https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588156329/marcomonzon",this.projects=[{title:"Community",description:"Community is a digital product to improve neighborhood coexistence.",backgroundImage:this.assetsBasePath+"/community.png",icons:[{url:this.assetsBasePath+"/angular-logo.svg",alt:"Angular"},{url:this.assetsBasePath+"/node-logo.svg",alt:"NodeJS"},{url:this.assetsBasePath+"/firebase-logo.svg",alt:"Firebase"},{url:this.assetsBasePath+"/dialogflow-logo.svg",alt:"Dialogflow"},{url:this.assetsBasePath+"/mongodb-logo.svg",alt:"MongoDB"}],redirectUrl:"https://ihcommunity.github.io/Community-web/"},{title:"Memory Game",description:"It is the classic memory game where you need to match 2 cards to keep them flipped. You win if you get to flip them all.",backgroundImage:this.assetsBasePath+"/ironman.jpg",icons:[{url:this.assetsBasePath+"/jquery-logo.svg",alt:"jQuery"},{url:this.assetsBasePath+"/js-logo.svg",alt:"Javascript"}],redirectUrl:"https://marco238.github.io/memory-game/starter-code/memory.html"},{title:"SmartUp Xperience",description:"SmartUp Xperience is much more than a simple experience ... Here we will have the opportunity to develop your professional career and at the same time grow as a person in a technological and close environment. Do you want to know us more thoroughly? Be smart!",backgroundImage:this.assetsBasePath+"/SmartUp-Xperience.png",icons:[{url:this.assetsBasePath+"/polymer-logo.svg",alt:"Polymer"},{url:this.assetsBasePath+"/js-logo.svg",alt:"Javascript"}],redirectUrl:"http://public-web.apps.12b5129e45db47179d12.westeurope.aksapp.io/home"},{title:"Anything Finder",description:"Very simple app to find your fav movies & series. LitElement, Rollup, CI/CD with TravisCI, Karma-Mocha-Chai, etc.",backgroundImage:this.assetsBasePath+"/Anything-Finder.png",icons:[{url:this.assetsBasePath+"/litelement-logo.svg",alt:"LitElement"},{url:this.assetsBasePath+"/js-logo.svg",alt:"Javascript"}],redirectUrl:"https://marco238.github.io/anything-finder"}]}render(){return o.c`
      <div class="work-container">
        ${this._generateProjects()}
      </div>
    `}_generateProjects(){return this.projects.map(e=>o.c`
        <card-element
          title="${e.title}"
          description="${e.description}"
          backgroundImage="${e.backgroundImage}"
          .icons=${e.icons}
          redirectUrl="${e.redirectUrl}">
        </card-element>
      `)}}customElements.define("work-view",i)}}]);
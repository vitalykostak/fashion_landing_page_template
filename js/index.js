(()=>{var e={901:e=>{const n=/Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);e.exports=class{constructor(e,n){this._menuElement=e,this._openingClassSelector=n,this._isActive=!1,this._isOpen=!1}isActive(){this._isActive=window.innerWidth<=992}setHeightToMenu(){n&&(this._menuElement.style.height=window.innerHeight)}isOpen(){return this._isOpen}toggleMenu(){if(!this.isActive)return!1;this._isOpen?(this._closeMenu(),this._unfreezeMenuToPage()):(this._openMenu(),this._freezeMenuToPage())}_openMenu(){this._isOpen=!0,console.log(this._openingClassSelector),this._menuElement.classList.add(this._openingClassSelector)}_closeMenu(){this._isOpen=!1,this._menuElement.classList.remove(this._openingClassSelector)}_freezeMenuToPage(){this._menuElement.style.position="fixed"}_unfreezeMenuToPage(){this._menuElement.style.position=""}}}},n={};function i(t){var s=n[t];if(void 0!==s)return s.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,i),o.exports}i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e=i(901),n=i.n(e);const t=document.querySelector(".header__nav-links"),s=document.querySelector(".burger-icon"),o=s.innerHTML,r=new(n())(t,"header__nav-links--open");window.addEventListener("onload",r.isActive.bind(r)),window.addEventListener("resize",r.isActive.bind(r)),window.addEventListener("resize",r.setHeightToMenu.bind(r)),s.addEventListener("click",(()=>{r.toggleMenu(),r.isOpen()?(s.innerHTML="&#x2715",s.classList.add("burger-icon--close"),s.style.position="fixed"):(s.innerHTML=o,s.classList.remove("burger-icon--close"),s.style.position="static")}))})()})();
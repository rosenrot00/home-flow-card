var e,t,n,i,o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=/* @__PURE__ */new WeakMap,l=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}},d=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1],e[0]);return new l(n,e,s)},h=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new l("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:c,defineProperty:u,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:_,getPrototypeOf:v}=Object,m=globalThis,g=m.trustedTypes,y=g?g.emptyScript:"",b=m.reactiveElementPolyfillSupport,x=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},w=(e,t)=>!c(e,t),k={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:w};null!==(t=(e=Symbol).metadata)&&void 0!==t||(e.metadata=Symbol("metadata")),null!==(n=m.litPropertyMetadata)&&void 0!==n||(m.litPropertyMetadata=/* @__PURE__ */new WeakMap);var A,L=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);void 0!==i&&u(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){var i;const{get:o,set:r}=null!==(i=p(this.prototype,e))&&void 0!==i?i:{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const i=null==o?void 0:o.call(this);null==r||r.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:k}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...f(e),..._(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */new Map;for(const[t,n]of this.elementProperties){const e=this._$Eu(t,n);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,n;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=/* @__PURE__ */new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}_$E_(){const e=/* @__PURE__ */new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const n of t){const t=document.createElement("style"),i=o.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=n.cssText,e.appendChild(t)}})(t,this.constructor.elementStyles),t}connectedCallback(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$EO)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(void 0!==i&&!0===n.reflect){var o;const r=(void 0!==(null===(o=n.converter)||void 0===o?void 0:o.toAttribute)?n.converter:$).toAttribute(t,n.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,i=n._$Eh.get(e);if(void 0!==i&&this._$Em!==i){var o,r,s;const e=n.getPropertyOptions(i),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:$;this._$Em=i;const l=a.fromAttribute(t,e.type);this[i]=null!==(r=null!=l?l:null===(s=this._$Ej)||void 0===s?void 0:s.get(i))&&void 0!==r?r:l,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(void 0!==e){var r,s,a;const l=this.constructor;if(!1===i&&(o=this[e]),null!==(r=n)&&void 0!==r||(n=l.getPropertyOptions(e)),!((null!==(s=n.hasChanged)&&void 0!==s?s:w)(o,t)||n.useDefault&&n.reflect&&o===(null===(a=this._$Ej)||void 0===a?void 0:a.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},r){var s,a,l;n&&!(null!==(s=this._$Ej)&&void 0!==s?s:this._$Ej=/* @__PURE__ */new Map).has(e)&&(this._$Ej.set(e,null!==(a=null!=r?r:t)&&void 0!==a?a:this[e]),!0!==o||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(null!==(l=this._$Eq)&&void 0!==l?l:this._$Eq=/* @__PURE__ */new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t){const{wrapped:t}=n,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,n,i)}}let t=!1;const n=this._$AL;try{var i;t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(i=this._$EO)||void 0===i||i.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(n)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$EO)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[x("elementProperties")]=/* @__PURE__ */new Map,L[x("finalized")]=/* @__PURE__ */new Map,null==b||b({ReactiveElement:L}),(null!==(i=m.reactiveElementVersions)&&void 0!==i?i:m.reactiveElementVersions=[]).push("2.1.2");var P=globalThis,C=e=>e,N=P.trustedTypes,M=N?N.createPolicy("lit-html",{createHTML:e=>e}):void 0,I="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,j=`<${E}>`,V=document,O=()=>V.createComment(""),F=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,T=e=>D(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),R="[ \t\n\f\r]",J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,z=/>/g,U=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,G=/"/g,W=/^(?:script|style|textarea|title)$/i,K=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),q=K(1),Y=K(2),X=(K(3),Symbol.for("lit-noChange")),Z=Symbol.for("lit-nothing"),Q=/* @__PURE__ */new WeakMap,ee=V.createTreeWalker(V,129);function te(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}var ne=(e,t)=>{const n=e.length-1,i=[];let o,r=2===t?"<svg>":3===t?"<math>":"",s=J;for(let l=0;l<n;l++){var a;const t=e[l];let n,d,h=-1,c=0;for(;c<t.length&&(s.lastIndex=c,d=s.exec(t),null!==d);)c=s.lastIndex,s===J?"!--"===d[1]?s=B:void 0!==d[1]?s=z:void 0!==d[2]?(W.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=U):void 0!==d[3]&&(s=U):s===U?">"===d[0]?(s=null!==(a=o)&&void 0!==a?a:J,h=-1):void 0===d[1]?h=-2:(h=s.lastIndex-d[2].length,n=d[1],s=void 0===d[3]?U:'"'===d[3]?G:H):s===G||s===H?s=U:s===B||s===z?s=J:(s=U,o=void 0);const u=s===U&&e[l+1].startsWith("/>")?" ":"";r+=s===J?t+j:h>=0?(i.push(n),t.slice(0,h)+I+t.slice(h)+S+u):t+S+(-2===h?l:u)}return[te(e,r+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]},ie=class e{constructor({strings:t,_$litType$:n},i){let o;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[d,h]=ne(t,n);if(this.el=e.createElement(d,i),ee.currentNode=this.el.content,2===n||3===n){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ee.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(I)){const t=h[s++],n=o.getAttribute(e).split(S),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:i[2],strings:n,ctor:"."===i[1]?le:"?"===i[1]?de:"@"===i[1]?he:ae}),o.removeAttribute(e)}else e.startsWith(S)&&(l.push({type:6,index:r}),o.removeAttribute(e));if(W.test(o.tagName)){const e=o.textContent.split(S),t=e.length-1;if(t>0){o.textContent=N?N.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],O()),ee.nextNode(),l.push({type:2,index:++r});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===E)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(S,e+1));)l.push({type:7,index:r}),e+=S.length-1}r++}}static createElement(e,t){const n=V.createElement("template");return n.innerHTML=e,n}};function oe(e,t,n=e,i){var o,r,s;if(t===X)return t;let a=void 0!==i?null===(o=n._$Co)||void 0===o?void 0:o[i]:n._$Cl;const l=F(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null==a||null===(r=a._$AO)||void 0===r||r.call(a,!1),void 0===l?a=void 0:(a=new l(e),a._$AT(e,n,i)),void 0!==i?(null!==(s=n._$Co)&&void 0!==s?s:n._$Co=[])[i]=a:n._$Cl=a),void 0!==a&&(t=oe(e,a._$AS(e,t.values),a,i)),t}var re=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:V).importNode(n,!0);ee.currentNode=o;let r=ee.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new se(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new ce(r,this,e)),this._$AV.push(t),l=i[++a]}s!==(null==l?void 0:l.index)&&(r=ee.nextNode(),s++)}return ee.currentNode=V,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},se=class e{get _$AU(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}constructor(e,t,n,i){var o;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=oe(this,e,t),F(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==X&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):T(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&F(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){var t;const{values:n,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ie.createElement(te(i.h,i.h[0]),this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(n);else{const e=new re(o,this),t=e.u(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new ie(e)),t}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,o=0;for(const r of t)o===n.length?n.push(i=new e(this.O(O()),this.O(O()),this,this.options)):i=n[o],i._$AI(r),o++;o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e!==this._$AB;){const t=C(e).nextSibling;C(e).remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}},ae=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */new String),this.strings=n):this._$AH=Z}_$AI(e,t=this,n,i){const o=this.strings;let r=!1;if(void 0===o)e=oe(this,e,t,0),r=!F(e)||e!==this._$AH&&e!==X,r&&(this._$AH=e);else{var s;const i=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=oe(this,i[n+a],t,a),l===X&&(l=this._$AH[a]),r||(r=!F(l)||l!==this._$AH[a]),l===Z?e=Z:e!==Z&&(e+=(null!==(s=l)&&void 0!==s?s:"")+o[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}},le=class extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}},de=class extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}},he=class extends ae{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=oe(this,e,t,0))&&void 0!==n?n:Z)===X)return;const i=this._$AH,o=e===Z&&i!==Z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==Z&&(i===Z||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(n=this.options)||void 0===n?void 0:n.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}},ce=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){oe(this,e)}},ue={M:I,P:S,A:E,C:1,L:ne,R:re,D:T,V:oe,I:se,H:ae,N:de,U:he,B:le,F:ce},pe=P.litHtmlPolyfillSupport;null==pe||pe(ie,se),(null!==(A=P.litHtmlVersions)&&void 0!==A?A:P.litHtmlVersions=[]).push("3.3.2");var fe,_e,ve=globalThis,me=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{var i;const o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:t;let r=o._$litPart$;if(void 0===r){var s;const e=null!==(s=null==n?void 0:n.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new se(t.insertBefore(O(),e),e,void 0,null!=n?n:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return X}};me._$litElement$=!0,me.finalized=!0,null===(fe=ve.litElementHydrateSupport)||void 0===fe||fe.call(ve,{LitElement:me});var ge=ve.litElementPolyfillSupport;null==ge||ge({LitElement:me}),(null!==(_e=ve.litElementVersions)&&void 0!==_e?_e:ve.litElementVersions=[]).push("4.2.2");var ye=(e,t,n)=>Math.min(Math.max(e,t),n);function be(e,t,n){return{x:Number((e.x+Math.cos(n)*t).toFixed(2)),y:Number((e.y+Math.sin(n)*t).toFixed(2))}}function xe(e,t,n){const i=n.x-t.x,o=n.y-t.y,r=i*i+o*o||1,s=ye(((e.x-t.x)*i+(e.y-t.y)*o)/r,0,1),a={x:t.x+i*s,y:t.y+o*s};return{distance:Math.hypot(e.x-a.x,e.y-a.y),point:a,t:s}}var $e=class{constructor(){this.widths=/* @__PURE__ */new Map}measure(e){var t,n;const i=this.widths.get(e);if(void 0!==i)return i;void 0===this.context&&(this.context=document.createElement("canvas").getContext("2d"),this.context&&(this.context.font="400 27px Roboto, sans-serif"));const o=null!==(t=null===(n=this.context)||void 0===n?void 0:n.measureText(e).width)&&void 0!==t?t:13*e.length;return this.widths.set(e,o),o}},we=d`
    :host {
      display: block;
      height: 100%;
      color: var(--primary-text-color, #17211c);
      --home-flow-connector-base-color: color-mix(
        in srgb,
        var(--primary-text-color, #17211c) 8%,
        transparent
      );
      --home-flow-connector-base-color-selected: color-mix(
        in srgb,
        #86b8ff 34%,
        var(--home-flow-connector-base-color)
      );
    }

    .card,
    .flow-svg {
      width: 100%;
      height: 100%;
    }

    .card {
      position: relative;
    }

    .flow-svg {
      color: var(--primary-text-color, #17211c);
      outline: none;
      overflow: visible;
      touch-action: none;
    }

    .graph-build-version {
      fill: var(--secondary-text-color, #536057);
      font-size: 18px;
      font-weight: 400;
      opacity: 0.55;
      pointer-events: none;
      user-select: none;
    }

    .node-icon-svg {
      color: var(--primary-text-color, #17211c);
      fill: currentColor;
      overflow: visible;
      pointer-events: none;
    }

    .node-icon-secondary-path {
      opacity: 0.5;
    }

    .connector {
      fill: none;
      pointer-events: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .editor-grid {
      pointer-events: none;
    }

    .editor-grid-dot {
      fill: var(--secondary-text-color, #737b75);
      opacity: 0.1;
    }

    .editor-grid-dot.major {
      opacity: 0.18;
    }

    .connector.base {
      stroke: var(--home-flow-connector-base-color);
      stroke-width: 13;
    }

    .connector.base.selected {
      stroke: var(--home-flow-connector-base-color-selected);
    }

    .connector-hit {
      fill: none;
      pointer-events: stroke;
      stroke: transparent;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 30;
      cursor: pointer;
    }

    .connector.flow {
      stroke-dasharray: 18 22;
    }

    .connector.flow.source-mask,
    .connector.flow.source-single {
      stroke-linecap: round;
    }

    .connector.flow.source-fill,
    .connector.flow.source-split {
      stroke-linecap: butt;
    }

    .source-flow-mask {
      mask-type: alpha;
    }

    .bus-tap {
      fill: var(
        --home-flow-node-background,
        var(--ha-card-background, var(--card-background-color, #fff))
      );
      stroke: var(--primary-text-color, #17211c);
      stroke-width: 3;
      pointer-events: none;
    }

    .bus-tap.selected {
      fill: #86b8ff;
      stroke: var(--ha-card-background, var(--card-background-color, #fff));
    }

    .node {
      color: var(--primary-text-color, #17211c);
      cursor: grab;
      outline: none;
      touch-action: none;
      user-select: none;
    }

    .node.dragging {
      cursor: grabbing;
    }

    .readonly .node {
      cursor: default;
    }

    .readonly .node.actionable {
      cursor: pointer;
    }

    .readonly .node:not(.actionable) .hit-area {
      pointer-events: none;
    }

    .readonly .node.actionable .hit-area {
      pointer-events: all;
    }

    .node-bg {
      fill: var(
        --home-flow-node-background,
        var(--ha-card-background, var(--card-background-color, #fff))
      );
      transition:
        stroke-width 120ms ease,
        filter 120ms ease;
    }

    .node-bus-cover,
    .node-bg.bus-cover {
      pointer-events: none;
    }

    .node:hover .node-bg,
    .node.selected .node-bg {
      stroke-width: 4;
      filter: drop-shadow(0 2px 6px rgb(23 33 28 / 0.2));
    }

    .hit-area {
      fill: transparent;
      stroke: none;
    }

    .node-content {
      color: var(--primary-text-color, #17211c);
      pointer-events: none;
      user-select: none;
    }

    .value-hit {
      fill: transparent;
      pointer-events: all;
      cursor: pointer;
    }

    .node text,
    .node-content text {
      pointer-events: none;
      text-anchor: middle;
    }

    .node-label {
      pointer-events: none;
    }

    .node-value {
      fill: currentColor;
      font-size: 26px;
      font-weight: 400;
    }

    .node-active-target {
      transition: color 160ms ease, opacity 160ms ease;
    }

    .node-active-target.is-active {
      color: var(--home-flow-node-active-color);
      opacity: 1;
    }

    .node-icon-svg.node-active-target.is-inactive {
      opacity: 0.55;
    }

    .node-value.node-active-target.is-inactive {
      opacity: 0.7;
    }

    .node-secondary {
      fill: currentColor;
      font-size: 26px;
      font-weight: 400;
    }

    .node-value.compact,
    .node-secondary.compact {
      font-size: 22px;
    }

    .flow-icon-arrow {
      fill: currentColor;
      font-size: 28px;
      font-weight: 600;
    }

    .node-label {
      color: var(--secondary-text-color, #737b75);
      fill: var(--secondary-text-color, #737b75);
      font-size: 27px;
      font-weight: 400;
    }

    .node-label-curved {
      text-anchor: middle;
    }

    .node-label-path {
      fill: none;
      stroke: none;
      pointer-events: none;
    }

    .node-label textPath {
      dominant-baseline: middle;
      text-anchor: middle;
    }

    .label-handle-hit {
      fill: transparent;
      cursor: grab;
      pointer-events: all;
    }

    .label-handle-dot {
      fill: var(--primary-color, #1c7ed6);
      stroke: var(--card-background-color, #fff);
      stroke-width: 2;
      pointer-events: none;
    }

    .anchor-controls {
      pointer-events: none;
    }

    .anchor-handle {
      pointer-events: none;
    }

    .anchor-hit {
      fill: transparent;
      stroke: none;
      pointer-events: all;
      cursor: crosshair;
      touch-action: none;
    }

    .anchor-point {
      fill: var(--ha-card-background, var(--card-background-color, #fff));
      stroke: currentColor;
      stroke-width: 1.6;
      pointer-events: none;
    }

    .anchor-handle.selected .anchor-point {
      fill: #86b8ff;
      stroke: #ffffff;
      stroke-width: 2.4;
    }

    .anchor-handle.selected:hover .anchor-point,
    .connector-hit.selected {
      filter: drop-shadow(0 1px 4px rgb(63 121 201 / 0.45));
    }

`;function ke(e,t,n){return(e.point.x-t.point.x)*n.x+(e.point.y-t.point.y)*n.y}var Ae=e=>{var t;return null!==(t=e.contributesToFlow)&&void 0!==t?t:"leaf"===e.kind};function Le(e,t,n,i,o){if(!i[t]||!i[n])return;const r=/* @__PURE__ */new Set,s=[t],a=t=>t.id===e.id||t.from===e.from&&t.to===e.to||t.from===e.to&&t.to===e.from;for(;s.length>0;){const e=s.shift();if(e&&!r.has(e)){r.add(e);for(const t of o){if(a(t))continue;if(t.from!==e&&t.to!==e)continue;const n=t.from===e?t.to:t.from;!r.has(n)&&i[n]&&s.push(n)}}}return r}var Pe=.5,Ce={leaf:"var(--home-flow-leaf-color, #c65b4a)",junction:"var(--home-flow-junction-1-color, #f6b73c)"},Ne=class{constructor(e,t,n,i){this.flowMinVisibleValue=e,this.flowMaxValue=t,this.links=n,this.junctionFlowColor=i}signedValue(e,t,n=this.links,i){return this._linkSignedValue(e,t,n,i)}nodeFlowValue(e){return this._nodeFlowValue(e)}sourceParts(e,t,n,i,o){return this._linkSourceParts(e,t,n,i,o)}color(e,t,n,i,o){return this._linkColor(e,t,n,i,o)}nodeColor(e,t,n,i){return this._nodeColorCached(e,t,n,i)}showsFlow(e,t){return this._shouldShowFlow(e,t)}width(e,t,n){return this._flowWidth(e,t,n)}linkMinValue(e,t,n=this.links){return this._linkMinVisibleValue(e,t,n)}linkMaxValue(e,t,n,i=this.links){return this._linkMaxValue(e,t,n,i)}primaryValue(e,t,n){return this._nodePrimaryValue(e,t,n)}displayValue(e,t,n){return this._nodeDisplayValue(e,t,n)}hasFlowArrow(e){return this._hasNodeFlowArrow(e)}_linkSignedValue(e,t,n=this.links,i){if(Number.isFinite(e.value))return Number(e.value);const o=t[e.from],r=t[e.to];return"leaf"===(null==o?void 0:o.kind)?this._nodeFlowValue(o):"leaf"===(null==r?void 0:r.kind)?-this._nodeFlowValue(r):"junction"===(null==o?void 0:o.kind)&&"junction"===(null==r?void 0:r.kind)?this._derivedJunctionLinkValue(e,o,r,t,n,i):0}_nodeFlowValue(e){return Number.isFinite(e.flowValue)?Number(e.flowValue):e.value}_derivedJunctionLinkValue(e,t,n,i,o,r){const s=this._nodeIdsOnSideOfLinkCached(e,t.id,n.id,i,o,r);if(!s||s.has(n.id))return 0;let a=0;const l=Array.from(s).reduce((e,t)=>{const n=i[t];return n&&Ae(n)?(a+=1,e+this._nodeFlowValue(n)):e},0);return a>0?l:0}_linkSourceParts(e,t,n,i,o){if(e.color||Math.abs(i)<=Pe)return;const r=function(e){const t=/* @__PURE__ */new Map;for(const n of e){const e=t.get(n.color);e?e.amount+=n.amount:t.set(n.color,{...n})}return Array.from(t.values())}(this._linkFlowSources(e,t,n,i,o));if(0===r.length)return;const s=r.reduce((e,t)=>e+t.amount,0);if(s<=Pe)return;let a=0;return function(e){if(e.length<=1)return e;const t=[];let n=0;for(const r of e)r.length<1?n+=r.length:t.push({...r});if(t.length===e.length)return e;if(0===t.length)return[{...e.reduce((e,t)=>t.length>e.length?t:e),length:18,start:0}];const i=t.reduce((e,n,i)=>n.length>t[e].length?i:e,0);t[i]={...t[i],length:t[i].length+n};let o=0;return t.map((e,n)=>{const i=n===t.length-1?18-o:e.length,r={...e,length:i,start:o};return o+=i,r})}(r.map((e,t)=>{const n=t===r.length-1?18-a:e.amount/s*18,i={color:e.color,key:e.key,length:n,start:a};return a+=n,i}))}_linkFlowSources(e,t,n,i,o){const r=t.nodes,s=r[e.from],a=r[e.to];if(!s||!a)return[];const l=i>=0?e.from:e.to,d=i>=0?e.to:e.from,h=this._nodeIdsOnSideOfLinkCached(e,l,d,r,n,o);if(!h||h.has(d))return[];const c=r[l],u=r[d],p=function(e,t){const n=t.point.x-e.point.x,i=t.point.y-e.point.y,o=Math.hypot(n,i)||1;return{x:n/o,y:i/o}}(c,u);return Array.from(h).map(e=>r[e]).filter(e=>Boolean(e)).filter(e=>Ae(e)).map(e=>({amount:this._nodeFlowValue(e),color:this._nodeColorCached(e,t,n,o),key:e.id,node:e})).filter(e=>e.amount>Pe).sort((e,t)=>ke(e.node,c,p)-ke(t.node,c,p)||e.key.localeCompare(t.key))}_nodeIdsOnSideOfLinkCached(e,t,n,i,o,r){if(!r)return Le(e,t,n,i,o);const s=`${e.id}|${t}|${n}`;return r.sideNodeIds.has(s)||r.sideNodeIds.set(s,Le(e,t,n,i,o)),r.sideNodeIds.get(s)}_linkColor(e,t,n,i=this._linkSignedValue(e,t.nodes,n),o){const r=t.nodes;if(e.color)return e.color;const s=r[e.from],a=r[e.to],l=i>=0?s:a;return l?this._nodeColorCached(l,t,n,o):Ce.junction}_nodeColorCached(e,t,n,i){if(!i)return this._nodeColor(e,t,n);const o=i.nodeColors.get(e.id);if(o)return o;const r=this._nodeColor(e,t,n);return i.nodeColors.set(e.id,r),r}_nodeColor(e,t,n,i=/* @__PURE__ */new Set){var o;if(e.color)return e.color;if("leaf"!==e.kind)return this._nonLeafColor(e,t);const r=t&&n?this._attachedLeafColor(e,t,n):void 0;if(r)return r;return(t&&n?this._overlappingUnlinkedLeafColor(e,t,n,new Set(i).add(e.id)):void 0)||("mdi:solar-power"===e.icon?"var(--energy-solar-color, #d6a500)":(null===(o=e.icon)||void 0===o?void 0:o.startsWith("mdi:battery"))?"var(--energy-battery-discharge-color, #3f79c9)":Ce.leaf)}_nodeDirectColor(e,t,n){var i;if(e.color)return e.color;if("leaf"!==e.kind)return this._nonLeafColor(e,t);return(t&&n?this._attachedLeafColor(e,t,n):void 0)||("mdi:solar-power"===e.icon?"var(--energy-solar-color, #d6a500)":(null===(i=e.icon)||void 0===i?void 0:i.startsWith("mdi:battery"))?"var(--energy-battery-discharge-color, #3f79c9)":Ce.leaf)}_attachedLeafColor(e,t,n){const i=n.filter(t=>t.from===e.id||t.to===e.id).map(n=>t.nodes[n.from===e.id?n.to:n.from]).filter(e=>Boolean(e)).find(e=>"junction"===e.kind);if(i)return this.junctionFlowColor(i.id,t.nodes)}_overlappingUnlinkedLeafColor(e,t,n,i=/* @__PURE__ */new Set){if(n.some(t=>t.from===e.id||t.to===e.id))return;const o=Object.values(t.nodes).filter(t=>t.id!==e.id).map(t=>({node:t,distance:Math.hypot(t.point.x-e.point.x,t.point.y-e.point.y)})).filter(({node:t,distance:n})=>n<t.radius+e.radius).sort((e,t)=>e.distance-t.distance).map(({node:e})=>e);let r;for(const s of o){if("leaf"!==s.kind)return this._nonLeafColor(s,t);const e=this._attachedLeafColor(s,t,n);if(e)return e;if(!i.has(s.id)){const e=this._overlappingUnlinkedLeafColor(s,t,n,new Set(i).add(s.id));if(e)return e}r||(r=this._nodeDirectColor(s,t,n))}return r}_nonLeafColor(e,t){return e.color?e.color:"junction"===e.kind&&t?this.junctionFlowColor(e.id,t.nodes):Ce[e.kind]}_shouldShowFlow(e,t=this._flowMinVisibleValue()){return function(e,t){const n=Math.abs(e);return n>.5&&n>=Math.max(0,t)}(e,t)}_flowWidth(e,t=this._flowMinVisibleValue(),n=this._flowMaxValue(t)){return function(e,t,n){const i=ye((Math.abs(e)-t)/(n-t),0,1);return 2.4+11.6*Math.pow(i,1.15)}(e,t,n)}_flowMinVisibleValue(){return Math.max(0,Number.isFinite(this.flowMinVisibleValue)?this.flowMinVisibleValue:10)}_flowMaxValue(e=this._flowMinVisibleValue()){const t=Number.isFinite(this.flowMaxValue)?this.flowMaxValue:12e3;return Math.max(t,e+1)}_linkMinVisibleValue(e,t,n=this.links){var i;return Math.max(0,Number.isFinite(e.flowMinVisibleValue)?Number(e.flowMinVisibleValue):null!==(i=this._junctionFlowMinVisibleValue(e,t,n))&&void 0!==i?i:this._flowMinVisibleValue())}_linkMaxValue(e,t=this._linkMinVisibleValue(e),n,i=this.links){var o;const r=Number.isFinite(e.flowMaxValue)?Number(e.flowMaxValue):null!==(o=this._junctionFlowMaxValue(e,n,i))&&void 0!==o?o:this._flowMaxValue(t);return Math.max(r,t+1)}_junctionFlowMinVisibleValue(e,t,n){const i=this._linkScaleJunction(e,t,n,"flowMinVisibleValue");return Number.isFinite(null==i?void 0:i.flowMinVisibleValue)?Number(null==i?void 0:i.flowMinVisibleValue):void 0}_junctionFlowMaxValue(e,t,n){const i=this._linkScaleJunction(e,t,n,"flowMaxValue");return Number.isFinite(null==i?void 0:i.flowMaxValue)?Number(null==i?void 0:i.flowMaxValue):void 0}_linkScaleJunction(e,t,n,i){if(!t)return;const o=this._nodeIdsConnectedTo(e.from,t,n);return Object.values(t).filter(e=>"junction"===e.kind&&o.has(e.id)).find(e=>Number.isFinite(e[i]))}_nodeIdsConnectedTo(e,t,n){const i=/* @__PURE__ */new Set,o=[e];for(;o.length>0;){const e=o.shift();e&&!i.has(e)&&(i.add(e),n.forEach(n=>{if(n.from!==e&&n.to!==e)return;const r=n.from===e?n.to:n.from;!i.has(r)&&t[r]&&o.push(r)}))}return i}_nodePrimaryValue(e,t,n){if(e.displayValue)return e.displayValue;const i=this._nodeDisplayValue(e,t,n);return this._isBatteryValueNode(e)?this._formatNodeValue(Math.abs(i),e):this._formatNodeValue(i,e)}_nodeDisplayValue(e,t,n){var i;return"junction"!==e.kind||e.hasOwnValue?e.value:null!==(i=this._junctionDisplayFlowValue(e,t.nodes,n))&&void 0!==i?i:e.value}_junctionDisplayFlowValue(e,t,n){var i;let o=0,r=0,s=0;if(n.forEach(i=>{const a=this._linkFlowRelativeToNode(i,e.id,t,n);void 0!==a&&(s+=1,a>=0?o+=a:r+=Math.abs(a))}),0!==s)switch(null!==(i=e.junctionDisplayMode)&&void 0!==i?i:"incoming"){case"outgoing":return r;case"net":return o-r;default:return o}}_linkFlowRelativeToNode(e,t,n,i){if(e.from!==t&&e.to!==t)return;const o=n[e.from===t?e.to:e.from];if("leaf"===(null==o?void 0:o.kind)&&!Ae(o))return;const r=this._linkSignedValue(e,n,i);return Number.isFinite(r)?e.to===t?r:-r:void 0}_hasNodeFlowArrow(e){return!0===e.showFlowArrow&&Math.abs(this._nodeFlowValue(e))>Pe}_isBatteryValueNode(e){return"leaf"===e.kind&&void 0!==e.secondary&&this._isBatteryIcon(e.icon)}_isBatteryIcon(e){return!0===(null==e?void 0:e.startsWith("mdi:battery"))}_formatNodeValue(e,t){var n;const i=null===(n=t.unit)||void 0===n?void 0:n.trim();return i&&"W"!==i&&"kW"!==i&&"MW"!==i?`${this._formatNumber(Math.abs(e))} ${i}`:this._formatPower(e)}_formatPower(e){const t=Math.abs(e);return t>=1e3?`${this._formatNumber(t/1e3)} kW`:`${Math.round(t).toLocaleString("en-US")} W`}_formatNumber(e){return e.toLocaleString("en-US",{maximumFractionDigits:e>=100?0:1})}},Me=/* @__PURE__ */new Map,Ie=/* @__PURE__ */new Map,Se=e=>new Promise(t=>window.setTimeout(t,e)),Ee=class{constructor(e){this.host=e}render(e,t,n,i,o){return this._renderNodeLayer(e,t,n,i,o)}straightLabelPoint(e,t,n){return this._nodeStraightLabelPoint(e,t,n)}curvedLabelHandlePoint(e,t,n){return this._nodeCurvedLabelHandlePoint(e,t,n)}_renderNodeLayer(e,t,n,i,o){return Y`
      ${this._renderNodeShell(e,t,i,o)}
      ${this._renderNodeBusCover(e,t,n,i,o)}
      ${this._renderNodeOverlay(e,t,i,o)}
    `}_renderNodeOverlay(e,t,n,i){return Y`
      ${this._renderNodeContent(e,t,n,i)}
      ${this._renderNodeLabel(e,t,n)}
      ${this._renderLabelHandle(e,t,n)}
      ${this.host.editable?Y`
            <g
              class="node-hit-layer"
              transform=${`translate(${e.point.x} ${e.point.y})`}
            >
              <circle
                class="hit-area node-hit-proxy"
                r=${e.radius+18}
                @pointerdown=${t=>this.host._startNodeDrag(t,e)}
              />
            </g>
          `:Z}
    `}_renderNodeBusCover(e,t,n,i,o){return this._shouldBusStayBehindNode(e,n,t.nodes,o)?Y`
      <g
        class="node-bus-cover"
        transform=${`translate(${e.point.x} ${e.point.y})`}
        aria-hidden="true"
      >
        <circle
          class="node-bg bus-cover"
          r=${e.radius}
          stroke=${this.host._nodeColorCached(e,t,i,o)}
          stroke-width=${"junction"===e.kind?4:2.5}
        />
      </g>
    `:Z}_shouldBusStayBehindNode(e,t,n,i){return"junction"===e.kind&&!this._isWrappedJunction(e,t,n,i)&&t.filter(t=>(t.from===e.id||t.to===e.id)&&this.host._isJunctionJunctionLink(t,n)).length<=1}_isWrappedJunction(e,t,n,i){return t.some(o=>{if(!this.host._isJunctionJunctionLink(o,n))return!1;const r=this.host._junctionJoinGeometry(o,n,t,i);return(null==r?void 0:r.middleId)===e.id})}_renderNodeShell(e,t,n,i){return Y`
      <g
        class=${`node ${e.kind}-node ${!this.host.editable&&e.primaryAction?"actionable":""} ${this.host.activeNode===e.id?"dragging":""} ${this.host.selectedNode===e.id?"selected":""}`}
        transform=${`translate(${e.point.x} ${e.point.y})`}
        tabindex=${this.host.editable||e.primaryAction?0:-1}
        role=${!this.host.editable&&e.primaryAction?"button":Z}
        aria-label=${!this.host.editable&&e.primaryAction?`${e.label} ${this.host._nodeActionLabel(e.primaryAction)}`:e.label}
        @pointerdown=${this.host.editable?t=>this.host._startNodeDrag(t,e):void 0}
        @click=${!this.host.editable&&e.primaryAction?t=>this.host._emitNodeAction(e.primaryAction,t):void 0}
        @keydown=${!this.host.editable&&e.primaryAction?t=>this.host._handleNodeActionKeydown(t,e.primaryAction):void 0}
      >
        <circle
          class="node-bg"
          r=${e.radius}
          stroke=${this.host._nodeColorCached(e,t,n,i)}
          stroke-width=${"junction"===e.kind?4:2.5}
        />
        <circle class="hit-area" r=${e.radius+18} />
      </g>
    `}_renderNodeContent(e,t,n,i){var o,r,s;const a=Boolean(e.icon||e.secondaryIcon),l=void 0!==e.secondary,d=this.host._nodeDisplayValue(e,t,n),h=!this._shouldHideNodeValue(e,d),c=l&&!this._shouldHideNodeValue(e,null!==(o=e.secondary)&&void 0!==o?o:0),u=this.host._nodePrimaryValue(e,t,n),p=h?this._nodeTextLines(u,e):[],f=c?this._nodeTextLines(null!==(r=e.secondaryDisplayValue)&&void 0!==r?r:`${Math.round(null!==(s=e.secondary)&&void 0!==s?s:0)}%`,e):[],_=!a,v=p.length>0,m=f.length>0,g=this._nodePrimaryTextY(e,a,l,v,m),y=this._nodeSecondaryTextY(e,a,l,v,m),b=this._activeHighlightClass(e,t,n),x=e.highlightWhenActive?`--home-flow-node-active-color:${this.host._nodeColorCached(e,t,n,i)};`:"";return Y`
      <g
        class=${`node-content ${e.kind}-content`}
        transform=${`translate(${e.point.x} ${e.point.y})`}
        style=${x||Z}
      >
        ${a?this._renderNodeIcons(e,b):Z}
        ${this._renderNodeFlowArrow(e)}
        ${p.length>0?this._renderTextLines(`${this._textLineClass("node-value",p,e)} ${b}`.trim(),p,g,e,0,_):Z}
        ${f.length>0?this._renderTextLines(this._textLineClass("node-secondary",f,e),f,y,e,0,_):Z}
        ${f.length>0?this._renderSecondaryActionHitArea(e,f,y):Z}
      </g>
    `}_activeHighlightClass(e,t,n){var i;if(!e.highlightWhenActive)return"";const o=Math.abs(this.host._nodeDisplayValue(e,t,n)),r=Math.max(0,null!==(i=e.activeFrom)&&void 0!==i?i:1);return"node-active-target "+(o>0&&o>=r?"is-active":"is-inactive")}_nodePrimaryTextY(e,t,n,i,o){return t?i?"leaf"===e.kind?n?this._radiusLerp(e.radius,-20,-30):this._radiusLerp(e.radius,-18,-28):n?this._radiusLerp(e.radius,-28,-42):this._radiusLerp(e.radius,-22,-34):0:o&&i?this._radiusLerp(e.radius,-12,-18):0}_nodeSecondaryTextY(e,t,n,i,o){return t?o?"leaf"===e.kind?this._radiusLerp(e.radius,34,47):this._radiusLerp(e.radius,27,40):0:i&&o?this._radiusLerp(e.radius,12,18):0}_renderNodeLabel(e,t,n){const i=e.label.trim();if(!i)return Z;if("straight"===this.host.labelStyle){const o=this._nodeStraightLabelPoint(e,t,n),r=function(e,t,n,i){const o="start"===t.textAnchor?958-t.x:"end"===t.textAnchor?t.x-28:2*Math.min(t.x-28,958-t.x),r=Math.max(80,o);if(i.measure(e)<=r)return[e];const s=[];let a="";for(const l of e.split(/\s+/)){const e=a?`${a} ${l}`:l;if(i.measure(e)<=r){a=e;continue}if(a&&s.push(a),i.measure(l)<=r){a=l;continue}let t="";for(const n of l){const e=t+n;t&&i.measure(e)>r?(s.push(t),t=n):t=e}a=t}return a&&s.push(a),s.length>0?s:[e]}(i,o,0,this.host._labelTextMeasurer),s=31,a=function(e,t,n){return"top"===e.className?e.y-(t-1)*n:"bottom"===e.className?e.y:e.y-(t-1)*n/2}(o,r.length,s);return Y`
        <text
          class=${`node-label node-label-straight ${o.className}`}
          x=${o.x}
          y=${a}
          text-anchor=${o.textAnchor}
          dominant-baseline=${o.baseline}
        >
          ${r.map((e,t)=>Y`
              <tspan
                x=${o.x}
                dy=${0===t?0:s}
              >${e}</tspan>
            `)}
        </text>
      `}const o=this._nodeLabelArc(e,t,n);return Y`
      <path id=${o.id} class="node-label-path" d=${o.path} />
      <text class="node-label node-label-curved">
        <textPath href=${`#${o.id}`} startOffset="50%">
          ${i}
        </textPath>
      </text>
    `}_renderLabelHandle(e,t,n){if(!this.host.editable||this.host.selectedNode!==e.id||!e.label.trim())return Z;const i="straight"===this.host.labelStyle?this._nodeStraightLabelPoint(e,t,n):this._nodeCurvedLabelHandlePoint(e,t,n);return Y`
      <g class="label-handle">
        <circle
          class="label-handle-hit"
          cx=${i.x}
          cy=${i.y}
          r="14"
          @pointerdown=${i=>this.host._startLabelDrag(i,e,t,n)}
        />
        <circle class="label-handle-dot" cx=${i.x} cy=${i.y} r="4.5" />
      </g>
    `}_nodeLabelArc(e,t,n){const i=this._nodeLabelAngle(e,t,n),o=this._nodeLabelRadius(e),r="junction"===e.kind?16:15,s=ye((e.label.length*r+36)/o,1.35,.92*Math.PI),a=Math.sin(i)>0,l=a?i+s/2:i-s/2,d=a?i-s/2:i+s/2,h=be(e.point,o,l),c=be(e.point,o,d),u=a?0:1,p=e.id.replace(/[^a-z0-9_-]/gi,"-");return{id:`home-flow-label-${this.host.graphInstanceId}-${p}`,path:`M ${h.x} ${h.y} A ${o} ${o} 0 0 ${u} ${c.x} ${c.y}`}}_nodeStraightLabelPoint(e,t,n){const i=e.labelOffsetX,o=e.labelOffsetY;return void 0!==i||void 0!==o?{x:e.point.x+(null!=i?i:0),y:e.point.y+(null!=o?o:0),textAnchor:"middle",baseline:"middle",className:"manual"}:this._nodeAutoStraightLabelPoint(e,t,n)}_nodeAutoStraightLabelPoint(e,t,n){const i=this._nodeLabelAnchorIndex(e,t,n),o=this.host._anchorAngle(i),r=e.radius+("junction"===e.kind?this._radiusLerp(e.radius,18,14):this._radiusLerp(e.radius,14,11))+this.host._straightLabelGap,s=be(e.point,r,o),a=be(e.point,this._nodeLabelRadius(e)+this.host._straightLabelGap,o),l=Math.sin(o),d=Math.cos(o);return l<-.55?{x:a.x,y:a.y,textAnchor:"middle",baseline:"central",className:"top"}:l>.55?{x:a.x,y:a.y,textAnchor:"middle",baseline:"central",className:"bottom"}:d<0?{x:s.x-4,y:s.y,textAnchor:"end",baseline:"middle",className:"left"}:{x:s.x+4,y:s.y,textAnchor:"start",baseline:"middle",className:"right"}}_nodeLabelAngle(e,t,n){var i;return null!==(i=e.labelAngle)&&void 0!==i?i:this.host._anchorAngle(this._nodeLabelAnchorIndex(e,t,n))}_nodeLabelRadius(e){return e.radius+("junction"===e.kind?this._radiusLerp(e.radius,24,18):this._radiusLerp(e.radius,19,15))}_nodeCurvedLabelHandlePoint(e,t,n){const i=this._nodeLabelAngle(e,t,n),o=e.radius+("junction"===e.kind?this._radiusLerp(e.radius,24,18):this._radiusLerp(e.radius,19,15));return be(e.point,o,i)}_nodeLabelAnchorIndex(e,t,n){const i=[...n.filter(t=>t.from===e.id||t.to===e.id).map(n=>this._connectionAnchorIndex(e,n,t)).filter(e=>void 0!==e),...this._nearbyNodeAnchorIndices(e,t)];if(0===i.length)return 16;let o=0,r=Number.NEGATIVE_INFINITY;for(let s=0;s<32;s+=1){const e=Math.min(...i.map(e=>this._circularAnchorDistance(s,e)));if(e<3)continue;const t=this.host._anchorAngle(s),n=10*Math.abs(Math.sin(t)),a=4*Math.abs(Math.cos(t)),l=.75*e+n+(Math.sin(t)>0?1:0)-a;l>r&&(r=l,o=s)}return r===Number.NEGATIVE_INFINITY?16:o}_nearbyNodeAnchorIndices(e,t){return Object.values(t.nodes).filter(t=>t.id!==e.id).filter(t=>{const n=Math.hypot(t.point.x-e.point.x,t.point.y-e.point.y),i="junction"===e.kind?38:32;return n<e.radius+t.radius+i}).map(t=>this.host._nearestAnchorIndex(e,t.point))}_connectionAnchorIndex(e,t,n){const i=this.host._linkAnchor(t,e.id);if(void 0!==i)return this.host._normalizeAnchorIndex(i);const o=t.from===e.id?t.to:t.from,r=n.nodes[o];return r?this.host._nearestAnchorIndex(e,r.point):void 0}_circularAnchorDistance(e,t){const n=Math.abs(e-t);return Math.min(n,32-n)}_nodeTextLines(e,t){const n=46+4.5*Math.max(0,e.length-7);if(t.radius>=n)return[e];const i=e.match(/^(.+?)\s+([^\s]+(?:\s+[←→↑↓])?)$/);if(i)return[i[1],i[2]];const o=e.match(/^([-+]?\d+(?:[.,]\d+)?)([^\d\s].*?(?:\s+[←→↑↓])?)$/);return o?[o[1],o[2]]:[e]}_textLineClass(e,t,n){return t.length>1?`${e} compact`:e}_shouldHideNodeValue(e,t){var n;return(null!==(n=e.hideZeroValues)&&void 0!==n?n:this.host.hideZeroValues)&&Math.abs(t)<=.5}_renderTextLines(e,t,n,i,o=0,r=!1){const s=this._textFontSize(e,t,i);var a;if(t.length<=1)return Y`
        <text
          class=${e}
          x=${o}
          y=${n}
          style=${`font-size:${s}px;`}
          dominant-baseline=${r?"middle":Z}
        >
          ${null!==(a=t[0])&&void 0!==a?a:""}
        </text>
      `;const l=this._textLineGap(e,t,i),d=n-l/2;return Y`
      ${t.map((t,n)=>Y`
            <text
              class=${e}
              x=${o}
              y=${d+n*l}
              style=${`font-size:${s}px;`}
              dominant-baseline=${r?"middle":Z}
            >
              ${t}
            </text>
          `)}
    `}_renderSecondaryActionHitArea(e,t,n){if(this.host.editable||!e.secondaryAction)return Z;const i=this._textLineGap("node-secondary",t,e),o=t.length<=1?28:i*(t.length-1)+30,r=(t.length<=1?n:n-i/2)+(t.length-1)*i/2,s=Math.max(52,1.55*e.radius);return Y`
      <rect
        class="value-hit secondary-value-hit"
        x=${-s/2}
        y=${r-o/2}
        width=${s}
        height=${o}
        rx="8"
        @click=${t=>this.host._emitNodeAction(e.secondaryAction,t)}
      />
    `}_textLineGap(e,t,n){return t.length>1?this._radiusLerp(n.radius,26,30):18}_textFontSize(e,t,n){return e.includes("flow-icon-arrow")?this._radiusLerp(n.radius,22,28):t.length>1?this._radiusLerp(n.radius,26,30):this._radiusLerp(n.radius,26,28)}_radiusLerp(e,t,n){return function(e,t,n,i,o){return i+(o-i)*ye((e-20)/80,0,1)}(e,0,0,t,n)}_renderNodeIcons(e,t=""){const n=[e.icon,e.secondaryIcon].filter(Boolean);if(0===n.length)return Z;if(1===n.length){const{scale:i,y:o}=this._nodeIconMetrics(e);return this._renderIconAt(n[0],0,o,i,t)}const{scale:i,y:o,gap:r}=this._dualIconMetrics(e);return Y`
      ${n.slice(0,2).map((e,n)=>this._renderIconAt(e,0===n?-r:r,o,i,t))}
    `}_renderIconAt(e,t,n,i,o=""){return this._renderExternalIconAt(e,t,n,i,o)}_renderExternalIconAt(e,t,n,i,o=""){const r=(e=>Me.get(e))(e);if(!r)return Z;const s=68*i,a=s/2;return Y`
      <svg
        class=${`node-icon-svg ${o}`.trim()}
        x=${t-a}
        y=${n-a}
        width=${s}
        height=${s}
        viewBox=${r.viewBox}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <path d=${r.path}></path>
        ${r.secondaryPath?Y`<path class="node-icon-secondary-path" d=${r.secondaryPath}></path>`:Z}
      </svg>
    `}_renderNodeFlowArrow(e){if(!this.host._hasNodeFlowArrow(e))return Z;const t=e.icon&&e.secondaryIcon?this._dualIconMetrics(e):void 0,{y:n,scale:i}=null!=t?t:this._nodeIconMetrics(e),o=(t?-t.gap:0)+68*i*.42+10,r=this._nodeFlowArrow(e);return Y`<text class="flow-icon-arrow" x=${o} y=${n+3} dominant-baseline="middle">${r}</text>`}_nodeFlowArrow(e){return this.host._nodeFlowValue(e)>=0?"→":"←"}_nodeIconMetrics(e){if("leaf"===e.kind){const t=void 0!==e.secondary;return{scale:(t?ye(.58*e.radius,24,52):ye(.64*e.radius,26,58))/68,y:t?this._radiusLerp(e.radius,-8,-5):this._radiusLerp(e.radius,-2,0)}}return{scale:ye(.62*e.radius,28,60)/68,y:0}}_dualIconMetrics(e){return{scale:(void 0!==e.secondary&&"leaf"===e.kind?ye(.42*e.radius,16,34):ye(.48*e.radius,18,40))/68,y:0,gap:ye(.26*e.radius,12,24)}}},je=class{constructor(e){this.host=e}normalizeLinks(e){return this._normalizedLinks(e)}clearInteraction(e){return this._clearInteraction(e)}handlePointerMove(e){return this._handlePointerMove(e)}handlePointerUp(e){return this._handlePointerUp(e)}handleKeydown(e){return this._handleKeydown(e)}selectLink(e,t){return this._selectLink(e,t)}startAnchorDrag(e,t,n){return this._startAnchorDrag(e,t,n)}startPendingLink(e,t,n){return this._startPendingLink(e,t,n)}commitPendingLink(e,t,n){return this._commitPendingLink(e,t,n)}startNodeDrag(e,t){return this._startNodeDrag(e,t)}startLabelDrag(e,t,n,i){return this._startLabelDrag(e,t,n,i)}canonicalLink(e,t,n,i){return this._canonicalLink(e,t,n,i)}manualLink(e){return this._manualLink(e)}replaceLink(e,t){return this._replaceLink(e,t)}pendingJunctionConnectionCandidate(e,t,n){return this._pendingJunctionConnectionCandidate(e,t,n)}isCompatibleLink(e,t){return this._isCompatibleLink(e,t)}canStartLink(e){return this._canStartLink(e)}sameLinkEnds(e,t,n){return this._sameLinkEnds(e,t,n)}_startAnchorDrag(e,t,n){if(!this.host.editable)return;const i=this.host._eventPoint(e),o=i?this.host._anchorIndexForPointerPoint(t.node,i,t.anchorIndex,n):n;this.host.selectedLink=t.link.id,this.host.selectedNode=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this._anchorDrag={end:t.end,linkId:t.link.id,nodeId:t.node.id,pointerId:e.pointerId},this._setLinkEndAnchor(t.link.id,t.end,o,!0,!0),this.host._capturePointer(e),e.stopPropagation(),e.preventDefault()}_startPendingLink(e,t,n){if(!this.host.editable)return;if(!this._canStartLink(t))return;const i=this.host._eventPoint(e),o=i?this.host._anchorIndexForPointerPoint(t,i,void 0,n):n;this.host.selectedLink=void 0,this.host.pendingLink={from:t.id,fromAnchor:o},this.host.pointerPoint=null!=i?i:this.host._anchorPoint(t,o),this.host.hoverTarget=void 0,this.host._capturePointer(e),e.stopPropagation(),e.preventDefault()}_commitPendingLink(e,t,n){if(!this.host.editable)return;if(!this.host.pendingLink)return;const i=this.host._model().nodes[this.host.pendingLink.from];if(!i||!this._isCompatibleLink(i,t))return;const o=this._manualLink(this._canonicalLink(i,t,this.host.pendingLink.fromAnchor,n)),r=this._replaceLink(this.host.links,o);this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host.selectedLink=void 0,this.host.selectedNode=void 0,this.host.links=r,this.host._emitLinksChange(r),e.stopPropagation(),e.preventDefault()}_canonicalLink(e,t,n,i){return"leaf"===e.kind&&"junction"===t.kind?{id:`${e.id}->${t.id}`,from:e.id,to:t.id,fromAnchor:n,fromAnchorMode:"auto",toAnchor:i,toAnchorMode:"auto"}:"leaf"===t.kind&&"junction"===e.kind?{id:`${t.id}->${e.id}`,from:t.id,to:e.id,fromAnchor:i,fromAnchorMode:"auto",toAnchor:n,toAnchorMode:"auto"}:("junction"===e.kind&&t.kind,{id:`${e.id}->${t.id}`,from:e.id,to:t.id,fromAnchor:n,fromAnchorMode:"auto",toAnchor:i,toAnchorMode:"auto"})}_manualLink(e){return{...e,fromAnchorMode:"manual",toAnchorMode:"manual"}}_replaceLink(e,t){return[...e.filter(e=>!(e.from===t.from&&e.to===t.to||e.from===t.to&&e.to===t.from)),t]}_autoAnchorLinksForNode(e){const t=this._junctionJoinInfoForMovingJunction(e);let n=!1;const i=this.host.links.map(i=>{if(i.from===e||i.to===e){var o;const e=t.get(i.id),r=null!==(o=null==e?void 0:e.joinId)&&void 0!==o?o:i.junctionJoinId;return void 0===i.fromAnchor&&void 0===i.fromAnchorMode&&void 0===i.toAnchor&&void 0===i.toAnchorMode&&r===i.junctionJoinId?i:(n=!0,{...i,fromAnchor:void 0,fromAnchorMode:void 0,toAnchor:void 0,toAnchorMode:void 0,junctionJoinId:r})}return i});return n?i:this.host.links}_junctionJoinInfoForMovingJunction(e){const t=this.host._model(),n=t.nodes[e],i=/* @__PURE__ */new Map;if(!n||"junction"!==n.kind)return i;const o=this.host.links.filter(n=>{if(n.from!==e&&n.to!==e)return!1;const i=t.nodes[n.from===e?n.to:n.from];return"junction"===(null==i?void 0:i.kind)}),r=/* @__PURE__ */new Map;return o.forEach(t=>{var n,i;const o=this.host._linkAnchor(t,e),s=null!==(n=t.junctionJoinId)&&void 0!==n?n:void 0!==o?`legacy-anchor-${this.host._normalizeAnchorIndex(o)}`:void 0;s&&r.set(s,[...null!==(i=r.get(s))&&void 0!==i?i:[],t])}),r.forEach(t=>{var n;if(t.length<2)return;const o=t.map(t=>t.from===e?t.to:t.from).sort(),r=null!==(n=t[0].junctionJoinId)&&void 0!==n?n:this._junctionJoinId(o[0],o[1],e);t.forEach(e=>i.set(e.id,{joinId:r}))}),i}_selectLink(e,t){var n;this.host.editable&&(this.host.selectedLink=t,this.host.selectedNode=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,null===(n=this.host.renderRoot.querySelector(".flow-svg"))||void 0===n||n.focus(),e.stopPropagation(),e.preventDefault())}_handleKeydown(e){if("Escape"===e.key)return this.host.selectedLink=void 0,this.host.selectedNode=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,void e.preventDefault();if(this.host.selectedLink&&("Delete"===e.key||"Backspace"===e.key)){const t=this.host.selectedLink;this.host.selectedLink=void 0,this.host.links=this._linksAfterLinkDelete(t),this.host._emitLinksChange(this.host.links),e.stopPropagation(),e.preventDefault()}if(this.host.selectedNode&&("Delete"===e.key||"Backspace"===e.key)){const t=this.host.selectedNode;this.host.selectedNode=void 0,this.host.selectedLink=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host._emitNodeRemove(t),this.host._emitNodeSelect(void 0),e.stopPropagation(),e.preventDefault()}}_setLinkEndAnchor(e,t,n,i=!0,o=!1){const r=this.host._normalizeAnchorIndex(n);let s=!1;const a=this.host.links.map(n=>{if(n.id!==e)return n;const i="from"===t?{...n,fromAnchor:r,fromAnchorMode:"manual"}:{...n,toAnchor:r,toAnchorMode:"manual"};return s=s||i.fromAnchor!==n.fromAnchor||i.fromAnchorMode!==n.fromAnchorMode||i.toAnchor!==n.toAnchor||i.toAnchorMode!==n.toAnchorMode,i});s&&(this.host.links=a,i&&this.host._emitLinksChange(a,o))}_startNodeDrag(e,t){var n;if(!this.host.editable)return;if(this.host.pendingLink)return;const i=this.host._eventPoint(e);if(!i)return;this.host.selectedNode=t.id,this.host.selectedLink=void 0,this.host._emitNodeSelect(t.id),null===(n=this.host.renderRoot.querySelector(".flow-svg"))||void 0===n||n.focus();const o=this.host._model();this._drag={attachedLeaves:this._overlappingUnlinkedLeaves(t,o),id:t.id,pointerId:e.pointerId,startX:i.x,startY:i.y,offsetX:i.x-t.point.x,offsetY:i.y-t.point.y,moved:!1},this.host.activeNode=t.id,this.host._capturePointer(e),e.stopPropagation(),e.preventDefault()}_startLabelDrag(e,t,n,i){var o;if(!this.host.editable)return;const r=this.host._eventPoint(e);if(!r)return;const s="straight"===this.host.labelStyle?this.host._nodeStraightLabelPoint(t,n,i):this.host._nodeCurvedLabelHandlePoint(t,n,i);this.host.selectedNode=t.id,this.host.selectedLink=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host._emitNodeSelect(t.id),null===(o=this.host.renderRoot.querySelector(".flow-svg"))||void 0===o||o.focus(),this._labelDrag="straight"===this.host.labelStyle?{dragOffsetX:r.x-s.x,dragOffsetY:r.y-s.y,mode:"straight",nodeId:t.id,pointerId:e.pointerId}:{dragOffsetX:0,dragOffsetY:0,mode:"curved",nodeId:t.id,pointerId:e.pointerId},this.host._capturePointer(e),e.stopPropagation(),e.preventDefault()}_handlePointerMove(e){var t;if(!this.host.editable)return;const n=this.host._eventPoint(e);if(!n)return;const i=this._anchorDrag;if(i&&e.pointerId===i.pointerId){const e=this.host._model().nodes[i.nodeId];if(!e)return;return void this._setLinkEndAnchor(i.linkId,i.end,this.host._nearestAnchorIndex(e,n),!0,!0)}const o=this._labelDrag;if(o&&e.pointerId===o.pointerId){const e=this.host._model().nodes[o.nodeId];if(!e)return;if("curved"===o.mode)this.host._emitNodeLabelChange({nodeId:e.id,labelAngle:Math.atan2(n.y-e.point.y,n.x-e.point.x),labelOffsetX:e.labelOffsetX,labelOffsetY:e.labelOffsetY},!0);else{const t=n.x-o.dragOffsetX,i=n.y-o.dragOffsetY;this.host._emitNodeLabelChange({nodeId:e.id,labelAngle:e.labelAngle,labelOffsetX:t-e.point.x,labelOffsetY:i-e.point.y},!0)}return}if(this.host.pendingLink){var r;const e=this.host._model();return this.host.pointerPoint=n,void(this.host.hoverTarget=null===(r=this._nearestCompatibleTarget(e.nodes[this.host.pendingLink.from],n,e.nodes))||void 0===r?void 0:r.id)}const s=this._drag;if(!s||e.pointerId!==s.pointerId)return;if(!s.moved){if(Math.hypot(n.x-s.startX,n.y-s.startY)<4)return;s.moved=!0;const e=this._autoAnchorLinksForNode(s.id);e!==this.host.links&&(s.anchorsChanged=!0,this.host.links=e,this.host._emitLinksChange(e,!0))}const a=this.host._clampedPoint({x:n.x-s.offsetX,y:n.y-s.offsetY}),l=this.host._model().nodes[s.id]?{x:s.startX-s.offsetX,y:s.startY-s.offsetY}:a,d=a.x-l.x,h=a.y-l.y,c=Object.fromEntries((null!==(t=s.attachedLeaves)&&void 0!==t?t:[]).map(e=>[e.id,this.host._clampedPoint({x:e.point.x+d,y:e.point.y+h})]));this.host.layout={...this.host.layout,...c,[s.id]:a},this.host._emitLayoutChange(this.host.layout,!0)}_handlePointerUp(e){var t;if(!this.host.editable)return;const n=this._anchorDrag;if(n&&e.pointerId===n.pointerId){var i;const t=e.target;return(null==t||null===(i=t.hasPointerCapture)||void 0===i?void 0:i.call(t,e.pointerId))&&t.releasePointerCapture(e.pointerId),this._anchorDrag=void 0,this.host._emitLinksChange(this.host.links),e.stopPropagation(),void e.preventDefault()}const o=this._labelDrag;if(o&&e.pointerId===o.pointerId){var r;const t=this.host._eventPoint(e),n=this.host._model().nodes[o.nodeId],i=e.target;if((null==i||null===(r=i.hasPointerCapture)||void 0===r?void 0:r.call(i,e.pointerId))&&i.releasePointerCapture(e.pointerId),this._labelDrag=void 0,t&&n)if("curved"===o.mode)this.host._emitNodeLabelChange({nodeId:n.id,labelAngle:Math.atan2(t.y-n.point.y,t.x-n.point.x),labelOffsetX:n.labelOffsetX,labelOffsetY:n.labelOffsetY});else{const e=t.x-o.dragOffsetX,i=t.y-o.dragOffsetY;this.host._emitNodeLabelChange({nodeId:n.id,labelAngle:n.labelAngle,labelOffsetX:e-n.point.x,labelOffsetY:i-n.point.y})}return e.stopPropagation(),void e.preventDefault()}if(this.host.pendingLink){var s,a;const t=e.target;(null==t||null===(s=t.hasPointerCapture)||void 0===s?void 0:s.call(t,e.pointerId))&&t.releasePointerCapture(e.pointerId);const n=null!==(a=this.host._eventPoint(e))&&void 0!==a?a:this.host.pointerPoint;if(n){var l;this.host.pointerPoint=n;const t=this.host._model(),i=t.nodes[this.host.pendingLink.from],o=null!==(l=this.host.hoverTarget?t.nodes[this.host.hoverTarget]:void 0)&&void 0!==l?l:this._nearestCompatibleTarget(i,n,t.nodes);if(o)return void this._commitPendingLink(e,o,this.host._nearestAnchorIndex(o,n));const r=this._pendingJunctionConnectionCandidate(i,n,t.nodes);if(r)return void this._commitPendingLinkToJunctionConnection(e,r)}return this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host.selectedLink=void 0,this.host.selectedNode=void 0,e.stopPropagation(),void e.preventDefault()}const d=this._drag;if(!d||e.pointerId!==d.pointerId)return;const h=e.target;if((null==h||null===(t=h.hasPointerCapture)||void 0===t?void 0:t.call(h,e.pointerId))&&h.releasePointerCapture(e.pointerId),this._drag=void 0,this.host.activeNode=void 0,d.moved){const e=this._connectJunctionToWrappedConnection(d.id),t=d.anchorsChanged||e!==this.host.links;this.host.links=e,this.host._emitLayoutChange(this.host.layout),t&&this.host._emitLinksChange(this.host.links)}}_clearInteraction(e){this.host.editable&&e.currentTarget===e.target&&(this.host.selectedNode=void 0,this.host.selectedLink=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host._emitNodeSelect(void 0))}_nextLayout(e,t){return{...this.host.layout,[e]:this.host._clampedPoint(t)}}_overlappingUnlinkedLeaves(e,t){return Object.values(t.nodes).filter(t=>"leaf"===t.kind&&t.id!==e.id&&t.stackIndex<e.stackIndex).filter(t=>Math.hypot(t.point.x-e.point.x,t.point.y-e.point.y)<t.radius+e.radius).filter(e=>!this.host.links.some(t=>t.from===e.id||t.to===e.id)).map(e=>({id:e.id,point:{...e.point}}))}_normalizedLinks(e){return this.host.links.filter(t=>{const n=e[t.from],i=e[t.to];return Boolean(n&&i&&this._isCompatibleLink(n,i))})}_connectJunctionToWrappedConnection(e){const t=this.host._model(),n=t.nodes[e];if(!n||"junction"!==n.kind)return this.host.links;const i=this._wrappedJunctionConnectionCandidate(n,t.nodes);return i?this._splitJunctionConnectionWithJunction(i.link,n.id,this._junctionConnectionSnapAnchor(i.detour)):this.host.links}_wrappedJunctionConnectionCandidate(e,t){return this.host.links.map(n=>{const i=t[n.from],o=t[n.to];if(!i||!o||"junction"!==i.kind||"junction"!==o.kind||i.id===e.id||o.id===e.id)return;const r=this.host._connectionPoint(i,o,this.host._linkAnchor(n,i.id),0),s=this.host._connectionPoint(o,i,this.host._linkAnchor(n,o.id),0),a=this.host._junctionLineDetour(r,s,e);return a?{detour:a,link:n,score:Math.abs(a.signedDistance)}:void 0}).filter(e=>Boolean(e)).sort((e,t)=>e.score-t.score)[0]}_pendingJunctionConnectionCandidate(e,t,n){if(e&&"junction"===e.kind)return this.host.links.map(i=>{const o=n[i.from],r=n[i.to];if(!o||!r||"junction"!==o.kind||"junction"!==r.kind||o.id===e.id||r.id===e.id)return;const s=this.host._connectionPoint(o,r,this.host._linkAnchor(i,o.id),0),a=this.host._connectionPoint(r,o,this.host._linkAnchor(i,r.id),0),l=this.host._junctionLineDetour(s,a,e),d=xe(t,s,a);return d.distance>28?void 0:{detour:l,link:i,point:d.point,score:d.distance}}).filter(e=>Boolean(e)).sort((e,t)=>e.score-t.score)[0]}_commitPendingLinkToJunctionConnection(e,t){if(!this.host.pendingLink)return;const n=this.host.pendingLink.from,i=t.detour?this._junctionConnectionSnapAnchor(t.detour):this.host.pendingLink.fromAnchor,o=this._splitJunctionConnectionWithJunction(t.link,n,i);this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host.selectedLink=void 0,this.host.selectedNode=void 0,this.host.links=o,this.host._emitLinksChange(o),e.stopPropagation(),e.preventDefault()}_splitJunctionConnectionWithJunction(e,t,n){var i;const o=null!==(i=e.junctionJoinId)&&void 0!==i?i:this._junctionJoinId(e.from,e.to,t),r=this._splitWrappedJunctionLink(e,e.from,t,{fromAnchor:e.fromAnchor,fromAnchorMode:e.fromAnchorMode,toAnchor:n,toAnchorMode:void 0===n?void 0:"manual",junctionJoinId:o}),s=this._splitWrappedJunctionLink(e,t,e.to,{fromAnchor:n,fromAnchorMode:void 0===n?void 0:"manual",toAnchor:e.toAnchor,toAnchorMode:e.toAnchorMode,junctionJoinId:o});return[...this.host.links.filter(t=>t.id!==e.id&&!this._sameLinkEnds(t,r.from,r.to)&&!this._sameLinkEnds(t,s.from,s.to)),r,s]}_splitWrappedJunctionLink(e,t,n,i){return{id:`${t}->${n}`,from:t,to:n,attribute:e.attribute,color:e.color,displayValue:e.displayValue,entity:e.entity,factor:e.factor,flowMaxValue:e.flowMaxValue,flowMinVisibleValue:e.flowMinVisibleValue,invert:e.invert,unit:e.unit,value:e.value,...i}}_junctionJoinId(e,t,n){const[i,o]=[e,t].sort();return`${i}--${o}--via-${n}`}_linksAfterLinkDelete(e){const t=this.host._model(),n=this.host.links.find(t=>t.id===e);if(!n)return this.host.links;const i=this.host._junctionJoinGeometry(n,t.nodes,this.host.links);return(null==i?void 0:i.branchLinkId)===e&&i.busLinkId&&i.branchLinkId?this._linksAfterBranchDelete(i):(null==i?void 0:i.busLinkId)===e&&i.branchLinkId?this.host.links.filter(e=>e.id!==i.busLinkId&&e.id!==i.branchLinkId):this.host.links.filter(t=>t.id!==e)}_linksAfterBranchDelete(e){const t=this.host.links.find(t=>t.id===e.busLinkId),n=this.host.links.find(t=>t.id===e.branchLinkId);if(!t||!n)return this.host.links.filter(t=>t.id!==e.branchLinkId);const i=this._restoredJunctionBusLink(e,t,n);return[...this.host.links.filter(e=>e.id!==t.id&&e.id!==n.id&&!this._sameLinkEnds(e,i.from,i.to)),i]}_restoredJunctionBusLink(e,t,n){const i=this._linkAnchorFields(t,e.firstOuterId),o=this._linkAnchorFields(n,e.secondOuterId);return{...t,id:`${e.firstOuterId}->${e.secondOuterId}`,from:e.firstOuterId,to:e.secondOuterId,fromAnchor:i.anchor,fromAnchorMode:i.mode,toAnchor:o.anchor,toAnchorMode:o.mode,junctionJoinId:void 0}}_linkAnchorFields(e,t){return e.from===t?{anchor:e.fromAnchor,mode:e.fromAnchorMode}:e.to===t?{anchor:e.toAnchor,mode:e.toAnchorMode}:{}}_sameLinkEnds(e,t,n){return e.from===t&&e.to===n||e.from===n&&e.to===t}_junctionConnectionSnapAnchor(e){return e.tapAnchor}_isCompatibleLink(e,t){const n=/* @__PURE__ */new Set([e.kind,t.kind]);return!(!n.has("leaf")||!n.has("junction"))||"junction"===e.kind&&"junction"===t.kind}_canStartLink(e){return"junction"===e.kind||"leaf"===e.kind}_nearestCompatibleTarget(e,t,n){var i;if(e)return null===(i=Object.values(n).filter(t=>t.id!==e.id&&this._isCompatibleLink(e,t)).map(e=>({node:e,distance:Math.hypot(e.point.x-t.x,e.point.y-t.y)})).filter(({node:e,distance:t})=>t<=e.radius+46).sort((e,t)=>e.distance-t.distance)[0])||void 0===i?void 0:i.node}};function Ve(e,t){const n=t.replace(/^M\s*-?\d+(?:\.\d+)?(?:e[-+]?\d+)?\s+-?\d+(?:\.\d+)?(?:e[-+]?\d+)?\s*/i,"").trim();return n?`${e} ${n}`:e}function Oe(e){return 1===e?0:1}function Fe(e,t,n){return Math.abs(e.x-t.x)<3?`M${e.x} ${e.y} L${t.x} ${t.y}`:[`M${e.x} ${e.y}`,`L${e.x} ${n}`,`L${t.x} ${n}`,`L${t.x} ${t.y}`].join(" ")}function De(e,t,n){return Math.abs(e.y-t.y)<3?`M${e.x} ${e.y} L${t.x} ${t.y}`:[`M${e.x} ${e.y}`,`L${n} ${e.y}`,`L${n} ${t.y}`,`L${t.x} ${t.y}`].join(" ")}function Te(e,t,n){const i=Math.abs(t.y-e.y),o=ye(.26*i,18,36),r=ye(.22*i,16,30),s="down"===n?e.y+o:e.y-o,a="down"===n?t.y-o:t.y+o;return Math.abs(e.x-t.x)<3||Math.abs(a-s)<6?`M${e.x} ${e.y} L${t.x} ${t.y}`:[`M${e.x} ${e.y}`,`L${e.x} ${s}`,`C${e.x} ${"down"===n?s+r:s-r} ${t.x} ${"down"===n?a-r:a+r} ${t.x} ${a}`,`L${t.x} ${t.y}`].join(" ")}function Re(e,t,n){const i=Math.abs(t.x-e.x),o=ye(.26*i,18,36),r=ye(.22*i,16,30),s="right"===n?e.x+o:e.x-o,a="right"===n?t.x-o:t.x+o;return Math.abs(e.y-t.y)<3||Math.abs(a-s)<6?`M${e.x} ${e.y} L${t.x} ${t.y}`:[`M${e.x} ${e.y}`,`L${s} ${e.y}`,`C${"right"===n?s+r:s-r} ${e.y} ${"right"===n?a-r:a+r} ${t.y} ${a} ${t.y}`,`L${t.x} ${t.y}`].join(" ")}var Je,Be=10,ze=class{constructor(e,t){this.routing=e,this.connectionPoint=t}connectorPath(e,t,n,i,o){const r=this._linkedLeafNodes(n.id,i,o),s=this._sortedLaneNodes(r.filter(e=>e.point.y<=n.point.y-n.radius),"x"),a=this._sortedLaneNodes(r.filter(e=>e.point.y>=n.point.y+n.radius),"x"),l=this._sortedLaneNodes(r.filter(e=>e.point.x<=n.point.x),"y"),d=this._sortedLaneNodes(r.filter(e=>e.point.x>=n.point.x),"y"),h={from:this._linkAnchor(e,t.id),to:this._linkAnchor(e,n.id)};if("radial"===this.routing)return this._radialConnectorPath(t,n,h);if("sweep"===this.routing)return this._defaultConnectorPath(t,n,h);switch(this._leafConnectorSide(t,n)){case"upper":return"channel"===this.routing?this._upperLeafChannelPath(t,n,this._laneSlotForNode(t.id,s).index,Math.max(1,s.length),h):"orthogonal"===this.routing?this._upperLeafOrthogonalPath(t,n,this._laneSlotForNode(t.id,s).index,Math.max(1,s.length),h):this._upperLeafConnectorPath(t,n,this._laneSlotForNode(t.id,s).index,Math.max(1,s.length),h);case"lower":return"channel"===this.routing?this._lowerLeafChannelPath(t,n,this._laneSlotForNode(t.id,a).index,Math.max(1,a.length),h):"orthogonal"===this.routing?this._lowerLeafOrthogonalPath(t,n,this._laneSlotForNode(t.id,a).index,Math.max(1,a.length),h):this._lowerLeafConnectorPath(t,n,this._laneSlotForNode(t.id,a).index,Math.max(1,a.length),h);case"left":return"channel"===this.routing?this._leftLeafChannelPath(t,n,this._laneSlotForNode(t.id,l).index,Math.max(1,l.length),h):"orthogonal"===this.routing?this._leftLeafOrthogonalPath(t,n,this._laneSlotForNode(t.id,l).index,Math.max(1,l.length),h):this._leftLeafConnectorPath(t,n,this._laneSlotForNode(t.id,l).index,Math.max(1,l.length),h);case"right":return"channel"===this.routing?this._rightLeafChannelPath(t,n,this._laneSlotForNode(t.id,d).index,Math.max(1,d.length),h):"orthogonal"===this.routing?this._rightLeafOrthogonalPath(t,n,this._laneSlotForNode(t.id,d).index,Math.max(1,d.length),h):this._rightLeafConnectorPath(t,n,this._laneSlotForNode(t.id,d).index,Math.max(1,d.length),h);default:return this._radialConnectorPath(t,n,h)}}autoAnchorReference(e,t,n,i){return this._leafAutoAnchorReferencePoint(e,t,n,i)}defaultConnectorPath(e,t,n={}){return this._defaultConnectorPath(e,t,n)}linkAnchor(e,t){return this._linkAnchor(e,t)}guideNode(e,t){return this._guideNode(e,t)}_leafConnectorSide(e,t){const n=e.point.x-t.point.x,i=e.point.y-t.point.y,o=Math.max(0,Math.abs(n)-t.radius),r=Math.max(0,Math.abs(i)-t.radius);return o<=0&&r<=0?"radial":r>=o?i<=0?"upper":"lower":n<=0?"left":"right"}_leafAutoAnchorReferencePoint(e,t,n,i){const o="from"===t?e.from:e.to,r="from"===t?e.to:e.from,s=n[o],a=n[r];if(!s||!a||"leaf"!==s.kind||"junction"!==a.kind)return;if("radial"===this.routing||"sweep"===this.routing)return a.point;const l=this._linkedLeafNodes(a.id,n,i),d=this._sortedLaneNodes(l.filter(e=>e.point.y<=a.point.y-a.radius),"x"),h=this._sortedLaneNodes(l.filter(e=>e.point.y>=a.point.y+a.radius),"x"),c=this._sortedLaneNodes(l.filter(e=>e.point.x<=a.point.x),"y"),u=this._sortedLaneNodes(l.filter(e=>e.point.x>=a.point.x),"y");switch(this._leafConnectorSide(s,a)){case"upper":return this._upperLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,d).index,Math.max(1,d.length));case"lower":return this._lowerLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,h).index,Math.max(1,h.length));case"left":return this._leftLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,c).index,Math.max(1,c.length));case"right":return this._rightLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,u).index,Math.max(1,u.length));default:return a.point}}_upperLeafConnectorPath(e,t,n,i,o={}){if(e.point.y>=t.point.y-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,n,i,Math.max(0,t.radius-22)),s=t.point.y-t.radius-Be-16,a=this._guideNode(`${e.id}-upper-drop`,{x:t.point.x,y:s}),l=this._guideNode(`${t.id}-upper-neck`,{x:r,y:s}),d=this.connectionPoint(e,a,o.from),h=this.connectionPoint(t,l,o.to,0),c=Math.max(0,h.y-d.y);if(Math.abs(d.x-h.x)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=d.y+ye(.42*c,38,72),p=ye(.35*(u-d.y),16,28);return[`M${d.x} ${d.y}`,`C${d.x} ${d.y+p} ${h.x} ${u-p} ${h.x} ${u}`,`L${h.x} ${h.y}`].join(" ")}_lowerLeafConnectorPath(e,t,n,i,o={}){if(e.point.y<=t.point.y+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,n,i,Math.max(0,t.radius-22)),s=t.point.y+t.radius+Be+16,a=this._guideNode(`${e.id}-lower-drop`,{x:e.point.x,y:s}),l=this._guideNode(`${t.id}-lower-neck`,{x:r,y:s}),d=this.connectionPoint(e,a,o.from),h=this.connectionPoint(t,l,o.to,0),c=Math.max(0,d.y-h.y);if(Math.abs(d.x-h.x)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=h.y+ye(.58*c,44,76),p=ye(.35*(d.y-u),16,28);return[`M${d.x} ${d.y}`,`C${d.x} ${d.y-p} ${h.x} ${u+p} ${h.x} ${u}`,`L${h.x} ${h.y}`].join(" ")}_leftLeafConnectorPath(e,t,n,i,o={}){if(e.point.x>=t.point.x-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,n,i,Math.max(0,t.radius-22)),s=t.point.x-t.radius-Be-16,a=this._guideNode(`${e.id}-left-spread`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-left-neck`,{x:s,y:r}),d=this.connectionPoint(e,a,o.from),h=this.connectionPoint(t,l,o.to,0),c=Math.max(0,h.x-d.x);if(Math.abs(d.y-h.y)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=d.x+ye(.42*c,38,72),p=ye(.35*(u-d.x),16,28);return[`M${d.x} ${d.y}`,`C${d.x+p} ${d.y} ${u-p} ${h.y} ${u} ${h.y}`,`L${h.x} ${h.y}`].join(" ")}_rightLeafConnectorPath(e,t,n,i,o={}){if(e.point.x<=t.point.x+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,n,i,Math.max(0,t.radius-22)),s=t.point.x+t.radius+Be+16,a=this._guideNode(`${e.id}-right-spread`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-right-neck`,{x:s,y:r}),d=this.connectionPoint(e,a,o.from),h=this.connectionPoint(t,l,o.to,0),c=Math.max(0,d.x-h.x);if(Math.abs(d.y-h.y)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=d.x-ye(.42*c,38,72),p=ye(.35*(d.x-u),16,28);return[`M${d.x} ${d.y}`,`C${d.x-p} ${d.y} ${u+p} ${h.y} ${u} ${h.y}`,`L${h.x} ${h.y}`].join(" ")}_upperLeafChannelPath(e,t,n,i,o={}){if(e.point.y>=t.point.y-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,n,i,Math.max(0,t.radius-18)),s=t.point.y-t.radius-Be-18,a=this._guideNode(`${e.id}-upper-channel`,{x:e.point.x,y:s}),l=this._guideNode(`${t.id}-upper-channel`,{x:r,y:s});return Te(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),"down")}_lowerLeafChannelPath(e,t,n,i,o={}){if(e.point.y<=t.point.y+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,n,i,Math.max(0,t.radius-18)),s=t.point.y+t.radius+Be+18,a=this._guideNode(`${e.id}-lower-channel`,{x:e.point.x,y:s}),l=this._guideNode(`${t.id}-lower-channel`,{x:r,y:s});return Te(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),"up")}_leftLeafChannelPath(e,t,n,i,o={}){if(e.point.x>=t.point.x-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,n,i,Math.max(0,t.radius-18)),s=t.point.x-t.radius-Be-18,a=this._guideNode(`${e.id}-left-channel`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-left-channel`,{x:s,y:r});return Re(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),"right")}_rightLeafChannelPath(e,t,n,i,o={}){if(e.point.x<=t.point.x+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,n,i,Math.max(0,t.radius-18)),s=t.point.x+t.radius+Be+18,a=this._guideNode(`${e.id}-right-channel`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-right-channel`,{x:s,y:r});return Re(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),"left")}_upperLeafAnchorReferencePoint(e,t,n,i){return"channel"===this.routing||"orthogonal"===this.routing?{x:e.point.x,y:t.point.y-t.radius-Be-18}:{x:t.point.x,y:t.point.y-t.radius-Be-16}}_lowerLeafAnchorReferencePoint(e,t,n,i){return"channel"===this.routing||"orthogonal"===this.routing?{x:e.point.x,y:t.point.y+t.radius+Be+18}:{x:e.point.x,y:t.point.y+t.radius+Be+16}}_leftLeafAnchorReferencePoint(e,t,n,i){return"channel"===this.routing||"orthogonal"===this.routing?{x:t.point.x-t.radius-Be-18,y:e.point.y}:{x:t.point.x-t.radius-Be-16,y:e.point.y}}_rightLeafAnchorReferencePoint(e,t,n,i){return"channel"===this.routing||"orthogonal"===this.routing?{x:t.point.x+t.radius+Be+18,y:e.point.y}:{x:t.point.x+t.radius+Be+16,y:e.point.y}}_upperLeafOrthogonalPath(e,t,n,i,o={}){if(e.point.y>=t.point.y-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,n,i,Math.max(0,t.radius-18)),s=t.point.y-t.radius-Be-18,a=this._guideNode(`${e.id}-upper-orthogonal`,{x:e.point.x,y:s}),l=this._guideNode(`${t.id}-upper-orthogonal`,{x:r,y:s});return Fe(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),s)}_lowerLeafOrthogonalPath(e,t,n,i,o={}){if(e.point.y<=t.point.y+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,n,i,Math.max(0,t.radius-18)),s=t.point.y+t.radius+Be+18,a=this._guideNode(`${e.id}-lower-orthogonal`,{x:e.point.x,y:s}),l=this._guideNode(`${t.id}-lower-orthogonal`,{x:r,y:s});return Fe(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),s)}_leftLeafOrthogonalPath(e,t,n,i,o={}){if(e.point.x>=t.point.x-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,n,i,Math.max(0,t.radius-18)),s=t.point.x-t.radius-Be-18,a=this._guideNode(`${e.id}-left-orthogonal`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-left-orthogonal`,{x:s,y:r});return De(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),s)}_rightLeafOrthogonalPath(e,t,n,i,o={}){if(e.point.x<=t.point.x+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,n,i,Math.max(0,t.radius-18)),s=t.point.x+t.radius+Be+18,a=this._guideNode(`${e.id}-right-orthogonal`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-right-orthogonal`,{x:s,y:r});return De(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),s)}_defaultConnectorPath(e,t,n={}){const i=this.connectionPoint(e,t,n.from,"junction"===e.kind&&"leaf"===t.kind?0:void 0),o=this.connectionPoint(t,e,n.to,"junction"===t.kind&&"leaf"===e.kind?0:void 0),r=o.x-i.x,s=o.y-i.y;if(Math.abs(r)>=Math.abs(s)){const e=.38*r;return`M${i.x} ${i.y} C${i.x+e} ${i.y} ${o.x-e} ${o.y} ${o.x} ${o.y}`}const a=.38*s;return`M${i.x} ${i.y} C${i.x} ${i.y+a} ${o.x} ${o.y-a} ${o.x} ${o.y}`}_radialConnectorPath(e,t,n={}){const i=this.connectionPoint(e,t,n.from,"junction"===e.kind&&"leaf"===t.kind?0:void 0),o=this.connectionPoint(t,e,n.to,"junction"===t.kind&&"leaf"===e.kind?0:void 0),r=t.point.x-e.point.x,s=t.point.y-e.point.y,a=Math.hypot(r,s)||1,l=r/a,d=s/a,h=ye(.32*a,46,120);return[`M${i.x} ${i.y}`,`C${i.x+l*h} ${i.y+d*h}`,`${o.x-l*h} ${o.y-d*h}`,`${o.x} ${o.y}`].join(" ")}_linkedLeafNodes(e,t,n){return this._uniqueNodes(n.map(n=>{if(n.from!==e&&n.to!==e)return;const i=t[n.from===e?n.to:n.from];return"leaf"===(null==i?void 0:i.kind)?i:void 0}).filter(e=>Boolean(e)))}_uniqueNodes(e){return Array.from(new Map(e.map(e=>[e.id,e])).values())}_sortedLaneNodes(e,t){return[...e].sort((e,n)=>{const i=e.point[t]-n.point[t];return Math.abs(i)>.1?i:e.id.localeCompare(n.id)})}_laneSlotForNode(e,t){const n=t.findIndex(t=>t.id===e);return{index:Math.max(0,n),count:Math.max(1,t.length)}}_funnelLaneCoordinate(e,t,n,i,o){if(o<=0)return t;const r=ye(e-t,-o,o);if(i<=1)return t+r;const s=this._laneOffset(n,i,72,o);return t+ye(.75*r+.25*s,-o,o)}_laneOffset(e,t,n,i){if(t<=1||i<=0)return 0;const o=(t-1)/2*n;return(e-(t-1)/2)*n*(o>i?i/o:1)}_linkAnchor(e,t){return e.from===t&&"manual"===e.fromAnchorMode?e.fromAnchor:e.to===t&&"manual"===e.toAnchorMode?e.toAnchor:void 0}_guideNode(e,t){return{id:e,kind:"junction",stackIndex:-1,label:"",value:0,radius:0,point:t,icon:"mdi:circle-small"}}},Ue=class{constructor(e,t,n,i,o,r){this.connectionPoint=e,this.defaultConnectorPath=t,this.guideNode=n,this.linkAnchor=i,this.nearestAnchorIndex=o,this.sameLinkEnds=r}connectorPath(e,t,n,i={}){return this._junctionConnectorPath(e,t,n,i)}joinedConnectionPath(e,t,n,i){return this._junctionJoinedConnectionPath(e,t,n,i)}joinGeometry(e,t,n,i){return this._junctionJoinGeometry(e,t,n,i)}lineDetour(e,t,n,i=0){return this._junctionLineDetour(e,t,n,i)}_junctionConnectorPath(e,t,n,i={}){const o=this.connectionPoint(e,t,i.from,0),r=this.connectionPoint(t,e,i.to,0),s=this._junctionLineDetours(o,r,e,t,n);if(0===s.length)return`M${o.x} ${o.y} L${r.x} ${r.y}`;const a=[`M${o.x} ${o.y}`];let l=0;return s.forEach(e=>{e.beforeDistance>l+.5&&a.push(`L${e.entry.x} ${e.entry.y}`),a.push(`A${e.radius} ${e.radius} 0 0 ${e.sweepFlag} ${e.exit.x} ${e.exit.y}`),l=e.afterDistance}),a.push(`L${r.x} ${r.y}`),a.join(" ")}_junctionLineDetours(e,t,n,i,o){return Object.values(o).filter(e=>"junction"===e.kind&&e.id!==n.id&&e.id!==i.id).map(n=>this._junctionLineDetour(e,t,n)).filter(e=>Boolean(e)).sort((e,t)=>e.beforeDistance-t.beforeDistance)}_junctionLineDetour(e,t,n,i=0){const o=t.x-e.x,r=t.y-e.y,s=Math.hypot(o,r);if(s<1)return;const a={x:o/s,y:r/s},l=-a.y,d=a.x,h=n.point.x-e.x,c=n.point.y-e.y,u=h*a.x+c*a.y,p=h*l+c*d,f=n.radius+10,_=f+Math.max(0,i),v=Math.max(18,n.radius-8),m=Math.min(f,Math.max(34,.55*n.radius));if(u<=m||u>=s-m)return;if(Math.abs(p)>_)return;const g=Math.abs(p)<v?v:Math.abs(p)>f?_:f,y=Math.sqrt(Math.max(0,g**2-p**2)),b=Math.max(0,u-y),x=Math.min(s,u+y),$=p>=0?1:0,w=1===$?-1:1,k={x:Math.round(n.point.x+l*w*g),y:Math.round(n.point.y+d*w*g)};return{afterDistance:x,beforeDistance:b,entry:{x:e.x+a.x*b,y:e.y+a.y*b},exit:{x:e.x+a.x*x,y:e.y+a.y*x},nodeId:n.id,radius:g,signedDistance:p,sweepFlag:$,tap:k,tapAnchor:this.nearestAnchorIndex(n,k)}}_junctionJoinedConnectionPath(e,t,n,i){var o;const r=this._junctionJoinGeometry(e,t,n,i);if(!r)return;return(null===(o=r.pathsByLinkId)||void 0===o?void 0:o[e.id])||(e.from===r.firstOuterId&&e.to===r.middleId?r.beforePath:e.from===r.middleId&&e.to===r.firstOuterId?r.beforeReversePath:e.from===r.middleId&&e.to===r.secondOuterId?r.afterPath:e.from===r.secondOuterId&&e.to===r.middleId?r.afterReversePath:void 0)}_junctionJoinGeometry(e,t,n,i){if(null==i?void 0:i.has(e.id))return i.get(e.id);const o=t[e.from],r=t[e.to];if(!o||!r||"junction"!==o.kind||"junction"!==r.kind)return void(null==i||i.set(e.id,void 0));const s=[o,r].map(i=>this._junctionJoinGeometryForMiddle(e,i,t,n)).filter(e=>Boolean(e))[0];return null==i||i.set(e.id,s),(null==s?void 0:s.busLinkId)&&(null==i||i.set(s.busLinkId,s)),(null==s?void 0:s.branchLinkId)&&(null==i||i.set(s.branchLinkId,s)),s}_junctionJoinGeometryForMiddle(e,t,n,i){const o=this.linkAnchor(e,t.id),r=e.junctionJoinId;if(void 0===o&&!r)return;const s=n[e.from===t.id?e.to:e.from];if(!s||"junction"!==s.kind)return;const a=i.find(i=>{if(i.id===e.id)return!1;if(i.from!==t.id&&i.to!==t.id)return!1;const s=n[i.from===t.id?i.to:i.from];return"junction"===(null==s?void 0:s.kind)&&(r&&i.junctionJoinId===r||void 0!==o&&this.linkAnchor(i,t.id)===o)});if(!a)return;const l=n[a.from===t.id?a.to:a.from];if(!l||"junction"!==l.kind)return;const[d,h]=this._orderedJoinOuters(s,l),c=this._linkBetweenNodes(e,a,d.id,t.id),u=this._linkBetweenNodes(e,a,h.id,t.id);if(!c||!u)return;const p=this.connectionPoint(d,h,this.linkAnchor(c,d.id),0),f=this.connectionPoint(h,d,this.linkAnchor(u,h.id),0),_=this._junctionLineDetour(p,f,t,r?14:0);return _?{afterPath:this._junctionJoinAfterPath(_.tap,_,f),afterReversePath:this._junctionJoinAfterReversePath(f,_,_.tap),beforePath:this._junctionJoinBeforePath(p,_,_.tap),beforeReversePath:this._junctionJoinBeforeReversePath(_.tap,_,p),branchLinkId:u.id,busLinkId:c.id,firstOuterId:d.id,middleId:t.id,secondOuterId:h.id,tap:_.tap}:this._junctionBranchJoinGeometry(t,d,h,c,u,n)}_junctionBranchJoinGeometry(e,t,n,i,o,r){const s=this.connectionPoint(t,n,this.linkAnchor(i,t.id),0),a=this.connectionPoint(n,t,this.linkAnchor(o,n.id),0),l=xe(e.point,s,a).point,d=this.guideNode(`${e.id}-bus-tap`,l),h={...r,[d.id]:d},c=this._junctionConnectorPath(t,d,h,{from:this.linkAnchor(i,t.id)}),u=this._junctionConnectorPath(d,t,h,{to:this.linkAnchor(i,t.id)}),p=this._junctionConnectorPath(d,n,h,{to:this.linkAnchor(o,n.id)}),f=this._junctionConnectorPath(n,d,h,{from:this.linkAnchor(o,n.id)}),_=this._junctionBranchToBusPath(e,l),v=this._junctionBranchFromBusPath(e,l),m=Ve(_,p),g=Ve(f,v),y=i,b=o;return{afterPath:m,afterReversePath:g,beforePath:c,beforeReversePath:u,branchLinkId:b.id,busLinkId:y.id,firstOuterId:t.id,middleId:e.id,pathsByLinkId:{[y.id]:y.from===t.id||y.to===e.id?c:u,[b.id]:b.from===e.id||b.to===n.id?m:g},secondOuterId:n.id,tap:l}}_junctionBranchToBusPath(e,t){const n=this.guideNode(`${e.id}-bus-tap`,t);return this.defaultConnectorPath(e,n,{from:this.nearestAnchorIndex(e,t)})}_junctionBranchFromBusPath(e,t){const n=this.guideNode(`${e.id}-bus-tap`,t);return this.defaultConnectorPath(n,e,{to:this.nearestAnchorIndex(e,t)})}_orderedJoinOuters(e,t){return e.point.x!==t.point.x?e.point.x<t.point.x?[e,t]:[t,e]:e.point.y<=t.point.y?[e,t]:[t,e]}_linkBetweenNodes(e,t,n,i){return this.sameLinkEnds(e,n,i)?e:this.sameLinkEnds(t,n,i)?t:void 0}_junctionJoinBeforePath(e,t,n){const i=[`M${e.x} ${e.y}`];return Math.hypot(t.entry.x-e.x,t.entry.y-e.y)>.5&&i.push(`L${t.entry.x} ${t.entry.y}`),i.push(`A${t.radius} ${t.radius} 0 0 ${t.sweepFlag} ${n.x} ${n.y}`),i.join(" ")}_junctionJoinBeforeReversePath(e,t,n){const i=[`M${e.x} ${e.y}`,`A${t.radius} ${t.radius} 0 0 ${Oe(t.sweepFlag)} ${t.entry.x} ${t.entry.y}`];return Math.hypot(t.entry.x-n.x,t.entry.y-n.y)>.5&&i.push(`L${n.x} ${n.y}`),i.join(" ")}_junctionJoinAfterPath(e,t,n){const i=[`M${e.x} ${e.y}`,`A${t.radius} ${t.radius} 0 0 ${t.sweepFlag} ${t.exit.x} ${t.exit.y}`];return Math.hypot(n.x-t.exit.x,n.y-t.exit.y)>.5&&i.push(`L${n.x} ${n.y}`),i.join(" ")}_junctionJoinAfterReversePath(e,t,n){const i=[`M${e.x} ${e.y}`];return Math.hypot(e.x-t.exit.x,e.y-t.exit.y)>.5&&i.push(`L${t.exit.x} ${t.exit.y}`),i.push(`A${t.radius} ${t.radius} 0 0 ${Oe(t.sweepFlag)} ${n.x} ${n.y}`),i.join(" ")}},He=12,Ge=32,We=70,Ke=62,qe=["var(--home-flow-junction-1-color, #f6b73c)","var(--home-flow-junction-2-color, #ef6c00)","var(--home-flow-junction-3-color, #f4a340)","var(--home-flow-junction-4-color, #b85f1a)"],Ye=0,Xe=class extends me{constructor(...e){super(...e),this.editable=!0,this.flowMaxValue=12e3,this.flowMinVisibleValue=10,this.hideZeroValues=!1,this.labelStyle="curved",this.leafRouting="funnel",this.layout={},this.links=[],this.nodes=[],this.graphInstanceId=++Ye,this.requestedExternalIcons=/* @__PURE__ */new Set,this._labelTextMeasurer=new $e,this._straightLabelGap=0}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._observeLabelScale())}disconnectedCallback(){var e;null===(e=this._labelScaleObserver)||void 0===e||e.disconnect(),super.disconnectedCallback()}_observeLabelScale(){var e;const t=this.renderRoot.querySelector(".flow-svg");t&&"undefined"!=typeof ResizeObserver&&(null!==(e=this._labelScaleObserver)&&void 0!==e||(this._labelScaleObserver=new ResizeObserver(e=>{var t;const n=null===(t=e[0])||void 0===t?void 0:t.contentRect;if(!n||n.width<=0||n.height<=0)return;const i=Math.min(n.width/986,n.height/730);if(!Number.isFinite(i)||i<=0)return;const o=6/i;Math.abs(o-this._straightLabelGap)<.05||(this._straightLabelGap=o,this.requestUpdate())})),this._labelScaleObserver.disconnect(),this._labelScaleObserver.observe(t))}_leafRouter(){var e;if((null===(e=this._leafRouterCache)||void 0===e?void 0:e.routing)===this.leafRouting)return this._leafRouterCache.router;const t=new ze(this.leafRouting,(e,t,n,i)=>this._connectionPoint(e,t,n,i));return this._leafRouterCache={router:t,routing:this.leafRouting},t}_junctionRouter(){var e;return null!==(e=this._junctionRouterInstance)&&void 0!==e||(this._junctionRouterInstance=new Ue((e,t,n,i)=>this._connectionPoint(e,t,n,i),(e,t,n)=>this._defaultConnectorPath(e,t,n),(e,t)=>this._guideNode(e,t),(e,t)=>this._linkAnchor(e,t),(e,t)=>this._nearestAnchorIndex(e,t),(e,t,n)=>this._sameLinkEnds(e,t,n))),this._junctionRouterInstance}_flowEngine(){var e;if((null===(e=this._flowEngineCache)||void 0===e?void 0:e.links)===this.links&&this._flowEngineCache.min===this.flowMinVisibleValue&&this._flowEngineCache.max===this.flowMaxValue)return this._flowEngineCache.engine;const t=new Ne(this.flowMinVisibleValue,this.flowMaxValue,this.links,(e,t)=>this._junctionFlowColor(e,t));return this._flowEngineCache={engine:t,links:this.links,max:this.flowMaxValue,min:this.flowMinVisibleValue},t}_nodeRenderer(){if(this._nodeRendererInstance)return this._nodeRendererInstance;const e=this;return this._nodeRendererInstance=new Ee({get activeNode(){return e.activeNode},get editable(){return e.editable},graphInstanceId:this.graphInstanceId,get hideZeroValues(){return e.hideZeroValues},get labelStyle(){return e.labelStyle},get selectedNode(){return e.selectedNode},_labelTextMeasurer:this._labelTextMeasurer,get _straightLabelGap(){return e._straightLabelGap},_anchorAngle:e=>this._anchorAngle(e),_emitNodeAction:(e,t)=>this._emitNodeAction(e,t),_handleNodeActionKeydown:(e,t)=>this._handleNodeActionKeydown(e,t),_hasNodeFlowArrow:e=>this._hasNodeFlowArrow(e),_isJunctionJunctionLink:(e,t)=>this._isJunctionJunctionLink(e,t),_junctionJoinGeometry:(e,t,n,i)=>this._junctionJoinGeometry(e,t,n,i),_linkAnchor:(e,t)=>this._linkAnchor(e,t),_nearestAnchorIndex:(e,t)=>this._nearestAnchorIndex(e,t),_nodeActionLabel:e=>this._nodeActionLabel(e),_nodeColorCached:(e,t,n,i)=>this._nodeColorCached(e,t,n,i),_nodeDisplayValue:(e,t,n)=>this._nodeDisplayValue(e,t,n),_nodeFlowValue:e=>this._nodeFlowValue(e),_nodePrimaryValue:(e,t,n)=>this._nodePrimaryValue(e,t,n),_normalizeAnchorIndex:e=>this._normalizeAnchorIndex(e),_startLabelDrag:(e,t,n,i)=>this._startLabelDrag(e,t,n,i),_startNodeDrag:(e,t)=>this._startNodeDrag(e,t)}),this._nodeRendererInstance}_interactionController(){if(this._interactionControllerInstance)return this._interactionControllerInstance;const e=this;return this._interactionControllerInstance=new je({get activeNode(){return e.activeNode},set activeNode(t){e.activeNode=t},get editable(){return e.editable},get hoverTarget(){return e.hoverTarget},set hoverTarget(t){e.hoverTarget=t},get labelStyle(){return e.labelStyle},get layout(){return e.layout},set layout(t){e.layout=t},get links(){return e.links},set links(t){e.links=t},get pendingLink(){return e.pendingLink},set pendingLink(t){e.pendingLink=t},get pointerPoint(){return e.pointerPoint},set pointerPoint(t){e.pointerPoint=t},get renderRoot(){return e.renderRoot},get selectedLink(){return e.selectedLink},set selectedLink(t){e.selectedLink=t},get selectedNode(){return e.selectedNode},set selectedNode(t){e.selectedNode=t},_anchorIndexForPointerPoint:(e,t,n,i)=>this._anchorIndexForPointerPoint(e,t,n,i),_anchorPoint:(e,t,n)=>this._anchorPoint(e,t,n),_capturePointer:e=>this._capturePointer(e),_clampedPoint:e=>this._clampedPoint(e),_connectionPoint:(e,t,n,i)=>this._connectionPoint(e,t,n,i),_emitLayoutChange:(e,t)=>this._emitLayoutChange(e,t),_emitLinksChange:(e,t)=>this._emitLinksChange(e,t),_emitNodeLabelChange:(e,t)=>this._emitNodeLabelChange(e,t),_emitNodeRemove:e=>this._emitNodeRemove(e),_emitNodeSelect:e=>this._emitNodeSelect(e),_eventPoint:e=>this._eventPoint(e),_junctionJoinGeometry:(e,t,n)=>this._junctionJoinGeometry(e,t,n),_junctionLineDetour:(e,t,n,i)=>this._junctionLineDetour(e,t,n,i),_linkAnchor:(e,t)=>this._linkAnchor(e,t),_model:()=>this._model(),_nearestAnchorIndex:(e,t)=>this._nearestAnchorIndex(e,t),_nodeCurvedLabelHandlePoint:(e,t,n)=>this._nodeCurvedLabelHandlePoint(e,t,n),_nodeStraightLabelPoint:(e,t,n)=>this._nodeStraightLabelPoint(e,t,n),_normalizeAnchorIndex:e=>this._normalizeAnchorIndex(e)}),this._interactionControllerInstance}render(){const e=this._model(),t=this._normalizedLinks(e.nodes),n=this._hiddenNodeIds(e.nodes,t),i=this._visibleNodes(e.nodes,n),o=t.filter(t=>this._isVisibleLink(t,e.nodes,n)),r=this._renderContext(e,o,t),s=o.filter(t=>this._isJunctionJunctionLink(t,e.nodes)),a=o.filter(t=>!this._isJunctionJunctionLink(t,e.nodes)),l=this._nodesByZLayer(i);return q`
      <section
        class=${"card "+(this.editable?"editable":"readonly")}
        aria-label="Flow graph"
      >
        <svg
          class="flow-svg"
          viewBox=${"0 0 986 730"}
          role="group"
          aria-label="Flow graph"
          tabindex=${this.editable?0:-1}
          @pointerdown=${this.editable?this._clearInteraction:void 0}
          @pointermove=${this.editable?this._handlePointerMove:void 0}
          @pointerup=${this.editable?this._handlePointerUp:void 0}
          @pointercancel=${this.editable?this._handlePointerUp:void 0}
          @keydown=${this.editable?this._handleKeydown:void 0}
        >
          ${this.editable?this._renderEditorGrid():Z}
          ${a.map(n=>this._renderGraphLink(n,e,t,r))}
          ${s.map(n=>this._renderGraphLink(n,e,t,r))}
          ${l.map(n=>this._renderNodeLayer(n,e,o,t,r))}
          ${this.editable?this._renderPendingLink(i,t):Z}
          ${this.editable?this._renderAnchorControls(i,o):Z}
          ${this.editable?Y`
                <text
                  class="graph-build-version"
                  x=${972}
                  y=${718}
                  text-anchor="end"
                  aria-hidden="true"
                >${"2026-07-13 20:40Z"}</text>
              `:Z}
        </svg>
      </section>
    `}_renderEditorGrid(){const e=`home-flow-grid-minor-${this.graphInstanceId}`,t=`home-flow-grid-major-${this.graphInstanceId}`;return Y`
      <defs>
        <pattern
          id=${e}
          width=${He}
          height=${He}
          patternUnits="userSpaceOnUse"
          patternTransform=${"translate(70 62)"}
        >
          <circle class="editor-grid-dot" cx="0" cy="0" r="0.85" />
        </pattern>
        <pattern
          id=${t}
          width=${48}
          height=${48}
          patternUnits="userSpaceOnUse"
          patternTransform=${"translate(70 62)"}
        >
          <rect width="100%" height="100%" fill=${`url(#${e})`} />
          <circle class="editor-grid-dot major" cx="0" cy="0" r="1.15" />
        </pattern>
      </defs>
      <rect
        class="editor-grid"
        x="0"
        y="0"
        width=${986}
        height=${730}
        fill=${`url(#${t})`}
      />
    `}_renderContext(e,t,n=t){const i=this._geometryCacheFor(e,n),o={colors:/* @__PURE__ */new Map,joinGeometries:i.joinGeometries,maxValues:/* @__PURE__ */new Map,minVisibleValues:/* @__PURE__ */new Map,nodeColors:/* @__PURE__ */new Map,paths:i.paths,sideNodeIds:/* @__PURE__ */new Map,signedValues:/* @__PURE__ */new Map,sourceParts:/* @__PURE__ */new Map},r=e.nodes;return t.forEach(t=>{const i=this._linkSignedValue(t,r,n,o),s=this._linkMinVisibleValue(t,r,n),a=this._linkMaxValue(t,s,r,n);o.paths.has(t.id)||o.paths.set(t.id,this._graphLinkPath(t,r,n,o)),o.signedValues.set(t.id,i),o.minVisibleValues.set(t.id,s),o.maxValues.set(t.id,a),this._shouldShowFlow(Math.abs(i),s)&&(o.colors.set(t.id,this._linkColor(t,e,n,i,o)),o.sourceParts.set(t.id,this._linkSourceParts(t,e,n,i,o)))}),o}_geometryCacheFor(e,t){var n;const i=this._geometryCacheKey(e,t);return(null===(n=this._geometryCache)||void 0===n?void 0:n.key)===i||(this._geometryCache={joinGeometries:/* @__PURE__ */new Map,key:i,paths:/* @__PURE__ */new Map}),this._geometryCache}_geometryCacheKey(e,t){const n=Object.values(e.nodes).sort((e,t)=>e.id.localeCompare(t.id)).map(e=>[e.id,e.kind,Math.round(100*e.point.x)/100,Math.round(100*e.point.y)/100,e.radius].join(":")).join("|"),i=t.map(e=>{var t,n,i,o,r;return[e.id,e.from,e.to,null!==(t=e.fromAnchor)&&void 0!==t?t:"",null!==(n=e.fromAnchorMode)&&void 0!==n?n:"",null!==(i=e.toAnchor)&&void 0!==i?i:"",null!==(o=e.toAnchorMode)&&void 0!==o?o:"",null!==(r=e.junctionJoinId)&&void 0!==r?r:""].join(":")}).join("|");return`${this.leafRouting}::${n}::${i}`}_isJunctionJunctionLink(e,t){var n,i;return"junction"===(null===(n=t[e.from])||void 0===n?void 0:n.kind)&&"junction"===(null===(i=t[e.to])||void 0===i?void 0:i.kind)}_model(){return{nodes:Object.fromEntries(this._positionedNodes().map(e=>[e.id,e]))}}_visibleNodes(e,t){return Object.fromEntries(Object.entries(e).filter(([e])=>!t.has(e)))}_hiddenNodeIds(e,t){return new Set(Object.values(e).filter(n=>this._isHiddenByZero(n,e,t)).map(e=>e.id))}_isVisibleLink(e,t,n){const i=t[e.from],o=t[e.to];return Boolean(i&&o&&!n.has(i.id)&&!n.has(o.id))}_isHiddenByZero(e,t,n){if(!0!==e.hideIfZero)return!1;const i=this._nodeDisplayValue(e,{nodes:t},n);return Math.abs(i)<=.5}_nodesByZLayer(e){return Object.values(e).sort((e,t)=>{const n=t.stackIndex-e.stackIndex;return 0!==n?n:e.id.localeCompare(t.id)})}_defaultNodeRadius(e){return"junction"===e?90:65}_positionedNodes(){return this.nodes.map((e,t)=>{var n,i,o;return{id:e.id,kind:e.kind,stackIndex:t,label:e.label,labelAngle:Number.isFinite(e.labelAngle)?e.labelAngle:void 0,labelOffsetX:Number.isFinite(e.labelOffsetX)?e.labelOffsetX:void 0,labelOffsetY:Number.isFinite(e.labelOffsetY)?e.labelOffsetY:void 0,value:Number.isFinite(e.value)?e.value:0,flowValue:Number.isFinite(e.flowValue)?e.flowValue:void 0,hasOwnValue:e.hasOwnValue,contributesToFlow:e.contributesToFlow,secondary:e.secondary,secondaryDisplayValue:e.secondaryDisplayValue,displayValue:e.displayValue,hideZeroValues:e.hideZeroValues,hideIfZero:e.hideIfZero,showFlowArrow:e.showFlowArrow,highlightWhenActive:e.highlightWhenActive,activeFrom:e.activeFrom,junctionDisplayMode:e.junctionDisplayMode,primaryAction:e.primaryAction,secondaryAction:e.secondaryAction,radius:ye(null!==(n=e.radius)&&void 0!==n?n:this._defaultNodeRadius(e.kind),20,100),point:this._clampedPoint(null!==(i=this.layout[e.id])&&void 0!==i?i:this._fallbackPoint(e.kind,t)),icon:null===e.icon?void 0:null!==(o=e.icon)&&void 0!==o?o:this._defaultIcon(e.kind),secondaryIcon:null===e.secondaryIcon?void 0:e.secondaryIcon,unit:e.unit,color:e.color,flowMinVisibleValue:e.flowMinVisibleValue,flowMaxValue:e.flowMaxValue}})}_fallbackPoint(e,t){return"junction"===e?{x:350+t%3*150,y:330+110*Math.floor(t/3)}:"leaf"===e?{x:270+t%4*130,y:100+88*Math.floor(t/4)}:{x:770+t%2*110,y:360+108*Math.floor(t/2)}}_renderGraphLink(e,t,n,i){var o,r,s,a,l;const d=t.nodes,h=d[e.from],c=d[e.to];if(!h||!c)return Z;const u=null!==(o=i.signedValues.get(e.id))&&void 0!==o?o:this._linkSignedValue(e,d,n,i),p=Math.abs(u),f=null!==(r=i.paths.get(e.id))&&void 0!==r?r:this._graphLinkPath(e,d,n,i);if(!f)return Z;const _=this.selectedLink===e.id,v=null!==(s=i.minVisibleValues.get(e.id))&&void 0!==s?s:this._linkMinVisibleValue(e,d,n),m=null!==(a=i.maxValues.get(e.id))&&void 0!==a?a:this._linkMaxValue(e,v,d,n),g=this._shouldShowFlow(p,v),y=g?this._flowWidth(p,v,m):2.4,b=g?null!==(l=i.colors.get(e.id))&&void 0!==l?l:this._linkColor(e,t,n,u,i):"var(--home-flow-junction-1-color, #f6b73c)",x=g?i.sourceParts.has(e.id)?i.sourceParts.get(e.id):this._linkSourceParts(e,t,n,u,i):void 0,$=this._junctionConnectionMarker(e,t,n,i);return Y`
      <path class=${"connector base "+(_?"selected":"")} d=${f} />
      ${g?this._renderFlowPath(e,f,u,b,y,x):Z}
      ${$?this._renderJunctionConnectionMarker($,_):Z}
      ${this.editable||e.entity?Y`
            <path
              class=${"connector-hit "+(_?"selected":"")}
              d=${f}
              @pointerdown=${this.editable?t=>this._selectLink(t,e.id):void 0}
              @click=${!this.editable&&e.entity?t=>this._emitEntityMoreInfo(e.entity,t):void 0}
            />
          `:Z}
    `}_renderFlowPath(e,t,n,i,o,r){const s=r&&r.length>0?r:[{color:i,key:`${e.id}-fallback`,length:18,start:0}];if(1===s.length)return Y`
        <path
          class="connector flow source-single"
          d=${t}
          stroke=${s[0].color}
          stroke-width=${o}
          stroke-dasharray=${"18 22"}
        >
          ${this._renderFlowAnimation(n)}
        </path>
      `;const[a,...l]=s,d=this._splitFlowMaskId(e);return Y`
      <mask
        id=${d}
        class="source-flow-mask"
        maskUnits="userSpaceOnUse"
        maskContentUnits="userSpaceOnUse"
        x="-24"
        y="-24"
        width=${1034}
        height=${778}
      >
        <path
          class="connector flow source-mask"
          d=${t}
          stroke="#fff"
          stroke-width=${o}
          stroke-dasharray=${"18 22"}
        >
          ${this._renderFlowAnimation(n)}
        </path>
      </mask>
      <g mask=${`url(#${d})`}>
        <path
          class="connector flow split-flow source-fill"
          d=${t}
          stroke=${a.color}
          stroke-width=${o}
          stroke-dasharray=${"18 22"}
        >
          ${this._renderFlowAnimation(n)}
        </path>
        ${l.map(e=>{const i=this._sourceTailOffset(e),r=this._sourceTailVisibleLength(e);return Y`
            <path
              class="connector flow split-flow source-split"
              d=${t}
              stroke=${e.color}
              stroke-width=${o}
              stroke-dasharray=${`${r} ${40-r}`}
              stroke-dashoffset=${i}
            >
              ${this._renderFlowAnimation(n,i)}
            </path>
          `})}
      </g>
    `}_renderFlowAnimation(e,t=0){return Y`
      <animate
        attributeName="stroke-dashoffset"
        begin="0s"
        dur=${"1.8s"}
        from=${t}
        to=${e>=0?t-40:t+40}
        repeatCount="indefinite"
      />
    `}_sourceTailOffset(e){return-e.start}_sourceTailVisibleLength(e){return ye(18-e.start,0,40)}_splitFlowMaskId(e){return`home-flow-split-${this.graphInstanceId}-${e.id.replace(/[^a-zA-Z0-9_-]/g,"-")}`}_junctionConnectionMarker(e,t,n,i){if(!this._isJunctionJunctionLink(e,t.nodes))return;const o=this._junctionJoinGeometry(e,t.nodes,n,i);return(null==o?void 0:o.tap)&&o.branchLinkId===e.id?o.tap:void 0}_renderJunctionConnectionMarker(e,t){return Y`
      <circle
        class=${"bus-tap "+(t?"selected":"")}
        cx=${e.x}
        cy=${e.y}
        r="6"
        aria-hidden="true"
      />
    `}_junctionFlowColor(e,t){var n;const i=null==t||null===(n=t[e])||void 0===n?void 0:n.color;if(i)return i;const o=Object.values(null!=t?t:{}).filter(e=>"junction"===e.kind),r=Math.max(0,o.findIndex(t=>t.id===e));return qe[r%qe.length]}_graphLinkPath(e,t,n,i){const o=t[e.from],r=t[e.to];if(!o||!r)return"";const s=[o,r].find(e=>"junction"===e.kind),a=[o,r].find(e=>"leaf"===e.kind);if(a&&s)return this._leafRouter().connectorPath(e,a,s,t,n);if("junction"===o.kind&&"junction"===r.kind){return this._junctionJoinedConnectionPath(e,t,n,i)||this._junctionConnectorPath(o,r,t,{from:this._linkAnchor(e,o.id),to:this._linkAnchor(e,r.id)})}return this._defaultConnectorPath(o,r,{from:this._linkAnchor(e,o.id),to:this._linkAnchor(e,r.id)})}_junctionConnectorPath(e,t,n,i={}){return this._junctionRouter().connectorPath(e,t,n,i)}_junctionJoinedConnectionPath(e,t,n,i){return this._junctionRouter().joinedConnectionPath(e,t,n,null==i?void 0:i.joinGeometries)}_junctionJoinGeometry(e,t,n,i){return this._junctionRouter().joinGeometry(e,t,n,null==i?void 0:i.joinGeometries)}_junctionLineDetour(e,t,n,i=0){return this._junctionRouter().lineDetour(e,t,n,i)}_defaultConnectorPath(e,t,n={}){return this._leafRouter().defaultConnectorPath(e,t,n)}_linkAnchor(e,t){return this._leafRouter().linkAnchor(e,t)}_guideNode(e,t){return this._leafRouter().guideNode(e,t)}_renderNodeLayer(e,t,n,i,o){return this._nodeRenderer().render(e,t,n,i,o)}_nodeStraightLabelPoint(e,t,n){return this._nodeRenderer().straightLabelPoint(e,t,n)}_nodeCurvedLabelHandlePoint(e,t,n){return this._nodeRenderer().curvedLabelHandlePoint(e,t,n)}willUpdate(e){if(e.has("nodes")||!this.hasUpdated)for(const t of this.nodes)for(const e of[t.icon,t.secondaryIcon])(null==e?void 0:e.includes(":"))&&this._queueExternalIcon(e)}_queueExternalIcon(e){(e=>Me.has(e))(e)||this.requestedExternalIcons.has(e)||(this.requestedExternalIcons.add(e),async function(e){var t;if(Me.has(e))return null!==(t=Me.get(e))&&void 0!==t?t:null;const n=Ie.get(e);if(n)return n;const i=(async()=>{const t=performance.now()+3e3;for(;!customElements.get("ha-icon");){if(performance.now()>=t)return null;await Se(25)}const n=document.createElement("ha-icon");n.icon=e,n.setAttribute("icon",e),Object.assign(n.style,{height:"24px",left:"-10000px",pointerEvents:"none",position:"fixed",top:"-10000px",visibility:"hidden",width:"24px"}),document.body.append(n);try{const e=performance.now()+5e3;for(;performance.now()<e;){var i,o;await n.updateComplete;const e=null===(i=n.shadowRoot)||void 0===i?void 0:i.querySelector("ha-svg-icon"),t=null!==(o=null==e?void 0:e.path)&&void 0!==o?o:n._path;var r,s,a,l;if(t)return{path:t,secondaryPath:null!==(r=null!==(s=null==e?void 0:e.secondaryPath)&&void 0!==s?s:n._secondaryPath)&&void 0!==r?r:void 0,viewBox:null!==(a=null!==(l=null==e?void 0:e.viewBox)&&void 0!==l?l:n._viewBox)&&void 0!==a?a:"0 0 24 24"};await Se(25)}return null}finally{n.remove()}})();Ie.set(e,i);const o=await i;return Ie.delete(e),Me.set(e,o),o}(e).finally(()=>{this.requestedExternalIcons.delete(e),this.isConnected&&this.requestUpdate()}))}_renderPendingLink(e,t){if(!this.pendingLink||!this.pointerPoint)return Z;const n=e[this.pendingLink.from];if(!n)return Z;const i=this._pendingLinkPath(n,e,t);return i?Y`
      <path
        class="connector base selected pending"
        d=${i}
      />
    `:Z}_pendingLinkPath(e,t,n){if(!this.pendingLink||!this.pointerPoint)return"";const i=this.hoverTarget?t[this.hoverTarget]:void 0;if(i&&this._isCompatibleLink(e,i)){const o=this._nearestAnchorIndex(i,this.pointerPoint),r=this._manualLink(this._canonicalLink(e,i,this.pendingLink.fromAnchor,o)),s=this._replaceLink(n,r);return this._graphLinkPath(r,t,s)}const o=this._pendingJunctionConnectionCandidate(e,this.pointerPoint,t);if(o){const t=this._guideNode("pending-junction-connection-pointer",o.point);return this._defaultConnectorPath(e,t,{from:this.pendingLink.fromAnchor})}const r=this._guideNode("pending-pointer",this.pointerPoint);return this._defaultConnectorPath(e,r,{from:this.pendingLink.fromAnchor})}_renderAnchorControls(e,t){if(this.pendingLink){const t=e[this.pendingLink.from],n=this.hoverTarget?e[this.hoverTarget]:void 0,i=n&&this.pointerPoint?this._nearestAnchorIndex(n,this.pointerPoint):void 0;return Y`
        ${t?this._renderAnchorPoints(t,"source",{selectedAnchorIndex:this.pendingLink.fromAnchor}):Z}
        ${n?this._renderAnchorPoints(n,"target",{selectedAnchorIndex:i}):Z}
      `}if(this.selectedLink){const n=t.find(e=>e.id===this.selectedLink);if(n)return Y`
          ${this._linkEndControls(n,e,t).map(e=>this._renderAnchorPoints(e.node,"source",{fixedLinkEnd:e}))}
        `}if(!this.selectedNode)return Z;const n=e[this.selectedNode];return n&&this._canStartLink(n)?this._renderAnchorPoints(n,"source",{linkEnds:this._nodeLinkEndControls(n.id,e,t)}):Z}_renderAnchorPoints(e,t,n={}){return Y`
      <g class=${`anchor-controls ${t}`}>
        ${Array.from({length:Ge},(i,o)=>{var r,s;const a=this._anchorPoint(e,o),l=null!==(r=n.fixedLinkEnd)&&void 0!==r?r:null===(s=n.linkEnds)||void 0===s?void 0:s.find(e=>e.anchorIndex===o),d=void 0!==n.selectedAnchorIndex&&this._normalizeAnchorIndex(n.selectedAnchorIndex)===o,h=n.fixedLinkEnd?n.fixedLinkEnd.anchorIndex===o:Boolean(l)||d;return Y`
            <g class=${"anchor-handle "+(h?"selected":"")}>
              <circle
                class="anchor-hit"
                cx=${a.x}
                cy=${a.y}
                r=${15}
                @pointerdown=${n=>l?this._startAnchorDrag(n,l,o):"source"===t?this._startPendingLink(n,e,o):this._commitPendingLink(n,e,o)}
              />
              <circle
                class="anchor-point"
                cx=${a.x}
                cy=${a.y}
                r=${h?7:3.2}
              />
            </g>
          `})}
      </g>
    `}_linkEndControls(e,t,n){return["from","to"].map(i=>{const o=t["from"===i?e.from:e.to];if(this._isVirtualJunctionJoinEnd(e,i,t,n))return;const r=this._linkEndAnchorIndex(e,i,t,n);return!o||o.radius<=0||void 0===r?void 0:{anchorIndex:r,end:i,link:e,node:o}}).filter(e=>Boolean(e))}_isVirtualJunctionJoinEnd(e,t,n,i){const o=this._junctionJoinGeometry(e,n,i);return!(!(null==o?void 0:o.pathsByLinkId)||o.busLinkId!==e.id)&&("from"===t?e.from:e.to)===o.middleId}_nodeLinkEndControls(e,t,n){return n.flatMap(i=>this._linkEndControls(i,t,n).filter(t=>t.node.id===e))}_linkEndAnchorIndex(e,t,n,i){const o=n["from"===t?e.from:e.to];if(!o||o.radius<=0)return;const r="from"===t?"manual"===e.fromAnchorMode?e.fromAnchor:void 0:"manual"===e.toAnchorMode?e.toAnchor:void 0;if(void 0!==r)return this._normalizeAnchorIndex(r);if("leaf"===o.kind){const r=this._leafAutoAnchorReferencePoint(e,t,n,i);if(r)return this._nearestAnchorIndex(o,r)}const s=this._graphLinkPath(e,n,i),a=this._pathLinkEndPoint(s,t);return a?this._nearestAnchorIndex(o,a):void 0}_leafAutoAnchorReferencePoint(e,t,n,i){return this._leafRouter().autoAnchorReference(e,t,n,i)}_pathLinkEndPoint(e,t){const n=this._pathNumbers(e);if(!n||n.length<2)return;const i="from"===t?0:n.length-2;return{x:n[i],y:n[i+1]}}_pathNumbers(e){var t,n;return null!==(t=null===(n=e.match(/-?\d+(?:\.\d+)?(?:e[-+]?\d+)?/gi))||void 0===n?void 0:n.map(e=>Number(e)))&&void 0!==t?t:[]}_normalizedLinks(e){return this._interactionController().normalizeLinks(e)}_clearInteraction(e){return this._interactionController().clearInteraction(e)}_handlePointerMove(e){return this._interactionController().handlePointerMove(e)}_handlePointerUp(e){return this._interactionController().handlePointerUp(e)}_handleKeydown(e){return this._interactionController().handleKeydown(e)}_selectLink(e,t){return this._interactionController().selectLink(e,t)}_startAnchorDrag(e,t,n){return this._interactionController().startAnchorDrag(e,t,n)}_startPendingLink(e,t,n){return this._interactionController().startPendingLink(e,t,n)}_commitPendingLink(e,t,n){return this._interactionController().commitPendingLink(e,t,n)}_startNodeDrag(e,t){return this._interactionController().startNodeDrag(e,t)}_startLabelDrag(e,t,n,i){return this._interactionController().startLabelDrag(e,t,n,i)}_canonicalLink(e,t,n,i){return this._interactionController().canonicalLink(e,t,n,i)}_manualLink(e){return this._interactionController().manualLink(e)}_replaceLink(e,t){return this._interactionController().replaceLink(e,t)}_pendingJunctionConnectionCandidate(e,t,n){return this._interactionController().pendingJunctionConnectionCandidate(e,t,n)}_isCompatibleLink(e,t){return this._interactionController().isCompatibleLink(e,t)}_canStartLink(e){return this._interactionController().canStartLink(e)}_sameLinkEnds(e,t,n){return this._interactionController().sameLinkEnds(e,t,n)}_linkSignedValue(e,t,n=this.links,i){return this._flowEngine().signedValue(e,t,n,i)}_nodeFlowValue(e){return this._flowEngine().nodeFlowValue(e)}_linkSourceParts(e,t,n,i,o){return this._flowEngine().sourceParts(e,t,n,i,o)}_linkColor(e,t,n,i,o){return this._flowEngine().color(e,t,n,i,o)}_nodeColorCached(e,t,n,i){return this._flowEngine().nodeColor(e,t,n,i)}_shouldShowFlow(e,t){return this._flowEngine().showsFlow(e,t)}_flowWidth(e,t,n){return this._flowEngine().width(e,t,n)}_linkMinVisibleValue(e,t,n=this.links){return this._flowEngine().linkMinValue(e,t,n)}_linkMaxValue(e,t,n,i=this.links){return this._flowEngine().linkMaxValue(e,t,n,i)}_nodePrimaryValue(e,t,n){return this._flowEngine().primaryValue(e,t,n)}_nodeDisplayValue(e,t,n){return this._flowEngine().displayValue(e,t,n)}_hasNodeFlowArrow(e){return this._flowEngine().hasFlowArrow(e)}_connectionPoint(e,t,n,i){if(e.radius>0){const o=null!=i?i:"junction"===e.kind?10:0;return this._anchorPoint(e,null!=n?n:this._nearestAnchorIndex(e,t.point),o)}return e.point}_anchorPoint(e,t,n=10){const i=this._anchorAngle(t),o=Math.max(0,e.radius+n);return{x:Math.round(e.point.x+Math.cos(i)*o),y:Math.round(e.point.y+Math.sin(i)*o)}}_anchorAngle(e){const t=this._normalizeAnchorIndex(e);return-Math.PI/2+t*(2*Math.PI/Ge)}_nearestAnchorIndex(e,t){const n=(Math.atan2(t.y-e.point.y,t.x-e.point.x)+Math.PI/2)/(2*Math.PI)*Ge;return this._normalizeAnchorIndex(Math.round(n))}_normalizeAnchorIndex(e){return(Math.round(e)%Ge+Ge)%Ge}_anchorIndexForPointerPoint(e,t,n,i){const o=void 0!==n?this._normalizeAnchorIndex(n):void 0,r=void 0!==i?this._normalizeAnchorIndex(i):void 0,s=this._nearestAnchorIndex(e,t);if(void 0!==o){const n=this._anchorPoint(e,o,0),i=this._anchorPoint(e,s,0),r=Math.hypot(t.x-n.x,t.y-n.y),a=Math.hypot(t.x-i.x,t.y-i.y);if(r<=21||r<=a+7)return o}return null!=r?r:s}_clampedPoint(e){const t=ye(e.x,We,916),n=ye(e.y,Ke,658),i={x:We+Math.round((t-We)/He)*He,y:Ke+Math.round((n-Ke)/He)*He};return{x:ye(i.x,We,916),y:ye(i.y,Ke,658)}}_defaultIcon(e){return"junction"===e?"mdi:hub":"mdi:leaf"}_capturePointer(e){try{var t,n;null===(t=e.currentTarget)||void 0===t||null===(n=t.setPointerCapture)||void 0===n||n.call(t,e.pointerId)}catch{}}_eventPoint(e){const t=this.renderRoot.querySelector(".flow-svg"),n=null==t?void 0:t.getScreenCTM();if(!n)return;const i=new DOMPoint(e.clientX,e.clientY).matrixTransform(n.inverse());return{x:i.x,y:i.y}}_emitLayoutChange(e,t=!1){this.dispatchEvent(new CustomEvent("graph-layout-change",{detail:{layout:e,live:t},bubbles:!0,composed:!0}))}_emitLinksChange(e,t=!1){this.dispatchEvent(new CustomEvent("graph-links-change",{detail:{links:e,live:t},bubbles:!0,composed:!0}))}_emitNodeSelect(e){this.dispatchEvent(new CustomEvent("graph-node-select",{detail:{nodeId:e},bubbles:!0,composed:!0}))}_emitNodeRemove(e){this.dispatchEvent(new CustomEvent("graph-node-remove",{detail:{nodeId:e},bubbles:!0,composed:!0}))}_emitNodeLabelChange(e,t=!1){this.dispatchEvent(new CustomEvent("graph-node-label-change",{detail:{...e,live:t},bubbles:!0,composed:!0}))}_nodeActionLabel(e){switch(e.type){case"toggle":return"toggle";case"navigate":return"navigate";case"url":return"open link";default:return"details"}}_emitNodeAction(e,t){e&&(null==t||t.stopPropagation(),null==t||t.preventDefault(),this.dispatchEvent(new CustomEvent("graph-node-action",{detail:{action:e},bubbles:!0,composed:!0})))}_emitEntityMoreInfo(e,t){e&&(null==t||t.stopPropagation(),null==t||t.preventDefault(),this.dispatchEvent(new CustomEvent("graph-entity-more-info",{detail:{entityId:e},bubbles:!0,composed:!0})))}_handleNodeActionKeydown(e,t){"Enter"!==e.key&&" "!==e.key||this._emitNodeAction(t,e)}};(Je=Xe).properties={activeNode:{state:!0},editable:{type:Boolean},hoverTarget:{state:!0},flowMaxValue:{type:Number,attribute:"flow-max-value"},flowMinVisibleValue:{type:Number,attribute:"flow-min-visible-value"},hideZeroValues:{type:Boolean,attribute:"hide-zero-values"},layout:{attribute:!1},labelStyle:{type:String,attribute:"label-style"},leafRouting:{type:String,attribute:"leaf-routing"},links:{attribute:!1},nodes:{attribute:!1},pendingLink:{state:!0},pointerPoint:{state:!0},selectedLink:{state:!0},selectedNode:{state:!0}},Je.styles=we,customElements.get("home-flow-graph-card")||customElements.define("home-flow-graph-card",Xe);var Ze=0;function Qe(e){return`${e}-${Ze+=1}`}function et(e,t={}){var n;window.dispatchEvent(new CustomEvent("home-flow-card-preview-config-changed",{detail:{config:e,configKey:t.configKey,sourceConfigKey:null!==(n=t.sourceConfigKey)&&void 0!==n?n:t.configKey,sourceId:t.sourceId}}))}function tt(e,t={}){window.dispatchEvent(new CustomEvent("home-flow-card-preview-node-selected",{detail:{configKey:t.configKey,nodeId:e,sourceId:t.sourceId,targetId:t.targetId}}))}var nt="home-flow-card",it="curved",ot="funnel",rt="fit-width",st="#2d8f8a",at="#3f79c9",lt="#c65b4a",dt="#3f79c9",ht="#d6a500",ct=["device_class","friendly_name","icon","unit_of_measurement"],ut=["#f6b73c","#ef6c00","#f4a340","#b85f1a"],pt=[st,at,ht,dt,lt,"#ef6c00","#4f9b6d","#8a5cc2","#d04b89","#4d90d9","#7a7f2f","#c86b2f"],ft=[{id:"grid",kind:"junction",label:"Grid",icon:"mdi:transmission-tower",radius:90,color:st,flowDirection:"supply",balance_role:"junction"},{id:"home",kind:"junction",label:"Home",icon:"mdi:home-lightning-bolt",radius:90,color:at,flowDirection:"consume",balance_role:"junction"},{id:"heat-pump",kind:"leaf",label:"Heat pump",icon:"mdi:heat-pump",radius:65,flowDirection:"consume"}],_t=[{id:"grid->home",from:"grid",to:"home"},{id:"heat-pump->home",from:"heat-pump",to:"home"}],vt={grid:{x:245,y:365},home:{x:490,y:365},"heat-pump":{x:705,y:365}};function mt(e){const t=Qt(e)?e:{},n=Array.isArray(t.nodes),i=tn(t.flow_min_visible_value,10),o=Math.max(tn(t.flow_max_value,12e3),i+1),r=!0===t.hide_zero_values;return{type:"string"==typeof t.type?t.type:`custom:${nt}`,title:"string"==typeof t.title?t.title:void 0,nodes:gt(t.nodes,r),links:Mt(t.links,!n),layout:It(t.layout,!n),flow_min_visible_value:i,flow_max_value:o,label_style:"straight"===t.label_style?"straight":it,leaf_routing:"channel"===t.leaf_routing||"radial"===t.leaf_routing||"orthogonal"===t.leaf_routing||"sweep"===t.leaf_routing?t.leaf_routing:ot,scaling_mode:"fit-width"===t.scaling_mode||"shrink"===t.scaling_mode?t.scaling_mode:rt,width:tn(t.width,502),height:tn(t.height,360)}}function gt(e,t=!1){return Array.isArray(e)?e.filter(e=>Qt(e)).filter(e=>"string"==typeof e.id&&void 0!==yt(e.kind)).map(e=>{var n,i,o;const r=null!==(n=yt(e.kind))&&void 0!==n?n:"leaf";return{id:String(e.id),kind:r,label:"string"==typeof e.label?e.label:Xt(String(e.id)),label_angle:nn(e.label_angle),label_offset_x:nn(e.label_offset_x),label_offset_y:nn(e.label_offset_y),flow_mode:xt(e.flow_mode),entity:Ot(e.entity),attribute:en(e.attribute),incoming_entity:Ot(e.incoming_entity),incoming_attribute:en(e.incoming_attribute),outgoing_entity:Ot(e.outgoing_entity),outgoing_attribute:en(e.outgoing_attribute),secondary_entity:Ot(e.secondary_entity),secondary_attribute:en(e.secondary_attribute),primary_action:At(e.primary_action),primary_action_path:en(e.primary_action_path),secondary_action:At(e.secondary_action),secondary_action_path:en(e.secondary_action_path),value:nn(e.value),secondary:nn(e.secondary),factor:nn(e.factor),invert:!0===e.invert,flowDirection:bt(e.flowDirection),allowed_flow:wt(e.allowed_flow),balance_role:"junction"===r?null!==(i=$t(e.balance_role))&&void 0!==i?i:Ht(r):void 0,junction_display_value:kt(e.junction_display_value),hide_zero_values:"boolean"==typeof e.hide_zero_values?e.hide_zero_values:!!t||void 0,hide_if_zero:"boolean"==typeof e.hide_if_zero?e.hide_if_zero:void 0,show_flow_arrow:"boolean"==typeof e.show_flow_arrow?e.show_flow_arrow:void 0,highlight_when_active:"boolean"==typeof e.highlight_when_active?e.highlight_when_active:void 0,active_from:on(e.active_from),flowMinVisibleValue:nn(e.flowMinVisibleValue),flowMaxValue:nn(e.flowMaxValue),radius:rn(null!==(o=nn(e.radius))&&void 0!==o?o:zt(r),20,100),icon:Lt(e.icon),unit:en(e.unit),color:en(e.color)}}):Zt(ft).map(e=>({...e,...t?{hide_zero_values:!0}:{}}))}function yt(e){if("junction"===e||"leaf"===e)return e}function bt(e){if("consume"===e||"supply"===e)return e}function xt(e){if("signed"===e||"bidirectional"===e)return e}function $t(e){if("junction"===e||"measured"===e||"ignore"===e)return e}function wt(e){if("both"===e||"supply"===e||"consume"===e)return e}function kt(e){if("incoming"===e||"outgoing"===e||"net"===e)return e}function At(e){if("more-info"===e||"toggle"===e||"navigate"===e||"url"===e||"none"===e)return e}function Lt(e){var t;if(null===e)return null;const n=en(e);return n?null!==(t=Nt[n])&&void 0!==t?t:n.includes(":")?n:void 0:void 0}var Pt,Ct,Nt={appliance:"mdi:power-plug",battery:"mdi:battery",ev:"mdi:car-electric",generic:"mdi:circle-outline",grid:"mdi:transmission-tower",heat_pump:"mdi:heat-pump",home:"mdi:home-lightning-bolt",junction:"mdi:hub",node:"mdi:circle-small",plug:"mdi:power-plug",solar:"mdi:solar-power",water:"mdi:water"};function Mt(e,t=!0){return Array.isArray(e)?e.filter(e=>Qt(e)).filter(e=>"string"==typeof e.from&&"string"==typeof e.to).map(e=>({id:"string"==typeof e.id?e.id:`${String(e.from)}->${String(e.to)}`,from:String(e.from),to:String(e.to),entity:Ot(e.entity),attribute:en(e.attribute),value:nn(e.value),factor:nn(e.factor),invert:!0===e.invert,unit:en(e.unit),color:en(e.color),flowMinVisibleValue:nn(e.flowMinVisibleValue),flowMaxValue:nn(e.flowMaxValue),fromAnchor:nn(e.fromAnchor),fromAnchorMode:"manual"===e.fromAnchorMode?"manual":void 0,toAnchor:nn(e.toAnchor),toAnchorMode:"manual"===e.toAnchorMode?"manual":void 0,junctionJoinId:en(e.junctionJoinId)})):t?_t.map(e=>({...e})):[]}function It(e,t=!0){return Qt(e)?Object.fromEntries(Object.entries(e).filter(e=>{const t=e[1];return Qt(t)&&Number.isFinite(t.x)&&Number.isFinite(t.y)}).map(([e,t])=>[e,{x:Number(t.x),y:Number(t.y)}])):t?{...vt}:{}}function St(e,t){var n;return(null!==(n=e.nodes)&&void 0!==n?n:Zt(ft)).map(e=>{var n,i,o,r,s,a,l,d,h,c,u,p,f,_,v,m,g,y,b,x,$,w,k,A,L,P,C,N,M;const I=null!==(n=e.flow_mode)&&void 0!==n?n:"signed",S="signed"===I?Vt(t,e.entity?{entity:e.entity,attribute:e.attribute,factor:e.factor,unit:e.unit}:{value:e.value,unit:e.unit}):void 0,E="bidirectional"===I?Vt(t,{entity:e.incoming_entity,attribute:e.incoming_attribute,unit:e.unit}):void 0,j="bidirectional"===I?Vt(t,{entity:e.outgoing_entity,attribute:e.outgoing_attribute,unit:e.unit}):void 0,V=e.secondary_entity?Vt(t,{entity:e.secondary_entity,attribute:e.secondary_attribute,value:e.secondary}):void 0,O=void 0!==e.value||("bidirectional"===I?Boolean(e.incoming_entity||e.outgoing_entity):Boolean(e.entity)),F=(null!==(i=null==E?void 0:E.value)&&void 0!==i?i:0)-(null!==(o=null==j?void 0:j.value)&&void 0!==o?o:0),D=null!==(r=null!==(s=null!==(a=e.unit)&&void 0!==a?a:null==S?void 0:S.unit)&&void 0!==s?s:null==E?void 0:E.unit)&&void 0!==r?r:null==j?void 0:j.unit,T=null!==(l=null==V?void 0:V.value)&&void 0!==l?l:e.secondary,R=null!==(d=null!==(h=null==V?void 0:V.unit)&&void 0!==h?h:e.unit)&&void 0!==d?d:"%",J=null!==(c=e.flowDirection)&&void 0!==c?c:Ut(e),B="bidirectional"===I?F:(null!==(u=null!==(p=null==S?void 0:S.value)&&void 0!==p?p:e.value)&&void 0!==u?u:0)*("consume"===J?-1:1),z=function(e,t){return"supply"===t?Math.max(e,0):"consume"===t?Math.min(e,0):e}(!0===e.invert?-B:B,null!==(f=e.allowed_flow)&&void 0!==f?f:"both"),U=Math.abs(z),H="bidirectional"===I?z>.5?null!==(_=null!==(v=e.incoming_entity)&&void 0!==v?v:e.outgoing_entity)&&void 0!==_?_:e.secondary_entity:z<-.5?null!==(m=null!==(g=e.outgoing_entity)&&void 0!==g?g:e.incoming_entity)&&void 0!==m?m:e.secondary_entity:null!==(y=null!==(b=e.incoming_entity)&&void 0!==b?b:e.outgoing_entity)&&void 0!==y?y:e.secondary_entity:null!==(x=e.entity)&&void 0!==x?x:e.secondary_entity,G=Et(null!==($=e.primary_action)&&void 0!==$?$:"more-info",H,e.primary_action_path),W=Et(null!==(w=e.secondary_action)&&void 0!==w?w:"more-info",e.secondary_entity,e.secondary_action_path),K="bidirectional"===I?null!==(k=e.incoming_entity)&&void 0!==k?k:e.outgoing_entity:e.entity,q=null===e.icon?null:null!==(A=null!==(L=e.icon)&&void 0!==L?L:Dt(t,K))&&void 0!==A?A:Bt(e.kind),Y="measured"===Gt(e);return{id:e.id,kind:e.kind,label:null!==(P=null!==(C=e.label)&&void 0!==C?C:Ft(t,e.entity))&&void 0!==P?P:Xt(e.id),labelAngle:e.label_angle,labelOffsetX:e.label_offset_x,labelOffsetY:e.label_offset_y,value:U,flowValue:z,hasOwnValue:O,contributesToFlow:Y,junctionDisplayMode:e.junction_display_value,hideZeroValues:e.hide_zero_values,hideIfZero:!0===e.hide_if_zero,showFlowArrow:!0===e.show_flow_arrow,highlightWhenActive:!0===e.highlight_when_active,activeFrom:null!==(N=e.active_from)&&void 0!==N?N:1,primaryAction:G,secondaryAction:W,secondary:T,secondaryDisplayValue:void 0!==T?`${Rt(T)}${R?` ${R}`:""}`:void 0,radius:null!==(M=e.radius)&&void 0!==M?M:zt(e.kind),icon:q,secondaryIcon:void 0,unit:D,color:e.color,flowMinVisibleValue:e.flowMinVisibleValue,flowMaxValue:e.flowMaxValue}})}function Et(e,t,n){switch(e){case"none":default:return;case"more-info":case"toggle":return t?{entityId:t,type:e}:void 0;case"navigate":case"url":return(null==n?void 0:n.trim())?{path:n.trim(),type:e}:void 0}}function jt(e,t){var n;return(null!==(n=e.links)&&void 0!==n?n:[]).map(e=>{var n,i;const o=e.entity?Vt(t,{...e,value:void 0}):Vt(t,e),r=null!==(n=null==o?void 0:o.value)&&void 0!==n?n:e.value,s=null!==(i=e.unit)&&void 0!==i?i:null==o?void 0:o.unit;return{...e,value:r,unit:s,displayValue:void 0!==r?Jt(r,s):void 0}})}function Vt(e,t){var n,i,o;if(!(null==t?void 0:t.entity))return void 0===(null==t?void 0:t.value)?void 0:{value:t.value,unit:t.unit};const r=null==e?void 0:e.states[t.entity];if(!r)return void 0===t.value?void 0:{value:t.value,unit:t.unit};const s=function(e){if("number"==typeof e)return e;if("string"!=typeof e)return NaN;const t=e.trim().replace(",",".").match(/[-+]?\d+(?:\.\d+)?/);return t?Number(t[0]):NaN}(t.attribute?r.attributes[t.attribute]:r.state);if(!Number.isFinite(s))return void 0===t.value?void 0:{value:t.value,unit:t.unit};const a=String(null!==(n=r.attributes.unit_of_measurement)&&void 0!==n?n:"").trim(),l=null!==(i=t.unit)&&void 0!==i?i:a,d=Tt(l);return{value:s*(null!==(o=t.factor)&&void 0!==o?o:d)*(t.invert?-1:1),unit:1!==d?"W":l}}function Ot(e){var t;return"string"==typeof e?en(e):Array.isArray(e)?Ot(e[0]):Qt(e)?null!==(t=en(e.entity))&&void 0!==t?t:en(e.entity_id):void 0}function Ft(e,t){var n;if(!t)return;const i=null==e||null===(n=e.states[t])||void 0===n?void 0:n.attributes.friendly_name;return"string"==typeof i?i:Xt(t)}function Dt(e,t){if(!t)return;const n=null==e?void 0:e.states[t],i=null==n?void 0:n.attributes.icon;if("string"==typeof i&&i.startsWith("mdi:"))return i;const o=null==n?void 0:n.attributes.device_class;if("string"==typeof o){const e=function(e){return"battery"===e?"mdi:battery":"gas"===e?"mdi:fire":"power"===e||"energy"===e?"mdi:flash":"temperature"===e?"mdi:thermometer":"water"===e?"mdi:water":void 0}(o);if(e)return e}return"battery"===(r=t.split(".")[0])?"mdi:battery":"binary_sensor"===r?"mdi:checkbox-marked-circle-outline":"climate"===r?"mdi:heat-pump":"cover"===r?"mdi:window-shutter":"fan"===r?"mdi:fan":"light"===r?"mdi:lightbulb":"sensor"===r?"mdi:eye":"switch"===r?"mdi:toggle-switch":"water_heater"===r?"mdi:water-boiler":void 0;var r}function Tt(e){return"kW"===e?1e3:"MW"===e?1e6:1}function Rt(e){return e.toLocaleString("en-US",{maximumFractionDigits:e>=100?0:1})}function Jt(e,t){const n=Math.abs(e);return t&&"W"!==t&&"kW"!==t&&"MW"!==t?`${Rt(n)} ${t}`:n>=1e3?`${Rt(n/1e3)} kW`:`${Math.round(n).toLocaleString("en-US")} W`}function Bt(e){return"junction"===e?"mdi:hub":"mdi:leaf"}function zt(e){return"junction"===e?90:65}function Ut(e){var t;return null!==(t=e.flowDirection)&&void 0!==t?t:"supply"}function Ht(e){return"junction"===e?"junction":"measured"}function Gt(e){var t;return"leaf"===e.kind?"measured":null!==(t=e.balance_role)&&void 0!==t?t:Ht(e.kind)}function Wt(e,t){var n,i,o;const{[t]:r,...s}=null!==(n=e.layout)&&void 0!==n?n:{};return mt({...e,nodes:(null!==(i=e.nodes)&&void 0!==i?i:[]).filter(e=>e.id!==t),links:(null!==(o=e.links)&&void 0!==o?o:[]).filter(e=>e.from!==t&&e.to!==t),layout:s})}function Kt(e,t){const n=t.filter(e=>"junction"===e.kind),i=Math.max(0,n.findIndex(t=>t.id===e));return ut[i%ut.length]}function qt(e){const t=/^#?([0-9a-f]{6})$/i.exec(null!=e?e:"");return t?`#${t[1].toLowerCase()}`:void 0}function Yt(e){const t=qt(e);if(t)return{r:Number.parseInt(t.slice(1,3),16),g:Number.parseInt(t.slice(3,5),16),b:Number.parseInt(t.slice(5,7),16)}}function Xt(e){return(e.includes(".")?e.split(".").slice(1).join("."):e).replace(/[_-]+/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function Zt(e){return e.map(e=>({...e}))}function Qt(e){return Boolean(e&&"object"==typeof e&&!Array.isArray(e))}function en(e){return"string"==typeof e&&e.trim()?e.trim():void 0}function tn(e,t){return Number.isFinite(e)?Number(e):t}function nn(e){return Number.isFinite(e)?Number(e):void 0}function on(e){const t=nn(e);return void 0===t?void 0:Math.max(0,t)}function rn(e,t,n){return Math.min(Math.max(e,t),n)}function sn(e,t){e.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}function an(e){var t,n;const i=mt(e);return JSON.stringify({links:(null!==(t=i.links)&&void 0!==t?t:[]).map(e=>({from:e.from,id:e.id,to:e.to})),nodes:(null!==(n=i.nodes)&&void 0!==n?n:[]).map(e=>({id:e.id,kind:e.kind})),type:i.type})}function ln(e){var t,n;const i=/* @__PURE__ */new Map,o=(e,t)=>{var n;if(!e)return;const o=null!==(n=i.get(e))&&void 0!==n?n:/* @__PURE__ */new Set;ct.forEach(e=>o.add(e)),t&&o.add(t),i.set(e,o)};return(null!==(t=e.nodes)&&void 0!==t?t:[]).forEach(e=>{o(e.entity,e.attribute),o(e.incoming_entity,e.incoming_attribute),o(e.outgoing_entity,e.outgoing_attribute),o(e.secondary_entity,e.secondary_attribute)}),(null!==(n=e.links)&&void 0!==n?n:[]).forEach(e=>o(e.entity,e.attribute)),Array.from(i.entries()).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({attributes:Array.from(t).sort(),entityId:e}))}function dn(e,t){return{links:jt(e,t),nodes:St(e,t)}}var hn=class extends me{constructor(...e){super(...e),this.config=mt(void 0),this.editMode=!1,this._previewSourceId=Qe("preview"),this._entityWatchers=ln(this.config),this._normalizedConfig=this.config,this._resolvedGraphData=dn(this.config,void 0),this._handlePreviewNodeSelected=e=>{if(!this.editMode)return;const t=e.detail;this._matchesPreviewNodeSelectedEvent(t)&&(this._selectedNode=null==t?void 0:t.nodeId)}}connectedCallback(){super.connectedCallback(),window.addEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected)}disconnectedCallback(){window.removeEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected),super.disconnectedCallback()}_matchesPreviewNodeSelectedEvent(e){return!!e&&e.sourceId!==this._previewSourceId&&(e.targetId?e.targetId===this._previewSourceId:!e.configKey||e.configKey===an(this.config))}_previewEventScope(e=this.config){return{configKey:an(this.config),sourceConfigKey:an(e),sourceId:this._previewSourceId}}setConfig(e){this.config=mt(e)}getCardSize(){var e;return Math.ceil((null!==(e=mt(this.config).height)&&void 0!==e?e:360)/50)}static getStubConfig(){return mt(void 0)}static async getConfigElement(){return document.createElement("home-flow-card-editor")}shouldUpdate(e){if(e.has("config"))return this._syncGraphCache(this.config,this.hass,e.get("config")),!0;if(e.has("hass")){const t=e.get("hass");return!!function(e,t,n){return e.some(e=>function(e,t,n){return t!==n&&(t&&n?t.state!==n.state||e.attributes.some(e=>t.attributes[e]!==n.attributes[e]):t!==n)}(e,null==t?void 0:t.states[e.entityId],null==n?void 0:n.states[e.entityId]))}(this._entityWatchers,t,this.hass)&&(this._resolvedGraphData=dn(this._normalizedConfig,this.hass),!0)}return!0}render(){var e,t,n,i,o,r;const s=this._normalizedConfig,a=null!==(e=s.width)&&void 0!==e?e:502,l=null!==(t=s.height)&&void 0!==t?t:360;return q`
      <ha-card
        class=${`scale-${null!==(n=s.scaling_mode)&&void 0!==n?n:rt}`}
        style=${`--graph-width:${a};--graph-height:${l};--graph-aspect:${a} / ${l};`}
      >
        ${s.title?q`<div class="title">${s.title}</div>`:Z}
        <div class="graph-frame">
          <div class="graph-canvas">
            <home-flow-graph-card
              .nodes=${this._resolvedGraphData.nodes}
              .links=${this._resolvedGraphData.links}
              .layout=${null!==(i=s.layout)&&void 0!==i?i:{}}
              .labelStyle=${null!==(o=s.label_style)&&void 0!==o?o:it}
              .leafRouting=${null!==(r=s.leaf_routing)&&void 0!==r?r:ot}
              .editable=${this.editMode}
              .selectedNode=${this._selectedNode}
              @graph-layout-change=${this._handleLayoutChange}
              @graph-links-change=${this._handleLinksChange}
              @graph-node-label-change=${this._handleNodeLabelChange}
              @graph-node-remove=${this._handleNodeRemove}
              @graph-node-action=${this._handleNodeAction}
              @graph-node-select=${this._handleNodeSelect}
              @graph-entity-more-info=${this._handleEntityMoreInfo}
            ></home-flow-graph-card>
          </div>
        </div>
      </ha-card>
    `}_syncGraphCache(e,t,n){const i=Boolean(n&&n.nodes===e.nodes&&n.links===e.links&&n.hide_zero_values===e.hide_zero_values),o=mt(e);this._normalizedConfig=o,i||(this._entityWatchers=ln(o),this._resolvedGraphData=dn(o,t))}_handleLayoutChange(e){if(!this.editMode)return;const t=this.config;this.config={...this.config,layout:e.detail.layout},e.detail.live||et(this.config,this._previewEventScope(t))}_handleLinksChange(e){const t=this.config;this.config=mt({...this.config,links:e.detail.links}),e.detail.live||et(this.config,this._previewEventScope(t))}_handleNodeLabelChange(e){var t;if(!this.editMode||!e.detail.nodeId)return;const{labelAngle:n,labelOffsetX:i,labelOffsetY:o,nodeId:r}=e.detail,s=this.config;this.config=mt({...this.config,nodes:(null!==(t=this.config.nodes)&&void 0!==t?t:[]).map(e=>e.id===r?{...e,label_angle:n,label_offset_x:i,label_offset_y:o}:e)}),e.detail.live||et(this.config,this._previewEventScope(s))}_handleNodeRemove(e){if(!this.editMode||!e.detail.nodeId)return;this._selectedNode===e.detail.nodeId&&(this._selectedNode=void 0);const t=this.config;this.config=Wt(mt(this.config),e.detail.nodeId),et(this.config,this._previewEventScope(t))}_handleNodeSelect(e){this.editMode&&(this._selectedNode=e.detail.nodeId,tt(e.detail.nodeId,this._previewEventScope()))}_handleEntityMoreInfo(e){!this.editMode&&e.detail.entityId&&this._showMoreInfo(e.detail.entityId)}_handleNodeAction(e){if(this.editMode||!e.detail.action)return;const t=e.detail.action;switch(t.type){case"none":default:return;case"more-info":return void this._showMoreInfo(t.entityId);case"toggle":var n;if(!t.entityId||"function"!=typeof(null===(n=this.hass)||void 0===n?void 0:n.callService))return;return void this.hass.callService("homeassistant","toggle",{entity_id:t.entityId});case"navigate":if(!t.path)return;return window.history.pushState(null,"",t.path),void window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));case"url":if(!t.path)return;return void window.open(t.path,"_blank","noopener")}}_showMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}}))}};(Pt=hn).properties={config:{attribute:!1},editMode:{type:Boolean,attribute:"edit-mode"},hass:{attribute:!1},_selectedNode:{state:!0}},Pt.styles=d`
    :host {
      display: block;
      max-width: 100%;
      min-width: 0;
    }

    ha-card {
      display: block;
      box-sizing: border-box;
      max-width: 100%;
      min-width: 0;
      margin-inline: auto;
      overflow: hidden;
      background: var(
        --ha-card-background,
        var(--card-background-color, transparent)
      );
      border-radius: var(--ha-card-border-radius, 18px);
      box-shadow: var(--ha-card-box-shadow, none);
      border: 1px solid
        var(
          --ha-card-border-color,
          var(--divider-color, rgb(127 127 127 / 0.22))
        );
    }

    ha-card.scale-native {
      width: min(100%, calc(var(--graph-width) * 1px));
    }

    ha-card.scale-fit-width,
    ha-card.scale-shrink {
      width: 100%;
    }

    .title {
      padding: 12px 16px 0;
      color: var(--primary-text-color, #17211c);
      font-weight: 600;
    }

    .graph-frame {
      width: 100%;
      -webkit-overflow-scrolling: touch;
    }

    .graph-canvas {
      display: block;
      margin-inline: auto;
    }

    ha-card.scale-native .graph-frame {
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: thin;
      scrollbar-color: var(--secondary-text-color, #737b75) transparent;
    }

    ha-card.scale-fit-width .graph-frame,
    ha-card.scale-shrink .graph-frame {
      overflow: hidden;
    }

    ha-card.scale-native .graph-canvas {
      width: calc(var(--graph-width) * 1px);
      min-width: calc(var(--graph-width) * 1px);
      height: calc(var(--graph-height) * 1px);
    }

    ha-card.scale-fit-width .graph-canvas {
      width: 100%;
      min-width: 0;
      height: auto;
      aspect-ratio: var(--graph-aspect);
    }

    ha-card.scale-shrink .graph-canvas {
      width: min(100%, calc(var(--graph-width) * 1px));
      min-width: 0;
      max-width: calc(var(--graph-width) * 1px);
      height: auto;
      aspect-ratio: var(--graph-aspect);
    }

    home-flow-graph-card {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,customElements.get("home-flow-card")||customElements.define("home-flow-card",hn),window.customCards=null!==(Ct=window.customCards)&&void 0!==Ct?Ct:[],window.customCards.some(e=>"home-flow-card"===e.type)||window.customCards.push({type:nt,name:"Home Flow Card",description:"Visual flow map for energy, water, gas and other home resources.",preview:!0,documentationURL:"https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card"});var cn,un=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},{I:pn}=ue,fn=e=>e,_n=()=>document.createComment(""),vn=(e,t,n)=>{const i=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=i.insertBefore(_n(),o),r=i.insertBefore(_n(),o);n=new pn(t,r,e,e.options)}else{const t=n._$AB.nextSibling,s=n._$AM,a=s!==e;if(a){var r;let t;null===(r=n._$AQ)||void 0===r||r.call(n,e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==s._$AU&&n._$AP(t)}if(t!==o||a){let e=n._$AA;for(;e!==t;){const t=fn(e).nextSibling;fn(i).insertBefore(e,o),e=t}}}return n},mn=(e,t,n=e)=>(e._$AI(t,n),e),gn={},yn=(e,t=gn)=>e._$AH=t,bn=e=>{e._$AR(),e._$AA.remove()},xn=(e,t,n)=>{const i=/* @__PURE__ */new Map;for(let o=t;o<=n;o++)i.set(e[o],o);return i},$n=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends un{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;void 0===n?n=t:void 0!==t&&(i=t);const o=[],r=[];let s=0;for(const a of e)o[s]=i?i(a,s):s,r[s]=n(a,s),s++;return{values:r,keys:o}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){var o;const r=(e=>e._$AH)(e),{values:s,keys:a}=this.dt(t,n,i);if(!Array.isArray(r))return this.ut=a,s;const l=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],d=[];let h,c,u=0,p=r.length-1,f=0,_=s.length-1;for(;u<=p&&f<=_;)if(null===r[u])u++;else if(null===r[p])p--;else if(l[u]===a[f])d[f]=mn(r[u],s[f]),u++,f++;else if(l[p]===a[_])d[_]=mn(r[p],s[_]),p--,_--;else if(l[u]===a[_])d[_]=mn(r[u],s[_]),vn(e,d[_+1],r[u]),u++,_--;else if(l[p]===a[f])d[f]=mn(r[p],s[f]),vn(e,r[u],r[p]),p--,f++;else if(void 0===h&&(h=xn(a,f,_),c=xn(l,u,p)),h.has(l[u]))if(h.has(l[p])){const t=c.get(a[f]),n=void 0!==t?r[t]:null;if(null===n){const t=vn(e,r[u]);mn(t,s[f]),d[f]=t}else d[f]=mn(n,s[f]),vn(e,r[u],n),r[t]=null;f++}else bn(r[p]),p--;else bn(r[u]),u++;for(;f<=_;){const t=vn(e,d[_+1]);mn(t,s[f]),d[f++]=t}for(;u<=p;){const e=r[u++];null!==e&&bn(e)}return this.ut=a,yn(e,d),X}}),wn=[{label:"Solar",value:"mdi:solar-power"},{label:"Junction",value:"mdi:hub"},{label:"Battery",value:"mdi:battery"},{label:"Home",value:"mdi:home-lightning-bolt"},{label:"Grid",value:"mdi:transmission-tower"},{label:"Heat pump",value:"mdi:heat-pump"},{label:"EV",value:"mdi:car-electric"},{label:"Plug",value:"mdi:power-plug"},{label:"Water",value:"mdi:water"},{label:"Generic",value:"mdi:circle-outline"}],kn=[{label:"Junction",value:"junction"},{label:"Leaf",value:"leaf"}],An=[{label:"+ supplies, - consumes",value:"supply"},{label:"+ consumes, - supplies",value:"consume"}],Ln=[{label:"Single signed entity",value:"signed"},{label:"Separate in/out entities",value:"bidirectional"}],Pn=[{label:"Both",value:"both"},{label:"Supply only",value:"supply"},{label:"Consume only",value:"consume"}],Cn=[{label:"Pass-through only",value:"junction"},{label:"Counts in balance",value:"measured"},{label:"Display only",value:"ignore"}],Nn=[{label:"Incoming flow",value:"incoming"},{label:"Outgoing flow",value:"outgoing"},{label:"Net flow",value:"net"}],Mn=[{label:"More info",value:"more-info"},{label:"Toggle",value:"toggle"},{label:"Navigate",value:"navigate"},{label:"Open URL",value:"url"},{label:"None",value:"none"}],In=[{label:"Around circle",value:"curved"},{label:"Straight",value:"straight"}],Sn=[{label:"Funnel",value:"funnel"},{label:"Channel",value:"channel"},{label:"Orthogonal",value:"orthogonal"},{label:"Sweep",value:"sweep"},{label:"Radial",value:"radial"}],En=[{label:"Native (scroll if needed)",value:"native"},{label:"Fit width",value:"fit-width"},{label:"Shrink on narrow screens",value:"shrink"}],jn=class extends me{constructor(...e){super(...e),this._config=mt(void 0),this._nodeSectionOpen={},this._previewSourceId=Qe("editor"),this._handlePreviewConfigChanged=e=>{const t=e.detail;(null==t?void 0:t.config)&&this._matchesPreviewConfigChangedEvent(t)&&(this._config=mt(t.config),this._rememberPreviewSource(t.sourceId),sn(this,this._config))},this._handlePreviewNodeSelected=e=>{const t=e.detail;if(!this._matchesPreviewNodeSelectedEvent(t))return;const n=null==t?void 0:t.nodeId;this._selectedNode=n,this._rememberPreviewSource(t.sourceId),this._syncSelectedNodeEditor(n)},this._handleEditorKeydown=e=>{var t;if(!this._selectedNode)return;if("Delete"!==e.key&&"Backspace"!==e.key)return;if(e.defaultPrevented)return;if(this._isInteractiveEvent(e))return;const n=(null!==(t=mt(this._config).nodes)&&void 0!==t?t:[]).find(e=>e.id===this._selectedNode);n&&(e.preventDefault(),e.stopPropagation(),this._removeNode(n.id))},this._handleNodePointerMove=e=>{var t,n,i;if(!this._draggedNode||e.pointerId!==this._dragPointerId)return;e.preventDefault();const o=Array.from(this.renderRoot.querySelectorAll(".node-editor-row[data-node-id]")).map(e=>{var t;return{id:null!==(t=e.dataset.nodeId)&&void 0!==t?t:"",rect:e.getBoundingClientRect()}}).filter(e=>e.id&&e.id!==this._draggedNode);if(0===o.length)return;let r=null===(t=o[o.length-1])||void 0===t?void 0:t.id,s="after";for(const d of o){const t=d.rect.top+d.rect.height/2;if(e.clientY<t){r=d.id,s="before";break}}if(!r)return;this._dragOverNode=r,this._dragInsertTarget=r,this._dragInsertSide=s;const a=null!==(n=this._dragPreviewOrder)&&void 0!==n?n:(null!==(i=this._config.nodes)&&void 0!==i?i:[]).map(e=>e.id),l=this._reorderedNodeIds(this._draggedNode,r,s,a);l&&l.join("|")!==a.join("|")&&(this._dragPreviewOrder=l)},this._handleNodePointerUp=e=>{var t;if(!this._draggedNode||e.pointerId!==this._dragPointerId)return;e.preventDefault();const n=this._dragPreviewOrder,i=(null!==(t=this._config.nodes)&&void 0!==t?t:[]).map(e=>e.id);(null==n?void 0:n.length)&&n.join("|")!==i.join("|")&&this._commitNodeOrder(n),this._clearNodeDragState()}}connectedCallback(){super.connectedCallback(),window.addEventListener("home-flow-card-preview-config-changed",this._handlePreviewConfigChanged),window.addEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected),window.addEventListener("keydown",this._handleEditorKeydown,!0),window.addEventListener("pointermove",this._handleNodePointerMove,!0),window.addEventListener("pointerup",this._handleNodePointerUp,!0),window.addEventListener("pointercancel",this._handleNodePointerUp,!0)}disconnectedCallback(){window.removeEventListener("home-flow-card-preview-config-changed",this._handlePreviewConfigChanged),window.removeEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected),window.removeEventListener("keydown",this._handleEditorKeydown,!0),window.removeEventListener("pointermove",this._handleNodePointerMove,!0),window.removeEventListener("pointerup",this._handleNodePointerUp,!0),window.removeEventListener("pointercancel",this._handleNodePointerUp,!0),super.disconnectedCallback()}_matchesPreviewConfigChangedEvent(e){if(!e)return!1;if(e.sourceId===this._previewSourceId)return!1;const t=an(this._config);return e.sourceConfigKey===t||e.configKey===t}_matchesPreviewNodeSelectedEvent(e){if(!e)return!1;if(e.sourceId===this._previewSourceId)return!1;const t=an(this._config);return!e.configKey||e.configKey===t}_rememberPreviewSource(e){e&&e!==this._previewSourceId&&(this._targetPreviewSourceId=e)}_isInteractiveEvent(e){const t=window.getSelection();if(t&&!t.isCollapsed&&t.toString().trim())return!0;const n="function"==typeof e.composedPath?e.composedPath():[];for(const o of n)if(o instanceof Element&&this._matchesInteractiveElement(o))return!0;const i=this._deepActiveElement();return!!i&&this._matchesInteractiveElement(i)}_deepActiveElement(){var e,t;let n=null!==(e=null===(t=this.ownerDocument)||void 0===t?void 0:t.activeElement)&&void 0!==e?e:document.activeElement;for(;n;){var i;const e=n.shadowRoot,t=null!==(i=null==e?void 0:e.activeElement)&&void 0!==i?i:null;if(!t||t===n)break;n=t}return n}_matchesInteractiveElement(e){return!!e.matches("input, textarea, select, button, [contenteditable=''], [contenteditable='true'], ha-textfield, ha-textarea, ha-combo-box, ha-selector, hui-entity-picker, hui-icon-picker, ha-button, mwc-textfield, mwc-select, mwc-button")||!!(e instanceof HTMLElement&&e.isContentEditable)||Boolean(e.closest("input, textarea, select, button, [contenteditable=''], [contenteditable='true'], ha-textfield, ha-textarea, ha-combo-box, ha-selector, hui-entity-picker, hui-icon-picker, ha-button, mwc-textfield, mwc-select, mwc-button"))}async _syncSelectedNodeEditor(e){await this.updateComplete,await new Promise(e=>requestAnimationFrame(e));const t=Array.from(this.renderRoot.querySelectorAll(".node-editor[data-node-id]"));if(t.forEach(t=>{t.open=t.dataset.nodeId===e}),!e)return;const n=t.find(t=>t.dataset.nodeId===e);null==n||n.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}setConfig(e){this._config=mt(e)}willUpdate(e){e.has("config")&&this.config&&(this._config=mt(this.config))}render(){var e,t,n,i,o,r;const s=mt(this._config);return q`
      <div class="editor-shell">
        <section class="panel">
          <header>
            <h3>Options</h3>
            <p>General display options.</p>
          </header>
          <label>
            <span>Label style</span>
            <select
              .value=${null!==(e=s.label_style)&&void 0!==e?e:it}
              @change=${e=>this._patchConfig({label_style:e.currentTarget.value})}
            >
              ${In.map(e=>q`
                  <option value=${e.value}>${e.label}</option>
                `)}
            </select>
          </label>
          <label>
            <span>Leaf routing</span>
            <select
              .value=${null!==(t=s.leaf_routing)&&void 0!==t?t:ot}
              @change=${e=>this._patchConfig({leaf_routing:e.currentTarget.value})}
            >
              ${Sn.map(e=>q`
                  <option value=${e.value}>${e.label}</option>
                `)}
            </select>
          </label>
          <label>
            <span>Scaling mode</span>
            <select
              .value=${null!==(n=s.scaling_mode)&&void 0!==n?n:rt}
              @change=${e=>this._patchConfig({scaling_mode:e.currentTarget.value})}
            >
              ${En.map(e=>{var t;return q`
                  <option
                    value=${e.value}
                    ?selected=${(null!==(t=s.scaling_mode)&&void 0!==t?t:rt)===e.value}
                  >
                    ${e.label}
                  </option>
                `})}
            </select>
          </label>
        </section>

        <section class="panel">
          <header>
            <h3>Add nodes</h3>
            <p>Junctions can connect to junctions. Leaves connect to junctions.</p>
          </header>
          <div class="button-row">
            ${kn.map(e=>q`
                <button
                  type="button"
                  class="add-node-button"
                  @click=${()=>this._addNode(e.value)}
                >
                  <ha-icon icon="mdi:playlist-plus"></ha-icon>
                  <span>Add ${e.label}</span>
                </button>
              `)}
          </div>
        </section>

        <section class="panel">
          <header>
            <h3>Nodes</h3>
            <p>${null!==(i=null===(o=s.nodes)||void 0===o?void 0:o.length)&&void 0!==i?i:0} configured</p>
          </header>
          <div class="nodes-list">
            ${$n(null!==(r=s.nodes)&&void 0!==r?r:[],e=>e.id,e=>this._nodeEditor(e,s))}
          </div>
        </section>
      </div>
    `}_nodeVisualOrder(e,t){var n,i;const o=null!==(n=this._dragPreviewOrder)&&void 0!==n?n:(null!==(i=t.nodes)&&void 0!==i?i:[]).map(e=>e.id),r=o.indexOf(e);return r>=0?r:o.length}_nodeEditor(e,t){var n,i,o,r,s,a,l,d,h,c,u,p,f,_,v,m,g;const y=(null===(n=e.label)||void 0===n?void 0:n.trim())||"Empty",b=null!==(i=e.color)&&void 0!==i?i:this._defaultNodeColor(e,t),x=this._selectedNode===e.id,$=null!==(o=e.flow_mode)&&void 0!==o?o:"signed",w="bidirectional"===$?null!==(r=e.incoming_entity)&&void 0!==r?r:e.outgoing_entity:e.entity,k=null===e.icon?void 0:null!==(s=null!==(a=e.icon)&&void 0!==a?a:Dt(this.hass,w))&&void 0!==s?s:Bt(e.kind),A=null!==(l=e.primary_action)&&void 0!==l?l:"more-info",L=null!==(d=e.secondary_action)&&void 0!==d?d:"more-info",P=this._busJunctionIds(e.id,t),C=`${null!==(h=e.radius)&&void 0!==h?h:zt(e.kind)} px`,N="bidirectional"===$?"Separate in/out":"Single signed",M=function(e,t){var n,i;const o=("bidirectional"===(null!==(n=t.flow_mode)&&void 0!==n?n:"signed")?[t.incoming_entity,t.outgoing_entity]:[t.entity]).map(t=>{var n,i;return t?String(null!==(n=null==e||null===(i=e.states[t])||void 0===i?void 0:i.attributes.unit_of_measurement)&&void 0!==n?n:"").trim():""}).find(Boolean),r=null!==(i=t.unit)&&void 0!==i?i:o;return 1!==Tt(r)?"W":r}(this.hass,e),I=e.secondary_entity?"Configured":"Not set",S=`Applies to ${P.length} junction${1===P.length?"":"s"}`;return q`
      <div
        class=${`node-editor-row ${this._draggedNode===e.id?"dragging":""} ${this._dragOverNode===e.id?"drag-over":""} ${this._dragInsertTarget===e.id&&"before"===this._dragInsertSide?"insert-before":""} ${this._dragInsertTarget===e.id&&"after"===this._dragInsertSide?"insert-after":""}`}
        data-node-id=${e.id}
        style=${`order:${this._nodeVisualOrder(e.id,t)}`}
      >
        <div
          class="node-drag-handle"
          @pointerdown=${t=>this._handleNodePointerDown(t,e.id)}
          aria-label="Reorder node"
          title="Drag to reorder"
        >
          <ha-icon icon="mdi:drag-vertical"></ha-icon>
        </div>
        <details
          class=${"node-editor "+(x?"editor-selected":"")}
          data-node-id=${e.id}
          ?open=${x}
        >
        ${this._nodeSummary(y,e.id)}
        ${this._renderNodeSubsection(e,"appearance","Appearance",C,q`
            <div class="form-grid">
              <label>
                <span>Name</span>
                <input
                  .value=${null!==(c=e.label)&&void 0!==c?c:""}
                  @input=${n=>this._updateNode(t,e.id,{label:n.currentTarget.value})}
                />
              </label>
              <label>
                <span>Icon</span>
                ${this._iconSelect(k,n=>this._updateNode(t,e.id,{icon:n}),null!==e.icon?()=>this._updateNode(t,e.id,{icon:null}):void 0)}
              </label>
              <label>
                <span>Radius</span>
                <input
                  type="number"
                  min=${String(20)}
                  max=${String(100)}
                  .value=${String(null!==(u=e.radius)&&void 0!==u?u:zt(e.kind))}
                  @change=${n=>this._updateNode(t,e.id,{radius:Number(n.currentTarget.value)})}
                />
              </label>
              ${this._colorInput("Color",b,n=>this._updateNode(t,e.id,{color:n}),e.color?()=>this._updateNode(t,e.id,{color:void 0}):void 0)}
            </div>
            <div class="node-actions inline-actions">
              <button type="button" @click=${()=>this._duplicateNode(e.id)}>
                Duplicate
              </button>
              <button
                type="button"
                class="danger"
                @click=${()=>this._removeNode(e.id)}
              >
                Delete
              </button>
            </div>
          `,t,{forceOpen:"leaf"===e.kind||"junction"===e.kind})}

        ${this._renderNodeSubsection(e,"flow","Flow",N,q`
            <div class="form-grid">
              <label class="span-all">
                <span>Flow input</span>
                <select
                  .value=${$}
                  @change=${n=>this._updateNode(t,e.id,{flow_mode:n.currentTarget.value})}
                >
                  ${Ln.map(e=>q`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${"bidirectional"===$?q`
                    <label class="span-all">
                      <span>Inflow entity</span>
                      ${this._entitySelect(e.incoming_entity,n=>{const i=n?Dt(this.hass,n):void 0;this._updateNode(t,e.id,{incoming_entity:n,...i&&void 0===e.icon?{icon:i}:{}})})}
                    </label>
                    <label class="span-all">
                      <span>Outflow entity</span>
                      ${this._entitySelect(e.outgoing_entity,n=>{const i=n?Dt(this.hass,n):void 0;this._updateNode(t,e.id,{outgoing_entity:n,...i&&void 0===e.icon?{icon:i}:{}})})}
                    </label>
                  `:q`
                    <label class="span-all">
                      <span>Flow entity</span>
                      ${this._entitySelect(e.entity,n=>{const i=n?Dt(this.hass,n):void 0;this._updateNode(t,e.id,{entity:n,...i?{icon:i}:{}})})}
                    </label>
                    <label>
                      <span>Flow direction</span>
                      <select
                        .value=${null!==(p=e.flowDirection)&&void 0!==p?p:Ut(e)}
                        @change=${n=>this._updateNode(t,e.id,{flowDirection:n.currentTarget.value})}
                      >
                        ${An.map(e=>q`
                            <option value=${e.value}>${e.label}</option>
                          `)}
                      </select>
                    </label>
                  `}
              <label>
                <span>Allowed flow</span>
                <select
                  .value=${null!==(f=e.allowed_flow)&&void 0!==f?f:"both"}
                  @change=${n=>this._updateNode(t,e.id,{allowed_flow:n.currentTarget.value})}
                >
                  ${Pn.map(e=>q`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${"junction"===e.kind?q`
                    <label>
                      <span>Balance role</span>
                      <select
                        .value=${Gt(e)}
                        @change=${n=>this._updateNode(t,e.id,{balance_role:n.currentTarget.value})}
                      >
                        ${Cn.map(e=>q`
                            <option value=${e.value}>${e.label}</option>
                          `)}
                      </select>
                    </label>
                    <label>
                      <span>Display value</span>
                      <select
                        .value=${null!==(_=e.junction_display_value)&&void 0!==_?_:"incoming"}
                        @change=${n=>this._updateNode(t,e.id,{junction_display_value:n.currentTarget.value})}
                      >
                        ${Nn.map(e=>q`
                            <option value=${e.value}>${e.label}</option>
                          `)}
                      </select>
                    </label>
                  `:Z}
              <label>
                <span>Primary click action</span>
                <select
                  .value=${A}
                  @change=${n=>this._updateNode(t,e.id,{primary_action:n.currentTarget.value})}
                >
                  ${Mn.map(e=>q`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${"navigate"===A||"url"===A?q`
                    <label class="span-all">
                      <span>${"navigate"===A?"Primary navigation path":"Primary URL"}</span>
                      <input
                        type="text"
                        .value=${null!==(v=e.primary_action_path)&&void 0!==v?v:""}
                        placeholder=${"navigate"===A?"/lovelace/0":"https://example.com"}
                        @input=${n=>this._updateNode(t,e.id,{primary_action_path:n.currentTarget.value})}
                      />
                    </label>
                  `:Z}
              <div class="span-all flow-inline-section">
                <span class="flow-inline-title">Active state</span>
                <div class="flow-inline-fields">
                  <label class="checkbox-field">
                    <input
                      type="checkbox"
                      .checked=${!0===e.highlight_when_active}
                      @change=${n=>this._updateNode(t,e.id,{highlight_when_active:n.currentTarget.checked})}
                    />
                    <span>Highlight when active</span>
                  </label>
                  ${!0===e.highlight_when_active?q`
                        <label class="active-threshold-field">
                          <span>Active from${M?` (${M})`:""}</span>
                          <input
                            type="number"
                            min="0"
                            step="any"
                            .value=${String(null!==(m=e.active_from)&&void 0!==m?m:1)}
                            @change=${n=>{const i=n.currentTarget.value.trim();this._updateNode(t,e.id,{active_from:i?Math.max(0,Number(i)||0):void 0})}}
                          />
                        </label>
                      `:Z}
                </div>
              </div>
            </div>
            <div class="toggle-grid compact">
              <label class="checkbox-field">
                <input
                  type="checkbox"
                  .checked=${!0===e.hide_zero_values}
                  @change=${n=>this._updateNode(t,e.id,{hide_zero_values:n.currentTarget.checked})}
                />
                <span>Hide zero values</span>
              </label>
              <label class="checkbox-field">
                <input
                  type="checkbox"
                  .checked=${!0===e.hide_if_zero}
                  @change=${n=>this._updateNode(t,e.id,{hide_if_zero:n.currentTarget.checked})}
                />
                <span>Hide if zero</span>
              </label>
              <label class="checkbox-field">
                <input
                  type="checkbox"
                  .checked=${!0===e.show_flow_arrow}
                  @change=${n=>this._updateNode(t,e.id,{show_flow_arrow:n.currentTarget.checked})}
                />
                <span>Show flow arrow</span>
              </label>
              <label class="checkbox-field">
                <input
                  type="checkbox"
                  .checked=${!0===e.invert}
                  @change=${n=>this._updateNode(t,e.id,{invert:n.currentTarget.checked})}
                />
                <span>Invert flow</span>
              </label>
            </div>
          `,t)}

        ${this._renderNodeSubsection(e,"secondary","Secondary value",I,q`
            <div class="form-grid">
              <label class="span-all">
                <span>Secondary entity</span>
                ${this._entitySelect(e.secondary_entity,n=>this._updateNode(t,e.id,{secondary_entity:n}))}
              </label>
              <label>
                <span>Secondary click action</span>
                <select
                  .value=${L}
                  @change=${n=>this._updateNode(t,e.id,{secondary_action:n.currentTarget.value})}
                >
                  ${Mn.map(e=>q`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${"navigate"===L||"url"===L?q`
                    <label class="span-all">
                      <span>${"navigate"===L?"Secondary navigation path":"Secondary URL"}</span>
                      <input
                        type="text"
                        .value=${null!==(g=e.secondary_action_path)&&void 0!==g?g:""}
                        placeholder=${"navigate"===L?"/lovelace/0":"https://example.com"}
                        @input=${n=>this._updateNode(t,e.id,{secondary_action_path:n.currentTarget.value})}
                      />
                    </label>
                  `:Z}
            </div>
          `,t)}
        ${P.length>0?this._renderNodeSubsection(e,"bus","Bus options",S,this._busOptionsEditor(e,t,P),t):Z}
        </details>
      </div>
    `}_busOptionsEditor(e,t,n){return q`
      <p class="subsection-note">
        Applies to ${n.length} junction${1===n.length?"":"s"} on this bus.
      </p>
      <div class="form-grid compact">
        ${this._numberInput("Show flow from",this._busOptionValue(e.id,t,"flowMinVisibleValue",10),n=>this._updateBusOptions(t,e.id,{flowMinVisibleValue:n}))}
        ${this._numberInput("Full line width at",this._busOptionValue(e.id,t,"flowMaxValue",12e3),n=>this._updateBusOptions(t,e.id,{flowMaxValue:n}))}
      </div>
    `}_renderNodeSubsection(e,t,n,i,o,r,s={}){return q`
      <details
        class="node-subsection"
        ?open=${this._isNodeSectionOpen(e,t,r,s)}
        @toggle=${n=>this._handleNodeSectionToggle(n,e.id,t)}
      >
        <summary class="node-subsection-summary">
          <strong>${n}</strong>
          <span>${i}</span>
        </summary>
        <div class="node-subsection-content">
          ${o}
        </div>
      </details>
    `}_nodeSummary(e,t){return q`
      <summary
        class="node-summary"
        @click=${()=>this._selectNodeFromEditor(t)}
      >
        <div class="node-summary-text">
          <strong>${e}</strong>
        </div>
      </summary>
    `}_selectNodeFromEditor(e){this._selectedNode=e,tt(e,{configKey:an(this._config),sourceId:this._previewSourceId,targetId:this._targetPreviewSourceId})}_entitySelect(e,t,n=!1){const i=e&&!n?q`
            <button
              type="button"
              class="entity-clear"
              @click=${()=>t(void 0)}
            >
              Clear
            </button>
          `:Z;return this._isHomeAssistantEditor()?q`
        <div class="entity-picker">
          <ha-selector
            .hass=${this.hass}
            .selector=${{entity:{}}}
            .value=${null!=e?e:""}
            ?disabled=${n}
            @value-changed=${e=>this._handleEntityValueChanged(e,t)}
          ></ha-selector>
          ${i}
        </div>
      `:q`
      <div class="entity-picker">
        <select
          .value=${null!=e?e:""}
          ?disabled=${n}
          @change=${e=>t(e.currentTarget.value.trim()||void 0)}
        >
          <option value="">Manual</option>
          ${(o=this.hass,Object.keys(null!==(r=null==o?void 0:o.states)&&void 0!==r?r:{}).sort()).map(t=>q`
              <option value=${t} ?selected=${t===e}>
                ${t}
              </option>
            `)}
        </select>
        ${i}
      </div>
    `;var o,r}_handleEntityValueChanged(e,t){t(Ot(e.detail.value))}_iconSelect(e,t,n){const i=n?q`
          <button
            type="button"
            class="field-clear icon-clear"
            aria-label="Clear icon"
            title="Clear icon"
            @click=${n}
          >
            ×
          </button>
        `:Z;return this._isHomeAssistantEditor()?q`
        <div class="field-picker icon-picker">
          <ha-selector
            .hass=${this.hass}
            .selector=${{icon:{}}}
            .value=${null!=e?e:""}
            @value-changed=${e=>{var n;const i=null===(n=e.detail.value)||void 0===n?void 0:n.trim();i&&t(i)}}
          ></ha-selector>
          ${i}
        </div>
      `:q`
      <div class="field-picker icon-picker">
        <select
          .value=${null!=e?e:""}
          @change=${e=>{const n=e.currentTarget.value.trim();n&&t(n)}}
        >
          <option value="">No icon</option>
          ${wn.map(t=>q`
              <option value=${t.value} ?selected=${t.value===e}>
                ${t.label}
              </option>
            `)}
        </select>
        ${i}
      </div>
    `}_isHomeAssistantEditor(){return Boolean(this.hass&&"object"==typeof this.hass&&"connection"in this.hass)}_colorInput(e,t,n,i){return q`
      <label class="color-field">
        <span>${e}</span>
        <div class="color-picker">
          <input
            type="color"
            .value=${function(e){return/^#[0-9a-f]{6}$/i.test(null!=e?e:"")?e:lt}(t)}
            @input=${e=>n(e.currentTarget.value)}
          />
          ${i?q`
                <button type="button" class="field-clear" @click=${i}>
                  Reset
                </button>
              `:Z}
        </div>
      </label>
    `}_defaultNodeColor(e,t){var n,i,o;if("junction"===e.kind)return Kt(e.id,null!==(o=t.nodes)&&void 0!==o?o:[]);const r=(null!==(n=t.links)&&void 0!==n?n:[]).filter(t=>t.from===e.id||t.to===e.id).map(t=>t.from===e.id?t.to:t.from).find(e=>{var n,i;return"junction"===(null===(n=(null!==(i=t.nodes)&&void 0!==i?i:[]).find(t=>t.id===e))||void 0===n?void 0:n.kind)});if(r){var s,a,l;const e=(null!==(s=t.nodes)&&void 0!==s?s:[]).find(e=>e.id===r);return null!==(a=null==e?void 0:e.color)&&void 0!==a?a:Kt(r,null!==(l=t.nodes)&&void 0!==l?l:[])}return"mdi:solar-power"===e.icon?ht:(null===(i=e.icon)||void 0===i?void 0:i.startsWith("mdi:battery"))?dt:lt}_nextNodeColor(e,t,n){var i,o;const r=t.map(e=>{var t;return qt(null!==(t=e.color)&&void 0!==t?t:this._defaultNodeColor(e,n))}).filter(e=>Boolean(e)),s="junction"===e?ut[0]:lt;if(0===r.length)return s;const a=pt.filter(e=>!r.includes(e.toLowerCase()));return null!==(i=null===(o=(a.length>0?a:pt).map(e=>({color:e,distance:Math.min(...r.map(t=>function(e,t){const n=Yt(e),i=Yt(t);return n&&i?Math.hypot(n.r-i.r,n.g-i.g,n.b-i.b):0}(e,t)))})).sort((e,t)=>t.distance-e.distance)[0])||void 0===o?void 0:o.color)&&void 0!==i?i:s}_numberInput(e,t,n){return q`
      <label>
        <span>${e}</span>
        <input
          type="number"
          .value=${String(Math.round(t))}
          @input=${e=>n(Number(e.currentTarget.value))}
        />
      </label>
    `}_busOptionValue(e,t,n,i){var o;const r=null!==(o=t.nodes)&&void 0!==o?o:[],s=this._busJunctionIds(e,t),a=r.find(e=>s.includes(e.id)&&Number.isFinite(e[n])),l=null==a?void 0:a[n];return Number.isFinite(l)?Number(l):i}_updateBusOptions(e,t,n){var i;const o=this._busJunctionIds(t,e);0!==o.length&&this._patchConfig({nodes:(null!==(i=e.nodes)&&void 0!==i?i:[]).map(e=>o.includes(e.id)?{...e,...n}:e)})}_busJunctionIds(e,t){var n;const i=null!==(n=t.nodes)&&void 0!==n?n:[],o=new Map(i.map(e=>[e.id,e])),r=/* @__PURE__ */new Set,s=[e];for(;s.length>0;){var a;const e=s.shift();e&&!r.has(e)&&(r.add(e),(null!==(a=t.links)&&void 0!==a?a:[]).forEach(t=>{if(t.from!==e&&t.to!==e)return;const n=t.from===e?t.to:t.from;!r.has(n)&&o.has(n)&&s.push(n)}))}return i.filter(e=>"junction"===e.kind&&r.has(e.id)).map(e=>e.id)}_addNode(e){var t,n,i,o;const r=mt(this._config),s=null!==(t=r.nodes)&&void 0!==t?t:[],a=this._uniqueNodeId(e,s),l={id:a,kind:e,label:null!==(n=null===(i=kn.find(t=>t.value===e))||void 0===i?void 0:i.label)&&void 0!==n?n:"Node",icon:Bt(e),radius:zt(e),..."junction"===e?{color:this._nextNodeColor(e,s,r)}:{},flowDirection:"supply",..."junction"===e?{balance_role:Ht(e)}:{}};this._patchConfig({nodes:[l,...s],layout:{...null!==(o=r.layout)&&void 0!==o?o:{},[a]:this._initialPoint(e,s.filter(t=>t.kind===e).length)}})}_uniqueNodeId(e,t){const n=new Set(t.map(e=>e.id));let i=1;for(;n.has(`${e}-${i}`);)i+=1;return`${e}-${i}`}_initialPoint(e,t){return"junction"===e?{x:360+130*t,y:348}:{x:300+t%4*120,y:86+110*Math.floor(t/4)}}_duplicateNode(e){var t,n,i,o,r;const s=mt(this._config),a=null!==(t=s.nodes)&&void 0!==t?t:[],l=a.find(t=>t.id===e);if(!l)return;const d=this._uniqueDuplicateNodeId(l.id,a),h=null!==(n=null===(i=s.layout)||void 0===i?void 0:i[l.id])&&void 0!==n?n:this._initialPoint(l.kind,a.filter(e=>e.kind===l.kind).length),c={...l,id:d,label:this._duplicateNodeLabel(null!==(o=l.label)&&void 0!==o?o:l.id,a)};this._selectedNode=d,this._patchConfig({nodes:[c,...a],layout:{...null!==(r=s.layout)&&void 0!==r?r:{},[d]:this._duplicatePoint(h)}}),this._syncSelectedNodeEditor(d)}_uniqueDuplicateNodeId(e,t){const n=new Set(t.map(e=>e.id));let i=1,o=`${e}-copy`;for(;n.has(o);)i+=1,o=`${e}-copy-${i}`;return o}_duplicateNodeLabel(e,t){const n=new Set(t.map(e=>e.label).filter(Boolean));let i=1,o=`${e} copy`;for(;n.has(o);)i+=1,o=`${e} copy ${i}`;return o}_duplicatePoint(e){const t=46,n=e.x+t>916?e.x-t:e.x+t,i=e.y+t>658?e.y-t:e.y+t;return{x:Math.max(70,Math.min(916,n)),y:Math.max(62,Math.min(658,i))}}_updateNode(e,t,n){var i;this._patchConfig({nodes:(null!==(i=e.nodes)&&void 0!==i?i:[]).map(e=>e.id===t?{...e,...n}:e)})}_reorderedNodeIds(e,t,n,i){const o=[...i],r=o.indexOf(e),s=o.indexOf(t);if(r<0||s<0||r===s)return;const[a]=o.splice(r,1);let l=r<s?s-1:s;return"after"===n&&(l+=1),o.splice(l,0,a),o}_commitNodeOrder(e){var t;const n=null!==(t=mt(this._config).nodes)&&void 0!==t?t:[],i=new Map(n.map(e=>[e.id,e])),o=e.map(e=>i.get(e)).filter(e=>Boolean(e)),r=n.filter(t=>!e.includes(t.id));this._patchConfig({nodes:[...o,...r]})}_handleNodePointerDown(e,t){var n,i,o;0===e.button&&(e.preventDefault(),e.stopPropagation(),this._draggedNode=t,this._dragPointerId=e.pointerId,this._dragInsertSide=void 0,this._dragInsertTarget=void 0,this._dragOverNode=void 0,this._dragPreviewOrder=(null!==(n=this._config.nodes)&&void 0!==n?n:[]).map(e=>e.id),null===(i=e.currentTarget)||void 0===i||null===(o=i.setPointerCapture)||void 0===o||o.call(i,e.pointerId))}_clearNodeDragState(){this._draggedNode=void 0,this._dragPointerId=void 0,this._dragOverNode=void 0,this._dragInsertTarget=void 0,this._dragInsertSide=void 0,this._dragPreviewOrder=void 0}_removeNode(e){const t=mt(this._config);if(this._selectedNode===e&&(this._selectedNode=void 0),this._nodeSectionOpen[e]){const t={...this._nodeSectionOpen};delete t[e],this._nodeSectionOpen=t}this._patchConfig(Wt(t,e))}_handleNodeSectionToggle(e,t,n){var i;const o=e.currentTarget;o&&(this._nodeSectionOpen={...this._nodeSectionOpen,[t]:{...null!==(i=this._nodeSectionOpen[t])&&void 0!==i?i:{},[n]:o.open}})}_isNodeSectionOpen(e,t,n,i={}){var o;const r=null===(o=this._nodeSectionOpen[e.id])||void 0===o?void 0:o[t];return void 0!==r?r:!!i.forceOpen||this._defaultNodeSectionOpen(e,t,n)}_defaultNodeSectionOpen(e,t,n){return"appearance"===t}_patchConfig(e){this._config=mt({...this._config,...e}),sn(this,this._config)}};(cn=jn).properties={config:{attribute:!1},_config:{state:!0},_dragInsertSide:{state:!0},_dragInsertTarget:{state:!0},_dragPreviewOrder:{state:!0},_dragOverNode:{state:!0},_draggedNode:{state:!0},_selectedNode:{state:!0},hass:{attribute:!1}},cn.styles=d`
    :host {
      display: block;
      max-width: 100%;
      min-width: 0;
      color: var(--primary-text-color, #17211c);
      color-scheme: light dark;
      --home-flow-field-background: var(
        --input-fill-color,
        var(--secondary-background-color, var(--card-background-color, #fff))
      );
      --home-flow-field-border: var(--input-idle-line-color, var(--divider-color, #dce4dd));
      --home-flow-field-color: var(--input-ink-color, var(--primary-text-color, #17211c));
      --home-flow-field-disabled-background: var(
        --input-disabled-fill-color,
        var(--secondary-background-color, #f5f7f5)
      );
      --home-flow-field-disabled-color: var(
        --input-disabled-ink-color,
        var(--disabled-text-color, #8a938d)
      );
    }

    .editor-shell {
      display: grid;
      gap: 12px;
      box-sizing: border-box;
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }

    .panel {
      box-sizing: border-box;
      display: grid;
      gap: 12px;
      padding: 14px;
      border: 1px solid var(--divider-color, #dce4dd);
      border-radius: 8px;
      background: var(--card-background-color, #fff);
    }

    header {
      display: grid;
      gap: 3px;
    }

    h3,
    h4,
    p {
      margin: 0;
    }

    h3 {
      font-size: 1rem;
    }

    h4 {
      font-size: 0.92rem;
    }

    p,
    .muted {
      color: var(--secondary-text-color, #536057);
      font-size: 0.9rem;
    }

    label,
    .node-row {
      display: grid;
      gap: 5px;
    }

    .checkbox-field {
      align-items: center;
      display: flex;
      gap: 8px;
      min-height: 36px;
      padding: 2px 0;
    }

    .checkbox-field input {
      min-height: auto;
      width: auto;
    }

    label span {
      color: var(--secondary-text-color, #536057);
      font-size: 0.8rem;
      font-weight: 600;
    }

    input,
    select,
    button {
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
      min-height: 36px;
      border: 1px solid var(--home-flow-field-border);
      border-radius: 8px;
      background: var(--home-flow-field-background);
      color: var(--home-flow-field-color);
      font: inherit;
      padding: 0 10px;
    }

    input::placeholder {
      color: var(--secondary-text-color, #536057);
      opacity: 0.8;
    }

    input:focus,
    select:focus,
    button:focus-visible {
      border-color: var(--primary-color, #03a9f4);
      outline: 2px solid color-mix(in srgb, var(--primary-color, #03a9f4) 24%, transparent);
      outline-offset: 1px;
    }

    ha-selector {
      --mdc-select-dropdown-icon-color: var(--home-flow-field-color);
      --mdc-select-fill-color: var(--home-flow-field-background);
      --mdc-select-ink-color: var(--home-flow-field-color);
      --mdc-text-field-fill-color: var(--home-flow-field-background);
      --mdc-text-field-ink-color: var(--home-flow-field-color);
      --mdc-text-field-label-ink-color: var(--secondary-text-color, #536057);
      --mdc-theme-on-surface: var(--home-flow-field-color);
      --mdc-theme-surface: var(--home-flow-field-background);
      box-sizing: border-box;
      display: block;
      min-width: 0;
      width: 100%;
    }

    button {
      cursor: pointer;
      font-weight: 600;
    }

    .add-node-button {
      align-items: center;
      background: color-mix(in srgb, var(--primary-color, #03a9f4) 10%, transparent);
      border: 0;
      border-radius: 18px;
      color: var(--primary-color, #03a9f4);
      display: inline-flex;
      gap: 6px;
      justify-content: center;
      min-height: 36px;
      padding: 0 14px;
      width: fit-content;
    }

    .add-node-button:hover {
      background: color-mix(in srgb, var(--primary-color, #03a9f4) 16%, transparent);
    }

    .add-node-button ha-icon {
      --mdc-icon-size: 18px;
      height: 18px;
      width: 18px;
    }

    input:disabled,
    select:disabled,
    button:disabled {
      cursor: not-allowed;
      opacity: 0.52;
      background: var(--home-flow-field-disabled-background);
      color: var(--home-flow-field-disabled-color);
    }

    .two-columns,
    .node-grid,
    .form-grid {
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }

    .button-row {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .form-grid.compact {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }

    .toggle-grid {
      display: grid;
      gap: 6px 12px;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .toggle-grid.compact {
      grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
    }

    .flow-inline-section {
      border-top: 1px solid var(--divider-color, rgb(127 127 127 / 0.2));
      display: grid;
      gap: 6px;
      margin-top: 2px;
      padding-top: 8px;
    }

    .flow-inline-title {
      color: var(--primary-text-color, #17211c);
      font-size: 0.84rem;
      font-weight: 600;
    }

    .flow-inline-fields {
      align-items: end;
      display: grid;
      gap: 8px 12px;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }

    .active-threshold-field input {
      min-height: 36px;
    }

    .nodes-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .entity-field,
    .span-all {
      grid-column: 1 / -1;
    }

    .entity-picker,
    .field-picker {
      align-items: start;
      display: grid;
      gap: 8px;
      grid-template-columns: minmax(0, 1fr) auto;
      min-width: 0;
      width: 100%;
    }

    .field-picker.icon-picker {
      grid-template-columns: minmax(0, 1fr) 36px;
    }

    .entity-picker select,
    .entity-picker ha-selector,
    .field-picker select,
    .field-picker ha-selector {
      min-width: 0;
      width: 100%;
    }

    .color-picker {
      align-items: center;
      display: grid;
      gap: 8px;
      grid-template-columns: 48px auto;
      width: fit-content;
    }

    .color-picker input[type="color"] {
      height: 36px;
      min-height: 36px;
      padding: 3px;
      width: 48px;
    }

    .entity-clear,
    .field-clear {
      background: var(--home-flow-field-background);
      padding: 0 12px;
      width: auto;
    }

    .icon-clear {
      align-items: center;
      border-radius: 999px;
      display: inline-flex;
      font-size: 1.15rem;
      justify-content: center;
      line-height: 1;
      min-height: 36px;
      padding: 0;
      width: 36px;
    }

    .node-editor-row {
      align-items: start;
      display: grid;
      gap: 8px;
      grid-template-columns: 26px minmax(0, 1fr);
      position: relative;
    }

    .node-editor-row::before,
    .node-editor-row::after {
      background: var(--primary-color, #03a9f4);
      border-radius: 999px;
      content: "";
      height: 2px;
      left: 28px;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      right: 6px;
      z-index: 1;
    }

    .node-editor-row::before {
      top: -6px;
    }

    .node-editor-row::after {
      bottom: -6px;
    }

    .node-editor-row.insert-before::before {
      opacity: 1;
    }

    .node-editor-row.insert-after::after {
      opacity: 1;
    }

    .node-editor-row.dragging {
      opacity: 0.55;
    }

    .node-editor {
      display: grid;
      gap: 10px;
      padding: 6px 10px;
      border: 1px solid var(--divider-color, #dce4dd);
      border-radius: 8px;
      scroll-margin-block: 14px;
      background: var(--card-background-color, #fff);
    }

    .node-actions {
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      margin-top: 2px;
    }

    .node-editor[open] {
      gap: 12px;
    }

    .node-subsection {
      border-top: 1px solid color-mix(
        in srgb,
        var(--divider-color, #dce4dd) 85%,
        transparent
      );
      display: grid;
      gap: 0;
      padding-top: 2px;
    }

    .node-subsection-summary {
      align-items: center;
      cursor: pointer;
      display: grid;
      gap: 3px 10px;
      grid-template-columns: auto minmax(0, 1fr) auto;
      list-style: none;
      min-width: 0;
      padding: 10px 0 8px;
    }

    .node-subsection-summary::-webkit-details-marker {
      display: none;
    }

    .node-subsection-summary::before {
      content: "›";
      color: var(--secondary-text-color, #536057);
      font-size: 0.95rem;
      font-weight: 700;
      transform: rotate(0deg);
      transition: transform 120ms ease;
    }

    .node-subsection[open] > .node-subsection-summary::before {
      transform: rotate(90deg);
    }

    .node-subsection-summary strong {
      font-size: 0.92rem;
      font-weight: 700;
      min-width: 0;
    }

    .node-subsection-summary span {
      color: var(--secondary-text-color, #536057);
      font-size: 0.8rem;
      white-space: nowrap;
    }

    .node-subsection-content {
      display: grid;
      gap: 10px;
      padding: 0 0 10px 20px;
    }

    .subsection-note {
      font-size: 0.82rem;
      margin-top: -2px;
    }

    .node-editor.editor-selected {
      border-color: var(--primary-color, #03a9f4);
      box-shadow: 0 0 0 2px
        color-mix(in srgb, var(--primary-color, #03a9f4) 18%, transparent);
      background: color-mix(
        in srgb,
        var(--primary-color, #03a9f4) 5%,
        var(--card-background-color, #fff)
      );
    }

    .node-editor-row.drag-over .node-editor {
      border-color: var(--primary-color, #03a9f4);
      box-shadow: inset 0 0 0 1px
        color-mix(in srgb, var(--primary-color, #03a9f4) 22%, transparent);
    }

    .node-summary {
      align-items: center;
      cursor: pointer;
      display: grid;
      gap: 0 10px;
      grid-template-columns: minmax(0, 1fr) auto;
      list-style: none;
      min-width: 0;
      min-height: 14px;
      padding: 0;
    }

    .node-summary::-webkit-details-marker {
      display: none;
    }

    .node-summary:focus {
      outline: none;
    }

    .node-summary:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 4px;
      border-radius: 6px;
    }

    .node-summary::before {
      content: "›";
      color: var(--secondary-text-color, #536057);
      font-size: 1.45rem;
      font-weight: 700;
      grid-column: 2;
      grid-row: 1;
      justify-self: end;
      transform: rotate(0deg);
      transition: transform 120ms ease;
    }

    .node-editor[open] > .node-summary::before {
      transform: rotate(90deg);
    }

    .node-summary-text {
      display: grid;
      gap: 0;
      grid-column: 1;
      min-width: 0;
      text-align: left;
    }

    .node-summary strong,
    .node-summary span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .node-summary strong {
      font-size: 0.92rem;
      font-weight: 600;
    }

    .node-drag-handle {
      align-items: center;
      background: transparent;
      color: var(--secondary-text-color, #536057);
      cursor: grab;
      display: inline-flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      margin-top: 8px;
      width: 26px;
    }

    .node-drag-handle:hover {
      color: var(--primary-color, #03a9f4);
    }

    .node-drag-handle:active {
      cursor: grabbing;
    }

    .node-drag-handle ha-icon {
      --mdc-icon-size: 21px;
    }

    .danger {
      border-color: #d7aaa3;
      color: #8f3329;
    }
  `,customElements.get("home-flow-card-editor")||customElements.define("home-flow-card-editor",jn);
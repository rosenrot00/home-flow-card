var e,t,i,n,o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=/* @__PURE__ */new WeakMap,l=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}},d=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new l(i,e,s)},h=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new l("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:c,defineProperty:u,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:_,getPrototypeOf:v}=Object,m=globalThis,g=m.trustedTypes,y=g?g.emptyScript:"",b=m.reactiveElementPolyfillSupport,x=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!c(e,t),k={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:w};null!==(t=(e=Symbol).metadata)&&void 0!==t||(e.metadata=Symbol("metadata")),null!==(i=m.litPropertyMetadata)&&void 0!==i||(m.litPropertyMetadata=/* @__PURE__ */new WeakMap);var A,L=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&u(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){var n;const{get:o,set:r}=null!==(n=p(this.prototype,e))&&void 0!==n?n:{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=null==o?void 0:o.call(this);null==r||r.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:k}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...f(e),..._(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=/* @__PURE__ */new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=/* @__PURE__ */new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}_$E_(){const e=/* @__PURE__ */new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),n=o.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}})(t,this.constructor.elementStyles),t}connectedCallback(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$EO)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){var o;const r=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:$).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){var o,r,s;const e=i.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:$;this._$Em=n;const l=a.fromAttribute(t,e.type);this[n]=null!==(r=null!=l?l:null===(s=this._$Ej)||void 0===s?void 0:s.get(n))&&void 0!==r?r:l,this._$Em=null}}requestUpdate(e,t,i,n=!1,o){if(void 0!==e){var r,s,a;const l=this.constructor;if(!1===n&&(o=this[e]),null!==(r=i)&&void 0!==r||(i=l.getPropertyOptions(e)),!((null!==(s=i.hasChanged)&&void 0!==s?s:w)(o,t)||i.useDefault&&i.reflect&&o===(null===(a=this._$Ej)||void 0===a?void 0:a.get(e))&&!this.hasAttribute(l._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:o},r){var s,a,l;i&&!(null!==(s=this._$Ej)&&void 0!==s?s:this._$Ej=/* @__PURE__ */new Map).has(e)&&(this._$Ej.set(e,null!==(a=null!=r?r:t)&&void 0!==a?a:this[e]),!0!==o||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(null!==(l=this._$Eq)&&void 0!==l?l:this._$Eq=/* @__PURE__ */new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const i=this._$AL;try{var n;t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(n=this._$EO)||void 0===n||n.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$EO)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[x("elementProperties")]=/* @__PURE__ */new Map,L[x("finalized")]=/* @__PURE__ */new Map,null==b||b({ReactiveElement:L}),(null!==(n=m.reactiveElementVersions)&&void 0!==n?n:m.reactiveElementVersions=[]).push("2.1.2");var P=globalThis,M=e=>e,C=P.trustedTypes,N=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,I="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,j=`<${E}>`,V=document,O=()=>V.createComment(""),F=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,T=e=>D(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),R="[ \t\n\f\r]",J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,z=/>/g,U=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,G=/"/g,W=/^(?:script|style|textarea|title)$/i,q=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),K=q(1),Y=q(2),X=(q(3),Symbol.for("lit-noChange")),Z=Symbol.for("lit-nothing"),Q=/* @__PURE__ */new WeakMap,ee=V.createTreeWalker(V,129);function te(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==N?N.createHTML(t):t}var ie=(e,t)=>{const i=e.length-1,n=[];let o,r=2===t?"<svg>":3===t?"<math>":"",s=J;for(let l=0;l<i;l++){var a;const t=e[l];let i,d,h=-1,c=0;for(;c<t.length&&(s.lastIndex=c,d=s.exec(t),null!==d);)c=s.lastIndex,s===J?"!--"===d[1]?s=B:void 0!==d[1]?s=z:void 0!==d[2]?(W.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=U):void 0!==d[3]&&(s=U):s===U?">"===d[0]?(s=null!==(a=o)&&void 0!==a?a:J,h=-1):void 0===d[1]?h=-2:(h=s.lastIndex-d[2].length,i=d[1],s=void 0===d[3]?U:'"'===d[3]?G:H):s===G||s===H?s=U:s===B||s===z?s=J:(s=U,o=void 0);const u=s===U&&e[l+1].startsWith("/>")?" ":"";r+=s===J?t+j:h>=0?(n.push(i),t.slice(0,h)+I+t.slice(h)+S+u):t+S+(-2===h?l:u)}return[te(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]},ne=class e{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[d,h]=ie(t,i);if(this.el=e.createElement(d,n),ee.currentNode=this.el.content,2===i||3===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ee.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(I)){const t=h[s++],i=o.getAttribute(e).split(S),n=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?le:"?"===n[1]?de:"@"===n[1]?he:ae}),o.removeAttribute(e)}else e.startsWith(S)&&(l.push({type:6,index:r}),o.removeAttribute(e));if(W.test(o.tagName)){const e=o.textContent.split(S),t=e.length-1;if(t>0){o.textContent=C?C.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],O()),ee.nextNode(),l.push({type:2,index:++r});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===E)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(S,e+1));)l.push({type:7,index:r}),e+=S.length-1}r++}}static createElement(e,t){const i=V.createElement("template");return i.innerHTML=e,i}};function oe(e,t,i=e,n){var o,r,s;if(t===X)return t;let a=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const l=F(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null==a||null===(r=a._$AO)||void 0===r||r.call(a,!1),void 0===l?a=void 0:(a=new l(e),a._$AT(e,i,n)),void 0!==n?(null!==(s=i._$Co)&&void 0!==s?s:i._$Co=[])[n]=a:i._$Cl=a),void 0!==a&&(t=oe(e,a._$AS(e,t.values),a,n)),t}var re=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:V).importNode(i,!0);ee.currentNode=o;let r=ee.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new se(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new ce(r,this,e)),this._$AV.push(t),l=n[++a]}s!==(null==l?void 0:l.index)&&(r=ee.nextNode(),s++)}return ee.currentNode=V,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},se=class e{get _$AU(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}constructor(e,t,i,n){var o;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=oe(this,e,t),F(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==X&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):T(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&F(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=ne.createElement(te(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(i);else{const e=new re(o,this),t=e.u(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new ne(e)),t}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const r of t)o===i.length?i.push(n=new e(this.O(O()),this.O(O()),this,this.options)):n=i[o],n._$AI(r),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e!==this._$AB;){const t=M(e).nextSibling;M(e).remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}},ae=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,o){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(/* @__PURE__ */new String),this.strings=i):this._$AH=Z}_$AI(e,t=this,i,n){const o=this.strings;let r=!1;if(void 0===o)e=oe(this,e,t,0),r=!F(e)||e!==this._$AH&&e!==X,r&&(this._$AH=e);else{var s;const n=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=oe(this,n[i+a],t,a),l===X&&(l=this._$AH[a]),r||(r=!F(l)||l!==this._$AH[a]),l===Z?e=Z:e!==Z&&(e+=(null!==(s=l)&&void 0!==s?s:"")+o[a+1]),this._$AH[a]=l}r&&!n&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}},le=class extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}},de=class extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}},he=class extends ae{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=oe(this,e,t,0))&&void 0!==i?i:Z)===X)return;const n=this._$AH,o=e===Z&&n!==Z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==Z&&(n===Z||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}},ce=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){oe(this,e)}},ue={M:I,P:S,A:E,C:1,L:ie,R:re,D:T,V:oe,I:se,H:ae,N:de,U:he,B:le,F:ce},pe=P.litHtmlPolyfillSupport;null==pe||pe(ne,se),(null!==(A=P.litHtmlVersions)&&void 0!==A?A:P.litHtmlVersions=[]).push("3.3.2");var fe,_e,ve=globalThis,me=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var n;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let r=o._$litPart$;if(void 0===r){var s;const e=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new se(t.insertBefore(O(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return X}};me._$litElement$=!0,me.finalized=!0,null===(fe=ve.litElementHydrateSupport)||void 0===fe||fe.call(ve,{LitElement:me});var ge=ve.litElementPolyfillSupport;null==ge||ge({LitElement:me}),(null!==(_e=ve.litElementVersions)&&void 0!==_e?_e:ve.litElementVersions=[]).push("4.2.2");var ye=(e,t,i)=>Math.min(Math.max(e,t),i);function be(e,t,i){return{x:Number((e.x+Math.cos(i)*t).toFixed(2)),y:Number((e.y+Math.sin(i)*t).toFixed(2))}}function xe(e,t,i){const n=i.x-t.x,o=i.y-t.y,r=n*n+o*o||1,s=ye(((e.x-t.x)*n+(e.y-t.y)*o)/r,0,1),a={x:t.x+n*s,y:t.y+o*s};return{distance:Math.hypot(e.x-a.x,e.y-a.y),point:a,t:s}}var $e=class{constructor(){this.widths=/* @__PURE__ */new Map}measure(e){var t,i;const n=this.widths.get(e);if(void 0!==n)return n;void 0===this.context&&(this.context=document.createElement("canvas").getContext("2d"),this.context&&(this.context.font="400 27px Roboto, sans-serif"));const o=null!==(t=null===(i=this.context)||void 0===i?void 0:i.measureText(e).width)&&void 0!==t?t:13*e.length;return this.widths.set(e,o),o}};function we(e,t,i,n){const o="start"===t.textAnchor?i-28-t.x:"end"===t.textAnchor?t.x-28:2*Math.min(t.x-28,i-28-t.x),r=Math.max(80,o);if(n.measure(e)<=r)return[e];const s=[];let a="";for(const l of e.split(/\s+/)){const e=a?`${a} ${l}`:l;if(n.measure(e)<=r){a=e;continue}if(a&&s.push(a),n.measure(l)<=r){a=l;continue}let t="";for(const i of l){const e=t+i;t&&n.measure(e)>r?(s.push(t),t=i):t=e}a=t}return a&&s.push(a),s.length>0?s:[e]}var ke=d`
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
      touch-action: auto;
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
      user-select: none;
    }

    .editable .node,
    .node-hit-proxy,
    .label-handle-hit {
      touch-action: none;
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

`;function Ae(e,t,i){return(e.point.x-t.point.x)*i.x+(e.point.y-t.point.y)*i.y}var Le=e=>{var t;return null!==(t=e.contributesToFlow)&&void 0!==t?t:"leaf"===e.kind};function Pe(e,t,i,n,o){if(!n[t]||!n[i])return;const r=/* @__PURE__ */new Set,s=[t],a=t=>t.id===e.id||t.from===e.from&&t.to===e.to||t.from===e.to&&t.to===e.from;for(;s.length>0;){const e=s.shift();if(e&&!r.has(e)){r.add(e);for(const t of o){if(a(t))continue;if(t.from!==e&&t.to!==e)continue;const i=t.from===e?t.to:t.from;!r.has(i)&&n[i]&&s.push(i)}}}return r}var Me=.5,Ce={leaf:"var(--home-flow-leaf-color, #c65b4a)",junction:"var(--home-flow-junction-1-color, #f6b73c)"},Ne=class{constructor(e,t,i,n){this.flowMinVisibleValue=e,this.flowMaxValue=t,this.links=i,this.junctionFlowColor=n}signedValue(e,t,i=this.links,n){return this._linkSignedValue(e,t,i,n)}nodeFlowValue(e){return this._nodeFlowValue(e)}sourceParts(e,t,i,n,o){return this._linkSourceParts(e,t,i,n,o)}color(e,t,i,n,o){return this._linkColor(e,t,i,n,o)}nodeColor(e,t,i,n){return this._nodeColorCached(e,t,i,n)}showsFlow(e,t){return this._shouldShowFlow(e,t)}width(e,t,i){return this._flowWidth(e,t,i)}linkMinValue(e,t,i=this.links){return this._linkMinVisibleValue(e,t,i)}linkMaxValue(e,t,i,n=this.links){return this._linkMaxValue(e,t,i,n)}primaryValue(e,t,i){return this._nodePrimaryValue(e,t,i)}displayValue(e,t,i){return this._nodeDisplayValue(e,t,i)}hasFlowArrow(e){return this._hasNodeFlowArrow(e)}_linkSignedValue(e,t,i=this.links,n){if(Number.isFinite(e.value))return Number(e.value);const o=t[e.from],r=t[e.to];return"leaf"===(null==o?void 0:o.kind)?this._nodeFlowValue(o):"leaf"===(null==r?void 0:r.kind)?-this._nodeFlowValue(r):"junction"===(null==o?void 0:o.kind)&&"junction"===(null==r?void 0:r.kind)?this._derivedJunctionLinkValue(e,o,r,t,i,n):0}_nodeFlowValue(e){return Number.isFinite(e.flowValue)?Number(e.flowValue):e.value}_derivedJunctionLinkValue(e,t,i,n,o,r){const s=this._nodeIdsOnSideOfLinkCached(e,t.id,i.id,n,o,r);if(!s||s.has(i.id))return 0;let a=0;const l=Array.from(s).reduce((e,t)=>{const i=n[t];return i&&Le(i)?(a+=1,e+this._nodeFlowValue(i)):e},0);return a>0?l:0}_linkSourceParts(e,t,i,n,o){if(e.color||Math.abs(n)<=Me)return;const r=function(e){const t=/* @__PURE__ */new Map;for(const i of e){const e=t.get(i.color);e?e.amount+=i.amount:t.set(i.color,{...i})}return Array.from(t.values())}(this._linkFlowSources(e,t,i,n,o));if(0===r.length)return;const s=r.reduce((e,t)=>e+t.amount,0);if(s<=Me)return;let a=0;return function(e){if(e.length<=1)return e;const t=[];let i=0;for(const r of e)r.length<1?i+=r.length:t.push({...r});if(t.length===e.length)return e;if(0===t.length)return[{...e.reduce((e,t)=>t.length>e.length?t:e),length:18,start:0}];const n=t.reduce((e,i,n)=>i.length>t[e].length?n:e,0);t[n]={...t[n],length:t[n].length+i};let o=0;return t.map((e,i)=>{const n=i===t.length-1?18-o:e.length,r={...e,length:n,start:o};return o+=n,r})}(r.map((e,t)=>{const i=t===r.length-1?18-a:e.amount/s*18,n={color:e.color,key:e.key,length:i,start:a};return a+=i,n}))}_linkFlowSources(e,t,i,n,o){const r=t.nodes,s=r[e.from],a=r[e.to];if(!s||!a)return[];const l=n>=0?e.from:e.to,d=n>=0?e.to:e.from,h=this._nodeIdsOnSideOfLinkCached(e,l,d,r,i,o);if(!h||h.has(d))return[];const c=r[l],u=r[d],p=function(e,t){const i=t.point.x-e.point.x,n=t.point.y-e.point.y,o=Math.hypot(i,n)||1;return{x:i/o,y:n/o}}(c,u);return Array.from(h).map(e=>r[e]).filter(e=>Boolean(e)).filter(e=>Le(e)).map(e=>({amount:this._nodeFlowValue(e),color:this._nodeColorCached(e,t,i,o),key:e.id,node:e})).filter(e=>e.amount>Me).sort((e,t)=>Ae(e.node,c,p)-Ae(t.node,c,p)||e.key.localeCompare(t.key))}_nodeIdsOnSideOfLinkCached(e,t,i,n,o,r){if(!r)return Pe(e,t,i,n,o);const s=`${e.id}|${t}|${i}`;return r.sideNodeIds.has(s)||r.sideNodeIds.set(s,Pe(e,t,i,n,o)),r.sideNodeIds.get(s)}_linkColor(e,t,i,n=this._linkSignedValue(e,t.nodes,i),o){const r=t.nodes;if(e.color)return e.color;const s=r[e.from],a=r[e.to],l=n>=0?s:a;return l?this._nodeColorCached(l,t,i,o):Ce.junction}_nodeColorCached(e,t,i,n){if(!n)return this._nodeColor(e,t,i);const o=n.nodeColors.get(e.id);if(o)return o;const r=this._nodeColor(e,t,i);return n.nodeColors.set(e.id,r),r}_nodeColor(e,t,i,n=/* @__PURE__ */new Set){var o;if(e.color)return e.color;if("leaf"!==e.kind)return this._nonLeafColor(e,t);const r=t&&i?this._attachedLeafColor(e,t,i):void 0;if(r)return r;return(t&&i?this._overlappingUnlinkedLeafColor(e,t,i,new Set(n).add(e.id)):void 0)||("mdi:solar-power"===e.icon?"var(--energy-solar-color, #d6a500)":(null===(o=e.icon)||void 0===o?void 0:o.startsWith("mdi:battery"))?"var(--energy-battery-discharge-color, #3f79c9)":Ce.leaf)}_nodeDirectColor(e,t,i){var n;if(e.color)return e.color;if("leaf"!==e.kind)return this._nonLeafColor(e,t);return(t&&i?this._attachedLeafColor(e,t,i):void 0)||("mdi:solar-power"===e.icon?"var(--energy-solar-color, #d6a500)":(null===(n=e.icon)||void 0===n?void 0:n.startsWith("mdi:battery"))?"var(--energy-battery-discharge-color, #3f79c9)":Ce.leaf)}_attachedLeafColor(e,t,i){const n=i.filter(t=>t.from===e.id||t.to===e.id).map(i=>t.nodes[i.from===e.id?i.to:i.from]).filter(e=>Boolean(e)).find(e=>"junction"===e.kind);if(n)return this.junctionFlowColor(n.id,t.nodes)}_overlappingUnlinkedLeafColor(e,t,i,n=/* @__PURE__ */new Set){if(i.some(t=>t.from===e.id||t.to===e.id))return;const o=Object.values(t.nodes).filter(t=>t.id!==e.id).map(t=>({node:t,distance:Math.hypot(t.point.x-e.point.x,t.point.y-e.point.y)})).filter(({node:t,distance:i})=>i<t.radius+e.radius).sort((e,t)=>e.distance-t.distance).map(({node:e})=>e);let r;for(const s of o){if("leaf"!==s.kind)return this._nonLeafColor(s,t);const e=this._attachedLeafColor(s,t,i);if(e)return e;if(!n.has(s.id)){const e=this._overlappingUnlinkedLeafColor(s,t,i,new Set(n).add(s.id));if(e)return e}r||(r=this._nodeDirectColor(s,t,i))}return r}_nonLeafColor(e,t){return e.color?e.color:"junction"===e.kind&&t?this.junctionFlowColor(e.id,t.nodes):Ce[e.kind]}_shouldShowFlow(e,t=this._flowMinVisibleValue()){return function(e,t){const i=Math.abs(e);return i>.5&&i>=Math.max(0,t)}(e,t)}_flowWidth(e,t=this._flowMinVisibleValue(),i=this._flowMaxValue(t)){return function(e,t,i){const n=ye((Math.abs(e)-t)/(i-t),0,1);return 2.4+11.6*Math.pow(n,1.15)}(e,t,i)}_flowMinVisibleValue(){return Math.max(0,Number.isFinite(this.flowMinVisibleValue)?this.flowMinVisibleValue:10)}_flowMaxValue(e=this._flowMinVisibleValue()){const t=Number.isFinite(this.flowMaxValue)?this.flowMaxValue:12e3;return Math.max(t,e+1)}_linkMinVisibleValue(e,t,i=this.links){var n;return Math.max(0,Number.isFinite(e.flowMinVisibleValue)?Number(e.flowMinVisibleValue):null!==(n=this._junctionFlowMinVisibleValue(e,t,i))&&void 0!==n?n:this._flowMinVisibleValue())}_linkMaxValue(e,t=this._linkMinVisibleValue(e),i,n=this.links){var o;const r=Number.isFinite(e.flowMaxValue)?Number(e.flowMaxValue):null!==(o=this._junctionFlowMaxValue(e,i,n))&&void 0!==o?o:this._flowMaxValue(t);return Math.max(r,t+1)}_junctionFlowMinVisibleValue(e,t,i){const n=this._linkScaleJunction(e,t,i,"flowMinVisibleValue");return Number.isFinite(null==n?void 0:n.flowMinVisibleValue)?Number(null==n?void 0:n.flowMinVisibleValue):void 0}_junctionFlowMaxValue(e,t,i){const n=this._linkScaleJunction(e,t,i,"flowMaxValue");return Number.isFinite(null==n?void 0:n.flowMaxValue)?Number(null==n?void 0:n.flowMaxValue):void 0}_linkScaleJunction(e,t,i,n){if(!t)return;const o=this._nodeIdsConnectedTo(e.from,t,i);return Object.values(t).filter(e=>"junction"===e.kind&&o.has(e.id)).find(e=>Number.isFinite(e[n]))}_nodeIdsConnectedTo(e,t,i){const n=/* @__PURE__ */new Set,o=[e];for(;o.length>0;){const e=o.shift();e&&!n.has(e)&&(n.add(e),i.forEach(i=>{if(i.from!==e&&i.to!==e)return;const r=i.from===e?i.to:i.from;!n.has(r)&&t[r]&&o.push(r)}))}return n}_nodePrimaryValue(e,t,i){if(e.displayValue)return e.displayValue;const n=this._nodeDisplayValue(e,t,i);return this._isBatteryValueNode(e)?this._formatNodeValue(Math.abs(n),e):this._formatNodeValue(n,e)}_nodeDisplayValue(e,t,i){var n;return"junction"!==e.kind||e.hasOwnValue?e.value:null!==(n=this._junctionDisplayFlowValue(e,t.nodes,i))&&void 0!==n?n:e.value}_junctionDisplayFlowValue(e,t,i){var n;let o=0,r=0,s=0;if(i.forEach(n=>{const a=this._linkFlowRelativeToNode(n,e.id,t,i);void 0!==a&&(s+=1,a>=0?o+=a:r+=Math.abs(a))}),0!==s)switch(null!==(n=e.junctionDisplayMode)&&void 0!==n?n:"incoming"){case"outgoing":return r;case"net":return o-r;default:return o}}_linkFlowRelativeToNode(e,t,i,n){if(e.from!==t&&e.to!==t)return;const o=i[e.from===t?e.to:e.from];if("leaf"===(null==o?void 0:o.kind)&&!Le(o))return;const r=this._linkSignedValue(e,i,n);return Number.isFinite(r)?e.to===t?r:-r:void 0}_hasNodeFlowArrow(e){return!0===e.showFlowArrow&&Math.abs(this._nodeFlowValue(e))>Me}_isBatteryValueNode(e){return"leaf"===e.kind&&void 0!==e.secondary&&this._isBatteryIcon(e.icon)}_isBatteryIcon(e){return!0===(null==e?void 0:e.startsWith("mdi:battery"))}_formatNodeValue(e,t){var i;const n=null===(i=t.unit)||void 0===i?void 0:i.trim();return n&&"W"!==n&&"kW"!==n&&"MW"!==n?`${this._formatNumber(Math.abs(e))} ${n}`:this._formatPower(e)}_formatPower(e){const t=Math.abs(e);return t>=1e3?`${this._formatNumber(t/1e3)} kW`:`${Math.round(t).toLocaleString("en-US")} W`}_formatNumber(e){return e.toLocaleString("en-US",{maximumFractionDigits:e>=100?0:1})}},Ie=/* @__PURE__ */new Map,Se=/* @__PURE__ */new Map,Ee=e=>new Promise(t=>window.setTimeout(t,e)),je=class{constructor(e){this.host=e}render(e,t,i,n,o){return this._renderNodeLayer(e,t,i,n,o)}straightLabelPoint(e,t,i){return this._nodeStraightLabelPoint(e,t,i)}curvedLabelHandlePoint(e,t,i){return this._nodeCurvedLabelHandlePoint(e,t,i)}_renderNodeLayer(e,t,i,n,o){return Y`
      ${this._renderNodeShell(e,t,n,o)}
      ${this._renderNodeBusCover(e,t,i,n,o)}
      ${this._renderNodeOverlay(e,t,n,o)}
    `}_renderNodeOverlay(e,t,i,n){return Y`
      ${this._renderNodeContent(e,t,i,n)}
      ${this._renderNodeLabel(e,t,i)}
      ${this._renderLabelHandle(e,t,i)}
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
    `}_renderNodeBusCover(e,t,i,n,o){return this._shouldBusStayBehindNode(e,i,t.nodes,o)?Y`
      <g
        class="node-bus-cover"
        transform=${`translate(${e.point.x} ${e.point.y})`}
        aria-hidden="true"
      >
        <circle
          class="node-bg bus-cover"
          r=${e.radius}
          stroke=${this.host._nodeColorCached(e,t,n,o)}
          stroke-width=${"junction"===e.kind?4:2.5}
        />
      </g>
    `:Z}_shouldBusStayBehindNode(e,t,i,n){return"junction"===e.kind&&!this._isWrappedJunction(e,t,i,n)&&t.filter(t=>(t.from===e.id||t.to===e.id)&&this.host._isJunctionJunctionLink(t,i)).length<=1}_isWrappedJunction(e,t,i,n){return t.some(o=>{if(!this.host._isJunctionJunctionLink(o,i))return!1;const r=this.host._junctionJoinGeometry(o,i,t,n);return(null==r?void 0:r.middleId)===e.id})}_renderNodeShell(e,t,i,n){return Y`
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
          stroke=${this.host._nodeColorCached(e,t,i,n)}
          stroke-width=${"junction"===e.kind?4:2.5}
        />
        <circle class="hit-area" r=${e.radius+18} />
      </g>
    `}_renderNodeContent(e,t,i,n){var o,r,s;const a=Boolean(e.icon||e.secondaryIcon),l=void 0!==e.secondary,d=this.host._nodeDisplayValue(e,t,i),h=!this._shouldHideNodeValue(e,d),c=l&&!this._shouldHideNodeValue(e,null!==(o=e.secondary)&&void 0!==o?o:0),u=this.host._nodePrimaryValue(e,t,i),p=h?this._nodeTextLines(u,e):[],f=c?this._nodeTextLines(null!==(r=e.secondaryDisplayValue)&&void 0!==r?r:`${Math.round(null!==(s=e.secondary)&&void 0!==s?s:0)}%`,e):[],_=!a,v=p.length>0,m=f.length>0,g=this._nodePrimaryTextY(e,a,l,v,m),y=this._nodeSecondaryTextY(e,a,l,v,m),b=this._activeHighlightClass(e,t,i),x=e.highlightWhenActive?`--home-flow-node-active-color:${this.host._nodeColorCached(e,t,i,n)};`:"";return Y`
      <g
        class=${`node-content ${e.kind}-content`}
        transform=${`translate(${e.point.x} ${e.point.y})`}
        style=${x||Z}
      >
        ${a?this._renderNodeIcons(e,b):Z}
        ${this._renderNodeFlowArrow(e,b)}
        ${p.length>0?this._renderTextLines(`${this._textLineClass("node-value",p,e)} ${b}`.trim(),p,g,e,0,_):Z}
        ${f.length>0?this._renderTextLines(`${this._textLineClass("node-secondary",f,e)} ${b}`.trim(),f,y,e,0,_):Z}
        ${f.length>0?this._renderSecondaryActionHitArea(e,f,y):Z}
      </g>
    `}_activeHighlightClass(e,t,i){var n;if(!e.highlightWhenActive)return"";const o=Math.abs(this.host._nodeDisplayValue(e,t,i)),r=Math.max(0,null!==(n=e.activeFrom)&&void 0!==n?n:1);return"node-active-target "+(o>0&&o>=r?"is-active":"is-inactive")}_nodePrimaryTextY(e,t,i,n,o){return t?n?"leaf"===e.kind?i?this._radiusLerp(e.radius,-20,-30):this._radiusLerp(e.radius,-18,-28):i?this._radiusLerp(e.radius,-28,-42):this._radiusLerp(e.radius,-22,-34):0:o&&n?this._radiusLerp(e.radius,-12,-18):0}_nodeSecondaryTextY(e,t,i,n,o){return t?o?"leaf"===e.kind?this._radiusLerp(e.radius,34,47):this._radiusLerp(e.radius,27,40):0:n&&o?this._radiusLerp(e.radius,12,18):0}_renderNodeLabel(e,t,i){const n=e.label.trim();if(!n)return Z;if("straight"===this.host.labelStyle){const o=this._nodeStraightLabelPoint(e,t,i),r=we(n,o,986,this.host._labelTextMeasurer),s=31,a=function(e,t,i){return"top"===e.className?e.y-(t-1)*i:"bottom"===e.className?e.y:e.y-(t-1)*i/2}(o,r.length,s);return Y`
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
      `}const o=this._nodeLabelArc(e,t,i);return Y`
      <path id=${o.id} class="node-label-path" d=${o.path} />
      <text class="node-label node-label-curved">
        <textPath href=${`#${o.id}`} startOffset="50%">
          ${n}
        </textPath>
      </text>
    `}_renderLabelHandle(e,t,i){if(!this.host.editable||this.host.selectedNode!==e.id||!e.label.trim())return Z;const n="straight"===this.host.labelStyle?this._nodeStraightLabelPoint(e,t,i):this._nodeCurvedLabelHandlePoint(e,t,i);return Y`
      <g class="label-handle">
        <circle
          class="label-handle-hit"
          cx=${n.x}
          cy=${n.y}
          r="14"
          @pointerdown=${n=>this.host._startLabelDrag(n,e,t,i)}
        />
        <circle class="label-handle-dot" cx=${n.x} cy=${n.y} r="4.5" />
      </g>
    `}_nodeLabelArc(e,t,i){const n=this._nodeLabelAngle(e,t,i),o=this._nodeLabelRadius(e),r="junction"===e.kind?16:15,s=ye((e.label.length*r+36)/o,1.35,.92*Math.PI),a=Math.sin(n)>0,l=a?n+s/2:n-s/2,d=a?n-s/2:n+s/2,h=be(e.point,o,l),c=be(e.point,o,d),u=a?0:1,p=e.id.replace(/[^a-z0-9_-]/gi,"-");return{id:`home-flow-label-${this.host.graphInstanceId}-${p}`,path:`M ${h.x} ${h.y} A ${o} ${o} 0 0 ${u} ${c.x} ${c.y}`}}_nodeStraightLabelPoint(e,t,i){const n=e.labelOffsetX,o=e.labelOffsetY;return void 0!==n||void 0!==o?{x:e.point.x+(null!=n?n:0),y:e.point.y+(null!=o?o:0),textAnchor:"middle",baseline:"middle",className:"manual"}:this._nodeAutoStraightLabelPoint(e,t,i)}_nodeAutoStraightLabelPoint(e,t,i){const n=this._nodeLabelAnchorIndex(e,t,i),o=this.host._anchorAngle(n),r=e.label.trim();let s=[r],a=be(e.point,e.radius+this.host._straightLabelGap+13.5,o);for(let l=0;l<3;l+=1){const t=Math.max(...s.map(e=>this.host._labelTextMeasurer.measure(e)),0),i=27+31*(s.length-1),n=this._straightLabelCenterRadius(o,t/2,i/2,e.radius+this.host._straightLabelGap);a=be(e.point,n,o);const l=we(r,{x:a.x,y:a.y,textAnchor:"middle",baseline:"central",className:"radial"},986,this.host._labelTextMeasurer);if(l.join("\n")===s.join("\n"))break;s=l}return{x:a.x,y:a.y,textAnchor:"middle",baseline:"central",className:"radial"}}_straightLabelCenterRadius(e,t,i,n){const o=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e));let s=n,a=n+t+i;for(let l=0;l<18;l+=1){const e=(s+a)/2,l=Math.max(e*o-t,0),d=Math.max(e*r-i,0);Math.hypot(l,d)<n?s=e:a=e}return a}_nodeLabelAngle(e,t,i){var n;return null!==(n=e.labelAngle)&&void 0!==n?n:this.host._anchorAngle(this._nodeLabelAnchorIndex(e,t,i))}_nodeLabelRadius(e){return e.radius+("junction"===e.kind?this._radiusLerp(e.radius,24,18):this._radiusLerp(e.radius,19,15))}_nodeCurvedLabelHandlePoint(e,t,i){const n=this._nodeLabelAngle(e,t,i),o=e.radius+("junction"===e.kind?this._radiusLerp(e.radius,24,18):this._radiusLerp(e.radius,19,15));return be(e.point,o,n)}_nodeLabelAnchorIndex(e,t,i){const n=[...i.filter(t=>t.from===e.id||t.to===e.id).map(i=>this._connectionAnchorIndex(e,i,t)).filter(e=>void 0!==e),...this._nearbyNodeAnchorIndices(e,t)];if(0===n.length)return 16;let o=0,r=Number.NEGATIVE_INFINITY;for(let s=0;s<32;s+=1){const e=Math.min(...n.map(e=>this._circularAnchorDistance(s,e)));if(e<3)continue;const t=this.host._anchorAngle(s),i=10*Math.abs(Math.sin(t)),a=4*Math.abs(Math.cos(t)),l=.75*e+i+(Math.sin(t)>0?1:0)-a;l>r&&(r=l,o=s)}return r===Number.NEGATIVE_INFINITY?16:o}_nearbyNodeAnchorIndices(e,t){return Object.values(t.nodes).filter(t=>t.id!==e.id).filter(t=>{const i=Math.hypot(t.point.x-e.point.x,t.point.y-e.point.y),n="junction"===e.kind?38:32;return i<e.radius+t.radius+n}).map(t=>this.host._nearestAnchorIndex(e,t.point))}_connectionAnchorIndex(e,t,i){const n=this.host._linkAnchor(t,e.id);if(void 0!==n)return this.host._normalizeAnchorIndex(n);const o=t.from===e.id?t.to:t.from,r=i.nodes[o];return r?this.host._nearestAnchorIndex(e,r.point):void 0}_circularAnchorDistance(e,t){const i=Math.abs(e-t);return Math.min(i,32-i)}_nodeTextLines(e,t){const i=46+4.5*Math.max(0,e.length-7);if(t.radius>=i)return[e];const n=e.match(/^(.+?)\s+([^\s]+(?:\s+[←→↑↓])?)$/);if(n)return[n[1],n[2]];const o=e.match(/^([-+]?\d+(?:[.,]\d+)?)([^\d\s].*?(?:\s+[←→↑↓])?)$/);return o?[o[1],o[2]]:[e]}_textLineClass(e,t,i){return t.length>1?`${e} compact`:e}_shouldHideNodeValue(e,t){var i;return(null!==(i=e.hideZeroValues)&&void 0!==i?i:this.host.hideZeroValues)&&Math.abs(t)<=.5}_renderTextLines(e,t,i,n,o=0,r=!1){const s=this._textFontSize(e,t,n);var a;if(t.length<=1)return Y`
        <text
          class=${e}
          x=${o}
          y=${i}
          style=${`font-size:${s}px;`}
          dominant-baseline=${r?"middle":Z}
        >
          ${null!==(a=t[0])&&void 0!==a?a:""}
        </text>
      `;const l=this._textLineGap(e,t,n),d=i-l/2;return Y`
      ${t.map((t,i)=>Y`
            <text
              class=${e}
              x=${o}
              y=${d+i*l}
              style=${`font-size:${s}px;`}
              dominant-baseline=${r?"middle":Z}
            >
              ${t}
            </text>
          `)}
    `}_renderSecondaryActionHitArea(e,t,i){if(this.host.editable||!e.secondaryAction)return Z;const n=this._textLineGap("node-secondary",t,e),o=t.length<=1?28:n*(t.length-1)+30,r=(t.length<=1?i:i-n/2)+(t.length-1)*n/2,s=Math.max(52,1.55*e.radius);return Y`
      <rect
        class="value-hit secondary-value-hit"
        x=${-s/2}
        y=${r-o/2}
        width=${s}
        height=${o}
        rx="8"
        @click=${t=>this.host._emitNodeAction(e.secondaryAction,t)}
      />
    `}_textLineGap(e,t,i){return t.length>1?this._radiusLerp(i.radius,26,30):18}_textFontSize(e,t,i){return e.includes("flow-icon-arrow")?this._radiusLerp(i.radius,22,28):t.length>1?this._radiusLerp(i.radius,26,30):this._radiusLerp(i.radius,26,28)}_radiusLerp(e,t,i){return function(e,t,i,n,o){return n+(o-n)*ye((e-20)/80,0,1)}(e,0,0,t,i)}_renderNodeIcons(e,t=""){const i=[e.icon,e.secondaryIcon].filter(Boolean);if(0===i.length)return Z;if(1===i.length){const{scale:n,y:o}=this._nodeIconMetrics(e);return this._renderIconAt(i[0],0,o,n,t)}const{scale:n,y:o,gap:r}=this._dualIconMetrics(e);return Y`
      ${i.slice(0,2).map((e,i)=>this._renderIconAt(e,0===i?-r:r,o,n,t))}
    `}_renderIconAt(e,t,i,n,o=""){return this._renderExternalIconAt(e,t,i,n,o)}_renderExternalIconAt(e,t,i,n,o=""){const r=(e=>Ie.get(e))(e);if(!r)return Z;const s=68*n,a=s/2;return Y`
      <svg
        class=${`node-icon-svg ${o}`.trim()}
        x=${t-a}
        y=${i-a}
        width=${s}
        height=${s}
        viewBox=${r.viewBox}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <path d=${r.path}></path>
        ${r.secondaryPath?Y`<path class="node-icon-secondary-path" d=${r.secondaryPath}></path>`:Z}
      </svg>
    `}_renderNodeFlowArrow(e,t=""){if(!this.host._hasNodeFlowArrow(e))return Z;const i=e.icon&&e.secondaryIcon?this._dualIconMetrics(e):void 0,{y:n,scale:o}=null!=i?i:this._nodeIconMetrics(e),r=(i?-i.gap:0)+68*o*.42+10,s=this._nodeFlowArrow(e);return Y`<text class=${`flow-icon-arrow ${t}`.trim()} x=${r} y=${n+3} dominant-baseline="middle">${s}</text>`}_nodeFlowArrow(e){return this.host._nodeFlowValue(e)>=0?"→":"←"}_nodeIconMetrics(e){if("leaf"===e.kind){const t=void 0!==e.secondary;return{scale:(t?ye(.58*e.radius,24,52):ye(.64*e.radius,26,58))/68,y:t?this._radiusLerp(e.radius,-8,-5):this._radiusLerp(e.radius,-2,0)}}return{scale:ye(.62*e.radius,28,60)/68,y:0}}_dualIconMetrics(e){return{scale:(void 0!==e.secondary&&"leaf"===e.kind?ye(.42*e.radius,16,34):ye(.48*e.radius,18,40))/68,y:0,gap:ye(.26*e.radius,12,24)}}},Ve=class{constructor(e){this.host=e}normalizeLinks(e){return this._normalizedLinks(e)}clearInteraction(e){return this._clearInteraction(e)}handlePointerMove(e){return this._handlePointerMove(e)}handlePointerUp(e){return this._handlePointerUp(e)}handleKeydown(e){return this._handleKeydown(e)}selectLink(e,t){return this._selectLink(e,t)}startAnchorDrag(e,t,i){return this._startAnchorDrag(e,t,i)}startPendingLink(e,t,i){return this._startPendingLink(e,t,i)}commitPendingLink(e,t,i){return this._commitPendingLink(e,t,i)}startNodeDrag(e,t){return this._startNodeDrag(e,t)}startLabelDrag(e,t,i,n){return this._startLabelDrag(e,t,i,n)}canonicalLink(e,t,i,n){return this._canonicalLink(e,t,i,n)}manualLink(e){return this._manualLink(e)}replaceLink(e,t){return this._replaceLink(e,t)}pendingJunctionConnectionCandidate(e,t,i){return this._pendingJunctionConnectionCandidate(e,t,i)}isCompatibleLink(e,t){return this._isCompatibleLink(e,t)}canStartLink(e){return this._canStartLink(e)}sameLinkEnds(e,t,i){return this._sameLinkEnds(e,t,i)}_startAnchorDrag(e,t,i){if(!this.host.editable)return;const n=this.host._eventPoint(e),o=n?this.host._anchorIndexForPointerPoint(t.node,n,t.anchorIndex,i):i;this.host.selectedLink=t.link.id,this.host.selectedNode=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this._anchorDrag={end:t.end,linkId:t.link.id,nodeId:t.node.id,pointerId:e.pointerId},this._setLinkEndAnchor(t.link.id,t.end,o,!0,!0),this.host._capturePointer(e),e.stopPropagation(),e.preventDefault()}_startPendingLink(e,t,i){if(!this.host.editable)return;if(!this._canStartLink(t))return;const n=this.host._eventPoint(e),o=n?this.host._anchorIndexForPointerPoint(t,n,void 0,i):i;this.host.selectedLink=void 0,this.host.pendingLink={from:t.id,fromAnchor:o},this.host.pointerPoint=null!=n?n:this.host._anchorPoint(t,o),this.host.hoverTarget=void 0,this.host._capturePointer(e),e.stopPropagation(),e.preventDefault()}_commitPendingLink(e,t,i){if(!this.host.editable)return;if(!this.host.pendingLink)return;const n=this.host._model().nodes[this.host.pendingLink.from];if(!n||!this._isCompatibleLink(n,t))return;const o=this._manualLink(this._canonicalLink(n,t,this.host.pendingLink.fromAnchor,i)),r=this._replaceLink(this.host.links,o);this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host.selectedLink=void 0,this.host.selectedNode=void 0,this.host.links=r,this.host._emitLinksChange(r),e.stopPropagation(),e.preventDefault()}_canonicalLink(e,t,i,n){return"leaf"===e.kind&&"junction"===t.kind?{id:`${e.id}->${t.id}`,from:e.id,to:t.id,fromAnchor:i,fromAnchorMode:"auto",toAnchor:n,toAnchorMode:"auto"}:"leaf"===t.kind&&"junction"===e.kind?{id:`${t.id}->${e.id}`,from:t.id,to:e.id,fromAnchor:n,fromAnchorMode:"auto",toAnchor:i,toAnchorMode:"auto"}:("junction"===e.kind&&t.kind,{id:`${e.id}->${t.id}`,from:e.id,to:t.id,fromAnchor:i,fromAnchorMode:"auto",toAnchor:n,toAnchorMode:"auto"})}_manualLink(e){return{...e,fromAnchorMode:"manual",toAnchorMode:"manual"}}_replaceLink(e,t){return[...e.filter(e=>!(e.from===t.from&&e.to===t.to||e.from===t.to&&e.to===t.from)),t]}_autoAnchorLinksForNode(e){const t=this._junctionJoinInfoForMovingJunction(e);let i=!1;const n=this.host.links.map(n=>{if(n.from===e||n.to===e){var o;const e=t.get(n.id),r=null!==(o=null==e?void 0:e.joinId)&&void 0!==o?o:n.junctionJoinId;return void 0===n.fromAnchor&&void 0===n.fromAnchorMode&&void 0===n.toAnchor&&void 0===n.toAnchorMode&&r===n.junctionJoinId?n:(i=!0,{...n,fromAnchor:void 0,fromAnchorMode:void 0,toAnchor:void 0,toAnchorMode:void 0,junctionJoinId:r})}return n});return i?n:this.host.links}_junctionJoinInfoForMovingJunction(e){const t=this.host._model(),i=t.nodes[e],n=/* @__PURE__ */new Map;if(!i||"junction"!==i.kind)return n;const o=this.host.links.filter(i=>{if(i.from!==e&&i.to!==e)return!1;const n=t.nodes[i.from===e?i.to:i.from];return"junction"===(null==n?void 0:n.kind)}),r=/* @__PURE__ */new Map;return o.forEach(t=>{var i,n;const o=this.host._linkAnchor(t,e),s=null!==(i=t.junctionJoinId)&&void 0!==i?i:void 0!==o?`legacy-anchor-${this.host._normalizeAnchorIndex(o)}`:void 0;s&&r.set(s,[...null!==(n=r.get(s))&&void 0!==n?n:[],t])}),r.forEach(t=>{var i;if(t.length<2)return;const o=t.map(t=>t.from===e?t.to:t.from).sort(),r=null!==(i=t[0].junctionJoinId)&&void 0!==i?i:this._junctionJoinId(o[0],o[1],e);t.forEach(e=>n.set(e.id,{joinId:r}))}),n}_selectLink(e,t){var i;this.host.editable&&(this.host.selectedLink=t,this.host.selectedNode=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,null===(i=this.host.renderRoot.querySelector(".flow-svg"))||void 0===i||i.focus(),e.stopPropagation(),e.preventDefault())}_handleKeydown(e){if("Escape"===e.key)return this.host.selectedLink=void 0,this.host.selectedNode=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,void e.preventDefault();if(this.host.selectedLink&&("Delete"===e.key||"Backspace"===e.key)){const t=this.host.selectedLink;this.host.selectedLink=void 0,this.host.links=this._linksAfterLinkDelete(t),this.host._emitLinksChange(this.host.links),e.stopPropagation(),e.preventDefault()}if(this.host.selectedNode&&("Delete"===e.key||"Backspace"===e.key)){const t=this.host.selectedNode;this.host.selectedNode=void 0,this.host.selectedLink=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host._emitNodeRemove(t),this.host._emitNodeSelect(void 0),e.stopPropagation(),e.preventDefault()}}_setLinkEndAnchor(e,t,i,n=!0,o=!1){const r=this.host._normalizeAnchorIndex(i);let s=!1;const a=this.host.links.map(i=>{if(i.id!==e)return i;const n="from"===t?{...i,fromAnchor:r,fromAnchorMode:"manual"}:{...i,toAnchor:r,toAnchorMode:"manual"};return s=s||n.fromAnchor!==i.fromAnchor||n.fromAnchorMode!==i.fromAnchorMode||n.toAnchor!==i.toAnchor||n.toAnchorMode!==i.toAnchorMode,n});s&&(this.host.links=a,n&&this.host._emitLinksChange(a,o))}_startNodeDrag(e,t){var i;if(!this.host.editable)return;if(this.host.pendingLink)return;const n=this.host._eventPoint(e);if(!n)return;this.host.selectedNode=t.id,this.host.selectedLink=void 0,this.host._emitNodeSelect(t.id),null===(i=this.host.renderRoot.querySelector(".flow-svg"))||void 0===i||i.focus();const o=this.host._model();this._drag={attachedLeaves:this._overlappingUnlinkedLeaves(t,o),id:t.id,pointerId:e.pointerId,startX:n.x,startY:n.y,offsetX:n.x-t.point.x,offsetY:n.y-t.point.y,moved:!1},this.host.activeNode=t.id,this.host._capturePointer(e),e.stopPropagation(),e.preventDefault()}_startLabelDrag(e,t,i,n){var o;if(!this.host.editable)return;const r=this.host._eventPoint(e);if(!r)return;const s="straight"===this.host.labelStyle?this.host._nodeStraightLabelPoint(t,i,n):this.host._nodeCurvedLabelHandlePoint(t,i,n);this.host.selectedNode=t.id,this.host.selectedLink=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host._emitNodeSelect(t.id),null===(o=this.host.renderRoot.querySelector(".flow-svg"))||void 0===o||o.focus(),this._labelDrag="straight"===this.host.labelStyle?{dragOffsetX:r.x-s.x,dragOffsetY:r.y-s.y,mode:"straight",nodeId:t.id,pointerId:e.pointerId}:{dragOffsetX:0,dragOffsetY:0,mode:"curved",nodeId:t.id,pointerId:e.pointerId},this.host._capturePointer(e),e.stopPropagation(),e.preventDefault()}_handlePointerMove(e){var t;if(!this.host.editable)return;const i=this.host._eventPoint(e);if(!i)return;const n=this._anchorDrag;if(n&&e.pointerId===n.pointerId){const e=this.host._model().nodes[n.nodeId];if(!e)return;return void this._setLinkEndAnchor(n.linkId,n.end,this.host._nearestAnchorIndex(e,i),!0,!0)}const o=this._labelDrag;if(o&&e.pointerId===o.pointerId){const e=this.host._model().nodes[o.nodeId];if(!e)return;if("curved"===o.mode)this.host._emitNodeLabelChange({nodeId:e.id,labelAngle:Math.atan2(i.y-e.point.y,i.x-e.point.x),labelOffsetX:e.labelOffsetX,labelOffsetY:e.labelOffsetY},!0);else{const t=i.x-o.dragOffsetX,n=i.y-o.dragOffsetY;this.host._emitNodeLabelChange({nodeId:e.id,labelAngle:e.labelAngle,labelOffsetX:t-e.point.x,labelOffsetY:n-e.point.y},!0)}return}if(this.host.pendingLink){var r;const e=this.host._model();return this.host.pointerPoint=i,void(this.host.hoverTarget=null===(r=this._nearestCompatibleTarget(e.nodes[this.host.pendingLink.from],i,e.nodes))||void 0===r?void 0:r.id)}const s=this._drag;if(!s||e.pointerId!==s.pointerId)return;if(!s.moved){if(Math.hypot(i.x-s.startX,i.y-s.startY)<4)return;s.moved=!0;const e=this._autoAnchorLinksForNode(s.id);e!==this.host.links&&(s.anchorsChanged=!0,this.host.links=e,this.host._emitLinksChange(e,!0))}const a=this.host._clampedPoint({x:i.x-s.offsetX,y:i.y-s.offsetY}),l=this.host._model().nodes[s.id]?{x:s.startX-s.offsetX,y:s.startY-s.offsetY}:a,d=a.x-l.x,h=a.y-l.y,c=Object.fromEntries((null!==(t=s.attachedLeaves)&&void 0!==t?t:[]).map(e=>[e.id,this.host._clampedPoint({x:e.point.x+d,y:e.point.y+h})]));this.host.layout={...this.host.layout,...c,[s.id]:a},this.host._emitLayoutChange(this.host.layout,!0)}_handlePointerUp(e){var t;if(!this.host.editable)return;const i=this._anchorDrag;if(i&&e.pointerId===i.pointerId){var n;const t=e.target;return(null==t||null===(n=t.hasPointerCapture)||void 0===n?void 0:n.call(t,e.pointerId))&&t.releasePointerCapture(e.pointerId),this._anchorDrag=void 0,this.host._emitLinksChange(this.host.links),e.stopPropagation(),void e.preventDefault()}const o=this._labelDrag;if(o&&e.pointerId===o.pointerId){var r;const t=this.host._eventPoint(e),i=this.host._model().nodes[o.nodeId],n=e.target;if((null==n||null===(r=n.hasPointerCapture)||void 0===r?void 0:r.call(n,e.pointerId))&&n.releasePointerCapture(e.pointerId),this._labelDrag=void 0,t&&i)if("curved"===o.mode)this.host._emitNodeLabelChange({nodeId:i.id,labelAngle:Math.atan2(t.y-i.point.y,t.x-i.point.x),labelOffsetX:i.labelOffsetX,labelOffsetY:i.labelOffsetY});else{const e=t.x-o.dragOffsetX,n=t.y-o.dragOffsetY;this.host._emitNodeLabelChange({nodeId:i.id,labelAngle:i.labelAngle,labelOffsetX:e-i.point.x,labelOffsetY:n-i.point.y})}return e.stopPropagation(),void e.preventDefault()}if(this.host.pendingLink){var s,a;const t=e.target;(null==t||null===(s=t.hasPointerCapture)||void 0===s?void 0:s.call(t,e.pointerId))&&t.releasePointerCapture(e.pointerId);const i=null!==(a=this.host._eventPoint(e))&&void 0!==a?a:this.host.pointerPoint;if(i){var l;this.host.pointerPoint=i;const t=this.host._model(),n=t.nodes[this.host.pendingLink.from],o=null!==(l=this.host.hoverTarget?t.nodes[this.host.hoverTarget]:void 0)&&void 0!==l?l:this._nearestCompatibleTarget(n,i,t.nodes);if(o)return void this._commitPendingLink(e,o,this.host._nearestAnchorIndex(o,i));const r=this._pendingJunctionConnectionCandidate(n,i,t.nodes);if(r)return void this._commitPendingLinkToJunctionConnection(e,r)}return this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host.selectedLink=void 0,this.host.selectedNode=void 0,e.stopPropagation(),void e.preventDefault()}const d=this._drag;if(!d||e.pointerId!==d.pointerId)return;const h=e.target;if((null==h||null===(t=h.hasPointerCapture)||void 0===t?void 0:t.call(h,e.pointerId))&&h.releasePointerCapture(e.pointerId),this._drag=void 0,this.host.activeNode=void 0,d.moved){const e=this._connectJunctionToWrappedConnection(d.id),t=d.anchorsChanged||e!==this.host.links;this.host.links=e,this.host._emitLayoutChange(this.host.layout),t&&this.host._emitLinksChange(this.host.links)}}_clearInteraction(e){this.host.editable&&e.currentTarget===e.target&&(this.host.selectedNode=void 0,this.host.selectedLink=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host._emitNodeSelect(void 0))}_nextLayout(e,t){return{...this.host.layout,[e]:this.host._clampedPoint(t)}}_overlappingUnlinkedLeaves(e,t){return Object.values(t.nodes).filter(t=>"leaf"===t.kind&&t.id!==e.id&&t.stackIndex<e.stackIndex).filter(t=>Math.hypot(t.point.x-e.point.x,t.point.y-e.point.y)<t.radius+e.radius).filter(e=>!this.host.links.some(t=>t.from===e.id||t.to===e.id)).map(e=>({id:e.id,point:{...e.point}}))}_normalizedLinks(e){return this.host.links.filter(t=>{const i=e[t.from],n=e[t.to];return Boolean(i&&n&&this._isCompatibleLink(i,n))})}_connectJunctionToWrappedConnection(e){const t=this.host._model(),i=t.nodes[e];if(!i||"junction"!==i.kind)return this.host.links;const n=this._wrappedJunctionConnectionCandidate(i,t.nodes);return n?this._splitJunctionConnectionWithJunction(n.link,i.id,this._junctionConnectionSnapAnchor(n.detour)):this.host.links}_wrappedJunctionConnectionCandidate(e,t){return this.host.links.map(i=>{const n=t[i.from],o=t[i.to];if(!n||!o||"junction"!==n.kind||"junction"!==o.kind||n.id===e.id||o.id===e.id)return;const r=this.host._connectionPoint(n,o,this.host._linkAnchor(i,n.id),0),s=this.host._connectionPoint(o,n,this.host._linkAnchor(i,o.id),0),a=this.host._junctionLineDetour(r,s,e);return a?{detour:a,link:i,score:Math.abs(a.signedDistance)}:void 0}).filter(e=>Boolean(e)).sort((e,t)=>e.score-t.score)[0]}_pendingJunctionConnectionCandidate(e,t,i){if(e&&"junction"===e.kind)return this.host.links.map(n=>{const o=i[n.from],r=i[n.to];if(!o||!r||"junction"!==o.kind||"junction"!==r.kind||o.id===e.id||r.id===e.id)return;const s=this.host._connectionPoint(o,r,this.host._linkAnchor(n,o.id),0),a=this.host._connectionPoint(r,o,this.host._linkAnchor(n,r.id),0),l=this.host._junctionLineDetour(s,a,e),d=xe(t,s,a);return d.distance>28?void 0:{detour:l,link:n,point:d.point,score:d.distance}}).filter(e=>Boolean(e)).sort((e,t)=>e.score-t.score)[0]}_commitPendingLinkToJunctionConnection(e,t){if(!this.host.pendingLink)return;const i=this.host.pendingLink.from,n=t.detour?this._junctionConnectionSnapAnchor(t.detour):this.host.pendingLink.fromAnchor,o=this._splitJunctionConnectionWithJunction(t.link,i,n);this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host.selectedLink=void 0,this.host.selectedNode=void 0,this.host.links=o,this.host._emitLinksChange(o),e.stopPropagation(),e.preventDefault()}_splitJunctionConnectionWithJunction(e,t,i){var n;const o=null!==(n=e.junctionJoinId)&&void 0!==n?n:this._junctionJoinId(e.from,e.to,t),r=this._splitWrappedJunctionLink(e,e.from,t,{fromAnchor:e.fromAnchor,fromAnchorMode:e.fromAnchorMode,toAnchor:i,toAnchorMode:void 0===i?void 0:"manual",junctionJoinId:o}),s=this._splitWrappedJunctionLink(e,t,e.to,{fromAnchor:i,fromAnchorMode:void 0===i?void 0:"manual",toAnchor:e.toAnchor,toAnchorMode:e.toAnchorMode,junctionJoinId:o});return[...this.host.links.filter(t=>t.id!==e.id&&!this._sameLinkEnds(t,r.from,r.to)&&!this._sameLinkEnds(t,s.from,s.to)),r,s]}_splitWrappedJunctionLink(e,t,i,n){return{id:`${t}->${i}`,from:t,to:i,attribute:e.attribute,color:e.color,displayValue:e.displayValue,entity:e.entity,factor:e.factor,flowMaxValue:e.flowMaxValue,flowMinVisibleValue:e.flowMinVisibleValue,invert:e.invert,unit:e.unit,value:e.value,...n}}_junctionJoinId(e,t,i){const[n,o]=[e,t].sort();return`${n}--${o}--via-${i}`}_linksAfterLinkDelete(e){const t=this.host._model(),i=this.host.links.find(t=>t.id===e);if(!i)return this.host.links;const n=this.host._junctionJoinGeometry(i,t.nodes,this.host.links);return(null==n?void 0:n.branchLinkId)===e&&n.busLinkId&&n.branchLinkId?this._linksAfterBranchDelete(n):(null==n?void 0:n.busLinkId)===e&&n.branchLinkId?this.host.links.filter(e=>e.id!==n.busLinkId&&e.id!==n.branchLinkId):this.host.links.filter(t=>t.id!==e)}_linksAfterBranchDelete(e){const t=this.host.links.find(t=>t.id===e.busLinkId),i=this.host.links.find(t=>t.id===e.branchLinkId);if(!t||!i)return this.host.links.filter(t=>t.id!==e.branchLinkId);const n=this._restoredJunctionBusLink(e,t,i);return[...this.host.links.filter(e=>e.id!==t.id&&e.id!==i.id&&!this._sameLinkEnds(e,n.from,n.to)),n]}_restoredJunctionBusLink(e,t,i){const n=this._linkAnchorFields(t,e.firstOuterId),o=this._linkAnchorFields(i,e.secondOuterId);return{...t,id:`${e.firstOuterId}->${e.secondOuterId}`,from:e.firstOuterId,to:e.secondOuterId,fromAnchor:n.anchor,fromAnchorMode:n.mode,toAnchor:o.anchor,toAnchorMode:o.mode,junctionJoinId:void 0}}_linkAnchorFields(e,t){return e.from===t?{anchor:e.fromAnchor,mode:e.fromAnchorMode}:e.to===t?{anchor:e.toAnchor,mode:e.toAnchorMode}:{}}_sameLinkEnds(e,t,i){return e.from===t&&e.to===i||e.from===i&&e.to===t}_junctionConnectionSnapAnchor(e){return e.tapAnchor}_isCompatibleLink(e,t){const i=/* @__PURE__ */new Set([e.kind,t.kind]);return!(!i.has("leaf")||!i.has("junction"))||"junction"===e.kind&&"junction"===t.kind}_canStartLink(e){return"junction"===e.kind||"leaf"===e.kind}_nearestCompatibleTarget(e,t,i){var n;if(e)return null===(n=Object.values(i).filter(t=>t.id!==e.id&&this._isCompatibleLink(e,t)).map(e=>({node:e,distance:Math.hypot(e.point.x-t.x,e.point.y-t.y)})).filter(({node:e,distance:t})=>t<=e.radius+46).sort((e,t)=>e.distance-t.distance)[0])||void 0===n?void 0:n.node}};function Oe(e,t){const i=t.replace(/^M\s*-?\d+(?:\.\d+)?(?:e[-+]?\d+)?\s+-?\d+(?:\.\d+)?(?:e[-+]?\d+)?\s*/i,"").trim();return i?`${e} ${i}`:e}function Fe(e){return 1===e?0:1}function De(e,t,i){return Math.abs(e.x-t.x)<3?`M${e.x} ${e.y} L${t.x} ${t.y}`:[`M${e.x} ${e.y}`,`L${e.x} ${i}`,`L${t.x} ${i}`,`L${t.x} ${t.y}`].join(" ")}function Te(e,t,i){return Math.abs(e.y-t.y)<3?`M${e.x} ${e.y} L${t.x} ${t.y}`:[`M${e.x} ${e.y}`,`L${i} ${e.y}`,`L${i} ${t.y}`,`L${t.x} ${t.y}`].join(" ")}function Re(e,t,i){const n=Math.abs(t.y-e.y),o=ye(.26*n,18,36),r=ye(.22*n,16,30),s="down"===i?e.y+o:e.y-o,a="down"===i?t.y-o:t.y+o;return Math.abs(e.x-t.x)<3||Math.abs(a-s)<6?`M${e.x} ${e.y} L${t.x} ${t.y}`:[`M${e.x} ${e.y}`,`L${e.x} ${s}`,`C${e.x} ${"down"===i?s+r:s-r} ${t.x} ${"down"===i?a-r:a+r} ${t.x} ${a}`,`L${t.x} ${t.y}`].join(" ")}function Je(e,t,i){const n=Math.abs(t.x-e.x),o=ye(.26*n,18,36),r=ye(.22*n,16,30),s="right"===i?e.x+o:e.x-o,a="right"===i?t.x-o:t.x+o;return Math.abs(e.y-t.y)<3||Math.abs(a-s)<6?`M${e.x} ${e.y} L${t.x} ${t.y}`:[`M${e.x} ${e.y}`,`L${s} ${e.y}`,`C${"right"===i?s+r:s-r} ${e.y} ${"right"===i?a-r:a+r} ${t.y} ${a} ${t.y}`,`L${t.x} ${t.y}`].join(" ")}var Be,ze=10,Ue=class{constructor(e,t){this.routing=e,this.connectionPoint=t}connectorPath(e,t,i,n,o){const r=this._linkedLeafNodes(i.id,n,o),s=this._sortedLaneNodes(r.filter(e=>e.point.y<=i.point.y-i.radius),"x"),a=this._sortedLaneNodes(r.filter(e=>e.point.y>=i.point.y+i.radius),"x"),l=this._sortedLaneNodes(r.filter(e=>e.point.x<=i.point.x),"y"),d=this._sortedLaneNodes(r.filter(e=>e.point.x>=i.point.x),"y"),h={from:this._linkAnchor(e,t.id),to:this._linkAnchor(e,i.id)};if("radial"===this.routing)return this._radialConnectorPath(t,i,h);if("sweep"===this.routing)return this._defaultConnectorPath(t,i,h);switch(this._leafConnectorSide(t,i)){case"upper":return"channel"===this.routing?this._upperLeafChannelPath(t,i,this._laneSlotForNode(t.id,s).index,Math.max(1,s.length),h):"orthogonal"===this.routing?this._upperLeafOrthogonalPath(t,i,this._laneSlotForNode(t.id,s).index,Math.max(1,s.length),h):this._upperLeafConnectorPath(t,i,this._laneSlotForNode(t.id,s).index,Math.max(1,s.length),h);case"lower":return"channel"===this.routing?this._lowerLeafChannelPath(t,i,this._laneSlotForNode(t.id,a).index,Math.max(1,a.length),h):"orthogonal"===this.routing?this._lowerLeafOrthogonalPath(t,i,this._laneSlotForNode(t.id,a).index,Math.max(1,a.length),h):this._lowerLeafConnectorPath(t,i,this._laneSlotForNode(t.id,a).index,Math.max(1,a.length),h);case"left":return"channel"===this.routing?this._leftLeafChannelPath(t,i,this._laneSlotForNode(t.id,l).index,Math.max(1,l.length),h):"orthogonal"===this.routing?this._leftLeafOrthogonalPath(t,i,this._laneSlotForNode(t.id,l).index,Math.max(1,l.length),h):this._leftLeafConnectorPath(t,i,this._laneSlotForNode(t.id,l).index,Math.max(1,l.length),h);case"right":return"channel"===this.routing?this._rightLeafChannelPath(t,i,this._laneSlotForNode(t.id,d).index,Math.max(1,d.length),h):"orthogonal"===this.routing?this._rightLeafOrthogonalPath(t,i,this._laneSlotForNode(t.id,d).index,Math.max(1,d.length),h):this._rightLeafConnectorPath(t,i,this._laneSlotForNode(t.id,d).index,Math.max(1,d.length),h);default:return this._radialConnectorPath(t,i,h)}}autoAnchorReference(e,t,i,n){return this._leafAutoAnchorReferencePoint(e,t,i,n)}defaultConnectorPath(e,t,i={}){return this._defaultConnectorPath(e,t,i)}linkAnchor(e,t){return this._linkAnchor(e,t)}guideNode(e,t){return this._guideNode(e,t)}_leafConnectorSide(e,t){const i=e.point.x-t.point.x,n=e.point.y-t.point.y,o=Math.max(0,Math.abs(i)-t.radius),r=Math.max(0,Math.abs(n)-t.radius);return o<=0&&r<=0?"radial":r>=o?n<=0?"upper":"lower":i<=0?"left":"right"}_leafAutoAnchorReferencePoint(e,t,i,n){const o="from"===t?e.from:e.to,r="from"===t?e.to:e.from,s=i[o],a=i[r];if(!s||!a||"leaf"!==s.kind||"junction"!==a.kind)return;if("radial"===this.routing||"sweep"===this.routing)return a.point;const l=this._linkedLeafNodes(a.id,i,n),d=this._sortedLaneNodes(l.filter(e=>e.point.y<=a.point.y-a.radius),"x"),h=this._sortedLaneNodes(l.filter(e=>e.point.y>=a.point.y+a.radius),"x"),c=this._sortedLaneNodes(l.filter(e=>e.point.x<=a.point.x),"y"),u=this._sortedLaneNodes(l.filter(e=>e.point.x>=a.point.x),"y");switch(this._leafConnectorSide(s,a)){case"upper":return this._upperLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,d).index,Math.max(1,d.length));case"lower":return this._lowerLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,h).index,Math.max(1,h.length));case"left":return this._leftLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,c).index,Math.max(1,c.length));case"right":return this._rightLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,u).index,Math.max(1,u.length));default:return a.point}}_upperLeafConnectorPath(e,t,i,n,o={}){if(e.point.y>=t.point.y-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,i,n,Math.max(0,t.radius-22)),s=t.point.y-t.radius-ze-16,a=this._guideNode(`${e.id}-upper-drop`,{x:t.point.x,y:s}),l=this._guideNode(`${t.id}-upper-neck`,{x:r,y:s}),d=this.connectionPoint(e,a,o.from),h=this.connectionPoint(t,l,o.to,0),c=Math.max(0,h.y-d.y);if(Math.abs(d.x-h.x)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=d.y+ye(.42*c,38,72),p=ye(.35*(u-d.y),16,28);return[`M${d.x} ${d.y}`,`C${d.x} ${d.y+p} ${h.x} ${u-p} ${h.x} ${u}`,`L${h.x} ${h.y}`].join(" ")}_lowerLeafConnectorPath(e,t,i,n,o={}){if(e.point.y<=t.point.y+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,i,n,Math.max(0,t.radius-22)),s=t.point.y+t.radius+ze+16,a=this._guideNode(`${e.id}-lower-drop`,{x:e.point.x,y:s}),l=this._guideNode(`${t.id}-lower-neck`,{x:r,y:s}),d=this.connectionPoint(e,a,o.from),h=this.connectionPoint(t,l,o.to,0),c=Math.max(0,d.y-h.y);if(Math.abs(d.x-h.x)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=h.y+ye(.58*c,44,76),p=ye(.35*(d.y-u),16,28);return[`M${d.x} ${d.y}`,`C${d.x} ${d.y-p} ${h.x} ${u+p} ${h.x} ${u}`,`L${h.x} ${h.y}`].join(" ")}_leftLeafConnectorPath(e,t,i,n,o={}){if(e.point.x>=t.point.x-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,i,n,Math.max(0,t.radius-22)),s=t.point.x-t.radius-ze-16,a=this._guideNode(`${e.id}-left-spread`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-left-neck`,{x:s,y:r}),d=this.connectionPoint(e,a,o.from),h=this.connectionPoint(t,l,o.to,0),c=Math.max(0,h.x-d.x);if(Math.abs(d.y-h.y)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=d.x+ye(.42*c,38,72),p=ye(.35*(u-d.x),16,28);return[`M${d.x} ${d.y}`,`C${d.x+p} ${d.y} ${u-p} ${h.y} ${u} ${h.y}`,`L${h.x} ${h.y}`].join(" ")}_rightLeafConnectorPath(e,t,i,n,o={}){if(e.point.x<=t.point.x+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,i,n,Math.max(0,t.radius-22)),s=t.point.x+t.radius+ze+16,a=this._guideNode(`${e.id}-right-spread`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-right-neck`,{x:s,y:r}),d=this.connectionPoint(e,a,o.from),h=this.connectionPoint(t,l,o.to,0),c=Math.max(0,d.x-h.x);if(Math.abs(d.y-h.y)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=d.x-ye(.42*c,38,72),p=ye(.35*(d.x-u),16,28);return[`M${d.x} ${d.y}`,`C${d.x-p} ${d.y} ${u+p} ${h.y} ${u} ${h.y}`,`L${h.x} ${h.y}`].join(" ")}_upperLeafChannelPath(e,t,i,n,o={}){if(e.point.y>=t.point.y-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,i,n,Math.max(0,t.radius-18)),s=t.point.y-t.radius-ze-18,a=this._guideNode(`${e.id}-upper-channel`,{x:e.point.x,y:s}),l=this._guideNode(`${t.id}-upper-channel`,{x:r,y:s});return Re(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),"down")}_lowerLeafChannelPath(e,t,i,n,o={}){if(e.point.y<=t.point.y+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,i,n,Math.max(0,t.radius-18)),s=t.point.y+t.radius+ze+18,a=this._guideNode(`${e.id}-lower-channel`,{x:e.point.x,y:s}),l=this._guideNode(`${t.id}-lower-channel`,{x:r,y:s});return Re(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),"up")}_leftLeafChannelPath(e,t,i,n,o={}){if(e.point.x>=t.point.x-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,i,n,Math.max(0,t.radius-18)),s=t.point.x-t.radius-ze-18,a=this._guideNode(`${e.id}-left-channel`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-left-channel`,{x:s,y:r});return Je(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),"right")}_rightLeafChannelPath(e,t,i,n,o={}){if(e.point.x<=t.point.x+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,i,n,Math.max(0,t.radius-18)),s=t.point.x+t.radius+ze+18,a=this._guideNode(`${e.id}-right-channel`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-right-channel`,{x:s,y:r});return Je(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),"left")}_upperLeafAnchorReferencePoint(e,t,i,n){return"channel"===this.routing||"orthogonal"===this.routing?{x:e.point.x,y:t.point.y-t.radius-ze-18}:{x:t.point.x,y:t.point.y-t.radius-ze-16}}_lowerLeafAnchorReferencePoint(e,t,i,n){return"channel"===this.routing||"orthogonal"===this.routing?{x:e.point.x,y:t.point.y+t.radius+ze+18}:{x:e.point.x,y:t.point.y+t.radius+ze+16}}_leftLeafAnchorReferencePoint(e,t,i,n){return"channel"===this.routing||"orthogonal"===this.routing?{x:t.point.x-t.radius-ze-18,y:e.point.y}:{x:t.point.x-t.radius-ze-16,y:e.point.y}}_rightLeafAnchorReferencePoint(e,t,i,n){return"channel"===this.routing||"orthogonal"===this.routing?{x:t.point.x+t.radius+ze+18,y:e.point.y}:{x:t.point.x+t.radius+ze+16,y:e.point.y}}_upperLeafOrthogonalPath(e,t,i,n,o={}){if(e.point.y>=t.point.y-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,i,n,Math.max(0,t.radius-18)),s=t.point.y-t.radius-ze-18,a=this._guideNode(`${e.id}-upper-orthogonal`,{x:e.point.x,y:s}),l=this._guideNode(`${t.id}-upper-orthogonal`,{x:r,y:s});return De(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),s)}_lowerLeafOrthogonalPath(e,t,i,n,o={}){if(e.point.y<=t.point.y+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.x,t.point.x,i,n,Math.max(0,t.radius-18)),s=t.point.y+t.radius+ze+18,a=this._guideNode(`${e.id}-lower-orthogonal`,{x:e.point.x,y:s}),l=this._guideNode(`${t.id}-lower-orthogonal`,{x:r,y:s});return De(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),s)}_leftLeafOrthogonalPath(e,t,i,n,o={}){if(e.point.x>=t.point.x-t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,i,n,Math.max(0,t.radius-18)),s=t.point.x-t.radius-ze-18,a=this._guideNode(`${e.id}-left-orthogonal`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-left-orthogonal`,{x:s,y:r});return Te(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),s)}_rightLeafOrthogonalPath(e,t,i,n,o={}){if(e.point.x<=t.point.x+t.radius)return this._radialConnectorPath(e,t,o);const r=this._funnelLaneCoordinate(e.point.y,t.point.y,i,n,Math.max(0,t.radius-18)),s=t.point.x+t.radius+ze+18,a=this._guideNode(`${e.id}-right-orthogonal`,{x:s,y:e.point.y}),l=this._guideNode(`${t.id}-right-orthogonal`,{x:s,y:r});return Te(this.connectionPoint(e,a,o.from),this.connectionPoint(t,l,o.to,0),s)}_defaultConnectorPath(e,t,i={}){const n=this.connectionPoint(e,t,i.from,"junction"===e.kind&&"leaf"===t.kind?0:void 0),o=this.connectionPoint(t,e,i.to,"junction"===t.kind&&"leaf"===e.kind?0:void 0),r=o.x-n.x,s=o.y-n.y;if(Math.abs(r)>=Math.abs(s)){const e=.38*r;return`M${n.x} ${n.y} C${n.x+e} ${n.y} ${o.x-e} ${o.y} ${o.x} ${o.y}`}const a=.38*s;return`M${n.x} ${n.y} C${n.x} ${n.y+a} ${o.x} ${o.y-a} ${o.x} ${o.y}`}_radialConnectorPath(e,t,i={}){const n=this.connectionPoint(e,t,i.from,"junction"===e.kind&&"leaf"===t.kind?0:void 0),o=this.connectionPoint(t,e,i.to,"junction"===t.kind&&"leaf"===e.kind?0:void 0),r=t.point.x-e.point.x,s=t.point.y-e.point.y,a=Math.hypot(r,s)||1,l=r/a,d=s/a,h=ye(.32*a,46,120);return[`M${n.x} ${n.y}`,`C${n.x+l*h} ${n.y+d*h}`,`${o.x-l*h} ${o.y-d*h}`,`${o.x} ${o.y}`].join(" ")}_linkedLeafNodes(e,t,i){return this._uniqueNodes(i.map(i=>{if(i.from!==e&&i.to!==e)return;const n=t[i.from===e?i.to:i.from];return"leaf"===(null==n?void 0:n.kind)?n:void 0}).filter(e=>Boolean(e)))}_uniqueNodes(e){return Array.from(new Map(e.map(e=>[e.id,e])).values())}_sortedLaneNodes(e,t){return[...e].sort((e,i)=>{const n=e.point[t]-i.point[t];return Math.abs(n)>.1?n:e.id.localeCompare(i.id)})}_laneSlotForNode(e,t){const i=t.findIndex(t=>t.id===e);return{index:Math.max(0,i),count:Math.max(1,t.length)}}_funnelLaneCoordinate(e,t,i,n,o){if(o<=0)return t;const r=ye(e-t,-o,o);if(n<=1)return t+r;const s=this._laneOffset(i,n,72,o);return t+ye(.75*r+.25*s,-o,o)}_laneOffset(e,t,i,n){if(t<=1||n<=0)return 0;const o=(t-1)/2*i;return(e-(t-1)/2)*i*(o>n?n/o:1)}_linkAnchor(e,t){return e.from===t&&"manual"===e.fromAnchorMode?e.fromAnchor:e.to===t&&"manual"===e.toAnchorMode?e.toAnchor:void 0}_guideNode(e,t){return{id:e,kind:"junction",stackIndex:-1,label:"",value:0,radius:0,point:t,icon:"mdi:circle-small"}}},He=class{constructor(e,t,i,n,o,r){this.connectionPoint=e,this.defaultConnectorPath=t,this.guideNode=i,this.linkAnchor=n,this.nearestAnchorIndex=o,this.sameLinkEnds=r}connectorPath(e,t,i,n={}){return this._junctionConnectorPath(e,t,i,n)}joinedConnectionPath(e,t,i,n){return this._junctionJoinedConnectionPath(e,t,i,n)}joinGeometry(e,t,i,n){return this._junctionJoinGeometry(e,t,i,n)}lineDetour(e,t,i,n=0){return this._junctionLineDetour(e,t,i,n)}_junctionConnectorPath(e,t,i,n={}){const o=this.connectionPoint(e,t,n.from,0),r=this.connectionPoint(t,e,n.to,0),s=this._junctionLineDetours(o,r,e,t,i);if(0===s.length)return`M${o.x} ${o.y} L${r.x} ${r.y}`;const a=[`M${o.x} ${o.y}`];let l=0;return s.forEach(e=>{e.beforeDistance>l+.5&&a.push(`L${e.entry.x} ${e.entry.y}`),a.push(`A${e.radius} ${e.radius} 0 0 ${e.sweepFlag} ${e.exit.x} ${e.exit.y}`),l=e.afterDistance}),a.push(`L${r.x} ${r.y}`),a.join(" ")}_junctionLineDetours(e,t,i,n,o){return Object.values(o).filter(e=>"junction"===e.kind&&e.id!==i.id&&e.id!==n.id).map(i=>this._junctionLineDetour(e,t,i)).filter(e=>Boolean(e)).sort((e,t)=>e.beforeDistance-t.beforeDistance)}_junctionLineDetour(e,t,i,n=0){const o=t.x-e.x,r=t.y-e.y,s=Math.hypot(o,r);if(s<1)return;const a={x:o/s,y:r/s},l=-a.y,d=a.x,h=i.point.x-e.x,c=i.point.y-e.y,u=h*a.x+c*a.y,p=h*l+c*d,f=i.radius+10,_=f+Math.max(0,n),v=Math.max(18,i.radius-8),m=Math.min(f,Math.max(34,.55*i.radius));if(u<=m||u>=s-m)return;if(Math.abs(p)>_)return;const g=Math.abs(p)<v?v:Math.abs(p)>f?_:f,y=Math.sqrt(Math.max(0,g**2-p**2)),b=Math.max(0,u-y),x=Math.min(s,u+y),$=p>=0?1:0,w=1===$?-1:1,k={x:Math.round(i.point.x+l*w*g),y:Math.round(i.point.y+d*w*g)};return{afterDistance:x,beforeDistance:b,entry:{x:e.x+a.x*b,y:e.y+a.y*b},exit:{x:e.x+a.x*x,y:e.y+a.y*x},nodeId:i.id,radius:g,signedDistance:p,sweepFlag:$,tap:k,tapAnchor:this.nearestAnchorIndex(i,k)}}_junctionJoinedConnectionPath(e,t,i,n){var o;const r=this._junctionJoinGeometry(e,t,i,n);if(!r)return;return(null===(o=r.pathsByLinkId)||void 0===o?void 0:o[e.id])||(e.from===r.firstOuterId&&e.to===r.middleId?r.beforePath:e.from===r.middleId&&e.to===r.firstOuterId?r.beforeReversePath:e.from===r.middleId&&e.to===r.secondOuterId?r.afterPath:e.from===r.secondOuterId&&e.to===r.middleId?r.afterReversePath:void 0)}_junctionJoinGeometry(e,t,i,n){if(null==n?void 0:n.has(e.id))return n.get(e.id);const o=t[e.from],r=t[e.to];if(!o||!r||"junction"!==o.kind||"junction"!==r.kind)return void(null==n||n.set(e.id,void 0));const s=[o,r].map(n=>this._junctionJoinGeometryForMiddle(e,n,t,i)).filter(e=>Boolean(e))[0];return null==n||n.set(e.id,s),(null==s?void 0:s.busLinkId)&&(null==n||n.set(s.busLinkId,s)),(null==s?void 0:s.branchLinkId)&&(null==n||n.set(s.branchLinkId,s)),s}_junctionJoinGeometryForMiddle(e,t,i,n){const o=this.linkAnchor(e,t.id),r=e.junctionJoinId;if(void 0===o&&!r)return;const s=i[e.from===t.id?e.to:e.from];if(!s||"junction"!==s.kind)return;const a=n.find(n=>{if(n.id===e.id)return!1;if(n.from!==t.id&&n.to!==t.id)return!1;const s=i[n.from===t.id?n.to:n.from];return"junction"===(null==s?void 0:s.kind)&&(r&&n.junctionJoinId===r||void 0!==o&&this.linkAnchor(n,t.id)===o)});if(!a)return;const l=i[a.from===t.id?a.to:a.from];if(!l||"junction"!==l.kind)return;const[d,h]=this._orderedJoinOuters(s,l),c=this._linkBetweenNodes(e,a,d.id,t.id),u=this._linkBetweenNodes(e,a,h.id,t.id);if(!c||!u)return;const p=this.connectionPoint(d,h,this.linkAnchor(c,d.id),0),f=this.connectionPoint(h,d,this.linkAnchor(u,h.id),0),_=this._junctionLineDetour(p,f,t,r?14:0);return _?{afterPath:this._junctionJoinAfterPath(_.tap,_,f),afterReversePath:this._junctionJoinAfterReversePath(f,_,_.tap),beforePath:this._junctionJoinBeforePath(p,_,_.tap),beforeReversePath:this._junctionJoinBeforeReversePath(_.tap,_,p),branchLinkId:u.id,busLinkId:c.id,firstOuterId:d.id,middleId:t.id,secondOuterId:h.id,tap:_.tap}:this._junctionBranchJoinGeometry(t,d,h,c,u,i)}_junctionBranchJoinGeometry(e,t,i,n,o,r){const s=this.connectionPoint(t,i,this.linkAnchor(n,t.id),0),a=this.connectionPoint(i,t,this.linkAnchor(o,i.id),0),l=xe(e.point,s,a).point,d=this.guideNode(`${e.id}-bus-tap`,l),h={...r,[d.id]:d},c=this._junctionConnectorPath(t,d,h,{from:this.linkAnchor(n,t.id)}),u=this._junctionConnectorPath(d,t,h,{to:this.linkAnchor(n,t.id)}),p=this._junctionConnectorPath(d,i,h,{to:this.linkAnchor(o,i.id)}),f=this._junctionConnectorPath(i,d,h,{from:this.linkAnchor(o,i.id)}),_=this._junctionBranchToBusPath(e,l),v=this._junctionBranchFromBusPath(e,l),m=Oe(_,p),g=Oe(f,v),y=n,b=o;return{afterPath:m,afterReversePath:g,beforePath:c,beforeReversePath:u,branchLinkId:b.id,busLinkId:y.id,firstOuterId:t.id,middleId:e.id,pathsByLinkId:{[y.id]:y.from===t.id||y.to===e.id?c:u,[b.id]:b.from===e.id||b.to===i.id?m:g},secondOuterId:i.id,tap:l}}_junctionBranchToBusPath(e,t){const i=this.guideNode(`${e.id}-bus-tap`,t);return this.defaultConnectorPath(e,i,{from:this.nearestAnchorIndex(e,t)})}_junctionBranchFromBusPath(e,t){const i=this.guideNode(`${e.id}-bus-tap`,t);return this.defaultConnectorPath(i,e,{to:this.nearestAnchorIndex(e,t)})}_orderedJoinOuters(e,t){return e.point.x!==t.point.x?e.point.x<t.point.x?[e,t]:[t,e]:e.point.y<=t.point.y?[e,t]:[t,e]}_linkBetweenNodes(e,t,i,n){return this.sameLinkEnds(e,i,n)?e:this.sameLinkEnds(t,i,n)?t:void 0}_junctionJoinBeforePath(e,t,i){const n=[`M${e.x} ${e.y}`];return Math.hypot(t.entry.x-e.x,t.entry.y-e.y)>.5&&n.push(`L${t.entry.x} ${t.entry.y}`),n.push(`A${t.radius} ${t.radius} 0 0 ${t.sweepFlag} ${i.x} ${i.y}`),n.join(" ")}_junctionJoinBeforeReversePath(e,t,i){const n=[`M${e.x} ${e.y}`,`A${t.radius} ${t.radius} 0 0 ${Fe(t.sweepFlag)} ${t.entry.x} ${t.entry.y}`];return Math.hypot(t.entry.x-i.x,t.entry.y-i.y)>.5&&n.push(`L${i.x} ${i.y}`),n.join(" ")}_junctionJoinAfterPath(e,t,i){const n=[`M${e.x} ${e.y}`,`A${t.radius} ${t.radius} 0 0 ${t.sweepFlag} ${t.exit.x} ${t.exit.y}`];return Math.hypot(i.x-t.exit.x,i.y-t.exit.y)>.5&&n.push(`L${i.x} ${i.y}`),n.join(" ")}_junctionJoinAfterReversePath(e,t,i){const n=[`M${e.x} ${e.y}`];return Math.hypot(e.x-t.exit.x,e.y-t.exit.y)>.5&&n.push(`L${t.exit.x} ${t.exit.y}`),n.push(`A${t.radius} ${t.radius} 0 0 ${Fe(t.sweepFlag)} ${i.x} ${i.y}`),n.join(" ")}},Ge=12,We=32,qe=70,Ke=62,Ye=["var(--home-flow-junction-1-color, #f6b73c)","var(--home-flow-junction-2-color, #ef6c00)","var(--home-flow-junction-3-color, #f4a340)","var(--home-flow-junction-4-color, #b85f1a)"],Xe=0,Ze=class extends me{constructor(...e){super(...e),this.editable=!0,this.flowMaxValue=12e3,this.flowMinVisibleValue=10,this.hideZeroValues=!1,this.labelStyle="curved",this.leafRouting="funnel",this.layout={},this.links=[],this.nodes=[],this.graphInstanceId=++Xe,this.requestedExternalIcons=/* @__PURE__ */new Set,this._labelTextMeasurer=new $e,this._isGraphVisible=!0,this._straightLabelGap=0,this._lastPointerMoveTime=0,this._handleDocumentVisibilityChange=()=>{this._syncFlowAnimationPlayback()}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this._handleDocumentVisibilityChange),this.updateComplete.then(()=>{this._observeLabelScale(),this._observeAnimationVisibility()})}disconnectedCallback(){var e,t;document.removeEventListener("visibilitychange",this._handleDocumentVisibilityChange),null===(e=this._animationVisibilityObserver)||void 0===e||e.disconnect(),null===(t=this._labelScaleObserver)||void 0===t||t.disconnect(),this._cancelPendingPointerMove(),super.disconnectedCallback()}_observeAnimationVisibility(){var e;"undefined"!=typeof IntersectionObserver?(null!==(e=this._animationVisibilityObserver)&&void 0!==e||(this._animationVisibilityObserver=new IntersectionObserver(e=>{const t=e[0];t&&t.isIntersecting!==this._isGraphVisible&&(this._isGraphVisible=t.isIntersecting,this._syncFlowAnimationPlayback())},{rootMargin:"100px"})),this._animationVisibilityObserver.disconnect(),this._animationVisibilityObserver.observe(this),this._syncFlowAnimationPlayback()):this._syncFlowAnimationPlayback()}_syncFlowAnimationPlayback(){const e=this.renderRoot.querySelector(".flow-svg");if(!e)return;const t=document.hidden||!this._isGraphVisible;try{t?e.pauseAnimations():e.unpauseAnimations()}catch{}}_observeLabelScale(){var e;const t=this.renderRoot.querySelector(".flow-svg");t&&"undefined"!=typeof ResizeObserver&&(null!==(e=this._labelScaleObserver)&&void 0!==e||(this._labelScaleObserver=new ResizeObserver(e=>{var t;const i=null===(t=e[0])||void 0===t?void 0:t.contentRect;if(!i||i.width<=0||i.height<=0)return;const n=Math.min(i.width/986,i.height/730);if(!Number.isFinite(n)||n<=0)return;const o=3/n;Math.abs(o-this._straightLabelGap)<.05||(this._straightLabelGap=o,this.requestUpdate())})),this._labelScaleObserver.disconnect(),this._labelScaleObserver.observe(t))}_leafRouter(){var e;if((null===(e=this._leafRouterCache)||void 0===e?void 0:e.routing)===this.leafRouting)return this._leafRouterCache.router;const t=new Ue(this.leafRouting,(e,t,i,n)=>this._connectionPoint(e,t,i,n));return this._leafRouterCache={router:t,routing:this.leafRouting},t}_junctionRouter(){var e;return null!==(e=this._junctionRouterInstance)&&void 0!==e||(this._junctionRouterInstance=new He((e,t,i,n)=>this._connectionPoint(e,t,i,n),(e,t,i)=>this._defaultConnectorPath(e,t,i),(e,t)=>this._guideNode(e,t),(e,t)=>this._linkAnchor(e,t),(e,t)=>this._nearestAnchorIndex(e,t),(e,t,i)=>this._sameLinkEnds(e,t,i))),this._junctionRouterInstance}_flowEngine(){var e;if((null===(e=this._flowEngineCache)||void 0===e?void 0:e.links)===this.links&&this._flowEngineCache.min===this.flowMinVisibleValue&&this._flowEngineCache.max===this.flowMaxValue)return this._flowEngineCache.engine;const t=new Ne(this.flowMinVisibleValue,this.flowMaxValue,this.links,(e,t)=>this._junctionFlowColor(e,t));return this._flowEngineCache={engine:t,links:this.links,max:this.flowMaxValue,min:this.flowMinVisibleValue},t}_nodeRenderer(){if(this._nodeRendererInstance)return this._nodeRendererInstance;const e=this;return this._nodeRendererInstance=new je({get activeNode(){return e.activeNode},get editable(){return e.editable},graphInstanceId:this.graphInstanceId,get hideZeroValues(){return e.hideZeroValues},get labelStyle(){return e.labelStyle},get selectedNode(){return e.selectedNode},_labelTextMeasurer:this._labelTextMeasurer,get _straightLabelGap(){return e._straightLabelGap},_anchorAngle:e=>this._anchorAngle(e),_emitNodeAction:(e,t)=>this._emitNodeAction(e,t),_handleNodeActionKeydown:(e,t)=>this._handleNodeActionKeydown(e,t),_hasNodeFlowArrow:e=>this._hasNodeFlowArrow(e),_isJunctionJunctionLink:(e,t)=>this._isJunctionJunctionLink(e,t),_junctionJoinGeometry:(e,t,i,n)=>this._junctionJoinGeometry(e,t,i,n),_linkAnchor:(e,t)=>this._linkAnchor(e,t),_nearestAnchorIndex:(e,t)=>this._nearestAnchorIndex(e,t),_nodeActionLabel:e=>this._nodeActionLabel(e),_nodeColorCached:(e,t,i,n)=>this._nodeColorCached(e,t,i,n),_nodeDisplayValue:(e,t,i)=>this._nodeDisplayValue(e,t,i),_nodeFlowValue:e=>this._nodeFlowValue(e),_nodePrimaryValue:(e,t,i)=>this._nodePrimaryValue(e,t,i),_normalizeAnchorIndex:e=>this._normalizeAnchorIndex(e),_startLabelDrag:(e,t,i,n)=>this._startLabelDrag(e,t,i,n),_startNodeDrag:(e,t)=>this._startNodeDrag(e,t)}),this._nodeRendererInstance}_interactionController(){if(this._interactionControllerInstance)return this._interactionControllerInstance;const e=this;return this._interactionControllerInstance=new Ve({get activeNode(){return e.activeNode},set activeNode(t){e.activeNode=t},get editable(){return e.editable},get hoverTarget(){return e.hoverTarget},set hoverTarget(t){e.hoverTarget=t},get labelStyle(){return e.labelStyle},get layout(){return e.layout},set layout(t){e.layout=t},get links(){return e.links},set links(t){e.links=t},get pendingLink(){return e.pendingLink},set pendingLink(t){e.pendingLink=t},get pointerPoint(){return e.pointerPoint},set pointerPoint(t){e.pointerPoint=t},get renderRoot(){return e.renderRoot},get selectedLink(){return e.selectedLink},set selectedLink(t){e.selectedLink=t},get selectedNode(){return e.selectedNode},set selectedNode(t){e.selectedNode=t},_anchorIndexForPointerPoint:(e,t,i,n)=>this._anchorIndexForPointerPoint(e,t,i,n),_anchorPoint:(e,t,i)=>this._anchorPoint(e,t,i),_capturePointer:e=>this._capturePointer(e),_clampedPoint:e=>this._clampedPoint(e),_connectionPoint:(e,t,i,n)=>this._connectionPoint(e,t,i,n),_emitLayoutChange:(e,t)=>this._emitLayoutChange(e,t),_emitLinksChange:(e,t)=>this._emitLinksChange(e,t),_emitNodeLabelChange:(e,t)=>this._emitNodeLabelChange(e,t),_emitNodeRemove:e=>this._emitNodeRemove(e),_emitNodeSelect:e=>this._emitNodeSelect(e),_eventPoint:e=>this._eventPoint(e),_junctionJoinGeometry:(e,t,i)=>this._junctionJoinGeometry(e,t,i),_junctionLineDetour:(e,t,i,n)=>this._junctionLineDetour(e,t,i,n),_linkAnchor:(e,t)=>this._linkAnchor(e,t),_model:()=>this._model(),_nearestAnchorIndex:(e,t)=>this._nearestAnchorIndex(e,t),_nodeCurvedLabelHandlePoint:(e,t,i)=>this._nodeCurvedLabelHandlePoint(e,t,i),_nodeStraightLabelPoint:(e,t,i)=>this._nodeStraightLabelPoint(e,t,i),_normalizeAnchorIndex:e=>this._normalizeAnchorIndex(e)}),this._interactionControllerInstance}render(){const e=this._model(),t=this._normalizedLinks(e.nodes),i=this._hiddenNodeIds(e.nodes,t),n=this._visibleNodes(e.nodes,i),o=t.filter(t=>this._isVisibleLink(t,e.nodes,i)),r=this._renderContext(e,o,t),s=o.filter(t=>this._isJunctionJunctionLink(t,e.nodes)),a=o.filter(t=>!this._isJunctionJunctionLink(t,e.nodes)),l=this._nodesByZLayer(n);return K`
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
          ${a.map(i=>this._renderGraphLink(i,e,t,r))}
          ${s.map(i=>this._renderGraphLink(i,e,t,r))}
          ${l.map(i=>this._renderNodeLayer(i,e,o,t,r))}
          ${this.editable?this._renderPendingLink(n,t):Z}
          ${this.editable?this._renderAnchorControls(n,o):Z}
          ${this.editable?Y`
                <text
                  class="graph-build-version"
                  x=${972}
                  y=${718}
                  text-anchor="end"
                  aria-hidden="true"
                >${"2026-07-16 15:05Z"}</text>
              `:Z}
        </svg>
      </section>
    `}_renderEditorGrid(){const e=`home-flow-grid-minor-${this.graphInstanceId}`,t=`home-flow-grid-major-${this.graphInstanceId}`;return Y`
      <defs>
        <pattern
          id=${e}
          width=${Ge}
          height=${Ge}
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
    `}_renderContext(e,t,i=t){const n=this._geometryCacheFor(e,i),o={colors:/* @__PURE__ */new Map,joinGeometries:n.joinGeometries,maxValues:/* @__PURE__ */new Map,minVisibleValues:/* @__PURE__ */new Map,nodeColors:/* @__PURE__ */new Map,paths:n.paths,sideNodeIds:/* @__PURE__ */new Map,signedValues:/* @__PURE__ */new Map,sourceParts:/* @__PURE__ */new Map},r=e.nodes;return t.forEach(t=>{const n=this._linkSignedValue(t,r,i,o),s=this._linkMinVisibleValue(t,r,i),a=this._linkMaxValue(t,s,r,i);o.paths.has(t.id)||o.paths.set(t.id,this._graphLinkPath(t,r,i,o)),o.signedValues.set(t.id,n),o.minVisibleValues.set(t.id,s),o.maxValues.set(t.id,a),this._shouldShowFlow(Math.abs(n),s)&&(o.colors.set(t.id,this._linkColor(t,e,i,n,o)),o.sourceParts.set(t.id,this._linkSourceParts(t,e,i,n,o)))}),o}_geometryCacheFor(e,t){var i;const n=this._geometryCacheKey(e,t);return(null===(i=this._geometryCache)||void 0===i?void 0:i.key)===n||(this._geometryCache={joinGeometries:/* @__PURE__ */new Map,key:n,paths:/* @__PURE__ */new Map}),this._geometryCache}_geometryCacheKey(e,t){const i=Object.values(e.nodes).sort((e,t)=>e.id.localeCompare(t.id)).map(e=>[e.id,e.kind,Math.round(100*e.point.x)/100,Math.round(100*e.point.y)/100,e.radius].join(":")).join("|"),n=t.map(e=>{var t,i,n,o,r;return[e.id,e.from,e.to,null!==(t=e.fromAnchor)&&void 0!==t?t:"",null!==(i=e.fromAnchorMode)&&void 0!==i?i:"",null!==(n=e.toAnchor)&&void 0!==n?n:"",null!==(o=e.toAnchorMode)&&void 0!==o?o:"",null!==(r=e.junctionJoinId)&&void 0!==r?r:""].join(":")}).join("|");return`${this.leafRouting}::${i}::${n}`}_isJunctionJunctionLink(e,t){var i,n;return"junction"===(null===(i=t[e.from])||void 0===i?void 0:i.kind)&&"junction"===(null===(n=t[e.to])||void 0===n?void 0:n.kind)}_model(){return{nodes:Object.fromEntries(this._positionedNodes().map(e=>[e.id,e]))}}_visibleNodes(e,t){return Object.fromEntries(Object.entries(e).filter(([e])=>!t.has(e)))}_hiddenNodeIds(e,t){return new Set(Object.values(e).filter(i=>this._isHiddenByZero(i,e,t)).map(e=>e.id))}_isVisibleLink(e,t,i){const n=t[e.from],o=t[e.to];return Boolean(n&&o&&!i.has(n.id)&&!i.has(o.id))}_isHiddenByZero(e,t,i){var n;if(!0!==e.hideIfZero)return!1;const o=this._nodeDisplayValue(e,{nodes:t},i);return Math.abs(o)<=(null!==(n=e.hideBelow)&&void 0!==n?n:.5)}_nodesByZLayer(e){return Object.values(e).sort((e,t)=>{const i=t.stackIndex-e.stackIndex;return 0!==i?i:e.id.localeCompare(t.id)})}_defaultNodeRadius(e){return"junction"===e?90:65}_positionedNodes(){return this.nodes.map((e,t)=>{var i,n,o;return{id:e.id,kind:e.kind,stackIndex:t,label:e.label,labelAngle:Number.isFinite(e.labelAngle)?e.labelAngle:void 0,labelOffsetX:Number.isFinite(e.labelOffsetX)?e.labelOffsetX:void 0,labelOffsetY:Number.isFinite(e.labelOffsetY)?e.labelOffsetY:void 0,value:Number.isFinite(e.value)?e.value:0,flowValue:Number.isFinite(e.flowValue)?e.flowValue:void 0,hasOwnValue:e.hasOwnValue,contributesToFlow:e.contributesToFlow,secondary:e.secondary,secondaryDisplayValue:e.secondaryDisplayValue,displayValue:e.displayValue,hideZeroValues:e.hideZeroValues,hideIfZero:e.hideIfZero,hideBelow:e.hideBelow,showFlowArrow:e.showFlowArrow,highlightWhenActive:e.highlightWhenActive,activeFrom:e.activeFrom,junctionDisplayMode:e.junctionDisplayMode,primaryAction:e.primaryAction,secondaryAction:e.secondaryAction,radius:ye(null!==(i=e.radius)&&void 0!==i?i:this._defaultNodeRadius(e.kind),20,100),point:this._clampedPoint(null!==(n=this.layout[e.id])&&void 0!==n?n:this._fallbackPoint(e.kind,t)),icon:null===e.icon?void 0:null!==(o=e.icon)&&void 0!==o?o:this._defaultIcon(e.kind),secondaryIcon:null===e.secondaryIcon?void 0:e.secondaryIcon,unit:e.unit,color:e.color,flowMinVisibleValue:e.flowMinVisibleValue,flowMaxValue:e.flowMaxValue}})}_fallbackPoint(e,t){return"junction"===e?{x:350+t%3*150,y:330+110*Math.floor(t/3)}:"leaf"===e?{x:270+t%4*130,y:100+88*Math.floor(t/4)}:{x:770+t%2*110,y:360+108*Math.floor(t/2)}}_renderGraphLink(e,t,i,n){var o,r,s,a,l;const d=t.nodes,h=d[e.from],c=d[e.to];if(!h||!c)return Z;const u=null!==(o=n.signedValues.get(e.id))&&void 0!==o?o:this._linkSignedValue(e,d,i,n),p=Math.abs(u),f=null!==(r=n.paths.get(e.id))&&void 0!==r?r:this._graphLinkPath(e,d,i,n);if(!f)return Z;const _=this.selectedLink===e.id,v=null!==(s=n.minVisibleValues.get(e.id))&&void 0!==s?s:this._linkMinVisibleValue(e,d,i),m=null!==(a=n.maxValues.get(e.id))&&void 0!==a?a:this._linkMaxValue(e,v,d,i),g=this._shouldShowFlow(p,v),y=g?this._flowWidth(p,v,m):2.4,b=g?null!==(l=n.colors.get(e.id))&&void 0!==l?l:this._linkColor(e,t,i,u,n):"var(--home-flow-junction-1-color, #f6b73c)",x=g?n.sourceParts.has(e.id)?n.sourceParts.get(e.id):this._linkSourceParts(e,t,i,u,n):void 0,$=this._junctionConnectionMarker(e,t,i,n);return Y`
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
    `}_renderFlowPath(e,t,i,n,o,r){const s=r&&r.length>0?r:[{color:n,key:`${e.id}-fallback`,length:18,start:0}];if(1===s.length)return Y`
        <path
          class="connector flow source-single"
          d=${t}
          stroke=${s[0].color}
          stroke-width=${o}
          stroke-dasharray=${"18 22"}
        >
          ${this._renderFlowAnimation(i)}
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
          ${this._renderFlowAnimation(i)}
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
          ${this._renderFlowAnimation(i)}
        </path>
        ${l.map(e=>{const n=this._sourceTailOffset(e),r=this._sourceTailVisibleLength(e);return Y`
            <path
              class="connector flow split-flow source-split"
              d=${t}
              stroke=${e.color}
              stroke-width=${o}
              stroke-dasharray=${`${r} ${40-r}`}
              stroke-dashoffset=${n}
            >
              ${this._renderFlowAnimation(i,n)}
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
    `}_sourceTailOffset(e){return-e.start}_sourceTailVisibleLength(e){return ye(18-e.start,0,40)}_splitFlowMaskId(e){return`home-flow-split-${this.graphInstanceId}-${e.id.replace(/[^a-zA-Z0-9_-]/g,"-")}`}_junctionConnectionMarker(e,t,i,n){if(!this._isJunctionJunctionLink(e,t.nodes))return;const o=this._junctionJoinGeometry(e,t.nodes,i,n);return(null==o?void 0:o.tap)&&o.branchLinkId===e.id?o.tap:void 0}_renderJunctionConnectionMarker(e,t){return Y`
      <circle
        class=${"bus-tap "+(t?"selected":"")}
        cx=${e.x}
        cy=${e.y}
        r="6"
        aria-hidden="true"
      />
    `}_junctionFlowColor(e,t){var i;const n=null==t||null===(i=t[e])||void 0===i?void 0:i.color;if(n)return n;const o=Object.values(null!=t?t:{}).filter(e=>"junction"===e.kind),r=Math.max(0,o.findIndex(t=>t.id===e));return Ye[r%Ye.length]}_graphLinkPath(e,t,i,n){const o=t[e.from],r=t[e.to];if(!o||!r)return"";const s=[o,r].find(e=>"junction"===e.kind),a=[o,r].find(e=>"leaf"===e.kind);if(a&&s)return this._leafRouter().connectorPath(e,a,s,t,i);if("junction"===o.kind&&"junction"===r.kind){return this._junctionJoinedConnectionPath(e,t,i,n)||this._junctionConnectorPath(o,r,t,{from:this._linkAnchor(e,o.id),to:this._linkAnchor(e,r.id)})}return this._defaultConnectorPath(o,r,{from:this._linkAnchor(e,o.id),to:this._linkAnchor(e,r.id)})}_junctionConnectorPath(e,t,i,n={}){return this._junctionRouter().connectorPath(e,t,i,n)}_junctionJoinedConnectionPath(e,t,i,n){return this._junctionRouter().joinedConnectionPath(e,t,i,null==n?void 0:n.joinGeometries)}_junctionJoinGeometry(e,t,i,n){return this._junctionRouter().joinGeometry(e,t,i,null==n?void 0:n.joinGeometries)}_junctionLineDetour(e,t,i,n=0){return this._junctionRouter().lineDetour(e,t,i,n)}_defaultConnectorPath(e,t,i={}){return this._leafRouter().defaultConnectorPath(e,t,i)}_linkAnchor(e,t){return this._leafRouter().linkAnchor(e,t)}_guideNode(e,t){return this._leafRouter().guideNode(e,t)}_renderNodeLayer(e,t,i,n,o){return this._nodeRenderer().render(e,t,i,n,o)}_nodeStraightLabelPoint(e,t,i){return this._nodeRenderer().straightLabelPoint(e,t,i)}_nodeCurvedLabelHandlePoint(e,t,i){return this._nodeRenderer().curvedLabelHandlePoint(e,t,i)}willUpdate(e){if(e.has("nodes")||!this.hasUpdated)for(const t of this.nodes)for(const e of[t.icon,t.secondaryIcon])(null==e?void 0:e.includes(":"))&&this._queueExternalIcon(e)}_queueExternalIcon(e){(e=>Ie.has(e))(e)||this.requestedExternalIcons.has(e)||(this.requestedExternalIcons.add(e),async function(e){var t;if(Ie.has(e))return null!==(t=Ie.get(e))&&void 0!==t?t:null;const i=Se.get(e);if(i)return i;const n=(async()=>{const t=performance.now()+3e3;for(;!customElements.get("ha-icon");){if(performance.now()>=t)return null;await Ee(25)}const i=document.createElement("ha-icon");i.icon=e,i.setAttribute("icon",e),Object.assign(i.style,{height:"24px",left:"-10000px",pointerEvents:"none",position:"fixed",top:"-10000px",visibility:"hidden",width:"24px"}),document.body.append(i);try{const e=performance.now()+5e3;for(;performance.now()<e;){var n,o;await i.updateComplete;const e=null===(n=i.shadowRoot)||void 0===n?void 0:n.querySelector("ha-svg-icon"),t=null!==(o=null==e?void 0:e.path)&&void 0!==o?o:i._path;var r,s,a,l;if(t)return{path:t,secondaryPath:null!==(r=null!==(s=null==e?void 0:e.secondaryPath)&&void 0!==s?s:i._secondaryPath)&&void 0!==r?r:void 0,viewBox:null!==(a=null!==(l=null==e?void 0:e.viewBox)&&void 0!==l?l:i._viewBox)&&void 0!==a?a:"0 0 24 24"};await Ee(25)}return null}finally{i.remove()}})();Se.set(e,n);const o=await n;return Se.delete(e),Ie.set(e,o),o}(e).finally(()=>{this.requestedExternalIcons.delete(e),this.isConnected&&this.requestUpdate()}))}_renderPendingLink(e,t){if(!this.pendingLink||!this.pointerPoint)return Z;const i=e[this.pendingLink.from];if(!i)return Z;const n=this._pendingLinkPath(i,e,t);return n?Y`
      <path
        class="connector base selected pending"
        d=${n}
      />
    `:Z}_pendingLinkPath(e,t,i){if(!this.pendingLink||!this.pointerPoint)return"";const n=this.hoverTarget?t[this.hoverTarget]:void 0;if(n&&this._isCompatibleLink(e,n)){const o=this._nearestAnchorIndex(n,this.pointerPoint),r=this._manualLink(this._canonicalLink(e,n,this.pendingLink.fromAnchor,o)),s=this._replaceLink(i,r);return this._graphLinkPath(r,t,s)}const o=this._pendingJunctionConnectionCandidate(e,this.pointerPoint,t);if(o){const t=this._guideNode("pending-junction-connection-pointer",o.point);return this._defaultConnectorPath(e,t,{from:this.pendingLink.fromAnchor})}const r=this._guideNode("pending-pointer",this.pointerPoint);return this._defaultConnectorPath(e,r,{from:this.pendingLink.fromAnchor})}_renderAnchorControls(e,t){if(this.pendingLink){const t=e[this.pendingLink.from],i=this.hoverTarget?e[this.hoverTarget]:void 0,n=i&&this.pointerPoint?this._nearestAnchorIndex(i,this.pointerPoint):void 0;return Y`
        ${t?this._renderAnchorPoints(t,"source",{selectedAnchorIndex:this.pendingLink.fromAnchor}):Z}
        ${i?this._renderAnchorPoints(i,"target",{selectedAnchorIndex:n}):Z}
      `}if(this.selectedLink){const i=t.find(e=>e.id===this.selectedLink);if(i)return Y`
          ${this._linkEndControls(i,e,t).map(e=>this._renderAnchorPoints(e.node,"source",{fixedLinkEnd:e}))}
        `}if(!this.selectedNode)return Z;const i=e[this.selectedNode];return i&&this._canStartLink(i)?this._renderAnchorPoints(i,"source",{linkEnds:this._nodeLinkEndControls(i.id,e,t)}):Z}_renderAnchorPoints(e,t,i={}){return Y`
      <g class=${`anchor-controls ${t}`}>
        ${Array.from({length:We},(n,o)=>{var r,s;const a=this._anchorPoint(e,o),l=null!==(r=i.fixedLinkEnd)&&void 0!==r?r:null===(s=i.linkEnds)||void 0===s?void 0:s.find(e=>e.anchorIndex===o),d=void 0!==i.selectedAnchorIndex&&this._normalizeAnchorIndex(i.selectedAnchorIndex)===o,h=i.fixedLinkEnd?i.fixedLinkEnd.anchorIndex===o:Boolean(l)||d;return Y`
            <g class=${"anchor-handle "+(h?"selected":"")}>
              <circle
                class="anchor-hit"
                cx=${a.x}
                cy=${a.y}
                r=${15}
                @pointerdown=${i=>l?this._startAnchorDrag(i,l,o):"source"===t?this._startPendingLink(i,e,o):this._commitPendingLink(i,e,o)}
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
    `}_linkEndControls(e,t,i){return["from","to"].map(n=>{const o=t["from"===n?e.from:e.to];if(this._isVirtualJunctionJoinEnd(e,n,t,i))return;const r=this._linkEndAnchorIndex(e,n,t,i);return!o||o.radius<=0||void 0===r?void 0:{anchorIndex:r,end:n,link:e,node:o}}).filter(e=>Boolean(e))}_isVirtualJunctionJoinEnd(e,t,i,n){const o=this._junctionJoinGeometry(e,i,n);return!(!(null==o?void 0:o.pathsByLinkId)||o.busLinkId!==e.id)&&("from"===t?e.from:e.to)===o.middleId}_nodeLinkEndControls(e,t,i){return i.flatMap(n=>this._linkEndControls(n,t,i).filter(t=>t.node.id===e))}_linkEndAnchorIndex(e,t,i,n){const o=i["from"===t?e.from:e.to];if(!o||o.radius<=0)return;const r="from"===t?"manual"===e.fromAnchorMode?e.fromAnchor:void 0:"manual"===e.toAnchorMode?e.toAnchor:void 0;if(void 0!==r)return this._normalizeAnchorIndex(r);if("leaf"===o.kind){const r=this._leafAutoAnchorReferencePoint(e,t,i,n);if(r)return this._nearestAnchorIndex(o,r)}const s=this._graphLinkPath(e,i,n),a=this._pathLinkEndPoint(s,t);return a?this._nearestAnchorIndex(o,a):void 0}_leafAutoAnchorReferencePoint(e,t,i,n){return this._leafRouter().autoAnchorReference(e,t,i,n)}_pathLinkEndPoint(e,t){const i=this._pathNumbers(e);if(!i||i.length<2)return;const n="from"===t?0:i.length-2;return{x:i[n],y:i[n+1]}}_pathNumbers(e){var t,i;return null!==(t=null===(i=e.match(/-?\d+(?:\.\d+)?(?:e[-+]?\d+)?/gi))||void 0===i?void 0:i.map(e=>Number(e)))&&void 0!==t?t:[]}_normalizedLinks(e){return this._interactionController().normalizeLinks(e)}_clearInteraction(e){return this._interactionController().clearInteraction(e)}_handlePointerMove(e){this._pendingPointerMove=e,this._schedulePendingPointerMove()}_schedulePendingPointerMove(){void 0===this._pointerMoveFrame&&(this._pointerMoveFrame=requestAnimationFrame(e=>{if(this._pointerMoveFrame=void 0,this._lastPointerMoveTime>0&&e-this._lastPointerMoveTime<15.666666666666668)return void this._schedulePendingPointerMove();const t=this._pendingPointerMove;this._pendingPointerMove=void 0,t&&(this._lastPointerMoveTime=e,this._interactionController().handlePointerMove(t))}))}_handlePointerUp(e){return this._flushPendingPointerMove(),this._interactionController().handlePointerUp(e)}_flushPendingPointerMove(){void 0!==this._pointerMoveFrame&&(cancelAnimationFrame(this._pointerMoveFrame),this._pointerMoveFrame=void 0);const e=this._pendingPointerMove;this._pendingPointerMove=void 0,e&&this._interactionController().handlePointerMove(e)}_cancelPendingPointerMove(){void 0!==this._pointerMoveFrame&&(cancelAnimationFrame(this._pointerMoveFrame),this._pointerMoveFrame=void 0),this._pendingPointerMove=void 0,this._lastPointerMoveTime=0}_handleKeydown(e){return this._interactionController().handleKeydown(e)}_selectLink(e,t){return this._interactionController().selectLink(e,t)}_startAnchorDrag(e,t,i){return this._interactionController().startAnchorDrag(e,t,i)}_startPendingLink(e,t,i){return this._interactionController().startPendingLink(e,t,i)}_commitPendingLink(e,t,i){return this._interactionController().commitPendingLink(e,t,i)}_startNodeDrag(e,t){return this._interactionController().startNodeDrag(e,t)}_startLabelDrag(e,t,i,n){return this._interactionController().startLabelDrag(e,t,i,n)}_canonicalLink(e,t,i,n){return this._interactionController().canonicalLink(e,t,i,n)}_manualLink(e){return this._interactionController().manualLink(e)}_replaceLink(e,t){return this._interactionController().replaceLink(e,t)}_pendingJunctionConnectionCandidate(e,t,i){return this._interactionController().pendingJunctionConnectionCandidate(e,t,i)}_isCompatibleLink(e,t){return this._interactionController().isCompatibleLink(e,t)}_canStartLink(e){return this._interactionController().canStartLink(e)}_sameLinkEnds(e,t,i){return this._interactionController().sameLinkEnds(e,t,i)}_linkSignedValue(e,t,i=this.links,n){return this._flowEngine().signedValue(e,t,i,n)}_nodeFlowValue(e){return this._flowEngine().nodeFlowValue(e)}_linkSourceParts(e,t,i,n,o){return this._flowEngine().sourceParts(e,t,i,n,o)}_linkColor(e,t,i,n,o){return this._flowEngine().color(e,t,i,n,o)}_nodeColorCached(e,t,i,n){return this._flowEngine().nodeColor(e,t,i,n)}_shouldShowFlow(e,t){return this._flowEngine().showsFlow(e,t)}_flowWidth(e,t,i){return this._flowEngine().width(e,t,i)}_linkMinVisibleValue(e,t,i=this.links){return this._flowEngine().linkMinValue(e,t,i)}_linkMaxValue(e,t,i,n=this.links){return this._flowEngine().linkMaxValue(e,t,i,n)}_nodePrimaryValue(e,t,i){return this._flowEngine().primaryValue(e,t,i)}_nodeDisplayValue(e,t,i){return this._flowEngine().displayValue(e,t,i)}_hasNodeFlowArrow(e){return this._flowEngine().hasFlowArrow(e)}_connectionPoint(e,t,i,n){if(e.radius>0){const o=null!=n?n:"junction"===e.kind?10:0;return this._anchorPoint(e,null!=i?i:this._nearestAnchorIndex(e,t.point),o)}return e.point}_anchorPoint(e,t,i=10){const n=this._anchorAngle(t),o=Math.max(0,e.radius+i);return{x:Math.round(e.point.x+Math.cos(n)*o),y:Math.round(e.point.y+Math.sin(n)*o)}}_anchorAngle(e){const t=this._normalizeAnchorIndex(e);return-Math.PI/2+t*(2*Math.PI/We)}_nearestAnchorIndex(e,t){const i=(Math.atan2(t.y-e.point.y,t.x-e.point.x)+Math.PI/2)/(2*Math.PI)*We;return this._normalizeAnchorIndex(Math.round(i))}_normalizeAnchorIndex(e){return(Math.round(e)%We+We)%We}_anchorIndexForPointerPoint(e,t,i,n){const o=void 0!==i?this._normalizeAnchorIndex(i):void 0,r=void 0!==n?this._normalizeAnchorIndex(n):void 0,s=this._nearestAnchorIndex(e,t);if(void 0!==o){const i=this._anchorPoint(e,o,0),n=this._anchorPoint(e,s,0),r=Math.hypot(t.x-i.x,t.y-i.y),a=Math.hypot(t.x-n.x,t.y-n.y);if(r<=21||r<=a+7)return o}return null!=r?r:s}_clampedPoint(e){const t=ye(e.x,qe,916),i=ye(e.y,Ke,658),n={x:qe+Math.round((t-qe)/Ge)*Ge,y:Ke+Math.round((i-Ke)/Ge)*Ge};return{x:ye(n.x,qe,916),y:ye(n.y,Ke,658)}}_defaultIcon(e){return"junction"===e?"mdi:hub":"mdi:leaf"}_capturePointer(e){try{var t,i;null===(t=e.currentTarget)||void 0===t||null===(i=t.setPointerCapture)||void 0===i||i.call(t,e.pointerId)}catch{}}_eventPoint(e){const t=this.renderRoot.querySelector(".flow-svg"),i=null==t?void 0:t.getScreenCTM();if(!i)return;const n=new DOMPoint(e.clientX,e.clientY).matrixTransform(i.inverse());return{x:n.x,y:n.y}}_emitLayoutChange(e,t=!1){this.dispatchEvent(new CustomEvent("graph-layout-change",{detail:{layout:e,live:t},bubbles:!0,composed:!0}))}_emitLinksChange(e,t=!1){this.dispatchEvent(new CustomEvent("graph-links-change",{detail:{links:e,live:t},bubbles:!0,composed:!0}))}_emitNodeSelect(e){this.dispatchEvent(new CustomEvent("graph-node-select",{detail:{nodeId:e},bubbles:!0,composed:!0}))}_emitNodeRemove(e){this.dispatchEvent(new CustomEvent("graph-node-remove",{detail:{nodeId:e},bubbles:!0,composed:!0}))}_emitNodeLabelChange(e,t=!1){this.dispatchEvent(new CustomEvent("graph-node-label-change",{detail:{...e,live:t},bubbles:!0,composed:!0}))}_nodeActionLabel(e){switch(e.type){case"toggle":return"toggle";case"navigate":return"navigate";case"url":return"open link";default:return"details"}}_emitNodeAction(e,t){e&&(null==t||t.stopPropagation(),null==t||t.preventDefault(),this.dispatchEvent(new CustomEvent("graph-node-action",{detail:{action:e},bubbles:!0,composed:!0})))}_emitEntityMoreInfo(e,t){e&&(null==t||t.stopPropagation(),null==t||t.preventDefault(),this.dispatchEvent(new CustomEvent("graph-entity-more-info",{detail:{entityId:e},bubbles:!0,composed:!0})))}_handleNodeActionKeydown(e,t){"Enter"!==e.key&&" "!==e.key||this._emitNodeAction(t,e)}};(Be=Ze).properties={activeNode:{state:!0},editable:{type:Boolean},hoverTarget:{state:!0},flowMaxValue:{type:Number,attribute:"flow-max-value"},flowMinVisibleValue:{type:Number,attribute:"flow-min-visible-value"},hideZeroValues:{type:Boolean,attribute:"hide-zero-values"},layout:{attribute:!1},labelStyle:{type:String,attribute:"label-style"},leafRouting:{type:String,attribute:"leaf-routing"},links:{attribute:!1},nodes:{attribute:!1},pendingLink:{state:!0},pointerPoint:{state:!0},selectedLink:{state:!0},selectedNode:{state:!0}},Be.styles=ke,customElements.get("home-flow-graph-card")||customElements.define("home-flow-graph-card",Ze);var Qe=0;function et(e){return`${e}-${Qe+=1}`}function tt(e,t={}){var i;window.dispatchEvent(new CustomEvent("home-flow-card-preview-config-changed",{detail:{config:e,configKey:t.configKey,sourceConfigKey:null!==(i=t.sourceConfigKey)&&void 0!==i?i:t.configKey,sourceId:t.sourceId}}))}function it(e,t={}){window.dispatchEvent(new CustomEvent("home-flow-card-preview-node-selected",{detail:{configKey:t.configKey,nodeId:e,sourceId:t.sourceId,targetId:t.targetId}}))}var nt="home-flow-card",ot="straight",rt="funnel",st="fit-width",at="#2d8f8a",lt="#3f79c9",dt="#c65b4a",ht="#3f79c9",ct="#d6a500",ut=["device_class","friendly_name","icon","unit_of_measurement"],pt=["#f6b73c","#ef6c00","#f4a340","#b85f1a"],ft=[at,lt,ct,ht,dt,"#ef6c00","#4f9b6d","#8a5cc2","#d04b89","#4d90d9","#7a7f2f","#c86b2f"],_t=[{id:"grid",kind:"junction",label:"Grid",icon:"mdi:transmission-tower",radius:90,color:at,flowDirection:"supply",balance_role:"junction"},{id:"home",kind:"junction",label:"Home",icon:"mdi:home-lightning-bolt",radius:90,color:lt,flowDirection:"consume",balance_role:"junction"},{id:"heat-pump",kind:"leaf",label:"Heat pump",icon:"mdi:heat-pump",radius:65,flowDirection:"consume"}],vt=[{id:"grid->home",from:"grid",to:"home"},{id:"heat-pump->home",from:"heat-pump",to:"home"}],mt={grid:{x:245,y:365},home:{x:490,y:365},"heat-pump":{x:705,y:365}};function gt(e){const t=ei(e)?e:{},i=Array.isArray(t.nodes),n=ii(t.flow_min_visible_value,10),o=Math.max(ii(t.flow_max_value,12e3),n+1),r=!0===t.hide_zero_values;return{type:"string"==typeof t.type?t.type:`custom:${nt}`,title:"string"==typeof t.title?t.title:void 0,nodes:yt(t.nodes,r),links:It(t.links,!i),layout:St(t.layout,!i),flow_min_visible_value:n,flow_max_value:o,label_style:"straight"===t.label_style||"curved"===t.label_style?t.label_style:ot,leaf_routing:"channel"===t.leaf_routing||"radial"===t.leaf_routing||"orthogonal"===t.leaf_routing||"sweep"===t.leaf_routing?t.leaf_routing:rt,scaling_mode:"fit-width"===t.scaling_mode||"shrink"===t.scaling_mode?t.scaling_mode:st,width:ii(t.width,502),height:ii(t.height,360)}}function yt(e,t=!1){return Array.isArray(e)?e.filter(e=>ei(e)).filter(e=>"string"==typeof e.id&&void 0!==bt(e.kind)).map(e=>{var i,n,o;const r=null!==(i=bt(e.kind))&&void 0!==i?i:"leaf";return{id:String(e.id),kind:r,label:"string"==typeof e.label?e.label:Zt(String(e.id)),label_angle:ni(e.label_angle),label_offset_x:ni(e.label_offset_x),label_offset_y:ni(e.label_offset_y),flow_mode:$t(e.flow_mode),entity:Ft(e.entity),attribute:ti(e.attribute),incoming_entity:Ft(e.incoming_entity),incoming_attribute:ti(e.incoming_attribute),outgoing_entity:Ft(e.outgoing_entity),outgoing_attribute:ti(e.outgoing_attribute),secondary_entity:Ft(e.secondary_entity),secondary_attribute:ti(e.secondary_attribute),primary_action:Lt(e.primary_action),primary_action_path:ti(e.primary_action_path),secondary_action:Lt(e.secondary_action),secondary_action_path:ti(e.secondary_action_path),value:ni(e.value),secondary:ni(e.secondary),factor:ni(e.factor),invert:!0===e.invert,flowDirection:xt(e.flowDirection),allowed_flow:kt(e.allowed_flow),balance_role:"junction"===r?null!==(n=wt(e.balance_role))&&void 0!==n?n:Gt(r):void 0,junction_display_value:At(e.junction_display_value),hide_zero_values:"boolean"==typeof e.hide_zero_values?e.hide_zero_values:!!t||void 0,hide_if_zero:"boolean"==typeof e.hide_if_zero?e.hide_if_zero:void 0,hide_below:oi(e.hide_below),show_flow_arrow:"boolean"==typeof e.show_flow_arrow?e.show_flow_arrow:void 0,highlight_when_active:"boolean"==typeof e.highlight_when_active?e.highlight_when_active:void 0,active_from:oi(e.active_from),flowMinVisibleValue:ni(e.flowMinVisibleValue),flowMaxValue:ni(e.flowMaxValue),radius:ri(null!==(o=ni(e.radius))&&void 0!==o?o:Ut(r),20,100),icon:Pt(e.icon),unit:ti(e.unit),color:ti(e.color)}}):Qt(_t).map(e=>({...e,...t?{hide_zero_values:!0}:{}}))}function bt(e){if("junction"===e||"leaf"===e)return e}function xt(e){if("consume"===e||"supply"===e)return e}function $t(e){if("signed"===e||"bidirectional"===e)return e}function wt(e){if("junction"===e||"measured"===e||"ignore"===e)return e}function kt(e){if("both"===e||"supply"===e||"consume"===e)return e}function At(e){if("incoming"===e||"outgoing"===e||"net"===e)return e}function Lt(e){if("more-info"===e||"toggle"===e||"navigate"===e||"url"===e||"none"===e)return e}function Pt(e){var t;if(null===e)return null;const i=ti(e);return i?null!==(t=Nt[i])&&void 0!==t?t:i.includes(":")?i:void 0:void 0}var Mt,Ct,Nt={appliance:"mdi:power-plug",battery:"mdi:battery",ev:"mdi:car-electric",generic:"mdi:circle-outline",grid:"mdi:transmission-tower",heat_pump:"mdi:heat-pump",home:"mdi:home-lightning-bolt",junction:"mdi:hub",node:"mdi:circle-small",plug:"mdi:power-plug",solar:"mdi:solar-power",water:"mdi:water"};function It(e,t=!0){return Array.isArray(e)?e.filter(e=>ei(e)).filter(e=>"string"==typeof e.from&&"string"==typeof e.to).map(e=>({id:"string"==typeof e.id?e.id:`${String(e.from)}->${String(e.to)}`,from:String(e.from),to:String(e.to),entity:Ft(e.entity),attribute:ti(e.attribute),value:ni(e.value),factor:ni(e.factor),invert:!0===e.invert,unit:ti(e.unit),color:ti(e.color),flowMinVisibleValue:ni(e.flowMinVisibleValue),flowMaxValue:ni(e.flowMaxValue),fromAnchor:ni(e.fromAnchor),fromAnchorMode:"manual"===e.fromAnchorMode?"manual":void 0,toAnchor:ni(e.toAnchor),toAnchorMode:"manual"===e.toAnchorMode?"manual":void 0,junctionJoinId:ti(e.junctionJoinId)})):t?vt.map(e=>({...e})):[]}function St(e,t=!0){return ei(e)?Object.fromEntries(Object.entries(e).filter(e=>{const t=e[1];return ei(t)&&Number.isFinite(t.x)&&Number.isFinite(t.y)}).map(([e,t])=>[e,{x:Number(t.x),y:Number(t.y)}])):t?{...mt}:{}}function Et(e,t){var i;return(null!==(i=e.nodes)&&void 0!==i?i:Qt(_t)).map(e=>{var i,n,o,r,s,a,l,d,h,c,u,p,f,_,v,m,g,y,b,x,$,w,k,A,L,P,M,C,N;const I=null!==(i=e.flow_mode)&&void 0!==i?i:"signed",S="signed"===I?Ot(t,e.entity?{entity:e.entity,attribute:e.attribute,factor:e.factor,unit:e.unit}:{value:e.value,unit:e.unit}):void 0,E="bidirectional"===I?Ot(t,{entity:e.incoming_entity,attribute:e.incoming_attribute,unit:e.unit}):void 0,j="bidirectional"===I?Ot(t,{entity:e.outgoing_entity,attribute:e.outgoing_attribute,unit:e.unit}):void 0,V=e.secondary_entity?Ot(t,{entity:e.secondary_entity,attribute:e.secondary_attribute,value:e.secondary}):void 0,O=void 0!==e.value||("bidirectional"===I?Boolean(e.incoming_entity||e.outgoing_entity):Boolean(e.entity)),F=(null!==(n=null==E?void 0:E.value)&&void 0!==n?n:0)-(null!==(o=null==j?void 0:j.value)&&void 0!==o?o:0),D=null!==(r=null!==(s=null!==(a=e.unit)&&void 0!==a?a:null==S?void 0:S.unit)&&void 0!==s?s:null==E?void 0:E.unit)&&void 0!==r?r:null==j?void 0:j.unit,T=null!==(l=null==V?void 0:V.value)&&void 0!==l?l:e.secondary,R=null!==(d=null!==(h=null==V?void 0:V.unit)&&void 0!==h?h:e.unit)&&void 0!==d?d:"%",J=null!==(c=e.flowDirection)&&void 0!==c?c:Ht(e),B="bidirectional"===I?F:(null!==(u=null!==(p=null==S?void 0:S.value)&&void 0!==p?p:e.value)&&void 0!==u?u:0)*("consume"===J?-1:1),z=function(e,t){return"supply"===t?Math.max(e,0):"consume"===t?Math.min(e,0):e}(!0===e.invert?-B:B,null!==(f=e.allowed_flow)&&void 0!==f?f:"both"),U=Math.abs(z),H="bidirectional"===I?z>.5?null!==(_=null!==(v=e.incoming_entity)&&void 0!==v?v:e.outgoing_entity)&&void 0!==_?_:e.secondary_entity:z<-.5?null!==(m=null!==(g=e.outgoing_entity)&&void 0!==g?g:e.incoming_entity)&&void 0!==m?m:e.secondary_entity:null!==(y=null!==(b=e.incoming_entity)&&void 0!==b?b:e.outgoing_entity)&&void 0!==y?y:e.secondary_entity:null!==(x=e.entity)&&void 0!==x?x:e.secondary_entity,G=jt(null!==($=e.primary_action)&&void 0!==$?$:"more-info",H,e.primary_action_path),W=jt(null!==(w=e.secondary_action)&&void 0!==w?w:"more-info",e.secondary_entity,e.secondary_action_path),q="bidirectional"===I?null!==(k=e.incoming_entity)&&void 0!==k?k:e.outgoing_entity:e.entity,K=null===e.icon?null:null!==(A=null!==(L=e.icon)&&void 0!==L?L:Tt(t,q))&&void 0!==A?A:zt(e.kind),Y="measured"===Wt(e);return{id:e.id,kind:e.kind,label:null!==(P=null!==(M=e.label)&&void 0!==M?M:Dt(t,e.entity))&&void 0!==P?P:Zt(e.id),labelAngle:e.label_angle,labelOffsetX:e.label_offset_x,labelOffsetY:e.label_offset_y,value:U,flowValue:z,hasOwnValue:O,contributesToFlow:Y,junctionDisplayMode:e.junction_display_value,hideZeroValues:e.hide_zero_values,hideIfZero:!0===e.hide_if_zero,hideBelow:e.hide_below,showFlowArrow:!0===e.show_flow_arrow,highlightWhenActive:!0===e.highlight_when_active,activeFrom:null!==(C=e.active_from)&&void 0!==C?C:1,primaryAction:G,secondaryAction:W,secondary:T,secondaryDisplayValue:void 0!==T?`${Jt(T)}${R?` ${R}`:""}`:void 0,radius:null!==(N=e.radius)&&void 0!==N?N:Ut(e.kind),icon:K,secondaryIcon:void 0,unit:D,color:e.color,flowMinVisibleValue:e.flowMinVisibleValue,flowMaxValue:e.flowMaxValue}})}function jt(e,t,i){switch(e){case"none":default:return;case"more-info":case"toggle":return t?{entityId:t,type:e}:void 0;case"navigate":case"url":return(null==i?void 0:i.trim())?{path:i.trim(),type:e}:void 0}}function Vt(e,t){var i;return(null!==(i=e.links)&&void 0!==i?i:[]).map(e=>{var i,n;const o=e.entity?Ot(t,{...e,value:void 0}):Ot(t,e),r=null!==(i=null==o?void 0:o.value)&&void 0!==i?i:e.value,s=null!==(n=e.unit)&&void 0!==n?n:null==o?void 0:o.unit;return{...e,value:r,unit:s,displayValue:void 0!==r?Bt(r,s):void 0}})}function Ot(e,t){var i,n,o;if(!(null==t?void 0:t.entity))return void 0===(null==t?void 0:t.value)?void 0:{value:t.value,unit:t.unit};const r=null==e?void 0:e.states[t.entity];if(!r)return void 0===t.value?void 0:{value:t.value,unit:t.unit};const s=function(e){if("number"==typeof e)return e;if("string"!=typeof e)return NaN;const t=e.trim().replace(",",".").match(/[-+]?\d+(?:\.\d+)?/);return t?Number(t[0]):NaN}(t.attribute?r.attributes[t.attribute]:r.state);if(!Number.isFinite(s))return void 0===t.value?void 0:{value:t.value,unit:t.unit};const a=String(null!==(i=r.attributes.unit_of_measurement)&&void 0!==i?i:"").trim(),l=null!==(n=t.unit)&&void 0!==n?n:a,d=Rt(l);return{value:s*(null!==(o=t.factor)&&void 0!==o?o:d)*(t.invert?-1:1),unit:1!==d?"W":l}}function Ft(e){var t;return"string"==typeof e?ti(e):Array.isArray(e)?Ft(e[0]):ei(e)?null!==(t=ti(e.entity))&&void 0!==t?t:ti(e.entity_id):void 0}function Dt(e,t){var i;if(!t)return;const n=null==e||null===(i=e.states[t])||void 0===i?void 0:i.attributes.friendly_name;return"string"==typeof n?n:Zt(t)}function Tt(e,t){if(!t)return;const i=null==e?void 0:e.states[t],n=null==i?void 0:i.attributes.icon;if("string"==typeof n&&n.startsWith("mdi:"))return n;const o=null==i?void 0:i.attributes.device_class;if("string"==typeof o){const e=function(e){return"battery"===e?"mdi:battery":"gas"===e?"mdi:fire":"power"===e||"energy"===e?"mdi:flash":"temperature"===e?"mdi:thermometer":"water"===e?"mdi:water":void 0}(o);if(e)return e}return"battery"===(r=t.split(".")[0])?"mdi:battery":"binary_sensor"===r?"mdi:checkbox-marked-circle-outline":"climate"===r?"mdi:heat-pump":"cover"===r?"mdi:window-shutter":"fan"===r?"mdi:fan":"light"===r?"mdi:lightbulb":"sensor"===r?"mdi:eye":"switch"===r?"mdi:toggle-switch":"water_heater"===r?"mdi:water-boiler":void 0;var r}function Rt(e){return"kW"===e?1e3:"MW"===e?1e6:1}function Jt(e){return e.toLocaleString("en-US",{maximumFractionDigits:e>=100?0:1})}function Bt(e,t){const i=Math.abs(e);return t&&"W"!==t&&"kW"!==t&&"MW"!==t?`${Jt(i)} ${t}`:i>=1e3?`${Jt(i/1e3)} kW`:`${Math.round(i).toLocaleString("en-US")} W`}function zt(e){return"junction"===e?"mdi:hub":"mdi:leaf"}function Ut(e){return"junction"===e?90:65}function Ht(e){var t;return null!==(t=e.flowDirection)&&void 0!==t?t:"supply"}function Gt(e){return"junction"===e?"junction":"measured"}function Wt(e){var t;return"leaf"===e.kind?"measured":null!==(t=e.balance_role)&&void 0!==t?t:Gt(e.kind)}function qt(e,t){var i,n,o;const{[t]:r,...s}=null!==(i=e.layout)&&void 0!==i?i:{};return gt({...e,nodes:(null!==(n=e.nodes)&&void 0!==n?n:[]).filter(e=>e.id!==t),links:(null!==(o=e.links)&&void 0!==o?o:[]).filter(e=>e.from!==t&&e.to!==t),layout:s})}function Kt(e,t){const i=t.filter(e=>"junction"===e.kind),n=Math.max(0,i.findIndex(t=>t.id===e));return pt[n%pt.length]}function Yt(e){const t=/^#?([0-9a-f]{6})$/i.exec(null!=e?e:"");return t?`#${t[1].toLowerCase()}`:void 0}function Xt(e){const t=Yt(e);if(t)return{r:Number.parseInt(t.slice(1,3),16),g:Number.parseInt(t.slice(3,5),16),b:Number.parseInt(t.slice(5,7),16)}}function Zt(e){return(e.includes(".")?e.split(".").slice(1).join("."):e).replace(/[_-]+/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function Qt(e){return e.map(e=>({...e}))}function ei(e){return Boolean(e&&"object"==typeof e&&!Array.isArray(e))}function ti(e){return"string"==typeof e&&e.trim()?e.trim():void 0}function ii(e,t){return Number.isFinite(e)?Number(e):t}function ni(e){return Number.isFinite(e)?Number(e):void 0}function oi(e){const t=ni(e);return void 0===t?void 0:Math.max(0,t)}function ri(e,t,i){return Math.min(Math.max(e,t),i)}function si(e,t){e.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}function ai(e){var t,i;const n=gt(e);return JSON.stringify({links:(null!==(t=n.links)&&void 0!==t?t:[]).map(e=>({from:e.from,id:e.id,to:e.to})),nodes:(null!==(i=n.nodes)&&void 0!==i?i:[]).map(e=>({id:e.id,kind:e.kind})),type:n.type})}function li(e){var t,i;const n=/* @__PURE__ */new Map,o=(e,t)=>{var i;if(!e)return;const o=null!==(i=n.get(e))&&void 0!==i?i:/* @__PURE__ */new Set;ut.forEach(e=>o.add(e)),t&&o.add(t),n.set(e,o)};return(null!==(t=e.nodes)&&void 0!==t?t:[]).forEach(e=>{o(e.entity,e.attribute),o(e.incoming_entity,e.incoming_attribute),o(e.outgoing_entity,e.outgoing_attribute),o(e.secondary_entity,e.secondary_attribute)}),(null!==(i=e.links)&&void 0!==i?i:[]).forEach(e=>o(e.entity,e.attribute)),Array.from(n.entries()).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({attributes:Array.from(t).sort(),entityId:e}))}function di(e,t){return{links:Vt(e,t),nodes:Et(e,t)}}var hi=class extends me{constructor(...e){super(...e),this.config=gt(void 0),this.editMode=!1,this._previewSourceId=et("preview"),this._entityWatchers=li(this.config),this._normalizedConfig=this.config,this._resolvedGraphData=di(this.config,void 0),this._handlePreviewNodeSelected=e=>{if(!this.editMode)return;const t=e.detail;this._matchesPreviewNodeSelectedEvent(t)&&(this._selectedNode=null==t?void 0:t.nodeId)}}connectedCallback(){super.connectedCallback(),window.addEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected)}disconnectedCallback(){window.removeEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected),super.disconnectedCallback()}_matchesPreviewNodeSelectedEvent(e){return!!e&&e.sourceId!==this._previewSourceId&&(e.targetId?e.targetId===this._previewSourceId:!e.configKey||e.configKey===ai(this.config))}_previewEventScope(e=this.config){return{configKey:ai(this.config),sourceConfigKey:ai(e),sourceId:this._previewSourceId}}setConfig(e){this.config=gt(e)}getCardSize(){var e;return Math.ceil((null!==(e=gt(this.config).height)&&void 0!==e?e:360)/50)}static getStubConfig(){return gt(void 0)}static async getConfigElement(){return document.createElement("home-flow-card-editor")}shouldUpdate(e){if(e.has("config"))return this._syncGraphCache(this.config,this.hass,e.get("config")),!0;if(e.has("hass")){const t=e.get("hass");return!!function(e,t,i){return e.some(e=>function(e,t,i){return t!==i&&(t&&i?t.state!==i.state||e.attributes.some(e=>t.attributes[e]!==i.attributes[e]):t!==i)}(e,null==t?void 0:t.states[e.entityId],null==i?void 0:i.states[e.entityId]))}(this._entityWatchers,t,this.hass)&&(this._resolvedGraphData=di(this._normalizedConfig,this.hass),!0)}return!0}render(){var e,t,i,n,o,r;const s=this._normalizedConfig,a=null!==(e=s.width)&&void 0!==e?e:502,l=null!==(t=s.height)&&void 0!==t?t:360;return K`
      <ha-card
        class=${`scale-${null!==(i=s.scaling_mode)&&void 0!==i?i:st}`}
        style=${`--graph-width:${a};--graph-height:${l};--graph-aspect:${a} / ${l};`}
      >
        ${s.title?K`<div class="title">${s.title}</div>`:Z}
        <div class="graph-frame">
          <div class="graph-canvas">
            <home-flow-graph-card
              .nodes=${this._resolvedGraphData.nodes}
              .links=${this._resolvedGraphData.links}
              .layout=${null!==(n=s.layout)&&void 0!==n?n:{}}
              .labelStyle=${null!==(o=s.label_style)&&void 0!==o?o:ot}
              .leafRouting=${null!==(r=s.leaf_routing)&&void 0!==r?r:rt}
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
    `}_syncGraphCache(e,t,i){const n=Boolean(i&&i.nodes===e.nodes&&i.links===e.links&&i.hide_zero_values===e.hide_zero_values),o=gt(e);this._normalizedConfig=o,n||(this._entityWatchers=li(o),this._resolvedGraphData=di(o,t))}_handleLayoutChange(e){if(!this.editMode)return;const t=this.config;this.config={...this.config,layout:e.detail.layout},e.detail.live||tt(this.config,this._previewEventScope(t))}_handleLinksChange(e){const t=this.config;this.config=gt({...this.config,links:e.detail.links}),e.detail.live||tt(this.config,this._previewEventScope(t))}_handleNodeLabelChange(e){var t;if(!this.editMode||!e.detail.nodeId)return;const{labelAngle:i,labelOffsetX:n,labelOffsetY:o,nodeId:r}=e.detail,s=this.config;this.config=gt({...this.config,nodes:(null!==(t=this.config.nodes)&&void 0!==t?t:[]).map(e=>e.id===r?{...e,label_angle:i,label_offset_x:n,label_offset_y:o}:e)}),e.detail.live||tt(this.config,this._previewEventScope(s))}_handleNodeRemove(e){if(!this.editMode||!e.detail.nodeId)return;this._selectedNode===e.detail.nodeId&&(this._selectedNode=void 0);const t=this.config;this.config=qt(gt(this.config),e.detail.nodeId),tt(this.config,this._previewEventScope(t))}_handleNodeSelect(e){this.editMode&&(this._selectedNode=e.detail.nodeId,it(e.detail.nodeId,this._previewEventScope()))}_handleEntityMoreInfo(e){!this.editMode&&e.detail.entityId&&this._showMoreInfo(e.detail.entityId)}_handleNodeAction(e){if(this.editMode||!e.detail.action)return;const t=e.detail.action;switch(t.type){case"none":default:return;case"more-info":return void this._showMoreInfo(t.entityId);case"toggle":var i;if(!t.entityId||"function"!=typeof(null===(i=this.hass)||void 0===i?void 0:i.callService))return;return void this.hass.callService("homeassistant","toggle",{entity_id:t.entityId});case"navigate":if(!t.path)return;return window.history.pushState(null,"",t.path),void window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));case"url":if(!t.path)return;return void window.open(t.path,"_blank","noopener")}}_showMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}}))}};(Mt=hi).properties={config:{attribute:!1},editMode:{type:Boolean,attribute:"edit-mode"},hass:{attribute:!1},_selectedNode:{state:!0}},Mt.styles=d`
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
  `,customElements.get("home-flow-card")||customElements.define("home-flow-card",hi),window.customCards=null!==(Ct=window.customCards)&&void 0!==Ct?Ct:[],window.customCards.some(e=>"home-flow-card"===e.type)||window.customCards.push({type:nt,name:"Home Flow Card",description:"Visual flow map for energy, water, gas and other home resources.",preview:!0,documentationURL:"https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card"});var ci,ui=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},{I:pi}=ue,fi=e=>e,_i=()=>document.createComment(""),vi=(e,t,i)=>{const n=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=n.insertBefore(_i(),o),r=n.insertBefore(_i(),o);i=new pi(t,r,e,e.options)}else{const t=i._$AB.nextSibling,s=i._$AM,a=s!==e;if(a){var r;let t;null===(r=i._$AQ)||void 0===r||r.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==o||a){let e=i._$AA;for(;e!==t;){const t=fi(e).nextSibling;fi(n).insertBefore(e,o),e=t}}}return i},mi=(e,t,i=e)=>(e._$AI(t,i),e),gi={},yi=(e,t=gi)=>e._$AH=t,bi=e=>{e._$AR(),e._$AA.remove()},xi=(e,t,i)=>{const n=/* @__PURE__ */new Map;for(let o=t;o<=i;o++)n.set(e[o],o);return n},$i=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends ui{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let n;void 0===i?i=t:void 0!==t&&(n=t);const o=[],r=[];let s=0;for(const a of e)o[s]=n?n(a,s):s,r[s]=i(a,s),s++;return{values:r,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,n]){var o;const r=(e=>e._$AH)(e),{values:s,keys:a}=this.dt(t,i,n);if(!Array.isArray(r))return this.ut=a,s;const l=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],d=[];let h,c,u=0,p=r.length-1,f=0,_=s.length-1;for(;u<=p&&f<=_;)if(null===r[u])u++;else if(null===r[p])p--;else if(l[u]===a[f])d[f]=mi(r[u],s[f]),u++,f++;else if(l[p]===a[_])d[_]=mi(r[p],s[_]),p--,_--;else if(l[u]===a[_])d[_]=mi(r[u],s[_]),vi(e,d[_+1],r[u]),u++,_--;else if(l[p]===a[f])d[f]=mi(r[p],s[f]),vi(e,r[u],r[p]),p--,f++;else if(void 0===h&&(h=xi(a,f,_),c=xi(l,u,p)),h.has(l[u]))if(h.has(l[p])){const t=c.get(a[f]),i=void 0!==t?r[t]:null;if(null===i){const t=vi(e,r[u]);mi(t,s[f]),d[f]=t}else d[f]=mi(i,s[f]),vi(e,r[u],i),r[t]=null;f++}else bi(r[p]),p--;else bi(r[u]),u++;for(;f<=_;){const t=vi(e,d[_+1]);mi(t,s[f]),d[f++]=t}for(;u<=p;){const e=r[u++];null!==e&&bi(e)}return this.ut=a,yi(e,d),X}}),wi=[{label:"Solar",value:"mdi:solar-power"},{label:"Junction",value:"mdi:hub"},{label:"Battery",value:"mdi:battery"},{label:"Home",value:"mdi:home-lightning-bolt"},{label:"Grid",value:"mdi:transmission-tower"},{label:"Heat pump",value:"mdi:heat-pump"},{label:"EV",value:"mdi:car-electric"},{label:"Plug",value:"mdi:power-plug"},{label:"Water",value:"mdi:water"},{label:"Generic",value:"mdi:circle-outline"}],ki=[{label:"Junction",value:"junction"},{label:"Leaf",value:"leaf"}],Ai=[{label:"+ supplies, - consumes",value:"supply"},{label:"+ consumes, - supplies",value:"consume"}],Li=[{label:"Single signed entity",value:"signed"},{label:"Separate in/out entities",value:"bidirectional"}],Pi=[{label:"Both",value:"both"},{label:"Supply only",value:"supply"},{label:"Consume only",value:"consume"}],Mi=[{label:"Pass-through only",value:"junction"},{label:"Counts in balance",value:"measured"},{label:"Display only",value:"ignore"}],Ci=[{label:"Incoming flow",value:"incoming"},{label:"Outgoing flow",value:"outgoing"},{label:"Net flow",value:"net"}],Ni=[{label:"More info",value:"more-info"},{label:"Toggle",value:"toggle"},{label:"Navigate",value:"navigate"},{label:"Open URL",value:"url"},{label:"None",value:"none"}],Ii=[{label:"Around circle",value:"curved"},{label:"Straight",value:"straight"}],Si=[{label:"Funnel",value:"funnel"},{label:"Channel",value:"channel"},{label:"Orthogonal",value:"orthogonal"},{label:"Sweep",value:"sweep"},{label:"Radial",value:"radial"}],Ei=[{label:"Native (scroll if needed)",value:"native"},{label:"Fit width",value:"fit-width"},{label:"Shrink on narrow screens",value:"shrink"}],ji=class extends me{constructor(...e){super(...e),this._config=gt(void 0),this._nodeSectionOpen={},this._previewSourceId=et("editor"),this._handlePreviewConfigChanged=e=>{const t=e.detail;(null==t?void 0:t.config)&&this._matchesPreviewConfigChangedEvent(t)&&(this._config=gt(t.config),this._rememberPreviewSource(t.sourceId),si(this,this._config))},this._handlePreviewNodeSelected=e=>{const t=e.detail;if(!this._matchesPreviewNodeSelectedEvent(t))return;const i=null==t?void 0:t.nodeId;this._selectedNode=i,this._rememberPreviewSource(t.sourceId),this._syncSelectedNodeEditor(i)},this._handleEditorKeydown=e=>{var t;if(!this._selectedNode)return;if("Delete"!==e.key&&"Backspace"!==e.key)return;if(e.defaultPrevented)return;if(this._isInteractiveEvent(e))return;const i=(null!==(t=gt(this._config).nodes)&&void 0!==t?t:[]).find(e=>e.id===this._selectedNode);i&&(e.preventDefault(),e.stopPropagation(),this._removeNode(i.id))},this._handleNodePointerMove=e=>{var t,i,n;if(!this._draggedNode||e.pointerId!==this._dragPointerId)return;e.preventDefault();const o=Array.from(this.renderRoot.querySelectorAll(".node-editor-row[data-node-id]")).map(e=>{var t;return{id:null!==(t=e.dataset.nodeId)&&void 0!==t?t:"",rect:e.getBoundingClientRect()}}).filter(e=>e.id&&e.id!==this._draggedNode);if(0===o.length)return;let r=null===(t=o[o.length-1])||void 0===t?void 0:t.id,s="after";for(const d of o){const t=d.rect.top+d.rect.height/2;if(e.clientY<t){r=d.id,s="before";break}}if(!r)return;this._dragOverNode=r,this._dragInsertTarget=r,this._dragInsertSide=s;const a=null!==(i=this._dragPreviewOrder)&&void 0!==i?i:(null!==(n=this._config.nodes)&&void 0!==n?n:[]).map(e=>e.id),l=this._reorderedNodeIds(this._draggedNode,r,s,a);l&&l.join("|")!==a.join("|")&&(this._dragPreviewOrder=l)},this._handleNodePointerUp=e=>{var t;if(!this._draggedNode||e.pointerId!==this._dragPointerId)return;e.preventDefault();const i=this._dragPreviewOrder,n=(null!==(t=this._config.nodes)&&void 0!==t?t:[]).map(e=>e.id);(null==i?void 0:i.length)&&i.join("|")!==n.join("|")&&this._commitNodeOrder(i),this._clearNodeDragState()}}connectedCallback(){super.connectedCallback(),window.addEventListener("home-flow-card-preview-config-changed",this._handlePreviewConfigChanged),window.addEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected),window.addEventListener("keydown",this._handleEditorKeydown,!0),window.addEventListener("pointermove",this._handleNodePointerMove,!0),window.addEventListener("pointerup",this._handleNodePointerUp,!0),window.addEventListener("pointercancel",this._handleNodePointerUp,!0)}disconnectedCallback(){window.removeEventListener("home-flow-card-preview-config-changed",this._handlePreviewConfigChanged),window.removeEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected),window.removeEventListener("keydown",this._handleEditorKeydown,!0),window.removeEventListener("pointermove",this._handleNodePointerMove,!0),window.removeEventListener("pointerup",this._handleNodePointerUp,!0),window.removeEventListener("pointercancel",this._handleNodePointerUp,!0),super.disconnectedCallback()}_matchesPreviewConfigChangedEvent(e){if(!e)return!1;if(e.sourceId===this._previewSourceId)return!1;const t=ai(this._config);return e.sourceConfigKey===t||e.configKey===t}_matchesPreviewNodeSelectedEvent(e){if(!e)return!1;if(e.sourceId===this._previewSourceId)return!1;const t=ai(this._config);return!e.configKey||e.configKey===t}_rememberPreviewSource(e){e&&e!==this._previewSourceId&&(this._targetPreviewSourceId=e)}_isInteractiveEvent(e){const t=window.getSelection();if(t&&!t.isCollapsed&&t.toString().trim())return!0;const i="function"==typeof e.composedPath?e.composedPath():[];for(const o of i)if(o instanceof Element&&this._matchesInteractiveElement(o))return!0;const n=this._deepActiveElement();return!!n&&this._matchesInteractiveElement(n)}_deepActiveElement(){var e,t;let i=null!==(e=null===(t=this.ownerDocument)||void 0===t?void 0:t.activeElement)&&void 0!==e?e:document.activeElement;for(;i;){var n;const e=i.shadowRoot,t=null!==(n=null==e?void 0:e.activeElement)&&void 0!==n?n:null;if(!t||t===i)break;i=t}return i}_matchesInteractiveElement(e){return!!e.matches("input, textarea, select, button, [contenteditable=''], [contenteditable='true'], ha-textfield, ha-textarea, ha-combo-box, ha-selector, hui-entity-picker, hui-icon-picker, ha-button, mwc-textfield, mwc-select, mwc-button")||!!(e instanceof HTMLElement&&e.isContentEditable)||Boolean(e.closest("input, textarea, select, button, [contenteditable=''], [contenteditable='true'], ha-textfield, ha-textarea, ha-combo-box, ha-selector, hui-entity-picker, hui-icon-picker, ha-button, mwc-textfield, mwc-select, mwc-button"))}async _syncSelectedNodeEditor(e){await this.updateComplete,await new Promise(e=>requestAnimationFrame(e));const t=Array.from(this.renderRoot.querySelectorAll(".node-editor[data-node-id]"));if(t.forEach(t=>{t.open=t.dataset.nodeId===e}),!e)return;const i=t.find(t=>t.dataset.nodeId===e);null==i||i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}setConfig(e){this._config=gt(e)}shouldUpdate(e){return!e.has("hass")||e.size>1||this._editorHassMetadataChanged(e.get("hass"),this.hass)}_editorHassMetadataChanged(e,t){var i;if(!e||!t)return e!==t;if(Object.keys(e.states).length!==Object.keys(t.states).length)return!0;const n=(null!==(i=this._config.nodes)&&void 0!==i?i:[]).find(e=>e.id===this._selectedNode);if(!n)return!1;const o=new Set([n.entity,n.incoming_entity,n.outgoing_entity,n.secondary_entity].filter(e=>Boolean(e))),r=["device_class","friendly_name","icon","unit_of_measurement"];for(const s of o){const i=e.states[s],n=t.states[s];if(i&&n){if(r.some(e=>i.attributes[e]!==n.attributes[e]))return!0}else if(i!==n)return!0}return!1}willUpdate(e){e.has("config")&&this.config&&(this._config=gt(this.config))}render(){var e,t,i,n,o,r;const s=this._config;return K`
      <div class="editor-shell">
        <section class="panel">
          <header>
            <h3>Options</h3>
            <p>General display options.</p>
          </header>
          <label>
            <span>Label style</span>
            <select
              .value=${null!==(e=s.label_style)&&void 0!==e?e:ot}
              @change=${e=>this._patchConfig({label_style:e.currentTarget.value})}
            >
              ${Ii.map(e=>K`
                  <option value=${e.value}>${e.label}</option>
                `)}
            </select>
          </label>
          <label>
            <span>Leaf routing</span>
            <select
              .value=${null!==(t=s.leaf_routing)&&void 0!==t?t:rt}
              @change=${e=>this._patchConfig({leaf_routing:e.currentTarget.value})}
            >
              ${Si.map(e=>K`
                  <option value=${e.value}>${e.label}</option>
                `)}
            </select>
          </label>
          <label>
            <span>Scaling mode</span>
            <select
              .value=${null!==(i=s.scaling_mode)&&void 0!==i?i:st}
              @change=${e=>this._patchConfig({scaling_mode:e.currentTarget.value})}
            >
              ${Ei.map(e=>{var t;return K`
                  <option
                    value=${e.value}
                    ?selected=${(null!==(t=s.scaling_mode)&&void 0!==t?t:st)===e.value}
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
            ${ki.map(e=>K`
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
            <p>${null!==(n=null===(o=s.nodes)||void 0===o?void 0:o.length)&&void 0!==n?n:0} configured</p>
          </header>
          <div class="nodes-list">
            ${$i(null!==(r=s.nodes)&&void 0!==r?r:[],e=>e.id,e=>this._nodeEditor(e,s))}
          </div>
        </section>
      </div>
    `}_nodeVisualOrder(e,t){var i,n;const o=null!==(i=this._dragPreviewOrder)&&void 0!==i?i:(null!==(n=t.nodes)&&void 0!==n?n:[]).map(e=>e.id),r=o.indexOf(e);return r>=0?r:o.length}_nodeEditor(e,t){var i,n,o,r,s,a,l,d,h,c,u,p,f,_,v,m,g,y;const b=(null===(i=e.label)||void 0===i?void 0:i.trim())||"Empty",x=this._selectedNode===e.id,$=null!==(n=e.flow_mode)&&void 0!==n?n:"signed",w="bidirectional"===$?null!==(o=e.incoming_entity)&&void 0!==o?o:e.outgoing_entity:e.entity,k=x?null!==(r=e.color)&&void 0!==r?r:this._defaultNodeColor(e,t):"",A=x?null===e.icon?void 0:null!==(s=null!==(a=e.icon)&&void 0!==a?a:Tt(this.hass,w))&&void 0!==s?s:zt(e.kind):void 0,L=null!==(l=e.primary_action)&&void 0!==l?l:"more-info",P=null!==(d=e.secondary_action)&&void 0!==d?d:"more-info",M=x?this._busJunctionIds(e.id,t):[],C=`${null!==(h=e.radius)&&void 0!==h?h:Ut(e.kind)} px`,N="bidirectional"===$?"Separate in/out":"Single signed",I=x?function(e,t){var i,n;const o=("bidirectional"===(null!==(i=t.flow_mode)&&void 0!==i?i:"signed")?[t.incoming_entity,t.outgoing_entity]:[t.entity]).map(t=>{var i,n;return t?String(null!==(i=null==e||null===(n=e.states[t])||void 0===n?void 0:n.attributes.unit_of_measurement)&&void 0!==i?i:"").trim():""}).find(Boolean),r=null!==(n=t.unit)&&void 0!==n?n:o;return 1!==Rt(r)?"W":r}(this.hass,e):void 0,S=e.secondary_entity?"Configured":"Not set",E=`Applies to ${M.length} junction${1===M.length?"":"s"}`;return K`
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
        ${this._nodeSummary(b,e.id)}
        ${x?K`
        ${this._renderNodeSubsection(e,"appearance","Appearance",C,K`
            <div class="form-grid">
              <label>
                <span>Name</span>
                <input
                  .value=${null!==(c=e.label)&&void 0!==c?c:""}
                  @input=${i=>this._updateNode(t,e.id,{label:i.currentTarget.value})}
                />
              </label>
              <label>
                <span>Icon</span>
                ${this._iconSelect(A,i=>this._updateNode(t,e.id,{icon:i}),null!==e.icon?()=>this._updateNode(t,e.id,{icon:null}):void 0)}
              </label>
              <label>
                <span>Radius</span>
                <input
                  type="number"
                  min=${String(20)}
                  max=${String(100)}
                  .value=${String(null!==(u=e.radius)&&void 0!==u?u:Ut(e.kind))}
                  @change=${i=>this._updateNode(t,e.id,{radius:Number(i.currentTarget.value)})}
                />
              </label>
              ${this._colorInput("Color",k,i=>this._updateNode(t,e.id,{color:i}),e.color?()=>this._updateNode(t,e.id,{color:void 0}):void 0)}
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

        ${this._renderNodeSubsection(e,"flow","Flow",N,K`
            <div class="form-grid">
              <label class="span-all">
                <span>Flow input</span>
                <select
                  .value=${$}
                  @change=${i=>this._updateNode(t,e.id,{flow_mode:i.currentTarget.value})}
                >
                  ${Li.map(e=>K`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${"bidirectional"===$?K`
                    <label class="span-all">
                      <span>Inflow entity</span>
                      ${this._entitySelect(e.incoming_entity,i=>{const n=i?Tt(this.hass,i):void 0;this._updateNode(t,e.id,{incoming_entity:i,...n&&void 0===e.icon?{icon:n}:{}})})}
                    </label>
                    <label class="span-all">
                      <span>Outflow entity</span>
                      ${this._entitySelect(e.outgoing_entity,i=>{const n=i?Tt(this.hass,i):void 0;this._updateNode(t,e.id,{outgoing_entity:i,...n&&void 0===e.icon?{icon:n}:{}})})}
                    </label>
                  `:K`
                    <label class="span-all">
                      <span>Flow entity</span>
                      ${this._entitySelect(e.entity,i=>{const n=i?Tt(this.hass,i):void 0;this._updateNode(t,e.id,{entity:i,...n?{icon:n}:{}})})}
                    </label>
                    <label>
                      <span>Flow direction</span>
                      <select
                        .value=${null!==(p=e.flowDirection)&&void 0!==p?p:Ht(e)}
                        @change=${i=>this._updateNode(t,e.id,{flowDirection:i.currentTarget.value})}
                      >
                        ${Ai.map(e=>K`
                            <option value=${e.value}>${e.label}</option>
                          `)}
                      </select>
                    </label>
                  `}
              <label>
                <span>Allowed flow</span>
                <select
                  .value=${null!==(f=e.allowed_flow)&&void 0!==f?f:"both"}
                  @change=${i=>this._updateNode(t,e.id,{allowed_flow:i.currentTarget.value})}
                >
                  ${Pi.map(e=>K`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${"junction"===e.kind?K`
                    <label>
                      <span>Balance role</span>
                      <select
                        .value=${Wt(e)}
                        @change=${i=>this._updateNode(t,e.id,{balance_role:i.currentTarget.value})}
                      >
                        ${Mi.map(e=>K`
                            <option value=${e.value}>${e.label}</option>
                          `)}
                      </select>
                    </label>
                    <label>
                      <span>Display value</span>
                      <select
                        .value=${null!==(_=e.junction_display_value)&&void 0!==_?_:"incoming"}
                        @change=${i=>this._updateNode(t,e.id,{junction_display_value:i.currentTarget.value})}
                      >
                        ${Ci.map(e=>K`
                            <option value=${e.value}>${e.label}</option>
                          `)}
                      </select>
                    </label>
                  `:Z}
              <label>
                <span>Primary click action</span>
                <select
                  .value=${L}
                  @change=${i=>this._updateNode(t,e.id,{primary_action:i.currentTarget.value})}
                >
                  ${Ni.map(e=>K`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${"navigate"===L||"url"===L?K`
                    <label class="span-all">
                      <span>${"navigate"===L?"Primary navigation path":"Primary URL"}</span>
                      <input
                        type="text"
                        .value=${null!==(v=e.primary_action_path)&&void 0!==v?v:""}
                        placeholder=${"navigate"===L?"/lovelace/0":"https://example.com"}
                        @input=${i=>this._updateNode(t,e.id,{primary_action_path:i.currentTarget.value})}
                      />
                    </label>
                  `:Z}
            </div>
            <div class="flow-options-list">
              <div
                class=${"flow-option-row"+(!0===e.highlight_when_active?" is-enabled":"")}
              >
                <label class="checkbox-field">
                  <input
                    type="checkbox"
                    .checked=${!0===e.highlight_when_active}
                    @change=${i=>this._updateNode(t,e.id,{highlight_when_active:i.currentTarget.checked})}
                  />
                  <span>Highlight when active</span>
                </label>
                <label class="flow-option-setting">
                  <span>Active from${I?` (${I})`:""}</span>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    .disabled=${!0!==e.highlight_when_active}
                    .value=${String(null!==(m=e.active_from)&&void 0!==m?m:1)}
                    @change=${i=>{const n=i.currentTarget.value.trim();this._updateNode(t,e.id,{active_from:n?Math.max(0,Number(n)||0):void 0})}}
                  />
                </label>
              </div>
              <div
                class=${"flow-option-row"+(!0===e.hide_zero_values?" is-enabled":"")}
              >
                <label class="checkbox-field">
                  <input
                    type="checkbox"
                    .checked=${!0===e.hide_zero_values}
                    @change=${i=>this._updateNode(t,e.id,{hide_zero_values:i.currentTarget.checked})}
                  />
                  <span>Hide zero values</span>
                </label>
                <span class="flow-option-empty" aria-hidden="true"></span>
              </div>
              <div
                class=${"flow-option-row"+(!0===e.hide_if_zero?" is-enabled":"")}
              >
                <label class="checkbox-field">
                  <input
                    type="checkbox"
                    .checked=${!0===e.hide_if_zero}
                    @change=${i=>this._updateNode(t,e.id,{hide_if_zero:i.currentTarget.checked})}
                  />
                  <span>Hide if zero</span>
                </label>
                <label class="flow-option-setting">
                  <span>Hide at or below${I?` (${I})`:""}</span>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    .disabled=${!0!==e.hide_if_zero}
                    .value=${String(null!==(g=e.hide_below)&&void 0!==g?g:.5)}
                    @change=${i=>{const n=i.currentTarget.value.trim();this._updateNode(t,e.id,{hide_below:n?Math.max(0,Number(n)||0):void 0})}}
                  />
                </label>
              </div>
              <div
                class=${"flow-option-row"+(!0===e.show_flow_arrow?" is-enabled":"")}
              >
                <label class="checkbox-field">
                  <input
                    type="checkbox"
                    .checked=${!0===e.show_flow_arrow}
                    @change=${i=>this._updateNode(t,e.id,{show_flow_arrow:i.currentTarget.checked})}
                  />
                  <span>Show flow arrow</span>
                </label>
                <span class="flow-option-empty" aria-hidden="true"></span>
              </div>
              <div
                class=${"flow-option-row"+(!0===e.invert?" is-enabled":"")}
              >
                <label class="checkbox-field">
                  <input
                    type="checkbox"
                    .checked=${!0===e.invert}
                    @change=${i=>this._updateNode(t,e.id,{invert:i.currentTarget.checked})}
                  />
                  <span>Invert flow</span>
                </label>
                <span class="flow-option-empty" aria-hidden="true"></span>
              </div>
            </div>
          `,t)}

        ${this._renderNodeSubsection(e,"secondary","Secondary value",S,K`
            <div class="form-grid">
              <label class="span-all">
                <span>Secondary entity</span>
                ${this._entitySelect(e.secondary_entity,i=>this._updateNode(t,e.id,{secondary_entity:i}))}
              </label>
              <label>
                <span>Secondary click action</span>
                <select
                  .value=${P}
                  @change=${i=>this._updateNode(t,e.id,{secondary_action:i.currentTarget.value})}
                >
                  ${Ni.map(e=>K`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${"navigate"===P||"url"===P?K`
                    <label class="span-all">
                      <span>${"navigate"===P?"Secondary navigation path":"Secondary URL"}</span>
                      <input
                        type="text"
                        .value=${null!==(y=e.secondary_action_path)&&void 0!==y?y:""}
                        placeholder=${"navigate"===P?"/lovelace/0":"https://example.com"}
                        @input=${i=>this._updateNode(t,e.id,{secondary_action_path:i.currentTarget.value})}
                      />
                    </label>
                  `:Z}
            </div>
          `,t)}
        ${M.length>0?this._renderNodeSubsection(e,"bus","Bus options",E,this._busOptionsEditor(e,t,M),t):Z}
          `:Z}
        </details>
      </div>
    `}_busOptionsEditor(e,t,i){return K`
      <p class="subsection-note">
        Applies to ${i.length} junction${1===i.length?"":"s"} on this bus.
      </p>
      <div class="form-grid compact">
        ${this._numberInput("Show flow from",this._busOptionValue(e.id,t,"flowMinVisibleValue",10),i=>this._updateBusOptions(t,e.id,{flowMinVisibleValue:i}))}
        ${this._numberInput("Full line width at",this._busOptionValue(e.id,t,"flowMaxValue",12e3),i=>this._updateBusOptions(t,e.id,{flowMaxValue:i}))}
      </div>
    `}_renderNodeSubsection(e,t,i,n,o,r,s={}){return K`
      <details
        class="node-subsection"
        ?open=${this._isNodeSectionOpen(e,t,r,s)}
        @toggle=${i=>this._handleNodeSectionToggle(i,e.id,t)}
      >
        <summary class="node-subsection-summary">
          <strong>${i}</strong>
          <span>${n}</span>
        </summary>
        <div class="node-subsection-content">
          ${o}
        </div>
      </details>
    `}_nodeSummary(e,t){return K`
      <summary
        class="node-summary"
        @click=${()=>this._selectNodeFromEditor(t)}
      >
        <div class="node-summary-text">
          <strong>${e}</strong>
        </div>
      </summary>
    `}_selectNodeFromEditor(e){this._selectedNode=e,it(e,{configKey:ai(this._config),sourceId:this._previewSourceId,targetId:this._targetPreviewSourceId})}_entitySelect(e,t,i=!1){const n=e&&!i?K`
            <button
              type="button"
              class="entity-clear"
              @click=${()=>t(void 0)}
            >
              Clear
            </button>
          `:Z;return this._isHomeAssistantEditor()?K`
        <div class="entity-picker">
          <ha-selector
            .hass=${this.hass}
            .selector=${{entity:{}}}
            .value=${null!=e?e:""}
            ?disabled=${i}
            @value-changed=${e=>this._handleEntityValueChanged(e,t)}
          ></ha-selector>
          ${n}
        </div>
      `:K`
      <div class="entity-picker">
        <select
          .value=${null!=e?e:""}
          ?disabled=${i}
          @change=${e=>t(e.currentTarget.value.trim()||void 0)}
        >
          <option value="">Manual</option>
          ${(o=this.hass,Object.keys(null!==(r=null==o?void 0:o.states)&&void 0!==r?r:{}).sort()).map(t=>K`
              <option value=${t} ?selected=${t===e}>
                ${t}
              </option>
            `)}
        </select>
        ${n}
      </div>
    `;var o,r}_handleEntityValueChanged(e,t){t(Ft(e.detail.value))}_iconSelect(e,t,i){const n=i?K`
          <button
            type="button"
            class="field-clear icon-clear"
            aria-label="Clear icon"
            title="Clear icon"
            @click=${i}
          >
            ×
          </button>
        `:Z;return this._isHomeAssistantEditor()?K`
        <div class="field-picker icon-picker">
          <ha-selector
            .hass=${this.hass}
            .selector=${{icon:{}}}
            .value=${null!=e?e:""}
            @value-changed=${e=>{var i;const n=null===(i=e.detail.value)||void 0===i?void 0:i.trim();n&&t(n)}}
          ></ha-selector>
          ${n}
        </div>
      `:K`
      <div class="field-picker icon-picker">
        <select
          .value=${null!=e?e:""}
          @change=${e=>{const i=e.currentTarget.value.trim();i&&t(i)}}
        >
          <option value="">No icon</option>
          ${wi.map(t=>K`
              <option value=${t.value} ?selected=${t.value===e}>
                ${t.label}
              </option>
            `)}
        </select>
        ${n}
      </div>
    `}_isHomeAssistantEditor(){return Boolean(this.hass&&"object"==typeof this.hass&&"connection"in this.hass)}_colorInput(e,t,i,n){return K`
      <label class="color-field">
        <span>${e}</span>
        <div class="color-picker">
          <input
            type="color"
            .value=${function(e){return/^#[0-9a-f]{6}$/i.test(null!=e?e:"")?e:dt}(t)}
            @input=${e=>i(e.currentTarget.value)}
          />
          ${n?K`
                <button type="button" class="field-clear" @click=${n}>
                  Reset
                </button>
              `:Z}
        </div>
      </label>
    `}_defaultNodeColor(e,t){var i,n,o;if("junction"===e.kind)return Kt(e.id,null!==(o=t.nodes)&&void 0!==o?o:[]);const r=(null!==(i=t.links)&&void 0!==i?i:[]).filter(t=>t.from===e.id||t.to===e.id).map(t=>t.from===e.id?t.to:t.from).find(e=>{var i,n;return"junction"===(null===(i=(null!==(n=t.nodes)&&void 0!==n?n:[]).find(t=>t.id===e))||void 0===i?void 0:i.kind)});if(r){var s,a,l;const e=(null!==(s=t.nodes)&&void 0!==s?s:[]).find(e=>e.id===r);return null!==(a=null==e?void 0:e.color)&&void 0!==a?a:Kt(r,null!==(l=t.nodes)&&void 0!==l?l:[])}return"mdi:solar-power"===e.icon?ct:(null===(n=e.icon)||void 0===n?void 0:n.startsWith("mdi:battery"))?ht:dt}_nextNodeColor(e,t,i){var n,o;const r=t.map(e=>{var t;return Yt(null!==(t=e.color)&&void 0!==t?t:this._defaultNodeColor(e,i))}).filter(e=>Boolean(e)),s="junction"===e?pt[0]:dt;if(0===r.length)return s;const a=ft.filter(e=>!r.includes(e.toLowerCase()));return null!==(n=null===(o=(a.length>0?a:ft).map(e=>({color:e,distance:Math.min(...r.map(t=>function(e,t){const i=Xt(e),n=Xt(t);return i&&n?Math.hypot(i.r-n.r,i.g-n.g,i.b-n.b):0}(e,t)))})).sort((e,t)=>t.distance-e.distance)[0])||void 0===o?void 0:o.color)&&void 0!==n?n:s}_numberInput(e,t,i){return K`
      <label>
        <span>${e}</span>
        <input
          type="number"
          .value=${String(Math.round(t))}
          @input=${e=>i(Number(e.currentTarget.value))}
        />
      </label>
    `}_busOptionValue(e,t,i,n){var o;const r=null!==(o=t.nodes)&&void 0!==o?o:[],s=this._busJunctionIds(e,t),a=r.find(e=>s.includes(e.id)&&Number.isFinite(e[i])),l=null==a?void 0:a[i];return Number.isFinite(l)?Number(l):n}_updateBusOptions(e,t,i){var n;const o=this._busJunctionIds(t,e);0!==o.length&&this._patchConfig({nodes:(null!==(n=e.nodes)&&void 0!==n?n:[]).map(e=>o.includes(e.id)?{...e,...i}:e)})}_busJunctionIds(e,t){var i;const n=null!==(i=t.nodes)&&void 0!==i?i:[],o=new Map(n.map(e=>[e.id,e])),r=/* @__PURE__ */new Set,s=[e];for(;s.length>0;){var a;const e=s.shift();e&&!r.has(e)&&(r.add(e),(null!==(a=t.links)&&void 0!==a?a:[]).forEach(t=>{if(t.from!==e&&t.to!==e)return;const i=t.from===e?t.to:t.from;!r.has(i)&&o.has(i)&&s.push(i)}))}return n.filter(e=>"junction"===e.kind&&r.has(e.id)).map(e=>e.id)}_addNode(e){var t,i,n,o;const r=gt(this._config),s=null!==(t=r.nodes)&&void 0!==t?t:[],a=this._uniqueNodeId(e,s),l={id:a,kind:e,label:null!==(i=null===(n=ki.find(t=>t.value===e))||void 0===n?void 0:n.label)&&void 0!==i?i:"Node",icon:zt(e),radius:Ut(e),..."junction"===e?{color:this._nextNodeColor(e,s,r)}:{},flowDirection:"supply",..."junction"===e?{balance_role:Gt(e)}:{}};this._patchConfig({nodes:[l,...s],layout:{...null!==(o=r.layout)&&void 0!==o?o:{},[a]:this._initialPoint(e,s.filter(t=>t.kind===e).length)}})}_uniqueNodeId(e,t){const i=new Set(t.map(e=>e.id));let n=1;for(;i.has(`${e}-${n}`);)n+=1;return`${e}-${n}`}_initialPoint(e,t){return"junction"===e?{x:360+130*t,y:348}:{x:300+t%4*120,y:86+110*Math.floor(t/4)}}_duplicateNode(e){var t,i,n,o,r;const s=gt(this._config),a=null!==(t=s.nodes)&&void 0!==t?t:[],l=a.find(t=>t.id===e);if(!l)return;const d=this._uniqueDuplicateNodeId(l.id,a),h=null!==(i=null===(n=s.layout)||void 0===n?void 0:n[l.id])&&void 0!==i?i:this._initialPoint(l.kind,a.filter(e=>e.kind===l.kind).length),c={...l,id:d,label:this._duplicateNodeLabel(null!==(o=l.label)&&void 0!==o?o:l.id,a)};this._selectedNode=d,this._patchConfig({nodes:[c,...a],layout:{...null!==(r=s.layout)&&void 0!==r?r:{},[d]:this._duplicatePoint(h)}}),this._syncSelectedNodeEditor(d)}_uniqueDuplicateNodeId(e,t){const i=new Set(t.map(e=>e.id));let n=1,o=`${e}-copy`;for(;i.has(o);)n+=1,o=`${e}-copy-${n}`;return o}_duplicateNodeLabel(e,t){const i=new Set(t.map(e=>e.label).filter(Boolean));let n=1,o=`${e} copy`;for(;i.has(o);)n+=1,o=`${e} copy ${n}`;return o}_duplicatePoint(e){const t=46,i=e.x+t>916?e.x-t:e.x+t,n=e.y+t>658?e.y-t:e.y+t;return{x:Math.max(70,Math.min(916,i)),y:Math.max(62,Math.min(658,n))}}_updateNode(e,t,i){var n;this._patchConfig({nodes:(null!==(n=e.nodes)&&void 0!==n?n:[]).map(e=>e.id===t?{...e,...i}:e)})}_reorderedNodeIds(e,t,i,n){const o=[...n],r=o.indexOf(e),s=o.indexOf(t);if(r<0||s<0||r===s)return;const[a]=o.splice(r,1);let l=r<s?s-1:s;return"after"===i&&(l+=1),o.splice(l,0,a),o}_commitNodeOrder(e){var t;const i=null!==(t=gt(this._config).nodes)&&void 0!==t?t:[],n=new Map(i.map(e=>[e.id,e])),o=e.map(e=>n.get(e)).filter(e=>Boolean(e)),r=i.filter(t=>!e.includes(t.id));this._patchConfig({nodes:[...o,...r]})}_handleNodePointerDown(e,t){var i,n,o;0===e.button&&(e.preventDefault(),e.stopPropagation(),this._draggedNode=t,this._dragPointerId=e.pointerId,this._dragInsertSide=void 0,this._dragInsertTarget=void 0,this._dragOverNode=void 0,this._dragPreviewOrder=(null!==(i=this._config.nodes)&&void 0!==i?i:[]).map(e=>e.id),null===(n=e.currentTarget)||void 0===n||null===(o=n.setPointerCapture)||void 0===o||o.call(n,e.pointerId))}_clearNodeDragState(){this._draggedNode=void 0,this._dragPointerId=void 0,this._dragOverNode=void 0,this._dragInsertTarget=void 0,this._dragInsertSide=void 0,this._dragPreviewOrder=void 0}_removeNode(e){const t=gt(this._config);if(this._selectedNode===e&&(this._selectedNode=void 0),this._nodeSectionOpen[e]){const t={...this._nodeSectionOpen};delete t[e],this._nodeSectionOpen=t}this._patchConfig(qt(t,e))}_handleNodeSectionToggle(e,t,i){var n;const o=e.currentTarget;o&&(this._nodeSectionOpen={...this._nodeSectionOpen,[t]:{...null!==(n=this._nodeSectionOpen[t])&&void 0!==n?n:{},[i]:o.open}})}_isNodeSectionOpen(e,t,i,n={}){var o;const r=null===(o=this._nodeSectionOpen[e.id])||void 0===o?void 0:o[t];return void 0!==r?r:!!n.forceOpen||this._defaultNodeSectionOpen(e,t,i)}_defaultNodeSectionOpen(e,t,i){return"appearance"===t}_patchConfig(e){this._config=gt({...this._config,...e}),si(this,this._config)}};(ci=ji).properties={config:{attribute:!1},_config:{state:!0},_dragInsertSide:{state:!0},_dragInsertTarget:{state:!0},_dragPreviewOrder:{state:!0},_dragOverNode:{state:!0},_draggedNode:{state:!0},_selectedNode:{state:!0},hass:{attribute:!1}},ci.styles=d`
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

    .flow-options-list {
      border-top: 1px solid var(--divider-color, rgb(127 127 127 / 0.2));
      display: grid;
      margin-top: 2px;
    }

    .flow-option-row {
      align-items: end;
      background: color-mix(
        in srgb,
        var(--secondary-text-color, #536057) 4%,
        transparent
      );
      border-bottom: 1px solid var(--divider-color, rgb(127 127 127 / 0.2));
      display: grid;
      gap: 10px;
      grid-template-columns: minmax(0, 1fr) minmax(130px, 0.72fr);
      min-height: 54px;
      padding: 7px 8px;
      transition: background-color 120ms ease, opacity 120ms ease;
    }

    .flow-option-row:not(.is-enabled) {
      opacity: 0.62;
    }

    .flow-option-row.is-enabled {
      background: color-mix(in srgb, var(--primary-color, #03a9f4) 5%, transparent);
    }

    .flow-option-row .checkbox-field {
      min-height: 36px;
    }

    .flow-option-setting,
    .flow-option-empty {
      min-width: 0;
    }

    .flow-option-empty {
      min-height: 36px;
    }

    @media (max-width: 430px) {
      .flow-option-row {
        grid-template-columns: minmax(0, 1fr) minmax(112px, 0.72fr);
      }
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
  `,customElements.get("home-flow-card-editor")||customElements.define("home-flow-card-editor",ji);
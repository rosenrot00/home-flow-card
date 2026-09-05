var t,e,i,n,o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=/* @__PURE__ */new WeakMap,l=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}},d=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new l(i,t,s)},h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:u,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:_,getPrototypeOf:v}=Object,m=globalThis,g=m.trustedTypes,y=g?g.emptyScript:"",b=m.reactiveElementPolyfillSupport,x=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!c(t,e),k={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:w};null!==(e=(t=Symbol).metadata)&&void 0!==e||(t.metadata=Symbol("metadata")),null!==(i=m.litPropertyMetadata)&&void 0!==i||(m.litPropertyMetadata=/* @__PURE__ */new WeakMap);var A,L=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),(null!==(e=this.l)&&void 0!==e?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&u(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){var n;const{get:o,set:r}=null!==(n=p(this.prototype,t))&&void 0!==n?n:{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const n=null==o?void 0:o.call(this);null==r||r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return null!==(e=this.elementProperties.get(t))&&void 0!==e?e:k}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=v(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,e=[...f(t),..._(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=/* @__PURE__ */new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=/* @__PURE__ */new Map,this._$E_(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$EO)&&void 0!==e?e:this._$EO=/* @__PURE__ */new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$EO)||void 0===e||e.delete(t)}_$E_(){const t=/* @__PURE__ */new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=o.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(e,this.constructor.elementStyles),e}connectedCallback(){var t,e;null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$EO)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$EO)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){var o;const r=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){var o,r,s;const t=i.getPropertyOptions(n),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:$;this._$Em=n;const l=a.fromAttribute(e,t.type);this[n]=null!==(r=null!=l?l:null===(s=this._$Ej)||void 0===s?void 0:s.get(n))&&void 0!==r?r:l,this._$Em=null}}requestUpdate(t,e,i,n=!1,o){if(void 0!==t){var r,s,a;const l=this.constructor;if(!1===n&&(o=this[t]),null!==(r=i)&&void 0!==r||(i=l.getPropertyOptions(t)),!((null!==(s=i.hasChanged)&&void 0!==s?s:w)(o,e)||i.useDefault&&i.reflect&&o===(null===(a=this._$Ej)||void 0===a?void 0:a.get(t))&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},r){var s,a,l;i&&!(null!==(s=this._$Ej)&&void 0!==s?s:this._$Ej=/* @__PURE__ */new Map).has(t)&&(this._$Ej.set(t,null!==(a=null!=r?r:e)&&void 0!==a?a:this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(null!==(l=this._$Eq)&&void 0!==l?l:this._$Eq=/* @__PURE__ */new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var t;if(null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1;const i=this._$AL;try{var n;e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(n=this._$EO)||void 0===n||n.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$EO)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=/* @__PURE__ */new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[x("elementProperties")]=/* @__PURE__ */new Map,L[x("finalized")]=/* @__PURE__ */new Map,null==b||b({ReactiveElement:L}),(null!==(n=m.reactiveElementVersions)&&void 0!==n?n:m.reactiveElementVersions=[]).push("2.1.2");var M=globalThis,P=t=>t,C=M.trustedTypes,N=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,I="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+S,E=`<${j}>`,V=document,O=()=>V.createComment(""),F=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,T=t=>D(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),R="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,z=/>/g,U=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,G=/"/g,X=/^(?:script|style|textarea|title)$/i,W=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Y=W(1),q=W(2),K=(W(3),Symbol.for("lit-noChange")),Z=Symbol.for("lit-nothing"),Q=/* @__PURE__ */new WeakMap,tt=V.createTreeWalker(V,129);function et(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==N?N.createHTML(e):e}var it=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":3===e?"<math>":"",s=B;for(let l=0;l<i;l++){var a;const e=t[l];let i,d,h=-1,c=0;for(;c<e.length&&(s.lastIndex=c,d=s.exec(e),null!==d);)c=s.lastIndex,s===B?"!--"===d[1]?s=J:void 0!==d[1]?s=z:void 0!==d[2]?(X.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=U):void 0!==d[3]&&(s=U):s===U?">"===d[0]?(s=null!==(a=o)&&void 0!==a?a:B,h=-1):void 0===d[1]?h=-2:(h=s.lastIndex-d[2].length,i=d[1],s=void 0===d[3]?U:'"'===d[3]?G:H):s===G||s===H?s=U:s===J||s===z?s=B:(s=U,o=void 0);const u=s===U&&t[l+1].startsWith("/>")?" ":"";r+=s===B?e+E:h>=0?(n.push(i),e.slice(0,h)+I+e.slice(h)+S+u):e+S+(-2===h?l:u)}return[et(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]},nt=class t{constructor({strings:e,_$litType$:i},n){let o;this.parts=[];let r=0,s=0;const a=e.length-1,l=this.parts,[d,h]=it(e,i);if(this.el=t.createElement(d,n),tt.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=tt.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(I)){const e=h[s++],i=o.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?lt:"?"===n[1]?dt:"@"===n[1]?ht:at}),o.removeAttribute(t)}else t.startsWith(S)&&(l.push({type:6,index:r}),o.removeAttribute(t));if(X.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],O()),tt.nextNode(),l.push({type:2,index:++r});o.append(t[e],O())}}}else if(8===o.nodeType)if(o.data===j)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)l.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=V.createElement("template");return i.innerHTML=t,i}};function ot(t,e,i=t,n){var o,r,s;if(e===K)return e;let a=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const l=F(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null==a||null===(r=a._$AO)||void 0===r||r.call(a,!1),void 0===l?a=void 0:(a=new l(t),a._$AT(t,i,n)),void 0!==n?(null!==(s=i._$Co)&&void 0!==s?s:i._$Co=[])[n]=a:i._$Cl=a),void 0!==a&&(e=ot(t,a._$AS(t,e.values),a,n)),e}var rt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:V).importNode(i,!0);tt.currentNode=o;let r=tt.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new st(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new ct(r,this,t)),this._$AV.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(r=tt.nextNode(),s++)}return tt.currentNode=V,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},st=class t{get _$AU(){var t,e;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cv}constructor(t,e,i,n){var o;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),F(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):T(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=nt.createElement(et(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(i);else{const t=new rt(o,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new nt(t)),e}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const r of e)o===i.length?i.push(n=new t(this.O(O()),this.O(O()),this,this.options)):n=i[o],n._$AI(r),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t!==this._$AB;){const e=P(t).nextSibling;P(t).remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},at=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(/* @__PURE__ */new String),this.strings=i):this._$AH=Z}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=ot(this,t,e,0),r=!F(t)||t!==this._$AH&&t!==K,r&&(this._$AH=t);else{var s;const n=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=ot(this,n[i+a],e,a),l===K&&(l=this._$AH[a]),r||(r=!F(l)||l!==this._$AH[a]),l===Z?t=Z:t!==Z&&(t+=(null!==(s=l)&&void 0!==s?s:"")+o[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},lt=class extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}},dt=class extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}},ht=class extends at{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=ot(this,t,e,0))&&void 0!==i?i:Z)===K)return;const n=this._$AH,o=t===Z&&n!==Z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==Z&&(n===Z||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}},ct=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}},ut={M:I,P:S,A:j,C:1,L:it,R:rt,D:T,V:ot,I:st,H:at,N:dt,U:ht,B:lt,F:ct},pt=M.litHtmlPolyfillSupport;null==pt||pt(nt,st),(null!==(A=M.litHtmlVersions)&&void 0!==A?A:M.litHtmlVersions=[]).push("3.3.2");var ft,_t,vt=globalThis,mt=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=o._$litPart$;if(void 0===r){var s;const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new st(e.insertBefore(O(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return K}};mt._$litElement$=!0,mt.finalized=!0,null===(ft=vt.litElementHydrateSupport)||void 0===ft||ft.call(vt,{LitElement:mt});var gt=vt.litElementPolyfillSupport;null==gt||gt({LitElement:mt}),(null!==(_t=vt.litElementVersions)&&void 0!==_t?_t:vt.litElementVersions=[]).push("4.2.2");var yt=(t,e,i)=>Math.min(Math.max(t,e),i);function bt(t,e,i){return{x:Number((t.x+Math.cos(i)*e).toFixed(2)),y:Number((t.y+Math.sin(i)*e).toFixed(2))}}function xt(t,e,i){const n=i.x-e.x,o=i.y-e.y,r=n*n+o*o||1,s=yt(((t.x-e.x)*n+(t.y-e.y)*o)/r,0,1),a={x:e.x+n*s,y:e.y+o*s};return{distance:Math.hypot(t.x-a.x,t.y-a.y),point:a,t:s}}var $t=class{constructor(){this.metrics=/* @__PURE__ */new Map,this.font="400 27px Roboto, sans-serif",this.revision=0}setFont(t){return t!==this.font&&(this.font=t,this.clear(),!0)}clear(){this.metrics.clear(),this.revision+=1}measureMetrics(t){var e,i,n,o,r,s;const a=this.metrics.get(t);if(void 0!==a)return a;void 0===this.context&&(this.context=document.createElement("canvas").getContext("2d")),this.context&&(this.context.font=this.font,this.context.textAlign="center",this.context.textBaseline="alphabetic");const l=null===(e=this.context)||void 0===e?void 0:e.measureText(t),d=null!==(i=null==l?void 0:l.width)&&void 0!==i?i:13*t.length,h={width:d,left:null!==(n=null==l?void 0:l.actualBoundingBoxLeft)&&void 0!==n?n:d/2,right:null!==(o=null==l?void 0:l.actualBoundingBoxRight)&&void 0!==o?o:d/2,ascent:null!==(r=null==l?void 0:l.actualBoundingBoxAscent)&&void 0!==r?r:21.6,descent:null!==(s=null==l?void 0:l.actualBoundingBoxDescent)&&void 0!==s?s:5.4};return this.metrics.set(t,h),h}measure(t){return this.measureMetrics(t).width}measureLines(t){const e=t.map(t=>this.measureMetrics(t)),i=this.measureMetrics("Hg"),n=-i.ascent,o=31*Math.max(0,t.length-1)+i.descent,r=-(n+o)/2;return{width:Math.max(...e.map(t=>t.left+t.right),0),height:o-n,baselineOffset:r,inkTop:r+Math.min(...e.map((t,e)=>31*e-t.ascent)),inkBottom:r+Math.max(...e.map((t,e)=>31*e+t.descent)),lineOffsetsX:e.map(t=>(t.left-t.right)/2)}}};function wt(t,e,i,n,o=0,r=!1){var s;const a=(null!==(s=e.wrapOriginX)&&void 0!==s?s:e.x)+o,l="start"===e.textAnchor?i-28-a:"end"===e.textAnchor?a-28:2*Math.min(a-28,i-28-a),d=r?Math.min(i-56,Math.max(...t.split(/\s+/).map(t=>n.measure(t)))):0,h=Math.max(80,l,d);if(n.measure(t)<=h)return[t];const c=[];let u="";for(const p of t.split(/\s+/)){const t=u?`${u} ${p}`:p;if(n.measure(t)<=h){u=t;continue}if(u&&c.push(u),n.measure(p)<=h){u=p;continue}let e="";for(const i of p){const t=e+i;e&&n.measure(t)>h?(c.push(e),e=i):e=t}u=e}return u&&c.push(u),c.length>0?c:[t]}function kt(t,e){const i=new Set(e.flatMap(t=>[t.from,t.to])),n=/* @__PURE__ */new Map;for(const o of t){if("leaf"!==o.kind||i.has(o.id))continue;const e=t.filter(t=>t.stackIndex>o.stackIndex&&Math.hypot(t.point.x-o.point.x,t.point.y-o.point.y)<o.radius+t.radius).sort((t,e)=>t.stackIndex-e.stackIndex)[0];e&&n.set(o.id,e.id)}return n}function At(t,e){for(;e.has(t);)t=e.get(t);return t}var Lt=d`
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

`;function Mt(t,e,i){return(t.point.x-e.point.x)*i.x+(t.point.y-e.point.y)*i.y}var Pt=t=>{var e;return null!==(e=t.contributesToFlow)&&void 0!==e?e:"leaf"===t.kind},Ct=.5,Nt={leaf:"var(--home-flow-leaf-color, #c65b4a)",junction:"var(--home-flow-junction-1-color, #f6b73c)"},It=class{constructor(t,e,i,n){this.flowMinVisibleValue=t,this.flowMaxValue=e,this.links=i,this.junctionFlowColor=n,this.topologyKey="",this.busLimits=/* @__PURE__ */new Map,this.sideNodeIds=/* @__PURE__ */new Map}_prepareTopology(t,e){if(this.topologyNodes===t&&this.topologyLinks===e)return;this.topologyNodes=t,this.topologyLinks=e;const i=Object.values(t),n=JSON.stringify([i.map(t=>[t.id,t.kind,t.flowMinVisibleValue,t.flowMaxValue]),e.map(t=>[t.id,t.from,t.to])]);if(n===this.topologyKey)return;this.topologyKey=n,this.busLimits.clear(),this.sideNodeIds.clear();const o=new Map(i.map(t=>[t.id,[]]));for(const r of e)t[r.from]&&t[r.to]&&(o.get(r.from).push(r.to),o.get(r.to).push(r.from));for(const r of i){if(this.busLimits.has(r.id))continue;const t={},e=[r.id];this.busLimits.set(r.id,t);for(let i=0;i<e.length;i++)for(const n of o.get(e[i]))this.busLimits.has(n)||(this.busLimits.set(n,t),e.push(n))}for(const r of i){if("junction"!==r.kind)continue;const t=this.busLimits.get(r.id);for(const e of["flowMinVisibleValue","flowMaxValue"])void 0===t[e]&&Number.isFinite(r[e])&&(t[e]=r[e])}}signedValue(t,e,i=this.links,n){return this._linkSignedValue(t,e,i,n)}nodeFlowValue(t){return this._nodeFlowValue(t)}sourceParts(t,e,i,n,o){return this._linkSourceParts(t,e,i,n,o)}color(t,e,i,n,o){return this._linkColor(t,e,i,n,o)}nodeColor(t,e,i,n){return this._nodeColorCached(t,e,i,n)}showsFlow(t,e){return this._shouldShowFlow(t,e)}width(t,e,i){return this._flowWidth(t,e,i)}linkMinValue(t,e,i=this.links){return this._linkMinVisibleValue(t,e,i)}linkMaxValue(t,e,i,n=this.links){return this._linkMaxValue(t,e,i,n)}primaryValue(t,e,i){return this._nodePrimaryValue(t,e,i)}displayValue(t,e,i){return this._nodeDisplayValue(t,e,i)}hasFlowArrow(t){return this._hasNodeFlowArrow(t)}_linkSignedValue(t,e,i=this.links,n){if(Number.isFinite(t.value))return Number(t.value);const o=e[t.from],r=e[t.to];return"leaf"===(null==o?void 0:o.kind)?this._nodeFlowValue(o):"leaf"===(null==r?void 0:r.kind)?-this._nodeFlowValue(r):"junction"===(null==o?void 0:o.kind)&&"junction"===(null==r?void 0:r.kind)?this._derivedJunctionLinkValue(t,o,r,e,i,n):0}_nodeFlowValue(t){return Number.isFinite(t.flowValue)?Number(t.flowValue):t.value}_derivedJunctionLinkValue(t,e,i,n,o,r){const s=this._nodeIdsOnSideOfLinkCached(t,e.id,i.id,n,o,r);if(!s||s.has(i.id))return 0;let a=0;const l=Array.from(s).reduce((t,e)=>{const i=n[e];return i&&Pt(i)?(a+=1,t+this._nodeFlowValue(i)):t},0);return a>0?l:0}_linkSourceParts(t,e,i,n,o){if(t.color||Math.abs(n)<=Ct)return;const r=function(t){const e=/* @__PURE__ */new Map;for(const i of t){const t=e.get(i.color);t?t.amount+=i.amount:e.set(i.color,{...i})}return Array.from(e.values())}(this._linkFlowSources(t,e,i,n,o));if(0===r.length)return;const s=r.reduce((t,e)=>t+e.amount,0);if(s<=Ct)return;let a=0;return function(t){if(t.length<=1)return t;const e=[];let i=0;for(const r of t)r.length<1?i+=r.length:e.push({...r});if(e.length===t.length)return t;if(0===e.length)return[{...t.reduce((t,e)=>e.length>t.length?e:t),length:18,start:0}];const n=e.reduce((t,i,n)=>i.length>e[t].length?n:t,0);e[n]={...e[n],length:e[n].length+i};let o=0;return e.map((t,i)=>{const n=i===e.length-1?18-o:t.length,r={...t,length:n,start:o};return o+=n,r})}(r.map((t,e)=>{const i=e===r.length-1?18-a:t.amount/s*18,n={color:t.color,key:t.key,length:i,start:a};return a+=i,n}))}_linkFlowSources(t,e,i,n,o){const r=e.nodes,s=r[t.from],a=r[t.to];if(!s||!a)return[];const l=n>=0?t.from:t.to,d=n>=0?t.to:t.from,h=this._nodeIdsOnSideOfLinkCached(t,l,d,r,i,o);if(!h||h.has(d))return[];const c=r[l],u=r[d],p=function(t,e){const i=e.point.x-t.point.x,n=e.point.y-t.point.y,o=Math.hypot(i,n)||1;return{x:i/o,y:n/o}}(c,u);return Array.from(h).map(t=>r[t]).filter(t=>Boolean(t)).filter(t=>Pt(t)).map(t=>({amount:this._nodeFlowValue(t),color:this._nodeColorCached(t,e,i,o),key:t.id,node:t})).filter(t=>t.amount>Ct).sort((t,e)=>Mt(t.node,c,p)-Mt(e.node,c,p)||t.key.localeCompare(e.key))}_nodeIdsOnSideOfLinkCached(t,e,i,n,o,r){this._prepareTopology(n,o);const s=`${t.id}|${e}|${i}`;return this.sideNodeIds.has(s)||this.sideNodeIds.set(s,function(t,e,i,n,o){if(!n[e]||!n[i])return;const r=/* @__PURE__ */new Set,s=[e],a=e=>e.id===t.id||e.from===t.from&&e.to===t.to||e.from===t.to&&e.to===t.from;for(;s.length>0;){const t=s.shift();if(t&&!r.has(t)){r.add(t);for(const e of o){if(a(e))continue;if(e.from!==t&&e.to!==t)continue;const i=e.from===t?e.to:e.from;!r.has(i)&&n[i]&&s.push(i)}}}return r}(t,e,i,n,o)),this.sideNodeIds.get(s)}_linkColor(t,e,i,n=this._linkSignedValue(t,e.nodes,i),o){const r=e.nodes;if(t.color)return t.color;const s=r[t.from],a=r[t.to],l=n>=0?s:a;return l?this._nodeColorCached(l,e,i,o):Nt.junction}_nodeColorCached(t,e,i,n){if(!n)return this._nodeColor(t,e,i);const o=n.nodeColors.get(t.id);if(o)return o;const r=this._nodeColor(t,e,i);return n.nodeColors.set(t.id,r),r}_nodeColor(t,e,i,n=/* @__PURE__ */new Set){var o;if(t.color)return t.color;if("leaf"!==t.kind)return this._nonLeafColor(t,e);const r=e&&i?this._attachedLeafColor(t,e,i):void 0;if(r)return r;return(e&&i?this._overlappingUnlinkedLeafColor(t,e,i,new Set(n).add(t.id)):void 0)||("mdi:solar-power"===t.icon?"var(--energy-solar-color, #d6a500)":(null===(o=t.icon)||void 0===o?void 0:o.startsWith("mdi:battery"))?"var(--energy-battery-discharge-color, #3f79c9)":Nt.leaf)}_nodeDirectColor(t,e,i){var n;if(t.color)return t.color;if("leaf"!==t.kind)return this._nonLeafColor(t,e);return(e&&i?this._attachedLeafColor(t,e,i):void 0)||("mdi:solar-power"===t.icon?"var(--energy-solar-color, #d6a500)":(null===(n=t.icon)||void 0===n?void 0:n.startsWith("mdi:battery"))?"var(--energy-battery-discharge-color, #3f79c9)":Nt.leaf)}_attachedLeafColor(t,e,i){const n=i.filter(e=>e.from===t.id||e.to===t.id).map(i=>e.nodes[i.from===t.id?i.to:i.from]).filter(t=>Boolean(t)).find(t=>"junction"===t.kind);if(n)return this.junctionFlowColor(n.id,e.nodes)}_overlappingUnlinkedLeafColor(t,e,i,n=/* @__PURE__ */new Set){if(i.some(e=>e.from===t.id||e.to===t.id))return;const o=Object.values(e.nodes).filter(e=>e.id!==t.id).map(e=>({node:e,distance:Math.hypot(e.point.x-t.point.x,e.point.y-t.point.y)})).filter(({node:e,distance:i})=>i<e.radius+t.radius).sort((t,e)=>t.distance-e.distance).map(({node:t})=>t);let r;for(const s of o){if("leaf"!==s.kind)return this._nonLeafColor(s,e);const t=this._attachedLeafColor(s,e,i);if(t)return t;if(!n.has(s.id)){const t=this._overlappingUnlinkedLeafColor(s,e,i,new Set(n).add(s.id));if(t)return t}r||(r=this._nodeDirectColor(s,e,i))}return r}_nonLeafColor(t,e){return t.color?t.color:"junction"===t.kind&&e?this.junctionFlowColor(t.id,e.nodes):Nt[t.kind]}_shouldShowFlow(t,e=this._flowMinVisibleValue()){return function(t,e){const i=Math.abs(t);return i>.5&&i>=Math.max(0,e)}(t,e)}_flowWidth(t,e=this._flowMinVisibleValue(),i=this._flowMaxValue(e)){return function(t,e,i){const n=yt((Math.abs(t)-e)/(i-e),0,1);return 2.4+11.6*Math.pow(n,1.15)}(t,e,i)}_flowMinVisibleValue(){return Math.max(0,Number.isFinite(this.flowMinVisibleValue)?this.flowMinVisibleValue:10)}_flowMaxValue(t=this._flowMinVisibleValue()){const e=Number.isFinite(this.flowMaxValue)?this.flowMaxValue:12e3;return Math.max(e,t+1)}_linkMinVisibleValue(t,e,i=this.links){var n;return Math.max(0,Number.isFinite(t.flowMinVisibleValue)?Number(t.flowMinVisibleValue):null!==(n=this._junctionFlowMinVisibleValue(t,e,i))&&void 0!==n?n:this._flowMinVisibleValue())}_linkMaxValue(t,e=this._linkMinVisibleValue(t),i,n=this.links){var o;const r=Number.isFinite(t.flowMaxValue)?Number(t.flowMaxValue):null!==(o=this._junctionFlowMaxValue(t,i,n))&&void 0!==o?o:this._flowMaxValue(e);return Math.max(r,e+1)}_junctionFlowMinVisibleValue(t,e,i){var n;if(e)return this._prepareTopology(e,i),null===(n=this.busLimits.get(t.from))||void 0===n?void 0:n.flowMinVisibleValue}_junctionFlowMaxValue(t,e,i){var n;if(e)return this._prepareTopology(e,i),null===(n=this.busLimits.get(t.from))||void 0===n?void 0:n.flowMaxValue}_nodePrimaryValue(t,e,i){if(t.displayValue)return t.displayValue;const n=this._nodeDisplayValue(t,e,i);return this._isBatteryValueNode(t)?this._formatNodeValue(Math.abs(n),t):this._formatNodeValue(n,t)}_nodeDisplayValue(t,e,i){var n;return"junction"!==t.kind||t.hasOwnValue?t.value:null!==(n=this._junctionDisplayFlowValue(t,e.nodes,i))&&void 0!==n?n:t.value}_junctionDisplayFlowValue(t,e,i){var n;let o=0,r=0,s=0;if(i.forEach(n=>{const a=this._linkFlowRelativeToNode(n,t.id,e,i);void 0!==a&&(s+=1,a>=0?o+=a:r+=Math.abs(a))}),0!==s)switch(null!==(n=t.junctionDisplayMode)&&void 0!==n?n:"incoming"){case"outgoing":return r;case"net":return o-r;default:return o}}_linkFlowRelativeToNode(t,e,i,n){if(t.from!==e&&t.to!==e)return;const o=i[t.from===e?t.to:t.from];if("leaf"===(null==o?void 0:o.kind)&&!Pt(o))return;const r=this._linkSignedValue(t,i,n);return Number.isFinite(r)?t.to===e?r:-r:void 0}_hasNodeFlowArrow(t){return!0===t.showFlowArrow&&Math.abs(this._nodeFlowValue(t))>Ct}_isBatteryValueNode(t){return"leaf"===t.kind&&void 0!==t.secondary&&this._isBatteryIcon(t.icon)}_isBatteryIcon(t){return!0===(null==t?void 0:t.startsWith("mdi:battery"))}_formatNodeValue(t,e){var i;const n=null===(i=e.unit)||void 0===i?void 0:i.trim();return n&&"W"!==n&&"kW"!==n&&"MW"!==n?`${this._formatNumber(Math.abs(t))} ${n}`:this._formatPower(t)}_formatPower(t){const e=Math.abs(t);return e>=1e3?`${this._formatNumber(e/1e3)} kW`:`${Math.round(e).toLocaleString("en-US")} W`}_formatNumber(t){return t.toLocaleString("en-US",{maximumFractionDigits:t>=100?0:1})}},St=/* @__PURE__ */new Map,jt=/* @__PURE__ */new Map,Et=t=>new Promise(e=>window.setTimeout(e,t)),Vt=[500,1500];async function Ot(t){const e=performance.now()+3e3;for(;!customElements.get("ha-icon");){if(performance.now()>=e)return null;await Et(25)}const i=document.createElement("ha-icon");i.icon=t,i.setAttribute("icon",t),Object.assign(i.style,{height:"24px",left:"-10000px",pointerEvents:"none",position:"fixed",top:"-10000px",visibility:"hidden",width:"24px"}),document.body.append(i);try{const t=performance.now()+5e3;for(;performance.now()<t;){var n,o;await i.updateComplete;const t=null===(n=i.shadowRoot)||void 0===n?void 0:n.querySelector("ha-svg-icon"),e=null!==(o=null==t?void 0:t.path)&&void 0!==o?o:i._path;var r,s,a,l;if(e)return{path:e,secondaryPath:null!==(r=null!==(s=null==t?void 0:t.secondaryPath)&&void 0!==s?s:i._secondaryPath)&&void 0!==r?r:void 0,viewBox:null!==(a=null!==(l=null==t?void 0:t.viewBox)&&void 0!==l?l:i._viewBox)&&void 0!==a?a:"0 0 24 24"};await Et(25)}return null}finally{i.remove()}}var Ft=class{constructor(t){this.host=t,this.labelLayoutKey="",this.labelLayouts=/* @__PURE__ */new Map}prepareLabelLayout(t,e){const i=JSON.stringify([this.host.labelStyle,this.host._straightLabelGap,this.host._graphOffsetX,this.host._labelTextMeasurer.revision,Object.values(t.nodes).map(t=>[t.id,t.kind,t.point.x,t.point.y,t.radius,t.label,t.labelOffsetX,t.labelOffsetY]),e.map(t=>[t.id,t.from,t.to,t.fromAnchor,t.toAnchor,t.fromAnchorMode,t.toAnchorMode])]);i!==this.labelLayoutKey&&(this.labelLayoutKey=i,this.labelLayouts.clear())}straightLabelLayout(t,e,i){let n=this.labelLayouts.get(t.id);if(!n){const o=this._nodeStraightLabelPoint(t,e,i),r=wt(t.label.trim(),o,986,this.host._labelTextMeasurer,this.host._graphOffsetX,"radial"===o.className);n={point:o,lines:r,...this.host._labelTextMeasurer.measureLines(r)},this.labelLayouts.set(t.id,n)}return n}render(t,e,i,n,o){return this._renderNodeLayer(t,e,i,n,o)}straightLabelPoint(t,e,i){return this.straightLabelLayout(t,e,i).point}curvedLabelHandlePoint(t,e,i){return this._nodeCurvedLabelHandlePoint(t,e,i)}_renderNodeLayer(t,e,i,n,o){return q`
      ${this._renderNodeShell(t,e,n,o)}
      ${this._renderNodeBusCover(t,e,i,n,o)}
      ${this._renderNodeOverlay(t,e,n,o)}
    `}_renderNodeOverlay(t,e,i,n){return q`
      ${this._renderNodeContent(t,e,i,n)}
      ${this._renderNodeLabel(t,e,i)}
      ${this._renderLabelHandle(t,e,i)}
      ${this.host.editable?q`
            <g
              class="node-hit-layer"
              transform=${`translate(${t.point.x} ${t.point.y})`}
            >
              <circle
                class="hit-area node-hit-proxy"
                r=${t.radius+18}
                @pointerdown=${e=>this.host._startNodeDrag(e,t)}
              />
            </g>
          `:Z}
    `}_renderNodeBusCover(t,e,i,n,o){return this._shouldBusStayBehindNode(t,i,e.nodes,o)?q`
      <g
        class="node-bus-cover"
        transform=${`translate(${t.point.x} ${t.point.y})`}
        aria-hidden="true"
      >
        <circle
          class="node-bg bus-cover"
          r=${t.radius}
          stroke=${this.host._nodeColorCached(t,e,n,o)}
          stroke-width=${"junction"===t.kind?4:2.5}
        />
      </g>
    `:Z}_shouldBusStayBehindNode(t,e,i,n){return"junction"===t.kind&&!this._isWrappedJunction(t,e,i,n)&&e.filter(e=>(e.from===t.id||e.to===t.id)&&this.host._isJunctionJunctionLink(e,i)).length<=1}_isWrappedJunction(t,e,i,n){return e.some(o=>{if(!this.host._isJunctionJunctionLink(o,i))return!1;const r=this.host._junctionJoinGeometry(o,i,e,n);return(null==r?void 0:r.middleId)===t.id})}_renderNodeShell(t,e,i,n){return q`
      <g
        class=${`node ${t.kind}-node ${!this.host.editable&&t.primaryAction?"actionable":""} ${this.host.activeNode===t.id?"dragging":""} ${this.host.selectedNode===t.id?"selected":""}`}
        transform=${`translate(${t.point.x} ${t.point.y})`}
        tabindex=${this.host.editable||t.primaryAction?0:-1}
        role=${!this.host.editable&&t.primaryAction?"button":Z}
        aria-label=${!this.host.editable&&t.primaryAction?`${t.label} ${this.host._nodeActionLabel(t.primaryAction)}`:t.label}
        @pointerdown=${this.host.editable?e=>this.host._startNodeDrag(e,t):void 0}
        @click=${!this.host.editable&&t.primaryAction?e=>this.host._emitNodeAction(t.primaryAction,e):void 0}
        @keydown=${!this.host.editable&&t.primaryAction?e=>this.host._handleNodeActionKeydown(e,t.primaryAction):void 0}
      >
        <circle
          class="node-bg"
          r=${t.radius}
          stroke=${this.host._nodeColorCached(t,e,i,n)}
          stroke-width=${"junction"===t.kind?4:2.5}
        />
        <circle class="hit-area" r=${t.radius+18} />
      </g>
    `}_renderNodeContent(t,e,i,n){var o,r,s;const a=Boolean(t.icon||t.secondaryIcon),l=void 0!==t.secondary,d=this.host._nodeDisplayValue(t,e,i),h=!this._shouldHideNodeValue(t,d),c=l&&!this._shouldHideNodeValue(t,null!==(o=t.secondary)&&void 0!==o?o:0),u=this.host._nodePrimaryValue(t,e,i),p=h?this._nodeTextLines(u,t):[],f=c?this._nodeTextLines(null!==(r=t.secondaryDisplayValue)&&void 0!==r?r:`${Math.round(null!==(s=t.secondary)&&void 0!==s?s:0)}%`,t):[],_=!a,v=p.length>0,m=f.length>0,g=this._nodePrimaryTextY(t,a,l,v,m),y=this._nodeSecondaryTextY(t,a,l,v,m),b=this._activeHighlightClass(t,e,i),x=t.highlightWhenActive?`--home-flow-node-active-color:${this.host._nodeColorCached(t,e,i,n)};`:"";return q`
      <g
        class=${`node-content ${t.kind}-content`}
        transform=${`translate(${t.point.x} ${t.point.y})`}
        style=${x||Z}
      >
        ${a?this._renderNodeIcons(t,b):Z}
        ${this._renderNodeFlowArrow(t,b)}
        ${p.length>0?this._renderTextLines(`${this._textLineClass("node-value",p,t)} ${b}`.trim(),p,g,t,0,_):Z}
        ${f.length>0?this._renderTextLines(`${this._textLineClass("node-secondary",f,t)} ${b}`.trim(),f,y,t,0,_):Z}
        ${f.length>0?this._renderSecondaryActionHitArea(t,f,y):Z}
      </g>
    `}_activeHighlightClass(t,e,i){var n;if(!t.highlightWhenActive)return"";const o=Math.abs(this.host._nodeDisplayValue(t,e,i)),r=Math.max(0,null!==(n=t.activeFrom)&&void 0!==n?n:1);return"node-active-target "+(o>0&&o>=r?"is-active":"is-inactive")}_nodePrimaryTextY(t,e,i,n,o){return e?n?"leaf"===t.kind?i?this._radiusLerp(t.radius,-20,-30):this._radiusLerp(t.radius,-18,-28):i?this._radiusLerp(t.radius,-28,-42):this._radiusLerp(t.radius,-22,-34):0:o&&n?this._radiusLerp(t.radius,-12,-18):0}_nodeSecondaryTextY(t,e,i,n,o){return e?o?"leaf"===t.kind?this._radiusLerp(t.radius,34,47):this._radiusLerp(t.radius,27,40):0:n&&o?this._radiusLerp(t.radius,12,18):0}_renderNodeLabel(t,e,i){const n=t.label.trim();if(!n)return Z;if("straight"===this.host.labelStyle){const{point:n,lines:o,baselineOffset:r,lineOffsetsX:s}=this.straightLabelLayout(t,e,i),a=31,l=n.y+r;return q`
        <text
          class=${`node-label node-label-straight ${n.className}`}
          x=${n.x}
          y=${l}
          text-anchor=${n.textAnchor}
          dominant-baseline="alphabetic"
        >
          ${o.map((t,e)=>q`
              <tspan
                x=${n.x+s[e]}
                y=${l+e*a}
              >${t}</tspan>
            `)}
        </text>
      `}const o=this._nodeLabelArc(t,e,i);return q`
      <path id=${o.id} class="node-label-path" d=${o.path} />
      <text class="node-label node-label-curved">
        <textPath href=${`#${o.id}`} startOffset="50%">
          ${n}
        </textPath>
      </text>
    `}_renderLabelHandle(t,e,i){if(!this.host.editable||this.host.selectedNode!==t.id||!t.label.trim())return Z;const n="straight"===this.host.labelStyle?this.straightLabelLayout(t,e,i).point:this._nodeCurvedLabelHandlePoint(t,e,i);return q`
      <g class="label-handle">
        <circle
          class="label-handle-hit"
          cx=${n.x}
          cy=${n.y}
          r="14"
          @pointerdown=${n=>this.host._startLabelDrag(n,t,e,i)}
        />
        <circle class="label-handle-dot" cx=${n.x} cy=${n.y} r="4.5" />
      </g>
    `}_nodeLabelArc(t,e,i){const n=this._nodeLabelAngle(t,e,i),o=this._nodeLabelRadius(t),r="junction"===t.kind?16:15,s=yt((t.label.length*r+36)/o,1.35,.92*Math.PI),a=Math.sin(n)>0,l=a?n+s/2:n-s/2,d=a?n-s/2:n+s/2,h=bt(t.point,o,l),c=bt(t.point,o,d),u=a?0:1,p=t.id.replace(/[^a-z0-9_-]/gi,"-");return{id:`home-flow-label-${this.host.graphInstanceId}-${p}`,path:`M ${h.x} ${h.y} A ${o} ${o} 0 0 ${u} ${c.x} ${c.y}`}}_nodeStraightLabelPoint(t,e,i){const n=t.labelOffsetX,o=t.labelOffsetY;return void 0!==n||void 0!==o?{x:t.point.x+(null!=n?n:0),y:t.point.y+(null!=o?o:0),textAnchor:"middle",baseline:"middle",className:"manual"}:this._nodeAutoStraightLabelPoint(t,e,i)}_nodeAutoStraightLabelPoint(t,e,i){const n=this._nodeLabelAnchorIndex(t,e,i),o=this.host._anchorAngle(n),r=t.label.trim(),s=this.host._labelTextMeasurer,a=t.radius+("junction"===t.kind?2:1.25);let l=[r],d=bt(t.point,a+this.host._straightLabelGap+s.measureLines(l).height/2,o);for(let h=0;h<3;h+=1){const e=s.measureLines(l),i=this._straightLabelCenterRadius(o,e.width/2,e.height/2,a+this.host._straightLabelGap);d=bt(t.point,i,o);const n=Math.min(e.width/2,465),h=Math.min(958-n-this.host._graphOffsetX,Math.max(28+n-this.host._graphOffsetX,d.x));if(h!==d.x){const i=Math.max(Math.abs(h-t.point.x)-e.width/2,0),n=a+this.host._straightLabelGap,o=e.height/2+Math.sqrt(Math.max(0,n**2-i**2)),r=d.y<t.point.y?-1:1;d={x:h,y:t.point.y+r*Math.max(Math.abs(d.y-t.point.y),o),wrapOriginX:d.x}}const c=wt(r,{x:d.x,y:d.y,wrapOriginX:d.wrapOriginX,textAnchor:"middle",baseline:"central",className:"radial"},986,this.host._labelTextMeasurer,this.host._graphOffsetX,!0);if(c.join("\n")===l.join("\n"))break;l=c}return{x:d.x,y:d.y,wrapOriginX:d.wrapOriginX,textAnchor:"middle",baseline:"central",className:"radial"}}_straightLabelCenterRadius(t,e,i,n){const o=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t));let s=n,a=n+e+i;for(let l=0;l<18;l+=1){const t=(s+a)/2,l=Math.max(t*o-e,0),d=Math.max(t*r-i,0);Math.hypot(l,d)<n?s=t:a=t}return a}_nodeLabelAngle(t,e,i){var n;return null!==(n=t.labelAngle)&&void 0!==n?n:this.host._anchorAngle(this._nodeLabelAnchorIndex(t,e,i))}_nodeLabelRadius(t){return t.radius+("junction"===t.kind?this._radiusLerp(t.radius,24,18):this._radiusLerp(t.radius,19,15))}_nodeCurvedLabelHandlePoint(t,e,i){const n=this._nodeLabelAngle(t,e,i),o=t.radius+("junction"===t.kind?this._radiusLerp(t.radius,24,18):this._radiusLerp(t.radius,19,15));return bt(t.point,o,n)}_nodeLabelAnchorIndex(t,e,i){const n=[...i.filter(e=>e.from===t.id||e.to===t.id).map(i=>this._connectionAnchorIndex(t,i,e)).filter(t=>void 0!==t),...this._nearbyNodeAnchorIndices(t,e)];if(0===n.length)return 16;let o=0,r=Number.NEGATIVE_INFINITY;for(let s=0;s<32;s+=1){const t=Math.min(...n.map(t=>this._circularAnchorDistance(s,t)));if(t<3)continue;const e=this.host._anchorAngle(s),i=10*Math.abs(Math.sin(e)),a=4*Math.abs(Math.cos(e)),l=.75*t+i+(Math.sin(e)>0?1:0)-a;l>r&&(r=l,o=s)}return r===Number.NEGATIVE_INFINITY?16:o}_nearbyNodeAnchorIndices(t,e){return Object.values(e.nodes).filter(e=>e.id!==t.id).filter(e=>{const i=Math.hypot(e.point.x-t.point.x,e.point.y-t.point.y),n="junction"===t.kind?38:32;return i<t.radius+e.radius+n}).map(e=>this.host._nearestAnchorIndex(t,e.point))}_connectionAnchorIndex(t,e,i){const n=this.host._linkAnchor(e,t.id);if(void 0!==n)return this.host._normalizeAnchorIndex(n);const o=e.from===t.id?e.to:e.from,r=i.nodes[o];return r?this.host._nearestAnchorIndex(t,r.point):void 0}_circularAnchorDistance(t,e){const i=Math.abs(t-e);return Math.min(i,32-i)}_nodeTextLines(t,e){const i=46+4.5*Math.max(0,t.length-7);if(e.radius>=i)return[t];const n=t.match(/^(.+?)\s+([^\s]+(?:\s+[←→↑↓])?)$/);if(n)return[n[1],n[2]];const o=t.match(/^([-+]?\d+(?:[.,]\d+)?)([^\d\s].*?(?:\s+[←→↑↓])?)$/);return o?[o[1],o[2]]:[t]}_textLineClass(t,e,i){return e.length>1?`${t} compact`:t}_shouldHideNodeValue(t,e){var i;return(null!==(i=t.hideZeroValues)&&void 0!==i?i:this.host.hideZeroValues)&&Math.abs(e)<=.5}_renderTextLines(t,e,i,n,o=0,r=!1){const s=this._textFontSize(t,e,n);var a;if(e.length<=1)return q`
        <text
          class=${t}
          x=${o}
          y=${i}
          style=${`font-size:${s}px;`}
          dominant-baseline=${r?"middle":Z}
        >
          ${null!==(a=e[0])&&void 0!==a?a:""}
        </text>
      `;const l=this._textLineGap(t,e,n),d=i-l/2;return q`
      ${e.map((e,i)=>q`
            <text
              class=${t}
              x=${o}
              y=${d+i*l}
              style=${`font-size:${s}px;`}
              dominant-baseline=${r?"middle":Z}
            >
              ${e}
            </text>
          `)}
    `}_renderSecondaryActionHitArea(t,e,i){if(this.host.editable||!t.secondaryAction)return Z;const n=this._textLineGap("node-secondary",e,t),o=e.length<=1?28:n*(e.length-1)+30,r=(e.length<=1?i:i-n/2)+(e.length-1)*n/2,s=Math.max(52,1.55*t.radius);return q`
      <rect
        class="value-hit secondary-value-hit"
        x=${-s/2}
        y=${r-o/2}
        width=${s}
        height=${o}
        rx="8"
        @click=${e=>this.host._emitNodeAction(t.secondaryAction,e)}
      />
    `}_textLineGap(t,e,i){return e.length>1?this._radiusLerp(i.radius,26,30):18}_textFontSize(t,e,i){return t.includes("flow-icon-arrow")?this._radiusLerp(i.radius,22,28):e.length>1?this._radiusLerp(i.radius,26,30):this._radiusLerp(i.radius,26,28)}_radiusLerp(t,e,i){return function(t,e,i,n,o){return n+(o-n)*yt((t-20)/80,0,1)}(t,0,0,e,i)}_renderNodeIcons(t,e=""){const i=[t.icon,t.secondaryIcon].filter(Boolean);if(0===i.length)return Z;if(1===i.length){const{scale:n,y:o}=this._nodeIconMetrics(t);return this._renderIconAt(i[0],0,o,n,e)}const{scale:n,y:o,gap:r}=this._dualIconMetrics(t);return q`
      ${i.slice(0,2).map((t,i)=>this._renderIconAt(t,0===i?-r:r,o,n,e))}
    `}_renderIconAt(t,e,i,n,o=""){return this._renderExternalIconAt(t,e,i,n,o)}_renderExternalIconAt(t,e,i,n,o=""){const r=(t=>St.get(t))(t);if(!r)return Z;const s=68*n,a=s/2;return q`
      <svg
        class=${`node-icon-svg ${o}`.trim()}
        x=${e-a}
        y=${i-a}
        width=${s}
        height=${s}
        viewBox=${r.viewBox}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <path d=${r.path}></path>
        ${r.secondaryPath?q`<path class="node-icon-secondary-path" d=${r.secondaryPath}></path>`:Z}
      </svg>
    `}_renderNodeFlowArrow(t,e=""){if(!this.host._hasNodeFlowArrow(t))return Z;const i=t.icon&&t.secondaryIcon?this._dualIconMetrics(t):void 0,{y:n,scale:o}=null!=i?i:this._nodeIconMetrics(t),r=(i?-i.gap:0)+68*o*.42+10,s=this._nodeFlowArrow(t);return q`<text class=${`flow-icon-arrow ${e}`.trim()} x=${r} y=${n+3} dominant-baseline="middle">${s}</text>`}_nodeFlowArrow(t){return this.host._nodeFlowValue(t)>=0?"→":"←"}_nodeIconMetrics(t){if("leaf"===t.kind){const e=void 0!==t.secondary;return{scale:(e?yt(.58*t.radius,24,52):yt(.64*t.radius,26,58))/68,y:e?this._radiusLerp(t.radius,-8,-5):this._radiusLerp(t.radius,-2,0)}}return{scale:yt(.62*t.radius,28,60)/68,y:0}}_dualIconMetrics(t){return{scale:(void 0!==t.secondary&&"leaf"===t.kind?yt(.42*t.radius,16,34):yt(.48*t.radius,18,40))/68,y:0,gap:yt(.26*t.radius,12,24)}}},Dt=class{constructor(t){this.host=t}normalizeLinks(t){return this._normalizedLinks(t)}clearInteraction(t){return this._clearInteraction(t)}handlePointerMove(t){return this._handlePointerMove(t)}handlePointerUp(t){return this._handlePointerUp(t)}handleKeydown(t){return this._handleKeydown(t)}selectLink(t,e){return this._selectLink(t,e)}startAnchorDrag(t,e,i){return this._startAnchorDrag(t,e,i)}startPendingLink(t,e,i){return this._startPendingLink(t,e,i)}commitPendingLink(t,e,i){return this._commitPendingLink(t,e,i)}startNodeDrag(t,e){return this._startNodeDrag(t,e)}startLabelDrag(t,e,i,n){return this._startLabelDrag(t,e,i,n)}canonicalLink(t,e,i,n){return this._canonicalLink(t,e,i,n)}manualLink(t){return this._manualLink(t)}replaceLink(t,e){return this._replaceLink(t,e)}pendingJunctionConnectionCandidate(t,e,i){return this._pendingJunctionConnectionCandidate(t,e,i)}isCompatibleLink(t,e){return this._isCompatibleLink(t,e)}canStartLink(t){return this._canStartLink(t)}sameLinkEnds(t,e,i){return this._sameLinkEnds(t,e,i)}_startAnchorDrag(t,e,i){if(!this.host.editable)return;const n=this.host._eventPoint(t),o=n?this.host._anchorIndexForPointerPoint(e.node,n,e.anchorIndex,i):i;this.host.selectedLink=e.link.id,this.host.selectedNode=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this._anchorDrag={end:e.end,linkId:e.link.id,nodeId:e.node.id,pointerId:t.pointerId},this._setLinkEndAnchor(e.link.id,e.end,o,!0,!0),this.host._capturePointer(t),t.stopPropagation(),t.preventDefault()}_startPendingLink(t,e,i){if(!this.host.editable)return;if(!this._canStartLink(e))return;const n=this.host._eventPoint(t),o=n?this.host._anchorIndexForPointerPoint(e,n,void 0,i):i;this.host.selectedLink=void 0,this.host.pendingLink={from:e.id,fromAnchor:o},this.host.pointerPoint=null!=n?n:this.host._anchorPoint(e,o),this.host.hoverTarget=void 0,this.host._capturePointer(t),t.stopPropagation(),t.preventDefault()}_commitPendingLink(t,e,i){if(!this.host.editable)return;if(!this.host.pendingLink)return;const n=this.host._model().nodes[this.host.pendingLink.from];if(!n||!this._isCompatibleLink(n,e))return;const o=this._manualLink(this._canonicalLink(n,e,this.host.pendingLink.fromAnchor,i)),r=this._replaceLink(this.host.links,o);this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host.selectedLink=void 0,this.host.selectedNode=void 0,this.host.links=r,this.host._emitLinksChange(r),t.stopPropagation(),t.preventDefault()}_canonicalLink(t,e,i,n){return"leaf"===t.kind&&"junction"===e.kind?{id:`${t.id}->${e.id}`,from:t.id,to:e.id,fromAnchor:i,fromAnchorMode:"auto",toAnchor:n,toAnchorMode:"auto"}:"leaf"===e.kind&&"junction"===t.kind?{id:`${e.id}->${t.id}`,from:e.id,to:t.id,fromAnchor:n,fromAnchorMode:"auto",toAnchor:i,toAnchorMode:"auto"}:("junction"===t.kind&&e.kind,{id:`${t.id}->${e.id}`,from:t.id,to:e.id,fromAnchor:i,fromAnchorMode:"auto",toAnchor:n,toAnchorMode:"auto"})}_manualLink(t){return{...t,fromAnchorMode:"manual",toAnchorMode:"manual"}}_replaceLink(t,e){return[...t.filter(t=>!(t.from===e.from&&t.to===e.to||t.from===e.to&&t.to===e.from)),e]}_autoAnchorLinksForNode(t){const e=this._junctionJoinInfoForMovingJunction(t);let i=!1;const n=this.host.links.map(n=>{if(n.from===t||n.to===t){var o;const t=e.get(n.id),r=null!==(o=null==t?void 0:t.joinId)&&void 0!==o?o:n.junctionJoinId;return void 0===n.fromAnchor&&void 0===n.fromAnchorMode&&void 0===n.toAnchor&&void 0===n.toAnchorMode&&r===n.junctionJoinId?n:(i=!0,{...n,fromAnchor:void 0,fromAnchorMode:void 0,toAnchor:void 0,toAnchorMode:void 0,junctionJoinId:r})}return n});return i?n:this.host.links}_junctionJoinInfoForMovingJunction(t){const e=this.host._model(),i=e.nodes[t],n=/* @__PURE__ */new Map;if(!i||"junction"!==i.kind)return n;const o=this.host.links.filter(i=>{if(i.from!==t&&i.to!==t)return!1;const n=e.nodes[i.from===t?i.to:i.from];return"junction"===(null==n?void 0:n.kind)}),r=/* @__PURE__ */new Map;return o.forEach(e=>{var i,n;const o=this.host._linkAnchor(e,t),s=null!==(i=e.junctionJoinId)&&void 0!==i?i:void 0!==o?`legacy-anchor-${this.host._normalizeAnchorIndex(o)}`:void 0;s&&r.set(s,[...null!==(n=r.get(s))&&void 0!==n?n:[],e])}),r.forEach(e=>{var i;if(e.length<2)return;const o=e.map(e=>e.from===t?e.to:e.from).sort(),r=null!==(i=e[0].junctionJoinId)&&void 0!==i?i:this._junctionJoinId(o[0],o[1],t);e.forEach(t=>n.set(t.id,{joinId:r}))}),n}_selectLink(t,e){var i;this.host.editable&&(this.host.selectedLink=e,this.host.selectedNode=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,null===(i=this.host.renderRoot.querySelector(".flow-svg"))||void 0===i||i.focus(),t.stopPropagation(),t.preventDefault())}_handleKeydown(t){if("Escape"===t.key)return this.host.selectedLink=void 0,this.host.selectedNode=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,void t.preventDefault();if(this.host.selectedLink&&("Delete"===t.key||"Backspace"===t.key)){const e=this.host.selectedLink;this.host.selectedLink=void 0,this.host.links=this._linksAfterLinkDelete(e),this.host._emitLinksChange(this.host.links),t.stopPropagation(),t.preventDefault()}if(this.host.selectedNode&&("Delete"===t.key||"Backspace"===t.key)){const e=this.host.selectedNode;this.host.selectedNode=void 0,this.host.selectedLink=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host._emitNodeRemove(e),this.host._emitNodeSelect(void 0),t.stopPropagation(),t.preventDefault()}}_setLinkEndAnchor(t,e,i,n=!0,o=!1){const r=this.host._normalizeAnchorIndex(i);let s=!1;const a=this.host.links.map(i=>{if(i.id!==t)return i;const n="from"===e?{...i,fromAnchor:r,fromAnchorMode:"manual"}:{...i,toAnchor:r,toAnchorMode:"manual"};return s=s||n.fromAnchor!==i.fromAnchor||n.fromAnchorMode!==i.fromAnchorMode||n.toAnchor!==i.toAnchor||n.toAnchorMode!==i.toAnchorMode,n});s&&(this.host.links=a,n&&this.host._emitLinksChange(a,o))}_startNodeDrag(t,e){var i;if(!this.host.editable)return;if(this.host.pendingLink)return;const n=this.host._eventPoint(t);if(!n)return;this.host.selectedNode=e.id,this.host.selectedLink=void 0,this.host._emitNodeSelect(e.id),null===(i=this.host.renderRoot.querySelector(".flow-svg"))||void 0===i||i.focus();const o=this.host._model();this._drag={attachedLeaves:this._overlappingUnlinkedLeaves(e,o),id:e.id,pointerId:t.pointerId,startX:n.x,startY:n.y,offsetX:n.x-e.point.x,offsetY:n.y-e.point.y,moved:!1},this.host.activeNode=e.id,this.host._capturePointer(t),t.stopPropagation(),t.preventDefault()}_startLabelDrag(t,e,i,n){var o;if(!this.host.editable)return;const r=this.host._eventPoint(t);if(!r)return;const s="straight"===this.host.labelStyle?this.host._nodeStraightLabelPoint(e,i,n):this.host._nodeCurvedLabelHandlePoint(e,i,n);this.host.selectedNode=e.id,this.host.selectedLink=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host._emitNodeSelect(e.id),null===(o=this.host.renderRoot.querySelector(".flow-svg"))||void 0===o||o.focus(),this._labelDrag="straight"===this.host.labelStyle?{dragOffsetX:r.x-s.x,dragOffsetY:r.y-s.y,mode:"straight",nodeId:e.id,pointerId:t.pointerId}:{dragOffsetX:0,dragOffsetY:0,mode:"curved",nodeId:e.id,pointerId:t.pointerId},this.host._capturePointer(t),t.stopPropagation(),t.preventDefault()}_handlePointerMove(t){var e;if(!this.host.editable)return;const i=this.host._eventPoint(t);if(!i)return;const n=this._anchorDrag;if(n&&t.pointerId===n.pointerId){const t=this.host._model().nodes[n.nodeId];if(!t)return;return void this._setLinkEndAnchor(n.linkId,n.end,this.host._nearestAnchorIndex(t,i),!0,!0)}const o=this._labelDrag;if(o&&t.pointerId===o.pointerId){const t=this.host._model().nodes[o.nodeId];if(!t)return;if("curved"===o.mode)this.host._emitNodeLabelChange({nodeId:t.id,labelAngle:Math.atan2(i.y-t.point.y,i.x-t.point.x),labelOffsetX:t.labelOffsetX,labelOffsetY:t.labelOffsetY},!0);else{const e=i.x-o.dragOffsetX,n=i.y-o.dragOffsetY;this.host._emitNodeLabelChange({nodeId:t.id,labelAngle:t.labelAngle,labelOffsetX:e-t.point.x,labelOffsetY:n-t.point.y},!0)}return}if(this.host.pendingLink){var r;const t=this.host._model();return this.host.pointerPoint=i,void(this.host.hoverTarget=null===(r=this._nearestCompatibleTarget(t.nodes[this.host.pendingLink.from],i,t.nodes))||void 0===r?void 0:r.id)}const s=this._drag;if(!s||t.pointerId!==s.pointerId)return;if(!s.moved){if(Math.hypot(i.x-s.startX,i.y-s.startY)<4)return;s.moved=!0;const t=this._autoAnchorLinksForNode(s.id);t!==this.host.links&&(s.anchorsChanged=!0,this.host.links=t,this.host._emitLinksChange(t,!0))}const a=this.host._clampedPoint({x:i.x-s.offsetX,y:i.y-s.offsetY}),l=this.host._model().nodes[s.id]?{x:s.startX-s.offsetX,y:s.startY-s.offsetY}:a,d=a.x-l.x,h=a.y-l.y,c=Object.fromEntries((null!==(e=s.attachedLeaves)&&void 0!==e?e:[]).map(t=>[t.id,this.host._clampedPoint({x:t.point.x+d,y:t.point.y+h})]));this.host.layout={...this.host.layout,...c,[s.id]:a},this.host._emitLayoutChange(this.host.layout,!0)}_handlePointerUp(t){var e;if(!this.host.editable)return;const i=this._anchorDrag;if(i&&t.pointerId===i.pointerId){var n;const e=t.target;return(null==e||null===(n=e.hasPointerCapture)||void 0===n?void 0:n.call(e,t.pointerId))&&e.releasePointerCapture(t.pointerId),this._anchorDrag=void 0,this.host._emitLinksChange(this.host.links),t.stopPropagation(),void t.preventDefault()}const o=this._labelDrag;if(o&&t.pointerId===o.pointerId){var r;const e=this.host._eventPoint(t),i=this.host._model().nodes[o.nodeId],n=t.target;if((null==n||null===(r=n.hasPointerCapture)||void 0===r?void 0:r.call(n,t.pointerId))&&n.releasePointerCapture(t.pointerId),this._labelDrag=void 0,e&&i)if("curved"===o.mode)this.host._emitNodeLabelChange({nodeId:i.id,labelAngle:Math.atan2(e.y-i.point.y,e.x-i.point.x),labelOffsetX:i.labelOffsetX,labelOffsetY:i.labelOffsetY});else{const t=e.x-o.dragOffsetX,n=e.y-o.dragOffsetY;this.host._emitNodeLabelChange({nodeId:i.id,labelAngle:i.labelAngle,labelOffsetX:t-i.point.x,labelOffsetY:n-i.point.y})}return t.stopPropagation(),void t.preventDefault()}if(this.host.pendingLink){var s,a;const e=t.target;(null==e||null===(s=e.hasPointerCapture)||void 0===s?void 0:s.call(e,t.pointerId))&&e.releasePointerCapture(t.pointerId);const i=null!==(a=this.host._eventPoint(t))&&void 0!==a?a:this.host.pointerPoint;if(i){var l;this.host.pointerPoint=i;const e=this.host._model(),n=e.nodes[this.host.pendingLink.from],o=null!==(l=this.host.hoverTarget?e.nodes[this.host.hoverTarget]:void 0)&&void 0!==l?l:this._nearestCompatibleTarget(n,i,e.nodes);if(o)return void this._commitPendingLink(t,o,this.host._nearestAnchorIndex(o,i));const r=this._pendingJunctionConnectionCandidate(n,i,e.nodes);if(r)return void this._commitPendingLinkToJunctionConnection(t,r)}return this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host.selectedLink=void 0,this.host.selectedNode=void 0,t.stopPropagation(),void t.preventDefault()}const d=this._drag;if(!d||t.pointerId!==d.pointerId)return;const h=t.target;if((null==h||null===(e=h.hasPointerCapture)||void 0===e?void 0:e.call(h,t.pointerId))&&h.releasePointerCapture(t.pointerId),this._drag=void 0,this.host.activeNode=void 0,d.moved){const t=this._connectJunctionToWrappedConnection(d.id),e=d.anchorsChanged||t!==this.host.links;this.host.links=t,this.host._emitLayoutChange(this.host.layout),e&&this.host._emitLinksChange(this.host.links)}}_clearInteraction(t){this.host.editable&&t.currentTarget===t.target&&(this.host.selectedNode=void 0,this.host.selectedLink=void 0,this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host._emitNodeSelect(void 0))}_nextLayout(t,e){return{...this.host.layout,[t]:this.host._clampedPoint(e)}}_overlappingUnlinkedLeaves(t,e){const i=Object.values(e.nodes),n=kt(i,this.host.links);return i.filter(e=>{let i=n.get(e.id);for(;i;){if(i===t.id)return!0;i=n.get(i)}return!1}).map(t=>({id:t.id,point:{...t.point}}))}_normalizedLinks(t){return this.host.links.filter(e=>{const i=t[e.from],n=t[e.to];return Boolean(i&&n&&this._isCompatibleLink(i,n))})}_connectJunctionToWrappedConnection(t){const e=this.host._model(),i=e.nodes[t];if(!i||"junction"!==i.kind)return this.host.links;const n=this._wrappedJunctionConnectionCandidate(i,e.nodes);return n?this._splitJunctionConnectionWithJunction(n.link,i.id,this._junctionConnectionSnapAnchor(n.detour)):this.host.links}_wrappedJunctionConnectionCandidate(t,e){return this.host.links.map(i=>{const n=e[i.from],o=e[i.to];if(!n||!o||"junction"!==n.kind||"junction"!==o.kind||n.id===t.id||o.id===t.id)return;const r=this.host._connectionPoint(n,o,this.host._linkAnchor(i,n.id),0),s=this.host._connectionPoint(o,n,this.host._linkAnchor(i,o.id),0),a=this.host._junctionLineDetour(r,s,t);return a?{detour:a,link:i,score:Math.abs(a.signedDistance)}:void 0}).filter(t=>Boolean(t)).sort((t,e)=>t.score-e.score)[0]}_pendingJunctionConnectionCandidate(t,e,i){if(t&&"junction"===t.kind)return this.host.links.map(n=>{const o=i[n.from],r=i[n.to];if(!o||!r||"junction"!==o.kind||"junction"!==r.kind||o.id===t.id||r.id===t.id)return;const s=this.host._connectionPoint(o,r,this.host._linkAnchor(n,o.id),0),a=this.host._connectionPoint(r,o,this.host._linkAnchor(n,r.id),0),l=this.host._junctionLineDetour(s,a,t),d=xt(e,s,a);return d.distance>28?void 0:{detour:l,link:n,point:d.point,score:d.distance}}).filter(t=>Boolean(t)).sort((t,e)=>t.score-e.score)[0]}_commitPendingLinkToJunctionConnection(t,e){if(!this.host.pendingLink)return;const i=this.host.pendingLink.from,n=e.detour?this._junctionConnectionSnapAnchor(e.detour):this.host.pendingLink.fromAnchor,o=this._splitJunctionConnectionWithJunction(e.link,i,n);this.host.pendingLink=void 0,this.host.hoverTarget=void 0,this.host.pointerPoint=void 0,this.host.selectedLink=void 0,this.host.selectedNode=void 0,this.host.links=o,this.host._emitLinksChange(o),t.stopPropagation(),t.preventDefault()}_splitJunctionConnectionWithJunction(t,e,i){var n;const o=null!==(n=t.junctionJoinId)&&void 0!==n?n:this._junctionJoinId(t.from,t.to,e),r=this._splitWrappedJunctionLink(t,t.from,e,{fromAnchor:t.fromAnchor,fromAnchorMode:t.fromAnchorMode,toAnchor:i,toAnchorMode:void 0===i?void 0:"manual",junctionJoinId:o}),s=this._splitWrappedJunctionLink(t,e,t.to,{fromAnchor:i,fromAnchorMode:void 0===i?void 0:"manual",toAnchor:t.toAnchor,toAnchorMode:t.toAnchorMode,junctionJoinId:o});return[...this.host.links.filter(e=>e.id!==t.id&&!this._sameLinkEnds(e,r.from,r.to)&&!this._sameLinkEnds(e,s.from,s.to)),r,s]}_splitWrappedJunctionLink(t,e,i,n){return{id:`${e}->${i}`,from:e,to:i,attribute:t.attribute,color:t.color,displayValue:t.displayValue,entity:t.entity,factor:t.factor,flowMaxValue:t.flowMaxValue,flowMinVisibleValue:t.flowMinVisibleValue,invert:t.invert,unit:t.unit,value:t.value,...n}}_junctionJoinId(t,e,i){const[n,o]=[t,e].sort();return`${n}--${o}--via-${i}`}_linksAfterLinkDelete(t){const e=this.host._model(),i=this.host.links.find(e=>e.id===t);if(!i)return this.host.links;const n=this.host._junctionJoinGeometry(i,e.nodes,this.host.links);return(null==n?void 0:n.branchLinkId)===t&&n.busLinkId&&n.branchLinkId?this._linksAfterBranchDelete(n):(null==n?void 0:n.busLinkId)===t&&n.branchLinkId?this.host.links.filter(t=>t.id!==n.busLinkId&&t.id!==n.branchLinkId):this.host.links.filter(e=>e.id!==t)}_linksAfterBranchDelete(t){const e=this.host.links.find(e=>e.id===t.busLinkId),i=this.host.links.find(e=>e.id===t.branchLinkId);if(!e||!i)return this.host.links.filter(e=>e.id!==t.branchLinkId);const n=this._restoredJunctionBusLink(t,e,i);return[...this.host.links.filter(t=>t.id!==e.id&&t.id!==i.id&&!this._sameLinkEnds(t,n.from,n.to)),n]}_restoredJunctionBusLink(t,e,i){const n=this._linkAnchorFields(e,t.firstOuterId),o=this._linkAnchorFields(i,t.secondOuterId);return{...e,id:`${t.firstOuterId}->${t.secondOuterId}`,from:t.firstOuterId,to:t.secondOuterId,fromAnchor:n.anchor,fromAnchorMode:n.mode,toAnchor:o.anchor,toAnchorMode:o.mode,junctionJoinId:void 0}}_linkAnchorFields(t,e){return t.from===e?{anchor:t.fromAnchor,mode:t.fromAnchorMode}:t.to===e?{anchor:t.toAnchor,mode:t.toAnchorMode}:{}}_sameLinkEnds(t,e,i){return t.from===e&&t.to===i||t.from===i&&t.to===e}_junctionConnectionSnapAnchor(t){return t.tapAnchor}_isCompatibleLink(t,e){const i=/* @__PURE__ */new Set([t.kind,e.kind]);return!(!i.has("leaf")||!i.has("junction"))||"junction"===t.kind&&"junction"===e.kind}_canStartLink(t){return"junction"===t.kind||"leaf"===t.kind}_nearestCompatibleTarget(t,e,i){var n;if(t)return null===(n=Object.values(i).filter(e=>e.id!==t.id&&this._isCompatibleLink(t,e)).map(t=>({node:t,distance:Math.hypot(t.point.x-e.x,t.point.y-e.y)})).filter(({node:t,distance:e})=>e<=t.radius+46).sort((t,e)=>t.distance-e.distance)[0])||void 0===n?void 0:n.node}};function Tt(t,e){const i=e.replace(/^M\s*-?\d+(?:\.\d+)?(?:e[-+]?\d+)?\s+-?\d+(?:\.\d+)?(?:e[-+]?\d+)?\s*/i,"").trim();return i?`${t} ${i}`:t}function Rt(t){return 1===t?0:1}function Bt(t,e,i){return Math.abs(t.x-e.x)<3?`M${t.x} ${t.y} L${e.x} ${e.y}`:[`M${t.x} ${t.y}`,`L${t.x} ${i}`,`L${e.x} ${i}`,`L${e.x} ${e.y}`].join(" ")}function Jt(t,e,i){return Math.abs(t.y-e.y)<3?`M${t.x} ${t.y} L${e.x} ${e.y}`:[`M${t.x} ${t.y}`,`L${i} ${t.y}`,`L${i} ${e.y}`,`L${e.x} ${e.y}`].join(" ")}function zt(t,e,i){const n=Math.abs(e.y-t.y),o=yt(.26*n,18,36),r=yt(.22*n,16,30),s="down"===i?t.y+o:t.y-o,a="down"===i?e.y-o:e.y+o;return Math.abs(t.x-e.x)<3||Math.abs(a-s)<6?`M${t.x} ${t.y} L${e.x} ${e.y}`:[`M${t.x} ${t.y}`,`L${t.x} ${s}`,`C${t.x} ${"down"===i?s+r:s-r} ${e.x} ${"down"===i?a-r:a+r} ${e.x} ${a}`,`L${e.x} ${e.y}`].join(" ")}function Ut(t,e,i){const n=Math.abs(e.x-t.x),o=yt(.26*n,18,36),r=yt(.22*n,16,30),s="right"===i?t.x+o:t.x-o,a="right"===i?e.x-o:e.x+o;return Math.abs(t.y-e.y)<3||Math.abs(a-s)<6?`M${t.x} ${t.y} L${e.x} ${e.y}`:[`M${t.x} ${t.y}`,`L${s} ${t.y}`,`C${"right"===i?s+r:s-r} ${t.y} ${"right"===i?a-r:a+r} ${e.y} ${a} ${e.y}`,`L${e.x} ${e.y}`].join(" ")}var Ht,Gt=10,Xt=class{constructor(t,e){this.routing=t,this.connectionPoint=e}connectorPath(t,e,i,n,o){const r=this._linkedLeafNodes(i.id,n,o),s=this._sortedLaneNodes(r.filter(t=>t.point.y<=i.point.y-i.radius),"x"),a=this._sortedLaneNodes(r.filter(t=>t.point.y>=i.point.y+i.radius),"x"),l=this._sortedLaneNodes(r.filter(t=>t.point.x<=i.point.x),"y"),d=this._sortedLaneNodes(r.filter(t=>t.point.x>=i.point.x),"y"),h={from:this._linkAnchor(t,e.id),to:this._linkAnchor(t,i.id)};if("radial"===this.routing)return this._radialConnectorPath(e,i,h);if("sweep"===this.routing)return this._defaultConnectorPath(e,i,h);switch(this._leafConnectorSide(e,i)){case"upper":return"channel"===this.routing?this._upperLeafChannelPath(e,i,this._laneSlotForNode(e.id,s).index,Math.max(1,s.length),h):"orthogonal"===this.routing?this._upperLeafOrthogonalPath(e,i,this._laneSlotForNode(e.id,s).index,Math.max(1,s.length),h):this._upperLeafConnectorPath(e,i,this._laneSlotForNode(e.id,s).index,Math.max(1,s.length),h);case"lower":return"channel"===this.routing?this._lowerLeafChannelPath(e,i,this._laneSlotForNode(e.id,a).index,Math.max(1,a.length),h):"orthogonal"===this.routing?this._lowerLeafOrthogonalPath(e,i,this._laneSlotForNode(e.id,a).index,Math.max(1,a.length),h):this._lowerLeafConnectorPath(e,i,this._laneSlotForNode(e.id,a).index,Math.max(1,a.length),h);case"left":return"channel"===this.routing?this._leftLeafChannelPath(e,i,this._laneSlotForNode(e.id,l).index,Math.max(1,l.length),h):"orthogonal"===this.routing?this._leftLeafOrthogonalPath(e,i,this._laneSlotForNode(e.id,l).index,Math.max(1,l.length),h):this._leftLeafConnectorPath(e,i,this._laneSlotForNode(e.id,l).index,Math.max(1,l.length),h);case"right":return"channel"===this.routing?this._rightLeafChannelPath(e,i,this._laneSlotForNode(e.id,d).index,Math.max(1,d.length),h):"orthogonal"===this.routing?this._rightLeafOrthogonalPath(e,i,this._laneSlotForNode(e.id,d).index,Math.max(1,d.length),h):this._rightLeafConnectorPath(e,i,this._laneSlotForNode(e.id,d).index,Math.max(1,d.length),h);default:return this._radialConnectorPath(e,i,h)}}autoAnchorReference(t,e,i,n){return this._leafAutoAnchorReferencePoint(t,e,i,n)}defaultConnectorPath(t,e,i={}){return this._defaultConnectorPath(t,e,i)}linkAnchor(t,e){return this._linkAnchor(t,e)}guideNode(t,e){return this._guideNode(t,e)}_leafConnectorSide(t,e){const i=t.point.x-e.point.x,n=t.point.y-e.point.y,o=Math.max(0,Math.abs(i)-e.radius),r=Math.max(0,Math.abs(n)-e.radius);return o<=0&&r<=0?"radial":r>=o?n<=0?"upper":"lower":i<=0?"left":"right"}_leafAutoAnchorReferencePoint(t,e,i,n){const o="from"===e?t.from:t.to,r="from"===e?t.to:t.from,s=i[o],a=i[r];if(!s||!a||"leaf"!==s.kind||"junction"!==a.kind)return;if("radial"===this.routing||"sweep"===this.routing)return a.point;const l=this._linkedLeafNodes(a.id,i,n),d=this._sortedLaneNodes(l.filter(t=>t.point.y<=a.point.y-a.radius),"x"),h=this._sortedLaneNodes(l.filter(t=>t.point.y>=a.point.y+a.radius),"x"),c=this._sortedLaneNodes(l.filter(t=>t.point.x<=a.point.x),"y"),u=this._sortedLaneNodes(l.filter(t=>t.point.x>=a.point.x),"y");switch(this._leafConnectorSide(s,a)){case"upper":return this._upperLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,d).index,Math.max(1,d.length));case"lower":return this._lowerLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,h).index,Math.max(1,h.length));case"left":return this._leftLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,c).index,Math.max(1,c.length));case"right":return this._rightLeafAnchorReferencePoint(s,a,this._laneSlotForNode(s.id,u).index,Math.max(1,u.length));default:return a.point}}_upperLeafConnectorPath(t,e,i,n,o={}){if(t.point.y>=e.point.y-e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.x,e.point.x,i,n,Math.max(0,e.radius-22)),s=e.point.y-e.radius-Gt-16,a=this._guideNode(`${t.id}-upper-drop`,{x:e.point.x,y:s}),l=this._guideNode(`${e.id}-upper-neck`,{x:r,y:s}),d=this.connectionPoint(t,a,o.from),h=this.connectionPoint(e,l,o.to,0),c=Math.max(0,h.y-d.y);if(Math.abs(d.x-h.x)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=d.y+yt(.42*c,38,72),p=yt(.35*(u-d.y),16,28);return[`M${d.x} ${d.y}`,`C${d.x} ${d.y+p} ${h.x} ${u-p} ${h.x} ${u}`,`L${h.x} ${h.y}`].join(" ")}_lowerLeafConnectorPath(t,e,i,n,o={}){if(t.point.y<=e.point.y+e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.x,e.point.x,i,n,Math.max(0,e.radius-22)),s=e.point.y+e.radius+Gt+16,a=this._guideNode(`${t.id}-lower-drop`,{x:t.point.x,y:s}),l=this._guideNode(`${e.id}-lower-neck`,{x:r,y:s}),d=this.connectionPoint(t,a,o.from),h=this.connectionPoint(e,l,o.to,0),c=Math.max(0,d.y-h.y);if(Math.abs(d.x-h.x)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=h.y+yt(.58*c,44,76),p=yt(.35*(d.y-u),16,28);return[`M${d.x} ${d.y}`,`C${d.x} ${d.y-p} ${h.x} ${u+p} ${h.x} ${u}`,`L${h.x} ${h.y}`].join(" ")}_leftLeafConnectorPath(t,e,i,n,o={}){if(t.point.x>=e.point.x-e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.y,e.point.y,i,n,Math.max(0,e.radius-22)),s=e.point.x-e.radius-Gt-16,a=this._guideNode(`${t.id}-left-spread`,{x:s,y:t.point.y}),l=this._guideNode(`${e.id}-left-neck`,{x:s,y:r}),d=this.connectionPoint(t,a,o.from),h=this.connectionPoint(e,l,o.to,0),c=Math.max(0,h.x-d.x);if(Math.abs(d.y-h.y)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=d.x+yt(.42*c,38,72),p=yt(.35*(u-d.x),16,28);return[`M${d.x} ${d.y}`,`C${d.x+p} ${d.y} ${u-p} ${h.y} ${u} ${h.y}`,`L${h.x} ${h.y}`].join(" ")}_rightLeafConnectorPath(t,e,i,n,o={}){if(t.point.x<=e.point.x+e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.y,e.point.y,i,n,Math.max(0,e.radius-22)),s=e.point.x+e.radius+Gt+16,a=this._guideNode(`${t.id}-right-spread`,{x:s,y:t.point.y}),l=this._guideNode(`${e.id}-right-neck`,{x:s,y:r}),d=this.connectionPoint(t,a,o.from),h=this.connectionPoint(e,l,o.to,0),c=Math.max(0,d.x-h.x);if(Math.abs(d.y-h.y)<3)return`M${d.x} ${d.y} L${h.x} ${h.y}`;const u=d.x-yt(.42*c,38,72),p=yt(.35*(d.x-u),16,28);return[`M${d.x} ${d.y}`,`C${d.x-p} ${d.y} ${u+p} ${h.y} ${u} ${h.y}`,`L${h.x} ${h.y}`].join(" ")}_upperLeafChannelPath(t,e,i,n,o={}){if(t.point.y>=e.point.y-e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.x,e.point.x,i,n,Math.max(0,e.radius-18)),s=e.point.y-e.radius-Gt-18,a=this._guideNode(`${t.id}-upper-channel`,{x:t.point.x,y:s}),l=this._guideNode(`${e.id}-upper-channel`,{x:r,y:s});return zt(this.connectionPoint(t,a,o.from),this.connectionPoint(e,l,o.to,0),"down")}_lowerLeafChannelPath(t,e,i,n,o={}){if(t.point.y<=e.point.y+e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.x,e.point.x,i,n,Math.max(0,e.radius-18)),s=e.point.y+e.radius+Gt+18,a=this._guideNode(`${t.id}-lower-channel`,{x:t.point.x,y:s}),l=this._guideNode(`${e.id}-lower-channel`,{x:r,y:s});return zt(this.connectionPoint(t,a,o.from),this.connectionPoint(e,l,o.to,0),"up")}_leftLeafChannelPath(t,e,i,n,o={}){if(t.point.x>=e.point.x-e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.y,e.point.y,i,n,Math.max(0,e.radius-18)),s=e.point.x-e.radius-Gt-18,a=this._guideNode(`${t.id}-left-channel`,{x:s,y:t.point.y}),l=this._guideNode(`${e.id}-left-channel`,{x:s,y:r});return Ut(this.connectionPoint(t,a,o.from),this.connectionPoint(e,l,o.to,0),"right")}_rightLeafChannelPath(t,e,i,n,o={}){if(t.point.x<=e.point.x+e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.y,e.point.y,i,n,Math.max(0,e.radius-18)),s=e.point.x+e.radius+Gt+18,a=this._guideNode(`${t.id}-right-channel`,{x:s,y:t.point.y}),l=this._guideNode(`${e.id}-right-channel`,{x:s,y:r});return Ut(this.connectionPoint(t,a,o.from),this.connectionPoint(e,l,o.to,0),"left")}_upperLeafAnchorReferencePoint(t,e,i,n){return"channel"===this.routing||"orthogonal"===this.routing?{x:t.point.x,y:e.point.y-e.radius-Gt-18}:{x:e.point.x,y:e.point.y-e.radius-Gt-16}}_lowerLeafAnchorReferencePoint(t,e,i,n){return"channel"===this.routing||"orthogonal"===this.routing?{x:t.point.x,y:e.point.y+e.radius+Gt+18}:{x:t.point.x,y:e.point.y+e.radius+Gt+16}}_leftLeafAnchorReferencePoint(t,e,i,n){return"channel"===this.routing||"orthogonal"===this.routing?{x:e.point.x-e.radius-Gt-18,y:t.point.y}:{x:e.point.x-e.radius-Gt-16,y:t.point.y}}_rightLeafAnchorReferencePoint(t,e,i,n){return"channel"===this.routing||"orthogonal"===this.routing?{x:e.point.x+e.radius+Gt+18,y:t.point.y}:{x:e.point.x+e.radius+Gt+16,y:t.point.y}}_upperLeafOrthogonalPath(t,e,i,n,o={}){if(t.point.y>=e.point.y-e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.x,e.point.x,i,n,Math.max(0,e.radius-18)),s=e.point.y-e.radius-Gt-18,a=this._guideNode(`${t.id}-upper-orthogonal`,{x:t.point.x,y:s}),l=this._guideNode(`${e.id}-upper-orthogonal`,{x:r,y:s});return Bt(this.connectionPoint(t,a,o.from),this.connectionPoint(e,l,o.to,0),s)}_lowerLeafOrthogonalPath(t,e,i,n,o={}){if(t.point.y<=e.point.y+e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.x,e.point.x,i,n,Math.max(0,e.radius-18)),s=e.point.y+e.radius+Gt+18,a=this._guideNode(`${t.id}-lower-orthogonal`,{x:t.point.x,y:s}),l=this._guideNode(`${e.id}-lower-orthogonal`,{x:r,y:s});return Bt(this.connectionPoint(t,a,o.from),this.connectionPoint(e,l,o.to,0),s)}_leftLeafOrthogonalPath(t,e,i,n,o={}){if(t.point.x>=e.point.x-e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.y,e.point.y,i,n,Math.max(0,e.radius-18)),s=e.point.x-e.radius-Gt-18,a=this._guideNode(`${t.id}-left-orthogonal`,{x:s,y:t.point.y}),l=this._guideNode(`${e.id}-left-orthogonal`,{x:s,y:r});return Jt(this.connectionPoint(t,a,o.from),this.connectionPoint(e,l,o.to,0),s)}_rightLeafOrthogonalPath(t,e,i,n,o={}){if(t.point.x<=e.point.x+e.radius)return this._radialConnectorPath(t,e,o);const r=this._funnelLaneCoordinate(t.point.y,e.point.y,i,n,Math.max(0,e.radius-18)),s=e.point.x+e.radius+Gt+18,a=this._guideNode(`${t.id}-right-orthogonal`,{x:s,y:t.point.y}),l=this._guideNode(`${e.id}-right-orthogonal`,{x:s,y:r});return Jt(this.connectionPoint(t,a,o.from),this.connectionPoint(e,l,o.to,0),s)}_defaultConnectorPath(t,e,i={}){const n=this.connectionPoint(t,e,i.from,"junction"===t.kind&&"leaf"===e.kind?0:void 0),o=this.connectionPoint(e,t,i.to,"junction"===e.kind&&"leaf"===t.kind?0:void 0),r=o.x-n.x,s=o.y-n.y;if(Math.abs(r)>=Math.abs(s)){const t=.38*r;return`M${n.x} ${n.y} C${n.x+t} ${n.y} ${o.x-t} ${o.y} ${o.x} ${o.y}`}const a=.38*s;return`M${n.x} ${n.y} C${n.x} ${n.y+a} ${o.x} ${o.y-a} ${o.x} ${o.y}`}_radialConnectorPath(t,e,i={}){const n=this.connectionPoint(t,e,i.from,"junction"===t.kind&&"leaf"===e.kind?0:void 0),o=this.connectionPoint(e,t,i.to,"junction"===e.kind&&"leaf"===t.kind?0:void 0),r=e.point.x-t.point.x,s=e.point.y-t.point.y,a=Math.hypot(r,s)||1,l=r/a,d=s/a,h=yt(.32*a,46,120);return[`M${n.x} ${n.y}`,`C${n.x+l*h} ${n.y+d*h}`,`${o.x-l*h} ${o.y-d*h}`,`${o.x} ${o.y}`].join(" ")}_linkedLeafNodes(t,e,i){return this._uniqueNodes(i.map(i=>{if(i.from!==t&&i.to!==t)return;const n=e[i.from===t?i.to:i.from];return"leaf"===(null==n?void 0:n.kind)?n:void 0}).filter(t=>Boolean(t)))}_uniqueNodes(t){return Array.from(new Map(t.map(t=>[t.id,t])).values())}_sortedLaneNodes(t,e){return[...t].sort((t,i)=>{const n=t.point[e]-i.point[e];return Math.abs(n)>.1?n:t.id.localeCompare(i.id)})}_laneSlotForNode(t,e){const i=e.findIndex(e=>e.id===t);return{index:Math.max(0,i),count:Math.max(1,e.length)}}_funnelLaneCoordinate(t,e,i,n,o){if(o<=0)return e;const r=yt(t-e,-o,o);if(n<=1)return e+r;const s=this._laneOffset(i,n,72,o);return e+yt(.75*r+.25*s,-o,o)}_laneOffset(t,e,i,n){if(e<=1||n<=0)return 0;const o=(e-1)/2*i;return(t-(e-1)/2)*i*(o>n?n/o:1)}_linkAnchor(t,e){return t.from===e&&"manual"===t.fromAnchorMode?t.fromAnchor:t.to===e&&"manual"===t.toAnchorMode?t.toAnchor:void 0}_guideNode(t,e){return{id:t,kind:"junction",stackIndex:-1,label:"",value:0,radius:0,point:e,icon:"mdi:circle-small"}}},Wt=class{constructor(t,e,i,n,o,r){this.connectionPoint=t,this.defaultConnectorPath=e,this.guideNode=i,this.linkAnchor=n,this.nearestAnchorIndex=o,this.sameLinkEnds=r}connectorPath(t,e,i,n={}){return this._junctionConnectorPath(t,e,i,n)}joinedConnectionPath(t,e,i,n){return this._junctionJoinedConnectionPath(t,e,i,n)}joinGeometry(t,e,i,n){return this._junctionJoinGeometry(t,e,i,n)}lineDetour(t,e,i,n=0){return this._junctionLineDetour(t,e,i,n)}_junctionConnectorPath(t,e,i,n={}){const o=this.connectionPoint(t,e,n.from,0),r=this.connectionPoint(e,t,n.to,0),s=this._junctionLineDetours(o,r,t,e,i);if(0===s.length)return`M${o.x} ${o.y} L${r.x} ${r.y}`;const a=[`M${o.x} ${o.y}`];let l=0;return s.forEach(t=>{t.beforeDistance>l+.5&&a.push(`L${t.entry.x} ${t.entry.y}`),a.push(`A${t.radius} ${t.radius} 0 0 ${t.sweepFlag} ${t.exit.x} ${t.exit.y}`),l=t.afterDistance}),a.push(`L${r.x} ${r.y}`),a.join(" ")}_junctionLineDetours(t,e,i,n,o){return Object.values(o).filter(t=>"junction"===t.kind&&t.id!==i.id&&t.id!==n.id).map(i=>this._junctionLineDetour(t,e,i)).filter(t=>Boolean(t)).sort((t,e)=>t.beforeDistance-e.beforeDistance)}_junctionLineDetour(t,e,i,n=0){const o=e.x-t.x,r=e.y-t.y,s=Math.hypot(o,r);if(s<1)return;const a={x:o/s,y:r/s},l=-a.y,d=a.x,h=i.point.x-t.x,c=i.point.y-t.y,u=h*a.x+c*a.y,p=h*l+c*d,f=i.radius+10,_=f+Math.max(0,n),v=Math.max(18,i.radius-8),m=Math.min(f,Math.max(34,.55*i.radius));if(u<=m||u>=s-m)return;if(Math.abs(p)>_)return;const g=Math.abs(p)<v?v:Math.abs(p)>f?_:f,y=Math.sqrt(Math.max(0,g**2-p**2)),b=Math.max(0,u-y),x=Math.min(s,u+y),$=p>=0?1:0,w=1===$?-1:1,k={x:Math.round(i.point.x+l*w*g),y:Math.round(i.point.y+d*w*g)};return{afterDistance:x,beforeDistance:b,entry:{x:t.x+a.x*b,y:t.y+a.y*b},exit:{x:t.x+a.x*x,y:t.y+a.y*x},nodeId:i.id,radius:g,signedDistance:p,sweepFlag:$,tap:k,tapAnchor:this.nearestAnchorIndex(i,k)}}_junctionJoinedConnectionPath(t,e,i,n){var o;const r=this._junctionJoinGeometry(t,e,i,n);if(!r)return;return(null===(o=r.pathsByLinkId)||void 0===o?void 0:o[t.id])||(t.from===r.firstOuterId&&t.to===r.middleId?r.beforePath:t.from===r.middleId&&t.to===r.firstOuterId?r.beforeReversePath:t.from===r.middleId&&t.to===r.secondOuterId?r.afterPath:t.from===r.secondOuterId&&t.to===r.middleId?r.afterReversePath:void 0)}_junctionJoinGeometry(t,e,i,n){if(null==n?void 0:n.has(t.id))return n.get(t.id);const o=e[t.from],r=e[t.to];if(!o||!r||"junction"!==o.kind||"junction"!==r.kind)return void(null==n||n.set(t.id,void 0));const s=[o,r].map(n=>this._junctionJoinGeometryForMiddle(t,n,e,i)).filter(t=>Boolean(t))[0];return null==n||n.set(t.id,s),(null==s?void 0:s.busLinkId)&&(null==n||n.set(s.busLinkId,s)),(null==s?void 0:s.branchLinkId)&&(null==n||n.set(s.branchLinkId,s)),s}_junctionJoinGeometryForMiddle(t,e,i,n){const o=this.linkAnchor(t,e.id),r=t.junctionJoinId;if(void 0===o&&!r)return;const s=i[t.from===e.id?t.to:t.from];if(!s||"junction"!==s.kind)return;const a=n.find(n=>{if(n.id===t.id)return!1;if(n.from!==e.id&&n.to!==e.id)return!1;const s=i[n.from===e.id?n.to:n.from];return"junction"===(null==s?void 0:s.kind)&&(r&&n.junctionJoinId===r||void 0!==o&&this.linkAnchor(n,e.id)===o)});if(!a)return;const l=i[a.from===e.id?a.to:a.from];if(!l||"junction"!==l.kind)return;const[d,h]=this._orderedJoinOuters(s,l),c=this._linkBetweenNodes(t,a,d.id,e.id),u=this._linkBetweenNodes(t,a,h.id,e.id);if(!c||!u)return;const p=this.connectionPoint(d,h,this.linkAnchor(c,d.id),0),f=this.connectionPoint(h,d,this.linkAnchor(u,h.id),0),_=this._junctionLineDetour(p,f,e,r?14:0);return _?{afterPath:this._junctionJoinAfterPath(_.tap,_,f),afterReversePath:this._junctionJoinAfterReversePath(f,_,_.tap),beforePath:this._junctionJoinBeforePath(p,_,_.tap),beforeReversePath:this._junctionJoinBeforeReversePath(_.tap,_,p),branchLinkId:u.id,busLinkId:c.id,firstOuterId:d.id,middleId:e.id,secondOuterId:h.id,tap:_.tap}:this._junctionBranchJoinGeometry(e,d,h,c,u,i)}_junctionBranchJoinGeometry(t,e,i,n,o,r){const s=this.connectionPoint(e,i,this.linkAnchor(n,e.id),0),a=this.connectionPoint(i,e,this.linkAnchor(o,i.id),0),l=xt(t.point,s,a).point,d=this.guideNode(`${t.id}-bus-tap`,l),h={...r,[d.id]:d},c=this._junctionConnectorPath(e,d,h,{from:this.linkAnchor(n,e.id)}),u=this._junctionConnectorPath(d,e,h,{to:this.linkAnchor(n,e.id)}),p=this._junctionConnectorPath(d,i,h,{to:this.linkAnchor(o,i.id)}),f=this._junctionConnectorPath(i,d,h,{from:this.linkAnchor(o,i.id)}),_=this._junctionBranchToBusPath(t,l),v=this._junctionBranchFromBusPath(t,l),m=Tt(_,p),g=Tt(f,v),y=n,b=o;return{afterPath:m,afterReversePath:g,beforePath:c,beforeReversePath:u,branchLinkId:b.id,busLinkId:y.id,firstOuterId:e.id,middleId:t.id,pathsByLinkId:{[y.id]:y.from===e.id||y.to===t.id?c:u,[b.id]:b.from===t.id||b.to===i.id?m:g},secondOuterId:i.id,tap:l}}_junctionBranchToBusPath(t,e){const i=this.guideNode(`${t.id}-bus-tap`,e);return this.defaultConnectorPath(t,i,{from:this.nearestAnchorIndex(t,e)})}_junctionBranchFromBusPath(t,e){const i=this.guideNode(`${t.id}-bus-tap`,e);return this.defaultConnectorPath(i,t,{to:this.nearestAnchorIndex(t,e)})}_orderedJoinOuters(t,e){return t.point.x!==e.point.x?t.point.x<e.point.x?[t,e]:[e,t]:t.point.y<=e.point.y?[t,e]:[e,t]}_linkBetweenNodes(t,e,i,n){return this.sameLinkEnds(t,i,n)?t:this.sameLinkEnds(e,i,n)?e:void 0}_junctionJoinBeforePath(t,e,i){const n=[`M${t.x} ${t.y}`];return Math.hypot(e.entry.x-t.x,e.entry.y-t.y)>.5&&n.push(`L${e.entry.x} ${e.entry.y}`),n.push(`A${e.radius} ${e.radius} 0 0 ${e.sweepFlag} ${i.x} ${i.y}`),n.join(" ")}_junctionJoinBeforeReversePath(t,e,i){const n=[`M${t.x} ${t.y}`,`A${e.radius} ${e.radius} 0 0 ${Rt(e.sweepFlag)} ${e.entry.x} ${e.entry.y}`];return Math.hypot(e.entry.x-i.x,e.entry.y-i.y)>.5&&n.push(`L${i.x} ${i.y}`),n.join(" ")}_junctionJoinAfterPath(t,e,i){const n=[`M${t.x} ${t.y}`,`A${e.radius} ${e.radius} 0 0 ${e.sweepFlag} ${e.exit.x} ${e.exit.y}`];return Math.hypot(i.x-e.exit.x,i.y-e.exit.y)>.5&&n.push(`L${i.x} ${i.y}`),n.join(" ")}_junctionJoinAfterReversePath(t,e,i){const n=[`M${t.x} ${t.y}`];return Math.hypot(t.x-e.exit.x,t.y-e.exit.y)>.5&&n.push(`L${e.exit.x} ${e.exit.y}`),n.push(`A${e.radius} ${e.radius} 0 0 ${Rt(e.sweepFlag)} ${i.x} ${i.y}`),n.join(" ")}},Yt=986,qt=12,Kt=32,Zt={minX:70,maxX:916,minY:62,maxY:658},Qt=["var(--home-flow-junction-1-color, #f6b73c)","var(--home-flow-junction-2-color, #ef6c00)","var(--home-flow-junction-3-color, #f4a340)","var(--home-flow-junction-4-color, #b85f1a)"],te=0,ee=class extends mt{constructor(...t){super(...t),this.editable=!0,this.flowMaxValue=12e3,this.flowMinVisibleValue=10,this.hideZeroValues=!1,this.labelStyle="curved",this.leafRouting="funnel",this.layout={},this.links=[],this.nodes=[],this.viewBoxHeight=730,this.graphInstanceId=++te,this.requestedExternalIcons=/* @__PURE__ */new Set,this._labelTextMeasurer=new $t,this._isGraphVisible=!0,this._readonlyGraphOffset=0,this._graphOffset=0,this._graphOffsetX=0,this._straightLabelGap=0,this._lastPointerMoveTime=0,this._handleDocumentVisibilityChange=()=>{this._syncFlowAnimationPlayback()},this._handleLabelFontLoaded=()=>{this._labelTextMeasurer.clear(),this._syncLabelFont(),this.requestUpdate()}}connectedCallback(){var t;super.connectedCallback(),document.addEventListener("visibilitychange",this._handleDocumentVisibilityChange),null===(t=document.fonts)||void 0===t||t.addEventListener("loadingdone",this._handleLabelFontLoaded),this.updateComplete.then(()=>{this.isConnected&&(this._syncLabelFont(),this._observeLabelScale(),this._observeAnimationVisibility())})}disconnectedCallback(){var t,e,i;document.removeEventListener("visibilitychange",this._handleDocumentVisibilityChange),null===(t=document.fonts)||void 0===t||t.removeEventListener("loadingdone",this._handleLabelFontLoaded),null===(e=this._animationVisibilityObserver)||void 0===e||e.disconnect(),null===(i=this._labelScaleObserver)||void 0===i||i.disconnect(),this._cancelPendingPointerMove(),super.disconnectedCallback()}_observeAnimationVisibility(){var t;"undefined"!=typeof IntersectionObserver?(null!==(t=this._animationVisibilityObserver)&&void 0!==t||(this._animationVisibilityObserver=new IntersectionObserver(t=>{const e=t[0];e&&e.isIntersecting!==this._isGraphVisible&&(this._isGraphVisible=e.isIntersecting,this._syncFlowAnimationPlayback())},{rootMargin:"100px"})),this._animationVisibilityObserver.disconnect(),this._animationVisibilityObserver.observe(this),this._syncFlowAnimationPlayback()):this._syncFlowAnimationPlayback()}_syncFlowAnimationPlayback(){const t=this.renderRoot.querySelector(".flow-svg");if(!t)return;const e=document.hidden||!this._isGraphVisible;try{e?t.pauseAnimations():t.unpauseAnimations()}catch{}}_observeLabelScale(){var t;const e=this.renderRoot.querySelector(".flow-svg");e&&"undefined"!=typeof ResizeObserver&&(null!==(t=this._labelScaleObserver)&&void 0!==t||(this._labelScaleObserver=new ResizeObserver(t=>{var e;const i=null===(e=t[0])||void 0===e?void 0:e.contentRect;if(!i||i.width<=0||i.height<=0)return;const n=Math.max(730,Math.round(Yt*i.height/i.width)),o=Math.min(i.width/Yt,i.height/n);if(!Number.isFinite(o)||o<=0)return;const r=3/o,s=6/o,a=Math.abs(n-this.viewBoxHeight)>=1,l=Math.abs(r-this._straightLabelGap)>=.05,d=Math.abs(s-this._readonlyGraphOffset)>=.05;(a||l||d)&&(a&&(this.viewBoxHeight=n),l&&(this._straightLabelGap=r),d&&(this._readonlyGraphOffset=s),this.requestUpdate())})),this._labelScaleObserver.disconnect(),this._labelScaleObserver.observe(e))}_syncLabelFont(){const t=this.renderRoot.querySelector(".node-label"),e=getComputedStyle(null!=t?t:this),i=`${t?e.fontWeight:"400"} ${t?e.fontSize:"27px"} ${e.fontFamily}`;this._labelTextMeasurer.setFont(i)&&this.requestUpdate()}_leafRouter(){var t;if((null===(t=this._leafRouterCache)||void 0===t?void 0:t.routing)===this.leafRouting)return this._leafRouterCache.router;const e=new Xt(this.leafRouting,(t,e,i,n)=>this._connectionPoint(t,e,i,n));return this._leafRouterCache={router:e,routing:this.leafRouting},e}_junctionRouter(){var t;return null!==(t=this._junctionRouterInstance)&&void 0!==t||(this._junctionRouterInstance=new Wt((t,e,i,n)=>this._connectionPoint(t,e,i,n),(t,e,i)=>this._defaultConnectorPath(t,e,i),(t,e)=>this._guideNode(t,e),(t,e)=>this._linkAnchor(t,e),(t,e)=>this._nearestAnchorIndex(t,e),(t,e,i)=>this._sameLinkEnds(t,e,i))),this._junctionRouterInstance}_flowEngine(){var t;if((null===(t=this._flowEngineCache)||void 0===t?void 0:t.min)===this.flowMinVisibleValue&&this._flowEngineCache.max===this.flowMaxValue)return this._flowEngineCache.engine.links=this.links,this._flowEngineCache.engine;const e=new It(this.flowMinVisibleValue,this.flowMaxValue,this.links,(t,e)=>this._junctionFlowColor(t,e));return this._flowEngineCache={engine:e,max:this.flowMaxValue,min:this.flowMinVisibleValue},e}_nodeRenderer(){if(this._nodeRendererInstance)return this._nodeRendererInstance;const t=this;return this._nodeRendererInstance=new Ft({get activeNode(){return t.activeNode},get editable(){return t.editable},graphInstanceId:this.graphInstanceId,get hideZeroValues(){return t.hideZeroValues},get labelStyle(){return t.labelStyle},get selectedNode(){return t.selectedNode},_labelTextMeasurer:this._labelTextMeasurer,get _straightLabelGap(){return t._straightLabelGap},get _graphOffsetX(){return t._graphOffsetX},_anchorAngle:t=>this._anchorAngle(t),_emitNodeAction:(t,e)=>this._emitNodeAction(t,e),_handleNodeActionKeydown:(t,e)=>this._handleNodeActionKeydown(t,e),_hasNodeFlowArrow:t=>this._hasNodeFlowArrow(t),_isJunctionJunctionLink:(t,e)=>this._isJunctionJunctionLink(t,e),_junctionJoinGeometry:(t,e,i,n)=>this._junctionJoinGeometry(t,e,i,n),_linkAnchor:(t,e)=>this._linkAnchor(t,e),_nearestAnchorIndex:(t,e)=>this._nearestAnchorIndex(t,e),_nodeActionLabel:t=>this._nodeActionLabel(t),_nodeColorCached:(t,e,i,n)=>this._nodeColorCached(t,e,i,n),_nodeDisplayValue:(t,e,i)=>this._nodeDisplayValue(t,e,i),_nodeFlowValue:t=>this._nodeFlowValue(t),_nodePrimaryValue:(t,e,i)=>this._nodePrimaryValue(t,e,i),_normalizeAnchorIndex:t=>this._normalizeAnchorIndex(t),_startLabelDrag:(t,e,i,n)=>this._startLabelDrag(t,e,i,n),_startNodeDrag:(t,e)=>this._startNodeDrag(t,e)}),this._nodeRendererInstance}_interactionController(){if(this._interactionControllerInstance)return this._interactionControllerInstance;const t=this;return this._interactionControllerInstance=new Dt({get activeNode(){return t.activeNode},set activeNode(e){t.activeNode=e},get editable(){return t.editable},get hoverTarget(){return t.hoverTarget},set hoverTarget(e){t.hoverTarget=e},get labelStyle(){return t.labelStyle},get layout(){return t.layout},set layout(e){t.layout=e},get links(){return t.links},set links(e){t.links=e},get pendingLink(){return t.pendingLink},set pendingLink(e){t.pendingLink=e},get pointerPoint(){return t.pointerPoint},set pointerPoint(e){t.pointerPoint=e},get renderRoot(){return t.renderRoot},get selectedLink(){return t.selectedLink},set selectedLink(e){t.selectedLink=e},get selectedNode(){return t.selectedNode},set selectedNode(e){t.selectedNode=e},_anchorIndexForPointerPoint:(t,e,i,n)=>this._anchorIndexForPointerPoint(t,e,i,n),_anchorPoint:(t,e,i)=>this._anchorPoint(t,e,i),_capturePointer:t=>this._capturePointer(t),_clampedPoint:t=>this._clampedPoint(t),_connectionPoint:(t,e,i,n)=>this._connectionPoint(t,e,i,n),_emitLayoutChange:(t,e)=>this._emitLayoutChange(t,e),_emitLinksChange:(t,e)=>this._emitLinksChange(t,e),_emitNodeLabelChange:(t,e)=>this._emitNodeLabelChange(t,e),_emitNodeRemove:t=>this._emitNodeRemove(t),_emitNodeSelect:t=>this._emitNodeSelect(t),_eventPoint:t=>this._eventPoint(t),_junctionJoinGeometry:(t,e,i)=>this._junctionJoinGeometry(t,e,i),_junctionLineDetour:(t,e,i,n)=>this._junctionLineDetour(t,e,i,n),_linkAnchor:(t,e)=>this._linkAnchor(t,e),_model:()=>this._model(),_nearestAnchorIndex:(t,e)=>this._nearestAnchorIndex(t,e),_nodeCurvedLabelHandlePoint:(t,e,i)=>this._nodeCurvedLabelHandlePoint(t,e,i),_nodeStraightLabelPoint:(t,e,i)=>this._nodeStraightLabelPoint(t,e,i),_normalizeAnchorIndex:t=>this._normalizeAnchorIndex(t)}),this._interactionControllerInstance}render(){const t=this._model(),e=this._normalizedLinks(t.nodes),i=this._hiddenNodeIds(t.nodes,e),n=this._visibleNodes(t.nodes,i),o=e.filter(e=>this._isVisibleLink(e,t.nodes,i)),r=this._renderContext(t,o,e),s=o.filter(e=>this._isJunctionJunctionLink(e,t.nodes)),a=o.filter(e=>!this._isJunctionJunctionLink(e,t.nodes)),l=this._nodesByZLayer(n);return Y`
      <section
        class=${"card "+(this.editable?"editable":"readonly")}
        aria-label="Flow graph"
      >
        <svg
          class="flow-svg"
          viewBox=${`0 0 986 ${this.viewBoxHeight}`}
          preserveAspectRatio="xMidYMid meet"
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
          <g class="graph-content" transform=${`translate(${this._graphOffsetX} ${this._graphOffset})`}>
          ${a.map(i=>this._renderGraphLink(i,t,e,r))}
          ${s.map(i=>this._renderGraphLink(i,t,e,r))}
          ${l.map(i=>this._renderNodeLayer(i,t,o,e,r))}
          </g>
          ${this.editable?this._renderPendingLink(n,e):Z}
          ${this.editable?this._renderAnchorControls(n,o):Z}
          ${this.editable?q`
                <text
                  class="graph-build-version"
                  x=${972}
                  y=${this.viewBoxHeight-12}
                  text-anchor="end"
                  aria-hidden="true"
                >${"2026-09-05 20:46Z"}</text>
              `:Z}
        </svg>
      </section>
    `}_renderEditorGrid(){const t=`home-flow-grid-minor-${this.graphInstanceId}`,e=`home-flow-grid-major-${this.graphInstanceId}`;return q`
      <defs>
        <pattern
          id=${t}
          width=${qt}
          height=${qt}
          patternUnits="userSpaceOnUse"
          patternTransform=${`translate(${Zt.minX} ${Zt.minY})`}
        >
          <circle class="editor-grid-dot" cx="0" cy="0" r="0.85" />
        </pattern>
        <pattern
          id=${e}
          width=${48}
          height=${48}
          patternUnits="userSpaceOnUse"
          patternTransform=${`translate(${Zt.minX} ${Zt.minY})`}
        >
          <rect width="100%" height="100%" fill=${`url(#${t})`} />
          <circle class="editor-grid-dot major" cx="0" cy="0" r="1.15" />
        </pattern>
      </defs>
      <rect
        class="editor-grid"
        x="0"
        y="0"
        width=${Yt}
        height=${this.viewBoxHeight}
        fill=${`url(#${e})`}
      />
    `}_renderContext(t,e,i=e){const n=this._geometryCacheFor(t,i),o={colors:/* @__PURE__ */new Map,joinGeometries:n.joinGeometries,maxValues:/* @__PURE__ */new Map,minVisibleValues:/* @__PURE__ */new Map,nodeColors:/* @__PURE__ */new Map,paths:n.paths,signedValues:/* @__PURE__ */new Map,sourceParts:/* @__PURE__ */new Map},r=t.nodes;return e.forEach(e=>{const n=this._linkSignedValue(e,r,i,o),s=this._linkMinVisibleValue(e,r,i),a=this._linkMaxValue(e,s,r,i);o.paths.has(e.id)||o.paths.set(e.id,this._graphLinkPath(e,r,i,o)),o.signedValues.set(e.id,n),o.minVisibleValues.set(e.id,s),o.maxValues.set(e.id,a),this._shouldShowFlow(Math.abs(n),s)&&(o.colors.set(e.id,this._linkColor(e,t,i,n,o)),o.sourceParts.set(e.id,this._linkSourceParts(e,t,i,n,o)))}),o}_geometryCacheFor(t,e){var i;const n=this._geometryCacheKey(t,e);return(null===(i=this._geometryCache)||void 0===i?void 0:i.key)===n||(this._geometryCache={joinGeometries:/* @__PURE__ */new Map,key:n,paths:/* @__PURE__ */new Map}),this._geometryCache}_geometryCacheKey(t,e){const i=Object.values(t.nodes).sort((t,e)=>t.id.localeCompare(e.id)).map(t=>[t.id,t.kind,Math.round(100*t.point.x)/100,Math.round(100*t.point.y)/100,t.radius].join(":")).join("|"),n=e.map(t=>{var e,i,n,o,r;return[t.id,t.from,t.to,null!==(e=t.fromAnchor)&&void 0!==e?e:"",null!==(i=t.fromAnchorMode)&&void 0!==i?i:"",null!==(n=t.toAnchor)&&void 0!==n?n:"",null!==(o=t.toAnchorMode)&&void 0!==o?o:"",null!==(r=t.junctionJoinId)&&void 0!==r?r:""].join(":")}).join("|");return`${this.leafRouting}::${i}::${n}`}_isJunctionJunctionLink(t,e){var i,n;return"junction"===(null===(i=e[t.from])||void 0===i?void 0:i.kind)&&"junction"===(null===(n=e[t.to])||void 0===n?void 0:n.kind)}_model(){const t=this._positionedNodes(),e=this._spreadLayoutNodes(t),i={nodes:Object.fromEntries(e.map(t=>[t.id,t]))},n=this._normalizedLinks(i.nodes);return this._graphOffsetX=this._readonlyGraphHorizontalTranslation(e),this._nodeRenderer().prepareLabelLayout(i,n),this._graphOffset=this._readonlyGraphTranslation(i,n),i}_spreadLayoutNodes(t){var e;if(this.editable)return t;const i=JSON.stringify([this.viewBoxHeight,t.map(t=>[t.id,t.kind,t.stackIndex,t.radius,t.point.x,t.point.y]),this.links.map(t=>[t.from,t.to])]);if((null===(e=this._spreadLayoutCache)||void 0===e?void 0:e.key)!==i){const e=function(t,e,i){if(t.length<2)return t;const n=kt(t,e),o=new Map(t.map(t=>[t.id,t])),r=/* @__PURE__ */new Map;for(const u of t){var s;const t=o.get(At(u.id,n)),e=null!==(s=r.get(t.id))&&void 0!==s?s:{y:t.point.y,top:0,bottom:0};e.top=Math.max(e.top,t.point.y-u.point.y+u.radius),e.bottom=Math.max(e.bottom,u.point.y-t.point.y+u.radius),r.set(t.id,e)}const a=Array.from(r.values()),l=Math.min(...a.map(t=>t.y)),d=Math.max(...a.map(t=>t.y));if(d<=l)return t;const h=Math.max(l,...a.map(t=>t.top+72)),c=(i-Math.max(...a.map(t=>t.bottom))-72-h)/(d-l);return c<=1?t:t.map(t=>{const e=r.get(At(t.id,n));return{...t,point:{...t.point,y:h+(e.y-l)*c+t.point.y-e.y}}})}(t,this.links,this.viewBoxHeight);this._spreadLayoutCache={key:i,points:new Map(e.map(t=>[t.id,t.point]))}}return t.map(t=>({...t,point:this._spreadLayoutCache.points.get(t.id)}))}_readonlyGraphTranslation(t,e){const i=Object.values(t.nodes);if(this.editable||0===i.length)return 0;if("straight"!==this.labelStyle)return this._readonlyGraphOffset;const n=t=>t.radius+("junction"===t.kind?2:1.25);let o=Math.min(...i.map(t=>t.point.y-n(t))),r=Math.max(...i.map(t=>t.point.y+n(t)));for(const s of i){if(!s.label.trim())continue;const i=this._nodeRenderer().straightLabelLayout(s,t,e);o=Math.min(o,i.point.y+i.inkTop),r=Math.max(r,i.point.y+i.inkBottom)}return(this.viewBoxHeight-o-r)/2}_readonlyGraphHorizontalTranslation(t){if(this.editable||0===t.length)return 0;const e=t=>t.radius+("junction"===t.kind?2:1.25),i=Math.min(...t.map(t=>t.point.x-e(t))),n=Math.max(...t.map(t=>t.point.x+e(t)));return(Yt-i-n)/2}_visibleNodes(t,e){return Object.fromEntries(Object.entries(t).filter(([t])=>!e.has(t)))}_hiddenNodeIds(t,e){return new Set(Object.values(t).filter(i=>this._isHiddenByZero(i,t,e)).map(t=>t.id))}_isVisibleLink(t,e,i){const n=e[t.from],o=e[t.to];return Boolean(n&&o&&!i.has(n.id)&&!i.has(o.id))}_isHiddenByZero(t,e,i){var n;if(!0!==t.hideIfZero)return!1;const o=this._nodeDisplayValue(t,{nodes:e},i);return Math.abs(o)<=(null!==(n=t.hideBelow)&&void 0!==n?n:.5)}_nodesByZLayer(t){return Object.values(t).sort((t,e)=>{const i=e.stackIndex-t.stackIndex;return 0!==i?i:t.id.localeCompare(e.id)})}_defaultNodeRadius(t){return"junction"===t?90:65}_positionedNodes(){return this.nodes.map((t,e)=>{var i,n,o;return{id:t.id,kind:t.kind,stackIndex:e,label:t.label,labelAngle:Number.isFinite(t.labelAngle)?t.labelAngle:void 0,labelOffsetX:Number.isFinite(t.labelOffsetX)?t.labelOffsetX:void 0,labelOffsetY:Number.isFinite(t.labelOffsetY)?t.labelOffsetY:void 0,value:Number.isFinite(t.value)?t.value:0,flowValue:Number.isFinite(t.flowValue)?t.flowValue:void 0,hasOwnValue:t.hasOwnValue,contributesToFlow:t.contributesToFlow,secondary:t.secondary,secondaryDisplayValue:t.secondaryDisplayValue,displayValue:t.displayValue,hideZeroValues:t.hideZeroValues,hideIfZero:t.hideIfZero,hideBelow:t.hideBelow,showFlowArrow:t.showFlowArrow,highlightWhenActive:t.highlightWhenActive,activeFrom:t.activeFrom,junctionDisplayMode:t.junctionDisplayMode,primaryAction:t.primaryAction,secondaryAction:t.secondaryAction,radius:yt(null!==(i=t.radius)&&void 0!==i?i:this._defaultNodeRadius(t.kind),20,100),point:this._clampedPoint(null!==(n=this.layout[t.id])&&void 0!==n?n:this._fallbackPoint(t.kind,e)),icon:null===t.icon?void 0:null!==(o=t.icon)&&void 0!==o?o:this._defaultIcon(t.kind),secondaryIcon:null===t.secondaryIcon?void 0:t.secondaryIcon,unit:t.unit,color:t.color,flowMinVisibleValue:t.flowMinVisibleValue,flowMaxValue:t.flowMaxValue}})}_fallbackPoint(t,e){return"junction"===t?{x:350+e%3*150,y:330+110*Math.floor(e/3)}:"leaf"===t?{x:270+e%4*130,y:100+88*Math.floor(e/4)}:{x:770+e%2*110,y:360+108*Math.floor(e/2)}}_renderGraphLink(t,e,i,n){var o,r,s,a,l;const d=e.nodes,h=d[t.from],c=d[t.to];if(!h||!c)return Z;const u=null!==(o=n.signedValues.get(t.id))&&void 0!==o?o:this._linkSignedValue(t,d,i,n),p=Math.abs(u),f=null!==(r=n.paths.get(t.id))&&void 0!==r?r:this._graphLinkPath(t,d,i,n);if(!f)return Z;const _=this.selectedLink===t.id,v=null!==(s=n.minVisibleValues.get(t.id))&&void 0!==s?s:this._linkMinVisibleValue(t,d,i),m=null!==(a=n.maxValues.get(t.id))&&void 0!==a?a:this._linkMaxValue(t,v,d,i),g=this._shouldShowFlow(p,v),y=g?this._flowWidth(p,v,m):2.4,b=g?null!==(l=n.colors.get(t.id))&&void 0!==l?l:this._linkColor(t,e,i,u,n):"var(--home-flow-junction-1-color, #f6b73c)",x=g?n.sourceParts.has(t.id)?n.sourceParts.get(t.id):this._linkSourceParts(t,e,i,u,n):void 0,$=this._junctionConnectionMarker(t,e,i,n);return q`
      <path class=${"connector base "+(_?"selected":"")} d=${f} />
      ${g?this._renderFlowPath(t,f,u,b,y,x):Z}
      ${$?this._renderJunctionConnectionMarker($,_):Z}
      ${this.editable||t.entity?q`
            <path
              class=${"connector-hit "+(_?"selected":"")}
              d=${f}
              @pointerdown=${this.editable?e=>this._selectLink(e,t.id):void 0}
              @click=${!this.editable&&t.entity?e=>this._emitEntityMoreInfo(t.entity,e):void 0}
            />
          `:Z}
    `}_renderFlowPath(t,e,i,n,o,r){const s=r&&r.length>0?r:[{color:n,key:`${t.id}-fallback`,length:18,start:0}];if(1===s.length)return q`
        <path
          class="connector flow source-single"
          d=${e}
          stroke=${s[0].color}
          stroke-width=${o}
          stroke-dasharray=${"18 22"}
        >
          ${this._renderFlowAnimation(i)}
        </path>
      `;const[a,...l]=s,d=this._splitFlowMaskId(t);return q`
      <mask
        id=${d}
        class="source-flow-mask"
        maskUnits="userSpaceOnUse"
        maskContentUnits="userSpaceOnUse"
        x="-24"
        y="-24"
        width=${1034}
        height=${this.viewBoxHeight+48}
      >
        <path
          class="connector flow source-mask"
          d=${e}
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
          d=${e}
          stroke=${a.color}
          stroke-width=${o}
          stroke-dasharray=${"18 22"}
        >
          ${this._renderFlowAnimation(i)}
        </path>
        ${l.map(t=>{const n=this._sourceTailOffset(t),r=this._sourceTailVisibleLength(t);return q`
            <path
              class="connector flow split-flow source-split"
              d=${e}
              stroke=${t.color}
              stroke-width=${o}
              stroke-dasharray=${`${r} ${40-r}`}
              stroke-dashoffset=${n}
            >
              ${this._renderFlowAnimation(i,n)}
            </path>
          `})}
      </g>
    `}_renderFlowAnimation(t,e=0){return q`
      <animate
        attributeName="stroke-dashoffset"
        begin="0s"
        dur=${"1.8s"}
        from=${e}
        to=${t>=0?e-40:e+40}
        repeatCount="indefinite"
      />
    `}_sourceTailOffset(t){return-t.start}_sourceTailVisibleLength(t){return yt(18-t.start,0,40)}_splitFlowMaskId(t){return`home-flow-split-${this.graphInstanceId}-${t.id.replace(/[^a-zA-Z0-9_-]/g,"-")}`}_junctionConnectionMarker(t,e,i,n){if(!this._isJunctionJunctionLink(t,e.nodes))return;const o=this._junctionJoinGeometry(t,e.nodes,i,n);return(null==o?void 0:o.tap)&&o.branchLinkId===t.id?o.tap:void 0}_renderJunctionConnectionMarker(t,e){return q`
      <circle
        class=${"bus-tap "+(e?"selected":"")}
        cx=${t.x}
        cy=${t.y}
        r="6"
        aria-hidden="true"
      />
    `}_junctionFlowColor(t,e){var i;const n=null==e||null===(i=e[t])||void 0===i?void 0:i.color;if(n)return n;const o=Object.values(null!=e?e:{}).filter(t=>"junction"===t.kind),r=Math.max(0,o.findIndex(e=>e.id===t));return Qt[r%Qt.length]}_graphLinkPath(t,e,i,n){const o=e[t.from],r=e[t.to];if(!o||!r)return"";const s=[o,r].find(t=>"junction"===t.kind),a=[o,r].find(t=>"leaf"===t.kind);if(a&&s)return this._leafRouter().connectorPath(t,a,s,e,i);if("junction"===o.kind&&"junction"===r.kind){return this._junctionJoinedConnectionPath(t,e,i,n)||this._junctionConnectorPath(o,r,e,{from:this._linkAnchor(t,o.id),to:this._linkAnchor(t,r.id)})}return this._defaultConnectorPath(o,r,{from:this._linkAnchor(t,o.id),to:this._linkAnchor(t,r.id)})}_junctionConnectorPath(t,e,i,n={}){return this._junctionRouter().connectorPath(t,e,i,n)}_junctionJoinedConnectionPath(t,e,i,n){return this._junctionRouter().joinedConnectionPath(t,e,i,null==n?void 0:n.joinGeometries)}_junctionJoinGeometry(t,e,i,n){return this._junctionRouter().joinGeometry(t,e,i,null==n?void 0:n.joinGeometries)}_junctionLineDetour(t,e,i,n=0){return this._junctionRouter().lineDetour(t,e,i,n)}_defaultConnectorPath(t,e,i={}){return this._leafRouter().defaultConnectorPath(t,e,i)}_linkAnchor(t,e){return this._leafRouter().linkAnchor(t,e)}_guideNode(t,e){return this._leafRouter().guideNode(t,e)}_renderNodeLayer(t,e,i,n,o){return this._nodeRenderer().render(t,e,i,n,o)}_nodeStraightLabelPoint(t,e,i){return this._nodeRenderer().straightLabelPoint(t,e,i)}_nodeCurvedLabelHandlePoint(t,e,i){return this._nodeRenderer().curvedLabelHandlePoint(t,e,i)}willUpdate(t){if(t.has("nodes")||!this.hasUpdated)for(const e of this.nodes)for(const t of[e.icon,e.secondaryIcon])(null==t?void 0:t.includes(":"))&&this._queueExternalIcon(t)}_queueExternalIcon(t){(t=>St.has(t))(t)||this.requestedExternalIcons.has(t)||(this.requestedExternalIcons.add(t),async function(t){var e;if(St.has(t))return null!==(e=St.get(t))&&void 0!==e?e:null;const i=jt.get(t);if(i)return i;const n=(async()=>{for(let e=0;e<=Vt.length;e++){try{const e=await Ot(t);if(e)return e}catch{}e<Vt.length&&await Et(Vt[e])}return null})();jt.set(t,n);try{const e=await n;return St.set(t,e),e}finally{jt.delete(t)}}(t).finally(()=>{this.requestedExternalIcons.delete(t),this.isConnected&&this.requestUpdate()}))}_renderPendingLink(t,e){if(!this.pendingLink||!this.pointerPoint)return Z;const i=t[this.pendingLink.from];if(!i)return Z;const n=this._pendingLinkPath(i,t,e);return n?q`
      <path
        class="connector base selected pending"
        d=${n}
      />
    `:Z}_pendingLinkPath(t,e,i){if(!this.pendingLink||!this.pointerPoint)return"";const n=this.hoverTarget?e[this.hoverTarget]:void 0;if(n&&this._isCompatibleLink(t,n)){const o=this._nearestAnchorIndex(n,this.pointerPoint),r=this._manualLink(this._canonicalLink(t,n,this.pendingLink.fromAnchor,o)),s=this._replaceLink(i,r);return this._graphLinkPath(r,e,s)}const o=this._pendingJunctionConnectionCandidate(t,this.pointerPoint,e);if(o){const e=this._guideNode("pending-junction-connection-pointer",o.point);return this._defaultConnectorPath(t,e,{from:this.pendingLink.fromAnchor})}const r=this._guideNode("pending-pointer",this.pointerPoint);return this._defaultConnectorPath(t,r,{from:this.pendingLink.fromAnchor})}_renderAnchorControls(t,e){if(this.pendingLink){const e=t[this.pendingLink.from],i=this.hoverTarget?t[this.hoverTarget]:void 0,n=i&&this.pointerPoint?this._nearestAnchorIndex(i,this.pointerPoint):void 0;return q`
        ${e?this._renderAnchorPoints(e,"source",{selectedAnchorIndex:this.pendingLink.fromAnchor}):Z}
        ${i?this._renderAnchorPoints(i,"target",{selectedAnchorIndex:n}):Z}
      `}if(this.selectedLink){const i=e.find(t=>t.id===this.selectedLink);if(i)return q`
          ${this._linkEndControls(i,t,e).map(t=>this._renderAnchorPoints(t.node,"source",{fixedLinkEnd:t}))}
        `}if(!this.selectedNode)return Z;const i=t[this.selectedNode];return i&&this._canStartLink(i)?this._renderAnchorPoints(i,"source",{linkEnds:this._nodeLinkEndControls(i.id,t,e)}):Z}_renderAnchorPoints(t,e,i={}){return q`
      <g class=${`anchor-controls ${e}`}>
        ${Array.from({length:Kt},(n,o)=>{var r,s;const a=this._anchorPoint(t,o),l=null!==(r=i.fixedLinkEnd)&&void 0!==r?r:null===(s=i.linkEnds)||void 0===s?void 0:s.find(t=>t.anchorIndex===o),d=void 0!==i.selectedAnchorIndex&&this._normalizeAnchorIndex(i.selectedAnchorIndex)===o,h=i.fixedLinkEnd?i.fixedLinkEnd.anchorIndex===o:Boolean(l)||d;return q`
            <g class=${"anchor-handle "+(h?"selected":"")}>
              <circle
                class="anchor-hit"
                cx=${a.x}
                cy=${a.y}
                r=${15}
                @pointerdown=${i=>l?this._startAnchorDrag(i,l,o):"source"===e?this._startPendingLink(i,t,o):this._commitPendingLink(i,t,o)}
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
    `}_linkEndControls(t,e,i){return["from","to"].map(n=>{const o=e["from"===n?t.from:t.to];if(this._isVirtualJunctionJoinEnd(t,n,e,i))return;const r=this._linkEndAnchorIndex(t,n,e,i);return!o||o.radius<=0||void 0===r?void 0:{anchorIndex:r,end:n,link:t,node:o}}).filter(t=>Boolean(t))}_isVirtualJunctionJoinEnd(t,e,i,n){const o=this._junctionJoinGeometry(t,i,n);return!(!(null==o?void 0:o.pathsByLinkId)||o.busLinkId!==t.id)&&("from"===e?t.from:t.to)===o.middleId}_nodeLinkEndControls(t,e,i){return i.flatMap(n=>this._linkEndControls(n,e,i).filter(e=>e.node.id===t))}_linkEndAnchorIndex(t,e,i,n){const o=i["from"===e?t.from:t.to];if(!o||o.radius<=0)return;const r="from"===e?"manual"===t.fromAnchorMode?t.fromAnchor:void 0:"manual"===t.toAnchorMode?t.toAnchor:void 0;if(void 0!==r)return this._normalizeAnchorIndex(r);if("leaf"===o.kind){const r=this._leafAutoAnchorReferencePoint(t,e,i,n);if(r)return this._nearestAnchorIndex(o,r)}const s=this._graphLinkPath(t,i,n),a=this._pathLinkEndPoint(s,e);return a?this._nearestAnchorIndex(o,a):void 0}_leafAutoAnchorReferencePoint(t,e,i,n){return this._leafRouter().autoAnchorReference(t,e,i,n)}_pathLinkEndPoint(t,e){const i=this._pathNumbers(t);if(!i||i.length<2)return;const n="from"===e?0:i.length-2;return{x:i[n],y:i[n+1]}}_pathNumbers(t){var e,i;return null!==(e=null===(i=t.match(/-?\d+(?:\.\d+)?(?:e[-+]?\d+)?/gi))||void 0===i?void 0:i.map(t=>Number(t)))&&void 0!==e?e:[]}_normalizedLinks(t){return this._interactionController().normalizeLinks(t)}_clearInteraction(t){return this._interactionController().clearInteraction(t)}_handlePointerMove(t){this._pendingPointerMove=t,this._schedulePendingPointerMove()}_schedulePendingPointerMove(){void 0===this._pointerMoveFrame&&(this._pointerMoveFrame=requestAnimationFrame(t=>{if(this._pointerMoveFrame=void 0,this._lastPointerMoveTime>0&&t-this._lastPointerMoveTime<15.666666666666668)return void this._schedulePendingPointerMove();const e=this._pendingPointerMove;this._pendingPointerMove=void 0,e&&(this._lastPointerMoveTime=t,this._interactionController().handlePointerMove(e))}))}_handlePointerUp(t){return this._flushPendingPointerMove(),this._interactionController().handlePointerUp(t)}_flushPendingPointerMove(){void 0!==this._pointerMoveFrame&&(cancelAnimationFrame(this._pointerMoveFrame),this._pointerMoveFrame=void 0);const t=this._pendingPointerMove;this._pendingPointerMove=void 0,t&&this._interactionController().handlePointerMove(t)}_cancelPendingPointerMove(){void 0!==this._pointerMoveFrame&&(cancelAnimationFrame(this._pointerMoveFrame),this._pointerMoveFrame=void 0),this._pendingPointerMove=void 0,this._lastPointerMoveTime=0}_handleKeydown(t){return this._interactionController().handleKeydown(t)}_selectLink(t,e){return this._interactionController().selectLink(t,e)}_startAnchorDrag(t,e,i){return this._interactionController().startAnchorDrag(t,e,i)}_startPendingLink(t,e,i){return this._interactionController().startPendingLink(t,e,i)}_commitPendingLink(t,e,i){return this._interactionController().commitPendingLink(t,e,i)}_startNodeDrag(t,e){return this._interactionController().startNodeDrag(t,e)}_startLabelDrag(t,e,i,n){return this._interactionController().startLabelDrag(t,e,i,n)}_canonicalLink(t,e,i,n){return this._interactionController().canonicalLink(t,e,i,n)}_manualLink(t){return this._interactionController().manualLink(t)}_replaceLink(t,e){return this._interactionController().replaceLink(t,e)}_pendingJunctionConnectionCandidate(t,e,i){return this._interactionController().pendingJunctionConnectionCandidate(t,e,i)}_isCompatibleLink(t,e){return this._interactionController().isCompatibleLink(t,e)}_canStartLink(t){return this._interactionController().canStartLink(t)}_sameLinkEnds(t,e,i){return this._interactionController().sameLinkEnds(t,e,i)}_linkSignedValue(t,e,i=this.links,n){return this._flowEngine().signedValue(t,e,i,n)}_nodeFlowValue(t){return this._flowEngine().nodeFlowValue(t)}_linkSourceParts(t,e,i,n,o){return this._flowEngine().sourceParts(t,e,i,n,o)}_linkColor(t,e,i,n,o){return this._flowEngine().color(t,e,i,n,o)}_nodeColorCached(t,e,i,n){return this._flowEngine().nodeColor(t,e,i,n)}_shouldShowFlow(t,e){return this._flowEngine().showsFlow(t,e)}_flowWidth(t,e,i){return this._flowEngine().width(t,e,i)}_linkMinVisibleValue(t,e,i=this.links){return this._flowEngine().linkMinValue(t,e,i)}_linkMaxValue(t,e,i,n=this.links){return this._flowEngine().linkMaxValue(t,e,i,n)}_nodePrimaryValue(t,e,i){return this._flowEngine().primaryValue(t,e,i)}_nodeDisplayValue(t,e,i){return this._flowEngine().displayValue(t,e,i)}_hasNodeFlowArrow(t){return this._flowEngine().hasFlowArrow(t)}_connectionPoint(t,e,i,n){if(t.radius>0){const o=null!=n?n:"junction"===t.kind?10:0;return this._anchorPoint(t,null!=i?i:this._nearestAnchorIndex(t,e.point),o)}return t.point}_anchorPoint(t,e,i=10){const n=this._anchorAngle(e),o=Math.max(0,t.radius+i);return{x:Math.round(t.point.x+Math.cos(n)*o),y:Math.round(t.point.y+Math.sin(n)*o)}}_anchorAngle(t){const e=this._normalizeAnchorIndex(t);return-Math.PI/2+e*(2*Math.PI/Kt)}_nearestAnchorIndex(t,e){const i=(Math.atan2(e.y-t.point.y,e.x-t.point.x)+Math.PI/2)/(2*Math.PI)*Kt;return this._normalizeAnchorIndex(Math.round(i))}_normalizeAnchorIndex(t){return(Math.round(t)%Kt+Kt)%Kt}_anchorIndexForPointerPoint(t,e,i,n){const o=void 0!==i?this._normalizeAnchorIndex(i):void 0,r=void 0!==n?this._normalizeAnchorIndex(n):void 0,s=this._nearestAnchorIndex(t,e);if(void 0!==o){const i=this._anchorPoint(t,o,0),n=this._anchorPoint(t,s,0),r=Math.hypot(e.x-i.x,e.y-i.y),a=Math.hypot(e.x-n.x,e.y-n.y);if(r<=21||r<=a+7)return o}return null!=r?r:s}_clampedPoint(t){const e={...Zt,maxY:Math.max(Zt.maxY,this.viewBoxHeight-72)},i=yt(t.x,e.minX,e.maxX),n=yt(t.y,e.minY,e.maxY),o={x:e.minX+Math.round((i-e.minX)/qt)*qt,y:e.minY+Math.round((n-e.minY)/qt)*qt};return{x:yt(o.x,e.minX,e.maxX),y:yt(o.y,e.minY,e.maxY)}}_defaultIcon(t){return"junction"===t?"mdi:hub":"mdi:leaf"}_capturePointer(t){try{var e,i;null===(e=t.currentTarget)||void 0===e||null===(i=e.setPointerCapture)||void 0===i||i.call(e,t.pointerId)}catch{}}_eventPoint(t){const e=this.renderRoot.querySelector(".flow-svg"),i=null==e?void 0:e.getScreenCTM();if(!i)return;const n=new DOMPoint(t.clientX,t.clientY).matrixTransform(i.inverse());return{x:n.x,y:n.y}}_emitLayoutChange(t,e=!1){this.dispatchEvent(new CustomEvent("graph-layout-change",{detail:{layout:t,live:e},bubbles:!0,composed:!0}))}_emitLinksChange(t,e=!1){this.dispatchEvent(new CustomEvent("graph-links-change",{detail:{links:t,live:e},bubbles:!0,composed:!0}))}_emitNodeSelect(t){this.dispatchEvent(new CustomEvent("graph-node-select",{detail:{nodeId:t},bubbles:!0,composed:!0}))}_emitNodeRemove(t){this.dispatchEvent(new CustomEvent("graph-node-remove",{detail:{nodeId:t},bubbles:!0,composed:!0}))}_emitNodeLabelChange(t,e=!1){this.dispatchEvent(new CustomEvent("graph-node-label-change",{detail:{...t,live:e},bubbles:!0,composed:!0}))}_nodeActionLabel(t){switch(t.type){case"toggle":return"toggle";case"navigate":return"navigate";case"url":return"open link";default:return"details"}}_emitNodeAction(t,e){t&&(null==e||e.stopPropagation(),null==e||e.preventDefault(),this.dispatchEvent(new CustomEvent("graph-node-action",{detail:{action:t},bubbles:!0,composed:!0})))}_emitEntityMoreInfo(t,e){t&&(null==e||e.stopPropagation(),null==e||e.preventDefault(),this.dispatchEvent(new CustomEvent("graph-entity-more-info",{detail:{entityId:t},bubbles:!0,composed:!0})))}_handleNodeActionKeydown(t,e){"Enter"!==t.key&&" "!==t.key||this._emitNodeAction(e,t)}};(Ht=ee).properties={activeNode:{state:!0},editable:{type:Boolean},hoverTarget:{state:!0},flowMaxValue:{type:Number,attribute:"flow-max-value"},flowMinVisibleValue:{type:Number,attribute:"flow-min-visible-value"},hideZeroValues:{type:Boolean,attribute:"hide-zero-values"},layout:{attribute:!1},labelStyle:{type:String,attribute:"label-style"},leafRouting:{type:String,attribute:"leaf-routing"},links:{attribute:!1},nodes:{attribute:!1},pendingLink:{state:!0},pointerPoint:{state:!0},selectedLink:{state:!0},selectedNode:{state:!0},viewBoxHeight:{state:!0}},Ht.styles=Lt,customElements.get("home-flow-graph-card")||customElements.define("home-flow-graph-card",ee);var ie=0;function ne(t){return`${t}-${ie+=1}`}function oe(t,e={}){var i;window.dispatchEvent(new CustomEvent("home-flow-card-preview-config-changed",{detail:{config:t,configKey:e.configKey,sourceConfigKey:null!==(i=e.sourceConfigKey)&&void 0!==i?i:e.configKey,sourceId:e.sourceId}}))}function re(t,e={}){window.dispatchEvent(new CustomEvent("home-flow-card-preview-node-selected",{detail:{configKey:e.configKey,nodeId:t,sourceId:e.sourceId,targetId:e.targetId}}))}var se="home-flow-card",ae="straight",le="funnel",de="fit-width",he="#2d8f8a",ce="#3f79c9",ue="#c65b4a",pe="#3f79c9",fe="#d6a500",_e=["device_class","friendly_name","icon","unit_of_measurement"],ve=["#f6b73c","#ef6c00","#f4a340","#b85f1a"],me=[he,ce,fe,pe,ue,"#ef6c00","#4f9b6d","#8a5cc2","#d04b89","#4d90d9","#7a7f2f","#c86b2f"],ge=[{id:"grid",kind:"junction",label:"Grid",icon:"mdi:transmission-tower",radius:90,color:he,flowDirection:"supply",balance_role:"junction"},{id:"home",kind:"junction",label:"Home",icon:"mdi:home-lightning-bolt",radius:90,color:ce,flowDirection:"consume",balance_role:"junction"},{id:"heat-pump",kind:"leaf",label:"Heat pump",icon:"mdi:heat-pump",radius:65,flowDirection:"consume"}],ye=[{id:"grid->home",from:"grid",to:"home"},{id:"heat-pump->home",from:"heat-pump",to:"home"}],be={grid:{x:245,y:365},home:{x:490,y:365},"heat-pump":{x:705,y:365}};function xe(t){const e=oi(t)?t:{},i=Array.isArray(e.nodes),n=si(e.flow_min_visible_value,10),o=Math.max(si(e.flow_max_value,12e3),n+1),r=!0===e.hide_zero_values;return{type:"string"==typeof e.type?e.type:`custom:${se}`,title:"string"==typeof e.title?e.title:void 0,nodes:we(e.nodes,r),links:Ve(e.links,!i),layout:Oe(e.layout,!i),flow_min_visible_value:n,flow_max_value:o,label_style:"straight"===e.label_style||"curved"===e.label_style?e.label_style:ae,leaf_routing:"channel"===e.leaf_routing||"radial"===e.leaf_routing||"orthogonal"===e.leaf_routing||"sweep"===e.leaf_routing?e.leaf_routing:le,scaling_mode:"fit-width"===e.scaling_mode||"shrink"===e.scaling_mode?e.scaling_mode:de,width:si(e.width,502),height:si(e.height,360),grid_options:$e(e.grid_options)}}function $e(t){if(!oi(t))return;const e="full"===t.columns?"full":li(t.columns),i=li(t.rows);return void 0!==e||void 0!==i?{columns:e,rows:i}:void 0}function we(t,e=!1){return Array.isArray(t)?t.filter(t=>oi(t)).filter(t=>"string"==typeof t.id&&void 0!==ke(t.kind)).map(t=>{var i,n,o;const r=null!==(i=ke(t.kind))&&void 0!==i?i:"leaf";return{id:String(t.id),kind:r,label:"string"==typeof t.label?t.label:ii(String(t.id)),label_angle:ai(t.label_angle),label_offset_x:ai(t.label_offset_x),label_offset_y:ai(t.label_offset_y),flow_mode:Le(t.flow_mode),entity:Be(t.entity),attribute:ri(t.attribute),incoming_entity:Be(t.incoming_entity),incoming_attribute:ri(t.incoming_attribute),outgoing_entity:Be(t.outgoing_entity),outgoing_attribute:ri(t.outgoing_attribute),secondary_entity:Be(t.secondary_entity),secondary_attribute:ri(t.secondary_attribute),primary_action:Ne(t.primary_action),primary_action_path:ri(t.primary_action_path),secondary_action:Ne(t.secondary_action),secondary_action_path:ri(t.secondary_action_path),value:ai(t.value),secondary:ai(t.secondary),factor:ai(t.factor),invert:!0===t.invert,flowDirection:Ae(t.flowDirection),allowed_flow:Pe(t.allowed_flow),balance_role:"junction"===r?null!==(n=Me(t.balance_role))&&void 0!==n?n:qe(r):void 0,junction_display_value:Ce(t.junction_display_value),hide_zero_values:"boolean"==typeof t.hide_zero_values?t.hide_zero_values:!!e||void 0,hide_if_zero:"boolean"==typeof t.hide_if_zero?t.hide_if_zero:void 0,hide_below:di(t.hide_below),show_flow_arrow:"boolean"==typeof t.show_flow_arrow?t.show_flow_arrow:void 0,highlight_when_active:"boolean"==typeof t.highlight_when_active?t.highlight_when_active:void 0,active_from:di(t.active_from),flowMinVisibleValue:ai(t.flowMinVisibleValue),flowMaxValue:ai(t.flowMaxValue),radius:hi(null!==(o=ai(t.radius))&&void 0!==o?o:We(r),20,100),icon:Ie(t.icon),unit:ri(t.unit),color:ri(t.color)}}):ni(ge).map(t=>({...t,...e?{hide_zero_values:!0}:{}}))}function ke(t){if("junction"===t||"leaf"===t)return t}function Ae(t){if("consume"===t||"supply"===t)return t}function Le(t){if("signed"===t||"bidirectional"===t)return t}function Me(t){if("junction"===t||"measured"===t||"ignore"===t)return t}function Pe(t){if("both"===t||"supply"===t||"consume"===t)return t}function Ce(t){if("incoming"===t||"outgoing"===t||"net"===t)return t}function Ne(t){if("more-info"===t||"toggle"===t||"navigate"===t||"url"===t||"none"===t)return t}function Ie(t){var e;if(null===t)return null;const i=ri(t);return i?null!==(e=Ee[i])&&void 0!==e?e:i.includes(":")?i:void 0:void 0}var Se,je,Ee={appliance:"mdi:power-plug",battery:"mdi:battery",ev:"mdi:car-electric",generic:"mdi:circle-outline",grid:"mdi:transmission-tower",heat_pump:"mdi:heat-pump",home:"mdi:home-lightning-bolt",junction:"mdi:hub",node:"mdi:circle-small",plug:"mdi:power-plug",solar:"mdi:solar-power",water:"mdi:water"};function Ve(t,e=!0){return Array.isArray(t)?t.filter(t=>oi(t)).filter(t=>"string"==typeof t.from&&"string"==typeof t.to).map(t=>({id:"string"==typeof t.id?t.id:`${String(t.from)}->${String(t.to)}`,from:String(t.from),to:String(t.to),entity:Be(t.entity),attribute:ri(t.attribute),value:ai(t.value),factor:ai(t.factor),invert:!0===t.invert,unit:ri(t.unit),color:ri(t.color),flowMinVisibleValue:ai(t.flowMinVisibleValue),flowMaxValue:ai(t.flowMaxValue),fromAnchor:ai(t.fromAnchor),fromAnchorMode:"manual"===t.fromAnchorMode?"manual":void 0,toAnchor:ai(t.toAnchor),toAnchorMode:"manual"===t.toAnchorMode?"manual":void 0,junctionJoinId:ri(t.junctionJoinId)})):e?ye.map(t=>({...t})):[]}function Oe(t,e=!0){return oi(t)?Object.fromEntries(Object.entries(t).filter(t=>{const e=t[1];return oi(e)&&Number.isFinite(e.x)&&Number.isFinite(e.y)}).map(([t,e])=>[t,{x:Number(e.x),y:Number(e.y)}])):e?{...be}:{}}function Fe(t,e){var i;return(null!==(i=t.nodes)&&void 0!==i?i:ni(ge)).map(t=>{var i,n,o,r,s,a,l,d,h,c,u,p,f,_,v,m,g,y,b,x,$,w,k,A,L,M,P,C,N;const I=null!==(i=t.flow_mode)&&void 0!==i?i:"signed",S="signed"===I?Re(e,t.entity?{entity:t.entity,attribute:t.attribute,factor:t.factor,unit:t.unit}:{value:t.value,unit:t.unit}):void 0,j="bidirectional"===I?Re(e,{entity:t.incoming_entity,attribute:t.incoming_attribute,unit:t.unit}):void 0,E="bidirectional"===I?Re(e,{entity:t.outgoing_entity,attribute:t.outgoing_attribute,unit:t.unit}):void 0,V=t.secondary_entity?Re(e,{entity:t.secondary_entity,attribute:t.secondary_attribute,value:t.secondary}):void 0,O=void 0!==t.value||("bidirectional"===I?Boolean(t.incoming_entity||t.outgoing_entity):Boolean(t.entity)),F=(null!==(n=null==j?void 0:j.value)&&void 0!==n?n:0)-(null!==(o=null==E?void 0:E.value)&&void 0!==o?o:0),D=null!==(r=null!==(s=null!==(a=t.unit)&&void 0!==a?a:null==S?void 0:S.unit)&&void 0!==s?s:null==j?void 0:j.unit)&&void 0!==r?r:null==E?void 0:E.unit,T=null!==(l=null==V?void 0:V.value)&&void 0!==l?l:t.secondary,R=null!==(d=null!==(h=null==V?void 0:V.unit)&&void 0!==h?h:t.unit)&&void 0!==d?d:"%",B=null!==(c=t.flowDirection)&&void 0!==c?c:Ye(t),J="bidirectional"===I?F:(null!==(u=null!==(p=null==S?void 0:S.value)&&void 0!==p?p:t.value)&&void 0!==u?u:0)*("consume"===B?-1:1),z=function(t,e){return"supply"===e?Math.max(t,0):"consume"===e?Math.min(t,0):t}(!0===t.invert?-J:J,null!==(f=t.allowed_flow)&&void 0!==f?f:"both"),U=Math.abs(z),H="bidirectional"===I?z>.5?null!==(_=null!==(v=t.incoming_entity)&&void 0!==v?v:t.outgoing_entity)&&void 0!==_?_:t.secondary_entity:z<-.5?null!==(m=null!==(g=t.outgoing_entity)&&void 0!==g?g:t.incoming_entity)&&void 0!==m?m:t.secondary_entity:null!==(y=null!==(b=t.incoming_entity)&&void 0!==b?b:t.outgoing_entity)&&void 0!==y?y:t.secondary_entity:null!==(x=t.entity)&&void 0!==x?x:t.secondary_entity,G=De(null!==($=t.primary_action)&&void 0!==$?$:"more-info",H,t.primary_action_path),X=De(null!==(w=t.secondary_action)&&void 0!==w?w:"more-info",t.secondary_entity,t.secondary_action_path),W="bidirectional"===I?null!==(k=t.incoming_entity)&&void 0!==k?k:t.outgoing_entity:t.entity,Y=null===t.icon?null:null!==(A=null!==(L=t.icon)&&void 0!==L?L:ze(e,W))&&void 0!==A?A:Xe(t.kind),q="measured"===Ke(t);return{id:t.id,kind:t.kind,label:null!==(M=null!==(P=t.label)&&void 0!==P?P:Je(e,t.entity))&&void 0!==M?M:ii(t.id),labelAngle:t.label_angle,labelOffsetX:t.label_offset_x,labelOffsetY:t.label_offset_y,value:U,flowValue:z,hasOwnValue:O,contributesToFlow:q,junctionDisplayMode:t.junction_display_value,hideZeroValues:t.hide_zero_values,hideIfZero:!0===t.hide_if_zero,hideBelow:t.hide_below,showFlowArrow:!0===t.show_flow_arrow,highlightWhenActive:!0===t.highlight_when_active,activeFrom:null!==(C=t.active_from)&&void 0!==C?C:1,primaryAction:G,secondaryAction:X,secondary:T,secondaryDisplayValue:void 0!==T?`${He(T)}${R?` ${R}`:""}`:void 0,radius:null!==(N=t.radius)&&void 0!==N?N:We(t.kind),icon:Y,secondaryIcon:void 0,unit:D,color:t.color,flowMinVisibleValue:t.flowMinVisibleValue,flowMaxValue:t.flowMaxValue}})}function De(t,e,i){switch(t){case"none":default:return;case"more-info":case"toggle":return e?{entityId:e,type:t}:void 0;case"navigate":case"url":return(null==i?void 0:i.trim())?{path:i.trim(),type:t}:void 0}}function Te(t,e){var i;return(null!==(i=t.links)&&void 0!==i?i:[]).map(t=>{var i,n;const o=t.entity?Re(e,{...t,value:void 0}):Re(e,t),r=null!==(i=null==o?void 0:o.value)&&void 0!==i?i:t.value,s=null!==(n=t.unit)&&void 0!==n?n:null==o?void 0:o.unit;return{...t,value:r,unit:s,displayValue:void 0!==r?Ge(r,s):void 0}})}function Re(t,e){var i,n,o;if(!(null==e?void 0:e.entity))return void 0===(null==e?void 0:e.value)?void 0:{value:e.value,unit:e.unit};const r=null==t?void 0:t.states[e.entity];if(!r)return void 0===e.value?void 0:{value:e.value,unit:e.unit};const s=function(t){if("number"==typeof t)return t;if("string"!=typeof t)return NaN;const e=t.trim().replace(",",".").match(/[-+]?\d+(?:\.\d+)?/);return e?Number(e[0]):NaN}(e.attribute?r.attributes[e.attribute]:r.state);if(!Number.isFinite(s))return void 0===e.value?void 0:{value:e.value,unit:e.unit};const a=String(null!==(i=r.attributes.unit_of_measurement)&&void 0!==i?i:"").trim(),l=null!==(n=e.unit)&&void 0!==n?n:a,d=Ue(l);return{value:s*(null!==(o=e.factor)&&void 0!==o?o:d)*(e.invert?-1:1),unit:1!==d?"W":l}}function Be(t){var e;return"string"==typeof t?ri(t):Array.isArray(t)?Be(t[0]):oi(t)?null!==(e=ri(t.entity))&&void 0!==e?e:ri(t.entity_id):void 0}function Je(t,e){var i;if(!e)return;const n=null==t||null===(i=t.states[e])||void 0===i?void 0:i.attributes.friendly_name;return"string"==typeof n?n:ii(e)}function ze(t,e){if(!e)return;const i=null==t?void 0:t.states[e],n=null==i?void 0:i.attributes.icon;if("string"==typeof n&&n.startsWith("mdi:"))return n;const o=null==i?void 0:i.attributes.device_class;if("string"==typeof o){const t=function(t){return"battery"===t?"mdi:battery":"gas"===t?"mdi:fire":"power"===t||"energy"===t?"mdi:flash":"temperature"===t?"mdi:thermometer":"water"===t?"mdi:water":void 0}(o);if(t)return t}return"battery"===(r=e.split(".")[0])?"mdi:battery":"binary_sensor"===r?"mdi:checkbox-marked-circle-outline":"climate"===r?"mdi:heat-pump":"cover"===r?"mdi:window-shutter":"fan"===r?"mdi:fan":"light"===r?"mdi:lightbulb":"sensor"===r?"mdi:eye":"switch"===r?"mdi:toggle-switch":"water_heater"===r?"mdi:water-boiler":void 0;var r}function Ue(t){return"kW"===t?1e3:"MW"===t?1e6:1}function He(t){return t.toLocaleString("en-US",{maximumFractionDigits:t>=100?0:1})}function Ge(t,e){const i=Math.abs(t);return e&&"W"!==e&&"kW"!==e&&"MW"!==e?`${He(i)} ${e}`:i>=1e3?`${He(i/1e3)} kW`:`${Math.round(i).toLocaleString("en-US")} W`}function Xe(t){return"junction"===t?"mdi:hub":"mdi:leaf"}function We(t){return"junction"===t?90:65}function Ye(t){var e;return null!==(e=t.flowDirection)&&void 0!==e?e:"supply"}function qe(t){return"junction"===t?"junction":"measured"}function Ke(t){var e;return"leaf"===t.kind?"measured":null!==(e=t.balance_role)&&void 0!==e?e:qe(t.kind)}function Ze(t,e){var i,n,o;const{[e]:r,...s}=null!==(i=t.layout)&&void 0!==i?i:{};return xe({...t,nodes:(null!==(n=t.nodes)&&void 0!==n?n:[]).filter(t=>t.id!==e),links:(null!==(o=t.links)&&void 0!==o?o:[]).filter(t=>t.from!==e&&t.to!==e),layout:s})}function Qe(t,e){const i=e.filter(t=>"junction"===t.kind),n=Math.max(0,i.findIndex(e=>e.id===t));return ve[n%ve.length]}function ti(t){const e=/^#?([0-9a-f]{6})$/i.exec(null!=t?t:"");return e?`#${e[1].toLowerCase()}`:void 0}function ei(t){const e=ti(t);if(e)return{r:Number.parseInt(e.slice(1,3),16),g:Number.parseInt(e.slice(3,5),16),b:Number.parseInt(e.slice(5,7),16)}}function ii(t){return(t.includes(".")?t.split(".").slice(1).join("."):t).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function ni(t){return t.map(t=>({...t}))}function oi(t){return Boolean(t&&"object"==typeof t&&!Array.isArray(t))}function ri(t){return"string"==typeof t&&t.trim()?t.trim():void 0}function si(t,e){return Number.isFinite(t)?Number(t):e}function ai(t){return Number.isFinite(t)?Number(t):void 0}function li(t){const e=ai(t);return void 0!==e&&e>0?Math.round(e):void 0}function di(t){const e=ai(t);return void 0===e?void 0:Math.max(0,e)}function hi(t,e,i){return Math.min(Math.max(t,e),i)}function ci(t,e){t.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:e}}))}function ui(t){var e,i;const n=xe(t);return JSON.stringify({links:(null!==(e=n.links)&&void 0!==e?e:[]).map(t=>({from:t.from,id:t.id,to:t.to})),nodes:(null!==(i=n.nodes)&&void 0!==i?i:[]).map(t=>({id:t.id,kind:t.kind})),type:n.type})}function pi(t){var e,i;const n=/* @__PURE__ */new Map,o=(t,e)=>{var i;if(!t)return;const o=null!==(i=n.get(t))&&void 0!==i?i:/* @__PURE__ */new Set;_e.forEach(t=>o.add(t)),e&&o.add(e),n.set(t,o)};return(null!==(e=t.nodes)&&void 0!==e?e:[]).forEach(t=>{o(t.entity,t.attribute),o(t.incoming_entity,t.incoming_attribute),o(t.outgoing_entity,t.outgoing_attribute),o(t.secondary_entity,t.secondary_attribute)}),(null!==(i=t.links)&&void 0!==i?i:[]).forEach(t=>o(t.entity,t.attribute)),Array.from(n.entries()).sort(([t],[e])=>t.localeCompare(e)).map(([t,e])=>({attributes:Array.from(e).sort(),entityId:t}))}function fi(t,e){return{links:Te(t,e),nodes:Fe(t,e)}}var _i=class extends mt{constructor(...t){super(...t),this.config=xe(void 0),this.editMode=!1,this._previewSourceId=ne("preview"),this._entityWatchers=pi(this.config),this._normalizedConfig=this.config,this._resolvedGraphData=fi(this.config,void 0),this._handlePreviewNodeSelected=t=>{if(!this.editMode)return;const e=t.detail;this._matchesPreviewNodeSelectedEvent(e)&&(this._selectedNode=null==e?void 0:e.nodeId)}}connectedCallback(){super.connectedCallback(),window.addEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected)}disconnectedCallback(){window.removeEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected),super.disconnectedCallback()}_matchesPreviewNodeSelectedEvent(t){return!!t&&t.sourceId!==this._previewSourceId&&(t.targetId?t.targetId===this._previewSourceId:!t.configKey||t.configKey===ui(this.config))}_previewEventScope(t=this.config){return{configKey:ui(this.config),sourceConfigKey:ui(t),sourceId:this._previewSourceId}}setConfig(t){this.config=xe(t)}getCardSize(){var t,e;const i=xe(this.config),n=void 0===(null===(t=i.grid_options)||void 0===t?void 0:t.rows)?16:0;return Math.ceil(((null!==(e=i.height)&&void 0!==e?e:360)+n)/50)}getGridOptions(){return{columns:12,rows:6,min_columns:6,min_rows:3,max_rows:24}}static getStubConfig(){return xe(void 0)}static async getConfigElement(){return document.createElement("home-flow-card-editor")}shouldUpdate(t){if(t.has("config"))return this._syncGraphCache(this.config,this.hass,t.get("config")),!0;if(t.has("hass")){const e=t.get("hass");return function(t,e,i){return t.some(t=>function(t,e,i){return e!==i&&(e&&i?e.state!==i.state||t.attributes.some(t=>e.attributes[t]!==i.attributes[t]):e!==i)}(t,null==e?void 0:e.states[t.entityId],null==i?void 0:i.states[t.entityId]))}(this._entityWatchers,e,this.hass)?(this._resolvedGraphData=fi(this._normalizedConfig,this.hass),!0):t.size>1}return!0}render(){var t,e,i,n,o,r,s;const a=this._normalizedConfig,l=null!==(t=a.width)&&void 0!==t?t:502,d=null!==(e=a.height)&&void 0!==e?e:360;return Y`
      <ha-card
        class=${`scale-${null!==(i=a.scaling_mode)&&void 0!==i?i:de}${void 0!==(null===(n=a.grid_options)||void 0===n?void 0:n.rows)?" grid-height":""}`}
        style=${`--graph-width:${l};--graph-height:${d};--graph-aspect:${l} / ${d};`}
      >
        ${a.title?Y`<div class="title">${a.title}</div>`:Z}
        <div class="graph-frame">
          <div class="graph-canvas">
            <home-flow-graph-card
              .nodes=${this._resolvedGraphData.nodes}
              .links=${this._resolvedGraphData.links}
              .layout=${null!==(o=a.layout)&&void 0!==o?o:{}}
              .labelStyle=${null!==(r=a.label_style)&&void 0!==r?r:ae}
              .leafRouting=${null!==(s=a.leaf_routing)&&void 0!==s?s:le}
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
    `}_syncGraphCache(t,e,i){const n=Boolean(i&&i.nodes===t.nodes&&i.links===t.links&&i.hide_zero_values===t.hide_zero_values),o=xe(t);this._normalizedConfig=o,n||(this._entityWatchers=pi(o),this._resolvedGraphData=fi(o,e))}_handleLayoutChange(t){if(!this.editMode)return;const e=this.config;this.config={...this.config,layout:t.detail.layout},t.detail.live||oe(this.config,this._previewEventScope(e))}_handleLinksChange(t){const e=this.config;this.config=xe({...this.config,links:t.detail.links}),t.detail.live||oe(this.config,this._previewEventScope(e))}_handleNodeLabelChange(t){var e;if(!this.editMode||!t.detail.nodeId)return;const{labelAngle:i,labelOffsetX:n,labelOffsetY:o,nodeId:r}=t.detail,s=this.config;this.config=xe({...this.config,nodes:(null!==(e=this.config.nodes)&&void 0!==e?e:[]).map(t=>t.id===r?{...t,label_angle:i,label_offset_x:n,label_offset_y:o}:t)}),t.detail.live||oe(this.config,this._previewEventScope(s))}_handleNodeRemove(t){if(!this.editMode||!t.detail.nodeId)return;this._selectedNode===t.detail.nodeId&&(this._selectedNode=void 0);const e=this.config;this.config=Ze(xe(this.config),t.detail.nodeId),oe(this.config,this._previewEventScope(e))}_handleNodeSelect(t){this.editMode&&(this._selectedNode=t.detail.nodeId,re(t.detail.nodeId,this._previewEventScope()))}_handleEntityMoreInfo(t){!this.editMode&&t.detail.entityId&&this._showMoreInfo(t.detail.entityId)}_handleNodeAction(t){if(this.editMode||!t.detail.action)return;const e=t.detail.action;switch(e.type){case"none":default:return;case"more-info":return void this._showMoreInfo(e.entityId);case"toggle":var i;if(!e.entityId||"function"!=typeof(null===(i=this.hass)||void 0===i?void 0:i.callService))return;return void this.hass.callService("homeassistant","toggle",{entity_id:e.entityId});case"navigate":if(!e.path)return;return window.history.pushState(null,"",e.path),void window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));case"url":if(!e.path)return;return void window.open(e.path,"_blank","noopener")}}_showMoreInfo(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}};(Se=_i).properties={config:{attribute:!1},editMode:{type:Boolean,attribute:"edit-mode"},hass:{attribute:!1},_selectedNode:{state:!0}},Se.styles=d`
    :host {
      display: block;
      height: 100%;
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
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
    }

    ha-card:not(.grid-height) .graph-frame {
      padding-block: 8px;
    }

    .graph-canvas {
      display: block;
      margin-inline: auto;
    }

    ha-card.scale-fit-width .graph-frame,
    ha-card.scale-shrink .graph-frame {
      overflow: hidden;
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

    ha-card.grid-height {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    ha-card.grid-height .graph-frame {
      flex: 1;
      min-height: 0;
    }

    ha-card.grid-height .graph-canvas {
      height: 100%;
      aspect-ratio: auto;
    }

    home-flow-graph-card {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,customElements.get("home-flow-card")||customElements.define("home-flow-card",_i),window.customCards=null!==(je=window.customCards)&&void 0!==je?je:[],window.customCards.some(t=>"home-flow-card"===t.type)||window.customCards.push({type:se,name:"Home Flow Card",description:"Visual flow map for energy, water, gas and other home resources.",preview:!0,documentationURL:"https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card"});var vi,mi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},{I:gi}=ut,yi=t=>t,bi=()=>document.createComment(""),xi=(t,e,i)=>{const n=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(bi(),o),r=n.insertBefore(bi(),o);i=new gi(e,r,t,t.options)}else{const e=i._$AB.nextSibling,s=i._$AM,a=s!==t;if(a){var r;let e;null===(r=i._$AQ)||void 0===r||r.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==s._$AU&&i._$AP(e)}if(e!==o||a){let t=i._$AA;for(;t!==e;){const e=yi(t).nextSibling;yi(n).insertBefore(t,o),t=e}}}return i},$i=(t,e,i=t)=>(t._$AI(e,i),t),wi={},ki=(t,e=wi)=>t._$AH=e,Ai=t=>{t._$AR(),t._$AA.remove()},Li=(t,e,i)=>{const n=/* @__PURE__ */new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},Mi=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends mi{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;void 0===i?i=e:void 0!==e&&(n=e);const o=[],r=[];let s=0;for(const a of t)o[s]=n?n(a,s):s,r[s]=i(a,s),s++;return{values:r,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){var o;const r=(t=>t._$AH)(t),{values:s,keys:a}=this.dt(e,i,n);if(!Array.isArray(r))return this.ut=a,s;const l=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],d=[];let h,c,u=0,p=r.length-1,f=0,_=s.length-1;for(;u<=p&&f<=_;)if(null===r[u])u++;else if(null===r[p])p--;else if(l[u]===a[f])d[f]=$i(r[u],s[f]),u++,f++;else if(l[p]===a[_])d[_]=$i(r[p],s[_]),p--,_--;else if(l[u]===a[_])d[_]=$i(r[u],s[_]),xi(t,d[_+1],r[u]),u++,_--;else if(l[p]===a[f])d[f]=$i(r[p],s[f]),xi(t,r[u],r[p]),p--,f++;else if(void 0===h&&(h=Li(a,f,_),c=Li(l,u,p)),h.has(l[u]))if(h.has(l[p])){const e=c.get(a[f]),i=void 0!==e?r[e]:null;if(null===i){const e=xi(t,r[u]);$i(e,s[f]),d[f]=e}else d[f]=$i(i,s[f]),xi(t,r[u],i),r[e]=null;f++}else Ai(r[p]),p--;else Ai(r[u]),u++;for(;f<=_;){const e=xi(t,d[_+1]);$i(e,s[f]),d[f++]=e}for(;u<=p;){const t=r[u++];null!==t&&Ai(t)}return this.ut=a,ki(t,d),K}}),Pi=[{label:"Solar",value:"mdi:solar-power"},{label:"Junction",value:"mdi:hub"},{label:"Battery",value:"mdi:battery"},{label:"Home",value:"mdi:home-lightning-bolt"},{label:"Grid",value:"mdi:transmission-tower"},{label:"Heat pump",value:"mdi:heat-pump"},{label:"EV",value:"mdi:car-electric"},{label:"Plug",value:"mdi:power-plug"},{label:"Water",value:"mdi:water"},{label:"Generic",value:"mdi:circle-outline"}],Ci=[{label:"Junction",value:"junction"},{label:"Leaf",value:"leaf"}],Ni=[{label:"+ supplies, - consumes",value:"supply"},{label:"+ consumes, - supplies",value:"consume"}],Ii=[{label:"Single signed entity",value:"signed"},{label:"Separate in/out entities",value:"bidirectional"}],Si=[{label:"Both",value:"both"},{label:"Supply only",value:"supply"},{label:"Consume only",value:"consume"}],ji=[{label:"Pass-through only",value:"junction"},{label:"Counts in balance",value:"measured"},{label:"Display only",value:"ignore"}],Ei=[{label:"Incoming flow",value:"incoming"},{label:"Outgoing flow",value:"outgoing"},{label:"Net flow",value:"net"}],Vi=[{label:"More info",value:"more-info"},{label:"Toggle",value:"toggle"},{label:"Navigate",value:"navigate"},{label:"Open URL",value:"url"},{label:"None",value:"none"}],Oi=[{label:"Around circle",value:"curved"},{label:"Straight",value:"straight"}],Fi=[{label:"Funnel",value:"funnel"},{label:"Channel",value:"channel"},{label:"Orthogonal",value:"orthogonal"},{label:"Sweep",value:"sweep"},{label:"Radial",value:"radial"}],Di=[{label:"Fit width",value:"fit-width"},{label:"Shrink on narrow screens",value:"shrink"}],Ti=class extends mt{constructor(...t){super(...t),this._config=xe(void 0),this._nodeSectionOpen={},this._previewSourceId=ne("editor"),this._handlePreviewConfigChanged=t=>{const e=t.detail;(null==e?void 0:e.config)&&this._matchesPreviewConfigChangedEvent(e)&&(this._config=xe(e.config),this._rememberPreviewSource(e.sourceId),ci(this,this._config))},this._handlePreviewNodeSelected=t=>{const e=t.detail;if(!this._matchesPreviewNodeSelectedEvent(e))return;const i=null==e?void 0:e.nodeId;this._selectedNode=i,this._rememberPreviewSource(e.sourceId),this._syncSelectedNodeEditor(i)},this._handleEditorKeydown=t=>{var e;if(!this._selectedNode)return;if("Delete"!==t.key&&"Backspace"!==t.key)return;if(t.defaultPrevented)return;if(this._isInteractiveEvent(t))return;const i=(null!==(e=xe(this._config).nodes)&&void 0!==e?e:[]).find(t=>t.id===this._selectedNode);i&&(t.preventDefault(),t.stopPropagation(),this._removeNode(i.id))},this._handleNodePointerMove=t=>{this._draggedNode&&t.pointerId===this._dragPointerId&&(t.preventDefault(),this._nodeDragY=t.clientY,void 0===this._nodeDragFrame&&(this._nodeDragFrame=requestAnimationFrame(()=>{this._nodeDragFrame=void 0;const t=this._nodeDragY;this._nodeDragY=void 0,this._draggedNode&&void 0!==t&&this._updateNodeDrag(t)})))},this._handleNodePointerUp=t=>{var e;if(!this._draggedNode||t.pointerId!==this._dragPointerId)return;t.preventDefault(),void 0!==this._nodeDragY&&this._updateNodeDrag(t.clientY);const i=this._dragPreviewOrder,n=(null!==(e=this._config.nodes)&&void 0!==e?e:[]).map(t=>t.id);(null==i?void 0:i.length)&&i.join("|")!==n.join("|")&&this._commitNodeOrder(i),this._clearNodeDragState()}}_updateNodeDrag(t){var e,i,n;if(!this._draggedNode)return;const o=Array.from(this.renderRoot.querySelectorAll(".node-editor-row[data-node-id]")).map(t=>{var e;return{id:null!==(e=t.dataset.nodeId)&&void 0!==e?e:"",rect:t.getBoundingClientRect()}}).filter(t=>t.id&&t.id!==this._draggedNode);if(0===o.length)return;let r=null===(e=o[o.length-1])||void 0===e?void 0:e.id,s="after";for(const d of o)if(t<d.rect.top+d.rect.height/2){r=d.id,s="before";break}if(!r)return;this._dragOverNode=r,this._dragInsertTarget=r,this._dragInsertSide=s;const a=null!==(i=this._dragPreviewOrder)&&void 0!==i?i:(null!==(n=this._config.nodes)&&void 0!==n?n:[]).map(t=>t.id),l=this._reorderedNodeIds(this._draggedNode,r,s,a);l&&l.join("|")!==a.join("|")&&(this._dragPreviewOrder=l)}connectedCallback(){super.connectedCallback(),window.addEventListener("home-flow-card-preview-config-changed",this._handlePreviewConfigChanged),window.addEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected),window.addEventListener("keydown",this._handleEditorKeydown,!0),window.addEventListener("pointermove",this._handleNodePointerMove,!0),window.addEventListener("pointerup",this._handleNodePointerUp,!0),window.addEventListener("pointercancel",this._handleNodePointerUp,!0)}disconnectedCallback(){this._clearNodeDragState(),window.removeEventListener("home-flow-card-preview-config-changed",this._handlePreviewConfigChanged),window.removeEventListener("home-flow-card-preview-node-selected",this._handlePreviewNodeSelected),window.removeEventListener("keydown",this._handleEditorKeydown,!0),window.removeEventListener("pointermove",this._handleNodePointerMove,!0),window.removeEventListener("pointerup",this._handleNodePointerUp,!0),window.removeEventListener("pointercancel",this._handleNodePointerUp,!0),super.disconnectedCallback()}_matchesPreviewConfigChangedEvent(t){if(!t)return!1;if(t.sourceId===this._previewSourceId)return!1;const e=ui(this._config);return t.sourceConfigKey===e||t.configKey===e}_matchesPreviewNodeSelectedEvent(t){if(!t)return!1;if(t.sourceId===this._previewSourceId)return!1;const e=ui(this._config);return!t.configKey||t.configKey===e}_rememberPreviewSource(t){t&&t!==this._previewSourceId&&(this._targetPreviewSourceId=t)}_isInteractiveEvent(t){const e=window.getSelection();if(e&&!e.isCollapsed&&e.toString().trim())return!0;const i="function"==typeof t.composedPath?t.composedPath():[];for(const o of i)if(o instanceof Element&&this._matchesInteractiveElement(o))return!0;const n=this._deepActiveElement();return!!n&&this._matchesInteractiveElement(n)}_deepActiveElement(){var t,e;let i=null!==(t=null===(e=this.ownerDocument)||void 0===e?void 0:e.activeElement)&&void 0!==t?t:document.activeElement;for(;i;){var n;const t=i.shadowRoot,e=null!==(n=null==t?void 0:t.activeElement)&&void 0!==n?n:null;if(!e||e===i)break;i=e}return i}_matchesInteractiveElement(t){return!!t.matches("input, textarea, select, button, [contenteditable=''], [contenteditable='true'], ha-textfield, ha-textarea, ha-combo-box, ha-selector, hui-entity-picker, hui-icon-picker, ha-button, mwc-textfield, mwc-select, mwc-button")||!!(t instanceof HTMLElement&&t.isContentEditable)||Boolean(t.closest("input, textarea, select, button, [contenteditable=''], [contenteditable='true'], ha-textfield, ha-textarea, ha-combo-box, ha-selector, hui-entity-picker, hui-icon-picker, ha-button, mwc-textfield, mwc-select, mwc-button"))}async _syncSelectedNodeEditor(t){await this.updateComplete,await new Promise(t=>requestAnimationFrame(t));const e=Array.from(this.renderRoot.querySelectorAll(".node-editor[data-node-id]"));if(e.forEach(e=>{e.open=e.dataset.nodeId===t}),!t)return;const i=e.find(e=>e.dataset.nodeId===t);null==i||i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}setConfig(t){this._config=xe(t)}shouldUpdate(t){return!t.has("hass")||t.size>1||this._editorHassMetadataChanged(t.get("hass"),this.hass)}_editorHassMetadataChanged(t,e){var i;if(!t||!e)return t!==e;if(Object.keys(t.states).length!==Object.keys(e.states).length)return!0;const n=(null!==(i=this._config.nodes)&&void 0!==i?i:[]).find(t=>t.id===this._selectedNode);if(!n)return!1;const o=new Set([n.entity,n.incoming_entity,n.outgoing_entity,n.secondary_entity].filter(t=>Boolean(t))),r=["device_class","friendly_name","icon","unit_of_measurement"];for(const s of o){const i=t.states[s],n=e.states[s];if(i&&n){if(r.some(t=>i.attributes[t]!==n.attributes[t]))return!0}else if(i!==n)return!0}return!1}willUpdate(t){t.has("config")&&this.config&&(this._config=xe(this.config))}render(){var t,e,i,n,o,r;const s=this._config;return Y`
      <div class="editor-shell">
        <section class="panel">
          <header>
            <h3>Options</h3>
            <p>General display options.</p>
          </header>
          <label>
            <span>Label style</span>
            <select
              .value=${null!==(t=s.label_style)&&void 0!==t?t:ae}
              @change=${t=>this._patchConfig({label_style:t.currentTarget.value})}
            >
              ${Oi.map(t=>Y`
                  <option value=${t.value}>${t.label}</option>
                `)}
            </select>
          </label>
          <label>
            <span>Leaf routing</span>
            <select
              .value=${null!==(e=s.leaf_routing)&&void 0!==e?e:le}
              @change=${t=>this._patchConfig({leaf_routing:t.currentTarget.value})}
            >
              ${Fi.map(t=>Y`
                  <option value=${t.value}>${t.label}</option>
                `)}
            </select>
          </label>
          <label>
            <span>Scaling mode</span>
            <select
              .value=${null!==(i=s.scaling_mode)&&void 0!==i?i:de}
              @change=${t=>this._patchConfig({scaling_mode:t.currentTarget.value})}
            >
              ${Di.map(t=>{var e;return Y`
                  <option
                    value=${t.value}
                    ?selected=${(null!==(e=s.scaling_mode)&&void 0!==e?e:de)===t.value}
                  >
                    ${t.label}
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
            ${Ci.map(t=>Y`
                <button
                  type="button"
                  class="add-node-button"
                  @click=${()=>this._addNode(t.value)}
                >
                  <ha-icon icon="mdi:playlist-plus"></ha-icon>
                  <span>Add ${t.label}</span>
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
            ${Mi(null!==(r=s.nodes)&&void 0!==r?r:[],t=>t.id,t=>this._nodeEditor(t,s))}
          </div>
        </section>
      </div>
    `}_nodeVisualOrder(t,e){var i,n;const o=null!==(i=this._dragPreviewOrder)&&void 0!==i?i:(null!==(n=e.nodes)&&void 0!==n?n:[]).map(t=>t.id),r=o.indexOf(t);return r>=0?r:o.length}_nodeEditor(t,e){var i,n,o,r,s,a,l,d,h,c,u,p,f,_,v,m,g,y;const b=(null===(i=t.label)||void 0===i?void 0:i.trim())||"Empty",x=this._selectedNode===t.id,$=null!==(n=t.flow_mode)&&void 0!==n?n:"signed",w="bidirectional"===$?null!==(o=t.incoming_entity)&&void 0!==o?o:t.outgoing_entity:t.entity,k=x?null!==(r=t.color)&&void 0!==r?r:this._defaultNodeColor(t,e):"",A=x?null===t.icon?void 0:null!==(s=null!==(a=t.icon)&&void 0!==a?a:ze(this.hass,w))&&void 0!==s?s:Xe(t.kind):void 0,L=null!==(l=t.primary_action)&&void 0!==l?l:"more-info",M=null!==(d=t.secondary_action)&&void 0!==d?d:"more-info",P=x?this._busJunctionIds(t.id,e):[],C=`${null!==(h=t.radius)&&void 0!==h?h:We(t.kind)} px`,N="bidirectional"===$?"Separate in/out":"Single signed",I=x?function(t,e){var i,n;const o=("bidirectional"===(null!==(i=e.flow_mode)&&void 0!==i?i:"signed")?[e.incoming_entity,e.outgoing_entity]:[e.entity]).map(e=>{var i,n;return e?String(null!==(i=null==t||null===(n=t.states[e])||void 0===n?void 0:n.attributes.unit_of_measurement)&&void 0!==i?i:"").trim():""}).find(Boolean),r=null!==(n=e.unit)&&void 0!==n?n:o;return 1!==Ue(r)?"W":r}(this.hass,t):void 0,S=t.secondary_entity?"Configured":"Not set",j=`Applies to ${P.length} junction${1===P.length?"":"s"}`;return Y`
      <div
        class=${`node-editor-row ${this._draggedNode===t.id?"dragging":""} ${this._dragOverNode===t.id?"drag-over":""} ${this._dragInsertTarget===t.id&&"before"===this._dragInsertSide?"insert-before":""} ${this._dragInsertTarget===t.id&&"after"===this._dragInsertSide?"insert-after":""}`}
        data-node-id=${t.id}
        style=${`order:${this._nodeVisualOrder(t.id,e)}`}
      >
        <div
          class="node-drag-handle"
          @pointerdown=${e=>this._handleNodePointerDown(e,t.id)}
          aria-label="Reorder node"
          title="Drag to reorder"
        >
          <ha-icon icon="mdi:drag-vertical"></ha-icon>
        </div>
        <details
          class=${"node-editor "+(x?"editor-selected":"")}
          data-node-id=${t.id}
          ?open=${x}
        >
        ${this._nodeSummary(b,t.id)}
        ${x?Y`
        ${this._renderNodeSubsection(t,"appearance","Appearance",C,Y`
            <div class="form-grid">
              <label>
                <span>Name</span>
                <input
                  .value=${null!==(c=t.label)&&void 0!==c?c:""}
                  @input=${i=>this._updateNode(e,t.id,{label:i.currentTarget.value})}
                />
              </label>
              <label>
                <span>Icon</span>
                ${this._iconSelect(A,i=>this._updateNode(e,t.id,{icon:i}),null!==t.icon?()=>this._updateNode(e,t.id,{icon:null}):void 0)}
              </label>
              <label>
                <span>Radius</span>
                <input
                  type="number"
                  min=${String(20)}
                  max=${String(100)}
                  .value=${String(null!==(u=t.radius)&&void 0!==u?u:We(t.kind))}
                  @change=${i=>this._updateNode(e,t.id,{radius:Number(i.currentTarget.value)})}
                />
              </label>
              ${this._colorInput("Color",k,i=>this._updateNode(e,t.id,{color:i}),t.color?()=>this._updateNode(e,t.id,{color:void 0}):void 0)}
            </div>
            <div class="node-actions inline-actions">
              <button type="button" @click=${()=>this._duplicateNode(t.id)}>
                Duplicate
              </button>
              <button
                type="button"
                class="danger"
                @click=${()=>this._removeNode(t.id)}
              >
                Delete
              </button>
            </div>
          `,e,{forceOpen:"leaf"===t.kind||"junction"===t.kind})}

        ${this._renderNodeSubsection(t,"flow","Flow",N,Y`
            <div class="form-grid">
              <label class="span-all">
                <span>Flow input</span>
                <select
                  .value=${$}
                  @change=${i=>this._updateNode(e,t.id,{flow_mode:i.currentTarget.value})}
                >
                  ${Ii.map(t=>Y`
                      <option value=${t.value}>${t.label}</option>
                    `)}
                </select>
              </label>
              ${"bidirectional"===$?Y`
                    <label class="span-all">
                      <span>Inflow entity</span>
                      ${this._entitySelect(t.incoming_entity,i=>{const n=i?ze(this.hass,i):void 0;this._updateNode(e,t.id,{incoming_entity:i,...n&&void 0===t.icon?{icon:n}:{}})})}
                    </label>
                    <label class="span-all">
                      <span>Outflow entity</span>
                      ${this._entitySelect(t.outgoing_entity,i=>{const n=i?ze(this.hass,i):void 0;this._updateNode(e,t.id,{outgoing_entity:i,...n&&void 0===t.icon?{icon:n}:{}})})}
                    </label>
                  `:Y`
                    <label class="span-all">
                      <span>Flow entity</span>
                      ${this._entitySelect(t.entity,i=>{const n=i?ze(this.hass,i):void 0;this._updateNode(e,t.id,{entity:i,...n?{icon:n}:{}})})}
                    </label>
                    <label>
                      <span>Flow direction</span>
                      <select
                        .value=${null!==(p=t.flowDirection)&&void 0!==p?p:Ye(t)}
                        @change=${i=>this._updateNode(e,t.id,{flowDirection:i.currentTarget.value})}
                      >
                        ${Ni.map(t=>Y`
                            <option value=${t.value}>${t.label}</option>
                          `)}
                      </select>
                    </label>
                  `}
              <label>
                <span>Allowed flow</span>
                <select
                  .value=${null!==(f=t.allowed_flow)&&void 0!==f?f:"both"}
                  @change=${i=>this._updateNode(e,t.id,{allowed_flow:i.currentTarget.value})}
                >
                  ${Si.map(t=>Y`
                      <option value=${t.value}>${t.label}</option>
                    `)}
                </select>
              </label>
              ${"junction"===t.kind?Y`
                    <label>
                      <span>Balance role</span>
                      <select
                        .value=${Ke(t)}
                        @change=${i=>this._updateNode(e,t.id,{balance_role:i.currentTarget.value})}
                      >
                        ${ji.map(t=>Y`
                            <option value=${t.value}>${t.label}</option>
                          `)}
                      </select>
                    </label>
                    <label>
                      <span>Display value</span>
                      <select
                        .value=${null!==(_=t.junction_display_value)&&void 0!==_?_:"incoming"}
                        @change=${i=>this._updateNode(e,t.id,{junction_display_value:i.currentTarget.value})}
                      >
                        ${Ei.map(t=>Y`
                            <option value=${t.value}>${t.label}</option>
                          `)}
                      </select>
                    </label>
                  `:Z}
              <label>
                <span>Primary click action</span>
                <select
                  .value=${L}
                  @change=${i=>this._updateNode(e,t.id,{primary_action:i.currentTarget.value})}
                >
                  ${Vi.map(t=>Y`
                      <option value=${t.value}>${t.label}</option>
                    `)}
                </select>
              </label>
              ${"navigate"===L||"url"===L?Y`
                    <label class="span-all">
                      <span>${"navigate"===L?"Primary navigation path":"Primary URL"}</span>
                      <input
                        type="text"
                        .value=${null!==(v=t.primary_action_path)&&void 0!==v?v:""}
                        placeholder=${"navigate"===L?"/lovelace/0":"https://example.com"}
                        @input=${i=>this._updateNode(e,t.id,{primary_action_path:i.currentTarget.value})}
                      />
                    </label>
                  `:Z}
            </div>
            <div class="flow-options-list">
              <div
                class=${"flow-option-row"+(!0===t.highlight_when_active?" is-enabled":"")}
              >
                <label class="checkbox-field">
                  <input
                    type="checkbox"
                    .checked=${!0===t.highlight_when_active}
                    @change=${i=>this._updateNode(e,t.id,{highlight_when_active:i.currentTarget.checked})}
                  />
                  <span>Highlight when active</span>
                </label>
                <label class="flow-option-setting">
                  <span>Active from${I?` (${I})`:""}</span>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    .disabled=${!0!==t.highlight_when_active}
                    .value=${String(null!==(m=t.active_from)&&void 0!==m?m:1)}
                    @change=${i=>{const n=i.currentTarget.value.trim();this._updateNode(e,t.id,{active_from:n?Math.max(0,Number(n)||0):void 0})}}
                  />
                </label>
              </div>
              <div
                class=${"flow-option-row"+(!0===t.hide_zero_values?" is-enabled":"")}
              >
                <label class="checkbox-field">
                  <input
                    type="checkbox"
                    .checked=${!0===t.hide_zero_values}
                    @change=${i=>this._updateNode(e,t.id,{hide_zero_values:i.currentTarget.checked})}
                  />
                  <span>Hide zero values</span>
                </label>
                <span class="flow-option-empty" aria-hidden="true"></span>
              </div>
              <div
                class=${"flow-option-row"+(!0===t.hide_if_zero?" is-enabled":"")}
              >
                <label class="checkbox-field">
                  <input
                    type="checkbox"
                    .checked=${!0===t.hide_if_zero}
                    @change=${i=>this._updateNode(e,t.id,{hide_if_zero:i.currentTarget.checked})}
                  />
                  <span>Hide if zero</span>
                </label>
                <label class="flow-option-setting">
                  <span>Hide at or below${I?` (${I})`:""}</span>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    .disabled=${!0!==t.hide_if_zero}
                    .value=${String(null!==(g=t.hide_below)&&void 0!==g?g:.5)}
                    @change=${i=>{const n=i.currentTarget.value.trim();this._updateNode(e,t.id,{hide_below:n?Math.max(0,Number(n)||0):void 0})}}
                  />
                </label>
              </div>
              <div
                class=${"flow-option-row"+(!0===t.show_flow_arrow?" is-enabled":"")}
              >
                <label class="checkbox-field">
                  <input
                    type="checkbox"
                    .checked=${!0===t.show_flow_arrow}
                    @change=${i=>this._updateNode(e,t.id,{show_flow_arrow:i.currentTarget.checked})}
                  />
                  <span>Show flow arrow</span>
                </label>
                <span class="flow-option-empty" aria-hidden="true"></span>
              </div>
              <div
                class=${"flow-option-row"+(!0===t.invert?" is-enabled":"")}
              >
                <label class="checkbox-field">
                  <input
                    type="checkbox"
                    .checked=${!0===t.invert}
                    @change=${i=>this._updateNode(e,t.id,{invert:i.currentTarget.checked})}
                  />
                  <span>Invert flow</span>
                </label>
                <span class="flow-option-empty" aria-hidden="true"></span>
              </div>
            </div>
          `,e)}

        ${this._renderNodeSubsection(t,"secondary","Secondary value",S,Y`
            <div class="form-grid">
              <label class="span-all">
                <span>Secondary entity</span>
                ${this._entitySelect(t.secondary_entity,i=>this._updateNode(e,t.id,{secondary_entity:i}))}
              </label>
              <label>
                <span>Secondary click action</span>
                <select
                  .value=${M}
                  @change=${i=>this._updateNode(e,t.id,{secondary_action:i.currentTarget.value})}
                >
                  ${Vi.map(t=>Y`
                      <option value=${t.value}>${t.label}</option>
                    `)}
                </select>
              </label>
              ${"navigate"===M||"url"===M?Y`
                    <label class="span-all">
                      <span>${"navigate"===M?"Secondary navigation path":"Secondary URL"}</span>
                      <input
                        type="text"
                        .value=${null!==(y=t.secondary_action_path)&&void 0!==y?y:""}
                        placeholder=${"navigate"===M?"/lovelace/0":"https://example.com"}
                        @input=${i=>this._updateNode(e,t.id,{secondary_action_path:i.currentTarget.value})}
                      />
                    </label>
                  `:Z}
            </div>
          `,e)}
        ${P.length>0?this._renderNodeSubsection(t,"bus","Bus options",j,this._busOptionsEditor(t,e,P),e):Z}
          `:Z}
        </details>
      </div>
    `}_busOptionsEditor(t,e,i){return Y`
      <p class="subsection-note">
        Applies to ${i.length} junction${1===i.length?"":"s"} on this bus.
      </p>
      <div class="form-grid compact">
        ${this._numberInput("Show flow from",this._busOptionValue(t.id,e,"flowMinVisibleValue",10),i=>this._updateBusOptions(e,t.id,{flowMinVisibleValue:i}))}
        ${this._numberInput("Full line width at",this._busOptionValue(t.id,e,"flowMaxValue",12e3),i=>this._updateBusOptions(e,t.id,{flowMaxValue:i}))}
      </div>
    `}_renderNodeSubsection(t,e,i,n,o,r,s={}){return Y`
      <details
        class="node-subsection"
        ?open=${this._isNodeSectionOpen(t,e,r,s)}
        @toggle=${i=>this._handleNodeSectionToggle(i,t.id,e)}
      >
        <summary class="node-subsection-summary">
          <strong>${i}</strong>
          <span>${n}</span>
        </summary>
        <div class="node-subsection-content">
          ${o}
        </div>
      </details>
    `}_nodeSummary(t,e){return Y`
      <summary
        class="node-summary"
        @click=${()=>this._selectNodeFromEditor(e)}
      >
        <div class="node-summary-text">
          <strong>${t}</strong>
        </div>
      </summary>
    `}_selectNodeFromEditor(t){this._selectedNode=t,re(t,{configKey:ui(this._config),sourceId:this._previewSourceId,targetId:this._targetPreviewSourceId})}_entitySelect(t,e,i=!1){const n=t&&!i?Y`
            <button
              type="button"
              class="entity-clear"
              @click=${()=>e(void 0)}
            >
              Clear
            </button>
          `:Z;return this._isHomeAssistantEditor()?Y`
        <div class="entity-picker">
          <ha-selector
            .hass=${this.hass}
            .selector=${{entity:{}}}
            .value=${null!=t?t:""}
            ?disabled=${i}
            @value-changed=${t=>this._handleEntityValueChanged(t,e)}
          ></ha-selector>
          ${n}
        </div>
      `:Y`
      <div class="entity-picker">
        <select
          .value=${null!=t?t:""}
          ?disabled=${i}
          @change=${t=>e(t.currentTarget.value.trim()||void 0)}
        >
          <option value="">Manual</option>
          ${(o=this.hass,Object.keys(null!==(r=null==o?void 0:o.states)&&void 0!==r?r:{}).sort()).map(e=>Y`
              <option value=${e} ?selected=${e===t}>
                ${e}
              </option>
            `)}
        </select>
        ${n}
      </div>
    `;var o,r}_handleEntityValueChanged(t,e){e(Be(t.detail.value))}_iconSelect(t,e,i){const n=i?Y`
          <button
            type="button"
            class="field-clear icon-clear"
            aria-label="Clear icon"
            title="Clear icon"
            @click=${i}
          >
            ×
          </button>
        `:Z;return this._isHomeAssistantEditor()?Y`
        <div class="field-picker icon-picker">
          <ha-selector
            .hass=${this.hass}
            .selector=${{icon:{}}}
            .value=${null!=t?t:""}
            @value-changed=${t=>{var i;const n=null===(i=t.detail.value)||void 0===i?void 0:i.trim();n&&e(n)}}
          ></ha-selector>
          ${n}
        </div>
      `:Y`
      <div class="field-picker icon-picker">
        <select
          .value=${null!=t?t:""}
          @change=${t=>{const i=t.currentTarget.value.trim();i&&e(i)}}
        >
          <option value="">No icon</option>
          ${Pi.map(e=>Y`
              <option value=${e.value} ?selected=${e.value===t}>
                ${e.label}
              </option>
            `)}
        </select>
        ${n}
      </div>
    `}_isHomeAssistantEditor(){return Boolean(this.hass&&"object"==typeof this.hass&&"connection"in this.hass)}_colorInput(t,e,i,n){return Y`
      <label class="color-field">
        <span>${t}</span>
        <div class="color-picker">
          <input
            type="color"
            .value=${function(t){return/^#[0-9a-f]{6}$/i.test(null!=t?t:"")?t:ue}(e)}
            @input=${t=>i(t.currentTarget.value)}
          />
          ${n?Y`
                <button type="button" class="field-clear" @click=${n}>
                  Reset
                </button>
              `:Z}
        </div>
      </label>
    `}_defaultNodeColor(t,e){var i,n,o;if("junction"===t.kind)return Qe(t.id,null!==(o=e.nodes)&&void 0!==o?o:[]);const r=(null!==(i=e.links)&&void 0!==i?i:[]).filter(e=>e.from===t.id||e.to===t.id).map(e=>e.from===t.id?e.to:e.from).find(t=>{var i,n;return"junction"===(null===(i=(null!==(n=e.nodes)&&void 0!==n?n:[]).find(e=>e.id===t))||void 0===i?void 0:i.kind)});if(r){var s,a,l;const t=(null!==(s=e.nodes)&&void 0!==s?s:[]).find(t=>t.id===r);return null!==(a=null==t?void 0:t.color)&&void 0!==a?a:Qe(r,null!==(l=e.nodes)&&void 0!==l?l:[])}return"mdi:solar-power"===t.icon?fe:(null===(n=t.icon)||void 0===n?void 0:n.startsWith("mdi:battery"))?pe:ue}_nextNodeColor(t,e,i){var n,o;const r=e.map(t=>{var e;return ti(null!==(e=t.color)&&void 0!==e?e:this._defaultNodeColor(t,i))}).filter(t=>Boolean(t)),s="junction"===t?ve[0]:ue;if(0===r.length)return s;const a=me.filter(t=>!r.includes(t.toLowerCase()));return null!==(n=null===(o=(a.length>0?a:me).map(t=>({color:t,distance:Math.min(...r.map(e=>function(t,e){const i=ei(t),n=ei(e);return i&&n?Math.hypot(i.r-n.r,i.g-n.g,i.b-n.b):0}(t,e)))})).sort((t,e)=>e.distance-t.distance)[0])||void 0===o?void 0:o.color)&&void 0!==n?n:s}_numberInput(t,e,i){return Y`
      <label>
        <span>${t}</span>
        <input
          type="number"
          .value=${String(Math.round(e))}
          @input=${t=>i(Number(t.currentTarget.value))}
        />
      </label>
    `}_busOptionValue(t,e,i,n){var o;const r=null!==(o=e.nodes)&&void 0!==o?o:[],s=this._busJunctionIds(t,e),a=r.find(t=>s.includes(t.id)&&Number.isFinite(t[i])),l=null==a?void 0:a[i];return Number.isFinite(l)?Number(l):n}_updateBusOptions(t,e,i){var n;const o=this._busJunctionIds(e,t);0!==o.length&&this._patchConfig({nodes:(null!==(n=t.nodes)&&void 0!==n?n:[]).map(t=>o.includes(t.id)?{...t,...i}:t)})}_busJunctionIds(t,e){var i;const n=null!==(i=e.nodes)&&void 0!==i?i:[],o=new Map(n.map(t=>[t.id,t])),r=/* @__PURE__ */new Set,s=[t];for(;s.length>0;){var a;const t=s.shift();t&&!r.has(t)&&(r.add(t),(null!==(a=e.links)&&void 0!==a?a:[]).forEach(e=>{if(e.from!==t&&e.to!==t)return;const i=e.from===t?e.to:e.from;!r.has(i)&&o.has(i)&&s.push(i)}))}return n.filter(t=>"junction"===t.kind&&r.has(t.id)).map(t=>t.id)}_addNode(t){var e,i,n,o;const r=xe(this._config),s=null!==(e=r.nodes)&&void 0!==e?e:[],a=this._uniqueNodeId(t,s),l={id:a,kind:t,label:null!==(i=null===(n=Ci.find(e=>e.value===t))||void 0===n?void 0:n.label)&&void 0!==i?i:"Node",icon:Xe(t),radius:We(t),..."junction"===t?{color:this._nextNodeColor(t,s,r)}:{},flowDirection:"supply",..."junction"===t?{balance_role:qe(t)}:{}};this._patchConfig({nodes:[l,...s],layout:{...null!==(o=r.layout)&&void 0!==o?o:{},[a]:this._initialPoint(t,s.filter(e=>e.kind===t).length)}})}_uniqueNodeId(t,e){const i=new Set(e.map(t=>t.id));let n=1;for(;i.has(`${t}-${n}`);)n+=1;return`${t}-${n}`}_initialPoint(t,e){return"junction"===t?{x:360+130*e,y:348}:{x:300+e%4*120,y:86+110*Math.floor(e/4)}}_duplicateNode(t){var e,i,n,o,r;const s=xe(this._config),a=null!==(e=s.nodes)&&void 0!==e?e:[],l=a.find(e=>e.id===t);if(!l)return;const d=this._uniqueDuplicateNodeId(l.id,a),h=null!==(i=null===(n=s.layout)||void 0===n?void 0:n[l.id])&&void 0!==i?i:this._initialPoint(l.kind,a.filter(t=>t.kind===l.kind).length),c={...l,id:d,label:this._duplicateNodeLabel(null!==(o=l.label)&&void 0!==o?o:l.id,a)};this._selectedNode=d,this._patchConfig({nodes:[c,...a],layout:{...null!==(r=s.layout)&&void 0!==r?r:{},[d]:this._duplicatePoint(h)}}),this._syncSelectedNodeEditor(d)}_uniqueDuplicateNodeId(t,e){const i=new Set(e.map(t=>t.id));let n=1,o=`${t}-copy`;for(;i.has(o);)n+=1,o=`${t}-copy-${n}`;return o}_duplicateNodeLabel(t,e){const i=new Set(e.map(t=>t.label).filter(Boolean));let n=1,o=`${t} copy`;for(;i.has(o);)n+=1,o=`${t} copy ${n}`;return o}_duplicatePoint(t){const e=46,i=t.x+e>916?t.x-e:t.x+e,n=t.y+e>658?t.y-e:t.y+e;return{x:Math.max(70,Math.min(916,i)),y:Math.max(62,Math.min(658,n))}}_updateNode(t,e,i){var n;this._patchConfig({nodes:(null!==(n=t.nodes)&&void 0!==n?n:[]).map(t=>t.id===e?{...t,...i}:t)})}_reorderedNodeIds(t,e,i,n){const o=[...n],r=o.indexOf(t),s=o.indexOf(e);if(r<0||s<0||r===s)return;const[a]=o.splice(r,1);let l=r<s?s-1:s;return"after"===i&&(l+=1),o.splice(l,0,a),o}_commitNodeOrder(t){var e;const i=null!==(e=xe(this._config).nodes)&&void 0!==e?e:[],n=new Map(i.map(t=>[t.id,t])),o=t.map(t=>n.get(t)).filter(t=>Boolean(t)),r=i.filter(e=>!t.includes(e.id));this._patchConfig({nodes:[...o,...r]})}_handleNodePointerDown(t,e){var i,n,o;0===t.button&&(t.preventDefault(),t.stopPropagation(),this._draggedNode=e,this._dragPointerId=t.pointerId,this._dragInsertSide=void 0,this._dragInsertTarget=void 0,this._dragOverNode=void 0,this._dragPreviewOrder=(null!==(i=this._config.nodes)&&void 0!==i?i:[]).map(t=>t.id),null===(n=t.currentTarget)||void 0===n||null===(o=n.setPointerCapture)||void 0===o||o.call(n,t.pointerId))}_clearNodeDragState(){void 0!==this._nodeDragFrame&&cancelAnimationFrame(this._nodeDragFrame),this._nodeDragFrame=void 0,this._nodeDragY=void 0,this._draggedNode=void 0,this._dragPointerId=void 0,this._dragOverNode=void 0,this._dragInsertTarget=void 0,this._dragInsertSide=void 0,this._dragPreviewOrder=void 0}_removeNode(t){const e=xe(this._config);if(this._selectedNode===t&&(this._selectedNode=void 0),this._nodeSectionOpen[t]){const e={...this._nodeSectionOpen};delete e[t],this._nodeSectionOpen=e}this._patchConfig(Ze(e,t))}_handleNodeSectionToggle(t,e,i){var n;const o=t.currentTarget;o&&(this._nodeSectionOpen={...this._nodeSectionOpen,[e]:{...null!==(n=this._nodeSectionOpen[e])&&void 0!==n?n:{},[i]:o.open}})}_isNodeSectionOpen(t,e,i,n={}){var o;const r=null===(o=this._nodeSectionOpen[t.id])||void 0===o?void 0:o[e];return void 0!==r?r:!!n.forceOpen||this._defaultNodeSectionOpen(t,e,i)}_defaultNodeSectionOpen(t,e,i){return"appearance"===e}_patchConfig(t){this._config=xe({...this._config,...t}),ci(this,this._config)}};(vi=Ti).properties={config:{attribute:!1},_config:{state:!0},_dragInsertSide:{state:!0},_dragInsertTarget:{state:!0},_dragPreviewOrder:{state:!0},_dragOverNode:{state:!0},_draggedNode:{state:!0},_selectedNode:{state:!0},hass:{attribute:!1}},vi.styles=d`
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
  `,customElements.get("home-flow-card-editor")||customElements.define("home-flow-card-editor",Ti);
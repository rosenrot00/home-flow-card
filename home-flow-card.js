//#region node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, l, u, { is: d, defineProperty: f, getOwnPropertyDescriptor: p, getOwnPropertyNames: m, getOwnPropertySymbols: h, getPrototypeOf: g } = Object, _ = globalThis, v = _.trustedTypes, y = v ? v.emptyScript : "", b = _.reactiveElementPolyfillSupport, x = (e, t) => e, S = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? y : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, C = (e, t) => !d(e, t), w = {
	attribute: !0,
	type: String,
	converter: S,
	reflect: !1,
	useDefault: !1,
	hasChanged: C
};
(l = Symbol).metadata != null || (l.metadata = Symbol("metadata")), _.litPropertyMetadata != null || (_.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var T = class extends HTMLElement {
	static addInitializer(e) {
		var t;
		this._$Ei(), ((t = this.l) == null ? this.l = [] : t).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = w) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && f(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		var r;
		let { get: i, set: a } = (r = p(this.prototype, e)) == null ? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		} : r;
		return {
			get: i,
			set(t) {
				let r = i == null ? void 0 : i.call(this);
				a == null || a.call(this, t), this.requestUpdate(e, r, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		var t;
		return (t = this.elementProperties.get(e)) == null ? w : t;
	}
	static _$Ei() {
		if (this.hasOwnProperty(x("elementProperties"))) return;
		let e = g(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(x("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(x("properties"))) {
			let e = this.properties, t = [...m(e), ...h(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		var e;
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((e) => e(this));
	}
	addController(e) {
		var t, n;
		((t = this._$EO) == null ? this._$EO = /* @__PURE__ */ new Set() : t).add(e), this.renderRoot !== void 0 && this.isConnected && ((n = e.hostConnected) == null || n.call(e));
	}
	removeController(e) {
		var t;
		(t = this._$EO) == null || t.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		var e;
		let t = (e = this.shadowRoot) == null ? this.attachShadow(this.constructor.shadowRootOptions) : e;
		return s(t, this.constructor.elementStyles), t;
	}
	connectedCallback() {
		var e;
		this.renderRoot != null || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((e) => {
			var t;
			return (t = e.hostConnected) == null ? void 0 : t.call(e);
		});
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		var e;
		(e = this._$EO) == null || e.forEach((e) => {
			var t;
			return (t = e.hostDisconnected) == null ? void 0 : t.call(e);
		});
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			var i;
			let a = (((i = n.converter) == null ? void 0 : i.toAttribute) === void 0 ? S : n.converter).toAttribute(t, n.type);
			this._$Em = e, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			var i, a, o;
			let e = n.getPropertyOptions(r), s = typeof e.converter == "function" ? { fromAttribute: e.converter } : ((i = e.converter) == null ? void 0 : i.fromAttribute) === void 0 ? S : e.converter;
			this._$Em = r;
			let c = s.fromAttribute(t, e.type);
			this[r] = (a = c == null ? (o = this._$Ej) == null ? void 0 : o.get(r) : c) == null ? c : a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			var a, o;
			let s = this.constructor;
			if (!1 === r && (i = this[e]), n != null || (n = s.getPropertyOptions(e)), !(((a = n.hasChanged) == null ? C : a)(i, t) || n.useDefault && n.reflect && i === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(s._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		var o, s, c;
		n && !((o = this._$Ej) == null ? this._$Ej = /* @__PURE__ */ new Map() : o).has(e) && (this._$Ej.set(e, (s = a == null ? t : a) == null ? this[e] : s), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && ((c = this._$Eq) == null ? this._$Eq = /* @__PURE__ */ new Set() : c).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot != null || (this.renderRoot = this.createRenderRoot()), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			var n;
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((e) => {
				var t;
				return (t = e.hostUpdate) == null ? void 0 : t.call(e);
			}), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		var t;
		(t = this._$EO) == null || t.forEach((e) => {
			var t;
			return (t = e.hostUpdated) == null ? void 0 : t.call(e);
		}), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
T.elementStyles = [], T.shadowRootOptions = { mode: "open" }, T[x("elementProperties")] = /* @__PURE__ */ new Map(), T[x("finalized")] = /* @__PURE__ */ new Map(), b == null || b({ ReactiveElement: T }), ((u = _.reactiveElementVersions) == null ? _.reactiveElementVersions = [] : u).push("2.1.2");
//#endregion
//#region node_modules/lit-html/lit-html.js
var ee, E = globalThis, te = (e) => e, D = E.trustedTypes, O = D ? D.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, ne = "$lit$", k = `lit$${Math.random().toFixed(9).slice(2)}$`, re = "?" + k, ie = `<${re}>`, A = document, ae = () => A.createComment(""), oe = (e) => e === null || typeof e != "object" && typeof e != "function", se = Array.isArray, ce = (e) => se(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", le = "[ 	\n\f\r]", j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ue = /-->/g, de = />/g, M = RegExp(`>|${le}(?:([^\\s"'>=/]+)(${le}*=${le}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), fe = /'/g, pe = /"/g, me = /^(?:script|style|textarea|title)$/i, he = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), N = he(1), P = he(2), F = Symbol.for("lit-noChange"), I = Symbol.for("lit-nothing"), ge = /* @__PURE__ */ new WeakMap(), L = A.createTreeWalker(A, 129);
function _e(e, t) {
	if (!se(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return O === void 0 ? t : O.createHTML(t);
}
var ve = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = j;
	for (let t = 0; t < n; t++) {
		var s;
		let n = e[t], c, l, u = -1, d = 0;
		for (; d < n.length && (o.lastIndex = d, l = o.exec(n), l !== null);) d = o.lastIndex, o === j ? l[1] === "!--" ? o = ue : l[1] === void 0 ? l[2] === void 0 ? l[3] !== void 0 && (o = M) : (me.test(l[2]) && (i = RegExp("</" + l[2], "g")), o = M) : o = de : o === M ? l[0] === ">" ? (o = (s = i) == null ? j : s, u = -1) : l[1] === void 0 ? u = -2 : (u = o.lastIndex - l[2].length, c = l[1], o = l[3] === void 0 ? M : l[3] === "\"" ? pe : fe) : o === pe || o === fe ? o = M : o === ue || o === de ? o = j : (o = M, i = void 0);
		let f = o === M && e[t + 1].startsWith("/>") ? " " : "";
		a += o === j ? n + ie : u >= 0 ? (r.push(c), n.slice(0, u) + ne + n.slice(u) + k + f) : n + k + (u === -2 ? t : f);
	}
	return [_e(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, ye = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = ve(t, n);
		if (this.el = e.createElement(l, r), L.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = L.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(ne)) {
					let t = u[o++], n = i.getAttribute(e).split(k), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Ce : r[1] === "?" ? we : r[1] === "@" ? Te : Se
					}), i.removeAttribute(e);
				} else e.startsWith(k) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (me.test(i.tagName)) {
					let e = i.textContent.split(k), t = e.length - 1;
					if (t > 0) {
						i.textContent = D ? D.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], ae()), L.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], ae());
					}
				}
			} else if (i.nodeType === 8) if (i.data === re) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(k, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += k.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = A.createElement("template");
		return n.innerHTML = e, n;
	}
};
function R(e, t, n = e, r) {
	var i, a, o;
	if (t === F) return t;
	let s = r === void 0 ? n._$Cl : (i = n._$Co) == null ? void 0 : i[r], c = oe(t) ? void 0 : t._$litDirective$;
	return (s == null ? void 0 : s.constructor) !== c && (s == null || (a = s._$AO) == null || a.call(s, !1), c === void 0 ? s = void 0 : (s = new c(e), s._$AT(e, n, r)), r === void 0 ? n._$Cl = s : ((o = n._$Co) == null ? n._$Co = [] : o)[r] = s), s !== void 0 && (t = R(e, s._$AS(e, t.values), s, r)), t;
}
var be = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		var t;
		let { el: { content: n }, parts: r } = this._$AD, i = ((t = e == null ? void 0 : e.creationScope) == null ? A : t).importNode(n, !0);
		L.currentNode = i;
		let a = L.nextNode(), o = 0, s = 0, c = r[0];
		for (; c !== void 0;) {
			if (o === c.index) {
				let t;
				c.type === 2 ? t = new xe(a, a.nextSibling, this, e) : c.type === 1 ? t = new c.ctor(a, c.name, c.strings, this, e) : c.type === 6 && (t = new Ee(a, this, e)), this._$AV.push(t), c = r[++s];
			}
			o !== (c == null ? void 0 : c.index) && (a = L.nextNode(), o++);
		}
		return L.currentNode = A, i;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, xe = class e {
	get _$AU() {
		var e, t;
		return (e = (t = this._$AM) == null ? void 0 : t._$AU) == null ? this._$Cv : e;
	}
	constructor(e, t, n, r) {
		var i;
		this.type = 2, this._$AH = I, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = (i = r == null ? void 0 : r.isConnected) == null ? !0 : i;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = R(this, e, t), oe(e) ? e === I || e == null || e === "" ? (this._$AH !== I && this._$AR(), this._$AH = I) : e !== this._$AH && e !== F && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ce(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== I && oe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(A.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		var t;
		let { values: n, _$litType$: r } = e, i = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = ye.createElement(_e(r.h, r.h[0]), this.options)), r);
		if (((t = this._$AH) == null ? void 0 : t._$AD) === i) this._$AH.p(n);
		else {
			let e = new be(i, this), t = e.u(this.options);
			e.p(n), this.T(t), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = ge.get(e.strings);
		return t === void 0 && ge.set(e.strings, t = new ye(e)), t;
	}
	k(t) {
		se(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(ae()), this.O(ae()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		var n;
		for ((n = this._$AP) == null || n.call(this, !1, !0, t); e !== this._$AB;) {
			let t = te(e).nextSibling;
			te(e).remove(), e = t;
		}
	}
	setConnected(e) {
		var t;
		this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
	}
}, Se = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = I, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = I;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = R(this, e, t, 0), a = !oe(e) || e !== this._$AH && e !== F, a && (this._$AH = e);
		else {
			var o;
			let r = e, s, c;
			for (e = i[0], s = 0; s < i.length - 1; s++) c = R(this, r[n + s], t, s), c === F && (c = this._$AH[s]), a || (a = !oe(c) || c !== this._$AH[s]), c === I ? e = I : e !== I && (e += ((o = c) == null ? "" : o) + i[s + 1]), this._$AH[s] = c;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === I ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e == null ? "" : e);
	}
}, Ce = class extends Se {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === I ? void 0 : e;
	}
}, we = class extends Se {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== I);
	}
}, Te = class extends Se {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		var n;
		if ((e = (n = R(this, e, t, 0)) == null ? I : n) === F) return;
		let r = this._$AH, i = e === I && r !== I || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, a = e !== I && (r === I || i);
		i && this.element.removeEventListener(this.name, this, r), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		var t, n;
		typeof this._$AH == "function" ? this._$AH.call((t = (n = this.options) == null ? void 0 : n.host) == null ? this.element : t, e) : this._$AH.handleEvent(e);
	}
}, Ee = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		R(this, e);
	}
}, De = {
	M: ne,
	P: k,
	A: re,
	C: 1,
	L: ve,
	R: be,
	D: ce,
	V: R,
	I: xe,
	H: Se,
	N: we,
	U: Te,
	B: Ce,
	F: Ee
}, Oe = E.litHtmlPolyfillSupport;
Oe == null || Oe(ye, xe), ((ee = E.litHtmlVersions) == null ? E.litHtmlVersions = [] : ee).push("3.3.2");
var ke = (e, t, n) => {
	var r;
	let i = (r = n == null ? void 0 : n.renderBefore) == null ? t : r, a = i._$litPart$;
	if (a === void 0) {
		var o;
		let e = (o = n == null ? void 0 : n.renderBefore) == null ? null : o;
		i._$litPart$ = a = new xe(t.insertBefore(ae(), e), e, void 0, n == null ? {} : n);
	}
	return a._$AI(e), a;
}, Ae, je, Me = globalThis, z = class extends T {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		var e;
		let t = super.createRenderRoot();
		return (e = this.renderOptions).renderBefore != null || (e.renderBefore = t.firstChild), t;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ke(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		var e;
		super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
	}
	disconnectedCallback() {
		var e;
		super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
	}
	render() {
		return F;
	}
};
z._$litElement$ = !0, z.finalized = !0, (Ae = Me.litElementHydrateSupport) == null || Ae.call(Me, { LitElement: z });
var Ne = Me.litElementPolyfillSupport;
Ne == null || Ne({ LitElement: z }), ((je = Me.litElementVersions) == null ? Me.litElementVersions = [] : je).push("4.2.2");
//#endregion
//#region src/home-flow-graph-card.ts
var Pe, Fe = 986, Ie = 730, Le = 90, Re = 65, ze = 20, Be = 100, B = 10, V = 0, H = 0, U = 12, Ve = 4, He = 4, W = 32, Ue = 3.2, We = 7, Ge = 15, Ke = 21, qe = 7, G = 18, K = 40, Je = 1.8, q = .5, Ye = 1, Xe = 28, Ze = 14, Qe = 10, $e = 12e3, et = 2.4, tt = 14, nt = 1.15, rt = 72, J = {
	minX: 70,
	maxX: 916,
	minY: 62,
	maxY: 658
}, it = {
	leaf: "var(--home-flow-leaf-color, #c65b4a)",
	junction: "var(--home-flow-junction-1-color, #f6b73c)"
}, at = [
	"var(--home-flow-junction-1-color, #f6b73c)",
	"var(--home-flow-junction-2-color, #ef6c00)",
	"var(--home-flow-junction-3-color, #f4a340)",
	"var(--home-flow-junction-4-color, #b85f1a)"
], Y = (e, t, n) => Math.min(Math.max(e, t), n), ot = 0, st = class extends z {
	constructor(...e) {
		super(...e), this.editable = !0, this.flowMaxValue = $e, this.flowMinVisibleValue = Qe, this.hideZeroValues = !1, this.labelStyle = "curved", this.leafRouting = "funnel", this.layout = {}, this.links = [], this.nodes = [], this.graphInstanceId = ++ot, this._htmlIconsReady = !1;
	}
	firstUpdated() {
		this._scheduleHtmlIconViewportUpdate();
		let e = this.renderRoot.querySelector(".card");
		!e || typeof ResizeObserver > "u" || (this._resizeObserver = new ResizeObserver(() => {
			this._scheduleHtmlIconViewportUpdate();
		}), this._resizeObserver.observe(e));
	}
	updated() {
		this._scheduleHtmlIconViewportUpdate();
	}
	disconnectedCallback() {
		var e;
		this._htmlIconViewportFrame !== void 0 && (cancelAnimationFrame(this._htmlIconViewportFrame), this._htmlIconViewportFrame = void 0), (e = this._resizeObserver) == null || e.disconnect(), this._resizeObserver = void 0, super.disconnectedCallback();
	}
	render() {
		let e = this._model(), t = this._normalizedLinks(e.nodes), n = this._visibleNodes(e.nodes), r = t.filter((t) => this._isVisibleLink(t, e.nodes)), i = this._renderContext(e, r, t), a = r.filter((t) => this._isJunctionJunctionLink(t, e.nodes)), o = r.filter((t) => !this._isJunctionJunctionLink(t, e.nodes)), s = this._nodesByZLayer(n);
		return N`
      <section
        class=${`card ${this.editable ? "editable" : "readonly"}`}
        aria-label="Flow graph"
      >
        <svg
          class="flow-svg"
          viewBox=${`0 0 ${Fe} ${Ie}`}
          role="group"
          aria-label="Flow graph"
          tabindex=${this.editable ? 0 : -1}
          @pointerdown=${this.editable ? this._clearInteraction : void 0}
          @pointermove=${this.editable ? this._handlePointerMove : void 0}
          @pointerup=${this.editable ? this._handlePointerUp : void 0}
          @pointercancel=${this.editable ? this._handlePointerUp : void 0}
          @keydown=${this.editable ? this._handleKeydown : void 0}
        >
          ${this.editable ? this._renderEditorGrid() : I}
          ${o.map((n) => this._renderGraphLink(n, e, t, i))}
          ${a.map((n) => this._renderGraphLink(n, e, t, i))}
          ${s.map((n) => this._renderNodeLayer(n, e, r, t, i))}
          ${this.editable ? this._renderPendingLink(n, t) : I}
          ${this.editable ? this._renderAnchorControls(n, r) : I}
        </svg>
        ${this._renderHtmlIconLayer(s)}
      </section>
    `;
	}
	_renderEditorGrid() {
		let e = `home-flow-grid-minor-${this.graphInstanceId}`, t = `home-flow-grid-major-${this.graphInstanceId}`, n = U * Ve;
		return P`
      <defs>
        <pattern
          id=${e}
          width=${U}
          height=${U}
          patternUnits="userSpaceOnUse"
          patternTransform=${`translate(${J.minX} ${J.minY})`}
        >
          <circle class="editor-grid-dot" cx="0" cy="0" r="0.85" />
        </pattern>
        <pattern
          id=${t}
          width=${n}
          height=${n}
          patternUnits="userSpaceOnUse"
          patternTransform=${`translate(${J.minX} ${J.minY})`}
        >
          <rect width="100%" height="100%" fill=${`url(#${e})`} />
          <circle class="editor-grid-dot major" cx="0" cy="0" r="1.15" />
        </pattern>
      </defs>
      <rect
        class="editor-grid"
        x="0"
        y="0"
        width=${Fe}
        height=${Ie}
        fill=${`url(#${t})`}
      />
    `;
	}
	_renderContext(e, t, n = t) {
		let r = {
			colors: /* @__PURE__ */ new Map(),
			maxValues: /* @__PURE__ */ new Map(),
			minVisibleValues: /* @__PURE__ */ new Map(),
			nodeColors: /* @__PURE__ */ new Map(),
			paths: /* @__PURE__ */ new Map(),
			signedValues: /* @__PURE__ */ new Map(),
			sourceParts: /* @__PURE__ */ new Map()
		}, i = e.nodes;
		return t.forEach((t) => {
			let a = this._linkSignedValue(t, i, n), o = this._linkMinVisibleValue(t, i, n), s = this._linkMaxValue(t, o, i, n), c = this._graphLinkPath(t, i, n);
			r.signedValues.set(t.id, a), r.minVisibleValues.set(t.id, o), r.maxValues.set(t.id, s), r.paths.set(t.id, c), this._shouldShowFlow(Math.abs(a), o) && (r.colors.set(t.id, this._linkColor(t, e, n, a, r)), r.sourceParts.set(t.id, this._linkSourceParts(t, e, n, a, r)));
		}), r;
	}
	_isJunctionJunctionLink(e, t) {
		var n, r;
		return ((n = t[e.from]) == null ? void 0 : n.kind) === "junction" && ((r = t[e.to]) == null ? void 0 : r.kind) === "junction";
	}
	_model() {
		return { nodes: Object.fromEntries(this._positionedNodes().map((e) => [e.id, e])) };
	}
	_visibleNodes(e) {
		return Object.fromEntries(Object.entries(e).filter(([, e]) => !this._isHiddenByZero(e)));
	}
	_isVisibleLink(e, t) {
		let n = t[e.from], r = t[e.to];
		return !!(n && r && !this._isHiddenByZero(n) && !this._isHiddenByZero(r));
	}
	_isHiddenByZero(e) {
		return e.hideIfZero === !0 && Math.abs(e.value) <= q;
	}
	_nodesByZLayer(e) {
		return Object.values(e).sort((e, t) => {
			let n = t.stackIndex - e.stackIndex;
			return n === 0 ? e.id.localeCompare(t.id) : n;
		});
	}
	_defaultNodeRadius(e) {
		return e === "junction" ? Le : Re;
	}
	_positionedNodes() {
		return this.nodes.map((e, t) => {
			var n, r, i;
			return {
				id: e.id,
				kind: e.kind,
				stackIndex: t,
				label: e.label,
				labelAngle: Number.isFinite(e.labelAngle) ? e.labelAngle : void 0,
				labelOffsetX: Number.isFinite(e.labelOffsetX) ? e.labelOffsetX : void 0,
				labelOffsetY: Number.isFinite(e.labelOffsetY) ? e.labelOffsetY : void 0,
				value: Number.isFinite(e.value) ? e.value : 0,
				flowValue: Number.isFinite(e.flowValue) ? e.flowValue : void 0,
				hasOwnValue: e.hasOwnValue,
				contributesToFlow: e.contributesToFlow,
				secondary: e.secondary,
				secondaryDisplayValue: e.secondaryDisplayValue,
				displayValue: e.displayValue,
				hideZeroValues: e.hideZeroValues,
				hideIfZero: e.hideIfZero,
				showFlowArrow: e.showFlowArrow,
				primaryAction: e.primaryAction,
				secondaryAction: e.secondaryAction,
				radius: Y((n = e.radius) == null ? this._defaultNodeRadius(e.kind) : n, ze, Be),
				point: this._clampedPoint((r = this.layout[e.id]) == null ? this._fallbackPoint(e.kind, t) : r),
				icon: e.icon === null ? void 0 : (i = e.icon) == null ? this._defaultIcon(e.kind) : i,
				secondaryIcon: e.secondaryIcon === null ? void 0 : e.secondaryIcon,
				unit: e.unit,
				color: e.color,
				flowMinVisibleValue: e.flowMinVisibleValue,
				flowMaxValue: e.flowMaxValue
			};
		});
	}
	_fallbackPoint(e, t) {
		return e === "junction" ? {
			x: 350 + t % 3 * 150,
			y: 330 + Math.floor(t / 3) * 110
		} : e === "leaf" ? {
			x: 270 + t % 4 * 130,
			y: 100 + Math.floor(t / 4) * 88
		} : {
			x: 770 + t % 2 * 110,
			y: 360 + Math.floor(t / 2) * 108
		};
	}
	_renderGraphLink(e, t, n, r) {
		var i, a, o, s, c;
		let l = t.nodes, u = l[e.from], d = l[e.to];
		if (!u || !d) return I;
		let f = (i = r.signedValues.get(e.id)) == null ? this._linkSignedValue(e, l, n) : i, p = Math.abs(f), m = (a = r.paths.get(e.id)) == null ? this._graphLinkPath(e, l, n) : a;
		if (!m) return I;
		let h = this.selectedLink === e.id, g = (o = r.minVisibleValues.get(e.id)) == null ? this._linkMinVisibleValue(e, l, n) : o, _ = (s = r.maxValues.get(e.id)) == null ? this._linkMaxValue(e, g, l, n) : s, v = this._shouldShowFlow(p, g), y = v ? this._flowWidth(p, g, _) : et, b = v ? (c = r.colors.get(e.id)) == null ? this._linkColor(e, t, n, f, r) : c : it.junction, x = v ? r.sourceParts.has(e.id) ? r.sourceParts.get(e.id) : this._linkSourceParts(e, t, n, f, r) : void 0, S = this._junctionConnectionMarker(e, t, n);
		return P`
      <path class=${`connector base ${h ? "selected" : ""}`} d=${m} />
      ${v ? this._renderFlowPath(e, m, f, b, y, x) : I}
      ${S ? this._renderJunctionConnectionMarker(S, h) : I}
      ${this.editable || e.entity ? P`
            <path
              class=${`connector-hit ${h ? "selected" : ""}`}
              d=${m}
              @pointerdown=${this.editable ? (t) => this._selectLink(t, e.id) : void 0}
              @click=${!this.editable && e.entity ? (t) => this._emitEntityMoreInfo(e.entity, t) : void 0}
            />
          ` : I}
    `;
	}
	_renderFlowPath(e, t, n, r, i, a) {
		let o = a && a.length > 0 ? a : [{
			color: r,
			key: `${e.id}-fallback`,
			length: G,
			start: 0
		}];
		if (o.length === 1) return P`
        <path
          class="connector flow source-single"
          d=${t}
          stroke=${o[0].color}
          stroke-width=${i}
          stroke-dasharray=${`${G} ${K - G}`}
        >
          ${this._renderFlowAnimation(n)}
        </path>
      `;
		let [s, ...c] = o, l = this._splitFlowMaskId(e);
		return P`
      <mask
        id=${l}
        class="source-flow-mask"
        maskUnits="userSpaceOnUse"
        maskContentUnits="userSpaceOnUse"
        x="-24"
        y="-24"
        width=${Fe + 48}
        height=${Ie + 48}
      >
        <path
          class="connector flow source-mask"
          d=${t}
          stroke="#fff"
          stroke-width=${i}
          stroke-dasharray=${`${G} ${K - G}`}
        >
          ${this._renderFlowAnimation(n)}
        </path>
      </mask>
      <g mask=${`url(#${l})`}>
        <path
          class="connector flow split-flow source-fill"
          d=${t}
          stroke=${s.color}
          stroke-width=${i}
          stroke-dasharray=${`${G} ${K - G}`}
        >
          ${this._renderFlowAnimation(n)}
        </path>
        ${c.map((e) => {
			let r = this._sourceTailOffset(e), a = this._sourceTailVisibleLength(e);
			return P`
            <path
              class="connector flow split-flow source-split"
              d=${t}
              stroke=${e.color}
              stroke-width=${i}
              stroke-dasharray=${`${a} ${K - a}`}
              stroke-dashoffset=${r}
            >
              ${this._renderFlowAnimation(n, r)}
            </path>
          `;
		})}
      </g>
    `;
	}
	_renderFlowAnimation(e, t = 0) {
		let n = e >= 0 ? t - K : t + K;
		return P`
      <animate
        attributeName="stroke-dashoffset"
        begin="0s"
        dur=${`${Je}s`}
        from=${t}
        to=${n}
        repeatCount="indefinite"
      />
    `;
	}
	_sourceTailOffset(e) {
		return -e.start;
	}
	_sourceTailVisibleLength(e) {
		return Y(G - e.start, 0, K);
	}
	_splitFlowMaskId(e) {
		return `home-flow-split-${this.graphInstanceId}-${e.id.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
	}
	_junctionConnectionMarker(e, t, n) {
		if (!this._isJunctionJunctionLink(e, t.nodes)) return;
		let r = this._junctionJoinGeometry(e, t.nodes, n);
		if (!(!(r != null && r.tap) || r.branchLinkId !== e.id)) return r.tap;
	}
	_renderJunctionConnectionMarker(e, t) {
		return P`
      <circle
        class=${`bus-tap ${t ? "selected" : ""}`}
        cx=${e.x}
        cy=${e.y}
        r="6"
        aria-hidden="true"
      />
    `;
	}
	_junctionFlowColor(e, t) {
		var n;
		let r = t == null || (n = t[e]) == null ? void 0 : n.color;
		if (r) return r;
		let i = Object.values(t == null ? {} : t).filter((e) => e.kind === "junction");
		return at[Math.max(0, i.findIndex((t) => t.id === e)) % at.length];
	}
	_graphLinkPath(e, t, n) {
		let r = t[e.from], i = t[e.to];
		if (!r || !i) return "";
		let a = [r, i].find((e) => e.kind === "junction"), o = [r, i].find((e) => e.kind === "leaf");
		if (o && a) {
			let r = this._linkedLeafNodes(a.id, t, n), i = this._sortedLaneNodes(r.filter((e) => e.point.y <= a.point.y - a.radius), "x"), s = this._sortedLaneNodes(r.filter((e) => e.point.y >= a.point.y + a.radius), "x"), c = this._sortedLaneNodes(r.filter((e) => e.point.x <= a.point.x), "y"), l = this._sortedLaneNodes(r.filter((e) => e.point.x >= a.point.x), "y"), u = {
				from: this._linkAnchor(e, o.id),
				to: this._linkAnchor(e, a.id)
			};
			if (this.leafRouting === "radial") return this._radialConnectorPath(o, a, u);
			if (this.leafRouting === "sweep") return this._defaultConnectorPath(o, a, u);
			switch (this._leafConnectorSide(o, a)) {
				case "upper": return this.leafRouting === "channel" ? this._upperLeafChannelPath(o, a, this._laneSlotForNode(o.id, i).index, Math.max(1, i.length), u) : this.leafRouting === "orthogonal" ? this._upperLeafOrthogonalPath(o, a, this._laneSlotForNode(o.id, i).index, Math.max(1, i.length), u) : this._upperLeafConnectorPath(o, a, this._laneSlotForNode(o.id, i).index, Math.max(1, i.length), u);
				case "lower": return this.leafRouting === "channel" ? this._lowerLeafChannelPath(o, a, this._laneSlotForNode(o.id, s).index, Math.max(1, s.length), u) : this.leafRouting === "orthogonal" ? this._lowerLeafOrthogonalPath(o, a, this._laneSlotForNode(o.id, s).index, Math.max(1, s.length), u) : this._lowerLeafConnectorPath(o, a, this._laneSlotForNode(o.id, s).index, Math.max(1, s.length), u);
				case "left": return this.leafRouting === "channel" ? this._leftLeafChannelPath(o, a, this._laneSlotForNode(o.id, c).index, Math.max(1, c.length), u) : this.leafRouting === "orthogonal" ? this._leftLeafOrthogonalPath(o, a, this._laneSlotForNode(o.id, c).index, Math.max(1, c.length), u) : this._leftLeafConnectorPath(o, a, this._laneSlotForNode(o.id, c).index, Math.max(1, c.length), u);
				case "right": return this.leafRouting === "channel" ? this._rightLeafChannelPath(o, a, this._laneSlotForNode(o.id, l).index, Math.max(1, l.length), u) : this.leafRouting === "orthogonal" ? this._rightLeafOrthogonalPath(o, a, this._laneSlotForNode(o.id, l).index, Math.max(1, l.length), u) : this._rightLeafConnectorPath(o, a, this._laneSlotForNode(o.id, l).index, Math.max(1, l.length), u);
				default: return this._radialConnectorPath(o, a, u);
			}
		}
		return r.kind === "junction" && i.kind === "junction" ? this._junctionJoinedConnectionPath(e, t, n) || this._junctionConnectorPath(r, i, t, {
			from: this._linkAnchor(e, r.id),
			to: this._linkAnchor(e, i.id)
		}) : this._defaultConnectorPath(r, i, {
			from: this._linkAnchor(e, r.id),
			to: this._linkAnchor(e, i.id)
		});
	}
	_junctionConnectorPath(e, t, n, r = {}) {
		let i = this._connectionPoint(e, t, r.from, V), a = this._connectionPoint(t, e, r.to, V), o = this._junctionLineDetours(i, a, e, t, n);
		if (o.length === 0) return `M${i.x} ${i.y} L${a.x} ${a.y}`;
		let s = [`M${i.x} ${i.y}`], c = 0;
		return o.forEach((e) => {
			e.beforeDistance > c + .5 && s.push(`L${e.entry.x} ${e.entry.y}`), s.push(`A${e.radius} ${e.radius} 0 0 ${e.sweepFlag} ${e.exit.x} ${e.exit.y}`), c = e.afterDistance;
		}), s.push(`L${a.x} ${a.y}`), s.join(" ");
	}
	_leafConnectorSide(e, t) {
		let n = e.point.x - t.point.x, r = e.point.y - t.point.y, i = Math.max(0, Math.abs(n) - t.radius), a = Math.max(0, Math.abs(r) - t.radius);
		return i <= 0 && a <= 0 ? "radial" : a >= i ? r <= 0 ? "upper" : "lower" : n <= 0 ? "left" : "right";
	}
	_junctionLineDetours(e, t, n, r, i) {
		return Object.values(i).filter((e) => e.kind === "junction" && e.id !== n.id && e.id !== r.id).map((n) => this._junctionLineDetour(e, t, n)).filter((e) => !!e).sort((e, t) => e.beforeDistance - t.beforeDistance);
	}
	_junctionLineDetour(e, t, n, r = 0) {
		let i = t.x - e.x, a = t.y - e.y, o = Math.hypot(i, a);
		if (o < 1) return;
		let s = {
			x: i / o,
			y: a / o
		}, c = {
			x: -s.y,
			y: s.x
		}, l = {
			x: n.point.x - e.x,
			y: n.point.y - e.y
		}, u = l.x * s.x + l.y * s.y, d = l.x * c.x + l.y * c.y, f = n.radius + B, p = f + Math.max(0, r), m = Math.max(18, n.radius - 8);
		if (u <= f || u >= o - f || Math.abs(d) > p) return;
		let h = Math.abs(d) < m ? m : Math.abs(d) > f ? p : f, g = Math.sqrt(Math.max(0, h ** 2 - d ** 2)), _ = Math.max(0, u - g), v = Math.min(o, u + g), y = +(d >= 0), b = y === 1 ? -1 : 1, x = {
			x: Math.round(n.point.x + c.x * b * h),
			y: Math.round(n.point.y + c.y * b * h)
		};
		return {
			afterDistance: v,
			beforeDistance: _,
			entry: {
				x: e.x + s.x * _,
				y: e.y + s.y * _
			},
			exit: {
				x: e.x + s.x * v,
				y: e.y + s.y * v
			},
			nodeId: n.id,
			radius: h,
			signedDistance: d,
			sweepFlag: y,
			tap: x,
			tapAnchor: this._nearestAnchorIndex(n, x)
		};
	}
	_junctionJoinedConnectionPath(e, t, n) {
		var r;
		let i = this._junctionJoinGeometry(e, t, n);
		if (!i) return;
		let a = (r = i.pathsByLinkId) == null ? void 0 : r[e.id];
		if (a) return a;
		if (e.from === i.firstOuterId && e.to === i.middleId) return i.beforePath;
		if (e.from === i.middleId && e.to === i.firstOuterId) return i.beforeReversePath;
		if (e.from === i.middleId && e.to === i.secondOuterId) return i.afterPath;
		if (e.from === i.secondOuterId && e.to === i.middleId) return i.afterReversePath;
	}
	_junctionJoinGeometry(e, t, n) {
		let r = t[e.from], i = t[e.to];
		if (!(!r || !i || r.kind !== "junction" || i.kind !== "junction")) return [r, i].map((r) => this._junctionJoinGeometryForMiddle(e, r, t, n)).filter((e) => !!e)[0];
	}
	_junctionJoinGeometryForMiddle(e, t, n, r) {
		let i = this._linkAnchor(e, t.id), a = e.junctionJoinId;
		if (i === void 0 && !a) return;
		let o = n[e.from === t.id ? e.to : e.from];
		if (!o || o.kind !== "junction") return;
		let s = r.find((r) => {
			if (r.id === e.id || r.from !== t.id && r.to !== t.id) return !1;
			let o = n[r.from === t.id ? r.to : r.from];
			return (o == null ? void 0 : o.kind) === "junction" && (a && r.junctionJoinId === a || i !== void 0 && this._linkAnchor(r, t.id) === i);
		});
		if (!s) return;
		let c = n[s.from === t.id ? s.to : s.from];
		if (!c || c.kind !== "junction") return;
		let [l, u] = this._orderedJoinOuters(o, c), d = this._linkBetweenNodes(e, s, l.id, t.id), f = this._linkBetweenNodes(e, s, u.id, t.id);
		if (!d || !f) return;
		let p = this._connectionPoint(l, u, this._linkAnchor(d, l.id), V), m = this._connectionPoint(u, l, this._linkAnchor(f, u.id), V), h = this._junctionLineDetour(p, m, t, a ? Ze : 0);
		return h ? {
			afterPath: this._junctionJoinAfterPath(h.tap, h, m),
			afterReversePath: this._junctionJoinAfterReversePath(m, h, h.tap),
			beforePath: this._junctionJoinBeforePath(p, h, h.tap),
			beforeReversePath: this._junctionJoinBeforeReversePath(h.tap, h, p),
			branchLinkId: f.id,
			busLinkId: d.id,
			firstOuterId: l.id,
			middleId: t.id,
			secondOuterId: u.id,
			tap: h.tap
		} : this._junctionBranchJoinGeometry(t, l, u, d, f, n);
	}
	_junctionBranchJoinGeometry(e, t, n, r, i, a) {
		let o = this._connectionPoint(t, n, this._linkAnchor(r, t.id), V), s = this._connectionPoint(n, t, this._linkAnchor(i, n.id), V), c = this._closestPointOnSegment(e.point, o, s).point, l = this._guideNode(`${e.id}-bus-tap`, c), u = {
			...a,
			[l.id]: l
		}, d = this._junctionConnectorPath(t, l, u, { from: this._linkAnchor(r, t.id) }), f = this._junctionConnectorPath(l, t, u, { to: this._linkAnchor(r, t.id) }), p = this._junctionConnectorPath(l, n, u, { to: this._linkAnchor(i, n.id) }), m = this._junctionConnectorPath(n, l, u, { from: this._linkAnchor(i, n.id) }), h = this._junctionBranchToBusPath(e, c), g = this._junctionBranchFromBusPath(e, c), _ = this._joinPaths(h, p), v = this._joinPaths(m, g), y = r, b = i;
		return {
			afterPath: _,
			afterReversePath: v,
			beforePath: d,
			beforeReversePath: f,
			branchLinkId: b.id,
			busLinkId: y.id,
			firstOuterId: t.id,
			middleId: e.id,
			pathsByLinkId: {
				[y.id]: y.from === t.id || y.to === e.id ? d : f,
				[b.id]: b.from === e.id || b.to === n.id ? _ : v
			},
			secondOuterId: n.id,
			tap: c
		};
	}
	_joinPaths(e, t) {
		let n = t.replace(/^M\s*-?\d+(?:\.\d+)?(?:e[-+]?\d+)?\s+-?\d+(?:\.\d+)?(?:e[-+]?\d+)?\s*/i, "").trim();
		return n ? `${e} ${n}` : e;
	}
	_junctionBranchToBusPath(e, t) {
		let n = this._guideNode(`${e.id}-bus-tap`, t);
		return this._defaultConnectorPath(e, n, { from: this._nearestAnchorIndex(e, t) });
	}
	_junctionBranchFromBusPath(e, t) {
		let n = this._guideNode(`${e.id}-bus-tap`, t);
		return this._defaultConnectorPath(n, e, { to: this._nearestAnchorIndex(e, t) });
	}
	_orderedJoinOuters(e, t) {
		return e.point.x === t.point.x ? e.point.y <= t.point.y ? [e, t] : [t, e] : e.point.x < t.point.x ? [e, t] : [t, e];
	}
	_linkBetweenNodes(e, t, n, r) {
		if (this._sameLinkEnds(e, n, r)) return e;
		if (this._sameLinkEnds(t, n, r)) return t;
	}
	_junctionJoinBeforePath(e, t, n) {
		let r = [`M${e.x} ${e.y}`];
		return Math.hypot(t.entry.x - e.x, t.entry.y - e.y) > .5 && r.push(`L${t.entry.x} ${t.entry.y}`), r.push(`A${t.radius} ${t.radius} 0 0 ${t.sweepFlag} ${n.x} ${n.y}`), r.join(" ");
	}
	_junctionJoinBeforeReversePath(e, t, n) {
		let r = [`M${e.x} ${e.y}`, `A${t.radius} ${t.radius} 0 0 ${this._oppositeSweep(t.sweepFlag)} ${t.entry.x} ${t.entry.y}`];
		return Math.hypot(t.entry.x - n.x, t.entry.y - n.y) > .5 && r.push(`L${n.x} ${n.y}`), r.join(" ");
	}
	_junctionJoinAfterPath(e, t, n) {
		let r = [`M${e.x} ${e.y}`, `A${t.radius} ${t.radius} 0 0 ${t.sweepFlag} ${t.exit.x} ${t.exit.y}`];
		return Math.hypot(n.x - t.exit.x, n.y - t.exit.y) > .5 && r.push(`L${n.x} ${n.y}`), r.join(" ");
	}
	_junctionJoinAfterReversePath(e, t, n) {
		let r = [`M${e.x} ${e.y}`];
		return Math.hypot(e.x - t.exit.x, e.y - t.exit.y) > .5 && r.push(`L${t.exit.x} ${t.exit.y}`), r.push(`A${t.radius} ${t.radius} 0 0 ${this._oppositeSweep(t.sweepFlag)} ${n.x} ${n.y}`), r.join(" ");
	}
	_oppositeSweep(e) {
		return e === 1 ? 0 : 1;
	}
	_upperLeafConnectorPath(e, t, n, r, i = {}) {
		if (e.point.y >= t.point.y - t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.x, t.point.x, n, r, Math.max(0, t.radius - 22)), o = t.point.y - t.radius - B - 16, s = this._guideNode(`${e.id}-upper-drop`, {
			x: t.point.x,
			y: o
		}), c = this._guideNode(`${t.id}-upper-neck`, {
			x: a,
			y: o
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H), d = Math.max(0, u.y - l.y);
		if (Math.abs(l.x - u.x) < 3) return `M${l.x} ${l.y} L${u.x} ${u.y}`;
		let f = l.y + Y(d * .42, 38, 72), p = Y((f - l.y) * .35, 16, 28);
		return [
			`M${l.x} ${l.y}`,
			`C${l.x} ${l.y + p} ${u.x} ${f - p} ${u.x} ${f}`,
			`L${u.x} ${u.y}`
		].join(" ");
	}
	_lowerLeafConnectorPath(e, t, n, r, i = {}) {
		if (e.point.y <= t.point.y + t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.x, t.point.x, n, r, Math.max(0, t.radius - 22)), o = t.point.y + t.radius + B + 16, s = this._guideNode(`${e.id}-lower-drop`, {
			x: e.point.x,
			y: o
		}), c = this._guideNode(`${t.id}-lower-neck`, {
			x: a,
			y: o
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H), d = Math.max(0, l.y - u.y);
		if (Math.abs(l.x - u.x) < 3) return `M${l.x} ${l.y} L${u.x} ${u.y}`;
		let f = u.y + Y(d * .58, 44, 76), p = Y((l.y - f) * .35, 16, 28);
		return [
			`M${l.x} ${l.y}`,
			`C${l.x} ${l.y - p} ${u.x} ${f + p} ${u.x} ${f}`,
			`L${u.x} ${u.y}`
		].join(" ");
	}
	_leftLeafConnectorPath(e, t, n, r, i = {}) {
		if (e.point.x >= t.point.x - t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.y, t.point.y, n, r, Math.max(0, t.radius - 22)), o = t.point.x - t.radius - B - 16, s = this._guideNode(`${e.id}-left-spread`, {
			x: o,
			y: e.point.y
		}), c = this._guideNode(`${t.id}-left-neck`, {
			x: o,
			y: a
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H), d = Math.max(0, u.x - l.x);
		if (Math.abs(l.y - u.y) < 3) return `M${l.x} ${l.y} L${u.x} ${u.y}`;
		let f = l.x + Y(d * .42, 38, 72), p = Y((f - l.x) * .35, 16, 28);
		return [
			`M${l.x} ${l.y}`,
			`C${l.x + p} ${l.y} ${f - p} ${u.y} ${f} ${u.y}`,
			`L${u.x} ${u.y}`
		].join(" ");
	}
	_rightLeafConnectorPath(e, t, n, r, i = {}) {
		if (e.point.x <= t.point.x + t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.y, t.point.y, n, r, Math.max(0, t.radius - 22)), o = t.point.x + t.radius + B + 16, s = this._guideNode(`${e.id}-right-spread`, {
			x: o,
			y: e.point.y
		}), c = this._guideNode(`${t.id}-right-neck`, {
			x: o,
			y: a
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H), d = Math.max(0, l.x - u.x);
		if (Math.abs(l.y - u.y) < 3) return `M${l.x} ${l.y} L${u.x} ${u.y}`;
		let f = l.x - Y(d * .42, 38, 72), p = Y((l.x - f) * .35, 16, 28);
		return [
			`M${l.x} ${l.y}`,
			`C${l.x - p} ${l.y} ${f + p} ${u.y} ${f} ${u.y}`,
			`L${u.x} ${u.y}`
		].join(" ");
	}
	_upperLeafChannelPath(e, t, n, r, i = {}) {
		if (e.point.y >= t.point.y - t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.x, t.point.x, n, r, Math.max(0, t.radius - 18)), o = t.point.y - t.radius - B - 18, s = this._guideNode(`${e.id}-upper-channel`, {
			x: e.point.x,
			y: o
		}), c = this._guideNode(`${t.id}-upper-channel`, {
			x: a,
			y: o
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H);
		return this._channelVerticalPath(l, u, "down");
	}
	_lowerLeafChannelPath(e, t, n, r, i = {}) {
		if (e.point.y <= t.point.y + t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.x, t.point.x, n, r, Math.max(0, t.radius - 18)), o = t.point.y + t.radius + B + 18, s = this._guideNode(`${e.id}-lower-channel`, {
			x: e.point.x,
			y: o
		}), c = this._guideNode(`${t.id}-lower-channel`, {
			x: a,
			y: o
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H);
		return this._channelVerticalPath(l, u, "up");
	}
	_leftLeafChannelPath(e, t, n, r, i = {}) {
		if (e.point.x >= t.point.x - t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.y, t.point.y, n, r, Math.max(0, t.radius - 18)), o = t.point.x - t.radius - B - 18, s = this._guideNode(`${e.id}-left-channel`, {
			x: o,
			y: e.point.y
		}), c = this._guideNode(`${t.id}-left-channel`, {
			x: o,
			y: a
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H);
		return this._channelHorizontalPath(l, u, "right");
	}
	_rightLeafChannelPath(e, t, n, r, i = {}) {
		if (e.point.x <= t.point.x + t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.y, t.point.y, n, r, Math.max(0, t.radius - 18)), o = t.point.x + t.radius + B + 18, s = this._guideNode(`${e.id}-right-channel`, {
			x: o,
			y: e.point.y
		}), c = this._guideNode(`${t.id}-right-channel`, {
			x: o,
			y: a
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H);
		return this._channelHorizontalPath(l, u, "left");
	}
	_upperLeafAnchorReferencePoint(e, t, n, r) {
		return this.leafRouting === "channel" || this.leafRouting === "orthogonal" ? {
			x: e.point.x,
			y: t.point.y - t.radius - B - 18
		} : {
			x: t.point.x,
			y: t.point.y - t.radius - B - 16
		};
	}
	_lowerLeafAnchorReferencePoint(e, t, n, r) {
		return this.leafRouting === "channel" || this.leafRouting === "orthogonal" ? {
			x: e.point.x,
			y: t.point.y + t.radius + B + 18
		} : {
			x: e.point.x,
			y: t.point.y + t.radius + B + 16
		};
	}
	_leftLeafAnchorReferencePoint(e, t, n, r) {
		return this.leafRouting === "channel" || this.leafRouting === "orthogonal" ? {
			x: t.point.x - t.radius - B - 18,
			y: e.point.y
		} : {
			x: t.point.x - t.radius - B - 16,
			y: e.point.y
		};
	}
	_rightLeafAnchorReferencePoint(e, t, n, r) {
		return this.leafRouting === "channel" || this.leafRouting === "orthogonal" ? {
			x: t.point.x + t.radius + B + 18,
			y: e.point.y
		} : {
			x: t.point.x + t.radius + B + 16,
			y: e.point.y
		};
	}
	_upperLeafOrthogonalPath(e, t, n, r, i = {}) {
		if (e.point.y >= t.point.y - t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.x, t.point.x, n, r, Math.max(0, t.radius - 18)), o = t.point.y - t.radius - B - 18, s = this._guideNode(`${e.id}-upper-orthogonal`, {
			x: e.point.x,
			y: o
		}), c = this._guideNode(`${t.id}-upper-orthogonal`, {
			x: a,
			y: o
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H);
		return this._orthogonalVerticalPath(l, u, o);
	}
	_lowerLeafOrthogonalPath(e, t, n, r, i = {}) {
		if (e.point.y <= t.point.y + t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.x, t.point.x, n, r, Math.max(0, t.radius - 18)), o = t.point.y + t.radius + B + 18, s = this._guideNode(`${e.id}-lower-orthogonal`, {
			x: e.point.x,
			y: o
		}), c = this._guideNode(`${t.id}-lower-orthogonal`, {
			x: a,
			y: o
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H);
		return this._orthogonalVerticalPath(l, u, o);
	}
	_leftLeafOrthogonalPath(e, t, n, r, i = {}) {
		if (e.point.x >= t.point.x - t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.y, t.point.y, n, r, Math.max(0, t.radius - 18)), o = t.point.x - t.radius - B - 18, s = this._guideNode(`${e.id}-left-orthogonal`, {
			x: o,
			y: e.point.y
		}), c = this._guideNode(`${t.id}-left-orthogonal`, {
			x: o,
			y: a
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H);
		return this._orthogonalHorizontalPath(l, u, o);
	}
	_rightLeafOrthogonalPath(e, t, n, r, i = {}) {
		if (e.point.x <= t.point.x + t.radius) return this._radialConnectorPath(e, t, i);
		let a = this._funnelLaneCoordinate(e.point.y, t.point.y, n, r, Math.max(0, t.radius - 18)), o = t.point.x + t.radius + B + 18, s = this._guideNode(`${e.id}-right-orthogonal`, {
			x: o,
			y: e.point.y
		}), c = this._guideNode(`${t.id}-right-orthogonal`, {
			x: o,
			y: a
		}), l = this._connectionPoint(e, s, i.from), u = this._connectionPoint(t, c, i.to, H);
		return this._orthogonalHorizontalPath(l, u, o);
	}
	_orthogonalVerticalPath(e, t, n) {
		return Math.abs(e.x - t.x) < 3 ? `M${e.x} ${e.y} L${t.x} ${t.y}` : [
			`M${e.x} ${e.y}`,
			`L${e.x} ${n}`,
			`L${t.x} ${n}`,
			`L${t.x} ${t.y}`
		].join(" ");
	}
	_orthogonalHorizontalPath(e, t, n) {
		return Math.abs(e.y - t.y) < 3 ? `M${e.x} ${e.y} L${t.x} ${t.y}` : [
			`M${e.x} ${e.y}`,
			`L${n} ${e.y}`,
			`L${n} ${t.y}`,
			`L${t.x} ${t.y}`
		].join(" ");
	}
	_channelVerticalPath(e, t, n) {
		let r = Math.abs(t.y - e.y), i = Y(r * .26, 18, 36), a = Y(r * .22, 16, 30), o = n === "down" ? e.y + i : e.y - i, s = n === "down" ? t.y - i : t.y + i;
		return Math.abs(e.x - t.x) < 3 || Math.abs(s - o) < 6 ? `M${e.x} ${e.y} L${t.x} ${t.y}` : [
			`M${e.x} ${e.y}`,
			`L${e.x} ${o}`,
			`C${e.x} ${n === "down" ? o + a : o - a} ${t.x} ${n === "down" ? s - a : s + a} ${t.x} ${s}`,
			`L${t.x} ${t.y}`
		].join(" ");
	}
	_channelHorizontalPath(e, t, n) {
		let r = Math.abs(t.x - e.x), i = Y(r * .26, 18, 36), a = Y(r * .22, 16, 30), o = n === "right" ? e.x + i : e.x - i, s = n === "right" ? t.x - i : t.x + i;
		return Math.abs(e.y - t.y) < 3 || Math.abs(s - o) < 6 ? `M${e.x} ${e.y} L${t.x} ${t.y}` : [
			`M${e.x} ${e.y}`,
			`L${o} ${e.y}`,
			`C${n === "right" ? o + a : o - a} ${e.y} ${n === "right" ? s - a : s + a} ${t.y} ${s} ${t.y}`,
			`L${t.x} ${t.y}`
		].join(" ");
	}
	_defaultConnectorPath(e, t, n = {}) {
		let r = this._connectionPoint(e, t, n.from, e.kind === "junction" && t.kind === "leaf" ? H : void 0), i = this._connectionPoint(t, e, n.to, t.kind === "junction" && e.kind === "leaf" ? H : void 0), a = i.x - r.x, o = i.y - r.y;
		if (Math.abs(a) >= Math.abs(o)) {
			let e = a * .38;
			return `M${r.x} ${r.y} C${r.x + e} ${r.y} ${i.x - e} ${i.y} ${i.x} ${i.y}`;
		}
		let s = o * .38;
		return `M${r.x} ${r.y} C${r.x} ${r.y + s} ${i.x} ${i.y - s} ${i.x} ${i.y}`;
	}
	_radialConnectorPath(e, t, n = {}) {
		let r = this._connectionPoint(e, t, n.from, e.kind === "junction" && t.kind === "leaf" ? H : void 0), i = this._connectionPoint(t, e, n.to, t.kind === "junction" && e.kind === "leaf" ? H : void 0), a = t.point.x - e.point.x, o = t.point.y - e.point.y, s = Math.hypot(a, o) || 1, c = {
			x: a / s,
			y: o / s
		}, l = Y(s * .32, 46, 120);
		return [
			`M${r.x} ${r.y}`,
			`C${r.x + c.x * l} ${r.y + c.y * l}`,
			`${i.x - c.x * l} ${i.y - c.y * l}`,
			`${i.x} ${i.y}`
		].join(" ");
	}
	_linkedLeafNodes(e, t, n) {
		return this._uniqueNodes(n.map((n) => {
			if (n.from !== e && n.to !== e) return;
			let r = t[n.from === e ? n.to : n.from];
			return (r == null ? void 0 : r.kind) === "leaf" ? r : void 0;
		}).filter((e) => !!e));
	}
	_uniqueNodes(e) {
		return Array.from(new Map(e.map((e) => [e.id, e])).values());
	}
	_sortedLaneNodes(e, t) {
		return [...e].sort((e, n) => {
			let r = e.point[t] - n.point[t];
			return Math.abs(r) > .1 ? r : e.id.localeCompare(n.id);
		});
	}
	_laneSlotForNode(e, t) {
		let n = t.findIndex((t) => t.id === e);
		return {
			index: Math.max(0, n),
			count: Math.max(1, t.length)
		};
	}
	_funnelLaneCoordinate(e, t, n, r, i) {
		if (i <= 0) return t;
		let a = Y(e - t, -i, i);
		if (r <= 1) return t + a;
		let o = this._laneOffset(n, r, rt, i);
		return t + Y(a * .75 + o * .25, -i, i);
	}
	_laneOffset(e, t, n, r) {
		if (t <= 1 || r <= 0) return 0;
		let i = (e - (t - 1) / 2) * n, a = (t - 1) / 2 * n;
		return i * (a > r ? r / a : 1);
	}
	_linkAnchor(e, t) {
		if (e.from === t && e.fromAnchorMode === "manual") return e.fromAnchor;
		if (e.to === t && e.toAnchorMode === "manual") return e.toAnchor;
	}
	_guideNode(e, t) {
		return {
			id: e,
			kind: "junction",
			stackIndex: -1,
			label: "",
			value: 0,
			radius: 0,
			point: t,
			icon: "node"
		};
	}
	_renderNodeLayer(e, t, n, r, i) {
		return P`
      ${this._renderNodeShell(e, t, r, i)}
      ${this._renderNodeBusCover(e, t, n, r, i)}
      ${this._renderNodeOverlay(e, t, r)}
    `;
	}
	_renderNodeOverlay(e, t, n) {
		return P`
      ${this._renderNodeContent(e, t, n)}
      ${this._renderNodeLabel(e, t, n)}
      ${this._renderLabelHandle(e, t, n)}
      ${this.editable ? P`
            <g
              class="node-hit-layer"
              transform=${`translate(${e.point.x} ${e.point.y})`}
            >
              <circle
                class="hit-area node-hit-proxy"
                r=${e.radius + 18}
                @pointerdown=${(t) => this._startNodeDrag(t, e)}
              />
            </g>
          ` : I}
    `;
	}
	_renderNodeBusCover(e, t, n, r, i) {
		return this._shouldBusStayBehindNode(e, n, t.nodes) ? P`
      <g
        class="node-bus-cover"
        transform=${`translate(${e.point.x} ${e.point.y})`}
        aria-hidden="true"
      >
        <circle
          class="node-bg bus-cover"
          r=${e.radius}
          stroke=${this._nodeColorCached(e, t, r, i)}
          stroke-width=${e.kind === "junction" ? 4 : 2.5}
        />
      </g>
    ` : I;
	}
	_shouldBusStayBehindNode(e, t, n) {
		return e.kind === "junction" ? t.filter((t) => (t.from === e.id || t.to === e.id) && this._isJunctionJunctionLink(t, n)).length <= 1 : !1;
	}
	_renderNodeShell(e, t, n, r) {
		return P`
      <g
        class=${`node ${e.kind}-node ${!this.editable && e.primaryAction ? "actionable" : ""} ${this.activeNode === e.id ? "dragging" : ""} ${this.selectedNode === e.id ? "selected" : ""}`}
        transform=${`translate(${e.point.x} ${e.point.y})`}
        tabindex=${this.editable || e.primaryAction ? 0 : -1}
        role=${!this.editable && e.primaryAction ? "button" : I}
        aria-label=${!this.editable && e.primaryAction ? `${e.label} ${this._nodeActionLabel(e.primaryAction)}` : e.label}
        @pointerdown=${this.editable ? (t) => this._startNodeDrag(t, e) : void 0}
        @click=${!this.editable && e.primaryAction ? (t) => this._emitNodeAction(e.primaryAction, t) : void 0}
        @keydown=${!this.editable && e.primaryAction ? (t) => this._handleNodeActionKeydown(t, e.primaryAction) : void 0}
      >
        <circle
          class="node-bg"
          r=${e.radius}
          stroke=${this._nodeColorCached(e, t, n, r)}
          stroke-width=${e.kind === "junction" ? 4 : 2.5}
        />
        <circle class="hit-area" r=${e.radius + 18} />
      </g>
    `;
	}
	_renderNodeContent(e, t, n) {
		var r, i, a;
		let o = !!(e.icon || e.secondaryIcon), s = e.secondary !== void 0, c = this._nodeDisplayValue(e, t, n), l = !this._shouldHideNodeValue(e, c), u = s && !this._shouldHideNodeValue(e, (r = e.secondary) == null ? 0 : r), d = this._nodePrimaryValue(e, t, n), f = l ? this._nodeTextLines(d, e) : [], p = u ? this._nodeTextLines((i = e.secondaryDisplayValue) == null ? `${Math.round((a = e.secondary) == null ? 0 : a)}%` : i, e) : [], m = !o, h = f.length > 0, g = p.length > 0, _ = this._nodePrimaryTextY(e, o, s, h, g), v = this._nodeSecondaryTextY(e, o, s, h, g);
		return P`
      <g
        class=${`node-content ${e.kind}-content`}
        transform=${`translate(${e.point.x} ${e.point.y})`}
      >
        ${o ? this._renderNodeIcons(e) : I}
        ${this._renderNodeFlowArrow(e)}
        ${f.length > 0 ? this._renderTextLines(this._textLineClass("node-value", f, e), f, _, e, 0, m) : I}
        ${p.length > 0 ? this._renderTextLines(this._textLineClass("node-secondary", p, e), p, v, e, 0, m) : I}
        ${p.length > 0 ? this._renderSecondaryActionHitArea(e, p, v) : I}
      </g>
    `;
	}
	_nodePrimaryTextY(e, t, n, r, i) {
		return t ? r ? e.kind === "leaf" ? n ? this._radiusLerp(e.radius, -20, -30) : this._radiusLerp(e.radius, -18, -28) : n ? this._radiusLerp(e.radius, -28, -42) : this._radiusLerp(e.radius, -22, -34) : 0 : !i || !r ? 0 : this._radiusLerp(e.radius, -12, -18);
	}
	_nodeSecondaryTextY(e, t, n, r, i) {
		return t ? i ? e.kind === "leaf" ? this._radiusLerp(e.radius, 34, 47) : this._radiusLerp(e.radius, 27, 40) : 0 : !r || !i ? 0 : this._radiusLerp(e.radius, 12, 18);
	}
	_renderNodeLabel(e, t, n) {
		let r = e.label.trim();
		if (!r) return I;
		if (this.labelStyle === "straight") {
			let i = this._nodeStraightLabelPoint(e, t, n);
			return P`
        <text
          class=${`node-label node-label-straight ${i.className}`}
          x=${i.x}
          y=${i.y}
          text-anchor=${i.textAnchor}
          dominant-baseline=${i.baseline}
        >
          ${r}
        </text>
      `;
		}
		let i = this._nodeLabelArc(e, t, n);
		return P`
      <path id=${i.id} class="node-label-path" d=${i.path} />
      <text class="node-label node-label-curved">
        <textPath href=${`#${i.id}`} startOffset="50%">
          ${r}
        </textPath>
      </text>
    `;
	}
	_renderLabelHandle(e, t, n) {
		if (!this.editable || this.selectedNode !== e.id || !e.label.trim()) return I;
		let r = this.labelStyle === "straight" ? this._nodeStraightLabelPoint(e, t, n) : this._nodeCurvedLabelHandlePoint(e, t, n);
		return P`
      <g class="label-handle">
        <circle
          class="label-handle-hit"
          cx=${r.x}
          cy=${r.y}
          r="14"
          @pointerdown=${(r) => this._startLabelDrag(r, e, t, n)}
        />
        <circle class="label-handle-dot" cx=${r.x} cy=${r.y} r="4.5" />
      </g>
    `;
	}
	_nodeLabelArc(e, t, n) {
		let r = this._nodeLabelAngle(e, t, n), i = e.radius + (e.kind === "junction" ? this._radiusLerp(e.radius, 24, 18) : this._radiusLerp(e.radius, 19, 15)), a = e.kind === "junction" ? 16 : 15, o = Y((e.label.length * a + 36) / i, 1.35, Math.PI * .92), s = Math.sin(r) > 0, c = s ? r + o / 2 : r - o / 2, l = s ? r - o / 2 : r + o / 2, u = this._pointOnCircle(e.point, i, c), d = this._pointOnCircle(e.point, i, l), f = +!s, p = e.id.replace(/[^a-z0-9_-]/gi, "-");
		return {
			id: `home-flow-label-${this.graphInstanceId}-${p}`,
			path: `M ${u.x} ${u.y} A ${i} ${i} 0 0 ${f} ${d.x} ${d.y}`
		};
	}
	_nodeStraightLabelPoint(e, t, n) {
		let r = e.labelOffsetX, i = e.labelOffsetY;
		return r !== void 0 || i !== void 0 ? {
			x: e.point.x + (r == null ? 0 : r),
			y: e.point.y + (i == null ? 0 : i),
			textAnchor: "middle",
			baseline: "middle",
			className: "manual"
		} : this._nodeAutoStraightLabelPoint(e, t, n);
	}
	_nodeAutoStraightLabelPoint(e, t, n) {
		let r = this._nodeLabelAnchorIndex(e, t, n), i = this._anchorAngle(r), a = e.radius + (e.kind === "junction" ? this._radiusLerp(e.radius, 18, 14) : this._radiusLerp(e.radius, 14, 11)), o = this._pointOnCircle(e.point, a, i), s = Math.sin(i);
		return s < -.55 ? {
			x: o.x,
			y: o.y - 2,
			textAnchor: "middle",
			baseline: "auto",
			className: "top"
		} : s > .55 ? {
			x: o.x,
			y: o.y + 2,
			textAnchor: "middle",
			baseline: "hanging",
			className: "bottom"
		} : Math.cos(i) < 0 ? {
			x: o.x - 4,
			y: o.y,
			textAnchor: "end",
			baseline: "middle",
			className: "left"
		} : {
			x: o.x + 4,
			y: o.y,
			textAnchor: "start",
			baseline: "middle",
			className: "right"
		};
	}
	_nodeLabelAngle(e, t, n) {
		var r;
		return (r = e.labelAngle) == null ? this._anchorAngle(this._nodeLabelAnchorIndex(e, t, n)) : r;
	}
	_nodeCurvedLabelHandlePoint(e, t, n) {
		let r = this._nodeLabelAngle(e, t, n), i = e.radius + (e.kind === "junction" ? this._radiusLerp(e.radius, 24, 18) : this._radiusLerp(e.radius, 19, 15));
		return this._pointOnCircle(e.point, i, r);
	}
	_nodeLabelAnchorIndex(e, t, n) {
		let r = [...n.filter((t) => t.from === e.id || t.to === e.id).map((n) => this._connectionAnchorIndex(e, n, t)).filter((e) => e !== void 0), ...this._nearbyNodeAnchorIndices(e, t)];
		if (r.length === 0) return W / 2;
		let i = 0, a = -Infinity;
		for (let e = 0; e < W; e += 1) {
			let t = Math.min(...r.map((t) => this._circularAnchorDistance(e, t)));
			if (t < 3) continue;
			let n = this._anchorAngle(e), o = Math.abs(Math.sin(n)) * 10, s = Math.abs(Math.cos(n)) * 4, c = +(Math.sin(n) > 0), l = t * .75 + o + c - s;
			l > a && (a = l, i = e);
		}
		return a === -Infinity ? W / 2 : i;
	}
	_nearbyNodeAnchorIndices(e, t) {
		return Object.values(t.nodes).filter((t) => t.id !== e.id).filter((t) => {
			let n = Math.hypot(t.point.x - e.point.x, t.point.y - e.point.y), r = e.kind === "junction" ? 38 : 32;
			return n < e.radius + t.radius + r;
		}).map((t) => this._nearestAnchorIndex(e, t.point));
	}
	_connectionAnchorIndex(e, t, n) {
		let r = this._linkAnchor(t, e.id);
		if (r !== void 0) return this._normalizeAnchorIndex(r);
		let i = t.from === e.id ? t.to : t.from, a = n.nodes[i];
		return a ? this._nearestAnchorIndex(e, a.point) : void 0;
	}
	_circularAnchorDistance(e, t) {
		let n = Math.abs(e - t);
		return Math.min(n, W - n);
	}
	_pointOnCircle(e, t, n) {
		return {
			x: Number((e.x + Math.cos(n) * t).toFixed(2)),
			y: Number((e.y + Math.sin(n) * t).toFixed(2))
		};
	}
	_nodeTextLines(e, t) {
		let n = 46 + Math.max(0, e.length - 7) * 4.5;
		if (t.radius >= n) return [e];
		let r = e.match(/^(.+?)\s+([^\s]+(?:\s+[←→↑↓])?)$/);
		if (r) return [r[1], r[2]];
		let i = e.match(/^([-+]?\d+(?:[.,]\d+)?)([^\d\s].*?(?:\s+[←→↑↓])?)$/);
		return i ? [i[1], i[2]] : [e];
	}
	_textLineClass(e, t, n) {
		return t.length > 1 ? `${e} compact` : e;
	}
	_shouldHideNodeValue(e, t) {
		var n;
		return ((n = e.hideZeroValues) == null ? this.hideZeroValues : n) && Math.abs(t) <= q;
	}
	_renderTextLines(e, t, n, r, i = 0, a = !1) {
		let o = this._textFontSize(e, t, r);
		if (t.length <= 1) {
			var s;
			return P`
        <text
          class=${e}
          x=${i}
          y=${n}
          style=${`font-size:${o}px;`}
          dominant-baseline=${a ? "middle" : I}
        >
          ${(s = t[0]) == null ? "" : s}
        </text>
      `;
		}
		let c = this._textLineGap(e, t, r), l = n - c / 2;
		return P`
      ${t.map((t, n) => P`
            <text
              class=${e}
              x=${i}
              y=${l + n * c}
              style=${`font-size:${o}px;`}
              dominant-baseline=${a ? "middle" : I}
            >
              ${t}
            </text>
          `)}
    `;
	}
	_renderSecondaryActionHitArea(e, t, n) {
		if (this.editable || !e.secondaryAction) return I;
		let r = this._textLineGap("node-secondary", t, e), i = t.length <= 1 ? 28 : r * (t.length - 1) + 30, a = (t.length <= 1 ? n : n - r / 2) + (t.length - 1) * r / 2, o = Math.max(52, e.radius * 1.55);
		return P`
      <rect
        class="value-hit secondary-value-hit"
        x=${-o / 2}
        y=${a - i / 2}
        width=${o}
        height=${i}
        rx="8"
        @click=${(t) => this._emitNodeAction(e.secondaryAction, t)}
      />
    `;
	}
	_textLineGap(e, t, n) {
		return t.length > 1 ? this._radiusLerp(n.radius, 26, 30) : 18;
	}
	_textFontSize(e, t, n) {
		return e.includes("flow-icon-arrow") ? this._radiusLerp(n.radius, 22, 28) : t.length > 1 ? this._radiusLerp(n.radius, 26, 30) : this._radiusLerp(n.radius, 26, 28);
	}
	_radiusLerp(e, t, n) {
		let r = Y((e - ze) / (Be - ze), 0, 1);
		return t + (n - t) * r;
	}
	_renderNodeIcons(e) {
		let t = [e.icon, e.secondaryIcon].filter(Boolean);
		if (t.length === 0) return I;
		if (t.length === 1) {
			if (t[0].startsWith("mdi:")) return I;
			let { scale: n, y: r } = this._nodeIconMetrics(e);
			return this._renderIconAt(t[0], 0, r, n);
		}
		let { scale: n, y: r, gap: i } = this._dualIconMetrics(e);
		return P`
      ${t.slice(0, 2).map((e, t) => e.startsWith("mdi:") ? I : this._renderIconAt(e, t === 0 ? -i : i, r, n))}
    `;
	}
	_renderHtmlIconLayer(e) {
		if (!this._htmlIconViewport || !this._htmlIconsReady) return I;
		let t = e.flatMap((e) => this._htmlNodeIcons(e));
		return t.length === 0 ? I : N`<div class="html-icon-layer">${t}</div>`;
	}
	_htmlNodeIcons(e) {
		let t = [e.icon, e.secondaryIcon].filter(Boolean);
		if (!t.some((e) => e.startsWith("mdi:"))) return [];
		if (t.length === 1) {
			let { scale: n, y: r } = this._nodeIconMetrics(e);
			return t[0].startsWith("mdi:") ? [this._htmlIconAt(t[0], e, 0, r, n)] : [];
		}
		let { scale: n, y: r, gap: i } = this._dualIconMetrics(e);
		return t.slice(0, 2).map((t, a) => t.startsWith("mdi:") ? this._htmlIconAt(t, e, a === 0 ? -i : i, r, n) : I).filter((e) => e !== I);
	}
	_htmlIconAt(e, t, n, r, i) {
		let a = this._htmlIconViewport;
		if (!a) return I;
		let o = a.scale, s = Math.round(68 * i * o);
		return N`
      <div
        class="html-node-icon"
        style=${`${`left:${a.offsetX + (t.point.x + n) * a.scale}px;top:${a.offsetY + (t.point.y + r) * a.scale}px;`}width:${s}px;height:${s}px;`}
      >
        <ha-icon .icon=${e} icon=${e}></ha-icon>
      </div>
    `;
	}
	_updateHtmlIconViewport() {
		let e = this.renderRoot.querySelector(".flow-svg");
		if (!e) return;
		let t = e.getBoundingClientRect();
		if (t.width <= 0 || t.height <= 0) return;
		let n = Math.min(t.width / Fe, t.height / Ie), r = Fe * n, i = Ie * n, a = {
			offsetX: (t.width - r) / 2,
			offsetY: (t.height - i) / 2,
			scale: n
		}, o = this._htmlIconViewport;
		if (o && Math.abs(o.offsetX - a.offsetX) < .5 && Math.abs(o.offsetY - a.offsetY) < .5 && Math.abs(o.scale - a.scale) < .001) {
			this._htmlIconsReady || (this._htmlIconsReady = !0, this.requestUpdate());
			return;
		}
		this._htmlIconViewport = a, this._htmlIconsReady = !1, this.requestUpdate();
	}
	_scheduleHtmlIconViewportUpdate() {
		this._htmlIconViewportFrame !== void 0 && cancelAnimationFrame(this._htmlIconViewportFrame), this._htmlIconViewportFrame = requestAnimationFrame(() => {
			this._htmlIconViewportFrame = requestAnimationFrame(() => {
				this._htmlIconViewportFrame = void 0, this._updateHtmlIconViewport();
			});
		});
	}
	_renderIconAt(e, t, n, r) {
		return P`
      <g class="node-icon" transform=${`translate(${t} ${n}) scale(${r})`}>
        ${this._iconTemplate(e)}
      </g>
    `;
	}
	_renderNodeFlowArrow(e) {
		if (!this._hasNodeFlowArrow(e)) return I;
		let t = e.icon && e.secondaryIcon ? this._dualIconMetrics(e) : void 0, { y: n, scale: r } = t == null ? this._nodeIconMetrics(e) : t, i = (t ? -t.gap : 0) + 68 * r * .42 + 10, a = this._nodeFlowArrow(e);
		return P`<text class="flow-icon-arrow" x=${i} y=${n + 3} dominant-baseline="middle">${a}</text>`;
	}
	_nodeFlowArrow(e) {
		return this._nodeFlowValue(e) >= 0 ? "→" : "←";
	}
	_nodeIconMetrics(e) {
		if (e.kind === "leaf") {
			let t = e.secondary !== void 0;
			return {
				scale: (t ? Y(e.radius * .58, 24, 52) : Y(e.radius * .64, 26, 58)) / 68,
				y: t ? this._radiusLerp(e.radius, -8, -5) : this._radiusLerp(e.radius, -2, 0)
			};
		}
		return {
			scale: Y(e.radius * .62, 28, 60) / 68,
			y: 0
		};
	}
	_dualIconMetrics(e) {
		return {
			scale: (e.secondary !== void 0 && e.kind === "leaf" ? Y(e.radius * .42, 16, 34) : Y(e.radius * .48, 18, 40)) / 68,
			y: 0,
			gap: Y(e.radius * .26, 12, 24)
		};
	}
	_iconTemplate(e) {
		return e.startsWith("mdi:") ? I : e === "grid" ? P`
        <path class="icon-line" d="M-16 24 L0 -28 L16 24" />
        <path class="icon-line" d="M-10 -7 H10 M-16 10 H16 M-25 29 H25" />
      ` : e === "home" ? P`
        <path class="icon-line" d="M-28 -4 L0 -28 L28 -4" />
        <path class="icon-line" d="M-20 -4 H20 V26 H-20 Z" />
        <path class="bolt" d="M2 -2 L-8 14 H2 L-4 28 L13 8 H2 Z" />
      ` : e === "junction" ? P`
        <rect class="icon-box" x="-28" y="-16" width="56" height="34" rx="5" />
        <path class="icon-line" d="M-21 2 C-13 -9 -5 -9 3 2 S20 14 28 2" />
      ` : e === "battery" ? P`
        <g transform="translate(0 0)">
          <rect class="icon-box" x="-14" y="-25" width="28" height="50" rx="4" />
          <path class="icon-line" d="M-7 -31 H7 V-25" />
          <rect class="battery-fill" x="-9" y="-14" width="18" height="31" rx="3" />
        </g>
      ` : e === "ev" ? P`
        <path class="icon-line" d="M-25 6 H25 L18 -11 H-15 L-25 6 Z" />
        <path class="icon-line" d="M-11 -11 L-5 -25 H9" />
        <circle class="icon-dot" cx="-13" cy="17" r="4" />
        <circle class="icon-dot" cx="14" cy="17" r="4" />
      ` : e === "heat_pump" ? P`
        <circle class="icon-line" cx="0" cy="0" r="18" />
        <path class="icon-line" d="M0 -16 C12 -2 3 3 0 18 M14 8 C-2 12 -4 0 -17 -9 M-14 8 C-3 -9 7 -4 18 -3" />
      ` : e === "plug" || e === "appliance" ? P`
        <path class="icon-line" d="M-13 -20 V0 M13 -20 V0" />
        <path class="icon-line" d="M-22 0 H22 V10 C22 24 -22 24 -22 10 Z" />
        <path class="icon-line" d="M0 23 V32" />
      ` : e === "water" ? P`
        <path class="icon-line" d="M0 -28 C-20 -4 -20 18 0 24 C20 18 20 -4 0 -28 Z" />
        <path class="icon-line thin" d="M-9 9 C-5 17 7 17 11 9" />
      ` : e === "solar" ? P`
        <rect class="icon-box" x="-26" y="-18" width="52" height="36" rx="3" />
        <path class="icon-line thin" d="M-9 -18 V18 M9 -18 V18 M-26 0 H26" />
      ` : P`
      <circle class="icon-line" cx="0" cy="0" r="18" />
      <path class="icon-line thin" d="M0 -9 V9 M-9 0 H9" />
    `;
	}
	_renderPendingLink(e, t) {
		if (!this.pendingLink || !this.pointerPoint) return I;
		let n = e[this.pendingLink.from];
		if (!n) return I;
		let r = this._pendingLinkPath(n, e, t);
		return r ? P`
      <path
        class="connector base selected pending"
        d=${r}
      />
    ` : I;
	}
	_pendingLinkPath(e, t, n) {
		if (!this.pendingLink || !this.pointerPoint) return "";
		let r = this.hoverTarget ? t[this.hoverTarget] : void 0;
		if (r && this._isCompatibleLink(e, r)) {
			let i = this._nearestAnchorIndex(r, this.pointerPoint), a = this._manualLink(this._canonicalLink(e, r, this.pendingLink.fromAnchor, i)), o = this._replaceLink(n, a);
			return this._graphLinkPath(a, t, o);
		}
		let i = this._pendingJunctionConnectionCandidate(e, this.pointerPoint, t);
		if (i) {
			let t = this._guideNode("pending-junction-connection-pointer", i.point);
			return this._defaultConnectorPath(e, t, { from: this.pendingLink.fromAnchor });
		}
		let a = this._guideNode("pending-pointer", this.pointerPoint);
		return this._defaultConnectorPath(e, a, { from: this.pendingLink.fromAnchor });
	}
	_renderAnchorControls(e, t) {
		if (this.pendingLink) {
			let t = e[this.pendingLink.from], n = this.hoverTarget ? e[this.hoverTarget] : void 0, r = n && this.pointerPoint ? this._nearestAnchorIndex(n, this.pointerPoint) : void 0;
			return P`
        ${t ? this._renderAnchorPoints(t, "source", { selectedAnchorIndex: this.pendingLink.fromAnchor }) : I}
        ${n ? this._renderAnchorPoints(n, "target", { selectedAnchorIndex: r }) : I}
      `;
		}
		if (this.selectedLink) {
			let n = t.find((e) => e.id === this.selectedLink);
			if (n) return P`
          ${this._linkEndControls(n, e, t).map((e) => this._renderAnchorPoints(e.node, "source", { fixedLinkEnd: e }))}
        `;
		}
		if (!this.selectedNode) return I;
		let n = e[this.selectedNode];
		return !n || !this._canStartLink(n) ? I : this._renderAnchorPoints(n, "source", { linkEnds: this._nodeLinkEndControls(n.id, e, t) });
	}
	_renderAnchorPoints(e, t, n = {}) {
		return P`
      <g class=${`anchor-controls ${t}`}>
        ${Array.from({ length: W }, (r, i) => {
			var a, o;
			let s = this._anchorPoint(e, i), c = (a = n.fixedLinkEnd) == null ? (o = n.linkEnds) == null ? void 0 : o.find((e) => e.anchorIndex === i) : a, l = n.selectedAnchorIndex !== void 0 && this._normalizeAnchorIndex(n.selectedAnchorIndex) === i, u = n.fixedLinkEnd ? n.fixedLinkEnd.anchorIndex === i : !!c || l;
			return P`
            <g class=${`anchor-handle ${u ? "selected" : ""}`}>
              <circle
                class="anchor-hit"
                cx=${s.x}
                cy=${s.y}
                r=${Ge}
                @pointerdown=${(n) => c ? this._startAnchorDrag(n, c, i) : t === "source" ? this._startPendingLink(n, e, i) : this._commitPendingLink(n, e, i)}
              />
              <circle
                class="anchor-point"
                cx=${s.x}
                cy=${s.y}
                r=${u ? We : Ue}
              />
            </g>
          `;
		})}
      </g>
    `;
	}
	_linkEndControls(e, t, n) {
		return ["from", "to"].map((r) => {
			let i = t[r === "from" ? e.from : e.to];
			if (this._isVirtualJunctionJoinEnd(e, r, t, n)) return;
			let a = this._linkEndAnchorIndex(e, r, t, n);
			if (!(!i || i.radius <= 0 || a === void 0)) return {
				anchorIndex: a,
				end: r,
				link: e,
				node: i
			};
		}).filter((e) => !!e);
	}
	_isVirtualJunctionJoinEnd(e, t, n, r) {
		let i = this._junctionJoinGeometry(e, n, r);
		return !(i != null && i.pathsByLinkId) || i.busLinkId !== e.id ? !1 : (t === "from" ? e.from : e.to) === i.middleId;
	}
	_nodeLinkEndControls(e, t, n) {
		return n.flatMap((r) => this._linkEndControls(r, t, n).filter((t) => t.node.id === e));
	}
	_linkEndAnchorIndex(e, t, n, r) {
		let i = n[t === "from" ? e.from : e.to];
		if (!i || i.radius <= 0) return;
		let a = t === "from" ? e.fromAnchorMode === "manual" ? e.fromAnchor : void 0 : e.toAnchorMode === "manual" ? e.toAnchor : void 0;
		if (a !== void 0) return this._normalizeAnchorIndex(a);
		if (i.kind === "leaf") {
			let a = this._leafAutoAnchorReferencePoint(e, t, n, r);
			if (a) return this._nearestAnchorIndex(i, a);
		}
		let o = this._graphLinkPath(e, n, r), s = this._pathLinkEndPoint(o, t);
		return s ? this._nearestAnchorIndex(i, s) : void 0;
	}
	_leafAutoAnchorReferencePoint(e, t, n, r) {
		let i = t === "from" ? e.from : e.to, a = t === "from" ? e.to : e.from, o = n[i], s = n[a];
		if (!o || !s || o.kind !== "leaf" || s.kind !== "junction") return;
		if (this.leafRouting === "radial" || this.leafRouting === "sweep") return s.point;
		let c = this._linkedLeafNodes(s.id, n, r), l = this._sortedLaneNodes(c.filter((e) => e.point.y <= s.point.y - s.radius), "x"), u = this._sortedLaneNodes(c.filter((e) => e.point.y >= s.point.y + s.radius), "x"), d = this._sortedLaneNodes(c.filter((e) => e.point.x <= s.point.x), "y"), f = this._sortedLaneNodes(c.filter((e) => e.point.x >= s.point.x), "y");
		switch (this._leafConnectorSide(o, s)) {
			case "upper": return this._upperLeafAnchorReferencePoint(o, s, this._laneSlotForNode(o.id, l).index, Math.max(1, l.length));
			case "lower": return this._lowerLeafAnchorReferencePoint(o, s, this._laneSlotForNode(o.id, u).index, Math.max(1, u.length));
			case "left": return this._leftLeafAnchorReferencePoint(o, s, this._laneSlotForNode(o.id, d).index, Math.max(1, d.length));
			case "right": return this._rightLeafAnchorReferencePoint(o, s, this._laneSlotForNode(o.id, f).index, Math.max(1, f.length));
			default: return s.point;
		}
	}
	_pathLinkEndPoint(e, t) {
		let n = this._pathNumbers(e);
		if (!n || n.length < 2) return;
		let r = t === "from" ? 0 : n.length - 2;
		return {
			x: n[r],
			y: n[r + 1]
		};
	}
	_pathNumbers(e) {
		var t, n;
		return (t = (n = e.match(/-?\d+(?:\.\d+)?(?:e[-+]?\d+)?/gi)) == null ? void 0 : n.map((e) => Number(e))) == null ? [] : t;
	}
	_startAnchorDrag(e, t, n) {
		if (!this.editable) return;
		let r = this._eventPoint(e), i = r ? this._anchorIndexForPointerPoint(t.node, r, t.anchorIndex, n) : n;
		this.selectedLink = t.link.id, this.selectedNode = void 0, this.pendingLink = void 0, this.hoverTarget = void 0, this.pointerPoint = void 0, this._anchorDrag = {
			end: t.end,
			linkId: t.link.id,
			nodeId: t.node.id,
			pointerId: e.pointerId
		}, this._setLinkEndAnchor(t.link.id, t.end, i, !1), this._capturePointer(e), e.stopPropagation(), e.preventDefault();
	}
	_startPendingLink(e, t, n) {
		if (!this.editable || !this._canStartLink(t)) return;
		let r = this._eventPoint(e), i = r ? this._anchorIndexForPointerPoint(t, r, void 0, n) : n;
		this.selectedLink = void 0, this.pendingLink = {
			from: t.id,
			fromAnchor: i
		}, this.pointerPoint = r == null ? this._anchorPoint(t, i) : r, this.hoverTarget = void 0, this._capturePointer(e), e.stopPropagation(), e.preventDefault();
	}
	_commitPendingLink(e, t, n) {
		if (!this.editable || !this.pendingLink) return;
		let r = this._model().nodes[this.pendingLink.from];
		if (!r || !this._isCompatibleLink(r, t)) return;
		let i = this._manualLink(this._canonicalLink(r, t, this.pendingLink.fromAnchor, n)), a = this._replaceLink(this.links, i);
		this.pendingLink = void 0, this.hoverTarget = void 0, this.pointerPoint = void 0, this.selectedLink = void 0, this.selectedNode = void 0, this.links = a, this._emitLinksChange(a), e.stopPropagation(), e.preventDefault();
	}
	_canonicalLink(e, t, n, r) {
		return e.kind === "leaf" && t.kind === "junction" ? {
			id: `${e.id}->${t.id}`,
			from: e.id,
			to: t.id,
			fromAnchor: n,
			fromAnchorMode: "auto",
			toAnchor: r,
			toAnchorMode: "auto"
		} : t.kind === "leaf" && e.kind === "junction" ? {
			id: `${t.id}->${e.id}`,
			from: t.id,
			to: e.id,
			fromAnchor: r,
			fromAnchorMode: "auto",
			toAnchor: n,
			toAnchorMode: "auto"
		} : (e.kind === "junction" && t.kind, {
			id: `${e.id}->${t.id}`,
			from: e.id,
			to: t.id,
			fromAnchor: n,
			fromAnchorMode: "auto",
			toAnchor: r,
			toAnchorMode: "auto"
		});
	}
	_manualLink(e) {
		return {
			...e,
			fromAnchorMode: "manual",
			toAnchorMode: "manual"
		};
	}
	_replaceLink(e, t) {
		return [...e.filter((e) => !(e.from === t.from && e.to === t.to || e.from === t.to && e.to === t.from)), t];
	}
	_autoAnchorLinksForNode(e) {
		let t = this._junctionJoinInfoForMovingJunction(e), n = !1, r = this.links.map((r) => {
			if (r.from === e || r.to === e) {
				var i;
				let e = t.get(r.id), a = (i = e == null ? void 0 : e.joinId) == null ? r.junctionJoinId : i;
				return r.fromAnchor !== void 0 || r.fromAnchorMode !== void 0 || r.toAnchor !== void 0 || r.toAnchorMode !== void 0 || a !== r.junctionJoinId ? (n = !0, {
					...r,
					fromAnchor: void 0,
					fromAnchorMode: void 0,
					toAnchor: void 0,
					toAnchorMode: void 0,
					junctionJoinId: a
				}) : r;
			}
			return r;
		});
		return n ? r : this.links;
	}
	_junctionJoinInfoForMovingJunction(e) {
		let t = this._model(), n = t.nodes[e], r = /* @__PURE__ */ new Map();
		if (!n || n.kind !== "junction") return r;
		let i = this.links.filter((n) => {
			if (n.from !== e && n.to !== e) return !1;
			let r = t.nodes[n.from === e ? n.to : n.from];
			return (r == null ? void 0 : r.kind) === "junction";
		}), a = /* @__PURE__ */ new Map();
		return i.forEach((t) => {
			var n, r;
			let i = this._linkAnchor(t, e), o = (n = t.junctionJoinId) == null ? i === void 0 ? void 0 : `legacy-anchor-${this._normalizeAnchorIndex(i)}` : n;
			o && a.set(o, [...(r = a.get(o)) == null ? [] : r, t]);
		}), a.forEach((t) => {
			var n;
			if (t.length < 2) return;
			let i = t.map((t) => t.from === e ? t.to : t.from).sort(), a = (n = t[0].junctionJoinId) == null ? this._junctionJoinId(i[0], i[1], e) : n;
			t.forEach((e) => r.set(e.id, { joinId: a }));
		}), r;
	}
	_selectLink(e, t) {
		var n;
		this.editable && (this.selectedLink = t, this.selectedNode = void 0, this.pendingLink = void 0, this.hoverTarget = void 0, this.pointerPoint = void 0, (n = this.renderRoot.querySelector(".flow-svg")) == null || n.focus(), e.stopPropagation(), e.preventDefault());
	}
	_handleKeydown(e) {
		if (e.key === "Escape") {
			this.selectedLink = void 0, this.selectedNode = void 0, this.pendingLink = void 0, this.hoverTarget = void 0, this.pointerPoint = void 0, e.preventDefault();
			return;
		}
		if (this.selectedLink && (e.key === "Delete" || e.key === "Backspace")) {
			let t = this.selectedLink;
			this.selectedLink = void 0, this.links = this._linksAfterLinkDelete(t), this._emitLinksChange(this.links), e.stopPropagation(), e.preventDefault();
		}
		if (this.selectedNode && (e.key === "Delete" || e.key === "Backspace")) {
			let t = this.selectedNode;
			this.selectedNode = void 0, this.selectedLink = void 0, this.pendingLink = void 0, this.hoverTarget = void 0, this.pointerPoint = void 0, this._emitNodeRemove(t), this._emitNodeSelect(void 0), e.stopPropagation(), e.preventDefault();
		}
	}
	_setLinkEndAnchor(e, t, n, r = !0) {
		let i = this._normalizeAnchorIndex(n), a = !1, o = this.links.map((n) => {
			if (n.id !== e) return n;
			let r = t === "from" ? {
				...n,
				fromAnchor: i,
				fromAnchorMode: "manual"
			} : {
				...n,
				toAnchor: i,
				toAnchorMode: "manual"
			};
			return a = a || r.fromAnchor !== n.fromAnchor || r.fromAnchorMode !== n.fromAnchorMode || r.toAnchor !== n.toAnchor || r.toAnchorMode !== n.toAnchorMode, r;
		});
		a && (this.links = o, r && this._emitLinksChange(o));
	}
	_startNodeDrag(e, t) {
		var n;
		if (!this.editable || this.pendingLink) return;
		let r = this._eventPoint(e);
		r && (this.selectedNode = t.id, this.selectedLink = void 0, this._emitNodeSelect(t.id), (n = this.renderRoot.querySelector(".flow-svg")) == null || n.focus(), this._drag = {
			id: t.id,
			pointerId: e.pointerId,
			startX: r.x,
			startY: r.y,
			offsetX: r.x - t.point.x,
			offsetY: r.y - t.point.y,
			moved: !1
		}, this.activeNode = t.id, this._capturePointer(e), e.stopPropagation(), e.preventDefault());
	}
	_startLabelDrag(e, t, n, r) {
		var i;
		if (!this.editable) return;
		let a = this._eventPoint(e);
		if (!a) return;
		let o = this.labelStyle === "straight" ? this._nodeStraightLabelPoint(t, n, r) : this._nodeCurvedLabelHandlePoint(t, n, r);
		this.selectedNode = t.id, this.selectedLink = void 0, this.pendingLink = void 0, this.hoverTarget = void 0, this.pointerPoint = void 0, this._emitNodeSelect(t.id), (i = this.renderRoot.querySelector(".flow-svg")) == null || i.focus(), this._labelDrag = this.labelStyle === "straight" ? {
			dragOffsetX: a.x - o.x,
			dragOffsetY: a.y - o.y,
			mode: "straight",
			nodeId: t.id,
			pointerId: e.pointerId
		} : {
			dragOffsetX: 0,
			dragOffsetY: 0,
			mode: "curved",
			nodeId: t.id,
			pointerId: e.pointerId
		}, this._capturePointer(e), e.stopPropagation(), e.preventDefault();
	}
	_handlePointerMove(e) {
		if (!this.editable) return;
		let t = this._eventPoint(e);
		if (!t) return;
		let n = this._anchorDrag;
		if (n && e.pointerId === n.pointerId) {
			let e = this._model().nodes[n.nodeId];
			if (!e) return;
			this._setLinkEndAnchor(n.linkId, n.end, this._nearestAnchorIndex(e, t), !1);
			return;
		}
		let r = this._labelDrag;
		if (r && e.pointerId === r.pointerId) {
			let e = this._model().nodes[r.nodeId];
			if (!e) return;
			if (r.mode === "curved") this._emitNodeLabelChange({
				nodeId: e.id,
				labelAngle: Math.atan2(t.y - e.point.y, t.x - e.point.x),
				labelOffsetX: e.labelOffsetX,
				labelOffsetY: e.labelOffsetY
			}, !0);
			else {
				let n = t.x - r.dragOffsetX, i = t.y - r.dragOffsetY;
				this._emitNodeLabelChange({
					nodeId: e.id,
					labelAngle: e.labelAngle,
					labelOffsetX: n - e.point.x,
					labelOffsetY: i - e.point.y
				}, !0);
			}
			return;
		}
		if (this.pendingLink) {
			var i;
			let e = this._model();
			this.pointerPoint = t, this.hoverTarget = (i = this._nearestCompatibleTarget(e.nodes[this.pendingLink.from], t, e.nodes)) == null ? void 0 : i.id;
			return;
		}
		let a = this._drag;
		if (!(!a || e.pointerId !== a.pointerId)) {
			if (!a.moved) {
				if (Math.hypot(t.x - a.startX, t.y - a.startY) < He) return;
				a.moved = !0;
				let e = this._autoAnchorLinksForNode(a.id);
				e !== this.links && (a.anchorsChanged = !0, this.links = e, this._emitLinksChange(e, !0));
			}
			this.layout = this._nextLayout(a.id, {
				x: t.x - a.offsetX,
				y: t.y - a.offsetY
			}), this._emitLayoutChange(this.layout, !0);
		}
	}
	_handlePointerUp(e) {
		var t;
		if (!this.editable) return;
		let n = this._anchorDrag;
		if (n && e.pointerId === n.pointerId) {
			var r;
			let t = e.target;
			!(t == null || (r = t.hasPointerCapture) == null) && r.call(t, e.pointerId) && t.releasePointerCapture(e.pointerId), this._anchorDrag = void 0, this._emitLinksChange(this.links), e.stopPropagation(), e.preventDefault();
			return;
		}
		let i = this._labelDrag;
		if (i && e.pointerId === i.pointerId) {
			var a;
			let t = this._eventPoint(e), n = this._model().nodes[i.nodeId], r = e.target;
			if (!(r == null || (a = r.hasPointerCapture) == null) && a.call(r, e.pointerId) && r.releasePointerCapture(e.pointerId), this._labelDrag = void 0, t && n) if (i.mode === "curved") this._emitNodeLabelChange({
				nodeId: n.id,
				labelAngle: Math.atan2(t.y - n.point.y, t.x - n.point.x),
				labelOffsetX: n.labelOffsetX,
				labelOffsetY: n.labelOffsetY
			});
			else {
				let e = t.x - i.dragOffsetX, r = t.y - i.dragOffsetY;
				this._emitNodeLabelChange({
					nodeId: n.id,
					labelAngle: n.labelAngle,
					labelOffsetX: e - n.point.x,
					labelOffsetY: r - n.point.y
				});
			}
			e.stopPropagation(), e.preventDefault();
			return;
		}
		if (this.pendingLink) {
			var o, s;
			let t = e.target;
			!(t == null || (o = t.hasPointerCapture) == null) && o.call(t, e.pointerId) && t.releasePointerCapture(e.pointerId);
			let n = (s = this._eventPoint(e)) == null ? this.pointerPoint : s;
			if (n) {
				var c;
				this.pointerPoint = n;
				let t = this._model(), r = t.nodes[this.pendingLink.from], i = (c = this.hoverTarget ? t.nodes[this.hoverTarget] : void 0) == null ? this._nearestCompatibleTarget(r, n, t.nodes) : c;
				if (i) {
					this._commitPendingLink(e, i, this._nearestAnchorIndex(i, n));
					return;
				}
				let a = this._pendingJunctionConnectionCandidate(r, n, t.nodes);
				if (a) {
					this._commitPendingLinkToJunctionConnection(e, a);
					return;
				}
			}
			this.pendingLink = void 0, this.hoverTarget = void 0, this.pointerPoint = void 0, this.selectedLink = void 0, this.selectedNode = void 0, e.stopPropagation(), e.preventDefault();
			return;
		}
		let l = this._drag;
		if (!l || e.pointerId !== l.pointerId) return;
		let u = e.target;
		if (!(u == null || (t = u.hasPointerCapture) == null) && t.call(u, e.pointerId) && u.releasePointerCapture(e.pointerId), this._drag = void 0, this.activeNode = void 0, l.moved) {
			let e = this._connectJunctionToWrappedConnection(l.id), t = l.anchorsChanged || e !== this.links;
			this.links = e, this._emitLayoutChange(this.layout), t && this._emitLinksChange(this.links);
		}
	}
	_clearInteraction(e) {
		this.editable && e.currentTarget === e.target && (this.selectedNode = void 0, this.selectedLink = void 0, this.pendingLink = void 0, this.hoverTarget = void 0, this.pointerPoint = void 0, this._emitNodeSelect(void 0));
	}
	_nextLayout(e, t) {
		return {
			...this.layout,
			[e]: this._clampedPoint(t)
		};
	}
	_normalizedLinks(e) {
		return this.links.filter((t) => {
			let n = e[t.from], r = e[t.to];
			return !!(n && r && this._isCompatibleLink(n, r));
		});
	}
	_connectJunctionToWrappedConnection(e) {
		let t = this._model(), n = t.nodes[e];
		if (!n || n.kind !== "junction") return this.links;
		let r = this._wrappedJunctionConnectionCandidate(n, t.nodes);
		return r ? this._splitJunctionConnectionWithJunction(r.link, n.id, this._junctionConnectionSnapAnchor(r.detour)) : this.links;
	}
	_wrappedJunctionConnectionCandidate(e, t) {
		return this.links.map((n) => {
			let r = t[n.from], i = t[n.to];
			if (!r || !i || r.kind !== "junction" || i.kind !== "junction" || r.id === e.id || i.id === e.id) return;
			let a = this._connectionPoint(r, i, this._linkAnchor(n, r.id), V), o = this._connectionPoint(i, r, this._linkAnchor(n, i.id), V), s = this._junctionLineDetour(a, o, e);
			if (s) return {
				detour: s,
				link: n,
				score: Math.abs(s.signedDistance)
			};
		}).filter((e) => !!e).sort((e, t) => e.score - t.score)[0];
	}
	_pendingJunctionConnectionCandidate(e, t, n) {
		if (e.kind === "junction") return this.links.map((r) => {
			let i = n[r.from], a = n[r.to];
			if (!i || !a || i.kind !== "junction" || a.kind !== "junction" || i.id === e.id || a.id === e.id) return;
			let o = this._connectionPoint(i, a, this._linkAnchor(r, i.id), V), s = this._connectionPoint(a, i, this._linkAnchor(r, a.id), V), c = this._junctionLineDetour(o, s, e), l = this._closestPointOnSegment(t, o, s);
			if (!(l.distance > Xe)) return {
				detour: c,
				link: r,
				point: l.point,
				score: l.distance
			};
		}).filter((e) => !!e).sort((e, t) => e.score - t.score)[0];
	}
	_commitPendingLinkToJunctionConnection(e, t) {
		if (!this.pendingLink) return;
		let n = this.pendingLink.from, r = t.detour ? this._junctionConnectionSnapAnchor(t.detour) : this.pendingLink.fromAnchor, i = this._splitJunctionConnectionWithJunction(t.link, n, r);
		this.pendingLink = void 0, this.hoverTarget = void 0, this.pointerPoint = void 0, this.selectedLink = void 0, this.selectedNode = void 0, this.links = i, this._emitLinksChange(i), e.stopPropagation(), e.preventDefault();
	}
	_splitJunctionConnectionWithJunction(e, t, n) {
		var r;
		let i = (r = e.junctionJoinId) == null ? this._junctionJoinId(e.from, e.to, t) : r, a = this._splitWrappedJunctionLink(e, e.from, t, {
			fromAnchor: e.fromAnchor,
			fromAnchorMode: e.fromAnchorMode,
			toAnchor: n,
			toAnchorMode: n === void 0 ? void 0 : "manual",
			junctionJoinId: i
		}), o = this._splitWrappedJunctionLink(e, t, e.to, {
			fromAnchor: n,
			fromAnchorMode: n === void 0 ? void 0 : "manual",
			toAnchor: e.toAnchor,
			toAnchorMode: e.toAnchorMode,
			junctionJoinId: i
		});
		return [
			...this.links.filter((t) => t.id !== e.id && !this._sameLinkEnds(t, a.from, a.to) && !this._sameLinkEnds(t, o.from, o.to)),
			a,
			o
		];
	}
	_splitWrappedJunctionLink(e, t, n, r) {
		return {
			id: `${t}->${n}`,
			from: t,
			to: n,
			attribute: e.attribute,
			color: e.color,
			displayValue: e.displayValue,
			entity: e.entity,
			factor: e.factor,
			flowMaxValue: e.flowMaxValue,
			flowMinVisibleValue: e.flowMinVisibleValue,
			invert: e.invert,
			unit: e.unit,
			value: e.value,
			...r
		};
	}
	_junctionJoinId(e, t, n) {
		let [r, i] = [e, t].sort();
		return `${r}--${i}--via-${n}`;
	}
	_linksAfterLinkDelete(e) {
		let t = this._model(), n = this.links.find((t) => t.id === e);
		if (!n) return this.links;
		let r = this._junctionJoinGeometry(n, t.nodes, this.links);
		return (r == null ? void 0 : r.branchLinkId) === e && r.busLinkId && r.branchLinkId ? this._linksAfterBranchDelete(r) : (r == null ? void 0 : r.busLinkId) === e && r.branchLinkId ? this.links.filter((e) => e.id !== r.busLinkId && e.id !== r.branchLinkId) : this.links.filter((t) => t.id !== e);
	}
	_linksAfterBranchDelete(e) {
		let t = this.links.find((t) => t.id === e.busLinkId), n = this.links.find((t) => t.id === e.branchLinkId);
		if (!t || !n) return this.links.filter((t) => t.id !== e.branchLinkId);
		let r = this._restoredJunctionBusLink(e, t, n);
		return [...this.links.filter((e) => e.id !== t.id && e.id !== n.id && !this._sameLinkEnds(e, r.from, r.to)), r];
	}
	_restoredJunctionBusLink(e, t, n) {
		let r = this._linkAnchorFields(t, e.firstOuterId), i = this._linkAnchorFields(n, e.secondOuterId);
		return {
			...t,
			id: `${e.firstOuterId}->${e.secondOuterId}`,
			from: e.firstOuterId,
			to: e.secondOuterId,
			fromAnchor: r.anchor,
			fromAnchorMode: r.mode,
			toAnchor: i.anchor,
			toAnchorMode: i.mode,
			junctionJoinId: void 0
		};
	}
	_linkAnchorFields(e, t) {
		return e.from === t ? {
			anchor: e.fromAnchor,
			mode: e.fromAnchorMode
		} : e.to === t ? {
			anchor: e.toAnchor,
			mode: e.toAnchorMode
		} : {};
	}
	_sameLinkEnds(e, t, n) {
		return e.from === t && e.to === n || e.from === n && e.to === t;
	}
	_junctionConnectionSnapAnchor(e) {
		return e.tapAnchor;
	}
	_closestPointOnSegment(e, t, n) {
		let r = n.x - t.x, i = n.y - t.y, a = r * r + i * i || 1, o = Y(((e.x - t.x) * r + (e.y - t.y) * i) / a, 0, 1), s = {
			x: t.x + r * o,
			y: t.y + i * o
		};
		return {
			distance: Math.hypot(e.x - s.x, e.y - s.y),
			point: s,
			t: o
		};
	}
	_isCompatibleLink(e, t) {
		let n = new Set([e.kind, t.kind]);
		return !!(n.has("leaf") && n.has("junction") || e.kind === "junction" && t.kind === "junction");
	}
	_canStartLink(e) {
		return e.kind === "junction" || e.kind === "leaf";
	}
	_nearestCompatibleTarget(e, t, n) {
		var r;
		if (e) return (r = Object.values(n).filter((t) => t.id !== e.id && this._isCompatibleLink(e, t)).map((e) => ({
			node: e,
			distance: Math.hypot(e.point.x - t.x, e.point.y - t.y)
		})).filter(({ node: e, distance: t }) => t <= e.radius + 46).sort((e, t) => e.distance - t.distance)[0]) == null ? void 0 : r.node;
	}
	_linkSignedValue(e, t, n = this.links) {
		if (Number.isFinite(e.value)) return Number(e.value);
		let r = t[e.from], i = t[e.to];
		return (r == null ? void 0 : r.kind) === "leaf" ? this._nodeFlowValue(r) : (i == null ? void 0 : i.kind) === "leaf" ? -this._nodeFlowValue(i) : (r == null ? void 0 : r.kind) === "junction" && (i == null ? void 0 : i.kind) === "junction" ? this._derivedJunctionLinkValue(e, r, i, t, n) : 0;
	}
	_nodeFlowValue(e) {
		return Number.isFinite(e.flowValue) ? Number(e.flowValue) : e.value;
	}
	_derivedJunctionLinkValue(e, t, n, r, i) {
		let a = this._nodeIdsOnSideOfLink(e, t.id, n.id, r, i);
		if (!a || a.has(n.id)) return 0;
		let o = 0, s = Array.from(a).reduce((e, t) => {
			let n = r[t];
			return !n || !this._nodeContributesToAutoFlow(n) ? e : (o += 1, e + this._nodeFlowValue(n));
		}, 0);
		return o > 0 ? s : 0;
	}
	_linkSourceParts(e, t, n, r, i) {
		if (e.color || Math.abs(r) <= q) return;
		let a = this._mergedFlowSources(this._linkFlowSources(e, t, n, r, i));
		if (a.length === 0) return;
		let o = a.reduce((e, t) => e + t.amount, 0);
		if (o <= q) return;
		let s = 0, c = a.map((e, t) => {
			let n = t === a.length - 1 ? G - s : e.amount / o * G, r = {
				color: e.color,
				key: e.key,
				length: n,
				start: s
			};
			return s += n, r;
		});
		return this._compactFlowSourceParts(c);
	}
	_linkFlowSources(e, t, n, r, i) {
		let a = t.nodes, o = a[e.from], s = a[e.to];
		if (!o || !s) return [];
		let c = r >= 0 ? e.from : e.to, l = r >= 0 ? e.to : e.from, u = this._nodeIdsOnSideOfLink(e, c, l, a, n);
		if (!u || u.has(l)) return [];
		let d = a[c], f = a[l], p = this._sourceProjectionDirection(d, f);
		return Array.from(u).map((e) => a[e]).filter((e) => !!e).filter((e) => this._nodeContributesToAutoFlow(e)).map((e) => ({
			amount: this._nodeFlowValue(e),
			color: this._nodeColorCached(e, t, n, i),
			key: e.id,
			node: e
		})).filter((e) => e.amount > q).sort((e, t) => this._sourceProjection(e.node, d, p) - this._sourceProjection(t.node, d, p) || e.key.localeCompare(t.key));
	}
	_mergedFlowSources(e) {
		let t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			let n = t.get(e.color);
			if (n) {
				n.amount += e.amount;
				return;
			}
			t.set(e.color, { ...e });
		}), Array.from(t.values());
	}
	_compactFlowSourceParts(e) {
		if (e.length <= 1) return e;
		let t = [], n = 0;
		if (e.forEach((e) => {
			e.length < Ye ? n += e.length : t.push({ ...e });
		}), t.length === e.length) return e;
		if (t.length === 0) return [{
			...e.reduce((e, t) => t.length > e.length ? t : e),
			length: G,
			start: 0
		}];
		let r = t.reduce((e, n, r) => n.length > t[e].length ? r : e, 0);
		t[r] = {
			...t[r],
			length: t[r].length + n
		};
		let i = 0;
		return t.map((e, n) => {
			let r = n === t.length - 1 ? G - i : e.length, a = {
				...e,
				length: r,
				start: i
			};
			return i += r, a;
		});
	}
	_sourceProjectionDirection(e, t) {
		let n = t.point.x - e.point.x, r = t.point.y - e.point.y, i = Math.hypot(n, r) || 1;
		return {
			x: n / i,
			y: r / i
		};
	}
	_sourceProjection(e, t, n) {
		return (e.point.x - t.point.x) * n.x + (e.point.y - t.point.y) * n.y;
	}
	_nodeContributesToAutoFlow(e) {
		var t;
		return (t = e.contributesToFlow) == null ? e.kind === "leaf" : t;
	}
	_nodeIdsOnSideOfLink(e, t, n, r, i) {
		if (!r[t] || !r[n]) return;
		let a = /* @__PURE__ */ new Set(), o = [t], s = (t) => t.id === e.id || t.from === e.from && t.to === e.to || t.from === e.to && t.to === e.from;
		for (; o.length > 0;) {
			let e = o.shift();
			!e || a.has(e) || (a.add(e), i.forEach((t) => {
				if (s(t) || t.from !== e && t.to !== e) return;
				let n = t.from === e ? t.to : t.from;
				!a.has(n) && r[n] && o.push(n);
			}));
		}
		return a;
	}
	_linkColor(e, t, n, r = this._linkSignedValue(e, t.nodes, n), i) {
		let a = t.nodes;
		if (e.color) return e.color;
		let o = a[e.from], s = a[e.to], c = r >= 0 ? o : s;
		return c ? this._nodeColorCached(c, t, n, i) : it.junction;
	}
	_nodeColorCached(e, t, n, r) {
		if (!r) return this._nodeColor(e, t, n);
		let i = r.nodeColors.get(e.id);
		if (i) return i;
		let a = this._nodeColor(e, t, n);
		return r.nodeColors.set(e.id, a), a;
	}
	_nodeColor(e, t, n, r = /* @__PURE__ */ new Set()) {
		return e.color ? e.color : e.kind === "leaf" ? (t && n ? this._attachedLeafColor(e, t, n) : void 0) || (t && n ? this._overlappingUnlinkedLeafColor(e, t, n, new Set(r).add(e.id)) : void 0) || (e.icon === "solar" ? "var(--energy-solar-color, #d6a500)" : e.icon === "battery" ? "var(--energy-battery-discharge-color, #3f79c9)" : it.leaf) : this._nonLeafColor(e, t);
	}
	_nodeDirectColor(e, t, n) {
		return e.color ? e.color : e.kind === "leaf" ? (t && n ? this._attachedLeafColor(e, t, n) : void 0) || (e.icon === "solar" ? "var(--energy-solar-color, #d6a500)" : e.icon === "battery" ? "var(--energy-battery-discharge-color, #3f79c9)" : it.leaf) : this._nonLeafColor(e, t);
	}
	_attachedLeafColor(e, t, n) {
		let r = n.filter((t) => t.from === e.id || t.to === e.id).map((n) => t.nodes[n.from === e.id ? n.to : n.from]).filter((e) => !!e).find((e) => e.kind === "junction");
		if (r) return this._junctionFlowColor(r.id, t.nodes);
	}
	_overlappingUnlinkedLeafColor(e, t, n, r = /* @__PURE__ */ new Set()) {
		if (n.some((t) => t.from === e.id || t.to === e.id)) return;
		let i = Object.values(t.nodes).filter((t) => t.id !== e.id).map((t) => ({
			node: t,
			distance: Math.hypot(t.point.x - e.point.x, t.point.y - e.point.y)
		})).filter(({ node: t, distance: n }) => n < t.radius + e.radius).sort((e, t) => e.distance - t.distance).map(({ node: e }) => e), a;
		for (let e of i) {
			if (e.kind !== "leaf") return this._nonLeafColor(e, t);
			let i = this._attachedLeafColor(e, t, n);
			if (i) return i;
			if (!r.has(e.id)) {
				let i = this._overlappingUnlinkedLeafColor(e, t, n, new Set(r).add(e.id));
				if (i) return i;
			}
			a || (a = this._nodeDirectColor(e, t, n));
		}
		return a;
	}
	_nonLeafColor(e, t) {
		return e.color ? e.color : e.kind === "junction" && t ? this._junctionFlowColor(e.id, t.nodes) : it[e.kind];
	}
	_connectionPoint(e, t, n, r) {
		if (e.radius > 0) {
			let i = r == null ? e.kind === "junction" ? B : 0 : r;
			return this._anchorPoint(e, n == null ? this._nearestAnchorIndex(e, t.point) : n, i);
		}
		return e.point;
	}
	_anchorPoint(e, t, n = B) {
		let r = this._anchorAngle(t), i = Math.max(0, e.radius + n);
		return {
			x: Math.round(e.point.x + Math.cos(r) * i),
			y: Math.round(e.point.y + Math.sin(r) * i)
		};
	}
	_anchorAngle(e) {
		let t = this._normalizeAnchorIndex(e);
		return -Math.PI / 2 + t * (Math.PI * 2 / W);
	}
	_nearestAnchorIndex(e, t) {
		let n = (Math.atan2(t.y - e.point.y, t.x - e.point.x) + Math.PI / 2) / (Math.PI * 2) * W;
		return this._normalizeAnchorIndex(Math.round(n));
	}
	_normalizeAnchorIndex(e) {
		return (Math.round(e) % W + W) % W;
	}
	_anchorIndexForPointerPoint(e, t, n, r) {
		let i = n === void 0 ? void 0 : this._normalizeAnchorIndex(n), a = r === void 0 ? void 0 : this._normalizeAnchorIndex(r), o = this._nearestAnchorIndex(e, t);
		if (i !== void 0) {
			let n = this._anchorPoint(e, i, 0), r = this._anchorPoint(e, o, 0), a = Math.hypot(t.x - n.x, t.y - n.y), s = Math.hypot(t.x - r.x, t.y - r.y);
			if (a <= Ke || a <= s + qe) return i;
		}
		return a == null ? o : a;
	}
	_clampedPoint(e) {
		let t = {
			x: Y(e.x, J.minX, J.maxX),
			y: Y(e.y, J.minY, J.maxY)
		}, n = {
			x: J.minX + Math.round((t.x - J.minX) / U) * U,
			y: J.minY + Math.round((t.y - J.minY) / U) * U
		};
		return {
			x: Y(n.x, J.minX, J.maxX),
			y: Y(n.y, J.minY, J.maxY)
		};
	}
	_shouldShowFlow(e, t = this._flowMinVisibleValue()) {
		let n = Math.abs(e);
		return n > q && n >= Math.max(0, t);
	}
	_flowWidth(e, t = this._flowMinVisibleValue(), n = this._flowMaxValue(t)) {
		return et + Y((Math.abs(e) - t) / (n - t), 0, 1) ** nt * (tt - et);
	}
	_flowMinVisibleValue() {
		return Math.max(0, Number.isFinite(this.flowMinVisibleValue) ? this.flowMinVisibleValue : Qe);
	}
	_flowMaxValue(e = this._flowMinVisibleValue()) {
		let t = Number.isFinite(this.flowMaxValue) ? this.flowMaxValue : $e;
		return Math.max(t, e + 1);
	}
	_linkMinVisibleValue(e, t, n = this.links) {
		var r;
		return Math.max(0, Number.isFinite(e.flowMinVisibleValue) ? Number(e.flowMinVisibleValue) : (r = this._junctionFlowMinVisibleValue(e, t, n)) == null ? this._flowMinVisibleValue() : r);
	}
	_linkMaxValue(e, t = this._linkMinVisibleValue(e), n, r = this.links) {
		var i;
		let a = Number.isFinite(e.flowMaxValue) ? Number(e.flowMaxValue) : (i = this._junctionFlowMaxValue(e, n, r)) == null ? this._flowMaxValue(t) : i;
		return Math.max(a, t + 1);
	}
	_junctionFlowMinVisibleValue(e, t, n) {
		let r = this._linkScaleJunction(e, t, n, "flowMinVisibleValue");
		return Number.isFinite(r == null ? void 0 : r.flowMinVisibleValue) ? Number(r == null ? void 0 : r.flowMinVisibleValue) : void 0;
	}
	_junctionFlowMaxValue(e, t, n) {
		let r = this._linkScaleJunction(e, t, n, "flowMaxValue");
		return Number.isFinite(r == null ? void 0 : r.flowMaxValue) ? Number(r == null ? void 0 : r.flowMaxValue) : void 0;
	}
	_linkScaleJunction(e, t, n, r) {
		if (!t) return;
		let i = this._nodeIdsConnectedTo(e.from, t, n);
		return Object.values(t).filter((e) => e.kind === "junction" && i.has(e.id)).find((e) => Number.isFinite(e[r]));
	}
	_nodeIdsConnectedTo(e, t, n) {
		let r = /* @__PURE__ */ new Set(), i = [e];
		for (; i.length > 0;) {
			let e = i.shift();
			!e || r.has(e) || (r.add(e), n.forEach((n) => {
				if (n.from !== e && n.to !== e) return;
				let a = n.from === e ? n.to : n.from;
				!r.has(a) && t[a] && i.push(a);
			}));
		}
		return r;
	}
	_nodePrimaryValue(e, t, n) {
		if (e.displayValue) return e.displayValue;
		let r = this._nodeDisplayValue(e, t, n);
		return this._isBatteryValueNode(e) ? this._formatNodeValue(Math.abs(r), e) : this._formatNodeValue(r, e);
	}
	_nodeDisplayValue(e, t, n) {
		var r;
		return e.kind !== "junction" || e.hasOwnValue || (r = this._directLeafFlowValue(e.id, t.nodes, n)) == null ? e.value : r;
	}
	_directLeafFlowValue(e, t, n) {
		let r = 0, i = n.reduce((n, i) => {
			if (i.from !== e && i.to !== e) return n;
			let a = t[i.from === e ? i.to : i.from];
			return !a || a.kind !== "leaf" || !this._nodeContributesToAutoFlow(a) ? n : (r += 1, n + this._nodeFlowValue(a));
		}, 0);
		return r > 0 ? i : void 0;
	}
	_hasNodeFlowArrow(e) {
		return e.showFlowArrow === !0 && Math.abs(this._nodeFlowValue(e)) > q;
	}
	_isBatteryValueNode(e) {
		return e.kind === "leaf" && e.secondary !== void 0 && this._isBatteryIcon(e.icon);
	}
	_isBatteryIcon(e) {
		return e === "battery" || (e == null ? void 0 : e.startsWith("mdi:battery")) === !0;
	}
	_formatNodeValue(e, t) {
		var n;
		let r = (n = t.unit) == null ? void 0 : n.trim();
		return !r || r === "W" || r === "kW" || r === "MW" ? this._formatPower(e) : `${this._formatNumber(Math.abs(e))} ${r}`;
	}
	_formatPower(e) {
		let t = Math.abs(e);
		return t >= 1e3 ? `${this._formatNumber(t / 1e3)} kW` : `${Math.round(t).toLocaleString("en-US")} W`;
	}
	_formatNumber(e) {
		return e.toLocaleString("en-US", { maximumFractionDigits: e >= 100 ? 0 : 1 });
	}
	_defaultIcon(e) {
		return e === "junction" ? "mdi:hub" : "mdi:leaf";
	}
	_capturePointer(e) {
		try {
			var t, n;
			(t = e.currentTarget) == null || (n = t.setPointerCapture) == null || n.call(t, e.pointerId);
		} catch {}
	}
	_eventPoint(e) {
		let t = this.renderRoot.querySelector(".flow-svg"), n = t == null ? void 0 : t.getScreenCTM();
		if (!n) return;
		let r = new DOMPoint(e.clientX, e.clientY).matrixTransform(n.inverse());
		return {
			x: r.x,
			y: r.y
		};
	}
	_emitLayoutChange(e, t = !1) {
		this.dispatchEvent(new CustomEvent("graph-layout-change", {
			detail: {
				layout: e,
				live: t
			},
			bubbles: !0,
			composed: !0
		}));
	}
	_emitLinksChange(e, t = !1) {
		this.dispatchEvent(new CustomEvent("graph-links-change", {
			detail: {
				links: e,
				live: t
			},
			bubbles: !0,
			composed: !0
		}));
	}
	_emitNodeSelect(e) {
		this.dispatchEvent(new CustomEvent("graph-node-select", {
			detail: { nodeId: e },
			bubbles: !0,
			composed: !0
		}));
	}
	_emitNodeRemove(e) {
		this.dispatchEvent(new CustomEvent("graph-node-remove", {
			detail: { nodeId: e },
			bubbles: !0,
			composed: !0
		}));
	}
	_emitNodeLabelChange(e, t = !1) {
		this.dispatchEvent(new CustomEvent("graph-node-label-change", {
			detail: {
				...e,
				live: t
			},
			bubbles: !0,
			composed: !0
		}));
	}
	_nodeActionLabel(e) {
		switch (e.type) {
			case "toggle": return "toggle";
			case "navigate": return "navigate";
			case "url": return "open link";
			default: return "details";
		}
	}
	_emitNodeAction(e, t) {
		e && (t == null || t.stopPropagation(), t == null || t.preventDefault(), this.dispatchEvent(new CustomEvent("graph-node-action", {
			detail: { action: e },
			bubbles: !0,
			composed: !0
		})));
	}
	_emitEntityMoreInfo(e, t) {
		e && (t == null || t.stopPropagation(), t == null || t.preventDefault(), this.dispatchEvent(new CustomEvent("graph-entity-more-info", {
			detail: { entityId: e },
			bubbles: !0,
			composed: !0
		})));
	}
	_handleNodeActionKeydown(e, t) {
		e.key !== "Enter" && e.key !== " " || this._emitNodeAction(t, e);
	}
};
Pe = st, Pe.properties = {
	activeNode: { state: !0 },
	editable: { type: Boolean },
	hoverTarget: { state: !0 },
	flowMaxValue: {
		type: Number,
		attribute: "flow-max-value"
	},
	flowMinVisibleValue: {
		type: Number,
		attribute: "flow-min-visible-value"
	},
	hideZeroValues: {
		type: Boolean,
		attribute: "hide-zero-values"
	},
	layout: { attribute: !1 },
	labelStyle: {
		type: String,
		attribute: "label-style"
	},
	leafRouting: {
		type: String,
		attribute: "leaf-routing"
	},
	links: { attribute: !1 },
	nodes: { attribute: !1 },
	pendingLink: { state: !0 },
	pointerPoint: { state: !0 },
	selectedLink: { state: !0 },
	selectedNode: { state: !0 }
}, Pe.styles = o`
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

    .html-icon-layer {
      inset: 0;
      pointer-events: none;
      position: absolute;
    }

    .html-node-icon {
      align-items: center;
      color: var(--primary-text-color, #17211c);
      display: flex;
      justify-content: center;
      pointer-events: none;
      position: absolute;
      transform: translate(-50%, -50%);
    }

    .html-node-icon ha-icon {
      --mdc-icon-size: 100%;
      color: currentColor;
      display: block;
      height: 100%;
      width: 100%;
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

    .icon-line,
    .icon-box {
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 5;
    }

    .icon-line.thin {
      stroke-width: 3;
    }

    .icon-dot,
    .battery-fill {
      fill: #4f9b6d;
    }

    .bolt {
      fill: #d88a00;
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
  `, customElements.get("home-flow-graph-card") || customElements.define("home-flow-graph-card", st);
//#endregion
//#region src/home-flow-card.ts
var ct, lt, ut = "home-flow-card", dt = 12e3, ft = "curved", pt = "funnel", mt = "native", ht = "#2d8f8a", gt = "#8b9a90", _t = "#c65b4a", vt = "#3f79c9", yt = "#d6a500", bt = .5, xt = [
	"device_class",
	"friendly_name",
	"icon",
	"unit_of_measurement"
], St = [
	"#f6b73c",
	"#ef6c00",
	"#f4a340",
	"#b85f1a"
], Ct = [
	ht,
	gt,
	yt,
	vt,
	_t,
	"#ef6c00",
	"#4f9b6d",
	"#8a5cc2",
	"#d04b89",
	"#4d90d9",
	"#7a7f2f",
	"#c86b2f"
], wt = [
	{
		id: "meter",
		kind: "junction",
		label: "Meter",
		entity: "sensor.grid_power",
		icon: "mdi:transmission-tower",
		radius: 90,
		color: ht,
		flowDirection: "supply",
		balance_role: "junction"
	},
	{
		id: "building",
		kind: "junction",
		label: "Building",
		entity: "sensor.home_power",
		icon: "mdi:home",
		radius: 90,
		color: gt,
		flowDirection: "consume",
		balance_role: "junction"
	},
	{
		id: "junction-1",
		kind: "junction",
		label: "Junction",
		icon: "mdi:hub",
		radius: 90,
		balance_role: "junction"
	},
	{
		id: "pv-1",
		kind: "leaf",
		label: "PV",
		icon: "solar",
		radius: 65,
		flowDirection: "supply",
		balance_role: "measured"
	},
	{
		id: "battery-1",
		kind: "leaf",
		label: "Battery",
		icon: "battery",
		radius: 65,
		flowDirection: "supply",
		balance_role: "measured"
	},
	{
		id: "heat-pump",
		kind: "leaf",
		label: "Heat pump",
		icon: "heat_pump",
		radius: 65,
		flowDirection: "consume",
		balance_role: "measured"
	}
], Tt = [
	{
		id: "meter->junction-1",
		from: "meter",
		to: "junction-1",
		entity: "sensor.grid_power"
	},
	{
		id: "junction-1->building",
		from: "junction-1",
		to: "building",
		entity: "sensor.home_power"
	},
	{
		id: "pv-1->junction-1",
		from: "pv-1",
		to: "junction-1"
	},
	{
		id: "battery-1->junction-1",
		from: "battery-1",
		to: "junction-1"
	},
	{
		id: "heat-pump->building",
		from: "heat-pump",
		to: "building"
	}
], Et = {
	meter: {
		x: 99,
		y: 210
	},
	building: {
		x: 887,
		y: 210
	},
	"junction-1": {
		x: 361,
		y: 348
	},
	"pv-1": {
		x: 300,
		y: 86
	},
	"battery-1": {
		x: 361,
		y: 592
	},
	"heat-pump": {
		x: 790,
		y: 370
	}
};
function X(e) {
	let t = fn(e) ? e : {}, n = pn(t.flow_min_visible_value, 10), r = Math.max(pn(t.flow_max_value, dt), n + 1), i = t.hide_zero_values === !0;
	return {
		type: typeof t.type == "string" ? t.type : `custom:${ut}`,
		title: typeof t.title == "string" ? t.title : void 0,
		nodes: Dt(t.nodes, i),
		links: Ft(t.links),
		layout: It(t.layout),
		flow_min_visible_value: n,
		flow_max_value: r,
		label_style: t.label_style === "straight" ? "straight" : ft,
		leaf_routing: t.leaf_routing === "channel" || t.leaf_routing === "radial" || t.leaf_routing === "orthogonal" || t.leaf_routing === "sweep" ? t.leaf_routing : pt,
		scaling_mode: t.scaling_mode === "fit-width" || t.scaling_mode === "grow" || t.scaling_mode === "shrink" ? t.scaling_mode : mt,
		width: pn(t.width, 502),
		height: pn(t.height, 383)
	};
}
function Dt(e, t = !1) {
	if (!Array.isArray(e)) return dn(wt).map((e) => ({
		...e,
		...t ? { hide_zero_values: !0 } : {}
	}));
	let n = e.filter((e) => fn(e)).filter((e) => typeof e.id == "string" && Ot(e.kind) !== void 0).map((e) => {
		var n, r, i;
		let a = (n = Ot(e.kind)) == null ? "leaf" : n;
		return {
			id: String(e.id),
			kind: a,
			label: typeof e.label == "string" ? e.label : un(String(e.id)),
			label_angle: $(e.label_angle),
			label_offset_x: $(e.label_offset_x),
			label_offset_y: $(e.label_offset_y),
			flow_mode: At(e.flow_mode),
			entity: Z(e.entity),
			attribute: Q(e.attribute),
			incoming_entity: Z(e.incoming_entity),
			incoming_attribute: Q(e.incoming_attribute),
			outgoing_entity: Z(e.outgoing_entity),
			outgoing_attribute: Q(e.outgoing_attribute),
			secondary_entity: Z(e.secondary_entity),
			secondary_attribute: Q(e.secondary_attribute),
			primary_action: Nt(e.primary_action),
			primary_action_path: Q(e.primary_action_path),
			secondary_action: Nt(e.secondary_action),
			secondary_action_path: Q(e.secondary_action_path),
			value: $(e.value),
			secondary: $(e.secondary),
			factor: $(e.factor),
			invert: e.invert === !0,
			flowDirection: kt(e.flowDirection),
			allowed_flow: Mt(e.allowed_flow),
			balance_role: (r = jt(e.balance_role)) == null ? en(a) : r,
			hide_zero_values: typeof e.hide_zero_values == "boolean" ? e.hide_zero_values : t ? !0 : void 0,
			hide_if_zero: typeof e.hide_if_zero == "boolean" ? e.hide_if_zero : void 0,
			show_flow_arrow: typeof e.show_flow_arrow == "boolean" ? e.show_flow_arrow : void 0,
			flowMinVisibleValue: $(e.flowMinVisibleValue),
			flowMaxValue: $(e.flowMaxValue),
			radius: mn((i = $(e.radius)) == null ? Qt(a) : i, 20, 100),
			icon: Pt(e.icon),
			unit: Q(e.unit),
			color: Q(e.color)
		};
	});
	return n.length > 0 ? n : dn(wt);
}
function Ot(e) {
	if (e === "junction" || e === "leaf") return e;
}
function kt(e) {
	if (e === "consume" || e === "supply") return e;
}
function At(e) {
	if (e === "signed" || e === "bidirectional") return e;
}
function jt(e) {
	if (e === "junction" || e === "measured" || e === "ignore") return e;
}
function Mt(e) {
	if (e === "both" || e === "supply" || e === "consume") return e;
}
function Nt(e) {
	if (e === "more-info" || e === "toggle" || e === "navigate" || e === "url" || e === "none") return e;
}
function Pt(e) {
	return e === null ? null : Q(e);
}
function Ft(e) {
	return Array.isArray(e) ? e.filter((e) => fn(e)).filter((e) => typeof e.from == "string" && typeof e.to == "string").map((e) => ({
		id: typeof e.id == "string" ? e.id : `${String(e.from)}->${String(e.to)}`,
		from: String(e.from),
		to: String(e.to),
		entity: Z(e.entity),
		attribute: Q(e.attribute),
		value: $(e.value),
		factor: $(e.factor),
		invert: e.invert === !0,
		unit: Q(e.unit),
		color: Q(e.color),
		flowMinVisibleValue: $(e.flowMinVisibleValue),
		flowMaxValue: $(e.flowMaxValue),
		fromAnchor: $(e.fromAnchor),
		fromAnchorMode: e.fromAnchorMode === "manual" ? "manual" : void 0,
		toAnchor: $(e.toAnchor),
		toAnchorMode: e.toAnchorMode === "manual" ? "manual" : void 0,
		junctionJoinId: Q(e.junctionJoinId)
	})) : Tt.map((e) => ({ ...e }));
}
function It(e) {
	return fn(e) ? Object.fromEntries(Object.entries(e).filter((e) => {
		let t = e[1];
		return fn(t) && Number.isFinite(t.x) && Number.isFinite(t.y);
	}).map(([e, t]) => [e, {
		x: Number(t.x),
		y: Number(t.y)
	}])) : { ...Et };
}
function Lt(e, t) {
	var n;
	return ((n = e.nodes) == null ? dn(wt) : n).map((e) => {
		var n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, ee, E, te, D;
		let O = (n = e.flow_mode) == null ? "signed" : n, ne = O === "signed" ? Vt(t, e.entity ? {
			entity: e.entity,
			attribute: e.attribute,
			factor: e.factor,
			unit: e.unit
		} : {
			value: e.value,
			unit: e.unit
		}) : void 0, k = O === "bidirectional" ? Vt(t, {
			entity: e.incoming_entity,
			attribute: e.incoming_attribute,
			unit: e.unit
		}) : void 0, re = O === "bidirectional" ? Vt(t, {
			entity: e.outgoing_entity,
			attribute: e.outgoing_attribute,
			unit: e.unit
		}) : void 0, ie = e.secondary_entity ? Vt(t, {
			entity: e.secondary_entity,
			attribute: e.secondary_attribute,
			value: e.secondary
		}) : void 0, A = e.value !== void 0 || (O === "bidirectional" ? !!(e.incoming_entity || e.outgoing_entity) : !!e.entity), ae = ((r = k == null ? void 0 : k.value) == null ? 0 : r) - ((i = re == null ? void 0 : re.value) == null ? 0 : i), oe = (a = (o = (s = e.unit) == null ? ne == null ? void 0 : ne.unit : s) == null ? k == null ? void 0 : k.unit : o) == null ? re == null ? void 0 : re.unit : a, se = (c = ie == null ? void 0 : ie.value) == null ? e.secondary : c, ce = (l = (u = ie == null ? void 0 : ie.unit) == null ? e.unit : u) == null ? "%" : l, le = (d = e.flowDirection) == null ? $t(e) : d, j = O === "bidirectional" ? ae : ((f = (p = ne == null ? void 0 : ne.value) == null ? e.value : p) == null ? 0 : f) * (le === "consume" ? -1 : 1), ue = zt(e.invert === !0 ? -j : j, (m = e.allowed_flow) == null ? "both" : m), de = Math.abs(ue), M = O === "bidirectional" ? ue > bt ? (h = (g = e.incoming_entity) == null ? e.outgoing_entity : g) == null ? e.secondary_entity : h : ue < -bt ? (_ = (v = e.outgoing_entity) == null ? e.incoming_entity : v) == null ? e.secondary_entity : _ : (y = (b = e.incoming_entity) == null ? e.outgoing_entity : b) == null ? e.secondary_entity : y : (x = e.entity) == null ? e.secondary_entity : x, fe = Rt((S = e.primary_action) == null ? "more-info" : S, M, e.primary_action_path), pe = Rt((C = e.secondary_action) == null ? "more-info" : C, e.secondary_entity, e.secondary_action_path), me = O === "bidirectional" ? (w = e.incoming_entity) == null ? e.outgoing_entity : w : e.entity, he = e.icon === null ? null : (T = (ee = e.icon) == null ? Wt(t, me) : ee) == null ? Zt(e.kind) : T, N = tn(e), P = nn(N) || e.kind === "junction" && N !== "ignore" && A;
		return {
			id: e.id,
			kind: e.kind,
			label: (E = (te = e.label) == null ? Ht(t, e.entity) : te) == null ? un(e.id) : E,
			labelAngle: e.label_angle,
			labelOffsetX: e.label_offset_x,
			labelOffsetY: e.label_offset_y,
			value: de,
			flowValue: ue,
			hasOwnValue: A,
			contributesToFlow: P,
			hideZeroValues: e.hide_zero_values,
			hideIfZero: e.hide_if_zero === !0,
			showFlowArrow: e.show_flow_arrow === !0,
			primaryAction: fe,
			secondaryAction: pe,
			secondary: se,
			secondaryDisplayValue: se === void 0 ? void 0 : `${Yt(se)}${ce ? ` ${ce}` : ""}`,
			radius: (D = e.radius) == null ? Qt(e.kind) : D,
			icon: he,
			secondaryIcon: void 0,
			unit: oe,
			color: e.color,
			flowMinVisibleValue: e.flowMinVisibleValue,
			flowMaxValue: e.flowMaxValue
		};
	});
}
function Rt(e, t, n) {
	switch (e) {
		case "none": return;
		case "more-info":
		case "toggle": return t ? {
			entityId: t,
			type: e
		} : void 0;
		case "navigate":
		case "url": return n != null && n.trim() ? {
			path: n.trim(),
			type: e
		} : void 0;
		default: return;
	}
}
function zt(e, t) {
	return t === "supply" ? Math.max(e, 0) : t === "consume" ? Math.min(e, 0) : e;
}
function Bt(e, t) {
	var n;
	return ((n = e.links) == null ? [] : n).map((e) => {
		var n, r;
		let i = e.entity ? Vt(t, {
			...e,
			value: void 0
		}) : Vt(t, e), a = (n = i == null ? void 0 : i.value) == null ? e.value : n, o = (r = e.unit) == null ? i == null ? void 0 : i.unit : r;
		return {
			...e,
			value: a,
			unit: o,
			displayValue: a === void 0 ? void 0 : Xt(a, o)
		};
	});
}
function Vt(e, t) {
	var n, r, i;
	if (!(t != null && t.entity)) return (t == null ? void 0 : t.value) === void 0 ? void 0 : {
		value: t.value,
		unit: t.unit
	};
	let a = e == null ? void 0 : e.states[t.entity];
	if (!a) return t.value === void 0 ? void 0 : {
		value: t.value,
		unit: t.unit
	};
	let o = Jt(t.attribute ? a.attributes[t.attribute] : a.state);
	if (!Number.isFinite(o)) return t.value === void 0 ? void 0 : {
		value: t.value,
		unit: t.unit
	};
	let s = String((n = a.attributes.unit_of_measurement) == null ? "" : n).trim(), c = (r = t.unit) == null ? s : r, l = qt(c), u = (i = t.factor) == null ? l : i, d = t.invert ? -1 : 1;
	return {
		value: o * u * d,
		unit: l === 1 ? c : "W"
	};
}
function Z(e) {
	var t;
	if (typeof e == "string") return Q(e);
	if (Array.isArray(e)) return Z(e[0]);
	if (fn(e)) return (t = Q(e.entity)) == null ? Q(e.entity_id) : t;
}
function Ht(e, t) {
	var n;
	if (!t) return;
	let r = e == null || (n = e.states[t]) == null ? void 0 : n.attributes.friendly_name;
	return typeof r == "string" ? r : un(t);
}
function Ut(e) {
	var t;
	return Object.keys((t = e == null ? void 0 : e.states) == null ? {} : t).sort();
}
function Wt(e, t) {
	if (!t) return;
	let n = e == null ? void 0 : e.states[t], r = n == null ? void 0 : n.attributes.icon;
	if (typeof r == "string" && r.startsWith("mdi:")) return r;
	let i = n == null ? void 0 : n.attributes.device_class;
	if (typeof i == "string") {
		let e = Gt(i);
		if (e) return e;
	}
	let a = t.split(".")[0];
	return Kt(a);
}
function Gt(e) {
	if (e === "battery") return "battery";
	if (e === "gas") return "mdi:fire";
	if (e === "power" || e === "energy") return "mdi:flash";
	if (e === "temperature") return "mdi:thermometer";
	if (e === "water") return "water";
}
function Kt(e) {
	if (e === "battery") return "battery";
	if (e === "binary_sensor") return "mdi:checkbox-marked-circle-outline";
	if (e === "climate") return "heat_pump";
	if (e === "cover") return "mdi:window-shutter";
	if (e === "fan") return "mdi:fan";
	if (e === "light") return "mdi:lightbulb";
	if (e === "sensor") return "mdi:eye";
	if (e === "switch") return "mdi:toggle-switch";
	if (e === "water_heater") return "mdi:water-boiler";
}
function qt(e) {
	return e === "kW" ? 1e3 : e === "MW" ? 1e6 : 1;
}
function Jt(e) {
	if (typeof e == "number") return e;
	if (typeof e != "string") return NaN;
	let t = e.trim().replace(",", ".").match(/[-+]?\d+(?:\.\d+)?/);
	return t ? Number(t[0]) : NaN;
}
function Yt(e) {
	return e.toLocaleString("en-US", { maximumFractionDigits: e >= 100 ? 0 : 1 });
}
function Xt(e, t) {
	let n = Math.abs(e);
	return !t || t === "W" || t === "kW" || t === "MW" ? n >= 1e3 ? `${Yt(n / 1e3)} kW` : `${Math.round(n).toLocaleString("en-US")} W` : `${Yt(n)} ${t}`;
}
function Zt(e) {
	return e === "junction" ? "mdi:hub" : "mdi:leaf";
}
function Qt(e) {
	return e === "junction" ? 90 : 65;
}
function $t(e) {
	return e.flowDirection ? e.flowDirection : e.icon === "heat_pump" || e.icon === "ev" || e.icon === "plug" || e.icon === "appliance" || e.icon === "home" ? "consume" : "supply";
}
function en(e) {
	return e === "leaf" ? "measured" : "junction";
}
function tn(e) {
	var t;
	return (t = e.balance_role) == null ? en(e.kind) : t;
}
function nn(e) {
	return e === "measured";
}
function rn(e, t) {
	var n, r, i;
	let { [t]: a, ...o } = (n = e.layout) == null ? {} : n;
	return X({
		...e,
		nodes: ((r = e.nodes) == null ? [] : r).filter((e) => e.id !== t),
		links: ((i = e.links) == null ? [] : i).filter((e) => e.from !== t && e.to !== t),
		layout: o
	});
}
function an(e, t) {
	let n = t.filter((e) => e.kind === "junction");
	return St[Math.max(0, n.findIndex((t) => t.id === e)) % St.length];
}
function on(e) {
	let t = /^#?([0-9a-f]{6})$/i.exec(e == null ? "" : e);
	return t ? `#${t[1].toLowerCase()}` : void 0;
}
function sn(e, t) {
	let n = cn(e), r = cn(t);
	return !n || !r ? 0 : Math.hypot(n.r - r.r, n.g - r.g, n.b - r.b);
}
function cn(e) {
	let t = on(e);
	if (t) return {
		r: Number.parseInt(t.slice(1, 3), 16),
		g: Number.parseInt(t.slice(3, 5), 16),
		b: Number.parseInt(t.slice(5, 7), 16)
	};
}
function ln(e) {
	return /^#[0-9a-f]{6}$/i.test(e == null ? "" : e) ? e : _t;
}
function un(e) {
	return (e.includes(".") ? e.split(".").slice(1).join(".") : e).replace(/[_-]+/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
}
function dn(e) {
	return e.map((e) => ({ ...e }));
}
function fn(e) {
	return !!(e && typeof e == "object" && !Array.isArray(e));
}
function Q(e) {
	return typeof e == "string" && e.trim() ? e.trim() : void 0;
}
function pn(e, t) {
	return Number.isFinite(e) ? Number(e) : t;
}
function $(e) {
	return Number.isFinite(e) ? Number(e) : void 0;
}
function mn(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function hn(e, t) {
	e.dispatchEvent(new CustomEvent("config-changed", {
		bubbles: !0,
		composed: !0,
		detail: { config: t }
	}));
}
function gn(e) {
	window.dispatchEvent(new CustomEvent("home-flow-card-preview-config-changed", { detail: { config: e } }));
}
function _n(e) {
	window.dispatchEvent(new CustomEvent("home-flow-card-preview-node-selected", { detail: { nodeId: e } }));
}
function vn(e) {
	var t, n;
	let r = /* @__PURE__ */ new Map(), i = (e, t) => {
		var n;
		if (!e) return;
		let i = (n = r.get(e)) == null ? /* @__PURE__ */ new Set() : n;
		xt.forEach((e) => i.add(e)), t && i.add(t), r.set(e, i);
	};
	return ((t = e.nodes) == null ? [] : t).forEach((e) => {
		i(e.entity, e.attribute), i(e.incoming_entity, e.incoming_attribute), i(e.outgoing_entity, e.outgoing_attribute), i(e.secondary_entity, e.secondary_attribute);
	}), ((n = e.links) == null ? [] : n).forEach((e) => i(e.entity, e.attribute)), Array.from(r.entries()).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => ({
		attributes: Array.from(t).sort(),
		entityId: e
	}));
}
function yn(e, t, n) {
	return e.some((e) => bn(e, t == null ? void 0 : t.states[e.entityId], n == null ? void 0 : n.states[e.entityId]));
}
function bn(e, t, n) {
	return t === n ? !1 : !t || !n ? t !== n : t.state === n.state ? e.attributes.some((e) => t.attributes[e] !== n.attributes[e]) : !0;
}
function xn(e, t) {
	return {
		links: Bt(e, t),
		nodes: Lt(e, t)
	};
}
var Sn = class extends z {
	constructor(...e) {
		super(...e), this.config = X(void 0), this.editMode = !1, this._entityWatchers = vn(this.config), this._normalizedConfig = this.config, this._resolvedGraphData = xn(this.config, void 0);
	}
	setConfig(e) {
		this.config = X(e);
	}
	getCardSize() {
		var e;
		return Math.ceil(((e = X(this.config).height) == null ? 383 : e) / 50);
	}
	static getStubConfig() {
		return X(void 0);
	}
	static async getConfigElement() {
		return document.createElement("home-flow-card-editor");
	}
	shouldUpdate(e) {
		if (e.has("config")) return this._syncGraphCache(this.config, this.hass, e.get("config")), !0;
		if (e.has("hass")) {
			let t = e.get("hass");
			return yn(this._entityWatchers, t, this.hass) ? (this._resolvedGraphData = xn(this._normalizedConfig, this.hass), !0) : !1;
		}
		return !0;
	}
	render() {
		var e, t, n, r, i, a;
		let o = this._normalizedConfig, s = (e = o.width) == null ? 502 : e, c = (t = o.height) == null ? 383 : t;
		return N`
      <ha-card
        class=${`scale-${(n = o.scaling_mode) == null ? mt : n}`}
        style=${`--graph-width:${s};--graph-height:${c};--graph-aspect:${s} / ${c};`}
      >
        ${o.title ? N`<div class="title">${o.title}</div>` : I}
        <div class="graph-frame">
          <div class="graph-canvas">
            <home-flow-graph-card
              .nodes=${this._resolvedGraphData.nodes}
              .links=${this._resolvedGraphData.links}
              .layout=${(r = o.layout) == null ? {} : r}
              .labelStyle=${(i = o.label_style) == null ? ft : i}
              .leafRouting=${(a = o.leaf_routing) == null ? pt : a}
              .editable=${this.editMode}
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
    `;
	}
	_syncGraphCache(e, t, n) {
		this._normalizedConfig = e, !(n && n.nodes === e.nodes && n.links === e.links) && (this._entityWatchers = vn(e), this._resolvedGraphData = xn(e, t));
	}
	_handleLayoutChange(e) {
		this.editMode && (this.config = {
			...this.config,
			layout: e.detail.layout
		}, !e.detail.live && gn(this.config));
	}
	_handleLinksChange(e) {
		this.config = X({
			...this.config,
			links: e.detail.links
		}), !e.detail.live && gn(this.config);
	}
	_handleNodeLabelChange(e) {
		var t;
		if (!this.editMode || !e.detail.nodeId) return;
		let { labelAngle: n, labelOffsetX: r, labelOffsetY: i, nodeId: a } = e.detail;
		this.config = X({
			...this.config,
			nodes: ((t = this.config.nodes) == null ? [] : t).map((e) => e.id === a ? {
				...e,
				label_angle: n,
				label_offset_x: r,
				label_offset_y: i
			} : e)
		}), !e.detail.live && gn(this.config);
	}
	_handleNodeRemove(e) {
		!this.editMode || !e.detail.nodeId || (this.config = rn(X(this.config), e.detail.nodeId), gn(this.config));
	}
	_handleNodeSelect(e) {
		this.editMode && _n(e.detail.nodeId);
	}
	_handleEntityMoreInfo(e) {
		this.editMode || !e.detail.entityId || this._showMoreInfo(e.detail.entityId);
	}
	_handleNodeAction(e) {
		if (this.editMode || !e.detail.action) return;
		let t = e.detail.action;
		switch (t.type) {
			case "none": return;
			case "more-info":
				this._showMoreInfo(t.entityId);
				return;
			case "toggle":
				var n;
				if (!t.entityId || typeof ((n = this.hass) == null ? void 0 : n.callService) != "function") return;
				this.hass.callService("homeassistant", "toggle", { entity_id: t.entityId });
				return;
			case "navigate":
				if (!t.path) return;
				window.history.pushState(null, "", t.path), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
				return;
			case "url":
				if (!t.path) return;
				window.open(t.path, "_blank", "noopener");
				return;
			default: return;
		}
	}
	_showMoreInfo(e) {
		e && this.dispatchEvent(new CustomEvent("hass-more-info", {
			bubbles: !0,
			composed: !0,
			detail: { entityId: e }
		}));
	}
};
ct = Sn, ct.properties = {
	config: { attribute: !1 },
	editMode: {
		type: Boolean,
		attribute: "edit-mode"
	},
	hass: { attribute: !1 }
}, ct.styles = o`
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
    ha-card.scale-grow,
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

    ha-card.scale-native .graph-frame,
    ha-card.scale-grow .graph-frame {
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

    ha-card.scale-grow .graph-canvas {
      width: 100%;
      min-width: calc(var(--graph-width) * 1px);
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
  `, customElements.get("home-flow-card") || customElements.define("home-flow-card", Sn), window.customCards = (lt = window.customCards) == null ? [] : lt, window.customCards.some((e) => e.type === "home-flow-card") || window.customCards.push({
	type: ut,
	name: "Home Flow Card",
	description: "Visual flow map for energy, water, gas and other home resources.",
	preview: !0,
	documentationURL: "https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card"
});
//#endregion
//#region node_modules/lit-html/directive.js
var Cn = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, wn = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), Tn = class {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, t, n) {
		this._$Ct = e, this._$AM = t, this._$Ci = n;
	}
	_$AS(e, t) {
		return this.update(e, t);
	}
	update(e, t) {
		return this.render(...t);
	}
}, { I: En } = De, Dn = (e) => e, On = () => document.createComment(""), kn = (e, t, n) => {
	let r = e._$AA.parentNode, i = t === void 0 ? e._$AB : t._$AA;
	if (n === void 0) n = new En(r.insertBefore(On(), i), r.insertBefore(On(), i), e, e.options);
	else {
		let t = n._$AB.nextSibling, o = n._$AM, s = o !== e;
		if (s) {
			var a;
			let t;
			(a = n._$AQ) == null || a.call(n, e), n._$AM = e, n._$AP !== void 0 && (t = e._$AU) !== o._$AU && n._$AP(t);
		}
		if (t !== i || s) {
			let e = n._$AA;
			for (; e !== t;) {
				let t = Dn(e).nextSibling;
				Dn(r).insertBefore(e, i), e = t;
			}
		}
	}
	return n;
}, An = (e, t, n = e) => (e._$AI(t, n), e), jn = {}, Mn = (e, t = jn) => e._$AH = t, Nn = (e) => e._$AH, Pn = (e) => {
	e._$AR(), e._$AA.remove();
}, Fn = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	for (let i = t; i <= n; i++) r.set(e[i], i);
	return r;
}, In = wn(class extends Tn {
	constructor(e) {
		if (super(e), e.type !== Cn.CHILD) throw Error("repeat() can only be used in text expressions");
	}
	dt(e, t, n) {
		let r;
		n === void 0 ? n = t : t !== void 0 && (r = t);
		let i = [], a = [], o = 0;
		for (let t of e) i[o] = r ? r(t, o) : o, a[o] = n(t, o), o++;
		return {
			values: a,
			keys: i
		};
	}
	render(e, t, n) {
		return this.dt(e, t, n).values;
	}
	update(e, [t, n, r]) {
		var i;
		let a = Nn(e), { values: o, keys: s } = this.dt(t, n, r);
		if (!Array.isArray(a)) return this.ut = s, o;
		let c = (i = this.ut) == null ? this.ut = [] : i, l = [], u, d, f = 0, p = a.length - 1, m = 0, h = o.length - 1;
		for (; f <= p && m <= h;) if (a[f] === null) f++;
		else if (a[p] === null) p--;
		else if (c[f] === s[m]) l[m] = An(a[f], o[m]), f++, m++;
		else if (c[p] === s[h]) l[h] = An(a[p], o[h]), p--, h--;
		else if (c[f] === s[h]) l[h] = An(a[f], o[h]), kn(e, l[h + 1], a[f]), f++, h--;
		else if (c[p] === s[m]) l[m] = An(a[p], o[m]), kn(e, a[f], a[p]), p--, m++;
		else if (u === void 0 && (u = Fn(s, m, h), d = Fn(c, f, p)), u.has(c[f])) if (u.has(c[p])) {
			let t = d.get(s[m]), n = t === void 0 ? null : a[t];
			if (n === null) {
				let t = kn(e, a[f]);
				An(t, o[m]), l[m] = t;
			} else l[m] = An(n, o[m]), kn(e, a[f], n), a[t] = null;
			m++;
		} else Pn(a[p]), p--;
		else Pn(a[f]), f++;
		for (; m <= h;) {
			let t = kn(e, l[h + 1]);
			An(t, o[m]), l[m++] = t;
		}
		for (; f <= p;) {
			let e = a[f++];
			e !== null && Pn(e);
		}
		return this.ut = s, Mn(e, l), F;
	}
}), Ln, Rn = [
	{
		label: "Solar",
		value: "solar"
	},
	{
		label: "Junction",
		value: "junction"
	},
	{
		label: "Battery",
		value: "battery"
	},
	{
		label: "Home",
		value: "home"
	},
	{
		label: "Grid",
		value: "grid"
	},
	{
		label: "Heat pump",
		value: "heat_pump"
	},
	{
		label: "EV",
		value: "ev"
	},
	{
		label: "Plug",
		value: "plug"
	},
	{
		label: "Water",
		value: "water"
	},
	{
		label: "Generic",
		value: "generic"
	}
], zn = [{
	label: "Junction",
	value: "junction"
}, {
	label: "Leaf",
	value: "leaf"
}], Bn = [{
	label: "+ supplies, - consumes",
	value: "supply"
}, {
	label: "+ consumes, - supplies",
	value: "consume"
}], Vn = [{
	label: "Single signed entity",
	value: "signed"
}, {
	label: "Separate in/out entities",
	value: "bidirectional"
}], Hn = [
	{
		label: "Both",
		value: "both"
	},
	{
		label: "Supply only",
		value: "supply"
	},
	{
		label: "Consume only",
		value: "consume"
	}
], Un = [
	{
		label: "Pass-through only",
		value: "junction"
	},
	{
		label: "Counts in balance",
		value: "measured"
	},
	{
		label: "Display only",
		value: "ignore"
	}
], Wn = [
	{
		label: "More info",
		value: "more-info"
	},
	{
		label: "Toggle",
		value: "toggle"
	},
	{
		label: "Navigate",
		value: "navigate"
	},
	{
		label: "Open URL",
		value: "url"
	},
	{
		label: "None",
		value: "none"
	}
], Gn = [{
	label: "Around circle",
	value: "curved"
}, {
	label: "Straight",
	value: "straight"
}], Kn = [
	{
		label: "Funnel",
		value: "funnel"
	},
	{
		label: "Channel",
		value: "channel"
	},
	{
		label: "Orthogonal",
		value: "orthogonal"
	},
	{
		label: "Sweep",
		value: "sweep"
	},
	{
		label: "Radial",
		value: "radial"
	}
], qn = [
	{
		label: "Native (scroll if needed)",
		value: "native"
	},
	{
		label: "Fit width",
		value: "fit-width"
	},
	{
		label: "Grow on wide screens",
		value: "grow"
	},
	{
		label: "Shrink on narrow screens",
		value: "shrink"
	}
], Jn = class extends z {
	constructor(...e) {
		super(...e), this._config = X(void 0), this._nodeSectionOpen = {}, this._handlePreviewConfigChanged = (e) => {
			let t = e.detail;
			t != null && t.config && (this._config = X(t.config), hn(this, this._config));
		}, this._handlePreviewNodeSelected = (e) => {
			let t = e.detail, n = t == null ? void 0 : t.nodeId;
			this._selectedNode = n, this._syncSelectedNodeEditor(n);
		}, this._handleEditorKeydown = (e) => {
			var t;
			if (!this._selectedNode || e.key !== "Delete" && e.key !== "Backspace" || e.defaultPrevented || this._isInteractiveEvent(e)) return;
			let n = ((t = X(this._config).nodes) == null ? [] : t).find((e) => e.id === this._selectedNode);
			n && (e.preventDefault(), e.stopPropagation(), this._removeNode(n.id));
		}, this._handleNodePointerMove = (e) => {
			var t, n, r;
			if (!this._draggedNode || e.pointerId !== this._dragPointerId) return;
			e.preventDefault();
			let i = Array.from(this.renderRoot.querySelectorAll(".node-editor-row[data-node-id]")).map((e) => {
				var t;
				return {
					id: (t = e.dataset.nodeId) == null ? "" : t,
					rect: e.getBoundingClientRect()
				};
			}).filter((e) => e.id && e.id !== this._draggedNode);
			if (i.length === 0) return;
			let a = (t = i[i.length - 1]) == null ? void 0 : t.id, o = "after";
			for (let t of i) {
				let n = t.rect.top + t.rect.height / 2;
				if (e.clientY < n) {
					a = t.id, o = "before";
					break;
				}
			}
			if (!a) return;
			this._dragOverNode = a, this._dragInsertTarget = a, this._dragInsertSide = o;
			let s = (n = this._dragPreviewOrder) == null ? ((r = this._config.nodes) == null ? [] : r).map((e) => e.id) : n, c = this._reorderedNodeIds(this._draggedNode, a, o, s);
			c && c.join("|") !== s.join("|") && (this._dragPreviewOrder = c);
		}, this._handleNodePointerUp = (e) => {
			var t;
			if (!this._draggedNode || e.pointerId !== this._dragPointerId) return;
			e.preventDefault();
			let n = this._dragPreviewOrder, r = ((t = this._config.nodes) == null ? [] : t).map((e) => e.id);
			n != null && n.length && n.join("|") !== r.join("|") && this._commitNodeOrder(n), this._clearNodeDragState();
		};
	}
	connectedCallback() {
		super.connectedCallback(), window.addEventListener("home-flow-card-preview-config-changed", this._handlePreviewConfigChanged), window.addEventListener("home-flow-card-preview-node-selected", this._handlePreviewNodeSelected), window.addEventListener("keydown", this._handleEditorKeydown, !0), window.addEventListener("pointermove", this._handleNodePointerMove, !0), window.addEventListener("pointerup", this._handleNodePointerUp, !0), window.addEventListener("pointercancel", this._handleNodePointerUp, !0);
	}
	disconnectedCallback() {
		window.removeEventListener("home-flow-card-preview-config-changed", this._handlePreviewConfigChanged), window.removeEventListener("home-flow-card-preview-node-selected", this._handlePreviewNodeSelected), window.removeEventListener("keydown", this._handleEditorKeydown, !0), window.removeEventListener("pointermove", this._handleNodePointerMove, !0), window.removeEventListener("pointerup", this._handleNodePointerUp, !0), window.removeEventListener("pointercancel", this._handleNodePointerUp, !0), super.disconnectedCallback();
	}
	_isInteractiveEvent(e) {
		let t = window.getSelection();
		if (t && !t.isCollapsed && t.toString().trim()) return !0;
		let n = typeof e.composedPath == "function" ? e.composedPath() : [];
		for (let e of n) if (e instanceof Element && this._matchesInteractiveElement(e)) return !0;
		let r = this._deepActiveElement();
		return r ? this._matchesInteractiveElement(r) : !1;
	}
	_deepActiveElement() {
		var e, t;
		let n = (e = (t = this.ownerDocument) == null ? void 0 : t.activeElement) == null ? document.activeElement : e;
		for (; n;) {
			var r;
			let e = n.shadowRoot, t = (r = e == null ? void 0 : e.activeElement) == null ? null : r;
			if (!t || t === n) break;
			n = t;
		}
		return n;
	}
	_matchesInteractiveElement(e) {
		return e.matches("input, textarea, select, button, [contenteditable=''], [contenteditable='true'], ha-textfield, ha-textarea, ha-combo-box, ha-selector, hui-entity-picker, hui-icon-picker, ha-button, mwc-textfield, mwc-select, mwc-button") || e instanceof HTMLElement && e.isContentEditable ? !0 : !!e.closest("input, textarea, select, button, [contenteditable=''], [contenteditable='true'], ha-textfield, ha-textarea, ha-combo-box, ha-selector, hui-entity-picker, hui-icon-picker, ha-button, mwc-textfield, mwc-select, mwc-button");
	}
	async _syncSelectedNodeEditor(e) {
		await this.updateComplete, await new Promise((e) => requestAnimationFrame(e));
		let t = Array.from(this.renderRoot.querySelectorAll(".node-editor[data-node-id]"));
		if (t.forEach((t) => {
			t.open = t.dataset.nodeId === e;
		}), !e) return;
		let n = t.find((t) => t.dataset.nodeId === e);
		n == null || n.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "nearest"
		});
	}
	setConfig(e) {
		this._config = X(e);
	}
	willUpdate(e) {
		e.has("config") && this.config && (this._config = X(this.config));
	}
	render() {
		var e, t, n, r, i, a;
		let o = X(this._config);
		return N`
      <div class="editor-shell">
        <section class="panel">
          <header>
            <h3>Options</h3>
            <p>General display options.</p>
          </header>
          <label>
            <span>Label style</span>
            <select
              .value=${(e = o.label_style) == null ? ft : e}
              @change=${(e) => this._patchConfig({ label_style: e.currentTarget.value })}
            >
              ${Gn.map((e) => N`
                  <option value=${e.value}>${e.label}</option>
                `)}
            </select>
          </label>
          <label>
            <span>Leaf routing</span>
            <select
              .value=${(t = o.leaf_routing) == null ? pt : t}
              @change=${(e) => this._patchConfig({ leaf_routing: e.currentTarget.value })}
            >
              ${Kn.map((e) => N`
                  <option value=${e.value}>${e.label}</option>
                `)}
            </select>
          </label>
          <label>
            <span>Scaling mode</span>
            <select
              .value=${(n = o.scaling_mode) == null ? mt : n}
              @change=${(e) => this._patchConfig({ scaling_mode: e.currentTarget.value })}
            >
              ${qn.map((e) => N`
                  <option value=${e.value}>${e.label}</option>
                `)}
            </select>
          </label>
        </section>

        <section class="panel">
          <header>
            <h3>Add nodes</h3>
            <p>Junctions can connect to junctions. Leaves connect to junctions.</p>
          </header>
          <div class="button-row">
            ${zn.map((e) => N`
                <button
                  type="button"
                  class="add-node-button"
                  @click=${() => this._addNode(e.value)}
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
            <p>${(r = (i = o.nodes) == null ? void 0 : i.length) == null ? 0 : r} configured</p>
          </header>
          <div class="nodes-list">
            ${In((a = o.nodes) == null ? [] : a, (e) => e.id, (e) => this._nodeEditor(e, o))}
          </div>
        </section>
      </div>
    `;
	}
	_nodeVisualOrder(e, t) {
		var n, r;
		let i = (n = this._dragPreviewOrder) == null ? ((r = t.nodes) == null ? [] : r).map((e) => e.id) : n, a = i.indexOf(e);
		return a >= 0 ? a : i.length;
	}
	_nodeEditor(e, t) {
		var n, r, i, a, o, s, c, l, u, d, f, p, m, h, g;
		let _ = ((n = e.label) == null ? void 0 : n.trim()) || "Empty", v = (r = e.color) == null ? this._defaultNodeColor(e, t) : r, y = this._selectedNode === e.id, b = (i = e.flow_mode) == null ? "signed" : i, x = b === "bidirectional" ? (a = e.incoming_entity) == null ? e.outgoing_entity : a : e.entity, S = e.icon === null ? void 0 : (o = (s = e.icon) == null ? Wt(this.hass, x) : s) == null ? Zt(e.kind) : o, C = (c = e.primary_action) == null ? "more-info" : c, w = (l = e.secondary_action) == null ? "more-info" : l, T = this._busJunctionIds(e.id, t), ee = `${(u = e.radius) == null ? Qt(e.kind) : u} px`, E = b === "bidirectional" ? "Separate in/out" : "Single signed", te = e.secondary_entity ? "Configured" : "Not set", D = `Applies to ${T.length} junction${T.length === 1 ? "" : "s"}`;
		return N`
      <div
        class=${`node-editor-row ${this._draggedNode === e.id ? "dragging" : ""} ${this._dragOverNode === e.id ? "drag-over" : ""} ${this._dragInsertTarget === e.id && this._dragInsertSide === "before" ? "insert-before" : ""} ${this._dragInsertTarget === e.id && this._dragInsertSide === "after" ? "insert-after" : ""}`}
        data-node-id=${e.id}
        style=${`order:${this._nodeVisualOrder(e.id, t)}`}
      >
        <div
          class="node-drag-handle"
          @pointerdown=${(t) => this._handleNodePointerDown(t, e.id)}
          aria-label="Reorder node"
          title="Drag to reorder"
        >
          <ha-icon icon="mdi:drag-vertical"></ha-icon>
        </div>
        <details
          class=${`node-editor ${y ? "editor-selected" : ""}`}
          data-node-id=${e.id}
          ?open=${y}
        >
        ${this._nodeSummary(_)}
        ${this._renderNodeSubsection(e, "appearance", "Appearance", ee, N`
            <div class="form-grid">
              <label>
                <span>Name</span>
                <input
                  .value=${(d = e.label) == null ? "" : d}
                  @input=${(n) => this._updateNode(t, e.id, { label: n.currentTarget.value })}
                />
              </label>
              <label>
                <span>Icon</span>
                ${this._iconSelect(S, (n) => this._updateNode(t, e.id, { icon: n }), e.icon === null ? void 0 : () => this._updateNode(t, e.id, { icon: null }))}
              </label>
              <label>
                <span>Radius</span>
                <input
                  type="number"
                  min=${"20"}
                  max=${"100"}
                  .value=${String((f = e.radius) == null ? Qt(e.kind) : f)}
                  @change=${(n) => this._updateNode(t, e.id, { radius: Number(n.currentTarget.value) })}
                />
              </label>
              ${this._colorInput("Color", v, (n) => this._updateNode(t, e.id, { color: n }), e.color ? () => this._updateNode(t, e.id, { color: void 0 }) : void 0)}
            </div>
            <div class="node-actions inline-actions">
              <button type="button" @click=${() => this._duplicateNode(e.id)}>
                Duplicate
              </button>
              <button
                type="button"
                class="danger"
                @click=${() => this._removeNode(e.id)}
              >
                Delete
              </button>
            </div>
          `, t, { forceOpen: e.kind === "leaf" || e.kind === "junction" })}

        ${this._renderNodeSubsection(e, "flow", "Flow", E, N`
            <div class="form-grid">
              <label class="span-all">
                <span>Flow input</span>
                <select
                  .value=${b}
                  @change=${(n) => this._updateNode(t, e.id, { flow_mode: n.currentTarget.value })}
                >
                  ${Vn.map((e) => N`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${b === "bidirectional" ? N`
                    <label class="span-all">
                      <span>Inflow entity</span>
                      ${this._entitySelect(e.incoming_entity, (n) => {
			let r = n ? Wt(this.hass, n) : void 0;
			this._updateNode(t, e.id, {
				incoming_entity: n,
				...r && e.icon === void 0 ? { icon: r } : {}
			});
		})}
                    </label>
                    <label class="span-all">
                      <span>Outflow entity</span>
                      ${this._entitySelect(e.outgoing_entity, (n) => {
			let r = n ? Wt(this.hass, n) : void 0;
			this._updateNode(t, e.id, {
				outgoing_entity: n,
				...r && e.icon === void 0 ? { icon: r } : {}
			});
		})}
                    </label>
                  ` : N`
                    <label class="span-all">
                      <span>Flow entity</span>
                      ${this._entitySelect(e.entity, (n) => {
			let r = n ? Wt(this.hass, n) : void 0;
			this._updateNode(t, e.id, {
				entity: n,
				...r ? { icon: r } : {}
			});
		})}
                    </label>
                    <label>
                      <span>Flow direction</span>
                      <select
                        .value=${(p = e.flowDirection) == null ? $t(e) : p}
                        @change=${(n) => this._updateNode(t, e.id, { flowDirection: n.currentTarget.value })}
                      >
                        ${Bn.map((e) => N`
                            <option value=${e.value}>${e.label}</option>
                          `)}
                      </select>
                    </label>
                  `}
              <label>
                <span>Allowed flow</span>
                <select
                  .value=${(m = e.allowed_flow) == null ? "both" : m}
                  @change=${(n) => this._updateNode(t, e.id, { allowed_flow: n.currentTarget.value })}
                >
                  ${Hn.map((e) => N`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              <label>
                <span>Balance role</span>
                <select
                  .value=${tn(e)}
                  @change=${(n) => this._updateNode(t, e.id, { balance_role: n.currentTarget.value })}
                >
                  ${Un.map((e) => N`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              <label>
                <span>Primary click action</span>
                <select
                  .value=${C}
                  @change=${(n) => this._updateNode(t, e.id, { primary_action: n.currentTarget.value })}
                >
                  ${Wn.map((e) => N`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${C === "navigate" || C === "url" ? N`
                    <label class="span-all">
                      <span>${C === "navigate" ? "Primary navigation path" : "Primary URL"}</span>
                      <input
                        type="text"
                        .value=${(h = e.primary_action_path) == null ? "" : h}
                        placeholder=${C === "navigate" ? "/lovelace/0" : "https://example.com"}
                        @input=${(n) => this._updateNode(t, e.id, { primary_action_path: n.currentTarget.value })}
                      />
                    </label>
                  ` : I}
            </div>
            <div class="toggle-grid compact">
              <label class="checkbox-field">
                <input
                  type="checkbox"
                  .checked=${e.hide_zero_values === !0}
                  @change=${(n) => this._updateNode(t, e.id, { hide_zero_values: n.currentTarget.checked })}
                />
                <span>Hide zero values</span>
              </label>
              <label class="checkbox-field">
                <input
                  type="checkbox"
                  .checked=${e.hide_if_zero === !0}
                  @change=${(n) => this._updateNode(t, e.id, { hide_if_zero: n.currentTarget.checked })}
                />
                <span>Hide if zero</span>
              </label>
              <label class="checkbox-field">
                <input
                  type="checkbox"
                  .checked=${e.show_flow_arrow === !0}
                  @change=${(n) => this._updateNode(t, e.id, { show_flow_arrow: n.currentTarget.checked })}
                />
                <span>Show flow arrow</span>
              </label>
              <label class="checkbox-field">
                <input
                  type="checkbox"
                  .checked=${e.invert === !0}
                  @change=${(n) => this._updateNode(t, e.id, { invert: n.currentTarget.checked })}
                />
                <span>Invert flow</span>
              </label>
            </div>
          `, t)}

        ${this._renderNodeSubsection(e, "secondary", "Secondary value", te, N`
            <div class="form-grid">
              <label class="span-all">
                <span>Secondary entity</span>
                ${this._entitySelect(e.secondary_entity, (n) => this._updateNode(t, e.id, { secondary_entity: n }))}
              </label>
              <label>
                <span>Secondary click action</span>
                <select
                  .value=${w}
                  @change=${(n) => this._updateNode(t, e.id, { secondary_action: n.currentTarget.value })}
                >
                  ${Wn.map((e) => N`
                      <option value=${e.value}>${e.label}</option>
                    `)}
                </select>
              </label>
              ${w === "navigate" || w === "url" ? N`
                    <label class="span-all">
                      <span>${w === "navigate" ? "Secondary navigation path" : "Secondary URL"}</span>
                      <input
                        type="text"
                        .value=${(g = e.secondary_action_path) == null ? "" : g}
                        placeholder=${w === "navigate" ? "/lovelace/0" : "https://example.com"}
                        @input=${(n) => this._updateNode(t, e.id, { secondary_action_path: n.currentTarget.value })}
                      />
                    </label>
                  ` : I}
            </div>
          `, t)}
        ${T.length > 0 ? this._renderNodeSubsection(e, "bus", "Bus options", D, this._busOptionsEditor(e, t, T), t) : I}
        </details>
      </div>
    `;
	}
	_busOptionsEditor(e, t, n) {
		return N`
      <p class="subsection-note">
        Applies to ${n.length} junction${n.length === 1 ? "" : "s"} on this bus.
      </p>
      <div class="form-grid compact">
        ${this._numberInput("Show flow from", this._busOptionValue(e.id, t, "flowMinVisibleValue", 10), (n) => this._updateBusOptions(t, e.id, { flowMinVisibleValue: n }))}
        ${this._numberInput("Full line width at", this._busOptionValue(e.id, t, "flowMaxValue", dt), (n) => this._updateBusOptions(t, e.id, { flowMaxValue: n }))}
      </div>
    `;
	}
	_renderNodeSubsection(e, t, n, r, i, a, o = {}) {
		return N`
      <details
        class="node-subsection"
        ?open=${this._isNodeSectionOpen(e, t, a, o)}
        @toggle=${(n) => this._handleNodeSectionToggle(n, e.id, t)}
      >
        <summary class="node-subsection-summary">
          <strong>${n}</strong>
          <span>${r}</span>
        </summary>
        <div class="node-subsection-content">
          ${i}
        </div>
      </details>
    `;
	}
	_nodeSummary(e) {
		return N`
      <summary class="node-summary">
        <div class="node-summary-text">
          <strong>${e}</strong>
        </div>
      </summary>
    `;
	}
	_entitySelect(e, t, n = !1) {
		let r = e && !n ? N`
            <button
              type="button"
              class="entity-clear"
              @click=${() => t(void 0)}
            >
              Clear
            </button>
          ` : I;
		return this._isHomeAssistantEditor() ? N`
        <div class="entity-picker">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ entity: {} }}
            .value=${e == null ? "" : e}
            ?disabled=${n}
            @value-changed=${(e) => this._handleEntityValueChanged(e, t)}
          ></ha-selector>
          ${r}
        </div>
      ` : N`
      <div class="entity-picker">
        <select
          .value=${e == null ? "" : e}
          ?disabled=${n}
          @change=${(e) => t(e.currentTarget.value.trim() || void 0)}
        >
          <option value="">Manual</option>
          ${Ut(this.hass).map((t) => N`
              <option value=${t} ?selected=${t === e}>
                ${t}
              </option>
            `)}
        </select>
        ${r}
      </div>
    `;
	}
	_handleEntityValueChanged(e, t) {
		t(Z(e.detail.value));
	}
	_iconSelect(e, t, n) {
		let r = n ? N`
          <button
            type="button"
            class="field-clear icon-clear"
            aria-label="Clear icon"
            title="Clear icon"
            @click=${n}
          >
            ×
          </button>
        ` : I;
		return this._isHomeAssistantEditor() ? N`
        <div class="field-picker icon-picker">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ icon: {} }}
            .value=${e == null ? "" : e}
            @value-changed=${(e) => {
			var n;
			let r = (n = e.detail.value) == null ? void 0 : n.trim();
			r && t(r);
		}}
          ></ha-selector>
          ${r}
        </div>
      ` : N`
      <div class="field-picker icon-picker">
        <select
          .value=${e == null ? "" : e}
          @change=${(e) => {
			let n = e.currentTarget.value.trim();
			n && t(n);
		}}
        >
          <option value="">No icon</option>
          ${Rn.map((t) => N`
              <option value=${t.value} ?selected=${t.value === e}>
                ${t.label}
              </option>
            `)}
        </select>
        ${r}
      </div>
    `;
	}
	_isHomeAssistantEditor() {
		return !!(this.hass && typeof this.hass == "object" && "connection" in this.hass);
	}
	_colorInput(e, t, n, r) {
		return N`
      <label class="color-field">
        <span>${e}</span>
        <div class="color-picker">
          <input
            type="color"
            .value=${ln(t)}
            @input=${(e) => n(e.currentTarget.value)}
          />
          ${r ? N`
                <button type="button" class="field-clear" @click=${r}>
                  Reset
                </button>
              ` : I}
        </div>
      </label>
    `;
	}
	_defaultNodeColor(e, t) {
		var n;
		if (e.kind === "junction") {
			var r;
			return an(e.id, (r = t.nodes) == null ? [] : r);
		}
		let i = ((n = t.links) == null ? [] : n).filter((t) => t.from === e.id || t.to === e.id).map((t) => t.from === e.id ? t.to : t.from).find((e) => {
			var n, r;
			return ((n = ((r = t.nodes) == null ? [] : r).find((t) => t.id === e)) == null ? void 0 : n.kind) === "junction";
		});
		if (i) {
			var a, o, s;
			let e = ((a = t.nodes) == null ? [] : a).find((e) => e.id === i);
			return (o = e == null ? void 0 : e.color) == null ? an(i, (s = t.nodes) == null ? [] : s) : o;
		}
		return e.icon === "solar" ? yt : e.icon === "battery" ? vt : _t;
	}
	_nextNodeColor(e, t, n) {
		var r, i;
		let a = t.map((e) => {
			var t;
			return on((t = e.color) == null ? this._defaultNodeColor(e, n) : t);
		}).filter((e) => !!e), o = e === "junction" ? St[0] : _t;
		if (a.length === 0) return o;
		let s = Ct.filter((e) => !a.includes(e.toLowerCase()));
		return (r = (i = (s.length > 0 ? s : Ct).map((e) => ({
			color: e,
			distance: Math.min(...a.map((t) => sn(e, t)))
		})).sort((e, t) => t.distance - e.distance)[0]) == null ? void 0 : i.color) == null ? o : r;
	}
	_numberInput(e, t, n) {
		return N`
      <label>
        <span>${e}</span>
        <input
          type="number"
          .value=${String(Math.round(t))}
          @input=${(e) => n(Number(e.currentTarget.value))}
        />
      </label>
    `;
	}
	_busOptionValue(e, t, n, r) {
		var i;
		let a = (i = t.nodes) == null ? [] : i, o = this._busJunctionIds(e, t), s = a.find((e) => o.includes(e.id) && Number.isFinite(e[n])), c = s == null ? void 0 : s[n];
		return Number.isFinite(c) ? Number(c) : r;
	}
	_updateBusOptions(e, t, n) {
		var r;
		let i = this._busJunctionIds(t, e);
		i.length !== 0 && this._patchConfig({ nodes: ((r = e.nodes) == null ? [] : r).map((e) => i.includes(e.id) ? {
			...e,
			...n
		} : e) });
	}
	_busJunctionIds(e, t) {
		var n;
		let r = (n = t.nodes) == null ? [] : n, i = new Map(r.map((e) => [e.id, e])), a = /* @__PURE__ */ new Set(), o = [e];
		for (; o.length > 0;) {
			var s;
			let e = o.shift();
			!e || a.has(e) || (a.add(e), ((s = t.links) == null ? [] : s).forEach((t) => {
				if (t.from !== e && t.to !== e) return;
				let n = t.from === e ? t.to : t.from;
				!a.has(n) && i.has(n) && o.push(n);
			}));
		}
		return r.filter((e) => e.kind === "junction" && a.has(e.id)).map((e) => e.id);
	}
	_addNode(e) {
		var t, n, r, i;
		let a = X(this._config), o = (t = a.nodes) == null ? [] : t, s = `${e}-${o.length + 1}`, c = {
			id: s,
			kind: e,
			label: (n = (r = zn.find((t) => t.value === e)) == null ? void 0 : r.label) == null ? "Node" : n,
			icon: Zt(e),
			radius: Qt(e),
			...e === "junction" ? { color: this._nextNodeColor(e, o, a) } : {},
			flowDirection: "supply",
			balance_role: en(e)
		};
		this._patchConfig({
			nodes: [c, ...o],
			layout: {
				...(i = a.layout) == null ? {} : i,
				[s]: this._initialPoint(e, o.filter((t) => t.kind === e).length)
			}
		});
	}
	_initialPoint(e, t) {
		return e === "junction" ? {
			x: 360 + t * 130,
			y: 348
		} : {
			x: 300 + t % 4 * 120,
			y: 86 + Math.floor(t / 4) * 110
		};
	}
	_duplicateNode(e) {
		var t, n, r, i, a;
		let o = X(this._config), s = (t = o.nodes) == null ? [] : t, c = s.find((t) => t.id === e);
		if (!c) return;
		let l = this._uniqueDuplicateNodeId(c.id, s), u = (n = (r = o.layout) == null ? void 0 : r[c.id]) == null ? this._initialPoint(c.kind, s.filter((e) => e.kind === c.kind).length) : n, d = {
			...c,
			id: l,
			label: this._duplicateNodeLabel((i = c.label) == null ? c.id : i, s)
		};
		this._selectedNode = l, this._patchConfig({
			nodes: [d, ...s],
			layout: {
				...(a = o.layout) == null ? {} : a,
				[l]: this._duplicatePoint(u)
			}
		}), this._syncSelectedNodeEditor(l);
	}
	_uniqueDuplicateNodeId(e, t) {
		let n = new Set(t.map((e) => e.id)), r = 1, i = `${e}-copy`;
		for (; n.has(i);) r += 1, i = `${e}-copy-${r}`;
		return i;
	}
	_duplicateNodeLabel(e, t) {
		let n = new Set(t.map((e) => e.label).filter(Boolean)), r = 1, i = `${e} copy`;
		for (; n.has(i);) r += 1, i = `${e} copy ${r}`;
		return i;
	}
	_duplicatePoint(e) {
		let t = e.x + 46 > 916 ? e.x - 46 : e.x + 46, n = e.y + 46 > 658 ? e.y - 46 : e.y + 46;
		return {
			x: Math.max(70, Math.min(916, t)),
			y: Math.max(62, Math.min(658, n))
		};
	}
	_updateNode(e, t, n) {
		var r;
		this._patchConfig({ nodes: ((r = e.nodes) == null ? [] : r).map((e) => e.id === t ? {
			...e,
			...n
		} : e) });
	}
	_reorderedNodeIds(e, t, n, r) {
		let i = [...r], a = i.indexOf(e), o = i.indexOf(t);
		if (a < 0 || o < 0 || a === o) return;
		let [s] = i.splice(a, 1), c = a < o ? o - 1 : o;
		return n === "after" && (c += 1), i.splice(c, 0, s), i;
	}
	_commitNodeOrder(e) {
		var t;
		let n = (t = X(this._config).nodes) == null ? [] : t, r = new Map(n.map((e) => [e.id, e])), i = e.map((e) => r.get(e)).filter((e) => !!e), a = n.filter((t) => !e.includes(t.id));
		this._patchConfig({ nodes: [...i, ...a] });
	}
	_handleNodePointerDown(e, t) {
		var n, r, i;
		e.button === 0 && (e.preventDefault(), e.stopPropagation(), this._draggedNode = t, this._dragPointerId = e.pointerId, this._dragInsertSide = void 0, this._dragInsertTarget = void 0, this._dragOverNode = void 0, this._dragPreviewOrder = ((n = this._config.nodes) == null ? [] : n).map((e) => e.id), (r = e.currentTarget) == null || (i = r.setPointerCapture) == null || i.call(r, e.pointerId));
	}
	_clearNodeDragState() {
		this._draggedNode = void 0, this._dragPointerId = void 0, this._dragOverNode = void 0, this._dragInsertTarget = void 0, this._dragInsertSide = void 0, this._dragPreviewOrder = void 0;
	}
	_removeNode(e) {
		let t = X(this._config);
		if (this._selectedNode === e && (this._selectedNode = void 0), this._nodeSectionOpen[e]) {
			let t = { ...this._nodeSectionOpen };
			delete t[e], this._nodeSectionOpen = t;
		}
		this._patchConfig(rn(t, e));
	}
	_handleNodeSectionToggle(e, t, n) {
		var r;
		let i = e.currentTarget;
		i && (this._nodeSectionOpen = {
			...this._nodeSectionOpen,
			[t]: {
				...(r = this._nodeSectionOpen[t]) == null ? {} : r,
				[n]: i.open
			}
		});
	}
	_isNodeSectionOpen(e, t, n, r = {}) {
		var i;
		let a = (i = this._nodeSectionOpen[e.id]) == null ? void 0 : i[t];
		return a === void 0 ? r.forceOpen ? !0 : this._defaultNodeSectionOpen(e, t, n) : a;
	}
	_defaultNodeSectionOpen(e, t, n) {
		switch (t) {
			case "appearance": return !0;
			default: return !1;
		}
	}
	_patchConfig(e) {
		this._config = X({
			...this._config,
			...e
		}), hn(this, this._config);
	}
};
Ln = Jn, Ln.properties = {
	config: { attribute: !1 },
	_config: { state: !0 },
	_dragInsertSide: { state: !0 },
	_dragInsertTarget: { state: !0 },
	_dragPreviewOrder: { state: !0 },
	_dragOverNode: { state: !0 },
	_draggedNode: { state: !0 },
	_selectedNode: { state: !0 },
	hass: { attribute: !1 }
}, Ln.styles = o`
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

    .button-row,
    .two-columns,
    .node-grid,
    .form-grid {
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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
  `, customElements.get("home-flow-card-editor") || customElements.define("home-flow-card-editor", Jn);
//#endregion

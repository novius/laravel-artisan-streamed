function Qe(t, e) {
  const n = /* @__PURE__ */ Object.create(null), i = t.split(",");
  for (let s = 0; s < i.length; s++)
    n[i[s]] = !0;
  return e ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const le = {}, qn = [], qe = () => {
}, zs = () => !1, xp = /^on[^a-z]/, Ln = (t) => xp.test(t), Ll = (t) => t.startsWith("onUpdate:"), ee = Object.assign, Pl = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, kp = Object.prototype.hasOwnProperty, ie = (t, e) => kp.call(t, e), F = Array.isArray, Gn = (t) => gi(t) === "[object Map]", Pn = (t) => gi(t) === "[object Set]", Ja = (t) => gi(t) === "[object Date]", Op = (t) => gi(t) === "[object RegExp]", q = (t) => typeof t == "function", J = (t) => typeof t == "string", Qt = (t) => typeof t == "symbol", ce = (t) => t !== null && typeof t == "object", Il = (t) => ce(t) && q(t.then) && q(t.catch), qh = Object.prototype.toString, gi = (t) => qh.call(t), Mp = (t) => gi(t).slice(8, -1), Gh = (t) => gi(t) === "[object Object]", Bl = (t) => J(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, bn = /* @__PURE__ */ Qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rp = /* @__PURE__ */ Qe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Nr = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Np = /-(\w)/g, Ae = Nr((t) => t.replace(Np, (e, n) => n ? n.toUpperCase() : "")), Dp = /\B([A-Z])/g, st = Nr(
  (t) => t.replace(Dp, "-$1").toLowerCase()
), In = Nr(
  (t) => t.charAt(0).toUpperCase() + t.slice(1)
), Jn = Nr(
  (t) => t ? `on${In(t)}` : ""
), ii = (t, e) => !Object.is(t, e), Xn = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, ir = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, sr = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, rr = (t) => {
  const e = J(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Xa;
const Ro = () => Xa || (Xa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Lp = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console", Pp = /* @__PURE__ */ Qe(Lp);
function cs(t) {
  if (F(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = t[n], s = J(i) ? Jh(i) : cs(i);
      if (s)
        for (const r in s)
          e[r] = s[r];
    }
    return e;
  } else {
    if (J(t))
      return t;
    if (ce(t))
      return t;
  }
}
const Ip = /;(?![^(]*\))/g, Bp = /:([^]+)/, Up = /\/\*[^]*?\*\//g;
function Jh(t) {
  const e = {};
  return t.replace(Up, "").split(Ip).forEach((n) => {
    if (n) {
      const i = n.split(Bp);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function hs(t) {
  let e = "";
  if (J(t))
    e = t;
  else if (F(t))
    for (let n = 0; n < t.length; n++) {
      const i = hs(t[n]);
      i && (e += i + " ");
    }
  else if (ce(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
function Fp(t) {
  if (!t)
    return null;
  let { class: e, style: n } = t;
  return e && !J(e) && (t.class = hs(e)), n && (t.style = cs(n)), t;
}
const Hp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Vp = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Wp = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", $p = /* @__PURE__ */ Qe(Hp), jp = /* @__PURE__ */ Qe(Vp), Kp = /* @__PURE__ */ Qe(Wp), zp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qp = /* @__PURE__ */ Qe(zp);
function Xh(t) {
  return !!t || t === "";
}
function Gp(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let i = 0; n && i < t.length; i++)
    n = en(t[i], e[i]);
  return n;
}
function en(t, e) {
  if (t === e)
    return !0;
  let n = Ja(t), i = Ja(e);
  if (n || i)
    return n && i ? t.getTime() === e.getTime() : !1;
  if (n = Qt(t), i = Qt(e), n || i)
    return t === e;
  if (n = F(t), i = F(e), n || i)
    return n && i ? Gp(t, e) : !1;
  if (n = ce(t), i = ce(e), n || i) {
    if (!n || !i)
      return !1;
    const s = Object.keys(t).length, r = Object.keys(e).length;
    if (s !== r)
      return !1;
    for (const o in t) {
      const l = t.hasOwnProperty(o), a = e.hasOwnProperty(o);
      if (l && !a || !l && a || !en(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function Dr(t, e) {
  return t.findIndex((n) => en(n, e));
}
const Jp = (t) => J(t) ? t : t == null ? "" : F(t) || ce(t) && (t.toString === qh || !q(t.toString)) ? JSON.stringify(t, Yh, 2) : String(t), Yh = (t, e) => e && e.__v_isRef ? Yh(t, e.value) : Gn(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce((n, [i, s]) => (n[`${i} =>`] = s, n), {})
} : Pn(e) ? {
  [`Set(${e.size})`]: [...e.values()]
} : ce(e) && !F(e) && !Gh(e) ? String(e) : e;
let tt;
class Ul {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = tt, !e && tt && (this.index = (tt.scopes || (tt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = tt;
      try {
        return tt = this, e();
      } finally {
        tt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    tt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    tt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Xp(t) {
  return new Ul(t);
}
function Zh(t, e = tt) {
  e && e.active && e.effects.push(t);
}
function Qh() {
  return tt;
}
function Yp(t) {
  tt && tt.cleanups.push(t);
}
const Fl = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, ef = (t) => (t.w & tn) > 0, tf = (t) => (t.n & tn) > 0, Zp = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= tn;
}, Qp = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      ef(s) && !tf(s) ? s.delete(t) : e[n++] = s, s.w &= ~tn, s.n &= ~tn;
    }
    e.length = n;
  }
}, or = /* @__PURE__ */ new WeakMap();
let xi = 0, tn = 1;
const No = 30;
let bt;
const vn = Symbol(""), Do = Symbol("");
class fs {
  constructor(e, n = null, i) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Zh(this, i);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = bt, n = Xt;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = bt, bt = this, Xt = !0, tn = 1 << ++xi, xi <= No ? Zp(this) : Ya(this), this.fn();
    } finally {
      xi <= No && Qp(this), tn = 1 << --xi, bt = this.parent, Xt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    bt === this ? this.deferStop = !0 : this.active && (Ya(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ya(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
function eg(t, e) {
  t.effect && (t = t.effect.fn);
  const n = new fs(t);
  e && (ee(n, e), e.scope && Zh(n, e.scope)), (!e || !e.lazy) && n.run();
  const i = n.run.bind(n);
  return i.effect = n, i;
}
function tg(t) {
  t.effect.stop();
}
let Xt = !0;
const nf = [];
function mi() {
  nf.push(Xt), Xt = !1;
}
function yi() {
  const t = nf.pop();
  Xt = t === void 0 ? !0 : t;
}
function Ze(t, e, n) {
  if (Xt && bt) {
    let i = or.get(t);
    i || or.set(t, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || i.set(n, s = Fl()), sf(s);
  }
}
function sf(t, e) {
  let n = !1;
  xi <= No ? tf(t) || (t.n |= tn, n = !ef(t)) : n = !t.has(bt), n && (t.add(bt), bt.deps.push(t));
}
function Ht(t, e, n, i, s, r) {
  const o = or.get(t);
  if (!o)
    return;
  let l = [];
  if (e === "clear")
    l = [...o.values()];
  else if (n === "length" && F(t)) {
    const a = Number(i);
    o.forEach((c, h) => {
      (h === "length" || h >= a) && l.push(c);
    });
  } else
    switch (n !== void 0 && l.push(o.get(n)), e) {
      case "add":
        F(t) ? Bl(n) && l.push(o.get("length")) : (l.push(o.get(vn)), Gn(t) && l.push(o.get(Do)));
        break;
      case "delete":
        F(t) || (l.push(o.get(vn)), Gn(t) && l.push(o.get(Do)));
        break;
      case "set":
        Gn(t) && l.push(o.get(vn));
        break;
    }
  if (l.length === 1)
    l[0] && Lo(l[0]);
  else {
    const a = [];
    for (const c of l)
      c && a.push(...c);
    Lo(Fl(a));
  }
}
function Lo(t, e) {
  const n = F(t) ? t : [...t];
  for (const i of n)
    i.computed && Za(i);
  for (const i of n)
    i.computed || Za(i);
}
function Za(t, e) {
  (t !== bt || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
function ng(t, e) {
  var n;
  return (n = or.get(t)) == null ? void 0 : n.get(e);
}
const ig = /* @__PURE__ */ Qe("__proto__,__v_isRef,__isVue"), rf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Qt)
), sg = /* @__PURE__ */ Lr(), rg = /* @__PURE__ */ Lr(!1, !0), og = /* @__PURE__ */ Lr(!0), lg = /* @__PURE__ */ Lr(!0, !0), Qa = /* @__PURE__ */ ag();
function ag() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const i = te(this);
      for (let r = 0, o = this.length; r < o; r++)
        Ze(i, "get", r + "");
      const s = i[e](...n);
      return s === -1 || s === !1 ? i[e](...n.map(te)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      mi();
      const i = te(this)[e].apply(this, n);
      return yi(), i;
    };
  }), t;
}
function cg(t) {
  const e = te(this);
  return Ze(e, "has", t), e.hasOwnProperty(t);
}
function Lr(t = !1, e = !1) {
  return function(i, s, r) {
    if (s === "__v_isReactive")
      return !t;
    if (s === "__v_isReadonly")
      return t;
    if (s === "__v_isShallow")
      return e;
    if (s === "__v_raw" && r === (t ? e ? uf : ff : e ? hf : cf).get(i))
      return i;
    const o = F(i);
    if (!t) {
      if (o && ie(Qa, s))
        return Reflect.get(Qa, s, r);
      if (s === "hasOwnProperty")
        return cg;
    }
    const l = Reflect.get(i, s, r);
    return (Qt(s) ? rf.has(s) : ig(s)) || (t || Ze(i, "get", s), e) ? l : xe(l) ? o && Bl(s) ? l : l.value : ce(l) ? t ? Vl(l) : Br(l) : l;
  };
}
const hg = /* @__PURE__ */ of(), fg = /* @__PURE__ */ of(!0);
function of(t = !1) {
  return function(n, i, s, r) {
    let o = n[i];
    if (xn(o) && xe(o) && !xe(s))
      return !1;
    if (!t && (!$i(s) && !xn(s) && (o = te(o), s = te(s)), !F(n) && xe(o) && !xe(s)))
      return o.value = s, !0;
    const l = F(n) && Bl(i) ? Number(i) < n.length : ie(n, i), a = Reflect.set(n, i, s, r);
    return n === te(r) && (l ? ii(s, o) && Ht(n, "set", i, s) : Ht(n, "add", i, s)), a;
  };
}
function ug(t, e) {
  const n = ie(t, e);
  t[e];
  const i = Reflect.deleteProperty(t, e);
  return i && n && Ht(t, "delete", e, void 0), i;
}
function dg(t, e) {
  const n = Reflect.has(t, e);
  return (!Qt(e) || !rf.has(e)) && Ze(t, "has", e), n;
}
function pg(t) {
  return Ze(t, "iterate", F(t) ? "length" : vn), Reflect.ownKeys(t);
}
const lf = {
  get: sg,
  set: hg,
  deleteProperty: ug,
  has: dg,
  ownKeys: pg
}, af = {
  get: og,
  set(t, e) {
    return !0;
  },
  deleteProperty(t, e) {
    return !0;
  }
}, gg = /* @__PURE__ */ ee(
  {},
  lf,
  {
    get: rg,
    set: fg
  }
), mg = /* @__PURE__ */ ee(
  {},
  af,
  {
    get: lg
  }
), Hl = (t) => t, Pr = (t) => Reflect.getPrototypeOf(t);
function Es(t, e, n = !1, i = !1) {
  t = t.__v_raw;
  const s = te(t), r = te(e);
  n || (e !== r && Ze(s, "get", e), Ze(s, "get", r));
  const { has: o } = Pr(s), l = i ? Hl : n ? jl : ji;
  if (o.call(s, e))
    return l(t.get(e));
  if (o.call(s, r))
    return l(t.get(r));
  t !== s && t.get(e);
}
function Cs(t, e = !1) {
  const n = this.__v_raw, i = te(n), s = te(t);
  return e || (t !== s && Ze(i, "has", t), Ze(i, "has", s)), t === s ? n.has(t) : n.has(t) || n.has(s);
}
function Ts(t, e = !1) {
  return t = t.__v_raw, !e && Ze(te(t), "iterate", vn), Reflect.get(t, "size", t);
}
function ec(t) {
  t = te(t);
  const e = te(this);
  return Pr(e).has.call(e, t) || (e.add(t), Ht(e, "add", t, t)), this;
}
function tc(t, e) {
  e = te(e);
  const n = te(this), { has: i, get: s } = Pr(n);
  let r = i.call(n, t);
  r || (t = te(t), r = i.call(n, t));
  const o = s.call(n, t);
  return n.set(t, e), r ? ii(e, o) && Ht(n, "set", t, e) : Ht(n, "add", t, e), this;
}
function nc(t) {
  const e = te(this), { has: n, get: i } = Pr(e);
  let s = n.call(e, t);
  s || (t = te(t), s = n.call(e, t)), i && i.call(e, t);
  const r = e.delete(t);
  return s && Ht(e, "delete", t, void 0), r;
}
function ic() {
  const t = te(this), e = t.size !== 0, n = t.clear();
  return e && Ht(t, "clear", void 0, void 0), n;
}
function As(t, e) {
  return function(i, s) {
    const r = this, o = r.__v_raw, l = te(o), a = e ? Hl : t ? jl : ji;
    return !t && Ze(l, "iterate", vn), o.forEach((c, h) => i.call(s, a(c), a(h), r));
  };
}
function xs(t, e, n) {
  return function(...i) {
    const s = this.__v_raw, r = te(s), o = Gn(r), l = t === "entries" || t === Symbol.iterator && o, a = t === "keys" && o, c = s[t](...i), h = n ? Hl : e ? jl : ji;
    return !e && Ze(
      r,
      "iterate",
      a ? Do : vn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: u } = c.next();
        return u ? { value: f, done: u } : {
          value: l ? [h(f[0]), h(f[1])] : h(f),
          done: u
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function jt(t) {
  return function(...e) {
    return t === "delete" ? !1 : this;
  };
}
function yg() {
  const t = {
    get(r) {
      return Es(this, r);
    },
    get size() {
      return Ts(this);
    },
    has: Cs,
    add: ec,
    set: tc,
    delete: nc,
    clear: ic,
    forEach: As(!1, !1)
  }, e = {
    get(r) {
      return Es(this, r, !1, !0);
    },
    get size() {
      return Ts(this);
    },
    has: Cs,
    add: ec,
    set: tc,
    delete: nc,
    clear: ic,
    forEach: As(!1, !0)
  }, n = {
    get(r) {
      return Es(this, r, !0);
    },
    get size() {
      return Ts(this, !0);
    },
    has(r) {
      return Cs.call(this, r, !0);
    },
    add: jt("add"),
    set: jt("set"),
    delete: jt("delete"),
    clear: jt("clear"),
    forEach: As(!0, !1)
  }, i = {
    get(r) {
      return Es(this, r, !0, !0);
    },
    get size() {
      return Ts(this, !0);
    },
    has(r) {
      return Cs.call(this, r, !0);
    },
    add: jt("add"),
    set: jt("set"),
    delete: jt("delete"),
    clear: jt("clear"),
    forEach: As(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    t[r] = xs(
      r,
      !1,
      !1
    ), n[r] = xs(
      r,
      !0,
      !1
    ), e[r] = xs(
      r,
      !1,
      !0
    ), i[r] = xs(
      r,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    i
  ];
}
const [
  bg,
  vg,
  wg,
  Sg
] = /* @__PURE__ */ yg();
function Ir(t, e) {
  const n = e ? t ? Sg : wg : t ? vg : bg;
  return (i, s, r) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? i : Reflect.get(
    ie(n, s) && s in i ? n : i,
    s,
    r
  );
}
const _g = {
  get: /* @__PURE__ */ Ir(!1, !1)
}, Eg = {
  get: /* @__PURE__ */ Ir(!1, !0)
}, Cg = {
  get: /* @__PURE__ */ Ir(!0, !1)
}, Tg = {
  get: /* @__PURE__ */ Ir(!0, !0)
}, cf = /* @__PURE__ */ new WeakMap(), hf = /* @__PURE__ */ new WeakMap(), ff = /* @__PURE__ */ new WeakMap(), uf = /* @__PURE__ */ new WeakMap();
function Ag(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function xg(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Ag(Mp(t));
}
function Br(t) {
  return xn(t) ? t : Ur(
    t,
    !1,
    lf,
    _g,
    cf
  );
}
function df(t) {
  return Ur(
    t,
    !1,
    gg,
    Eg,
    hf
  );
}
function Vl(t) {
  return Ur(
    t,
    !0,
    af,
    Cg,
    ff
  );
}
function kg(t) {
  return Ur(
    t,
    !0,
    mg,
    Tg,
    uf
  );
}
function Ur(t, e, n, i, s) {
  if (!ce(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const r = s.get(t);
  if (r)
    return r;
  const o = xg(t);
  if (o === 0)
    return t;
  const l = new Proxy(
    t,
    o === 2 ? i : n
  );
  return s.set(t, l), l;
}
function wn(t) {
  return xn(t) ? wn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function xn(t) {
  return !!(t && t.__v_isReadonly);
}
function $i(t) {
  return !!(t && t.__v_isShallow);
}
function Wl(t) {
  return wn(t) || xn(t);
}
function te(t) {
  const e = t && t.__v_raw;
  return e ? te(e) : t;
}
function $l(t) {
  return ir(t, "__v_skip", !0), t;
}
const ji = (t) => ce(t) ? Br(t) : t, jl = (t) => ce(t) ? Vl(t) : t;
function Kl(t) {
  Xt && bt && (t = te(t), sf(t.dep || (t.dep = Fl())));
}
function Fr(t, e) {
  t = te(t);
  const n = t.dep;
  n && Lo(n);
}
function xe(t) {
  return !!(t && t.__v_isRef === !0);
}
function Bt(t) {
  return pf(t, !1);
}
function Og(t) {
  return pf(t, !0);
}
function pf(t, e) {
  return xe(t) ? t : new Mg(t, e);
}
class Mg {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : te(e), this._value = n ? e : ji(e);
  }
  get value() {
    return Kl(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || $i(e) || xn(e);
    e = n ? e : te(e), ii(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : ji(e), Fr(this));
  }
}
function Rg(t) {
  Fr(t);
}
function zl(t) {
  return xe(t) ? t.value : t;
}
function Ng(t) {
  return q(t) ? t() : zl(t);
}
const Dg = {
  get: (t, e, n) => zl(Reflect.get(t, e, n)),
  set: (t, e, n, i) => {
    const s = t[e];
    return xe(s) && !xe(n) ? (s.value = n, !0) : Reflect.set(t, e, n, i);
  }
};
function ql(t) {
  return wn(t) ? t : new Proxy(t, Dg);
}
class Lg {
  constructor(e) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: i } = e(
      () => Kl(this),
      () => Fr(this)
    );
    this._get = n, this._set = i;
  }
  get value() {
    return this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function Pg(t) {
  return new Lg(t);
}
function Ig(t) {
  const e = F(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = gf(t, n);
  return e;
}
class Bg {
  constructor(e, n, i) {
    this._object = e, this._key = n, this._defaultValue = i, this.__v_isRef = !0;
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return ng(te(this._object), this._key);
  }
}
class Ug {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Fg(t, e, n) {
  return xe(t) ? t : q(t) ? new Ug(t) : ce(t) && arguments.length > 1 ? gf(t, e, n) : Bt(t);
}
function gf(t, e, n) {
  const i = t[e];
  return xe(i) ? i : new Bg(
    t,
    e,
    n
  );
}
class Hg {
  constructor(e, n, i, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new fs(e, () => {
      this._dirty || (this._dirty = !0, Fr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = i;
  }
  get value() {
    const e = te(this);
    return Kl(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function Vg(t, e, n = !1) {
  let i, s;
  const r = q(t);
  return r ? (i = t, s = qe) : (i = t.get, s = t.set), new Hg(i, s, r || !s, n);
}
function Wg(t, ...e) {
}
function $g(t, e) {
}
function Ut(t, e, n, i) {
  let s;
  try {
    s = i ? t(...i) : t();
  } catch (r) {
    Bn(r, e, n);
  }
  return s;
}
function lt(t, e, n, i) {
  if (q(t)) {
    const r = Ut(t, e, n, i);
    return r && Il(r) && r.catch((o) => {
      Bn(o, e, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < t.length; r++)
    s.push(lt(t[r], e, n, i));
  return s;
}
function Bn(t, e, n, i = !0) {
  const s = e ? e.vnode : null;
  if (e) {
    let r = e.parent;
    const o = e.proxy, l = n;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](t, o, l) === !1)
            return;
      }
      r = r.parent;
    }
    const a = e.appContext.config.errorHandler;
    if (a) {
      Ut(
        a,
        null,
        10,
        [t, o, l]
      );
      return;
    }
  }
  jg(t, n, s, i);
}
function jg(t, e, n, i = !0) {
  console.error(t);
}
let Ki = !1, Po = !1;
const Ue = [];
let Tt = 0;
const Yn = [];
let Dt = null, fn = 0;
const mf = /* @__PURE__ */ Promise.resolve();
let Gl = null;
function Jl(t) {
  const e = Gl || mf;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Kg(t) {
  let e = Tt + 1, n = Ue.length;
  for (; e < n; ) {
    const i = e + n >>> 1;
    zi(Ue[i]) < t ? e = i + 1 : n = i;
  }
  return e;
}
function Hr(t) {
  (!Ue.length || !Ue.includes(
    t,
    Ki && t.allowRecurse ? Tt + 1 : Tt
  )) && (t.id == null ? Ue.push(t) : Ue.splice(Kg(t.id), 0, t), yf());
}
function yf() {
  !Ki && !Po && (Po = !0, Gl = mf.then(bf));
}
function zg(t) {
  const e = Ue.indexOf(t);
  e > Tt && Ue.splice(e, 1);
}
function Xl(t) {
  F(t) ? Yn.push(...t) : (!Dt || !Dt.includes(
    t,
    t.allowRecurse ? fn + 1 : fn
  )) && Yn.push(t), yf();
}
function sc(t, e = Ki ? Tt + 1 : 0) {
  for (; e < Ue.length; e++) {
    const n = Ue[e];
    n && n.pre && (Ue.splice(e, 1), e--, n());
  }
}
function lr(t) {
  if (Yn.length) {
    const e = [...new Set(Yn)];
    if (Yn.length = 0, Dt) {
      Dt.push(...e);
      return;
    }
    for (Dt = e, Dt.sort((n, i) => zi(n) - zi(i)), fn = 0; fn < Dt.length; fn++)
      Dt[fn]();
    Dt = null, fn = 0;
  }
}
const zi = (t) => t.id == null ? 1 / 0 : t.id, qg = (t, e) => {
  const n = zi(t) - zi(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function bf(t) {
  Po = !1, Ki = !0, Ue.sort(qg);
  const e = qe;
  try {
    for (Tt = 0; Tt < Ue.length; Tt++) {
      const n = Ue[Tt];
      n && n.active !== !1 && Ut(n, null, 14);
    }
  } finally {
    Tt = 0, Ue.length = 0, lr(), Ki = !1, Gl = null, (Ue.length || Yn.length) && bf();
  }
}
let $n, ks = [];
function vf(t, e) {
  var n, i;
  $n = t, $n ? ($n.enabled = !0, ks.forEach(({ event: s, args: r }) => $n.emit(s, ...r)), ks = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((i = (n = window.navigator) == null ? void 0 : n.userAgent) != null && i.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    vf(r, e);
  }), setTimeout(() => {
    $n || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ks = []);
  }, 3e3)) : ks = [];
}
function Gg(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const i = t.vnode.props || le;
  let s = n;
  const r = e.startsWith("update:"), o = r && e.slice(7);
  if (o && o in i) {
    const h = `${o === "modelValue" ? "model" : o}Modifiers`, { number: f, trim: u } = i[h] || le;
    u && (s = n.map((d) => J(d) ? d.trim() : d)), f && (s = n.map(sr));
  }
  let l, a = i[l = Jn(e)] || // also try camelCase event handler (#2249)
  i[l = Jn(Ae(e))];
  !a && r && (a = i[l = Jn(st(e))]), a && lt(
    a,
    t,
    6,
    s
  );
  const c = i[l + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[l])
      return;
    t.emitted[l] = !0, lt(
      c,
      t,
      6,
      s
    );
  }
}
function wf(t, e, n = !1) {
  const i = e.emitsCache, s = i.get(t);
  if (s !== void 0)
    return s;
  const r = t.emits;
  let o = {}, l = !1;
  if (!q(t)) {
    const a = (c) => {
      const h = wf(c, e, !0);
      h && (l = !0, ee(o, h));
    };
    !n && e.mixins.length && e.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a);
  }
  return !r && !l ? (ce(t) && i.set(t, null), null) : (F(r) ? r.forEach((a) => o[a] = null) : ee(o, r), ce(t) && i.set(t, o), o);
}
function Vr(t, e) {
  return !t || !Ln(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ie(t, e[0].toLowerCase() + e.slice(1)) || ie(t, st(e)) || ie(t, e));
}
let Re = null, Wr = null;
function qi(t) {
  const e = Re;
  return Re = t, Wr = t && t.type.__scopeId || null, e;
}
function Jg(t) {
  Wr = t;
}
function Xg() {
  Wr = null;
}
const Yg = (t) => Yl;
function Yl(t, e = Re, n) {
  if (!e || t._n)
    return t;
  const i = (...s) => {
    i._d && Wo(-1);
    const r = qi(e);
    let o;
    try {
      o = t(...s);
    } finally {
      qi(r), i._d && Wo(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function qs(t) {
  const {
    type: e,
    vnode: n,
    proxy: i,
    withProxy: s,
    props: r,
    propsOptions: [o],
    slots: l,
    attrs: a,
    emit: c,
    render: h,
    renderCache: f,
    data: u,
    setupState: d,
    ctx: p,
    inheritAttrs: w
  } = t;
  let b, m;
  const y = qi(t);
  try {
    if (n.shapeFlag & 4) {
      const v = s || i;
      b = it(
        h.call(
          v,
          v,
          f,
          r,
          d,
          u,
          p
        )
      ), m = a;
    } else {
      const v = e;
      b = it(
        v.length > 1 ? v(
          r,
          { attrs: a, slots: l, emit: c }
        ) : v(
          r,
          null
          /* we know it doesn't need it */
        )
      ), m = e.props ? a : Qg(a);
    }
  } catch (v) {
    Ii.length = 0, Bn(v, t, 1), b = ge(We);
  }
  let E = b;
  if (m && w !== !1) {
    const v = Object.keys(m), { shapeFlag: T } = E;
    v.length && T & 7 && (o && v.some(Ll) && (m = em(
      m,
      o
    )), E = kt(E, m));
  }
  return n.dirs && (E = kt(E), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && (E.transition = n.transition), b = E, qi(y), b;
}
function Zg(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (nn(i)) {
      if (i.type !== We || i.children === "v-if") {
        if (e)
          return;
        e = i;
      }
    } else
      return;
  }
  return e;
}
const Qg = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || Ln(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, em = (t, e) => {
  const n = {};
  for (const i in t)
    (!Ll(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
  return n;
};
function tm(t, e, n) {
  const { props: i, children: s, component: r } = t, { props: o, children: l, patchFlag: a } = e, c = r.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return i ? rc(i, o, c) : !!o;
    if (a & 8) {
      const h = e.dynamicProps;
      for (let f = 0; f < h.length; f++) {
        const u = h[f];
        if (o[u] !== i[u] && !Vr(c, u))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? rc(i, o, c) : !0 : !!o;
  return !1;
}
function rc(t, e, n) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (e[r] !== t[r] && !Vr(n, r))
      return !0;
  }
  return !1;
}
function Zl({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const Sf = (t) => t.__isSuspense, nm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(t, e, n, i, s, r, o, l, a, c) {
    t == null ? sm(
      e,
      n,
      i,
      s,
      r,
      o,
      l,
      a,
      c
    ) : rm(
      t,
      e,
      n,
      i,
      s,
      o,
      l,
      a,
      c
    );
  },
  hydrate: om,
  create: Ql,
  normalize: lm
}, im = nm;
function Gi(t, e) {
  const n = t.props && t.props[e];
  q(n) && n();
}
function sm(t, e, n, i, s, r, o, l, a) {
  const {
    p: c,
    o: { createElement: h }
  } = a, f = h("div"), u = t.suspense = Ql(
    t,
    s,
    i,
    e,
    f,
    n,
    r,
    o,
    l,
    a
  );
  c(
    null,
    u.pendingBranch = t.ssContent,
    f,
    null,
    i,
    u,
    r,
    o
  ), u.deps > 0 ? (Gi(t, "onPending"), Gi(t, "onFallback"), c(
    null,
    t.ssFallback,
    e,
    n,
    i,
    null,
    // fallback tree will not have suspense context
    r,
    o
  ), Zn(u, t.ssFallback)) : u.resolve(!1, !0);
}
function rm(t, e, n, i, s, r, o, l, { p: a, um: c, o: { createElement: h } }) {
  const f = e.suspense = t.suspense;
  f.vnode = e, e.el = t.el;
  const u = e.ssContent, d = e.ssFallback, { activeBranch: p, pendingBranch: w, isInFallback: b, isHydrating: m } = f;
  if (w)
    f.pendingBranch = u, vt(u, w) ? (a(
      w,
      u,
      f.hiddenContainer,
      null,
      s,
      f,
      r,
      o,
      l
    ), f.deps <= 0 ? f.resolve() : b && (a(
      p,
      d,
      n,
      i,
      s,
      null,
      // fallback tree will not have suspense context
      r,
      o,
      l
    ), Zn(f, d))) : (f.pendingId++, m ? (f.isHydrating = !1, f.activeBranch = w) : c(w, s, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = h("div"), b ? (a(
      null,
      u,
      f.hiddenContainer,
      null,
      s,
      f,
      r,
      o,
      l
    ), f.deps <= 0 ? f.resolve() : (a(
      p,
      d,
      n,
      i,
      s,
      null,
      // fallback tree will not have suspense context
      r,
      o,
      l
    ), Zn(f, d))) : p && vt(u, p) ? (a(
      p,
      u,
      n,
      i,
      s,
      f,
      r,
      o,
      l
    ), f.resolve(!0)) : (a(
      null,
      u,
      f.hiddenContainer,
      null,
      s,
      f,
      r,
      o,
      l
    ), f.deps <= 0 && f.resolve()));
  else if (p && vt(u, p))
    a(
      p,
      u,
      n,
      i,
      s,
      f,
      r,
      o,
      l
    ), Zn(f, u);
  else if (Gi(e, "onPending"), f.pendingBranch = u, f.pendingId++, a(
    null,
    u,
    f.hiddenContainer,
    null,
    s,
    f,
    r,
    o,
    l
  ), f.deps <= 0)
    f.resolve();
  else {
    const { timeout: y, pendingId: E } = f;
    y > 0 ? setTimeout(() => {
      f.pendingId === E && f.fallback(d);
    }, y) : y === 0 && f.fallback(d);
  }
}
function Ql(t, e, n, i, s, r, o, l, a, c, h = !1) {
  const {
    p: f,
    m: u,
    um: d,
    n: p,
    o: { parentNode: w, remove: b }
  } = c;
  let m;
  const y = am(t);
  y && e != null && e.pendingBranch && (m = e.pendingId, e.deps++);
  const E = t.props ? rr(t.props.timeout) : void 0, v = {
    vnode: t,
    parent: e,
    parentComponent: n,
    isSVG: o,
    container: i,
    hiddenContainer: s,
    anchor: r,
    deps: 0,
    pendingId: 0,
    timeout: typeof E == "number" ? E : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: h,
    isUnmounted: !1,
    effects: [],
    resolve(T = !1, B = !1) {
      const {
        vnode: O,
        activeBranch: _,
        pendingBranch: R,
        pendingId: D,
        effects: N,
        parentComponent: M,
        container: H
      } = v;
      if (v.isHydrating)
        v.isHydrating = !1;
      else if (!T) {
        const Z = _ && R.transition && R.transition.mode === "out-in";
        Z && (_.transition.afterLeave = () => {
          D === v.pendingId && u(R, H, re, 0);
        });
        let { anchor: re } = v;
        _ && (re = p(_), d(_, M, v, !0)), Z || u(R, H, re, 0);
      }
      Zn(v, R), v.pendingBranch = null, v.isInFallback = !1;
      let I = v.parent, ne = !1;
      for (; I; ) {
        if (I.pendingBranch) {
          I.effects.push(...N), ne = !0;
          break;
        }
        I = I.parent;
      }
      ne || Xl(N), v.effects = [], y && e && e.pendingBranch && m === e.pendingId && (e.deps--, e.deps === 0 && !B && e.resolve()), Gi(O, "onResolve");
    },
    fallback(T) {
      if (!v.pendingBranch)
        return;
      const { vnode: B, activeBranch: O, parentComponent: _, container: R, isSVG: D } = v;
      Gi(B, "onFallback");
      const N = p(O), M = () => {
        v.isInFallback && (f(
          null,
          T,
          R,
          N,
          _,
          null,
          // fallback tree will not have suspense context
          D,
          l,
          a
        ), Zn(v, T));
      }, H = T.transition && T.transition.mode === "out-in";
      H && (O.transition.afterLeave = M), v.isInFallback = !0, d(
        O,
        _,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), H || M();
    },
    move(T, B, O) {
      v.activeBranch && u(v.activeBranch, T, B, O), v.container = T;
    },
    next() {
      return v.activeBranch && p(v.activeBranch);
    },
    registerDep(T, B) {
      const O = !!v.pendingBranch;
      O && v.deps++;
      const _ = T.vnode.el;
      T.asyncDep.catch((R) => {
        Bn(R, T, 0);
      }).then((R) => {
        if (T.isUnmounted || v.isUnmounted || v.pendingId !== T.suspenseId)
          return;
        T.asyncResolved = !0;
        const { vnode: D } = T;
        $o(T, R, !1), _ && (D.el = _);
        const N = !_ && T.subTree.el;
        B(
          T,
          D,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          w(_ || T.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          _ ? null : p(T.subTree),
          v,
          o,
          a
        ), N && b(N), Zl(T, D.el), O && --v.deps === 0 && v.resolve();
      });
    },
    unmount(T, B) {
      v.isUnmounted = !0, v.activeBranch && d(
        v.activeBranch,
        n,
        T,
        B
      ), v.pendingBranch && d(
        v.pendingBranch,
        n,
        T,
        B
      );
    }
  };
  return v;
}
function om(t, e, n, i, s, r, o, l, a) {
  const c = e.suspense = Ql(
    e,
    i,
    n,
    t.parentNode,
    document.createElement("div"),
    null,
    s,
    r,
    o,
    l,
    !0
    /* hydrating */
  ), h = a(
    t,
    c.pendingBranch = e.ssContent,
    n,
    c,
    r,
    o
  );
  return c.deps === 0 && c.resolve(!1, !0), h;
}
function lm(t) {
  const { shapeFlag: e, children: n } = t, i = e & 32;
  t.ssContent = oc(
    i ? n.default : n
  ), t.ssFallback = i ? oc(n.fallback) : ge(We);
}
function oc(t) {
  let e;
  if (q(t)) {
    const n = Mn && t._c;
    n && (t._d = !1, ps()), t = t(), n && (t._d = !0, e = Xe, Yf());
  }
  return F(t) && (t = Zg(t)), t = it(t), e && !t.dynamicChildren && (t.dynamicChildren = e.filter((n) => n !== t)), t;
}
function _f(t, e) {
  e && e.pendingBranch ? F(t) ? e.effects.push(...t) : e.effects.push(t) : Xl(t);
}
function Zn(t, e) {
  t.activeBranch = e;
  const { vnode: n, parentComponent: i } = t, s = n.el = e.el;
  i && i.subTree === n && (i.vnode.el = s, Zl(i, s));
}
function am(t) {
  var e;
  return ((e = t.props) == null ? void 0 : e.suspensible) != null && t.props.suspensible !== !1;
}
function cm(t, e) {
  return us(t, null, e);
}
function Ef(t, e) {
  return us(
    t,
    null,
    { flush: "post" }
  );
}
function hm(t, e) {
  return us(
    t,
    null,
    { flush: "sync" }
  );
}
const Os = {};
function Sn(t, e, n) {
  return us(t, e, n);
}
function us(t, e, { immediate: n, deep: i, flush: s, onTrack: r, onTrigger: o } = le) {
  var l;
  const a = Qh() === ((l = Ce) == null ? void 0 : l.scope) ? Ce : null;
  let c, h = !1, f = !1;
  if (xe(t) ? (c = () => t.value, h = $i(t)) : wn(t) ? (c = () => t, i = !0) : F(t) ? (f = !0, h = t.some((v) => wn(v) || $i(v)), c = () => t.map((v) => {
    if (xe(v))
      return v.value;
    if (wn(v))
      return pn(v);
    if (q(v))
      return Ut(v, a, 2);
  })) : q(t) ? e ? c = () => Ut(t, a, 2) : c = () => {
    if (!(a && a.isUnmounted))
      return u && u(), lt(
        t,
        a,
        3,
        [d]
      );
  } : c = qe, e && i) {
    const v = c;
    c = () => pn(v());
  }
  let u, d = (v) => {
    u = y.onStop = () => {
      Ut(v, a, 4);
    };
  }, p;
  if (ri)
    if (d = qe, e ? n && lt(e, a, 3, [
      c(),
      f ? [] : void 0,
      d
    ]) : c(), s === "sync") {
      const v = uu();
      p = v.__watcherHandles || (v.__watcherHandles = []);
    } else
      return qe;
  let w = f ? new Array(t.length).fill(Os) : Os;
  const b = () => {
    if (y.active)
      if (e) {
        const v = y.run();
        (i || h || (f ? v.some(
          (T, B) => ii(T, w[B])
        ) : ii(v, w))) && (u && u(), lt(e, a, 3, [
          v,
          // pass undefined as the old value when it's changed for the first time
          w === Os ? void 0 : f && w[0] === Os ? [] : w,
          d
        ]), w = v);
      } else
        y.run();
  };
  b.allowRecurse = !!e;
  let m;
  s === "sync" ? m = b : s === "post" ? m = () => Ne(b, a && a.suspense) : (b.pre = !0, a && (b.id = a.uid), m = () => Hr(b));
  const y = new fs(c, m);
  e ? n ? b() : w = y.run() : s === "post" ? Ne(
    y.run.bind(y),
    a && a.suspense
  ) : y.run();
  const E = () => {
    y.stop(), a && a.scope && Pl(a.scope.effects, y);
  };
  return p && p.push(E), E;
}
function fm(t, e, n) {
  const i = this.proxy, s = J(t) ? t.includes(".") ? Cf(i, t) : () => i[t] : t.bind(i, i);
  let r;
  q(e) ? r = e : (r = e.handler, n = e);
  const o = Ce;
  sn(this);
  const l = us(s, r.bind(i), n);
  return o ? sn(o) : Yt(), l;
}
function Cf(t, e) {
  const n = e.split(".");
  return () => {
    let i = t;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
function pn(t, e) {
  if (!ce(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), xe(t))
    pn(t.value, e);
  else if (F(t))
    for (let n = 0; n < t.length; n++)
      pn(t[n], e);
  else if (Pn(t) || Gn(t))
    t.forEach((n) => {
      pn(n, e);
    });
  else if (Gh(t))
    for (const n in t)
      pn(t[n], e);
  return t;
}
function um(t, e) {
  const n = Re;
  if (n === null)
    return t;
  const i = Xr(n) || n.proxy, s = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [o, l, a, c = le] = e[r];
    o && (q(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && pn(l), s.push({
      dir: o,
      instance: i,
      value: l,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return t;
}
function Ct(t, e, n, i) {
  const s = t.dirs, r = e && e.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[i];
    a && (mi(), lt(a, n, 8, [
      t.el,
      l,
      t,
      e
    ]), yi());
  }
}
function ea() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return bi(() => {
    t.isMounted = !0;
  }), zr(() => {
    t.isUnmounting = !0;
  }), t;
}
const ht = [Function, Array], ta = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ht,
  onEnter: ht,
  onAfterEnter: ht,
  onEnterCancelled: ht,
  // leave
  onBeforeLeave: ht,
  onLeave: ht,
  onAfterLeave: ht,
  onLeaveCancelled: ht,
  // appear
  onBeforeAppear: ht,
  onAppear: ht,
  onAfterAppear: ht,
  onAppearCancelled: ht
}, dm = {
  name: "BaseTransition",
  props: ta,
  setup(t, { slots: e }) {
    const n = $t(), i = ea();
    let s;
    return () => {
      const r = e.default && $r(e.default(), !0);
      if (!r || !r.length)
        return;
      let o = r[0];
      if (r.length > 1) {
        for (const w of r)
          if (w.type !== We) {
            o = w;
            break;
          }
      }
      const l = te(t), { mode: a } = l;
      if (i.isLeaving)
        return ao(o);
      const c = lc(o);
      if (!c)
        return ao(o);
      const h = si(
        c,
        l,
        i,
        n
      );
      kn(c, h);
      const f = n.subTree, u = f && lc(f);
      let d = !1;
      const { getTransitionKey: p } = c.type;
      if (p) {
        const w = p();
        s === void 0 ? s = w : w !== s && (s = w, d = !0);
      }
      if (u && u.type !== We && (!vt(c, u) || d)) {
        const w = si(
          u,
          l,
          i,
          n
        );
        if (kn(u, w), a === "out-in")
          return i.isLeaving = !0, w.afterLeave = () => {
            i.isLeaving = !1, n.update.active !== !1 && n.update();
          }, ao(o);
        a === "in-out" && c.type !== We && (w.delayLeave = (b, m, y) => {
          const E = Af(
            i,
            u
          );
          E[String(u.key)] = u, b._leaveCb = () => {
            m(), b._leaveCb = void 0, delete h.delayedLeave;
          }, h.delayedLeave = y;
        });
      }
      return o;
    };
  }
}, Tf = dm;
function Af(t, e) {
  const { leavingVNodes: n } = t;
  let i = n.get(e.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(e.type, i)), i;
}
function si(t, e, n, i) {
  const {
    appear: s,
    mode: r,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: a,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: f,
    onLeave: u,
    onAfterLeave: d,
    onLeaveCancelled: p,
    onBeforeAppear: w,
    onAppear: b,
    onAfterAppear: m,
    onAppearCancelled: y
  } = e, E = String(t.key), v = Af(n, t), T = (_, R) => {
    _ && lt(
      _,
      i,
      9,
      R
    );
  }, B = (_, R) => {
    const D = R[1];
    T(_, R), F(_) ? _.every((N) => N.length <= 1) && D() : _.length <= 1 && D();
  }, O = {
    mode: r,
    persisted: o,
    beforeEnter(_) {
      let R = l;
      if (!n.isMounted)
        if (s)
          R = w || l;
        else
          return;
      _._leaveCb && _._leaveCb(
        !0
        /* cancelled */
      );
      const D = v[E];
      D && vt(t, D) && D.el._leaveCb && D.el._leaveCb(), T(R, [_]);
    },
    enter(_) {
      let R = a, D = c, N = h;
      if (!n.isMounted)
        if (s)
          R = b || a, D = m || c, N = y || h;
        else
          return;
      let M = !1;
      const H = _._enterCb = (I) => {
        M || (M = !0, I ? T(N, [_]) : T(D, [_]), O.delayedLeave && O.delayedLeave(), _._enterCb = void 0);
      };
      R ? B(R, [_, H]) : H();
    },
    leave(_, R) {
      const D = String(t.key);
      if (_._enterCb && _._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return R();
      T(f, [_]);
      let N = !1;
      const M = _._leaveCb = (H) => {
        N || (N = !0, R(), H ? T(p, [_]) : T(d, [_]), _._leaveCb = void 0, v[D] === t && delete v[D]);
      };
      v[D] = t, u ? B(u, [_, M]) : M();
    },
    clone(_) {
      return si(_, e, n, i);
    }
  };
  return O;
}
function ao(t) {
  if (ds(t))
    return t = kt(t), t.children = null, t;
}
function lc(t) {
  return ds(t) ? t.children ? t.children[0] : void 0 : t;
}
function kn(t, e) {
  t.shapeFlag & 6 && t.component ? kn(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function $r(t, e = !1, n) {
  let i = [], s = 0;
  for (let r = 0; r < t.length; r++) {
    let o = t[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === Le ? (o.patchFlag & 128 && s++, i = i.concat(
      $r(o.children, e, l)
    )) : (e || o.type !== We) && i.push(l != null ? kt(o, { key: l }) : o);
  }
  if (s > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
function na(t, e) {
  return q(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => ee({ name: t.name }, e, { setup: t }))()
  ) : t;
}
const _n = (t) => !!t.type.__asyncLoader;
function pm(t) {
  q(t) && (t = { loader: t });
  const {
    loader: e,
    loadingComponent: n,
    errorComponent: i,
    delay: s = 200,
    timeout: r,
    // undefined = never times out
    suspensible: o = !0,
    onError: l
  } = t;
  let a = null, c, h = 0;
  const f = () => (h++, a = null, u()), u = () => {
    let d;
    return a || (d = a = e().catch((p) => {
      if (p = p instanceof Error ? p : new Error(String(p)), l)
        return new Promise((w, b) => {
          l(p, () => w(f()), () => b(p), h + 1);
        });
      throw p;
    }).then((p) => d !== a && a ? a : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default), c = p, p)));
  };
  return na({
    name: "AsyncComponentWrapper",
    __asyncLoader: u,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const d = Ce;
      if (c)
        return () => co(c, d);
      const p = (y) => {
        a = null, Bn(
          y,
          d,
          13,
          !i
          /* do not throw in dev if user provided error component */
        );
      };
      if (o && d.suspense || ri)
        return u().then((y) => () => co(y, d)).catch((y) => (p(y), () => i ? ge(i, {
          error: y
        }) : null));
      const w = Bt(!1), b = Bt(), m = Bt(!!s);
      return s && setTimeout(() => {
        m.value = !1;
      }, s), r != null && setTimeout(() => {
        if (!w.value && !b.value) {
          const y = new Error(
            `Async component timed out after ${r}ms.`
          );
          p(y), b.value = y;
        }
      }, r), u().then(() => {
        w.value = !0, d.parent && ds(d.parent.vnode) && Hr(d.parent.update);
      }).catch((y) => {
        p(y), b.value = y;
      }), () => {
        if (w.value && c)
          return co(c, d);
        if (b.value && i)
          return ge(i, {
            error: b.value
          });
        if (n && !m.value)
          return ge(n);
      };
    }
  });
}
function co(t, e) {
  const { ref: n, props: i, children: s, ce: r } = e.vnode, o = ge(t, i, s);
  return o.ref = n, o.ce = r, delete e.vnode.ce, o;
}
const ds = (t) => t.type.__isKeepAlive, gm = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(t, { slots: e }) {
    const n = $t(), i = n.ctx;
    if (!i.renderer)
      return () => {
        const y = e.default && e.default();
        return y && y.length === 1 ? y[0] : y;
      };
    const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let o = null;
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: h,
        o: { createElement: f }
      }
    } = i, u = f("div");
    i.activate = (y, E, v, T, B) => {
      const O = y.component;
      c(y, E, v, 0, l), a(
        O.vnode,
        y,
        E,
        v,
        O,
        l,
        T,
        y.slotScopeIds,
        B
      ), Ne(() => {
        O.isDeactivated = !1, O.a && Xn(O.a);
        const _ = y.props && y.props.onVnodeMounted;
        _ && Je(_, O.parent, y);
      }, l);
    }, i.deactivate = (y) => {
      const E = y.component;
      c(y, u, null, 1, l), Ne(() => {
        E.da && Xn(E.da);
        const v = y.props && y.props.onVnodeUnmounted;
        v && Je(v, E.parent, y), E.isDeactivated = !0;
      }, l);
    };
    function d(y) {
      ho(y), h(y, n, l, !0);
    }
    function p(y) {
      s.forEach((E, v) => {
        const T = Ko(E.type);
        T && (!y || !y(T)) && w(v);
      });
    }
    function w(y) {
      const E = s.get(y);
      !o || !vt(E, o) ? d(E) : o && ho(o), s.delete(y), r.delete(y);
    }
    Sn(
      () => [t.include, t.exclude],
      ([y, E]) => {
        y && p((v) => ki(y, v)), E && p((v) => !ki(E, v));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let b = null;
    const m = () => {
      b != null && s.set(b, fo(n.subTree));
    };
    return bi(m), Kr(m), zr(() => {
      s.forEach((y) => {
        const { subTree: E, suspense: v } = n, T = fo(E);
        if (y.type === T.type && y.key === T.key) {
          ho(T);
          const B = T.component.da;
          B && Ne(B, v);
          return;
        }
        d(y);
      });
    }), () => {
      if (b = null, !e.default)
        return null;
      const y = e.default(), E = y[0];
      if (y.length > 1)
        return o = null, y;
      if (!nn(E) || !(E.shapeFlag & 4) && !(E.shapeFlag & 128))
        return o = null, E;
      let v = fo(E);
      const T = v.type, B = Ko(
        _n(v) ? v.type.__asyncResolved || {} : T
      ), { include: O, exclude: _, max: R } = t;
      if (O && (!B || !ki(O, B)) || _ && B && ki(_, B))
        return o = v, E;
      const D = v.key == null ? T : v.key, N = s.get(D);
      return v.el && (v = kt(v), E.shapeFlag & 128 && (E.ssContent = v)), b = D, N ? (v.el = N.el, v.component = N.component, v.transition && kn(v, v.transition), v.shapeFlag |= 512, r.delete(D), r.add(D)) : (r.add(D), R && r.size > parseInt(R, 10) && w(r.values().next().value)), v.shapeFlag |= 256, o = v, Sf(E.type) ? E : v;
    };
  }
}, mm = gm;
function ki(t, e) {
  return F(t) ? t.some((n) => ki(n, e)) : J(t) ? t.split(",").includes(e) : Op(t) ? t.test(e) : !1;
}
function xf(t, e) {
  Of(t, "a", e);
}
function kf(t, e) {
  Of(t, "da", e);
}
function Of(t, e, n = Ce) {
  const i = t.__wdc || (t.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return t();
  });
  if (jr(e, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      ds(s.parent.vnode) && ym(i, e, n, s), s = s.parent;
  }
}
function ym(t, e, n, i) {
  const s = jr(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  qr(() => {
    Pl(i[e], s);
  }, n);
}
function ho(t) {
  t.shapeFlag &= -257, t.shapeFlag &= -513;
}
function fo(t) {
  return t.shapeFlag & 128 ? t.ssContent : t;
}
function jr(t, e, n = Ce, i = !1) {
  if (n) {
    const s = n[t] || (n[t] = []), r = e.__weh || (e.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      mi(), sn(n);
      const l = lt(e, n, t, o);
      return Yt(), yi(), l;
    });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const Wt = (t) => (e, n = Ce) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!ri || t === "sp") && jr(t, (...i) => e(...i), n)
), Mf = Wt("bm"), bi = Wt("m"), Rf = Wt("bu"), Kr = Wt("u"), zr = Wt("bum"), qr = Wt("um"), Nf = Wt("sp"), Df = Wt(
  "rtg"
), Lf = Wt(
  "rtc"
);
function Pf(t, e = Ce) {
  jr("ec", t, e);
}
const ia = "components", bm = "directives";
function vm(t, e) {
  return sa(ia, t, !0, e) || t;
}
const If = Symbol.for("v-ndc");
function wm(t) {
  return J(t) ? sa(ia, t, !1) || t : t || If;
}
function Sm(t) {
  return sa(bm, t);
}
function sa(t, e, n = !0, i = !1) {
  const s = Re || Ce;
  if (s) {
    const r = s.type;
    if (t === ia) {
      const l = Ko(
        r,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (l && (l === e || l === Ae(e) || l === In(Ae(e))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      ac(s[t] || r[t], e) || // global registration
      ac(s.appContext[t], e)
    );
    return !o && i ? r : o;
  }
}
function ac(t, e) {
  return t && (t[e] || t[Ae(e)] || t[In(Ae(e))]);
}
function _m(t, e, n, i) {
  let s;
  const r = n && n[i];
  if (F(t) || J(t)) {
    s = new Array(t.length);
    for (let o = 0, l = t.length; o < l; o++)
      s[o] = e(t[o], o, void 0, r && r[o]);
  } else if (typeof t == "number") {
    s = new Array(t);
    for (let o = 0; o < t; o++)
      s[o] = e(o + 1, o, void 0, r && r[o]);
  } else if (ce(t))
    if (t[Symbol.iterator])
      s = Array.from(
        t,
        (o, l) => e(o, l, void 0, r && r[l])
      );
    else {
      const o = Object.keys(t);
      s = new Array(o.length);
      for (let l = 0, a = o.length; l < a; l++) {
        const c = o[l];
        s[l] = e(t[c], c, l, r && r[l]);
      }
    }
  else
    s = [];
  return n && (n[i] = s), s;
}
function Em(t, e) {
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (F(i))
      for (let s = 0; s < i.length; s++)
        t[i[s].name] = i[s].fn;
    else
      i && (t[i.name] = i.key ? (...s) => {
        const r = i.fn(...s);
        return r && (r.key = i.key), r;
      } : i.fn);
  }
  return t;
}
function Cm(t, e, n = {}, i, s) {
  if (Re.isCE || Re.parent && _n(Re.parent) && Re.parent.isCE)
    return e !== "default" && (n.name = e), ge("slot", n, i && i());
  let r = t[e];
  r && r._c && (r._d = !1), ps();
  const o = r && Bf(r(n)), l = aa(
    Le,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      o && o.key || `_${e}`
    },
    o || (i ? i() : []),
    o && t._ === 1 ? 64 : -2
  );
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Bf(t) {
  return t.some((e) => nn(e) ? !(e.type === We || e.type === Le && !Bf(e.children)) : !0) ? t : null;
}
function Tm(t, e) {
  const n = {};
  for (const i in t)
    n[e && /[A-Z]/.test(i) ? `on:${i}` : Jn(i)] = t[i];
  return n;
}
const Io = (t) => t ? su(t) ? Xr(t) || t.proxy : Io(t.parent) : null, Di = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ee(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Io(t.parent),
    $root: (t) => Io(t.root),
    $emit: (t) => t.emit,
    $options: (t) => ra(t),
    $forceUpdate: (t) => t.f || (t.f = () => Hr(t.update)),
    $nextTick: (t) => t.n || (t.n = Jl.bind(t.proxy)),
    $watch: (t) => fm.bind(t)
  })
), uo = (t, e) => t !== le && !t.__isScriptSetup && ie(t, e), Bo = {
  get({ _: t }, e) {
    const { ctx: n, setupState: i, data: s, props: r, accessCache: o, type: l, appContext: a } = t;
    let c;
    if (e[0] !== "$") {
      const d = o[e];
      if (d !== void 0)
        switch (d) {
          case 1:
            return i[e];
          case 2:
            return s[e];
          case 4:
            return n[e];
          case 3:
            return r[e];
        }
      else {
        if (uo(i, e))
          return o[e] = 1, i[e];
        if (s !== le && ie(s, e))
          return o[e] = 2, s[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = t.propsOptions[0]) && ie(c, e)
        )
          return o[e] = 3, r[e];
        if (n !== le && ie(n, e))
          return o[e] = 4, n[e];
        Uo && (o[e] = 0);
      }
    }
    const h = Di[e];
    let f, u;
    if (h)
      return e === "$attrs" && Ze(t, "get", e), h(t);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[e])
    )
      return f;
    if (n !== le && ie(n, e))
      return o[e] = 4, n[e];
    if (
      // global properties
      u = a.config.globalProperties, ie(u, e)
    )
      return u[e];
  },
  set({ _: t }, e, n) {
    const { data: i, setupState: s, ctx: r } = t;
    return uo(s, e) ? (s[e] = n, !0) : i !== le && ie(i, e) ? (i[e] = n, !0) : ie(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (r[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: i, appContext: s, propsOptions: r }
  }, o) {
    let l;
    return !!n[o] || t !== le && ie(t, o) || uo(e, o) || (l = r[0]) && ie(l, o) || ie(i, o) || ie(Di, o) || ie(s.config.globalProperties, o);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : ie(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
}, Am = /* @__PURE__ */ ee(
  {},
  Bo,
  {
    get(t, e) {
      if (e !== Symbol.unscopables)
        return Bo.get(t, e, t);
    },
    has(t, e) {
      return e[0] !== "_" && !Pp(e);
    }
  }
);
function xm() {
  return null;
}
function km() {
  return null;
}
function Om(t) {
}
function Mm(t) {
}
function Rm() {
  return null;
}
function Nm() {
}
function Dm(t, e) {
  return null;
}
function Lm() {
  return Uf().slots;
}
function Pm() {
  return Uf().attrs;
}
function Im(t, e, n) {
  const i = $t();
  if (n && n.local) {
    const s = Bt(t[e]);
    return Sn(
      () => t[e],
      (r) => s.value = r
    ), Sn(s, (r) => {
      r !== t[e] && i.emit(`update:${e}`, r);
    }), s;
  } else
    return {
      __v_isRef: !0,
      get value() {
        return t[e];
      },
      set value(s) {
        i.emit(`update:${e}`, s);
      }
    };
}
function Uf() {
  const t = $t();
  return t.setupContext || (t.setupContext = au(t));
}
function Ji(t) {
  return F(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function Bm(t, e) {
  const n = Ji(t);
  for (const i in e) {
    if (i.startsWith("__skip"))
      continue;
    let s = n[i];
    s ? F(s) || q(s) ? s = n[i] = { type: s, default: e[i] } : s.default = e[i] : s === null && (s = n[i] = { default: e[i] }), s && e[`__skip_${i}`] && (s.skipFactory = !0);
  }
  return n;
}
function Um(t, e) {
  return !t || !e ? t || e : F(t) && F(e) ? t.concat(e) : ee({}, Ji(t), Ji(e));
}
function Fm(t, e) {
  const n = {};
  for (const i in t)
    e.includes(i) || Object.defineProperty(n, i, {
      enumerable: !0,
      get: () => t[i]
    });
  return n;
}
function Hm(t) {
  const e = $t();
  let n = t();
  return Yt(), Il(n) && (n = n.catch((i) => {
    throw sn(e), i;
  })), [n, () => sn(e)];
}
let Uo = !0;
function Vm(t) {
  const e = ra(t), n = t.proxy, i = t.ctx;
  Uo = !1, e.beforeCreate && cc(e.beforeCreate, t, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: h,
    beforeMount: f,
    mounted: u,
    beforeUpdate: d,
    updated: p,
    activated: w,
    deactivated: b,
    beforeDestroy: m,
    beforeUnmount: y,
    destroyed: E,
    unmounted: v,
    render: T,
    renderTracked: B,
    renderTriggered: O,
    errorCaptured: _,
    serverPrefetch: R,
    // public API
    expose: D,
    inheritAttrs: N,
    // assets
    components: M,
    directives: H,
    filters: I
  } = e;
  if (c && Wm(c, i, null), o)
    for (const re in o) {
      const se = o[re];
      q(se) && (i[re] = se.bind(n));
    }
  if (s) {
    const re = s.call(n, n);
    ce(re) && (t.data = Br(re));
  }
  if (Uo = !0, r)
    for (const re in r) {
      const se = r[re], mt = q(se) ? se.bind(n, n) : q(se.get) ? se.get.bind(n, n) : qe, Ss = !q(se) && q(se.set) ? se.set.bind(n) : qe, an = cu({
        get: mt,
        set: Ss
      });
      Object.defineProperty(i, re, {
        enumerable: !0,
        configurable: !0,
        get: () => an.value,
        set: (St) => an.value = St
      });
    }
  if (l)
    for (const re in l)
      Ff(l[re], i, n, re);
  if (a) {
    const re = q(a) ? a.call(n) : a;
    Reflect.ownKeys(re).forEach((se) => {
      Vf(se, re[se]);
    });
  }
  h && cc(h, t, "c");
  function Z(re, se) {
    F(se) ? se.forEach((mt) => re(mt.bind(n))) : se && re(se.bind(n));
  }
  if (Z(Mf, f), Z(bi, u), Z(Rf, d), Z(Kr, p), Z(xf, w), Z(kf, b), Z(Pf, _), Z(Lf, B), Z(Df, O), Z(zr, y), Z(qr, v), Z(Nf, R), F(D))
    if (D.length) {
      const re = t.exposed || (t.exposed = {});
      D.forEach((se) => {
        Object.defineProperty(re, se, {
          get: () => n[se],
          set: (mt) => n[se] = mt
        });
      });
    } else
      t.exposed || (t.exposed = {});
  T && t.render === qe && (t.render = T), N != null && (t.inheritAttrs = N), M && (t.components = M), H && (t.directives = H);
}
function Wm(t, e, n = qe) {
  F(t) && (t = Fo(t));
  for (const i in t) {
    const s = t[i];
    let r;
    ce(s) ? "default" in s ? r = Li(
      s.from || i,
      s.default,
      !0
      /* treat default function as factory */
    ) : r = Li(s.from || i) : r = Li(s), xe(r) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : e[i] = r;
  }
}
function cc(t, e, n) {
  lt(
    F(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Ff(t, e, n, i) {
  const s = i.includes(".") ? Cf(n, i) : () => n[i];
  if (J(t)) {
    const r = e[t];
    q(r) && Sn(s, r);
  } else if (q(t))
    Sn(s, t.bind(n));
  else if (ce(t))
    if (F(t))
      t.forEach((r) => Ff(r, e, n, i));
    else {
      const r = q(t.handler) ? t.handler.bind(n) : e[t.handler];
      q(r) && Sn(s, r, t);
    }
}
function ra(t) {
  const e = t.type, { mixins: n, extends: i } = e, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = t.appContext, l = r.get(e);
  let a;
  return l ? a = l : !s.length && !n && !i ? a = e : (a = {}, s.length && s.forEach(
    (c) => ar(a, c, o, !0)
  ), ar(a, e, o)), ce(e) && r.set(e, a), a;
}
function ar(t, e, n, i = !1) {
  const { mixins: s, extends: r } = e;
  r && ar(t, r, n, !0), s && s.forEach(
    (o) => ar(t, o, n, !0)
  );
  for (const o in e)
    if (!(i && o === "expose")) {
      const l = $m[o] || n && n[o];
      t[o] = l ? l(t[o], e[o]) : e[o];
    }
  return t;
}
const $m = {
  data: hc,
  props: fc,
  emits: fc,
  // objects
  methods: Oi,
  computed: Oi,
  // lifecycle
  beforeCreate: je,
  created: je,
  beforeMount: je,
  mounted: je,
  beforeUpdate: je,
  updated: je,
  beforeDestroy: je,
  beforeUnmount: je,
  destroyed: je,
  unmounted: je,
  activated: je,
  deactivated: je,
  errorCaptured: je,
  serverPrefetch: je,
  // assets
  components: Oi,
  directives: Oi,
  // watch
  watch: Km,
  // provide / inject
  provide: hc,
  inject: jm
};
function hc(t, e) {
  return e ? t ? function() {
    return ee(
      q(t) ? t.call(this, this) : t,
      q(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function jm(t, e) {
  return Oi(Fo(t), Fo(e));
}
function Fo(t) {
  if (F(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function je(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Oi(t, e) {
  return t ? ee(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function fc(t, e) {
  return t ? F(t) && F(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : ee(
    /* @__PURE__ */ Object.create(null),
    Ji(t),
    Ji(e ?? {})
  ) : e;
}
function Km(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = ee(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    n[i] = je(t[i], e[i]);
  return n;
}
function Hf() {
  return {
    app: null,
    config: {
      isNativeTag: zs,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let zm = 0;
function qm(t, e) {
  return function(i, s = null) {
    q(i) || (i = ee({}, i)), s != null && !ce(s) && (s = null);
    const r = Hf(), o = /* @__PURE__ */ new Set();
    let l = !1;
    const a = r.app = {
      _uid: zm++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: pu,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && q(c.install) ? (o.add(c), c.install(a, ...h)) : q(c) && (o.add(c), c(a, ...h))), a;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), a;
      },
      component(c, h) {
        return h ? (r.components[c] = h, a) : r.components[c];
      },
      directive(c, h) {
        return h ? (r.directives[c] = h, a) : r.directives[c];
      },
      mount(c, h, f) {
        if (!l) {
          const u = ge(
            i,
            s
          );
          return u.appContext = r, h && e ? e(u, c) : t(u, c, f), l = !0, a._container = c, c.__vue_app__ = a, Xr(u.component) || u.component.proxy;
        }
      },
      unmount() {
        l && (t(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, a;
      },
      runWithContext(c) {
        Xi = a;
        try {
          return c();
        } finally {
          Xi = null;
        }
      }
    };
    return a;
  };
}
let Xi = null;
function Vf(t, e) {
  if (Ce) {
    let n = Ce.provides;
    const i = Ce.parent && Ce.parent.provides;
    i === n && (n = Ce.provides = Object.create(i)), n[t] = e;
  }
}
function Li(t, e, n = !1) {
  const i = Ce || Re;
  if (i || Xi) {
    const s = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : Xi._context.provides;
    if (s && t in s)
      return s[t];
    if (arguments.length > 1)
      return n && q(e) ? e.call(i && i.proxy) : e;
  }
}
function Gm() {
  return !!(Ce || Re || Xi);
}
function Jm(t, e, n, i = !1) {
  const s = {}, r = {};
  ir(r, Gr, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), Wf(t, e, s, r);
  for (const o in t.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? t.props = i ? s : df(s) : t.type.props ? t.props = s : t.props = r, t.attrs = r;
}
function Xm(t, e, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = t, l = te(s), [a] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const h = t.vnode.dynamicProps;
      for (let f = 0; f < h.length; f++) {
        let u = h[f];
        if (Vr(t.emitsOptions, u))
          continue;
        const d = e[u];
        if (a)
          if (ie(r, u))
            d !== r[u] && (r[u] = d, c = !0);
          else {
            const p = Ae(u);
            s[p] = Ho(
              a,
              l,
              p,
              d,
              t,
              !1
              /* isAbsent */
            );
          }
        else
          d !== r[u] && (r[u] = d, c = !0);
      }
    }
  } else {
    Wf(t, e, s, r) && (c = !0);
    let h;
    for (const f in l)
      (!e || // for camelCase
      !ie(e, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = st(f)) === f || !ie(e, h))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[h] !== void 0) && (s[f] = Ho(
        a,
        l,
        f,
        void 0,
        t,
        !0
        /* isAbsent */
      )) : delete s[f]);
    if (r !== l)
      for (const f in r)
        (!e || !ie(e, f)) && (delete r[f], c = !0);
  }
  c && Ht(t, "set", "$attrs");
}
function Wf(t, e, n, i) {
  const [s, r] = t.propsOptions;
  let o = !1, l;
  if (e)
    for (let a in e) {
      if (bn(a))
        continue;
      const c = e[a];
      let h;
      s && ie(s, h = Ae(a)) ? !r || !r.includes(h) ? n[h] = c : (l || (l = {}))[h] = c : Vr(t.emitsOptions, a) || (!(a in i) || c !== i[a]) && (i[a] = c, o = !0);
    }
  if (r) {
    const a = te(n), c = l || le;
    for (let h = 0; h < r.length; h++) {
      const f = r[h];
      n[f] = Ho(
        s,
        a,
        f,
        c[f],
        t,
        !ie(c, f)
      );
    }
  }
  return o;
}
function Ho(t, e, n, i, s, r) {
  const o = t[n];
  if (o != null) {
    const l = ie(o, "default");
    if (l && i === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && q(a)) {
        const { propsDefaults: c } = s;
        n in c ? i = c[n] : (sn(s), i = c[n] = a.call(
          null,
          e
        ), Yt());
      } else
        i = a;
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === st(n)) && (i = !0));
  }
  return i;
}
function $f(t, e, n = !1) {
  const i = e.propsCache, s = i.get(t);
  if (s)
    return s;
  const r = t.props, o = {}, l = [];
  let a = !1;
  if (!q(t)) {
    const h = (f) => {
      a = !0;
      const [u, d] = $f(f, e, !0);
      ee(o, u), d && l.push(...d);
    };
    !n && e.mixins.length && e.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h);
  }
  if (!r && !a)
    return ce(t) && i.set(t, qn), qn;
  if (F(r))
    for (let h = 0; h < r.length; h++) {
      const f = Ae(r[h]);
      uc(f) && (o[f] = le);
    }
  else if (r)
    for (const h in r) {
      const f = Ae(h);
      if (uc(f)) {
        const u = r[h], d = o[f] = F(u) || q(u) ? { type: u } : ee({}, u);
        if (d) {
          const p = gc(Boolean, d.type), w = gc(String, d.type);
          d[
            0
            /* shouldCast */
          ] = p > -1, d[
            1
            /* shouldCastTrue */
          ] = w < 0 || p < w, (p > -1 || ie(d, "default")) && l.push(f);
        }
      }
    }
  const c = [o, l];
  return ce(t) && i.set(t, c), c;
}
function uc(t) {
  return t[0] !== "$";
}
function dc(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function pc(t, e) {
  return dc(t) === dc(e);
}
function gc(t, e) {
  return F(e) ? e.findIndex((n) => pc(n, t)) : q(e) && pc(e, t) ? 0 : -1;
}
const jf = (t) => t[0] === "_" || t === "$stable", oa = (t) => F(t) ? t.map(it) : [it(t)], Ym = (t, e, n) => {
  if (e._n)
    return e;
  const i = Yl((...s) => oa(e(...s)), n);
  return i._c = !1, i;
}, Kf = (t, e, n) => {
  const i = t._ctx;
  for (const s in t) {
    if (jf(s))
      continue;
    const r = t[s];
    if (q(r))
      e[s] = Ym(s, r, i);
    else if (r != null) {
      const o = oa(r);
      e[s] = () => o;
    }
  }
}, zf = (t, e) => {
  const n = oa(e);
  t.slots.default = () => n;
}, Zm = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = te(e), ir(e, "_", n)) : Kf(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && zf(t, e);
  ir(t.slots, Gr, 1);
}, Qm = (t, e, n) => {
  const { vnode: i, slots: s } = t;
  let r = !0, o = le;
  if (i.shapeFlag & 32) {
    const l = e._;
    l ? n && l === 1 ? r = !1 : (ee(s, e), !n && l === 1 && delete s._) : (r = !e.$stable, Kf(e, s)), o = e;
  } else
    e && (zf(t, e), o = { default: 1 });
  if (r)
    for (const l in s)
      !jf(l) && !(l in o) && delete s[l];
};
function cr(t, e, n, i, s = !1) {
  if (F(t)) {
    t.forEach(
      (u, d) => cr(
        u,
        e && (F(e) ? e[d] : e),
        n,
        i,
        s
      )
    );
    return;
  }
  if (_n(i) && !s)
    return;
  const r = i.shapeFlag & 4 ? Xr(i.component) || i.component.proxy : i.el, o = s ? null : r, { i: l, r: a } = t, c = e && e.r, h = l.refs === le ? l.refs = {} : l.refs, f = l.setupState;
  if (c != null && c !== a && (J(c) ? (h[c] = null, ie(f, c) && (f[c] = null)) : xe(c) && (c.value = null)), q(a))
    Ut(a, l, 12, [o, h]);
  else {
    const u = J(a), d = xe(a);
    if (u || d) {
      const p = () => {
        if (t.f) {
          const w = u ? ie(f, a) ? f[a] : h[a] : a.value;
          s ? F(w) && Pl(w, r) : F(w) ? w.includes(r) || w.push(r) : u ? (h[a] = [r], ie(f, a) && (f[a] = h[a])) : (a.value = [r], t.k && (h[t.k] = a.value));
        } else
          u ? (h[a] = o, ie(f, a) && (f[a] = o)) : d && (a.value = o, t.k && (h[t.k] = o));
      };
      o ? (p.id = -1, Ne(p, n)) : p();
    }
  }
}
let Kt = !1;
const Ms = (t) => /svg/.test(t.namespaceURI) && t.tagName !== "foreignObject", Rs = (t) => t.nodeType === 8;
function e0(t) {
  const {
    mt: e,
    p: n,
    o: {
      patchProp: i,
      createText: s,
      nextSibling: r,
      parentNode: o,
      remove: l,
      insert: a,
      createComment: c
    }
  } = t, h = (m, y) => {
    if (!y.hasChildNodes()) {
      n(null, m, y), lr(), y._vnode = m;
      return;
    }
    Kt = !1, f(y.firstChild, m, null, null, null), lr(), y._vnode = m, Kt && console.error("Hydration completed but contains mismatches.");
  }, f = (m, y, E, v, T, B = !1) => {
    const O = Rs(m) && m.data === "[", _ = () => w(
      m,
      y,
      E,
      v,
      T,
      O
    ), { type: R, ref: D, shapeFlag: N, patchFlag: M } = y;
    let H = m.nodeType;
    y.el = m, M === -2 && (B = !1, y.dynamicChildren = null);
    let I = null;
    switch (R) {
      case On:
        H !== 3 ? y.children === "" ? (a(y.el = s(""), o(m), m), I = m) : I = _() : (m.data !== y.children && (Kt = !0, m.data = y.children), I = r(m));
        break;
      case We:
        H !== 8 || O ? I = _() : I = r(m);
        break;
      case En:
        if (O && (m = r(m), H = m.nodeType), H === 1 || H === 3) {
          I = m;
          const ne = !y.children.length;
          for (let Z = 0; Z < y.staticCount; Z++)
            ne && (y.children += I.nodeType === 1 ? I.outerHTML : I.data), Z === y.staticCount - 1 && (y.anchor = I), I = r(I);
          return O ? r(I) : I;
        } else
          _();
        break;
      case Le:
        O ? I = p(
          m,
          y,
          E,
          v,
          T,
          B
        ) : I = _();
        break;
      default:
        if (N & 1)
          H !== 1 || y.type.toLowerCase() !== m.tagName.toLowerCase() ? I = _() : I = u(
            m,
            y,
            E,
            v,
            T,
            B
          );
        else if (N & 6) {
          y.slotScopeIds = T;
          const ne = o(m);
          if (e(
            y,
            ne,
            null,
            E,
            v,
            Ms(ne),
            B
          ), I = O ? b(m) : r(m), I && Rs(I) && I.data === "teleport end" && (I = r(I)), _n(y)) {
            let Z;
            O ? (Z = ge(Le), Z.anchor = I ? I.previousSibling : ne.lastChild) : Z = m.nodeType === 3 ? ca("") : ge("div"), Z.el = m, y.component.subTree = Z;
          }
        } else
          N & 64 ? H !== 8 ? I = _() : I = y.type.hydrate(
            m,
            y,
            E,
            v,
            T,
            B,
            t,
            d
          ) : N & 128 && (I = y.type.hydrate(
            m,
            y,
            E,
            v,
            Ms(o(m)),
            T,
            B,
            t,
            f
          ));
    }
    return D != null && cr(D, null, v, y), I;
  }, u = (m, y, E, v, T, B) => {
    B = B || !!y.dynamicChildren;
    const { type: O, props: _, patchFlag: R, shapeFlag: D, dirs: N } = y, M = O === "input" && N || O === "option";
    if (M || R !== -1) {
      if (N && Ct(y, null, E, "created"), _)
        if (M || !B || R & 48)
          for (const I in _)
            (M && I.endsWith("value") || Ln(I) && !bn(I)) && i(
              m,
              I,
              null,
              _[I],
              !1,
              void 0,
              E
            );
        else
          _.onClick && i(
            m,
            "onClick",
            null,
            _.onClick,
            !1,
            void 0,
            E
          );
      let H;
      if ((H = _ && _.onVnodeBeforeMount) && Je(H, E, y), N && Ct(y, null, E, "beforeMount"), ((H = _ && _.onVnodeMounted) || N) && _f(() => {
        H && Je(H, E, y), N && Ct(y, null, E, "mounted");
      }, v), D & 16 && // skip if element has innerHTML / textContent
      !(_ && (_.innerHTML || _.textContent))) {
        let I = d(
          m.firstChild,
          y,
          m,
          E,
          v,
          T,
          B
        );
        for (; I; ) {
          Kt = !0;
          const ne = I;
          I = I.nextSibling, l(ne);
        }
      } else
        D & 8 && m.textContent !== y.children && (Kt = !0, m.textContent = y.children);
    }
    return m.nextSibling;
  }, d = (m, y, E, v, T, B, O) => {
    O = O || !!y.dynamicChildren;
    const _ = y.children, R = _.length;
    for (let D = 0; D < R; D++) {
      const N = O ? _[D] : _[D] = it(_[D]);
      if (m)
        m = f(
          m,
          N,
          v,
          T,
          B,
          O
        );
      else {
        if (N.type === On && !N.children)
          continue;
        Kt = !0, n(
          null,
          N,
          E,
          null,
          v,
          T,
          Ms(E),
          B
        );
      }
    }
    return m;
  }, p = (m, y, E, v, T, B) => {
    const { slotScopeIds: O } = y;
    O && (T = T ? T.concat(O) : O);
    const _ = o(m), R = d(
      r(m),
      y,
      _,
      E,
      v,
      T,
      B
    );
    return R && Rs(R) && R.data === "]" ? r(y.anchor = R) : (Kt = !0, a(y.anchor = c("]"), _, R), R);
  }, w = (m, y, E, v, T, B) => {
    if (Kt = !0, y.el = null, B) {
      const R = b(m);
      for (; ; ) {
        const D = r(m);
        if (D && D !== R)
          l(D);
        else
          break;
      }
    }
    const O = r(m), _ = o(m);
    return l(m), n(
      null,
      y,
      _,
      O,
      E,
      v,
      Ms(_),
      T
    ), O;
  }, b = (m) => {
    let y = 0;
    for (; m; )
      if (m = r(m), m && Rs(m) && (m.data === "[" && y++, m.data === "]")) {
        if (y === 0)
          return r(m);
        y--;
      }
    return m;
  };
  return [h, f];
}
const Ne = _f;
function qf(t) {
  return Jf(t);
}
function Gf(t) {
  return Jf(t, e0);
}
function Jf(t, e) {
  const n = Ro();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: s,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: h,
    parentNode: f,
    nextSibling: u,
    setScopeId: d = qe,
    insertStaticContent: p
  } = t, w = (g, S, C, x = null, A = null, P = null, V = !1, L = null, U = !!S.dynamicChildren) => {
    if (g === S)
      return;
    g && !vt(g, S) && (x = _s(g), St(g, A, P, !0), g = null), S.patchFlag === -2 && (U = !1, S.dynamicChildren = null);
    const { type: k, ref: K, shapeFlag: W } = S;
    switch (k) {
      case On:
        b(g, S, C, x);
        break;
      case We:
        m(g, S, C, x);
        break;
      case En:
        g == null && y(S, C, x, V);
        break;
      case Le:
        M(
          g,
          S,
          C,
          x,
          A,
          P,
          V,
          L,
          U
        );
        break;
      default:
        W & 1 ? T(
          g,
          S,
          C,
          x,
          A,
          P,
          V,
          L,
          U
        ) : W & 6 ? H(
          g,
          S,
          C,
          x,
          A,
          P,
          V,
          L,
          U
        ) : (W & 64 || W & 128) && k.process(
          g,
          S,
          C,
          x,
          A,
          P,
          V,
          L,
          U,
          Un
        );
    }
    K != null && A && cr(K, g && g.ref, P, S || g, !S);
  }, b = (g, S, C, x) => {
    if (g == null)
      i(
        S.el = l(S.children),
        C,
        x
      );
    else {
      const A = S.el = g.el;
      S.children !== g.children && c(A, S.children);
    }
  }, m = (g, S, C, x) => {
    g == null ? i(
      S.el = a(S.children || ""),
      C,
      x
    ) : S.el = g.el;
  }, y = (g, S, C, x) => {
    [g.el, g.anchor] = p(
      g.children,
      S,
      C,
      x,
      g.el,
      g.anchor
    );
  }, E = ({ el: g, anchor: S }, C, x) => {
    let A;
    for (; g && g !== S; )
      A = u(g), i(g, C, x), g = A;
    i(S, C, x);
  }, v = ({ el: g, anchor: S }) => {
    let C;
    for (; g && g !== S; )
      C = u(g), s(g), g = C;
    s(S);
  }, T = (g, S, C, x, A, P, V, L, U) => {
    V = V || S.type === "svg", g == null ? B(
      S,
      C,
      x,
      A,
      P,
      V,
      L,
      U
    ) : R(
      g,
      S,
      A,
      P,
      V,
      L,
      U
    );
  }, B = (g, S, C, x, A, P, V, L) => {
    let U, k;
    const { type: K, props: W, shapeFlag: z, transition: G, dirs: Q } = g;
    if (U = g.el = o(
      g.type,
      P,
      W && W.is,
      W
    ), z & 8 ? h(U, g.children) : z & 16 && _(
      g.children,
      U,
      null,
      x,
      A,
      P && K !== "foreignObject",
      V,
      L
    ), Q && Ct(g, null, x, "created"), O(U, g, g.scopeId, V, x), W) {
      for (const he in W)
        he !== "value" && !bn(he) && r(
          U,
          he,
          null,
          W[he],
          P,
          g.children,
          x,
          A,
          Rt
        );
      "value" in W && r(U, "value", null, W.value), (k = W.onVnodeBeforeMount) && Je(k, x, g);
    }
    Q && Ct(g, null, x, "beforeMount");
    const ue = (!A || A && !A.pendingBranch) && G && !G.persisted;
    ue && G.beforeEnter(U), i(U, S, C), ((k = W && W.onVnodeMounted) || ue || Q) && Ne(() => {
      k && Je(k, x, g), ue && G.enter(U), Q && Ct(g, null, x, "mounted");
    }, A);
  }, O = (g, S, C, x, A) => {
    if (C && d(g, C), x)
      for (let P = 0; P < x.length; P++)
        d(g, x[P]);
    if (A) {
      let P = A.subTree;
      if (S === P) {
        const V = A.vnode;
        O(
          g,
          V,
          V.scopeId,
          V.slotScopeIds,
          A.parent
        );
      }
    }
  }, _ = (g, S, C, x, A, P, V, L, U = 0) => {
    for (let k = U; k < g.length; k++) {
      const K = g[k] = L ? Gt(g[k]) : it(g[k]);
      w(
        null,
        K,
        S,
        C,
        x,
        A,
        P,
        V,
        L
      );
    }
  }, R = (g, S, C, x, A, P, V) => {
    const L = S.el = g.el;
    let { patchFlag: U, dynamicChildren: k, dirs: K } = S;
    U |= g.patchFlag & 16;
    const W = g.props || le, z = S.props || le;
    let G;
    C && cn(C, !1), (G = z.onVnodeBeforeUpdate) && Je(G, C, S, g), K && Ct(S, g, C, "beforeUpdate"), C && cn(C, !0);
    const Q = A && S.type !== "foreignObject";
    if (k ? D(
      g.dynamicChildren,
      k,
      L,
      C,
      x,
      Q,
      P
    ) : V || se(
      g,
      S,
      L,
      null,
      C,
      x,
      Q,
      P,
      !1
    ), U > 0) {
      if (U & 16)
        N(
          L,
          S,
          W,
          z,
          C,
          x,
          A
        );
      else if (U & 2 && W.class !== z.class && r(L, "class", null, z.class, A), U & 4 && r(L, "style", W.style, z.style, A), U & 8) {
        const ue = S.dynamicProps;
        for (let he = 0; he < ue.length; he++) {
          const _e = ue[he], yt = W[_e], Fn = z[_e];
          (Fn !== yt || _e === "value") && r(
            L,
            _e,
            yt,
            Fn,
            A,
            g.children,
            C,
            x,
            Rt
          );
        }
      }
      U & 1 && g.children !== S.children && h(L, S.children);
    } else
      !V && k == null && N(
        L,
        S,
        W,
        z,
        C,
        x,
        A
      );
    ((G = z.onVnodeUpdated) || K) && Ne(() => {
      G && Je(G, C, S, g), K && Ct(S, g, C, "updated");
    }, x);
  }, D = (g, S, C, x, A, P, V) => {
    for (let L = 0; L < S.length; L++) {
      const U = g[L], k = S[L], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        U.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (U.type === Le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !vt(U, k) || // - In the case of a component, it could contain anything.
        U.shapeFlag & 70) ? f(U.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      w(
        U,
        k,
        K,
        null,
        x,
        A,
        P,
        V,
        !0
      );
    }
  }, N = (g, S, C, x, A, P, V) => {
    if (C !== x) {
      if (C !== le)
        for (const L in C)
          !bn(L) && !(L in x) && r(
            g,
            L,
            C[L],
            null,
            V,
            S.children,
            A,
            P,
            Rt
          );
      for (const L in x) {
        if (bn(L))
          continue;
        const U = x[L], k = C[L];
        U !== k && L !== "value" && r(
          g,
          L,
          k,
          U,
          V,
          S.children,
          A,
          P,
          Rt
        );
      }
      "value" in x && r(g, "value", C.value, x.value);
    }
  }, M = (g, S, C, x, A, P, V, L, U) => {
    const k = S.el = g ? g.el : l(""), K = S.anchor = g ? g.anchor : l("");
    let { patchFlag: W, dynamicChildren: z, slotScopeIds: G } = S;
    G && (L = L ? L.concat(G) : G), g == null ? (i(k, C, x), i(K, C, x), _(
      S.children,
      C,
      K,
      A,
      P,
      V,
      L,
      U
    )) : W > 0 && W & 64 && z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (D(
      g.dynamicChildren,
      z,
      C,
      A,
      P,
      V,
      L
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (S.key != null || A && S === A.subTree) && la(
      g,
      S,
      !0
      /* shallow */
    )) : se(
      g,
      S,
      C,
      K,
      A,
      P,
      V,
      L,
      U
    );
  }, H = (g, S, C, x, A, P, V, L, U) => {
    S.slotScopeIds = L, g == null ? S.shapeFlag & 512 ? A.ctx.activate(
      S,
      C,
      x,
      V,
      U
    ) : I(
      S,
      C,
      x,
      A,
      P,
      V,
      U
    ) : ne(g, S, U);
  }, I = (g, S, C, x, A, P, V) => {
    const L = g.component = iu(
      g,
      x,
      A
    );
    if (ds(g) && (L.ctx.renderer = Un), ru(L), L.asyncDep) {
      if (A && A.registerDep(L, Z), !g.el) {
        const U = L.subTree = ge(We);
        m(null, U, S, C);
      }
      return;
    }
    Z(
      L,
      g,
      S,
      C,
      A,
      P,
      V
    );
  }, ne = (g, S, C) => {
    const x = S.component = g.component;
    if (tm(g, S, C))
      if (x.asyncDep && !x.asyncResolved) {
        re(x, S, C);
        return;
      } else
        x.next = S, zg(x.update), x.update();
    else
      S.el = g.el, x.vnode = S;
  }, Z = (g, S, C, x, A, P, V) => {
    const L = () => {
      if (g.isMounted) {
        let { next: K, bu: W, u: z, parent: G, vnode: Q } = g, ue = K, he;
        cn(g, !1), K ? (K.el = Q.el, re(g, K, V)) : K = Q, W && Xn(W), (he = K.props && K.props.onVnodeBeforeUpdate) && Je(he, G, K, Q), cn(g, !0);
        const _e = qs(g), yt = g.subTree;
        g.subTree = _e, w(
          yt,
          _e,
          // parent may have changed if it's in a teleport
          f(yt.el),
          // anchor may have changed if it's in a fragment
          _s(yt),
          g,
          A,
          P
        ), K.el = _e.el, ue === null && Zl(g, _e.el), z && Ne(z, A), (he = K.props && K.props.onVnodeUpdated) && Ne(
          () => Je(he, G, K, Q),
          A
        );
      } else {
        let K;
        const { el: W, props: z } = S, { bm: G, m: Q, parent: ue } = g, he = _n(S);
        if (cn(g, !1), G && Xn(G), !he && (K = z && z.onVnodeBeforeMount) && Je(K, ue, S), cn(g, !0), W && lo) {
          const _e = () => {
            g.subTree = qs(g), lo(
              W,
              g.subTree,
              g,
              A,
              null
            );
          };
          he ? S.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !g.isUnmounted && _e()
          ) : _e();
        } else {
          const _e = g.subTree = qs(g);
          w(
            null,
            _e,
            C,
            x,
            g,
            A,
            P
          ), S.el = _e.el;
        }
        if (Q && Ne(Q, A), !he && (K = z && z.onVnodeMounted)) {
          const _e = S;
          Ne(
            () => Je(K, ue, _e),
            A
          );
        }
        (S.shapeFlag & 256 || ue && _n(ue.vnode) && ue.vnode.shapeFlag & 256) && g.a && Ne(g.a, A), g.isMounted = !0, S = C = x = null;
      }
    }, U = g.effect = new fs(
      L,
      () => Hr(k),
      g.scope
      // track it in component's effect scope
    ), k = g.update = () => U.run();
    k.id = g.uid, cn(g, !0), k();
  }, re = (g, S, C) => {
    S.component = g;
    const x = g.vnode.props;
    g.vnode = S, g.next = null, Xm(g, S.props, x, C), Qm(g, S.children, C), mi(), sc(), yi();
  }, se = (g, S, C, x, A, P, V, L, U = !1) => {
    const k = g && g.children, K = g ? g.shapeFlag : 0, W = S.children, { patchFlag: z, shapeFlag: G } = S;
    if (z > 0) {
      if (z & 128) {
        Ss(
          k,
          W,
          C,
          x,
          A,
          P,
          V,
          L,
          U
        );
        return;
      } else if (z & 256) {
        mt(
          k,
          W,
          C,
          x,
          A,
          P,
          V,
          L,
          U
        );
        return;
      }
    }
    G & 8 ? (K & 16 && Rt(k, A, P), W !== k && h(C, W)) : K & 16 ? G & 16 ? Ss(
      k,
      W,
      C,
      x,
      A,
      P,
      V,
      L,
      U
    ) : Rt(k, A, P, !0) : (K & 8 && h(C, ""), G & 16 && _(
      W,
      C,
      x,
      A,
      P,
      V,
      L,
      U
    ));
  }, mt = (g, S, C, x, A, P, V, L, U) => {
    g = g || qn, S = S || qn;
    const k = g.length, K = S.length, W = Math.min(k, K);
    let z;
    for (z = 0; z < W; z++) {
      const G = S[z] = U ? Gt(S[z]) : it(S[z]);
      w(
        g[z],
        G,
        C,
        null,
        A,
        P,
        V,
        L,
        U
      );
    }
    k > K ? Rt(
      g,
      A,
      P,
      !0,
      !1,
      W
    ) : _(
      S,
      C,
      x,
      A,
      P,
      V,
      L,
      U,
      W
    );
  }, Ss = (g, S, C, x, A, P, V, L, U) => {
    let k = 0;
    const K = S.length;
    let W = g.length - 1, z = K - 1;
    for (; k <= W && k <= z; ) {
      const G = g[k], Q = S[k] = U ? Gt(S[k]) : it(S[k]);
      if (vt(G, Q))
        w(
          G,
          Q,
          C,
          null,
          A,
          P,
          V,
          L,
          U
        );
      else
        break;
      k++;
    }
    for (; k <= W && k <= z; ) {
      const G = g[W], Q = S[z] = U ? Gt(S[z]) : it(S[z]);
      if (vt(G, Q))
        w(
          G,
          Q,
          C,
          null,
          A,
          P,
          V,
          L,
          U
        );
      else
        break;
      W--, z--;
    }
    if (k > W) {
      if (k <= z) {
        const G = z + 1, Q = G < K ? S[G].el : x;
        for (; k <= z; )
          w(
            null,
            S[k] = U ? Gt(S[k]) : it(S[k]),
            C,
            Q,
            A,
            P,
            V,
            L,
            U
          ), k++;
      }
    } else if (k > z)
      for (; k <= W; )
        St(g[k], A, P, !0), k++;
    else {
      const G = k, Q = k, ue = /* @__PURE__ */ new Map();
      for (k = Q; k <= z; k++) {
        const et = S[k] = U ? Gt(S[k]) : it(S[k]);
        et.key != null && ue.set(et.key, k);
      }
      let he, _e = 0;
      const yt = z - Q + 1;
      let Fn = !1, za = 0;
      const Si = new Array(yt);
      for (k = 0; k < yt; k++)
        Si[k] = 0;
      for (k = G; k <= W; k++) {
        const et = g[k];
        if (_e >= yt) {
          St(et, A, P, !0);
          continue;
        }
        let _t;
        if (et.key != null)
          _t = ue.get(et.key);
        else
          for (he = Q; he <= z; he++)
            if (Si[he - Q] === 0 && vt(et, S[he])) {
              _t = he;
              break;
            }
        _t === void 0 ? St(et, A, P, !0) : (Si[_t - Q] = k + 1, _t >= za ? za = _t : Fn = !0, w(
          et,
          S[_t],
          C,
          null,
          A,
          P,
          V,
          L,
          U
        ), _e++);
      }
      const qa = Fn ? t0(Si) : qn;
      for (he = qa.length - 1, k = yt - 1; k >= 0; k--) {
        const et = Q + k, _t = S[et], Ga = et + 1 < K ? S[et + 1].el : x;
        Si[k] === 0 ? w(
          null,
          _t,
          C,
          Ga,
          A,
          P,
          V,
          L,
          U
        ) : Fn && (he < 0 || k !== qa[he] ? an(_t, C, Ga, 2) : he--);
      }
    }
  }, an = (g, S, C, x, A = null) => {
    const { el: P, type: V, transition: L, children: U, shapeFlag: k } = g;
    if (k & 6) {
      an(g.component.subTree, S, C, x);
      return;
    }
    if (k & 128) {
      g.suspense.move(S, C, x);
      return;
    }
    if (k & 64) {
      V.move(g, S, C, Un);
      return;
    }
    if (V === Le) {
      i(P, S, C);
      for (let W = 0; W < U.length; W++)
        an(U[W], S, C, x);
      i(g.anchor, S, C);
      return;
    }
    if (V === En) {
      E(g, S, C);
      return;
    }
    if (x !== 2 && k & 1 && L)
      if (x === 0)
        L.beforeEnter(P), i(P, S, C), Ne(() => L.enter(P), A);
      else {
        const { leave: W, delayLeave: z, afterLeave: G } = L, Q = () => i(P, S, C), ue = () => {
          W(P, () => {
            Q(), G && G();
          });
        };
        z ? z(P, Q, ue) : ue();
      }
    else
      i(P, S, C);
  }, St = (g, S, C, x = !1, A = !1) => {
    const {
      type: P,
      props: V,
      ref: L,
      children: U,
      dynamicChildren: k,
      shapeFlag: K,
      patchFlag: W,
      dirs: z
    } = g;
    if (L != null && cr(L, null, C, g, !0), K & 256) {
      S.ctx.deactivate(g);
      return;
    }
    const G = K & 1 && z, Q = !_n(g);
    let ue;
    if (Q && (ue = V && V.onVnodeBeforeUnmount) && Je(ue, S, g), K & 6)
      Ap(g.component, C, x);
    else {
      if (K & 128) {
        g.suspense.unmount(C, x);
        return;
      }
      G && Ct(g, null, S, "beforeUnmount"), K & 64 ? g.type.remove(
        g,
        S,
        C,
        A,
        Un,
        x
      ) : k && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (P !== Le || W > 0 && W & 64) ? Rt(
        k,
        S,
        C,
        !1,
        !0
      ) : (P === Le && W & 384 || !A && K & 16) && Rt(U, S, C), x && ja(g);
    }
    (Q && (ue = V && V.onVnodeUnmounted) || G) && Ne(() => {
      ue && Je(ue, S, g), G && Ct(g, null, S, "unmounted");
    }, C);
  }, ja = (g) => {
    const { type: S, el: C, anchor: x, transition: A } = g;
    if (S === Le) {
      Tp(C, x);
      return;
    }
    if (S === En) {
      v(g);
      return;
    }
    const P = () => {
      s(C), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (g.shapeFlag & 1 && A && !A.persisted) {
      const { leave: V, delayLeave: L } = A, U = () => V(C, P);
      L ? L(g.el, P, U) : U();
    } else
      P();
  }, Tp = (g, S) => {
    let C;
    for (; g !== S; )
      C = u(g), s(g), g = C;
    s(S);
  }, Ap = (g, S, C) => {
    const { bum: x, scope: A, update: P, subTree: V, um: L } = g;
    x && Xn(x), A.stop(), P && (P.active = !1, St(V, g, S, C)), L && Ne(L, S), Ne(() => {
      g.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve());
  }, Rt = (g, S, C, x = !1, A = !1, P = 0) => {
    for (let V = P; V < g.length; V++)
      St(g[V], S, C, x, A);
  }, _s = (g) => g.shapeFlag & 6 ? _s(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : u(g.anchor || g.el), Ka = (g, S, C) => {
    g == null ? S._vnode && St(S._vnode, null, null, !0) : w(S._vnode || null, g, S, null, null, null, C), sc(), lr(), S._vnode = g;
  }, Un = {
    p: w,
    um: St,
    m: an,
    r: ja,
    mt: I,
    mc: _,
    pc: se,
    pbc: D,
    n: _s,
    o: t
  };
  let oo, lo;
  return e && ([oo, lo] = e(
    Un
  )), {
    render: Ka,
    hydrate: oo,
    createApp: qm(Ka, oo)
  };
}
function cn({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function la(t, e, n = !1) {
  const i = t.children, s = e.children;
  if (F(i) && F(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = Gt(s[r]), l.el = o.el), n || la(o, l)), l.type === On && (l.el = o.el);
    }
}
function t0(t) {
  const e = t.slice(), n = [0];
  let i, s, r, o, l;
  const a = t.length;
  for (i = 0; i < a; i++) {
    const c = t[i];
    if (c !== 0) {
      if (s = n[n.length - 1], t[s] < c) {
        e[i] = s, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, t[n[l]] < c ? r = l + 1 : o = l;
      c < t[n[r]] && (r > 0 && (e[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = e[o];
  return n;
}
const n0 = (t) => t.__isTeleport, Pi = (t) => t && (t.disabled || t.disabled === ""), mc = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Vo = (t, e) => {
  const n = t && t.to;
  return J(n) ? e ? e(n) : null : n;
}, i0 = {
  __isTeleport: !0,
  process(t, e, n, i, s, r, o, l, a, c) {
    const {
      mc: h,
      pc: f,
      pbc: u,
      o: { insert: d, querySelector: p, createText: w, createComment: b }
    } = c, m = Pi(e.props);
    let { shapeFlag: y, children: E, dynamicChildren: v } = e;
    if (t == null) {
      const T = e.el = w(""), B = e.anchor = w("");
      d(T, n, i), d(B, n, i);
      const O = e.target = Vo(e.props, p), _ = e.targetAnchor = w("");
      O && (d(_, O), o = o || mc(O));
      const R = (D, N) => {
        y & 16 && h(
          E,
          D,
          N,
          s,
          r,
          o,
          l,
          a
        );
      };
      m ? R(n, B) : O && R(O, _);
    } else {
      e.el = t.el;
      const T = e.anchor = t.anchor, B = e.target = t.target, O = e.targetAnchor = t.targetAnchor, _ = Pi(t.props), R = _ ? n : B, D = _ ? T : O;
      if (o = o || mc(B), v ? (u(
        t.dynamicChildren,
        v,
        R,
        s,
        r,
        o,
        l
      ), la(t, e, !0)) : a || f(
        t,
        e,
        R,
        D,
        s,
        r,
        o,
        l,
        !1
      ), m)
        _ || Ns(
          e,
          n,
          T,
          c,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const N = e.target = Vo(
          e.props,
          p
        );
        N && Ns(
          e,
          N,
          null,
          c,
          0
        );
      } else
        _ && Ns(
          e,
          B,
          O,
          c,
          1
        );
    }
    Xf(e);
  },
  remove(t, e, n, i, { um: s, o: { remove: r } }, o) {
    const { shapeFlag: l, children: a, anchor: c, targetAnchor: h, target: f, props: u } = t;
    if (f && r(h), (o || !Pi(u)) && (r(c), l & 16))
      for (let d = 0; d < a.length; d++) {
        const p = a[d];
        s(
          p,
          e,
          n,
          !0,
          !!p.dynamicChildren
        );
      }
  },
  move: Ns,
  hydrate: s0
};
function Ns(t, e, n, { o: { insert: i }, m: s }, r = 2) {
  r === 0 && i(t.targetAnchor, e, n);
  const { el: o, anchor: l, shapeFlag: a, children: c, props: h } = t, f = r === 2;
  if (f && i(o, e, n), (!f || Pi(h)) && a & 16)
    for (let u = 0; u < c.length; u++)
      s(
        c[u],
        e,
        n,
        2
      );
  f && i(l, e, n);
}
function s0(t, e, n, i, s, r, {
  o: { nextSibling: o, parentNode: l, querySelector: a }
}, c) {
  const h = e.target = Vo(
    e.props,
    a
  );
  if (h) {
    const f = h._lpa || h.firstChild;
    if (e.shapeFlag & 16)
      if (Pi(e.props))
        e.anchor = c(
          o(t),
          e,
          l(t),
          n,
          i,
          s,
          r
        ), e.targetAnchor = f;
      else {
        e.anchor = o(t);
        let u = f;
        for (; u; )
          if (u = o(u), u && u.nodeType === 8 && u.data === "teleport anchor") {
            e.targetAnchor = u, h._lpa = e.targetAnchor && o(e.targetAnchor);
            break;
          }
        c(
          f,
          e,
          h,
          n,
          i,
          s,
          r
        );
      }
    Xf(e);
  }
  return e.anchor && o(e.anchor);
}
const r0 = i0;
function Xf(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut();
  }
}
const Le = Symbol.for("v-fgt"), On = Symbol.for("v-txt"), We = Symbol.for("v-cmt"), En = Symbol.for("v-stc"), Ii = [];
let Xe = null;
function ps(t = !1) {
  Ii.push(Xe = t ? null : []);
}
function Yf() {
  Ii.pop(), Xe = Ii[Ii.length - 1] || null;
}
let Mn = 1;
function Wo(t) {
  Mn += t;
}
function Zf(t) {
  return t.dynamicChildren = Mn > 0 ? Xe || qn : null, Yf(), Mn > 0 && Xe && Xe.push(t), t;
}
function Qf(t, e, n, i, s, r) {
  return Zf(
    Jr(
      t,
      e,
      n,
      i,
      s,
      r,
      !0
      /* isBlock */
    )
  );
}
function aa(t, e, n, i, s) {
  return Zf(
    ge(
      t,
      e,
      n,
      i,
      s,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function nn(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function vt(t, e) {
  return t.type === e.type && t.key === e.key;
}
function o0(t) {
}
const Gr = "__vInternal", eu = ({ key: t }) => t ?? null, Gs = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? J(t) || xe(t) || q(t) ? { i: Re, r: t, k: e, f: !!n } : t : null);
function Jr(t, e = null, n = null, i = 0, s = null, r = t === Le ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && eu(e),
    ref: e && Gs(e),
    scopeId: Wr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Re
  };
  return l ? (ha(a, n), r & 128 && t.normalize(a)) : n && (a.shapeFlag |= J(n) ? 8 : 16), Mn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Xe.push(a), a;
}
const ge = l0;
function l0(t, e = null, n = null, i = 0, s = null, r = !1) {
  if ((!t || t === If) && (t = We), nn(t)) {
    const l = kt(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && ha(l, n), Mn > 0 && !r && Xe && (l.shapeFlag & 6 ? Xe[Xe.indexOf(t)] = l : Xe.push(l)), l.patchFlag |= -2, l;
  }
  if (g0(t) && (t = t.__vccOpts), e) {
    e = tu(e);
    let { class: l, style: a } = e;
    l && !J(l) && (e.class = hs(l)), ce(a) && (Wl(a) && !F(a) && (a = ee({}, a)), e.style = cs(a));
  }
  const o = J(t) ? 1 : Sf(t) ? 128 : n0(t) ? 64 : ce(t) ? 4 : q(t) ? 2 : 0;
  return Jr(
    t,
    e,
    n,
    i,
    s,
    o,
    r,
    !0
  );
}
function tu(t) {
  return t ? Wl(t) || Gr in t ? ee({}, t) : t : null;
}
function kt(t, e, n = !1) {
  const { props: i, ref: s, patchFlag: r, children: o } = t, l = e ? nu(i || {}, e) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: l,
    key: l && eu(l),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? F(s) ? s.concat(Gs(e)) : [s, Gs(e)] : Gs(e)
    ) : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Le ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && kt(t.ssContent),
    ssFallback: t.ssFallback && kt(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function ca(t = " ", e = 0) {
  return ge(On, null, t, e);
}
function a0(t, e) {
  const n = ge(En, null, t);
  return n.staticCount = e, n;
}
function c0(t = "", e = !1) {
  return e ? (ps(), aa(We, null, t)) : ge(We, null, t);
}
function it(t) {
  return t == null || typeof t == "boolean" ? ge(We) : F(t) ? ge(
    Le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? Gt(t) : ge(On, null, String(t));
}
function Gt(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : kt(t);
}
function ha(t, e) {
  let n = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (F(e))
    n = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), ha(t, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = e._;
      !s && !(Gr in e) ? e._ctx = Re : s === 3 && Re && (Re.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    q(e) ? (e = { default: e, _ctx: Re }, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [ca(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function nu(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    for (const s in i)
      if (s === "class")
        e.class !== i.class && (e.class = hs([e.class, i.class]));
      else if (s === "style")
        e.style = cs([e.style, i.style]);
      else if (Ln(s)) {
        const r = e[s], o = i[s];
        o && r !== o && !(F(r) && r.includes(o)) && (e[s] = r ? [].concat(r, o) : o);
      } else
        s !== "" && (e[s] = i[s]);
  }
  return e;
}
function Je(t, e, n, i = null) {
  lt(t, e, 7, [
    n,
    i
  ]);
}
const h0 = Hf();
let f0 = 0;
function iu(t, e, n) {
  const i = t.type, s = (e ? e.appContext : t.appContext) || h0, r = {
    uid: f0++,
    vnode: t,
    type: i,
    parent: e,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Ul(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: $f(i, s),
    emitsOptions: wf(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: le,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: le,
    data: le,
    props: le,
    attrs: le,
    slots: le,
    refs: le,
    setupState: le,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = Gg.bind(null, r), t.ce && t.ce(r), r;
}
let Ce = null;
const $t = () => Ce || Re;
let fa, Hn, yc = "__VUE_INSTANCE_SETTERS__";
(Hn = Ro()[yc]) || (Hn = Ro()[yc] = []), Hn.push((t) => Ce = t), fa = (t) => {
  Hn.length > 1 ? Hn.forEach((e) => e(t)) : Hn[0](t);
};
const sn = (t) => {
  fa(t), t.scope.on();
}, Yt = () => {
  Ce && Ce.scope.off(), fa(null);
};
function su(t) {
  return t.vnode.shapeFlag & 4;
}
let ri = !1;
function ru(t, e = !1) {
  ri = e;
  const { props: n, children: i } = t.vnode, s = su(t);
  Jm(t, n, s, e), Zm(t, i);
  const r = s ? u0(t, e) : void 0;
  return ri = !1, r;
}
function u0(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = $l(new Proxy(t.ctx, Bo));
  const { setup: i } = n;
  if (i) {
    const s = t.setupContext = i.length > 1 ? au(t) : null;
    sn(t), mi();
    const r = Ut(
      i,
      t,
      0,
      [t.props, s]
    );
    if (yi(), Yt(), Il(r)) {
      if (r.then(Yt, Yt), e)
        return r.then((o) => {
          $o(t, o, e);
        }).catch((o) => {
          Bn(o, t, 0);
        });
      t.asyncDep = r;
    } else
      $o(t, r, e);
  } else
    lu(t, e);
}
function $o(t, e, n) {
  q(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ce(e) && (t.setupState = ql(e)), lu(t, n);
}
let hr, jo;
function ou(t) {
  hr = t, jo = (e) => {
    e.render._rc && (e.withProxy = new Proxy(e.ctx, Am));
  };
}
const d0 = () => !hr;
function lu(t, e, n) {
  const i = t.type;
  if (!t.render) {
    if (!e && hr && !i.render) {
      const s = i.template || ra(t).template;
      if (s) {
        const { isCustomElement: r, compilerOptions: o } = t.appContext.config, { delimiters: l, compilerOptions: a } = i, c = ee(
          ee(
            {
              isCustomElement: r,
              delimiters: l
            },
            o
          ),
          a
        );
        i.render = hr(s, c);
      }
    }
    t.render = i.render || qe, jo && jo(t);
  }
  sn(t), mi(), Vm(t), yi(), Yt();
}
function p0(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return Ze(t, "get", "$attrs"), e[n];
      }
    }
  ));
}
function au(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return p0(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Xr(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(ql($l(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in Di)
          return Di[n](t);
      },
      has(e, n) {
        return n in e || n in Di;
      }
    }));
}
function Ko(t, e = !0) {
  return q(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function g0(t) {
  return q(t) && "__vccOpts" in t;
}
const cu = (t, e) => Vg(t, e, ri);
function hu(t, e, n) {
  const i = arguments.length;
  return i === 2 ? ce(e) && !F(e) ? nn(e) ? ge(t, null, [e]) : ge(t, e) : ge(t, null, e) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && nn(n) && (n = [n]), ge(t, e, n));
}
const fu = Symbol.for("v-scx"), uu = () => Li(fu);
function m0() {
}
function y0(t, e, n, i) {
  const s = n[i];
  if (s && du(s, t))
    return s;
  const r = e();
  return r.memo = t.slice(), n[i] = r;
}
function du(t, e) {
  const n = t.memo;
  if (n.length != e.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (ii(n[i], e[i]))
      return !1;
  return Mn > 0 && Xe && Xe.push(t), !0;
}
const pu = "3.3.4", b0 = {
  createComponentInstance: iu,
  setupComponent: ru,
  renderComponentRoot: qs,
  setCurrentRenderingInstance: qi,
  isVNode: nn,
  normalizeVNode: it
}, v0 = b0, w0 = null, S0 = null, _0 = "http://www.w3.org/2000/svg", un = typeof document < "u" ? document : null, bc = un && /* @__PURE__ */ un.createElement("template"), E0 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, i) => {
    const s = e ? un.createElementNS(_0, t) : un.createElement(t, n ? { is: n } : void 0);
    return t === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (t) => un.createTextNode(t),
  createComment: (t) => un.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => un.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, i, s, r) {
    const o = n ? n.previousSibling : e.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; e.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      bc.innerHTML = i ? `<svg>${t}</svg>` : t;
      const l = bc.content;
      if (i) {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      e.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
};
function C0(t, e, n) {
  const i = t._vtc;
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
function T0(t, e, n) {
  const i = t.style, s = J(n);
  if (n && !s) {
    if (e && !J(e))
      for (const r in e)
        n[r] == null && zo(i, r, "");
    for (const r in n)
      zo(i, r, n[r]);
  } else {
    const r = i.display;
    s ? e !== n && (i.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (i.display = r);
  }
}
const vc = /\s*!important$/;
function zo(t, e, n) {
  if (F(n))
    n.forEach((i) => zo(t, e, i));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const i = A0(t, e);
    vc.test(n) ? t.setProperty(
      st(i),
      n.replace(vc, ""),
      "important"
    ) : t[i] = n;
  }
}
const wc = ["Webkit", "Moz", "ms"], po = {};
function A0(t, e) {
  const n = po[e];
  if (n)
    return n;
  let i = Ae(e);
  if (i !== "filter" && i in t)
    return po[e] = i;
  i = In(i);
  for (let s = 0; s < wc.length; s++) {
    const r = wc[s] + i;
    if (r in t)
      return po[e] = r;
  }
  return e;
}
const Sc = "http://www.w3.org/1999/xlink";
function x0(t, e, n, i, s) {
  if (i && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(Sc, e.slice(6, e.length)) : t.setAttributeNS(Sc, e, n);
  else {
    const r = qp(e);
    n == null || r && !Xh(n) ? t.removeAttribute(e) : t.setAttribute(e, r ? "" : n);
  }
}
function k0(t, e, n, i, s, r, o) {
  if (e === "innerHTML" || e === "textContent") {
    i && o(i, s, r), t[e] = n ?? "";
    return;
  }
  const l = t.tagName;
  if (e === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    t._value = n;
    const c = l === "OPTION" ? t.getAttribute("value") : t.value, h = n ?? "";
    c !== h && (t.value = h), n == null && t.removeAttribute(e);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean" ? n = Xh(n) : n == null && c === "string" ? (n = "", a = !0) : c === "number" && (n = 0, a = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  a && t.removeAttribute(e);
}
function Lt(t, e, n, i) {
  t.addEventListener(e, n, i);
}
function O0(t, e, n, i) {
  t.removeEventListener(e, n, i);
}
function M0(t, e, n, i, s = null) {
  const r = t._vei || (t._vei = {}), o = r[e];
  if (i && o)
    o.value = i;
  else {
    const [l, a] = R0(e);
    if (i) {
      const c = r[e] = L0(i, s);
      Lt(t, l, c, a);
    } else
      o && (O0(t, l, o, a), r[e] = void 0);
  }
}
const _c = /(?:Once|Passive|Capture)$/;
function R0(t) {
  let e;
  if (_c.test(t)) {
    e = {};
    let i;
    for (; i = t.match(_c); )
      t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : st(t.slice(2)), e];
}
let go = 0;
const N0 = /* @__PURE__ */ Promise.resolve(), D0 = () => go || (N0.then(() => go = 0), go = Date.now());
function L0(t, e) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    lt(
      P0(i, n.value),
      e,
      5,
      [i]
    );
  };
  return n.value = t, n.attached = D0(), n;
}
function P0(t, e) {
  if (F(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((i) => (s) => !s._stopped && i && i(s));
  } else
    return e;
}
const Ec = /^on[a-z]/, I0 = (t, e, n, i, s = !1, r, o, l, a) => {
  e === "class" ? C0(t, i, s) : e === "style" ? T0(t, n, i) : Ln(e) ? Ll(e) || M0(t, e, n, i, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : B0(t, e, i, s)) ? k0(
    t,
    e,
    i,
    r,
    o,
    l,
    a
  ) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), x0(t, e, i, s));
};
function B0(t, e, n, i) {
  return i ? !!(e === "innerHTML" || e === "textContent" || e in t && Ec.test(e) && q(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || Ec.test(e) && J(n) ? !1 : e in t;
}
function gu(t, e) {
  const n = na(t);
  class i extends Yr {
    constructor(r) {
      super(n, r, e);
    }
  }
  return i.def = n, i;
}
const U0 = (t) => gu(t, Ru), F0 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Yr extends F0 {
  constructor(e, n = {}, i) {
    super(), this._def = e, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && i ? i(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Jl(() => {
      this._connected || (Jo(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    new MutationObserver((i) => {
      for (const s of i)
        this._setAttr(s.attributeName);
    }).observe(this, { attributes: !0 });
    const e = (i, s = !1) => {
      const { props: r, styles: o } = i;
      let l;
      if (r && !F(r))
        for (const a in r) {
          const c = r[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = rr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ae(a)] = !0);
        }
      this._numberProps = l, s && this._resolveProps(i), this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((i) => e(i, !0)) : e(this._def);
  }
  _resolveProps(e) {
    const { props: n } = e, i = F(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && i.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of i.map(Ae))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(r) {
          this._setProp(s, r);
        }
      });
  }
  _setAttr(e) {
    let n = this.getAttribute(e);
    const i = Ae(e);
    this._numberProps && this._numberProps[i] && (n = rr(n)), this._setProp(i, n, !1);
  }
  /**
   * @internal
   */
  _getProp(e) {
    return this._props[e];
  }
  /**
   * @internal
   */
  _setProp(e, n, i = !0, s = !0) {
    n !== this._props[e] && (this._props[e] = n, s && this._instance && this._update(), i && (n === !0 ? this.setAttribute(st(e), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(st(e), n + "") : n || this.removeAttribute(st(e))));
  }
  _update() {
    Jo(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const e = ge(this._def, ee({}, this._props));
    return this._instance || (e.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(r, {
            detail: o
          })
        );
      };
      n.emit = (r, ...o) => {
        i(r, o), st(r) !== r && i(st(r), o);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof Yr) {
          n.parent = s._instance, n.provides = s._instance.provides;
          break;
        }
    }), e;
  }
  _applyStyles(e) {
    e && e.forEach((n) => {
      const i = document.createElement("style");
      i.textContent = n, this.shadowRoot.appendChild(i);
    });
  }
}
function H0(t = "$style") {
  {
    const e = $t();
    if (!e)
      return le;
    const n = e.type.__cssModules;
    if (!n)
      return le;
    const i = n[t];
    return i || le;
  }
}
function V0(t) {
  const e = $t();
  if (!e)
    return;
  const n = e.ut = (s = t(e.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
    ).forEach((r) => Go(r, s));
  }, i = () => {
    const s = t(e.proxy);
    qo(e.subTree, s), n(s);
  };
  Ef(i), bi(() => {
    const s = new MutationObserver(i);
    s.observe(e.subTree.el.parentNode, { childList: !0 }), qr(() => s.disconnect());
  });
}
function qo(t, e) {
  if (t.shapeFlag & 128) {
    const n = t.suspense;
    t = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      qo(n.activeBranch, e);
    });
  }
  for (; t.component; )
    t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el)
    Go(t.el, e);
  else if (t.type === Le)
    t.children.forEach((n) => qo(n, e));
  else if (t.type === En) {
    let { el: n, anchor: i } = t;
    for (; n && (Go(n, e), n !== i); )
      n = n.nextSibling;
  }
}
function Go(t, e) {
  if (t.nodeType === 1) {
    const n = t.style;
    for (const i in e)
      n.setProperty(`--${i}`, e[i]);
  }
}
const zt = "transition", _i = "animation", ua = (t, { slots: e }) => hu(Tf, yu(t), e);
ua.displayName = "Transition";
const mu = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, W0 = ua.props = /* @__PURE__ */ ee(
  {},
  ta,
  mu
), hn = (t, e = []) => {
  F(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, Cc = (t) => t ? F(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function yu(t) {
  const e = {};
  for (const M in t)
    M in mu || (e[M] = t[M]);
  if (t.css === !1)
    return e;
  const {
    name: n = "v",
    type: i,
    duration: s,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = r,
    appearActiveClass: c = o,
    appearToClass: h = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: u = `${n}-leave-active`,
    leaveToClass: d = `${n}-leave-to`
  } = t, p = $0(s), w = p && p[0], b = p && p[1], {
    onBeforeEnter: m,
    onEnter: y,
    onEnterCancelled: E,
    onLeave: v,
    onLeaveCancelled: T,
    onBeforeAppear: B = m,
    onAppear: O = y,
    onAppearCancelled: _ = E
  } = e, R = (M, H, I) => {
    qt(M, H ? h : l), qt(M, H ? c : o), I && I();
  }, D = (M, H) => {
    M._isLeaving = !1, qt(M, f), qt(M, d), qt(M, u), H && H();
  }, N = (M) => (H, I) => {
    const ne = M ? O : y, Z = () => R(H, M, I);
    hn(ne, [H, Z]), Tc(() => {
      qt(H, M ? a : r), Nt(H, M ? h : l), Cc(ne) || Ac(H, i, w, Z);
    });
  };
  return ee(e, {
    onBeforeEnter(M) {
      hn(m, [M]), Nt(M, r), Nt(M, o);
    },
    onBeforeAppear(M) {
      hn(B, [M]), Nt(M, a), Nt(M, c);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(M, H) {
      M._isLeaving = !0;
      const I = () => D(M, H);
      Nt(M, f), vu(), Nt(M, u), Tc(() => {
        M._isLeaving && (qt(M, f), Nt(M, d), Cc(v) || Ac(M, i, b, I));
      }), hn(v, [M, I]);
    },
    onEnterCancelled(M) {
      R(M, !1), hn(E, [M]);
    },
    onAppearCancelled(M) {
      R(M, !0), hn(_, [M]);
    },
    onLeaveCancelled(M) {
      D(M), hn(T, [M]);
    }
  });
}
function $0(t) {
  if (t == null)
    return null;
  if (ce(t))
    return [mo(t.enter), mo(t.leave)];
  {
    const e = mo(t);
    return [e, e];
  }
}
function mo(t) {
  return rr(t);
}
function Nt(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t._vtc || (t._vtc = /* @__PURE__ */ new Set())).add(e);
}
function qt(t, e) {
  e.split(/\s+/).forEach((i) => i && t.classList.remove(i));
  const { _vtc: n } = t;
  n && (n.delete(e), n.size || (t._vtc = void 0));
}
function Tc(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let j0 = 0;
function Ac(t, e, n, i) {
  const s = t._endId = ++j0, r = () => {
    s === t._endId && i();
  };
  if (n)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: a } = bu(t, e);
  if (!o)
    return i();
  const c = o + "end";
  let h = 0;
  const f = () => {
    t.removeEventListener(c, u), r();
  }, u = (d) => {
    d.target === t && ++h >= a && f();
  };
  setTimeout(() => {
    h < a && f();
  }, l + 1), t.addEventListener(c, u);
}
function bu(t, e) {
  const n = window.getComputedStyle(t), i = (p) => (n[p] || "").split(", "), s = i(`${zt}Delay`), r = i(`${zt}Duration`), o = xc(s, r), l = i(`${_i}Delay`), a = i(`${_i}Duration`), c = xc(l, a);
  let h = null, f = 0, u = 0;
  e === zt ? o > 0 && (h = zt, f = o, u = r.length) : e === _i ? c > 0 && (h = _i, f = c, u = a.length) : (f = Math.max(o, c), h = f > 0 ? o > c ? zt : _i : null, u = h ? h === zt ? r.length : a.length : 0);
  const d = h === zt && /\b(transform|all)(,|$)/.test(
    i(`${zt}Property`).toString()
  );
  return {
    type: h,
    timeout: f,
    propCount: u,
    hasTransform: d
  };
}
function xc(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((n, i) => kc(n) + kc(t[i])));
}
function kc(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function vu() {
  return document.body.offsetHeight;
}
const wu = /* @__PURE__ */ new WeakMap(), Su = /* @__PURE__ */ new WeakMap(), _u = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ ee({}, W0, {
    tag: String,
    moveClass: String
  }),
  setup(t, { slots: e }) {
    const n = $t(), i = ea();
    let s, r;
    return Kr(() => {
      if (!s.length)
        return;
      const o = t.moveClass || `${t.name || "v"}-move`;
      if (!X0(
        s[0].el,
        n.vnode.el,
        o
      ))
        return;
      s.forEach(q0), s.forEach(G0);
      const l = s.filter(J0);
      vu(), l.forEach((a) => {
        const c = a.el, h = c.style;
        Nt(c, o), h.transform = h.webkitTransform = h.transitionDuration = "";
        const f = c._moveCb = (u) => {
          u && u.target !== c || (!u || /transform$/.test(u.propertyName)) && (c.removeEventListener("transitionend", f), c._moveCb = null, qt(c, o));
        };
        c.addEventListener("transitionend", f);
      });
    }), () => {
      const o = te(t), l = yu(o);
      let a = o.tag || Le;
      s = r, r = e.default ? $r(e.default()) : [];
      for (let c = 0; c < r.length; c++) {
        const h = r[c];
        h.key != null && kn(
          h,
          si(h, l, i, n)
        );
      }
      if (s)
        for (let c = 0; c < s.length; c++) {
          const h = s[c];
          kn(
            h,
            si(h, l, i, n)
          ), wu.set(h, h.el.getBoundingClientRect());
        }
      return ge(a, null, r);
    };
  }
}, K0 = (t) => delete t.mode;
_u.props;
const z0 = _u;
function q0(t) {
  const e = t.el;
  e._moveCb && e._moveCb(), e._enterCb && e._enterCb();
}
function G0(t) {
  Su.set(t, t.el.getBoundingClientRect());
}
function J0(t) {
  const e = wu.get(t), n = Su.get(t), i = e.left - n.left, s = e.top - n.top;
  if (i || s) {
    const r = t.el.style;
    return r.transform = r.webkitTransform = `translate(${i}px,${s}px)`, r.transitionDuration = "0s", t;
  }
}
function X0(t, e, n) {
  const i = t.cloneNode();
  t._vtc && t._vtc.forEach((o) => {
    o.split(/\s+/).forEach((l) => l && i.classList.remove(l));
  }), n.split(/\s+/).forEach((o) => o && i.classList.add(o)), i.style.display = "none";
  const s = e.nodeType === 1 ? e : e.parentNode;
  s.appendChild(i);
  const { hasTransform: r } = bu(i);
  return s.removeChild(i), r;
}
const rn = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return F(e) ? (n) => Xn(e, n) : e;
};
function Y0(t) {
  t.target.composing = !0;
}
function Oc(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const fr = {
  created(t, { modifiers: { lazy: e, trim: n, number: i } }, s) {
    t._assign = rn(s);
    const r = i || s.props && s.props.type === "number";
    Lt(t, e ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let l = t.value;
      n && (l = l.trim()), r && (l = sr(l)), t._assign(l);
    }), n && Lt(t, "change", () => {
      t.value = t.value.trim();
    }), e || (Lt(t, "compositionstart", Y0), Lt(t, "compositionend", Oc), Lt(t, "change", Oc));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: i, number: s } }, r) {
    if (t._assign = rn(r), t.composing || document.activeElement === t && t.type !== "range" && (n || i && t.value.trim() === e || (s || t.type === "number") && sr(t.value) === e))
      return;
    const o = e ?? "";
    t.value !== o && (t.value = o);
  }
}, da = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, n) {
    t._assign = rn(n), Lt(t, "change", () => {
      const i = t._modelValue, s = oi(t), r = t.checked, o = t._assign;
      if (F(i)) {
        const l = Dr(i, s), a = l !== -1;
        if (r && !a)
          o(i.concat(s));
        else if (!r && a) {
          const c = [...i];
          c.splice(l, 1), o(c);
        }
      } else if (Pn(i)) {
        const l = new Set(i);
        r ? l.add(s) : l.delete(s), o(l);
      } else
        o(Cu(t, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Mc,
  beforeUpdate(t, e, n) {
    t._assign = rn(n), Mc(t, e, n);
  }
};
function Mc(t, { value: e, oldValue: n }, i) {
  t._modelValue = e, F(e) ? t.checked = Dr(e, i.props.value) > -1 : Pn(e) ? t.checked = e.has(i.props.value) : e !== n && (t.checked = en(e, Cu(t, !0)));
}
const pa = {
  created(t, { value: e }, n) {
    t.checked = en(e, n.props.value), t._assign = rn(n), Lt(t, "change", () => {
      t._assign(oi(t));
    });
  },
  beforeUpdate(t, { value: e, oldValue: n }, i) {
    t._assign = rn(i), e !== n && (t.checked = en(e, i.props.value));
  }
}, Eu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, i) {
    const s = Pn(e);
    Lt(t, "change", () => {
      const r = Array.prototype.filter.call(t.options, (o) => o.selected).map(
        (o) => n ? sr(oi(o)) : oi(o)
      );
      t._assign(
        t.multiple ? s ? new Set(r) : r : r[0]
      );
    }), t._assign = rn(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e }) {
    Rc(t, e);
  },
  beforeUpdate(t, e, n) {
    t._assign = rn(n);
  },
  updated(t, { value: e }) {
    Rc(t, e);
  }
};
function Rc(t, e) {
  const n = t.multiple;
  if (!(n && !F(e) && !Pn(e))) {
    for (let i = 0, s = t.options.length; i < s; i++) {
      const r = t.options[i], o = oi(r);
      if (n)
        F(e) ? r.selected = Dr(e, o) > -1 : r.selected = e.has(o);
      else if (en(oi(r), e)) {
        t.selectedIndex !== i && (t.selectedIndex = i);
        return;
      }
    }
    !n && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function oi(t) {
  return "_value" in t ? t._value : t.value;
}
function Cu(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
const Tu = {
  created(t, e, n) {
    Ds(t, e, n, null, "created");
  },
  mounted(t, e, n) {
    Ds(t, e, n, null, "mounted");
  },
  beforeUpdate(t, e, n, i) {
    Ds(t, e, n, i, "beforeUpdate");
  },
  updated(t, e, n, i) {
    Ds(t, e, n, i, "updated");
  }
};
function Au(t, e) {
  switch (t) {
    case "SELECT":
      return Eu;
    case "TEXTAREA":
      return fr;
    default:
      switch (e) {
        case "checkbox":
          return da;
        case "radio":
          return pa;
        default:
          return fr;
      }
  }
}
function Ds(t, e, n, i, s) {
  const o = Au(
    t.tagName,
    n.props && n.props.type
  )[s];
  o && o(t, e, n, i);
}
function Z0() {
  fr.getSSRProps = ({ value: t }) => ({ value: t }), pa.getSSRProps = ({ value: t }, e) => {
    if (e.props && en(e.props.value, t))
      return { checked: !0 };
  }, da.getSSRProps = ({ value: t }, e) => {
    if (F(t)) {
      if (e.props && Dr(t, e.props.value) > -1)
        return { checked: !0 };
    } else if (Pn(t)) {
      if (e.props && t.has(e.props.value))
        return { checked: !0 };
    } else if (t)
      return { checked: !0 };
  }, Tu.getSSRProps = (t, e) => {
    if (typeof e.type != "string")
      return;
    const n = Au(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      e.type.toUpperCase(),
      e.props && e.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(t, e);
  };
}
const Q0 = ["ctrl", "shift", "alt", "meta"], ey = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => Q0.some((n) => t[`${n}Key`] && !e.includes(n))
}, ty = (t, e) => (n, ...i) => {
  for (let s = 0; s < e.length; s++) {
    const r = ey[e[s]];
    if (r && r(n, e))
      return;
  }
  return t(n, ...i);
}, ny = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, iy = (t, e) => (n) => {
  if (!("key" in n))
    return;
  const i = st(n.key);
  if (e.some((s) => s === i || ny[s] === i))
    return t(n);
}, xu = {
  beforeMount(t, { value: e }, { transition: n }) {
    t._vod = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : Ei(t, e);
  },
  mounted(t, { value: e }, { transition: n }) {
    n && e && n.enter(t);
  },
  updated(t, { value: e, oldValue: n }, { transition: i }) {
    !e != !n && (i ? e ? (i.beforeEnter(t), Ei(t, !0), i.enter(t)) : i.leave(t, () => {
      Ei(t, !1);
    }) : Ei(t, e));
  },
  beforeUnmount(t, { value: e }) {
    Ei(t, e);
  }
};
function Ei(t, e) {
  t.style.display = e ? t._vod : "none";
}
function sy() {
  xu.getSSRProps = ({ value: t }) => {
    if (!t)
      return { style: { display: "none" } };
  };
}
const ku = /* @__PURE__ */ ee({ patchProp: I0 }, E0);
let Bi, Nc = !1;
function Ou() {
  return Bi || (Bi = qf(ku));
}
function Mu() {
  return Bi = Nc ? Bi : Gf(ku), Nc = !0, Bi;
}
const Jo = (...t) => {
  Ou().render(...t);
}, Ru = (...t) => {
  Mu().hydrate(...t);
}, Nu = (...t) => {
  const e = Ou().createApp(...t), { mount: n } = e;
  return e.mount = (i) => {
    const s = Du(i);
    if (!s)
      return;
    const r = e._component;
    !q(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
    const o = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, e;
}, ry = (...t) => {
  const e = Mu().createApp(...t), { mount: n } = e;
  return e.mount = (i) => {
    const s = Du(i);
    if (s)
      return n(s, !0, s instanceof SVGElement);
  }, e;
};
function Du(t) {
  return J(t) ? document.querySelector(t) : t;
}
let Dc = !1;
const oy = () => {
  Dc || (Dc = !0, Z0(), sy());
}, ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Tf,
  BaseTransitionPropsValidators: ta,
  Comment: We,
  EffectScope: Ul,
  Fragment: Le,
  KeepAlive: mm,
  ReactiveEffect: fs,
  Static: En,
  Suspense: im,
  Teleport: r0,
  Text: On,
  Transition: ua,
  TransitionGroup: z0,
  VueElement: Yr,
  assertNumber: $g,
  callWithAsyncErrorHandling: lt,
  callWithErrorHandling: Ut,
  camelize: Ae,
  capitalize: In,
  cloneVNode: kt,
  compatUtils: S0,
  computed: cu,
  createApp: Nu,
  createBlock: aa,
  createCommentVNode: c0,
  createElementBlock: Qf,
  createElementVNode: Jr,
  createHydrationRenderer: Gf,
  createPropsRestProxy: Fm,
  createRenderer: qf,
  createSSRApp: ry,
  createSlots: Em,
  createStaticVNode: a0,
  createTextVNode: ca,
  createVNode: ge,
  customRef: Pg,
  defineAsyncComponent: pm,
  defineComponent: na,
  defineCustomElement: gu,
  defineEmits: km,
  defineExpose: Om,
  defineModel: Nm,
  defineOptions: Mm,
  defineProps: xm,
  defineSSRCustomElement: U0,
  defineSlots: Rm,
  get devtools() {
    return $n;
  },
  effect: eg,
  effectScope: Xp,
  getCurrentInstance: $t,
  getCurrentScope: Qh,
  getTransitionRawChildren: $r,
  guardReactiveProps: tu,
  h: hu,
  handleError: Bn,
  hasInjectionContext: Gm,
  hydrate: Ru,
  initCustomFormatter: m0,
  initDirectivesForSSR: oy,
  inject: Li,
  isMemoSame: du,
  isProxy: Wl,
  isReactive: wn,
  isReadonly: xn,
  isRef: xe,
  isRuntimeOnly: d0,
  isShallow: $i,
  isVNode: nn,
  markRaw: $l,
  mergeDefaults: Bm,
  mergeModels: Um,
  mergeProps: nu,
  nextTick: Jl,
  normalizeClass: hs,
  normalizeProps: Fp,
  normalizeStyle: cs,
  onActivated: xf,
  onBeforeMount: Mf,
  onBeforeUnmount: zr,
  onBeforeUpdate: Rf,
  onDeactivated: kf,
  onErrorCaptured: Pf,
  onMounted: bi,
  onRenderTracked: Lf,
  onRenderTriggered: Df,
  onScopeDispose: Yp,
  onServerPrefetch: Nf,
  onUnmounted: qr,
  onUpdated: Kr,
  openBlock: ps,
  popScopeId: Xg,
  provide: Vf,
  proxyRefs: ql,
  pushScopeId: Jg,
  queuePostFlushCb: Xl,
  reactive: Br,
  readonly: Vl,
  ref: Bt,
  registerRuntimeCompiler: ou,
  render: Jo,
  renderList: _m,
  renderSlot: Cm,
  resolveComponent: vm,
  resolveDirective: Sm,
  resolveDynamicComponent: wm,
  resolveFilter: w0,
  resolveTransitionHooks: si,
  setBlockTracking: Wo,
  setDevtoolsHook: vf,
  setTransitionHooks: kn,
  shallowReactive: df,
  shallowReadonly: kg,
  shallowRef: Og,
  ssrContextKey: fu,
  ssrUtils: v0,
  stop: tg,
  toDisplayString: Jp,
  toHandlerKey: Jn,
  toHandlers: Tm,
  toRaw: te,
  toRef: Fg,
  toRefs: Ig,
  toValue: Ng,
  transformVNodeArgs: o0,
  triggerRef: Rg,
  unref: zl,
  useAttrs: Pm,
  useCssModule: H0,
  useCssVars: V0,
  useModel: Im,
  useSSRContext: uu,
  useSlots: Lm,
  useTransitionState: ea,
  vModelCheckbox: da,
  vModelDynamic: Tu,
  vModelRadio: pa,
  vModelSelect: Eu,
  vModelText: fr,
  vShow: xu,
  version: pu,
  warn: Wg,
  watch: Sn,
  watchEffect: cm,
  watchPostEffect: Ef,
  watchSyncEffect: hm,
  withAsyncContext: Hm,
  withCtx: Yl,
  withDefaults: Dm,
  withDirectives: um,
  withKeys: iy,
  withMemo: y0,
  withModifiers: ty,
  withScopeId: Yg
}, Symbol.toStringTag, { value: "Module" }));
function ga(t) {
  throw t;
}
function Lu(t) {
}
function me(t, e, n, i) {
  const s = t, r = new SyntaxError(String(s));
  return r.code = t, r.loc = e, r;
}
const Yi = Symbol(""), Ui = Symbol(""), ma = Symbol(""), ur = Symbol(""), Pu = Symbol(""), Rn = Symbol(""), Iu = Symbol(""), Bu = Symbol(""), ya = Symbol(""), ba = Symbol(""), gs = Symbol(""), va = Symbol(""), Uu = Symbol(""), wa = Symbol(""), dr = Symbol(
  ""
), Sa = Symbol(""), _a = Symbol(""), Ea = Symbol(""), Ca = Symbol(""), Fu = Symbol(""), Hu = Symbol(""), Zr = Symbol(""), pr = Symbol(""), Ta = Symbol(""), Aa = Symbol(""), Zi = Symbol(""), ms = Symbol(""), xa = Symbol(""), Xo = Symbol(""), ay = Symbol(""), Yo = Symbol(""), gr = Symbol(""), cy = Symbol(""), hy = Symbol(""), ka = Symbol(""), fy = Symbol(""), uy = Symbol(""), Oa = Symbol(""), Vu = Symbol(""), li = {
  [Yi]: "Fragment",
  [Ui]: "Teleport",
  [ma]: "Suspense",
  [ur]: "KeepAlive",
  [Pu]: "BaseTransition",
  [Rn]: "openBlock",
  [Iu]: "createBlock",
  [Bu]: "createElementBlock",
  [ya]: "createVNode",
  [ba]: "createElementVNode",
  [gs]: "createCommentVNode",
  [va]: "createTextVNode",
  [Uu]: "createStaticVNode",
  [wa]: "resolveComponent",
  [dr]: "resolveDynamicComponent",
  [Sa]: "resolveDirective",
  [_a]: "resolveFilter",
  [Ea]: "withDirectives",
  [Ca]: "renderList",
  [Fu]: "renderSlot",
  [Hu]: "createSlots",
  [Zr]: "toDisplayString",
  [pr]: "mergeProps",
  [Ta]: "normalizeClass",
  [Aa]: "normalizeStyle",
  [Zi]: "normalizeProps",
  [ms]: "guardReactiveProps",
  [xa]: "toHandlers",
  [Xo]: "camelize",
  [ay]: "capitalize",
  [Yo]: "toHandlerKey",
  [gr]: "setBlockTracking",
  [cy]: "pushScopeId",
  [hy]: "popScopeId",
  [ka]: "withCtx",
  [fy]: "unref",
  [uy]: "isRef",
  [Oa]: "withMemo",
  [Vu]: "isMemoSame"
};
function dy(t) {
  Object.getOwnPropertySymbols(t).forEach((e) => {
    li[e] = t[e];
  });
}
const ct = {
  source: "",
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 }
};
function py(t, e = ct) {
  return {
    type: 0,
    children: t,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: void 0,
    loc: e
  };
}
function Qi(t, e, n, i, s, r, o, l = !1, a = !1, c = !1, h = ct) {
  return t && (l ? (t.helper(Rn), t.helper(hi(t.inSSR, c))) : t.helper(ci(t.inSSR, c)), o && t.helper(Ea)), {
    type: 13,
    tag: e,
    props: n,
    children: i,
    patchFlag: s,
    dynamicProps: r,
    directives: o,
    isBlock: l,
    disableTracking: a,
    isComponent: c,
    loc: h
  };
}
function ys(t, e = ct) {
  return {
    type: 17,
    loc: e,
    elements: t
  };
}
function ut(t, e = ct) {
  return {
    type: 15,
    loc: e,
    properties: t
  };
}
function we(t, e) {
  return {
    type: 16,
    loc: ct,
    key: J(t) ? X(t, !0) : t,
    value: e
  };
}
function X(t, e = !1, n = ct, i = 0) {
  return {
    type: 4,
    loc: n,
    content: t,
    isStatic: e,
    constType: e ? 3 : i
  };
}
function wt(t, e = ct) {
  return {
    type: 8,
    loc: e,
    children: t
  };
}
function Ee(t, e = [], n = ct) {
  return {
    type: 14,
    loc: n,
    callee: t,
    arguments: e
  };
}
function ai(t, e = void 0, n = !1, i = !1, s = ct) {
  return {
    type: 18,
    params: t,
    returns: e,
    newline: n,
    isSlot: i,
    loc: s
  };
}
function Zo(t, e, n, i = !0) {
  return {
    type: 19,
    test: t,
    consequent: e,
    alternate: n,
    newline: i,
    loc: ct
  };
}
function gy(t, e, n = !1) {
  return {
    type: 20,
    index: t,
    value: e,
    isVNode: n,
    loc: ct
  };
}
function my(t) {
  return {
    type: 21,
    body: t,
    loc: ct
  };
}
function ci(t, e) {
  return t || e ? ya : ba;
}
function hi(t, e) {
  return t || e ? Iu : Bu;
}
function Ma(t, { helper: e, removeHelper: n, inSSR: i }) {
  t.isBlock || (t.isBlock = !0, n(ci(i, t.isComponent)), e(Rn), e(hi(i, t.isComponent)));
}
const Ye = (t) => t.type === 4 && t.isStatic, jn = (t, e) => t === e || t === st(e);
function Wu(t) {
  if (jn(t, "Teleport"))
    return Ui;
  if (jn(t, "Suspense"))
    return ma;
  if (jn(t, "KeepAlive"))
    return ur;
  if (jn(t, "BaseTransition"))
    return Pu;
}
const yy = /^\d|[^\$\w]/, Ra = (t) => !yy.test(t), by = /[A-Za-z_$\xA0-\uFFFF]/, vy = /[\.\?\w$\xA0-\uFFFF]/, wy = /\s+[.[]\s*|\s*[.[]\s+/g, Sy = (t) => {
  t = t.trim().replace(wy, (o) => o.trim());
  let e = 0, n = [], i = 0, s = 0, r = null;
  for (let o = 0; o < t.length; o++) {
    const l = t.charAt(o);
    switch (e) {
      case 0:
        if (l === "[")
          n.push(e), e = 1, i++;
        else if (l === "(")
          n.push(e), e = 2, s++;
        else if (!(o === 0 ? by : vy).test(l))
          return !1;
        break;
      case 1:
        l === "'" || l === '"' || l === "`" ? (n.push(e), e = 3, r = l) : l === "[" ? i++ : l === "]" && (--i || (e = n.pop()));
        break;
      case 2:
        if (l === "'" || l === '"' || l === "`")
          n.push(e), e = 3, r = l;
        else if (l === "(")
          s++;
        else if (l === ")") {
          if (o === t.length - 1)
            return !1;
          --s || (e = n.pop());
        }
        break;
      case 3:
        l === r && (e = n.pop(), r = null);
        break;
    }
  }
  return !i && !s;
}, $u = Sy;
function ju(t, e, n) {
  const s = {
    source: t.source.slice(e, e + n),
    start: mr(t.start, t.source, e),
    end: t.end
  };
  return n != null && (s.end = mr(
    t.start,
    t.source,
    e + n
  )), s;
}
function mr(t, e, n = e.length) {
  return yr(
    ee({}, t),
    e,
    n
  );
}
function yr(t, e, n = e.length) {
  let i = 0, s = -1;
  for (let r = 0; r < n; r++)
    e.charCodeAt(r) === 10 && (i++, s = r);
  return t.offset += n, t.line += i, t.column = s === -1 ? t.column + n : n - s, t;
}
function ft(t, e, n = !1) {
  for (let i = 0; i < t.props.length; i++) {
    const s = t.props[i];
    if (s.type === 7 && (n || s.exp) && (J(e) ? s.name === e : e.test(s.name)))
      return s;
  }
}
function Qr(t, e, n = !1, i = !1) {
  for (let s = 0; s < t.props.length; s++) {
    const r = t.props[s];
    if (r.type === 6) {
      if (n)
        continue;
      if (r.name === e && (r.value || i))
        return r;
    } else if (r.name === "bind" && (r.exp || i) && gn(r.arg, e))
      return r;
  }
}
function gn(t, e) {
  return !!(t && Ye(t) && t.content === e);
}
function _y(t) {
  return t.props.some(
    (e) => e.type === 7 && e.name === "bind" && (!e.arg || // v-bind="obj"
    e.arg.type !== 4 || // v-bind:[_ctx.foo]
    !e.arg.isStatic)
    // v-bind:[foo]
  );
}
function yo(t) {
  return t.type === 5 || t.type === 2;
}
function Ey(t) {
  return t.type === 7 && t.name === "slot";
}
function br(t) {
  return t.type === 1 && t.tagType === 3;
}
function vr(t) {
  return t.type === 1 && t.tagType === 2;
}
const Cy = /* @__PURE__ */ new Set([Zi, ms]);
function Ku(t, e = []) {
  if (t && !J(t) && t.type === 14) {
    const n = t.callee;
    if (!J(n) && Cy.has(n))
      return Ku(
        t.arguments[0],
        e.concat(t)
      );
  }
  return [t, e];
}
function wr(t, e, n) {
  let i, s = t.type === 13 ? t.props : t.arguments[2], r = [], o;
  if (s && !J(s) && s.type === 14) {
    const l = Ku(s);
    s = l[0], r = l[1], o = r[r.length - 1];
  }
  if (s == null || J(s))
    i = ut([e]);
  else if (s.type === 14) {
    const l = s.arguments[0];
    !J(l) && l.type === 15 ? Lc(e, l) || l.properties.unshift(e) : s.callee === xa ? i = Ee(n.helper(pr), [
      ut([e]),
      s
    ]) : s.arguments.unshift(ut([e])), !i && (i = s);
  } else
    s.type === 15 ? (Lc(e, s) || s.properties.unshift(e), i = s) : (i = Ee(n.helper(pr), [
      ut([e]),
      s
    ]), o && o.callee === ms && (o = r[r.length - 2]));
  t.type === 13 ? o ? o.arguments[0] = i : t.props = i : o ? o.arguments[0] = i : t.arguments[2] = i;
}
function Lc(t, e) {
  let n = !1;
  if (t.key.type === 4) {
    const i = t.key.content;
    n = e.properties.some(
      (s) => s.key.type === 4 && s.key.content === i
    );
  }
  return n;
}
function es(t, e) {
  return `_${e}_${t.replace(/[^\w]/g, (n, i) => n === "-" ? "_" : t.charCodeAt(i).toString())}`;
}
function Ty(t) {
  return t.type === 14 && t.callee === Oa ? t.arguments[1].returns : t;
}
function Pc(t, e) {
  const n = e.options ? e.options.compatConfig : e.compatConfig, i = n && n[t];
  return t === "MODE" ? i || 3 : i;
}
function Cn(t, e) {
  const n = Pc("MODE", e), i = Pc(t, e);
  return n === 3 ? i === !0 : i !== !1;
}
function ts(t, e, n, ...i) {
  return Cn(t, e);
}
const Ay = /&(gt|lt|amp|apos|quot);/g, xy = {
  gt: ">",
  lt: "<",
  amp: "&",
  apos: "'",
  quot: '"'
}, Ic = {
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  getTextMode: () => 0,
  isVoidTag: zs,
  isPreTag: zs,
  isCustomElement: zs,
  decodeEntities: (t) => t.replace(Ay, (e, n) => xy[n]),
  onError: ga,
  onWarn: Lu,
  comments: !1
};
function ky(t, e = {}) {
  const n = Oy(t, e), i = at(n);
  return py(
    Na(n, 0, []),
    gt(n, i)
  );
}
function Oy(t, e) {
  const n = ee({}, Ic);
  let i;
  for (i in e)
    n[i] = e[i] === void 0 ? Ic[i] : e[i];
  return {
    options: n,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: t,
    source: t,
    inPre: !1,
    inVPre: !1,
    onWarn: n.onWarn
  };
}
function Na(t, e, n) {
  const i = eo(n), s = i ? i.ns : 0, r = [];
  for (; !Uy(t, e, n); ) {
    const l = t.source;
    let a;
    if (e === 0 || e === 1) {
      if (!t.inVPre && Fe(l, t.options.delimiters[0]))
        a = Iy(t, e);
      else if (e === 0 && l[0] === "<")
        if (l.length === 1)
          oe(t, 5, 1);
        else if (l[1] === "!")
          Fe(l, "<!--") ? a = Ry(t) : Fe(l, "<!DOCTYPE") ? a = Ci(t) : Fe(l, "<![CDATA[") ? s !== 0 ? a = My(t, n) : (oe(t, 1), a = Ci(t)) : (oe(t, 11), a = Ci(t));
        else if (l[1] === "/")
          if (l.length === 2)
            oe(t, 5, 2);
          else if (l[2] === ">") {
            oe(t, 14, 2), ke(t, 3);
            continue;
          } else if (/[a-z]/i.test(l[2])) {
            oe(t, 23), Qo(t, Sr.End, i);
            continue;
          } else
            oe(
              t,
              12,
              2
            ), a = Ci(t);
        else
          /[a-z]/i.test(l[1]) ? (a = Ny(t, n), Cn(
            "COMPILER_NATIVE_TEMPLATE",
            t
          ) && a && a.tag === "template" && !a.props.some(
            (c) => c.type === 7 && zu(c.name)
          ) && (a = a.children)) : l[1] === "?" ? (oe(
            t,
            21,
            1
          ), a = Ci(t)) : oe(t, 12, 1);
    }
    if (a || (a = By(t, e)), F(a))
      for (let c = 0; c < a.length; c++)
        Bc(r, a[c]);
    else
      Bc(r, a);
  }
  let o = !1;
  if (e !== 2 && e !== 1) {
    const l = t.options.whitespace !== "preserve";
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      if (c.type === 2)
        if (t.inPre)
          c.content = c.content.replace(/\r\n/g, `
`);
        else if (/[^\t\r\n\f ]/.test(c.content))
          l && (c.content = c.content.replace(/[\t\r\n\f ]+/g, " "));
        else {
          const h = r[a - 1], f = r[a + 1];
          !h || !f || l && (h.type === 3 && f.type === 3 || h.type === 3 && f.type === 1 || h.type === 1 && f.type === 3 || h.type === 1 && f.type === 1 && /[\r\n]/.test(c.content)) ? (o = !0, r[a] = null) : c.content = " ";
        }
      else
        c.type === 3 && !t.options.comments && (o = !0, r[a] = null);
    }
    if (t.inPre && i && t.options.isPreTag(i.tag)) {
      const a = r[0];
      a && a.type === 2 && (a.content = a.content.replace(/^\r?\n/, ""));
    }
  }
  return o ? r.filter(Boolean) : r;
}
function Bc(t, e) {
  if (e.type === 2) {
    const n = eo(t);
    if (n && n.type === 2 && n.loc.end.offset === e.loc.start.offset) {
      n.content += e.content, n.loc.end = e.loc.end, n.loc.source += e.loc.source;
      return;
    }
  }
  t.push(e);
}
function My(t, e) {
  ke(t, 9);
  const n = Na(t, 3, e);
  return t.source.length === 0 ? oe(t, 6) : ke(t, 3), n;
}
function Ry(t) {
  const e = at(t);
  let n;
  const i = /--(\!)?>/.exec(t.source);
  if (!i)
    n = t.source.slice(4), ke(t, t.source.length), oe(t, 7);
  else {
    i.index <= 3 && oe(t, 0), i[1] && oe(t, 10), n = t.source.slice(4, i.index);
    const s = t.source.slice(0, i.index);
    let r = 1, o = 0;
    for (; (o = s.indexOf("<!--", r)) !== -1; )
      ke(t, o - r + 1), o + 4 < s.length && oe(t, 16), r = o + 1;
    ke(t, i.index + i[0].length - r + 1);
  }
  return {
    type: 3,
    content: n,
    loc: gt(t, e)
  };
}
function Ci(t) {
  const e = at(t), n = t.source[1] === "?" ? 1 : 2;
  let i;
  const s = t.source.indexOf(">");
  return s === -1 ? (i = t.source.slice(n), ke(t, t.source.length)) : (i = t.source.slice(n, s), ke(t, s + 1)), {
    type: 3,
    content: i,
    loc: gt(t, e)
  };
}
function Ny(t, e) {
  const n = t.inPre, i = t.inVPre, s = eo(e), r = Qo(t, Sr.Start, s), o = t.inPre && !n, l = t.inVPre && !i;
  if (r.isSelfClosing || t.options.isVoidTag(r.tag))
    return o && (t.inPre = !1), l && (t.inVPre = !1), r;
  e.push(r);
  const a = t.options.getTextMode(r, s), c = Na(t, a, e);
  e.pop();
  {
    const h = r.props.find(
      (f) => f.type === 6 && f.name === "inline-template"
    );
    if (h && ts(
      "COMPILER_INLINE_TEMPLATE",
      t,
      h.loc
    )) {
      const f = gt(t, r.loc.end);
      h.value = {
        type: 2,
        content: f.source,
        loc: f
      };
    }
  }
  if (r.children = c, el(t.source, r.tag))
    Qo(t, Sr.End, s);
  else if (oe(t, 24, 0, r.loc.start), t.source.length === 0 && r.tag.toLowerCase() === "script") {
    const h = c[0];
    h && Fe(h.loc.source, "<!--") && oe(t, 8);
  }
  return r.loc = gt(t, r.loc.start), o && (t.inPre = !1), l && (t.inVPre = !1), r;
}
var Sr = /* @__PURE__ */ ((t) => (t[t.Start = 0] = "Start", t[t.End = 1] = "End", t))(Sr || {});
const zu = /* @__PURE__ */ Qe(
  "if,else,else-if,for,slot"
);
function Qo(t, e, n) {
  const i = at(t), s = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(t.source), r = s[1], o = t.options.getNamespace(r, n);
  ke(t, s[0].length), ns(t);
  const l = at(t), a = t.source;
  t.options.isPreTag(r) && (t.inPre = !0);
  let c = Uc(t, e);
  e === 0 && !t.inVPre && c.some((u) => u.type === 7 && u.name === "pre") && (t.inVPre = !0, ee(t, l), t.source = a, c = Uc(t, e).filter((u) => u.name !== "v-pre"));
  let h = !1;
  if (t.source.length === 0 ? oe(t, 9) : (h = Fe(t.source, "/>"), e === 1 && h && oe(t, 4), ke(t, h ? 2 : 1)), e === 1)
    return;
  let f = 0;
  return t.inVPre || (r === "slot" ? f = 2 : r === "template" ? c.some(
    (u) => u.type === 7 && zu(u.name)
  ) && (f = 3) : Dy(r, c, t) && (f = 1)), {
    type: 1,
    ns: o,
    tag: r,
    tagType: f,
    props: c,
    isSelfClosing: h,
    children: [],
    loc: gt(t, i),
    codegenNode: void 0
    // to be created during transform phase
  };
}
function Dy(t, e, n) {
  const i = n.options;
  if (i.isCustomElement(t))
    return !1;
  if (t === "component" || /^[A-Z]/.test(t) || Wu(t) || i.isBuiltInComponent && i.isBuiltInComponent(t) || i.isNativeTag && !i.isNativeTag(t))
    return !0;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (r.type === 6) {
      if (r.name === "is" && r.value) {
        if (r.value.content.startsWith("vue:"))
          return !0;
        if (ts(
          "COMPILER_IS_ON_ELEMENT",
          n,
          r.loc
        ))
          return !0;
      }
    } else {
      if (r.name === "is")
        return !0;
      if (
        // :is on plain element - only treat as component in compat mode
        r.name === "bind" && gn(r.arg, "is") && ts(
          "COMPILER_IS_ON_ELEMENT",
          n,
          r.loc
        )
      )
        return !0;
    }
  }
}
function Uc(t, e) {
  const n = [], i = /* @__PURE__ */ new Set();
  for (; t.source.length > 0 && !Fe(t.source, ">") && !Fe(t.source, "/>"); ) {
    if (Fe(t.source, "/")) {
      oe(t, 22), ke(t, 1), ns(t);
      continue;
    }
    e === 1 && oe(t, 3);
    const s = Ly(t, i);
    s.type === 6 && s.value && s.name === "class" && (s.value.content = s.value.content.replace(/\s+/g, " ").trim()), e === 0 && n.push(s), /^[^\t\r\n\f />]/.test(t.source) && oe(t, 15), ns(t);
  }
  return n;
}
function Ly(t, e) {
  var n;
  const i = at(t), r = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(t.source)[0];
  e.has(r) && oe(t, 2), e.add(r), r[0] === "=" && oe(t, 19);
  {
    const a = /["'<]/g;
    let c;
    for (; c = a.exec(r); )
      oe(
        t,
        17,
        c.index
      );
  }
  ke(t, r.length);
  let o;
  /^[\t\r\n\f ]*=/.test(t.source) && (ns(t), ke(t, 1), ns(t), o = Py(t), o || oe(t, 13));
  const l = gt(t, i);
  if (!t.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(r)) {
    const a = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(
      r
    );
    let c = Fe(r, "."), h = a[1] || (c || Fe(r, ":") ? "bind" : Fe(r, "@") ? "on" : "slot"), f;
    if (a[2]) {
      const d = h === "slot", p = r.lastIndexOf(
        a[2],
        r.length - (((n = a[3]) == null ? void 0 : n.length) || 0)
      ), w = gt(
        t,
        Fc(t, i, p),
        Fc(
          t,
          i,
          p + a[2].length + (d && a[3] || "").length
        )
      );
      let b = a[2], m = !0;
      b.startsWith("[") ? (m = !1, b.endsWith("]") ? b = b.slice(1, b.length - 1) : (oe(
        t,
        27
      ), b = b.slice(1))) : d && (b += a[3] || ""), f = {
        type: 4,
        content: b,
        isStatic: m,
        constType: m ? 3 : 0,
        loc: w
      };
    }
    if (o && o.isQuoted) {
      const d = o.loc;
      d.start.offset++, d.start.column++, d.end = mr(d.start, o.content), d.source = d.source.slice(1, -1);
    }
    const u = a[3] ? a[3].slice(1).split(".") : [];
    return c && u.push("prop"), h === "bind" && f && u.includes("sync") && ts(
      "COMPILER_V_BIND_SYNC",
      t,
      l,
      f.loc.source
    ) && (h = "model", u.splice(u.indexOf("sync"), 1)), {
      type: 7,
      name: h,
      exp: o && {
        type: 4,
        content: o.content,
        isStatic: !1,
        // Treat as non-constant by default. This can be potentially set to
        // other values by `transformExpression` to make it eligible for hoisting.
        constType: 0,
        loc: o.loc
      },
      arg: f,
      modifiers: u,
      loc: l
    };
  }
  return !t.inVPre && Fe(r, "v-") && oe(t, 26), {
    type: 6,
    name: r,
    value: o && {
      type: 2,
      content: o.content,
      loc: o.loc
    },
    loc: l
  };
}
function Py(t) {
  const e = at(t);
  let n;
  const i = t.source[0], s = i === '"' || i === "'";
  if (s) {
    ke(t, 1);
    const r = t.source.indexOf(i);
    r === -1 ? n = Fi(
      t,
      t.source.length,
      4
    ) : (n = Fi(t, r, 4), ke(t, 1));
  } else {
    const r = /^[^\t\r\n\f >]+/.exec(t.source);
    if (!r)
      return;
    const o = /["'<=`]/g;
    let l;
    for (; l = o.exec(r[0]); )
      oe(
        t,
        18,
        l.index
      );
    n = Fi(t, r[0].length, 4);
  }
  return { content: n, isQuoted: s, loc: gt(t, e) };
}
function Iy(t, e) {
  const [n, i] = t.options.delimiters, s = t.source.indexOf(i, n.length);
  if (s === -1) {
    oe(t, 25);
    return;
  }
  const r = at(t);
  ke(t, n.length);
  const o = at(t), l = at(t), a = s - n.length, c = t.source.slice(0, a), h = Fi(t, a, e), f = h.trim(), u = h.indexOf(f);
  u > 0 && yr(o, c, u);
  const d = a - (h.length - f.length - u);
  return yr(l, c, d), ke(t, i.length), {
    type: 5,
    content: {
      type: 4,
      isStatic: !1,
      // Set `isConstant` to false by default and will decide in transformExpression
      constType: 0,
      content: f,
      loc: gt(t, o, l)
    },
    loc: gt(t, r)
  };
}
function By(t, e) {
  const n = e === 3 ? ["]]>"] : ["<", t.options.delimiters[0]];
  let i = t.source.length;
  for (let o = 0; o < n.length; o++) {
    const l = t.source.indexOf(n[o], 1);
    l !== -1 && i > l && (i = l);
  }
  const s = at(t);
  return {
    type: 2,
    content: Fi(t, i, e),
    loc: gt(t, s)
  };
}
function Fi(t, e, n) {
  const i = t.source.slice(0, e);
  return ke(t, e), n === 2 || n === 3 || !i.includes("&") ? i : t.options.decodeEntities(
    i,
    n === 4
  );
}
function at(t) {
  const { column: e, line: n, offset: i } = t;
  return { column: e, line: n, offset: i };
}
function gt(t, e, n) {
  return n = n || at(t), {
    start: e,
    end: n,
    source: t.originalSource.slice(e.offset, n.offset)
  };
}
function eo(t) {
  return t[t.length - 1];
}
function Fe(t, e) {
  return t.startsWith(e);
}
function ke(t, e) {
  const { source: n } = t;
  yr(t, n, e), t.source = n.slice(e);
}
function ns(t) {
  const e = /^[\t\r\n\f ]+/.exec(t.source);
  e && ke(t, e[0].length);
}
function Fc(t, e, n) {
  return mr(
    e,
    t.originalSource.slice(e.offset, n),
    n
  );
}
function oe(t, e, n, i = at(t)) {
  n && (i.offset += n, i.column += n), t.options.onError(
    me(e, {
      start: i,
      end: i,
      source: ""
    })
  );
}
function Uy(t, e, n) {
  const i = t.source;
  switch (e) {
    case 0:
      if (Fe(i, "</")) {
        for (let s = n.length - 1; s >= 0; --s)
          if (el(i, n[s].tag))
            return !0;
      }
      break;
    case 1:
    case 2: {
      const s = eo(n);
      if (s && el(i, s.tag))
        return !0;
      break;
    }
    case 3:
      if (Fe(i, "]]>"))
        return !0;
      break;
  }
  return !i;
}
function el(t, e) {
  return Fe(t, "</") && t.slice(2, 2 + e.length).toLowerCase() === e.toLowerCase() && /[\t\r\n\f />]/.test(t[2 + e.length] || ">");
}
function Fy(t, e) {
  Js(
    t,
    e,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    qu(t, t.children[0])
  );
}
function qu(t, e) {
  const { children: n } = t;
  return n.length === 1 && e.type === 1 && !vr(e);
}
function Js(t, e, n = !1) {
  const { children: i } = t, s = i.length;
  let r = 0;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    if (l.type === 1 && l.tagType === 0) {
      const a = n ? 0 : dt(l, e);
      if (a > 0) {
        if (a >= 2) {
          l.codegenNode.patchFlag = "-1", l.codegenNode = e.hoist(l.codegenNode), r++;
          continue;
        }
      } else {
        const c = l.codegenNode;
        if (c.type === 13) {
          const h = Yu(c);
          if ((!h || h === 512 || h === 1) && Ju(l, e) >= 2) {
            const f = Xu(l);
            f && (c.props = e.hoist(f));
          }
          c.dynamicProps && (c.dynamicProps = e.hoist(c.dynamicProps));
        }
      }
    }
    if (l.type === 1) {
      const a = l.tagType === 1;
      a && e.scopes.vSlot++, Js(l, e), a && e.scopes.vSlot--;
    } else if (l.type === 11)
      Js(l, e, l.children.length === 1);
    else if (l.type === 9)
      for (let a = 0; a < l.branches.length; a++)
        Js(
          l.branches[a],
          e,
          l.branches[a].children.length === 1
        );
  }
  r && e.transformHoist && e.transformHoist(i, e, t), r && r === s && t.type === 1 && t.tagType === 0 && t.codegenNode && t.codegenNode.type === 13 && F(t.codegenNode.children) && (t.codegenNode.children = e.hoist(
    ys(t.codegenNode.children)
  ));
}
function dt(t, e) {
  const { constantCache: n } = e;
  switch (t.type) {
    case 1:
      if (t.tagType !== 0)
        return 0;
      const i = n.get(t);
      if (i !== void 0)
        return i;
      const s = t.codegenNode;
      if (s.type !== 13 || s.isBlock && t.tag !== "svg" && t.tag !== "foreignObject")
        return 0;
      if (Yu(s))
        return n.set(t, 0), 0;
      {
        let l = 3;
        const a = Ju(t, e);
        if (a === 0)
          return n.set(t, 0), 0;
        a < l && (l = a);
        for (let c = 0; c < t.children.length; c++) {
          const h = dt(t.children[c], e);
          if (h === 0)
            return n.set(t, 0), 0;
          h < l && (l = h);
        }
        if (l > 1)
          for (let c = 0; c < t.props.length; c++) {
            const h = t.props[c];
            if (h.type === 7 && h.name === "bind" && h.exp) {
              const f = dt(h.exp, e);
              if (f === 0)
                return n.set(t, 0), 0;
              f < l && (l = f);
            }
          }
        if (s.isBlock) {
          for (let c = 0; c < t.props.length; c++)
            if (t.props[c].type === 7)
              return n.set(t, 0), 0;
          e.removeHelper(Rn), e.removeHelper(
            hi(e.inSSR, s.isComponent)
          ), s.isBlock = !1, e.helper(ci(e.inSSR, s.isComponent));
        }
        return n.set(t, l), l;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return dt(t.content, e);
    case 4:
      return t.constType;
    case 8:
      let o = 3;
      for (let l = 0; l < t.children.length; l++) {
        const a = t.children[l];
        if (J(a) || Qt(a))
          continue;
        const c = dt(a, e);
        if (c === 0)
          return 0;
        c < o && (o = c);
      }
      return o;
    default:
      return 0;
  }
}
const Hy = /* @__PURE__ */ new Set([
  Ta,
  Aa,
  Zi,
  ms
]);
function Gu(t, e) {
  if (t.type === 14 && !J(t.callee) && Hy.has(t.callee)) {
    const n = t.arguments[0];
    if (n.type === 4)
      return dt(n, e);
    if (n.type === 14)
      return Gu(n, e);
  }
  return 0;
}
function Ju(t, e) {
  let n = 3;
  const i = Xu(t);
  if (i && i.type === 15) {
    const { properties: s } = i;
    for (let r = 0; r < s.length; r++) {
      const { key: o, value: l } = s[r], a = dt(o, e);
      if (a === 0)
        return a;
      a < n && (n = a);
      let c;
      if (l.type === 4 ? c = dt(l, e) : l.type === 14 ? c = Gu(l, e) : c = 0, c === 0)
        return c;
      c < n && (n = c);
    }
  }
  return n;
}
function Xu(t) {
  const e = t.codegenNode;
  if (e.type === 13)
    return e.props;
}
function Yu(t) {
  const e = t.patchFlag;
  return e ? parseInt(e, 10) : void 0;
}
function Vy(t, {
  filename: e = "",
  prefixIdentifiers: n = !1,
  hoistStatic: i = !1,
  cacheHandlers: s = !1,
  nodeTransforms: r = [],
  directiveTransforms: o = {},
  transformHoist: l = null,
  isBuiltInComponent: a = qe,
  isCustomElement: c = qe,
  expressionPlugins: h = [],
  scopeId: f = null,
  slotted: u = !0,
  ssr: d = !1,
  inSSR: p = !1,
  ssrCssVars: w = "",
  bindingMetadata: b = le,
  inline: m = !1,
  isTS: y = !1,
  onError: E = ga,
  onWarn: v = Lu,
  compatConfig: T
}) {
  const B = e.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), O = {
    // options
    selfName: B && In(Ae(B[1])),
    prefixIdentifiers: n,
    hoistStatic: i,
    cacheHandlers: s,
    nodeTransforms: r,
    directiveTransforms: o,
    transformHoist: l,
    isBuiltInComponent: a,
    isCustomElement: c,
    expressionPlugins: h,
    scopeId: f,
    slotted: u,
    ssr: d,
    inSSR: p,
    ssrCssVars: w,
    bindingMetadata: b,
    inline: m,
    isTS: y,
    onError: E,
    onWarn: v,
    compatConfig: T,
    // state
    root: t,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    constantCache: /* @__PURE__ */ new Map(),
    temps: 0,
    cached: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: t,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(_) {
      const R = O.helpers.get(_) || 0;
      return O.helpers.set(_, R + 1), _;
    },
    removeHelper(_) {
      const R = O.helpers.get(_);
      if (R) {
        const D = R - 1;
        D ? O.helpers.set(_, D) : O.helpers.delete(_);
      }
    },
    helperString(_) {
      return `_${li[O.helper(_)]}`;
    },
    replaceNode(_) {
      O.parent.children[O.childIndex] = O.currentNode = _;
    },
    removeNode(_) {
      const R = O.parent.children, D = _ ? R.indexOf(_) : O.currentNode ? O.childIndex : -1;
      !_ || _ === O.currentNode ? (O.currentNode = null, O.onNodeRemoved()) : O.childIndex > D && (O.childIndex--, O.onNodeRemoved()), O.parent.children.splice(D, 1);
    },
    onNodeRemoved: () => {
    },
    addIdentifiers(_) {
    },
    removeIdentifiers(_) {
    },
    hoist(_) {
      J(_) && (_ = X(_)), O.hoists.push(_);
      const R = X(
        `_hoisted_${O.hoists.length}`,
        !1,
        _.loc,
        2
      );
      return R.hoisted = _, R;
    },
    cache(_, R = !1) {
      return gy(O.cached++, _, R);
    }
  };
  return O.filters = /* @__PURE__ */ new Set(), O;
}
function Wy(t, e) {
  const n = Vy(t, e);
  to(t, n), e.hoistStatic && Fy(t, n), e.ssr || $y(t, n), t.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), t.components = [...n.components], t.directives = [...n.directives], t.imports = n.imports, t.hoists = n.hoists, t.temps = n.temps, t.cached = n.cached, t.filters = [...n.filters];
}
function $y(t, e) {
  const { helper: n } = e, { children: i } = t;
  if (i.length === 1) {
    const s = i[0];
    if (qu(t, s) && s.codegenNode) {
      const r = s.codegenNode;
      r.type === 13 && Ma(r, e), t.codegenNode = r;
    } else
      t.codegenNode = s;
  } else if (i.length > 1) {
    let s = 64;
    t.codegenNode = Qi(
      e,
      n(Yi),
      void 0,
      t.children,
      s + "",
      void 0,
      void 0,
      !0,
      void 0,
      !1
      /* isComponent */
    );
  }
}
function jy(t, e) {
  let n = 0;
  const i = () => {
    n--;
  };
  for (; n < t.children.length; n++) {
    const s = t.children[n];
    J(s) || (e.parent = t, e.childIndex = n, e.onNodeRemoved = i, to(s, e));
  }
}
function to(t, e) {
  e.currentNode = t;
  const { nodeTransforms: n } = e, i = [];
  for (let r = 0; r < n.length; r++) {
    const o = n[r](t, e);
    if (o && (F(o) ? i.push(...o) : i.push(o)), e.currentNode)
      t = e.currentNode;
    else
      return;
  }
  switch (t.type) {
    case 3:
      e.ssr || e.helper(gs);
      break;
    case 5:
      e.ssr || e.helper(Zr);
      break;
    case 9:
      for (let r = 0; r < t.branches.length; r++)
        to(t.branches[r], e);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      jy(t, e);
      break;
  }
  e.currentNode = t;
  let s = i.length;
  for (; s--; )
    i[s]();
}
function Zu(t, e) {
  const n = J(t) ? (i) => i === t : (i) => t.test(i);
  return (i, s) => {
    if (i.type === 1) {
      const { props: r } = i;
      if (i.tagType === 3 && r.some(Ey))
        return;
      const o = [];
      for (let l = 0; l < r.length; l++) {
        const a = r[l];
        if (a.type === 7 && n(a.name)) {
          r.splice(l, 1), l--;
          const c = e(i, a, s);
          c && o.push(c);
        }
      }
      return o;
    }
  };
}
const no = "/*#__PURE__*/", Qu = (t) => `${li[t]}: _${li[t]}`;
function Hc(t, {
  mode: e = "function",
  prefixIdentifiers: n = e === "module",
  sourceMap: i = !1,
  filename: s = "template.vue.html",
  scopeId: r = null,
  optimizeImports: o = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: c = "vue/server-renderer",
  ssr: h = !1,
  isTS: f = !1,
  inSSR: u = !1
}) {
  const d = {
    mode: e,
    prefixIdentifiers: n,
    sourceMap: i,
    filename: s,
    scopeId: r,
    optimizeImports: o,
    runtimeGlobalName: l,
    runtimeModuleName: a,
    ssrRuntimeModuleName: c,
    ssr: h,
    isTS: f,
    inSSR: u,
    source: t.loc.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(w) {
      return `_${li[w]}`;
    },
    push(w, b) {
      d.code += w;
    },
    indent() {
      p(++d.indentLevel);
    },
    deindent(w = !1) {
      w ? --d.indentLevel : p(--d.indentLevel);
    },
    newline() {
      p(d.indentLevel);
    }
  };
  function p(w) {
    d.push(`
` + "  ".repeat(w));
  }
  return d;
}
function Ky(t, e = {}) {
  const n = Hc(t, e);
  e.onContextCreated && e.onContextCreated(n);
  const {
    mode: i,
    push: s,
    prefixIdentifiers: r,
    indent: o,
    deindent: l,
    newline: a,
    scopeId: c,
    ssr: h
  } = n, f = Array.from(t.helpers), u = f.length > 0, d = !r && i !== "module", p = !1, w = p ? Hc(t, e) : n;
  zy(t, w);
  const b = h ? "ssrRender" : "render", y = (h ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (s(`function ${b}(${y}) {`), o(), d && (s("with (_ctx) {"), o(), u && (s(`const { ${f.map(Qu).join(", ")} } = _Vue`), s(`
`), a())), t.components.length && (bo(t.components, "component", n), (t.directives.length || t.temps > 0) && a()), t.directives.length && (bo(t.directives, "directive", n), t.temps > 0 && a()), t.filters && t.filters.length && (a(), bo(t.filters, "filter", n), a()), t.temps > 0) {
    s("let ");
    for (let E = 0; E < t.temps; E++)
      s(`${E > 0 ? ", " : ""}_temp${E}`);
  }
  return (t.components.length || t.directives.length || t.temps) && (s(`
`), a()), h || s("return "), t.codegenNode ? $e(t.codegenNode, n) : s("null"), d && (l(), s("}")), l(), s("}"), {
    ast: t,
    code: n.code,
    preamble: p ? w.code : "",
    // SourceMapGenerator does have toJSON() method but it's not in the types
    map: n.map ? n.map.toJSON() : void 0
  };
}
function zy(t, e) {
  const {
    ssr: n,
    prefixIdentifiers: i,
    push: s,
    newline: r,
    runtimeModuleName: o,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: a
  } = e, c = l, h = Array.from(t.helpers);
  if (h.length > 0 && (s(`const _Vue = ${c}
`), t.hoists.length)) {
    const f = [
      ya,
      ba,
      gs,
      va,
      Uu
    ].filter((u) => h.includes(u)).map(Qu).join(", ");
    s(`const { ${f} } = _Vue
`);
  }
  qy(t.hoists, e), r(), s("return ");
}
function bo(t, e, { helper: n, push: i, newline: s, isTS: r }) {
  const o = n(
    e === "filter" ? _a : e === "component" ? wa : Sa
  );
  for (let l = 0; l < t.length; l++) {
    let a = t[l];
    const c = a.endsWith("__self");
    c && (a = a.slice(0, -6)), i(
      `const ${es(a, e)} = ${o}(${JSON.stringify(a)}${c ? ", true" : ""})${r ? "!" : ""}`
    ), l < t.length - 1 && s();
  }
}
function qy(t, e) {
  if (!t.length)
    return;
  e.pure = !0;
  const { push: n, newline: i, helper: s, scopeId: r, mode: o } = e;
  i();
  for (let l = 0; l < t.length; l++) {
    const a = t[l];
    a && (n(
      `const _hoisted_${l + 1} = `
    ), $e(a, e), i());
  }
  e.pure = !1;
}
function Da(t, e) {
  const n = t.length > 3 || !1;
  e.push("["), n && e.indent(), bs(t, e, n), n && e.deindent(), e.push("]");
}
function bs(t, e, n = !1, i = !0) {
  const { push: s, newline: r } = e;
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    J(l) ? s(l) : F(l) ? Da(l, e) : $e(l, e), o < t.length - 1 && (n ? (i && s(","), r()) : i && s(", "));
  }
}
function $e(t, e) {
  if (J(t)) {
    e.push(t);
    return;
  }
  if (Qt(t)) {
    e.push(e.helper(t));
    return;
  }
  switch (t.type) {
    case 1:
    case 9:
    case 11:
      $e(t.codegenNode, e);
      break;
    case 2:
      Gy(t, e);
      break;
    case 4:
      ed(t, e);
      break;
    case 5:
      Jy(t, e);
      break;
    case 12:
      $e(t.codegenNode, e);
      break;
    case 8:
      td(t, e);
      break;
    case 3:
      Yy(t, e);
      break;
    case 13:
      Zy(t, e);
      break;
    case 14:
      eb(t, e);
      break;
    case 15:
      tb(t, e);
      break;
    case 17:
      nb(t, e);
      break;
    case 18:
      ib(t, e);
      break;
    case 19:
      sb(t, e);
      break;
    case 20:
      rb(t, e);
      break;
    case 21:
      bs(t.body, e, !0, !1);
      break;
  }
}
function Gy(t, e) {
  e.push(JSON.stringify(t.content), t);
}
function ed(t, e) {
  const { content: n, isStatic: i } = t;
  e.push(i ? JSON.stringify(n) : n, t);
}
function Jy(t, e) {
  const { push: n, helper: i, pure: s } = e;
  s && n(no), n(`${i(Zr)}(`), $e(t.content, e), n(")");
}
function td(t, e) {
  for (let n = 0; n < t.children.length; n++) {
    const i = t.children[n];
    J(i) ? e.push(i) : $e(i, e);
  }
}
function Xy(t, e) {
  const { push: n } = e;
  if (t.type === 8)
    n("["), td(t, e), n("]");
  else if (t.isStatic) {
    const i = Ra(t.content) ? t.content : JSON.stringify(t.content);
    n(i, t);
  } else
    n(`[${t.content}]`, t);
}
function Yy(t, e) {
  const { push: n, helper: i, pure: s } = e;
  s && n(no), n(`${i(gs)}(${JSON.stringify(t.content)})`, t);
}
function Zy(t, e) {
  const { push: n, helper: i, pure: s } = e, {
    tag: r,
    props: o,
    children: l,
    patchFlag: a,
    dynamicProps: c,
    directives: h,
    isBlock: f,
    disableTracking: u,
    isComponent: d
  } = t;
  h && n(i(Ea) + "("), f && n(`(${i(Rn)}(${u ? "true" : ""}), `), s && n(no);
  const p = f ? hi(e.inSSR, d) : ci(e.inSSR, d);
  n(i(p) + "(", t), bs(
    Qy([r, o, l, a, c]),
    e
  ), n(")"), f && n(")"), h && (n(", "), $e(h, e), n(")"));
}
function Qy(t) {
  let e = t.length;
  for (; e-- && t[e] == null; )
    ;
  return t.slice(0, e + 1).map((n) => n || "null");
}
function eb(t, e) {
  const { push: n, helper: i, pure: s } = e, r = J(t.callee) ? t.callee : i(t.callee);
  s && n(no), n(r + "(", t), bs(t.arguments, e), n(")");
}
function tb(t, e) {
  const { push: n, indent: i, deindent: s, newline: r } = e, { properties: o } = t;
  if (!o.length) {
    n("{}", t);
    return;
  }
  const l = o.length > 1 || !1;
  n(l ? "{" : "{ "), l && i();
  for (let a = 0; a < o.length; a++) {
    const { key: c, value: h } = o[a];
    Xy(c, e), n(": "), $e(h, e), a < o.length - 1 && (n(","), r());
  }
  l && s(), n(l ? "}" : " }");
}
function nb(t, e) {
  Da(t.elements, e);
}
function ib(t, e) {
  const { push: n, indent: i, deindent: s } = e, { params: r, returns: o, body: l, newline: a, isSlot: c } = t;
  c && n(`_${li[ka]}(`), n("(", t), F(r) ? bs(r, e) : r && $e(r, e), n(") => "), (a || l) && (n("{"), i()), o ? (a && n("return "), F(o) ? Da(o, e) : $e(o, e)) : l && $e(l, e), (a || l) && (s(), n("}")), c && (t.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function sb(t, e) {
  const { test: n, consequent: i, alternate: s, newline: r } = t, { push: o, indent: l, deindent: a, newline: c } = e;
  if (n.type === 4) {
    const f = !Ra(n.content);
    f && o("("), ed(n, e), f && o(")");
  } else
    o("("), $e(n, e), o(")");
  r && l(), e.indentLevel++, r || o(" "), o("? "), $e(i, e), e.indentLevel--, r && c(), r || o(" "), o(": ");
  const h = s.type === 19;
  h || e.indentLevel++, $e(s, e), h || e.indentLevel--, r && a(
    !0
    /* without newline */
  );
}
function rb(t, e) {
  const { push: n, helper: i, indent: s, deindent: r, newline: o } = e;
  n(`_cache[${t.index}] || (`), t.isVNode && (s(), n(`${i(gr)}(-1),`), o()), n(`_cache[${t.index}] = `), $e(t.value, e), t.isVNode && (n(","), o(), n(`${i(gr)}(1),`), o(), n(`_cache[${t.index}]`), r()), n(")");
}
new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
);
const ob = Zu(
  /^(if|else|else-if)$/,
  (t, e, n) => lb(t, e, n, (i, s, r) => {
    const o = n.parent.children;
    let l = o.indexOf(i), a = 0;
    for (; l-- >= 0; ) {
      const c = o[l];
      c && c.type === 9 && (a += c.branches.length);
    }
    return () => {
      if (r)
        i.codegenNode = Wc(
          s,
          a,
          n
        );
      else {
        const c = ab(i.codegenNode);
        c.alternate = Wc(
          s,
          a + i.branches.length - 1,
          n
        );
      }
    };
  })
);
function lb(t, e, n, i) {
  if (e.name !== "else" && (!e.exp || !e.exp.content.trim())) {
    const s = e.exp ? e.exp.loc : t.loc;
    n.onError(
      me(28, e.loc)
    ), e.exp = X("true", !1, s);
  }
  if (e.name === "if") {
    const s = Vc(t, e), r = {
      type: 9,
      loc: t.loc,
      branches: [s]
    };
    if (n.replaceNode(r), i)
      return i(r, s, !0);
  } else {
    const s = n.parent.children;
    let r = s.indexOf(t);
    for (; r-- >= -1; ) {
      const o = s[r];
      if (o && o.type === 3) {
        n.removeNode(o);
        continue;
      }
      if (o && o.type === 2 && !o.content.trim().length) {
        n.removeNode(o);
        continue;
      }
      if (o && o.type === 9) {
        e.name === "else-if" && o.branches[o.branches.length - 1].condition === void 0 && n.onError(
          me(30, t.loc)
        ), n.removeNode();
        const l = Vc(t, e);
        o.branches.push(l);
        const a = i && i(o, l, !1);
        to(l, n), a && a(), n.currentNode = null;
      } else
        n.onError(
          me(30, t.loc)
        );
      break;
    }
  }
}
function Vc(t, e) {
  const n = t.tagType === 3;
  return {
    type: 10,
    loc: t.loc,
    condition: e.name === "else" ? void 0 : e.exp,
    children: n && !ft(t, "for") ? t.children : [t],
    userKey: Qr(t, "key"),
    isTemplateIf: n
  };
}
function Wc(t, e, n) {
  return t.condition ? Zo(
    t.condition,
    $c(t, e, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Ee(n.helper(gs), [
      '""',
      "true"
    ])
  ) : $c(t, e, n);
}
function $c(t, e, n) {
  const { helper: i } = n, s = we(
    "key",
    X(
      `${e}`,
      !1,
      ct,
      2
    )
  ), { children: r } = t, o = r[0];
  if (r.length !== 1 || o.type !== 1)
    if (r.length === 1 && o.type === 11) {
      const a = o.codegenNode;
      return wr(a, s, n), a;
    } else {
      let a = 64;
      return Qi(
        n,
        i(Yi),
        ut([s]),
        r,
        a + "",
        void 0,
        void 0,
        !0,
        !1,
        !1,
        t.loc
      );
    }
  else {
    const a = o.codegenNode, c = Ty(a);
    return c.type === 13 && Ma(c, n), wr(c, s, n), a;
  }
}
function ab(t) {
  for (; ; )
    if (t.type === 19)
      if (t.alternate.type === 19)
        t = t.alternate;
      else
        return t;
    else
      t.type === 20 && (t = t.value);
}
const cb = Zu(
  "for",
  (t, e, n) => {
    const { helper: i, removeHelper: s } = n;
    return hb(t, e, n, (r) => {
      const o = Ee(i(Ca), [
        r.source
      ]), l = br(t), a = ft(t, "memo"), c = Qr(t, "key"), h = c && (c.type === 6 ? X(c.value.content, !0) : c.exp), f = c ? we("key", h) : null, u = r.source.type === 4 && r.source.constType > 0, d = u ? 64 : c ? 128 : 256;
      return r.codegenNode = Qi(
        n,
        i(Yi),
        void 0,
        o,
        d + "",
        void 0,
        void 0,
        !0,
        !u,
        !1,
        t.loc
      ), () => {
        let p;
        const { children: w } = r, b = w.length !== 1 || w[0].type !== 1, m = vr(t) ? t : l && t.children.length === 1 && vr(t.children[0]) ? t.children[0] : null;
        if (m ? (p = m.codegenNode, l && f && wr(p, f, n)) : b ? p = Qi(
          n,
          i(Yi),
          f ? ut([f]) : void 0,
          t.children,
          "64",
          void 0,
          void 0,
          !0,
          void 0,
          !1
          /* isComponent */
        ) : (p = w[0].codegenNode, l && f && wr(p, f, n), p.isBlock !== !u && (p.isBlock ? (s(Rn), s(
          hi(n.inSSR, p.isComponent)
        )) : s(
          ci(n.inSSR, p.isComponent)
        )), p.isBlock = !u, p.isBlock ? (i(Rn), i(hi(n.inSSR, p.isComponent))) : i(ci(n.inSSR, p.isComponent))), a) {
          const y = ai(
            tl(r.parseResult, [
              X("_cached")
            ])
          );
          y.body = my([
            wt(["const _memo = (", a.exp, ")"]),
            wt([
              "if (_cached",
              ...h ? [" && _cached.key === ", h] : [],
              ` && ${n.helperString(
                Vu
              )}(_cached, _memo)) return _cached`
            ]),
            wt(["const _item = ", p]),
            X("_item.memo = _memo"),
            X("return _item")
          ]), o.arguments.push(
            y,
            X("_cache"),
            X(String(n.cached++))
          );
        } else
          o.arguments.push(
            ai(
              tl(r.parseResult),
              p,
              !0
              /* force newline */
            )
          );
      };
    });
  }
);
function hb(t, e, n, i) {
  if (!e.exp) {
    n.onError(
      me(31, e.loc)
    );
    return;
  }
  const s = nd(
    // can only be simple expression because vFor transform is applied
    // before expression transform.
    e.exp
  );
  if (!s) {
    n.onError(
      me(32, e.loc)
    );
    return;
  }
  const { addIdentifiers: r, removeIdentifiers: o, scopes: l } = n, { source: a, value: c, key: h, index: f } = s, u = {
    type: 11,
    loc: e.loc,
    source: a,
    valueAlias: c,
    keyAlias: h,
    objectIndexAlias: f,
    parseResult: s,
    children: br(t) ? t.children : [t]
  };
  n.replaceNode(u), l.vFor++;
  const d = i && i(u);
  return () => {
    l.vFor--, d && d();
  };
}
const fb = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, jc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, ub = /^\(|\)$/g;
function nd(t, e) {
  const n = t.loc, i = t.content, s = i.match(fb);
  if (!s)
    return;
  const [, r, o] = s, l = {
    source: Ls(
      n,
      o.trim(),
      i.indexOf(o, r.length)
    ),
    value: void 0,
    key: void 0,
    index: void 0
  };
  let a = r.trim().replace(ub, "").trim();
  const c = r.indexOf(a), h = a.match(jc);
  if (h) {
    a = a.replace(jc, "").trim();
    const f = h[1].trim();
    let u;
    if (f && (u = i.indexOf(f, c + a.length), l.key = Ls(n, f, u)), h[2]) {
      const d = h[2].trim();
      d && (l.index = Ls(
        n,
        d,
        i.indexOf(
          d,
          l.key ? u + f.length : c + a.length
        )
      ));
    }
  }
  return a && (l.value = Ls(n, a, c)), l;
}
function Ls(t, e, n) {
  return X(
    e,
    !1,
    ju(t, n, e.length)
  );
}
function tl({ value: t, key: e, index: n }, i = []) {
  return db([t, e, n, ...i]);
}
function db(t) {
  let e = t.length;
  for (; e-- && !t[e]; )
    ;
  return t.slice(0, e + 1).map((n, i) => n || X("_".repeat(i + 1), !1));
}
const Kc = X("undefined", !1), pb = (t, e) => {
  if (t.type === 1 && (t.tagType === 1 || t.tagType === 3)) {
    const n = ft(t, "slot");
    if (n)
      return n.exp, e.scopes.vSlot++, () => {
        e.scopes.vSlot--;
      };
  }
}, gb = (t, e, n) => ai(
  t,
  e,
  !1,
  !0,
  e.length ? e[0].loc : n
);
function mb(t, e, n = gb) {
  e.helper(ka);
  const { children: i, loc: s } = t, r = [], o = [];
  let l = e.scopes.vSlot > 0 || e.scopes.vFor > 0;
  const a = ft(t, "slot", !0);
  if (a) {
    const { arg: b, exp: m } = a;
    b && !Ye(b) && (l = !0), r.push(
      we(
        b || X("default", !0),
        n(m, i, s)
      )
    );
  }
  let c = !1, h = !1;
  const f = [], u = /* @__PURE__ */ new Set();
  let d = 0;
  for (let b = 0; b < i.length; b++) {
    const m = i[b];
    let y;
    if (!br(m) || !(y = ft(m, "slot", !0))) {
      m.type !== 3 && f.push(m);
      continue;
    }
    if (a) {
      e.onError(
        me(37, y.loc)
      );
      break;
    }
    c = !0;
    const { children: E, loc: v } = m, {
      arg: T = X("default", !0),
      exp: B,
      loc: O
    } = y;
    let _;
    Ye(T) ? _ = T ? T.content : "default" : l = !0;
    const R = n(B, E, v);
    let D, N, M;
    if (D = ft(m, "if"))
      l = !0, o.push(
        Zo(
          D.exp,
          Ps(T, R, d++),
          Kc
        )
      );
    else if (N = ft(
      m,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let H = b, I;
      for (; H-- && (I = i[H], I.type === 3); )
        ;
      if (I && br(I) && ft(I, "if")) {
        i.splice(b, 1), b--;
        let ne = o[o.length - 1];
        for (; ne.alternate.type === 19; )
          ne = ne.alternate;
        ne.alternate = N.exp ? Zo(
          N.exp,
          Ps(
            T,
            R,
            d++
          ),
          Kc
        ) : Ps(T, R, d++);
      } else
        e.onError(
          me(30, N.loc)
        );
    } else if (M = ft(m, "for")) {
      l = !0;
      const H = M.parseResult || nd(M.exp);
      H ? o.push(
        Ee(e.helper(Ca), [
          H.source,
          ai(
            tl(H),
            Ps(T, R),
            !0
            /* force newline */
          )
        ])
      ) : e.onError(
        me(32, M.loc)
      );
    } else {
      if (_) {
        if (u.has(_)) {
          e.onError(
            me(
              38,
              O
            )
          );
          continue;
        }
        u.add(_), _ === "default" && (h = !0);
      }
      r.push(we(T, R));
    }
  }
  if (!a) {
    const b = (m, y) => {
      const E = n(m, y, s);
      return e.compatConfig && (E.isNonScopedSlot = !0), we("default", E);
    };
    c ? f.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    f.some((m) => id(m)) && (h ? e.onError(
      me(
        39,
        f[0].loc
      )
    ) : r.push(
      b(void 0, f)
    )) : r.push(b(void 0, i));
  }
  const p = l ? 2 : Xs(t.children) ? 3 : 1;
  let w = ut(
    r.concat(
      we(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        X(
          p + "",
          !1
        )
      )
    ),
    s
  );
  return o.length && (w = Ee(e.helper(Hu), [
    w,
    ys(o)
  ])), {
    slots: w,
    hasDynamicSlots: l
  };
}
function Ps(t, e, n) {
  const i = [
    we("name", t),
    we("fn", e)
  ];
  return n != null && i.push(
    we("key", X(String(n), !0))
  ), ut(i);
}
function Xs(t) {
  for (let e = 0; e < t.length; e++) {
    const n = t[e];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Xs(n.children))
          return !0;
        break;
      case 9:
        if (Xs(n.branches))
          return !0;
        break;
      case 10:
      case 11:
        if (Xs(n.children))
          return !0;
        break;
    }
  }
  return !1;
}
function id(t) {
  return t.type !== 2 && t.type !== 12 ? !0 : t.type === 2 ? !!t.content.trim() : id(t.content);
}
const sd = /* @__PURE__ */ new WeakMap(), yb = (t, e) => function() {
  if (t = e.currentNode, !(t.type === 1 && (t.tagType === 0 || t.tagType === 1)))
    return;
  const { tag: i, props: s } = t, r = t.tagType === 1;
  let o = r ? bb(t, e) : `"${i}"`;
  const l = ce(o) && o.callee === dr;
  let a, c, h, f = 0, u, d, p, w = (
    // dynamic component may resolve to plain elements
    l || o === Ui || o === ma || !r && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (i === "svg" || i === "foreignObject")
  );
  if (s.length > 0) {
    const b = rd(
      t,
      e,
      void 0,
      r,
      l
    );
    a = b.props, f = b.patchFlag, d = b.dynamicPropNames;
    const m = b.directives;
    p = m && m.length ? ys(
      m.map((y) => wb(y, e))
    ) : void 0, b.shouldUseBlock && (w = !0);
  }
  if (t.children.length > 0)
    if (o === ur && (w = !0, f |= 1024), r && // Teleport is not a real component and has dedicated runtime handling
    o !== Ui && // explained above.
    o !== ur) {
      const { slots: m, hasDynamicSlots: y } = mb(t, e);
      c = m, y && (f |= 1024);
    } else if (t.children.length === 1 && o !== Ui) {
      const m = t.children[0], y = m.type, E = y === 5 || y === 8;
      E && dt(m, e) === 0 && (f |= 1), E || y === 2 ? c = m : c = t.children;
    } else
      c = t.children;
  f !== 0 && (h = String(f), d && d.length && (u = Sb(d))), t.codegenNode = Qi(
    e,
    o,
    a,
    c,
    h,
    u,
    p,
    !!w,
    !1,
    r,
    t.loc
  );
};
function bb(t, e, n = !1) {
  let { tag: i } = t;
  const s = nl(i), r = Qr(t, "is");
  if (r)
    if (s || Cn(
      "COMPILER_IS_ON_ELEMENT",
      e
    )) {
      const a = r.type === 6 ? r.value && X(r.value.content, !0) : r.exp;
      if (a)
        return Ee(e.helper(dr), [
          a
        ]);
    } else
      r.type === 6 && r.value.content.startsWith("vue:") && (i = r.value.content.slice(4));
  const o = !s && ft(t, "is");
  if (o && o.exp)
    return Ee(e.helper(dr), [
      o.exp
    ]);
  const l = Wu(i) || e.isBuiltInComponent(i);
  return l ? (n || e.helper(l), l) : (e.helper(wa), e.components.add(i), es(i, "component"));
}
function rd(t, e, n = t.props, i, s, r = !1) {
  const { tag: o, loc: l, children: a } = t;
  let c = [];
  const h = [], f = [], u = a.length > 0;
  let d = !1, p = 0, w = !1, b = !1, m = !1, y = !1, E = !1, v = !1;
  const T = [], B = (R) => {
    c.length && (h.push(
      ut(zc(c), l)
    ), c = []), R && h.push(R);
  }, O = ({ key: R, value: D }) => {
    if (Ye(R)) {
      const N = R.content, M = Ln(N);
      if (M && (!i || s) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      N.toLowerCase() !== "onclick" && // omit v-model handlers
      N !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !bn(N) && (y = !0), M && bn(N) && (v = !0), D.type === 20 || (D.type === 4 || D.type === 8) && dt(D, e) > 0)
        return;
      N === "ref" ? w = !0 : N === "class" ? b = !0 : N === "style" ? m = !0 : N !== "key" && !T.includes(N) && T.push(N), i && (N === "class" || N === "style") && !T.includes(N) && T.push(N);
    } else
      E = !0;
  };
  for (let R = 0; R < n.length; R++) {
    const D = n[R];
    if (D.type === 6) {
      const { loc: N, name: M, value: H } = D;
      let I = !0;
      if (M === "ref" && (w = !0, e.scopes.vFor > 0 && c.push(
        we(
          X("ref_for", !0),
          X("true")
        )
      )), M === "is" && (nl(o) || H && H.content.startsWith("vue:") || Cn(
        "COMPILER_IS_ON_ELEMENT",
        e
      )))
        continue;
      c.push(
        we(
          X(
            M,
            !0,
            ju(N, 0, M.length)
          ),
          X(
            H ? H.content : "",
            I,
            H ? H.loc : N
          )
        )
      );
    } else {
      const { name: N, arg: M, exp: H, loc: I } = D, ne = N === "bind", Z = N === "on";
      if (N === "slot") {
        i || e.onError(
          me(40, I)
        );
        continue;
      }
      if (N === "once" || N === "memo" || N === "is" || ne && gn(M, "is") && (nl(o) || Cn(
        "COMPILER_IS_ON_ELEMENT",
        e
      )) || Z && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (ne && gn(M, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        Z && u && gn(M, "vue:before-update")) && (d = !0), ne && gn(M, "ref") && e.scopes.vFor > 0 && c.push(
          we(
            X("ref_for", !0),
            X("true")
          )
        ), !M && (ne || Z)
      ) {
        if (E = !0, H)
          if (ne) {
            if (B(), Cn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              e
            )) {
              h.unshift(H);
              continue;
            }
            h.push(H);
          } else
            B({
              type: 14,
              loc: I,
              callee: e.helper(xa),
              arguments: i ? [H] : [H, "true"]
            });
        else
          e.onError(
            me(
              ne ? 34 : 35,
              I
            )
          );
        continue;
      }
      const re = e.directiveTransforms[N];
      if (re) {
        const { props: se, needRuntime: mt } = re(D, t, e);
        !r && se.forEach(O), Z && M && !Ye(M) ? B(ut(se, l)) : c.push(...se), mt && (f.push(D), Qt(mt) && sd.set(D, mt));
      } else
        Rp(N) || (f.push(D), u && (d = !0));
    }
  }
  let _;
  if (h.length ? (B(), h.length > 1 ? _ = Ee(
    e.helper(pr),
    h,
    l
  ) : _ = h[0]) : c.length && (_ = ut(
    zc(c),
    l
  )), E ? p |= 16 : (b && !i && (p |= 2), m && !i && (p |= 4), T.length && (p |= 8), y && (p |= 32)), !d && (p === 0 || p === 32) && (w || v || f.length > 0) && (p |= 512), !e.inSSR && _)
    switch (_.type) {
      case 15:
        let R = -1, D = -1, N = !1;
        for (let I = 0; I < _.properties.length; I++) {
          const ne = _.properties[I].key;
          Ye(ne) ? ne.content === "class" ? R = I : ne.content === "style" && (D = I) : ne.isHandlerKey || (N = !0);
        }
        const M = _.properties[R], H = _.properties[D];
        N ? _ = Ee(
          e.helper(Zi),
          [_]
        ) : (M && !Ye(M.value) && (M.value = Ee(
          e.helper(Ta),
          [M.value]
        )), H && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (m || H.value.type === 4 && H.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        H.value.type === 17) && (H.value = Ee(
          e.helper(Aa),
          [H.value]
        )));
        break;
      case 14:
        break;
      default:
        _ = Ee(
          e.helper(Zi),
          [
            Ee(e.helper(ms), [
              _
            ])
          ]
        );
        break;
    }
  return {
    props: _,
    directives: f,
    patchFlag: p,
    dynamicPropNames: T,
    shouldUseBlock: d
  };
}
function zc(t) {
  const e = /* @__PURE__ */ new Map(), n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (s.key.type === 8 || !s.key.isStatic) {
      n.push(s);
      continue;
    }
    const r = s.key.content, o = e.get(r);
    o ? (r === "style" || r === "class" || Ln(r)) && vb(o, s) : (e.set(r, s), n.push(s));
  }
  return n;
}
function vb(t, e) {
  t.value.type === 17 ? t.value.elements.push(e.value) : t.value = ys(
    [t.value, e.value],
    t.loc
  );
}
function wb(t, e) {
  const n = [], i = sd.get(t);
  i ? n.push(e.helperString(i)) : (e.helper(Sa), e.directives.add(t.name), n.push(es(t.name, "directive")));
  const { loc: s } = t;
  if (t.exp && n.push(t.exp), t.arg && (t.exp || n.push("void 0"), n.push(t.arg)), Object.keys(t.modifiers).length) {
    t.arg || (t.exp || n.push("void 0"), n.push("void 0"));
    const r = X("true", !1, s);
    n.push(
      ut(
        t.modifiers.map(
          (o) => we(o, r)
        ),
        s
      )
    );
  }
  return ys(n, t.loc);
}
function Sb(t) {
  let e = "[";
  for (let n = 0, i = t.length; n < i; n++)
    e += JSON.stringify(t[n]), n < i - 1 && (e += ", ");
  return e + "]";
}
function nl(t) {
  return t === "component" || t === "Component";
}
const _b = (t, e) => {
  if (vr(t)) {
    const { children: n, loc: i } = t, { slotName: s, slotProps: r } = Eb(t, e), o = [
      e.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      s,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    r && (o[2] = r, l = 3), n.length && (o[3] = ai([], n, !1, !1, i), l = 4), e.scopeId && !e.slotted && (l = 5), o.splice(l), t.codegenNode = Ee(
      e.helper(Fu),
      o,
      i
    );
  }
};
function Eb(t, e) {
  let n = '"default"', i;
  const s = [];
  for (let r = 0; r < t.props.length; r++) {
    const o = t.props[r];
    o.type === 6 ? o.value && (o.name === "name" ? n = JSON.stringify(o.value.content) : (o.name = Ae(o.name), s.push(o))) : o.name === "bind" && gn(o.arg, "name") ? o.exp && (n = o.exp) : (o.name === "bind" && o.arg && Ye(o.arg) && (o.arg.content = Ae(o.arg.content)), s.push(o));
  }
  if (s.length > 0) {
    const { props: r, directives: o } = rd(
      t,
      e,
      s,
      !1,
      !1
    );
    i = r, o.length && e.onError(
      me(
        36,
        o[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: i
  };
}
const Cb = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, od = (t, e, n, i) => {
  const { loc: s, modifiers: r, arg: o } = t;
  !t.exp && !r.length && n.onError(me(35, s));
  let l;
  if (o.type === 4)
    if (o.isStatic) {
      let f = o.content;
      f.startsWith("vue:") && (f = `vnode-${f.slice(4)}`);
      const u = e.tagType !== 0 || f.startsWith("vnode") || !/[A-Z]/.test(f) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Jn(Ae(f))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${f}`
      );
      l = X(u, !0, o.loc);
    } else
      l = wt([
        `${n.helperString(Yo)}(`,
        o,
        ")"
      ]);
  else
    l = o, l.children.unshift(`${n.helperString(Yo)}(`), l.children.push(")");
  let a = t.exp;
  a && !a.content.trim() && (a = void 0);
  let c = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const f = $u(a.content), u = !(f || Cb.test(a.content)), d = a.content.includes(";");
    (u || c && f) && (a = wt([
      `${u ? "$event" : "(...args)"} => ${d ? "{" : "("}`,
      a,
      d ? "}" : ")"
    ]));
  }
  let h = {
    props: [
      we(
        l,
        a || X("() => {}", !1, s)
      )
    ]
  };
  return i && (h = i(h)), c && (h.props[0].value = n.cache(h.props[0].value)), h.props.forEach((f) => f.key.isHandlerKey = !0), h;
}, Tb = (t, e, n) => {
  const { exp: i, modifiers: s, loc: r } = t, o = t.arg;
  return o.type !== 4 ? (o.children.unshift("("), o.children.push(') || ""')) : o.isStatic || (o.content = `${o.content} || ""`), s.includes("camel") && (o.type === 4 ? o.isStatic ? o.content = Ae(o.content) : o.content = `${n.helperString(Xo)}(${o.content})` : (o.children.unshift(`${n.helperString(Xo)}(`), o.children.push(")"))), n.inSSR || (s.includes("prop") && qc(o, "."), s.includes("attr") && qc(o, "^")), !i || i.type === 4 && !i.content.trim() ? (n.onError(me(34, r)), {
    props: [we(o, X("", !0, r))]
  }) : {
    props: [we(o, i)]
  };
}, qc = (t, e) => {
  t.type === 4 ? t.isStatic ? t.content = e + t.content : t.content = `\`${e}\${${t.content}}\`` : (t.children.unshift(`'${e}' + (`), t.children.push(")"));
}, Ab = (t, e) => {
  if (t.type === 0 || t.type === 1 || t.type === 11 || t.type === 10)
    return () => {
      const n = t.children;
      let i, s = !1;
      for (let r = 0; r < n.length; r++) {
        const o = n[r];
        if (yo(o)) {
          s = !0;
          for (let l = r + 1; l < n.length; l++) {
            const a = n[l];
            if (yo(a))
              i || (i = n[r] = wt(
                [o],
                o.loc
              )), i.children.push(" + ", a), n.splice(l, 1), l--;
            else {
              i = void 0;
              break;
            }
          }
        }
      }
      if (!(!s || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (t.type === 0 || t.type === 1 && t.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !t.props.find(
        (r) => r.type === 7 && !e.directiveTransforms[r.name]
      ) && t.tag !== "template")))
        for (let r = 0; r < n.length; r++) {
          const o = n[r];
          if (yo(o) || o.type === 8) {
            const l = [];
            (o.type !== 2 || o.content !== " ") && l.push(o), !e.ssr && dt(o, e) === 0 && l.push(
              "1"
            ), n[r] = {
              type: 12,
              content: o,
              loc: o.loc,
              codegenNode: Ee(
                e.helper(va),
                l
              )
            };
          }
        }
    };
}, Gc = /* @__PURE__ */ new WeakSet(), xb = (t, e) => {
  if (t.type === 1 && ft(t, "once", !0))
    return Gc.has(t) || e.inVOnce || e.inSSR ? void 0 : (Gc.add(t), e.inVOnce = !0, e.helper(gr), () => {
      e.inVOnce = !1;
      const n = e.currentNode;
      n.codegenNode && (n.codegenNode = e.cache(
        n.codegenNode,
        !0
        /* isVNode */
      ));
    });
}, ld = (t, e, n) => {
  const { exp: i, arg: s } = t;
  if (!i)
    return n.onError(
      me(41, t.loc)
    ), Is();
  const r = i.loc.source, o = i.type === 4 ? i.content : r, l = n.bindingMetadata[r];
  if (l === "props" || l === "props-aliased")
    return n.onError(me(44, i.loc)), Is();
  const a = !1;
  if (!o.trim() || !$u(o) && !a)
    return n.onError(
      me(42, i.loc)
    ), Is();
  const c = s || X("modelValue", !0), h = s ? Ye(s) ? `onUpdate:${Ae(s.content)}` : wt(['"onUpdate:" + ', s]) : "onUpdate:modelValue";
  let f;
  const u = n.isTS ? "($event: any)" : "$event";
  f = wt([
    `${u} => ((`,
    i,
    ") = $event)"
  ]);
  const d = [
    // modelValue: foo
    we(c, t.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    we(h, f)
  ];
  if (t.modifiers.length && e.tagType === 1) {
    const p = t.modifiers.map((b) => (Ra(b) ? b : JSON.stringify(b)) + ": true").join(", "), w = s ? Ye(s) ? `${s.content}Modifiers` : wt([s, ' + "Modifiers"']) : "modelModifiers";
    d.push(
      we(
        w,
        X(
          `{ ${p} }`,
          !1,
          t.loc,
          2
        )
      )
    );
  }
  return Is(d);
};
function Is(t = []) {
  return { props: t };
}
const kb = /[\w).+\-_$\]]/, Ob = (t, e) => {
  Cn("COMPILER_FILTER", e) && (t.type === 5 && _r(t.content, e), t.type === 1 && t.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && _r(n.exp, e);
  }));
};
function _r(t, e) {
  if (t.type === 4)
    Jc(t, e);
  else
    for (let n = 0; n < t.children.length; n++) {
      const i = t.children[n];
      typeof i == "object" && (i.type === 4 ? Jc(i, e) : i.type === 8 ? _r(t, e) : i.type === 5 && _r(i.content, e));
    }
}
function Jc(t, e) {
  const n = t.content;
  let i = !1, s = !1, r = !1, o = !1, l = 0, a = 0, c = 0, h = 0, f, u, d, p, w = [];
  for (d = 0; d < n.length; d++)
    if (u = f, f = n.charCodeAt(d), i)
      f === 39 && u !== 92 && (i = !1);
    else if (s)
      f === 34 && u !== 92 && (s = !1);
    else if (r)
      f === 96 && u !== 92 && (r = !1);
    else if (o)
      f === 47 && u !== 92 && (o = !1);
    else if (f === 124 && // pipe
    n.charCodeAt(d + 1) !== 124 && n.charCodeAt(d - 1) !== 124 && !l && !a && !c)
      p === void 0 ? (h = d + 1, p = n.slice(0, d).trim()) : b();
    else {
      switch (f) {
        case 34:
          s = !0;
          break;
        case 39:
          i = !0;
          break;
        case 96:
          r = !0;
          break;
        case 40:
          c++;
          break;
        case 41:
          c--;
          break;
        case 91:
          a++;
          break;
        case 93:
          a--;
          break;
        case 123:
          l++;
          break;
        case 125:
          l--;
          break;
      }
      if (f === 47) {
        let m = d - 1, y;
        for (; m >= 0 && (y = n.charAt(m), y === " "); m--)
          ;
        (!y || !kb.test(y)) && (o = !0);
      }
    }
  p === void 0 ? p = n.slice(0, d).trim() : h !== 0 && b();
  function b() {
    w.push(n.slice(h, d).trim()), h = d + 1;
  }
  if (w.length) {
    for (d = 0; d < w.length; d++)
      p = Mb(p, w[d], e);
    t.content = p;
  }
}
function Mb(t, e, n) {
  n.helper(_a);
  const i = e.indexOf("(");
  if (i < 0)
    return n.filters.add(e), `${es(e, "filter")}(${t})`;
  {
    const s = e.slice(0, i), r = e.slice(i + 1);
    return n.filters.add(s), `${es(s, "filter")}(${t}${r !== ")" ? "," + r : r}`;
  }
}
const Xc = /* @__PURE__ */ new WeakSet(), Rb = (t, e) => {
  if (t.type === 1) {
    const n = ft(t, "memo");
    return !n || Xc.has(t) ? void 0 : (Xc.add(t), () => {
      const i = t.codegenNode || e.currentNode.codegenNode;
      i && i.type === 13 && (t.tagType !== 1 && Ma(i, e), t.codegenNode = Ee(e.helper(Oa), [
        n.exp,
        ai(void 0, i),
        "_cache",
        String(e.cached++)
      ]));
    });
  }
};
function Nb(t) {
  return [
    [
      xb,
      ob,
      Rb,
      cb,
      Ob,
      _b,
      yb,
      pb,
      Ab
    ],
    {
      on: od,
      bind: Tb,
      model: ld
    }
  ];
}
function Db(t, e = {}) {
  const n = e.onError || ga, i = e.mode === "module";
  e.prefixIdentifiers === !0 ? n(me(47)) : i && n(me(48));
  const s = !1;
  e.cacheHandlers && n(me(49)), e.scopeId && !i && n(me(50));
  const r = J(t) ? ky(t, e) : t, [o, l] = Nb();
  return Wy(
    r,
    ee({}, e, {
      prefixIdentifiers: s,
      nodeTransforms: [
        ...o,
        ...e.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: ee(
        {},
        l,
        e.directiveTransforms || {}
        // user transforms
      )
    })
  ), Ky(
    r,
    ee({}, e, {
      prefixIdentifiers: s
    })
  );
}
const Lb = () => ({ props: [] }), ad = Symbol(""), cd = Symbol(""), hd = Symbol(""), fd = Symbol(""), il = Symbol(""), ud = Symbol(""), dd = Symbol(""), pd = Symbol(""), gd = Symbol(""), md = Symbol("");
dy({
  [ad]: "vModelRadio",
  [cd]: "vModelCheckbox",
  [hd]: "vModelText",
  [fd]: "vModelSelect",
  [il]: "vModelDynamic",
  [ud]: "withModifiers",
  [dd]: "withKeys",
  [pd]: "vShow",
  [gd]: "Transition",
  [md]: "TransitionGroup"
});
let Vn;
function Pb(t, e = !1) {
  return Vn || (Vn = document.createElement("div")), e ? (Vn.innerHTML = `<div foo="${t.replace(/"/g, "&quot;")}">`, Vn.children[0].getAttribute("foo")) : (Vn.innerHTML = t, Vn.textContent);
}
const Ib = /* @__PURE__ */ Qe(
  "style,iframe,script,noscript",
  !0
), Bb = {
  isVoidTag: Kp,
  isNativeTag: (t) => $p(t) || jp(t),
  isPreTag: (t) => t === "pre",
  decodeEntities: Pb,
  isBuiltInComponent: (t) => {
    if (jn(t, "Transition"))
      return gd;
    if (jn(t, "TransitionGroup"))
      return md;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(t, e) {
    let n = e ? e.ns : 0;
    if (e && n === 2)
      if (e.tag === "annotation-xml") {
        if (t === "svg")
          return 1;
        e.props.some(
          (i) => i.type === 6 && i.name === "encoding" && i.value != null && (i.value.content === "text/html" || i.value.content === "application/xhtml+xml")
        ) && (n = 0);
      } else
        /^m(?:[ions]|text)$/.test(e.tag) && t !== "mglyph" && t !== "malignmark" && (n = 0);
    else
      e && n === 1 && (e.tag === "foreignObject" || e.tag === "desc" || e.tag === "title") && (n = 0);
    if (n === 0) {
      if (t === "svg")
        return 1;
      if (t === "math")
        return 2;
    }
    return n;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode({ tag: t, ns: e }) {
    if (e === 0) {
      if (t === "textarea" || t === "title")
        return 1;
      if (Ib(t))
        return 2;
    }
    return 0;
  }
}, Ub = (t) => {
  t.type === 1 && t.props.forEach((e, n) => {
    e.type === 6 && e.name === "style" && e.value && (t.props[n] = {
      type: 7,
      name: "bind",
      arg: X("style", !0, e.loc),
      exp: Fb(e.value.content, e.loc),
      modifiers: [],
      loc: e.loc
    });
  });
}, Fb = (t, e) => {
  const n = Jh(t);
  return X(
    JSON.stringify(n),
    !1,
    e,
    3
  );
};
function Zt(t, e) {
  return me(
    t,
    e
  );
}
const Hb = (t, e, n) => {
  const { exp: i, loc: s } = t;
  return i || n.onError(
    Zt(53, s)
  ), e.children.length && (n.onError(
    Zt(54, s)
  ), e.children.length = 0), {
    props: [
      we(
        X("innerHTML", !0, s),
        i || X("", !0)
      )
    ]
  };
}, Vb = (t, e, n) => {
  const { exp: i, loc: s } = t;
  return i || n.onError(
    Zt(55, s)
  ), e.children.length && (n.onError(
    Zt(56, s)
  ), e.children.length = 0), {
    props: [
      we(
        X("textContent", !0),
        i ? dt(i, n) > 0 ? i : Ee(
          n.helperString(Zr),
          [i],
          s
        ) : X("", !0)
      )
    ]
  };
}, Wb = (t, e, n) => {
  const i = ld(t, e, n);
  if (!i.props.length || e.tagType === 1)
    return i;
  t.arg && n.onError(
    Zt(
      58,
      t.arg.loc
    )
  );
  const { tag: s } = e, r = n.isCustomElement(s);
  if (s === "input" || s === "textarea" || s === "select" || r) {
    let o = hd, l = !1;
    if (s === "input" || r) {
      const a = Qr(e, "type");
      if (a) {
        if (a.type === 7)
          o = il;
        else if (a.value)
          switch (a.value.content) {
            case "radio":
              o = ad;
              break;
            case "checkbox":
              o = cd;
              break;
            case "file":
              l = !0, n.onError(
                Zt(
                  59,
                  t.loc
                )
              );
              break;
          }
      } else
        _y(e) && (o = il);
    } else
      s === "select" && (o = fd);
    l || (i.needRuntime = n.helper(o));
  } else
    n.onError(
      Zt(
        57,
        t.loc
      )
    );
  return i.props = i.props.filter(
    (o) => !(o.key.type === 4 && o.key.content === "modelValue")
  ), i;
}, $b = /* @__PURE__ */ Qe("passive,once,capture"), jb = /* @__PURE__ */ Qe(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Kb = /* @__PURE__ */ Qe("left,right"), yd = /* @__PURE__ */ Qe(
  "onkeyup,onkeydown,onkeypress",
  !0
), zb = (t, e, n, i) => {
  const s = [], r = [], o = [];
  for (let l = 0; l < e.length; l++) {
    const a = e[l];
    a === "native" && ts(
      "COMPILER_V_ON_NATIVE",
      n
    ) || $b(a) ? o.push(a) : Kb(a) ? Ye(t) ? yd(t.content) ? s.push(a) : r.push(a) : (s.push(a), r.push(a)) : jb(a) ? r.push(a) : s.push(a);
  }
  return {
    keyModifiers: s,
    nonKeyModifiers: r,
    eventOptionModifiers: o
  };
}, Yc = (t, e) => Ye(t) && t.content.toLowerCase() === "onclick" ? X(e, !0) : t.type !== 4 ? wt([
  "(",
  t,
  `) === "onClick" ? "${e}" : (`,
  t,
  ")"
]) : t, qb = (t, e, n) => od(t, e, n, (i) => {
  const { modifiers: s } = t;
  if (!s.length)
    return i;
  let { key: r, value: o } = i.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = zb(r, s, n, t.loc);
  if (a.includes("right") && (r = Yc(r, "onContextmenu")), a.includes("middle") && (r = Yc(r, "onMouseup")), a.length && (o = Ee(n.helper(ud), [
    o,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!Ye(r) || yd(r.content)) && (o = Ee(n.helper(dd), [
    o,
    JSON.stringify(l)
  ])), c.length) {
    const h = c.map(In).join("");
    r = Ye(r) ? X(`${r.content}${h}`, !0) : wt(["(", r, `) + "${h}"`]);
  }
  return {
    props: [we(r, o)]
  };
}), Gb = (t, e, n) => {
  const { exp: i, loc: s } = t;
  return i || n.onError(
    Zt(61, s)
  ), {
    props: [],
    needRuntime: n.helper(pd)
  };
}, Jb = (t, e) => {
  t.type === 1 && t.tagType === 0 && (t.tag === "script" || t.tag === "style") && e.removeNode();
}, Xb = [
  Ub
], Yb = {
  cloak: Lb,
  html: Hb,
  text: Vb,
  model: Wb,
  // override compiler-core
  on: qb,
  // override compiler-core
  show: Gb
};
function Zb(t, e = {}) {
  return Db(
    t,
    ee({}, Bb, e, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Jb,
        ...Xb,
        ...e.nodeTransforms || []
      ],
      directiveTransforms: ee(
        {},
        Yb,
        e.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
const Zc = /* @__PURE__ */ Object.create(null);
function Qb(t, e) {
  if (!J(t))
    if (t.nodeType)
      t = t.innerHTML;
    else
      return qe;
  const n = t, i = Zc[n];
  if (i)
    return i;
  if (t[0] === "#") {
    const l = document.querySelector(t);
    t = l ? l.innerHTML : "";
  }
  const s = ee(
    {
      hoistStatic: !0,
      onError: void 0,
      onWarn: qe
    },
    e
  );
  !s.isCustomElement && typeof customElements < "u" && (s.isCustomElement = (l) => !!customElements.get(l));
  const { code: r } = Zb(t, s), o = new Function("Vue", r)(ly);
  return o._rc = !0, Zc[n] = o;
}
ou(Qb);
class ae {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, n, i) {
    let s = [];
    return this.decompose(
      0,
      e,
      s,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      s,
      3
      /* Open.To */
    ), this.decompose(
      n,
      this.length,
      s,
      1
      /* Open.From */
    ), At.from(s, this.length - (n - e) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, n = this.length) {
    let i = [];
    return this.decompose(e, n, i, 0), At.from(i, n - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let n = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), s = new Hi(this), r = new Hi(e);
    for (let o = n, l = n; ; ) {
      if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
        return !1;
      if (l += s.value.length, s.done || l >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new Hi(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, n = this.length) {
    return new bd(this, e, n);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, n) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      n == null && (n = this.lines + 1);
      let s = this.line(e).from;
      i = this.iterRange(s, Math.max(s, n == this.lines + 1 ? this.length : n <= 1 ? 0 : this.line(n - 1).to));
    }
    return new vd(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? ae.empty : e.length <= 32 ? new Se(e) : At.from(Se.split(e, []));
  }
}
class Se extends ae {
  constructor(e, n = e1(e)) {
    super(), this.text = e, this.length = n;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, n, i, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = s + o.length;
      if ((n ? i : l) >= e)
        return new t1(s, l, i, o);
      s = l + 1, i++;
    }
  }
  decompose(e, n, i, s) {
    let r = e <= 0 && n >= this.length ? this : new Se(Qc(this.text, e, n), Math.min(n, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = i.pop(), l = Ys(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new Se(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new Se(l.slice(0, a)), new Se(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(e, n, i) {
    if (!(i instanceof Se))
      return super.replace(e, n, i);
    let s = Ys(this.text, Ys(i.text, Qc(this.text, 0, e)), n), r = this.length + i.length - (n - e);
    return s.length <= 32 ? new Se(s, r) : At.from(Se.split(s, []), r);
  }
  sliceString(e, n = this.length, i = `
`) {
    let s = "";
    for (let r = 0, o = 0; r <= n && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > e && o && (s += i), e < a && n > r && (s += l.slice(Math.max(0, e - r), n - r)), r = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let n of this.text)
      e.push(n);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, n) {
    let i = [], s = -1;
    for (let r of e)
      i.push(r), s += r.length + 1, i.length == 32 && (n.push(new Se(i, s)), i = [], s = -1);
    return s > -1 && n.push(new Se(i, s)), n;
  }
}
class At extends ae {
  constructor(e, n) {
    super(), this.children = e, this.length = n, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, n, i, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = s + o.length, a = i + o.lines - 1;
      if ((n ? a : l) >= e)
        return o.lineInner(e, n, i, s);
      s = l + 1, i = a + 1;
    }
  }
  decompose(e, n, i, s) {
    for (let r = 0, o = 0; o <= n && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (e <= a && n >= o) {
        let c = s & ((o <= e ? 1 : 0) | (a >= n ? 2 : 0));
        o >= e && a <= n && !c ? i.push(l) : l.decompose(e - o, n - o, i, c);
      }
      o = a + 1;
    }
  }
  replace(e, n, i) {
    if (i.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s], l = r + o.length;
        if (e >= r && n <= l) {
          let a = o.replace(e - r, n - r, i), c = this.lines - o.lines + a.lines;
          if (a.lines < c >> 5 - 1 && a.lines > c >> 5 + 1) {
            let h = this.children.slice();
            return h[s] = a, new At(h, this.length - (n - e) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, n, i);
  }
  sliceString(e, n = this.length, i = `
`) {
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= n; r++) {
      let l = this.children[r], a = o + l.length;
      o > e && r && (s += i), e < a && n > o && (s += l.sliceString(e - o, n - o, i)), o = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let n of this.children)
      n.flatten(e);
  }
  scanIdentical(e, n) {
    if (!(e instanceof At))
      return 0;
    let i = 0, [s, r, o, l] = n > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += n, r += n) {
      if (s == o || r == l)
        return i;
      let a = this.children[s], c = e.children[r];
      if (a != c)
        return i + a.scanIdentical(c, n);
      i += a.length + 1;
    }
  }
  static from(e, n = e.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new Se(d, n);
    }
    let s = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = s << 1, o = s >> 1, l = [], a = 0, c = -1, h = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof At)
        for (let w of d.children)
          f(w);
      else
        d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof Se && a && (p = h[h.length - 1]) instanceof Se && d.lines + p.lines <= 32 ? (a += d.lines, c += d.length + 1, h[h.length - 1] = new Se(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, c += d.length + 1, h.push(d));
    }
    function u() {
      a != 0 && (l.push(h.length == 1 ? h[0] : At.from(h, c)), c = -1, a = h.length = 0);
    }
    for (let d of e)
      f(d);
    return u(), l.length == 1 ? l[0] : new At(l, n);
  }
}
ae.empty = /* @__PURE__ */ new Se([""], 0);
function e1(t) {
  let e = -1;
  for (let n of t)
    e += n.length + 1;
  return e;
}
function Ys(t, e, n = 0, i = 1e9) {
  for (let s = 0, r = 0, o = !0; r < t.length && s <= i; r++) {
    let l = t[r], a = s + l.length;
    a >= n && (a > i && (l = l.slice(0, i - s)), s < n && (l = l.slice(n - s)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), s = a + 1;
  }
  return e;
}
function Qc(t, e, n) {
  return Ys(t, [""], e, n);
}
class Hi {
  constructor(e, n = 1) {
    this.dir = n, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [n > 0 ? 1 : (e instanceof Se ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, n) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], r = this.offsets[i], o = r >> 1, l = s instanceof Se ? s.text.length : s.children.length;
      if (o == (n > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        n > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (n > 0 ? 0 : 1)) {
        if (this.offsets[i] += n, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (s instanceof Se) {
        let a = s.text[o + (n < 0 ? -1 : 0)];
        if (this.offsets[i] += n, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : n > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = s.children[o + (n < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += n) : (n < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(n > 0 ? 1 : (a instanceof Se ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class bd {
  constructor(e, n, i) {
    this.value = "", this.done = !1, this.cursor = new Hi(e, n > i ? -1 : 1), this.pos = n > i ? e.length : 0, this.from = Math.min(n, i), this.to = Math.max(n, i);
  }
  nextInner(e, n) {
    if (n < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, n < 0 ? this.pos - this.to : this.from - this.pos);
    let i = n < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: s } = this.cursor.next(e);
    return this.pos += (s.length + e) * n, this.value = s.length <= i ? s : n < 0 ? s.slice(s.length - i) : s.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class vd {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: n, lineBreak: i, value: s } = this.inner.next(e);
    return n ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = s, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (ae.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Hi.prototype[Symbol.iterator] = bd.prototype[Symbol.iterator] = vd.prototype[Symbol.iterator] = function() {
  return this;
});
class t1 {
  /**
  @internal
  */
  constructor(e, n, i, s) {
    this.from = e, this.to = n, this.number = i, this.text = s;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
let Qn = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
for (let t = 1; t < Qn.length; t++)
  Qn[t] += Qn[t - 1];
function n1(t) {
  for (let e = 1; e < Qn.length; e += 2)
    if (Qn[e] > t)
      return Qn[e - 1] <= t;
  return !1;
}
function eh(t) {
  return t >= 127462 && t <= 127487;
}
const th = 8205;
function Pt(t, e, n = !0, i = !0) {
  return (n ? wd : i1)(t, e, i);
}
function wd(t, e, n) {
  if (e == t.length)
    return e;
  e && Sd(t.charCodeAt(e)) && _d(t.charCodeAt(e - 1)) && e--;
  let i = vo(t, e);
  for (e += nh(i); e < t.length; ) {
    let s = vo(t, e);
    if (i == th || s == th || n && n1(s))
      e += nh(s), i = s;
    else if (eh(s)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && eh(vo(t, o)); )
        r++, o -= 2;
      if (r % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function i1(t, e, n) {
  for (; e > 0; ) {
    let i = wd(t, e - 2, n);
    if (i < e)
      return i;
    e--;
  }
  return 0;
}
function Sd(t) {
  return t >= 56320 && t < 57344;
}
function _d(t) {
  return t >= 55296 && t < 56320;
}
function vo(t, e) {
  let n = t.charCodeAt(e);
  if (!_d(n) || e + 1 == t.length)
    return n;
  let i = t.charCodeAt(e + 1);
  return Sd(i) ? (n - 55296 << 10) + (i - 56320) + 65536 : n;
}
function nh(t) {
  return t < 65536 ? 1 : 2;
}
const sl = /\r\n?|\n/;
var rt = /* @__PURE__ */ function(t) {
  return t[t.Simple = 0] = "Simple", t[t.TrackDel = 1] = "TrackDel", t[t.TrackBefore = 2] = "TrackBefore", t[t.TrackAfter = 3] = "TrackAfter", t;
}(rt || (rt = {}));
class Ft {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let n = 0; n < this.sections.length; n += 2)
      e += this.sections[n];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let n = 0; n < this.sections.length; n += 2) {
      let i = this.sections[n + 1];
      e += i < 0 ? this.sections[n] : i;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let n = 0, i = 0, s = 0; n < this.sections.length; ) {
      let r = this.sections[n++], o = this.sections[n++];
      o < 0 ? (e(i, s, r), s += r) : s += o, i += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, n = !1) {
    rl(this, e, n);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let n = 0; n < this.sections.length; ) {
      let i = this.sections[n++], s = this.sections[n++];
      s < 0 ? e.push(i, s) : e.push(s, i);
    }
    return new Ft(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Ed(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `other` happened before the ones in `this`.
  */
  mapDesc(e, n = !1) {
    return e.empty ? this : ol(this, e, n);
  }
  mapPos(e, n = -1, i = rt.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], c = s + l;
      if (a < 0) {
        if (c > e)
          return r + (e - s);
        r += l;
      } else {
        if (i != rt.Simple && c >= e && (i == rt.TrackDel && s < e && c > e || i == rt.TrackBefore && s < e || i == rt.TrackAfter && c > e))
          return null;
        if (c > e || c == e && n < 0 && !l)
          return e == s || n < 0 ? r : r + a;
        r += a;
      }
      s = c;
    }
    if (e > s)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, n = e) {
    for (let i = 0, s = 0; i < this.sections.length && s <= n; ) {
      let r = this.sections[i++], o = this.sections[i++], l = s + r;
      if (o >= 0 && s <= n && l >= e)
        return s < e && l > n ? "cover" : !0;
      s = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 0; n < this.sections.length; ) {
      let i = this.sections[n++], s = this.sections[n++];
      e += (e ? " " : "") + i + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((n) => typeof n != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Ft(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new Ft(e);
  }
}
class Me extends Ft {
  constructor(e, n) {
    super(e), this.inserted = n;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return rl(this, (n, i, s, r, o) => e = e.replace(s, s + (i - n), o), !1), e;
  }
  mapDesc(e, n = !1) {
    return ol(this, e, n, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let n = this.sections.slice(), i = [];
    for (let s = 0, r = 0; s < n.length; s += 2) {
      let o = n[s], l = n[s + 1];
      if (l >= 0) {
        n[s] = l, n[s + 1] = o;
        let a = s >> 1;
        for (; i.length < a; )
          i.push(ae.empty);
        i.push(o ? e.slice(r, r + o) : ae.empty);
      }
      r += o;
    }
    return new Me(n, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Ed(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, n = !1) {
    return e.empty ? this : ol(this, e, n, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, n = !1) {
    rl(this, e, n);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return Ft.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let n = [], i = [], s = [], r = new is(this);
    e:
      for (let o = 0, l = 0; ; ) {
        let a = o == e.length ? 1e9 : e[o++];
        for (; l < a || l == a && r.len == 0; ) {
          if (r.done)
            break e;
          let h = Math.min(r.len, a - l);
          Be(s, h, -1);
          let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
          Be(n, h, f), f > 0 && Jt(i, n, r.text), r.forward(h), l += h;
        }
        let c = e[o++];
        for (; l < c; ) {
          if (r.done)
            break e;
          let h = Math.min(r.len, c - l);
          Be(n, h, -1), Be(s, h, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(h), l += h;
        }
      }
    return {
      changes: new Me(n, i),
      filtered: Ft.create(s)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let n = 0; n < this.sections.length; n += 2) {
      let i = this.sections[n], s = this.sections[n + 1];
      s < 0 ? e.push(i) : s == 0 ? e.push([i]) : e.push([i].concat(this.inserted[n >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, n, i) {
    let s = [], r = [], o = 0, l = null;
    function a(h = !1) {
      if (!h && !s.length)
        return;
      o < n && Be(s, n - o, -1);
      let f = new Me(s, r);
      l = l ? l.compose(f.map(l)) : f, s = [], r = [], o = 0;
    }
    function c(h) {
      if (Array.isArray(h))
        for (let f of h)
          c(f);
      else if (h instanceof Me) {
        if (h.length != n)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${n})`);
        a(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: f, to: u = f, insert: d } = h;
        if (f > u || f < 0 || u > n)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${n})`);
        let p = d ? typeof d == "string" ? ae.of(d.split(i || sl)) : d : ae.empty, w = p.length;
        if (f == u && w == 0)
          return;
        f < o && a(), f > o && Be(s, f - o, -1), Be(s, u - f, w), Jt(r, s, p), o = u;
      }
    }
    return c(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new Me(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let n = [], i = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == "number")
        n.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          n.push(r[0], 0);
        else {
          for (; i.length < s; )
            i.push(ae.empty);
          i[s] = ae.of(r.slice(1)), n.push(r[0], i[s].length);
        }
      }
    }
    return new Me(n, i);
  }
  /**
  @internal
  */
  static createSet(e, n) {
    return new Me(e, n);
  }
}
function Be(t, e, n, i = !1) {
  if (e == 0 && n <= 0)
    return;
  let s = t.length - 2;
  s >= 0 && n <= 0 && n == t[s + 1] ? t[s] += e : e == 0 && t[s] == 0 ? t[s + 1] += n : i ? (t[s] += e, t[s + 1] += n) : t.push(e, n);
}
function Jt(t, e, n) {
  if (n.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < t.length)
    t[t.length - 1] = t[t.length - 1].append(n);
  else {
    for (; t.length < i; )
      t.push(ae.empty);
    t.push(n);
  }
}
function rl(t, e, n) {
  let i = t.inserted;
  for (let s = 0, r = 0, o = 0; o < t.sections.length; ) {
    let l = t.sections[o++], a = t.sections[o++];
    if (a < 0)
      s += l, r += l;
    else {
      let c = s, h = r, f = ae.empty;
      for (; c += l, h += a, a && i && (f = f.append(i[o - 2 >> 1])), !(n || o == t.sections.length || t.sections[o + 1] < 0); )
        l = t.sections[o++], a = t.sections[o++];
      e(s, c, r, h, f), s = c, r = h;
    }
  }
}
function ol(t, e, n, i = !1) {
  let s = [], r = i ? [] : null, o = new is(t), l = new is(e);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let c = Math.min(o.len, l.len);
      Be(s, c, -1), o.forward(c), l.forward(c);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !n))) {
      let c = l.len;
      for (Be(s, l.ins, -1); c; ) {
        let h = Math.min(o.len, c);
        o.ins >= 0 && a < o.i && o.len <= h && (Be(s, 0, o.ins), r && Jt(r, s, o.text), a = o.i), o.forward(h), c -= h;
      }
      l.next();
    } else if (o.ins >= 0) {
      let c = 0, h = o.len;
      for (; h; )
        if (l.ins == -1) {
          let f = Math.min(h, l.len);
          c += f, h -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < h)
          h -= l.len, l.next();
        else
          break;
      Be(s, c, a < o.i ? o.ins : 0), r && a < o.i && Jt(r, s, o.text), a = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done)
        return r ? Me.createSet(s, r) : Ft.create(s);
      throw new Error("Mismatched change set lengths");
    }
}
function Ed(t, e, n = !1) {
  let i = [], s = n ? [] : null, r = new is(t), o = new is(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return s ? Me.createSet(i, s) : Ft.create(i);
    if (r.ins == 0)
      Be(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      Be(i, 0, o.ins, l), s && Jt(s, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), c = i.length;
        if (r.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Be(i, a, h, l), s && h && Jt(s, i, o.text);
        } else
          o.ins == -1 ? (Be(i, r.off ? 0 : r.len, a, l), s && Jt(s, i, r.textBit(a))) : (Be(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && Jt(s, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > c), r.forward2(a), o.forward(a);
      }
    }
  }
}
class is {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, n = this.i - 2 >> 1;
    return n >= e.length ? ae.empty : e[n];
  }
  textBit(e) {
    let { inserted: n } = this.set, i = this.i - 2 >> 1;
    return i >= n.length && !e ? ae.empty : n[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class mn {
  constructor(e, n, i) {
    this.from = e, this.to = n, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 16 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 16 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 3;
    return e == 3 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 5;
    return e == 33554431 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, n = -1) {
    let i, s;
    return this.empty ? i = s = e.mapPos(this.from, n) : (i = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new mn(i, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, n = e) {
    if (e <= this.anchor && n >= this.anchor)
      return $.range(e, n);
    let i = Math.abs(e - this.anchor) > Math.abs(n - this.anchor) ? e : n;
    return $.range(this.anchor, i);
  }
  /**
  Compare this range to another range.
  */
  eq(e) {
    return this.anchor == e.anchor && this.head == e.head;
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return $.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new mn(e, n, i);
  }
}
class $ {
  constructor(e, n) {
    this.ranges = e, this.mainIndex = n;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, n = -1) {
    return e.empty ? this : $.create(this.ranges.map((i) => i.map(e, n)), this.mainIndex);
  }
  /**
  Compare this selection to another selection.
  */
  eq(e) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let n = 0; n < this.ranges.length; n++)
      if (!this.ranges[n].eq(e.ranges[n]))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new $([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, n = !0) {
    return $.create([e].concat(this.ranges), n ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, n = this.mainIndex) {
    let i = this.ranges.slice();
    return i[n] = e, $.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new $(e.ranges.map((n) => mn.fromJSON(n)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, n = e) {
    return new $([$.range(e, n)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, n = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= i : r.from < i)
        return $.normalized(e.slice(), n);
      i = r.to;
    }
    return new $(e, n);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, n = 0, i, s) {
    return mn.create(e, e, (n == 0 ? 0 : n < 0 ? 4 : 8) | (i == null ? 3 : Math.min(2, i)) | (s ?? 33554431) << 5);
  }
  /**
  Create a selection range.
  */
  static range(e, n, i, s) {
    let r = (i ?? 33554431) << 5 | (s == null ? 3 : Math.min(2, s));
    return n < e ? mn.create(n, e, 24 | r) : mn.create(e, n, (n > e ? 4 : 0) | r);
  }
  /**
  @internal
  */
  static normalized(e, n = 0) {
    let i = e[n];
    e.sort((s, r) => s.from - r.from), n = e.indexOf(i);
    for (let s = 1; s < e.length; s++) {
      let r = e[s], o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        s <= n && n--, e.splice(--s, 2, r.anchor > r.head ? $.range(a, l) : $.range(l, a));
      }
    }
    return new $(e, n);
  }
}
function Cd(t, e) {
  for (let n of t.ranges)
    if (n.to > e)
      throw new RangeError("Selection points outside of document");
}
let La = 0;
class Y {
  constructor(e, n, i, s, r) {
    this.combine = e, this.compareInput = n, this.compare = i, this.isStatic = s, this.id = La++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new Y(e.combine || ((n) => n), e.compareInput || ((n, i) => n === i), e.compare || (e.combine ? (n, i) => n === i : Pa), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new Zs([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Zs(e, this, 1, n);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Zs(e, this, 2, n);
  }
  from(e, n) {
    return n || (n = (i) => i), this.compute([e], (i) => n(i.field(e)));
  }
}
function Pa(t, e) {
  return t == e || t.length == e.length && t.every((n, i) => n === e[i]);
}
class Zs {
  constructor(e, n, i, s) {
    this.dependencies = e, this.facet = n, this.type = i, this.value = s, this.id = La++;
  }
  dynamicSlot(e) {
    var n;
    let i = this.value, s = this.facet.compareInput, r = this.id, o = e[r] >> 1, l = this.type == 2, a = !1, c = !1, h = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? c = !0 : ((n = e[f.id]) !== null && n !== void 0 ? n : 1) & 1 || h.push(e[f.id]);
    return {
      create(f) {
        return f.values[o] = i(f), 1;
      },
      update(f, u) {
        if (a && u.docChanged || c && (u.docChanged || u.selection) || ll(f, h)) {
          let d = i(f);
          if (l ? !ih(d, f.values[o], s) : !s(d, f.values[o]))
            return f.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let w = Cr(u, p);
          if (this.dependencies.every((b) => b instanceof Y ? u.facet(b) === f.facet(b) : b instanceof vi ? u.field(b, !1) == f.field(b, !1) : !0) || (l ? ih(d = i(f), w, s) : s(d = i(f), w)))
            return f.values[o] = w, 0;
        } else
          d = i(f);
        return f.values[o] = d, 1;
      }
    };
  }
}
function ih(t, e, n) {
  if (t.length != e.length)
    return !1;
  for (let i = 0; i < t.length; i++)
    if (!n(t[i], e[i]))
      return !1;
  return !0;
}
function ll(t, e) {
  let n = !1;
  for (let i of e)
    Vi(t, i) & 1 && (n = !0);
  return n;
}
function s1(t, e, n) {
  let i = n.map((a) => t[a.id]), s = n.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = t[e.id] >> 1;
  function l(a) {
    let c = [];
    for (let h = 0; h < i.length; h++) {
      let f = Cr(a, i[h]);
      if (s[h] == 2)
        for (let u of f)
          c.push(u);
      else
        c.push(f);
    }
    return e.combine(c);
  }
  return {
    create(a) {
      for (let c of i)
        Vi(a, c);
      return a.values[o] = l(a), 1;
    },
    update(a, c) {
      if (!ll(a, r))
        return 0;
      let h = l(a);
      return e.compare(h, a.values[o]) ? 0 : (a.values[o] = h, 1);
    },
    reconfigure(a, c) {
      let h = ll(a, i), f = c.config.facets[e.id], u = c.facet(e);
      if (f && !h && Pa(n, f))
        return a.values[o] = u, 0;
      let d = l(a);
      return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const sh = /* @__PURE__ */ Y.define({ static: !0 });
class vi {
  constructor(e, n, i, s, r) {
    this.id = e, this.createF = n, this.updateF = i, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let n = new vi(La++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    return e.provide && (n.provides = e.provide(n)), n;
  }
  create(e) {
    let n = e.facet(sh).find((i) => i.field == this);
    return ((n == null ? void 0 : n.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let n = e[this.id] >> 1;
    return {
      create: (i) => (i.values[n] = this.create(i), 1),
      update: (i, s) => {
        let r = i.values[n], o = this.updateF(r, s);
        return this.compareF(r, o) ? 0 : (i.values[n] = o, 1);
      },
      reconfigure: (i, s) => s.config.address[this.id] != null ? (i.values[n] = s.field(this), 0) : (i.values[n] = this.create(i), 1)
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, sh.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const dn = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Ti(t) {
  return (e) => new Td(e, t);
}
const r1 = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Ti(dn.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Ti(dn.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Ti(dn.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Ti(dn.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Ti(dn.lowest)
};
class Td {
  constructor(e, n) {
    this.inner = e, this.prec = n;
  }
}
class io {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new al(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return io.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class al {
  constructor(e, n) {
    this.compartment = e, this.inner = n;
  }
}
class Er {
  constructor(e, n, i, s, r, o) {
    for (this.base = e, this.compartments = n, this.dynamicSlots = i, this.address = s, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let n = this.address[e.id];
    return n == null ? e.default : this.staticValues[n >> 1];
  }
  static resolve(e, n, i) {
    let s = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of o1(e, n, o))
      u instanceof vi ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], c = [];
    for (let u of s)
      l[u.id] = c.length << 1, c.push((d) => u.slot(d));
    let h = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, w = h && h[u] || [];
      if (d.every(
        (b) => b.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, Pa(w, d))
          a.push(i.facet(p));
        else {
          let b = p.combine(d.map((m) => m.value));
          a.push(i && p.compare(b, i.facet(p)) ? i.facet(p) : b);
        }
      else {
        for (let b of d)
          b.type == 0 ? (l[b.id] = a.length << 1 | 1, a.push(b.value)) : (l[b.id] = c.length << 1, c.push((m) => b.dynamicSlot(m)));
        l[p.id] = c.length << 1, c.push((b) => s1(b, p, d));
      }
    }
    let f = c.map((u) => u(l));
    return new Er(e, o, f, l, a, r);
  }
}
function o1(t, e, n) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let c = i[a].indexOf(o);
      c > -1 && i[a].splice(c, 1), o instanceof al && n.delete(o.compartment);
    }
    if (s.set(o, l), Array.isArray(o))
      for (let c of o)
        r(c, l);
    else if (o instanceof al) {
      if (n.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(o.compartment) || o.inner;
      n.set(o.compartment, c), r(c, l);
    } else if (o instanceof Td)
      r(o.inner, o.prec);
    else if (o instanceof vi)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof Zs)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, dn.default);
    else {
      let c = o.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(c, l);
    }
  }
  return r(t, dn.default), i.reduce((o, l) => o.concat(l));
}
function Vi(t, e) {
  if (e & 1)
    return 2;
  let n = e >> 1, i = t.status[n];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  t.status[n] = 4;
  let s = t.computeSlot(t, t.config.dynamicSlots[n]);
  return t.status[n] = 2 | s;
}
function Cr(t, e) {
  return e & 1 ? t.config.staticValues[e >> 1] : t.values[e >> 1];
}
const Ad = /* @__PURE__ */ Y.define(), xd = /* @__PURE__ */ Y.define({
  combine: (t) => t.some((e) => e),
  static: !0
}), kd = /* @__PURE__ */ Y.define({
  combine: (t) => t.length ? t[0] : void 0,
  static: !0
}), Od = /* @__PURE__ */ Y.define(), Md = /* @__PURE__ */ Y.define(), Rd = /* @__PURE__ */ Y.define(), Nd = /* @__PURE__ */ Y.define({
  combine: (t) => t.length ? t[0] : !1
});
class wi {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.value = n;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new l1();
  }
}
class l1 {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new wi(this, e);
  }
}
class a1 {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new Ie(this, e);
  }
}
class Ie {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.value = n;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let n = this.type.map(this.value, e);
    return n === void 0 ? void 0 : n == this.value ? this : new Ie(this.type, n);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new a1(e.map || ((n) => n));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, n) {
    if (!e.length)
      return e;
    let i = [];
    for (let s of e) {
      let r = s.map(n);
      r && i.push(r);
    }
    return i;
  }
}
Ie.reconfigure = /* @__PURE__ */ Ie.define();
Ie.appendConfig = /* @__PURE__ */ Ie.define();
class He {
  constructor(e, n, i, s, r, o) {
    this.startState = e, this.changes = n, this.selection = i, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && Cd(i, n.newLength), r.some((l) => l.type == He.time) || (this.annotations = r.concat(He.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, n, i, s, r, o) {
    return new He(e, n, i, s, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let n of this.annotations)
      if (n.type == e)
        return n.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let n = this.annotation(He.userEvent);
    return !!(n && (n == e || n.length > e.length && n.slice(0, e.length) == e && n[e.length] == "."));
  }
}
He.time = /* @__PURE__ */ wi.define();
He.userEvent = /* @__PURE__ */ wi.define();
He.addToHistory = /* @__PURE__ */ wi.define();
He.remote = /* @__PURE__ */ wi.define();
function c1(t, e) {
  let n = [];
  for (let i = 0, s = 0; ; ) {
    let r, o;
    if (i < t.length && (s == e.length || e[s] >= t[i]))
      r = t[i++], o = t[i++];
    else if (s < e.length)
      r = e[s++], o = e[s++];
    else
      return n;
    !n.length || n[n.length - 1] < r ? n.push(r, o) : n[n.length - 1] < o && (n[n.length - 1] = o);
  }
}
function Dd(t, e, n) {
  var i;
  let s, r, o;
  return n ? (s = e.changes, r = Me.empty(e.changes.length), o = t.changes.compose(e.changes)) : (s = e.changes.map(t.changes), r = t.changes.mapDesc(e.changes, !0), o = t.changes.compose(s)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (i = t.selection) === null || i === void 0 ? void 0 : i.map(s),
    effects: Ie.mapEffects(t.effects, s).concat(Ie.mapEffects(e.effects, r)),
    annotations: t.annotations.length ? t.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: t.scrollIntoView || e.scrollIntoView
  };
}
function cl(t, e, n) {
  let i = e.selection, s = ei(e.annotations);
  return e.userEvent && (s = s.concat(He.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Me ? e.changes : Me.of(e.changes || [], n, t.facet(kd)),
    selection: i && (i instanceof $ ? i : $.single(i.anchor, i.head)),
    effects: ei(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Ld(t, e, n) {
  let i = cl(t, e.length ? e[0] : {}, t.doc.length);
  e.length && e[0].filter === !1 && (n = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (n = !1);
    let o = !!e[r].sequential;
    i = Dd(i, cl(t, e[r], o ? i.changes.newLength : t.doc.length), o);
  }
  let s = He.create(t, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return f1(n ? h1(s) : s);
}
function h1(t) {
  let e = t.startState, n = !0;
  for (let s of e.facet(Od)) {
    let r = s(t);
    if (r === !1) {
      n = !1;
      break;
    }
    Array.isArray(r) && (n = n === !0 ? r : c1(n, r));
  }
  if (n !== !0) {
    let s, r;
    if (n === !1)
      r = t.changes.invertedDesc, s = Me.empty(e.doc.length);
    else {
      let o = t.changes.filter(n);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    t = He.create(e, s, t.selection && t.selection.map(r), Ie.mapEffects(t.effects, r), t.annotations, t.scrollIntoView);
  }
  let i = e.facet(Md);
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](t);
    r instanceof He ? t = r : Array.isArray(r) && r.length == 1 && r[0] instanceof He ? t = r[0] : t = Ld(e, ei(r), !1);
  }
  return t;
}
function f1(t) {
  let e = t.startState, n = e.facet(Rd), i = t;
  for (let s = n.length - 1; s >= 0; s--) {
    let r = n[s](t);
    r && Object.keys(r).length && (i = Dd(i, cl(e, r, t.changes.newLength), !0));
  }
  return i == t ? t : He.create(e, t.changes, t.selection, i.effects, i.annotations, i.scrollIntoView);
}
const u1 = [];
function ei(t) {
  return t == null ? u1 : Array.isArray(t) ? t : [t];
}
var It = /* @__PURE__ */ function(t) {
  return t[t.Word = 0] = "Word", t[t.Space = 1] = "Space", t[t.Other = 2] = "Other", t;
}(It || (It = {}));
const d1 = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let hl;
try {
  hl = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function p1(t) {
  if (hl)
    return hl.test(t);
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (/\w/.test(n) || n > "" && (n.toUpperCase() != n.toLowerCase() || d1.test(n)))
      return !0;
  }
  return !1;
}
function g1(t) {
  return (e) => {
    if (!/\S/.test(e))
      return It.Space;
    if (p1(e))
      return It.Word;
    for (let n = 0; n < t.length; n++)
      if (e.indexOf(t[n]) > -1)
        return It.Word;
    return It.Other;
  };
}
class fe {
  constructor(e, n, i, s, r, o) {
    this.config = e, this.doc = n, this.selection = i, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Vi(this, l << 1);
    this.computeSlot = null;
  }
  field(e, n = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (n)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Vi(this, i), Cr(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Ld(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let n = this.config, { base: i, compartments: s } = n;
    for (let o of e.effects)
      o.is(io.reconfigure) ? (n && (s = /* @__PURE__ */ new Map(), n.compartments.forEach((l, a) => s.set(a, l)), n = null), s.set(o.value.compartment, o.value.extension)) : o.is(Ie.reconfigure) ? (n = null, i = o.value) : o.is(Ie.appendConfig) && (n = null, i = ei(i).concat(o.value));
    let r;
    n ? r = e.startState.values.slice() : (n = Er.resolve(i, s, this), r = new fe(n, this.doc, this.selection, n.dynamicSlots.map(() => null), (l, a) => a.reconfigure(l, this), null).values), new fe(n, e.newDoc, e.newSelection, r, (o, l) => l.update(o, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((n) => ({
      changes: { from: n.from, to: n.to, insert: e },
      range: $.cursor(n.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let n = this.selection, i = e(n.ranges[0]), s = this.changes(i.changes), r = [i.range], o = ei(i.effects);
    for (let l = 1; l < n.ranges.length; l++) {
      let a = e(n.ranges[l]), c = this.changes(a.changes), h = c.map(s);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(h);
      let f = s.mapDesc(c, !0);
      r.push(a.range.map(f)), s = s.compose(h), o = Ie.mapEffects(o, h).concat(Ie.mapEffects(ei(a.effects), f));
    }
    return {
      changes: s,
      selection: $.create(r, n.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof Me ? e : Me.of(e, this.doc.length, this.facet(fe.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return ae.of(e.split(this.facet(fe.lineSeparator) || sl));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, n = this.doc.length) {
    return this.doc.sliceString(e, n, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let n = this.config.address[e.id];
    return n == null ? e.default : (Vi(this, n), Cr(this, n));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let n = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let s = e[i];
        s instanceof vi && this.config.address[s.id] != null && (n[i] = s.spec.toJSON(this.field(e[i]), this));
      }
    return n;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, n = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r], l = e[r];
          s.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return fe.create({
      doc: e.doc,
      selection: $.fromJSON(e.selection),
      extensions: n.extensions ? s.concat([n.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let n = Er.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof ae ? e.doc : ae.of((e.doc || "").split(n.staticFacet(fe.lineSeparator) || sl)), s = e.selection ? e.selection instanceof $ ? e.selection : $.single(e.selection.anchor, e.selection.head) : $.single(0);
    return Cd(s, i.length), n.staticFacet(xd) || (s = s.asSingle()), new fe(n, i, s, n.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(fe.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(fe.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Nd);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...n) {
    for (let i of this.facet(fe.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return n.length && (e = e.replace(/\$(\$|\d*)/g, (i, s) => {
      if (s == "$")
        return "$";
      let r = +(s || 1);
      return !r || r > n.length ? i : n[r - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, n, i = -1) {
    let s = [];
    for (let r of this.facet(Ad))
      for (let o of r(this, n, i))
        Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
    return s;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    return g1(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: n, from: i, length: s } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = Pt(n, o, !1);
      if (r(n.slice(a, o)) != It.Word)
        break;
      o = a;
    }
    for (; l < s; ) {
      let a = Pt(n, l);
      if (r(n.slice(l, a)) != It.Word)
        break;
      l = a;
    }
    return o == l ? null : $.range(o + i, l + i);
  }
}
fe.allowMultipleSelections = xd;
fe.tabSize = /* @__PURE__ */ Y.define({
  combine: (t) => t.length ? t[0] : 4
});
fe.lineSeparator = kd;
fe.readOnly = Nd;
fe.phrases = /* @__PURE__ */ Y.define({
  compare(t, e) {
    let n = Object.keys(t), i = Object.keys(e);
    return n.length == i.length && n.every((s) => t[s] == e[s]);
  }
});
fe.languageData = Ad;
fe.changeFilter = Od;
fe.transactionFilter = Md;
fe.transactionExtender = Rd;
io.reconfigure = /* @__PURE__ */ Ie.define();
function m1(t, e, n = {}) {
  let i = {};
  for (let s of t)
    for (let r of Object.keys(s)) {
      let o = s[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(n, r))
          i[r] = n[r](l, o);
        else
          throw new Error("Config merge conflict for field " + r);
    }
  for (let s in e)
    i[s] === void 0 && (i[s] = e[s]);
  return i;
}
class fi {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, n = e) {
    return ss.create(e, n, this);
  }
}
fi.prototype.startSide = fi.prototype.endSide = 0;
fi.prototype.point = !1;
fi.prototype.mapMode = rt.TrackDel;
class ss {
  constructor(e, n, i) {
    this.from = e, this.to = n, this.value = i;
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new ss(e, n, i);
  }
}
function fl(t, e) {
  return t.from - e.from || t.value.startSide - e.value.startSide;
}
class Ia {
  constructor(e, n, i, s) {
    this.from = e, this.to = n, this.value = i, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, n, i, s = 0) {
    let r = i ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, c = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - n;
      if (a == o)
        return c >= 0 ? o : l;
      c >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, n, i, s) {
    for (let r = this.findIndex(n, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, n) {
    let i = [], s = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let c = this.value[a], h = this.from[a] + e, f = this.to[a] + e, u, d;
      if (h == f) {
        let p = n.mapPos(h, c.startSide, c.mapMode);
        if (p == null || (u = d = p, c.startSide != c.endSide && (d = n.mapPos(h, c.endSide), d < u)))
          continue;
      } else if (u = n.mapPos(h, c.startSide), d = n.mapPos(f, c.endSide), u > d || u == d && c.startSide > 0 && c.endSide <= 0)
        continue;
      (d - u || c.endSide - c.startSide) < 0 || (o < 0 && (o = u), c.point && (l = Math.max(l, d - u)), i.push(c), s.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new Ia(s, r, i, l) : null, pos: o };
  }
}
class ye {
  constructor(e, n, i, s) {
    this.chunkPos = e, this.chunk = n, this.nextLayer = i, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(e, n, i, s) {
    return new ye(e, n, i, s);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let n of this.chunk)
      e += n.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: n = [], sort: i = !1, filterFrom: s = 0, filterTo: r = this.length } = e, o = e.filter;
    if (n.length == 0 && !o)
      return this;
    if (i && (n = n.slice().sort(fl)), this.isEmpty)
      return n.length ? ye.of(n) : this;
    let l = new Pd(this, null, -1).goto(0), a = 0, c = [], h = new Tr();
    for (; l.value || a < n.length; )
      if (a < n.length && (l.from - n[a].from || l.startSide - n[a].value.startSide) >= 0) {
        let f = n[a++];
        h.addInner(f.from, f.to, f.value) || c.push(f);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == n.length || this.chunkEnd(l.chunkIndex) < n[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || c.push(ss.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !c.length ? ye.empty : this.nextLayer.update({ add: c, filter: o, filterFrom: s, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let n = [], i = [], s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], c = e.touchesRange(l, l + a.length);
      if (c === !1)
        s = Math.max(s, a.maxPoint), n.push(a), i.push(e.mapPos(l));
      else if (c === !0) {
        let { mapped: h, pos: f } = a.map(l, e);
        h && (s = Math.max(s, h.maxPoint), n.push(h), i.push(f));
      }
    }
    let r = this.nextLayer.map(e);
    return n.length == 0 ? r : new ye(i, n, r || ye.empty, s);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, n, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s], o = this.chunk[s];
        if (n >= r && e <= r + o.length && o.between(r, e - r, n - r, i) === !1)
          return;
      }
      this.nextLayer.between(e, n, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return rs.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, n = 0) {
    return rs.from(e).goto(n);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, n, i, s, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = n.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = rh(o, l, i), c = new Ai(o, a, r), h = new Ai(l, a, r);
    i.iterGaps((f, u, d) => oh(c, f, h, u, d, s)), i.empty && i.length == 0 && oh(c, 0, h, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, n, i = 0, s) {
    s == null && (s = 1e9 - 1);
    let r = e.filter((h) => !h.isEmpty && n.indexOf(h) < 0), o = n.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = rh(r, o), a = new Ai(r, l, 0).goto(i), c = new Ai(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != c.to || !ul(a.active, c.active) || a.point && (!c.point || !a.point.eq(c.point)))
        return !1;
      if (a.to > s)
        return !0;
      a.next(), c.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, n, i, s, r = -1) {
    let o = new Ai(e, null, r).goto(n), l = n, a = o.openStart;
    for (; ; ) {
      let c = Math.min(o.to, i);
      if (o.point) {
        let h = o.activeForPoint(o.to), f = o.pointFrom < n ? h.length + 1 : Math.min(h.length, a);
        s.point(l, c, o.point, h, f, o.pointRank), a = Math.min(o.openEnd(c), h.length);
      } else
        c > l && (s.span(l, c, o.active, a), a = o.openEnd(c));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, n = !1) {
    let i = new Tr();
    for (let s of e instanceof ss ? [e] : n ? y1(e) : e)
      i.add(s.from, s.to, s.value);
    return i.finish();
  }
}
ye.empty = /* @__PURE__ */ new ye([], [], null, -1);
function y1(t) {
  if (t.length > 1)
    for (let e = t[0], n = 1; n < t.length; n++) {
      let i = t[n];
      if (fl(e, i) > 0)
        return t.slice().sort(fl);
      e = i;
    }
  return t;
}
ye.empty.nextLayer = ye.empty;
class Tr {
  finishChunk(e) {
    this.chunks.push(new Ia(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, n, i) {
    this.addInner(e, n, i) || (this.nextLayer || (this.nextLayer = new Tr())).add(e, n, i);
  }
  /**
  @internal
  */
  addInner(e, n, i) {
    let s = e - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(n - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = n, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, n - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, n) {
    if ((e - this.lastTo || n.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, n.maxPoint), this.chunks.push(n), this.chunkPos.push(e);
    let i = n.value.length - 1;
    return this.last = n.value[i], this.lastFrom = n.from[i] + e, this.lastTo = n.to[i] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(ye.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let n = ye.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, n;
  }
}
function rh(t, e, n) {
  let i = /* @__PURE__ */ new Map();
  for (let r of t)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let s = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null && (n ? n.mapPos(l) : l) == r.chunkPos[o] && !(n != null && n.touchesRange(l, l + r.chunk[o].length)) && s.add(r.chunk[o]);
    }
  return s;
}
class Pd {
  constructor(e, n, i, s = 0) {
    this.layer = e, this.skip = n, this.minPoint = i, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, n = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, n, !1), this;
  }
  gotoInner(e, n, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < e || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], n, !0);
      (!i || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, n) {
    (this.to - e || this.endSide - n) < 0 && this.gotoInner(e, n, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], n = this.layer.chunk[this.chunkIndex], i = e + n.from[this.rangeIndex];
        if (this.from = i, this.to = e + n.to[this.rangeIndex], this.value = n.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class rs {
  constructor(e) {
    this.heap = e;
  }
  static from(e, n = null, i = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && s.push(new Pd(o, n, i, r));
    return s.length == 1 ? s[0] : new rs(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, n = -1e9) {
    for (let i of this.heap)
      i.goto(e, n);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      wo(this.heap, i);
    return this.next(), this;
  }
  forward(e, n) {
    for (let i of this.heap)
      i.forward(e, n);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      wo(this.heap, i);
    (this.to - e || this.value.endSide - n) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), wo(this.heap, 0);
    }
  }
}
function wo(t, e) {
  for (let n = t[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= t.length)
      break;
    let s = t[i];
    if (i + 1 < t.length && s.compare(t[i + 1]) >= 0 && (s = t[i + 1], i++), n.compare(s) < 0)
      break;
    t[i] = n, t[e] = s, e = i;
  }
}
class Ai {
  constructor(e, n, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = rs.from(e, n, i);
  }
  goto(e, n = -1e9) {
    return this.cursor.goto(e, n), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = n, this.openStart = -1, this.next(), this;
  }
  forward(e, n) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - n) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, n);
  }
  removeActive(e) {
    Bs(this.active, e), Bs(this.activeTo, e), Bs(this.activeRank, e), this.minActive = lh(this.active, this.activeTo);
  }
  addActive(e) {
    let n = 0, { value: i, to: s, rank: r } = this.cursor;
    for (; n < this.activeRank.length && this.activeRank[n] <= r; )
      n++;
    Us(this.active, n, i), Us(this.activeTo, n, s), Us(this.activeRank, n, r), e && Us(e, n, this.cursor.from), this.minActive = lh(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, n = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > e) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), i && Bs(i, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (n && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < e; s--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let n = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && n.push(this.active[i]);
    return n.reverse();
  }
  openEnd(e) {
    let n = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      n++;
    return n;
  }
}
function oh(t, e, n, i, s, r) {
  t.goto(e), n.goto(i);
  let o = i + s, l = i, a = i - e;
  for (; ; ) {
    let c = t.to + a - n.to || t.endSide - n.endSide, h = c < 0 ? t.to + a : n.to, f = Math.min(h, o);
    if (t.point || n.point ? t.point && n.point && (t.point == n.point || t.point.eq(n.point)) && ul(t.activeForPoint(t.to), n.activeForPoint(n.to)) || r.comparePoint(l, f, t.point, n.point) : f > l && !ul(t.active, n.active) && r.compareRange(l, f, t.active, n.active), h > o)
      break;
    l = h, c <= 0 && t.next(), c >= 0 && n.next();
  }
}
function ul(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] != e[n] && !t[n].eq(e[n]))
      return !1;
  return !0;
}
function Bs(t, e) {
  for (let n = e, i = t.length - 1; n < i; n++)
    t[n] = t[n + 1];
  t.pop();
}
function Us(t, e, n) {
  for (let i = t.length - 1; i >= e; i--)
    t[i + 1] = t[i];
  t[e] = n;
}
function lh(t, e) {
  let n = -1, i = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - i || t[s].endSide - t[n].endSide) < 0 && (n = s, i = e[s]);
  return n;
}
function b1(t, e, n, i) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e)
      return s;
    if (s == t.length)
      break;
    r += t.charCodeAt(s) == 9 ? n - r % n : 1, s = Pt(t, s);
  }
  return i === !0 ? -1 : t.length;
}
const dl = "ͼ", ah = typeof Symbol > "u" ? "__" + dl : Symbol.for(dl), pl = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), ch = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class ui {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, n) {
    this.rules = [];
    let { finish: i } = n || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, c) {
      let h = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null)
        return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((w) => o.map((b) => w.replace(/&/, b))).reduce((w, b) => w.concat(b)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(s(d), p, h, u);
        } else
          p != null && h.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (w) => "-" + w.toLowerCase()) + ": " + p + ";");
      }
      (h.length || u) && a.push((i && !f && !c ? o.map(i) : o).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let o in e)
      r(s(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = ch[ah] || 1;
    return ch[ah] = e + 1, dl + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, n, i) {
    let s = e[pl], r = i && i.nonce;
    s ? r && s.setNonce(r) : s = new v1(e, r), s.mount(Array.isArray(n) ? n : [n]);
  }
}
let hh = /* @__PURE__ */ new Map();
class v1 {
  constructor(e, n) {
    let i = e.ownerDocument || e, s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = hh.get(i);
      if (r)
        return e.adoptedStyleSheets = [r.sheet, ...e.adoptedStyleSheets], e[pl] = r;
      this.sheet = new s.CSSStyleSheet(), e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets], hh.set(i, this);
    } else {
      this.styleTag = i.createElement("style"), n && this.styleTag.setAttribute("nonce", n);
      let r = e.head || e;
      r.insertBefore(this.styleTag, r.firstChild);
    }
    this.modules = [], e[pl] = this;
  }
  mount(e) {
    let n = this.sheet, i = 0, s = 0;
    for (let r = 0; r < e.length; r++) {
      let o = e[r], l = this.modules.indexOf(o);
      if (l < s && l > -1 && (this.modules.splice(l, 1), s--, l = -1), l == -1) {
        if (this.modules.splice(s++, 0, o), n)
          for (let a = 0; a < o.rules.length; a++)
            n.insertRule(o.rules[a], i++);
      } else {
        for (; s < l; )
          i += this.modules[s++].rules.length;
        i += o.rules.length, s++;
      }
    }
    if (!n) {
      let r = "";
      for (let o = 0; o < this.modules.length; o++)
        r += this.modules[o].getRules() + `
`;
      this.styleTag.textContent = r;
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var di = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, gl = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
};
for (var Pe = 0; Pe < 10; Pe++)
  di[48 + Pe] = di[96 + Pe] = String(Pe);
for (var Pe = 1; Pe <= 24; Pe++)
  di[Pe + 111] = "F" + Pe;
for (var Pe = 65; Pe <= 90; Pe++)
  di[Pe] = String.fromCharCode(Pe + 32), gl[Pe] = String.fromCharCode(Pe);
for (var So in di)
  gl.hasOwnProperty(So) || (gl[So] = di[So]);
function Ar(t) {
  let e;
  return t.nodeType == 11 ? e = t.getSelection ? t : t.ownerDocument : e = t, e.getSelection();
}
function ml(t, e) {
  return e ? t == e || t.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function w1(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Qs(t, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return ml(t, e.anchorNode);
  } catch {
    return !1;
  }
}
function os(t) {
  return t.nodeType == 3 ? Nn(t, 0, t.nodeValue.length).getClientRects() : t.nodeType == 1 ? t.getClientRects() : [];
}
function xr(t, e, n, i) {
  return n ? fh(t, e, n, i, -1) || fh(t, e, n, i, 1) : !1;
}
function kr(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}
function fh(t, e, n, i, s) {
  for (; ; ) {
    if (t == n && e == i)
      return !0;
    if (e == (s < 0 ? 0 : on(t))) {
      if (t.nodeName == "DIV")
        return !1;
      let r = t.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = kr(t) + (s < 0 ? 0 : 1), t = r;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (s < 0 ? -1 : 0)], t.nodeType == 1 && t.contentEditable == "false")
        return !1;
      e = s < 0 ? on(t) : 0;
    } else
      return !1;
  }
}
function on(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Ba(t, e) {
  let n = e ? t.left : t.right;
  return { left: n, right: n, top: t.top, bottom: t.bottom };
}
function S1(t) {
  return {
    left: 0,
    right: t.innerWidth,
    top: 0,
    bottom: t.innerHeight
  };
}
function _1(t, e, n, i, s, r, o, l) {
  let a = t.ownerDocument, c = a.defaultView || window;
  for (let h = t, f = !1; h && !f; )
    if (h.nodeType == 1) {
      let u, d = h == a.body;
      if (d)
        u = S1(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (f = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let b = h.getBoundingClientRect();
        u = {
          left: b.left,
          right: b.left + h.clientWidth,
          top: b.top,
          bottom: b.top + h.clientHeight
        };
      }
      let p = 0, w = 0;
      if (s == "nearest")
        e.top < u.top ? (w = -(u.top - e.top + o), n > 0 && e.bottom > u.bottom + w && (w = e.bottom - u.bottom + w + o)) : e.bottom > u.bottom && (w = e.bottom - u.bottom + o, n < 0 && e.top - w < u.top && (w = -(u.top + w - e.top + o)));
      else {
        let b = e.bottom - e.top, m = u.bottom - u.top;
        w = (s == "center" && b <= m ? e.top + b / 2 - m / 2 : s == "start" || s == "center" && n < 0 ? e.top - o : e.bottom - m + o) - u.top;
      }
      if (i == "nearest" ? e.left < u.left ? (p = -(u.left - e.left + r), n > 0 && e.right > u.right + p && (p = e.right - u.right + p + r)) : e.right > u.right && (p = e.right - u.right + r, n < 0 && e.left < u.left + p && (p = -(u.left + p - e.left + r))) : p = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? e.left - r : e.right - (u.right - u.left) + r) - u.left, p || w)
        if (d)
          c.scrollBy(p, w);
        else {
          let b = 0, m = 0;
          if (w) {
            let y = h.scrollTop;
            h.scrollTop += w, m = h.scrollTop - y;
          }
          if (p) {
            let y = h.scrollLeft;
            h.scrollLeft += p, b = h.scrollLeft - y;
          }
          e = {
            left: e.left - b,
            top: e.top - m,
            right: e.right - b,
            bottom: e.bottom - m
          }, b && Math.abs(b - p) < 1 && (i = "nearest"), m && Math.abs(m - w) < 1 && (s = "nearest");
        }
      if (d)
        break;
      h = h.assignedSlot || h.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
}
function E1(t) {
  let e = t.ownerDocument;
  for (let n = t.parentNode; n && n != e.body; )
    if (n.nodeType == 1) {
      if (n.scrollHeight > n.clientHeight || n.scrollWidth > n.clientWidth)
        return n;
      n = n.assignedSlot || n.parentNode;
    } else if (n.nodeType == 11)
      n = n.host;
    else
      break;
  return null;
}
class C1 {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: n, focusNode: i } = e;
    this.set(n, Math.min(e.anchorOffset, n ? on(n) : 0), i, Math.min(e.focusOffset, i ? on(i) : 0));
  }
  set(e, n, i, s) {
    this.anchorNode = e, this.anchorOffset = n, this.focusNode = i, this.focusOffset = s;
  }
}
let Wn = null;
function Id(t) {
  if (t.setActive)
    return t.setActive();
  if (Wn)
    return t.focus(Wn);
  let e = [];
  for (let n = t; n && (e.push(n, n.scrollTop, n.scrollLeft), n != n.ownerDocument); n = n.parentNode)
    ;
  if (t.focus(Wn == null ? {
    get preventScroll() {
      return Wn = { preventScroll: !0 }, !0;
    }
  } : void 0), !Wn) {
    Wn = !1;
    for (let n = 0; n < e.length; ) {
      let i = e[n++], s = e[n++], r = e[n++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let uh;
function Nn(t, e, n = e) {
  let i = uh || (uh = document.createRange());
  return i.setEnd(t, n), i.setStart(t, e), i;
}
function ti(t, e, n) {
  let i = { key: e, code: e, keyCode: n, which: n, cancelable: !0 }, s = new KeyboardEvent("keydown", i);
  s.synthetic = !0, t.dispatchEvent(s);
  let r = new KeyboardEvent("keyup", i);
  return r.synthetic = !0, t.dispatchEvent(r), s.defaultPrevented || r.defaultPrevented;
}
function T1(t) {
  for (; t; ) {
    if (t && (t.nodeType == 9 || t.nodeType == 11 && t.host))
      return t;
    t = t.assignedSlot || t.parentNode;
  }
  return null;
}
function Bd(t) {
  for (; t.attributes.length; )
    t.removeAttributeNode(t.attributes[0]);
}
function A1(t, e) {
  let n = e.focusNode, i = e.focusOffset;
  if (!n || e.anchorNode != n || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, on(n)); ; )
    if (i) {
      if (n.nodeType != 1)
        return !1;
      let s = n.childNodes[i - 1];
      s.contentEditable == "false" ? i-- : (n = s, i = on(n));
    } else {
      if (n == t)
        return !0;
      i = kr(n), n = n.parentNode;
    }
}
function Ud(t) {
  return t.scrollTop > Math.max(1, t.scrollHeight - t.clientHeight - 4);
}
class ze {
  constructor(e, n, i = !0) {
    this.node = e, this.offset = n, this.precise = i;
  }
  static before(e, n) {
    return new ze(e.parentNode, kr(e), n);
  }
  static after(e, n) {
    return new ze(e.parentNode, kr(e) + 1, n);
  }
}
const Ua = [];
class de {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let n = this.posAtStart;
    for (let i of this.children) {
      if (i == e)
        return n;
      n += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, n) {
    if (this.flags & 2) {
      let i = this.dom, s = null, r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = s ? s.nextSibling : i.firstChild)) {
            let l = de.get(r);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
          }
          o.sync(e, n), o.flags &= -8;
        }
        if (r = s ? s.nextSibling : i.firstChild, n && !n.written && n.node == i && r != o.dom && (n.written = !0), o.dom.parentNode == i)
          for (; r && r != o.dom; )
            r = dh(r);
        else
          i.insertBefore(o.dom, r);
        s = o.dom;
      }
      for (r = s ? s.nextSibling : i.firstChild, r && n && n.node == i && (n.written = !0); r; )
        r = dh(r);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(e, n), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, n) {
    let i;
    if (e == this.dom)
      i = this.dom.childNodes[n];
    else {
      let s = on(e) == 0 ? 0 : n == 0 ? -1 : 1;
      for (; ; ) {
        let r = e.parentNode;
        if (r == this.dom)
          break;
        s == 0 && r.firstChild != r.lastChild && (e == r.firstChild ? s = -1 : s = 1), e = r;
      }
      s < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !de.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let s = 0, r = 0; ; s++) {
      let o = this.children[s];
      if (o.dom == i)
        return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, n, i = 0) {
    let s = -1, r = -1, o = -1, l = -1;
    for (let a = 0, c = i, h = i; a < this.children.length; a++) {
      let f = this.children[a], u = c + f.length;
      if (c < e && u > n)
        return f.domBoundsAround(e, n, c);
      if (u >= e && s == -1 && (s = a, r = c), c > n && f.dom.parentNode == this.dom) {
        o = a, l = h;
        break;
      }
      h = u, c = u + f.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? i + this.length : l,
      startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let n = this.parent; n; n = n.parent) {
      if (e && (n.flags |= 2), n.flags & 1)
        return;
      n.flags |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this;
  }
  get rootView() {
    for (let e = this; ; ) {
      let n = e.parent;
      if (!n)
        return e;
      e = n;
    }
  }
  replaceChildren(e, n, i = Ua) {
    this.markDirty();
    for (let s = e; s < n; s++) {
      let r = this.children[s];
      r.parent == this && r.destroy();
    }
    this.children.splice(e, n - e, ...i);
    for (let s = 0; s < i.length; s++)
      i[s].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new Fd(this.children, e, this.children.length);
  }
  childPos(e, n = 1) {
    return this.childCursor().findPos(e, n);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, n, i, s, r, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  // When this is a zero-length view with a side, this should return a
  // number <= 0 to indicate it is before its position, or a
  // number > 0 when after its position.
  getSide() {
    return 0;
  }
  destroy() {
    this.parent = null;
  }
}
de.prototype.breakAfter = 0;
function dh(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class Fd {
  constructor(e, n, i) {
    this.children = e, this.pos = n, this.i = i, this.off = 0;
  }
  findPos(e, n = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (n > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function Hd(t, e, n, i, s, r, o, l, a) {
  let { children: c } = t, h = c.length ? c[e] : null, f = r.length ? r[r.length - 1] : null, u = f ? f.breakAfter : o;
  if (!(e == i && h && !o && !u && r.length < 2 && h.merge(n, s, r.length ? f : null, n == 0, l, a))) {
    if (i < c.length) {
      let d = c[i];
      d && s < d.length ? (e == i && (d = d.split(s), s = 0), !u && f && d.merge(0, s, f, !0, 0, a) ? r[r.length - 1] = d : (s && d.merge(0, s, null, !1, 0, a), r.push(d))) : d != null && d.breakAfter && (f ? f.breakAfter = 1 : o = 1), i++;
    }
    for (h && (h.breakAfter = o, n > 0 && (!o && r.length && h.merge(n, h.length, r[0], !1, l, 0) ? h.breakAfter = r.shift().breakAfter : (n < h.length || h.children.length && h.children[h.children.length - 1].length == 0) && h.merge(n, h.length, null, !1, l, 0), e++)); e < i && r.length; )
      if (c[i - 1].become(r[r.length - 1]))
        i--, r.pop(), a = r.length ? 0 : l;
      else if (c[e].become(r[0]))
        e++, r.shift(), l = r.length ? 0 : a;
      else
        break;
    !r.length && e && i < c.length && !c[e - 1].breakAfter && c[i].merge(0, 0, c[e - 1], !1, l, a) && e--, (e < i || r.length) && t.replaceChildren(e, i, r);
  }
}
function Vd(t, e, n, i, s, r) {
  let o = t.childCursor(), { i: l, off: a } = o.findPos(n, 1), { i: c, off: h } = o.findPos(e, -1), f = e - n;
  for (let u of i)
    f += u.length;
  t.length += f, Hd(t, c, h, l, a, i, 0, s, r);
}
const Kn = "￿";
class Wd {
  constructor(e, n) {
    this.points = e, this.text = "", this.lineSeparator = n.facet(fe.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Kn;
  }
  readRange(e, n) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(i, s);
      let r = this.text.length;
      this.readNode(s);
      let o = s.nextSibling;
      if (o == n)
        break;
      let l = de.get(s), a = de.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : ph(s)) || ph(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > r) && this.lineBreak(), s = o;
    }
    return this.findPointBefore(i, n), this;
  }
  readTextNode(e) {
    let n = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, n.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = n.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = s.exec(n)) && (r = l.index, o = l[0].length), this.append(n.slice(i, r < 0 ? n.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let n = de.get(e), i = n && n.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let s = i.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else
      e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, n) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == n && (i.pos = this.text.length);
  }
  findPointInside(e, n) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + Math.min(n, i.offset));
  }
}
function ph(t) {
  return t.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName);
}
class gh {
  constructor(e, n) {
    this.node = e, this.offset = n, this.pos = -1;
  }
}
let ot = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, yl = typeof document < "u" ? document : { documentElement: { style: {} } };
const bl = /* @__PURE__ */ /Edge\/(\d+)/.exec(ot.userAgent), $d = /* @__PURE__ */ /MSIE \d/.test(ot.userAgent), vl = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ot.userAgent), so = !!($d || vl || bl), mh = !so && /* @__PURE__ */ /gecko\/(\d+)/i.test(ot.userAgent), _o = !so && /* @__PURE__ */ /Chrome\/(\d+)/.exec(ot.userAgent), yh = "webkitFontSmoothing" in yl.documentElement.style, jd = !so && /* @__PURE__ */ /Apple Computer/.test(ot.vendor), bh = jd && (/* @__PURE__ */ /Mobile\/\w+/.test(ot.userAgent) || ot.maxTouchPoints > 2);
var j = {
  mac: bh || /* @__PURE__ */ /Mac/.test(ot.platform),
  windows: /* @__PURE__ */ /Win/.test(ot.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(ot.platform),
  ie: so,
  ie_version: $d ? yl.documentMode || 6 : vl ? +vl[1] : bl ? +bl[1] : 0,
  gecko: mh,
  gecko_version: mh ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(ot.userAgent) || [0, 0])[1] : 0,
  chrome: !!_o,
  chrome_version: _o ? +_o[1] : 0,
  ios: bh,
  android: /* @__PURE__ */ /Android\b/.test(ot.userAgent),
  webkit: yh,
  safari: jd,
  webkit_version: yh ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: yl.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const x1 = 256;
class Ot extends de {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, n) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (n && n.node == this.dom && (n.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, n, i) {
    return this.flags & 8 || i && (!(i instanceof Ot) || this.length - (n - e) + i.length > x1 || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(n), this.markDirty(), !0);
  }
  split(e) {
    let n = new Ot(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), n.flags |= this.flags & 8, n;
  }
  localPosFromDOM(e, n) {
    return e == this.dom ? n : n ? this.text.length : 0;
  }
  domAtPos(e) {
    return new ze(this.dom, e);
  }
  domBoundsAround(e, n, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, n) {
    return k1(this.dom, e, n);
  }
}
class Vt extends de {
  constructor(e, n = [], i = 0) {
    super(), this.mark = e, this.children = n, this.length = i;
    for (let s of n)
      s.setParent(this);
  }
  setAttrs(e) {
    if (Bd(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let n in this.mark.attrs)
        e.setAttribute(n, this.mark.attrs[n]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, n) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, n);
  }
  merge(e, n, i, s, r, o) {
    return i && (!(i instanceof Vt && i.mark.eq(this.mark)) || e && r <= 0 || n < this.length && o <= 0) ? !1 : (Vd(this, e, n, i ? i.children : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let n = [], i = 0, s = -1, r = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && n.push(i < e ? l.split(e - i) : l), s < 0 && i >= e && (s = r), i = a, r++;
    }
    let o = this.length - e;
    return this.length = e, s > -1 && (this.children.length = s, this.markDirty()), new Vt(this.mark, n, o);
  }
  domAtPos(e) {
    return Kd(this, e);
  }
  coordsAt(e, n) {
    return qd(this, e, n);
  }
}
function k1(t, e, n) {
  let i = t.nodeValue.length;
  e > i && (e = i);
  let s = e, r = e, o = 0;
  e == 0 && n < 0 || e == i && n >= 0 ? j.chrome || j.gecko || (e ? (s--, o = 1) : r < i && (r++, o = -1)) : n < 0 ? s-- : r < i && r++;
  let l = Nn(t, s, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : n >= 0) ? 0 : l.length - 1];
  return j.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (c) => c.width) || a), o ? Ba(a, o < 0) : a || null;
}
class yn extends de {
  constructor(e, n, i) {
    super(), this.widget = e, this.length = n, this.side = i, this.prevWidget = null;
  }
  static create(e, n, i) {
    return new yn(e, n, i);
  }
  split(e) {
    let n = yn.create(this.widget, this.length - e, this.side);
    return this.length -= e, n;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  getSide() {
    return this.side;
  }
  merge(e, n, i, s, r, o) {
    return i && (!(i instanceof yn) || !this.widget.compare(i.widget) || e > 0 && r <= 0 || n < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - n), !0);
  }
  become(e) {
    return e instanceof yn && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return ae.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: n } = e, i = n && n.state.doc, s = this.posAtStart;
    return i ? i.slice(s, s + this.length) : ae.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? ze.before(this.dom) : ze.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, n) {
    let i = this.widget.coordsAt(this.dom, e, n);
    if (i)
      return i;
    let s = this.dom.getClientRects(), r = null;
    if (!s.length)
      return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? s.length - 1 : 0; r = s[l], !(e > 0 ? l == 0 : l == s.length - 1 || r.top < r.bottom); l += o ? -1 : 1)
      ;
    return Ba(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class pi extends de {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof pi && e.side == this.side;
  }
  split() {
    return new pi(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? ze.before(this.dom) : ze.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return ae.empty;
  }
  get isHidden() {
    return !0;
  }
}
Ot.prototype.children = yn.prototype.children = pi.prototype.children = Ua;
function Kd(t, e) {
  let n = t.dom, { children: i } = t, s = 0;
  for (let r = 0; s < i.length; s++) {
    let o = i[s], l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (e > r && e < l && o.dom.parentNode == n)
        return o.domAtPos(e - r);
      if (e <= r)
        break;
      r = l;
    }
  }
  for (let r = s; r > 0; r--) {
    let o = i[r - 1];
    if (o.dom.parentNode == n)
      return o.domAtPos(o.length);
  }
  for (let r = s; r < i.length; r++) {
    let o = i[r];
    if (o.dom.parentNode == n)
      return o.domAtPos(0);
  }
  return new ze(n, 0);
}
function zd(t, e, n) {
  let i, { children: s } = t;
  n > 0 && e instanceof Vt && s.length && (i = s[s.length - 1]) instanceof Vt && i.mark.eq(e.mark) ? zd(i, e.children[0], n - 1) : (s.push(e), e.setParent(t)), t.length += e.length;
}
function qd(t, e, n) {
  let i = null, s = -1, r = null, o = -1;
  function l(c, h) {
    for (let f = 0, u = 0; f < c.children.length && u <= h; f++) {
      let d = c.children[f], p = u + d.length;
      p >= h && (d.children.length ? l(d, h - u) : (!r || r.isHidden && n > 0) && (p > h || u == p && d.getSide() > 0) ? (r = d, o = h - u) : (u < h || u == p && d.getSide() < 0 && !d.isHidden) && (i = d, s = h - u)), u = p;
    }
  }
  l(t, e);
  let a = (n < 0 ? i : r) || i || r;
  return a ? a.coordsAt(Math.max(0, a == i ? s : o), n) : O1(t);
}
function O1(t) {
  let e = t.dom.lastChild;
  if (!e)
    return t.dom.getBoundingClientRect();
  let n = os(e);
  return n[n.length - 1] || null;
}
function wl(t, e) {
  for (let n in t)
    n == "class" && e.class ? e.class += " " + t.class : n == "style" && e.style ? e.style += ";" + t.style : e[n] = t[n];
  return e;
}
const vh = /* @__PURE__ */ Object.create(null);
function Fa(t, e, n) {
  if (t == e)
    return !0;
  t || (t = vh), e || (e = vh);
  let i = Object.keys(t), s = Object.keys(e);
  if (i.length - (n && i.indexOf(n) > -1 ? 1 : 0) != s.length - (n && s.indexOf(n) > -1 ? 1 : 0))
    return !1;
  for (let r of i)
    if (r != n && (s.indexOf(r) == -1 || t[r] !== e[r]))
      return !1;
  return !0;
}
function Sl(t, e, n) {
  let i = null;
  if (e)
    for (let s in e)
      n && s in n || t.removeAttribute(i = s);
  if (n)
    for (let s in n)
      e && e[s] == n[s] || t.setAttribute(i = s, n[s]);
  return !!i;
}
function M1(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n = 0; n < t.attributes.length; n++) {
    let i = t.attributes[n];
    e[i.name] = i.value;
  }
  return e;
}
class Ha {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, n) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, n, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var Oe = /* @__PURE__ */ function(t) {
  return t[t.Text = 0] = "Text", t[t.WidgetBefore = 1] = "WidgetBefore", t[t.WidgetAfter = 2] = "WidgetAfter", t[t.WidgetRange = 3] = "WidgetRange", t;
}(Oe || (Oe = {}));
class Mt extends fi {
  constructor(e, n, i, s) {
    super(), this.startSide = e, this.endSide = n, this.widget = i, this.spec = s;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new vs(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let n = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return n += i && !e.inlineOrder ? n > 0 ? 3e8 : -4e8 : n > 0 ? 1e8 : -1e8, new ln(e, n, n, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let n = !!e.block, i, s;
    if (e.isBlockGap)
      i = -5e8, s = 4e8;
    else {
      let { start: r, end: o } = Gd(e, n);
      i = (r ? n ? -3e8 : -1 : 5e8) - 1, s = (o ? n ? 2e8 : 1 : -6e8) + 1;
    }
    return new ln(e, i, s, n, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new ws(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, n = !1) {
    return ye.of(e, n);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
Mt.none = ye.empty;
class vs extends Mt {
  constructor(e) {
    let { start: n, end: i } = Gd(e);
    super(n ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var n, i;
    return this == e || e instanceof vs && this.tagName == e.tagName && (this.class || ((n = this.attrs) === null || n === void 0 ? void 0 : n.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && Fa(this.attrs, e.attrs, "class");
  }
  range(e, n = e) {
    if (e >= n)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, n);
  }
}
vs.prototype.point = !1;
class ws extends Mt {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof ws && this.spec.class == e.spec.class && Fa(this.spec.attributes, e.spec.attributes);
  }
  range(e, n = e) {
    if (n != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, n);
  }
}
ws.prototype.mapMode = rt.TrackBefore;
ws.prototype.point = !0;
class ln extends Mt {
  constructor(e, n, i, s, r, o) {
    super(n, i, r, e), this.block = s, this.isReplace = o, this.mapMode = s ? n <= 0 ? rt.TrackBefore : rt.TrackAfter : rt.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide < this.endSide ? Oe.WidgetRange : this.startSide <= 0 ? Oe.WidgetBefore : Oe.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof ln && R1(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, n = e) {
    if (this.isReplace && (e > n || e == n && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && n != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, n);
  }
}
ln.prototype.point = !0;
function Gd(t, e = !1) {
  let { inclusiveStart: n, inclusiveEnd: i } = t;
  return n == null && (n = t.inclusive), i == null && (i = t.inclusive), { start: n ?? e, end: i ?? e };
}
function R1(t, e) {
  return t == e || !!(t && e && t.compare(e));
}
function _l(t, e, n, i = 0) {
  let s = n.length - 1;
  s >= 0 && n[s] + i >= t ? n[s] = Math.max(n[s], e) : n.push(t, e);
}
class Ke extends de {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, n, i, s, r, o) {
    if (i) {
      if (!(i instanceof Ke))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return s && this.setDeco(i ? i.attrs : null), Vd(this, e, n, i ? i.children : [], r, o), !0;
  }
  split(e) {
    let n = new Ke();
    if (n.breakAfter = this.breakAfter, this.length == 0)
      return n;
    let { i, off: s } = this.childPos(e);
    s && (n.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, !1, 0, 0), i++);
    for (let r = i; r < this.children.length; r++)
      n.append(this.children[r], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, n;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    Fa(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, n) {
    zd(this, e, n);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let n = e.spec.attributes, i = e.spec.class;
    n && (this.attrs = wl(n, this.attrs || {})), i && (this.attrs = wl({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return Kd(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, n) {
    var i;
    this.dom ? this.flags & 4 && (Bd(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Sl(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, n);
    let s = this.dom.lastChild;
    for (; s && de.get(s) instanceof Vt; )
      s = s.lastChild;
    if (!s || !this.length || s.nodeName != "BR" && ((i = de.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!j.ios || !this.children.some((r) => r instanceof Ot))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, n;
    for (let i of this.children) {
      if (!(i instanceof Ot) || /[^ -~]/.test(i.text))
        return null;
      let s = os(i.dom);
      if (s.length != 1)
        return null;
      e += s[0].width, n = s[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: n
    } : null;
  }
  coordsAt(e, n) {
    let i = qd(this, e, n);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState, r = i.bottom - i.top;
      if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
        let o = (r - s.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return !1;
  }
  get type() {
    return Oe.Text;
  }
  static find(e, n) {
    for (let i = 0, s = 0; i < e.children.length; i++) {
      let r = e.children[i], o = s + r.length;
      if (o >= n) {
        if (r instanceof Ke)
          return r;
        if (o > n)
          break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class Tn extends de {
  constructor(e, n, i) {
    super(), this.widget = e, this.length = n, this.type = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, n, i, s, r, o) {
    return i && (!(i instanceof Tn) || !this.widget.compare(i.widget) || e > 0 && r <= 0 || n < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - n), !0);
  }
  domAtPos(e) {
    return e == 0 ? ze.before(this.dom) : ze.after(this.dom, e == this.length);
  }
  split(e) {
    let n = this.length - e;
    this.length = e;
    let i = new Tn(this.widget, n, this.type);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return Ua;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : ae.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof Tn && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.type = e.type, this.breakAfter = e.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, n) {
    return this.widget.coordsAt(this.dom, e, n);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Wi {
  constructor(e, n, i, s) {
    this.doc = e, this.pos = n, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = n;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !e.breakAfter && !(e instanceof Tn && e.type == Oe.WidgetBefore);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new Ke()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Fs(new pi(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || this.getLine();
  }
  buildText(e, n, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = r, this.textOff = 0;
      }
      let s = Math.min(
        this.text.length - this.textOff,
        e,
        512
        /* Chunk */
      );
      this.flushBuffer(n.slice(n.length - i)), this.getLine().append(Fs(new Ot(this.text.slice(this.textOff, this.textOff + s)), n), i), this.atCursorPos = !0, this.textOff += s, e -= s, i = 0;
    }
  }
  span(e, n, i, s) {
    this.buildText(n - e, i, s), this.pos = n, this.openStart < 0 && (this.openStart = s);
  }
  point(e, n, i, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof ln) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (n > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = n - e;
    if (i instanceof ln)
      if (i.block) {
        let { type: a } = i;
        a == Oe.WidgetAfter && !this.posCovered() && this.getLine(), this.addBlockWidget(new Tn(i.widget || new wh("div"), l, a));
      } else {
        let a = yn.create(i.widget || new wh("span"), l, l ? 0 : i.startSide), c = this.atCursorPos && !a.isEditable && r <= s.length && (e < n || i.startSide > 0), h = !a.isEditable && (e < n || r > s.length || i.startSide <= 0), f = this.getLine();
        this.pendingBuffer == 2 && !c && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), c && (f.append(Fs(new pi(1), s), r), r = s.length + Math.max(0, r - s.length)), f.append(Fs(a, s), r), this.atCursorPos = h, this.pendingBuffer = h ? e < n || r > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = n), this.openStart < 0 && (this.openStart = r);
  }
  static build(e, n, i, s, r) {
    let o = new Wi(e, n, i, r);
    return o.openEnd = ye.spans(s, n, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function Fs(t, e) {
  for (let n of e)
    t = new Vt(n, [t], t.length);
  return t;
}
class wh extends Ha {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
const Jd = /* @__PURE__ */ Y.define(), Xd = /* @__PURE__ */ Y.define(), Yd = /* @__PURE__ */ Y.define(), Zd = /* @__PURE__ */ Y.define(), El = /* @__PURE__ */ Y.define(), Qd = /* @__PURE__ */ Y.define(), ep = /* @__PURE__ */ Y.define(), tp = /* @__PURE__ */ Y.define({
  combine: (t) => t.some((e) => e)
}), N1 = /* @__PURE__ */ Y.define({
  combine: (t) => t.some((e) => e)
});
class Or {
  constructor(e, n = "nearest", i = "nearest", s = 5, r = 5) {
    this.range = e, this.y = n, this.x = i, this.yMargin = s, this.xMargin = r;
  }
  map(e) {
    return e.empty ? this : new Or(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const Sh = /* @__PURE__ */ Ie.define({ map: (t, e) => t.map(e) });
function An(t, e, n) {
  let i = t.facet(Zd);
  i.length ? i[0](e) : window.onerror ? window.onerror(String(e), n, void 0, void 0, e) : n ? console.error(n + ":", e) : console.error(e);
}
const ro = /* @__PURE__ */ Y.define({ combine: (t) => t.length ? t[0] : !0 });
let D1 = 0;
const Mi = /* @__PURE__ */ Y.define();
class ls {
  constructor(e, n, i, s) {
    this.id = e, this.create = n, this.domEventHandlers = i, this.extension = s(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, n) {
    const { eventHandlers: i, provide: s, decorations: r } = n || {};
    return new ls(D1++, e, i, (o) => {
      let l = [Mi.of(o)];
      return r && l.push(as.of((a) => {
        let c = a.plugin(o);
        return c ? r(c) : Mt.none;
      })), s && l.push(s(o)), l;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, n) {
    return ls.define((i) => new e(i), n);
  }
}
class Eo {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let n = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(n);
          } catch (i) {
            if (An(n.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (n) {
        An(e.state, n, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var n;
    if (!((n = this.value) === null || n === void 0) && n.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        An(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const np = /* @__PURE__ */ Y.define(), Va = /* @__PURE__ */ Y.define(), as = /* @__PURE__ */ Y.define(), Wa = /* @__PURE__ */ Y.define(), ip = /* @__PURE__ */ Y.define();
function sp(t) {
  let e = 0, n = 0, i = 0, s = 0;
  for (let r of t.state.facet(ip)) {
    let o = r(t);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (n = Math.max(n, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: n, top: i, bottom: s };
}
const Ri = /* @__PURE__ */ Y.define();
class pt {
  constructor(e, n, i, s) {
    this.fromA = e, this.toA = n, this.fromB = i, this.toB = s;
  }
  join(e) {
    return new pt(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let n = e.length, i = this;
    for (; n > 0; n--) {
      let s = e[n - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA)
          break;
        i = i.join(s), e.splice(n - 1, 1);
      }
    }
    return e.splice(n, 0, i), e;
  }
  static extendWithRanges(e, n) {
    if (n.length == 0)
      return e;
    let i = [];
    for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
      let a = s == e.length ? null : e[s], c = o - l, h = a ? a.fromB : 1e9;
      for (; r < n.length && n[r] < h; ) {
        let f = n[r], u = n[r + 1], d = Math.max(l, f), p = Math.min(h, u);
        if (d <= p && new pt(d + c, p + c, d, p).addToSet(i), u > h)
          break;
        r += 2;
      }
      if (!a)
        return i;
      new pt(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
}
class Mr {
  constructor(e, n, i) {
    this.view = e, this.state = n, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = Me.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new pt(r, o, l, a))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new Mr(e, n, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
var Ve = /* @__PURE__ */ function(t) {
  return t[t.LTR = 0] = "LTR", t[t.RTL = 1] = "RTL", t;
}(Ve || (Ve = {}));
const Cl = Ve.LTR, L1 = Ve.RTL;
function rp(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    e.push(1 << +t[n]);
  return e;
}
const P1 = /* @__PURE__ */ rp("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), I1 = /* @__PURE__ */ rp("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Tl = /* @__PURE__ */ Object.create(null), Et = [];
for (let t of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ t.charCodeAt(0), n = /* @__PURE__ */ t.charCodeAt(1);
  Tl[e] = n, Tl[n] = -e;
}
function B1(t) {
  return t <= 247 ? P1[t] : 1424 <= t && t <= 1524 ? 2 : 1536 <= t && t <= 1785 ? I1[t - 1536] : 1774 <= t && t <= 2220 ? 4 : 8192 <= t && t <= 8203 ? 256 : 64336 <= t && t <= 65023 ? 4 : t == 8204 ? 256 : 1;
}
const U1 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class ni {
  /**
  @internal
  */
  constructor(e, n, i) {
    this.from = e, this.to = n, this.level = i;
  }
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? L1 : Cl;
  }
  /**
  @internal
  */
  side(e, n) {
    return this.dir == n == e ? this.to : this.from;
  }
  /**
  @internal
  */
  static find(e, n, i, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= n && l.to >= n) {
        if (l.level == i)
          return o;
        (r < 0 || (s != 0 ? s < 0 ? l.from < n : l.to > n : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
const be = [];
function F1(t, e) {
  let n = t.length, i = e == Cl ? 1 : 2, s = e == Cl ? 2 : 1;
  if (!t || i == 1 && !U1.test(t))
    return op(n);
  for (let o = 0, l = i, a = i; o < n; o++) {
    let c = B1(t.charCodeAt(o));
    c == 512 ? c = l : c == 8 && a == 4 && (c = 16), be[o] = c == 4 ? 2 : c, c & 7 && (a = c), l = c;
  }
  for (let o = 0, l = i, a = i; o < n; o++) {
    let c = be[o];
    if (c == 128)
      o < n - 1 && l == be[o + 1] && l & 24 ? c = be[o] = l : be[o] = 256;
    else if (c == 64) {
      let h = o + 1;
      for (; h < n && be[h] == 64; )
        h++;
      let f = o && l == 8 || h < n && be[h] == 8 ? a == 1 ? 1 : 8 : 256;
      for (let u = o; u < h; u++)
        be[u] = f;
      o = h - 1;
    } else
      c == 8 && a == 1 && (be[o] = 1);
    l = c, c & 7 && (a = c);
  }
  for (let o = 0, l = 0, a = 0, c, h, f; o < n; o++)
    if (h = Tl[c = t.charCodeAt(o)])
      if (h < 0) {
        for (let u = l - 3; u >= 0; u -= 3)
          if (Et[u + 1] == -h) {
            let d = Et[u + 2], p = d & 2 ? i : d & 4 ? d & 1 ? s : i : 0;
            p && (be[o] = be[Et[u]] = p), l = u;
            break;
          }
      } else {
        if (Et.length == 189)
          break;
        Et[l++] = o, Et[l++] = c, Et[l++] = a;
      }
    else if ((f = be[o]) == 2 || f == 1) {
      let u = f == i;
      a = u ? 0 : 1;
      for (let d = l - 3; d >= 0; d -= 3) {
        let p = Et[d + 2];
        if (p & 2)
          break;
        if (u)
          Et[d + 2] |= 2;
        else {
          if (p & 4)
            break;
          Et[d + 2] |= 4;
        }
      }
    }
  for (let o = 0; o < n; o++)
    if (be[o] == 256) {
      let l = o + 1;
      for (; l < n && be[l] == 256; )
        l++;
      let a = (o ? be[o - 1] : i) == 1, c = (l < n ? be[l] : i) == 1, h = a == c ? a ? 1 : 2 : i;
      for (let f = o; f < l; f++)
        be[f] = h;
      o = l - 1;
    }
  let r = [];
  if (i == 1)
    for (let o = 0; o < n; ) {
      let l = o, a = be[o++] != 1;
      for (; o < n && a == (be[o] != 1); )
        o++;
      if (a)
        for (let c = o; c > l; ) {
          let h = c, f = be[--c] != 2;
          for (; c > l && f == (be[c - 1] != 2); )
            c--;
          r.push(new ni(c, h, f ? 2 : 1));
        }
      else
        r.push(new ni(l, o, 0));
    }
  else
    for (let o = 0; o < n; ) {
      let l = o, a = be[o++] == 2;
      for (; o < n && a == (be[o] == 2); )
        o++;
      r.push(new ni(l, o, a ? 1 : 2));
    }
  return r;
}
function op(t) {
  return [new ni(0, t, 0)];
}
let lp = "";
function H1(t, e, n, i, s) {
  var r;
  let o = i.head - t.from, l = -1;
  if (o == 0) {
    if (!s || !t.length)
      return null;
    e[0].level != n && (o = e[0].side(!1, n), l = 0);
  } else if (o == t.length) {
    if (s)
      return null;
    let u = e[e.length - 1];
    u.level != n && (o = u.side(!0, n), l = e.length - 1);
  }
  l < 0 && (l = ni.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc));
  let a = e[l];
  o == a.side(s, n) && (a = e[l += s ? 1 : -1], o = a.side(!s, n));
  let c = s == (a.dir == n), h = Pt(t.text, o, c);
  if (lp = t.text.slice(Math.min(o, h), Math.max(o, h)), h != a.side(s, n))
    return $.cursor(h + t.from, c ? -1 : 1, a.level);
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return !f && a.level != n ? $.cursor(s ? t.to : t.from, s ? -1 : 1, n) : f && f.level < a.level ? $.cursor(f.side(!s, n) + t.from, s ? 1 : -1, f.level) : $.cursor(h + t.from, s ? -1 : 1, a.level);
}
class _h extends de {
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [], this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new Ke()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new pt(0, 0, 0, e.state.doc.length)], 0, null);
  }
  get length() {
    return this.view.state.doc.length;
  }
  // Update the document view to a given state.
  update(e) {
    let n = e.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: l, toA: a }) => a < this.minWidthFrom || l > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let i = this.view.inputState.composing < 0 ? null : W1(this.view, e.changes);
    if (this.hasComposition) {
      this.markedForComposition.clear();
      let { from: l, to: a } = this.hasComposition;
      n = new pt(l, a, e.changes.mapPos(l, -1), e.changes.mapPos(a, 1)).addToSet(n.slice());
    }
    this.hasComposition = i ? { from: i.range.fromB, to: i.range.toB } : null, (j.ie || j.chrome) && !i && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let s = this.decorations, r = this.updateDeco(), o = K1(s, r, e.changes);
    return n = pt.extendWithRanges(n, o), !(this.flags & 7) && n.length == 0 ? !1 : (this.updateInner(n, e.startState.doc.length, i), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, n, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, n, i);
    let { observer: s } = this.view;
    s.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = j.chrome || j.ios ? { node: s.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* Composition */
    );
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof Tn && o.widget instanceof Eh && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(e, n, i) {
    let s = i ? i.range.addToSet(e.slice()) : e, r = this.childCursor(n);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: c, fromB: h, toB: f } = l, u, d, p, w;
      if (i && i.range.fromB < f && i.range.toB > h) {
        let v = Wi.build(this.view.state.doc, h, i.range.fromB, this.decorations, this.dynamicDecorationMap), T = Wi.build(this.view.state.doc, i.range.toB, f, this.decorations, this.dynamicDecorationMap);
        d = v.breakAtStart, p = v.openStart, w = T.openEnd;
        let B = this.compositionView(i);
        T.breakAtStart ? B.breakAfter = 1 : T.content.length && B.merge(B.length, B.length, T.content[0], !1, T.openStart, 0) && (B.breakAfter = T.content[0].breakAfter, T.content.shift()), v.content.length && B.merge(0, 0, v.content[v.content.length - 1], !0, 0, v.openEnd) && v.content.pop(), u = v.content.concat(B).concat(T.content);
      } else
        ({ content: u, breakAtStart: d, openStart: p, openEnd: w } = Wi.build(this.view.state.doc, h, f, this.decorations, this.dynamicDecorationMap));
      let { i: b, off: m } = r.findPos(c, 1), { i: y, off: E } = r.findPos(a, -1);
      Hd(this, y, E, b, m, u, d, p, w);
    }
    i && this.fixCompositionDOM(i);
  }
  compositionView(e) {
    let n = new Ot(e.text.nodeValue);
    n.flags |= 8;
    for (let { deco: s } of e.marks)
      n = new Vt(s, [n], n.length);
    let i = new Ke();
    return i.append(n, 0), i;
  }
  fixCompositionDOM(e) {
    let n = (r, o) => {
      o.flags |= 8, this.markedForComposition.add(o);
      let l = de.get(r);
      l != o && (l && (l.dom = null), o.setDOM(r));
    }, i = this.childPos(e.range.fromB, 1), s = this.children[i.i];
    n(e.line, s);
    for (let r = e.marks.length - 1; r >= -1; r--)
      i = s.childPos(i.off, 1), s = s.children[i.i], n(r >= 0 ? e.marks[r].node : e.text, s);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, n = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, s = i == this.dom, r = !s && Qs(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(s || n || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.domAtPos(l.anchor), c = l.empty ? a : this.domAtPos(l.head);
    if (j.gecko && l.empty && !this.hasComposition && V1(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = c = new ze(f, 0), o = !0;
    }
    let h = this.view.observer.selectionRange;
    (o || !h.focusNode || !xr(a.node, a.offset, h.anchorNode, h.anchorOffset) || !xr(c.node, c.offset, h.focusNode, h.focusOffset)) && (this.view.observer.ignore(() => {
      j.android && j.chrome && this.dom.contains(h.focusNode) && z1(h.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let f = Ar(this.view.root);
      if (f)
        if (l.empty) {
          if (j.gecko) {
            let u = $1(a.node, a.offset);
            if (u && u != 3) {
              let d = cp(a.node, a.offset, u == 1 ? 1 : -1);
              d && (a = new ze(d, u == 1 ? 0 : d.nodeValue.length));
            }
          }
          f.collapse(a.node, a.offset), l.bidiLevel != null && h.cursorBidiLevel != null && (h.cursorBidiLevel = l.bidiLevel);
        } else if (f.extend) {
          f.collapse(a.node, a.offset);
          try {
            f.extend(c.node, c.offset);
          } catch {
          }
        } else {
          let u = document.createRange();
          l.anchor > l.head && ([a, c] = [c, a]), u.setEnd(c.node, c.offset), u.setStart(a.node, a.offset), f.removeAllRanges(), f.addRange(u);
        }
      r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, c)), this.impreciseAnchor = a.precise ? null : new ze(h.anchorNode, h.anchorOffset), this.impreciseHead = c.precise ? null : new ze(h.focusNode, h.focusOffset);
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, n = e.state.selection.main, i = Ar(e.root), { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !n.empty || !n.assoc || !i.modify)
      return;
    let o = Ke.find(this, n.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (n.head == l || n.head == l + o.length)
      return;
    let a = this.coordsAt(n.head, -1), c = this.coordsAt(n.head, 1);
    if (!a || !c || a.bottom > c.top)
      return;
    let h = this.domAtPos(n.head + n.assoc);
    i.collapse(h.node, h.offset), i.modify("move", n.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != n.from && i.collapse(s, r);
  }
  nearest(e) {
    for (let n = e; n; ) {
      let i = de.get(n);
      if (i && i.rootView == this)
        return i;
      n = n.parentNode;
    }
    return null;
  }
  posFromDOM(e, n) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, n) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: n, off: i } = this.childCursor().findPos(e, -1);
    for (; n < this.children.length - 1; ) {
      let s = this.children[n];
      if (i < s.length || s instanceof Ke)
        break;
      n++, i = 0;
    }
    return this.children[n].domAtPos(i);
  }
  coordsAt(e, n) {
    for (let i = this.length, s = this.children.length - 1; ; s--) {
      let r = this.children[s], o = i - r.breakAfter - r.length;
      if (e > o || e == o && r.type != Oe.WidgetBefore && r.type != Oe.WidgetAfter && (!s || n == 2 || this.children[s - 1].breakAfter || this.children[s - 1].type == Oe.WidgetBefore && n > -2))
        return r.coordsAt(e - o, n);
      i = o;
    }
  }
  coordsForChar(e) {
    let { i: n, off: i } = this.childPos(e, 1), s = this.children[n];
    if (!(s instanceof Ke))
      return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(i, 1);
      for (; ; l++) {
        if (l == s.children.length)
          return null;
        if ((s = s.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(s instanceof Ot))
      return null;
    let r = Pt(s.text, i);
    if (r == i)
      return null;
    let o = Nn(s.dom, i, r).getClientRects();
    return !o.length || o[0].top >= o[0].bottom ? null : o[0];
  }
  measureVisibleLineHeights(e) {
    let n = [], { from: i, to: s } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == Ve.LTR;
    for (let c = 0, h = 0; h < this.children.length; h++) {
      let f = this.children[h], u = c + f.length;
      if (u > s)
        break;
      if (c >= i) {
        let d = f.dom.getBoundingClientRect();
        if (n.push(d.height), o) {
          let p = f.dom.lastChild, w = p ? os(p) : [];
          if (w.length) {
            let b = w[w.length - 1], m = a ? b.right - d.left : d.right - b.left;
            m > l && (l = m, this.minWidth = r, this.minWidthFrom = c, this.minWidthTo = u);
          }
        }
      }
      c = u + f.breakAfter;
    }
    return n;
  }
  textDirectionAt(e) {
    let { i: n } = this.childPos(e, 1);
    return getComputedStyle(this.children[n].dom).direction == "rtl" ? Ve.RTL : Ve.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof Ke) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), n, i, s;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let r = os(e.firstChild)[0];
      n = e.getBoundingClientRect().height, i = r ? r.width / 27 : 7, s = r ? r.height : n, e.remove();
    }), { lineHeight: n, charWidth: i, textHeight: s };
  }
  childCursor(e = this.length) {
    let n = this.children.length;
    return n && (e -= this.children[--n].length), new Fd(this.children, e, n);
  }
  computeBlockGapDeco() {
    let e = [], n = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let r = s == n.viewports.length ? null : n.viewports[s], o = r ? r.from - 1 : this.length;
      if (o > i) {
        let l = n.lineBlockAt(o).bottom - n.lineBlockAt(i).top;
        e.push(Mt.replace({
          widget: new Eh(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return Mt.set(e);
  }
  updateDeco() {
    let e = this.view.state.facet(as).map((n, i) => (this.dynamicDecorationMap[i] = typeof n == "function") ? n(this.view) : n);
    for (let n = e.length; n < e.length + 3; n++)
      this.dynamicDecorationMap[n] = !1;
    return this.decorations = [
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ];
  }
  scrollIntoView(e) {
    let { range: n } = e, i = this.coordsAt(n.head, n.empty ? n.assoc : n.head > n.anchor ? -1 : 1), s;
    if (!i)
      return;
    !n.empty && (s = this.coordsAt(n.anchor, n.anchor > n.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, s.left),
      top: Math.min(i.top, s.top),
      right: Math.max(i.right, s.right),
      bottom: Math.max(i.bottom, s.bottom)
    });
    let r = sp(this.view), o = {
      left: i.left - r.left,
      top: i.top - r.top,
      right: i.right + r.right,
      bottom: i.bottom + r.bottom
    };
    _1(this.view.scrollDOM, o, n.head < n.anchor ? -1 : 1, e.x, e.y, e.xMargin, e.yMargin, this.view.textDirection == Ve.LTR);
  }
}
function V1(t) {
  return t.node.nodeType == 1 && t.node.firstChild && (t.offset == 0 || t.node.childNodes[t.offset - 1].contentEditable == "false") && (t.offset == t.node.childNodes.length || t.node.childNodes[t.offset].contentEditable == "false");
}
class Eh extends Ha {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get estimatedHeight() {
    return this.height;
  }
}
function ap(t) {
  let e = t.observer.selectionRange, n = e.focusNode && cp(e.focusNode, e.focusOffset, 0);
  if (!n)
    return null;
  let i = de.get(n), s, r;
  if (i instanceof Ot)
    s = i.posAtStart, r = s + i.length;
  else
    e:
      for (let o = 0, l = n; ; ) {
        for (let c = l.previousSibling, h; c; c = c.previousSibling) {
          if (h = de.get(c)) {
            s = r = h.posAtEnd + o;
            break e;
          }
          let f = new Wd([], t.state);
          if (f.readNode(c), f.text.indexOf(Kn) > -1)
            return null;
          o += f.text.length;
        }
        if (l = l.parentNode, !l)
          return null;
        let a = de.get(l);
        if (a) {
          s = r = a.posAtStart + o;
          break;
        }
      }
  return { from: s, to: r, node: n };
}
function W1(t, e) {
  let n = ap(t);
  if (!n)
    return null;
  let { from: i, to: s, node: r } = n, o = e.mapPos(i, -1), l = e.mapPos(s, 1), a = r.nodeValue;
  if (/[\n\r]/.test(a))
    return null;
  if (l - o != a.length) {
    let u = e.mapPos(i, 1), d = e.mapPos(s, -1);
    if (d - u == a.length)
      o = u, l = d;
    else if (t.state.doc.sliceString(l - a.length, l) == a)
      o = l - a.length;
    else if (t.state.doc.sliceString(o, o + a.length) == a)
      l = o + a.length;
    else
      return null;
  }
  let { main: c } = t.state.selection;
  if (t.state.doc.sliceString(o, l) != a || o > c.head || l < c.head)
    return null;
  let h = [], f = new pt(i, s, o, l);
  for (let u = r.parentNode; ; u = u.parentNode) {
    let d = de.get(u);
    if (d instanceof Vt)
      h.push({ node: u, deco: d.mark });
    else {
      if (d instanceof Ke || u.nodeName == "DIV" && u.parentNode == t.contentDOM)
        return { range: f, text: r, marks: h, line: u };
      if (u != t.contentDOM)
        h.push({ node: u, deco: new vs({
          inclusive: !0,
          attributes: M1(u),
          tagName: u.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function cp(t, e, n) {
  if (n <= 0)
    for (let i = t, s = e; ; ) {
      if (i.nodeType == 3)
        return i;
      if (i.nodeType == 1 && s > 0)
        i = i.childNodes[s - 1], s = on(i);
      else
        break;
    }
  if (n >= 0)
    for (let i = t, s = e; ; ) {
      if (i.nodeType == 3)
        return i;
      if (i.nodeType == 1 && s < i.childNodes.length && n >= 0)
        i = i.childNodes[s], s = 0;
      else
        break;
    }
  return null;
}
function $1(t, e) {
  return t.nodeType != 1 ? 0 : (e && t.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < t.childNodes.length && t.childNodes[e].contentEditable == "false" ? 2 : 0);
}
class j1 {
  constructor() {
    this.changes = [];
  }
  compareRange(e, n) {
    _l(e, n, this.changes);
  }
  comparePoint(e, n) {
    _l(e, n, this.changes);
  }
}
function K1(t, e, n) {
  let i = new j1();
  return ye.compare(t, e, n, i), i.changes;
}
function z1(t, e) {
  for (let n = t; n && n != e; n = n.assignedSlot || n.parentNode)
    if (n.nodeType == 1 && n.contentEditable == "false")
      return !0;
  return !1;
}
function q1(t, e, n = 1) {
  let i = t.charCategorizer(e), s = t.doc.lineAt(e), r = e - s.from;
  if (s.length == 0)
    return $.cursor(e);
  r == 0 ? n = 1 : r == s.length && (n = -1);
  let o = r, l = r;
  n < 0 ? o = Pt(s.text, r, !1) : l = Pt(s.text, r);
  let a = i(s.text.slice(o, l));
  for (; o > 0; ) {
    let c = Pt(s.text, o, !1);
    if (i(s.text.slice(c, o)) != a)
      break;
    o = c;
  }
  for (; l < s.length; ) {
    let c = Pt(s.text, l);
    if (i(s.text.slice(l, c)) != a)
      break;
    l = c;
  }
  return $.range(o + s.from, l + s.from);
}
function G1(t, e) {
  return e.left > t ? e.left - t : Math.max(0, t - e.right);
}
function J1(t, e) {
  return e.top > t ? e.top - t : Math.max(0, t - e.bottom);
}
function Co(t, e) {
  return t.top < e.bottom - 1 && t.bottom > e.top + 1;
}
function Ch(t, e) {
  return e < t.top ? { top: e, left: t.left, right: t.right, bottom: t.bottom } : t;
}
function Th(t, e) {
  return e > t.bottom ? { top: t.top, left: t.left, right: t.right, bottom: e } : t;
}
function Al(t, e, n) {
  let i, s, r, o, l = !1, a, c, h, f;
  for (let p = t.firstChild; p; p = p.nextSibling) {
    let w = os(p);
    for (let b = 0; b < w.length; b++) {
      let m = w[b];
      s && Co(s, m) && (m = Ch(Th(m, s.bottom), s.top));
      let y = G1(e, m), E = J1(n, m);
      if (y == 0 && E == 0)
        return p.nodeType == 3 ? Ah(p, e, n) : Al(p, e, n);
      if (!i || o > E || o == E && r > y) {
        i = p, s = m, r = y, o = E;
        let v = E ? n < m.top ? -1 : 1 : y ? e < m.left ? -1 : 1 : 0;
        l = !v || (v > 0 ? b < w.length - 1 : b > 0);
      }
      y == 0 ? n > m.bottom && (!h || h.bottom < m.bottom) ? (a = p, h = m) : n < m.top && (!f || f.top > m.top) && (c = p, f = m) : h && Co(h, m) ? h = Th(h, m.bottom) : f && Co(f, m) && (f = Ch(f, m.top));
    }
  }
  if (h && h.bottom >= n ? (i = a, s = h) : f && f.top <= n && (i = c, s = f), !i)
    return { node: t, offset: 0 };
  let u = Math.max(s.left, Math.min(s.right, e));
  if (i.nodeType == 3)
    return Ah(i, u, n);
  if (l && i.contentEditable != "false")
    return Al(i, u, n);
  let d = Array.prototype.indexOf.call(t.childNodes, i) + (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: t, offset: d };
}
function Ah(t, e, n) {
  let i = t.nodeValue.length, s = -1, r = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = Nn(t, l, l + 1).getClientRects();
    for (let c = 0; c < a.length; c++) {
      let h = a[c];
      if (h.top == h.bottom)
        continue;
      o || (o = e - h.left);
      let f = (h.top > n ? h.top - n : n - h.bottom) - 1;
      if (h.left - 1 <= e && h.right + 1 >= e && f < r) {
        let u = e >= (h.left + h.right) / 2, d = u;
        if ((j.chrome || j.gecko) && Nn(t, l).getBoundingClientRect().left == h.right && (d = !u), f <= 0)
          return { node: t, offset: l + (d ? 1 : 0) };
        s = l + (d ? 1 : 0), r = f;
      }
    }
  }
  return { node: t, offset: s > -1 ? s : o > 0 ? t.nodeValue.length : 0 };
}
function hp(t, e, n, i = -1) {
  var s, r;
  let o = t.contentDOM.getBoundingClientRect(), l = o.top + t.viewState.paddingTop, a, { docHeight: c } = t.viewState, { x: h, y: f } = e, u = f - l;
  if (u < 0)
    return 0;
  if (u > c)
    return t.state.doc.length;
  for (let v = t.viewState.heightOracle.textHeight / 2, T = !1; a = t.elementAtHeight(u), a.type != Oe.Text; )
    for (; u = i > 0 ? a.bottom + v : a.top - v, !(u >= 0 && u <= c); ) {
      if (T)
        return n ? null : 0;
      T = !0, i = -i;
    }
  f = l + u;
  let d = a.from;
  if (d < t.viewport.from)
    return t.viewport.from == 0 ? 0 : n ? null : xh(t, o, a, h, f);
  if (d > t.viewport.to)
    return t.viewport.to == t.state.doc.length ? t.state.doc.length : n ? null : xh(t, o, a, h, f);
  let p = t.dom.ownerDocument, w = t.root.elementFromPoint ? t.root : p, b = w.elementFromPoint(h, f);
  b && !t.contentDOM.contains(b) && (b = null), b || (h = Math.max(o.left + 1, Math.min(o.right - 1, h)), b = w.elementFromPoint(h, f), b && !t.contentDOM.contains(b) && (b = null));
  let m, y = -1;
  if (b && ((s = t.docView.nearest(b)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let v = p.caretPositionFromPoint(h, f);
      v && ({ offsetNode: m, offset: y } = v);
    } else if (p.caretRangeFromPoint) {
      let v = p.caretRangeFromPoint(h, f);
      v && ({ startContainer: m, startOffset: y } = v, (!t.contentDOM.contains(m) || j.safari && X1(m, y, h) || j.chrome && Y1(m, y, h)) && (m = void 0));
    }
  }
  if (!m || !t.docView.dom.contains(m)) {
    let v = Ke.find(t.docView, d);
    if (!v)
      return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: m, offset: y } = Al(v.dom, h, f));
  }
  let E = t.docView.nearest(m);
  if (!E)
    return null;
  if (E.isWidget && ((r = E.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let v = E.dom.getBoundingClientRect();
    return e.y < v.top || e.y <= v.bottom && e.x <= (v.left + v.right) / 2 ? E.posAtStart : E.posAtEnd;
  } else
    return E.localPosFromDOM(m, y) + E.posAtStart;
}
function xh(t, e, n, i, s) {
  let r = Math.round((i - e.left) * t.defaultCharacterWidth);
  if (t.lineWrapping && n.height > t.defaultLineHeight * 1.5) {
    let l = t.viewState.heightOracle.textHeight, a = Math.floor((s - n.top - (t.defaultLineHeight - l) * 0.5) / l);
    r += a * t.viewState.heightOracle.lineLength;
  }
  let o = t.state.sliceDoc(n.from, n.to);
  return n.from + b1(o, r, t.state.tabSize);
}
function X1(t, e, n) {
  let i;
  if (t.nodeType != 3 || e != (i = t.nodeValue.length))
    return !1;
  for (let s = t.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR")
      return !1;
  return Nn(t, i - 1, i).getBoundingClientRect().left > n;
}
function Y1(t, e, n) {
  if (e != 0)
    return !1;
  for (let s = t; ; ) {
    let r = s.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != s)
      return !1;
    if (r.classList.contains("cm-line"))
      break;
    s = r;
  }
  let i = t.nodeType == 1 ? t.getBoundingClientRect() : Nn(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect();
  return n - i.left > 5;
}
function Z1(t, e) {
  let n = t.lineBlockAt(e);
  if (Array.isArray(n.type)) {
    for (let i of n.type)
      if (i.to > e || i.to == e && (i.to == n.to || i.type == Oe.Text))
        return i;
  }
  return n;
}
function Q1(t, e, n, i) {
  let s = Z1(t, e.head), r = !i || s.type != Oe.Text || !(t.lineWrapping || s.widgetLineBreaks) ? null : t.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = t.dom.getBoundingClientRect(), l = t.textDirectionAt(s.from), a = t.posAtCoords({
      x: n == (l == Ve.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return $.cursor(a, n ? -1 : 1);
  }
  return $.cursor(n ? s.to : s.from, n ? -1 : 1);
}
function kh(t, e, n, i) {
  let s = t.state.doc.lineAt(e.head), r = t.bidiSpans(s), o = t.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let c = H1(s, r, o, l, n), h = lp;
    if (!c) {
      if (s.number == (n ? t.state.doc.lines : 1))
        return l;
      h = `
`, s = t.state.doc.line(s.number + (n ? 1 : -1)), r = t.bidiSpans(s), c = $.cursor(n ? s.from : s.to);
    }
    if (a) {
      if (!a(h))
        return l;
    } else {
      if (!i)
        return c;
      a = i(h);
    }
    l = c;
  }
}
function ev(t, e, n) {
  let i = t.state.charCategorizer(e), s = i(n);
  return (r) => {
    let o = i(r);
    return s == It.Space && (s = o), s == o;
  };
}
function tv(t, e, n, i) {
  let s = e.head, r = n ? 1 : -1;
  if (s == (n ? t.state.doc.length : 0))
    return $.cursor(s, e.assoc);
  let o = e.goalColumn, l, a = t.contentDOM.getBoundingClientRect(), c = t.coordsAtPos(s), h = t.documentTop;
  if (c)
    o == null && (o = c.left - a.left), l = r < 0 ? c.top : c.bottom;
  else {
    let d = t.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, t.defaultCharacterWidth * (s - d.from))), l = (r < 0 ? d.top : d.bottom) + h;
  }
  let f = a.left + o, u = i ?? t.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r, w = hp(t, { x: f, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? w < s : w > s))
      return $.cursor(w, e.assoc, void 0, o);
  }
}
function er(t, e, n) {
  for (; ; ) {
    let i = 0;
    for (let s of t)
      s.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = i || n || (e - r < o - e ? -1 : 1);
          e = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function To(t, e, n) {
  let i = er(t.state.facet(Wa).map((s) => s(t)), n.from, e.head > n.from ? -1 : 1);
  return i == n.from ? n : $.cursor(i, i < n.from ? 1 : -1);
}
class nv {
  constructor(e) {
    this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.chromeScrollHack = -1, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null;
    let n = (i, s) => {
      this.ignoreDuringComposition(s) || s.type == "keydown" && this.keydown(e, s) || (this.mustFlushObserver(s) && e.observer.forceFlush(), this.runCustomHandlers(s.type, e, s) ? s.preventDefault() : i(e, s));
    };
    for (let i in Te) {
      let s = Te[i];
      e.contentDOM.addEventListener(i, (r) => {
        Oh(e, r) && n(s, r);
      }, xl[i]), this.registeredEvents.push(i);
    }
    e.scrollDOM.addEventListener("mousedown", (i) => {
      if (i.target == e.scrollDOM && i.clientY > e.contentDOM.getBoundingClientRect().bottom && (n(Te.mousedown, i), !i.defaultPrevented && i.button == 2)) {
        let s = e.contentDOM.style.minHeight;
        e.contentDOM.style.minHeight = "100%", setTimeout(() => e.contentDOM.style.minHeight = s, 200);
      }
    }), e.scrollDOM.addEventListener("drop", (i) => {
      i.target == e.scrollDOM && i.clientY > e.contentDOM.getBoundingClientRect().bottom && n(Te.drop, i);
    }), j.chrome && j.chrome_version == 102 && e.scrollDOM.addEventListener("wheel", () => {
      this.chromeScrollHack < 0 ? e.contentDOM.style.pointerEvents = "none" : window.clearTimeout(this.chromeScrollHack), this.chromeScrollHack = setTimeout(() => {
        this.chromeScrollHack = -1, e.contentDOM.style.pointerEvents = "";
      }, 100);
    }, { passive: !0 }), this.notifiedFocused = e.hasFocus, j.safari && e.contentDOM.addEventListener("input", () => null);
  }
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  ensureHandlers(e, n) {
    var i;
    let s;
    this.customHandlers = [];
    for (let r of n)
      if (s = (i = r.update(e).spec) === null || i === void 0 ? void 0 : i.domEventHandlers) {
        this.customHandlers.push({ plugin: r.value, handlers: s });
        for (let o in s)
          this.registeredEvents.indexOf(o) < 0 && o != "scroll" && (this.registeredEvents.push(o), e.contentDOM.addEventListener(o, (l) => {
            Oh(e, l) && this.runCustomHandlers(o, e, l) && l.preventDefault();
          }));
      }
  }
  runCustomHandlers(e, n, i) {
    for (let s of this.customHandlers) {
      let r = s.handlers[e];
      if (r)
        try {
          if (r.call(s.plugin, i, n) || i.defaultPrevented)
            return !0;
        } catch (o) {
          An(n.state, o);
        }
    }
    return !1;
  }
  runScrollHandlers(e, n) {
    this.lastScrollTop = e.scrollDOM.scrollTop, this.lastScrollLeft = e.scrollDOM.scrollLeft;
    for (let i of this.customHandlers) {
      let s = i.handlers.scroll;
      if (s)
        try {
          s.call(i.plugin, n, e);
        } catch (r) {
          An(e.state, r);
        }
    }
  }
  keydown(e, n) {
    if (this.lastKeyCode = n.keyCode, this.lastKeyTime = Date.now(), n.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
      return !0;
    if (n.keyCode != 27 && sv.indexOf(n.keyCode) < 0 && (e.inputState.lastEscPress = 0), j.android && j.chrome && !n.synthetic && (n.keyCode == 13 || n.keyCode == 8))
      return e.observer.delayAndroidKey(n.key, n.keyCode), !0;
    let i;
    return j.ios && !n.synthetic && !n.altKey && !n.metaKey && ((i = fp.find((s) => s.keyCode == n.keyCode)) && !n.ctrlKey || iv.indexOf(n.key) > -1 && n.ctrlKey && !n.shiftKey) ? (this.pendingIOSKey = i || n, setTimeout(() => this.flushIOSKey(e), 250), !0) : !1;
  }
  flushIOSKey(e) {
    let n = this.pendingIOSKey;
    return n ? (this.pendingIOSKey = void 0, ti(e.contentDOM, n.key, n.keyCode)) : !1;
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : j.safari && !j.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  mustFlushObserver(e) {
    return e.type == "keydown" && e.keyCode != 229;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.mouseSelection && this.mouseSelection.update(e), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
const fp = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], iv = "dthko", sv = [16, 17, 18, 20, 91, 92, 224, 225], Hs = 6;
function Vs(t) {
  return Math.max(0, t) * 0.7 + 8;
}
function rv(t, e) {
  return Math.max(Math.abs(t.clientX - e.clientX), Math.abs(t.clientY - e.clientY));
}
class ov {
  constructor(e, n, i, s) {
    this.view = e, this.startEvent = n, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = n, this.scrollParent = E1(e.contentDOM), this.atoms = e.state.facet(Wa).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = n.shiftKey, this.multiple = e.state.facet(fe.allowMultipleSelections) && lv(e, n), this.dragging = cv(e, n) && gp(n) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && (e.preventDefault(), this.select(e));
  }
  move(e) {
    var n;
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && rv(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let i = 0, s = 0, r = ((n = this.scrollParent) === null || n === void 0 ? void 0 : n.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, o = sp(this.view);
    e.clientX - o.left <= r.left + Hs ? i = -Vs(r.left - e.clientX) : e.clientX + o.right >= r.right - Hs && (i = Vs(e.clientX - r.right)), e.clientY - o.top <= r.top + Hs ? s = -Vs(r.top - e.clientY) : e.clientY + o.bottom >= r.bottom - Hs && (s = Vs(e.clientY - r.bottom)), this.setScrollSpeed(i, s);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null;
  }
  setScrollSpeed(e, n) {
    this.scrollSpeed = { x: e, y: n }, e || n ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let n = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let s = e.ranges[i], r = null;
      if (s.empty) {
        let o = er(this.atoms, s.from, 0);
        o != s.from && (r = $.cursor(o, -1));
      } else {
        let o = er(this.atoms, s.from, -1), l = er(this.atoms, s.to, 1);
        (o != s.from || l != s.to) && (r = $.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (n || (n = e.ranges.slice()), n[i] = r);
    }
    return n ? $.create(n, e.mainIndex) : e;
  }
  select(e) {
    let { view: n } = this, i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(n.state.selection) || i.main.assoc != n.state.selection.main.assoc && this.dragging === !1) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.docChanged && this.dragging && (this.dragging = this.dragging.map(e.changes)), this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function lv(t, e) {
  let n = t.state.facet(Jd);
  return n.length ? n[0](e) : j.mac ? e.metaKey : e.ctrlKey;
}
function av(t, e) {
  let n = t.state.facet(Xd);
  return n.length ? n[0](e) : j.mac ? !e.altKey : !e.ctrlKey;
}
function cv(t, e) {
  let { main: n } = t.state.selection;
  if (n.empty)
    return !1;
  let i = Ar(t.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Oh(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target, i; n != t.contentDOM; n = n.parentNode)
    if (!n || n.nodeType == 11 || (i = de.get(n)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
const Te = /* @__PURE__ */ Object.create(null), xl = /* @__PURE__ */ Object.create(null), up = j.ie && j.ie_version < 15 || j.ios && j.webkit_version < 604;
function hv(t) {
  let e = t.dom.parentNode;
  if (!e)
    return;
  let n = e.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus(), setTimeout(() => {
    t.focus(), n.remove(), dp(t, n.value);
  }, 50);
}
function dp(t, e) {
  let { state: n } = t, i, s = 1, r = n.toText(e), o = r.lines == n.selection.ranges.length;
  if (kl != null && n.selection.ranges.every((a) => a.empty) && kl == r.toString()) {
    let a = -1;
    i = n.changeByRange((c) => {
      let h = n.doc.lineAt(c.from);
      if (h.from == a)
        return { range: c };
      a = h.from;
      let f = n.toText((o ? r.line(s++).text : e) + n.lineBreak);
      return {
        changes: { from: h.from, insert: f },
        range: $.cursor(c.from + f.length)
      };
    });
  } else
    o ? i = n.changeByRange((a) => {
      let c = r.line(s++);
      return {
        changes: { from: a.from, to: a.to, insert: c.text },
        range: $.cursor(a.from + c.length)
      };
    }) : i = n.replaceSelection(r);
  t.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Te.keydown = (t, e) => {
  t.inputState.setSelectionOrigin("select"), e.keyCode == 27 && (t.inputState.lastEscPress = Date.now());
};
Te.touchstart = (t, e) => {
  t.inputState.lastTouchTime = Date.now(), t.inputState.setSelectionOrigin("select.pointer");
};
Te.touchmove = (t) => {
  t.inputState.setSelectionOrigin("select.pointer");
};
xl.touchstart = xl.touchmove = { passive: !0 };
Te.mousedown = (t, e) => {
  if (t.observer.flush(), t.inputState.lastTouchTime > Date.now() - 2e3)
    return;
  let n = null;
  for (let i of t.state.facet(Yd))
    if (n = i(t, e), n)
      break;
  if (!n && e.button == 0 && (n = dv(t, e)), n) {
    let i = !t.hasFocus;
    t.inputState.startMouseSelection(new ov(t, e, n, i)), i && t.observer.ignore(() => Id(t.contentDOM)), t.inputState.mouseSelection && t.inputState.mouseSelection.start(e);
  }
};
function Mh(t, e, n, i) {
  if (i == 1)
    return $.cursor(e, n);
  if (i == 2)
    return q1(t.state, e, n);
  {
    let s = Ke.find(t.docView, e), r = t.state.doc.lineAt(s ? s.posAtEnd : e), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
    return l < t.state.doc.length && l == r.to && l++, $.range(o, l);
  }
}
let pp = (t, e) => t >= e.top && t <= e.bottom, Rh = (t, e, n) => pp(e, n) && t >= n.left && t <= n.right;
function fv(t, e, n, i) {
  let s = Ke.find(t.docView, e);
  if (!s)
    return 1;
  let r = e - s.posAtStart;
  if (r == 0)
    return 1;
  if (r == s.length)
    return -1;
  let o = s.coordsAt(r, -1);
  if (o && Rh(n, i, o))
    return -1;
  let l = s.coordsAt(r, 1);
  return l && Rh(n, i, l) ? 1 : o && pp(i, o) ? -1 : 1;
}
function Nh(t, e) {
  let n = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: n, bias: fv(t, n, e.clientX, e.clientY) };
}
const uv = j.ie && j.ie_version <= 11;
let Dh = null, Lh = 0, Ph = 0;
function gp(t) {
  if (!uv)
    return t.detail;
  let e = Dh, n = Ph;
  return Dh = t, Ph = Date.now(), Lh = !e || n > Date.now() - 400 && Math.abs(e.clientX - t.clientX) < 2 && Math.abs(e.clientY - t.clientY) < 2 ? (Lh + 1) % 3 : 1;
}
function dv(t, e) {
  let n = Nh(t, e), i = gp(e), s = t.state.selection;
  return {
    update(r) {
      r.docChanged && (n.pos = r.changes.mapPos(n.pos), s = s.map(r.changes));
    },
    get(r, o, l) {
      let a = Nh(t, r), c, h = Mh(t, a.pos, a.bias, i);
      if (n.pos != a.pos && !o) {
        let f = Mh(t, n.pos, n.bias, i), u = Math.min(f.from, h.from), d = Math.max(f.to, h.to);
        h = u < h.from ? $.range(u, d) : $.range(d, u);
      }
      return o ? s.replaceRange(s.main.extend(h.from, h.to)) : l && i == 1 && s.ranges.length > 1 && (c = pv(s, a.pos)) ? c : l ? s.addRange(h) : $.create([h]);
    }
  };
}
function pv(t, e) {
  for (let n = 0; n < t.ranges.length; n++) {
    let { from: i, to: s } = t.ranges[n];
    if (i <= e && s >= e)
      return $.create(t.ranges.slice(0, n).concat(t.ranges.slice(n + 1)), t.mainIndex == n ? 0 : t.mainIndex - (t.mainIndex > n ? 1 : 0));
  }
  return null;
}
Te.dragstart = (t, e) => {
  let { selection: { main: n } } = t.state, { mouseSelection: i } = t.inputState;
  i && (i.dragging = n), e.dataTransfer && (e.dataTransfer.setData("Text", t.state.sliceDoc(n.from, n.to)), e.dataTransfer.effectAllowed = "copyMove");
};
function Ih(t, e, n, i) {
  if (!n)
    return;
  let s = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  e.preventDefault();
  let { mouseSelection: r } = t.inputState, o = i && r && r.dragging && av(t, e) ? { from: r.dragging.from, to: r.dragging.to } : null, l = { from: s, insert: n }, a = t.state.changes(o ? [o, l] : l);
  t.focus(), t.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  });
}
Te.drop = (t, e) => {
  if (!e.dataTransfer)
    return;
  if (t.state.readOnly)
    return e.preventDefault();
  let n = e.dataTransfer.files;
  if (n && n.length) {
    e.preventDefault();
    let i = Array(n.length), s = 0, r = () => {
      ++s == n.length && Ih(t, e, i.filter((o) => o != null).join(t.state.lineBreak), !1);
    };
    for (let o = 0; o < n.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(n[o]);
    }
  } else
    Ih(t, e, e.dataTransfer.getData("Text"), !0);
};
Te.paste = (t, e) => {
  if (t.state.readOnly)
    return e.preventDefault();
  t.observer.flush();
  let n = up ? null : e.clipboardData;
  n ? (dp(t, n.getData("text/plain") || n.getData("text/uri-text")), e.preventDefault()) : hv(t);
};
function gv(t, e) {
  let n = t.dom.parentNode;
  if (!n)
    return;
  let i = n.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), t.focus();
  }, 50);
}
function mv(t) {
  let e = [], n = [], i = !1;
  for (let s of t.selection.ranges)
    s.empty || (e.push(t.sliceDoc(s.from, s.to)), n.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of t.selection.ranges) {
      let o = t.doc.lineAt(r);
      o.number > s && (e.push(o.text), n.push({ from: o.from, to: Math.min(t.doc.length, o.to + 1) })), s = o.number;
    }
    i = !0;
  }
  return { text: e.join(t.lineBreak), ranges: n, linewise: i };
}
let kl = null;
Te.copy = Te.cut = (t, e) => {
  let { text: n, ranges: i, linewise: s } = mv(t.state);
  if (!n && !s)
    return;
  kl = s ? n : null;
  let r = up ? null : e.clipboardData;
  r ? (e.preventDefault(), r.clearData(), r.setData("text/plain", n)) : gv(t, n), e.type == "cut" && !t.state.readOnly && t.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
};
const mp = /* @__PURE__ */ wi.define();
function yp(t, e) {
  let n = [];
  for (let i of t.facet(ep)) {
    let s = i(t, e);
    s && n.push(s);
  }
  return n ? t.update({ effects: n, annotations: mp.of(!0) }) : null;
}
function bp(t) {
  setTimeout(() => {
    let e = t.hasFocus;
    if (e != t.inputState.notifiedFocused) {
      let n = yp(t.state, e);
      n ? t.dispatch(n) : t.update([]);
    }
  }, 10);
}
Te.focus = (t) => {
  t.inputState.lastFocusTime = Date.now(), !t.scrollDOM.scrollTop && (t.inputState.lastScrollTop || t.inputState.lastScrollLeft) && (t.scrollDOM.scrollTop = t.inputState.lastScrollTop, t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft), bp(t);
};
Te.blur = (t) => {
  t.observer.clearSelectionRange(), bp(t);
};
Te.compositionstart = Te.compositionupdate = (t) => {
  t.inputState.compositionFirstChange == null && (t.inputState.compositionFirstChange = !0), t.inputState.composing < 0 && (t.inputState.composing = 0);
};
Te.compositionend = (t) => {
  t.inputState.composing = -1, t.inputState.compositionEndedAt = Date.now(), t.inputState.compositionPendingKey = !0, t.inputState.compositionPendingChange = t.observer.pendingRecords().length > 0, t.inputState.compositionFirstChange = null, j.chrome && j.android ? t.observer.flushSoon() : t.inputState.compositionPendingChange ? Promise.resolve().then(() => t.observer.flush()) : setTimeout(() => {
    t.inputState.composing < 0 && t.docView.hasComposition && t.update([]);
  }, 50);
};
Te.contextmenu = (t) => {
  t.inputState.lastContextMenu = Date.now();
};
Te.beforeinput = (t, e) => {
  var n;
  let i;
  if (j.chrome && j.android && (i = fp.find((s) => s.inputType == e.inputType)) && (t.observer.delayAndroidKey(i.key, i.keyCode), i.key == "Backspace" || i.key == "Delete")) {
    let s = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var r;
      (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > s + 10 && t.hasFocus && (t.contentDOM.blur(), t.focus());
    }, 100);
  }
};
const Bh = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class yv {
  constructor(e) {
    this.lineWrapping = e, this.doc = ae.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1;
  }
  heightForGap(e, n) {
    let i = this.doc.lineAt(n).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((n - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Bh.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let n = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (n = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return n;
  }
  refresh(e, n, i, s, r, o) {
    let l = Bh.indexOf(e) > -1, a = Math.round(n) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = n, this.charWidth = i, this.textHeight = s, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let c = 0; c < o.length; c++) {
        let h = o[c];
        h < 0 ? c++ : this.heightSamples[Math.floor(h * 10)] = !0;
      }
    }
    return a;
  }
}
class bv {
  constructor(e, n) {
    this.from = e, this.heights = n, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class xt {
  /**
  @internal
  */
  constructor(e, n, i, s, r) {
    this.from = e, this.length = n, this.top = i, this.height = s, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? Oe.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof ln ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let n = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new xt(this.from, this.length + e.length, this.top, this.height + e.height, n);
  }
}
var pe = /* @__PURE__ */ function(t) {
  return t[t.ByPos = 0] = "ByPos", t[t.ByHeight = 1] = "ByHeight", t[t.ByPosNoHeight = 2] = "ByPosNoHeight", t;
}(pe || (pe = {}));
const tr = 1e-3;
class Ge {
  constructor(e, n, i = 2) {
    this.length = e, this.height = n, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e, n) {
    this.height != n && (Math.abs(this.height - n) > tr && (e.heightChanged = !0), this.height = n);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, n, i) {
    return Ge.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, n) {
    n.push(this);
  }
  decomposeRight(e, n) {
    n.push(this);
  }
  applyChanges(e, n, i, s) {
    let r = this, o = i.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: c, fromB: h, toB: f } = s[l], u = r.lineAt(a, pe.ByPosNoHeight, i.setDoc(n), 0, 0), d = u.to >= c ? u : r.lineAt(c, pe.ByPosNoHeight, i, 0, 0);
      for (f += d.to - c, c = d.to; l > 0 && u.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, h = s[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, pe.ByPosNoHeight, i, 0, 0));
      h += u.from - a, a = u.from;
      let p = $a.build(i.setDoc(o), e, h, f);
      r = r.replace(a, c, p);
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new nt(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let n = 0, i = e.length, s = 0, r = 0;
    for (; ; )
      if (n == i)
        if (s > r * 2) {
          let l = e[n - 1];
          l.break ? e.splice(--n, 1, l.left, null, l.right) : e.splice(--n, 1, l.left, l.right), i += 1 + l.break, s -= l.size;
        } else if (r > s * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else
          break;
      else if (s < r) {
        let l = e[n++];
        l && (s += l.size);
      } else {
        let l = e[--i];
        l && (r += l.size);
      }
    let o = 0;
    return e[n - 1] == null ? (o = 1, n--) : e[n] == null && (o = 1, i++), new vv(Ge.of(e.slice(0, n)), o, Ge.of(e.slice(i)));
  }
}
Ge.prototype.size = 1;
class vp extends Ge {
  constructor(e, n, i) {
    super(e, n), this.deco = i;
  }
  blockAt(e, n, i, s) {
    return new xt(s, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, n, i, s, r) {
    return this.blockAt(0, i, s, r);
  }
  forEachLine(e, n, i, s, r, o) {
    e <= r + this.length && n >= r && o(this.blockAt(0, i, s, r));
  }
  updateHeight(e, n = 0, i = !1, s) {
    return s && s.from <= n && s.more && this.setHeight(e, s.heights[s.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class nt extends vp {
  constructor(e, n) {
    super(e, n, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, n, i, s) {
    return new xt(s, this.length, i, this.height, this.breaks);
  }
  replace(e, n, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof nt || s instanceof De && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof De ? s = new nt(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : Ge.of(i);
  }
  updateHeight(e, n = 0, i = !1, s) {
    return s && s.from <= n && s.more ? this.setHeight(e, s.heights[s.index++]) : (i || this.outdated) && this.setHeight(e, Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class De extends Ge {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, n) {
    let i = e.doc.lineAt(n).number, s = e.doc.lineAt(n + this.length).number, r = s - i + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(e, n, i, s) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(n, s);
    if (n.lineWrapping) {
      let c = s + Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length), h = n.doc.lineAt(c), f = l + h.length * a, u = Math.max(i, e - f / 2);
      return new xt(h.from, h.length, u, f, 0);
    } else {
      let c = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))), { from: h, length: f } = n.doc.line(r + c);
      return new xt(h, f, i + l * c, l, 0);
    }
  }
  lineAt(e, n, i, s, r) {
    if (n == pe.ByHeight)
      return this.blockAt(e, i, s, r);
    if (n == pe.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new xt(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), c = i.doc.lineAt(e), h = l + c.length * a, f = c.number - o, u = s + l * f + a * (c.from - r - f);
    return new xt(c.from, c.length, Math.max(s, Math.min(u, s + this.height - h)), h, 0);
  }
  forEachLine(e, n, i, s, r, o) {
    e = Math.max(e, r), n = Math.min(n, r + this.length);
    let { firstLine: l, perLine: a, perChar: c } = this.heightMetrics(i, r);
    for (let h = e, f = s; h <= n; ) {
      let u = i.doc.lineAt(h);
      if (h == e) {
        let p = u.number - l;
        f += a * p + c * (e - r - p);
      }
      let d = a + c * u.length;
      o(new xt(u.from, u.length, f, d, 0)), f += d, h = u.to + 1;
    }
  }
  replace(e, n, i) {
    let s = this.length - n;
    if (s > 0) {
      let r = i[i.length - 1];
      r instanceof De ? i[i.length - 1] = new De(r.length + s) : i.push(null, new De(s - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof De ? i[0] = new De(e + r.length) : i.unshift(new De(e - 1), null);
    }
    return Ge.of(i);
  }
  decomposeLeft(e, n) {
    n.push(new De(e - 1), null);
  }
  decomposeRight(e, n) {
    n.push(null, new De(this.length - e - 1));
  }
  updateHeight(e, n = 0, i = !1, s) {
    let r = n + this.length;
    if (s && s.from <= n + this.length && s.more) {
      let o = [], l = Math.max(n, s.from), a = -1;
      for (s.from > n && o.push(new De(s.from - n - 1).updateHeight(e, n)); l <= r && s.more; ) {
        let h = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++];
        a == -1 ? a = f : Math.abs(f - a) >= tr && (a = -2);
        let u = new nt(h, f);
        u.outdated = !1, o.push(u), l += h + 1;
      }
      l <= r && o.push(null, new De(r - l).updateHeight(e, l));
      let c = Ge.of(o);
      return (a < 0 || Math.abs(c.height - this.height) >= tr || Math.abs(a - this.heightMetrics(e, n).perLine) >= tr) && (e.heightChanged = !0), c;
    } else
      (i || this.outdated) && (this.setHeight(e, e.heightForGap(n, n + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class vv extends Ge {
  constructor(e, n, i) {
    super(e.length + n + i.length, e.height + i.height, n | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, n, i, s) {
    let r = i + this.left.height;
    return e < r ? this.left.blockAt(e, n, i, s) : this.right.blockAt(e, n, r, s + this.left.length + this.break);
  }
  lineAt(e, n, i, s, r) {
    let o = s + this.left.height, l = r + this.left.length + this.break, a = n == pe.ByHeight ? e < o : e < l, c = a ? this.left.lineAt(e, n, i, s, r) : this.right.lineAt(e, n, i, o, l);
    if (this.break || (a ? c.to < l : c.from > l))
      return c;
    let h = n == pe.ByPosNoHeight ? pe.ByPosNoHeight : pe.ByPos;
    return a ? c.join(this.right.lineAt(l, h, i, o, l)) : this.left.lineAt(l, h, i, s, r).join(c);
  }
  forEachLine(e, n, i, s, r, o) {
    let l = s + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, n, i, s, r, o), n >= a && this.right.forEachLine(e, n, i, l, a, o);
    else {
      let c = this.lineAt(a, pe.ByPos, i, s, r);
      e < c.from && this.left.forEachLine(e, c.from - 1, i, s, r, o), c.to >= e && c.from <= n && o(c), n > c.to && this.right.forEachLine(c.to + 1, n, i, l, a, o);
    }
  }
  replace(e, n, i) {
    let s = this.left.length + this.break;
    if (n < s)
      return this.balanced(this.left.replace(e, n, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, n - s, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (e > 0 && Uh(r, o - 1), n < this.length) {
      let l = r.length;
      this.decomposeRight(n, r), Uh(r, l);
    }
    return Ge.of(r);
  }
  decomposeLeft(e, n) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, n);
    n.push(this.left), this.break && (i++, e >= i && n.push(null)), e > i && this.right.decomposeLeft(e - i, n);
  }
  decomposeRight(e, n) {
    let i = this.left.length, s = i + this.break;
    if (e >= s)
      return this.right.decomposeRight(e - s, n);
    e < i && this.left.decomposeRight(e, n), this.break && e < s && n.push(null), n.push(this.right);
  }
  balanced(e, n) {
    return e.size > 2 * n.size || n.size > 2 * e.size ? Ge.of(this.break ? [e, null, n] : [e, n]) : (this.left = e, this.right = n, this.height = e.height + n.height, this.outdated = e.outdated || n.outdated, this.size = e.size + n.size, this.length = e.length + this.break + n.length, this);
  }
  updateHeight(e, n = 0, i = !1, s) {
    let { left: r, right: o } = this, l = n + r.length + this.break, a = null;
    return s && s.from <= n + r.length && s.more ? a = r = r.updateHeight(e, n, i, s) : r.updateHeight(e, n, i), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(e, l, i, s) : o.updateHeight(e, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Uh(t, e) {
  let n, i;
  t[e] == null && (n = t[e - 1]) instanceof De && (i = t[e + 1]) instanceof De && t.splice(e - 1, 3, new De(n.length + 1 + i.length));
}
const wv = 5;
class $a {
  constructor(e, n) {
    this.pos = e, this.oracle = n, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, n) {
    if (this.lineStart > -1) {
      let i = Math.min(n, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof nt ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new nt(i - this.pos, -1)), this.writtenTo = i, n > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = n;
  }
  point(e, n, i) {
    if (e < n || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = n - e;
      i.block ? this.addBlock(new vp(o, s, i)) : (o || r || s >= wv) && this.addLineDeco(s, r, o);
    } else
      n > e && this.span(e, n);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: n } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = n, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new nt(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, n) {
    let i = new De(n - e);
    return this.oracle.doc.lineAt(e).to == n && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof nt)
      return e;
    let n = new nt(0, -1);
    return this.nodes.push(n), n;
  }
  addBlock(e) {
    var n;
    this.enterLine();
    let i = (n = e.deco) === null || n === void 0 ? void 0 : n.type;
    i == Oe.WidgetAfter && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, i != Oe.WidgetBefore && (this.covering = e);
  }
  addLineDeco(e, n, i) {
    let s = this.ensureLine();
    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, e), s.breaks += n, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let n = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(n instanceof nt) && !this.isCovered ? this.nodes.push(new nt(0, -1)) : (this.writtenTo < this.pos || n == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let s of this.nodes)
      s instanceof nt && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, n, i, s) {
    let r = new $a(i, e);
    return ye.spans(n, i, s, r, 0), r.finish(i);
  }
}
function Sv(t, e, n) {
  let i = new _v();
  return ye.compare(t, e, n, i, 0), i.changes;
}
class _v {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, n, i, s) {
    (e < n || i && i.heightRelevant || s && s.heightRelevant) && _l(e, n, this.changes, 5);
  }
}
function Ev(t, e) {
  let n = t.getBoundingClientRect(), i = t.ownerDocument, s = i.defaultView || window, r = Math.max(0, n.left), o = Math.min(s.innerWidth, n.right), l = Math.max(0, n.top), a = Math.min(s.innerHeight, n.bottom);
  for (let c = t.parentNode; c && c != i.body; )
    if (c.nodeType == 1) {
      let h = c, f = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && f.overflow != "visible") {
        let u = h.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = c == t.parentNode ? u.bottom : Math.min(a, u.bottom);
      }
      c = f.position == "absolute" || f.position == "fixed" ? h.offsetParent : h.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
  return {
    left: r - n.left,
    right: Math.max(r, o) - n.left,
    top: l - (n.top + e),
    bottom: Math.max(l, a) - (n.top + e)
  };
}
function Cv(t, e) {
  let n = t.getBoundingClientRect();
  return {
    left: 0,
    right: n.right - n.left,
    top: e,
    bottom: n.bottom - (n.top + e)
  };
}
class Ao {
  constructor(e, n, i) {
    this.from = e, this.to = n, this.size = i;
  }
  static same(e, n) {
    if (e.length != n.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i], r = n[i];
      if (s.from != r.from || s.to != r.to || s.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e) {
    return Mt.replace({ widget: new Tv(this.size, e) }).range(this.from, this.to);
  }
}
class Tv extends Ha {
  constructor(e, n) {
    super(), this.size = e, this.vertical = n;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Fh {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !0, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Hh, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Ve.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let n = e.facet(Va).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new yv(n), this.stateDeco = e.facet(as).filter((i) => typeof i != "function"), this.heightMap = Ge.empty().applyChanges(this.stateDeco, ae.empty, this.heightOracle.setDoc(e.doc), [new pt(0, 0, 0, e.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Mt.set(this.lineGaps.map((i) => i.draw(!1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: n } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? n.head : n.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new Ws(r, o));
      }
    }
    this.viewports = e.sort((i, s) => i.from - s.from), this.scaler = this.heightMap.height <= 7e6 ? Hh : new kv(this.heightOracle, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(this.scaler.scale == 1 ? e : Ni(e, this.scaler));
    });
  }
  update(e, n = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(as).filter((h) => typeof h != "function");
    let s = e.changedRanges, r = pt.extendWithRanges(s, Sv(i, this.stateDeco, e ? e.changes : Me.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), this.heightMap.height != o && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (n && (n.range.head < a.from || n.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, n));
    let c = !e.changes.empty || e.flags & 2 || a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, this.updateForViewport(), c && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), n && (this.scrollTarget = n), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(N1) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let n = e.contentDOM, i = window.getComputedStyle(n), s = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? Ve.RTL : Ve.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = n.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let c = 0, h = 0, f = parseInt(i.paddingTop) || 0, u = parseInt(i.paddingBottom) || 0;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, c |= 10), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 8), this.scrollTop != e.scrollDOM.scrollTop && (this.scrollAnchorHeight = -1, this.scrollTop = e.scrollDOM.scrollTop), this.scrolledToBottom = Ud(e.scrollDOM);
    let d = (this.printing ? Cv : Ev)(n, this.paddingTop), p = d.top - this.pixelViewport.top, w = d.bottom - this.pixelViewport.bottom;
    this.pixelViewport = d;
    let b = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (b != this.inView && (this.inView = b, b && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let m = l.width;
    if ((this.contentDOMWidth != m || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 8), a) {
      let E = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(E) && (o = !0), o || s.lineWrapping && Math.abs(m - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: v, charWidth: T, textHeight: B } = e.docView.measureTextSize();
        o = v > 0 && s.refresh(r, v, T, B, m / T, E), o && (e.docView.minWidth = 0, c |= 8);
      }
      p > 0 && w > 0 ? h = Math.max(p, w) : p < 0 && w < 0 && (h = Math.min(p, w)), s.heightChanged = !1;
      for (let v of this.viewports) {
        let T = v.from == this.viewport.from ? E : e.docView.measureVisibleLineHeights(v);
        this.heightMap = (o ? Ge.empty().applyChanges(this.stateDeco, ae.empty, this.heightOracle, [new pt(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new bv(v.from, T));
      }
      s.heightChanged && (c |= 2);
    }
    let y = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return y && (this.viewport = this.getViewport(h, this.scrollTarget)), this.updateForViewport(), (c & 2 || y) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, n) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Ws(s.lineAt(o - i * 1e3, pe.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, pe.ByHeight, r, 0, 0).to);
    if (n) {
      let { head: c } = n.range;
      if (c < a.from || c > a.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(c, pe.ByPos, r, 0, 0), u;
        n.y == "center" ? u = (f.top + f.bottom) / 2 - h / 2 : n.y == "start" || n.y == "nearest" && c < a.from ? u = f.top : u = f.bottom - h, a = new Ws(s.lineAt(u - 1e3 / 2, pe.ByHeight, r, 0, 0).from, s.lineAt(u + h + 1e3 / 2, pe.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, n) {
    let i = n.mapPos(e.from, -1), s = n.mapPos(e.to, 1);
    return new Ws(this.heightMap.lineAt(i, pe.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, pe.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: n }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(e, pe.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(n, pe.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || s <= o - Math.max(10, Math.min(
      -i,
      250
      /* MaxCoverMargin */
    ))) && (n == this.state.doc.length || r >= l + Math.max(10, Math.min(
      i,
      250
      /* MaxCoverMargin */
    ))) && s > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(e, n) {
    if (!e.length || n.empty)
      return e;
    let i = [];
    for (let s of e)
      n.touchesRange(s.from, s.to) || i.push(new Ao(n.mapPos(s.from), n.mapPos(s.to), s.size));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, n) {
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, r = s >> 1, o = s << 1;
    if (this.defaultTextDirection != Ve.LTR && !i)
      return [];
    let l = [], a = (c, h, f, u) => {
      if (h - c < r)
        return;
      let d = this.state.selection.main, p = [d.from];
      d.empty || p.push(d.to);
      for (let b of p)
        if (b > c && b < h) {
          a(c, b - 10, f, u), a(b + 10, h, f, u);
          return;
        }
      let w = xv(e, (b) => b.from >= f.from && b.to <= f.to && Math.abs(b.from - c) < r && Math.abs(b.to - h) < r && !p.some((m) => b.from < m && b.to > m));
      if (!w) {
        if (h < f.to && n && i && n.visibleRanges.some((b) => b.from <= h && b.to >= h)) {
          let b = n.moveToLineBoundary($.cursor(h), !1, !0).head;
          b > c && (h = b);
        }
        w = new Ao(c, h, this.gapSize(f, c, h, u));
      }
      l.push(w);
    };
    for (let c of this.viewportLines) {
      if (c.length < o)
        continue;
      let h = Av(c.from, c.to, this.stateDeco);
      if (h.total < o)
        continue;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, u, d;
      if (i) {
        let p = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, w, b;
        if (f != null) {
          let m = js(h, f), y = ((this.visibleBottom - this.visibleTop) / 2 + p) / c.height;
          w = m - y, b = m + y;
        } else
          w = (this.visibleTop - c.top - p) / c.height, b = (this.visibleBottom - c.top + p) / c.height;
        u = $s(h, w), d = $s(h, b);
      } else {
        let p = h.total * this.heightOracle.charWidth, w = s * this.heightOracle.charWidth, b, m;
        if (f != null) {
          let y = js(h, f), E = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + w) / p;
          b = y - E, m = y + E;
        } else
          b = (this.pixelViewport.left - w) / p, m = (this.pixelViewport.right + w) / p;
        u = $s(h, b), d = $s(h, m);
      }
      u > c.from && a(c.from, u, c, h), d < c.to && a(d, c.to, c, h);
    }
    return l;
  }
  gapSize(e, n, i, s) {
    let r = js(s, i) - js(s, n);
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    Ao.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = Mt.set(e.map((n) => n.draw(this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let n = [];
    ye.spans(e, this.viewport.from, this.viewport.to, {
      span(s, r) {
        n.push({ from: s, to: r });
      },
      point() {
      }
    }, 20);
    let i = n.length != this.visibleRanges.length || this.visibleRanges.some((s, r) => s.from != n[r].from || s.to != n[r].to);
    return this.visibleRanges = n, i ? 4 : 0;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((n) => n.from <= e && n.to >= e) || Ni(this.heightMap.lineAt(e, pe.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return Ni(this.heightMap.lineAt(this.scaler.fromDOM(e), pe.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let n = this.lineBlockAtHeight(e + 8);
    return n.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? n : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Ni(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Ws {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
function Av(t, e, n) {
  let i = [], s = t, r = 0;
  return ye.spans(n, t, e, {
    span() {
    },
    point(o, l) {
      o > s && (i.push({ from: s, to: o }), r += o - s), s = l;
    }
  }, 20), s < e && (i.push({ from: s, to: e }), r += e - s), { total: r, ranges: i };
}
function $s({ total: t, ranges: e }, n) {
  if (n <= 0)
    return e[0].from;
  if (n >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(t * n);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function js(t, e) {
  let n = 0;
  for (let { from: i, to: s } of t.ranges) {
    if (e <= s) {
      n += e - i;
      break;
    }
    n += s - i;
  }
  return n / t.total;
}
function xv(t, e) {
  for (let n of t)
    if (e(n))
      return n;
}
const Hh = {
  toDOM(t) {
    return t;
  },
  fromDOM(t) {
    return t;
  },
  scale: 1
};
class kv {
  constructor(e, n, i) {
    let s = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let c = n.lineAt(l, pe.ByPos, e, 0, 0).top, h = n.lineAt(a, pe.ByPos, e, 0, 0).bottom;
      return s += h - c, { from: l, to: a, top: c, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (n.height - s);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(e) {
    for (let n = 0, i = 0, s = 0; ; n++) {
      let r = n < this.viewports.length ? this.viewports[n] : null;
      if (!r || e < r.top)
        return s + (e - i) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      i = r.bottom, s = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let n = 0, i = 0, s = 0; ; n++) {
      let r = n < this.viewports.length ? this.viewports[n] : null;
      if (!r || e < r.domTop)
        return i + (e - s) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      i = r.bottom, s = r.domBottom;
    }
  }
}
function Ni(t, e) {
  if (e.scale == 1)
    return t;
  let n = e.toDOM(t.top), i = e.toDOM(t.bottom);
  return new xt(t.from, t.length, n, i - n, Array.isArray(t._content) ? t._content.map((s) => Ni(s, e)) : t._content);
}
const Ks = /* @__PURE__ */ Y.define({ combine: (t) => t.join(" ") }), Ol = /* @__PURE__ */ Y.define({ combine: (t) => t.indexOf(!0) > -1 }), Ml = /* @__PURE__ */ ui.newName(), wp = /* @__PURE__ */ ui.newName(), Sp = /* @__PURE__ */ ui.newName(), _p = { "&light": "." + wp, "&dark": "." + Sp };
function Rl(t, e, n) {
  return new ui(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (s) => {
        if (s == "&")
          return t;
        if (!n || !n[s])
          throw new RangeError(`Unsupported selector: ${s}`);
        return n[s];
      }) : t + " " + i;
    }
  });
}
const Ov = /* @__PURE__ */ Rl("." + Ml, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    boxSizing: "border-box",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#444"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace:before": {
    content: "attr(data-display)",
    position: "absolute",
    pointerEvents: "none",
    color: "#888"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, _p);
class Mv {
  constructor(e, n, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "";
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && n > -1)
      this.newSel = null;
    else if (n > -1 && (this.bounds = e.docView.domBoundsAround(n, i, 0))) {
      let l = r || o ? [] : Nv(e), a = new Wd(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Dv(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !ml(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), c = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !ml(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset);
      this.newSel = $.single(c, a);
    }
  }
}
function Ep(t, e) {
  let n, { newSel: i } = e, s = t.state.selection.main, r = t.inputState.lastKeyTime > Date.now() - 100 ? t.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = s.from, c = null;
    (r === 8 || j.android && e.text.length < l - o) && (a = s.to, c = "end");
    let h = Rv(t.state.doc.sliceString(o, l, Kn), e.text, a - o, c);
    h && (j.chrome && r == 13 && h.toB == h.from + 2 && e.text.slice(h.from, h.toB) == Kn + Kn && h.toB--, n = {
      from: o + h.from,
      to: o + h.toA,
      insert: ae.of(e.text.slice(h.from, h.toB).split(Kn))
    });
  } else
    i && (!t.hasFocus && t.state.facet(ro) || i.main.eq(s)) && (i = null);
  if (!n && !i)
    return !1;
  if (!n && e.typeOver && !s.empty && i && i.main.empty ? n = { from: s.from, to: s.to, insert: t.state.doc.slice(s.from, s.to) } : n && n.from >= s.from && n.to <= s.to && (n.from != s.from || n.to != s.to) && s.to - s.from - (n.to - n.from) <= 4 ? n = {
    from: s.from,
    to: s.to,
    insert: t.state.doc.slice(s.from, n.from).append(n.insert).append(t.state.doc.slice(n.to, s.to))
  } : (j.mac || j.android) && n && n.from == n.to && n.from == s.head - 1 && /^\. ?$/.test(n.insert.toString()) && t.contentDOM.getAttribute("autocorrect") == "off" ? (i && n.insert.length == 2 && (i = $.single(i.main.anchor - 1, i.main.head - 1)), n = { from: s.from, to: s.to, insert: ae.of([" "]) }) : j.chrome && n && n.from == n.to && n.from == s.head && n.insert.toString() == `
 ` && t.lineWrapping && (i && (i = $.single(i.main.anchor - 1, i.main.head - 1)), n = { from: s.from, to: s.to, insert: ae.of([" "]) }), n) {
    let o = t.state;
    if (j.ios && t.inputState.flushIOSKey(t) || j.android && (n.from == s.from && n.to == s.to && n.insert.length == 1 && n.insert.lines == 2 && ti(t.contentDOM, "Enter", 13) || (n.from == s.from - 1 && n.to == s.to && n.insert.length == 0 || r == 8 && n.insert.length < n.to - n.from) && ti(t.contentDOM, "Backspace", 8) || n.from == s.from && n.to == s.to + 1 && n.insert.length == 0 && ti(t.contentDOM, "Delete", 46)))
      return !0;
    let l = n.insert.toString();
    if (t.state.facet(Qd).some((h) => h(t, n.from, n.to, l)))
      return !0;
    t.inputState.composing >= 0 && t.inputState.composing++;
    let a;
    if (n.from >= s.from && n.to <= s.to && n.to - n.from >= (s.to - s.from) / 3 && (!i || i.main.empty && i.main.from == n.from + n.insert.length) && t.inputState.composing < 0) {
      let h = s.from < n.from ? o.sliceDoc(s.from, n.from) : "", f = s.to > n.to ? o.sliceDoc(n.to, s.to) : "";
      a = o.replaceSelection(t.state.toText(h + n.insert.sliceString(0, void 0, t.state.lineBreak) + f));
    } else {
      let h = o.changes(n), f = i && i.main.to <= h.newLength ? i.main : void 0;
      if (o.selection.ranges.length > 1 && t.inputState.composing >= 0 && n.to <= s.to && n.to >= s.to - 10) {
        let u = t.state.sliceDoc(n.from, n.to), d = ap(t) || t.state.doc.lineAt(s.head), p = s.to - n.to, w = s.to - s.from;
        a = o.changeByRange((b) => {
          if (b.from == s.from && b.to == s.to)
            return { changes: h, range: f || b.map(h) };
          let m = b.to - p, y = m - u.length;
          if (b.to - b.from != w || t.state.sliceDoc(y, m) != u || // Unfortunately, there's no way to make multiple
          // changes in the same node work without aborting
          // composition, so cursors in the composition range are
          // ignored.
          d && b.to >= d.from && b.from <= d.to)
            return { range: b };
          let E = o.changes({ from: y, to: m, insert: n.insert }), v = b.to - s.to;
          return {
            changes: E,
            range: f ? $.range(Math.max(0, f.anchor + v), Math.max(0, f.head + v)) : b.map(E)
          };
        });
      } else
        a = {
          changes: h,
          selection: f && o.selection.replaceRange(f)
        };
    }
    let c = "input.type";
    return (t.composing || t.inputState.compositionPendingChange && t.inputState.compositionEndedAt > Date.now() - 50) && (t.inputState.compositionPendingChange = !1, c += ".compose", t.inputState.compositionFirstChange && (c += ".start", t.inputState.compositionFirstChange = !1)), t.dispatch(a, { scrollIntoView: !0, userEvent: c }), !0;
  } else if (i && !i.main.eq(s)) {
    let o = !1, l = "select";
    return t.inputState.lastSelectionTime > Date.now() - 50 && (t.inputState.lastSelectionOrigin == "select" && (o = !0), l = t.inputState.lastSelectionOrigin), t.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function Rv(t, e, n, i) {
  let s = Math.min(t.length, e.length), r = 0;
  for (; r < s && t.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == s && t.length == e.length)
    return null;
  let o = t.length, l = e.length;
  for (; o > 0 && l > 0 && t.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    n -= o + a - r;
  }
  if (o < r && t.length < e.length) {
    let a = n <= r && n >= o ? r - n : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = n <= r && n >= l ? r - n : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function Nv(t) {
  let e = [];
  if (t.root.activeElement != t.contentDOM)
    return e;
  let { anchorNode: n, anchorOffset: i, focusNode: s, focusOffset: r } = t.observer.selectionRange;
  return n && (e.push(new gh(n, i)), (s != n || r != i) && e.push(new gh(s, r))), e;
}
function Dv(t, e) {
  if (t.length == 0)
    return null;
  let n = t[0].pos, i = t.length == 2 ? t[1].pos : n;
  return n > -1 && i > -1 ? $.single(n + e, i + e) : null;
}
const Lv = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, xo = j.ie && j.ie_version <= 11;
class Pv {
  constructor(e) {
    this.view = e, this.active = !1, this.selectionRange = new C1(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((n) => {
      for (let i of n)
        this.queue.push(i);
      (j.ie && j.ie_version <= 11 || j.ios && e.composing) && n.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), xo && (this.onCharData = (n) => {
      this.queue.push({
        target: n.target,
        type: "characterData",
        oldValue: n.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var n;
      ((n = this.view.docView) === null || n === void 0 ? void 0 : n.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM), this.resizeContent = new ResizeObserver(() => this.view.requestMeasure()), this.resizeContent.observe(e.contentDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((n) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), n.length > 0 && n[n.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((n) => {
      n.length > 0 && n[n.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runScrollHandlers(this.view, e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint() {
    this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500);
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((n, i) => n != e[i]))) {
      this.gapIntersection.disconnect();
      for (let n of e)
        this.gapIntersection.observe(n);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let n = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, s = this.selectionRange;
    if (i.state.facet(ro) ? i.root.activeElement != this.dom : !Qs(i.dom, s))
      return;
    let r = s.anchorNode && i.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(e)) {
      n || (this.selectionChanged = !1);
      return;
    }
    (j.ie && j.ie_version <= 11 || j.android && j.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && xr(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, n = j.safari && e.root.nodeType == 11 && w1(this.dom.ownerDocument) == this.dom && Iv(this.view) || Ar(e.root);
    if (!n || this.selectionRange.eq(n))
      return !1;
    let i = Qs(this.dom, n);
    return i && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && A1(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), i && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, n) {
    this.selectionRange.set(e.node, e.offset, n.node, n.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, n = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !n && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : n || (n = this.scrollTargets.slice(0, e)), n && n.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !n && (n = this.scrollTargets.slice(0, e)), n) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = n)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, Lv), xo && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), xo && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, n) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && ti(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: n,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let n = -1, i = -1, s = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o && (o.typeOver && (s = !0), n == -1 ? { from: n, to: i } = o : (n = Math.min(o.from, n), i = Math.max(o.to, i)));
    }
    return { from: n, to: i, typeOver: s };
  }
  readChange() {
    let { from: e, to: n, typeOver: i } = this.processRecords(), s = this.selectionChanged && Qs(this.dom, this.selectionRange);
    return e < 0 && !s ? null : (e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1, new Mv(this.view, e, n, i));
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let n = this.readChange();
    if (!n)
      return !1;
    let i = this.view.state, s = Ep(this.view, n);
    return this.view.state == i && this.view.update([]), s;
  }
  readMutation(e) {
    let n = this.view.docView.nearest(e.target);
    if (!n || n.ignoreMutation(e))
      return null;
    if (n.markDirty(e.type == "attributes"), e.type == "attributes" && (n.flags |= 4), e.type == "childList") {
      let i = Vh(n, e.previousSibling || e.target.previousSibling, -1), s = Vh(n, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? n.posAfter(i) : n.posAtStart,
        to: s ? n.posBefore(s) : n.posAtEnd,
        typeOver: !1
      };
    } else
      return e.type == "characterData" ? { from: n.posAtStart, to: n.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  destroy() {
    var e, n, i, s;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (n = this.gapIntersection) === null || n === void 0 || n.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect(), (s = this.resizeContent) === null || s === void 0 || s.disconnect();
    for (let r of this.scrollTargets)
      r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function Vh(t, e, n) {
  for (; e; ) {
    let i = de.get(e);
    if (i && i.parent == t)
      return i;
    let s = e.parentNode;
    e = s != t.dom ? s : n > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Iv(t) {
  let e = null;
  function n(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  if (t.contentDOM.addEventListener("beforeinput", n, !0), t.dom.ownerDocument.execCommand("indent"), t.contentDOM.removeEventListener("beforeinput", n, !0), !e)
    return null;
  let i = e.startContainer, s = e.startOffset, r = e.endContainer, o = e.endOffset, l = t.docView.domAtPos(t.state.selection.main.anchor);
  return xr(l.node, l.offset, r, o) && ([i, s, r, o] = [r, o, i, s]), { anchorNode: i, anchorOffset: s, focusNode: r, focusOffset: o };
}
class ve {
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: fixed; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), this._dispatch = e.dispatch || ((n) => this.update([n])), this.dispatch = this.dispatch.bind(this), this._root = e.root || T1(e.parent) || document, this.viewState = new Fh(e.state || fe.create(e)), this.plugins = this.state.facet(Mi).map((n) => new Eo(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new Pv(this), this.inputState = new nv(this), this.inputState.ensureHandlers(this, this.plugins), this.docView = new _h(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), e.parent && e.parent.appendChild(this.dom);
  }
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  dispatch(...e) {
    let n = e.length == 1 && e[0] instanceof He ? e[0] : this.state.update(...e);
    this._dispatch(n, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let n = !1, i = !1, s, r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((u) => u.annotation(mp)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = yp(r, o), a || (l = 1));
    let c = this.observer.delayedAndroidKey, h = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(fe.phrases) != this.state.facet(fe.phrases))
      return this.setState(r);
    s = Mr.create(this, r, e), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          f = new Or(d.empty ? d : $.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is(Sh) && (f = d.value);
      }
      this.viewState.update(s, f), this.bidiCache = Rr.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), n = this.docView.update(s), this.state.facet(Ri) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(n, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(Ks) != s.state.facet(Ks) && (this.viewState.mustMeasureContent = !0), (n || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !s.empty)
      for (let u of this.state.facet(El))
        u(s);
    (a || h) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), h && !Ep(this, h) && c.force && ti(this.contentDOM, c.key, c.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let n = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new Fh(e), this.plugins = e.facet(Mi).map((i) => new Eo(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView = new _h(this), this.inputState.ensureHandlers(this, this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    n && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let n = e.startState.facet(Mi), i = e.state.facet(Mi);
    if (n != i) {
      let s = [];
      for (let r of i) {
        let o = n.indexOf(r);
        if (o < 0)
          s.push(new Eo(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, s.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = s, this.pluginMap.clear(), this.inputState.ensureHandlers(this, this.plugins);
    } else
      for (let s of this.plugins)
        s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.measureScheduled = 0, e && this.observer.forceFlush();
    let n = null, i = this.scrollDOM, { scrollTop: s } = i, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    s != this.viewState.scrollTop && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Ud(i))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(s);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let c = [];
        a & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
        let h = c.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return An(this.state, p), Wh;
          }
        }), f = Mr.create(this, this.state, []), u = !1;
        f.flags |= a, n ? n.flags |= a : n = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f));
        for (let d = 0; d < c.length; d++)
          if (h[d] != Wh)
            try {
              let p = c[d];
              p.write && p.write(h[d], this);
            } catch (p) {
              An(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null;
              continue;
            } else {
              let p = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                s = i.scrollTop = s + p, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (n && !n.empty)
      for (let l of this.state.facet(El))
        l(n);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Ml + " " + (this.state.facet(Ol) ? Sp : wp) + " " + this.state.facet(Ks);
  }
  updateAttrs() {
    let e = $h(this, np, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), n = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(ro) ? "true" : "false",
      class: "cm-content",
      style: `${j.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (n["aria-readonly"] = "true"), $h(this, Va, n);
    let i = this.observer.ignore(() => {
      let s = Sl(this.contentDOM, this.contentAttrs, n), r = Sl(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return this.editorAttrs = e, this.contentAttrs = n, i;
  }
  showAnnouncements(e) {
    let n = !0;
    for (let i of e)
      for (let s of i.effects)
        if (s.is(ve.announce)) {
          n && (this.announceDOM.textContent = ""), n = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Ri), ui.mount(this.root, this.styleModules.concat(Ov).reverse());
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let n = 0; n < this.measureRequests.length; n++)
          if (this.measureRequests[n].key === e.key) {
            this.measureRequests[n] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let n = this.pluginMap.get(e);
    return (n === void 0 || n && n.spec != e) && this.pluginMap.set(e, n = this.plugins.find((i) => i.spec == e) || null), n && n.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line breaks, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, n, i) {
    return To(this, e, kh(this, e, n, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, n) {
    return To(this, e, kh(this, e, n, (i) => ev(this, e.head, i)));
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, n, i = !0) {
    return Q1(this, e, n, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, n, i) {
    return To(this, e, tv(this, e, n, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, n = 0) {
    return this.docView.posFromDOM(e, n);
  }
  posAtCoords(e, n = !0) {
    return this.readMeasured(), hp(this, e, n);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, n = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, n);
    if (!i || i.left == i.right)
      return i;
    let s = this.state.doc.lineAt(e), r = this.bidiSpans(s), o = r[ni.find(r, e - s.from, -1, n)];
    return Ba(i, o.dir == Ve.LTR == n > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(tp) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > Bv)
      return op(e.length);
    let n = this.textDirectionAt(e.from);
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == n)
        return s.order;
    let i = F1(e.text, n);
    return this.bidiCache.push(new Rr(e.from, e.to, n, i)), i;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || j.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Id(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, n = {}) {
    return Sh.of(new Or(typeof e == "number" ? $.cursor(e) : e, n.y, n.x, n.yMargin, n.xMargin));
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return ls.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, n) {
    let i = ui.newName(), s = [Ks.of(i), Ri.of(Rl(`.${i}`, e))];
    return n && n.dark && s.push(Ol.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return r1.lowest(Ri.of(Rl("." + Ml, e, _p)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var n;
    let i = e.querySelector(".cm-content"), s = i && de.get(i) || de.get(e);
    return ((n = s == null ? void 0 : s.rootView) === null || n === void 0 ? void 0 : n.view) || null;
  }
}
ve.styleModule = Ri;
ve.inputHandler = Qd;
ve.focusChangeEffect = ep;
ve.perLineTextDirection = tp;
ve.exceptionSink = Zd;
ve.updateListener = El;
ve.editable = ro;
ve.mouseSelectionStyle = Yd;
ve.dragMovesSelection = Xd;
ve.clickAddsSelectionRange = Jd;
ve.decorations = as;
ve.atomicRanges = Wa;
ve.scrollMargins = ip;
ve.darkTheme = Ol;
ve.contentAttributes = Va;
ve.editorAttributes = np;
ve.lineWrapping = /* @__PURE__ */ ve.contentAttributes.of({ class: "cm-lineWrapping" });
ve.announce = /* @__PURE__ */ Ie.define();
const Bv = 4096, Wh = {};
class Rr {
  constructor(e, n, i, s) {
    this.from = e, this.to = n, this.dir = i, this.order = s;
  }
  static update(e, n) {
    if (n.empty)
      return e;
    let i = [], s = e.length ? e[e.length - 1].dir : Ve.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s && !n.touchesRange(o.from, o.to) && i.push(new Rr(n.mapPos(o.from, 1), n.mapPos(o.to, -1), o.dir, o.order));
    }
    return i;
  }
}
function $h(t, e, n) {
  for (let i = t.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let r = i[s], o = typeof r == "function" ? r(t) : r;
    o && wl(o, n);
  }
  return n;
}
const Uv = !j.ios, Fv = {
  ".cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" }
  }
};
Uv && (Fv[".cm-line"].caretColor = "transparent !important");
class Dn extends fi {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
Dn.prototype.elementClass = "";
Dn.prototype.toDOM = void 0;
Dn.prototype.mapMode = rt.TrackBefore;
Dn.prototype.startSide = Dn.prototype.endSide = -1;
Dn.prototype.point = !0;
const ko = /* @__PURE__ */ Y.define(), nr = /* @__PURE__ */ Y.define(), Nl = /* @__PURE__ */ Y.define({
  combine: (t) => t.some((e) => e)
});
function Hv(t) {
  let e = [
    Vv
  ];
  return t && t.fixed === !1 && e.push(Nl.of(!0)), e;
}
const Vv = /* @__PURE__ */ ls.fromClass(class {
  constructor(t) {
    this.view = t, this.prevViewport = t.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = t.state.facet(nr).map((e) => new Kh(t, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !t.state.facet(Nl), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t.scrollDOM.insertBefore(this.dom, t.contentDOM);
  }
  update(t) {
    if (this.updateGutters(t)) {
      let e = this.prevViewport, n = t.view.viewport, i = Math.min(e.to, n.to) - Math.max(e.from, n.from);
      this.syncGutters(i < (n.to - n.from) * 0.8);
    }
    t.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(Nl) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t.view.viewport;
  }
  syncGutters(t) {
    let e = this.dom.nextSibling;
    t && this.dom.remove();
    let n = ye.iter(this.view.state.facet(ko), this.view.viewport.from), i = [], s = this.gutters.map((r) => new Wv(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == Oe.Text && o) {
            Dl(n, i, l.from);
            for (let a of s)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (r.type == Oe.Text) {
        Dl(n, i, r.from);
        for (let o of s)
          o.line(this.view, r, i);
      }
    for (let r of s)
      r.finish();
    t && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(t) {
    let e = t.startState.facet(nr), n = t.state.facet(nr), i = t.docChanged || t.heightChanged || t.viewportChanged || !ye.eq(t.startState.facet(ko), t.state.facet(ko), t.view.viewport.from, t.view.viewport.to);
    if (e == n)
      for (let s of this.gutters)
        s.update(t) && (i = !0);
    else {
      i = !0;
      let s = [];
      for (let r of n) {
        let o = e.indexOf(r);
        o < 0 ? s.push(new Kh(this.view, r)) : (this.gutters[o].update(t), s.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
      for (let r of s)
        this.dom.appendChild(r.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let t of this.gutters)
      t.destroy();
    this.dom.remove();
  }
}, {
  provide: (t) => ve.scrollMargins.of((e) => {
    let n = e.plugin(t);
    return !n || n.gutters.length == 0 || !n.fixed ? null : e.textDirection == Ve.LTR ? { left: n.dom.offsetWidth } : { right: n.dom.offsetWidth };
  })
});
function jh(t) {
  return Array.isArray(t) ? t : [t];
}
function Dl(t, e, n) {
  for (; t.value && t.from <= n; )
    t.from == n && e.push(t.value), t.next();
}
class Wv {
  constructor(e, n, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = ye.iter(e.markers, n.from);
  }
  addElement(e, n, i) {
    let { gutter: s } = this, r = n.top - this.height;
    if (this.i == s.elements.length) {
      let o = new Cp(e, n.height, r, i);
      s.elements.push(o), s.dom.appendChild(o.dom);
    } else
      s.elements[this.i].update(e, n.height, r, i);
    this.height = n.bottom, this.i++;
  }
  line(e, n, i) {
    let s = [];
    Dl(this.cursor, s, n.from), i.length && (s = s.concat(i));
    let r = this.gutter.config.lineMarker(e, n, s);
    r && s.unshift(r);
    let o = this.gutter;
    s.length == 0 && !o.config.renderEmptyElements || this.addElement(e, n, s);
  }
  widget(e, n) {
    let i = this.gutter.config.widgetMarker(e, n.widget, n);
    i && this.addElement(e, n, [i]);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let n = e.elements.pop();
      e.dom.removeChild(n.dom), n.destroy();
    }
  }
}
class Kh {
  constructor(e, n) {
    this.view = e, this.config = n, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in n.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let r = s.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = s.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        n.domEventHandlers[i](e, l, s) && s.preventDefault();
      });
    this.markers = jh(n.markers(e)), n.initialSpacer && (this.spacer = new Cp(e, 0, 0, [n.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let n = this.markers;
    if (this.markers = jh(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let i = e.view.viewport;
    return !ye.eq(this.markers, n, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Cp {
  constructor(e, n, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, n, i, s);
  }
  update(e, n, i, s) {
    this.height != n && (this.dom.style.height = (this.height = n) + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), $v(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, n) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < n.length ? n[r++] : null, c = !1;
      if (a) {
        let h = a.elementClass;
        h && (i += " " + h);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, c = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let h = this.markers[o++];
        if (h.toDOM) {
          h.destroy(s);
          let f = s.nextSibling;
          s.remove(), s = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (c ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(e), s)), c && o++;
    }
    this.dom.className = i, this.markers = n;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function $v(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].compare(e[n]))
      return !1;
  return !0;
}
const jv = /* @__PURE__ */ Y.define(), zn = /* @__PURE__ */ Y.define({
  combine(t) {
    return m1(t, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, n) {
        let i = Object.assign({}, e);
        for (let s in n) {
          let r = i[s], o = n[s];
          i[s] = r ? (l, a, c) => r(l, a, c) || o(l, a, c) : o;
        }
        return i;
      }
    });
  }
});
class Oo extends Dn {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function Mo(t, e) {
  return t.state.facet(zn).formatNumber(e, t.state);
}
const Kv = /* @__PURE__ */ nr.compute([zn], (t) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(jv);
  },
  lineMarker(e, n, i) {
    return i.some((s) => s.toDOM) ? null : new Oo(Mo(e, e.state.doc.lineAt(n.from).number));
  },
  widgetMarker: () => null,
  lineMarkerChange: (e) => e.startState.facet(zn) != e.state.facet(zn),
  initialSpacer(e) {
    return new Oo(Mo(e, zh(e.state.doc.lines)));
  },
  updateSpacer(e, n) {
    let i = Mo(n.view, zh(n.view.state.doc.lines));
    return i == e.number ? e : new Oo(i);
  },
  domEventHandlers: t.facet(zn).domEventHandlers
}));
function zv(t = {}) {
  return [
    zn.of(t),
    Hv(),
    Kv
  ];
}
function zh(t) {
  let e = 9;
  for (; e < t; )
    e = e * 10 + 9;
  return e;
}
const qv = { class: "py-8" }, Gv = {
  __name: "StreamReader",
  props: {
    commandId: String,
    fetchUrl: String
  },
  setup(t) {
    const e = t, n = Bt(null);
    Bt("");
    const i = Bt(0);
    let s = null;
    bi(() => {
      let l = fe.create({
        extensions: [
          //basicSetup,
          zv(),
          fe.readOnly.of(!0)
        ]
      });
      s = new ve({
        state: l,
        parent: n.value,
        editable: !1
      }), o(), setInterval(() => {
        o();
      }, 2e3);
    });
    async function r(l = "", a = {}) {
      return (await fetch(l, {
        method: "POST",
        // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        // no-cors, *cors, same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": document.head.querySelector("[name~=csrf-token][content]").content
        },
        redirect: "follow",
        // manual, *follow, error
        referrerPolicy: "no-referrer",
        // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(a)
        // body data type must match "Content-Type" header
      })).json();
    }
    function o() {
      r(e.fetchUrl, { line: i.value }).then((l) => {
        s.dispatch({
          changes: {
            from: s.state.doc.length,
            insert: l.content
          }
        }), i.value = l.currentLine;
      });
    }
    return (l, a) => (ps(), Qf("div", qv, [
      Jr("div", {
        ref_key: "viewer",
        ref: n,
        class: "bg-white"
      }, null, 512)
    ]));
  }
};
Nu({}).component("StreamReader", Gv).mount("#app");

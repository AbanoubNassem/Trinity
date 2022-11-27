var po = Object.defineProperty;
var mo = (i, t, e) => t in i ? po(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var S = (i, t, e) => (mo(i, typeof t != "symbol" ? t + "" : t, e), e);
/*!
 * Chart.js v4.0.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
function dt() {
}
const bo = (() => {
  let i = 0;
  return () => i++;
})();
function T(i) {
  return i === null || typeof i > "u";
}
function I(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function A(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function W(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function tt(i, t) {
  return W(i) ? i : t;
}
function D(i, t) {
  return typeof i > "u" ? t : i;
}
const xo = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, pn = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function F(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function R(i, t, e, s) {
  let n, o, a;
  if (I(i))
    if (o = i.length, s)
      for (n = o - 1; n >= 0; n--)
        t.call(e, i[n], n);
    else
      for (n = 0; n < o; n++)
        t.call(e, i[n], n);
  else if (A(i))
    for (a = Object.keys(i), o = a.length, n = 0; n < o; n++)
      t.call(e, i[a[n]], a[n]);
}
function Ye(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function Xe(i) {
  if (I(i))
    return i.map(Xe);
  if (A(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Xe(i[e[n]]);
    return t;
  }
  return i;
}
function mn(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function _o(i, t, e, s) {
  if (!mn(i))
    return;
  const n = t[i], o = e[i];
  A(n) && A(o) ? ce(n, o, s) : t[i] = Xe(o);
}
function ce(i, t, e) {
  const s = I(t) ? t : [
    t
  ], n = s.length;
  if (!A(i))
    return i;
  e = e || {};
  const o = e.merger || _o;
  let a;
  for (let r = 0; r < n; ++r) {
    if (a = s[r], !A(a))
      continue;
    const l = Object.keys(a);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, a, e);
  }
  return i;
}
function ae(i, t) {
  return ce(i, t, {
    merger: yo
  });
}
function yo(i, t, e) {
  if (!mn(i))
    return;
  const s = t[i], n = e[i];
  A(s) && A(n) ? ae(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Xe(n));
}
const Ki = {
  "": (i) => i,
  x: (i) => i.x,
  y: (i) => i.y
};
function vo(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function Mo(i) {
  const t = vo(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function kt(i, t) {
  return (Ki[t] || (Ki[t] = Mo(t)))(i);
}
function Ri(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const st = (i) => typeof i < "u", wt = (i) => typeof i == "function", qi = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function ko(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const V = Math.PI, z = 2 * V, wo = z + V, Ue = Number.POSITIVE_INFINITY, So = V / 180, N = V / 2, Pt = V / 4, Gi = V * 2 / 3, xt = Math.log10, ht = Math.sign;
function re(i, t, e) {
  return Math.abs(i - t) < e;
}
function Zi(i) {
  const t = Math.round(i);
  i = re(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(xt(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Po(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function jt(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function Do(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function bn(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function ot(i) {
  return i * (V / 180);
}
function Ei(i) {
  return i * (180 / V);
}
function Ji(i) {
  if (!W(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function xn(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * V && (o += z), {
    angle: o,
    distance: n
  };
}
function xi(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Co(i, t) {
  return (i - t + wo) % z - V;
}
function et(i) {
  return (i % z + z) % z;
}
function he(i, t, e, s) {
  const n = et(i), o = et(t), a = et(e), r = et(o - n), l = et(a - n), c = et(n - o), h = et(n - a);
  return n === o || n === a || s && o === a || r > l && c < h;
}
function Y(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Oo(i) {
  return Y(i, -32768, 32767);
}
function pt(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function Fi(i, t, e) {
  e = e || ((a) => i[a] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const mt = (i, t, e, s) => Fi(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Ao = (i, t, e) => Fi(i, e, (s) => i[s][t] >= e);
function To(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const _n = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Lo(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), _n.forEach((e) => {
    const s = "_onData" + Ri(e), n = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const a = n.apply(this, o);
        return i._chartjs.listeners.forEach((r) => {
          typeof r[s] == "function" && r[s](...o);
        }), a;
      }
    });
  });
}
function Qi(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (_n.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function yn(i) {
  const t = /* @__PURE__ */ new Set();
  let e, s;
  for (e = 0, s = i.length; e < s; ++e)
    t.add(i[e]);
  return t.size === s ? i : Array.from(t);
}
const vn = function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
}();
function Mn(i, t) {
  let e = !1;
  return function(...s) {
    e || (e = !0, vn.call(window, () => {
      e = !1, i.apply(t, s);
    }));
  };
}
function Ro(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const Ii = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", K = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, Eo = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function kn(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: a, _parsed: r } = i, l = a.axis, { min: c, max: h, minDefined: d, maxDefined: u } = a.getUserBounds();
    d && (n = Y(Math.min(
      mt(r, a.axis, c).lo,
      e ? s : mt(t, l, a.getPixelForValue(c)).lo
    ), 0, s - 1)), u ? o = Y(Math.max(
      mt(r, a.axis, h, !0).hi + 1,
      e ? 0 : mt(t, l, a.getPixelForValue(h), !0).hi + 1
    ), n, s) - n : o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function wn(i) {
  const { xScale: t, yScale: e, _scaleRanges: s } = i, n = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!s)
    return i._scaleRanges = n, !0;
  const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
  return Object.assign(s, n), o;
}
const ye = (i) => i === 0 || i === 1, ts = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * z / e)), es = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * z / e) + 1, Re = {
  linear: (i) => i,
  easeInQuad: (i) => i * i,
  easeOutQuad: (i) => -i * (i - 2),
  easeInOutQuad: (i) => (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
  easeInCubic: (i) => i * i * i,
  easeOutCubic: (i) => (i -= 1) * i * i + 1,
  easeInOutCubic: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
  easeInQuart: (i) => i * i * i * i,
  easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
  easeInOutQuart: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
  easeInQuint: (i) => i * i * i * i * i,
  easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
  easeInOutQuint: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
  easeInSine: (i) => -Math.cos(i * N) + 1,
  easeOutSine: (i) => Math.sin(i * N),
  easeInOutSine: (i) => -0.5 * (Math.cos(V * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => ye(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => ye(i) ? i : ts(i, 0.075, 0.3),
  easeOutElastic: (i) => ye(i) ? i : es(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return ye(i) ? i : i < 0.5 ? 0.5 * ts(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * es(i * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i) {
    return i * i * ((1.70158 + 1) * i - 1.70158);
  },
  easeOutBack(i) {
    return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
  },
  easeInOutBack(i) {
    let t = 1.70158;
    return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
  },
  easeInBounce: (i) => 1 - Re.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Re.easeInBounce(i * 2) * 0.5 : Re.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
var is = Re;
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */
function me(i) {
  return i + 0.5 | 0;
}
const _t = (i, t, e) => Math.max(Math.min(i, e), t);
function ee(i) {
  return _t(me(i * 2.55), 0, 255);
}
function Mt(i) {
  return _t(me(i * 255), 0, 255);
}
function gt(i) {
  return _t(me(i / 2.55) / 100, 0, 1);
}
function ss(i) {
  return _t(me(i * 100), 0, 100);
}
const it = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, _i = [..."0123456789ABCDEF"], Fo = (i) => _i[i & 15], Io = (i) => _i[(i & 240) >> 4] + _i[i & 15], ve = (i) => (i & 240) >> 4 === (i & 15), zo = (i) => ve(i.r) && ve(i.g) && ve(i.b) && ve(i.a);
function Bo(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & it[i[1]] * 17,
    g: 255 & it[i[2]] * 17,
    b: 255 & it[i[3]] * 17,
    a: t === 5 ? it[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: it[i[1]] << 4 | it[i[2]],
    g: it[i[3]] << 4 | it[i[4]],
    b: it[i[5]] << 4 | it[i[6]],
    a: t === 9 ? it[i[7]] << 4 | it[i[8]] : 255
  })), e;
}
const Vo = (i, t) => i < 255 ? t(i) : "";
function Wo(i) {
  var t = zo(i) ? Fo : Io;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Vo(i.a, t) : void 0;
}
const No = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Sn(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, a = (o + i / 30) % 12) => e - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [n(0), n(8), n(4)];
}
function Ho(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function jo(i, t, e) {
  const s = Sn(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function $o(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function zi(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), a = Math.min(e, s, n), r = (o + a) / 2;
  let l, c, h;
  return o !== a && (h = o - a, c = r > 0.5 ? h / (2 - o - a) : h / (o + a), l = $o(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, r];
}
function Bi(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Mt);
}
function Vi(i, t, e) {
  return Bi(Sn, i, t, e);
}
function Yo(i, t, e) {
  return Bi(jo, i, t, e);
}
function Xo(i, t, e) {
  return Bi(Ho, i, t, e);
}
function Pn(i) {
  return (i % 360 + 360) % 360;
}
function Uo(i) {
  const t = No.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? ee(+t[5]) : Mt(+t[5]));
  const n = Pn(+t[2]), o = +t[3] / 100, a = +t[4] / 100;
  return t[1] === "hwb" ? s = Yo(n, o, a) : t[1] === "hsv" ? s = Xo(n, o, a) : s = Vi(n, o, a), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function Ko(i, t) {
  var e = zi(i);
  e[0] = Pn(e[0] + t), e = Vi(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function qo(i) {
  if (!i)
    return;
  const t = zi(i), e = t[0], s = ss(t[1]), n = ss(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${gt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const ns = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, os = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Go() {
  const i = {}, t = Object.keys(os), e = Object.keys(ns);
  let s, n, o, a, r;
  for (s = 0; s < t.length; s++) {
    for (a = r = t[s], n = 0; n < e.length; n++)
      o = e[n], r = r.replace(o, ns[o]);
    o = parseInt(os[a], 16), i[r] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let Me;
function Zo(i) {
  Me || (Me = Go(), Me.transparent = [0, 0, 0, 0]);
  const t = Me[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Jo = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Qo(i) {
  const t = Jo.exec(i);
  let e = 255, s, n, o;
  if (!!t) {
    if (t[7] !== s) {
      const a = +t[7];
      e = t[8] ? ee(a) : _t(a * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? ee(s) : _t(s, 0, 255)), n = 255 & (t[4] ? ee(n) : _t(n, 0, 255)), o = 255 & (t[6] ? ee(o) : _t(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function ta(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${gt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const ai = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Vt = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function ea(i, t, e) {
  const s = Vt(gt(i.r)), n = Vt(gt(i.g)), o = Vt(gt(i.b));
  return {
    r: Mt(ai(s + e * (Vt(gt(t.r)) - s))),
    g: Mt(ai(n + e * (Vt(gt(t.g)) - n))),
    b: Mt(ai(o + e * (Vt(gt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function ke(i, t, e) {
  if (i) {
    let s = zi(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Vi(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function Dn(i, t) {
  return i && Object.assign(t || {}, i);
}
function as(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = Mt(i[3]))) : (t = Dn(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = Mt(t.a)), t;
}
function ia(i) {
  return i.charAt(0) === "r" ? Qo(i) : Uo(i);
}
class Ke {
  constructor(t) {
    if (t instanceof Ke)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = as(t) : e === "string" && (s = Bo(t) || Zo(t) || ia(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Dn(this._rgb);
    return t && (t.a = gt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = as(t);
  }
  rgbString() {
    return this._valid ? ta(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Wo(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? qo(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb, n = t.rgb;
      let o;
      const a = e === o ? 0.5 : e, r = 2 * a - 1, l = s.a - n.a, c = ((r * l === -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * n.r + 0.5, s.g = 255 & c * s.g + o * n.g + 0.5, s.b = 255 & c * s.b + o * n.b + 0.5, s.a = a * s.a + (1 - a) * n.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = ea(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Ke(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Mt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = me(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return ke(this._rgb, 2, t), this;
  }
  darken(t) {
    return ke(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ke(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ke(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Ko(this._rgb, t), this;
  }
}
function Cn(i) {
  return new Ke(i);
}
function On(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function rs(i) {
  return On(i) ? i : Cn(i);
}
function ri(i) {
  return On(i) ? i : Cn(i).saturate(0.5).darken(0.1).hexString();
}
const sa = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], na = [
  "color",
  "borderColor",
  "backgroundColor"
];
function oa(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), i.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), i.set("animations", {
    colors: {
      type: "color",
      properties: na
    },
    numbers: {
      type: "number",
      properties: sa
    }
  }), i.describe("animations", {
    _fallback: "animation"
  }), i.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function aa(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const ls = /* @__PURE__ */ new Map();
function ra(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = ls.get(e);
  return s || (s = new Intl.NumberFormat(i, t), ls.set(e, s)), s;
}
function be(i, t, e) {
  return ra(t, e).format(i);
}
const An = {
  values(i) {
    return I(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = la(i, e);
    }
    const a = xt(Math.abs(o)), r = Math.max(Math.min(-1 * Math.floor(a), 20), 0), l = {
      notation: n,
      minimumFractionDigits: r,
      maximumFractionDigits: r
    };
    return Object.assign(l, this.options.ticks.format), be(i, s, l);
  },
  logarithmic(i, t, e) {
    if (i === 0)
      return "0";
    const s = e[t].significand || i / Math.pow(10, Math.floor(xt(i)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(s) || t > 0.8 * e.length ? An.numeric.call(this, i, t, e) : "";
  }
};
function la(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var ei = {
  formatters: An
};
function ca(i) {
  i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: ei.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), i.describe("scales", {
    _fallback: "scale"
  }), i.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Et = /* @__PURE__ */ Object.create(null), yi = /* @__PURE__ */ Object.create(null);
function le(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function li(i, t, e) {
  return typeof t == "string" ? ce(le(i, t), e) : ce(le(i, ""), t);
}
class ha {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => ri(n.backgroundColor), this.hoverBorderColor = (s, n) => ri(n.borderColor), this.hoverColor = (s, n) => ri(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return li(this, t, e);
  }
  get(t) {
    return le(this, t);
  }
  describe(t, e) {
    return li(yi, t, e);
  }
  override(t, e) {
    return li(Et, t, e);
  }
  route(t, e, s, n) {
    const o = le(this, t), a = le(this, s), r = "_" + e;
    Object.defineProperties(o, {
      [r]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[r], c = a[n];
          return A(l) ? Object.assign({}, c, l) : D(l, c);
        },
        set(l) {
          this[r] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var j = /* @__PURE__ */ new ha({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  oa,
  aa,
  ca
]);
function da(i) {
  return !i || T(i.size) || T(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function qe(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function ua(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let a = 0;
  const r = e.length;
  let l, c, h, d, u;
  for (l = 0; l < r; l++)
    if (d = e[l], d != null && I(d) !== !0)
      a = qe(i, n, o, a, d);
    else if (I(d))
      for (c = 0, h = d.length; c < h; c++)
        u = d[c], u != null && !I(u) && (a = qe(i, n, o, a, u));
  i.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete n[o[l]];
    o.splice(0, f);
  }
  return a;
}
function Dt(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function cs(i, t) {
  t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore();
}
function vi(i, t, e, s) {
  Tn(i, t, e, s, null);
}
function Tn(i, t, e, s, n) {
  let o, a, r, l, c, h, d, u;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let m = (g || 0) * So;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(m), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (i.beginPath(), f) {
      default:
        n ? i.ellipse(e, s, n / 2, p, 0, 0, z) : i.arc(e, s, p, 0, z), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : p, i.moveTo(e + Math.sin(m) * h, s - Math.cos(m) * p), m += Gi, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p), m += Gi, i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p), i.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, a = Math.cos(m + Pt) * l, d = Math.cos(m + Pt) * (n ? n / 2 - c : l), r = Math.sin(m + Pt) * l, u = Math.sin(m + Pt) * (n ? n / 2 - c : l), i.arc(e - d, s - r, c, m - V, m - N), i.arc(e + u, s - a, c, m - N, m), i.arc(e + d, s + r, c, m, m + N), i.arc(e - u, s + a, c, m + N, m + V), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        m += Pt;
      case "rectRot":
        d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - r), i.lineTo(e + u, s - a), i.lineTo(e + d, s + r), i.lineTo(e - u, s + a), i.closePath();
        break;
      case "crossRot":
        m += Pt;
      case "cross":
        d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - r), i.lineTo(e + d, s + r), i.moveTo(e + u, s - a), i.lineTo(e - u, s + a);
        break;
      case "star":
        d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - r), i.lineTo(e + d, s + r), i.moveTo(e + u, s - a), i.lineTo(e - u, s + a), m += Pt, d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - d, s - r), i.lineTo(e + d, s + r), i.moveTo(e + u, s - a), i.lineTo(e - u, s + a);
        break;
      case "line":
        a = n ? n / 2 : Math.cos(m) * p, r = Math.sin(m) * p, i.moveTo(e - a, s - r), i.lineTo(e + a, s + r);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function de(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function ii(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function si(i) {
  i.restore();
}
function fa(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else
    n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function ga(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function Ft(i, t, e, s, n, o = {}) {
  const a = I(t) ? t : [
    t
  ], r = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, pa(i, o), l = 0; l < a.length; ++l)
    c = a[l], o.backdrop && ba(i, o.backdrop), r && (o.strokeColor && (i.strokeStyle = o.strokeColor), T(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), ma(i, e, s, c, o), s += n.lineHeight;
  i.restore();
}
function pa(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), T(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function ma(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), a = t - o.actualBoundingBoxLeft, r = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(a, h), i.lineTo(r, h), i.stroke();
  }
}
function ba(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function ue(i, t) {
  const { x: e, y: s, w: n, h: o, radius: a } = t;
  i.arc(e + a.topLeft, s + a.topLeft, a.topLeft, -N, V, !0), i.lineTo(e, s + o - a.bottomLeft), i.arc(e + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, V, N, !0), i.lineTo(e + n - a.bottomRight, s + o), i.arc(e + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, N, 0, !0), i.lineTo(e + n, s + a.topRight), i.arc(e + n - a.topRight, s + a.topRight, a.topRight, 0, -N, !0), i.lineTo(e + a.topLeft, s);
}
const xa = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, _a = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function ya(i, t) {
  const e = ("" + i).match(xa);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i = +e[2], e[3]) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const va = (i) => +i || 0;
function Wi(i, t) {
  const e = {}, s = A(t), n = s ? Object.keys(t) : t, o = A(i) ? s ? (a) => D(i[a], i[t[a]]) : (a) => i[a] : () => i;
  for (const a of n)
    e[a] = va(o(a));
  return e;
}
function Ln(i) {
  return Wi(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Lt(i) {
  return Wi(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function G(i) {
  const t = Ln(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function $(i, t) {
  i = i || {}, t = t || j.font;
  let e = D(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = D(i.style, t.style);
  s && !("" + s).match(_a) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: D(i.family, t.family),
    lineHeight: ya(D(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: D(i.weight, t.weight),
    string: ""
  };
  return n.string = da(n), n;
}
function ie(i, t, e, s) {
  let n = !0, o, a, r;
  for (o = 0, a = i.length; o < a; ++o)
    if (r = i[o], r !== void 0 && (t !== void 0 && typeof r == "function" && (r = r(t), n = !1), e !== void 0 && I(r) && (r = r[e % r.length], n = !1), r !== void 0))
      return s && !n && (s.cacheable = !1), r;
}
function Ma(i, t, e) {
  const { min: s, max: n } = i, o = pn(t, (n - s) / 2), a = (r, l) => e && r === 0 ? 0 : r + l;
  return {
    min: a(s, -Math.abs(o)),
    max: a(n, o)
  };
}
function St(i, t) {
  return Object.assign(Object.create(i), t);
}
function Ni(i, t = [
  ""
], e = i, s, n = () => i[0]) {
  st(s) || (s = In("_fallback", i));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: e,
    _fallback: s,
    _getTarget: n,
    override: (a) => Ni([
      a,
      ...i
    ], t, e, s)
  };
  return new Proxy(o, {
    deleteProperty(a, r) {
      return delete a[r], delete a._keys, delete i[0][r], !0;
    },
    get(a, r) {
      return En(a, r, () => Aa(r, t, i, a));
    },
    getOwnPropertyDescriptor(a, r) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(a, r) {
      return ds(a).includes(r);
    },
    ownKeys(a) {
      return ds(a);
    },
    set(a, r, l) {
      const c = a._storage || (a._storage = n());
      return a[r] = c[r] = l, delete a._keys, !0;
    }
  });
}
function $t(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Rn(i, s),
    setContext: (o) => $t(i, o, e, s),
    override: (o) => $t(i.override(o), t, e, s)
  };
  return new Proxy(n, {
    deleteProperty(o, a) {
      return delete o[a], delete i[a], !0;
    },
    get(o, a, r) {
      return En(o, a, () => wa(o, a, r));
    },
    getOwnPropertyDescriptor(o, a) {
      return o._descriptors.allKeys ? Reflect.has(i, a) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(i, a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(o, a) {
      return Reflect.has(i, a);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(o, a, r) {
      return i[a] = r, delete o[a], !0;
    }
  });
}
function Rn(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: wt(e) ? e : () => e,
    isIndexable: wt(s) ? s : () => s
  };
}
const ka = (i, t) => i ? i + Ri(t) : t, Hi = (i, t) => A(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function En(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t))
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function wa(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: a } = i;
  let r = s[t];
  return wt(r) && a.isScriptable(t) && (r = Sa(t, r, i, e)), I(r) && r.length && (r = Pa(t, r, i, a.isIndexable)), Hi(t, r) && (r = $t(r, n, o && o[t], a)), r;
}
function Sa(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: a, _stack: r } = e;
  if (r.has(i))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + i);
  return r.add(i), t = t(o, a || s), r.delete(i), Hi(i, t) && (t = ji(n._scopes, n, i, t)), t;
}
function Pa(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: a, _descriptors: r } = e;
  if (st(o.index) && s(i))
    t = t[o.index % t.length];
  else if (A(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = ji(c, n, i, h);
      t.push($t(d, o, a && a[i], r));
    }
  }
  return t;
}
function Fn(i, t, e) {
  return wt(i) ? i(t, e) : i;
}
const Da = (i, t) => i === !0 ? t : typeof i == "string" ? kt(t, i) : void 0;
function Ca(i, t, e, s, n) {
  for (const o of t) {
    const a = Da(e, o);
    if (a) {
      i.add(a);
      const r = Fn(a._fallback, e, n);
      if (st(r) && r !== e && r !== s)
        return r;
    } else if (a === !1 && st(s) && e !== s)
      return null;
  }
  return !1;
}
function ji(i, t, e, s) {
  const n = t._rootScopes, o = Fn(t._fallback, e, s), a = [
    ...i,
    ...n
  ], r = /* @__PURE__ */ new Set();
  r.add(s);
  let l = hs(r, a, e, o || e, s);
  return l === null || st(o) && o !== e && (l = hs(r, a, o, l, s), l === null) ? !1 : Ni(Array.from(r), [
    ""
  ], n, o, () => Oa(t, e, s));
}
function hs(i, t, e, s, n) {
  for (; e; )
    e = Ca(i, t, e, s, n);
  return e;
}
function Oa(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return I(n) && A(e) ? e : n || {};
}
function Aa(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = In(ka(o, i), e), st(n))
      return Hi(i, n) ? ji(e, s, i, n) : n;
}
function In(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (st(s))
      return s;
  }
}
function ds(i) {
  let t = i._keys;
  return t || (t = i._keys = Ta(i._scopes)), t;
}
function Ta(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function zn(i, t, e, s) {
  const { iScale: n } = i, { key: o = "r" } = this._parsing, a = new Array(s);
  let r, l, c, h;
  for (r = 0, l = s; r < l; ++r)
    c = r + e, h = t[c], a[r] = {
      r: n.parse(kt(h, o), c)
    };
  return a;
}
const La = Number.EPSILON || 1e-14, Yt = (i, t) => t < i.length && !i[t].skip && i[t], Bn = (i) => i === "x" ? "y" : "x";
function Ra(i, t, e, s) {
  const n = i.skip ? t : i, o = t, a = e.skip ? t : e, r = xi(o, n), l = xi(a, o);
  let c = r / (r + l), h = l / (r + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const d = s * c, u = s * h;
  return {
    previous: {
      x: o.x - d * (a.x - n.x),
      y: o.y - d * (a.y - n.y)
    },
    next: {
      x: o.x + u * (a.x - n.x),
      y: o.y + u * (a.y - n.y)
    }
  };
}
function Ea(i, t, e) {
  const s = i.length;
  let n, o, a, r, l, c = Yt(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = Yt(i, h + 1), !(!l || !c)) {
      if (re(t[h], 0, La)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], o = e[h + 1] / t[h], r = Math.pow(n, 2) + Math.pow(o, 2), !(r <= 9) && (a = 3 / Math.sqrt(r), e[h] = n * a * t[h], e[h + 1] = o * a * t[h]);
    }
}
function Fa(i, t, e = "x") {
  const s = Bn(e), n = i.length;
  let o, a, r, l = Yt(i, 0);
  for (let c = 0; c < n; ++c) {
    if (a = r, r = l, l = Yt(i, c + 1), !r)
      continue;
    const h = r[e], d = r[s];
    a && (o = (h - a[e]) / 3, r[`cp1${e}`] = h - o, r[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, r[`cp2${e}`] = h + o, r[`cp2${s}`] = d + o * t[c]);
  }
}
function Ia(i, t = "x") {
  const e = Bn(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let a, r, l, c = Yt(i, 0);
  for (a = 0; a < s; ++a)
    if (r = l, l = c, c = Yt(i, a + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[a] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[a] = r ? c ? ht(n[a - 1]) !== ht(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a];
    }
  Ea(i, n, o), Fa(i, o, t);
}
function we(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function za(i, t) {
  let e, s, n, o, a, r = de(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    a = o, o = r, r = e < s - 1 && de(i[e + 1], t), o && (n = i[e], a && (n.cp1x = we(n.cp1x, t.left, t.right), n.cp1y = we(n.cp1y, t.top, t.bottom)), r && (n.cp2x = we(n.cp2x, t.left, t.right), n.cp2y = we(n.cp2y, t.top, t.bottom)));
}
function Ba(i, t, e, s, n) {
  let o, a, r, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Ia(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, a = i.length; o < a; ++o)
      r = i[o], l = Ra(c, r, i[Math.min(o + 1, a - (s ? 0 : 1)) % a], t.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, c = r;
  }
  t.capBezierPoints && za(i, e);
}
function Vn() {
  return typeof window < "u" && typeof document < "u";
}
function $i(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Ge(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const ni = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Va(i, t) {
  return ni(i).getPropertyValue(t);
}
const Wa = [
  "top",
  "right",
  "bottom",
  "left"
];
function Rt(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = Wa[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Na = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Ha(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let a = !1, r, l;
  if (Na(n, o, i.target))
    r = n, l = o;
  else {
    const c = t.getBoundingClientRect();
    r = s.clientX - c.left, l = s.clientY - c.top, a = !0;
  }
  return {
    x: r,
    y: l,
    box: a
  };
}
function At(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = ni(e), o = n.boxSizing === "border-box", a = Rt(n, "padding"), r = Rt(n, "border", "width"), { x: l, y: c, box: h } = Ha(i, e), d = a.left + (h && r.left), u = a.top + (h && r.top);
  let { width: f, height: g } = t;
  return o && (f -= a.width + r.width, g -= a.height + r.height), {
    x: Math.round((l - d) / f * e.width / s),
    y: Math.round((c - u) / g * e.height / s)
  };
}
function ja(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = $i(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const a = o.getBoundingClientRect(), r = ni(o), l = Rt(r, "border", "width"), c = Rt(r, "padding");
      t = a.width - c.width - l.width, e = a.height - c.height - l.height, s = Ge(r.maxWidth, o, "clientWidth"), n = Ge(r.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Ue,
    maxHeight: n || Ue
  };
}
const Se = (i) => Math.round(i * 10) / 10;
function $a(i, t, e, s) {
  const n = ni(i), o = Rt(n, "margin"), a = Ge(n.maxWidth, i, "clientWidth") || Ue, r = Ge(n.maxHeight, i, "clientHeight") || Ue, l = ja(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const u = Rt(n, "border", "width"), f = Rt(n, "padding");
    c -= f.width + u.width, h -= f.height + u.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? Math.floor(c / s) : h - o.height), c = Se(Math.min(c, a, l.maxWidth)), h = Se(Math.min(h, r, l.maxHeight)), c && !h && (h = Se(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = Se(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function us(i, t, e) {
  const s = t || 1, n = Math.floor(i.height * s), o = Math.floor(i.width * s);
  i.height = n / s, i.width = o / s;
  const a = i.canvas;
  return a.style && (e || !a.style.height && !a.style.width) && (a.style.height = `${i.height}px`, a.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || a.height !== n || a.width !== o ? (i.currentDevicePixelRatio = s, a.height = n, a.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Ya = function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
  } catch {
  }
  return i;
}();
function fs(i, t) {
  const e = Va(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Tt(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Xa(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function Ua(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, a = Tt(i, n, e), r = Tt(n, o, e), l = Tt(o, t, e), c = Tt(a, r, e), h = Tt(r, l, e);
  return Tt(c, h, e);
}
const Ka = function(i, t) {
  return {
    x(e) {
      return i + i + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, s) {
      return e - s;
    },
    leftForLtr(e, s) {
      return e - s;
    }
  };
}, qa = function() {
  return {
    x(i) {
      return i;
    },
    setWidth(i) {
    },
    textAlign(i) {
      return i;
    },
    xPlus(i, t) {
      return i + t;
    },
    leftForLtr(i, t) {
      return i;
    }
  };
};
function Ht(i, t, e) {
  return i ? Ka(t, e) : qa();
}
function Wn(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Nn(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Hn(i) {
  return i === "angle" ? {
    between: he,
    compare: Co,
    normalize: et
  } : {
    between: pt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function gs({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function Ga(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: a, normalize: r } = Hn(s), l = t.length;
  let { start: c, end: h, loop: d } = i, u, f;
  if (d) {
    for (c += l, h += l, u = 0, f = l; u < f && a(r(t[c % l][s]), n, o); ++u)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: d,
    style: i.style
  };
}
function jn(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, a = t.length, { compare: r, between: l, normalize: c } = Hn(s), { start: h, end: d, loop: u, style: f } = Ga(i, t, e), g = [];
  let p = !1, m = null, b, x, y;
  const v = () => l(n, y, b) && r(n, y) !== 0, _ = () => r(o, b) === 0 || l(o, y, b), M = () => p || v(), k = () => !p || _();
  for (let w = h, P = h; w <= d; ++w)
    x = t[w % a], !x.skip && (b = c(x[s]), b !== y && (p = l(b, n, o), m === null && M() && (m = r(b, n) === 0 ? w : P), m !== null && k() && (g.push(gs({
      start: m,
      end: w,
      loop: u,
      count: a,
      style: f
    })), m = null), P = w, y = b));
  return m !== null && g.push(gs({
    start: m,
    end: d,
    loop: u,
    count: a,
    style: f
  })), g;
}
function $n(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = jn(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Za(i, t, e, s) {
  let n = 0, o = t - 1;
  if (e && !s)
    for (; n < t && !i[n].skip; )
      n++;
  for (; n < t && i[n].skip; )
    n++;
  for (n %= t, e && (o += n); o > n && i[o % t].skip; )
    o--;
  return o %= t, {
    start: n,
    end: o
  };
}
function Ja(i, t, e, s) {
  const n = i.length, o = [];
  let a = t, r = i[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % n];
    c.skip || c.stop ? r.skip || (s = !1, o.push({
      start: t % n,
      end: (l - 1) % n,
      loop: s
    }), t = a = c.stop ? l : null) : (a = l, r.skip && (t = l)), r = c;
  }
  return a !== null && o.push({
    start: t % n,
    end: a % n,
    loop: s
  }), o;
}
function Qa(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: a, end: r } = Za(e, n, o, s);
  if (s === !0)
    return ps(i, [
      {
        start: a,
        end: r,
        loop: o
      }
    ], e, t);
  const l = r < a ? r + n : r, c = !!i._fullLoop && a === 0 && r === n - 1;
  return ps(i, Ja(e, a, l, c), e, t);
}
function ps(i, t, e, s) {
  return !s || !s.setContext || !e ? t : tr(i, t, e, s);
}
function tr(i, t, e, s) {
  const n = i._chart.getContext(), o = ms(i.options), { _datasetIndex: a, options: { spanGaps: r } } = i, l = e.length, c = [];
  let h = o, d = t[0].start, u = d;
  function f(g, p, m, b) {
    const x = r ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= x;
      for (; e[p % l].skip; )
        p += x;
      g % l !== p % l && (c.push({
        start: g % l,
        end: p % l,
        loop: m,
        style: b
      }), h = b, d = p % l);
    }
  }
  for (const g of t) {
    d = r ? d : g.start;
    let p = e[d % l], m;
    for (u = d + 1; u <= g.end; u++) {
      const b = e[u % l];
      m = ms(s.setContext(St(n, {
        type: "segment",
        p0: p,
        p1: b,
        p0DataIndex: (u - 1) % l,
        p1DataIndex: u % l,
        datasetIndex: a
      }))), er(m, h) && f(d, u - 1, g.loop, h), p = b, h = m;
    }
    d < u - 1 && f(d, u - 1, g.loop, h);
  }
  return c;
}
function ms(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor
  };
}
function er(i, t) {
  return t && JSON.stringify(i) !== JSON.stringify(t);
}
/*!
 * Chart.js v4.0.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
class ir {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, s, n) {
    const o = e.listeners[n], a = e.duration;
    o.forEach((r) => r({
      chart: t,
      initial: e.initial,
      numSteps: a,
      currentStep: Math.min(s - e.start, a)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = vn.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let a = o.length - 1, r = !1, l;
      for (; a >= 0; --a)
        l = o[a], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), r = !0) : (o[a] = o[o.length - 1], o.pop());
      r && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let s = e.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, s)), s;
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    !e || (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const s = e.items;
    let n = s.length - 1;
    for (; n >= 0; --n)
      s[n].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var ut = /* @__PURE__ */ new ir();
const bs = "transparent", sr = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = rs(i || bs), n = s.valid && rs(t || bs);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class nr {
  constructor(t, e, s, n) {
    const o = e[s];
    n = ie([
      t.to,
      n,
      o,
      t.from
    ]);
    const a = ie([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || sr[t.type || typeof a], this._easing = is[t.easing] || is.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = a, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, a = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(a, t.duration)), this._total += o, this._loop = !!t.loop, this._to = ie([
        t.to,
        e,
        n,
        t.from
      ]), this._from = ie([
        t.from,
        n,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, s = this._duration, n = this._prop, o = this._from, a = this._loop, r = this._to;
    let l;
    if (this._active = o !== r && (a || e < s), !this._active) {
      this._target[n] = r, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = o;
      return;
    }
    l = e / s % 2, l = a && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, r, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({
        res: e,
        rej: s
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", s = this._promises || [];
    for (let n = 0; n < s.length; n++)
      s[n][e]();
  }
}
class Yn {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!A(t))
      return;
    const e = Object.keys(j.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!A(o))
        return;
      const a = {};
      for (const r of e)
        a[r] = o[r];
      (I(o.properties) && o.properties || [
        n
      ]).forEach((r) => {
        (r === n || !s.has(r)) && s.set(r, a);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = ar(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && or(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), a = Object.keys(e), r = Date.now();
    let l;
    for (l = a.length - 1; l >= 0; --l) {
      const c = a[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let d = o[c];
      const u = s.get(c);
      if (d)
        if (u && d.active()) {
          d.update(u, h, r);
          continue;
        } else
          d.cancel();
      if (!u || !u.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new nr(u, t, c, h), n.push(d);
    }
    return n;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length)
      return ut.add(this._chart, s), !0;
  }
}
function or(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function ar(i, t) {
  if (!t)
    return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return e.$shared && (i.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function xs(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function rr(i, t, e) {
  if (e === !1)
    return !1;
  const s = xs(i, e), n = xs(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function lr(i) {
  let t, e, s, n;
  return A(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Xn(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function _s(i, t, e, s = {}) {
  const n = i.keys, o = s.mode === "single";
  let a, r, l, c;
  if (t !== null) {
    for (a = 0, r = n.length; a < r; ++a) {
      if (l = +n[a], l === e) {
        if (s.all)
          continue;
        break;
      }
      c = i.values[l], W(c) && (o || t === 0 || ht(t) === ht(c)) && (t += c);
    }
    return t;
  }
}
function cr(i) {
  const t = Object.keys(i), e = new Array(t.length);
  let s, n, o;
  for (s = 0, n = t.length; s < n; ++s)
    o = t[s], e[s] = {
      x: o,
      y: i[o]
    };
  return e;
}
function ys(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function hr(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function dr(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function ur(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function vs(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function Ms(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: a, index: r } = s, l = o.axis, c = a.axis, h = hr(o, a, s), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const g = t[f], { [l]: p, [c]: m } = g, b = g._stacks || (g._stacks = {});
    u = b[c] = ur(n, h, p), u[r] = m, u._top = vs(u, a, !0, s.type), u._bottom = vs(u, a, !1, s.type);
  }
}
function ci(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function fr(i, t) {
  return St(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function gr(i, t, e) {
  return St(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Gt(i, t) {
  const e = i.controller.index, s = i.vScale && i.vScale.axis;
  if (!!s) {
    t = t || i._parsed;
    for (const n of t) {
      const o = n._stacks;
      if (!o || o[s] === void 0 || o[s][e] === void 0)
        return;
      delete o[s][e];
    }
  }
}
const hi = (i) => i === "reset" || i === "none", ks = (i, t) => t ? i : Object.assign({}, i), pr = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Xn(e, !0),
  values: null
};
class at {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = ys(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Gt(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, g) => d === "x" ? u : d === "r" ? g : f, o = e.xAxisID = D(s.xAxisID, ci(t, "x")), a = e.yAxisID = D(s.yAxisID, ci(t, "y")), r = e.rAxisID = D(s.rAxisID, ci(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, a, r), h = e.vAxisID = n(l, a, o, r);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Qi(this._data, this), t._stacked && Gt(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (A(e))
      this._data = cr(e);
    else if (s !== e) {
      if (s) {
        Qi(s, this);
        const n = this._cachedMeta;
        Gt(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Lo(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, s = this.getDataset();
    let n = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = ys(e.vScale, e), e.stack !== s.stack && (n = !0, Gt(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && Ms(this, e._parsed);
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: a } = s, r = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, u;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, u = n;
    else {
      I(n[t]) ? u = this.parseArrayData(s, n, t, e) : A(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
      const f = () => d[r] === null || c && d[r] < c[r];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
      s._sorted = l;
    }
    a && Ms(this, u);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: a } = t, r = o.axis, l = a.axis, c = o.getLabels(), h = o === a, d = new Array(n);
    let u, f, g;
    for (u = 0, f = n; u < f; ++u)
      g = u + s, d[u] = {
        [r]: h || o.parse(c[g], g),
        [l]: a.parse(e[g], g)
      };
    return d;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: a } = t, r = new Array(n);
    let l, c, h, d;
    for (l = 0, c = n; l < c; ++l)
      h = l + s, d = e[h], r[l] = {
        x: o.parse(d[0], h),
        y: a.parse(d[1], h)
      };
    return r;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let h, d, u, f;
    for (h = 0, d = n; h < d; ++h)
      u = h + s, f = e[u], c[h] = {
        x: o.parse(kt(f, r), u),
        y: a.parse(kt(f, l), u)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    const n = this.chart, o = this._cachedMeta, a = e[t.axis], r = {
      keys: Xn(n, !0),
      values: e._stacks[t.axis]
    };
    return _s(r, a, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let a = o === null ? NaN : o;
    const r = n && s._stacks[e.axis];
    n && r && (n.values = r, a = _s(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, a = n.length, r = this._getOtherScale(t), l = pr(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = dr(r);
    let u, f;
    function g() {
      f = n[u];
      const p = f[r.axis];
      return !W(f[t.axis]) || h > p || d < p;
    }
    for (u = 0; u < a && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u)
      ;
    if (o) {
      for (u = a - 1; u >= 0; --u)
        if (!g()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, s = [];
    let n, o, a;
    for (n = 0, o = e.length; n < o; ++n)
      a = e[n][t.axis], W(a) && s.push(a);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = lr(D(this.options.clip, rr(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, a = [], r = this._drawStart || 0, l = this._drawCount || n.length - r, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, o, r, l), h = r; h < r + l; ++h) {
      const d = n[h];
      d.hidden || (d.active && c ? a.push(d) : d.draw(t, o));
    }
    for (h = 0; h < a.length; ++h)
      a[h].draw(t, o);
  }
  getStyle(t, e) {
    const s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const n = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const a = this._cachedMeta.data[t];
      o = a.$context || (a.$context = gr(this.getContext(), t, a)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = fr(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, a = t + "-" + e, r = o[a], l = this.enableOptionSharing && st(s);
    if (r)
      return ks(r, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(j.elements[t]), g = () => this.getContext(s, n), p = c.resolveNamedOptions(u, f, g, d);
    return p.$shared && (p.$shared = l, o[a] = Object.freeze(ks(p, l))), p;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, o = this._cachedDataOpts, a = `animation-${e}`, r = o[a];
    if (r)
      return r;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), u = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(u, this.getContext(t, s, e));
    }
    const c = new Yn(n, l && l.animations);
    return l && l._cacheable && (o[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (!!t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || hi(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), a = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: a
    };
  }
  updateElement(t, e, s, n) {
    hi(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !hi(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, n) {
    t.active = n;
    const o = this.getStyle(e, n);
    this._resolveAnimations(e, s, n).update(t, {
      options: !n && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, s = this._cachedMeta.data;
    for (const [r, l, c] of this._syncList)
      this[r](l, c);
    this._syncList = [];
    const n = s.length, o = e.length, a = Math.min(o, n);
    a && this.parse(0, a), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, e, s = !0) {
    const n = this._cachedMeta, o = n.data, a = t + e;
    let r;
    const l = (c) => {
      for (c.length += e, r = c.length - 1; r >= a; r--)
        c[r] = c[r - e];
    };
    for (l(o), r = t; r < a; ++r)
      o[r] = new this.dataElementType();
    this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, s, n) {
  }
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const n = s._parsed.splice(t, e);
      s._stacked && Gt(s, n);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, s, n] = t;
      this[e](s, n);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const s = arguments.length - 2;
    s && this._sync([
      "_insertElements",
      t,
      s
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
S(at, "defaults", {}), S(at, "datasetElementType", null), S(at, "dataElementType", null);
function mr(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = yn(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function br(i) {
  const t = i.iScale, e = mr(t, i.type);
  let s = t._length, n, o, a, r;
  const l = () => {
    a === 32767 || a === -32768 || (st(r) && (s = Math.min(s, Math.abs(a - r) || s)), r = a);
  };
  for (n = 0, o = e.length; n < o; ++n)
    a = t.getPixelForValue(e[n]), l();
  for (r = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    a = t.getPixelForTick(n), l();
  return s;
}
function xr(i, t, e, s) {
  const n = e.barThickness;
  let o, a;
  return T(n) ? (o = t.min * e.categoryPercentage, a = e.barPercentage) : (o = n * s, a = 1), {
    chunk: o / s,
    ratio: a,
    start: t.pixels[i] - o / 2
  };
}
function _r(i, t, e, s) {
  const n = t.pixels, o = n[i];
  let a = i > 0 ? n[i - 1] : null, r = i < n.length - 1 ? n[i + 1] : null;
  const l = e.categoryPercentage;
  a === null && (a = o - (r === null ? t.end - t.start : r - o)), r === null && (r = o + o - a);
  const c = o - (o - Math.min(a, r)) / 2 * l;
  return {
    chunk: Math.abs(r - a) / 2 * l / s,
    ratio: e.barPercentage,
    start: c
  };
}
function yr(i, t, e, s) {
  const n = e.parse(i[0], s), o = e.parse(i[1], s), a = Math.min(n, o), r = Math.max(n, o);
  let l = a, c = r;
  Math.abs(a) > Math.abs(r) && (l = r, c = a), t[e.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: n,
    end: o,
    min: a,
    max: r
  };
}
function Un(i, t, e, s) {
  return I(i) ? yr(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function ws(i, t, e, s) {
  const n = i.iScale, o = i.vScale, a = n.getLabels(), r = n === o, l = [];
  let c, h, d, u;
  for (c = e, h = e + s; c < h; ++c)
    u = t[c], d = {}, d[n.axis] = r || n.parse(a[c], c), l.push(Un(u, d, o, c));
  return l;
}
function di(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function vr(i, t, e) {
  return i !== 0 ? ht(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Mr(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function kr(i, t, e, s) {
  let n = t.borderSkipped;
  const o = {};
  if (!n) {
    i.borderSkipped = o;
    return;
  }
  if (n === !0) {
    i.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: a, end: r, reverse: l, top: c, bottom: h } = Mr(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[Ss(h, a, r, l)] = !0, n = c)), o[Ss(n, a, r, l)] = !0, i.borderSkipped = o;
}
function Ss(i, t, e, s) {
  return s ? (i = wr(i, t, e), i = Ps(i, e, t)) : i = Ps(i, t, e), i;
}
function wr(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function Ps(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function Sr(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class Ee extends at {
  parsePrimitiveData(t, e, s, n) {
    return ws(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return ws(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const { iScale: o, vScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? r : l, h = a.axis === "x" ? r : l, d = [];
    let u, f, g, p;
    for (u = s, f = s + n; u < f; ++u)
      p = e[u], g = {}, g[o.axis] = o.parse(kt(p, c), u), d.push(Un(kt(p, h), g, a, u));
    return d;
  }
  updateRangeFromParsed(t, e, s, n) {
    super.updateRangeFromParsed(t, e, s, n);
    const o = s._custom;
    o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), a = o._custom, r = di(a) ? "[" + a.start + ", " + a.end + "]" : "" + n.getLabelForValue(o[n.axis]);
    return {
      label: "" + s.getLabelForValue(o[s.axis]),
      value: r
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { index: a, _cachedMeta: { vScale: r } } = this, l = r.getBasePixel(), c = r.isHorizontal(), h = this._getRuler(), { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n);
    for (let f = e; f < e + s; f++) {
      const g = this.getParsed(f), p = o || T(g[r.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, h), b = (g._stacks || {})[r.axis], x = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !b || di(g._custom) || a === b._top || a === b._bottom,
        x: c ? p.head : m.center,
        y: c ? m.center : p.head,
        height: c ? m.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : m.size
      };
      u && (x.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const y = x.options || t[f].options;
      kr(x, y, b, a), Sr(x, y, h.ratio), this.updateElement(t[f], f, x, n);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((l) => l.controller.options.grouped), o = s.options.stacked, a = [], r = (l) => {
      const c = l.controller.getParsed(e), h = c && c[l.vScale.axis];
      if (T(h) || isNaN(h))
        return !0;
    };
    for (const l of n)
      if (!(e !== void 0 && r(l)) && ((o === !1 || a.indexOf(l.stack) === -1 || o === void 0 && l.stack === void 0) && a.push(l.stack), l.index === t))
        break;
    return a.length || a.push(void 0), a;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, s) {
    const n = this._getStacks(t, s), o = e !== void 0 ? n.indexOf(e) : -1;
    return o === -1 ? n.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, s = e.iScale, n = [];
    let o, a;
    for (o = 0, a = e.data.length; o < a; ++o)
      n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
    const r = t.barThickness;
    return {
      min: r || br(e),
      pixels: n,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: r ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: s }, options: { base: n, minBarLength: o } } = this, a = n || 0, r = this.getParsed(t), l = r._custom, c = di(l);
    let h = r[e.axis], d = 0, u = s ? this.applyStack(e, r, s) : h, f, g;
    u !== h && (d = u - h, u = h), c && (h = l.barStart, u = l.barEnd - l.barStart, h !== 0 && ht(h) !== ht(l.barEnd) && (d = 0), d += h);
    const p = !T(n) && !c ? n : d;
    let m = e.getPixelForValue(p);
    if (this.chart.getDataVisibility(t) ? f = e.getPixelForValue(d + u) : f = m, g = f - m, Math.abs(g) < o) {
      g = vr(g, e, a) * o, h === a && (m -= g / 2);
      const b = e.getPixelForDecimal(0), x = e.getPixelForDecimal(1), y = Math.min(b, x), v = Math.max(b, x);
      m = Math.max(Math.min(m, v), y), f = m + g;
    }
    if (m === e.getPixelForValue(a)) {
      const b = ht(g) * e.getLineWidthForValue(a) / 2;
      m += b, g -= b;
    }
    return {
      size: g,
      base: m,
      head: f,
      center: f + g / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale, n = this.options, o = n.skipNull, a = D(n.maxBarThickness, 1 / 0);
    let r, l;
    if (e.grouped) {
      const c = o ? this._getStackCount(t) : e.stackCount, h = n.barThickness === "flex" ? _r(t, e, n, c) : xr(t, e, n, c), d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      r = h.start + h.chunk * d + h.chunk / 2, l = Math.min(a, h.chunk * h.ratio);
    } else
      r = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(a, e.min * e.ratio);
    return {
      base: r - l / 2,
      head: r + l / 2,
      center: r,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, s = t.data, n = s.length;
    let o = 0;
    for (; o < n; ++o)
      this.getParsed(o)[e.axis] !== null && s[o].draw(this._ctx);
  }
}
S(Ee, "id", "bar"), S(Ee, "defaults", {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
}), S(Ee, "overrides", {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
});
class Fe extends at {
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(t, e, s, n) {
    const o = super.parsePrimitiveData(t, e, s, n);
    for (let a = 0; a < o.length; a++)
      o[a]._custom = this.resolveDataElementOptions(a + s).radius;
    return o;
  }
  parseArrayData(t, e, s, n) {
    const o = super.parseArrayData(t, e, s, n);
    for (let a = 0; a < o.length; a++) {
      const r = e[s + a];
      o[a]._custom = D(r[2], this.resolveDataElementOptions(a + s).radius);
    }
    return o;
  }
  parseObjectData(t, e, s, n) {
    const o = super.parseObjectData(t, e, s, n);
    for (let a = 0; a < o.length; a++) {
      const r = e[s + a];
      o[a]._custom = D(r && r.r && +r.r, this.resolveDataElementOptions(a + s).radius);
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let s = t.length - 1; s >= 0; --s)
      e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart.data.labels || [], { xScale: n, yScale: o } = e, a = this.getParsed(t), r = n.getLabelForValue(a.x), l = o.getLabelForValue(a.y), c = a._custom;
    return {
      label: s[t] || "",
      value: "(" + r + ", " + l + (c ? ", " + c : "") + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: a, vScale: r } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, n), h = a.axis, d = r.axis;
    for (let u = e; u < e + s; u++) {
      const f = t[u], g = !o && this.getParsed(u), p = {}, m = p[h] = o ? a.getPixelForDecimal(0.5) : a.getPixelForValue(g[h]), b = p[d] = o ? r.getBasePixel() : r.getPixelForValue(g[d]);
      p.skip = isNaN(m) || isNaN(b), c && (p.options = l || this.resolveDataElementOptions(u, f.active ? "active" : n), o && (p.options.radius = 0)), this.updateElement(f, u, p, n);
    }
  }
  resolveDataElementOptions(t, e) {
    const s = this.getParsed(t);
    let n = super.resolveDataElementOptions(t, e);
    n.$shared && (n = Object.assign({}, n, {
      $shared: !1
    }));
    const o = n.radius;
    return e !== "active" && (n.radius = 0), n.radius += D(s && s._custom, o), n;
  }
}
S(Fe, "id", "bubble"), S(Fe, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "borderWidth",
        "radius"
      ]
    }
  }
}), S(Fe, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function Pr(i, t, e) {
  let s = 1, n = 1, o = 0, a = 0;
  if (t < z) {
    const r = i, l = r + t, c = Math.cos(r), h = Math.sin(r), d = Math.cos(l), u = Math.sin(l), f = (y, v, _) => he(y, r, l, !0) ? 1 : Math.max(v, v * e, _, _ * e), g = (y, v, _) => he(y, r, l, !0) ? -1 : Math.min(v, v * e, _, _ * e), p = f(0, c, d), m = f(N, h, u), b = g(V, c, d), x = g(V + N, h, u);
    s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, a = -(m + x) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: a
  };
}
class Nt extends at {
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const s = this.getDataset().data, n = this._cachedMeta;
    if (this._parsing === !1)
      n._parsed = s;
    else {
      let o = (l) => +s[l];
      if (A(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +kt(s[c], l);
      }
      let a, r;
      for (a = t, r = t + e; a < r; ++a)
        n._parsed[a] = o(a);
    }
  }
  _getRotation() {
    return ot(this.options.rotation - 90);
  }
  _getCircumference() {
    return ot(this.options.circumference);
  }
  _getRotationExtents() {
    let t = z, e = -z;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
        const n = this.chart.getDatasetMeta(s).controller, o = n._getRotation(), a = n._getCircumference();
        t = Math.min(t, o), e = Math.max(e, o + a);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, r = Math.max((Math.min(s.width, s.height) - a) / 2, 0), l = Math.min(xo(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: g, offsetY: p } = Pr(d, h, l), m = (s.width - a) / u, b = (s.height - a) / f, x = Math.max(Math.min(m, b) / 2, 0), y = pn(this.options.radius, x), v = Math.max(y * l, 0), _ = (y - v) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * y, this.offsetY = p * y, n.total = this.calculateTotal(), this.outerRadius = y - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / z);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", a = this.chart, r = a.chartArea, c = a.options.animation, h = (r.left + r.right) / 2, d = (r.top + r.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, g = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, n);
    let b = this._getRotation(), x;
    for (x = 0; x < e; ++x)
      b += this._circumference(x, o);
    for (x = e; x < e + s; ++x) {
      const y = this._circumference(x, o), v = t[x], _ = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: b,
        endAngle: b + y,
        circumference: y,
        outerRadius: g,
        innerRadius: f
      };
      m && (_.options = p || this.resolveDataElementOptions(x, v.active ? "active" : n)), b += y, this.updateElement(v, x, _, n);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let s = 0, n;
    for (n = 0; n < e.length; n++) {
      const o = t._parsed[n];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(o));
    }
    return s;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? z * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = be(e._parsed[t], s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const s = this.chart;
    let n, o, a, r, l;
    if (!t) {
      for (n = 0, o = s.data.datasets.length; n < o; ++n)
        if (s.isDatasetVisible(n)) {
          a = s.getDatasetMeta(n), t = a.data, r = a.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (n = 0, o = t.length; n < o; ++n)
      l = r.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let s = 0, n = t.length; s < n; ++s) {
      const o = this.resolveDataElementOptions(s);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(D(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
S(Nt, "id", "doughnut"), S(Nt, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), S(Nt, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing"
}), S(Nt, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const e = t.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: s, color: n } } = t.legend.options;
            return e.labels.map((o, a) => {
              const l = t.getDatasetMeta(0).controller.getStyle(a);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: n,
                lineWidth: l.borderWidth,
                pointStyle: s,
                hidden: !t.getDataVisibility(a),
                index: a
              };
            });
          }
          return [];
        }
      },
      onClick(t, e, s) {
        s.chart.toggleDataVisibility(e.index), s.chart.update();
      }
    }
  }
});
class Ie extends at {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: s, data: n = [], _dataset: o } = e, a = this.chart._animationsDisabled;
    let { start: r, count: l } = kn(e, n, a);
    this._drawStart = r, this._drawCount = l, wn(e) && (r = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !a,
      options: c
    }, t), this.updateElements(n, r, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: a, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), u = a.axis, f = r.axis, { spanGaps: g, segment: p } = this.options, m = jt(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || n === "none", x = e + s, y = t.length;
    let v = e > 0 && this.getParsed(e - 1);
    for (let _ = 0; _ < y; ++_) {
      const M = t[_], k = b ? M : {};
      if (_ < e || _ >= x) {
        k.skip = !0;
        continue;
      }
      const w = this.getParsed(_), P = T(w[f]), C = k[u] = a.getPixelForValue(w[u], _), O = k[f] = o || P ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, w, l) : w[f], _);
      k.skip = isNaN(C) || isNaN(O) || P, k.stop = _ > 0 && Math.abs(w[u] - v[u]) > m, p && (k.parsed = w, k.raw = c.data[_]), d && (k.options = h || this.resolveDataElementOptions(_, M.active ? "active" : n)), b || this.updateElement(M, _, k, n), v = w;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
    if (!n.length)
      return s;
    const o = n[0].size(this.resolveDataElementOptions(0)), a = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(s, o, a) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
S(Ie, "id", "line"), S(Ie, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), S(Ie, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class ze extends at {
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = be(e._parsed[t].r, s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, s, n) {
    return zn.bind(this)(t, e, s, n);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta, e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return t.data.forEach((s, n) => {
      const o = this.getParsed(n).r;
      !isNaN(o) && this.chart.getDataVisibility(n) && (o < e.min && (e.min = o), o > e.max && (e.max = o));
    }), e;
  }
  _updateRadius() {
    const t = this.chart, e = t.chartArea, s = t.options, n = Math.min(e.right - e.left, e.bottom - e.top), o = Math.max(n / 2, 0), a = Math.max(s.cutoutPercentage ? o / 100 * s.cutoutPercentage : 1, 0), r = (o - a) / t.getVisibleDatasetCount();
    this.outerRadius = o - r * this.index, this.innerRadius = this.outerRadius - r;
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", a = this.chart, l = a.options.animation, c = this._cachedMeta.rScale, h = c.xCenter, d = c.yCenter, u = c.getIndexAngle(0) - 0.5 * V;
    let f = u, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, n, p);
    for (g = e; g < e + s; g++) {
      const m = t[g];
      let b = f, x = f + this._computeAngle(g, n, p), y = a.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = x, o && (l.animateScale && (y = 0), l.animateRotate && (b = x = u));
      const v = {
        x: h,
        y: d,
        innerRadius: 0,
        outerRadius: y,
        startAngle: b,
        endAngle: x,
        options: this.resolveDataElementOptions(g, m.active ? "active" : n)
      };
      this.updateElement(m, g, v, n);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return t.data.forEach((s, n) => {
      !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
    }), e;
  }
  _computeAngle(t, e, s) {
    return this.chart.getDataVisibility(t) ? ot(this.resolveDataElementOptions(t, e).angle || s) : 0;
  }
}
S(ze, "id", "polarArea"), S(ze, "defaults", {
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !0
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius"
      ]
    }
  },
  indexAxis: "r",
  startAngle: 0
}), S(ze, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const e = t.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: s, color: n } } = t.legend.options;
            return e.labels.map((o, a) => {
              const l = t.getDatasetMeta(0).controller.getStyle(a);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: n,
                lineWidth: l.borderWidth,
                pointStyle: s,
                hidden: !t.getDataVisibility(a),
                index: a
              };
            });
          }
          return [];
        }
      },
      onClick(t, e, s) {
        s.chart.toggleDataVisibility(e.index), s.chart.update();
      }
    }
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      beginAtZero: !0,
      grid: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      startAngle: 0
    }
  }
});
class Mi extends Nt {
}
S(Mi, "id", "pie"), S(Mi, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class Be extends at {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale, s = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(s[e.axis])
    };
  }
  parseObjectData(t, e, s, n) {
    return zn.bind(this)(t, e, s, n);
  }
  update(t) {
    const e = this._cachedMeta, s = e.dataset, n = e.data || [], o = e.iScale.getLabels();
    if (s.points = n, t !== "resize") {
      const a = this.resolveDatasetElementOptions(t);
      this.options.showLine || (a.borderWidth = 0);
      const r = {
        _loop: !0,
        _fullLoop: o.length === n.length,
        options: a
      };
      this.updateElement(s, void 0, r, t);
    }
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, e, s, n) {
    const o = this._cachedMeta.rScale, a = n === "reset";
    for (let r = e; r < e + s; r++) {
      const l = t[r], c = this.resolveDataElementOptions(r, l.active ? "active" : n), h = o.getPointPositionForValue(r, this.getParsed(r).r), d = a ? o.xCenter : h.x, u = a ? o.yCenter : h.y, f = {
        x: d,
        y: u,
        angle: h.angle,
        skip: isNaN(d) || isNaN(u),
        options: c
      };
      this.updateElement(l, r, f, n);
    }
  }
}
S(Be, "id", "radar"), S(Be, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), S(Be, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class Ve extends at {
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart.data.labels || [], { xScale: n, yScale: o } = e, a = this.getParsed(t), r = n.getLabelForValue(a.x), l = o.getLabelForValue(a.y);
    return {
      label: s[t] || "",
      value: "(" + r + ", " + l + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta, { data: s = [] } = e, n = this.chart._animationsDisabled;
    let { start: o, count: a } = kn(e, s, n);
    if (this._drawStart = o, this._drawCount = a, wn(e) && (o = 0, a = s.length), this.options.showLine) {
      const { dataset: r, _dataset: l } = e;
      r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!l._decimated, r.points = s;
      const c = this.resolveDatasetElementOptions(t);
      c.segment = this.options.segment, this.updateElement(r, void 0, {
        animated: !n,
        options: c
      }, t);
    }
    this.updateElements(s, o, a, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: a, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, h = this.resolveDataElementOptions(e, n), d = this.getSharedOptions(h), u = this.includeOptions(n, d), f = a.axis, g = r.axis, { spanGaps: p, segment: m } = this.options, b = jt(p) ? p : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || n === "none";
    let y = e > 0 && this.getParsed(e - 1);
    for (let v = e; v < e + s; ++v) {
      const _ = t[v], M = this.getParsed(v), k = x ? _ : {}, w = T(M[g]), P = k[f] = a.getPixelForValue(M[f], v), C = k[g] = o || w ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, M, l) : M[g], v);
      k.skip = isNaN(P) || isNaN(C) || w, k.stop = v > 0 && Math.abs(M[f] - y[f]) > b, m && (k.parsed = M, k.raw = c.data[v]), u && (k.options = d || this.resolveDataElementOptions(v, _.active ? "active" : n)), x || this.updateElement(_, v, k, n), y = M;
    }
    this.updateSharedOptions(d, n, h);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.data || [];
    if (!this.options.showLine) {
      let r = 0;
      for (let l = e.length - 1; l >= 0; --l)
        r = Math.max(r, e[l].size(this.resolveDataElementOptions(l)) / 2);
      return r > 0 && r;
    }
    const s = t.dataset, n = s.options && s.options.borderWidth || 0;
    if (!e.length)
      return n;
    const o = e[0].size(this.resolveDataElementOptions(0)), a = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(n, o, a) / 2;
  }
}
S(Ve, "id", "scatter"), S(Ve, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), S(Ve, "overrides", {
  interaction: {
    mode: "point"
  },
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
var Dr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: Ee,
  BubbleController: Fe,
  DoughnutController: Nt,
  LineController: Ie,
  PolarAreaController: ze,
  PieController: Mi,
  RadarController: Be,
  ScatterController: Ve
});
function Ct() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Yi {
  static override(t) {
    Object.assign(Yi.prototype, t);
  }
  constructor(t) {
    this.options = t || {};
  }
  init() {
  }
  formats() {
    return Ct();
  }
  parse() {
    return Ct();
  }
  format() {
    return Ct();
  }
  add() {
    return Ct();
  }
  diff() {
    return Ct();
  }
  startOf() {
    return Ct();
  }
  endOf() {
    return Ct();
  }
}
var Cr = {
  _date: Yi
};
function Or(i, t, e, s) {
  const { controller: n, data: o, _sorted: a } = i, r = n._cachedMeta.iScale;
  if (r && t === r.axis && t !== "r" && a && o.length) {
    const l = r._reversePixels ? Ao : mt;
    if (s) {
      if (n._sharedOptions) {
        const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const d = l(o, t, e - h), u = l(o, t, e + h);
          return {
            lo: d.lo,
            hi: u.hi
          };
        }
      }
    } else
      return l(o, t, e);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function xe(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), a = e[t];
  for (let r = 0, l = o.length; r < l; ++r) {
    const { index: c, data: h } = o[r], { lo: d, hi: u } = Or(o[r], t, a, n);
    for (let f = d; f <= u; ++f) {
      const g = h[f];
      g.skip || s(g, c, f);
    }
  }
}
function Ar(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, a = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
  };
}
function ui(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || xe(i, e, t, function(r, l, c) {
    !n && !de(r, i.chartArea, 0) || r.inRange(t.x, t.y, s) && o.push({
      element: r,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Tr(i, t, e, s) {
  let n = [];
  function o(a, r, l) {
    const { startAngle: c, endAngle: h } = a.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = xn(a, {
      x: t.x,
      y: t.y
    });
    he(d, c, h) && n.push({
      element: a,
      datasetIndex: r,
      index: l
    });
  }
  return xe(i, e, t, o), n;
}
function Lr(i, t, e, s, n, o) {
  let a = [];
  const r = Ar(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, u) {
    const f = h.inRange(t.x, t.y, n);
    if (s && !f)
      return;
    const g = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(g)) && !f)
      return;
    const m = r(t, g);
    m < l ? (a = [
      {
        element: h,
        datasetIndex: d,
        index: u
      }
    ], l = m) : m === l && a.push({
      element: h,
      datasetIndex: d,
      index: u
    });
  }
  return xe(i, e, t, c), a;
}
function fi(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? Tr(i, t, e, n) : Lr(i, t, e, s, n, o);
}
function Ds(i, t, e, s, n) {
  const o = [], a = e === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return xe(i, e, t, (l, c, h) => {
    l[a](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), r = r || l.inRange(t.x, t.y, n));
  }), s && !r ? [] : o;
}
var Rr = {
  evaluateInteractionItems: xe,
  modes: {
    index(i, t, e, s) {
      const n = At(t, i), o = e.axis || "x", a = e.includeInvisible || !1, r = e.intersect ? ui(i, n, o, s, a) : fi(i, n, o, !1, s, a), l = [];
      return r.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = r[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = At(t, i), o = e.axis || "xy", a = e.includeInvisible || !1;
      let r = e.intersect ? ui(i, n, o, s, a) : fi(i, n, o, !1, s, a);
      if (r.length > 0) {
        const l = r[0].datasetIndex, c = i.getDatasetMeta(l).data;
        r = [];
        for (let h = 0; h < c.length; ++h)
          r.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return r;
    },
    point(i, t, e, s) {
      const n = At(t, i), o = e.axis || "xy", a = e.includeInvisible || !1;
      return ui(i, n, o, s, a);
    },
    nearest(i, t, e, s) {
      const n = At(t, i), o = e.axis || "xy", a = e.includeInvisible || !1;
      return fi(i, n, o, e.intersect, s, a);
    },
    x(i, t, e, s) {
      const n = At(t, i);
      return Ds(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = At(t, i);
      return Ds(i, n, "y", e.intersect, s);
    }
  }
};
const Kn = [
  "left",
  "top",
  "right",
  "bottom"
];
function Zt(i, t) {
  return i.filter((e) => e.pos === t);
}
function Cs(i, t) {
  return i.filter((e) => Kn.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Jt(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function Er(i) {
  const t = [];
  let e, s, n, o, a, r;
  for (e = 0, s = (i || []).length; e < s; ++e)
    n = i[e], { position: o, options: { stack: a, stackWeight: r = 1 } } = n, t.push({
      index: e,
      box: n,
      pos: o,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: a && o + a,
      stackWeight: r
    });
  return t;
}
function Fr(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !Kn.includes(n))
      continue;
    const a = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    a.count++, a.weight += o;
  }
  return t;
}
function Ir(i, t) {
  const e = Fr(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, a, r;
  for (o = 0, a = i.length; o < a; ++o) {
    r = i[o];
    const { fullSize: l } = r.box, c = e[r.stack], h = c && r.stackWeight / c.weight;
    r.horizontal ? (r.width = h ? h * s : l && t.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function zr(i) {
  const t = Er(i), e = Jt(t.filter((c) => c.box.fullSize), !0), s = Jt(Zt(t, "left"), !0), n = Jt(Zt(t, "right")), o = Jt(Zt(t, "top"), !0), a = Jt(Zt(t, "bottom")), r = Cs(t, "x"), l = Cs(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(a).concat(r),
    chartArea: Zt(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(a).concat(r)
  };
}
function Os(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function qn(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Br(i, t, e, s) {
  const { pos: n, box: o } = e, a = i.maxPadding;
  if (!A(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && qn(a, o.getPadding());
  const r = Math.max(0, t.outerWidth - Os(a, i, "left", "right")), l = Math.max(0, t.outerHeight - Os(a, i, "top", "bottom")), c = r !== i.w, h = l !== i.h;
  return i.w = r, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function Vr(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function Wr(i, t) {
  const e = t.maxPadding;
  function s(n) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((a) => {
      o[a] = Math.max(t[a], e[a]);
    }), o;
  }
  return s(i ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function se(i, t, e, s) {
  const n = [];
  let o, a, r, l, c, h;
  for (o = 0, a = i.length, c = 0; o < a; ++o) {
    r = i[o], l = r.box, l.update(r.width || t.w, r.height || t.h, Wr(r.horizontal, t));
    const { same: d, other: u } = Br(t, e, r, s);
    c |= d && n.length, h = h || u, l.fullSize || n.push(r);
  }
  return c && se(n, t, e, s) || h;
}
function Pe(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function As(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: a } = t;
  for (const r of i) {
    const l = r.box, c = s[r.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, h = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const d = t.w * h, u = c.size || l.height;
      st(c.start) && (a = c.start), l.fullSize ? Pe(l, n.left, a, e.outerWidth - n.right - n.left, u) : Pe(l, t.left + c.placed, a, d, u), c.start = a, c.placed += d, a = l.bottom;
    } else {
      const d = t.h * h, u = c.size || l.width;
      st(c.start) && (o = c.start), l.fullSize ? Pe(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : Pe(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = a;
}
var q = {
  addBox(i, t) {
    i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i, t, e, s) {
    if (!i)
      return;
    const n = G(i.options.layout.padding), o = Math.max(t - n.width, 0), a = Math.max(e - n.height, 0), r = zr(i.boxes), l = r.vertical, c = r.horizontal;
    R(i.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h = l.reduce((p, m) => m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: a,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: a / 2
    }), u = Object.assign({}, n);
    qn(u, G(s));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: a,
      x: n.left,
      y: n.top
    }, n), g = Ir(l.concat(c), d);
    se(r.fullSize, f, d, g), se(l, f, d, g), se(c, f, d, g) && se(l, f, d, g), Vr(f), As(r.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, As(r.rightAndBottom, f, d, g), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, R(r.chartArea, (p) => {
      const m = p.box;
      Object.assign(m, i.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Gn {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, s) {
  }
  removeEventListener(t, e, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, n) {
    return e = Math.max(0, e || t.width), s = s || t.height, {
      width: e,
      height: Math.max(0, n ? Math.floor(e / n) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Nr extends Gn {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const We = "$chartjs", Hr = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Ts = (i) => i === null || i === "";
function jr(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[We] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Ts(n)) {
    const o = fs(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Ts(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = fs(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Zn = Ya ? {
  passive: !0
} : !1;
function $r(i, t, e) {
  i.addEventListener(t, e, Zn);
}
function Yr(i, t, e) {
  i.canvas.removeEventListener(t, e, Zn);
}
function Xr(i, t) {
  const e = Hr[i.type] || i.type, { x: s, y: n } = At(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function Ze(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function Ur(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || Ze(r.addedNodes, s), a = a && !Ze(r.removedNodes, s);
    a && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function Kr(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || Ze(r.removedNodes, s), a = a && !Ze(r.addedNodes, s);
    a && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const fe = /* @__PURE__ */ new Map();
let Ls = 0;
function Jn() {
  const i = window.devicePixelRatio;
  i !== Ls && (Ls = i, fe.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function qr(i, t) {
  fe.size || window.addEventListener("resize", Jn), fe.set(i, t);
}
function Gr(i) {
  fe.delete(i), fe.size || window.removeEventListener("resize", Jn);
}
function Zr(i, t, e) {
  const s = i.canvas, n = s && $i(s);
  if (!n)
    return;
  const o = Mn((r, l) => {
    const c = n.clientWidth;
    e(r, l), c < n.clientWidth && e();
  }, window), a = new ResizeObserver((r) => {
    const l = r[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return a.observe(n), qr(i, o), a;
}
function gi(i, t, e) {
  e && e.disconnect(), t === "resize" && Gr(i);
}
function Jr(i, t, e) {
  const s = i.canvas, n = Mn((o) => {
    i.ctx !== null && e(Xr(o, i));
  }, i);
  return $r(s, t, n), n;
}
class Qr extends Gn {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (jr(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[We])
      return !1;
    const s = e[We].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const a = s[o];
      T(a) ? e.removeAttribute(o) : e.setAttribute(o, a);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[We], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), a = {
      attach: Ur,
      detach: Kr,
      resize: Zr
    }[e] || Jr;
    n[e] = a(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: gi,
      detach: gi,
      resize: gi
    }[e] || Yr)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return $a(t, e, s, n);
  }
  isAttached(t) {
    const e = $i(t);
    return !!(e && e.isConnected);
  }
}
function tl(i) {
  return !Vn() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Nr : Qr;
}
class rt {
  constructor() {
    S(this, "active", !1);
  }
  tooltipPosition(t) {
    const { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  hasValue() {
    return jt(this.x) && jt(this.y);
  }
  getProps(t, e) {
    const s = this.$animations;
    if (!e || !s)
      return this;
    const n = {};
    return t.forEach((o) => {
      n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
    }), n;
  }
}
S(rt, "defaults", {}), S(rt, "defaultRoutes");
function el(i, t) {
  const e = i.options.ticks, s = il(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? nl(t) : [], a = o.length, r = o[0], l = o[a - 1], c = [];
  if (a > n)
    return ol(t, c, o, a / n), c;
  const h = sl(o, t, n);
  if (a > 0) {
    let d, u;
    const f = a > 1 ? Math.round((l - r) / (a - 1)) : null;
    for (De(t, c, h, T(f) ? 0 : r - f, r), d = 0, u = a - 1; d < u; d++)
      De(t, c, h, o[d], o[d + 1]);
    return De(t, c, h, l, T(f) ? t.length : l + f), c;
  }
  return De(t, c, h), c;
}
function il(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function sl(i, t, e) {
  const s = al(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = Po(s);
  for (let a = 0, r = o.length - 1; a < r; a++) {
    const l = o[a];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function nl(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function ol(i, t, e, s) {
  let n = 0, o = e[0], a;
  for (s = Math.ceil(s), a = 0; a < i.length; a++)
    a === o && (t.push(i[a]), n++, o = e[n * s]);
}
function De(i, t, e, s, n) {
  const o = D(s, 0), a = Math.min(D(n, i.length), i.length);
  let r = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    r++, h = Math.round(o + r * e);
  for (c = Math.max(o, 0); c < a; c++)
    c === h && (t.push(i[c]), r++, h = Math.round(o + r * e));
}
function al(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const rl = (i) => i === "left" ? "right" : i === "right" ? "left" : i, Rs = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e;
function Es(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function ll(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, a = i._endPixel, r = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, a - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - r || l > a + r)))
    return l;
}
function cl(i, t) {
  R(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function Qt(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function Fs(i, t) {
  if (!i.display)
    return 0;
  const e = $(i.font, t), s = G(i.padding);
  return (I(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function hl(i, t) {
  return St(i, {
    scale: t,
    type: "scale"
  });
}
function dl(i, t, e) {
  return St(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function ul(i, t, e) {
  let s = Ii(i);
  return (e && t !== "right" || !e && t === "right") && (s = rl(s)), s;
}
function fl(i, t, e, s) {
  const { top: n, left: o, bottom: a, right: r, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, u, f, g;
  const p = a - n, m = r - o;
  if (i.isHorizontal()) {
    if (f = K(s, o, r), A(e)) {
      const b = Object.keys(e)[0], x = e[b];
      g = h[b].getPixelForValue(x) + p - t;
    } else
      e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = Rs(i, e, t);
    u = r - o;
  } else {
    if (A(e)) {
      const b = Object.keys(e)[0], x = e[b];
      f = h[b].getPixelForValue(x) - m + t;
    } else
      e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Rs(i, e, t);
    g = K(s, a, n), d = e === "left" ? -N : N;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: u,
    rotation: d
  };
}
class It extends rt {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
    return t = tt(t, Number.POSITIVE_INFINITY), e = tt(e, Number.NEGATIVE_INFINITY), s = tt(s, Number.POSITIVE_INFINITY), n = tt(n, Number.NEGATIVE_INFINITY), {
      min: tt(t, s),
      max: tt(e, n),
      minDefined: W(t),
      maxDefined: W(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), a;
    if (n && o)
      return {
        min: e,
        max: s
      };
    const r = this.getMatchingVisibleMetas();
    for (let l = 0, c = r.length; l < c; ++l)
      a = r[l].controller.getMinMax(this, t), n || (e = Math.min(e, a.min)), o || (s = Math.max(s, a.max));
    return e = o && e > s ? s : e, s = n && e > s ? e : s, {
      min: tt(e, tt(s, e)),
      max: tt(s, tt(e, s))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    F(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, s) {
    const { beginAtZero: n, grace: o, ticks: a } = this.options, r = a.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Ma(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = r < this.ticks.length;
    this._convertTicksToLabels(l ? Es(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = el(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    F(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    F(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    F(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), F(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    F(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = F(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    F(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    F(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = this.ticks.length, n = e.minRotation || 0, o = e.maxRotation;
    let a = n, r, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = Y(this.chart.width - d, 0, this.maxWidth);
    r = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > r && (r = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Qt(t.grid) - e.padding - Fs(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), a = Ei(Math.min(Math.asin(Y((h.highest.height + 6) / r, -1, 1)), Math.asin(Y(l / c, -1, 1)) - Math.asin(Y(u / c, -1, 1)))), a = Math.max(n, Math.min(o, a))), this.labelRotation = a;
  }
  afterCalculateLabelRotation() {
    F(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    F(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, a = this._isVisible(), r = this.isHorizontal();
    if (a) {
      const l = Fs(n, e.options.font);
      if (r ? (t.width = this.maxWidth, t.height = Qt(o) + l) : (t.height = this.maxHeight, t.width = Qt(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = s.padding * 2, g = ot(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
        if (r) {
          const b = s.mirror ? 0 : m * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          const b = s.mirror ? 0 : p * d.width + m * u.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(c, h, m, p);
      }
    }
    this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const { ticks: { align: o, padding: a }, position: r } = this.options, l = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h + a) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + a) * this.width / (this.width - d), 0);
    } else {
      let h = e.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + a, this.paddingBottom = d + a;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    F(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, s;
    for (e = 0, s = t.length; e < s; e++)
      T(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = Es(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length);
    }
    return t;
  }
  _computeLabelSizes(t, e) {
    const { ctx: s, _longestTextCache: n } = this, o = [], a = [];
    let r = 0, l = 0, c, h, d, u, f, g, p, m, b, x, y;
    for (c = 0; c < e; ++c) {
      if (u = t[c].label, f = this._resolveTickFontOptions(c), s.font = g = f.string, p = n[g] = n[g] || {
        data: {},
        gc: []
      }, m = f.lineHeight, b = x = 0, !T(u) && !I(u))
        b = qe(s, p.data, p.gc, b, u), x = m;
      else if (I(u))
        for (h = 0, d = u.length; h < d; ++h)
          y = u[h], !T(y) && !I(y) && (b = qe(s, p.data, p.gc, b, y), x += m);
      o.push(b), a.push(x), r = Math.max(b, r), l = Math.max(x, l);
    }
    cl(n, e);
    const v = o.indexOf(r), _ = a.indexOf(l), M = (k) => ({
      width: o[k] || 0,
      height: a[k] || 0
    });
    return {
      first: M(0),
      last: M(e - 1),
      widest: M(v),
      highest: M(_),
      widths: o,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return Oo(this._alignToPixels ? Dt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return s.$context || (s.$context = dl(this.getContext(), t, s));
    }
    return this.$context || (this.$context = hl(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = ot(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), a = t.autoSkipPadding || 0, r = o ? o.widest.width + a : 0, l = o ? o.highest.height + a : 0;
    return this.isHorizontal() ? l * s > r * n ? r / s : l / n : l * n < r * s ? l / s : r / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: a, border: r } = n, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), u = Qt(o), f = [], g = r.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, b = function(B) {
      return Dt(s, B, p);
    };
    let x, y, v, _, M, k, w, P, C, O, L, X;
    if (a === "top")
      x = b(this.bottom), k = this.bottom - u, P = x - m, O = b(t.top) + m, X = t.bottom;
    else if (a === "bottom")
      x = b(this.top), O = t.top, X = b(t.bottom) - m, k = x + m, P = this.top + u;
    else if (a === "left")
      x = b(this.right), M = this.right - u, w = x - m, C = b(t.left) + m, L = t.right;
    else if (a === "right")
      x = b(this.left), C = t.left, L = b(t.right) - m, M = x + m, w = this.left + u;
    else if (e === "x") {
      if (a === "center")
        x = b((t.top + t.bottom) / 2 + 0.5);
      else if (A(a)) {
        const B = Object.keys(a)[0], H = a[B];
        x = b(this.chart.scales[B].getPixelForValue(H));
      }
      O = t.top, X = t.bottom, k = x + m, P = k + u;
    } else if (e === "y") {
      if (a === "center")
        x = b((t.left + t.right) / 2);
      else if (A(a)) {
        const B = Object.keys(a)[0], H = a[B];
        x = b(this.chart.scales[B].getPixelForValue(H));
      }
      M = x - m, w = M - u, C = t.left, L = t.right;
    }
    const Q = D(n.ticks.maxTicksLimit, d), E = Math.max(1, Math.ceil(d / Q));
    for (y = 0; y < d; y += E) {
      const B = this.getContext(y), H = o.setContext(B), nt = r.setContext(B), U = H.lineWidth, zt = H.color, _e = nt.dash || [], Bt = nt.dashOffset, Xt = H.tickWidth, Ut = H.tickColor, Kt = H.tickBorderDash || [], qt = H.tickBorderDashOffset;
      v = ll(this, y, l), v !== void 0 && (_ = Dt(s, v, U), c ? M = w = C = L = _ : k = P = O = X = _, f.push({
        tx1: M,
        ty1: k,
        tx2: w,
        ty2: P,
        x1: C,
        y1: O,
        x2: L,
        y2: X,
        width: U,
        color: zt,
        borderDash: _e,
        borderDashOffset: Bt,
        tickWidth: Xt,
        tickColor: Ut,
        tickBorderDash: Kt,
        tickBorderDashOffset: qt
      }));
    }
    return this._ticksLength = d, this._borderValue = x, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, a = this.isHorizontal(), r = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = Qt(s.grid), f = u + h, g = d ? -h : f, p = -ot(this.labelRotation), m = [];
    let b, x, y, v, _, M, k, w, P, C, O, L, X = "middle";
    if (n === "top")
      M = this.bottom - g, k = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      M = this.top + g, k = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const E = this._getYAxisLabelAlignment(u);
      k = E.textAlign, _ = E.x;
    } else if (n === "right") {
      const E = this._getYAxisLabelAlignment(u);
      k = E.textAlign, _ = E.x;
    } else if (e === "x") {
      if (n === "center")
        M = (t.top + t.bottom) / 2 + f;
      else if (A(n)) {
        const E = Object.keys(n)[0], B = n[E];
        M = this.chart.scales[E].getPixelForValue(B) + f;
      }
      k = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        _ = (t.left + t.right) / 2 - f;
      else if (A(n)) {
        const E = Object.keys(n)[0], B = n[E];
        _ = this.chart.scales[E].getPixelForValue(B);
      }
      k = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? X = "top" : l === "end" && (X = "bottom"));
    const Q = this._getLabelSizes();
    for (b = 0, x = r.length; b < x; ++b) {
      y = r[b], v = y.label;
      const E = o.setContext(this.getContext(b));
      w = this.getPixelForTick(b) + o.labelOffset, P = this._resolveTickFontOptions(b), C = P.lineHeight, O = I(v) ? v.length : 1;
      const B = O / 2, H = E.color, nt = E.textStrokeColor, U = E.textStrokeWidth;
      let zt = k;
      a ? (_ = w, k === "inner" && (b === x - 1 ? zt = this.options.reverse ? "left" : "right" : b === 0 ? zt = this.options.reverse ? "right" : "left" : zt = "center"), n === "top" ? c === "near" || p !== 0 ? L = -O * C + C / 2 : c === "center" ? L = -Q.highest.height / 2 - B * C + C : L = -Q.highest.height + C / 2 : c === "near" || p !== 0 ? L = C / 2 : c === "center" ? L = Q.highest.height / 2 - B * C : L = Q.highest.height - O * C, d && (L *= -1), p !== 0 && !E.showLabelBackdrop && (_ += C / 2 * Math.sin(p))) : (M = w, L = (1 - O) * C / 2);
      let _e;
      if (E.showLabelBackdrop) {
        const Bt = G(E.backdropPadding), Xt = Q.heights[b], Ut = Q.widths[b];
        let Kt = L - Bt.top, qt = 0 - Bt.left;
        switch (X) {
          case "middle":
            Kt -= Xt / 2;
            break;
          case "bottom":
            Kt -= Xt;
            break;
        }
        switch (k) {
          case "center":
            qt -= Ut / 2;
            break;
          case "right":
            qt -= Ut;
            break;
        }
        _e = {
          left: qt,
          top: Kt,
          width: Ut + Bt.width,
          height: Xt + Bt.height,
          color: E.backdropColor
        };
      }
      m.push({
        rotation: p,
        label: v,
        font: P,
        color: H,
        strokeColor: nt,
        strokeWidth: U,
        textOffset: L,
        textAlign: zt,
        textBaseline: X,
        translation: [
          _,
          M
        ],
        backdrop: _e
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-ot(this.labelRotation))
      return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, a = this._getLabelSizes(), r = t + o, l = a.widest.width;
    let c, h;
    return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - r, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + r, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: a } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, a), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const n = this.ticks.findIndex((o) => o.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, a;
    const r = (l, c, h) => {
      !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (e.display)
      for (o = 0, a = n.length; o < a; ++o) {
        const l = n[o];
        e.drawOnChartArea && r({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && r({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: s, grid: n } } = this, o = s.setContext(this.getContext()), a = s.display ? o.width : 0;
    if (!a)
      return;
    const r = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, d, u;
    this.isHorizontal() ? (c = Dt(t, this.left, a) - a / 2, h = Dt(t, this.right, r) + r / 2, d = u = l) : (d = Dt(t, this.top, a) - a / 2, u = Dt(t, this.bottom, r) + r / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, u), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && ii(s, n);
    const o = this._labelItems || (this._labelItems = this._computeLabelItems(t));
    let a, r;
    for (a = 0, r = o.length; a < r; ++a) {
      const l = o[a], c = l.font, h = l.label;
      let d = l.textOffset;
      Ft(s, h, 0, d, c, l);
    }
    n && si(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = $(s.font), a = G(s.padding), r = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || A(e) ? (l += a.bottom, I(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += a.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: u } = fl(this, l, e, r);
    Ft(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: u,
      textAlign: ul(r, e, n),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    !this._isVisible() || (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = D(t.grid && t.grid.z, -1), n = D(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== It.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: s,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: n,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
    let o, a;
    for (o = 0, a = e.length; o < a; ++o) {
      const r = e[o];
      r[s] === this.id && (!t || r.type === t) && n.push(r);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return $(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Ce {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    ml(e) && (s = this.register(e));
    const n = this.items, o = t.id, a = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, gl(t, a, s), this.override && j.override(t.id, t.overrides)), a;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in j[n] && (delete j[n][s], this.override && delete Et[s]);
  }
}
function gl(i, t, e) {
  const s = ce(/* @__PURE__ */ Object.create(null), [
    e ? j.get(e) : {},
    j.get(t),
    i.defaults
  ]);
  j.set(t, s), i.defaultRoutes && pl(t, i.defaultRoutes), i.descriptors && j.describe(t, i.descriptors);
}
function pl(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), a = t[e].split("."), r = a.pop(), l = a.join(".");
    j.route(o, n, l, r);
  });
}
function ml(i) {
  return "id" in i && "defaults" in i;
}
class bl {
  constructor() {
    this.controllers = new Ce(at, "datasets", !0), this.elements = new Ce(rt, "elements"), this.plugins = new Ce(Object, "plugins"), this.scales = new Ce(It, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, s) {
    [
      ...e
    ].forEach((n) => {
      const o = s || this._getRegistryForType(n);
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : R(n, (a) => {
        const r = s || this._getRegistryForType(a);
        this._exec(t, r, a);
      });
    });
  }
  _exec(t, e, s) {
    const n = Ri(t);
    F(s["before" + n], [], s), e[t](s), F(s["after" + n], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const s = this._typedRegistries[e];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    const n = e.get(t);
    if (n === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return n;
  }
}
var ct = /* @__PURE__ */ new bl();
class xl {
  constructor() {
    this._init = [];
  }
  notify(t, e, s, n) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), a = this._notify(o, t, e, s);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), a;
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (const o of t) {
      const a = o.plugin, r = a[s], l = [
        e,
        n,
        o.options
      ];
      if (F(r, l, a) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    T(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = D(s.options && s.options.plugins, {}), o = _l(s);
    return n === !1 && !e ? [] : vl(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, a) => o.filter((r) => !a.some((l) => r.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function _l(i) {
  const t = {}, e = [], s = Object.keys(ct.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(ct.getPlugin(s[o]));
  const n = i.plugins || [];
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    e.indexOf(a) === -1 && (e.push(a), t[a.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function yl(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function vl(i, { plugins: t, localIds: e }, s, n) {
  const o = [], a = i.getContext();
  for (const r of t) {
    const l = r.id, c = yl(s[l], n);
    c !== null && o.push({
      plugin: r,
      options: Ml(i.config, {
        plugin: r,
        local: e[l]
      }, c, a)
    });
  }
  return o;
}
function Ml(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), a = i.getOptionScopes(s, o);
  return e && t.defaults && a.push(t.defaults), i.createResolver(a, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function ki(i, t) {
  const e = j.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function kl(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function wl(i, t) {
  return i === t ? "_index_" : "_value_";
}
function Sl(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function Je(i, t) {
  if (i === "x" || i === "y" || i === "r" || (i = t.axis || Sl(t.position) || i.length > 1 && Je(i[0].toLowerCase(), t), i))
    return i;
  throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
}
function Pl(i, t) {
  const e = Et[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = ki(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((a) => {
    const r = s[a];
    if (!A(r))
      return console.error(`Invalid scale configuration for scale: ${a}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
    const l = Je(a, r), c = wl(l, n), h = e.scales || {};
    o[a] = ae(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      r,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((a) => {
    const r = a.type || i.type, l = a.indexAxis || ki(r, t), h = (Et[r] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const u = kl(d, l), f = a[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), ae(o[f], [
        {
          axis: u
        },
        s[f],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((a) => {
    const r = o[a];
    ae(r, [
      j.scales[r.type],
      j.scale
    ]);
  }), o;
}
function Qn(i) {
  const t = i.options || (i.options = {});
  t.plugins = D(t.plugins, {}), t.scales = Pl(i, t);
}
function to(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function Dl(i) {
  return i = i || {}, i.data = to(i.data), Qn(i), i;
}
const Is = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new Set();
function Oe(i, t) {
  let e = Is.get(i);
  return e || (e = t(), Is.set(i, e), eo.add(e)), e;
}
const te = (i, t, e) => {
  const s = kt(t, e);
  s !== void 0 && i.add(s);
};
class Cl {
  constructor(t) {
    this._config = Dl(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = to(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Qn(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Oe(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Oe(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Oe(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, s = this.type;
    return Oe(`${s}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const s = this._scopeCache;
    let n = s.get(t);
    return (!n || e) && (n = /* @__PURE__ */ new Map(), s.set(t, n)), n;
  }
  getOptionScopes(t, e, s) {
    const { options: n, type: o } = this, a = this._cachedScopes(t, s), r = a.get(e);
    if (r)
      return r;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => te(l, t, d))), h.forEach((d) => te(l, n, d)), h.forEach((d) => te(l, Et[o] || {}, d)), h.forEach((d) => te(l, j, d)), h.forEach((d) => te(l, yi, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), eo.has(e) && a.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Et[e] || {},
      j.datasets[e] || {},
      {
        type: e
      },
      j,
      yi
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: a, subPrefixes: r } = zs(this._resolverCache, t, n);
    let l = a;
    if (Al(a, e)) {
      o.$shared = !1, s = wt(s) ? s() : s;
      const c = this.createResolver(t, s, r);
      l = $t(a, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = zs(this._resolverCache, t, s);
    return A(e) ? $t(o, e, void 0, n) : o;
  }
}
function zs(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: Ni(t, e),
    subPrefixes: e.filter((r) => !r.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const Ol = (i) => A(i) && Object.getOwnPropertyNames(i).reduce((t, e) => t || wt(i[e]), !1);
function Al(i, t) {
  const { isScriptable: e, isIndexable: s } = Rn(i);
  for (const n of t) {
    const o = e(n), a = s(n), r = (a || o) && i[n];
    if (o && (wt(r) || Ol(r)) || a && I(r))
      return !0;
  }
  return !1;
}
var Tl = "4.0.1";
const Ll = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Bs(i, t) {
  return i === "top" || i === "bottom" || Ll.indexOf(i) === -1 && t === "x";
}
function Vs(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function Ws(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), F(e && e.onComplete, [
    i
  ], t);
}
function Rl(i) {
  const t = i.chart, e = t.options.animation;
  F(e && e.onProgress, [
    i
  ], t);
}
function io(i) {
  return Vn() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Ne = {}, Ns = (i) => {
  const t = io(i);
  return Object.values(Ne).filter((e) => e.canvas === t).pop();
};
function El(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const a = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = a);
    }
  }
}
function Fl(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
function Il(i) {
  const { xScale: t, yScale: e } = i;
  if (t && e)
    return {
      left: t.left,
      right: t.right,
      top: e.top,
      bottom: e.bottom
    };
}
class bt {
  static register(...t) {
    ct.add(...t), Hs();
  }
  static unregister(...t) {
    ct.remove(...t), Hs();
  }
  constructor(t, e) {
    const s = this.config = new Cl(e), n = io(t), o = Ns(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const a = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || tl(n))(), this.platform.updateConfig(s);
    const r = this.platform.acquireContext(n, a.aspectRatio), l = r && r.canvas, c = l && l.height, h = l && l.width;
    if (this.id = bo(), this.ctx = r, this.canvas = l, this.width = h, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new xl(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Ro((d) => this.update(d), a.resizeDelay || 0), this._dataChanges = [], Ne[this.id] = this, !r || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    ut.listen(this, "complete", Ws), ut.listen(this, "progress", Rl), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return T(t) ? e && o ? o : n ? s / n : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return ct;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : us(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return cs(this.canvas, this.ctx), this;
  }
  stop() {
    return ut.stop(this), this;
  }
  resize(t, e) {
    ut.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, a = this.platform.getMaximumSize(n, t, e, o), r = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, us(this, r, !0) && (this.notifyPlugins("resize", {
      size: a
    }), F(s.onResize, [
      this,
      a
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    R(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((a, r) => (a[r] = !1, a), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((a) => {
      const r = e[a], l = Je(a, r), c = l === "r", h = l === "x";
      return {
        options: r,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), R(o, (a) => {
      const r = a.options, l = r.id, c = Je(l, r), h = D(r.type, a.dtype);
      (r.position === void 0 || Bs(r.position, c) !== Bs(a.dposition)) && (r.position = a.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const u = ct.getScale(h);
        d = new u({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(r, t);
    }), R(n, (a, r) => {
      a || delete s[r];
    }), R(s, (a) => {
      q.configure(this, a, a.options), q.addBox(this, a);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(Vs("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((s, n) => {
      e.filter((o) => o === s._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let s, n;
    for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
      const o = e[s];
      let a = this.getDatasetMeta(s);
      const r = o.type || this.config.type;
      if (a.type && a.type !== r && (this._destroyDatasetMeta(s), a = this.getDatasetMeta(s)), a.type = r, a.indexAxis = o.indexAxis || ki(r, this.options), a.order = o.order || 0, a.index = s, a.label = "" + o.label, a.visible = this.isDatasetVisible(s), a.controller)
        a.controller.updateIndex(s), a.controller.linkScales();
      else {
        const l = ct.getController(r), { datasetElementType: c, dataElementType: h } = j.datasets[r];
        Object.assign(l, {
          dataElementType: ct.getElement(h),
          datasetElementType: c && ct.getElement(c)
        }), a.controller = new l(this, s), t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    R(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let a = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), u = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(u), a = Math.max(+d.getMaxOverflow(), a);
    }
    a = this._minPadding = s.layout.autoPadding ? a : 0, this._updateLayout(a), n || R(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Vs("z", "_idx"));
    const { _active: r, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
  }
  _updateScales() {
    R(this.scales, (t) => {
      q.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!qi(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const a = s === "_removeElements" ? -o : o;
      El(t, n, a);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((a) => a[0] === o).map((a, r) => r + "," + a.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!qi(n, s(o)))
        return;
    return Array.from(n).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    q.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], R(this.boxes, (n) => {
      s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, o) => {
      n._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this._updateDataset(e, wt(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const s = this.getDatasetMeta(t), n = {
      meta: s,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (ut.has(this) ? this.attached && !ut.running(this) && ut.start(this) : (this.draw(), Ws({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: n } = this._resizeBeforeDraw;
      this._resize(s, n), this._resizeBeforeDraw = null;
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, s = [];
    let n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      const a = e[n];
      (!t || a.visible) && s.push(a);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, s = t._clip, n = !s.disabled, o = Il(t) || this.chartArea, a = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", a) !== !1 && (n && ii(e, {
      left: s.left === !1 ? 0 : o.left - s.left,
      right: s.right === !1 ? this.width : o.right + s.right,
      top: s.top === !1 ? 0 : o.top - s.top,
      bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
    }), t.controller.draw(), n && si(e), a.cancelable = !1, this.notifyPlugins("afterDatasetDraw", a));
  }
  isPointInArea(t) {
    return de(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = Rr.modes[e];
    return typeof o == "function" ? o(this, t, s, n) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], s = this._metasets;
    let n = s.filter((o) => o && o._dataset === e).pop();
    return n || (n = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, s.push(n)), n;
  }
  getContext() {
    return this.$context || (this.$context = St(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    const n = s ? "show" : "hide", o = this.getDatasetMeta(t), a = o.controller._resolveAnimations(void 0, n);
    st(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), a.update(o, {
      visible: s
    }), this.update((r) => r.datasetIndex === t ? n : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), ut.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), cs(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Ne[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, s = (o, a) => {
      e.addEventListener(this, o, a), t[o] = a;
    }, n = (o, a, r) => {
      o.offsetX = a, o.offsetY = r, this._eventHandler(o);
    };
    R(this.options.events, (o) => s(o, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, s = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, n = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let a;
    const r = () => {
      n("attach", r), this.attached = !0, this.resize(), s("resize", o), s("detach", a);
    };
    a = () => {
      this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", r);
    }, e.isAttached(this.canvas) ? r() : a();
  }
  unbindEvents() {
    R(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, R(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, s) {
    const n = s ? "set" : "remove";
    let o, a, r, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), r = 0, l = t.length; r < l; ++r) {
      a = t[r];
      const c = a && this.getDatasetMeta(a.datasetIndex).controller;
      c && c[n + "HoverStyle"](a.element, a.datasetIndex, a.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], s = t.map(({ datasetIndex: o, index: a }) => {
      const r = this.getDatasetMeta(o);
      if (!r)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: r.data[a],
        index: a
      };
    });
    !Ye(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), a = o(e, t), r = s ? t : o(t, e);
    a.length && this.updateHoverStyle(a, n.mode, !1), r.length && n.mode && this.updateHoverStyle(r, n.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, n = (a) => (a.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === !1)
      return;
    const o = this._handleEvent(t, e, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, e, s) {
    const { _active: n = [], options: o } = this, a = e, r = this._getActiveElements(t, n, s, a), l = ko(t), c = Fl(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, F(o.onHover, [
      t,
      r,
      this
    ], this), l && F(o.onClick, [
      t,
      r,
      this
    ], this));
    const h = !Ye(r, n);
    return (h || e) && (this._active = r, this._updateHoverStyles(r, n, e)), this._lastEvent = c, h;
  }
  _getActiveElements(t, e, s, n) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, n);
  }
}
S(bt, "defaults", j), S(bt, "instances", Ne), S(bt, "overrides", Et), S(bt, "registry", ct), S(bt, "version", Tl), S(bt, "getChart", Ns);
function Hs() {
  return R(bt.instances, (i) => i._plugins.invalidate());
}
var zl = bt;
function Bl(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: a, outerRadius: r, innerRadius: l } = t;
  let c = n / r;
  i.beginPath(), i.arc(o, a, r, s - c, e + c), l > n ? (c = n / l, i.arc(o, a, l, e + c, s - c, !0)) : i.arc(o, a, n, e + N, s - N), i.closePath(), i.clip();
}
function Vl(i) {
  return Wi(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Wl(i, t, e, s) {
  const n = Vl(i.options.borderRadius), o = (e - t) / 2, a = Math.min(o, s * t / 2), r = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return Y(l, 0, Math.min(o, c));
  };
  return {
    outerStart: r(n.outerStart),
    outerEnd: r(n.outerEnd),
    innerStart: Y(n.innerStart, 0, a),
    innerEnd: Y(n.innerEnd, 0, a)
  };
}
function Wt(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function Qe(i, t, e, s, n, o) {
  const { x: a, y: r, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + e - c, 0), u = h > 0 ? h + s + e + c : 0;
  let f = 0;
  const g = n - l;
  if (s) {
    const E = h > 0 ? h - s : 0, B = d > 0 ? d - s : 0, H = (E + B) / 2, nt = H !== 0 ? g * H / (H + s) : g;
    f = (g - nt) / 2;
  }
  const p = Math.max(1e-3, g * d - e / V) / d, m = (g - p) / 2, b = l + m + f, x = n - m - f, { outerStart: y, outerEnd: v, innerStart: _, innerEnd: M } = Wl(t, u, d, x - b), k = d - y, w = d - v, P = b + y / k, C = x - v / w, O = u + _, L = u + M, X = b + _ / O, Q = x - M / L;
  if (i.beginPath(), o) {
    const E = (P + C) / 2;
    if (i.arc(a, r, d, P, E), i.arc(a, r, d, E, C), v > 0) {
      const U = Wt(w, C, a, r);
      i.arc(U.x, U.y, v, C, x + N);
    }
    const B = Wt(L, x, a, r);
    if (i.lineTo(B.x, B.y), M > 0) {
      const U = Wt(L, Q, a, r);
      i.arc(U.x, U.y, M, x + N, Q + Math.PI);
    }
    const H = (x - M / u + (b + _ / u)) / 2;
    if (i.arc(a, r, u, x - M / u, H, !0), i.arc(a, r, u, H, b + _ / u, !0), _ > 0) {
      const U = Wt(O, X, a, r);
      i.arc(U.x, U.y, _, X + Math.PI, b - N);
    }
    const nt = Wt(k, b, a, r);
    if (i.lineTo(nt.x, nt.y), y > 0) {
      const U = Wt(k, P, a, r);
      i.arc(U.x, U.y, y, b - N, P);
    }
  } else {
    i.moveTo(a, r);
    const E = Math.cos(P) * d + a, B = Math.sin(P) * d + r;
    i.lineTo(E, B);
    const H = Math.cos(C) * d + a, nt = Math.sin(C) * d + r;
    i.lineTo(H, nt);
  }
  i.closePath();
}
function Nl(i, t, e, s, n) {
  const { fullCircles: o, startAngle: a, circumference: r } = t;
  let l = t.endAngle;
  if (o) {
    Qe(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(r) || (l = a + (r % z || z));
  }
  return Qe(i, t, e, s, l, n), i.fill(), l;
}
function Hl(i, t, e, s, n) {
  const { fullCircles: o, startAngle: a, circumference: r, options: l } = t, { borderWidth: c, borderJoinStyle: h } = l, d = l.borderAlign === "inner";
  if (!c)
    return;
  d ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
  let u = t.endAngle;
  if (o) {
    Qe(i, t, e, s, u, n);
    for (let f = 0; f < o; ++f)
      i.stroke();
    isNaN(r) || (u = a + (r % z || z));
  }
  d && Bl(i, t, u), o || (Qe(i, t, e, s, u, n), i.stroke());
}
class He extends rt {
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.getProps([
      "x",
      "y"
    ], s), { angle: o, distance: a } = xn(n, {
      x: t,
      y: e
    }), { startAngle: r, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), u = this.options.spacing / 2, g = D(d, l - r) >= z || he(o, r, l), p = pt(a, c + u, h + u);
    return g && p;
  }
  getCenterPoint(t) {
    const { x: e, y: s, startAngle: n, endAngle: o, innerRadius: a, outerRadius: r } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], t), { offset: l, spacing: c } = this.options, h = (n + o) / 2, d = (a + r + c + l) / 2;
    return {
      x: e + Math.cos(h) * d,
      y: s + Math.sin(h) * d
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: s } = this, n = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, a = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > z ? Math.floor(s / z) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const r = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(r) * n, Math.sin(r) * n);
    const l = 1 - Math.sin(Math.min(V, s || 0)), c = n * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Nl(t, this, c, o, a), Hl(t, this, c, o, a), t.restore();
  }
}
S(He, "id", "arc"), S(He, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), S(He, "defaultRoutes", {
  backgroundColor: "backgroundColor"
});
function so(i, t, e = t) {
  i.lineCap = D(e.borderCapStyle, t.borderCapStyle), i.setLineDash(D(e.borderDash, t.borderDash)), i.lineDashOffset = D(e.borderDashOffset, t.borderDashOffset), i.lineJoin = D(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = D(e.borderWidth, t.borderWidth), i.strokeStyle = D(e.borderColor, t.borderColor);
}
function jl(i, t, e) {
  i.lineTo(e.x, e.y);
}
function $l(i) {
  return i.stepped ? fa : i.tension || i.cubicInterpolationMode === "monotone" ? ga : jl;
}
function no(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: a, end: r } = t, l = Math.max(n, a), c = Math.min(o, r), h = n < a && o < a || n > r && o > r;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function Yl(i, t, e, s) {
  const { points: n, options: o } = t, { count: a, start: r, loop: l, ilen: c } = no(n, e, s), h = $l(o);
  let { move: d = !0, reverse: u } = s || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = n[(r + (u ? c - f : f)) % a], !g.skip && (d ? (i.moveTo(g.x, g.y), d = !1) : h(i, p, g, u, o.stepped), p = g);
  return l && (g = n[(r + (u ? c : 0)) % a], h(i, p, g, u, o.stepped)), !!l;
}
function Xl(i, t, e, s) {
  const n = t.points, { count: o, start: a, ilen: r } = no(n, e, s), { move: l = !0, reverse: c } = s || {};
  let h = 0, d = 0, u, f, g, p, m, b;
  const x = (v) => (a + (c ? r - v : v)) % o, y = () => {
    p !== m && (i.lineTo(h, m), i.lineTo(h, p), i.lineTo(h, b));
  };
  for (l && (f = n[x(0)], i.moveTo(f.x, f.y)), u = 0; u <= r; ++u) {
    if (f = n[x(u)], f.skip)
      continue;
    const v = f.x, _ = f.y, M = v | 0;
    M === g ? (_ < p ? p = _ : _ > m && (m = _), h = (d * h + v) / ++d) : (y(), i.lineTo(v, _), g = M, d = 0, p = m = _), b = _;
  }
  y();
}
function wi(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Xl : Yl;
}
function Ul(i) {
  return i.stepped ? Xa : i.tension || i.cubicInterpolationMode === "monotone" ? Ua : Tt;
}
function Kl(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), so(i, t.options), i.stroke(n);
}
function ql(i, t, e, s) {
  const { segments: n, options: o } = t, a = wi(t);
  for (const r of n)
    so(i, o, r.style), i.beginPath(), a(i, t, r, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Gl = typeof Path2D == "function";
function Zl(i, t, e, s) {
  Gl && !t.options.segment ? Kl(i, t, e, s) : ql(i, t, e, s);
}
class yt extends rt {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const n = s.spanGaps ? this._loop : this._fullLoop;
      Ba(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Qa(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, s = t.length;
    return s && e[t[s - 1].end];
  }
  interpolate(t, e) {
    const s = this.options, n = t[e], o = this.points, a = $n(this, {
      property: e,
      start: n,
      end: n
    });
    if (!a.length)
      return;
    const r = [], l = Ul(s);
    let c, h;
    for (c = 0, h = a.length; c < h; ++c) {
      const { start: d, end: u } = a[c], f = o[d], g = o[u];
      if (f === g) {
        r.push(f);
        continue;
      }
      const p = Math.abs((n - f[e]) / (g[e] - f[e])), m = l(f, g, p, s.stepped);
      m[e] = t[e], r.push(m);
    }
    return r.length === 1 ? r[0] : r;
  }
  pathSegment(t, e, s) {
    return wi(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = wi(this);
    let a = this._loop;
    e = e || 0, s = s || this.points.length - e;
    for (const r of n)
      a &= o(t, this, r, {
        start: e,
        end: e + s - 1
      });
    return !!a;
  }
  draw(t, e, s, n) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Zl(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
S(yt, "id", "line"), S(yt, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), S(yt, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), S(yt, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function js(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class je extends rt {
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.options, { x: o, y: a } = this.getProps([
      "x",
      "y"
    ], s);
    return Math.pow(t - o, 2) + Math.pow(e - a, 2) < Math.pow(n.hitRadius + n.radius, 2);
  }
  inXRange(t, e) {
    return js(this, t, "x", e);
  }
  inYRange(t, e) {
    return js(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    const s = e && t.borderWidth || 0;
    return (e + s) * 2;
  }
  draw(t, e) {
    const s = this.options;
    this.skip || s.radius < 0.1 || !de(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, vi(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
S(je, "id", "point"), S(je, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), S(je, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function oo(i, t) {
  const { x: e, y: s, base: n, width: o, height: a } = i.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let r, l, c, h, d;
  return i.horizontal ? (d = a / 2, r = Math.min(e, n), l = Math.max(e, n), c = s - d, h = s + d) : (d = o / 2, r = e - d, l = e + d, c = Math.min(s, n), h = Math.max(s, n)), {
    left: r,
    top: c,
    right: l,
    bottom: h
  };
}
function vt(i, t, e, s) {
  return i ? 0 : Y(t, e, s);
}
function Jl(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = Ln(s);
  return {
    t: vt(n.top, o.top, 0, e),
    r: vt(n.right, o.right, 0, t),
    b: vt(n.bottom, o.bottom, 0, e),
    l: vt(n.left, o.left, 0, t)
  };
}
function Ql(i, t, e) {
  const { enableBorderRadius: s } = i.getProps([
    "enableBorderRadius"
  ]), n = i.options.borderRadius, o = Lt(n), a = Math.min(t, e), r = i.borderSkipped, l = s || A(n);
  return {
    topLeft: vt(!l || r.top || r.left, o.topLeft, 0, a),
    topRight: vt(!l || r.top || r.right, o.topRight, 0, a),
    bottomLeft: vt(!l || r.bottom || r.left, o.bottomLeft, 0, a),
    bottomRight: vt(!l || r.bottom || r.right, o.bottomRight, 0, a)
  };
}
function tc(i) {
  const t = oo(i), e = t.right - t.left, s = t.bottom - t.top, n = Jl(i, e / 2, s / 2), o = Ql(i, e / 2, s / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: s,
      radius: o
    },
    inner: {
      x: t.left + n.l,
      y: t.top + n.t,
      w: e - n.l - n.r,
      h: s - n.t - n.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r))
      }
    }
  };
}
function pi(i, t, e, s) {
  const n = t === null, o = e === null, r = i && !(n && o) && oo(i, s);
  return r && (n || pt(t, r.left, r.right)) && (o || pt(e, r.top, r.bottom));
}
function ec(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function ic(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function mi(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, a = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i.x + s,
    y: i.y + n,
    w: i.w + o,
    h: i.h + a,
    radius: i.radius
  };
}
class $e extends rt {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: a } = tc(this), r = ec(a.radius) ? ue : ic;
    t.save(), (a.w !== o.w || a.h !== o.h) && (t.beginPath(), r(t, mi(a, e, o)), t.clip(), r(t, mi(o, -e, a)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), r(t, mi(o, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return pi(this, t, e, s);
  }
  inXRange(t, e) {
    return pi(this, t, null, e);
  }
  inYRange(t, e) {
    return pi(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: s, base: n, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (e + n) / 2 : e,
      y: o ? s : (s + n) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
S($e, "id", "bar"), S($e, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), S($e, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
var sc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: He,
  LineElement: yt,
  PointElement: je,
  BarElement: $e
});
const Si = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
], $s = /* @__PURE__ */ Si.map((i) => i.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function ao(i) {
  return Si[i % Si.length];
}
function ro(i) {
  return $s[i % $s.length];
}
function nc() {
  return (i, t) => {
    i.borderColor = ao(t), i.backgroundColor = ro(t);
  };
}
function oc() {
  let i = 0;
  return (t) => {
    t.backgroundColor = t.data.map(() => ao(i++));
  };
}
function ac() {
  let i = 0;
  return (t) => {
    t.backgroundColor = t.data.map(() => ro(i++));
  };
}
function rc(i) {
  return i === "doughnut" || i === "pie" ? oc() : i === "polarArea" ? ac() : nc();
}
function Ys(i) {
  let t;
  for (t in i)
    if (i[t].borderColor || i[t].backgroundColor)
      return !0;
  return !1;
}
var lc = {
  id: "colors",
  defaults: {
    enabled: !0
  },
  beforeLayout(i, t, e) {
    if (!e.enabled)
      return;
    const { type: s, options: { elements: n }, data: { datasets: o } } = i.config;
    if (Ys(o) || n && Ys(n))
      return;
    const a = rc(s);
    o.forEach(a);
  }
};
function cc(i, t, e, s, n) {
  const o = n.samples || s;
  if (o >= e)
    return i.slice(t, t + e);
  const a = [], r = (e - 2) / (o - 2);
  let l = 0;
  const c = t + e - 1;
  let h = t, d, u, f, g, p;
  for (a[l++] = i[h], d = 0; d < o - 2; d++) {
    let m = 0, b = 0, x;
    const y = Math.floor((d + 1) * r) + 1 + t, v = Math.min(Math.floor((d + 2) * r) + 1, e) + t, _ = v - y;
    for (x = y; x < v; x++)
      m += i[x].x, b += i[x].y;
    m /= _, b /= _;
    const M = Math.floor(d * r) + 1 + t, k = Math.min(Math.floor((d + 1) * r) + 1, e) + t, { x: w, y: P } = i[h];
    for (f = g = -1, x = M; x < k; x++)
      g = 0.5 * Math.abs((w - m) * (i[x].y - P) - (w - i[x].x) * (b - P)), g > f && (f = g, u = i[x], p = x);
    a[l++] = u, h = p;
  }
  return a[l++] = i[c], a;
}
function hc(i, t, e, s) {
  let n = 0, o = 0, a, r, l, c, h, d, u, f, g, p;
  const m = [], b = t + e - 1, x = i[t].x, v = i[b].x - x;
  for (a = t; a < t + e; ++a) {
    r = i[a], l = (r.x - x) / v * s, c = r.y;
    const _ = l | 0;
    if (_ === h)
      c < g ? (g = c, d = a) : c > p && (p = c, u = a), n = (o * n + r.x) / ++o;
    else {
      const M = a - 1;
      if (!T(d) && !T(u)) {
        const k = Math.min(d, u), w = Math.max(d, u);
        k !== f && k !== M && m.push({
          ...i[k],
          x: n
        }), w !== f && w !== M && m.push({
          ...i[w],
          x: n
        });
      }
      a > 0 && M !== f && m.push(i[M]), m.push(r), h = _, o = 0, g = p = c, d = u = f = a;
    }
  }
  return m;
}
function lo(i) {
  if (i._decimated) {
    const t = i._data;
    delete i._decimated, delete i._data, Object.defineProperty(i, "data", {
      value: t
    });
  }
}
function Xs(i) {
  i.data.datasets.forEach((t) => {
    lo(t);
  });
}
function dc(i, t) {
  const e = t.length;
  let s = 0, n;
  const { iScale: o } = i, { min: a, max: r, minDefined: l, maxDefined: c } = o.getUserBounds();
  return l && (s = Y(mt(t, o.axis, a).lo, 0, e - 1)), c ? n = Y(mt(t, o.axis, r).hi + 1, s, e) - s : n = e - s, {
    start: s,
    count: n
  };
}
var uc = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (i, t, e) => {
    if (!e.enabled) {
      Xs(i);
      return;
    }
    const s = i.width;
    i.data.datasets.forEach((n, o) => {
      const { _data: a, indexAxis: r } = n, l = i.getDatasetMeta(o), c = a || n.data;
      if (ie([
        r,
        i.options.indexAxis
      ]) === "y" || !l.controller.supportsDecimation)
        return;
      const h = i.scales[l.xAxisID];
      if (h.type !== "linear" && h.type !== "time" || i.options.parsing)
        return;
      let { start: d, count: u } = dc(l, c);
      const f = e.threshold || 4 * s;
      if (u <= f) {
        lo(n);
        return;
      }
      T(a) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(p) {
          this._data = p;
        }
      }));
      let g;
      switch (e.algorithm) {
        case "lttb":
          g = cc(c, d, u, s, e);
          break;
        case "min-max":
          g = hc(c, d, u, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      n._decimated = g;
    });
  },
  destroy(i) {
    Xs(i);
  }
};
function fc(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, a = [];
  for (const r of s) {
    let { start: l, end: c } = r;
    c = Xi(l, c, n);
    const h = Pi(e, n[l], n[c], r.loop);
    if (!t.segments) {
      a.push({
        source: r,
        target: h,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const d = $n(t, h);
    for (const u of d) {
      const f = Pi(e, o[u.start], o[u.end], u.loop), g = jn(r, n, f);
      for (const p of g)
        a.push({
          source: p,
          target: u,
          start: {
            [e]: Us(h, f, "start", Math.max)
          },
          end: {
            [e]: Us(h, f, "end", Math.min)
          }
        });
    }
  }
  return a;
}
function Pi(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = et(n), o = et(o)), {
    property: i,
    start: n,
    end: o
  };
}
function gc(i, t) {
  const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: a, end: r }) => {
    r = Xi(a, r, n);
    const l = n[a], c = n[r];
    s !== null ? (o.push({
      x: l.x,
      y: s
    }), o.push({
      x: c.x,
      y: s
    })) : e !== null && (o.push({
      x: e,
      y: l.y
    }), o.push({
      x: e,
      y: c.y
    }));
  }), o;
}
function Xi(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function Us(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function co(i, t) {
  let e = [], s = !1;
  return I(i) ? (s = !0, e = i) : e = gc(i, t), e.length ? new yt({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function Ks(i) {
  return i && i.fill !== !1;
}
function pc(i, t, e) {
  let n = i[t].fill;
  const o = [
    t
  ];
  let a;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!W(n))
      return n;
    if (a = i[n], !a)
      return !1;
    if (a.visible)
      return n;
    o.push(n), n = a.fill;
  }
  return !1;
}
function mc(i, t, e) {
  const s = yc(i);
  if (A(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return W(n) && Math.floor(n) === n ? bc(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function bc(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function xc(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : A(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function _c(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : A(i) ? s = i.value : s = t.getBaseValue(), s;
}
function yc(i) {
  const t = i.options, e = t.fill;
  let s = D(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function vc(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, a = s.points, r = Mc(t, e);
  r.push(co({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      kc(n, a[h], r);
  }
  return new yt({
    points: n,
    options: {}
  });
}
function Mc(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function kc(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: a, last: r, point: l } = wc(o, t, "x");
    if (!(!l || a && r)) {
      if (a)
        s.unshift(l);
      else if (i.push(l), !r)
        break;
    }
  }
  i.push(...s);
}
function wc(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, a = i.points;
  let r = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], d = a[h.start][e], u = a[h.end][e];
    if (pt(n, d, u)) {
      r = n === d, l = n === u;
      break;
    }
  }
  return {
    first: r,
    last: l,
    point: s
  };
}
class ho {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: a } = this;
    return e = e || {
      start: 0,
      end: z
    }, t.arc(n, o, a, e.end, e.start, !0), !s.bounds;
  }
  interpolate(t) {
    const { x: e, y: s, radius: n } = this, o = t.angle;
    return {
      x: e + Math.cos(o) * n,
      y: s + Math.sin(o) * n,
      angle: o
    };
  }
}
function Sc(i) {
  const { chart: t, fill: e, line: s } = i;
  if (W(e))
    return Pc(t, e);
  if (e === "stack")
    return vc(i);
  if (e === "shape")
    return !0;
  const n = Dc(i);
  return n instanceof ho ? n : co(n, s);
}
function Pc(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function Dc(i) {
  return (i.scale || {}).getPointPositionForValue ? Oc(i) : Cc(i);
}
function Cc(i) {
  const { scale: t = {}, fill: e } = i, s = xc(e, t);
  if (W(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function Oc(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, a = _c(e, t, o), r = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new ho({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(a)
    });
  }
  for (let l = 0; l < n; ++l)
    r.push(t.getPointPositionForValue(l, a));
  return r;
}
function bi(i, t, e) {
  const s = Sc(t), { line: n, scale: o, axis: a } = t, r = n.options, l = r.fill, c = r.backgroundColor, { above: h = c, below: d = c } = l || {};
  s && n.points.length && (ii(i, e), Ac(i, {
    line: n,
    target: s,
    above: h,
    below: d,
    area: e,
    scale: o,
    axis: a
  }), si(i));
}
function Ac(i, t) {
  const { line: e, target: s, above: n, below: o, area: a, scale: r } = t, l = e._loop ? "angle" : t.axis;
  i.save(), l === "x" && o !== n && (qs(i, s, a.top), Gs(i, {
    line: e,
    target: s,
    color: n,
    scale: r,
    property: l
  }), i.restore(), i.save(), qs(i, s, a.bottom)), Gs(i, {
    line: e,
    target: s,
    color: o,
    scale: r,
    property: l
  }), i.restore();
}
function qs(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, a = !1;
  i.beginPath();
  for (const r of s) {
    const { start: l, end: c } = r, h = n[l], d = n[Xi(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), a = !!t.pathSegment(i, r, {
      move: a
    }), a ? i.closePath() : i.lineTo(d.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function Gs(i, t) {
  const { line: e, target: s, property: n, color: o, scale: a } = t, r = fc(e, s, n);
  for (const { source: l, target: c, start: h, end: d } of r) {
    const { style: { backgroundColor: u = o } = {} } = l, f = s !== !0;
    i.save(), i.fillStyle = u, Tc(i, a, f && Pi(n, h, d)), i.beginPath();
    const g = !!e.pathSegment(i, l);
    let p;
    if (f) {
      g ? i.closePath() : Zs(i, s, d, n);
      const m = !!s.pathSegment(i, c, {
        move: g,
        reverse: !0
      });
      p = g && m, p || Zs(i, s, h, n);
    }
    i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore();
  }
}
function Tc(i, t, e) {
  const { top: s, bottom: n } = t.chart.chartArea, { property: o, start: a, end: r } = e || {};
  o === "x" && (i.beginPath(), i.rect(a, s, r - a, n - s), i.clip());
}
function Zs(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var Lc = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, a, r, l;
    for (a = 0; a < s; ++a)
      o = i.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof yt && (l = {
        visible: i.isDatasetVisible(a),
        index: a,
        fill: mc(r, a, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: r
      }), o.$filler = l, n.push(l);
    for (a = 0; a < s; ++a)
      l = n[a], !(!l || l.fill === !1) && (l.fill = pc(n, a, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
    for (let a = n.length - 1; a >= 0; --a) {
      const r = n[a].$filler;
      !r || (r.line.updateControlPoints(o, r.axis), s && r.fill && bi(i.ctx, r, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      Ks(o) && bi(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !Ks(s) || e.drawTime !== "beforeDatasetDraw" || bi(i.ctx, s, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Js = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, Rc = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class Qs extends rt {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, s) {
    this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = F(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels, n = $(s.font), o = n.size, a = this._computeTitleHeight(), { boxWidth: r, itemHeight: l } = Js(s, o);
    let c, h;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(a, o, r, l) + 10) : (h = this.maxHeight, c = this._fitCols(a, n, r, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const { ctx: o, maxWidth: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = n + r;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -h;
    return this.legendItems.forEach((g, p) => {
      const m = s + e / 2 + o.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + m + 2 * r > a) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, u++), l[p] = {
        left: 0,
        top: f,
        row: u,
        width: m,
        height: n
      }, c[c.length - 1] += m + r;
    }), d;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = a - t;
    let d = r, u = 0, f = 0, g = 0, p = 0;
    return this.legendItems.forEach((m, b) => {
      const { itemWidth: x, itemHeight: y } = Ec(s, e, o, m, n);
      b > 0 && f + y + 2 * r > h && (d += u + r, c.push({
        width: u,
        height: f
      }), g += u + r, p++, u = f = 0), l[b] = {
        left: g,
        top: f,
        col: p,
        width: x,
        height: y
      }, u = Math.max(u, x), f += y + r;
    }), d += u, c.push({
      width: u,
      height: f
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, a = Ht(o, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0, l = K(s, this.left + n, this.right - this.lineWidths[r]);
      for (const c of e)
        r !== c.row && (r = c.row, l = K(s, this.left + n, this.right - this.lineWidths[r])), c.top += this.top + t + n, c.left = a.leftForLtr(a.x(l), c.width), l += c.width + n;
    } else {
      let r = 0, l = K(s, this.top + t + n, this.bottom - this.columnSizes[r].height);
      for (const c of e)
        c.col !== r && (r = c.col, l = K(s, this.top + t + n, this.bottom - this.columnSizes[r].height)), c.top = l, c.left += this.left + n, c.left = a.leftForLtr(a.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ii(t, this), this._draw(), si(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: a } = t, r = j.color, l = Ht(t.rtl, this.left, this.width), c = $(a.font), { padding: h } = a, d = c.size, u = d / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: m } = Js(a, d), b = function(M, k, w) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      n.save();
      const P = D(w.lineWidth, 1);
      if (n.fillStyle = D(w.fillStyle, r), n.lineCap = D(w.lineCap, "butt"), n.lineDashOffset = D(w.lineDashOffset, 0), n.lineJoin = D(w.lineJoin, "miter"), n.lineWidth = P, n.strokeStyle = D(w.strokeStyle, r), n.setLineDash(D(w.lineDash, [])), a.usePointStyle) {
        const C = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: w.pointStyle,
          rotation: w.rotation,
          borderWidth: P
        }, O = l.xPlus(M, g / 2), L = k + u;
        Tn(n, C, O, L, a.pointStyleWidth && g);
      } else {
        const C = k + Math.max((d - p) / 2, 0), O = l.leftForLtr(M, g), L = Lt(w.borderRadius);
        n.beginPath(), Object.values(L).some((X) => X !== 0) ? ue(n, {
          x: O,
          y: C,
          w: g,
          h: p,
          radius: L
        }) : n.rect(O, C, g, p), n.fill(), P !== 0 && n.stroke();
      }
      n.restore();
    }, x = function(M, k, w) {
      Ft(n, w.text, M, k + m / 2, c, {
        strikethrough: w.hidden,
        textAlign: l.textAlign(w.textAlign)
      });
    }, y = this.isHorizontal(), v = this._computeTitleHeight();
    y ? f = {
      x: K(o, this.left + h, this.right - s[0]),
      y: this.top + h + v,
      line: 0
    } : f = {
      x: this.left + h,
      y: K(o, this.top + v + h, this.bottom - e[0].height),
      line: 0
    }, Wn(this.ctx, t.textDirection);
    const _ = m + h;
    this.legendItems.forEach((M, k) => {
      n.strokeStyle = M.fontColor, n.fillStyle = M.fontColor;
      const w = n.measureText(M.text).width, P = l.textAlign(M.textAlign || (M.textAlign = a.textAlign)), C = g + u + w;
      let O = f.x, L = f.y;
      l.setWidth(this.width), y ? k > 0 && O + C + h > this.right && (L = f.y += _, f.line++, O = f.x = K(o, this.left + h, this.right - s[f.line])) : k > 0 && L + _ > this.bottom && (O = f.x = O + e[f.line].width + h, f.line++, L = f.y = K(o, this.top + v + h, this.bottom - e[f.line].height));
      const X = l.x(O);
      if (b(X, L, M), O = Eo(P, O + g + u, y ? O + C : this.right, t.rtl), x(l.x(O), L, M), y)
        f.x += C + h;
      else if (typeof M.text != "string") {
        const Q = c.lineHeight;
        f.y += uo(M, Q);
      } else
        f.y += _;
    }), Nn(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = $(e.font), n = G(e.padding);
    if (!e.display)
      return;
    const o = Ht(t.rtl, this.left, this.width), a = this.ctx, r = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), h = this.top + c, d = K(t.align, d, this.right - u);
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      h = c + K(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = K(r, d, d + u);
    a.textAlign = o.textAlign(Ii(r)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = s.string, Ft(a, e.text, f, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = $(t.font), s = G(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (pt(t, this.left, this.right) && pt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], pt(t, n.left, n.left + n.width) && pt(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!zc(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = Rc(n, s);
      n && !o && F(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && F(e.onHover, [
        t,
        s,
        this
      ], this);
    } else
      s && F(e.onClick, [
        t,
        s,
        this
      ], this);
  }
}
function Ec(i, t, e, s, n) {
  const o = Fc(s, i, t, e), a = Ic(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: a
  };
}
function Fc(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, a) => o.length > a.length ? o : a)), t + e.size / 2 + s.measureText(n).width;
}
function Ic(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = uo(t, e)), s;
}
function uo(i, t) {
  const e = i.text ? i.text.length + 0.5 : 0;
  return t * e;
}
function zc(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var Bc = {
  id: "legend",
  _element: Qs,
  start(i, t, e) {
    const s = i.legend = new Qs({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    q.configure(i, s, e), q.addBox(i, s);
  },
  stop(i) {
    q.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    q.configure(i, s, e), s.options = e;
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const s = t.datasetIndex, n = e.chart;
      n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o, useBorderRadius: a, borderRadius: r } } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), h = G(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: n || c.textAlign,
            borderRadius: a && (r || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(i)
    }
  }
};
class Ui extends rt {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const s = this.options;
    if (this.left = 0, this.top = 0, !s.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const n = I(s.text) ? s.text.length : 1;
    this._padding = G(s.padding);
    const o = n * $(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: a } = this, r = a.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = K(r, s, o), d = e + t, c = o - s) : (a.position === "left" ? (h = s + t, d = K(r, n, e), l = V * -0.5) : (h = o - t, d = K(r, e, n), l = V * 0.5), c = n - e), {
      titleX: h,
      titleY: d,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const s = $(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: a, titleY: r, maxWidth: l, rotation: c } = this._drawArgs(o);
    Ft(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Ii(e.align),
      textBaseline: "middle",
      translation: [
        a,
        r
      ]
    });
  }
}
function Vc(i, t) {
  const e = new Ui({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  q.configure(i, e, t), q.addBox(i, e), i.titleBlock = e;
}
var Wc = {
  id: "title",
  _element: Ui,
  start(i, t, e) {
    Vc(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    q.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    q.configure(i, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Ae = /* @__PURE__ */ new WeakMap();
var Nc = {
  id: "subtitle",
  start(i, t, e) {
    const s = new Ui({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    q.configure(i, s, e), q.addBox(i, s), Ae.set(i, s);
  },
  stop(i) {
    q.removeBox(i, Ae.get(i)), Ae.delete(i);
  },
  beforeUpdate(i, t, e) {
    const s = Ae.get(i);
    q.configure(i, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "normal"
    },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const ne = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, s = 0, n = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const r = a.tooltipPosition();
        s += r.x, n += r.y, ++o;
      }
    }
    return {
      x: s / o,
      y: n / o
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, a, r;
    for (o = 0, a = i.length; o < a; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = xi(t, c);
        h < n && (n = h, r = l);
      }
    }
    if (r) {
      const l = r.tooltipPosition();
      e = l.x, s = l.y;
    }
    return {
      x: e,
      y: s
    };
  }
};
function lt(i, t) {
  return t && (I(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function ft(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function Hc(i, t) {
  const { element: e, datasetIndex: s, index: n } = t, o = i.getDatasetMeta(s).controller, { label: a, value: r } = o.getLabelAndValue(n);
  return {
    chart: i,
    label: a,
    parsed: o.getParsed(n),
    raw: i.data.datasets[s].data[n],
    formattedValue: r,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e
  };
}
function tn(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: a, boxHeight: r } = t, l = $(t.bodyFont), c = $(t.titleFont), h = $(t.footerFont), d = o.length, u = n.length, f = s.length, g = G(t.padding);
  let p = g.height, m = 0, b = s.reduce((v, _) => v + _.before.length + _.lines.length + _.after.length, 0);
  if (b += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const v = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    p += f * v + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let x = 0;
  const y = function(v) {
    m = Math.max(m, e.measureText(v).width + x);
  };
  return e.save(), e.font = c.string, R(i.title, y), e.font = l.string, R(i.beforeBody.concat(i.afterBody), y), x = t.displayColors ? a + 2 + t.boxPadding : 0, R(s, (v) => {
    R(v.before, y), R(v.lines, y), R(v.after, y);
  }), x = 0, e.font = h.string, R(i.footer, y), e.restore(), m += g.width, {
    width: m,
    height: p
  };
}
function jc(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function $c(i, t, e, s) {
  const { x: n, width: o } = s, a = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + a > t.width || i === "right" && n - o - a < 0)
    return !0;
}
function Yc(i, t, e, s) {
  const { x: n, width: o } = e, { width: a, chartArea: { left: r, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= a - o / 2 && (c = "right"), $c(c, i, t, e) && (c = "center"), c;
}
function en(i, t, e) {
  const s = e.yAlign || t.yAlign || jc(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Yc(i, t, e, s),
    yAlign: s
  };
}
function Xc(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Uc(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function sn(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: a } = i, { xAlign: r, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = Lt(a);
  let g = Xc(t, r);
  const p = Uc(t, l, c);
  return l === "center" ? r === "left" ? g += c : r === "right" && (g -= c) : r === "left" ? g -= Math.max(h, u) + n : r === "right" && (g += Math.max(d, f) + n), {
    x: Y(g, 0, s.width - t.width),
    y: Y(p, 0, s.height - t.height)
  };
}
function Te(i, t, e) {
  const s = G(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function nn(i) {
  return lt([], ft(i));
}
function Kc(i, t, e) {
  return St(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function on(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const fo = {
  beforeTitle: dt,
  title(i) {
    if (i.length > 0) {
      const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (s > 0 && t.dataIndex < s)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: dt,
  beforeBody: dt,
  beforeLabel: dt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return T(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: dt,
  afterBody: dt,
  beforeFooter: dt,
  footer: dt,
  afterFooter: dt
};
function Z(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? fo[t].call(e, s) : n;
}
class Di extends rt {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new Yn(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Kc(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = Z(s, "beforeTitle", this, t), o = Z(s, "title", this, t), a = Z(s, "afterTitle", this, t);
    let r = [];
    return r = lt(r, ft(n)), r = lt(r, ft(o)), r = lt(r, ft(a)), r;
  }
  getBeforeBody(t, e) {
    return nn(Z(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return R(t, (o) => {
      const a = {
        before: [],
        lines: [],
        after: []
      }, r = on(s, o);
      lt(a.before, ft(Z(r, "beforeLabel", this, o))), lt(a.lines, Z(r, "label", this, o)), lt(a.after, ft(Z(r, "afterLabel", this, o))), n.push(a);
    }), n;
  }
  getAfterBody(t, e) {
    return nn(Z(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = Z(s, "beforeFooter", this, t), o = Z(s, "footer", this, t), a = Z(s, "afterFooter", this, t);
    let r = [];
    return r = lt(r, ft(n)), r = lt(r, ft(o)), r = lt(r, ft(a)), r;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], a = [];
    let r = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      r.push(Hc(this.chart, e[l]));
    return t.filter && (r = r.filter((h, d, u) => t.filter(h, d, u, s))), t.itemSort && (r = r.sort((h, d) => t.itemSort(h, d, s))), R(r, (h) => {
      const d = on(t.callbacks, h);
      n.push(Z(d, "labelColor", this, h)), o.push(Z(d, "labelPointStyle", this, h)), a.push(Z(d, "labelTextColor", this, h));
    }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r;
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()), n = this._active;
    let o, a = [];
    if (!n.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const r = ne[s.position].call(this, n, this._eventPosition);
      a = this._createItems(s), this.title = this.getTitle(a, s), this.beforeBody = this.getBeforeBody(a, s), this.body = this.getBody(a, s), this.afterBody = this.getAfterBody(a, s), this.footer = this.getFooter(a, s);
      const l = this._size = tn(this, s), c = Object.assign({}, r, l), h = en(this.chart, s, c), d = sn(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        caretX: r.x,
        caretY: r.y
      };
    }
    this._tooltipItems = a, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, s, n) {
    const o = this.getCaretPosition(t, s, n);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, s) {
    const { xAlign: n, yAlign: o } = this, { caretSize: a, cornerRadius: r } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Lt(r), { x: u, y: f } = t, { width: g, height: p } = e;
    let m, b, x, y, v, _;
    return o === "center" ? (v = f + p / 2, n === "left" ? (m = u, b = m - a, y = v + a, _ = v - a) : (m = u + g, b = m + a, y = v - a, _ = v + a), x = m) : (n === "left" ? b = u + Math.max(l, h) + a : n === "right" ? b = u + g - Math.max(c, d) - a : b = this.caretX, o === "top" ? (y = f, v = y - a, m = b - a, x = b + a) : (y = f + p, v = y + a, m = b + a, x = b - a), _ = y), {
      x1: m,
      x2: b,
      x3: x,
      y1: y,
      y2: v,
      y3: _
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let a, r, l;
    if (o) {
      const c = Ht(s.rtl, this.x, this.width);
      for (t.x = Te(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", a = $(s.titleFont), r = s.titleSpacing, e.fillStyle = s.titleColor, e.font = a.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === o && (t.y += s.titleMarginBottom - r);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const a = this.labelColors[s], r = this.labelPointStyles[s], { boxHeight: l, boxWidth: c, boxPadding: h } = o, d = $(o.bodyFont), u = Te(this, "left", o), f = n.x(u), g = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, p = e.y + g;
    if (o.usePointStyle) {
      const m = {
        radius: Math.min(c, l) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, b = n.leftForLtr(f, c) + c / 2, x = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, vi(t, m, b, x), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, vi(t, m, b, x);
    } else {
      t.lineWidth = A(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
      const m = n.leftForLtr(f, c - h), b = n.leftForLtr(n.xPlus(f, 1), c - h - 2), x = Lt(a.borderRadius);
      Object.values(x).some((y) => y !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, ue(t, {
        x: m,
        y: p,
        w: c,
        h: l,
        radius: x
      }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), ue(t, {
        x: b,
        y: p + 1,
        w: c - 2,
        h: l - 2,
        radius: x
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(m, p, c, l), t.strokeRect(m, p, c, l), t.fillStyle = a.backgroundColor, t.fillRect(b, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: a, displayColors: r, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = $(s.bodyFont);
    let u = d.lineHeight, f = 0;
    const g = Ht(s.rtl, this.x, this.width), p = function(w) {
      e.fillText(w, g.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, m = g.textAlign(a);
    let b, x, y, v, _, M, k;
    for (e.textAlign = a, e.textBaseline = "middle", e.font = d.string, t.x = Te(this, m, s), e.fillStyle = s.bodyColor, R(this.beforeBody, p), f = r && m !== "right" ? a === "center" ? c / 2 + h : c + 2 + h : 0, v = 0, M = n.length; v < M; ++v) {
      for (b = n[v], x = this.labelTextColors[v], e.fillStyle = x, R(b.before, p), y = b.lines, r && y.length && (this._drawColorBox(e, t, v, g, s), u = Math.max(d.lineHeight, l)), _ = 0, k = y.length; _ < k; ++_)
        p(y[_]), u = d.lineHeight;
      R(b.after, p);
    }
    f = 0, u = d.lineHeight, R(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let a, r;
    if (o) {
      const l = Ht(s.rtl, this.x, this.width);
      for (t.x = Te(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", a = $(s.footerFont), e.fillStyle = s.footerColor, e.font = a.string, r = 0; r < o; ++r)
        e.fillText(n[r], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: a } = this, { x: r, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: g } = Lt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(r + d, l), a === "top" && this.drawCaret(t, e, s, n), e.lineTo(r + c - u, l), e.quadraticCurveTo(r + c, l, r + c, l + u), a === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(r + c, l + h - g), e.quadraticCurveTo(r + c, l + h, r + c - g, l + h), a === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(r + f, l + h), e.quadraticCurveTo(r, l + h, r, l + h - f), a === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(r, l + d), e.quadraticCurveTo(r, l, r + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const a = ne[t.position].call(this, this._active, this._eventPosition);
      if (!a)
        return;
      const r = this._size = tn(this, t), l = Object.assign({}, a, this._size), c = en(e, t, l), h = sn(t, l, c, e);
      (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(e);
    const n = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const a = G(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && r && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Wn(t, e.textDirection), o.y += a.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Nn(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active, n = t.map(({ datasetIndex: r, index: l }) => {
      const c = this.chart.getDatasetMeta(r);
      if (!c)
        throw new Error("Cannot find a dataset at index " + r);
      return {
        datasetIndex: r,
        element: c.data[l],
        index: l
      };
    }), o = !Ye(s, n), a = this._positionChanged(n, e);
    (o || a) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], a = this._getActiveElements(t, o, e, s), r = this._positionChanged(a, t), l = e || !Ye(a, o) || r;
    return l && (this._active = a, (n.enabled || n.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, s, n) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e;
    const a = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && a.reverse(), a;
  }
  _positionChanged(t, e) {
    const { caretX: s, caretY: n, options: o } = this, a = ne[o.position].call(this, t, e);
    return a !== !1 && (s !== a.x || n !== a.y);
  }
}
S(Di, "positioners", ne);
var qc = {
  id: "tooltip",
  _element: Di,
  positioners: ne,
  afterInit(i, t, e) {
    e && (i.tooltip = new Di({
      chart: i,
      options: e
    }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (i.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: fo
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
}, Gc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: lc,
  Decimation: uc,
  Filler: Lc,
  Legend: Bc,
  SubTitle: Nc,
  Title: Wc,
  Tooltip: qc
});
const Zc = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Jc(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Zc(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Qc = (i, t) => i === null ? null : Y(Math.round(i), 0, t);
function an(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Ci extends It {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const s = this.getLabels();
      for (const { index: n, label: o } of e)
        s[n] === o && s.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (T(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Jc(s, t, D(e, t), this._addedLabels), Qc(e, s.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: s, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.min, e = this.max, s = this.options.offset, n = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let a = t; a <= e; a++)
      n.push({
        value: a
      });
    return n;
  }
  getLabelForValue(t) {
    return an.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
S(Ci, "id", "category"), S(Ci, "defaults", {
  ticks: {
    callback: an
  }
});
function th(i, t) {
  const e = [], { bounds: n, step: o, min: a, max: r, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = i, f = o || 1, g = h - 1, { min: p, max: m } = t, b = !T(a), x = !T(r), y = !T(c), v = (m - p) / (d + 1);
  let _ = Zi((m - p) / g / f) * f, M, k, w, P;
  if (_ < 1e-14 && !b && !x)
    return [
      {
        value: p
      },
      {
        value: m
      }
    ];
  P = Math.ceil(m / _) - Math.floor(p / _), P > g && (_ = Zi(P * _ / g / f) * f), T(l) || (M = Math.pow(10, l), _ = Math.ceil(_ * M) / M), n === "ticks" ? (k = Math.floor(p / _) * _, w = Math.ceil(m / _) * _) : (k = p, w = m), b && x && o && Do((r - a) / o, _ / 1e3) ? (P = Math.round(Math.min((r - a) / _, h)), _ = (r - a) / P, k = a, w = r) : y ? (k = b ? a : k, w = x ? r : w, P = c - 1, _ = (w - k) / P) : (P = (w - k) / _, re(P, Math.round(P), _ / 1e3) ? P = Math.round(P) : P = Math.ceil(P));
  const C = Math.max(Ji(_), Ji(k));
  M = Math.pow(10, T(l) ? C : l), k = Math.round(k * M) / M, w = Math.round(w * M) / M;
  let O = 0;
  for (b && (u && k !== a ? (e.push({
    value: a
  }), k < a && O++, re(Math.round((k + O * _) * M) / M, a, rn(a, v, i)) && O++) : k < a && O++); O < P; ++O)
    e.push({
      value: Math.round((k + O * _) * M) / M
    });
  return x && u && w !== r ? e.length && re(e[e.length - 1].value, r, rn(r, v, i)) ? e[e.length - 1].value = r : e.push({
    value: r
  }) : (!x || w === r) && e.push({
    value: w
  }), e;
}
function rn(i, t, { horizontal: e, minRotation: s }) {
  const n = ot(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, a = 0.75 * t * ("" + i).length;
  return Math.min(t / o, a);
}
class ti extends It {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return T(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const a = (l) => n = e ? n : l, r = (l) => o = s ? o : l;
    if (t) {
      const l = ht(n), c = ht(o);
      l < 0 && c < 0 ? r(0) : l > 0 && c > 0 && a(0);
    }
    if (n === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      r(o + l), t || a(n - l);
    }
    this.min = n, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: s } = t, n;
    return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const n = {
      maxTicks: s,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, a = th(n, o);
    return t.bounds === "ticks" && bn(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const n = (s - e) / Math.max(t.length - 1, 1) / 2;
      e -= n, s += n;
    }
    this._startValue = e, this._endValue = s, this._valueRange = s - e;
  }
  getLabelForValue(t) {
    return be(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Oi extends ti {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = W(t) ? t : 0, this.max = W(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = ot(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
S(Oi, "id", "linear"), S(Oi, "defaults", {
  ticks: {
    callback: ei.formatters.numeric
  }
});
const ge = (i) => Math.floor(xt(i)), Ot = (i, t) => Math.pow(10, ge(i) + t);
function ln(i) {
  return i / Math.pow(10, ge(i)) === 1;
}
function cn(i, t, e) {
  const s = Math.pow(10, e), n = Math.floor(i / s);
  return Math.ceil(t / s) - n;
}
function eh(i, t) {
  const e = t - i;
  let s = ge(e);
  for (; cn(i, t, s) > 10; )
    s++;
  for (; cn(i, t, s) < 10; )
    s--;
  return Math.min(s, ge(i));
}
function ih(i, { min: t, max: e }) {
  t = tt(i.min, t);
  const s = [], n = ge(t);
  let o = eh(t, e), a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const r = Math.pow(10, o), l = n > o ? Math.pow(10, n) : 0, c = Math.round((t - l) * a) / a, h = Math.floor((t - l) / r / 10) * r * 10;
  let d = Math.floor((c - h) / Math.pow(10, o)), u = tt(i.min, Math.round((l + h + d * Math.pow(10, o)) * a) / a);
  for (; u < e; )
    s.push({
      value: u,
      major: ln(u),
      significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (o++, d = 2, a = o >= 0 ? 1 : a), u = Math.round((l + h + d * Math.pow(10, o)) * a) / a;
  const f = tt(i.max, u);
  return s.push({
    value: f,
    major: ln(f),
    significand: d
  }), s;
}
class Ai extends It {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const s = ti.prototype.parse.apply(this, [
      t,
      e
    ]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return W(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = W(t) ? Math.max(0, t) : null, this.max = W(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !W(this._userMin) && (this.min = t === Ot(this.min, 0) ? Ot(this.min, -1) : Ot(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let s = this.min, n = this.max;
    const o = (r) => s = t ? s : r, a = (r) => n = e ? n : r;
    s === n && (s <= 0 ? (o(1), a(10)) : (o(Ot(s, -1)), a(Ot(n, 1)))), s <= 0 && o(Ot(n, -1)), n <= 0 && a(Ot(s, 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, s = ih(e, this);
    return t.bounds === "ticks" && bn(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : be(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = xt(t), this._valueRange = xt(this.max) - xt(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (xt(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
S(Ai, "id", "logarithmic"), S(Ai, "defaults", {
  ticks: {
    callback: ei.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Ti(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = G(t.backdropPadding);
    return D(t.font && t.font.size, j.font.size) + e.height;
  }
  return 0;
}
function sh(i, t, e) {
  return e = I(e) ? e : [
    e
  ], {
    w: ua(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function hn(i, t, e, s, n) {
  return i === s || i === n ? {
    start: t - e / 2,
    end: t + e / 2
  } : i < s || i > n ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function nh(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, a = i.options.pointLabels, r = a.centerPointLabels ? V / o : 0;
  for (let l = 0; l < o; l++) {
    const c = a.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + n[l], r), d = $(c.font), u = sh(i.ctx, d, i._pointLabels[l]);
    s[l] = u;
    const f = et(i.getIndexAngle(l) + r), g = Math.round(Ei(f)), p = hn(g, h.x, u.w, 0, 180), m = hn(g, h.y, u.h, 90, 270);
    oh(e, t, f, p, m);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = ah(i, s, n);
}
function oh(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), a = Math.abs(Math.cos(e));
  let r = 0, l = 0;
  s.start < t.l ? (r = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - r)) : s.end > t.r && (r = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + r)), n.start < t.t ? (l = (t.t - n.start) / a, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / a, i.b = Math.max(i.b, t.b + l));
}
function ah(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, a = Ti(o) / 2, r = i.drawingArea, l = o.pointLabels.centerPointLabels ? V / n : 0;
  for (let c = 0; c < n; c++) {
    const h = i.getPointPosition(c, r + a + e[c], l), d = Math.round(Ei(et(h.angle + N))), u = t[c], f = ch(h.y, u.h, d), g = rh(d), p = lh(h.x, u.w, g);
    s.push({
      x: h.x,
      y: f,
      textAlign: g,
      left: p,
      top: f,
      right: p + u.w,
      bottom: f + u.h
    });
  }
  return s;
}
function rh(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function lh(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function ch(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function hh(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = s.setContext(i.getPointLabelContext(n)), a = $(o.font), { x: r, y: l, textAlign: c, left: h, top: d, right: u, bottom: f } = i._pointLabelItems[n], { backdropColor: g } = o;
    if (!T(g)) {
      const p = Lt(o.borderRadius), m = G(o.backdropPadding);
      e.fillStyle = g;
      const b = h - m.left, x = d - m.top, y = u - h + m.width, v = f - d + m.height;
      Object.values(p).some((_) => _ !== 0) ? (e.beginPath(), ue(e, {
        x: b,
        y: x,
        w: y,
        h: v,
        radius: p
      }), e.fill()) : e.fillRect(b, x, y, v);
    }
    Ft(e, i._pointLabels[n], r, l + a.lineHeight / 2, a, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle"
    });
  }
}
function go(i, t, e, s) {
  const { ctx: n } = i;
  if (e)
    n.arc(i.xCenter, i.yCenter, t, 0, z);
  else {
    let o = i.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let a = 1; a < s; a++)
      o = i.getPointPosition(a, t), n.lineTo(o.x, o.y);
  }
}
function dh(i, t, e, s, n) {
  const o = i.ctx, a = t.circular, { color: r, lineWidth: l } = t;
  !a && !s || !r || !l || e < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), go(i, e, a, s), o.closePath(), o.stroke(), o.restore());
}
function uh(i, t, e) {
  return St(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class oe extends ti {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = G(Ti(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = W(t) && !isNaN(t) ? t : 0, this.max = W(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ti(this.options));
  }
  generateTickLabels(t) {
    ti.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = F(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? nh(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = z / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return et(t * e + ot(s));
  }
  getDistanceFromCenterForValue(t) {
    if (T(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (T(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return uh(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - N + s;
    return {
      x: Math.cos(n) * e + this.xCenter,
      y: Math.sin(n) * e + this.yCenter,
      angle: n
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: s, right: n, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: s,
      right: n,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(), s.beginPath(), go(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: s, grid: n, border: o } = e, a = this._pointLabels.length;
    let r, l, c;
    if (e.pointLabels.display && hh(this, a), n.display && this.ticks.forEach((h, d) => {
      if (d !== 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const u = this.getContext(d), f = n.setContext(u), g = o.setContext(u);
        dh(this, f, l, a, g);
      }
    }), s.display) {
      for (t.save(), r = a - 1; r >= 0; r--) {
        const h = s.setContext(this.getPointLabelContext(r)), { color: d, lineWidth: u } = h;
        !u || !d || (t.lineWidth = u, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c = this.getPointPosition(r, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, s = e.ticks;
    if (!s.display)
      return;
    const n = this.getIndexAngle(0);
    let o, a;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((r, l) => {
      if (l === 0 && !e.reverse)
        return;
      const c = s.setContext(this.getContext(l)), h = $(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, a = t.measureText(r.label).width, t.fillStyle = c.backdropColor;
        const d = G(c.backdropPadding);
        t.fillRect(-a / 2 - d.left, -o - h.size / 2 - d.top, a + d.width, h.size + d.height);
      }
      Ft(t, r.label, 0, -o, h, {
        color: c.color
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
S(oe, "id", "radialLinear"), S(oe, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: ei.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(t) {
      return t;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), S(oe, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), S(oe, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const oi = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, J = /* @__PURE__ */ Object.keys(oi);
function fh(i, t) {
  return i - t;
}
function dn(i, t) {
  if (T(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let a = t;
  return typeof s == "function" && (a = s(a)), W(a) || (a = typeof s == "string" ? e.parse(a, s) : e.parse(a)), a === null ? null : (n && (a = n === "week" && (jt(o) || o === !0) ? e.startOf(a, "isoWeek", o) : e.startOf(a, n)), +a);
}
function un(i, t, e, s) {
  const n = J.length;
  for (let o = J.indexOf(i); o < n - 1; ++o) {
    const a = oi[J[o]], r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((e - t) / (r * a.size)) <= s)
      return J[o];
  }
  return J[n - 1];
}
function gh(i, t, e, s, n) {
  for (let o = J.length - 1; o >= J.indexOf(e); o--) {
    const a = J[o];
    if (oi[a].common && i._adapter.diff(n, s, a) >= t - 1)
      return a;
  }
  return J[e ? J.indexOf(e) : 0];
}
function ph(i) {
  for (let t = J.indexOf(i) + 1, e = J.length; t < e; ++t)
    if (oi[J[t]].common)
      return J[t];
}
function fn(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Fi(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function mh(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), a = t[t.length - 1].value;
  let r, l;
  for (r = o; r <= a; r = +n.add(r, 1, s))
    l = e[r], l >= 0 && (t[l].major = !0);
  return t;
}
function gn(i, t, e) {
  const s = [], n = {}, o = t.length;
  let a, r;
  for (a = 0; a < o; ++a)
    r = t[a], n[r] = a, s.push({
      value: r,
      major: !1
    });
  return o === 0 || !e ? s : mh(i, s, n, e);
}
class pe extends It {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const s = t.time || (t.time = {}), n = this._adapter = new Cr._date(t.adapters.date);
    n.init(e), ae(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : dn(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, s = t.time.unit || "day";
    let { min: n, max: o, minDefined: a, maxDefined: r } = this.getUserBounds();
    function l(c) {
      !a && !isNaN(c.min) && (n = Math.min(n, c.min)), !r && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!a || !r) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = W(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = W(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], s = t[t.length - 1]), {
      min: e,
      max: s
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    const o = this.min, a = this.max, r = To(n, o, a);
    return this._unit = e.unit || (s.autoSkip ? un(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : gh(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : ph(this._unit), this.initOffsets(n), t.reverse && r.reverse(), gn(this, r, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const a = t.length < 3 ? 0.5 : 0.25;
    e = Y(e, 0, a), s = Y(s, 0, a), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, a = o.unit || un(o.minUnit, e, s, this._getLabelCapacity(e)), r = D(n.ticks.stepSize, 1), l = a === "week" ? o.isoWeekday : !1, c = jt(l) || l === !0, h = {};
    let d = e, u, f;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : a), t.diff(s, e, a) > 1e5 * r)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + r + " " + a);
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < s; u = +t.add(u, r, a), f++)
      fn(h, u, g);
    return (u === s || n.bounds === "ticks" || f === 1) && fn(h, u, g), Object.keys(h).sort((p, m) => p - m).map((p) => +p);
  }
  getLabelForValue(t) {
    const e = this._adapter, s = this.options.time;
    return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
  }
  _tickFormatFunction(t, e, s, n) {
    const o = this.options, a = o.ticks.callback;
    if (a)
      return F(a, [
        t,
        e,
        s
      ], this);
    const r = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && r[l], d = c && r[c], u = s[e], f = c && d && u && u.major;
    return this._adapter.format(t, n || (f ? d : h));
  }
  generateTickLabels(t) {
    let e, s, n;
    for (e = 0, s = t.length; e < s; ++e)
      n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = ot(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), a = Math.sin(n), r = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + r * a,
      h: s * a + r * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, gn(this, [
      t
    ], this._majorUnit), n), a = this._getLabelSize(o), r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
    return r > 0 ? r : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, s;
    if (t.length)
      return t;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (e = 0, s = n.length; e < s; ++e)
      t = t.concat(n[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, s;
    if (t.length)
      return t;
    const n = this.getLabels();
    for (e = 0, s = n.length; e < s; ++e)
      t.push(dn(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return yn(t.sort(fh));
  }
}
S(pe, "id", "time"), S(pe, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Le(i, t, e) {
  let s = 0, n = i.length - 1, o, a, r, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = mt(i, "pos", t)), { pos: o, time: r } = i[s], { pos: a, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = mt(i, "time", t)), { time: o, pos: r } = i[s], { time: a, pos: l } = i[n]);
  const c = a - o;
  return c ? r + (l - r) * (t - o) / c : r;
}
class Li extends pe {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Le(e, this.min), this._tableRange = Le(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this, n = [], o = [];
    let a, r, l, c, h;
    for (a = 0, r = t.length; a < r; ++a)
      c = t[a], c >= e && c <= s && n.push(c);
    if (n.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: s,
          pos: 1
        }
      ];
    for (a = 0, r = n.length; a < r; ++a)
      h = n[a + 1], l = n[a - 1], c = n[a], Math.round((h + l) / 2) !== c && o.push({
        time: c,
        pos: a / (r - 1)
      });
    return o;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Le(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Le(this._table, s * this._tableRange + this._minPos, !0);
  }
}
S(Li, "id", "timeseries"), S(Li, "defaults", pe.defaults);
var bh = Li, xh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: Ci,
  LinearScale: Oi,
  LogarithmicScale: Ai,
  RadialLinearScale: oe,
  TimeScale: pe,
  TimeSeriesScale: bh
});
const _h = [
  Dr,
  sc,
  Gc,
  xh
];
zl.register(..._h);
export {
  nr as Animation,
  Yn as Animations,
  He as ArcElement,
  Ee as BarController,
  $e as BarElement,
  Gn as BasePlatform,
  Nr as BasicPlatform,
  Fe as BubbleController,
  Ci as CategoryScale,
  zl as Chart,
  lc as Colors,
  at as DatasetController,
  uc as Decimation,
  Qr as DomPlatform,
  Nt as DoughnutController,
  rt as Element,
  Lc as Filler,
  Rr as Interaction,
  Bc as Legend,
  Ie as LineController,
  yt as LineElement,
  Oi as LinearScale,
  Ai as LogarithmicScale,
  Mi as PieController,
  je as PointElement,
  ze as PolarAreaController,
  Be as RadarController,
  oe as RadialLinearScale,
  It as Scale,
  Ve as ScatterController,
  Nc as SubTitle,
  ei as Ticks,
  pe as TimeScale,
  bh as TimeSeriesScale,
  Wc as Title,
  qc as Tooltip,
  Cr as _adapters,
  tl as _detectPlatform,
  ut as animator,
  Dr as controllers,
  zl as default,
  j as defaults,
  sc as elements,
  q as layouts,
  Gc as plugins,
  _h as registerables,
  ct as registry,
  xh as scales
};
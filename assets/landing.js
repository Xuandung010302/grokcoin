import {
  _ as V,
  r as $,
  o as E,
  c as U,
  w as L,
  a as m,
  b as A,
  d as pe,
  t as ee,
  n as ue,
  e as M,
  F as q,
  f as K,
  g as j,
  v as Ln,
  h as W,
  i as Rn,
  j as zn,
  k as D,
  l as Me,
  m as st,
  p as pt,
  q as mt,
  s as Et,
  u as Dn,
  x as Xt,
  y as Kt,
  z as te,
  A as Nn,
  B as jn,
  C as ye,
} from "./index.js";
const Fn = "/logo.png",
  Gn = {},
  Vn = m("img", { src: Fn, alt: "logo", class: "h-10 w-10" }, null, -1);
function Hn(t, e) {
  const n = $("router-link");
  return E(), U(n, { to: "/" }, { default: L(() => [Vn]), _: 1 });
}
const Yt = V(Gn, [["render", Hn]]),
  qn = {},
  Un = {
    class: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Wn = m("title", null, "Menu", -1),
  Xn = m(
    "path",
    { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" },
    null,
    -1
  ),
  Kn = [Wn, Xn];
function Yn(t, e) {
  return E(), A("svg", Un, Kn);
}
const Jn = V(qn, [["render", Yn]]);
const Zn = {
    props: {
      text: String,
      link: String,
      type: String,
      size: String,
      inverted: Boolean,
      disabled: Boolean,
      icon: String,
    },
  },
  Qn = { class: "relative top-0.5" },
  es = ["href"],
  ts = { class: "relative top-0.5" };
function ns(t, e, n, s, i, r) {
  return n.link
    ? (E(),
      A(
        "a",
        {
          key: 1,
          href: n.link,
          target: "_blank",
          class: ue([
            "main-button rounded",
            {
              "btn-large": n.size == "large",
              "btn-small": n.size == "small",
              "btn-success": n.type == "success",
              "btn-error": n.type == "error",
              "btn-disabled": n.disabled,
              inverted: n.inverted,
              "icon-right": n.icon == "right",
              disabled: n.disabled,
            },
          ]),
        },
        [pe(t.$slots, "icon"), m("span", ts, ee(n.text), 1)],
        10,
        es
      ))
    : (E(),
      A(
        "button",
        {
          key: 0,
          class: ue([
            "main-button rounded",
            {
              "btn-large": n.size == "large",
              "btn-small": n.size == "small",
              "btn-success": n.type == "success",
              "btn-error": n.type == "error",
              "btn-disabled": n.disabled,
              inverted: n.inverted,
              "icon-right": n.icon == "right",
              disabled: n.disabled,
            },
          ]),
        },
        [pe(t.$slots, "icon"), m("span", Qn, ee(n.text), 1)],
        2
      ));
}
const Re = V(Zn, [["render", ns]]),
  ss = { name: "IconRobot" },
  is = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "21",
    height: "21",
    viewBox: "0 0 21 21",
    fill: "none",
  },
  rs = m(
    "path",
    {
      d: "M17.1406 2.1499H3.85938C3.51367 2.1499 3.23438 2.4292 3.23438 2.7749V15.6655C3.23438 16.0112 3.51367 16.2905 3.85938 16.2905H17.1406C17.4863 16.2905 17.7656 16.0112 17.7656 15.6655V2.7749C17.7656 2.4292 17.4863 2.1499 17.1406 2.1499ZM6.35938 7.30615C6.35938 6.65967 6.88477 6.13428 7.53125 6.13428C8.17773 6.13428 8.70312 6.65967 8.70312 7.30615C8.70312 7.95264 8.17773 8.47803 7.53125 8.47803C6.88477 8.47803 6.35938 7.95264 6.35938 7.30615ZM13.625 12.1499C13.625 12.2358 13.5547 12.3062 13.4688 12.3062H7.53125C7.44531 12.3062 7.375 12.2358 7.375 12.1499V10.978C7.375 10.8921 7.44531 10.8218 7.53125 10.8218H13.4688C13.5547 10.8218 13.625 10.8921 13.625 10.978V12.1499ZM13.4688 8.47803C12.8223 8.47803 12.2969 7.95264 12.2969 7.30615C12.2969 6.65967 12.8223 6.13428 13.4688 6.13428C14.1152 6.13428 14.6406 6.65967 14.6406 7.30615C14.6406 7.95264 14.1152 8.47803 13.4688 8.47803ZM16.1055 17.7749H4.89453C4.625 17.7749 4.40625 18.0542 4.40625 18.3999V19.4937C4.40625 19.5796 4.46094 19.6499 4.52734 19.6499H16.4707C16.5371 19.6499 16.5918 19.5796 16.5918 19.4937V18.3999C16.5938 18.0542 16.375 17.7749 16.1055 17.7749Z",
      fill: "white",
    },
    null,
    -1
  ),
  os = [rs];
function as(t, e, n, s, i, r) {
  return E(), A("svg", is, os);
}
const ze = V(ss, [["render", as]]),
  ls = {
    data() {
      return {
        open: !1,
        scrolled: !1,
        links: [
          { name: "Home", url: "/", hash: "" },
          { name: "About", url: "/#about", hash: "#about" },
          { name: "Tokenomics", url: "/#tokenomics", hash: "#tokenomics" },
          { name: "Buy", url: "/#buy", hash: "#buy" },
        ],
      };
    },
    components: { Logo: Yt, MobileButton: Jn, Button: Re, IconRobot: ze },
    methods: {
      toggle() {
        this.open = !this.open;
      },
    },
    mounted() {
      window.addEventListener("scroll", () => {
        window.pageYOffset > 0 ? (this.scrolled = !0) : (this.scrolled = !1);
      });
    },
  },
  ds = {
    class:
      "logo flex items-center justify-between text-white md:w-max w-full mx-auto md:bg-wrapper bg-transparent md:border border-0 border-white/50 md:rounded-full rounded-none px-5 py-2 gap-5 md:mt-5 mt-0",
  },
  cs = { class: "md:flex hidden w-max gap-5" },
  us = { class: "relative top-0.5" },
  fs = { class: "w-full md:flex md:items-center md:w-auto gap-6 md:pb-0" },
  ps = { class: "flex w-full md:flex-row flex-col gap-2" },
  ms = { class: "relative top-0.5" },
  hs = { class: "mt-2 pb-4" };
function gs(t, e, n, s, i, r) {
  const o = $("Logo"),
    l = $("router-link"),
    a = $("MobileButton"),
    u = $("IconRobot"),
    d = $("Button");
  return (
    E(),
    A(
      "nav",
      {
        class: ue([
          {
            "open gap-0": i.open,
            "close gap-10": !i.open,
            "bg-transparent border-b border-transparent":
              !i.scrolled && !i.open,
            "bg-black border-b border-transparent": !i.scrolled && i.open,
            "md:bg-transparent bg-wrapper/80 md:backdrop-blur-none backdrop-blur-md md:border-0 border-b border-white":
              i.scrolled,
          },
          "flex md:flex-row flex-col items-center fixed top-0 w-full z-50",
        ]),
      },
      [
        m("div", ds, [
          M(o),
          m("div", cs, [
            (E(!0),
            A(
              q,
              null,
              K(
                i.links,
                (c, f) => (
                  E(),
                  U(
                    l,
                    {
                      key: f,
                      to: c.url,
                      class: ue([
                        "no-underline block md:inline-block md:mt-0 text-xl px-3",
                        {
                          "text-white/75 hover:text-white p-2 rounded":
                            c.hash != t.$route.hash,
                          "bg-secondary p-2 rounded-full flex items-center justify-center":
                            c.hash == t.$route.hash,
                        },
                      ]),
                      onClick: e[0] || (e[0] = (p) => (i.open = !1)),
                    },
                    { default: L(() => [m("span", us, ee(c.name), 1)]), _: 2 },
                    1032,
                    ["to", "class"]
                  )
                )
              ),
              128
            )),
          ]),
          m(
            "button",
            {
              class: "md:hidden flex",
              onClick: e[1] || (e[1] = (...c) => r.toggle && r.toggle(...c)),
            },
            [M(a)]
          ),
        ]),
        j(
          m(
            "div",
            fs,
            [
              m("div", ps, [
                (E(!0),
                A(
                  q,
                  null,
                  K(
                    i.links,
                    (c, f) => (
                      E(),
                      U(
                        l,
                        {
                          key: f,
                          to: c.url,
                          class: ue([
                            "no-underline block md:inline-block md:mt-0 text-sm",
                            {
                              "text-white/75 hover:text-white p-2 rounded":
                                c.hash != t.$route.hash,
                              "bg-secondary p-2 rounded":
                                c.hash == t.$route.hash,
                            },
                          ]),
                          onClick: e[2] || (e[2] = (p) => (i.open = !1)),
                        },
                        {
                          default: L(() => [m("span", ms, ee(c.name), 1)]),
                          _: 2,
                        },
                        1032,
                        ["to", "class"]
                      )
                    )
                  ),
                  128
                )),
              ]),
              m("div", hs, [
                M(
                  d,
                  {
                    class: "md:flex hidden",
                    text: "Buy GROK",
                    icon: "right",
                    link: "https://app.uniswap.org/tokens/ethereum/0x8390a1da07e376ef7add4be859ba74fb83aa02d5",
                  },
                  { icon: L(() => [M(u)]), _: 1 }
                ),
              ]),
            ],
            512
          ),
          [[Ln, i.open]]
        ),
      ],
      2
    )
  );
}
const vs = V(ls, [["render", gs]]),
  ws = { name: "IconCopy" },
  ys = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "none",
  },
  bs = m(
    "path",
    {
      d: "M13.8334 2.23328H7.16671C6.81309 2.23328 6.47395 2.37375 6.2239 2.6238C5.97385 2.87385 5.83337 3.21299 5.83337 3.56661V4.89994H11.1667C11.5203 4.89994 11.8595 5.04042 12.1095 5.29047C12.3596 5.54052 12.5 5.87965 12.5 6.23328V11.5666H13.8334C14.187 11.5666 14.5261 11.4261 14.7762 11.1761C15.0262 10.926 15.1667 10.5869 15.1667 10.2333V3.56661C15.1667 3.21299 15.0262 2.87385 14.7762 2.6238C14.5261 2.37375 14.187 2.23328 13.8334 2.23328Z",
      fill: "white",
    },
    null,
    -1
  ),
  _s = m(
    "path",
    {
      d: "M3.16671 15.5666H9.83337C10.5687 15.5666 11.1667 14.9686 11.1667 14.2333V7.56661C11.1667 6.83128 10.5687 6.23328 9.83337 6.23328H3.16671C2.43137 6.23328 1.83337 6.83128 1.83337 7.56661V14.2333C1.83337 14.9686 2.43137 15.5666 3.16671 15.5666ZM4.50004 8.89994H8.50004V10.2333H4.50004V8.89994ZM4.50004 11.5666H8.50004V12.8999H4.50004V11.5666Z",
      fill: "white",
    },
    null,
    -1
  ),
  xs = [bs, _s];
function Ss(t, e, n, s, i, r) {
  return E(), A("svg", ys, xs);
}
const Ts = V(ws, [["render", Ss]]),
  Jt = "/img/grok.png",
  Zt = "/svg/top-effect.svg",
  Ct = "/svg/hero-effect.svg",
  Es = {
    name: "Hero",
    components: { Button: Re, IconRobot: ze, IconCopy: Ts },
    data() {
      return {
        socials: [
          { icon: "/socials/telegram.svg", link: "https://t.me/GROKERC20" },
          {
            icon: "/socials/dextools.svg",
            link: "https://www.dextools.io/app/en/ether/pair-explorer/0x8390a1DA07E376ef7aDd4Be859BA74Fb83aA02D5",
          },
          { icon: "/socials/x.svg", link: "https://twitter.com/Grok_Project" },
        ],
      };
    },
    methods: {
      async onCopy(t) {
        try {
          await navigator.clipboard.writeText(t);
        } catch {}
      },
    },
  },
  Cs = {
    id: "home",
    class:
      "w-full sm:mt-56 mt-24 relative flex flex-col items-center justify-center h-screen pb-28",
  },
  Ps = m(
    "div",
    { class: "block md:hidden h-2/3 overflow-hidden mb-36 w-full" },
    [
      m("img", {
        src: Jt,
        alt: "grok",
        class:
          "relative h-full w-full inset-x-0 top-0 animate__animated animate__zoomIn block md:hidden z-4 object-contain",
      }),
      m("img", {
        src: Zt,
        alt: "top-effect",
        class: "absolute -z-1 w-full h-96 top-0 left-0 right-0",
      }),
    ],
    -1
  ),
  Os = {
    class:
      "h-auto w-full flex flex-col-reverse md:flex-row-reverse items-center justify-center max-w-section mx-auto px-10 bg-main bg-cover rounded-3xl relative bg-[#040404] gap-5 z-5 -mt-80 pt-11",
  },
  Ms = { class: "w-full" },
  As = m(
    "h1",
    {
      class:
        "sm:text-[75px] text-[36px] z-5 font-bold leading-none text-center",
    },
    " In Grok We Trust. ",
    -1
  ),
  Is = m(
    "p",
    { class: "text-white z-5 text-center text-subtitle font-medium" },
    [
      m("span", { class: "text-white" }, "GROK"),
      W(" is establishing a community of "),
      m("span", { class: "text-white" }, "GROK AI"),
      W(" enthusiasts who want to save "),
      m("br"),
      W("the world and love making memes while doing it! "),
    ],
    -1
  ),
  ks = {
    class:
      "flex md:flex-row flex-col-reverse justify-center md:items-end items-center gap-5 z-5 relative top-10 mb-5",
  },
  $s = { class: "flex flex-col md:items-start items-center gap-2" },
  Bs = m("h1", { class: "text-xl" }, "Contract Address", -1),
  Ls = {
    class: "bg-[#1A1A1A] text-white/75 text-sm rounded p-2.5 pr-10 relative",
  },
  Rs = m(
    "h1",
    { class: "overflow-x-auto sm:w-max w-48 relative top-1" },
    " 0x8390a1DA07E376ef7aDd4Be859BA74Fb83aA02D5 ",
    -1
  ),
  zs = { class: "flex items-center justify-center gap-8 z-5 relative top-12" },
  Ds = ["href"],
  Ns = ["src"],
  js = Rn(
    '<div class="hidden md:block w-2/3 h-full"><img src="' +
      Zt +
      '" alt="top-effect" class="absolute -z-1 h-full md:-top-24 -top-2/3 -left-32"><img src="' +
      Ct +
      '" alt="hero-effect" class="absolute bottom-0 inset-x-0 rounded-b-3xl z-3"><img src="' +
      Ct +
      '" alt="hero-effect" class="absolute bottom-24 inset-x-0 z-3 opacity-50"><img src="' +
      Jt +
      '" alt="grok" class="relative h-full top-0 md:opacity-100 opacity-25 animate__animated animate__zoomIn sm:block hidden"></div>',
    1
  );
function Fs(t, e, n, s, i, r) {
  const o = $("IconCopy"),
    l = $("IconRobot"),
    a = $("Button");
  return (
    E(),
    A("div", Cs, [
      Ps,
      m("div", Os, [
        m("div", Ms, [
          As,
          Is,
          m("div", ks, [
            m("div", $s, [
              Bs,
              m("div", Ls, [
                Rs,
                m(
                  "button",
                  {
                    class: "absolute right-3 inset-y-0",
                    onClick:
                      e[0] ||
                      (e[0] = (u) =>
                        r.onCopy("0x8390a1DA07E376ef7aDd4Be859BA74Fb83aA02D5")),
                  },
                  [M(o)]
                ),
              ]),
            ]),
            M(
              a,
              {
                text: "Buy GROK",
                icon: "right",
                link: "https://app.uniswap.org/tokens/ethereum/0x8390a1da07e376ef7add4be859ba74fb83aa02d5",
              },
              { icon: L(() => [M(l)]), _: 1 }
            ),
          ]),
          m("div", zs, [
            (E(!0),
            A(
              q,
              null,
              K(
                i.socials,
                (u, d) => (
                  E(),
                  A(
                    "a",
                    {
                      key: d,
                      href: u.link,
                      target: "_blank",
                      class:
                        "bg-wrapper/75 w-11 h-11 p-3 rounded-full backdrop-blur-md border border-white/50",
                    },
                    [m("img", { src: u.icon, alt: "social" }, null, 8, Ns)],
                    8,
                    Ds
                  )
                )
              ),
              128
            )),
          ]),
        ]),
        js,
      ]),
    ])
  );
}
const Gs = V(Es, [["render", Fs]]),
  Vs = { props: { title: String, subtitle: String } },
  Hs = { class: "max-w-section relative" },
  qs = { class: "mb-5" },
  Us = { class: "text-title" },
  Ws = { class: "text-subtitle" };
function Xs(t, e, n, s, i, r) {
  return (
    E(),
    A("section", Hs, [
      m("div", qs, [
        m("h2", Us, ee(n.title), 1),
        m("span", Ws, ee(n.subtitle), 1),
      ]),
      pe(t.$slots, "default"),
    ])
  );
}
const ge = V(Vs, [["render", Xs]]),
  Ks = { name: "Block" },
  Ys = {
    class:
      "bg-wrapper w-full border border-white/10 rounded-2xl relative backdrop-blur-3xl",
  };
function Js(t, e, n, s, i, r) {
  return E(), A("div", Ys, [pe(t.$slots, "default")]);
}
const Se = V(Ks, [["render", Js]]);
(function () {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(
        document.createTextNode(
          '.vue3-marquee{display:flex!important;position:relative}.vue3-marquee.horizontal{overflow-x:hidden!important;flex-direction:row!important;width:100%;height:max-content}.vue3-marquee.vertical{overflow-y:hidden!important;flex-direction:column!important;height:100%;width:max-content}.vue3-marquee:hover div{animation-play-state:var(--pauseOnHover)}.vue3-marquee:active div{animation-play-state:var(--pauseOnClick)}.vue3-marquee>.marquee{flex:0 0 auto;min-width:var(--min-width);min-height:var(--min-height);z-index:1;animation:var(--orientation) var(--duration) linear var(--delay) var(--loops);animation-play-state:var(--pauseAnimation);animation-direction:var(--direction)}.vue3-marquee.horizontal>.marquee{display:flex;flex-direction:row;align-items:center}.vue3-marquee.vertical>.marquee{display:flex;flex-direction:column;align-items:center}@keyframes scrollX{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes scrollY{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.vue3-marquee>.overlay{position:absolute;width:100%;height:100%}.vue3-marquee>.transparent-overlay{position:absolute;width:100%;height:100%}.vue3-marquee>.overlay:before,.vue3-marquee>.overlay:after{content:"";position:absolute;z-index:2}.vue3-marquee.horizontal>.overlay:before,.vue3-marquee.horizontal>.overlay:after{background:linear-gradient(to right,var(--gradient-color));height:100%;width:var(--gradient-length)}.vue3-marquee.vertical>.overlay:before,.vue3-marquee.vertical>.overlay:after{background:linear-gradient(to bottom,var(--gradient-color));height:var(--gradient-length);width:100%}.vue3-marquee.horizontal>.overlay:after{transform:rotate(180deg)}.vue3-marquee.vertical>.overlay:after{transform:rotate(-180deg)}.vue3-marquee>.overlay:before{left:0;top:0}.vue3-marquee.horizontal>.overlay:after{right:0;top:0}.vue3-marquee.vertical>.overlay:after{left:0;bottom:0}'
        )
      ),
        document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var Zs = Object.defineProperty,
  Pt = Object.getOwnPropertySymbols,
  Qs = Object.prototype.hasOwnProperty,
  ei = Object.prototype.propertyIsEnumerable,
  Ot = (t, e, n) =>
    e in t
      ? Zs(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  Mt = (t, e) => {
    for (var n in e || (e = {})) Qs.call(e, n) && Ot(t, n, e[n]);
    if (Pt) for (var n of Pt(e)) ei.call(e, n) && Ot(t, n, e[n]);
    return t;
  },
  ti = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [s, i] of e) n[s] = i;
    return n;
  };
const ni = zn({
    props: {
      vertical: { type: Boolean, default: !1 },
      direction: { type: String, default: "normal" },
      duration: { type: Number, default: 20 },
      delay: { type: Number, default: 0 },
      loop: { type: Number, default: 0 },
      clone: { type: Boolean, default: !1 },
      gradient: { type: Boolean, default: !1 },
      gradientColor: { type: Array, default: [255, 255, 255] },
      gradientWidth: { type: String },
      gradientLength: { type: String },
      pauseOnHover: { type: Boolean, default: !1 },
      pauseOnClick: { type: Boolean, default: !1 },
      pause: { type: Boolean, default: !1 },
    },
    emits: ["onComplete", "onLoopComplete", "onPause", "onResume"],
    setup(t, { emit: e }) {
      const n = D(0),
        s = D("100%"),
        i = D("100%"),
        r = D(0),
        o = D(!1),
        l = D(0),
        a = D(0),
        u = D(0),
        d = D(0),
        c = D(0),
        f = D(null),
        p = D("200px"),
        h = D(!1),
        g = D(null),
        x = D(null),
        w = async () => {
          await S(), r.value++;
        },
        S = async () => {
          t.vertical && (o.value = !0),
            setInterval(() => {
              if (
                ((s.value = "0%"),
                (i.value = "0%"),
                g.value !== null && x.value !== null)
              )
                if (g.value && x.value)
                  if (
                    t.vertical &&
                    "clientHeight" in g.value &&
                    "clientHeight" in x.value
                  ) {
                    (d.value = g.value.clientHeight),
                      (u.value = x.value.clientHeight);
                    const b = Math.ceil(u.value / d.value);
                    return (
                      (n.value = isFinite(b) ? b : 0), (o.value = !1), n.value
                    );
                  } else if (
                    !t.vertical &&
                    "clientWidth" in g.value &&
                    "clientWidth" in x.value
                  ) {
                    (a.value = g.value.clientWidth),
                      (l.value = x.value.clientWidth);
                    const b = Math.ceil(l.value / a.value);
                    return (n.value = isFinite(b) ? b : 0), n.value;
                  } else return (s.value = "100%"), (i.value = "100%"), 0;
                else return (s.value = "100%"), (i.value = "100%"), 0;
              else return (s.value = "100%"), (i.value = "100%"), 0;
            }, 100);
        };
      Me(a, async () => {
        t.clone && w();
      }),
        Me(l, async () => {
          t.clone && w();
        }),
        Me(
          () => t.pause,
          (b, O) => {
            b !== O && e(b ? "onResume" : "onPause");
          }
        );
      const y = () => {
          t.pauseOnHover && e("onPause");
        },
        T = () => {
          t.pauseOnHover && e("onResume");
        },
        P = () => {
          t.pauseOnClick && e("onPause");
        },
        k = () => {
          t.pauseOnClick && e("onResume");
        },
        N = st(() => {
          const b = {
              "--duration": `${t.duration}s`,
              "--delay": `${t.delay}s`,
              "--direction": `${t.direction}`,
              "--pauseOnHover": `${t.pauseOnHover ? "paused" : "running"}`,
              "--pauseOnClick": `${t.pauseOnClick ? "paused" : "running"}`,
              "--pauseAnimation": `${
                (t.vertical && o.value) || t.pause ? "paused" : "running"
              }`,
              "--loops": `${t.loop === 0 ? "infinite" : t.loop}`,
              "--gradient-color": `rgba(${t.gradientColor[0]}, ${t.gradientColor[1]}, ${t.gradientColor[2]}, 1), rgba(${t.gradientColor[0]}, ${t.gradientColor[1]}, ${t.gradientColor[2]}, 0)`,
              "--gradient-length": `${p.value}`,
              "--min-width": `${s.value}`,
              "--min-height": `${i.value}`,
            },
            O = { "--orientation": "scrollX", orientation: "horizontal" };
          return (
            t.vertical && (O["--orientation"] = "scrollY"), Mt(Mt({}, b), O)
          );
        }),
        C = st(() => !!t.gradient),
        _ = async () => {
          t.vertical
            ? ((i.value = "100%"), (s.value = "auto"))
            : ((i.value = "auto"), (s.value = "100%")),
            t.gradient &&
              (t.gradientWidth
                ? (console.warn(
                    "The `gradientWidth` prop has been deprecated and will be removed in a future release. Please use `gradientLength` instead."
                  ),
                  (p.value = t.gradientWidth))
                : t.gradientLength && (p.value = t.gradientLength)),
            t.clone && (await S(), w()),
            (h.value = !0);
        };
      return (
        pt(async () => {
          _(),
            (f.value = setInterval(() => {
              c.value++,
                t.loop !== 0 &&
                  c.value === t.loop &&
                  (e("onComplete"), clearInterval(f.value)),
                e("onLoopComplete");
            }, t.duration * 1e3));
        }),
        mt(() => {
          clearInterval(f.value);
        }),
        {
          ready: h,
          contentWidth: a,
          containerWidth: l,
          contentHeight: d,
          containerHeight: u,
          loopCounter: c,
          loopInterval: f,
          minWidth: s,
          minHeight: i,
          marqueeContent: g,
          marqueeOverlayContainer: x,
          componentKey: r,
          showGradient: C,
          cloneAmount: n,
          ForcesUpdate: w,
          checkForClone: S,
          setupMarquee: _,
          getCurrentStyle: N,
          hoverStarted: y,
          hoverEnded: T,
          mouseDown: P,
          mouseUp: k,
        }
      );
    },
  }),
  si = {
    class: "transparent-overlay",
    ref: "marqueeOverlayContainer",
    "aria-hidden": !0,
  },
  ii = { class: "marquee", ref: "marqueeContent" },
  ri = { class: "marquee", "aria-hidden": !0 };
function oi(t, e, n, s, i, r) {
  return t.ready
    ? (E(),
      A(
        "div",
        {
          class: ue([
            "vue3-marquee",
            { vertical: t.vertical, horizontal: !t.vertical },
          ]),
          style: Dn(t.getCurrentStyle),
          key: t.componentKey,
          onMouseenter:
            e[0] || (e[0] = (...o) => t.hoverStarted && t.hoverStarted(...o)),
          onMouseleave:
            e[1] || (e[1] = (...o) => t.hoverEnded && t.hoverEnded(...o)),
          onMousedown:
            e[2] || (e[2] = (...o) => t.mouseDown && t.mouseDown(...o)),
          onMouseup: e[3] || (e[3] = (...o) => t.mouseUp && t.mouseUp(...o)),
        },
        [
          m("div", si, null, 512),
          t.showGradient
            ? (E(),
              A(
                "div",
                {
                  key: 0,
                  "aria-hidden": !0,
                  class: ue([
                    "overlay",
                    { vertical: t.vertical, horizontal: !t.vertical },
                  ]),
                },
                null,
                2
              ))
            : Et("", !0),
          m("div", ii, [pe(t.$slots, "default")], 512),
          m("div", ri, [pe(t.$slots, "default")]),
          (E(!0),
          A(
            q,
            null,
            K(
              t.cloneAmount,
              (o) => (
                E(),
                A(
                  "div",
                  { "aria-hidden": !0, class: "marquee cloned", key: o },
                  [pe(t.$slots, "default")]
                )
              )
            ),
            128
          )),
        ],
        38
      ))
    : Et("", !0);
}
var De = ti(ni, [["render", oi]]);
const ai = {},
  li = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
  },
  di = m(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10.75 1.5C10.5511 1.5 10.3603 1.57902 10.2197 1.71967C10.079 1.86032 10 2.05109 10 2.25C10 2.44891 10.079 2.63968 10.2197 2.78033C10.3603 2.92098 10.5511 3 10.75 3H12.44L8.22 7.22C8.08752 7.36217 8.0154 7.55022 8.01882 7.74452C8.02225 7.93882 8.10097 8.12421 8.23838 8.26162C8.37579 8.39903 8.56118 8.47775 8.75548 8.48117C8.94978 8.4846 9.13783 8.41248 9.28 8.28L13.5 4.06V5.75C13.5 5.94891 13.579 6.13968 13.7197 6.28033C13.8603 6.42098 14.0511 6.5 14.25 6.5C14.4489 6.5 14.6397 6.42098 14.7803 6.28033C14.921 6.13968 15 5.94891 15 5.75V1.5H10.75ZM2.5 4.5V13.5C2.5 13.6326 2.55268 13.7598 2.64645 13.8536C2.74021 13.9473 2.86739 14 3 14H12C12.1326 14 12.2598 13.9473 12.3536 13.8536C12.4473 13.7598 12.5 13.6326 12.5 13.5V9.25C12.5 9.05109 12.579 8.86032 12.7197 8.71967C12.8603 8.57902 13.0511 8.5 13.25 8.5C13.4489 8.5 13.6397 8.57902 13.7803 8.71967C13.921 8.86032 14 9.05109 14 9.25V13.5C14 14.0304 13.7893 14.5391 13.4142 14.9142C13.0391 15.2893 12.5304 15.5 12 15.5H3C2.46957 15.5 1.96086 15.2893 1.58579 14.9142C1.21071 14.5391 1 14.0304 1 13.5V4.5C1 3.96957 1.21071 3.46086 1.58579 3.08579C1.96086 2.71071 2.46957 2.5 3 2.5H7.25C7.44891 2.5 7.63968 2.57902 7.78033 2.71967C7.92098 2.86032 8 3.05109 8 3.25C8 3.44891 7.92098 3.63968 7.78033 3.78033C7.63968 3.92098 7.44891 4 7.25 4H3C2.86739 4 2.74021 4.05268 2.64645 4.14645C2.55268 4.24021 2.5 4.36739 2.5 4.5Z",
      fill: "white",
    },
    null,
    -1
  ),
  ci = [di];
function ui(t, e) {
  return E(), A("svg", li, ci);
}
const Qt = V(ai, [["render", ui]]);
function At(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "constructor" in t &&
    t.constructor === Object
  );
}
function ht(t, e) {
  t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((n) => {
      typeof t[n] > "u"
        ? (t[n] = e[n])
        : At(e[n]) &&
          At(t[n]) &&
          Object.keys(e[n]).length > 0 &&
          ht(t[n], e[n]);
    });
}
const en = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function ae() {
  const t = typeof document < "u" ? document : {};
  return ht(t, en), t;
}
const fi = {
  document: en,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  },
};
function J() {
  const t = typeof window < "u" ? window : {};
  return ht(t, fi), t;
}
function pi(t) {
  return (
    t === void 0 && (t = ""),
    t
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
function mi(t) {
  const e = t;
  Object.keys(e).forEach((n) => {
    try {
      e[n] = null;
    } catch {}
    try {
      delete e[n];
    } catch {}
  });
}
function it(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function me() {
  return Date.now();
}
function hi(t) {
  const e = J();
  let n;
  return (
    e.getComputedStyle && (n = e.getComputedStyle(t, null)),
    !n && t.currentStyle && (n = t.currentStyle),
    n || (n = t.style),
    n
  );
}
function gi(t, e) {
  e === void 0 && (e = "x");
  const n = J();
  let s, i, r;
  const o = hi(t);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (r = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((r =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    e === "x" &&
      (n.WebKitCSSMatrix
        ? (i = r.m41)
        : s.length === 16
        ? (i = parseFloat(s[12]))
        : (i = parseFloat(s[4]))),
    e === "y" &&
      (n.WebKitCSSMatrix
        ? (i = r.m42)
        : s.length === 16
        ? (i = parseFloat(s[13]))
        : (i = parseFloat(s[5]))),
    i || 0
  );
}
function Pe(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function vi(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function Y() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (s != null && !vi(s)) {
      const i = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
      for (let r = 0, o = i.length; r < o; r += 1) {
        const l = i[r],
          a = Object.getOwnPropertyDescriptor(s, l);
        a !== void 0 &&
          a.enumerable &&
          (Pe(t[l]) && Pe(s[l])
            ? s[l].__swiper__
              ? (t[l] = s[l])
              : Y(t[l], s[l])
            : !Pe(t[l]) && Pe(s[l])
            ? ((t[l] = {}), s[l].__swiper__ ? (t[l] = s[l]) : Y(t[l], s[l]))
            : (t[l] = s[l]));
      }
    }
  }
  return t;
}
function Oe(t, e, n) {
  t.style.setProperty(e, n);
}
function tn(t) {
  let { swiper: e, targetPosition: n, side: s } = t;
  const i = J(),
    r = -e.translate;
  let o = null,
    l;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(e.cssModeFrameID);
  const u = n > r ? "next" : "prev",
    d = (f, p) => (u === "next" && f >= p) || (u === "prev" && f <= p),
    c = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const f = Math.max(Math.min((l - o) / a, 1), 0),
        p = 0.5 - Math.cos(f * Math.PI) / 2;
      let h = r + p * (n - r);
      if ((d(h, n) && (h = n), e.wrapperEl.scrollTo({ [s]: h }), d(h, n))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [s]: h });
          }),
          i.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = i.requestAnimationFrame(c);
    };
  c();
}
function oe(t, e) {
  return e === void 0 && (e = ""), [...t.children].filter((n) => n.matches(e));
}
function Be(t) {
  try {
    console.warn(t);
    return;
  } catch {}
}
function rt(t, e) {
  e === void 0 && (e = []);
  const n = document.createElement(t);
  return n.classList.add(...(Array.isArray(e) ? e : pi(e))), n;
}
function wi(t, e) {
  const n = [];
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling;
    e ? s.matches(e) && n.push(s) : n.push(s), (t = s);
  }
  return n;
}
function yi(t, e) {
  const n = [];
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling;
    e ? s.matches(e) && n.push(s) : n.push(s), (t = s);
  }
  return n;
}
function ce(t, e) {
  return J().getComputedStyle(t, null).getPropertyValue(e);
}
function It(t) {
  let e = t,
    n;
  if (e) {
    for (n = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (n += 1);
    return n;
  }
}
function bi(t, e) {
  const n = [];
  let s = t.parentElement;
  for (; s; ) e ? s.matches(e) && n.push(s) : n.push(s), (s = s.parentElement);
  return n;
}
function qe(t, e) {
  function n(s) {
    s.target === t && (e.call(t, s), t.removeEventListener("transitionend", n));
  }
  e && t.addEventListener("transitionend", n);
}
function kt(t, e, n) {
  const s = J();
  return n
    ? t[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
        )
    : t.offsetWidth;
}
let Ue;
function _i() {
  const t = J(),
    e = ae();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in t ||
      (t.DocumentTouch && e instanceof t.DocumentTouch)
    ),
  };
}
function nn() {
  return Ue || (Ue = _i()), Ue;
}
let We;
function xi(t) {
  let { userAgent: e } = t === void 0 ? {} : t;
  const n = nn(),
    s = J(),
    i = s.navigator.platform,
    r = e || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = s.screen.width,
    a = s.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = r.match(/(iPad).*OS\s([\d_]+)/);
  const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = i === "Win32";
  let h = i === "MacIntel";
  const g = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !d &&
      h &&
      n.touch &&
      g.indexOf(`${l}x${a}`) >= 0 &&
      ((d = r.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, "13_0_0"]),
      (h = !1)),
    u && !p && ((o.os = "android"), (o.android = !0)),
    (d || f || c) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Si(t) {
  return t === void 0 && (t = {}), We || (We = xi(t)), We;
}
let Xe;
function Ti() {
  const t = J();
  let e = !1;
  function n() {
    const s = t.navigator.userAgent.toLowerCase();
    return (
      s.indexOf("safari") >= 0 &&
      s.indexOf("chrome") < 0 &&
      s.indexOf("android") < 0
    );
  }
  if (n()) {
    const s = String(t.navigator.userAgent);
    if (s.includes("Version/")) {
      const [i, r] = s
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((o) => Number(o));
      e = i < 16 || (i === 16 && r < 2);
    }
  }
  return {
    isSafari: e || n(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      t.navigator.userAgent
    ),
  };
}
function Ei() {
  return Xe || (Xe = Ti()), Xe;
}
function Ci(t) {
  let { swiper: e, on: n, emit: s } = t;
  const i = J();
  let r = null,
    o = null;
  const l = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((r = new ResizeObserver((c) => {
          o = i.requestAnimationFrame(() => {
            const { width: f, height: p } = e;
            let h = f,
              g = p;
            c.forEach((x) => {
              let { contentBoxSize: w, contentRect: S, target: y } = x;
              (y && y !== e.el) ||
                ((h = S ? S.width : (w[0] || w).inlineSize),
                (g = S ? S.height : (w[0] || w).blockSize));
            }),
              (h !== f || g !== p) && l();
          });
        })),
        r.observe(e.el));
    },
    u = () => {
      o && i.cancelAnimationFrame(o),
        r && r.unobserve && e.el && (r.unobserve(e.el), (r = null));
    },
    d = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange");
    };
  n("init", () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", d);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", d);
    });
}
function Pi(t) {
  let { swiper: e, extendParams: n, on: s, emit: i } = t;
  const r = [],
    o = J(),
    l = function (d, c) {
      c === void 0 && (c = {});
      const f = o.MutationObserver || o.WebkitMutationObserver,
        p = new f((h) => {
          if (e.__preventObserver__) return;
          if (h.length === 1) {
            i("observerUpdate", h[0]);
            return;
          }
          const g = function () {
            i("observerUpdate", h[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(g)
            : o.setTimeout(g, 0);
        });
      p.observe(d, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: typeof c.childList > "u" ? !0 : c.childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData,
      }),
        r.push(p);
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const d = bi(e.hostEl);
          for (let c = 0; c < d.length; c += 1) l(d[c]);
        }
        l(e.hostEl, { childList: e.params.observeSlideChildren }),
          l(e.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      r.forEach((d) => {
        d.disconnect();
      }),
        r.splice(0, r.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", a),
    s("destroy", u);
}
var Oi = {
  on(t, e, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const i = n ? "unshift" : "push";
    return (
      t.split(" ").forEach((r) => {
        s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][i](e);
      }),
      s
    );
  },
  once(t, e, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    function i() {
      s.off(t, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
        o[l] = arguments[l];
      e.apply(s, o);
    }
    return (i.__emitterProxy = e), s.on(t, i, n);
  },
  onAny(t, e) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
    const s = e ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[s](t), n;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const n = e.eventsAnyListeners.indexOf(t);
    return n >= 0 && e.eventsAnyListeners.splice(n, 1), e;
  },
  off(t, e) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        t.split(" ").forEach((s) => {
          typeof e > "u"
            ? (n.eventsListeners[s] = [])
            : n.eventsListeners[s] &&
              n.eventsListeners[s].forEach((i, r) => {
                (i === e || (i.__emitterProxy && i.__emitterProxy === e)) &&
                  n.eventsListeners[s].splice(r, 1);
              });
        }),
      n
    );
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let e, n, s;
    for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
      r[o] = arguments[o];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((e = r[0]), (n = r.slice(1, r.length)), (s = t))
        : ((e = r[0].events), (n = r[0].data), (s = r[0].context || t)),
      n.unshift(s),
      (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((u) => {
            u.apply(s, [a, ...n]);
          }),
          t.eventsListeners &&
            t.eventsListeners[a] &&
            t.eventsListeners[a].forEach((u) => {
              u.apply(s, n);
            });
      }),
      t
    );
  },
};
function Mi() {
  const t = this;
  let e, n;
  const s = t.el;
  typeof t.params.width < "u" && t.params.width !== null
    ? (e = t.params.width)
    : (e = s.clientWidth),
    typeof t.params.height < "u" && t.params.height !== null
      ? (n = t.params.height)
      : (n = s.clientHeight),
    !((e === 0 && t.isHorizontal()) || (n === 0 && t.isVertical())) &&
      ((e =
        e -
        parseInt(ce(s, "padding-left") || 0, 10) -
        parseInt(ce(s, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(ce(s, "padding-top") || 0, 10) -
        parseInt(ce(s, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(t, {
        width: e,
        height: n,
        size: t.isHorizontal() ? e : n,
      }));
}
function Ai() {
  const t = this;
  function e(b, O) {
    return parseFloat(b.getPropertyValue(t.getDirectionLabel(O)) || 0);
  }
  const n = t.params,
    { wrapperEl: s, slidesEl: i, size: r, rtlTranslate: o, wrongRTL: l } = t,
    a = t.virtual && n.virtual.enabled,
    u = a ? t.virtual.slides.length : t.slides.length,
    d = oe(i, `.${t.params.slideClass}, swiper-slide`),
    c = a ? t.virtual.slides.length : d.length;
  let f = [];
  const p = [],
    h = [];
  let g = n.slidesOffsetBefore;
  typeof g == "function" && (g = n.slidesOffsetBefore.call(t));
  let x = n.slidesOffsetAfter;
  typeof x == "function" && (x = n.slidesOffsetAfter.call(t));
  const w = t.snapGrid.length,
    S = t.slidesGrid.length;
  let y = n.spaceBetween,
    T = -g,
    P = 0,
    k = 0;
  if (typeof r > "u") return;
  typeof y == "string" && y.indexOf("%") >= 0
    ? (y = (parseFloat(y.replace("%", "")) / 100) * r)
    : typeof y == "string" && (y = parseFloat(y)),
    (t.virtualSize = -y),
    d.forEach((b) => {
      o ? (b.style.marginLeft = "") : (b.style.marginRight = ""),
        (b.style.marginBottom = ""),
        (b.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Oe(s, "--swiper-centered-offset-before", ""),
      Oe(s, "--swiper-centered-offset-after", ""));
  const N = n.grid && n.grid.rows > 1 && t.grid;
  N ? t.grid.initSlides(d) : t.grid && t.grid.unsetSlides();
  let C;
  const _ =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (b) => typeof n.breakpoints[b].slidesPerView < "u"
    ).length > 0;
  for (let b = 0; b < c; b += 1) {
    C = 0;
    let O;
    if (
      (d[b] && (O = d[b]),
      N && t.grid.updateSlide(b, O, d),
      !(d[b] && ce(O, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        _ && (d[b].style[t.getDirectionLabel("width")] = "");
        const B = getComputedStyle(O),
          I = O.style.transform,
          F = O.style.webkitTransform;
        if (
          (I && (O.style.transform = "none"),
          F && (O.style.webkitTransform = "none"),
          n.roundLengths)
        )
          C = t.isHorizontal() ? kt(O, "width", !0) : kt(O, "height", !0);
        else {
          const H = e(B, "width"),
            ne = e(B, "padding-left"),
            He = e(B, "padding-right"),
            z = e(B, "margin-left"),
            Z = e(B, "margin-right"),
            X = B.getPropertyValue("box-sizing");
          if (X && X === "border-box") C = H + z + Z;
          else {
            const { clientWidth: fe, offsetWidth: Ce } = O;
            C = H + ne + He + z + Z + (Ce - fe);
          }
        }
        I && (O.style.transform = I),
          F && (O.style.webkitTransform = F),
          n.roundLengths && (C = Math.floor(C));
      } else
        (C = (r - (n.slidesPerView - 1) * y) / n.slidesPerView),
          n.roundLengths && (C = Math.floor(C)),
          d[b] && (d[b].style[t.getDirectionLabel("width")] = `${C}px`);
      d[b] && (d[b].swiperSlideSize = C),
        h.push(C),
        n.centeredSlides
          ? ((T = T + C / 2 + P / 2 + y),
            P === 0 && b !== 0 && (T = T - r / 2 - y),
            b === 0 && (T = T - r / 2 - y),
            Math.abs(T) < 1 / 1e3 && (T = 0),
            n.roundLengths && (T = Math.floor(T)),
            k % n.slidesPerGroup === 0 && f.push(T),
            p.push(T))
          : (n.roundLengths && (T = Math.floor(T)),
            (k - Math.min(t.params.slidesPerGroupSkip, k)) %
              t.params.slidesPerGroup ===
              0 && f.push(T),
            p.push(T),
            (T = T + C + y)),
        (t.virtualSize += C + y),
        (P = C),
        (k += 1);
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, r) + x),
    o &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (s.style.width = `${t.virtualSize + y}px`),
    n.setWrapperSize &&
      (s.style[t.getDirectionLabel("width")] = `${t.virtualSize + y}px`),
    N && t.grid.updateWrapperSize(C, f),
    !n.centeredSlides)
  ) {
    const b = [];
    for (let O = 0; O < f.length; O += 1) {
      let B = f[O];
      n.roundLengths && (B = Math.floor(B)),
        f[O] <= t.virtualSize - r && b.push(B);
    }
    (f = b),
      Math.floor(t.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(t.virtualSize - r);
  }
  if (a && n.loop) {
    const b = h[0] + y;
    if (n.slidesPerGroup > 1) {
      const O = Math.ceil(
          (t.virtual.slidesBefore + t.virtual.slidesAfter) / n.slidesPerGroup
        ),
        B = b * n.slidesPerGroup;
      for (let I = 0; I < O; I += 1) f.push(f[f.length - 1] + B);
    }
    for (let O = 0; O < t.virtual.slidesBefore + t.virtual.slidesAfter; O += 1)
      n.slidesPerGroup === 1 && f.push(f[f.length - 1] + b),
        p.push(p[p.length - 1] + b),
        (t.virtualSize += b);
  }
  if ((f.length === 0 && (f = [0]), y !== 0)) {
    const b =
      t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
    d.filter((O, B) =>
      !n.cssMode || n.loop ? !0 : B !== d.length - 1
    ).forEach((O) => {
      O.style[b] = `${y}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let b = 0;
    h.forEach((B) => {
      b += B + (y || 0);
    }),
      (b -= y);
    const O = b - r;
    f = f.map((B) => (B <= 0 ? -g : B > O ? O + x : B));
  }
  if (n.centerInsufficientSlides) {
    let b = 0;
    if (
      (h.forEach((O) => {
        b += O + (y || 0);
      }),
      (b -= y),
      b < r)
    ) {
      const O = (r - b) / 2;
      f.forEach((B, I) => {
        f[I] = B - O;
      }),
        p.forEach((B, I) => {
          p[I] = B + O;
        });
    }
  }
  if (
    (Object.assign(t, {
      slides: d,
      snapGrid: f,
      slidesGrid: p,
      slidesSizesGrid: h,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Oe(s, "--swiper-centered-offset-before", `${-f[0]}px`),
      Oe(
        s,
        "--swiper-centered-offset-after",
        `${t.size / 2 - h[h.length - 1] / 2}px`
      );
    const b = -t.snapGrid[0],
      O = -t.slidesGrid[0];
    (t.snapGrid = t.snapGrid.map((B) => B + b)),
      (t.slidesGrid = t.slidesGrid.map((B) => B + O));
  }
  if (
    (c !== u && t.emit("slidesLengthChange"),
    f.length !== w &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit("snapGridLengthChange")),
    p.length !== S && t.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && t.updateSlidesOffset(),
    t.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const b = `${n.containerModifierClass}backface-hidden`,
      O = t.el.classList.contains(b);
    c <= n.maxBackfaceHiddenSlides
      ? O || t.el.classList.add(b)
      : O && t.el.classList.remove(b);
  }
}
function Ii(t) {
  const e = this,
    n = [],
    s = e.virtual && e.params.virtual.enabled;
  let i = 0,
    r;
  typeof t == "number"
    ? e.setTransition(t)
    : t === !0 && e.setTransition(e.params.speed);
  const o = (l) => (s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const l = e.activeIndex + r;
        if (l > e.slides.length && !s) break;
        n.push(o(l));
      }
  else n.push(o(e.activeIndex));
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < "u") {
      const l = n[r].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && (e.wrapperEl.style.height = `${i}px`);
}
function ki() {
  const t = this,
    e = t.slides,
    n = t.isElement
      ? t.isHorizontal()
        ? t.wrapperEl.offsetLeft
        : t.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset =
      (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) -
      n -
      t.cssOverflowAdjustment();
}
function $i(t) {
  t === void 0 && (t = (this && this.translate) || 0);
  const e = this,
    n = e.params,
    { slides: s, rtlTranslate: i, snapGrid: r } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -t;
  i && (o = t),
    s.forEach((a) => {
      a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * e.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < s.length; a += 1) {
    const u = s[a];
    let d = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (d -= s[0].swiperSlideOffset);
    const c =
        (o + (n.centeredSlides ? e.minTranslate() : 0) - d) /
        (u.swiperSlideSize + l),
      f =
        (o - r[0] + (n.centeredSlides ? e.minTranslate() : 0) - d) /
        (u.swiperSlideSize + l),
      p = -(o - d),
      h = p + e.slidesSizesGrid[a],
      g = p >= 0 && p <= e.size - e.slidesSizesGrid[a];
    ((p >= 0 && p < e.size - 1) ||
      (h > 1 && h <= e.size) ||
      (p <= 0 && h >= e.size)) &&
      (e.visibleSlides.push(u),
      e.visibleSlidesIndexes.push(a),
      s[a].classList.add(n.slideVisibleClass)),
      g && s[a].classList.add(n.slideFullyVisibleClass),
      (u.progress = i ? -c : c),
      (u.originalProgress = i ? -f : f);
  }
}
function Bi(t) {
  const e = this;
  if (typeof t > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    t = (e && e.translate && e.translate * d) || 0;
  }
  const n = e.params,
    s = e.maxTranslate() - e.minTranslate();
  let { progress: i, isBeginning: r, isEnd: o, progressLoop: l } = e;
  const a = r,
    u = o;
  if (s === 0) (i = 0), (r = !0), (o = !0);
  else {
    i = (t - e.minTranslate()) / s;
    const d = Math.abs(t - e.minTranslate()) < 1,
      c = Math.abs(t - e.maxTranslate()) < 1;
    (r = d || i <= 0), (o = c || i >= 1), d && (i = 0), c && (i = 1);
  }
  if (n.loop) {
    const d = e.getSlideIndexByData(0),
      c = e.getSlideIndexByData(e.slides.length - 1),
      f = e.slidesGrid[d],
      p = e.slidesGrid[c],
      h = e.slidesGrid[e.slidesGrid.length - 1],
      g = Math.abs(t);
    g >= f ? (l = (g - f) / h) : (l = (g + h - p) / h), l > 1 && (l -= 1);
  }
  Object.assign(e, { progress: i, progressLoop: l, isBeginning: r, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      e.updateSlidesProgress(t),
    r && !a && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    ((a && !r) || (u && !o)) && e.emit("fromEdge"),
    e.emit("progress", i);
}
function Li() {
  const t = this,
    { slides: e, params: n, slidesEl: s, activeIndex: i } = t,
    r = t.virtual && n.virtual.enabled,
    o = t.grid && n.grid && n.grid.rows > 1,
    l = (c) => oe(s, `.${n.slideClass}${c}, swiper-slide${c}`)[0];
  e.forEach((c) => {
    c.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let a, u, d;
  if (r)
    if (n.loop) {
      let c = i - t.virtual.slidesBefore;
      c < 0 && (c = t.virtual.slides.length + c),
        c >= t.virtual.slides.length && (c -= t.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${c}"]`));
    } else a = l(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((a = e.filter((c) => c.column === i)[0]),
        (d = e.filter((c) => c.column === i + 1)[0]),
        (u = e.filter((c) => c.column === i - 1)[0]))
      : (a = e[i]);
  a &&
    (a.classList.add(n.slideActiveClass),
    o
      ? (d && d.classList.add(n.slideNextClass),
        u && u.classList.add(n.slidePrevClass))
      : ((d = yi(a, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !d && (d = e[0]),
        d && d.classList.add(n.slideNextClass),
        (u = wi(a, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !u === 0 && (u = e[e.length - 1]),
        u && u.classList.add(n.slidePrevClass))),
    t.emitSlidesClasses();
}
const Ae = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const n = () => (t.isElement ? "swiper-slide" : `.${t.params.slideClass}`),
      s = e.closest(n());
    if (s) {
      let i = s.querySelector(`.${t.params.lazyPreloaderClass}`);
      !i &&
        t.isElement &&
        (s.shadowRoot
          ? (i = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((i = s.shadowRoot.querySelector(
                  `.${t.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Ke = (t, e) => {
    if (!t.slides[e]) return;
    const n = t.slides[e].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  ot = (t) => {
    if (!t || t.destroyed || !t.params) return;
    let e = t.params.lazyPreloadPrevNext;
    const n = t.slides.length;
    if (!n || !e || e < 0) return;
    e = Math.min(e, n);
    const s =
        t.params.slidesPerView === "auto"
          ? t.slidesPerViewDynamic()
          : Math.ceil(t.params.slidesPerView),
      i = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
      const o = i,
        l = [o - e];
      l.push(...Array.from({ length: e }).map((a, u) => o + s + u)),
        t.slides.forEach((a, u) => {
          l.includes(a.column) && Ke(t, u);
        });
      return;
    }
    const r = i + s - 1;
    if (t.params.rewind || t.params.loop)
      for (let o = i - e; o <= r + e; o += 1) {
        const l = ((o % n) + n) % n;
        (l < i || l > r) && Ke(t, l);
      }
    else
      for (let o = Math.max(i - e, 0); o <= Math.min(r + e, n - 1); o += 1)
        o !== i && (o > r || o < i) && Ke(t, o);
  };
function Ri(t) {
  const { slidesGrid: e, params: n } = t,
    s = t.rtlTranslate ? t.translate : -t.translate;
  let i;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] < "u"
      ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2
        ? (i = r)
        : s >= e[r] && s < e[r + 1] && (i = r + 1)
      : s >= e[r] && (i = r);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function zi(t) {
  const e = this,
    n = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: s, params: i, activeIndex: r, realIndex: o, snapIndex: l } = e;
  let a = t,
    u;
  const d = (p) => {
    let h = p - e.virtual.slidesBefore;
    return (
      h < 0 && (h = e.virtual.slides.length + h),
      h >= e.virtual.slides.length && (h -= e.virtual.slides.length),
      h
    );
  };
  if ((typeof a > "u" && (a = Ri(e)), s.indexOf(n) >= 0)) u = s.indexOf(n);
  else {
    const p = Math.min(i.slidesPerGroupSkip, a);
    u = p + Math.floor((a - p) / i.slidesPerGroup);
  }
  if ((u >= s.length && (u = s.length - 1), a === r && !e.params.loop)) {
    u !== l && ((e.snapIndex = u), e.emit("snapIndexChange"));
    return;
  }
  if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = d(a);
    return;
  }
  const c = e.grid && i.grid && i.grid.rows > 1;
  let f;
  if (e.virtual && i.virtual.enabled && i.loop) f = d(a);
  else if (c) {
    const p = e.slides.filter((g) => g.column === a)[0];
    let h = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(h) && (h = Math.max(e.slides.indexOf(p), 0)),
      (f = Math.floor(h / i.grid.rows));
  } else if (e.slides[a]) {
    const p = e.slides[a].getAttribute("data-swiper-slide-index");
    p ? (f = parseInt(p, 10)) : (f = a);
  } else f = a;
  Object.assign(e, {
    previousSnapIndex: l,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: f,
    previousIndex: r,
    activeIndex: a,
  }),
    e.initialized && ot(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (o !== f && e.emit("realIndexChange"), e.emit("slideChange"));
}
function Di(t, e) {
  const n = this,
    s = n.params;
  let i = t.closest(`.${s.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    e &&
    e.length > 1 &&
    e.includes(t) &&
    [...e.slice(e.indexOf(t) + 1, e.length)].forEach((l) => {
      !i && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (i = l);
    });
  let r = !1,
    o;
  if (i) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === i) {
        (r = !0), (o = l);
        break;
      }
  }
  if (i && r)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var Ni = {
  updateSize: Mi,
  updateSlides: Ai,
  updateAutoHeight: Ii,
  updateSlidesOffset: ki,
  updateSlidesProgress: $i,
  updateProgress: Bi,
  updateSlidesClasses: Li,
  updateActiveIndex: zi,
  updateClickedSlide: Di,
};
function ji(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: n, rtlTranslate: s, translate: i, wrapperEl: r } = e;
  if (n.virtualTranslate) return s ? -i : i;
  if (n.cssMode) return i;
  let o = gi(r, t);
  return (o += e.cssOverflowAdjustment()), s && (o = -o), o || 0;
}
function Fi(t, e) {
  const n = this,
    { rtlTranslate: s, params: i, wrapperEl: r, progress: o } = n;
  let l = 0,
    a = 0;
  const u = 0;
  n.isHorizontal() ? (l = s ? -t : t) : (a = t),
    i.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : a),
    i.cssMode
      ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`));
  let d;
  const c = n.maxTranslate() - n.minTranslate();
  c === 0 ? (d = 0) : (d = (t - n.minTranslate()) / c),
    d !== o && n.updateProgress(t),
    n.emit("setTranslate", n.translate, e);
}
function Gi() {
  return -this.snapGrid[0];
}
function Vi() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Hi(t, e, n, s, i) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0);
  const r = this,
    { params: o, wrapperEl: l } = r;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    u = r.maxTranslate();
  let d;
  if (
    (s && t > a ? (d = a) : s && t < u ? (d = u) : (d = t),
    r.updateProgress(d),
    o.cssMode)
  ) {
    const c = r.isHorizontal();
    if (e === 0) l[c ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!r.support.smoothScroll)
        return (
          tn({ swiper: r, targetPosition: -d, side: c ? "left" : "top" }), !0
        );
      l.scrollTo({ [c ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (r.setTransition(0),
        r.setTranslate(d),
        n && (r.emit("beforeTransitionStart", e, i), r.emit("transitionEnd")))
      : (r.setTransition(e),
        r.setTranslate(d),
        n && (r.emit("beforeTransitionStart", e, i), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (f) {
              !r ||
                r.destroyed ||
                (f.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  n && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var qi = {
  getTranslate: ji,
  setTranslate: Fi,
  minTranslate: Gi,
  maxTranslate: Vi,
  translateTo: Hi,
};
function Ui(t, e) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${t}ms`),
    (n.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : "")),
    n.emit("setTransition", t, e);
}
function sn(t) {
  let { swiper: e, runCallbacks: n, direction: s, step: i } = t;
  const { activeIndex: r, previousIndex: o } = e;
  let l = s;
  if (
    (l || (r > o ? (l = "next") : r < o ? (l = "prev") : (l = "reset")),
    e.emit(`transition${i}`),
    n && r !== o)
  ) {
    if (l === "reset") {
      e.emit(`slideResetTransition${i}`);
      return;
    }
    e.emit(`slideChangeTransition${i}`),
      l === "next"
        ? e.emit(`slideNextTransition${i}`)
        : e.emit(`slidePrevTransition${i}`);
  }
}
function Wi(t, e) {
  t === void 0 && (t = !0);
  const n = this,
    { params: s } = n;
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    sn({ swiper: n, runCallbacks: t, direction: e, step: "Start" }));
}
function Xi(t, e) {
  t === void 0 && (t = !0);
  const n = this,
    { params: s } = n;
  (n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      sn({ swiper: n, runCallbacks: t, direction: e, step: "End" }));
}
var Ki = { setTransition: Ui, transitionStart: Wi, transitionEnd: Xi };
function Yi(t, e, n, s, i) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let o = t;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: d,
    activeIndex: c,
    rtlTranslate: f,
    wrapperEl: p,
    enabled: h,
  } = r;
  if ((r.animating && l.preventInteractionOnTransition) || (!h && !s && !i))
    return !1;
  const g = Math.min(r.params.slidesPerGroupSkip, o);
  let x = g + Math.floor((o - g) / r.params.slidesPerGroup);
  x >= a.length && (x = a.length - 1);
  const w = -a[x];
  if (l.normalizeSlideIndex)
    for (let y = 0; y < u.length; y += 1) {
      const T = -Math.floor(w * 100),
        P = Math.floor(u[y] * 100),
        k = Math.floor(u[y + 1] * 100);
      typeof u[y + 1] < "u"
        ? T >= P && T < k - (k - P) / 2
          ? (o = y)
          : T >= P && T < k && (o = y + 1)
        : T >= P && (o = y);
    }
  if (
    r.initialized &&
    o !== c &&
    ((!r.allowSlideNext &&
      (f
        ? w > r.translate && w > r.minTranslate()
        : w < r.translate && w < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        w > r.translate &&
        w > r.maxTranslate() &&
        (c || 0) !== o))
  )
    return !1;
  o !== (d || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(w);
  let S;
  if (
    (o > c ? (S = "next") : o < c ? (S = "prev") : (S = "reset"),
    (f && -w === r.translate) || (!f && w === r.translate))
  )
    return (
      r.updateActiveIndex(o),
      l.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      l.effect !== "slide" && r.setTranslate(w),
      S !== "reset" && (r.transitionStart(n, S), r.transitionEnd(n, S)),
      !1
    );
  if (l.cssMode) {
    const y = r.isHorizontal(),
      T = f ? w : -w;
    if (e === 0) {
      const P = r.virtual && r.params.virtual.enabled;
      P &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        P && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[y ? "scrollLeft" : "scrollTop"] = T;
            }))
          : (p[y ? "scrollLeft" : "scrollTop"] = T),
        P &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
          });
    } else {
      if (!r.support.smoothScroll)
        return (
          tn({ swiper: r, targetPosition: T, side: y ? "left" : "top" }), !0
        );
      p.scrollTo({ [y ? "left" : "top"]: T, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(e),
    r.setTranslate(w),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, s),
    r.transitionStart(n, S),
    e === 0
      ? r.transitionEnd(n, S)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (T) {
            !r ||
              r.destroyed ||
              (T.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, S)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Ji(t, e, n, s) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    typeof t == "string" && (t = parseInt(t, 10));
  const i = this,
    r = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = t;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let l;
      if (r) {
        const f = o * i.params.grid.rows;
        l = i.slides.filter(
          (p) => p.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else l = i.getSlideIndexByData(o);
      const a = r
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let d = i.params.slidesPerView;
      d === "auto"
        ? (d = i.slidesPerViewDynamic())
        : ((d = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && d % 2 === 0 && (d = d + 1));
      let c = a - l < d;
      if ((u && (c = c || l < Math.ceil(d / 2)), c)) {
        const f = u
          ? l < i.activeIndex
            ? "prev"
            : "next"
          : l - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? l + 1 : l - a + 1,
          slideRealIndex: f === "next" ? i.realIndex : void 0,
        });
      }
      if (r) {
        const f = o * i.params.grid.rows;
        o = i.slides.filter(
          (p) => p.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, e, n, s);
    }),
    i
  );
}
function Zi(t, e, n) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this,
    { enabled: i, params: r, animating: o } = s;
  if (!i) return s;
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
    u = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !u && r.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, t, e, n);
        }),
        !0
      );
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, t, e, n)
    : s.slideTo(s.activeIndex + a, t, e, n);
}
function Qi(t, e, n) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this,
    {
      params: i,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: u,
    } = s;
  if (!a) return s;
  const d = s.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !d && i.loopPreventsSliding) return !1;
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  const c = l ? s.translate : -s.translate;
  function f(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  const p = f(c),
    h = r.map((w) => f(w));
  let g = r[h.indexOf(p) - 1];
  if (typeof g > "u" && i.cssMode) {
    let w;
    r.forEach((S, y) => {
      p >= S && (w = y);
    }),
      typeof w < "u" && (g = r[w > 0 ? w - 1 : w]);
  }
  let x = 0;
  if (
    (typeof g < "u" &&
      ((x = o.indexOf(g)),
      x < 0 && (x = s.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((x = x - s.slidesPerViewDynamic("previous", !0) + 1),
        (x = Math.max(x, 0)))),
    i.rewind && s.isBeginning)
  ) {
    const w =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(w, t, e, n);
  } else if (i.loop && s.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(x, t, e, n);
      }),
      !0
    );
  return s.slideTo(x, t, e, n);
}
function er(t, e, n) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this;
  return s.slideTo(s.activeIndex, t, e, n);
}
function tr(t, e, n, s) {
  t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0),
    s === void 0 && (s = 0.5);
  const i = this;
  let r = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, r),
    l = o + Math.floor((r - o) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[l]) {
    const u = i.snapGrid[l],
      d = i.snapGrid[l + 1];
    a - u > (d - u) * s && (r += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[l - 1],
      d = i.snapGrid[l];
    a - u <= (d - u) * s && (r -= i.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, i.slidesGrid.length - 1)),
    i.slideTo(r, t, e, n)
  );
}
function nr() {
  const t = this,
    { params: e, slidesEl: n } = t,
    s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let i = t.clickedIndex,
    r;
  const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    (r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? i < t.loopedSlides - s / 2 ||
          i > t.slides.length - t.loopedSlides + s / 2
          ? (t.loopFix(),
            (i = t.getSlideIndex(
              oe(n, `${o}[data-swiper-slide-index="${r}"]`)[0]
            )),
            it(() => {
              t.slideTo(i);
            }))
          : t.slideTo(i)
        : i > t.slides.length - s
        ? (t.loopFix(),
          (i = t.getSlideIndex(
            oe(n, `${o}[data-swiper-slide-index="${r}"]`)[0]
          )),
          it(() => {
            t.slideTo(i);
          }))
        : t.slideTo(i);
  } else t.slideTo(i);
}
var sr = {
  slideTo: Yi,
  slideToLoop: Ji,
  slideNext: Zi,
  slidePrev: Qi,
  slideReset: er,
  slideToClosest: tr,
  slideToClickedSlide: nr,
};
function ir(t) {
  const e = this,
    { params: n, slidesEl: s } = e;
  if (!n.loop || (e.virtual && e.params.virtual.enabled)) return;
  const i = () => {
      oe(s, `.${n.slideClass}, swiper-slide`).forEach((c, f) => {
        c.setAttribute("data-swiper-slide-index", f);
      });
    },
    r = e.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (r ? n.grid.rows : 1),
    l = e.slides.length % o !== 0,
    a = r && e.slides.length % n.grid.rows !== 0,
    u = (d) => {
      for (let c = 0; c < d; c += 1) {
        const f = e.isElement
          ? rt("swiper-slide", [n.slideBlankClass])
          : rt("div", [n.slideClass, n.slideBlankClass]);
        e.slidesEl.append(f);
      }
    };
  if (l) {
    if (n.loopAddBlankSlides) {
      const d = o - (e.slides.length % o);
      u(d), e.recalcSlides(), e.updateSlides();
    } else
      Be(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (a) {
    if (n.loopAddBlankSlides) {
      const d = n.grid.rows - (e.slides.length % n.grid.rows);
      u(d), e.recalcSlides(), e.updateSlides();
    } else
      Be(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  e.loopFix({
    slideRealIndex: t,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function rr(t) {
  let {
    slideRealIndex: e,
    slideTo: n = !0,
    direction: s,
    setTranslate: i,
    activeSlideIndex: r,
    byController: o,
    byMousewheel: l,
  } = t === void 0 ? {} : t;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: d,
      allowSlideNext: c,
      slidesEl: f,
      params: p,
    } = a,
    { centeredSlides: h } = p;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && p.virtual.enabled)
  ) {
    n &&
      (!p.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : p.centeredSlides && a.snapIndex < p.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = d),
      (a.allowSlideNext = c),
      a.emit("loopFix");
    return;
  }
  let g = p.slidesPerView;
  g === "auto"
    ? (g = a.slidesPerViewDynamic())
    : ((g = Math.ceil(parseFloat(p.slidesPerView, 10))),
      h && g % 2 === 0 && (g = g + 1));
  const x = p.slidesPerGroupAuto ? g : p.slidesPerGroup;
  let w = x;
  w % x !== 0 && (w += x - (w % x)),
    (w += p.loopAdditionalSlides),
    (a.loopedSlides = w);
  const S = a.grid && p.grid && p.grid.rows > 1;
  u.length < g + w
    ? Be(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : S &&
      p.grid.fill === "row" &&
      Be(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const y = [],
    T = [];
  let P = a.activeIndex;
  typeof r > "u"
    ? (r = a.getSlideIndex(
        u.filter((I) => I.classList.contains(p.slideActiveClass))[0]
      ))
    : (P = r);
  const k = s === "next" || !s,
    N = s === "prev" || !s;
  let C = 0,
    _ = 0;
  const b = S ? Math.ceil(u.length / p.grid.rows) : u.length,
    B = (S ? u[r].column : r) + (h && typeof i > "u" ? -g / 2 + 0.5 : 0);
  if (B < w) {
    C = Math.max(w - B, x);
    for (let I = 0; I < w - B; I += 1) {
      const F = I - Math.floor(I / b) * b;
      if (S) {
        const H = b - F - 1;
        for (let ne = u.length - 1; ne >= 0; ne -= 1)
          u[ne].column === H && y.push(ne);
      } else y.push(b - F - 1);
    }
  } else if (B + g > b - w) {
    _ = Math.max(B - (b - w * 2), x);
    for (let I = 0; I < _; I += 1) {
      const F = I - Math.floor(I / b) * b;
      S
        ? u.forEach((H, ne) => {
            H.column === F && T.push(ne);
          })
        : T.push(F);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    N &&
      y.forEach((I) => {
        (u[I].swiperLoopMoveDOM = !0),
          f.prepend(u[I]),
          (u[I].swiperLoopMoveDOM = !1);
      }),
    k &&
      T.forEach((I) => {
        (u[I].swiperLoopMoveDOM = !0),
          f.append(u[I]),
          (u[I].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    p.slidesPerView === "auto"
      ? a.updateSlides()
      : S &&
        ((y.length > 0 && N) || (T.length > 0 && k)) &&
        a.slides.forEach((I, F) => {
          a.grid.updateSlide(F, I, a.slides);
        }),
    p.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (y.length > 0 && N) {
      if (typeof e > "u") {
        const I = a.slidesGrid[P],
          H = a.slidesGrid[P + C] - I;
        l
          ? a.setTranslate(a.translate - H)
          : (a.slideTo(P + C, 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - H),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - H)));
      } else if (i) {
        const I = S ? y.length / p.grid.rows : y.length;
        a.slideTo(a.activeIndex + I, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (T.length > 0 && k)
      if (typeof e > "u") {
        const I = a.slidesGrid[P],
          H = a.slidesGrid[P - _] - I;
        l
          ? a.setTranslate(a.translate - H)
          : (a.slideTo(P - _, 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - H),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - H)));
      } else {
        const I = S ? T.length / p.grid.rows : T.length;
        a.slideTo(a.activeIndex - I, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = d),
    (a.allowSlideNext = c),
    a.controller && a.controller.control && !o)
  ) {
    const I = {
      slideRealIndex: e,
      direction: s,
      setTranslate: i,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((F) => {
          !F.destroyed &&
            F.params.loop &&
            F.loopFix({
              ...I,
              slideTo: F.params.slidesPerView === p.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...I,
          slideTo:
            a.controller.control.params.slidesPerView === p.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function or() {
  const t = this,
    { params: e, slidesEl: n } = t;
  if (!e.loop || (t.virtual && t.params.virtual.enabled)) return;
  t.recalcSlides();
  const s = [];
  t.slides.forEach((i) => {
    const r =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    s[r] = i;
  }),
    t.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach((i) => {
      n.append(i);
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0);
}
var ar = { loopCreate: ir, loopFix: rr, loopDestroy: or };
function lr(t) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const n = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = t ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function dr() {
  const t = this;
  (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t.isElement && (t.__preventObserver__ = !0),
    (t[
      t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      }));
}
var cr = { setGrabCursor: lr, unsetGrabCursor: dr };
function ur(t, e) {
  e === void 0 && (e = this);
  function n(s) {
    if (!s || s === ae() || s === J()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const i = s.closest(t);
    return !i && !s.getRootNode ? null : i || n(s.getRootNode().host);
  }
  return n(e);
}
function $t(t, e, n) {
  const s = J(),
    { params: i } = t,
    r = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return r && (n <= o || n >= s.innerWidth - o)
    ? r === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
function fr(t) {
  const e = this,
    n = ae();
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  const i = e.touchEventsData;
  if (s.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== s.pointerId) return;
    i.pointerId = s.pointerId;
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (i.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    $t(e, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: r, touches: o, enabled: l } = e;
  if (
    !l ||
    (!r.simulateTouch && s.pointerType === "mouse") ||
    (e.animating && r.preventInteractionOnTransition)
  )
    return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let a = s.target;
  if (
    (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!r.noSwipingClass && r.noSwipingClass !== "",
    d = s.composedPath ? s.composedPath() : s.path;
  u && s.target && s.target.shadowRoot && d && (a = d[0]);
  const c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    f = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (f ? ur(c, a) : a.closest(c))) {
    e.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
  (o.currentX = s.pageX), (o.currentY = s.pageY);
  const p = o.currentX,
    h = o.currentY;
  if (!$t(e, s, p)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = p),
    (o.startY = h),
    (i.touchStartTime = me()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    r.threshold > 0 && (i.allowThresholdMove = !1);
  let g = !0;
  a.matches(i.focusableElements) &&
    ((g = !1), a.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== a &&
      n.activeElement.blur();
  const x = g && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || x) &&
    !a.isContentEditable &&
    s.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !r.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", s);
}
function pr(t) {
  const e = ae(),
    n = this,
    s = n.touchEventsData,
    { params: i, touches: r, rtlTranslate: o, enabled: l } = n;
  if (!l || (!i.simulateTouch && t.pointerType === "mouse")) return;
  let a = t;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (s.touchId !== null || a.pointerId !== s.pointerId))
  )
    return;
  let u;
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].filter((k) => k.identifier === s.touchId)[0]),
      !u || u.identifier !== s.touchId)
    )
      return;
  } else u = a;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const d = u.pageX,
    c = u.pageY;
  if (a.preventedByNestedSwiper) {
    (r.startX = d), (r.startY = c);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, { startX: d, startY: c, currentX: d, currentY: c }),
        (s.touchStartTime = me()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (c < r.startY && n.translate <= n.maxTranslate()) ||
        (c > r.startY && n.translate >= n.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else if (
      (d < r.startX && n.translate <= n.maxTranslate()) ||
      (d > r.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    e.activeElement &&
    a.target === e.activeElement &&
    a.target.matches(s.focusableElements)
  ) {
    (s.isMoved = !0), (n.allowClick = !1);
    return;
  }
  s.allowTouchCallbacks && n.emit("touchMove", a),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = d),
    (r.currentY = c);
  const f = r.currentX - r.startX,
    p = r.currentY - r.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + p ** 2) < n.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let k;
    (n.isHorizontal() && r.currentY === r.startY) ||
    (n.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : f * f + p * p >= 25 &&
        ((k = (Math.atan2(Math.abs(p), Math.abs(f)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? k > i.touchAngle
          : 90 - k > i.touchAngle));
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling)
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let h = n.isHorizontal() ? f : p,
    g = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  i.oneWayMovement &&
    ((h = Math.abs(h) * (o ? 1 : -1)), (g = Math.abs(g) * (o ? 1 : -1))),
    (r.diff = h),
    (h *= i.touchRatio),
    o && ((h = -h), (g = -g));
  const x = n.touchesDirection;
  (n.swipeDirection = h > 0 ? "prev" : "next"),
    (n.touchesDirection = g > 0 ? "prev" : "next");
  const w = n.params.loop && !i.cssMode,
    S =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (w && S && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const k = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(k);
    }
    (s.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let y;
  if (
    (new Date().getTime(),
    s.isMoved &&
      s.allowThresholdMove &&
      x !== n.touchesDirection &&
      w &&
      S &&
      Math.abs(h) >= 1)
  ) {
    Object.assign(r, {
      startX: d,
      startY: c,
      currentX: d,
      currentY: c,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate);
    return;
  }
  n.emit("sliderMove", a),
    (s.isMoved = !0),
    (s.currentTranslate = h + s.startTranslate);
  let T = !0,
    P = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (P = 0),
    h > 0
      ? (w &&
          S &&
          !y &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > n.minTranslate() &&
          ((T = !1),
          i.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + h) ** P)))
      : h < 0 &&
        (w &&
          S &&
          !y &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((T = !1),
          i.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - h) ** P))),
    T && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(h) > i.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = n.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate));
}
function mr(t) {
  const e = this,
    n = e.touchEventsData;
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  let i;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((i = [...s.changedTouches].filter((P) => P.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || s.pointerId !== n.pointerId) return;
    i = s;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      s.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(s.type) &&
      (e.browser.isSafari || e.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: d,
  } = e;
  if (!d || (!o.simulateTouch && s.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && e.emit("touchEnd", s),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && e.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const c = me(),
    f = c - n.touchStartTime;
  if (e.allowClick) {
    const P = s.path || (s.composedPath && s.composedPath());
    e.updateClickedSlide((P && P[0]) || s.target, P),
      e.emit("tap click", s),
      f < 300 &&
        c - n.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", s);
  }
  if (
    ((n.lastClickTime = me()),
    it(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !e.swipeDirection ||
      (l.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let p;
  if (
    (o.followFinger
      ? (p = a ? e.translate : -e.translate)
      : (p = -n.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  const h = p >= -e.maxTranslate() && !e.params.loop;
  let g = 0,
    x = e.slidesSizesGrid[0];
  for (
    let P = 0;
    P < u.length;
    P += P < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const k = P < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[P + k] < "u"
      ? (h || (p >= u[P] && p < u[P + k])) && ((g = P), (x = u[P + k] - u[P]))
      : (h || p >= u[P]) && ((g = P), (x = u[u.length - 1] - u[u.length - 2]));
  }
  let w = null,
    S = null;
  o.rewind &&
    (e.isBeginning
      ? (S =
          o.virtual && o.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (w = 0));
  const y = (p - u[g]) / x,
    T = g < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (f > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (y >= o.longSwipesRatio
        ? e.slideTo(o.rewind && e.isEnd ? w : g + T)
        : e.slideTo(g)),
      e.swipeDirection === "prev" &&
        (y > 1 - o.longSwipesRatio
          ? e.slideTo(g + T)
          : S !== null && y < 0 && Math.abs(y) > o.longSwipesRatio
          ? e.slideTo(S)
          : e.slideTo(g));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl)
      ? s.target === e.navigation.nextEl
        ? e.slideTo(g + T)
        : e.slideTo(g)
      : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : g + T),
        e.swipeDirection === "prev" && e.slideTo(S !== null ? S : g));
  }
}
function Bt() {
  const t = this,
    { params: e, el: n } = t;
  if (n && n.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = t,
    o = t.virtual && t.params.virtual.enabled;
  (t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses();
  const l = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  t.isEnd &&
  !t.isBeginning &&
  !t.params.centeredSlides &&
  !l
    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
    : t.params.loop && !o
    ? t.slideToLoop(t.realIndex, 0, !1, !0)
    : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(t.autoplay.resizeTimeout),
      (t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.resume();
      }, 500))),
    (t.allowSlidePrev = i),
    (t.allowSlideNext = s),
    t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
function hr(t) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())));
}
function gr() {
  const t = this,
    { wrapperEl: e, rtlTranslate: n, enabled: s } = t;
  if (!s) return;
  (t.previousTranslate = t.translate),
    t.isHorizontal()
      ? (t.translate = -e.scrollLeft)
      : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses();
  let i;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? (i = 0) : (i = (t.translate - t.minTranslate()) / r),
    i !== t.progress && t.updateProgress(n ? -t.translate : t.translate),
    t.emit("setTranslate", t.translate, !1);
}
function vr(t) {
  const e = this;
  Ae(e, t.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
function wr() {
  const t = this;
  t.documentTouchHandlerProceeded ||
    ((t.documentTouchHandlerProceeded = !0),
    t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"));
}
const rn = (t, e) => {
  const n = ae(),
    { params: s, el: i, wrapperEl: r, device: o } = t,
    l = !!s.nested,
    a = e === "on" ? "addEventListener" : "removeEventListener",
    u = e;
  n[a]("touchstart", t.onDocumentTouchStart, { passive: !1, capture: l }),
    i[a]("touchstart", t.onTouchStart, { passive: !1 }),
    i[a]("pointerdown", t.onTouchStart, { passive: !1 }),
    n[a]("touchmove", t.onTouchMove, { passive: !1, capture: l }),
    n[a]("pointermove", t.onTouchMove, { passive: !1, capture: l }),
    n[a]("touchend", t.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", t.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", t.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", t.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", t.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", t.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", t.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      i[a]("click", t.onClick, !0),
    s.cssMode && r[a]("scroll", t.onScroll),
    s.updateOnWindowResize
      ? t[u](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Bt,
          !0
        )
      : t[u]("observerUpdate", Bt, !0),
    i[a]("load", t.onLoad, { capture: !0 });
};
function yr() {
  const t = this,
    { params: e } = t;
  (t.onTouchStart = fr.bind(t)),
    (t.onTouchMove = pr.bind(t)),
    (t.onTouchEnd = mr.bind(t)),
    (t.onDocumentTouchStart = wr.bind(t)),
    e.cssMode && (t.onScroll = gr.bind(t)),
    (t.onClick = hr.bind(t)),
    (t.onLoad = vr.bind(t)),
    rn(t, "on");
}
function br() {
  rn(this, "off");
}
var _r = { attachEvents: yr, detachEvents: br };
const Lt = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function xr() {
  const t = this,
    { realIndex: e, initialized: n, params: s, el: i } = t,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const o = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
  if (!o || t.currentBreakpoint === o) return;
  const a = (o in r ? r[o] : void 0) || t.originalParams,
    u = Lt(t, s),
    d = Lt(t, a),
    c = s.enabled;
  u && !d
    ? (i.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      t.emitContainerClasses())
    : !u &&
      d &&
      (i.classList.add(`${s.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && s.grid.fill === "column")) &&
        i.classList.add(`${s.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((w) => {
      if (typeof a[w] > "u") return;
      const S = s[w] && s[w].enabled,
        y = a[w] && a[w].enabled;
      S && !y && t[w].disable(), !S && y && t[w].enable();
    });
  const f = a.direction && a.direction !== s.direction,
    p = s.loop && (a.slidesPerView !== s.slidesPerView || f),
    h = s.loop;
  f && n && t.changeDirection(), Y(t.params, a);
  const g = t.params.enabled,
    x = t.params.loop;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev,
  }),
    c && !g ? t.disable() : !c && g && t.enable(),
    (t.currentBreakpoint = o),
    t.emit("_beforeBreakpoint", a),
    n &&
      (p
        ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides())
        : !h && x
        ? (t.loopCreate(e), t.updateSlides())
        : h && !x && t.loopDestroy()),
    t.emit("breakpoint", a);
}
function Sr(t, e, n) {
  if ((e === void 0 && (e = "window"), !t || (e === "container" && !n))) return;
  let s = !1;
  const i = J(),
    r = e === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(t).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: r * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: u } = o[l];
    e === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (s = a)
      : u <= n.clientWidth && (s = a);
  }
  return s || "max";
}
var Tr = { setBreakpoint: xr, getBreakpoint: Sr };
function Er(t, e) {
  const n = [];
  return (
    t.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((i) => {
            s[i] && n.push(e + i);
          })
        : typeof s == "string" && n.push(e + s);
    }),
    n
  );
}
function Cr() {
  const t = this,
    { classNames: e, params: n, rtl: s, el: i, device: r } = t,
    o = Er(
      [
        "initialized",
        n.direction,
        { "free-mode": t.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: s },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  e.push(...o), i.classList.add(...e), t.emitContainerClasses();
}
function Pr() {
  const t = this,
    { el: e, classNames: n } = t;
  e.classList.remove(...n), t.emitContainerClasses();
}
var Or = { addClasses: Cr, removeClasses: Pr };
function Mr() {
  const t = this,
    { isLocked: e, params: n } = t,
    { slidesOffsetBefore: s } = n;
  if (s) {
    const i = t.slides.length - 1,
      r = t.slidesGrid[i] + t.slidesSizesGrid[i] + s * 2;
    t.isLocked = t.size > r;
  } else t.isLocked = t.snapGrid.length === 1;
  n.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    n.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
var Ar = { checkOverflow: Mr },
  at = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Ir(t, e) {
  return function (s) {
    s === void 0 && (s = {});
    const i = Object.keys(s)[0],
      r = s[i];
    if (typeof r != "object" || r === null) {
      Y(e, s);
      return;
    }
    if (
      (t[i] === !0 && (t[i] = { enabled: !0 }),
      i === "navigation" &&
        t[i] &&
        t[i].enabled &&
        !t[i].prevEl &&
        !t[i].nextEl &&
        (t[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        t[i] &&
        t[i].enabled &&
        !t[i].el &&
        (t[i].auto = !0),
      !(i in t && "enabled" in r))
    ) {
      Y(e, s);
      return;
    }
    typeof t[i] == "object" && !("enabled" in t[i]) && (t[i].enabled = !0),
      t[i] || (t[i] = { enabled: !1 }),
      Y(e, s);
  };
}
const Ye = {
    eventsEmitter: Oi,
    update: Ni,
    translate: qi,
    transition: Ki,
    slide: sr,
    loop: ar,
    grabCursor: cr,
    events: _r,
    breakpoints: Tr,
    checkOverflow: Ar,
    classes: Or,
  },
  Je = {};
let gt = class re {
  constructor() {
    let e, n;
    for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
      i[r] = arguments[r];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([e, n] = i),
      n || (n = {}),
      (n = Y({}, n)),
      e && !n.el && (n.el = e);
    const o = ae();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const d = [];
      return (
        o.querySelectorAll(n.el).forEach((c) => {
          const f = Y({}, n, { el: c });
          d.push(new re(f));
        }),
        d
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = nn()),
      (l.device = Si({ userAgent: n.userAgent })),
      (l.browser = Ei()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const a = {};
    l.modules.forEach((d) => {
      d({
        params: n,
        swiper: l,
        extendParams: Ir(n, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const u = Y({}, at, a);
    return (
      (l.params = Y({}, u, Je, n)),
      (l.originalParams = Y({}, l.params)),
      (l.passedParams = Y({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((d) => {
          l.on(d, l.params.on[d]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: n, params: s } = this,
      i = oe(n, `.${s.slideClass}, swiper-slide`),
      r = It(i[0]);
    return It(e) - r;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === e
      )[0]
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: n, params: s } = e;
    e.slides = oe(n, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, n) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const i = s.minTranslate(),
      o = (s.maxTranslate() - i) * e + i;
    s.translateTo(o, typeof n > "u" ? 0 : n),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const n = e.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(e) {
    const n = this;
    return n.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const n = [];
    e.slides.forEach((s) => {
      const i = e.getSlideClasses(s);
      n.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
    }),
      e.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(e, n) {
    e === void 0 && (e = "current"), n === void 0 && (n = !1);
    const s = this,
      {
        params: i,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: u,
      } = s;
    let d = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let c = r[u] ? r[u].swiperSlideSize : 0,
        f;
      for (let p = u + 1; p < r.length; p += 1)
        r[p] &&
          !f &&
          ((c += r[p].swiperSlideSize), (d += 1), c > a && (f = !0));
      for (let p = u - 1; p >= 0; p -= 1)
        r[p] &&
          !f &&
          ((c += r[p].swiperSlideSize), (d += 1), c > a && (f = !0));
    } else if (e === "current")
      for (let c = u + 1; c < r.length; c += 1)
        (n ? o[c] + l[c] - o[u] < a : o[c] - o[u] < a) && (d += 1);
    else for (let c = u - 1; c >= 0; c -= 1) o[u] - o[c] < a && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: n, params: s } = e;
    s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Ae(e, o);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function i() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      i(), s.autoHeight && e.updateAutoHeight();
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        e.isEnd &&
        !s.centeredSlides
      ) {
        const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(o.length - 1, 0, !1, !0);
      } else r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || i();
    }
    s.watchOverflow && n !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, n) {
    n === void 0 && (n = !0);
    const s = this,
      i = s.params.direction;
    return (
      e || (e = i === "horizontal" ? "vertical" : "horizontal"),
      e === i ||
        (e !== "horizontal" && e !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((r) => {
          e === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        n && s.update()),
      s
    );
  }
  changeLanguageDirection(e) {
    const n = this;
    (n.rtl && e === "rtl") ||
      (!n.rtl && e === "ltr") ||
      ((n.rtl = e === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(e) {
    const n = this;
    if (n.mounted) return !0;
    let s = e || n.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = n),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() =>
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(i())
        : oe(s, i())[0])();
    return (
      !o &&
        n.params.createElements &&
        ((o = rt("div", n.params.wrapperClass)),
        s.append(o),
        oe(s, `.${n.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: o,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || ce(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || ce(s, "direction") === "rtl"),
        wrongRTL: ce(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const n = this;
    if (n.initialized || n.mount(e) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((r) => {
        r.complete
          ? Ae(n, r)
          : r.addEventListener("load", (o) => {
              Ae(n, o.target);
            });
      }),
      ot(n),
      (n.initialized = !0),
      ot(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(e, n) {
    e === void 0 && (e = !0), n === void 0 && (n = !0);
    const s = this,
      { params: i, el: r, wrapperEl: o, slides: l } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        i.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          r.removeAttribute("style"),
          o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a);
        }),
        e !== !1 && ((s.el.swiper = null), mi(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    Y(Je, e);
  }
  static get extendedDefaults() {
    return Je;
  }
  static get defaults() {
    return at;
  }
  static installModule(e) {
    re.prototype.__modules__ || (re.prototype.__modules__ = []);
    const n = re.prototype.__modules__;
    typeof e == "function" && n.indexOf(e) < 0 && n.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((n) => re.installModule(n)), re)
      : (re.installModule(e), re);
  }
};
Object.keys(Ye).forEach((t) => {
  Object.keys(Ye[t]).forEach((e) => {
    gt.prototype[e] = Ye[t][e];
  });
});
gt.use([Ci, Pi]);
const on = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function he(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object" &&
    !t.__swiper__
  );
}
function ve(t, e) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof t[s] > "u"
        ? (t[s] = e[s])
        : he(e[s]) && he(t[s]) && Object.keys(e[s]).length > 0
        ? e[s].__swiper__
          ? (t[s] = e[s])
          : ve(t[s], e[s])
        : (t[s] = e[s]);
    });
}
function an(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation &&
      typeof t.navigation.nextEl > "u" &&
      typeof t.navigation.prevEl > "u"
  );
}
function ln(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u";
}
function dn(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u";
}
function cn(t) {
  t === void 0 && (t = "");
  const e = t
      .split(" ")
      .map((s) => s.trim())
      .filter((s) => !!s),
    n = [];
  return (
    e.forEach((s) => {
      n.indexOf(s) < 0 && n.push(s);
    }),
    n.join(" ")
  );
}
function kr(t) {
  return (
    t === void 0 && (t = ""),
    t
      ? t.includes("swiper-wrapper")
        ? t
        : `swiper-wrapper ${t}`
      : "swiper-wrapper"
  );
}
function $r(t) {
  let {
    swiper: e,
    slides: n,
    passedParams: s,
    changedParams: i,
    nextEl: r,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a,
  } = t;
  const u = i.filter(
      (_) => _ !== "children" && _ !== "direction" && _ !== "wrapperClass"
    ),
    {
      params: d,
      pagination: c,
      navigation: f,
      scrollbar: p,
      virtual: h,
      thumbs: g,
    } = e;
  let x, w, S, y, T, P, k, N;
  i.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    d.thumbs &&
    !d.thumbs.swiper &&
    (x = !0),
    i.includes("controller") &&
      s.controller &&
      s.controller.control &&
      d.controller &&
      !d.controller.control &&
      (w = !0),
    i.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || a) &&
      (d.pagination || d.pagination === !1) &&
      c &&
      !c.el &&
      (S = !0),
    i.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || l) &&
      (d.scrollbar || d.scrollbar === !1) &&
      p &&
      !p.el &&
      (y = !0),
    i.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || o) &&
      (s.navigation.nextEl || r) &&
      (d.navigation || d.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (T = !0);
  const C = (_) => {
    e[_] &&
      (e[_].destroy(),
      _ === "navigation"
        ? (e.isElement && (e[_].prevEl.remove(), e[_].nextEl.remove()),
          (d[_].prevEl = void 0),
          (d[_].nextEl = void 0),
          (e[_].prevEl = void 0),
          (e[_].nextEl = void 0))
        : (e.isElement && e[_].el.remove(),
          (d[_].el = void 0),
          (e[_].el = void 0)));
  };
  i.includes("loop") &&
    e.isElement &&
    (d.loop && !s.loop ? (P = !0) : !d.loop && s.loop ? (k = !0) : (N = !0)),
    u.forEach((_) => {
      if (he(d[_]) && he(s[_]))
        Object.assign(d[_], s[_]),
          (_ === "navigation" || _ === "pagination" || _ === "scrollbar") &&
            "enabled" in s[_] &&
            !s[_].enabled &&
            C(_);
      else {
        const b = s[_];
        (b === !0 || b === !1) &&
        (_ === "navigation" || _ === "pagination" || _ === "scrollbar")
          ? b === !1 && C(_)
          : (d[_] = s[_]);
      }
    }),
    u.includes("controller") &&
      !w &&
      e.controller &&
      e.controller.control &&
      d.controller &&
      d.controller.control &&
      (e.controller.control = d.controller.control),
    i.includes("children") && n && h && d.virtual.enabled
      ? ((h.slides = n), h.update(!0))
      : i.includes("virtual") &&
        h &&
        d.virtual.enabled &&
        (n && (h.slides = n), h.update(!0)),
    i.includes("children") && n && d.loop && (N = !0),
    x && g.init() && g.update(!0),
    w && (e.controller.control = d.controller.control),
    S &&
      (e.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        e.el.appendChild(a)),
      a && (d.pagination.el = a),
      c.init(),
      c.render(),
      c.update()),
    y &&
      (e.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        e.el.appendChild(l)),
      l && (d.scrollbar.el = l),
      p.init(),
      p.updateSize(),
      p.setTranslate()),
    T &&
      (e.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          (r.innerHTML = e.hostEl.constructor.nextButtonSvg),
          r.part.add("button-next"),
          e.el.appendChild(r)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = e.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          e.el.appendChild(o))),
      r && (d.navigation.nextEl = r),
      o && (d.navigation.prevEl = o),
      f.init(),
      f.update()),
    i.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext),
    i.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev),
    i.includes("direction") && e.changeDirection(s.direction, !1),
    (P || N) && e.loopDestroy(),
    (k || N) && e.loopCreate(),
    e.update();
}
function Rt(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = !0);
  const n = { on: {} },
    s = {},
    i = {};
  ve(n, at), (n._emitClasses = !0), (n.init = !1);
  const r = {},
    o = on.map((a) => a.replace(/_/, "")),
    l = Object.assign({}, t);
  return (
    Object.keys(l).forEach((a) => {
      typeof t[a] > "u" ||
        (o.indexOf(a) >= 0
          ? he(t[a])
            ? ((n[a] = {}), (i[a] = {}), ve(n[a], t[a]), ve(i[a], t[a]))
            : ((n[a] = t[a]), (i[a] = t[a]))
          : a.search(/on[A-Z]/) === 0 && typeof t[a] == "function"
          ? e
            ? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
          : (r[a] = t[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: r, events: s }
  );
}
function Br(t, e) {
  let {
    el: n,
    nextEl: s,
    prevEl: i,
    paginationEl: r,
    scrollbarEl: o,
    swiper: l,
  } = t;
  an(e) &&
    s &&
    i &&
    ((l.params.navigation.nextEl = s),
    (l.originalParams.navigation.nextEl = s),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    ln(e) &&
      r &&
      ((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
    dn(e) &&
      o &&
      ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(n);
}
function Lr(t, e, n, s, i) {
  const r = [];
  if (!e) return r;
  const o = (a) => {
    r.indexOf(a) < 0 && r.push(a);
  };
  if (n && s) {
    const a = s.map(i),
      u = n.map(i);
    a.join("") !== u.join("") && o("children"),
      s.length !== n.length && o("children");
  }
  return (
    on
      .filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in t && a in e)
          if (he(t[a]) && he(e[a])) {
            const u = Object.keys(t[a]),
              d = Object.keys(e[a]);
            u.length !== d.length
              ? o(a)
              : (u.forEach((c) => {
                  t[a][c] !== e[a][c] && o(a);
                }),
                d.forEach((c) => {
                  t[a][c] !== e[a][c] && o(a);
                }));
          } else t[a] !== e[a] && o(a);
      }),
    r
  );
}
const Rr = (t) => {
  !t ||
    t.destroyed ||
    !t.params.virtual ||
    (t.params.virtual && !t.params.virtual.enabled) ||
    (t.updateSlides(),
    t.updateProgress(),
    t.updateSlidesClasses(),
    t.parallax &&
      t.params.parallax &&
      t.params.parallax.enabled &&
      t.parallax.setTranslate());
};
function Ze(t, e, n) {
  t === void 0 && (t = {});
  const s = [],
    i = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    r = (o, l) => {
      Array.isArray(o) &&
        o.forEach((a) => {
          const u = typeof a.type == "symbol";
          l === "default" && (l = "container-end"),
            u && a.children
              ? r(a.children, l)
              : a.type &&
                (a.type.name === "SwiperSlide" ||
                  a.type.name === "AsyncComponentWrapper")
              ? s.push(a)
              : i[l] && i[l].push(a);
        });
    };
  return (
    Object.keys(t).forEach((o) => {
      if (typeof t[o] != "function") return;
      const l = t[o]();
      r(l, o);
    }),
    (n.value = e.value),
    (e.value = s),
    { slides: s, slots: i }
  );
}
function zr(t, e, n) {
  if (!n) return null;
  const s = (d) => {
      let c = d;
      return (
        d < 0 ? (c = e.length + d) : c >= e.length && (c = c - e.length), c
      );
    },
    i = t.value.isHorizontal()
      ? { [t.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: o } = n,
    l = t.value.params.loop ? -e.length : 0,
    a = t.value.params.loop ? e.length * 2 : e.length,
    u = [];
  for (let d = l; d < a; d += 1) d >= r && d <= o && u.push(e[s(d)]);
  return u.map(
    (d) => (
      d.props || (d.props = {}),
      d.props.style || (d.props.style = {}),
      (d.props.swiperRef = t),
      (d.props.style = i),
      te(d.type, { ...d.props }, d.children)
    )
  );
}
const Dr = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "breakpointsBase",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slidesUpdated",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(t, e) {
      let { slots: n, emit: s } = e;
      const { tag: i, wrapperTag: r } = t,
        o = D("swiper"),
        l = D(null),
        a = D(!1),
        u = D(!1),
        d = D(null),
        c = D(null),
        f = D(null),
        p = { value: [] },
        h = { value: [] },
        g = D(null),
        x = D(null),
        w = D(null),
        S = D(null),
        { params: y, passedParams: T } = Rt(t, !1);
      Ze(n, p, h), (f.value = T), (h.value = p.value);
      const P = () => {
        Ze(n, p, h), (a.value = !0);
      };
      (y.onAny = function (C) {
        for (
          var _ = arguments.length, b = new Array(_ > 1 ? _ - 1 : 0), O = 1;
          O < _;
          O++
        )
          b[O - 1] = arguments[O];
        s(C, ...b);
      }),
        Object.assign(y.on, {
          _beforeBreakpoint: P,
          _containerClasses(C, _) {
            o.value = _;
          },
        });
      const k = { ...y };
      if (
        (delete k.wrapperClass,
        (c.value = new gt(k)),
        c.value.virtual && c.value.params.virtual.enabled)
      ) {
        c.value.virtual.slides = p.value;
        const C = {
          cache: !1,
          slides: p.value,
          renderExternal: (_) => {
            l.value = _;
          },
          renderExternalUpdate: !1,
        };
        ve(c.value.params.virtual, C), ve(c.value.originalParams.virtual, C);
      }
      Xt(() => {
        !u.value && c.value && (c.value.emitSlidesClasses(), (u.value = !0));
        const { passedParams: C } = Rt(t, !1),
          _ = Lr(C, f.value, p.value, h.value, (b) => b.props && b.props.key);
        (f.value = C),
          (_.length || a.value) &&
            c.value &&
            !c.value.destroyed &&
            $r({
              swiper: c.value,
              slides: p.value,
              passedParams: C,
              changedParams: _,
              nextEl: g.value,
              prevEl: x.value,
              scrollbarEl: S.value,
              paginationEl: w.value,
            }),
          (a.value = !1);
      }),
        Kt("swiper", c),
        Me(l, () => {
          jn(() => {
            Rr(c.value);
          });
        }),
        pt(() => {
          d.value &&
            (Br(
              {
                el: d.value,
                nextEl: g.value,
                prevEl: x.value,
                paginationEl: w.value,
                scrollbarEl: S.value,
                swiper: c.value,
              },
              y
            ),
            s("swiper", c.value));
        }),
        mt(() => {
          c.value && !c.value.destroyed && c.value.destroy(!0, !1);
        });
      function N(C) {
        return y.virtual
          ? zr(c, C, l.value)
          : (C.forEach((_, b) => {
              _.props || (_.props = {}),
                (_.props.swiperRef = c),
                (_.props.swiperSlideIndex = b);
            }),
            C);
      }
      return () => {
        const { slides: C, slots: _ } = Ze(n, p, h);
        return te(i, { ref: d, class: cn(o.value) }, [
          _["container-start"],
          te(r, { class: kr(y.wrapperClass) }, [
            _["wrapper-start"],
            N(C),
            _["wrapper-end"],
          ]),
          an(t) && [
            te("div", { ref: x, class: "swiper-button-prev" }),
            te("div", { ref: g, class: "swiper-button-next" }),
          ],
          dn(t) && te("div", { ref: S, class: "swiper-scrollbar" }),
          ln(t) && te("div", { ref: w, class: "swiper-pagination" }),
          _["container-end"],
        ]);
      };
    },
  },
  Nr = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(t, e) {
      let { slots: n } = e,
        s = !1;
      const { swiperRef: i } = t,
        r = D(null),
        o = D("swiper-slide"),
        l = D(!1);
      function a(c, f, p) {
        f === r.value && (o.value = p);
      }
      pt(() => {
        !i || !i.value || (i.value.on("_slideClass", a), (s = !0));
      }),
        Nn(() => {
          s || !i || !i.value || (i.value.on("_slideClass", a), (s = !0));
        }),
        Xt(() => {
          !r.value ||
            !i ||
            !i.value ||
            (typeof t.swiperSlideIndex < "u" &&
              (r.value.swiperSlideIndex = t.swiperSlideIndex),
            i.value.destroyed &&
              o.value !== "swiper-slide" &&
              (o.value = "swiper-slide"));
        }),
        mt(() => {
          !i || !i.value || i.value.off("_slideClass", a);
        });
      const u = st(() => ({
        isActive: o.value.indexOf("swiper-slide-active") >= 0,
        isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: o.value.indexOf("swiper-slide-prev") >= 0,
        isNext: o.value.indexOf("swiper-slide-next") >= 0,
      }));
      Kt("swiperSlide", u);
      const d = () => {
        l.value = !0;
      };
      return () =>
        te(
          t.tag,
          {
            class: cn(`${o.value}`),
            ref: r,
            "data-swiper-slide-index":
              typeof t.virtualIndex > "u" && i && i.value && i.value.params.loop
                ? t.swiperSlideIndex
                : t.virtualIndex,
            onLoadCapture: d,
          },
          t.zoom
            ? te(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof t.zoom == "number" ? t.zoom : void 0,
                },
                [
                  n.default && n.default(u.value),
                  t.lazy &&
                    !l.value &&
                    te("div", { class: "swiper-lazy-preloader" }),
                ]
              )
            : [
                n.default && n.default(u.value),
                t.lazy &&
                  !l.value &&
                  te("div", { class: "swiper-lazy-preloader" }),
              ]
        );
    },
  };
function jr(t) {
  let { swiper: e, extendParams: n, on: s, emit: i, params: r } = t;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    l,
    a = r && r.autoplay ? r.autoplay.delay : 3e3,
    u = r && r.autoplay ? r.autoplay.delay : 3e3,
    d,
    c = new Date().getTime(),
    f,
    p,
    h,
    g,
    x,
    w,
    S;
  function y(z) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (z.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", y), !S && b()));
  }
  const T = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (f = !0) : f && ((u = d), (f = !1));
      const z = e.autoplay.paused ? d : c + u - new Date().getTime();
      (e.autoplay.timeLeft = z),
        i("autoplayTimeLeft", z, z / a),
        (l = requestAnimationFrame(() => {
          T();
        }));
    },
    P = () => {
      let z;
      return (
        e.virtual && e.params.virtual.enabled
          ? (z = e.slides.filter((X) =>
              X.classList.contains("swiper-slide-active")
            )[0])
          : (z = e.slides[e.activeIndex]),
        z ? parseInt(z.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    k = (z) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(l), T();
      let Z = typeof z > "u" ? e.params.autoplay.delay : z;
      (a = e.params.autoplay.delay), (u = e.params.autoplay.delay);
      const X = P();
      !Number.isNaN(X) &&
        X > 0 &&
        typeof z > "u" &&
        ((Z = X), (a = X), (u = X)),
        (d = Z);
      const fe = e.params.speed,
        Ce = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(fe, !0, !0), i("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, fe, !0, !0), i("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(fe, !0, !0), i("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, fe, !0, !0), i("autoplay")),
            e.params.cssMode &&
              ((c = new Date().getTime()),
              requestAnimationFrame(() => {
                k();
              })));
        };
      return (
        Z > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              Ce();
            }, Z)))
          : requestAnimationFrame(() => {
              Ce();
            }),
        Z
      );
    },
    N = () => {
      (c = new Date().getTime()),
        (e.autoplay.running = !0),
        k(),
        i("autoplayStart");
    },
    C = () => {
      (e.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(l),
        i("autoplayStop");
    },
    _ = (z, Z) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(o), z || (w = !0);
      const X = () => {
        i("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", y)
            : b();
      };
      if (((e.autoplay.paused = !0), Z)) {
        x && (d = e.params.autoplay.delay), (x = !1), X();
        return;
      }
      (d = (d || e.params.autoplay.delay) - (new Date().getTime() - c)),
        !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), X());
    },
    b = () => {
      (e.isEnd && d < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((c = new Date().getTime()),
        w ? ((w = !1), k(d)) : k(),
        (e.autoplay.paused = !1),
        i("autoplayResume"));
    },
    O = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const z = ae();
      z.visibilityState === "hidden" && ((w = !0), _(!0)),
        z.visibilityState === "visible" && b();
    },
    B = (z) => {
      z.pointerType === "mouse" &&
        ((w = !0), (S = !0), !(e.animating || e.autoplay.paused) && _(!0));
    },
    I = (z) => {
      z.pointerType === "mouse" && ((S = !1), e.autoplay.paused && b());
    },
    F = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", B),
        e.el.addEventListener("pointerleave", I));
    },
    H = () => {
      e.el.removeEventListener("pointerenter", B),
        e.el.removeEventListener("pointerleave", I);
    },
    ne = () => {
      ae().addEventListener("visibilitychange", O);
    },
    He = () => {
      ae().removeEventListener("visibilitychange", O);
    };
  s("init", () => {
    e.params.autoplay.enabled && (F(), ne(), N());
  }),
    s("destroy", () => {
      H(), He(), e.autoplay.running && C();
    }),
    s("_freeModeStaticRelease", () => {
      (h || w) && b();
    }),
    s("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? C() : _(!0, !0);
    }),
    s("beforeTransitionStart", (z, Z, X) => {
      e.destroyed ||
        !e.autoplay.running ||
        (X || !e.params.autoplay.disableOnInteraction ? _(!0, !0) : C());
    }),
    s("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          C();
          return;
        }
        (p = !0),
          (h = !1),
          (w = !1),
          (g = setTimeout(() => {
            (w = !0), (h = !0), _(!0);
          }, 200));
      }
    }),
    s("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !p)) {
        if (
          (clearTimeout(g),
          clearTimeout(o),
          e.params.autoplay.disableOnInteraction)
        ) {
          (h = !1), (p = !1);
          return;
        }
        h && e.params.cssMode && b(), (h = !1), (p = !1);
      }
    }),
    s("slideChange", () => {
      e.destroyed || !e.autoplay.running || (x = !0);
    }),
    Object.assign(e.autoplay, { start: N, stop: C, pause: _, resume: b });
}
function un(t) {
  let { swiper: e, extendParams: n, emit: s, once: i } = t;
  n({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function r() {
    if (e.params.cssMode) return;
    const a = e.getTranslate();
    e.setTranslate(a),
      e.setTransition(0),
      (e.touchEventsData.velocities.length = 0),
      e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  function o() {
    if (e.params.cssMode) return;
    const { touchEventsData: a, touches: u } = e;
    a.velocities.length === 0 &&
      a.velocities.push({
        position: u[e.isHorizontal() ? "startX" : "startY"],
        time: a.touchStartTime,
      }),
      a.velocities.push({
        position: u[e.isHorizontal() ? "currentX" : "currentY"],
        time: me(),
      });
  }
  function l(a) {
    let { currentPos: u } = a;
    if (e.params.cssMode) return;
    const {
        params: d,
        wrapperEl: c,
        rtlTranslate: f,
        snapGrid: p,
        touchEventsData: h,
      } = e,
      x = me() - h.touchStartTime;
    if (u < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (u > -e.maxTranslate()) {
      e.slides.length < p.length
        ? e.slideTo(p.length - 1)
        : e.slideTo(e.slides.length - 1);
      return;
    }
    if (d.freeMode.momentum) {
      if (h.velocities.length > 1) {
        const C = h.velocities.pop(),
          _ = h.velocities.pop(),
          b = C.position - _.position,
          O = C.time - _.time;
        (e.velocity = b / O),
          (e.velocity /= 2),
          Math.abs(e.velocity) < d.freeMode.minimumVelocity && (e.velocity = 0),
          (O > 150 || me() - C.time > 300) && (e.velocity = 0);
      } else e.velocity = 0;
      (e.velocity *= d.freeMode.momentumVelocityRatio),
        (h.velocities.length = 0);
      let w = 1e3 * d.freeMode.momentumRatio;
      const S = e.velocity * w;
      let y = e.translate + S;
      f && (y = -y);
      let T = !1,
        P;
      const k = Math.abs(e.velocity) * 20 * d.freeMode.momentumBounceRatio;
      let N;
      if (y < e.maxTranslate())
        d.freeMode.momentumBounce
          ? (y + e.maxTranslate() < -k && (y = e.maxTranslate() - k),
            (P = e.maxTranslate()),
            (T = !0),
            (h.allowMomentumBounce = !0))
          : (y = e.maxTranslate()),
          d.loop && d.centeredSlides && (N = !0);
      else if (y > e.minTranslate())
        d.freeMode.momentumBounce
          ? (y - e.minTranslate() > k && (y = e.minTranslate() + k),
            (P = e.minTranslate()),
            (T = !0),
            (h.allowMomentumBounce = !0))
          : (y = e.minTranslate()),
          d.loop && d.centeredSlides && (N = !0);
      else if (d.freeMode.sticky) {
        let C;
        for (let _ = 0; _ < p.length; _ += 1)
          if (p[_] > -y) {
            C = _;
            break;
          }
        Math.abs(p[C] - y) < Math.abs(p[C - 1] - y) ||
        e.swipeDirection === "next"
          ? (y = p[C])
          : (y = p[C - 1]),
          (y = -y);
      }
      if (
        (N &&
          i("transitionEnd", () => {
            e.loopFix();
          }),
        e.velocity !== 0)
      ) {
        if (
          (f
            ? (w = Math.abs((-y - e.translate) / e.velocity))
            : (w = Math.abs((y - e.translate) / e.velocity)),
          d.freeMode.sticky)
        ) {
          const C = Math.abs((f ? -y : y) - e.translate),
            _ = e.slidesSizesGrid[e.activeIndex];
          C < _
            ? (w = d.speed)
            : C < 2 * _
            ? (w = d.speed * 1.5)
            : (w = d.speed * 2.5);
        }
      } else if (d.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      d.freeMode.momentumBounce && T
        ? (e.updateProgress(P),
          e.setTransition(w),
          e.setTranslate(y),
          e.transitionStart(!0, e.swipeDirection),
          (e.animating = !0),
          qe(c, () => {
            !e ||
              e.destroyed ||
              !h.allowMomentumBounce ||
              (s("momentumBounce"),
              e.setTransition(d.speed),
              setTimeout(() => {
                e.setTranslate(P),
                  qe(c, () => {
                    !e || e.destroyed || e.transitionEnd();
                  });
              }, 0));
          }))
        : e.velocity
        ? (s("_freeModeNoMomentumRelease"),
          e.updateProgress(y),
          e.setTransition(w),
          e.setTranslate(y),
          e.transitionStart(!0, e.swipeDirection),
          e.animating ||
            ((e.animating = !0),
            qe(c, () => {
              !e || e.destroyed || e.transitionEnd();
            })))
        : e.updateProgress(y),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    } else if (d.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else d.freeMode && s("_freeModeNoMomentumRelease");
    (!d.freeMode.momentum || x >= d.longSwipesMs) &&
      (s("_freeModeStaticRelease"),
      e.updateProgress(),
      e.updateActiveIndex(),
      e.updateSlidesClasses());
  }
  Object.assign(e, {
    freeMode: { onTouchStart: r, onTouchMove: o, onTouchEnd: l },
  });
}
const Fr = "/news/header-1.png",
  Gr = "/news/htx.svg",
  Vr = "/news/header-2.png",
  Hr = "/news/coindesk.png",
  qr = "/news/header-3.png",
  Ur = "/news/kucoin.png",
  vt = "/svg/effect.svg",
  Wr = {
    name: "Vault",
    components: { Section: ge, Block: Se, Vue3Marquee: De, IconLink: Qt },
    data() {
      return {
        modules: [un],
        media: [
          { icon: "/media/cmc.png", url: "/" },
          { icon: "/media/marketwatch.png", url: "/" },
          { icon: "/media/yahoo.png", url: "/" },
          { icon: "/media/tradingview.png", url: "/" },
        ],
      };
    },
  },
  Xr = { class: "flex flex-col items-center gap-5 w-full" },
  Kr = m("h1", { class: "text-title" }, "Grok News", -1),
  Yr = {
    class:
      "grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-items-center items-stretch z-5",
  },
  Jr = {
    href: "https://www.htx.com/support/en-us/detail/24956100561764",
    target: "_blank",
  },
  Zr = m("img", { src: Fr, alt: "header-1", class: "rounded-t-2xl" }, null, -1),
  Qr = { class: "flex flex-col items-start w-full p-5 gap-5" },
  eo = { class: "flex items-center justify-between w-full" },
  to = m("img", { src: Gr, alt: "", class: "h-5 w-auto" }, null, -1),
  no = {
    href: "https://www.htx.com/support/en-us/detail/24956100561764",
    target: "_blank",
  },
  so = m(
    "h1",
    { class: "text-2xl text-white/75" },
    " HTX Will List GROK (Grok) on December 6, 2023 ",
    -1
  ),
  io = m(
    "p",
    { class: "text-white/75" },
    " The GROK spot trading (GROK/USDT) will open when the deposit volume meets the demand of market trading, which will be officially announced in advance. ",
    -1
  ),
  ro = m("p", { class: "text-sm text-white/[0.55]" }, " December 5, 2023 ", -1),
  oo = {
    href: "https://www.coindesk.com/markets/2023/11/13/grok-token-inspired-by-elon-musks-grok-ai-hits-160m-capitalization-in-latest-frenzy/?term=organic&utm_campaign=CoinDesk&utm_content=Charts%2CIG%20XPost%2Ceditorial&utm_medium=social&utm_source=twitter&fbclid=IwAR1biQpGLYg_lfrKybmfy5crY0i3URAUuirsmlc3Ly7MtUDNLiEjB4XjApM",
    target: "_blank",
  },
  ao = m("img", { src: Vr, alt: "header-2", class: "rounded-t-2xl" }, null, -1),
  lo = { class: "flex flex-col items-start w-full p-5 gap-5" },
  co = { class: "flex items-center justify-between w-full" },
  uo = m("img", { src: Hr, alt: "", class: "h-5 w-auto" }, null, -1),
  fo = {
    href: "https://www.coindesk.com/markets/2023/11/13/grok-token-inspired-by-elon-musks-grok-ai-hits-160m-capitalization-in-latest-frenzy/?term=organic&utm_campaign=CoinDesk&utm_content=Charts%2CIG%20XPost%2Ceditorial&utm_medium=social&utm_source=twitter&fbclid=IwAR1biQpGLYg_lfrKybmfy5crY0i3URAUuirsmlc3Ly7MtUDNLiEjB4XjApM",
    target: "_blank",
  },
  po = m(
    "h1",
    { class: "text-2xl text-white/75" },
    " GROK Token, Inspired by Elon Musk’s Grok AI, Hits $160M Capitalization in Latest Frenzy ",
    -1
  ),
  mo = m(
    "p",
    { class: "text-white/75" },
    " Total liquidity for the token is a paltry $3.5 million on decentralized exchanges, meaning a single significant sale could instantly topple the rise. ",
    -1
  ),
  ho = m("p", { class: "text-sm text-white/[0.55]" }, "Nov 13, 2023", -1),
  go = {
    href: "https://twitter.com/kucoincom/status/1728989006422213038?t=a5VSbeqC44TNtSnBpMPJLw&s=19&fbclid=IwAR1BcSsUPCbDt66t8ogWhdh27CtOkU7zw_QWrohNxzMAF-IXiyclno38dI4",
    target: "_blank",
  },
  vo = m("img", { src: qr, alt: "header-3", class: "rounded-t-2xl" }, null, -1),
  wo = { class: "flex flex-col items-start w-full p-5 gap-5" },
  yo = { class: "flex items-center justify-between w-full" },
  bo = m("img", { src: Ur, alt: "", class: "h-5 w-auto" }, null, -1),
  _o = {
    href: "https://twitter.com/kucoincom/status/1728989006422213038?t=a5VSbeqC44TNtSnBpMPJLw&s=19&fbclid=IwAR1BcSsUPCbDt66t8ogWhdh27CtOkU7zw_QWrohNxzMAF-IXiyclno38dI4",
    target: "_blank",
  },
  xo = m(
    "h1",
    { class: "text-2xl text-white/75" },
    [
      m("span", { class: "underline" }, "#X"),
      W(" to integrate with "),
      m("span", { class: "underline" }, "#Grok, $GROK surge"),
    ],
    -1
  ),
  So = m(
    "p",
    { class: "text-white/75" },
    " X Platform Announces integration with Grok and Introduces related Buttons, Resulting in surge in memecoin $Grok’s Price ",
    -1
  ),
  To = m(
    "p",
    { class: "text-sm text-white/[0.55]" },
    " November 27, 2023 ",
    -1
  ),
  Eo = m(
    "img",
    {
      src: vt,
      alt: "effect",
      class: "absolute h-full right-0 top-0 rounded-r-2xl",
    },
    null,
    -1
  );
function Co(t, e, n, s, i, r) {
  const o = $("IconLink"),
    l = $("Block"),
    a = $("Section"),
    u = ye("animate-onscroll");
  return (
    E(),
    U(
      a,
      { class: "md:-mt-96" },
      {
        default: L(() => [
          M(
            l,
            { class: "sm:p-10 p-5" },
            {
              default: L(() => [
                m("div", Xr, [
                  Kr,
                  m("div", Yr, [
                    j(
                      (E(),
                      U(l, null, {
                        default: L(() => [
                          m("a", Jr, [
                            Zr,
                            m("div", Qr, [
                              m("div", eo, [
                                to,
                                m("a", no, [M(o, { class: "h-5 w-5" })]),
                              ]),
                              so,
                              io,
                              ro,
                            ]),
                          ]),
                        ]),
                        _: 1,
                      })),
                      [[u, "animate__animated animate__zoomIn"]]
                    ),
                    j(
                      (E(),
                      U(l, null, {
                        default: L(() => [
                          m("a", oo, [
                            ao,
                            m("div", lo, [
                              m("div", co, [
                                uo,
                                m("a", fo, [M(o, { class: "h-5 w-5" })]),
                              ]),
                              po,
                              mo,
                              ho,
                            ]),
                          ]),
                        ]),
                        _: 1,
                      })),
                      [[u, "animate__animated animate__zoomIn"]]
                    ),
                    j(
                      (E(),
                      U(l, null, {
                        default: L(() => [
                          m("a", go, [
                            vo,
                            m("div", wo, [
                              m("div", yo, [
                                bo,
                                m("a", _o, [M(o, { class: "h-5 w-5" })]),
                              ]),
                              xo,
                              So,
                              To,
                            ]),
                          ]),
                        ]),
                        _: 1,
                      })),
                      [[u, "animate__animated animate__zoomIn"]]
                    ),
                  ]),
                ]),
                Eo,
              ]),
              _: 1,
            }
          ),
        ]),
        _: 1,
      }
    )
  );
}
const Po = V(Wr, [["render", Co]]),
  fn = "/svg/trust-effect.svg",
  Oo = "/img/trust.png",
  wt = "/img/elon.png",
  Mo = {
    components: {
      Section: ge,
      Block: Se,
      Vue3Marquee: De,
      Swiper: Dr,
      SwiperSlide: Nr,
      IconLink: Qt,
    },
    data() {
      return {
        modules: [un, jr],
        news: [
          {
            img: "/news/1.png",
            url: "https://twitter.com/ElonMuskAOC/status/1729926825848271154",
          },
          {
            img: "/news/2.png",
            url: "https://twitter.com/elonmusk/status/1720635518289908042",
          },
          {
            img: "/news/3.png",
            url: "https://twitter.com/elonmusk/status/1729039158692528210",
          },
          {
            img: "/news/4.png",
            url: "https://twitter.com/elonmusk/status/1728591219180052652",
          },
        ],
        first: [
          { img: "/vault/17.jpg" },
          { img: "/vault/2.jpg" },
          { img: "/vault/3.jpg" },
          { img: "/vault/4.png" },
          { img: "/vault/5.png" },
          { img: "/vault/6.png" },
          { img: "/vault/7.png" },
          { img: "/vault/16.jpg" },
          { img: "/vault/19.jpg" },
        ],
        second: [
          { img: "/vault/9.png" },
          { img: "/vault/10.png" },
          { img: "/vault/11.jpg" },
          { img: "/vault/12.jpg" },
          { img: "/vault/13.jpg" },
          { img: "/vault/14.jpg" },
          { img: "/vault/15.jpg" },
          { img: "/vault/18.jpg" },
        ],
      };
    },
  },
  Ao = m("img", { src: fn, alt: "", class: "absolute right-0" }, null, -1),
  Io = { class: "flex flex-col items-start w-full" },
  ko = {
    class: "flex md:flex-row flex-col items-center justify-between w-full",
  },
  $o = { class: "flex flex-col items-start gap-5" },
  Bo = { class: "text-title" },
  Lo = { class: "text-subtitle text-white/75" },
  Ro = { src: Oo, alt: "trust", class: "w-96 h-auto" },
  zo = m("h1", { class: "text-title" }, "The Vault", -1),
  Do = m(
    "h2",
    { class: "text-white/75 mb-5 text-subtitle text-center" },
    " Memes Made by our Community ",
    -1
  ),
  No = ["src"],
  jo = ["src"],
  Fo = m("h1", { class: "text-xl" }, "Notable Tweets", -1),
  Go = m(
    "img",
    { src: wt, alt: "", class: "sm:h-1/2 h-24 w-3/4 object-contain" },
    null,
    -1
  ),
  Vo = m("h1", { class: "text-xl" }, "Elon Musk", -1),
  Ho = {
    class:
      "sm:flex hidden items-center justify-between w-full h-[750px] my-20 sm:gap-10 gap-5",
  },
  qo = ["href"],
  Uo = ["src"],
  Wo = m("h1", { class: "text-xl text-center" }, "Notable Tweets", -1),
  Xo = m("img", { src: wt, alt: "", class: "h-1/2 w-3/4" }, null, -1),
  Ko = m("h1", { class: "text-xl" }, "Elon Musk", -1),
  Yo = ["href"],
  Jo = ["src"],
  Zo = {
    class:
      "flex sm:hidden flex-col items-start justify-between w-full py-20 sm:gap-10 gap-5",
  },
  Qo = ["href"],
  ea = ["src"],
  ta = m("h1", { class: "text-xl text-center" }, "Notable Tweets", -1),
  na = m("img", { src: wt, alt: "", class: "h-1/2 w-full" }, null, -1),
  sa = m("h1", { class: "text-xl" }, "Elon Musk", -1),
  ia = ["href"],
  ra = ["src"];
function oa(t, e, n, s, i, r) {
  const o = $("Block"),
    l = $("Vue3Marquee"),
    a = $("IconLink"),
    u = $("Section"),
    d = ye("animate-onscroll");
  return (
    E(),
    U(u, null, {
      default: L(() => [
        Ao,
        m("div", Io, [
          m("div", ko, [
            m("div", $o, [
              j((E(), A("h1", Bo, [W(" In GROK we trust. ")])), [
                [d, "animate__animated animate__fadeInLeft"],
              ]),
              j(
                (E(),
                A("h2", Lo, [
                  W(
                    " Building the best memeable community together with Elon Musk’s GROK AI. All we do is grok, grok and more grok "
                  ),
                ])),
                [[d, "animate__animated animate__fadeInLeft"]]
              ),
            ]),
            j(m("img", Ro, null, 512), [
              [d, "animate__animated animate__fadeInUp"],
            ]),
          ]),
          M(
            o,
            { class: "flex flex-col items-center p-5" },
            {
              default: L(() => [
                zo,
                Do,
                M(
                  l,
                  { duration: 50 },
                  {
                    default: L(() => [
                      (E(!0),
                      A(
                        q,
                        null,
                        K(
                          i.first,
                          (c, f) => (
                            E(),
                            U(
                              o,
                              {
                                key: f,
                                class:
                                  "p-2 w-max flex flex-col items-center justify-center mx-3",
                              },
                              {
                                default: L(() => [
                                  m(
                                    "img",
                                    {
                                      src: c.img,
                                      alt: "",
                                      class:
                                        "h-44 w-52 object-contain rounded-md",
                                    },
                                    null,
                                    8,
                                    No
                                  ),
                                ]),
                                _: 2,
                              },
                              1024
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                ),
                M(
                  l,
                  { direction: "reverse", duration: 50 },
                  {
                    default: L(() => [
                      (E(!0),
                      A(
                        q,
                        null,
                        K(
                          i.second,
                          (c, f) => (
                            E(),
                            U(
                              o,
                              {
                                key: f,
                                class:
                                  "p-2 w-max flex flex-col items-center justify-center mx-3 mt-5",
                              },
                              {
                                default: L(() => [
                                  m(
                                    "img",
                                    {
                                      src: c.img,
                                      alt: "",
                                      class:
                                        "h-44 w-52 object-contain rounded-md",
                                    },
                                    null,
                                    8,
                                    jo
                                  ),
                                ]),
                                _: 2,
                              },
                              1024
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          ),
          M(
            o,
            {
              class:
                "p-5 flex flex-col items-center justify-center w-full gap-5 sm:hidden mx-auto mt-5",
            },
            { default: L(() => [Fo, Go, Vo]), _: 1 }
          ),
          m("div", Ho, [
            M(
              l,
              { vertical: "", duration: 30, "pause-on-hover": !0 },
              {
                default: L(() => [
                  (E(!0),
                  A(
                    q,
                    null,
                    K(
                      i.news,
                      (c, f) => (
                        E(),
                        A(
                          "a",
                          {
                            key: f,
                            href: c.url,
                            target: "_blank",
                            class:
                              "bg-black-1 flex flex-col border border-white/10 items-center justify-center rounded-2xl my-5 p-5 h-full w-full relative",
                          },
                          [
                            M(a, { class: "absolute top-5 right-5" }),
                            m(
                              "img",
                              {
                                src: c.img,
                                alt: "",
                                class: "rounded-2xl w-full object-cover h-full",
                              },
                              null,
                              8,
                              Uo
                            ),
                          ],
                          8,
                          qo
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              }
            ),
            M(
              o,
              {
                class:
                  "p-5 sm:flex flex-col items-center justify-center w-max gap-5 hidden",
              },
              { default: L(() => [Wo, Xo, Ko]), _: 1 }
            ),
            M(
              l,
              {
                vertical: "",
                duration: 30,
                "pause-on-hover": !0,
                direction: "reverse",
              },
              {
                default: L(() => [
                  (E(!0),
                  A(
                    q,
                    null,
                    K(
                      i.news,
                      (c, f) => (
                        E(),
                        A(
                          "a",
                          {
                            key: f,
                            href: c.url,
                            target: "_blank",
                            class:
                              "bg-black-1 flex flex-col border border-white/10 items-center justify-center rounded-2xl my-5 p-5 h-full w-full relative",
                          },
                          [
                            M(a, { class: "absolute top-5 right-5" }),
                            m(
                              "img",
                              {
                                src: c.img,
                                alt: "",
                                class: "rounded-2xl w-full object-cover h-full",
                              },
                              null,
                              8,
                              Jo
                            ),
                          ],
                          8,
                          Yo
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              }
            ),
          ]),
          m("div", Zo, [
            M(
              l,
              { duration: 30, "pause-on-hover": !0 },
              {
                default: L(() => [
                  (E(!0),
                  A(
                    q,
                    null,
                    K(
                      i.news,
                      (c, f) => (
                        E(),
                        A(
                          "a",
                          {
                            key: f,
                            href: c.url,
                            target: "_blank",
                            class:
                              "bg-black-1 flex flex-col border border-white/10 items-center justify-center rounded-2xl mx-5 p-5 h-full w-full relative",
                          },
                          [
                            M(a, { class: "absolute top-5 right-5" }),
                            m(
                              "img",
                              {
                                src: c.img,
                                alt: "",
                                class: "rounded-2xl w-64 object-contain h-64",
                              },
                              null,
                              8,
                              ea
                            ),
                          ],
                          8,
                          Qo
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              }
            ),
            M(
              o,
              {
                class:
                  "p-5 sm:flex flex-col items-center justify-center w-max gap-5 hidden",
              },
              { default: L(() => [ta, na, sa]), _: 1 }
            ),
            M(
              l,
              { duration: 30, direction: "reverse", "pause-on-hover": !0 },
              {
                default: L(() => [
                  (E(!0),
                  A(
                    q,
                    null,
                    K(
                      i.news,
                      (c, f) => (
                        E(),
                        A(
                          "a",
                          {
                            key: f,
                            href: c.url,
                            target: "_blank",
                            class:
                              "bg-black-1 flex flex-col border border-white/10 items-center justify-center rounded-2xl mx-5 p-5 h-full w-full relative",
                          },
                          [
                            M(a, { class: "absolute top-5 right-5" }),
                            m(
                              "img",
                              {
                                src: c.img,
                                alt: "",
                                class: "rounded-2xl w-64 object-contain h-64",
                              },
                              null,
                              8,
                              ra
                            ),
                          ],
                          8,
                          ia
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              }
            ),
          ]),
        ]),
      ]),
      _: 1,
    })
  );
}
const aa = V(Mo, [["render", oa]]),
  la = "/img/about.png",
  da = { components: { Section: ge } },
  ca = {
    class:
      "flex md:flex-row flex-col items-center justify-between w-full gap-10",
  },
  ua = { class: "flex flex-col items-start gap-5" },
  fa = { class: "text-title" },
  pa = { class: "text-white/[0.55] text-subtitle" },
  ma = { class: "text-white/[0.55] text-subtitle" },
  ha = { src: la, alt: "about", class: "md:w-1/2 w-full" };
function ga(t, e, n, s, i, r) {
  const o = $("Section"),
    l = ye("animate-onscroll");
  return (
    E(),
    U(
      o,
      { id: "about", class: "py-20" },
      {
        default: L(() => [
          m("div", ca, [
            m("div", ua, [
              j((E(), A("h1", fa, [W(" About Grok ")])), [
                [l, "animate__animated animate__fadeInLeft"],
              ]),
              j(
                (E(),
                A("p", pa, [
                  W(
                    " Elon Musk took to unveil Grok, the latest masterpiece from xAI. Grok was created as the direct competitor to Chat GPT - which many believe is a politically leaning platform attempting to destroy humanity. "
                  ),
                ])),
                [[l, "animate__animated animate__fadeInLeft"]]
              ),
              j(
                (E(),
                A("p", ma, [
                  W(
                    " Grok will be able to leverage real time data & have far reaching impact as it will have a direct integration on, will be built into new Tesla models, and can also be used outside of these environments. "
                  ),
                ])),
                [[l, "animate__animated animate__fadeInLeft"]]
              ),
            ]),
            j(m("img", ha, null, 512), [
              [l, "animate__animated animate__zoomIn "],
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
const va = V(da, [["render", ga]]),
  wa = {
    name: "Where",
    components: { Section: ge, Vue3Marquee: De },
    data() {
      return {
        exchanges: [
          {
            icon: "/exchanges/gate.png",
            title: "Gate",
            url: "https://www.gate.io/",
          },
          {
            icon: "/exchanges/bitmart.png",
            title: "BitMart",
            url: "https://www.bitmart.com/",
          },
          {
            icon: "/exchanges/poloniex.png",
            title: "Poloniex",
            url: "https://poloniex.com/",
          },
          {
            icon: "/exchanges/htx.png",
            title: "HTX",
            url: "https://www.htx.com/en-us/",
          },
          {
            icon: "/exchanges/bitget.png",
            title: "Bitget",
            url: "https://www.bitget.com/",
          },
          {
            icon: "/exchanges/mexc.png",
            title: "Mexc",
            url: "https://www.mexc.com/",
          },
          {
            icon: "/exchanges/lbank.png",
            title: "Lbank",
            url: "https://www.lbank.com/",
          },
        ],
      };
    },
  },
  ya = { class: "flex flex-col items-center w-full" },
  ba = m("h1", { class: "text-title" }, "Where to Buy GROK?", -1),
  _a = m(
    "h2",
    { class: "text-white/75 text-subtitle" },
    " We are currently listed on the following exchanges ",
    -1
  ),
  xa = ["href"],
  Sa = ["src"],
  Ta = { class: "flex items-center gap-2" },
  Ea = m(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "25",
      height: "25",
      viewBox: "0 0 25 25",
      fill: "none",
    },
    [
      m("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M9.16672 17.4998C9.16676 17.6975 9.22543 17.8908 9.33532 18.0552C9.4452 18.2197 9.60136 18.3478 9.78406 18.4235C9.96676 18.4991 10.1678 18.5189 10.3617 18.4804C10.5557 18.4418 10.7339 18.3466 10.8737 18.2068L15.8737 13.2068C16.0612 13.0193 16.1665 12.765 16.1665 12.4998C16.1665 12.2346 16.0612 11.9803 15.8737 11.7928L10.8737 6.79279C10.7339 6.65298 10.5557 6.55777 10.3617 6.5192C10.1678 6.48064 9.96676 6.50044 9.78406 6.57611C9.60136 6.65178 9.4452 6.77992 9.33532 6.94433C9.22543 7.10874 9.16676 7.30204 9.16672 7.49979L9.16672 17.4998Z",
        fill: "white",
        "fill-opacity": "0.55",
      }),
    ],
    -1
  );
function Ca(t, e, n, s, i, r) {
  const o = $("Vue3Marquee"),
    l = $("Section");
  return (
    E(),
    U(
      l,
      { class: "py-20" },
      {
        default: L(() => [
          m("div", ya, [
            ba,
            _a,
            M(
              o,
              { class: "mt-10" },
              {
                default: L(() => [
                  (E(!0),
                  A(
                    q,
                    null,
                    K(
                      i.exchanges,
                      (a, u) => (
                        E(),
                        A(
                          "a",
                          {
                            key: u,
                            href: a.url,
                            target: "_blank",
                            class:
                              "p-5 px-10 flex flex-col items-center justify-center gap-5 border border-white/10 rounded-2xl mx-5",
                          },
                          [
                            m(
                              "img",
                              { src: a.icon, alt: "", class: "h-24 w-24" },
                              null,
                              8,
                              Sa
                            ),
                            m("div", Ta, [m("h1", null, ee(a.title), 1), Ea]),
                          ],
                          8,
                          xa
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              }
            ),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
const Pa = V(wa, [["render", Ca]]),
  Oa = {
    name: "TokenomicsBlock",
    props: { title: String, value: [String, Number] },
    data() {
      return { hover: !1 };
    },
  },
  Ma = { class: "text-white text-title" },
  Aa = { class: "text-subtitle text-white/[0.55]" };
function Ia(t, e, n, s, i, r) {
  return (
    E(),
    A(
      "div",
      {
        onMouseover: e[0] || (e[0] = (o) => (i.hover = !0)),
        onMouseleave: e[1] || (e[1] = (o) => (i.hover = !1)),
        class:
          "bg-wrapper/25 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-5 relative",
      },
      [
        m("h1", Ma, ee(n.value), 1),
        m("h2", Aa, ee(n.title), 1),
        m(
          "img",
          {
            src: vt,
            alt: "effect",
            class: ue([
              "absolute right-0 w-full h-full rounded-2xl",
              {
                "block animate__animated animate__fadeIn": i.hover,
                hidden: !i.hover,
              },
            ]),
          },
          null,
          2
        ),
      ],
      32
    )
  );
}
const ka = V(Oa, [["render", Ia]]);
function pn(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: $a } = Object.prototype,
  { getPrototypeOf: yt } = Object,
  Ne = ((t) => (e) => {
    const n = $a.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ie = (t) => ((t = t.toLowerCase()), (e) => Ne(e) === t),
  je = (t) => (e) => typeof e === t,
  { isArray: be } = Array,
  xe = je("undefined");
function Ba(t) {
  return (
    t !== null &&
    !xe(t) &&
    t.constructor !== null &&
    !xe(t.constructor) &&
    Q(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const mn = ie("ArrayBuffer");
function La(t) {
  let e;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && mn(t.buffer)),
    e
  );
}
const Ra = je("string"),
  Q = je("function"),
  hn = je("number"),
  Fe = (t) => t !== null && typeof t == "object",
  za = (t) => t === !0 || t === !1,
  Ie = (t) => {
    if (Ne(t) !== "object") return !1;
    const e = yt(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  Da = ie("Date"),
  Na = ie("File"),
  ja = ie("Blob"),
  Fa = ie("FileList"),
  Ga = (t) => Fe(t) && Q(t.pipe),
  Va = (t) => {
    let e;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (Q(t.append) &&
          ((e = Ne(t)) === "formdata" ||
            (e === "object" &&
              Q(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  Ha = ie("URLSearchParams"),
  qa = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Te(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let s, i;
  if ((typeof t != "object" && (t = [t]), be(t)))
    for (s = 0, i = t.length; s < i; s++) e.call(null, t[s], s, t);
  else {
    const r = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
      o = r.length;
    let l;
    for (s = 0; s < o; s++) (l = r[s]), e.call(null, t[l], l, t);
  }
}
function gn(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let s = n.length,
    i;
  for (; s-- > 0; ) if (((i = n[s]), e === i.toLowerCase())) return i;
  return null;
}
const vn = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  wn = (t) => !xe(t) && t !== vn;
function lt() {
  const { caseless: t } = (wn(this) && this) || {},
    e = {},
    n = (s, i) => {
      const r = (t && gn(e, i)) || i;
      Ie(e[r]) && Ie(s)
        ? (e[r] = lt(e[r], s))
        : Ie(s)
        ? (e[r] = lt({}, s))
        : be(s)
        ? (e[r] = s.slice())
        : (e[r] = s);
    };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && Te(arguments[s], n);
  return e;
}
const Ua = (t, e, n, { allOwnKeys: s } = {}) => (
    Te(
      e,
      (i, r) => {
        n && Q(i) ? (t[r] = pn(i, n)) : (t[r] = i);
      },
      { allOwnKeys: s }
    ),
    t
  ),
  Wa = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  Xa = (t, e, n, s) => {
    (t.prototype = Object.create(e.prototype, s)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      n && Object.assign(t.prototype, n);
  },
  Ka = (t, e, n, s) => {
    let i, r, o;
    const l = {};
    if (((e = e || {}), t == null)) return e;
    do {
      for (i = Object.getOwnPropertyNames(t), r = i.length; r-- > 0; )
        (o = i[r]), (!s || s(o, t, e)) && !l[o] && ((e[o] = t[o]), (l[o] = !0));
      t = n !== !1 && yt(t);
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e;
  },
  Ya = (t, e, n) => {
    (t = String(t)),
      (n === void 0 || n > t.length) && (n = t.length),
      (n -= e.length);
    const s = t.indexOf(e, n);
    return s !== -1 && s === n;
  },
  Ja = (t) => {
    if (!t) return null;
    if (be(t)) return t;
    let e = t.length;
    if (!hn(e)) return null;
    const n = new Array(e);
    for (; e-- > 0; ) n[e] = t[e];
    return n;
  },
  Za = (
    (t) => (e) =>
      t && e instanceof t
  )(typeof Uint8Array < "u" && yt(Uint8Array)),
  Qa = (t, e) => {
    const s = (t && t[Symbol.iterator]).call(t);
    let i;
    for (; (i = s.next()) && !i.done; ) {
      const r = i.value;
      e.call(t, r[0], r[1]);
    }
  },
  el = (t, e) => {
    let n;
    const s = [];
    for (; (n = t.exec(e)) !== null; ) s.push(n);
    return s;
  },
  tl = ie("HTMLFormElement"),
  nl = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, i) {
      return s.toUpperCase() + i;
    }),
  zt = (
    ({ hasOwnProperty: t }) =>
    (e, n) =>
      t.call(e, n)
  )(Object.prototype),
  sl = ie("RegExp"),
  yn = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t),
      s = {};
    Te(n, (i, r) => {
      let o;
      (o = e(i, r, t)) !== !1 && (s[r] = o || i);
    }),
      Object.defineProperties(t, s);
  },
  il = (t) => {
    yn(t, (e, n) => {
      if (Q(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const s = t[n];
      if (Q(s)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  rl = (t, e) => {
    const n = {},
      s = (i) => {
        i.forEach((r) => {
          n[r] = !0;
        });
      };
    return be(t) ? s(t) : s(String(t).split(e)), n;
  },
  ol = () => {},
  al = (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
  Qe = "abcdefghijklmnopqrstuvwxyz",
  Dt = "0123456789",
  bn = { DIGIT: Dt, ALPHA: Qe, ALPHA_DIGIT: Qe + Qe.toUpperCase() + Dt },
  ll = (t = 16, e = bn.ALPHA_DIGIT) => {
    let n = "";
    const { length: s } = e;
    for (; t--; ) n += e[(Math.random() * s) | 0];
    return n;
  };
function dl(t) {
  return !!(
    t &&
    Q(t.append) &&
    t[Symbol.toStringTag] === "FormData" &&
    t[Symbol.iterator]
  );
}
const cl = (t) => {
    const e = new Array(10),
      n = (s, i) => {
        if (Fe(s)) {
          if (e.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            e[i] = s;
            const r = be(s) ? [] : {};
            return (
              Te(s, (o, l) => {
                const a = n(o, i + 1);
                !xe(a) && (r[l] = a);
              }),
              (e[i] = void 0),
              r
            );
          }
        }
        return s;
      };
    return n(t, 0);
  },
  ul = ie("AsyncFunction"),
  fl = (t) => t && (Fe(t) || Q(t)) && Q(t.then) && Q(t.catch),
  v = {
    isArray: be,
    isArrayBuffer: mn,
    isBuffer: Ba,
    isFormData: Va,
    isArrayBufferView: La,
    isString: Ra,
    isNumber: hn,
    isBoolean: za,
    isObject: Fe,
    isPlainObject: Ie,
    isUndefined: xe,
    isDate: Da,
    isFile: Na,
    isBlob: ja,
    isRegExp: sl,
    isFunction: Q,
    isStream: Ga,
    isURLSearchParams: Ha,
    isTypedArray: Za,
    isFileList: Fa,
    forEach: Te,
    merge: lt,
    extend: Ua,
    trim: qa,
    stripBOM: Wa,
    inherits: Xa,
    toFlatObject: Ka,
    kindOf: Ne,
    kindOfTest: ie,
    endsWith: Ya,
    toArray: Ja,
    forEachEntry: Qa,
    matchAll: el,
    isHTMLForm: tl,
    hasOwnProperty: zt,
    hasOwnProp: zt,
    reduceDescriptors: yn,
    freezeMethods: il,
    toObjectSet: rl,
    toCamelCase: nl,
    noop: ol,
    toFiniteNumber: al,
    findKey: gn,
    global: vn,
    isContextDefined: wn,
    ALPHABET: bn,
    generateString: ll,
    isSpecCompliantForm: dl,
    toJSONObject: cl,
    isAsyncFn: ul,
    isThenable: fl,
  };
function R(t, e, n, s, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    n && (this.config = n),
    s && (this.request = s),
    i && (this.response = i);
}
v.inherits(R, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: v.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const _n = R.prototype,
  xn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  xn[t] = { value: t };
});
Object.defineProperties(R, xn);
Object.defineProperty(_n, "isAxiosError", { value: !0 });
R.from = (t, e, n, s, i, r) => {
  const o = Object.create(_n);
  return (
    v.toFlatObject(
      t,
      o,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    R.call(o, t.message, e, n, s, i),
    (o.cause = t),
    (o.name = t.name),
    r && Object.assign(o, r),
    o
  );
};
const pl = null;
function dt(t) {
  return v.isPlainObject(t) || v.isArray(t);
}
function Sn(t) {
  return v.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Nt(t, e, n) {
  return t
    ? t
        .concat(e)
        .map(function (i, r) {
          return (i = Sn(i)), !n && r ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : e;
}
function ml(t) {
  return v.isArray(t) && !t.some(dt);
}
const hl = v.toFlatObject(v, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function Ge(t, e, n) {
  if (!v.isObject(t)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (n = v.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, x) {
        return !v.isUndefined(x[g]);
      }
    ));
  const s = n.metaTokens,
    i = n.visitor || d,
    r = n.dots,
    o = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && v.isSpecCompliantForm(e);
  if (!v.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (v.isDate(h)) return h.toISOString();
    if (!a && v.isBlob(h))
      throw new R("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(h) || v.isTypedArray(h)
      ? a && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function d(h, g, x) {
    let w = h;
    if (h && !x && typeof h == "object") {
      if (v.endsWith(g, "{}"))
        (g = s ? g : g.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (v.isArray(h) && ml(h)) ||
        ((v.isFileList(h) || v.endsWith(g, "[]")) && (w = v.toArray(h)))
      )
        return (
          (g = Sn(g)),
          w.forEach(function (y, T) {
            !(v.isUndefined(y) || y === null) &&
              e.append(
                o === !0 ? Nt([g], T, r) : o === null ? g : g + "[]",
                u(y)
              );
          }),
          !1
        );
    }
    return dt(h) ? !0 : (e.append(Nt(x, g, r), u(h)), !1);
  }
  const c = [],
    f = Object.assign(hl, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: dt,
    });
  function p(h, g) {
    if (!v.isUndefined(h)) {
      if (c.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      c.push(h),
        v.forEach(h, function (w, S) {
          (!(v.isUndefined(w) || w === null) &&
            i.call(e, w, v.isString(S) ? S.trim() : S, g, f)) === !0 &&
            p(w, g ? g.concat(S) : [S]);
        }),
        c.pop();
    }
  }
  if (!v.isObject(t)) throw new TypeError("data must be an object");
  return p(t), e;
}
function jt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (s) {
    return e[s];
  });
}
function bt(t, e) {
  (this._pairs = []), t && Ge(t, this, e);
}
const Tn = bt.prototype;
Tn.append = function (e, n) {
  this._pairs.push([e, n]);
};
Tn.toString = function (e) {
  const n = e
    ? function (s) {
        return e.call(this, s, jt);
      }
    : jt;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function gl(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function En(t, e, n) {
  if (!e) return t;
  const s = (n && n.encode) || gl,
    i = n && n.serialize;
  let r;
  if (
    (i
      ? (r = i(e, n))
      : (r = v.isURLSearchParams(e) ? e.toString() : new bt(e, n).toString(s)),
    r)
  ) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + r);
  }
  return t;
}
class vl {
  constructor() {
    this.handlers = [];
  }
  use(e, n, s) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    v.forEach(this.handlers, function (s) {
      s !== null && e(s);
    });
  }
}
const Ft = vl,
  Cn = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  wl = typeof URLSearchParams < "u" ? URLSearchParams : bt,
  yl = typeof FormData < "u" ? FormData : null,
  bl = typeof Blob < "u" ? Blob : null,
  _l = {
    isBrowser: !0,
    classes: { URLSearchParams: wl, FormData: yl, Blob: bl },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Pn = typeof window < "u" && typeof document < "u",
  xl = ((t) => Pn && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Sl = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Tl = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Pn,
        hasStandardBrowserEnv: xl,
        hasStandardBrowserWebWorkerEnv: Sl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  se = { ...Tl, ..._l };
function El(t, e) {
  return Ge(
    t,
    new se.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, i, r) {
          return se.isNode && v.isBuffer(n)
            ? (this.append(s, n.toString("base64")), !1)
            : r.defaultVisitor.apply(this, arguments);
        },
      },
      e
    )
  );
}
function Cl(t) {
  return v
    .matchAll(/\w+|\[(\w*)]/g, t)
    .map((e) => (e[0] === "[]" ? "" : e[1] || e[0]));
}
function Pl(t) {
  const e = {},
    n = Object.keys(t);
  let s;
  const i = n.length;
  let r;
  for (s = 0; s < i; s++) (r = n[s]), (e[r] = t[r]);
  return e;
}
function On(t) {
  function e(n, s, i, r) {
    let o = n[r++];
    const l = Number.isFinite(+o),
      a = r >= n.length;
    return (
      (o = !o && v.isArray(i) ? i.length : o),
      a
        ? (v.hasOwnProp(i, o) ? (i[o] = [i[o], s]) : (i[o] = s), !l)
        : ((!i[o] || !v.isObject(i[o])) && (i[o] = []),
          e(n, s, i[o], r) && v.isArray(i[o]) && (i[o] = Pl(i[o])),
          !l)
    );
  }
  if (v.isFormData(t) && v.isFunction(t.entries)) {
    const n = {};
    return (
      v.forEachEntry(t, (s, i) => {
        e(Cl(s), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Ol(t, e, n) {
  if (v.isString(t))
    try {
      return (e || JSON.parse)(t), v.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (n || JSON.stringify)(t);
}
const _t = {
  transitional: Cn,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (e, n) {
      const s = n.getContentType() || "",
        i = s.indexOf("application/json") > -1,
        r = v.isObject(e);
      if ((r && v.isHTMLForm(e) && (e = new FormData(e)), v.isFormData(e)))
        return i && i ? JSON.stringify(On(e)) : e;
      if (
        v.isArrayBuffer(e) ||
        v.isBuffer(e) ||
        v.isStream(e) ||
        v.isFile(e) ||
        v.isBlob(e)
      )
        return e;
      if (v.isArrayBufferView(e)) return e.buffer;
      if (v.isURLSearchParams(e))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          e.toString()
        );
      let l;
      if (r) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return El(e, this.formSerializer).toString();
        if ((l = v.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Ge(
            l ? { "files[]": e } : e,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return r || i ? (n.setContentType("application/json", !1), Ol(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const n = this.transitional || _t.transitional,
        s = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (e && v.isString(e) && ((s && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(e);
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError"
              ? R.from(l, R.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: se.classes.FormData, Blob: se.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
v.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  _t.headers[t] = {};
});
const xt = _t,
  Ml = v.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Al = (t) => {
    const e = {};
    let n, s, i;
    return (
      t &&
        t
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (s = o.substring(i + 1).trim()),
              !(!n || (e[n] && Ml[n])) &&
                (n === "set-cookie"
                  ? e[n]
                    ? e[n].push(s)
                    : (e[n] = [s])
                  : (e[n] = e[n] ? e[n] + ", " + s : s));
          }),
      e
    );
  },
  Gt = Symbol("internals");
function _e(t) {
  return t && String(t).trim().toLowerCase();
}
function ke(t) {
  return t === !1 || t == null ? t : v.isArray(t) ? t.map(ke) : String(t);
}
function Il(t) {
  const e = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = n.exec(t)); ) e[s[1]] = s[2];
  return e;
}
const kl = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function et(t, e, n, s, i) {
  if (v.isFunction(s)) return s.call(this, e, n);
  if ((i && (e = n), !!v.isString(e))) {
    if (v.isString(s)) return e.indexOf(s) !== -1;
    if (v.isRegExp(s)) return s.test(e);
  }
}
function $l(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, n, s) => n.toUpperCase() + s);
}
function Bl(t, e) {
  const n = v.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(t, s + n, {
      value: function (i, r, o) {
        return this[s].call(this, e, i, r, o);
      },
      configurable: !0,
    });
  });
}
class Ve {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, s) {
    const i = this;
    function r(l, a, u) {
      const d = _e(a);
      if (!d) throw new Error("header name must be a non-empty string");
      const c = v.findKey(i, d);
      (!c || i[c] === void 0 || u === !0 || (u === void 0 && i[c] !== !1)) &&
        (i[c || a] = ke(l));
    }
    const o = (l, a) => v.forEach(l, (u, d) => r(u, d, a));
    return (
      v.isPlainObject(e) || e instanceof this.constructor
        ? o(e, n)
        : v.isString(e) && (e = e.trim()) && !kl(e)
        ? o(Al(e), n)
        : e != null && r(n, e, s),
      this
    );
  }
  get(e, n) {
    if (((e = _e(e)), e)) {
      const s = v.findKey(this, e);
      if (s) {
        const i = this[s];
        if (!n) return i;
        if (n === !0) return Il(i);
        if (v.isFunction(n)) return n.call(this, i, s);
        if (v.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (((e = _e(e)), e)) {
      const s = v.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!n || et(this, this[s], s, n)));
    }
    return !1;
  }
  delete(e, n) {
    const s = this;
    let i = !1;
    function r(o) {
      if (((o = _e(o)), o)) {
        const l = v.findKey(s, o);
        l && (!n || et(s, s[l], l, n)) && (delete s[l], (i = !0));
      }
    }
    return v.isArray(e) ? e.forEach(r) : r(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let s = n.length,
      i = !1;
    for (; s--; ) {
      const r = n[s];
      (!e || et(this, this[r], r, e, !0)) && (delete this[r], (i = !0));
    }
    return i;
  }
  normalize(e) {
    const n = this,
      s = {};
    return (
      v.forEach(this, (i, r) => {
        const o = v.findKey(s, r);
        if (o) {
          (n[o] = ke(i)), delete n[r];
          return;
        }
        const l = e ? $l(r) : String(r).trim();
        l !== r && delete n[r], (n[l] = ke(i)), (s[l] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = Object.create(null);
    return (
      v.forEach(this, (s, i) => {
        s != null && s !== !1 && (n[i] = e && v.isArray(s) ? s.join(", ") : s);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const s = new this(e);
    return n.forEach((i) => s.set(i)), s;
  }
  static accessor(e) {
    const s = (this[Gt] = this[Gt] = { accessors: {} }).accessors,
      i = this.prototype;
    function r(o) {
      const l = _e(o);
      s[l] || (Bl(i, o), (s[l] = !0));
    }
    return v.isArray(e) ? e.forEach(r) : r(e), this;
  }
}
Ve.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
v.reduceDescriptors(Ve.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(s) {
      this[n] = s;
    },
  };
});
v.freezeMethods(Ve);
const le = Ve;
function tt(t, e) {
  const n = this || xt,
    s = e || n,
    i = le.from(s.headers);
  let r = s.data;
  return (
    v.forEach(t, function (l) {
      r = l.call(n, r, i.normalize(), e ? e.status : void 0);
    }),
    i.normalize(),
    r
  );
}
function Mn(t) {
  return !!(t && t.__CANCEL__);
}
function Ee(t, e, n) {
  R.call(this, t ?? "canceled", R.ERR_CANCELED, e, n),
    (this.name = "CanceledError");
}
v.inherits(Ee, R, { __CANCEL__: !0 });
function Ll(t, e, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status)
    ? t(n)
    : e(
        new R(
          "Request failed with status code " + n.status,
          [R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Rl = se.hasStandardBrowserEnv
  ? {
      write(t, e, n, s, i, r) {
        const o = [t + "=" + encodeURIComponent(e)];
        v.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
          v.isString(s) && o.push("path=" + s),
          v.isString(i) && o.push("domain=" + i),
          r === !0 && o.push("secure"),
          (document.cookie = o.join("; "));
      },
      read(t) {
        const e = document.cookie.match(
          new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
        );
        return e ? decodeURIComponent(e[3]) : null;
      },
      remove(t) {
        this.write(t, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function zl(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Dl(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function An(t, e) {
  return t && !zl(e) ? Dl(t, e) : e;
}
const Nl = se.hasStandardBrowserEnv
  ? (function () {
      const e = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let s;
      function i(r) {
        let o = r;
        return (
          e && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (s = i(window.location.href)),
        function (o) {
          const l = v.isString(o) ? i(o) : o;
          return l.protocol === s.protocol && l.host === s.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function jl(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || "";
}
function Fl(t, e) {
  t = t || 10;
  const n = new Array(t),
    s = new Array(t);
  let i = 0,
    r = 0,
    o;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (a) {
      const u = Date.now(),
        d = s[r];
      o || (o = u), (n[i] = a), (s[i] = u);
      let c = r,
        f = 0;
      for (; c !== i; ) (f += n[c++]), (c = c % t);
      if (((i = (i + 1) % t), i === r && (r = (r + 1) % t), u - o < e)) return;
      const p = d && u - d;
      return p ? Math.round((f * 1e3) / p) : void 0;
    }
  );
}
function Vt(t, e) {
  let n = 0;
  const s = Fl(50, 250);
  return (i) => {
    const r = i.loaded,
      o = i.lengthComputable ? i.total : void 0,
      l = r - n,
      a = s(l),
      u = r <= o;
    n = r;
    const d = {
      loaded: r,
      total: o,
      progress: o ? r / o : void 0,
      bytes: l,
      rate: a || void 0,
      estimated: a && o && u ? (o - r) / a : void 0,
      event: i,
    };
    (d[e ? "download" : "upload"] = !0), t(d);
  };
}
const Gl = typeof XMLHttpRequest < "u",
  Vl =
    Gl &&
    function (t) {
      return new Promise(function (n, s) {
        let i = t.data;
        const r = le.from(t.headers).normalize();
        let { responseType: o, withXSRFToken: l } = t,
          a;
        function u() {
          t.cancelToken && t.cancelToken.unsubscribe(a),
            t.signal && t.signal.removeEventListener("abort", a);
        }
        let d;
        if (v.isFormData(i)) {
          if (se.hasStandardBrowserEnv || se.hasStandardBrowserWebWorkerEnv)
            r.setContentType(!1);
          else if ((d = r.getContentType()) !== !1) {
            const [g, ...x] = d
              ? d
                  .split(";")
                  .map((w) => w.trim())
                  .filter(Boolean)
              : [];
            r.setContentType([g || "multipart/form-data", ...x].join("; "));
          }
        }
        let c = new XMLHttpRequest();
        if (t.auth) {
          const g = t.auth.username || "",
            x = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          r.set("Authorization", "Basic " + btoa(g + ":" + x));
        }
        const f = An(t.baseURL, t.url);
        c.open(t.method.toUpperCase(), En(f, t.params, t.paramsSerializer), !0),
          (c.timeout = t.timeout);
        function p() {
          if (!c) return;
          const g = le.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            w = {
              data:
                !o || o === "text" || o === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: g,
              config: t,
              request: c,
            };
          Ll(
            function (y) {
              n(y), u();
            },
            function (y) {
              s(y), u();
            },
            w
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = p)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(p);
              }),
          (c.onabort = function () {
            c &&
              (s(new R("Request aborted", R.ECONNABORTED, t, c)), (c = null));
          }),
          (c.onerror = function () {
            s(new R("Network Error", R.ERR_NETWORK, t, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let x = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = t.transitional || Cn;
            t.timeoutErrorMessage && (x = t.timeoutErrorMessage),
              s(
                new R(
                  x,
                  w.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED,
                  t,
                  c
                )
              ),
              (c = null);
          }),
          se.hasStandardBrowserEnv &&
            (l && v.isFunction(l) && (l = l(t)), l || (l !== !1 && Nl(f))))
        ) {
          const g =
            t.xsrfHeaderName && t.xsrfCookieName && Rl.read(t.xsrfCookieName);
          g && r.set(t.xsrfHeaderName, g);
        }
        i === void 0 && r.setContentType(null),
          "setRequestHeader" in c &&
            v.forEach(r.toJSON(), function (x, w) {
              c.setRequestHeader(w, x);
            }),
          v.isUndefined(t.withCredentials) ||
            (c.withCredentials = !!t.withCredentials),
          o && o !== "json" && (c.responseType = t.responseType),
          typeof t.onDownloadProgress == "function" &&
            c.addEventListener("progress", Vt(t.onDownloadProgress, !0)),
          typeof t.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Vt(t.onUploadProgress)),
          (t.cancelToken || t.signal) &&
            ((a = (g) => {
              c &&
                (s(!g || g.type ? new Ee(null, t, c) : g),
                c.abort(),
                (c = null));
            }),
            t.cancelToken && t.cancelToken.subscribe(a),
            t.signal &&
              (t.signal.aborted ? a() : t.signal.addEventListener("abort", a)));
        const h = jl(f);
        if (h && se.protocols.indexOf(h) === -1) {
          s(new R("Unsupported protocol " + h + ":", R.ERR_BAD_REQUEST, t));
          return;
        }
        c.send(i || null);
      });
    },
  ct = { http: pl, xhr: Vl };
v.forEach(ct, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ht = (t) => `- ${t}`,
  Hl = (t) => v.isFunction(t) || t === null || t === !1,
  In = {
    getAdapter: (t) => {
      t = v.isArray(t) ? t : [t];
      const { length: e } = t;
      let n, s;
      const i = {};
      for (let r = 0; r < e; r++) {
        n = t[r];
        let o;
        if (
          ((s = n),
          !Hl(n) && ((s = ct[(o = String(n)).toLowerCase()]), s === void 0))
        )
          throw new R(`Unknown adapter '${o}'`);
        if (s) break;
        i[o || "#" + r] = s;
      }
      if (!s) {
        const r = Object.entries(i).map(
          ([l, a]) =>
            `adapter ${l} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = e
          ? r.length > 1
            ? `since :
` +
              r.map(Ht).join(`
`)
            : " " + Ht(r[0])
          : "as no adapter specified";
        throw new R(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return s;
    },
    adapters: ct,
  };
function nt(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new Ee(null, t);
}
function qt(t) {
  return (
    nt(t),
    (t.headers = le.from(t.headers)),
    (t.data = tt.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    In.getAdapter(t.adapter || xt.adapter)(t).then(
      function (s) {
        return (
          nt(t),
          (s.data = tt.call(t, t.transformResponse, s)),
          (s.headers = le.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          Mn(s) ||
            (nt(t),
            s &&
              s.response &&
              ((s.response.data = tt.call(t, t.transformResponse, s.response)),
              (s.response.headers = le.from(s.response.headers)))),
          Promise.reject(s)
        );
      }
    )
  );
}
const Ut = (t) => (t instanceof le ? t.toJSON() : t);
function we(t, e) {
  e = e || {};
  const n = {};
  function s(u, d, c) {
    return v.isPlainObject(u) && v.isPlainObject(d)
      ? v.merge.call({ caseless: c }, u, d)
      : v.isPlainObject(d)
      ? v.merge({}, d)
      : v.isArray(d)
      ? d.slice()
      : d;
  }
  function i(u, d, c) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(u)) return s(void 0, u, c);
    } else return s(u, d, c);
  }
  function r(u, d) {
    if (!v.isUndefined(d)) return s(void 0, d);
  }
  function o(u, d) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(u)) return s(void 0, u);
    } else return s(void 0, d);
  }
  function l(u, d, c) {
    if (c in e) return s(u, d);
    if (c in t) return s(void 0, u);
  }
  const a = {
    url: r,
    method: r,
    data: r,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (u, d) => i(Ut(u), Ut(d), !0),
  };
  return (
    v.forEach(Object.keys(Object.assign({}, t, e)), function (d) {
      const c = a[d] || i,
        f = c(t[d], e[d], d);
      (v.isUndefined(f) && c !== l) || (n[d] = f);
    }),
    n
  );
}
const kn = "1.6.2",
  St = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    St[t] = function (s) {
      return typeof s === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const Wt = {};
St.transitional = function (e, n, s) {
  function i(r, o) {
    return (
      "[Axios v" +
      kn +
      "] Transitional option '" +
      r +
      "'" +
      o +
      (s ? ". " + s : "")
    );
  }
  return (r, o, l) => {
    if (e === !1)
      throw new R(
        i(o, " has been removed" + (n ? " in " + n : "")),
        R.ERR_DEPRECATED
      );
    return (
      n &&
        !Wt[o] &&
        ((Wt[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      e ? e(r, o, l) : !0
    );
  };
};
function ql(t, e, n) {
  if (typeof t != "object")
    throw new R("options must be an object", R.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(t);
  let i = s.length;
  for (; i-- > 0; ) {
    const r = s[i],
      o = e[r];
    if (o) {
      const l = t[r],
        a = l === void 0 || o(l, r, t);
      if (a !== !0)
        throw new R("option " + r + " must be " + a, R.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new R("Unknown option " + r, R.ERR_BAD_OPTION);
  }
}
const ut = { assertOptions: ql, validators: St },
  de = ut.validators;
class Le {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new Ft(), response: new Ft() });
  }
  request(e, n) {
    typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
      (n = we(this.defaults, n));
    const { transitional: s, paramsSerializer: i, headers: r } = n;
    s !== void 0 &&
      ut.assertOptions(
        s,
        {
          silentJSONParsing: de.transitional(de.boolean),
          forcedJSONParsing: de.transitional(de.boolean),
          clarifyTimeoutError: de.transitional(de.boolean),
        },
        !1
      ),
      i != null &&
        (v.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : ut.assertOptions(
              i,
              { encode: de.function, serialize: de.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = r && v.merge(r.common, r[n.method]);
    r &&
      v.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (h) => {
          delete r[h];
        }
      ),
      (n.headers = le.concat(o, r));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((a = a && g.synchronous), l.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let d,
      c = 0,
      f;
    if (!a) {
      const h = [qt.bind(this), void 0];
      for (
        h.unshift.apply(h, l),
          h.push.apply(h, u),
          f = h.length,
          d = Promise.resolve(n);
        c < f;

      )
        d = d.then(h[c++], h[c++]);
      return d;
    }
    f = l.length;
    let p = n;
    for (c = 0; c < f; ) {
      const h = l[c++],
        g = l[c++];
      try {
        p = h(p);
      } catch (x) {
        g.call(this, x);
        break;
      }
    }
    try {
      d = qt.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (c = 0, f = u.length; c < f; ) d = d.then(u[c++], u[c++]);
    return d;
  }
  getUri(e) {
    e = we(this.defaults, e);
    const n = An(e.baseURL, e.url);
    return En(n, e.params, e.paramsSerializer);
  }
}
v.forEach(["delete", "get", "head", "options"], function (e) {
  Le.prototype[e] = function (n, s) {
    return this.request(
      we(s || {}, { method: e, url: n, data: (s || {}).data })
    );
  };
});
v.forEach(["post", "put", "patch"], function (e) {
  function n(s) {
    return function (r, o, l) {
      return this.request(
        we(l || {}, {
          method: e,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: r,
          data: o,
        })
      );
    };
  }
  (Le.prototype[e] = n()), (Le.prototype[e + "Form"] = n(!0));
});
const $e = Le;
class Tt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (r) {
      n = r;
    });
    const s = this;
    this.promise.then((i) => {
      if (!s._listeners) return;
      let r = s._listeners.length;
      for (; r-- > 0; ) s._listeners[r](i);
      s._listeners = null;
    }),
      (this.promise.then = (i) => {
        let r;
        const o = new Promise((l) => {
          s.subscribe(l), (r = l);
        }).then(i);
        return (
          (o.cancel = function () {
            s.unsubscribe(r);
          }),
          o
        );
      }),
      e(function (r, o, l) {
        s.reason || ((s.reason = new Ee(r, o, l)), n(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let e;
    return {
      token: new Tt(function (i) {
        e = i;
      }),
      cancel: e,
    };
  }
}
const Ul = Tt;
function Wl(t) {
  return function (n) {
    return t.apply(null, n);
  };
}
function Xl(t) {
  return v.isObject(t) && t.isAxiosError === !0;
}
const ft = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ft).forEach(([t, e]) => {
  ft[e] = t;
});
const Kl = ft;
function $n(t) {
  const e = new $e(t),
    n = pn($e.prototype.request, e);
  return (
    v.extend(n, $e.prototype, e, { allOwnKeys: !0 }),
    v.extend(n, e, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return $n(we(t, i));
    }),
    n
  );
}
const G = $n(xt);
G.Axios = $e;
G.CanceledError = Ee;
G.CancelToken = Ul;
G.isCancel = Mn;
G.VERSION = kn;
G.toFormData = Ge;
G.AxiosError = R;
G.Cancel = G.CanceledError;
G.all = function (e) {
  return Promise.all(e);
};
G.spread = Wl;
G.isAxiosError = Xl;
G.mergeConfig = we;
G.AxiosHeaders = le;
G.formToJSON = (t) => On(v.isHTMLForm(t) ? new FormData(t) : t);
G.getAdapter = In.getAdapter;
G.HttpStatusCode = Kl;
G.default = G;
const Yl = G,
  Jl = "/img/tokenomics.png",
  Zl = {
    components: {
      Section: ge,
      Block: Se,
      TokenomicsBlock: ka,
      Button: Re,
      IconRobot: ze,
    },
    data() {
      return { marketCap: 0 };
    },
    methods: {
      formatNumberCompact(t) {
        return Intl.NumberFormat("en", { notation: "compact" }).format(t);
      },
    },
    async mounted() {
      await Yl.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=grok-2&vs_currencies=usd&include_market_cap=true"
      ).then(({ data: t }) => {
        this.marketCap = t["grok-2"].usd_market_cap;
      });
    },
  },
  Ql = { class: "flex flex-col items-start w-full gap-10" },
  ed = { class: "flex items-center gap-5" },
  td = m("img", { src: Jl, alt: "tokenomics", class: "w-1/4" }, null, -1),
  nd = m(
    "div",
    { class: "flex flex-col items-start gap-2" },
    [
      m("h1", { class: "text-title" }, "Tokenomics"),
      m("h2", { class: "opacity-[0.85] text-subtitle" }, [
        W(" Understanding "),
        m("span", { class: "text-white" }, "GROK's"),
        W(" Tokenomics "),
      ]),
    ],
    -1
  ),
  sd = [td, nd],
  id = { class: "flex flex-col items-start gap-5 p-5 max-w-prose" },
  rd = m(
    "h1",
    { class: "text-white/75 text-subtitle" },
    [
      m("span", { class: "text-white" }, "GROK"),
      W(
        " operates on a token-based system that facilitates interactions within its ecosystem. Our tokenomics model ensures smooth accessibility to "
      ),
      m("span", { class: "text-white" }, "GROK's"),
      W(
        " various features and services, empowering users to enjoy a more immersive AI experience. "
      ),
    ],
    -1
  ),
  od = { class: "flex md:flex-row flex-col items-stretch gap-5 w-full h-full" },
  ad = { class: "flex flex-col items-start gap-5 w-full" },
  ld = { class: "flex flex-col items-start gap-5 w-full" };
function dd(t, e, n, s, i, r) {
  const o = $("IconRobot"),
    l = $("Button"),
    a = $("Block"),
    u = $("TokenomicsBlock"),
    d = $("Section"),
    c = ye("animate-onscroll");
  return (
    E(),
    U(
      d,
      { id: "tokenomics", class: "py-20" },
      {
        default: L(() => [
          m("div", Ql, [
            M(
              a,
              {
                class: "flex md:flex-row flex-col items-start justify-between",
              },
              {
                default: L(() => [
                  j((E(), A("div", ed, sd)), [
                    [c, "animate__animated animate__fadeInLeft"],
                  ]),
                  j(
                    (E(),
                    A("div", id, [
                      rd,
                      M(
                        l,
                        { text: "Learn More", icon: "right" },
                        { icon: L(() => [M(o)]), _: 1 }
                      ),
                    ])),
                    [[c, "animate__animated animate__fadeInRight"]]
                  ),
                ]),
                _: 1,
              }
            ),
            m("div", od, [
              m("div", ad, [
                j(
                  M(
                    u,
                    {
                      title: "Total Market Cap",
                      value: `$${r.formatNumberCompact(i.marketCap)}`,
                      class: "w-full",
                    },
                    null,
                    8,
                    ["value"]
                  ),
                  [[c, "animate__animated animate__fadeInLeft"]]
                ),
                j(
                  M(
                    u,
                    { title: "Tokens Burned", value: "303M", class: "w-full" },
                    null,
                    512
                  ),
                  [[c, "animate__animated animate__fadeInLeft"]]
                ),
              ]),
              j(
                M(
                  u,
                  { title: "Tax", value: "NO TAX", class: "w-full" },
                  null,
                  512
                ),
                [[c, "animate__animated animate__fadeInUp"]]
              ),
              m("div", ld, [
                j(
                  M(
                    u,
                    {
                      title: "Circulating Supply",
                      value: "6.6B",
                      class: "w-full",
                    },
                    null,
                    512
                  ),
                  [[c, "animate__animated animate__fadeInRight"]]
                ),
                j(
                  M(
                    u,
                    { title: "Total Supply", value: "6.9B", class: "w-full" },
                    null,
                    512
                  ),
                  [[c, "animate__animated animate__fadeInRight"]]
                ),
              ]),
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
const cd = V(Zl, [["render", dd]]),
  Bn = "/img/rocket.png",
  ud = {
    name: "Buy",
    components: {
      Section: ge,
      Block: Se,
      Button: Re,
      IconRobot: ze,
      Vue3Marquee: De,
    },
    data() {
      return {
        exchangesOne: [
          {
            icon: "/exchanges/gate.png",
            title: "Gate",
            url: "https://www.gate.io/",
          },
          {
            icon: "/exchanges/bitmart.png",
            title: "BitMart",
            url: "https://www.bitmart.com/",
          },
          {
            icon: "/exchanges/poloniex.png",
            title: "Poloniex",
            url: "https://poloniex.com/",
          },
          {
            icon: "/exchanges/htx.png",
            title: "HTX",
            url: "https://www.htx.com/en-us/",
          },
        ],
        exchangesTwo: [
          {
            icon: "/exchanges/bitget.png",
            title: "Bitget",
            url: "https://www.bitget.com/",
          },
          {
            icon: "/exchanges/mexc.png",
            title: "Mexc",
            url: "https://www.mexc.com/",
          },
          {
            icon: "/exchanges/lbank.png",
            title: "Lbank",
            url: "https://www.lbank.com/",
          },
        ],
      };
    },
  },
  fd = m("img", { src: fn, alt: "", class: "absolute right-0" }, null, -1),
  pd = {
    class:
      "flex md:flex-row flex-col items-stretch justify-between w-full gap-10",
  },
  md = { class: "flex flex-col items-start gap-5" },
  hd = m("h1", { class: "text-title" }, "Where to Buy GROK?", -1),
  gd = m(
    "p",
    { class: "text-white/[0.55] text-subtitle" },
    " Buying GROK is simple! Just set up your wallet, get some ETH, use Uniswap, and swap your ETH for GROK. Our guide makes it easy for you to join us! ",
    -1
  ),
  vd = { src: Bn, alt: "rocket", class: "md:hidden block w-full rounded-2xl" },
  wd = {
    class: "flex items-center justify-center w-full gap-10 h-[500px] mt-5",
  },
  yd = ["href"],
  bd = ["src"],
  _d = { class: "flex items-center gap-2" },
  xd = m(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "25",
      height: "25",
      viewBox: "0 0 25 25",
      fill: "none",
    },
    [
      m("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M9.16672 17.4998C9.16676 17.6975 9.22543 17.8908 9.33532 18.0552C9.4452 18.2197 9.60136 18.3478 9.78406 18.4235C9.96676 18.4991 10.1678 18.5189 10.3617 18.4804C10.5557 18.4418 10.7339 18.3466 10.8737 18.2068L15.8737 13.2068C16.0612 13.0193 16.1665 12.765 16.1665 12.4998C16.1665 12.2346 16.0612 11.9803 15.8737 11.7928L10.8737 6.79279C10.7339 6.65298 10.5557 6.55777 10.3617 6.5192C10.1678 6.48064 9.96676 6.50044 9.78406 6.57611C9.60136 6.65178 9.4452 6.77992 9.33532 6.94433C9.22543 7.10874 9.16676 7.30204 9.16672 7.49979L9.16672 17.4998Z",
        fill: "white",
        "fill-opacity": "0.55",
      }),
    ],
    -1
  ),
  Sd = ["href"],
  Td = ["src"],
  Ed = { class: "flex items-center gap-2" },
  Cd = m(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "25",
      height: "25",
      viewBox: "0 0 25 25",
      fill: "none",
    },
    [
      m("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M9.16672 17.4998C9.16676 17.6975 9.22543 17.8908 9.33532 18.0552C9.4452 18.2197 9.60136 18.3478 9.78406 18.4235C9.96676 18.4991 10.1678 18.5189 10.3617 18.4804C10.5557 18.4418 10.7339 18.3466 10.8737 18.2068L15.8737 13.2068C16.0612 13.0193 16.1665 12.765 16.1665 12.4998C16.1665 12.2346 16.0612 11.9803 15.8737 11.7928L10.8737 6.79279C10.7339 6.65298 10.5557 6.55777 10.3617 6.5192C10.1678 6.48064 9.96676 6.50044 9.78406 6.57611C9.60136 6.65178 9.4452 6.77992 9.33532 6.94433C9.22543 7.10874 9.16676 7.30204 9.16672 7.49979L9.16672 17.4998Z",
        fill: "white",
        "fill-opacity": "0.55",
      }),
    ],
    -1
  ),
  Pd = { src: Bn, alt: "rocket", class: "md:block hidden w-1/2 rounded-2xl" };
function Od(t, e, n, s, i, r) {
  const o = $("IconRobot"),
    l = $("Button"),
    a = $("Vue3Marquee"),
    u = $("Section"),
    d = ye("animate-onscroll");
  return (
    E(),
    U(
      u,
      { id: "buy", class: "py-20" },
      {
        default: L(() => [
          fd,
          m("div", pd, [
            m("div", md, [
              hd,
              gd,
              M(
                l,
                { text: "Buy GROK", icon: "right" },
                { icon: L(() => [M(o)]), _: 1 }
              ),
              j(m("img", vd, null, 512), [
                [d, "animate__animated animate__zoomIn"],
              ]),
              m("div", wd, [
                M(
                  a,
                  { vertical: "", class: "" },
                  {
                    default: L(() => [
                      (E(!0),
                      A(
                        q,
                        null,
                        K(
                          i.exchangesOne,
                          (c, f) => (
                            E(),
                            A(
                              "a",
                              {
                                key: f,
                                href: c.url,
                                target: "_blank",
                                class:
                                  "p-5 px-10 flex flex-col items-center justify-center gap-5 border border-white/10 rounded-2xl my-5",
                              },
                              [
                                m(
                                  "img",
                                  { src: c.icon, alt: "", class: "h-24 w-24" },
                                  null,
                                  8,
                                  bd
                                ),
                                m("div", _d, [
                                  m("h1", null, ee(c.title), 1),
                                  xd,
                                ]),
                              ],
                              8,
                              yd
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                ),
                M(
                  a,
                  { vertical: "", direction: "reverse" },
                  {
                    default: L(() => [
                      (E(!0),
                      A(
                        q,
                        null,
                        K(
                          i.exchangesTwo,
                          (c, f) => (
                            E(),
                            A(
                              "a",
                              {
                                key: f,
                                href: c.url,
                                target: "_blank",
                                class:
                                  "p-5 px-10 flex flex-col items-center justify-center gap-5 border border-white/10 rounded-2xl my-5",
                              },
                              [
                                m(
                                  "img",
                                  { src: c.icon, alt: "", class: "h-24 w-24" },
                                  null,
                                  8,
                                  Td
                                ),
                                m("div", Ed, [
                                  m("h1", null, ee(c.title), 1),
                                  Cd,
                                ]),
                              ],
                              8,
                              Sd
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ]),
            j(m("img", Pd, null, 512), [
              [d, "animate__animated animate__zoomIn"],
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
const Md = V(ud, [["render", Od]]),
  Ad = { name: "IconDisclaimer" },
  Id = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "33",
    height: "33",
    viewBox: "0 0 33 33",
    fill: "none",
  },
  kd = m(
    "path",
    {
      d: "M30.525 24.2461L19.2522 4.66907C18.9705 4.18944 18.5683 3.79176 18.0856 3.51544C17.6028 3.23911 17.0563 3.09375 16.5 3.09375C15.9438 3.09375 15.3972 3.23911 14.9145 3.51544C14.4317 3.79176 14.0296 4.18944 13.7479 4.66907L2.47504 24.2461C2.204 24.71 2.06116 25.2376 2.06116 25.7749C2.06116 26.3122 2.204 26.8398 2.47504 27.3037C2.75313 27.7862 3.1546 28.1861 3.63824 28.4622C4.12188 28.7384 4.67029 28.8809 5.22719 28.8751H27.7729C28.3294 28.8804 28.8772 28.7377 29.3604 28.4616C29.8435 28.1855 30.2446 27.7859 30.5225 27.3037C30.7939 26.84 30.9372 26.3125 30.9376 25.7752C30.9381 25.238 30.7957 24.7102 30.525 24.2461ZM15.4688 13.4063C15.4688 13.1328 15.5774 12.8705 15.7708 12.6771C15.9642 12.4837 16.2265 12.3751 16.5 12.3751C16.7735 12.3751 17.0358 12.4837 17.2292 12.6771C17.4226 12.8705 17.5313 13.1328 17.5313 13.4063V18.5626C17.5313 18.8361 17.4226 19.0984 17.2292 19.2918C17.0358 19.4852 16.7735 19.5938 16.5 19.5938C16.2265 19.5938 15.9642 19.4852 15.7708 19.2918C15.5774 19.0984 15.4688 18.8361 15.4688 18.5626V13.4063ZM16.5 24.7501C16.1941 24.7501 15.895 24.6594 15.6406 24.4894C15.3863 24.3194 15.188 24.0778 15.0709 23.7952C14.9538 23.5125 14.9232 23.2015 14.9829 22.9014C15.0426 22.6014 15.1899 22.3257 15.4062 22.1094C15.6226 21.8931 15.8982 21.7457 16.1983 21.6861C16.4983 21.6264 16.8093 21.657 17.092 21.7741C17.3747 21.8912 17.6162 22.0894 17.7862 22.3438C17.9562 22.5982 18.0469 22.8973 18.0469 23.2032C18.0469 23.6135 17.8839 24.0069 17.5938 24.297C17.3038 24.5871 16.9103 24.7501 16.5 24.7501Z",
      fill: "#B87E3A",
    },
    null,
    -1
  ),
  $d = [kd];
function Bd(t, e, n, s, i, r) {
  return E(), A("svg", Id, $d);
}
const Ld = V(Ad, [["render", Bd]]),
  Rd = "/img/disclaimer.png",
  zd = {
    name: "Footer",
    components: { Section: ge, Block: Se, Logo: Yt, IconDisclaimer: Ld },
    data() {
      return {
        socials: [
          { icon: "/socials/telegram.svg", link: "https://t.me/GROKERC20" },
          {
            icon: "/socials/dextools.svg",
            link: "https://www.dextools.io/app/en/ether/pair-explorer/0x8390a1DA07E376ef7aDd4Be859BA74Fb83aA02D5",
          },
          { icon: "/socials/x.svg", link: "https://twitter.com/Grok_Project" },
        ],
        links: [
          { name: "Home", url: "/", hash: "" },
          { name: "About", url: "/#about", hash: "#about" },
          { name: "Tokenomics", url: "/#tokenomics", hash: "#tokenomics" },
          { name: "Buy", url: "/#buy", hash: "#buy" },
        ],
      };
    },
  },
  Dd = { class: "flex flex-col items-start gap-2" },
  Nd = { class: "flex flex-col items-start w-full relative" },
  jd = { src: Rd, alt: "disclaimer", class: "h-72 -mb-5 self-center" },
  Fd = { class: "flex flex-col items-center gap-2" },
  Gd = m("h1", { class: "uppercase text-title" }, "Disclaimer", -1),
  Vd = m(
    "h1",
    { class: "text-subtitle text-center" },
    " GROK coin has no association with X or Elon Musk. This token is simply about creating meme culture out of a nice product! ",
    -1
  ),
  Hd = m(
    "h1",
    { class: "text-subtitle text-center" },
    [
      W(
        " GROK is a meme coin with no expectation of financial return. There is no formal team or roadmap. "
      ),
      m("br", { class: "hidden md:block" }),
      W("The token is for entertainment purposes only. "),
    ],
    -1
  ),
  qd = m(
    "img",
    { src: vt, alt: "effect", class: "absolute right-0 h-full rounded-r-2xl" },
    null,
    -1
  ),
  Ud = { class: "flex flex-col items-start gap-3" },
  Wd = m(
    "h1",
    { class: "max-w-prose text-subtitle" },
    " GROK represents a new frontier in conversational AI technology, offering humor along with unparalleled intelligence. ",
    -1
  ),
  Xd = m("h2", { class: "text-sm text-white/[0.55]" }, "© GROK 2023", -1),
  Kd = { class: "flex md:flex-row flex-col items-start md:gap-10 gap-5" },
  Yd = { class: "flex md:flex-col flex-row md:items-start items-center gap-5" },
  Jd = ["href"],
  Zd = ["src"],
  Qd = {
    class:
      "flex md:flex-col flex-row md:items-start items-center gap-5 md:flex-nowrap flex-wrap",
  };
function ec(t, e, n, s, i, r) {
  const o = $("IconDisclaimer"),
    l = $("Block"),
    a = $("Logo"),
    u = $("router-link"),
    d = $("Section"),
    c = ye("animate-onscroll");
  return (
    E(),
    U(d, null, {
      default: L(() => [
        m("div", Dd, [
          m("div", Nd, [
            j(m("img", jd, null, 512), [
              [c, "animate__animated animate__fadeInUp"],
            ]),
            M(
              l,
              { class: "p-10 flex flex-col items-center justify-center gap-5" },
              { default: L(() => [m("div", Fd, [M(o), Gd]), Vd, Hd, qd]), _: 1 }
            ),
          ]),
          M(
            l,
            {
              class:
                "p-10 flex md:flex-row flex-col md:items-center items-start justify-between gap-5 w-full",
            },
            {
              default: L(() => [
                m("div", Ud, [M(a), Wd, Xd]),
                m("div", Kd, [
                  m("div", Yd, [
                    (E(!0),
                    A(
                      q,
                      null,
                      K(
                        i.socials,
                        (f, p) => (
                          E(),
                          A(
                            "a",
                            { key: p, href: f.link, target: "_blank" },
                            [
                              m(
                                "img",
                                { src: f.icon, alt: "social" },
                                null,
                                8,
                                Zd
                              ),
                            ],
                            8,
                            Jd
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  m("div", Qd, [
                    (E(!0),
                    A(
                      q,
                      null,
                      K(
                        i.links,
                        (f, p) => (
                          E(),
                          U(
                            u,
                            {
                              key: p,
                              to: f.url,
                              class:
                                "no-underline block md:inline-block text-white/75 text-sm",
                            },
                            { default: L(() => [W(ee(f.name), 1)]), _: 2 },
                            1032,
                            ["to"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
              _: 1,
            }
          ),
        ]),
      ]),
      _: 1,
    })
  );
}
const tc = V(zd, [["render", ec]]),
  nc = {
    components: {
      Nav: vs,
      Hero: Gs,
      Vault: Po,
      Trust: aa,
      About: va,
      Where: Pa,
      Tokenomics: cd,
      Buy: Md,
      Footer: tc,
    },
  };
function sc(t, e, n, s, i, r) {
  const o = $("Nav"),
    l = $("Hero"),
    a = $("Vault"),
    u = $("Trust"),
    d = $("About"),
    c = $("Where"),
    f = $("Tokenomics"),
    p = $("Buy"),
    h = $("Footer");
  return (
    E(), A(q, null, [M(o), M(l), M(a), M(u), M(d), M(c), M(f), M(p), M(h)], 64)
  );
}
const rc = V(nc, [["render", sc]]);
export { rc as default };

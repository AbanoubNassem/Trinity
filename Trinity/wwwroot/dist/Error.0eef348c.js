import { u as t, b as e, j as s, c as a, f as i } from "./main.d5262881.js";
const c = ({ statusCode: n, reasonPhrase: r }) => {
  const l = t();
  return /* @__PURE__ */ e("div", {
    className: "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",
    children: /* @__PURE__ */ s("div", {
      className: "flex flex-column align-items-center justify-content-center",
      children: [
        /* @__PURE__ */ e("img", {
          src: a(),
          alt: l.title,
          className: "mb-5 w-6rem flex-shrink-0"
        }),
        /* @__PURE__ */ e("div", {
          style: { borderRadius: "56px", padding: "0.3rem", background: "linear-gradient(rgb(255 2 2 / 62%) 10%, rgba(33, 150, 243, 0) 30%)" },
          children: /* @__PURE__ */ s("div", {
            className: "w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center",
            style: { borderRadius: "53px" },
            children: [
              /* @__PURE__ */ e("span", {
                className: "text-red-500 font-bold text-3xl",
                children: n
              }),
              /* @__PURE__ */ e("h1", {
                className: "text-900 font-bold text-5xl mb-2",
                children: "Whoops, something went wrong on our servers."
              }),
              /* @__PURE__ */ e("div", {
                className: "text-600 mb-5",
                children: r
              }),
              /* @__PURE__ */ e(i, {
                href: `/${l.prefix}`,
                children: /* @__PURE__ */ s("a", {
                  className: "w-full flex align-items-center py-5 border-300 border-bottom-1",
                  children: [
                    /* @__PURE__ */ e("span", {
                      className: "flex justify-content-center align-items-center bg-cyan-400 border-round",
                      style: { height: "3.5rem", width: "3.5rem" },
                      children: /* @__PURE__ */ e("i", {
                        className: "text-50 pi pi-fw pi-home text-2xl"
                      })
                    }),
                    /* @__PURE__ */ e("span", {
                      className: "ml-4 flex flex-column",
                      children: /* @__PURE__ */ e("span", {
                        className: "text-900 lg:text-xl font-medium mb-1",
                        children: "Home"
                      })
                    })
                  ]
                })
              })
            ]
          })
        })
      ]
    })
  });
};
c.layout = null;
export {
  c as default
};

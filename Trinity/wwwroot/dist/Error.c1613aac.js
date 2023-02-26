import { u as t, j as r, F as a, b as e, H as i, c, d } from "./main.8e9066d4.js";
const o = ({ statusCode: l, reasonPhrase: n }) => {
  const s = t();
  return /* @__PURE__ */ r(a, {
    children: [
      /* @__PURE__ */ e(i, {
        title: "Error"
      }),
      /* @__PURE__ */ e("div", {
        className: "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",
        children: /* @__PURE__ */ r("div", {
          className: "flex flex-column align-items-center justify-content-center",
          children: [
            /* @__PURE__ */ e("img", {
              src: c(),
              alt: s.title,
              className: "mb-5 w-6rem flex-shrink-0"
            }),
            /* @__PURE__ */ e("div", {
              style: {
                borderRadius: "56px",
                padding: "0.3rem",
                background: "linear-gradient(rgb(255 2 2 / 62%) 10%, rgba(33, 150, 243, 0) 30%)"
              },
              children: /* @__PURE__ */ r("div", {
                className: "w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center",
                style: { borderRadius: "53px" },
                children: [
                  /* @__PURE__ */ e("span", {
                    className: "text-red-500 font-bold text-3xl",
                    children: l
                  }),
                  /* @__PURE__ */ e("h1", {
                    className: "text-900 font-bold text-5xl mb-2",
                    children: "Whoops, something went wrong on our servers."
                  }),
                  /* @__PURE__ */ e("div", {
                    className: "text-600 mb-5",
                    children: n
                  }),
                  /* @__PURE__ */ e(d, {
                    href: `/${s.prefix}`,
                    children: /* @__PURE__ */ r("a", {
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
      })
    ]
  });
};
o.layout = null;
export {
  o as default
};

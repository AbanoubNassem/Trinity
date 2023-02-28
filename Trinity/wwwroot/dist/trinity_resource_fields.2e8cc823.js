import { a } from "./main.d4a481b6.js";
function i() {
  var o, r;
  const s = a(), e = [];
  for (const t of (r = (o = s.resource) == null ? void 0 : o.schema) != null ? r : [])
    n(e, t);
  return e;
}
function n(s, e) {
  switch (e.type) {
    case "Field":
      s.push(e);
      break;
    case "Layout": {
      for (const o of e.schema)
        n(s, o);
      break;
    }
  }
}
export {
  i as u
};

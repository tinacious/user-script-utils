function d(n) {
  const t = document.createElement("style");
  return t.textContent = n, document.head.appendChild(t), t;
}
function p(n, ...t) {
  const s = n.reduce((o, r, e) => {
    if (o.push(r), t[e]) {
      const u = typeof t[e] == "function" ? t[e]() : t[e].toString();
      o.push(u);
    }
    return o;
  }, []).join("").replace(/ /g, "").split(/\n/).join(`
`);
  return d(s);
}
export {
  d as addCssStyleSheet,
  p as css
};

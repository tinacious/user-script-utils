function n(e) {
  const t = document.createElement("style");
  return t.textContent = e, document.head.appendChild(t), t;
}
function c(e) {
  n(e);
}
export {
  n as addCssStyleSheet,
  c as css
};

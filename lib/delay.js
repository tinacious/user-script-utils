const s = (n = 5e3, e) => {
  const t = new Promise((o, r) => {
    setTimeout(() => {
      o(null);
    }, n);
  });
  return e ? t.then(e) : t;
};
export {
  s as delay
};

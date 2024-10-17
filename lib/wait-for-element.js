const u = (i, s = 5e3, e) => {
  const t = new Promise((n) => {
    let r = 0;
    const l = 100, c = setInterval(() => {
      if (r >= s)
        return n(null);
      r += l;
      const o = document.querySelector(i);
      if (o)
        return clearInterval(c), n(o);
    }, l);
  });
  return e ? t.then(e) : t;
};
export {
  u as waitForElement
};

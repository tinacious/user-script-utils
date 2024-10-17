const u = (s, i = 5e3, e) => {
  const t = new Promise((n) => {
    let r = 0;
    const l = 100, c = setInterval(() => {
      if (r >= i)
        return n(null);
      r += l;
      const o = document.querySelectorAll(s);
      if (o)
        return clearInterval(c), n(o);
    }, l);
  });
  return e ? t.then(e) : t;
};
export {
  u as waitForElements
};

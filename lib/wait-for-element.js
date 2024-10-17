const s = (c, i = 5e3, e) => {
  const t = new Promise((r) => {
    let n = 0;
    const l = 100, o = setInterval(() => {
      if (n >= i)
        return clearInterval(o), r(null);
      n += l;
      const a = document.querySelector(c);
      if (a)
        return clearInterval(o), r(a);
    }, l);
  });
  return e ? t.then(e) : t;
};
export {
  s as waitForElement
};

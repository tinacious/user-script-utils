const i = (a, c = 5e3, e) => {
  const t = new Promise((r) => {
    let n = 0;
    const l = 100, o = setInterval(() => {
      if (n >= c)
        return clearInterval(o), r(null);
      n += l;
      const s = document.querySelectorAll(a);
      if (s)
        return clearInterval(o), r(s);
    }, l);
  });
  return e ? t.then(e) : t;
};
export {
  i as waitForElements
};

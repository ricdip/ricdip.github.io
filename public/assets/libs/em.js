{
  const wa = (e) => {
    return window.atob(e);
  };

  const ra = (e, a) => {
    e.removeAttribute(a);
  };

  const sa = (e, l, r) => {
    e.setAttribute(l, r);
  };

  const gencn = (e, c) => {
    return e.getElementsByClassName(c);
  };

  const c2 = "l-";
  const c4 = "act";
  const c1 = "mai";
  const c3 = "cont";
  const t2 = "bGU=";
  const t1 = "dGl0";
  const h1 = "aHJ";
  const h3 = "==";
  const h2 = "lZg";
  const m2 = "pbHR";
  const m1 = "bWF";
  const m3 = "vOg==";
  const m7 = "9hcm1";
  const m5 = "cmljY";
  const m9 = "LmRpc";
  const m6 = "2FyZG";
  const m11 = "ppb0B";
  const m8 = "hbmRv";
  const m13 = "bC5jb";
  const m12 = "nbWFp";
  const m10 = "HJpbn";
  const m14 = "20=";

  const m = gencn(document, c1+c2+c3+c4);
  Array.from(m).forEach((e) => {
    ra(e, wa(t1+t2));
    sa(e, wa(h1+h2+h3), wa(m1+m2+m3)+wa(m5+m6+m7+m8+m9+m10+m11+m12+m13+m14));
  });
}

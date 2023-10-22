/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    i = Object.getPrototypeOf,
    r = n.slice,
    o = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    s = n.push,
    a = n.indexOf,
    l = {},
    c = l.toString,
    u = l.hasOwnProperty,
    d = u.toString,
    p = d.call(Object),
    f = {},
    h = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    m = function (e) {
      return null != e && e === e.window;
    },
    g = e.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var i,
      r,
      o = (n = n || g).createElement("script");
    if (((o.text = e), t))
      for (i in v)
        (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          o.setAttribute(i, r);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function b(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var w = "3.6.0",
    _ = function (e, t) {
      return new _.fn.init(e, t);
    };
  function x(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return (
      !h(e) &&
      !m(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (_.fn = _.prototype =
    {
      jquery: w,
      constructor: _,
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null == e
          ? r.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = _.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return _.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          _.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          _.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          _.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (_.extend = _.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || h(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (i = e[t]),
                "__proto__" !== t &&
                  s !== i &&
                  (c && i && (_.isPlainObject(i) || (r = Array.isArray(i)))
                    ? ((n = s[t]),
                      (o =
                        r && !Array.isArray(n)
                          ? []
                          : r || _.isPlainObject(n)
                          ? n
                          : {}),
                      (r = !1),
                      (s[t] = _.extend(c, o, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    _.extend({
      expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== c.call(e) ||
          ((t = i(e)) &&
            ("function" !=
              typeof (n = u.call(t, "constructor") && t.constructor) ||
              d.call(n) !== p))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (x(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (x(Object(e))
              ? _.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : a.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
          !t(e[r], r) !== s && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          s = 0,
          a = [];
        if (x(e))
          for (i = e.length; s < i; s++)
            null != (r = t(e[s], s, n)) && a.push(r);
        else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
        return o(a);
      },
      guid: 1,
      support: f,
    }),
    "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]),
    _.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var T = (function (e) {
    var t,
      n,
      i,
      r,
      o,
      s,
      a,
      l,
      c,
      u,
      d,
      p,
      f,
      h,
      m,
      g,
      v,
      y,
      b,
      w = "sizzle" + 1 * new Date(),
      _ = e.document,
      x = 0,
      T = 0,
      C = le(),
      S = le(),
      k = le(),
      E = le(),
      A = function (e, t) {
        return e === t && (d = !0), 0;
      },
      D = {}.hasOwnProperty,
      O = [],
      M = O.pop,
      L = O.push,
      j = O.push,
      $ = O.slice,
      P = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      N =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      H = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        H +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      q =
        "\\[" +
        H +
        "*(" +
        I +
        ")(?:" +
        H +
        "*([*^$|!~]?=)" +
        H +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        H +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        q +
        ")*)|.*)\\)|)",
      R = new RegExp(H + "+", "g"),
      B = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
      z = new RegExp("^" + H + "*," + H + "*"),
      W = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
      Y = new RegExp(H + "|>"),
      U = new RegExp(F),
      X = new RegExp("^" + I + "$"),
      V = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + q),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            H +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            H +
            "*(?:([+-]|)" +
            H +
            "*(\\d+)|))" +
            H +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + N + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            H +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            H +
            "*((?:-\\d)?\\d*)" +
            H +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Q = /HTML$/i,
      K = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        p();
      },
      se = we(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      j.apply((O = $.call(_.childNodes)), _.childNodes),
        O[_.childNodes.length].nodeType;
    } catch (t) {
      j = {
        apply: O.length
          ? function (e, t) {
              L.apply(e, $.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function ae(e, t, i, r) {
      var o,
        a,
        c,
        u,
        d,
        h,
        v,
        y = t && t.ownerDocument,
        _ = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== _ && 9 !== _ && 11 !== _))
      )
        return i;
      if (!r && (p(t), (t = t || f), m)) {
        if (11 !== _ && (d = J.exec(e)))
          if ((o = d[1])) {
            if (9 === _) {
              if (!(c = t.getElementById(o))) return i;
              if (c.id === o) return i.push(c), i;
            } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o)
              return i.push(c), i;
          } else {
            if (d[2]) return j.apply(i, t.getElementsByTagName(e)), i;
            if (
              (o = d[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return j.apply(i, t.getElementsByClassName(o)), i;
          }
        if (
          n.qsa &&
          !E[e + " "] &&
          (!g || !g.test(e)) &&
          (1 !== _ || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((v = e), (y = t), 1 === _ && (Y.test(e) || W.test(e)))) {
            for (
              ((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) ||
                ((u = t.getAttribute("id"))
                  ? (u = u.replace(ie, re))
                  : t.setAttribute("id", (u = w))),
                a = (h = s(e)).length;
              a--;

            )
              h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
            v = h.join(",");
          }
          try {
            return j.apply(i, y.querySelectorAll(v)), i;
          } catch (t) {
            E(e, !0);
          } finally {
            u === w && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(B, "$1"), t, i, r);
    }
    function le() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = r)
        );
      };
    }
    function ce(e) {
      return (e[w] = !0), e;
    }
    function ue(e) {
      var t = f.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function de(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function he(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function me(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function ge(e) {
      return ce(function (t) {
        return (
          (t = +t),
          ce(function (n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--; )
              n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = ae.support = {}),
    (o = ae.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Q.test(t || (n && n.nodeName) || "HTML");
      }),
    (p = ae.setDocument =
      function (e) {
        var t,
          r,
          s = e ? e.ownerDocument || e : _;
        return (
          s != f &&
            9 === s.nodeType &&
            s.documentElement &&
            ((h = (f = s).documentElement),
            (m = !o(f)),
            _ != f &&
              (r = f.defaultView) &&
              r.top !== r &&
              (r.addEventListener
                ? r.addEventListener("unload", oe, !1)
                : r.attachEvent && r.attachEvent("onunload", oe)),
            (n.scope = ue(function (e) {
              return (
                h.appendChild(e).appendChild(f.createElement("div")),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (n.attributes = ue(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ue(function (e) {
              return (
                e.appendChild(f.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = Z.test(f.getElementsByClassName)),
            (n.getById = ue(function (e) {
              return (
                (h.appendChild(e).id = w),
                !f.getElementsByName || !f.getElementsByName(w).length
              );
            })),
            n.getById
              ? ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n,
                      i,
                      r,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && m)
                  return t.getElementsByClassName(e);
              }),
            (v = []),
            (g = []),
            (n.qsa = Z.test(f.querySelectorAll)) &&
              (ue(function (e) {
                var t;
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  w +
                  "'></a><select id='" +
                  w +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    g.push("[*^$]=" + H + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    g.push("\\[" + H + "*(?:value|" + N + ")"),
                  e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="),
                  (t = f.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    g.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || g.push(":checked"),
                  e.querySelectorAll("a#" + w + "+*").length ||
                    g.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  g.push("[\\r\\n\\f]");
              }),
              ue(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    g.push("name" + H + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    g.push(":enabled", ":disabled"),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    g.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (n.matchesSelector = Z.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ue(function (e) {
                (n.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  v.push("!=", F);
              }),
            (g = g.length && new RegExp(g.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (t = Z.test(h.compareDocumentPosition)),
            (b =
              t || Z.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (A = t
              ? function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e == f || (e.ownerDocument == _ && b(_, e))
                        ? -1
                        : t == f || (t.ownerDocument == _ && b(_, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!r || !o)
                    return e == f
                      ? -1
                      : t == f
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (r === o) return pe(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? pe(s[i], a[i])
                    : s[i] == _
                    ? -1
                    : a[i] == _
                    ? 1
                    : 0;
                })),
          f
        );
      }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (
        (p(e),
        n.matchesSelector &&
          m &&
          !E[t + " "] &&
          (!v || !v.test(t)) &&
          (!g || !g.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          E(t, !0);
        }
      return 0 < ae(t, f, null, [e]).length;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) != f && p(e), b(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) != f && p(e);
      var r = i.attrHandle[t.toLowerCase()],
        o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !m
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (ae.escape = function (e) {
      return (e + "").replace(ie, re);
    }),
    (ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        i = [],
        r = 0,
        o = 0;
      if (
        ((d = !n.detectDuplicates),
        (u = !n.sortStable && e.slice(0)),
        e.sort(A),
        d)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
        for (; r--; ) e.splice(i[r], 1);
      }
      return (u = null), e;
    }),
    (r = ae.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += r(t);
        return n;
      }),
    ((i = ae.selectors =
      {
        cacheLength: 50,
        createPseudo: ce,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || ae.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && ae.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    U.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = C[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                C(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var r = ae.attr(i, e);
              return null == r
                ? "!=" === t
                : !t ||
                    ((r += ""),
                    "=" === t
                      ? r === n
                      : "!=" === t
                      ? r !== n
                      : "^=" === t
                      ? n && 0 === r.indexOf(n)
                      : "*=" === t
                      ? n && -1 < r.indexOf(n)
                      : "$=" === t
                      ? n && r.slice(-n.length) === n
                      : "~=" === t
                      ? -1 < (" " + r.replace(R, " ") + " ").indexOf(n)
                      : "|=" === t &&
                        (r === n || r.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    d,
                    p,
                    f,
                    h,
                    m = o !== s ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = a && t.nodeName.toLowerCase(),
                    y = !l && !a,
                    b = !1;
                  if (g) {
                    if (o) {
                      for (; m; ) {
                        for (p = t; (p = p[m]); )
                          if (
                            a
                              ? p.nodeName.toLowerCase() === v
                              : 1 === p.nodeType
                          )
                            return !1;
                        h = m = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                      for (
                        b =
                          (f =
                            (c =
                              (u =
                                (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] ||
                                (d[p.uniqueID] = {}))[e] || [])[0] === x &&
                            c[1]) && c[2],
                          p = f && g.childNodes[f];
                        (p = (++f && p && p[m]) || (b = f = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++b && p === t) {
                          u[e] = [x, f, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = f =
                          (c =
                            (u =
                              (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] ||
                              (d[p.uniqueID] = {}))[e] || [])[0] === x && c[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (p = (++f && p && p[m]) || (b = f = 0) || h.pop()) &&
                        ((a
                          ? p.nodeName.toLowerCase() !== v
                          : 1 !== p.nodeType) ||
                          !++b ||
                          (y &&
                            ((u =
                              (d = p[w] || (p[w] = {}))[p.uniqueID] ||
                              (d[p.uniqueID] = {}))[e] = [x, b]),
                          p !== t));

                      );
                    return (b -= r) === i || (b % i == 0 && 0 <= b / i);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              r =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                ae.error("unsupported pseudo: " + e);
            return r[w]
              ? r(t)
              : 1 < r.length
              ? ((n = [e, e, "", t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ce(function (e, n) {
                      for (var i, o = r(e, t), s = o.length; s--; )
                        e[(i = P(e, o[s]))] = !(n[i] = o[s]);
                    })
                  : function (e) {
                      return r(e, 0, n);
                    })
              : r;
          },
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
              n = [],
              i = a(e.replace(B, "$1"));
            return i[w]
              ? ce(function (e, t, n, r) {
                  for (var o, s = i(e, null, r, []), a = e.length; a--; )
                    (o = s[a]) && (e[a] = !(t[a] = o));
                })
              : function (e, r, o) {
                  return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: ce(function (e) {
            return function (t) {
              return 0 < ae(e, t).length;
            };
          }),
          contains: ce(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return -1 < (t.textContent || r(t)).indexOf(e);
              }
            );
          }),
          lang: ce(function (e) {
            return (
              X.test(e || "") || ae.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = m
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === f.activeElement &&
              (!f.hasFocus || f.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: me(!1),
          disabled: me(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return G.test(e.nodeName);
          },
          input: function (e) {
            return K.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ge(function () {
            return [0];
          }),
          last: ge(function (e, t) {
            return [t - 1];
          }),
          eq: ge(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ge(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ge(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ge(function (e, t, n) {
            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: ge(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function we(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        s = n && "parentNode" === o,
        a = T++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
            return !1;
          }
        : function (t, n, l) {
            var c,
              u,
              d,
              p = [x, a];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((u =
                      (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                      (d[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = u[o]) && c[0] === x && c[1] === a)
                      return (p[2] = c[2]);
                    if (((u[o] = p)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function _e(e) {
      return 1 < e.length
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function xe(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
      return s;
    }
    function Te(e, t, n, i, r, o) {
      return (
        i && !i[w] && (i = Te(i)),
        r && !r[w] && (r = Te(r, o)),
        ce(function (o, s, a, l) {
          var c,
            u,
            d,
            p = [],
            f = [],
            h = s.length,
            m =
              o ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                return n;
              })(t || "*", a.nodeType ? [a] : a, []),
            g = !e || (!o && t) ? m : xe(m, p, e, a, l),
            v = n ? (r || (o ? e : h || i) ? [] : s) : g;
          if ((n && n(g, v, a, l), i))
            for (c = xe(v, f), i(c, [], a, l), u = c.length; u--; )
              (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
          if (o) {
            if (r || e) {
              if (r) {
                for (c = [], u = v.length; u--; )
                  (d = v[u]) && c.push((g[u] = d));
                r(null, (v = []), c, l);
              }
              for (u = v.length; u--; )
                (d = v[u]) &&
                  -1 < (c = r ? P(o, d) : p[u]) &&
                  (o[c] = !(s[c] = d));
            }
          } else (v = xe(v === s ? v.splice(h, v.length) : v)), r ? r(null, s, v, l) : j.apply(s, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          r,
          o = e.length,
          s = i.relative[e[0].type],
          a = s || i.relative[" "],
          l = s ? 1 : 0,
          u = we(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          d = we(
            function (e) {
              return -1 < P(t, e);
            },
            a,
            !0
          ),
          p = [
            function (e, n, i) {
              var r =
                (!s && (i || n !== c)) ||
                ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
              return (t = null), r;
            },
          ];
        l < o;
        l++
      )
        if ((n = i.relative[e[l].type])) p = [we(_e(p), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++);
            return Te(
              1 < l && _e(p),
              1 < l &&
                be(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              n,
              l < r && Ce(e.slice(l, r)),
              r < o && Ce((e = e.slice(r))),
              r < o && be(e)
            );
          }
          p.push(n);
        }
      return _e(p);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (s = ae.tokenize =
        function (e, t) {
          var n,
            r,
            o,
            s,
            a,
            l,
            c,
            u = S[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (a = e, l = [], c = i.preFilter; a; ) {
            for (s in ((n && !(r = z.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
            (n = !1),
            (r = W.exec(a)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            i.filter))
              !(r = V[s].exec(a)) ||
                (c[s] && !(r = c[s](r))) ||
                ((n = r.shift()),
                o.push({ value: n, type: s, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? ae.error(e) : S(e, l).slice(0);
        }),
      (a = ae.compile =
        function (e, t) {
          var n,
            r,
            o,
            a,
            l,
            u,
            d = [],
            h = [],
            g = k[e + " "];
          if (!g) {
            for (t || (t = s(e)), n = t.length; n--; )
              (g = Ce(t[n]))[w] ? d.push(g) : h.push(g);
            (g = k(
              e,
              ((r = h),
              (a = 0 < (o = d).length),
              (l = 0 < r.length),
              (u = function (e, t, n, s, u) {
                var d,
                  h,
                  g,
                  v = 0,
                  y = "0",
                  b = e && [],
                  w = [],
                  _ = c,
                  T = e || (l && i.find.TAG("*", u)),
                  C = (x += null == _ ? 1 : Math.random() || 0.1),
                  S = T.length;
                for (
                  u && (c = t == f || t || u);
                  y !== S && null != (d = T[y]);
                  y++
                ) {
                  if (l && d) {
                    for (
                      h = 0, t || d.ownerDocument == f || (p(d), (n = !m));
                      (g = r[h++]);

                    )
                      if (g(d, t || f, n)) {
                        s.push(d);
                        break;
                      }
                    u && (x = C);
                  }
                  a && ((d = !g && d) && v--, e && b.push(d));
                }
                if (((v += y), a && y !== v)) {
                  for (h = 0; (g = o[h++]); ) g(b, w, t, n);
                  if (e) {
                    if (0 < v) for (; y--; ) b[y] || w[y] || (w[y] = M.call(s));
                    w = xe(w);
                  }
                  j.apply(s, w),
                    u &&
                      !e &&
                      0 < w.length &&
                      1 < v + o.length &&
                      ae.uniqueSort(s);
                }
                return u && ((x = C), (c = _)), b;
              }),
              a ? ce(u) : u)
            )).selector = e;
          }
          return g;
        }),
      (l = ae.select =
        function (e, t, n, r) {
          var o,
            l,
            c,
            u,
            d,
            p = "function" == typeof e && e,
            f = !r && s((e = p.selector || e));
          if (((n = n || []), 1 === f.length)) {
            if (
              2 < (l = f[0] = f[0].slice(0)).length &&
              "ID" === (c = l[0]).type &&
              9 === t.nodeType &&
              m &&
              i.relative[l[1].type]
            ) {
              if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              o = V.needsContext.test(e) ? 0 : l.length;
              o-- && ((c = l[o]), !i.relative[(u = c.type)]);

            )
              if (
                (d = i.find[u]) &&
                (r = d(
                  c.matches[0].replace(te, ne),
                  (ee.test(l[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(o, 1), !(e = r.length && be(l))))
                  return j.apply(n, r), n;
                break;
              }
          }
          return (
            (p || a(e, f))(
              r,
              t,
              !m,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = w.split("").sort(A).join("") === w),
      (n.detectDuplicates = !!d),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        de("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        de("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        de(N, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      ae
    );
  })(e);
  (_.find = T),
    (_.expr = T.selectors),
    (_.expr[":"] = _.expr.pseudos),
    (_.uniqueSort = _.unique = T.uniqueSort),
    (_.text = T.getText),
    (_.isXMLDoc = T.isXML),
    (_.contains = T.contains),
    (_.escapeSelector = T.escape);
  var C = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && _(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = _.expr.match.needsContext;
  function E(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, t, n) {
    return h(t)
      ? _.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? _.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? _.grep(e, function (e) {
          return -1 < a.call(t, e) !== n;
        })
      : _.filter(t, e, n);
  }
  (_.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? _.find.matchesSelector(i, e)
          ? [i]
          : []
        : _.find.matches(
            e,
            _.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    _.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            _(e).filter(function () {
              for (t = 0; t < i; t++) if (_.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, r[t], n);
        return 1 < i ? _.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? _(e) : e || [], !1)
          .length;
      },
    });
  var O,
    M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((_.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || O), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : M.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof _ ? t[0] : t),
          _.merge(
            this,
            _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)
          ),
          A.test(i[1]) && _.isPlainObject(t))
        )
          for (i in t) h(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (r = g.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : h(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(_)
      : _.makeArray(e, this);
  }).prototype = _.fn),
    (O = _(g));
  var L = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function $(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  _.fn.extend({
    has: function (e) {
      var t = _(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (_.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = "string" != typeof e && _(e);
      if (!k.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && _.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? _.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? a.call(_(e), this[0])
          : a.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    _.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return C(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return C(e, "parentNode", n);
        },
        next: function (e) {
          return $(e, "nextSibling");
        },
        prev: function (e) {
          return $(e, "previousSibling");
        },
        nextAll: function (e) {
          return C(e, "nextSibling");
        },
        prevAll: function (e) {
          return C(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return C(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return C(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (E(e, "template") && (e = e.content || e),
              _.merge([], e.childNodes));
        },
      },
      function (e, t) {
        _.fn[e] = function (n, i) {
          var r = _.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = _.filter(i, r)),
            1 < this.length &&
              (j[e] || _.uniqueSort(r), L.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function H(e) {
    throw e;
  }
  function I(e, t, n, i) {
    var r;
    try {
      e && h((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && h((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (_.Callbacks = function (e) {
    var t, n;
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          _.each(t.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : _.extend({}, e);
    var i,
      r,
      o,
      s,
      a = [],
      l = [],
      c = -1,
      u = function () {
        for (s = s || e.once, o = i = !0; l.length; c = -1)
          for (r = l.shift(); ++c < a.length; )
            !1 === a[c].apply(r[0], r[1]) &&
              e.stopOnFalse &&
              ((c = a.length), (r = !1));
        e.memory || (r = !1), (i = !1), s && (a = r ? [] : "");
      },
      d = {
        add: function () {
          return (
            a &&
              (r && !i && ((c = a.length - 1), l.push(r)),
              (function t(n) {
                _.each(n, function (n, i) {
                  h(i)
                    ? (e.unique && d.has(i)) || a.push(i)
                    : i && i.length && "string" !== b(i) && t(i);
                });
              })(arguments),
              r && !i && u()),
            this
          );
        },
        remove: function () {
          return (
            _.each(arguments, function (e, t) {
              for (var n; -1 < (n = _.inArray(t, a, n)); )
                a.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < _.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (s = l = []), (a = r = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (s = l = []), r || i || (a = r = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              i || u()),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return d;
  }),
    _.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              _.Callbacks("memory"),
              _.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              _.Callbacks("once memory"),
              _.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              _.Callbacks("once memory"),
              _.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return _.Deferred(function (t) {
                _.each(n, function (n, i) {
                  var r = h(e[i[4]]) && e[i[4]];
                  o[i[1]](function () {
                    var e = r && r.apply(this, arguments);
                    e && h(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[i[0] + "With"](this, r ? [e] : arguments);
                  });
                }),
                  (e = null);
              }).promise();
            },
            then: function (t, i, r) {
              var o = 0;
              function s(t, n, i, r) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < o)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          h(c)
                            ? r
                              ? c.call(e, s(o, n, N, r), s(o, n, H, r))
                              : (o++,
                                c.call(
                                  e,
                                  s(o, n, N, r),
                                  s(o, n, H, r),
                                  s(o, n, N, n.notifyWith)
                                ))
                            : (i !== N && ((a = void 0), (l = [e])),
                              (r || n.resolveWith)(a, l));
                      }
                    },
                    u = r
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            _.Deferred.exceptionHook &&
                              _.Deferred.exceptionHook(e, u.stackTrace),
                              o <= t + 1 &&
                                (i !== H && ((a = void 0), (l = [e])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? u()
                    : (_.Deferred.getStackHook &&
                        (u.stackTrace = _.Deferred.getStackHook()),
                      e.setTimeout(u));
                };
              }
              return _.Deferred(function (e) {
                n[0][3].add(s(0, e, h(r) ? r : N, e.notifyWith)),
                  n[1][3].add(s(0, e, h(t) ? t : N)),
                  n[2][3].add(s(0, e, h(i) ? i : H));
              }).promise();
            },
            promise: function (e) {
              return null != e ? _.extend(e, r) : r;
            },
          },
          o = {};
        return (
          _.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (r[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = s.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          s = _.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (o[e] = 1 < arguments.length ? r.call(arguments) : n),
                --t || s.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          (I(e, s.done(a(n)).resolve, s.reject, !t),
          "pending" === s.state() || h(o[n] && o[n].then))
        )
          return s.then();
        for (; n--; ) I(o[n], a(n), s.reject);
        return s.promise();
      },
    });
  var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (_.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      q.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (_.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = _.Deferred();
  function R() {
    g.removeEventListener("DOMContentLoaded", R),
      e.removeEventListener("load", R),
      _.ready();
  }
  (_.fn.ready = function (e) {
    return (
      F.then(e).catch(function (e) {
        _.readyException(e);
      }),
      this
    );
  }),
    _.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --_.readyWait : _.isReady) ||
          ((_.isReady = !0) !== e && 0 < --_.readyWait) ||
          F.resolveWith(g, [_]);
      },
    }),
    (_.ready.then = F.then),
    "complete" === g.readyState ||
    ("loading" !== g.readyState && !g.documentElement.doScroll)
      ? e.setTimeout(_.ready)
      : (g.addEventListener("DOMContentLoaded", R),
        e.addEventListener("load", R));
  var B = function (e, t, n, i, r, o, s) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === b(n))
        for (a in ((r = !0), n)) B(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        h(i) || (s = !0),
        c &&
          (s
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(_(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    W = /-([a-z])/g;
  function Y(e, t) {
    return t.toUpperCase();
  }
  function U(e) {
    return e.replace(z, "ms-").replace(W, Y);
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function V() {
    this.expando = _.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            X(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[U(t)] = n;
        else for (i in t) r[U(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][U(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(U)
              : (t = U(t)) in i
              ? [t]
              : t.match(P) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || _.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !_.isEmptyObject(t);
      },
    });
  var Q = new V(),
    K = new V(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function J(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(Z, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (r = n) ||
            ("false" !== r &&
              ("null" === r
                ? null
                : r === +r + ""
                ? +r
                : G.test(r)
                ? JSON.parse(r)
                : r));
        } catch (e) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  _.extend({
    hasData: function (e) {
      return K.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    },
  }),
    _.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = K.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                ((i = U(i.slice(5))), J(o, i, r[i]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              K.set(this, e);
            })
          : B(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return void 0 !== (n = K.get(o, e)) ||
                    void 0 !== (n = J(o, e))
                    ? n
                    : void 0;
                this.each(function () {
                  K.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    _.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = Q.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = Q.access(e, t, _.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = _.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = _._queueHooks(e, t);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(
              e,
              function () {
                _.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: _.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    _.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? _.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          _.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = _.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = Q.get(o[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), r.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = g.documentElement,
    re = function (e) {
      return _.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  ie.getRootNode &&
    (re = function (e) {
      return (
        _.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var se = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && re(e) && "none" === _.css(e, "display"))
    );
  };
  function ae(e, t, n, i) {
    var r,
      o,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return _.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (_.cssNumber[t] ? "" : "px"),
      u =
        e.nodeType &&
        (_.cssNumber[t] || ("px" !== c && +l)) &&
        te.exec(_.css(e, t));
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--; )
        _.style(e, t, u + c),
          (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
          (u /= o);
      (u *= 2), _.style(e, t, u + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = r))),
      r
    );
  }
  var le = {};
  function ce(e, t) {
    for (var n, i, r, o, s, a, l, c = [], u = 0, d = e.length; u < d; u++)
      (i = e[u]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((c[u] = Q.get(i, "display") || null),
              c[u] || (i.style.display = "")),
            "" === i.style.display &&
              se(i) &&
              (c[u] =
                ((l = s = o = void 0),
                (s = (r = i).ownerDocument),
                (a = r.nodeName),
                (l = le[a]) ||
                  ((o = s.body.appendChild(s.createElement(a))),
                  (l = _.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === l && (l = "block"),
                  (le[a] = l)))))
          : "none" !== n && ((c[u] = "none"), Q.set(i, "display", n)));
    for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
    return e;
  }
  _.fn.extend({
    show: function () {
      return ce(this, !0);
    },
    hide: function () {
      return ce(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? _(this).show() : _(this).hide();
          });
    },
  });
  var ue,
    de,
    pe = /^(?:checkbox|radio)$/i,
    fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ue = g.createDocumentFragment().appendChild(g.createElement("div"))),
    (de = g.createElement("input")).setAttribute("type", "radio"),
    de.setAttribute("checked", "checked"),
    de.setAttribute("name", "t"),
    ue.appendChild(de),
    (f.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ue.innerHTML = "<textarea>x</textarea>"),
    (f.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
    (ue.innerHTML = "<option></option>"),
    (f.option = !!ue.lastChild);
  var me = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ge(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && E(e, t)) ? _.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
    (me.th = me.td),
    f.option ||
      (me.optgroup = me.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function be(e, t, n, i, r) {
    for (
      var o,
        s,
        a,
        l,
        c,
        u,
        d = t.createDocumentFragment(),
        p = [],
        f = 0,
        h = e.length;
      f < h;
      f++
    )
      if ((o = e[f]) || 0 === o)
        if ("object" === b(o)) _.merge(p, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          for (
            s = s || d.appendChild(t.createElement("div")),
              a = (fe.exec(o) || ["", ""])[1].toLowerCase(),
              l = me[a] || me._default,
              s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2],
              u = l[0];
            u--;

          )
            s = s.lastChild;
          _.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    for (d.textContent = "", f = 0; (o = p[f++]); )
      if (i && -1 < _.inArray(o, i)) r && r.push(o);
      else if (
        ((c = re(o)), (s = ge(d.appendChild(o), "script")), c && ve(s), n)
      )
        for (u = 0; (o = s[u++]); ) he.test(o.type || "") && n.push(o);
    return d;
  }
  var we = /^([^.]*)(?:\.(.+)|)/;
  function _e() {
    return !0;
  }
  function xe() {
    return !1;
  }
  function Te(e, t) {
    return (
      (e ===
        (function () {
          try {
            return g.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ce(e, t, n, i, r, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Ce(e, a, n, i, t[a], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = xe;
    else if (!r) return e;
    return (
      1 === o &&
        ((s = r),
        ((r = function (e) {
          return _().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = _.guid++))),
      e.each(function () {
        _.event.add(this, t, r, i, n);
      })
    );
  }
  function Se(e, t, n) {
    n
      ? (Q.set(e, t, !1),
        _.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              o,
              s = Q.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (s.length)
                (_.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((s = r.call(arguments)),
                Q.set(this, t, s),
                (i = n(this, t)),
                this[t](),
                s !== (o = Q.get(this, t)) || i ? Q.set(this, t, !1) : (o = {}),
                s !== o)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                );
            } else
              s.length &&
                (Q.set(this, t, {
                  value: _.event.trigger(
                    _.extend(s[0], _.Event.prototype),
                    s.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Q.get(e, t) && _.event.add(e, t, _e);
  }
  (_.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        m,
        g = Q.get(e);
      if (X(e))
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && _.find.matchesSelector(ie, r),
            n.guid || (n.guid = _.guid++),
            (l = g.events) || (l = g.events = Object.create(null)),
            (s = g.handle) ||
              (s = g.handle =
                function (t) {
                  return void 0 !== _ && _.event.triggered !== t.type
                    ? _.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(P) || [""]).length;
          c--;

        )
          (f = m = (a = we.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f &&
              ((d = _.event.special[f] || {}),
              (f = (r ? d.delegateType : d.bindType) || f),
              (d = _.event.special[f] || {}),
              (u = _.extend(
                {
                  type: f,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && _.expr.match.needsContext.test(r),
                  namespace: h.join("."),
                },
                o
              )),
              (p = l[f]) ||
                (((p = l[f] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, h, s)) ||
                  (e.addEventListener && e.addEventListener(f, s))),
              d.add &&
                (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              (_.event.global[f] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        m,
        g = Q.hasData(e) && Q.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(P) || [""]).length; c--; )
          if (
            ((f = m = (a = we.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f)
          ) {
            for (
              d = _.event.special[f] || {},
                p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = p.length;
              o--;

            )
              (u = p[o]),
                (!r && m !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (p.splice(o, 1),
                  u.selector && p.delegateCount--,
                  d.remove && d.remove.call(e, u));
            s &&
              !p.length &&
              ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                _.removeEvent(e, f, g.handle),
              delete l[f]);
          } else for (f in l) _.event.remove(e, f + t[c], n, i, !0);
        _.isEmptyObject(l) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a = new Array(arguments.length),
        l = _.event.fix(e),
        c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
        u = _.event.special[l.type] || {};
      for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, l))
      ) {
        for (
          s = _.event.handlers.call(this, l, c), t = 0;
          (r = s[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== o.namespace &&
              !l.rnamespace.test(o.namespace)) ||
              ((l.handleObj = o),
              (l.data = o.data),
              void 0 !==
                (i = (
                  (_.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, a)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(r = (i = t[n]).selector + " ")] &&
                (s[r] = i.needsContext
                  ? -1 < _(r, this).index(c)
                  : _.find(r, this, null, [c]).length),
                s[r] && o.push(i);
            o.length && a.push({ elem: c, handlers: o });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(_.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: h(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[_.expando] ? e : new _.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && E(t, "input") && Se(t, "click", _e),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && E(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              E(t, "input") &&
              Q.get(t, "click")) ||
            E(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (_.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (_.Event = function (e, t) {
      if (!(this instanceof _.Event)) return new _.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? _e
              : xe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && _.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[_.expando] = !0);
    }),
    (_.Event.prototype = {
      constructor: _.Event,
      isDefaultPrevented: xe,
      isPropagationStopped: xe,
      isImmediatePropagationStopped: xe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = _e),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = _e),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = _e),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    _.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      _.event.addProp
    ),
    _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      _.event.special[e] = {
        setup: function () {
          return Se(this, e, Te), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    _.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        _.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              r = e.handleObj;
            return (
              (i && (i === this || _.contains(this, i))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    _.fn.extend({
      on: function (e, t, n, i) {
        return Ce(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Ce(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            _(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = xe),
          this.each(function () {
            _.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function De(e, t) {
    return (
      (E(e, "table") &&
        E(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        _(e).children("tbody")[0]) ||
      e
    );
  }
  function Oe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Me(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, i, r, o, s, a;
    if (1 === t.nodeType) {
      if (Q.hasData(e) && (a = Q.get(e).events))
        for (r in (Q.remove(t, "handle events"), a))
          for (n = 0, i = a[r].length; n < i; n++) _.event.add(t, r, a[r][n]);
      K.hasData(e) && ((o = K.access(e)), (s = _.extend({}, o)), K.set(t, s));
    }
  }
  function je(e, t, n, i) {
    t = o(t);
    var r,
      s,
      a,
      l,
      c,
      u,
      d = 0,
      p = e.length,
      m = p - 1,
      g = t[0],
      v = h(g);
    if (v || (1 < p && "string" == typeof g && !f.checkClone && Ee.test(g)))
      return e.each(function (r) {
        var o = e.eq(r);
        v && (t[0] = g.call(this, r, o.html())), je(o, t, n, i);
      });
    if (
      p &&
      ((s = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === r.childNodes.length && (r = s),
      s || i)
    ) {
      for (l = (a = _.map(ge(r, "script"), Oe)).length; d < p; d++)
        (c = r),
          d !== m &&
            ((c = _.clone(c, !0, !0)), l && _.merge(a, ge(c, "script"))),
          n.call(e[d], c, d);
      if (l)
        for (u = a[a.length - 1].ownerDocument, _.map(a, Me), d = 0; d < l; d++)
          (c = a[d]),
            he.test(c.type || "") &&
              !Q.access(c, "globalEval") &&
              _.contains(u, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? _._evalUrl &&
                  !c.noModule &&
                  _._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    u
                  )
                : y(c.textContent.replace(Ae, ""), c, u));
    }
    return e;
  }
  function $e(e, t, n) {
    for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || _.cleanData(ge(i)),
        i.parentNode &&
          (n && re(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  _.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        s,
        a,
        l,
        c,
        u = e.cloneNode(!0),
        d = re(e);
      if (
        !(
          f.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          _.isXMLDoc(e)
        )
      )
        for (s = ge(u), i = 0, r = (o = ge(e)).length; i < r; i++)
          (a = o[i]),
            "input" === (c = (l = s[i]).nodeName.toLowerCase()) &&
            pe.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (o = o || ge(e), s = s || ge(u), i = 0, r = o.length; i < r; i++)
            Le(o[i], s[i]);
        else Le(e, u);
      return (
        0 < (s = ge(u, "script")).length && ve(s, !d && ge(e, "script")), u
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (X(n)) {
          if ((t = n[Q.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
            n[Q.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    },
  }),
    _.fn.extend({
      detach: function (e) {
        return $e(this, e, !0);
      },
      remove: function (e) {
        return $e(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? _.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return je(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            De(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return je(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = De(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return je(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return je(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (_.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return _.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !me[(fe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = _.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (_.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return je(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            _.inArray(this, e) < 0 &&
              (_.cleanData(ge(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    _.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        _.fn[e] = function (e) {
          for (var n, i = [], r = _(e), o = r.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              _(r[a])[t](n),
              s.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ne = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    He = function (e, t, n) {
      var i,
        r,
        o = {};
      for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
      return i;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function qe(e, t, n) {
    var i,
      r,
      o,
      s,
      a = e.style;
    return (
      (n = n || Ne(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          re(e) ||
          (s = _.style(e, t)),
        !f.pixelBoxStyles() &&
          Pe.test(s) &&
          Ie.test(t) &&
          ((i = a.width),
          (r = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = r),
          (a.maxWidth = o))),
      void 0 !== s ? s + "" : s
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (u) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        (i = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (u.style.right = "60%"),
          (s = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (u.style.position = "absolute"),
          (o = 12 === n(u.offsetWidth / 3)),
          ie.removeChild(c),
          (u = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      r,
      o,
      s,
      a,
      l,
      c = g.createElement("div"),
      u = g.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (f.clearCloneStyle = "content-box" === u.style.backgroundClip),
      _.extend(f, {
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, i, r;
          return (
            null == a &&
              ((t = g.createElement("table")),
              (n = g.createElement("tr")),
              (i = g.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "border:1px solid"),
              (n.style.height = "1px"),
              (i.style.height = "9px"),
              (i.style.display = "block"),
              ie.appendChild(t).appendChild(n).appendChild(i),
              (r = e.getComputedStyle(n)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                n.offsetHeight),
              ie.removeChild(t)),
            a
          );
        },
      }));
  })();
  var Re = ["Webkit", "Moz", "ms"],
    Be = g.createElement("div").style,
    ze = {};
  function We(e) {
    return (
      _.cssProps[e] ||
      ze[e] ||
      (e in Be
        ? e
        : (ze[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Re.length;
                n--;

              )
                if ((e = Re[n] + t) in Be) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Ue = /^--/,
    Xe = { position: "absolute", visibility: "hidden", display: "block" },
    Ve = { letterSpacing: "0", fontWeight: "400" };
  function Qe(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function Ke(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += _.css(e, n + ne[s], !0, r)),
        i
          ? ("content" === n && (l -= _.css(e, "padding" + ne[s], !0, r)),
            "margin" !== n &&
              (l -= _.css(e, "border" + ne[s] + "Width", !0, r)))
          : ((l += _.css(e, "padding" + ne[s], !0, r)),
            "padding" !== n
              ? (l += _.css(e, "border" + ne[s] + "Width", !0, r))
              : (a += _.css(e, "border" + ne[s] + "Width", !0, r)));
    return (
      !i &&
        0 <= o &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function Ge(e, t, n) {
    var i = Ne(e),
      r =
        (!f.boxSizingReliable() || n) &&
        "border-box" === _.css(e, "boxSizing", !1, i),
      o = r,
      s = qe(e, t, i),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!f.boxSizingReliable() && r) ||
        (!f.reliableTrDimensions() && E(e, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === _.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((r = "border-box" === _.css(e, "boxSizing", !1, i)),
        (o = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) +
        Ke(e, t, n || (r ? "border" : "content"), o, i, s) +
        "px"
    );
  }
  function Ze(e, t, n, i, r) {
    return new Ze.prototype.init(e, t, n, i, r);
  }
  _.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = qe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          s,
          a = U(t),
          l = Ue.test(t),
          c = e.style;
        if (
          (l || (t = We(a)), (s = _.cssHooks[t] || _.cssHooks[a]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
        "string" == (o = typeof n) &&
          (r = te.exec(n)) &&
          r[1] &&
          ((n = ae(e, t, r)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              l ||
              (n += (r && r[3]) || (_.cssNumber[a] ? "" : "px")),
            f.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        s,
        a = U(t);
      return (
        Ue.test(t) || (t = We(a)),
        (s = _.cssHooks[t] || _.cssHooks[a]) &&
          "get" in s &&
          (r = s.get(e, !0, n)),
        void 0 === r && (r = qe(e, t, i)),
        "normal" === r && t in Ve && (r = Ve[t]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    _.each(["height", "width"], function (e, t) {
      _.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Ye.test(_.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ge(e, t, i)
              : He(e, Xe, function () {
                  return Ge(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            o = Ne(e),
            s = !f.scrollboxSize() && "absolute" === o.position,
            a = (s || i) && "border-box" === _.css(e, "boxSizing", !1, o),
            l = i ? Ke(e, t, i, a, o) : 0;
          return (
            a &&
              s &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ke(e, t, "border", !1, o) -
                  0.5
              )),
            l &&
              (r = te.exec(n)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[t] = n), (n = _.css(e, t))),
            Qe(0, n, l)
          );
        },
      };
    }),
    (_.cssHooks.marginLeft = Fe(f.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(qe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              He(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    _.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (_.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        "margin" !== e && (_.cssHooks[e + t].set = Qe);
    }),
    _.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = Ne(e), r = t.length; s < r; s++)
                o[t[s]] = _.css(e, t[s], !1, i);
              return o;
            }
            return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((_.Tween = Ze).prototype = {
      constructor: Ze,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || _.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (_.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ze.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ze.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ze.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                _.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ze.prototype),
    ((Ze.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = _.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          _.fx.step[e.prop]
            ? _.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!_.cssHooks[e.prop] && null == e.elem.style[We(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : _.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ze.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (_.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (_.fx = Ze.prototype.init),
    (_.fx.step = {});
  var Je,
    et,
    tt,
    nt,
    it = /^(?:toggle|show|hide)$/,
    rt = /queueHooks$/;
  function ot() {
    et &&
      (!1 === g.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(ot)
        : e.setTimeout(ot, _.fx.interval),
      _.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        Je = void 0;
      }),
      (Je = Date.now())
    );
  }
  function at(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = ne[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function lt(e, t, n) {
    for (
      var i,
        r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
        o = 0,
        s = r.length;
      o < s;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function ct(e, t, n) {
    var i,
      r,
      o = 0,
      s = ct.prefilters.length,
      a = _.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = Je || st(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            o = 0,
            s = c.tweens.length;
          o < s;
          o++
        )
          c.tweens[o].run(i);
        return (
          a.notifyWith(e, [c, i, n]),
          i < 1 && s
            ? n
            : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: _.extend({}, t),
        opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Je || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = _.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      u = c.props;
    for (
      (function (e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (
            ((r = t[(i = U(n))]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (s = _.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[i], o))
              (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(u, c.opts.specialEasing);
      o < s;
      o++
    )
      if ((i = ct.prefilters[o].call(c, e, u, c.opts)))
        return (
          h(i.stop) &&
            (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      _.map(u, lt, c),
      h(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      _.fx.timer(_.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (_.Animation = _.extend(ct, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ae(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      h(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, i = 0, r = e.length; i < r; i++)
        (n = e[i]),
          (ct.tweeners[n] = ct.tweeners[n] || []),
          ct.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          d = "width" in t || "height" in t,
          p = this,
          f = {},
          h = e.style,
          m = e.nodeType && se(e),
          g = Q.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (s = _._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          p.always(function () {
            p.always(function () {
              s.unqueued--, _.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (((r = t[i]), it.test(r))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (m ? "hide" : "show"))
            ) {
              if ("show" !== r || !g || void 0 === g[i]) continue;
              m = !0;
            }
            f[i] = (g && g[i]) || _.style(e, i);
          }
        if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f))
          for (i in (d &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (c = g && g.display) && (c = Q.get(e, "display")),
            "none" === (u = _.css(e, "display")) &&
              (c
                ? (u = c)
                : (ce([e], !0),
                  (c = e.style.display || c),
                  (u = _.css(e, "display")),
                  ce([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === _.css(e, "float") &&
              (l ||
                (p.done(function () {
                  h.display = c;
                }),
                null == c && ((u = h.display), (c = "none" === u ? "" : u))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (g
                ? "hidden" in g && (m = g.hidden)
                : (g = Q.access(e, "fxshow", { display: c })),
              o && (g.hidden = !m),
              m && ce([e], !0),
              p.done(function () {
                for (i in (m || ce([e]), Q.remove(e, "fxshow"), f))
                  _.style(e, i, f[i]);
              })),
              (l = lt(m ? g[i] : 0, i, p)),
              i in g ||
                ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
    },
  })),
    (_.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? _.extend({}, e)
          : {
              complete: n || (!n && t) || (h(e) && e),
              duration: e,
              easing: (n && t) || (t && !h(t) && t),
            };
      return (
        _.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in _.fx.speeds
              ? (i.duration = _.fx.speeds[i.duration])
              : (i.duration = _.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          h(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue);
        }),
        i
      );
    }),
    _.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = _.isEmptyObject(e),
          o = _.speed(t, n, i),
          s = function () {
            var t = ct(this, _.extend({}, e), o);
            (r || Q.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = _.timers,
              s = Q.get(this);
            if (r) s[r] && s[r].stop && i(s[r]);
            else for (r in s) s[r] && s[r].stop && rt.test(r) && i(s[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != e && o[r].queue !== e) ||
                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || _.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Q.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = _.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                _.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    _.each(["toggle", "show", "hide"], function (e, t) {
      var n = _.fn[t];
      _.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(at(t, !0), e, i, r);
      };
    }),
    _.each(
      {
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        _.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (_.timers = []),
    (_.fx.tick = function () {
      var e,
        t = 0,
        n = _.timers;
      for (Je = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || _.fx.stop(), (Je = void 0);
    }),
    (_.fx.timer = function (e) {
      _.timers.push(e), _.fx.start();
    }),
    (_.fx.interval = 13),
    (_.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (_.fx.stop = function () {
      et = null;
    }),
    (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (_.fn.delay = function (t, n) {
      return (
        (t = (_.fx && _.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (tt = g.createElement("input")),
    (nt = g.createElement("select").appendChild(g.createElement("option"))),
    (tt.type = "checkbox"),
    (f.checkOn = "" !== tt.value),
    (f.optSelected = nt.selected),
    ((tt = g.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (f.radioValue = "t" === tt.value);
  var ut,
    dt = _.expr.attrHandle;
  _.fn.extend({
    attr: function (e, t) {
      return B(this, _.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        _.removeAttr(this, e);
      });
    },
  }),
    _.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? _.prop(e, t, n)
            : ((1 === o && _.isXMLDoc(e)) ||
                (r =
                  _.attrHooks[t.toLowerCase()] ||
                  (_.expr.match.bool.test(t) ? ut : void 0)),
              void 0 !== n
                ? null === n
                  ? void _.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = _.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!f.radioValue && "radio" === t && E(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(P);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (ut = {
      set: function (e, t, n) {
        return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = dt[t] || _.find.attr;
      dt[t] = function (e, t, i) {
        var r,
          o,
          s = t.toLowerCase();
        return (
          i ||
            ((o = dt[s]),
            (dt[s] = r),
            (r = null != n(e, t, i) ? s : null),
            (dt[s] = o)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function gt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  _.fn.extend({
    prop: function (e, t) {
      return B(this, _.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[_.propFix[e] || e];
      });
    },
  }),
    _.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && _.isXMLDoc(e)) ||
              ((t = _.propFix[t] || t), (r = _.propHooks[t])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = _.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (ft.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    f.optSelected ||
      (_.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    _.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        _.propFix[this.toLowerCase()] = this;
      }
    ),
    _.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (h(e))
          return this.each(function (t) {
            _(this).addClass(e.call(this, t, mt(this)));
          });
        if ((t = gt(e)).length)
          for (; (n = this[l++]); )
            if (((r = mt(n)), (i = 1 === n.nodeType && " " + ht(r) + " "))) {
              for (s = 0; (o = t[s++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (a = ht(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (h(e))
          return this.each(function (t) {
            _(this).removeClass(e.call(this, t, mt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = gt(e)).length)
          for (; (n = this[l++]); )
            if (((r = mt(n)), (i = 1 === n.nodeType && " " + ht(r) + " "))) {
              for (s = 0; (o = t[s++]); )
                for (; -1 < i.indexOf(" " + o + " "); )
                  i = i.replace(" " + o + " ", " ");
              r !== (a = ht(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : h(e)
          ? this.each(function (n) {
              _(this).toggleClass(e.call(this, n, mt(this), t), t);
            })
          : this.each(function () {
              var t, r, o, s;
              if (i)
                for (r = 0, o = _(this), s = gt(e); (t = s[r++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = mt(this)) && Q.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : Q.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (" " + ht(mt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var vt = /\r/g;
  _.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = h(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, _(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : Array.isArray(r) &&
                  (r = _.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                _.valHooks[this.type] ||
                _.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(r, "value"))
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(vt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    _.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = _.find.attr(e, "value");
            return null != t ? t : ht(_.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;
            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))
              ) {
                if (((t = _(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = _.makeArray(t), s = r.length;
              s--;

            )
              ((i = r[s]).selected =
                -1 < _.inArray(_.valHooks.option.get(i), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    _.each(["radio", "checkbox"], function () {
      (_.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < _.inArray(_(e).val(), t));
        },
      }),
        f.checkOn ||
          (_.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (f.focusin = "onfocusin" in e);
  var yt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (e) {
      e.stopPropagation();
    };
  _.extend(_.event, {
    trigger: function (t, n, i, r) {
      var o,
        s,
        a,
        l,
        c,
        d,
        p,
        f,
        v = [i || g],
        y = u.call(t, "type") ? t.type : t,
        b = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = f = a = i = i || g),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !yt.test(y + _.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = (b = y.split(".")).shift()), b.sort()),
          (c = y.indexOf(":") < 0 && "on" + y),
          ((t = t[_.expando]
            ? t
            : new _.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : _.makeArray(n, [t])),
          (p = _.event.special[y] || {}),
          r || !p.trigger || !1 !== p.trigger.apply(i, n)))
      ) {
        if (!r && !p.noBubble && !m(i)) {
          for (
            l = p.delegateType || y, yt.test(l + y) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            v.push(s), (a = s);
          a === (i.ownerDocument || g) &&
            v.push(a.defaultView || a.parentWindow || e);
        }
        for (o = 0; (s = v[o++]) && !t.isPropagationStopped(); )
          (f = s),
            (t.type = 1 < o ? l : p.bindType || y),
            (d =
              (Q.get(s, "events") || Object.create(null))[t.type] &&
              Q.get(s, "handle")) && d.apply(s, n),
            (d = c && s[c]) &&
              d.apply &&
              X(s) &&
              ((t.result = d.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          r ||
            t.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(v.pop(), n)) ||
            !X(i) ||
            (c &&
              h(i[y]) &&
              !m(i) &&
              ((a = i[c]) && (i[c] = null),
              (_.event.triggered = y),
              t.isPropagationStopped() && f.addEventListener(y, bt),
              i[y](),
              t.isPropagationStopped() && f.removeEventListener(y, bt),
              (_.event.triggered = void 0),
              a && (i[c] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });
      _.event.trigger(i, null, t);
    },
  }),
    _.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          _.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return _.event.trigger(e, t, n, !0);
      },
    }),
    f.focusin ||
      _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          _.event.simulate(t, e.target, _.event.fix(e));
        };
        _.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              r = Q.access(i, t);
            r || i.addEventListener(e, n, !0), Q.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              r = Q.access(i, t) - 1;
            r
              ? Q.access(i, t, r)
              : (i.removeEventListener(e, n, !0), Q.remove(i, t));
          },
        };
      });
  var wt = e.location,
    _t = { guid: Date.now() },
    xt = /\?/;
  _.parseXML = function (t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {}
    return (
      (i = n && n.getElementsByTagName("parsererror")[0]),
      (n && !i) ||
        _.error(
          "Invalid XML: " +
            (i
              ? _.map(i.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : t)
        ),
      n
    );
  };
  var Tt = /\[\]$/,
    Ct = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function Et(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      _.each(t, function (t, r) {
        n || Tt.test(e)
          ? i(e, r)
          : Et(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== b(t)) i(e, t);
    else for (r in t) Et(e + "[" + r + "]", t[r], n, i);
  }
  (_.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = h(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
      _.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) Et(n, e[n], t, r);
    return i.join("&");
  }),
    _.fn.extend({
      serialize: function () {
        return _.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = _.prop(this, "elements");
          return e ? _.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !_(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = _(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? _.map(n, function (e) {
                  return { name: t.name, value: e.replace(Ct, "\r\n") };
                })
              : { name: t.name, value: n.replace(Ct, "\r\n") };
          })
          .get();
      },
    });
  var At = /%20/g,
    Dt = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    jt = /^\/\//,
    $t = {},
    Pt = {},
    Nt = "*/".concat("*"),
    Ht = g.createElement("a");
  function It(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        o = t.toLowerCase().match(P) || [];
      if (h(n))
        for (; (i = o[r++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function qt(e, t, n, i) {
    var r = {},
      o = e === Pt;
    function s(a) {
      var l;
      return (
        (r[a] = !0),
        _.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || o || r[c]
            ? o
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), s(c), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!r["*"] && s("*"));
  }
  function Ft(e, t) {
    var n,
      i,
      r = _.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && _.extend(!0, e, i), e;
  }
  (Ht.href = wt.href),
    _.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: wt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            wt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Nt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": _.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, _.ajaxSettings), t) : Ft(_.ajaxSettings, e);
      },
      ajaxPrefilter: It($t),
      ajaxTransport: It(Pt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          f = _.ajaxSetup({}, n),
          h = f.context || f,
          m = f.context && (h.nodeType || h.jquery) ? _(h) : _.event,
          v = _.Deferred(),
          y = _.Callbacks("once memory"),
          b = f.statusCode || {},
          w = {},
          x = {},
          T = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = Mt.exec(o)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? o : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (f.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) C.always(e[C.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return i && i.abort(t), S(0, t), this;
            },
          };
        if (
          (v.promise(C),
          (f.url = ((t || f.url || wt.href) + "").replace(
            jt,
            wt.protocol + "//"
          )),
          (f.type = n.method || n.type || f.method || f.type),
          (f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [""]),
          null == f.crossDomain)
        ) {
          l = g.createElement("a");
          try {
            (l.href = f.url),
              (l.href = l.href),
              (f.crossDomain =
                Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host);
          } catch (t) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = _.param(f.data, f.traditional)),
          qt($t, f, n, C),
          c)
        )
          return C;
        for (d in ((u = _.event && f.global) &&
          0 == _.active++ &&
          _.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !Lt.test(f.type)),
        (r = f.url.replace(Dt, "")),
        f.hasContent
          ? f.data &&
            f.processData &&
            0 ===
              (f.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (f.data = f.data.replace(At, "+"))
          : ((p = f.url.slice(r.length)),
            f.data &&
              (f.processData || "string" == typeof f.data) &&
              ((r += (xt.test(r) ? "&" : "?") + f.data), delete f.data),
            !1 === f.cache &&
              ((r = r.replace(Ot, "$1")),
              (p = (xt.test(r) ? "&" : "?") + "_=" + _t.guid++ + p)),
            (f.url = r + p)),
        f.ifModified &&
          (_.lastModified[r] &&
            C.setRequestHeader("If-Modified-Since", _.lastModified[r]),
          _.etag[r] && C.setRequestHeader("If-None-Match", _.etag[r])),
        ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) &&
          C.setRequestHeader("Content-Type", f.contentType),
        C.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + Nt + "; q=0.01" : "")
            : f.accepts["*"]
        ),
        f.headers))
          C.setRequestHeader(d, f.headers[d]);
        if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || c))
          return C.abort();
        if (
          ((T = "abort"),
          y.add(f.complete),
          C.done(f.success),
          C.fail(f.error),
          (i = qt(Pt, f, n, C)))
        ) {
          if (((C.readyState = 1), u && m.trigger("ajaxSend", [C, f]), c))
            return C;
          f.async &&
            0 < f.timeout &&
            (a = e.setTimeout(function () {
              C.abort("timeout");
            }, f.timeout));
          try {
            (c = !1), i.send(w, S);
          } catch (t) {
            if (c) throw t;
            S(-1, t);
          }
        } else S(-1, "No Transport");
        function S(t, n, s, l) {
          var d,
            p,
            g,
            w,
            x,
            T = n;
          c ||
            ((c = !0),
            a && e.clearTimeout(a),
            (i = void 0),
            (o = l || ""),
            (C.readyState = 0 < t ? 4 : 0),
            (d = (200 <= t && t < 300) || 304 === t),
            s &&
              (w = (function (e, t, n) {
                for (
                  var i, r, o, s, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                      o = r;
                      break;
                    }
                    s || (s = r);
                  }
                  o = o || s;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(f, C, s)),
            !d &&
              -1 < _.inArray("script", f.dataTypes) &&
              _.inArray("json", f.dataTypes) < 0 &&
              (f.converters["text script"] = function () {}),
            (w = (function (e, t, n, i) {
              var r,
                o,
                s,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              for (o = u.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = u.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(s = c[l + " " + o] || c["* " + o]))
                      for (r in c)
                        if (
                          (a = r.split(" "))[1] === o &&
                          (s = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = c[r])
                            : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(f, w, C, d)),
            d
              ? (f.ifModified &&
                  ((x = C.getResponseHeader("Last-Modified")) &&
                    (_.lastModified[r] = x),
                  (x = C.getResponseHeader("etag")) && (_.etag[r] = x)),
                204 === t || "HEAD" === f.type
                  ? (T = "nocontent")
                  : 304 === t
                  ? (T = "notmodified")
                  : ((T = w.state), (p = w.data), (d = !(g = w.error))))
              : ((g = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (n || T) + ""),
            d ? v.resolveWith(h, [p, T, C]) : v.rejectWith(h, [C, T, g]),
            C.statusCode(b),
            (b = void 0),
            u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [C, f, d ? p : g]),
            y.fireWith(h, [C, T]),
            u &&
              (m.trigger("ajaxComplete", [C, f]),
              --_.active || _.event.trigger("ajaxStop")));
        }
        return C;
      },
      getJSON: function (e, t, n) {
        return _.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return _.get(e, void 0, t, "script");
      },
    }),
    _.each(["get", "post"], function (e, t) {
      _[t] = function (e, n, i, r) {
        return (
          h(n) && ((r = r || i), (i = n), (n = void 0)),
          _.ajax(
            _.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              _.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    _.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (_._evalUrl = function (e, t, n) {
      return _.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          _.globalEval(e, t, n);
        },
      });
    }),
    _.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (h(e) && (e = e.call(this[0])),
            (t = _(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return h(e)
          ? this.each(function (t) {
              _(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = _(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = h(e);
        return this.each(function (n) {
          _(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              _(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (_.expr.pseudos.hidden = function (e) {
      return !_.expr.pseudos.visible(e);
    }),
    (_.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (_.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Rt = { 0: 200, 1223: 204 },
    Bt = _.ajaxSettings.xhr();
  (f.cors = !!Bt && "withCredentials" in Bt),
    (f.ajax = Bt = !!Bt),
    _.ajaxTransport(function (t) {
      var n, i;
      if (f.cors || (Bt && !t.crossDomain))
        return {
          send: function (r, o) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
            t.crossDomain ||
              r["X-Requested-With"] ||
              (r["X-Requested-With"] = "XMLHttpRequest"),
            r))
              a.setRequestHeader(s, r[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? o(0, "error")
                      : o(a.status, a.statusText)
                    : o(
                        Rt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (r) {
              if (n) throw r;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    _.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    _.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return _.globalEval(e), e;
        },
      },
    }),
    _.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    _.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, r) {
            (t = _("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              g.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var zt,
    Wt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  _.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Wt.pop() || _.expando + "_" + _t.guid++;
      return (this[e] = !0), e;
    },
  }),
    _.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        o,
        s,
        a =
          !1 !== t.jsonp &&
          (Yt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Yt.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Yt, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return s || _.error(r + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[r]),
          (e[r] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === o ? _(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Wt.push(r)),
              s && h(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script"
        );
    }),
    (f.createHTMLDocument =
      (((zt = g.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === zt.childNodes.length)),
    (_.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (f.createHTMLDocument
              ? (((i = (t =
                  g.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = g.location.href),
                t.head.appendChild(i))
              : (t = g)),
          (o = !n && []),
          (r = A.exec(e))
            ? [t.createElement(r[1])]
            : ((r = be([e], t, o)),
              o && o.length && _(o).remove(),
              _.merge([], r.childNodes)));
      var i, r, o;
    }),
    (_.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((i = ht(e.slice(a))), (e = e.slice(0, a))),
        h(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        0 < s.length &&
          _.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                s.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (_.expr.pseudos.animated = function (e) {
      return _.grep(_.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (_.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c = _.css(e, "position"),
          u = _(e),
          d = {};
        "static" === c && (e.style.position = "relative"),
          (a = u.offset()),
          (o = _.css(e, "top")),
          (l = _.css(e, "left")),
          ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto")
            ? ((s = (i = u.position()).top), (r = i.left))
            : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          h(t) && (t = t.call(e, n, _.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + s),
          null != t.left && (d.left = t.left - a.left + r),
          "using" in t ? t.using.call(e, d) : u.css(d);
      },
    }),
    _.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                _.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === _.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0)),
              (r.left += _.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - r.top - _.css(i, "marginTop", !0),
            left: t.left - r.left - _.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === _.css(e, "position");

          )
            e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    _.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function (i) {
          return B(
            this,
            function (e, i, r) {
              var o;
              if (
                (m(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
              )
                return o ? o[t] : e[i];
              o
                ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                : (e[i] = r);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    _.each(["top", "left"], function (e, t) {
      _.cssHooks[t] = Fe(f.pixelPosition, function (e, n) {
        if (n)
          return (n = qe(e, t)), Pe.test(n) ? _(e).position()[t] + "px" : n;
      });
    }),
    _.each({ Height: "height", Width: "width" }, function (e, t) {
      _.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          _.fn[i] = function (r, o) {
            var s = arguments.length && (n || "boolean" != typeof r),
              a = n || (!0 === r || !0 === o ? "margin" : "border");
            return B(
              this,
              function (t, n, r) {
                var o;
                return m(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === r
                  ? _.css(t, n, a)
                  : _.style(t, n, r, a);
              },
              t,
              s ? r : void 0,
              s
            );
          };
        }
      );
    }),
    _.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        _.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    _.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    _.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        _.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (_.proxy = function (e, t) {
    var n, i, o;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), h(e)))
      return (
        (i = r.call(arguments, 2)),
        ((o = function () {
          return e.apply(t || this, i.concat(r.call(arguments)));
        }).guid = e.guid =
          e.guid || _.guid++),
        o
      );
  }),
    (_.holdReady = function (e) {
      e ? _.readyWait++ : _.ready(!0);
    }),
    (_.isArray = Array.isArray),
    (_.parseJSON = JSON.parse),
    (_.nodeName = E),
    (_.isFunction = h),
    (_.isWindow = m),
    (_.camelCase = U),
    (_.type = b),
    (_.now = Date.now),
    (_.isNumeric = function (e) {
      var t = _.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (_.trim = function (e) {
      return null == e ? "" : (e + "").replace(Ut, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return _;
      });
  var Xt = e.jQuery,
    Vt = e.$;
  return (
    (_.noConflict = function (t) {
      return e.$ === _ && (e.$ = Vt), t && e.jQuery === _ && (e.jQuery = Xt), _;
    }),
    void 0 === t && (e.jQuery = e.$ = _),
    _
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis ? globalThis : e || self).Popper =
            {})
        );
  })(this, function (e) {
    function t(e) {
      return {
        width: (e = e.getBoundingClientRect()).width,
        height: e.height,
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        x: e.left,
        y: e.top,
      };
    }
    function n(e) {
      return null == e
        ? window
        : "[object Window]" !== e.toString()
        ? ((e = e.ownerDocument) && e.defaultView) || window
        : e;
    }
    function i(e) {
      return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset };
    }
    function r(e) {
      return e instanceof n(e).Element || e instanceof Element;
    }
    function o(e) {
      return e instanceof n(e).HTMLElement || e instanceof HTMLElement;
    }
    function s(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    function a(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function l(e) {
      return (
        (r(e) ? e.ownerDocument : e.document) || window.document
      ).documentElement;
    }
    function c(e) {
      return t(l(e)).left + i(e).scrollLeft;
    }
    function u(e) {
      return n(e).getComputedStyle(e);
    }
    function d(e) {
      return (
        (e = u(e)),
        /auto|scroll|overlay|hidden/.test(
          e.overflow + e.overflowY + e.overflowX
        )
      );
    }
    function p(e, r, s) {
      void 0 === s && (s = !1);
      var u = l(r);
      e = t(e);
      var p = o(r),
        f = { scrollLeft: 0, scrollTop: 0 },
        h = { x: 0, y: 0 };
      return (
        (p || (!p && !s)) &&
          (("body" !== a(r) || d(u)) &&
            (f =
              r !== n(r) && o(r)
                ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop }
                : i(r)),
          o(r)
            ? (((h = t(r)).x += r.clientLeft), (h.y += r.clientTop))
            : u && (h.x = c(u))),
        {
          x: e.left + f.scrollLeft - h.x,
          y: e.top + f.scrollTop - h.y,
          width: e.width,
          height: e.height,
        }
      );
    }
    function f(e) {
      var n = t(e),
        i = e.offsetWidth,
        r = e.offsetHeight;
      return (
        1 >= Math.abs(n.width - i) && (i = n.width),
        1 >= Math.abs(n.height - r) && (r = n.height),
        { x: e.offsetLeft, y: e.offsetTop, width: i, height: r }
      );
    }
    function h(e) {
      return "html" === a(e)
        ? e
        : e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || l(e);
    }
    function m(e) {
      return 0 <= ["html", "body", "#document"].indexOf(a(e))
        ? e.ownerDocument.body
        : o(e) && d(e)
        ? e
        : m(h(e));
    }
    function g(e, t) {
      var i;
      void 0 === t && (t = []);
      var r = m(e);
      return (
        (e = r === (null == (i = e.ownerDocument) ? void 0 : i.body)),
        (i = n(r)),
        (r = e ? [i].concat(i.visualViewport || [], d(r) ? r : []) : r),
        (t = t.concat(r)),
        e ? t : t.concat(g(h(r)))
      );
    }
    function v(e) {
      return o(e) && "fixed" !== u(e).position ? e.offsetParent : null;
    }
    function y(e) {
      for (
        var t = n(e), i = v(e);
        i &&
        0 <= ["table", "td", "th"].indexOf(a(i)) &&
        "static" === u(i).position;

      )
        i = v(i);
      if (
        i &&
        ("html" === a(i) || ("body" === a(i) && "static" === u(i).position))
      )
        return t;
      if (!i)
        e: {
          if (
            ((i = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox")),
            -1 === navigator.userAgent.indexOf("Trident") ||
              !o(e) ||
              "fixed" !== u(e).position)
          )
            for (e = h(e); o(e) && 0 > ["html", "body"].indexOf(a(e)); ) {
              var r = u(e);
              if (
                "none" !== r.transform ||
                "none" !== r.perspective ||
                "paint" === r.contain ||
                -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                (i && "filter" === r.willChange) ||
                (i && r.filter && "none" !== r.filter)
              ) {
                i = e;
                break e;
              }
              e = e.parentNode;
            }
          i = null;
        }
      return i || t;
    }
    function b(e) {
      function t(e) {
        i.add(e.name),
          []
            .concat(e.requires || [], e.requiresIfExists || [])
            .forEach(function (e) {
              i.has(e) || ((e = n.get(e)) && t(e));
            }),
          r.push(e);
      }
      var n = new Map(),
        i = new Set(),
        r = [];
      return (
        e.forEach(function (e) {
          n.set(e.name, e);
        }),
        e.forEach(function (e) {
          i.has(e.name) || t(e);
        }),
        r
      );
    }
    function w(e) {
      var t;
      return function () {
        return (
          t ||
            (t = new Promise(function (n) {
              Promise.resolve().then(function () {
                (t = void 0), n(e());
              });
            })),
          t
        );
      };
    }
    function _(e) {
      return e.split("-")[0];
    }
    function x(e, t) {
      var n = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (n && s(n))
        do {
          if (t && e.isSameNode(t)) return !0;
          t = t.parentNode || t.host;
        } while (t);
      return !1;
    }
    function T(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function C(e, r) {
      if ("viewport" === r) {
        r = n(e);
        var s = l(e);
        r = r.visualViewport;
        var a = s.clientWidth;
        s = s.clientHeight;
        var d = 0,
          p = 0;
        r &&
          ((a = r.width),
          (s = r.height),
          /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
            ((d = r.offsetLeft), (p = r.offsetTop))),
          (e = T((e = { width: a, height: s, x: d + c(e), y: p })));
      } else o(r) ? (((e = t(r)).top += r.clientTop), (e.left += r.clientLeft), (e.bottom = e.top + r.clientHeight), (e.right = e.left + r.clientWidth), (e.width = r.clientWidth), (e.height = r.clientHeight), (e.x = e.left), (e.y = e.top)) : ((p = l(e)), (e = l(p)), (a = i(p)), (r = null == (s = p.ownerDocument) ? void 0 : s.body), (s = B(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0)), (d = B(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0)), (p = -a.scrollLeft + c(p)), (a = -a.scrollTop), "rtl" === u(r || e).direction && (p += B(e.clientWidth, r ? r.clientWidth : 0) - s), (e = T({ width: s, height: d, x: p, y: a })));
      return e;
    }
    function S(e, t, n) {
      return (
        (t =
          "clippingParents" === t
            ? (function (e) {
                var t = g(h(e)),
                  n =
                    0 <= ["absolute", "fixed"].indexOf(u(e).position) && o(e)
                      ? y(e)
                      : e;
                return r(n)
                  ? t.filter(function (e) {
                      return r(e) && x(e, n) && "body" !== a(e);
                    })
                  : [];
              })(e)
            : [].concat(t)),
        ((n = (n = [].concat(t, [n])).reduce(function (t, n) {
          return (
            (n = C(e, n)),
            (t.top = B(n.top, t.top)),
            (t.right = z(n.right, t.right)),
            (t.bottom = z(n.bottom, t.bottom)),
            (t.left = B(n.left, t.left)),
            t
          );
        }, C(e, n[0]))).width = n.right - n.left),
        (n.height = n.bottom - n.top),
        (n.x = n.left),
        (n.y = n.top),
        n
      );
    }
    function k(e) {
      return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
    }
    function E(e) {
      var t = e.reference,
        n = e.element,
        i = (e = e.placement) ? _(e) : null;
      e = e ? e.split("-")[1] : null;
      var r = t.x + t.width / 2 - n.width / 2,
        o = t.y + t.height / 2 - n.height / 2;
      switch (i) {
        case "top":
          r = { x: r, y: t.y - n.height };
          break;
        case "bottom":
          r = { x: r, y: t.y + t.height };
          break;
        case "right":
          r = { x: t.x + t.width, y: o };
          break;
        case "left":
          r = { x: t.x - n.width, y: o };
          break;
        default:
          r = { x: t.x, y: t.y };
      }
      if (null != (i = i ? k(i) : null))
        switch (((o = "y" === i ? "height" : "width"), e)) {
          case "start":
            r[i] -= t[o] / 2 - n[o] / 2;
            break;
          case "end":
            r[i] += t[o] / 2 - n[o] / 2;
        }
      return r;
    }
    function A(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function D(e, t) {
      return t.reduce(function (t, n) {
        return (t[n] = e), t;
      }, {});
    }
    function O(e, n) {
      void 0 === n && (n = {});
      var i = n;
      n = void 0 === (n = i.placement) ? e.placement : n;
      var o = i.boundary,
        s = void 0 === o ? "clippingParents" : o,
        a = void 0 === (o = i.rootBoundary) ? "viewport" : o;
      o = void 0 === (o = i.elementContext) ? "popper" : o;
      var c = i.altBoundary,
        u = void 0 !== c && c;
      i = A(
        "number" != typeof (i = void 0 === (i = i.padding) ? 0 : i)
          ? i
          : D(i, I)
      );
      var d = e.elements.reference;
      (c = e.rects.popper),
        (s = S(
          r((u = e.elements[u ? ("popper" === o ? "reference" : "popper") : o]))
            ? u
            : u.contextElement || l(e.elements.popper),
          s,
          a
        )),
        (u = E({
          reference: (a = t(d)),
          element: c,
          strategy: "absolute",
          placement: n,
        })),
        (c = T(Object.assign({}, c, u))),
        (a = "popper" === o ? c : a);
      var p = {
        top: s.top - a.top + i.top,
        bottom: a.bottom - s.bottom + i.bottom,
        left: s.left - a.left + i.left,
        right: a.right - s.right + i.right,
      };
      if (((e = e.modifiersData.offset), "popper" === o && e)) {
        var f = e[n];
        Object.keys(p).forEach(function (e) {
          var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
            n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
          p[e] += f[n] * t;
        });
      }
      return p;
    }
    function M() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function L(e) {
      void 0 === e && (e = {});
      var t = e.defaultModifiers,
        n = void 0 === t ? [] : t,
        i = void 0 === (e = e.defaultOptions) ? Y : e;
      return function (e, t, o) {
        function s() {
          l.forEach(function (e) {
            return e();
          }),
            (l = []);
        }
        void 0 === o && (o = i);
        var a = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Y, i),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          l = [],
          c = !1,
          u = {
            state: a,
            setOptions: function (o) {
              return (
                s(),
                (a.options = Object.assign({}, i, a.options, o)),
                (a.scrollParents = {
                  reference: r(e)
                    ? g(e)
                    : e.contextElement
                    ? g(e.contextElement)
                    : [],
                  popper: g(t),
                }),
                (o = (function (e) {
                  var t = b(e);
                  return R.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(n, a.options.modifiers))
                )),
                (a.orderedModifiers = o.filter(function (e) {
                  return e.enabled;
                })),
                a.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    n = e.options;
                  (n = void 0 === n ? {} : n),
                    "function" == typeof (e = e.effect) &&
                      ((t = e({ state: a, name: t, instance: u, options: n })),
                      l.push(t || function () {}));
                }),
                u.update()
              );
            },
            forceUpdate: function () {
              if (!c) {
                var e = a.elements,
                  t = e.reference;
                if (M(t, (e = e.popper)))
                  for (
                    a.rects = {
                      reference: p(t, y(e), "fixed" === a.options.strategy),
                      popper: f(e),
                    },
                      a.reset = !1,
                      a.placement = a.options.placement,
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      }),
                      t = 0;
                    t < a.orderedModifiers.length;
                    t++
                  )
                    if (!0 === a.reset) (a.reset = !1), (t = -1);
                    else {
                      var n = a.orderedModifiers[t];
                      e = n.fn;
                      var i = n.options;
                      (i = void 0 === i ? {} : i),
                        (n = n.name),
                        "function" == typeof e &&
                          (a =
                            e({ state: a, options: i, name: n, instance: u }) ||
                            a);
                    }
              }
            },
            update: w(function () {
              return new Promise(function (e) {
                u.forceUpdate(), e(a);
              });
            }),
            destroy: function () {
              s(), (c = !0);
            },
          };
        return M(e, t)
          ? (u.setOptions(o).then(function (e) {
              !c && o.onFirstUpdate && o.onFirstUpdate(e);
            }),
            u)
          : u;
      };
    }
    function j(e) {
      var t,
        i = e.popper,
        r = e.popperRect,
        o = e.placement,
        s = e.offsets,
        a = e.position,
        c = e.gpuAcceleration,
        d = e.adaptive;
      if (!0 === (e = e.roundOffsets)) {
        e = s.y;
        var p = window.devicePixelRatio || 1;
        e = { x: W(W(s.x * p) / p) || 0, y: W(W(e * p) / p) || 0 };
      } else e = "function" == typeof e ? e(s) : s;
      (e = void 0 === (e = (p = e).x) ? 0 : e),
        (p = void 0 === (p = p.y) ? 0 : p);
      var f = s.hasOwnProperty("x");
      s = s.hasOwnProperty("y");
      var h,
        m = "left",
        g = "top",
        v = window;
      if (d) {
        var b = y(i),
          w = "clientHeight",
          _ = "clientWidth";
        b === n(i) &&
          "static" !== u((b = l(i))).position &&
          ((w = "scrollHeight"), (_ = "scrollWidth")),
          "top" === o &&
            ((g = "bottom"), (p -= b[w] - r.height), (p *= c ? 1 : -1)),
          "left" === o &&
            ((m = "right"), (e -= b[_] - r.width), (e *= c ? 1 : -1));
      }
      return (
        (i = Object.assign({ position: a }, d && Q)),
        c
          ? Object.assign(
              {},
              i,
              (((h = {})[g] = s ? "0" : ""),
              (h[m] = f ? "0" : ""),
              (h.transform =
                2 > (v.devicePixelRatio || 1)
                  ? "translate(" + e + "px, " + p + "px)"
                  : "translate3d(" + e + "px, " + p + "px, 0)"),
              h)
            )
          : Object.assign(
              {},
              i,
              (((t = {})[g] = s ? p + "px" : ""),
              (t[m] = f ? e + "px" : ""),
              (t.transform = ""),
              t)
            )
      );
    }
    function $(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return J[e];
      });
    }
    function P(e) {
      return e.replace(/start|end/g, function (e) {
        return ee[e];
      });
    }
    function N(e, t, n) {
      return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
          top: e.top - t.height - n.y,
          right: e.right - t.width + n.x,
          bottom: e.bottom - t.height + n.y,
          left: e.left - t.width - n.x,
        }
      );
    }
    function H(e) {
      return ["top", "right", "bottom", "left"].some(function (t) {
        return 0 <= e[t];
      });
    }
    var I = ["top", "bottom", "right", "left"],
      q = I.reduce(function (e, t) {
        return e.concat([t + "-start", t + "-end"]);
      }, []),
      F = [].concat(I, ["auto"]).reduce(function (e, t) {
        return e.concat([t, t + "-start", t + "-end"]);
      }, []),
      R =
        "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(
          " "
        ),
      B = Math.max,
      z = Math.min,
      W = Math.round,
      Y = { placement: "bottom", modifiers: [], strategy: "absolute" },
      U = { passive: !0 },
      X = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            i = e.instance,
            r = (e = e.options).scroll,
            o = void 0 === r || r,
            s = void 0 === (e = e.resize) || e,
            a = n(t.elements.popper),
            l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            o &&
              l.forEach(function (e) {
                e.addEventListener("scroll", i.update, U);
              }),
            s && a.addEventListener("resize", i.update, U),
            function () {
              o &&
                l.forEach(function (e) {
                  e.removeEventListener("scroll", i.update, U);
                }),
                s && a.removeEventListener("resize", i.update, U);
            }
          );
        },
        data: {},
      },
      V = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state;
          t.modifiersData[e.name] = E({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        },
        data: {},
      },
      Q = { top: "auto", right: "auto", bottom: "auto", left: "auto" },
      K = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options;
          e = void 0 === (e = n.gpuAcceleration) || e;
          var i = n.adaptive;
          (i = void 0 === i || i),
            (n = void 0 === (n = n.roundOffsets) || n),
            (e = {
              placement: _(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: e,
            }),
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                j(
                  Object.assign({}, e, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: i,
                    roundOffsets: n,
                  })
                )
              )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                j(
                  Object.assign({}, e, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: n,
                  })
                )
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      },
      G = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              i = t.attributes[e] || {},
              r = t.elements[e];
            o(r) &&
              a(r) &&
              (Object.assign(r.style, n),
              Object.keys(i).forEach(function (e) {
                var t = i[e];
                !1 === t
                  ? r.removeAttribute(e)
                  : r.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var i = t.elements[e],
                  r = t.attributes[e] || {};
                (e = Object.keys(
                  t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                ).reduce(function (e, t) {
                  return (e[t] = ""), e;
                }, {})),
                  o(i) &&
                    a(i) &&
                    (Object.assign(i.style, e),
                    Object.keys(r).forEach(function (e) {
                      i.removeAttribute(e);
                    }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      },
      Z = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.name,
            i = void 0 === (e = e.options.offset) ? [0, 0] : e,
            r = (e = F.reduce(function (e, n) {
              var r = t.rects,
                o = _(n),
                s = 0 <= ["left", "top"].indexOf(o) ? -1 : 1,
                a =
                  "function" == typeof i
                    ? i(Object.assign({}, r, { placement: n }))
                    : i;
              return (
                (r = (r = a[0]) || 0),
                (a = ((a = a[1]) || 0) * s),
                (o =
                  0 <= ["left", "right"].indexOf(o)
                    ? { x: a, y: r }
                    : { x: r, y: a }),
                (e[n] = o),
                e
              );
            }, {}))[t.placement],
            o = r.x;
          (r = r.y),
            null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += o),
              (t.modifiersData.popperOffsets.y += r)),
            (t.modifiersData[n] = e);
        },
      },
      J = { left: "right", right: "left", bottom: "top", top: "bottom" },
      ee = { start: "end", end: "start" },
      te = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options;
          if (((e = e.name), !t.modifiersData[e]._skip)) {
            var i = n.mainAxis;
            i = void 0 === i || i;
            var r = n.altAxis;
            r = void 0 === r || r;
            var o = n.fallbackPlacements,
              s = n.padding,
              a = n.boundary,
              l = n.rootBoundary,
              c = n.altBoundary,
              u = n.flipVariations,
              d = void 0 === u || u,
              p = n.allowedAutoPlacements;
            (u = _((n = t.options.placement))),
              (o =
                o ||
                (u !== n && d
                  ? (function (e) {
                      if ("auto" === _(e)) return [];
                      var t = $(e);
                      return [P(e), t, P(t)];
                    })(n)
                  : [$(n)]));
            var f = [n].concat(o).reduce(function (e, n) {
              return e.concat(
                "auto" === _(n)
                  ? (function (e, t) {
                      void 0 === t && (t = {});
                      var n = t.boundary,
                        i = t.rootBoundary,
                        r = t.padding,
                        o = t.flipVariations,
                        s = t.allowedAutoPlacements,
                        a = void 0 === s ? F : s,
                        l = t.placement.split("-")[1];
                      0 ===
                        (o = (t = l
                          ? o
                            ? q
                            : q.filter(function (e) {
                                return e.split("-")[1] === l;
                              })
                          : I).filter(function (e) {
                          return 0 <= a.indexOf(e);
                        })).length && (o = t);
                      var c = o.reduce(function (t, o) {
                        return (
                          (t[o] = O(e, {
                            placement: o,
                            boundary: n,
                            rootBoundary: i,
                            padding: r,
                          })[_(o)]),
                          t
                        );
                      }, {});
                      return Object.keys(c).sort(function (e, t) {
                        return c[e] - c[t];
                      });
                    })(t, {
                      placement: n,
                      boundary: a,
                      rootBoundary: l,
                      padding: s,
                      flipVariations: d,
                      allowedAutoPlacements: p,
                    })
                  : n
              );
            }, []);
            (n = t.rects.reference), (o = t.rects.popper);
            var h = new Map();
            u = !0;
            for (var m = f[0], g = 0; g < f.length; g++) {
              var v = f[g],
                y = _(v),
                b = "start" === v.split("-")[1],
                w = 0 <= ["top", "bottom"].indexOf(y),
                x = w ? "width" : "height",
                T = O(t, {
                  placement: v,
                  boundary: a,
                  rootBoundary: l,
                  altBoundary: c,
                  padding: s,
                });
              if (
                ((b = w ? (b ? "right" : "left") : b ? "bottom" : "top"),
                n[x] > o[x] && (b = $(b)),
                (x = $(b)),
                (w = []),
                i && w.push(0 >= T[y]),
                r && w.push(0 >= T[b], 0 >= T[x]),
                w.every(function (e) {
                  return e;
                }))
              ) {
                (m = v), (u = !1);
                break;
              }
              h.set(v, w);
            }
            if (u)
              for (
                i = function (e) {
                  var t = f.find(function (t) {
                    if ((t = h.get(t)))
                      return t.slice(0, e).every(function (e) {
                        return e;
                      });
                  });
                  if (t) return (m = t), "break";
                },
                  r = d ? 3 : 1;
                0 < r && "break" !== i(r);
                r--
              );
            t.placement !== m &&
              ((t.modifiersData[e]._skip = !0),
              (t.placement = m),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      },
      ne = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options;
          e = e.name;
          var i = n.mainAxis,
            r = void 0 === i || i,
            o = void 0 !== (i = n.altAxis) && i;
          i = void 0 === (i = n.tether) || i;
          var s = n.tetherOffset,
            a = void 0 === s ? 0 : s,
            l = O(t, {
              boundary: n.boundary,
              rootBoundary: n.rootBoundary,
              padding: n.padding,
              altBoundary: n.altBoundary,
            });
          n = _(t.placement);
          var c = t.placement.split("-")[1],
            u = !c,
            d = k(n);
          (n = "x" === d ? "y" : "x"), (s = t.modifiersData.popperOffsets);
          var p = t.rects.reference,
            h = t.rects.popper,
            m =
              "function" == typeof a
                ? a(Object.assign({}, t.rects, { placement: t.placement }))
                : a;
          if (((a = { x: 0, y: 0 }), s)) {
            if (r || o) {
              var g = "y" === d ? "top" : "left",
                v = "y" === d ? "bottom" : "right",
                b = "y" === d ? "height" : "width",
                w = s[d],
                x = s[d] + l[g],
                T = s[d] - l[v],
                C = i ? -h[b] / 2 : 0,
                S = "start" === c ? p[b] : h[b];
              (c = "start" === c ? -h[b] : -p[b]),
                (h = t.elements.arrow),
                (h = i && h ? f(h) : { width: 0, height: 0 });
              var E = t.modifiersData["arrow#persistent"]
                ? t.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 };
              (g = E[g]),
                (v = E[v]),
                (h = B(0, z(p[b], h[b]))),
                (S = u ? p[b] / 2 - C - h - g - m : S - h - g - m),
                (p = u ? -p[b] / 2 + C + h + v + m : c + h + v + m),
                (u = t.elements.arrow && y(t.elements.arrow)),
                (m = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][d]
                  : 0),
                (u =
                  s[d] +
                  S -
                  m -
                  (u ? ("y" === d ? u.clientTop || 0 : u.clientLeft || 0) : 0)),
                (p = s[d] + p - m),
                r &&
                  ((r = i ? z(x, u) : x),
                  (T = i ? B(T, p) : T),
                  (r = B(r, z(w, T))),
                  (s[d] = r),
                  (a[d] = r - w)),
                o &&
                  ((r = (o = s[n]) + l["x" === d ? "top" : "left"]),
                  (l = o - l["x" === d ? "bottom" : "right"]),
                  (r = i ? z(r, u) : r),
                  (i = i ? B(l, p) : l),
                  (i = B(r, z(o, i))),
                  (s[n] = i),
                  (a[n] = i - o));
            }
            t.modifiersData[e] = a;
          }
        },
        requiresIfExists: ["offset"],
      },
      ie = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            i = e.name,
            r = e.options,
            o = n.elements.arrow,
            s = n.modifiersData.popperOffsets,
            a = _(n.placement);
          if (
            ((e = k(a)),
            (a = 0 <= ["left", "right"].indexOf(a) ? "height" : "width"),
            o && s)
          ) {
            r = A(
              "number" !=
                typeof (r =
                  "function" == typeof (r = r.padding)
                    ? r(Object.assign({}, n.rects, { placement: n.placement }))
                    : r)
                ? r
                : D(r, I)
            );
            var l = f(o),
              c = "y" === e ? "top" : "left",
              u = "y" === e ? "bottom" : "right",
              d =
                n.rects.reference[a] +
                n.rects.reference[e] -
                s[e] -
                n.rects.popper[a];
            (s = s[e] - n.rects.reference[e]),
              (s =
                (o = (o = y(o))
                  ? "y" === e
                    ? o.clientHeight || 0
                    : o.clientWidth || 0
                  : 0) /
                  2 -
                l[a] / 2 +
                (d / 2 - s / 2)),
              (a = B(r[c], z(s, o - l[a] - r[u]))),
              (n.modifiersData[i] =
                (((t = {})[e] = a), (t.centerOffset = a - s), t));
          }
        },
        effect: function (e) {
          var t = e.state;
          if (
            null !=
            (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)
          ) {
            if (
              "string" == typeof e &&
              !(e = t.elements.popper.querySelector(e))
            )
              return;
            x(t.elements.popper, e) && (t.elements.arrow = e);
          }
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      },
      re = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state;
          e = e.name;
          var n = t.rects.reference,
            i = t.rects.popper,
            r = t.modifiersData.preventOverflow,
            o = O(t, { elementContext: "reference" }),
            s = O(t, { altBoundary: !0 });
          (n = N(o, n)),
            (i = N(s, i, r)),
            (r = H(n)),
            (s = H(i)),
            (t.modifiersData[e] = {
              referenceClippingOffsets: n,
              popperEscapeOffsets: i,
              isReferenceHidden: r,
              hasPopperEscaped: s,
            }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": r,
              "data-popper-escaped": s,
            }));
        },
      },
      oe = L({ defaultModifiers: [X, V, K, G] }),
      se = [X, V, K, G, Z, te, ne, ie, re],
      ae = L({ defaultModifiers: se });
    (e.applyStyles = G),
      (e.arrow = ie),
      (e.computeStyles = K),
      (e.createPopper = ae),
      (e.createPopperLite = oe),
      (e.defaultModifiers = se),
      (e.detectOverflow = O),
      (e.eventListeners = X),
      (e.flip = te),
      (e.hide = re),
      (e.offset = Z),
      (e.popperGenerator = L),
      (e.popperOffsets = V),
      (e.preventOverflow = ne),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t(require("@popperjs/core")))
      : "function" == typeof define && define.amd
      ? define(["@popperjs/core"], t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
          t(e.Popper));
  })(this, function (e) {
    "use strict";
    var t = (function (e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if ("default" !== n) {
              var i = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                i.get
                  ? i
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    }
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    })(e);
    const n = {
        find: (e, t = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(t, e)),
        findOne: (e, t = document.documentElement) =>
          Element.prototype.querySelector.call(t, e),
        children: (e, t) =>
          [].concat(...e.children).filter((e) => e.matches(t)),
        parents(e, t) {
          const n = [];
          let i = e.parentNode;
          for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
            i.matches(t) && n.push(i), (i = i.parentNode);
          return n;
        },
        prev(e, t) {
          let n = e.previousElementSibling;
          for (; n; ) {
            if (n.matches(t)) return [n];
            n = n.previousElementSibling;
          }
          return [];
        },
        next(e, t) {
          let n = e.nextElementSibling;
          for (; n; ) {
            if (n.matches(t)) return [n];
            n = n.nextElementSibling;
          }
          return [];
        },
      },
      i = (e) => {
        do {
          e += Math.floor(1e6 * Math.random());
        } while (document.getElementById(e));
        return e;
      },
      r = (e) => {
        let t = e.getAttribute("data-bs-target");
        if (!t || "#" === t) {
          let n = e.getAttribute("href");
          if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
          n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]),
            (t = n && "#" !== n ? n.trim() : null);
        }
        return t;
      },
      o = (e) => {
        const t = r(e);
        return t && document.querySelector(t) ? t : null;
      },
      s = (e) => {
        const t = r(e);
        return t ? document.querySelector(t) : null;
      },
      a = (e) => {
        e.dispatchEvent(new Event("transitionend"));
      },
      l = (e) =>
        !(!e || "object" != typeof e) &&
        (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
      c = (e) =>
        l(e)
          ? e.jquery
            ? e[0]
            : e
          : "string" == typeof e && e.length > 0
          ? n.findOne(e)
          : null,
      u = (e, t, n) => {
        Object.keys(n).forEach((i) => {
          const r = n[i],
            o = t[i],
            s =
              o && l(o)
                ? "element"
                : null == (a = o)
                ? "" + a
                : {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          var a;
          if (!new RegExp(r).test(s))
            throw new TypeError(
              `${e.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${r}".`
            );
        });
      },
      d = (e) =>
        !(!l(e) || 0 === e.getClientRects().length) &&
        "visible" === getComputedStyle(e).getPropertyValue("visibility"),
      p = (e) =>
        !e ||
        e.nodeType !== Node.ELEMENT_NODE ||
        !!e.classList.contains("disabled") ||
        (void 0 !== e.disabled
          ? e.disabled
          : e.hasAttribute("disabled") &&
            "false" !== e.getAttribute("disabled")),
      f = (e) => {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof e.getRootNode) {
          const t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }
        return e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? f(e.parentNode)
          : null;
      },
      h = () => {},
      m = (e) => e.offsetHeight,
      g = () => {
        const { jQuery: e } = window;
        return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
      },
      v = [],
      y = () => "rtl" === document.documentElement.dir,
      b = (e) => {
        var t;
        (t = () => {
          const t = g();
          if (t) {
            const n = e.NAME,
              i = t.fn[n];
            (t.fn[n] = e.jQueryInterface),
              (t.fn[n].Constructor = e),
              (t.fn[n].noConflict = () => ((t.fn[n] = i), e.jQueryInterface));
          }
        }),
          "loading" === document.readyState
            ? (v.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  v.forEach((e) => e());
                }),
              v.push(t))
            : t();
      },
      w = (e) => {
        "function" == typeof e && e();
      },
      _ = (e, t, n = !0) => {
        if (!n) return void w(e);
        const i =
          ((e) => {
            if (!e) return 0;
            let { transitionDuration: t, transitionDelay: n } =
              window.getComputedStyle(e);
            const i = Number.parseFloat(t),
              r = Number.parseFloat(n);
            return i || r
              ? ((t = t.split(",")[0]),
                (n = n.split(",")[0]),
                1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
              : 0;
          })(t) + 5;
        let r = !1;
        const o = ({ target: n }) => {
          n === t &&
            ((r = !0), t.removeEventListener("transitionend", o), w(e));
        };
        t.addEventListener("transitionend", o),
          setTimeout(() => {
            r || a(t);
          }, i);
      },
      x = (e, t, n, i) => {
        let r = e.indexOf(t);
        if (-1 === r) return e[!n && i ? e.length - 1 : 0];
        const o = e.length;
        return (
          (r += n ? 1 : -1),
          i && (r = (r + o) % o),
          e[Math.max(0, Math.min(r, o - 1))]
        );
      },
      T = /[^.]*(?=\..*)\.|.*/,
      C = /\..*/,
      S = /::\d+$/,
      k = {};
    let E = 1;
    const A = { mouseenter: "mouseover", mouseleave: "mouseout" },
      D = /^(mouseenter|mouseleave)/i,
      O = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function M(e, t) {
      return (t && `${t}::${E++}`) || e.uidEvent || E++;
    }
    function L(e) {
      const t = M(e);
      return (e.uidEvent = t), (k[t] = k[t] || {}), k[t];
    }
    function j(e, t, n = null) {
      const i = Object.keys(e);
      for (let r = 0, o = i.length; r < o; r++) {
        const o = e[i[r]];
        if (o.originalHandler === t && o.delegationSelector === n) return o;
      }
      return null;
    }
    function $(e, t, n) {
      const i = "string" == typeof t,
        r = i ? n : t;
      let o = H(e);
      return O.has(o) || (o = e), [i, r, o];
    }
    function P(e, t, n, i, r) {
      if ("string" != typeof t || !e) return;
      if ((n || ((n = i), (i = null)), D.test(t))) {
        const e = (e) =>
          function (t) {
            if (
              !t.relatedTarget ||
              (t.relatedTarget !== t.delegateTarget &&
                !t.delegateTarget.contains(t.relatedTarget))
            )
              return e.call(this, t);
          };
        i ? (i = e(i)) : (n = e(n));
      }
      const [o, s, a] = $(t, n, i),
        l = L(e),
        c = l[a] || (l[a] = {}),
        u = j(c, s, o ? n : null);
      if (u) return void (u.oneOff = u.oneOff && r);
      const d = M(s, t.replace(T, "")),
        p = o
          ? (function (e, t, n) {
              return function i(r) {
                const o = e.querySelectorAll(t);
                for (let { target: s } = r; s && s !== this; s = s.parentNode)
                  for (let a = o.length; a--; )
                    if (o[a] === s)
                      return (
                        (r.delegateTarget = s),
                        i.oneOff && I.off(e, r.type, t, n),
                        n.apply(s, [r])
                      );
                return null;
              };
            })(e, n, i)
          : (function (e, t) {
              return function n(i) {
                return (
                  (i.delegateTarget = e),
                  n.oneOff && I.off(e, i.type, t),
                  t.apply(e, [i])
                );
              };
            })(e, n);
      (p.delegationSelector = o ? n : null),
        (p.originalHandler = s),
        (p.oneOff = r),
        (p.uidEvent = d),
        (c[d] = p),
        e.addEventListener(a, p, o);
    }
    function N(e, t, n, i, r) {
      const o = j(t[n], i, r);
      o && (e.removeEventListener(n, o, Boolean(r)), delete t[n][o.uidEvent]);
    }
    function H(e) {
      return (e = e.replace(C, "")), A[e] || e;
    }
    const I = {
        on(e, t, n, i) {
          P(e, t, n, i, !1);
        },
        one(e, t, n, i) {
          P(e, t, n, i, !0);
        },
        off(e, t, n, i) {
          if ("string" != typeof t || !e) return;
          const [r, o, s] = $(t, n, i),
            a = s !== t,
            l = L(e),
            c = t.startsWith(".");
          if (void 0 !== o) {
            if (!l || !l[s]) return;
            return void N(e, l, s, o, r ? n : null);
          }
          c &&
            Object.keys(l).forEach((n) => {
              !(function (e, t, n, i) {
                const r = t[n] || {};
                Object.keys(r).forEach((o) => {
                  if (o.includes(i)) {
                    const i = r[o];
                    N(e, t, n, i.originalHandler, i.delegationSelector);
                  }
                });
              })(e, l, n, t.slice(1));
            });
          const u = l[s] || {};
          Object.keys(u).forEach((n) => {
            const i = n.replace(S, "");
            if (!a || t.includes(i)) {
              const t = u[n];
              N(e, l, s, t.originalHandler, t.delegationSelector);
            }
          });
        },
        trigger(e, t, n) {
          if ("string" != typeof t || !e) return null;
          const i = g(),
            r = H(t),
            o = t !== r,
            s = O.has(r);
          let a,
            l = !0,
            c = !0,
            u = !1,
            d = null;
          return (
            o &&
              i &&
              ((a = i.Event(t, n)),
              i(e).trigger(a),
              (l = !a.isPropagationStopped()),
              (c = !a.isImmediatePropagationStopped()),
              (u = a.isDefaultPrevented())),
            s
              ? ((d = document.createEvent("HTMLEvents")),
                d.initEvent(r, l, !0))
              : (d = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
            void 0 !== n &&
              Object.keys(n).forEach((e) => {
                Object.defineProperty(d, e, { get: () => n[e] });
              }),
            u && d.preventDefault(),
            c && e.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
          );
        },
      },
      q = new Map();
    var F = {
      set(e, t, n) {
        q.has(e) || q.set(e, new Map());
        const i = q.get(e);
        i.has(t) || 0 === i.size
          ? i.set(t, n)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(i.keys())[0]
              }.`
            );
      },
      get: (e, t) => (q.has(e) && q.get(e).get(t)) || null,
      remove(e, t) {
        if (!q.has(e)) return;
        const n = q.get(e);
        n.delete(t), 0 === n.size && q.delete(e);
      },
    };
    class R {
      constructor(e) {
        (e = c(e)) &&
          ((this._element = e),
          F.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        F.remove(this._element, this.constructor.DATA_KEY),
          I.off(this._element, this.constructor.EVENT_KEY),
          Object.getOwnPropertyNames(this).forEach((e) => {
            this[e] = null;
          });
      }
      _queueCallback(e, t, n = !0) {
        _(e, t, n);
      }
      static getInstance(e) {
        return F.get(e, this.DATA_KEY);
      }
      static getOrCreateInstance(e, t = {}) {
        return (
          this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        );
      }
      static get VERSION() {
        return "5.0.2";
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      static get DATA_KEY() {
        return "bs." + this.NAME;
      }
      static get EVENT_KEY() {
        return "." + this.DATA_KEY;
      }
    }
    class B extends R {
      static get NAME() {
        return "alert";
      }
      close(e) {
        const t = e ? this._getRootElement(e) : this._element,
          n = this._triggerCloseEvent(t);
        null === n || n.defaultPrevented || this._removeElement(t);
      }
      _getRootElement(e) {
        return s(e) || e.closest(".alert");
      }
      _triggerCloseEvent(e) {
        return I.trigger(e, "close.bs.alert");
      }
      _removeElement(e) {
        e.classList.remove("show");
        const t = e.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(e), e, t);
      }
      _destroyElement(e) {
        e.remove(), I.trigger(e, "closed.bs.alert");
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = B.getOrCreateInstance(this);
          "close" === e && t[e](this);
        });
      }
      static handleDismiss(e) {
        return function (t) {
          t && t.preventDefault(), e.close(this);
        };
      }
    }
    I.on(
      document,
      "click.bs.alert.data-api",
      '[data-bs-dismiss="alert"]',
      B.handleDismiss(new B())
    ),
      b(B);
    class z extends R {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = z.getOrCreateInstance(this);
          "toggle" === e && t[e]();
        });
      }
    }
    function W(e) {
      return (
        "true" === e ||
        ("false" !== e &&
          (e === Number(e).toString()
            ? Number(e)
            : "" === e || "null" === e
            ? null
            : e))
      );
    }
    function Y(e) {
      return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
    }
    I.on(
      document,
      "click.bs.button.data-api",
      '[data-bs-toggle="button"]',
      (e) => {
        e.preventDefault();
        const t = e.target.closest('[data-bs-toggle="button"]');
        z.getOrCreateInstance(t).toggle();
      }
    ),
      b(z);
    const U = {
        setDataAttribute(e, t, n) {
          e.setAttribute("data-bs-" + Y(t), n);
        },
        removeDataAttribute(e, t) {
          e.removeAttribute("data-bs-" + Y(t));
        },
        getDataAttributes(e) {
          if (!e) return {};
          const t = {};
          return (
            Object.keys(e.dataset)
              .filter((e) => e.startsWith("bs"))
              .forEach((n) => {
                let i = n.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                  (t[i] = W(e.dataset[n]));
              }),
            t
          );
        },
        getDataAttribute: (e, t) => W(e.getAttribute("data-bs-" + Y(t))),
        offset(e) {
          const t = e.getBoundingClientRect();
          return {
            top: t.top + document.body.scrollTop,
            left: t.left + document.body.scrollLeft,
          };
        },
        position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
      },
      X = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      V = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      Q = "next",
      K = "prev",
      G = "left",
      Z = "right",
      J = { ArrowLeft: Z, ArrowRight: G };
    class ee extends R {
      constructor(e, t) {
        super(e),
          (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(t)),
          (this._indicatorsElement = n.findOne(
            ".carousel-indicators",
            this._element
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(window.PointerEvent)),
          this._addEventListeners();
      }
      static get Default() {
        return X;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Q);
      }
      nextWhenVisible() {
        !document.hidden && d(this._element) && this.next();
      }
      prev() {
        this._slide(K);
      }
      pause(e) {
        e || (this._isPaused = !0),
          n.findOne(
            ".carousel-item-next, .carousel-item-prev",
            this._element
          ) && (a(this._element), this.cycle(!0)),
          clearInterval(this._interval),
          (this._interval = null);
      }
      cycle(e) {
        e || (this._isPaused = !1),
          this._interval &&
            (clearInterval(this._interval), (this._interval = null)),
          this._config &&
            this._config.interval &&
            !this._isPaused &&
            (this._updateInterval(),
            (this._interval = setInterval(
              (document.visibilityState
                ? this.nextWhenVisible
                : this.next
              ).bind(this),
              this._config.interval
            )));
      }
      to(e) {
        this._activeElement = n.findOne(".active.carousel-item", this._element);
        const t = this._getItemIndex(this._activeElement);
        if (e > this._items.length - 1 || e < 0) return;
        if (this._isSliding)
          return void I.one(this._element, "slid.bs.carousel", () =>
            this.to(e)
          );
        if (t === e) return this.pause(), void this.cycle();
        const i = e > t ? Q : K;
        this._slide(i, this._items[e]);
      }
      _getConfig(e) {
        return (
          (e = {
            ...X,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          u("carousel", e, V),
          e
        );
      }
      _handleSwipe() {
        const e = Math.abs(this.touchDeltaX);
        if (e <= 40) return;
        const t = e / this.touchDeltaX;
        (this.touchDeltaX = 0), t && this._slide(t > 0 ? Z : G);
      }
      _addEventListeners() {
        this._config.keyboard &&
          I.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
          "hover" === this._config.pause &&
            (I.on(this._element, "mouseenter.bs.carousel", (e) =>
              this.pause(e)
            ),
            I.on(this._element, "mouseleave.bs.carousel", (e) =>
              this.cycle(e)
            )),
          this._config.touch &&
            this._touchSupported &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        const e = (e) => {
            !this._pointerEvent ||
            ("pen" !== e.pointerType && "touch" !== e.pointerType)
              ? this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
              : (this.touchStartX = e.clientX);
          },
          t = (e) => {
            this.touchDeltaX =
              e.touches && e.touches.length > 1
                ? 0
                : e.touches[0].clientX - this.touchStartX;
          },
          i = (e) => {
            !this._pointerEvent ||
              ("pen" !== e.pointerType && "touch" !== e.pointerType) ||
              (this.touchDeltaX = e.clientX - this.touchStartX),
              this._handleSwipe(),
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  (e) => this.cycle(e),
                  500 + this._config.interval
                )));
          };
        n.find(".carousel-item img", this._element).forEach((e) => {
          I.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
        }),
          this._pointerEvent
            ? (I.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
              I.on(this._element, "pointerup.bs.carousel", (e) => i(e)),
              this._element.classList.add("pointer-event"))
            : (I.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
              I.on(this._element, "touchmove.bs.carousel", (e) => t(e)),
              I.on(this._element, "touchend.bs.carousel", (e) => i(e)));
      }
      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const t = J[e.key];
        t && (e.preventDefault(), this._slide(t));
      }
      _getItemIndex(e) {
        return (
          (this._items =
            e && e.parentNode ? n.find(".carousel-item", e.parentNode) : []),
          this._items.indexOf(e)
        );
      }
      _getItemByOrder(e, t) {
        const n = e === Q;
        return x(this._items, t, n, this._config.wrap);
      }
      _triggerSlideEvent(e, t) {
        const i = this._getItemIndex(e),
          r = this._getItemIndex(
            n.findOne(".active.carousel-item", this._element)
          );
        return I.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: e,
          direction: t,
          from: r,
          to: i,
        });
      }
      _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          const t = n.findOne(".active", this._indicatorsElement);
          t.classList.remove("active"), t.removeAttribute("aria-current");
          const i = n.find("[data-bs-target]", this._indicatorsElement);
          for (let t = 0; t < i.length; t++)
            if (
              Number.parseInt(i[t].getAttribute("data-bs-slide-to"), 10) ===
              this._getItemIndex(e)
            ) {
              i[t].classList.add("active"),
                i[t].setAttribute("aria-current", "true");
              break;
            }
        }
      }
      _updateInterval() {
        const e =
          this._activeElement ||
          n.findOne(".active.carousel-item", this._element);
        if (!e) return;
        const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        t
          ? ((this._config.defaultInterval =
              this._config.defaultInterval || this._config.interval),
            (this._config.interval = t))
          : (this._config.interval =
              this._config.defaultInterval || this._config.interval);
      }
      _slide(e, t) {
        const i = this._directionToOrder(e),
          r = n.findOne(".active.carousel-item", this._element),
          o = this._getItemIndex(r),
          s = t || this._getItemByOrder(i, r),
          a = this._getItemIndex(s),
          l = Boolean(this._interval),
          c = i === Q,
          u = c ? "carousel-item-start" : "carousel-item-end",
          d = c ? "carousel-item-next" : "carousel-item-prev",
          p = this._orderToDirection(i);
        if (s && s.classList.contains("active"))
          return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(s, p).defaultPrevented) return;
        if (!r || !s) return;
        (this._isSliding = !0),
          l && this.pause(),
          this._setActiveIndicatorElement(s),
          (this._activeElement = s);
        const f = () => {
          I.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: s,
            direction: p,
            from: o,
            to: a,
          });
        };
        if (this._element.classList.contains("slide")) {
          s.classList.add(d), m(s), r.classList.add(u), s.classList.add(u);
          const e = () => {
            s.classList.remove(u, d),
              s.classList.add("active"),
              r.classList.remove("active", d, u),
              (this._isSliding = !1),
              setTimeout(f, 0);
          };
          this._queueCallback(e, r, !0);
        } else r.classList.remove("active"), s.classList.add("active"), (this._isSliding = !1), f();
        l && this.cycle();
      }
      _directionToOrder(e) {
        return [Z, G].includes(e)
          ? y()
            ? e === G
              ? K
              : Q
            : e === G
            ? Q
            : K
          : e;
      }
      _orderToDirection(e) {
        return [Q, K].includes(e)
          ? y()
            ? e === K
              ? G
              : Z
            : e === K
            ? Z
            : G
          : e;
      }
      static carouselInterface(e, t) {
        const n = ee.getOrCreateInstance(e, t);
        let { _config: i } = n;
        "object" == typeof t && (i = { ...i, ...t });
        const r = "string" == typeof t ? t : i.slide;
        if ("number" == typeof t) n.to(t);
        else if ("string" == typeof r) {
          if (void 0 === n[r]) throw new TypeError(`No method named "${r}"`);
          n[r]();
        } else i.interval && i.ride && (n.pause(), n.cycle());
      }
      static jQueryInterface(e) {
        return this.each(function () {
          ee.carouselInterface(this, e);
        });
      }
      static dataApiClickHandler(e) {
        const t = s(this);
        if (!t || !t.classList.contains("carousel")) return;
        const n = { ...U.getDataAttributes(t), ...U.getDataAttributes(this) },
          i = this.getAttribute("data-bs-slide-to");
        i && (n.interval = !1),
          ee.carouselInterface(t, n),
          i && ee.getInstance(t).to(i),
          e.preventDefault();
      }
    }
    I.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      ee.dataApiClickHandler
    ),
      I.on(window, "load.bs.carousel.data-api", () => {
        const e = n.find('[data-bs-ride="carousel"]');
        for (let t = 0, n = e.length; t < n; t++)
          ee.carouselInterface(e[t], ee.getInstance(e[t]));
      }),
      b(ee);
    const te = { toggle: !0, parent: "" },
      ne = { toggle: "boolean", parent: "(string|element)" };
    class ie extends R {
      constructor(e, t) {
        super(e),
          (this._isTransitioning = !1),
          (this._config = this._getConfig(t)),
          (this._triggerArray = n.find(
            `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
          ));
        const i = n.find('[data-bs-toggle="collapse"]');
        for (let e = 0, t = i.length; e < t; e++) {
          const t = i[e],
            r = o(t),
            s = n.find(r).filter((e) => e === this._element);
          null !== r &&
            s.length &&
            ((this._selector = r), this._triggerArray.push(t));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return te;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._element.classList.contains("show"))
          return;
        let e, t;
        this._parent &&
          ((e = n
            .find(".show, .collapsing", this._parent)
            .filter((e) =>
              "string" == typeof this._config.parent
                ? e.getAttribute("data-bs-parent") === this._config.parent
                : e.classList.contains("collapse")
            )),
          0 === e.length && (e = null));
        const i = n.findOne(this._selector);
        if (e) {
          const n = e.find((e) => i !== e);
          if (((t = n ? ie.getInstance(n) : null), t && t._isTransitioning))
            return;
        }
        if (I.trigger(this._element, "show.bs.collapse").defaultPrevented)
          return;
        e &&
          e.forEach((e) => {
            i !== e && ie.collapseInterface(e, "hide"),
              t || F.set(e, "bs.collapse", null);
          });
        const r = this._getDimension();
        this._element.classList.remove("collapse"),
          this._element.classList.add("collapsing"),
          (this._element.style[r] = 0),
          this._triggerArray.length &&
            this._triggerArray.forEach((e) => {
              e.classList.remove("collapsed"),
                e.setAttribute("aria-expanded", !0);
            }),
          this.setTransitioning(!0);
        const o = "scroll" + (r[0].toUpperCase() + r.slice(1));
        this._queueCallback(
          () => {
            this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse", "show"),
              (this._element.style[r] = ""),
              this.setTransitioning(!1),
              I.trigger(this._element, "shown.bs.collapse");
          },
          this._element,
          !0
        ),
          (this._element.style[r] = this._element[o] + "px");
      }
      hide() {
        if (this._isTransitioning || !this._element.classList.contains("show"))
          return;
        if (I.trigger(this._element, "hide.bs.collapse").defaultPrevented)
          return;
        const e = this._getDimension();
        (this._element.style[e] =
          this._element.getBoundingClientRect()[e] + "px"),
          m(this._element),
          this._element.classList.add("collapsing"),
          this._element.classList.remove("collapse", "show");
        const t = this._triggerArray.length;
        if (t > 0)
          for (let e = 0; e < t; e++) {
            const t = this._triggerArray[e],
              n = s(t);
            n &&
              !n.classList.contains("show") &&
              (t.classList.add("collapsed"),
              t.setAttribute("aria-expanded", !1));
          }
        this.setTransitioning(!0),
          (this._element.style[e] = ""),
          this._queueCallback(
            () => {
              this.setTransitioning(!1),
                this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse"),
                I.trigger(this._element, "hidden.bs.collapse");
            },
            this._element,
            !0
          );
      }
      setTransitioning(e) {
        this._isTransitioning = e;
      }
      _getConfig(e) {
        return (
          ((e = { ...te, ...e }).toggle = Boolean(e.toggle)),
          u("collapse", e, ne),
          e
        );
      }
      _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
      _getParent() {
        let { parent: e } = this._config;
        e = c(e);
        const t = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
        return (
          n.find(t, e).forEach((e) => {
            const t = s(e);
            this._addAriaAndCollapsedClass(t, [e]);
          }),
          e
        );
      }
      _addAriaAndCollapsedClass(e, t) {
        if (!e || !t.length) return;
        const n = e.classList.contains("show");
        t.forEach((e) => {
          n ? e.classList.remove("collapsed") : e.classList.add("collapsed"),
            e.setAttribute("aria-expanded", n);
        });
      }
      static collapseInterface(e, t) {
        let n = ie.getInstance(e);
        const i = {
          ...te,
          ...U.getDataAttributes(e),
          ...("object" == typeof t && t ? t : {}),
        };
        if (
          (!n &&
            i.toggle &&
            "string" == typeof t &&
            /show|hide/.test(t) &&
            (i.toggle = !1),
          n || (n = new ie(e, i)),
          "string" == typeof t)
        ) {
          if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
          n[t]();
        }
      }
      static jQueryInterface(e) {
        return this.each(function () {
          ie.collapseInterface(this, e);
        });
      }
    }
    I.on(
      document,
      "click.bs.collapse.data-api",
      '[data-bs-toggle="collapse"]',
      function (e) {
        ("A" === e.target.tagName ||
          (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
          e.preventDefault();
        const t = U.getDataAttributes(this),
          i = o(this);
        n.find(i).forEach((e) => {
          const n = ie.getInstance(e);
          let i;
          n
            ? (null === n._parent &&
                "string" == typeof t.parent &&
                ((n._config.parent = t.parent), (n._parent = n._getParent())),
              (i = "toggle"))
            : (i = t),
            ie.collapseInterface(e, i);
        });
      }
    ),
      b(ie);
    const re = new RegExp("ArrowUp|ArrowDown|Escape"),
      oe = y() ? "top-end" : "top-start",
      se = y() ? "top-start" : "top-end",
      ae = y() ? "bottom-end" : "bottom-start",
      le = y() ? "bottom-start" : "bottom-end",
      ce = y() ? "left-start" : "right-start",
      ue = y() ? "right-start" : "left-start",
      de = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0,
      },
      pe = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)",
      };
    class fe extends R {
      constructor(e, t) {
        super(e),
          (this._popper = null),
          (this._config = this._getConfig(t)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      static get Default() {
        return de;
      }
      static get DefaultType() {
        return pe;
      }
      static get NAME() {
        return "dropdown";
      }
      toggle() {
        p(this._element) ||
          (this._element.classList.contains("show")
            ? this.hide()
            : this.show());
      }
      show() {
        if (p(this._element) || this._menu.classList.contains("show")) return;
        const e = fe.getParentFromElement(this._element),
          n = { relatedTarget: this._element };
        if (!I.trigger(this._element, "show.bs.dropdown", n).defaultPrevented) {
          if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");
          else {
            if (void 0 === t)
              throw new TypeError(
                "Bootstrap's dropdowns require Popper (https://popper.js.org)"
              );
            let n = this._element;
            "parent" === this._config.reference
              ? (n = e)
              : l(this._config.reference)
              ? (n = c(this._config.reference))
              : "object" == typeof this._config.reference &&
                (n = this._config.reference);
            const i = this._getPopperConfig(),
              r = i.modifiers.find(
                (e) => "applyStyles" === e.name && !1 === e.enabled
              );
            (this._popper = t.createPopper(n, this._menu, i)),
              r && U.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement &&
            !e.closest(".navbar-nav") &&
            []
              .concat(...document.body.children)
              .forEach((e) => I.on(e, "mouseover", h)),
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.toggle("show"),
            this._element.classList.toggle("show"),
            I.trigger(this._element, "shown.bs.dropdown", n);
        }
      }
      hide() {
        if (p(this._element) || !this._menu.classList.contains("show")) return;
        const e = { relatedTarget: this._element };
        this._completeHide(e);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _addEventListeners() {
        I.on(this._element, "click.bs.dropdown", (e) => {
          e.preventDefault(), this.toggle();
        });
      }
      _completeHide(e) {
        I.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
          ("ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((e) => I.off(e, "mouseover", h)),
          this._popper && this._popper.destroy(),
          this._menu.classList.remove("show"),
          this._element.classList.remove("show"),
          this._element.setAttribute("aria-expanded", "false"),
          U.removeDataAttribute(this._menu, "popper"),
          I.trigger(this._element, "hidden.bs.dropdown", e));
      }
      _getConfig(e) {
        if (
          ((e = {
            ...this.constructor.Default,
            ...U.getDataAttributes(this._element),
            ...e,
          }),
          u("dropdown", e, this.constructor.DefaultType),
          "object" == typeof e.reference &&
            !l(e.reference) &&
            "function" != typeof e.reference.getBoundingClientRect)
        )
          throw new TypeError(
            "dropdown".toUpperCase() +
              ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
          );
        return e;
      }
      _getMenuElement() {
        return n.next(this._element, ".dropdown-menu")[0];
      }
      _getPlacement() {
        const e = this._element.parentNode;
        if (e.classList.contains("dropend")) return ce;
        if (e.classList.contains("dropstart")) return ue;
        const t =
          "end" ===
          getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return e.classList.contains("dropup") ? (t ? se : oe) : t ? le : ae;
      }
      _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
      _getOffset() {
        const { offset: e } = this._config;
        return "string" == typeof e
          ? e.split(",").map((e) => Number.parseInt(e, 10))
          : "function" == typeof e
          ? (t) => e(t, this._element)
          : e;
      }
      _getPopperConfig() {
        const e = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          "static" === this._config.display &&
            (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
          {
            ...e,
            ...("function" == typeof this._config.popperConfig
              ? this._config.popperConfig(e)
              : this._config.popperConfig),
          }
        );
      }
      _selectMenuItem({ key: e, target: t }) {
        const i = n
          .find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          )
          .filter(d);
        i.length && x(i, t, "ArrowDown" === e, !i.includes(t)).focus();
      }
      static dropdownInterface(e, t) {
        const n = fe.getOrCreateInstance(e, t);
        if ("string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
          n[t]();
        }
      }
      static jQueryInterface(e) {
        return this.each(function () {
          fe.dropdownInterface(this, e);
        });
      }
      static clearMenus(e) {
        if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)))
          return;
        const t = n.find('[data-bs-toggle="dropdown"]');
        for (let n = 0, i = t.length; n < i; n++) {
          const i = fe.getInstance(t[n]);
          if (!i || !1 === i._config.autoClose) continue;
          if (!i._element.classList.contains("show")) continue;
          const r = { relatedTarget: i._element };
          if (e) {
            const t = e.composedPath(),
              n = t.includes(i._menu);
            if (
              t.includes(i._element) ||
              ("inside" === i._config.autoClose && !n) ||
              ("outside" === i._config.autoClose && n)
            )
              continue;
            if (
              i._menu.contains(e.target) &&
              (("keyup" === e.type && "Tab" === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName))
            )
              continue;
            "click" === e.type && (r.clickEvent = e);
          }
          i._completeHide(r);
        }
      }
      static getParentFromElement(e) {
        return s(e) || e.parentNode;
      }
      static dataApiKeydownHandler(e) {
        if (
          /input|textarea/i.test(e.target.tagName)
            ? "Space" === e.key ||
              ("Escape" !== e.key &&
                (("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
                  e.target.closest(".dropdown-menu")))
            : !re.test(e.key)
        )
          return;
        const t = this.classList.contains("show");
        if (!t && "Escape" === e.key) return;
        if ((e.preventDefault(), e.stopPropagation(), p(this))) return;
        const i = () =>
          this.matches('[data-bs-toggle="dropdown"]')
            ? this
            : n.prev(this, '[data-bs-toggle="dropdown"]')[0];
        return "Escape" === e.key
          ? (i().focus(), void fe.clearMenus())
          : "ArrowUp" === e.key || "ArrowDown" === e.key
          ? (t || i().click(), void fe.getInstance(i())._selectMenuItem(e))
          : void ((t && "Space" !== e.key) || fe.clearMenus());
      }
    }
    I.on(
      document,
      "keydown.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      fe.dataApiKeydownHandler
    ),
      I.on(
        document,
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        fe.dataApiKeydownHandler
      ),
      I.on(document, "click.bs.dropdown.data-api", fe.clearMenus),
      I.on(document, "keyup.bs.dropdown.data-api", fe.clearMenus),
      I.on(
        document,
        "click.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        function (e) {
          e.preventDefault(), fe.dropdownInterface(this);
        }
      ),
      b(fe);
    class he {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }
      hide() {
        const e = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(
            this._element,
            "paddingRight",
            (t) => t + e
          ),
          this._setElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight",
            (t) => t + e
          ),
          this._setElementAttributes(
            ".sticky-top",
            "marginRight",
            (t) => t - e
          );
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(e, t, n) {
        const i = this.getWidth();
        this._applyManipulationCallback(e, (e) => {
          if (e !== this._element && window.innerWidth > e.clientWidth + i)
            return;
          this._saveInitialAttribute(e, t);
          const r = window.getComputedStyle(e)[t];
          e.style[t] = n(Number.parseFloat(r)) + "px";
        });
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, "paddingRight"),
          this._resetElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight"
          ),
          this._resetElementAttributes(".sticky-top", "marginRight");
      }
      _saveInitialAttribute(e, t) {
        const n = e.style[t];
        n && U.setDataAttribute(e, t, n);
      }
      _resetElementAttributes(e, t) {
        this._applyManipulationCallback(e, (e) => {
          const n = U.getDataAttribute(e, t);
          void 0 === n
            ? e.style.removeProperty(t)
            : (U.removeDataAttribute(e, t), (e.style[t] = n));
        });
      }
      _applyManipulationCallback(e, t) {
        l(e) ? t(e) : n.find(e, this._element).forEach(t);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
    }
    const me = {
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null,
      },
      ge = {
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)",
      };
    class ve {
      constructor(e) {
        (this._config = this._getConfig(e)),
          (this._isAppended = !1),
          (this._element = null);
      }
      show(e) {
        this._config.isVisible
          ? (this._append(),
            this._config.isAnimated && m(this._getElement()),
            this._getElement().classList.add("show"),
            this._emulateAnimation(() => {
              w(e);
            }))
          : w(e);
      }
      hide(e) {
        this._config.isVisible
          ? (this._getElement().classList.remove("show"),
            this._emulateAnimation(() => {
              this.dispose(), w(e);
            }))
          : w(e);
      }
      _getElement() {
        if (!this._element) {
          const e = document.createElement("div");
          (e.className = "modal-backdrop"),
            this._config.isAnimated && e.classList.add("fade"),
            (this._element = e);
        }
        return this._element;
      }
      _getConfig(e) {
        return (
          ((e = { ...me, ...("object" == typeof e ? e : {}) }).rootElement = c(
            e.rootElement
          )),
          u("backdrop", e, ge),
          e
        );
      }
      _append() {
        this._isAppended ||
          (this._config.rootElement.appendChild(this._getElement()),
          I.on(this._getElement(), "mousedown.bs.backdrop", () => {
            w(this._config.clickCallback);
          }),
          (this._isAppended = !0));
      }
      dispose() {
        this._isAppended &&
          (I.off(this._element, "mousedown.bs.backdrop"),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _emulateAnimation(e) {
        _(e, this._getElement(), this._config.isAnimated);
      }
    }
    const ye = { backdrop: !0, keyboard: !0, focus: !0 },
      be = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
      };
    class we extends R {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._dialog = n.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._isShown = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new he());
      }
      static get Default() {
        return ye;
      }
      static get NAME() {
        return "modal";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          this._isTransitioning ||
          I.trigger(this._element, "show.bs.modal", { relatedTarget: e })
            .defaultPrevented ||
          ((this._isShown = !0),
          this._isAnimated() && (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add("modal-open"),
          this._adjustDialog(),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          I.on(
            this._element,
            "click.dismiss.bs.modal",
            '[data-bs-dismiss="modal"]',
            (e) => this.hide(e)
          ),
          I.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
            I.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
              e.target === this._element && (this._ignoreBackdropClick = !0);
            });
          }),
          this._showBackdrop(() => this._showElement(e)));
      }
      hide(e) {
        if (
          (e && ["A", "AREA"].includes(e.target.tagName) && e.preventDefault(),
          !this._isShown || this._isTransitioning)
        )
          return;
        if (I.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;
        const t = this._isAnimated();
        t && (this._isTransitioning = !0),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          I.off(document, "focusin.bs.modal"),
          this._element.classList.remove("show"),
          I.off(this._element, "click.dismiss.bs.modal"),
          I.off(this._dialog, "mousedown.dismiss.bs.modal"),
          this._queueCallback(() => this._hideModal(), this._element, t);
      }
      dispose() {
        [window, this._dialog].forEach((e) => I.off(e, ".bs.modal")),
          this._backdrop.dispose(),
          super.dispose(),
          I.off(document, "focusin.bs.modal");
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new ve({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated(),
        });
      }
      _getConfig(e) {
        return (
          (e = {
            ...ye,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          u("modal", e, be),
          e
        );
      }
      _showElement(e) {
        const t = this._isAnimated(),
          i = n.findOne(".modal-body", this._dialog);
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
          document.body.appendChild(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0),
          i && (i.scrollTop = 0),
          t && m(this._element),
          this._element.classList.add("show"),
          this._config.focus && this._enforceFocus(),
          this._queueCallback(
            () => {
              this._config.focus && this._element.focus(),
                (this._isTransitioning = !1),
                I.trigger(this._element, "shown.bs.modal", {
                  relatedTarget: e,
                });
            },
            this._dialog,
            t
          );
      }
      _enforceFocus() {
        I.off(document, "focusin.bs.modal"),
          I.on(document, "focusin.bs.modal", (e) => {
            document === e.target ||
              this._element === e.target ||
              this._element.contains(e.target) ||
              this._element.focus();
          });
      }
      _setEscapeEvent() {
        this._isShown
          ? I.on(this._element, "keydown.dismiss.bs.modal", (e) => {
              this._config.keyboard && "Escape" === e.key
                ? (e.preventDefault(), this.hide())
                : this._config.keyboard ||
                  "Escape" !== e.key ||
                  this._triggerBackdropTransition();
            })
          : I.off(this._element, "keydown.dismiss.bs.modal");
      }
      _setResizeEvent() {
        this._isShown
          ? I.on(window, "resize.bs.modal", () => this._adjustDialog())
          : I.off(window, "resize.bs.modal");
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove("modal-open"),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              I.trigger(this._element, "hidden.bs.modal");
          });
      }
      _showBackdrop(e) {
        I.on(this._element, "click.dismiss.bs.modal", (e) => {
          this._ignoreBackdropClick
            ? (this._ignoreBackdropClick = !1)
            : e.target === e.currentTarget &&
              (!0 === this._config.backdrop
                ? this.hide()
                : "static" === this._config.backdrop &&
                  this._triggerBackdropTransition());
        }),
          this._backdrop.show(e);
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (I.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const { classList: e, scrollHeight: t, style: n } = this._element,
          i = t > document.documentElement.clientHeight;
        (!i && "hidden" === n.overflowY) ||
          e.contains("modal-static") ||
          (i || (n.overflowY = "hidden"),
          e.add("modal-static"),
          this._queueCallback(() => {
            e.remove("modal-static"),
              i ||
                this._queueCallback(() => {
                  n.overflowY = "";
                }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const e =
            this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          n = t > 0;
        ((!n && e && !y()) || (n && !e && y())) &&
          (this._element.style.paddingLeft = t + "px"),
          ((n && !e && !y()) || (!n && e && y())) &&
            (this._element.style.paddingRight = t + "px");
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(e, t) {
        return this.each(function () {
          const n = we.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
            n[e](t);
          }
        });
      }
    }
    I.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (e) {
        const t = s(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          I.one(t, "show.bs.modal", (e) => {
            e.defaultPrevented ||
              I.one(t, "hidden.bs.modal", () => {
                d(this) && this.focus();
              });
          }),
          we.getOrCreateInstance(t).toggle(this);
      }
    ),
      b(we);
    const _e = { backdrop: !0, keyboard: !0, scroll: !1 },
      xe = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
    class Te extends R {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          this._addEventListeners();
      }
      static get NAME() {
        return "offcanvas";
      }
      static get Default() {
        return _e;
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          I.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
            .defaultPrevented ||
          ((this._isShown = !0),
          (this._element.style.visibility = "visible"),
          this._backdrop.show(),
          this._config.scroll ||
            (new he().hide(), this._enforceFocusOnElement(this._element)),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add("show"),
          this._queueCallback(
            () => {
              I.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: e,
              });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (I.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
            (I.off(document, "focusin.bs.offcanvas"),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.remove("show"),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  (this._element.style.visibility = "hidden"),
                  this._config.scroll || new he().reset(),
                  I.trigger(this._element, "hidden.bs.offcanvas");
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(),
          super.dispose(),
          I.off(document, "focusin.bs.offcanvas");
      }
      _getConfig(e) {
        return (
          (e = {
            ..._e,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          u("offcanvas", e, xe),
          e
        );
      }
      _initializeBackDrop() {
        return new ve({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: () => this.hide(),
        });
      }
      _enforceFocusOnElement(e) {
        I.off(document, "focusin.bs.offcanvas"),
          I.on(document, "focusin.bs.offcanvas", (t) => {
            document === t.target ||
              e === t.target ||
              e.contains(t.target) ||
              e.focus();
          }),
          e.focus();
      }
      _addEventListeners() {
        I.on(
          this._element,
          "click.dismiss.bs.offcanvas",
          '[data-bs-dismiss="offcanvas"]',
          () => this.hide()
        ),
          I.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
            this._config.keyboard && "Escape" === e.key && this.hide();
          });
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Te.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    I.on(
      document,
      "click.bs.offcanvas.data-api",
      '[data-bs-toggle="offcanvas"]',
      function (e) {
        const t = s(this);
        if (
          (["A", "AREA"].includes(this.tagName) && e.preventDefault(), p(this))
        )
          return;
        I.one(t, "hidden.bs.offcanvas", () => {
          d(this) && this.focus();
        });
        const i = n.findOne(".offcanvas.show");
        i && i !== t && Te.getInstance(i).hide(),
          Te.getOrCreateInstance(t).toggle(this);
      }
    ),
      I.on(window, "load.bs.offcanvas.data-api", () =>
        n
          .find(".offcanvas.show")
          .forEach((e) => Te.getOrCreateInstance(e).show())
      ),
      b(Te);
    const Ce = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      Se = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      ke =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Ee = (e, t) => {
        const n = e.nodeName.toLowerCase();
        if (t.includes(n))
          return (
            !Ce.has(n) || Boolean(Se.test(e.nodeValue) || ke.test(e.nodeValue))
          );
        const i = t.filter((e) => e instanceof RegExp);
        for (let e = 0, t = i.length; e < t; e++) if (i[e].test(n)) return !0;
        return !1;
      };
    function Ae(e, t, n) {
      if (!e.length) return e;
      if (n && "function" == typeof n) return n(e);
      const i = new window.DOMParser().parseFromString(e, "text/html"),
        r = Object.keys(t),
        o = [].concat(...i.body.querySelectorAll("*"));
      for (let e = 0, n = o.length; e < n; e++) {
        const n = o[e],
          i = n.nodeName.toLowerCase();
        if (!r.includes(i)) {
          n.remove();
          continue;
        }
        const s = [].concat(...n.attributes),
          a = [].concat(t["*"] || [], t[i] || []);
        s.forEach((e) => {
          Ee(e, a) || n.removeAttribute(e.nodeName);
        });
      }
      return i.body.innerHTML;
    }
    const De = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Oe = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Me = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)",
      },
      Le = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: y() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: y() ? "right" : "left",
      },
      je = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      $e = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
      };
    class Pe extends R {
      constructor(e, n) {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(e),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._config = this._getConfig(n)),
          (this.tip = null),
          this._setListeners();
      }
      static get Default() {
        return je;
      }
      static get NAME() {
        return "tooltip";
      }
      static get Event() {
        return $e;
      }
      static get DefaultType() {
        return Me;
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle(e) {
        if (this._isEnabled)
          if (e) {
            const t = this._initializeOnDelegatedTarget(e);
            (t._activeTrigger.click = !t._activeTrigger.click),
              t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
          } else {
            if (this.getTipElement().classList.contains("show"))
              return void this._leave(null, this);
            this._enter(null, this);
          }
      }
      dispose() {
        clearTimeout(this._timeout),
          I.off(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this.tip && this.tip.remove(),
          this._popper && this._popper.destroy(),
          super.dispose();
      }
      show() {
        if ("none" === this._element.style.display)
          throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        const e = I.trigger(this._element, this.constructor.Event.SHOW),
          n = f(this._element),
          r =
            null === n
              ? this._element.ownerDocument.documentElement.contains(
                  this._element
                )
              : n.contains(this._element);
        if (e.defaultPrevented || !r) return;
        const o = this.getTipElement(),
          s = i(this.constructor.NAME);
        o.setAttribute("id", s),
          this._element.setAttribute("aria-describedby", s),
          this.setContent(),
          this._config.animation && o.classList.add("fade");
        const a =
            "function" == typeof this._config.placement
              ? this._config.placement.call(this, o, this._element)
              : this._config.placement,
          l = this._getAttachment(a);
        this._addAttachmentClass(l);
        const { container: c } = this._config;
        F.set(o, this.constructor.DATA_KEY, this),
          this._element.ownerDocument.documentElement.contains(this.tip) ||
            (c.appendChild(o),
            I.trigger(this._element, this.constructor.Event.INSERTED)),
          this._popper
            ? this._popper.update()
            : (this._popper = t.createPopper(
                this._element,
                o,
                this._getPopperConfig(l)
              )),
          o.classList.add("show");
        const u =
          "function" == typeof this._config.customClass
            ? this._config.customClass()
            : this._config.customClass;
        u && o.classList.add(...u.split(" ")),
          "ontouchstart" in document.documentElement &&
            [].concat(...document.body.children).forEach((e) => {
              I.on(e, "mouseover", h);
            });
        const d = this.tip.classList.contains("fade");
        this._queueCallback(
          () => {
            const e = this._hoverState;
            (this._hoverState = null),
              I.trigger(this._element, this.constructor.Event.SHOWN),
              "out" === e && this._leave(null, this);
          },
          this.tip,
          d
        );
      }
      hide() {
        if (!this._popper) return;
        const e = this.getTipElement();
        if (
          I.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
        )
          return;
        e.classList.remove("show"),
          "ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((e) => I.off(e, "mouseover", h)),
          (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1);
        const t = this.tip.classList.contains("fade");
        this._queueCallback(
          () => {
            this._isWithActiveTrigger() ||
              ("show" !== this._hoverState && e.remove(),
              this._cleanTipClass(),
              this._element.removeAttribute("aria-describedby"),
              I.trigger(this._element, this.constructor.Event.HIDDEN),
              this._popper && (this._popper.destroy(), (this._popper = null)));
          },
          this.tip,
          t
        ),
          (this._hoverState = "");
      }
      update() {
        null !== this._popper && this._popper.update();
      }
      isWithContent() {
        return Boolean(this.getTitle());
      }
      getTipElement() {
        if (this.tip) return this.tip;
        const e = document.createElement("div");
        return (
          (e.innerHTML = this._config.template),
          (this.tip = e.children[0]),
          this.tip
        );
      }
      setContent() {
        const e = this.getTipElement();
        this.setElementContent(n.findOne(".tooltip-inner", e), this.getTitle()),
          e.classList.remove("fade", "show");
      }
      setElementContent(e, t) {
        if (null !== e)
          return l(t)
            ? ((t = c(t)),
              void (this._config.html
                ? t.parentNode !== e && ((e.innerHTML = ""), e.appendChild(t))
                : (e.textContent = t.textContent)))
            : void (this._config.html
                ? (this._config.sanitize &&
                    (t = Ae(
                      t,
                      this._config.allowList,
                      this._config.sanitizeFn
                    )),
                  (e.innerHTML = t))
                : (e.textContent = t));
      }
      getTitle() {
        let e = this._element.getAttribute("data-bs-original-title");
        return (
          e ||
            (e =
              "function" == typeof this._config.title
                ? this._config.title.call(this._element)
                : this._config.title),
          e
        );
      }
      updateAttachment(e) {
        return "right" === e ? "end" : "left" === e ? "start" : e;
      }
      _initializeOnDelegatedTarget(e, t) {
        const n = this.constructor.DATA_KEY;
        return (
          (t = t || F.get(e.delegateTarget, n)) ||
            ((t = new this.constructor(
              e.delegateTarget,
              this._getDelegateConfig()
            )),
            F.set(e.delegateTarget, n, t)),
          t
        );
      }
      _getOffset() {
        const { offset: e } = this._config;
        return "string" == typeof e
          ? e.split(",").map((e) => Number.parseInt(e, 10))
          : "function" == typeof e
          ? (t) => e(t, this._element)
          : e;
      }
      _getPopperConfig(e) {
        const t = {
          placement: e,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: (e) => this._handlePopperPlacementChange(e),
            },
          ],
          onFirstUpdate: (e) => {
            e.options.placement !== e.placement &&
              this._handlePopperPlacementChange(e);
          },
        };
        return {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        };
      }
      _addAttachmentClass(e) {
        this.getTipElement().classList.add(
          "bs-tooltip-" + this.updateAttachment(e)
        );
      }
      _getAttachment(e) {
        return Le[e.toUpperCase()];
      }
      _setListeners() {
        this._config.trigger.split(" ").forEach((e) => {
          if ("click" === e)
            I.on(
              this._element,
              this.constructor.Event.CLICK,
              this._config.selector,
              (e) => this.toggle(e)
            );
          else if ("manual" !== e) {
            const t =
                "hover" === e
                  ? this.constructor.Event.MOUSEENTER
                  : this.constructor.Event.FOCUSIN,
              n =
                "hover" === e
                  ? this.constructor.Event.MOUSELEAVE
                  : this.constructor.Event.FOCUSOUT;
            I.on(this._element, t, this._config.selector, (e) =>
              this._enter(e)
            ),
              I.on(this._element, n, this._config.selector, (e) =>
                this._leave(e)
              );
          }
        }),
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
          I.on(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this._config.selector
            ? (this._config = {
                ...this._config,
                trigger: "manual",
                selector: "",
              })
            : this._fixTitle();
      }
      _fixTitle() {
        const e = this._element.getAttribute("title"),
          t = typeof this._element.getAttribute("data-bs-original-title");
        (e || "string" !== t) &&
          (this._element.setAttribute("data-bs-original-title", e || ""),
          !e ||
            this._element.getAttribute("aria-label") ||
            this._element.textContent ||
            this._element.setAttribute("aria-label", e),
          this._element.setAttribute("title", ""));
      }
      _enter(e, t) {
        (t = this._initializeOnDelegatedTarget(e, t)),
          e &&
            (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
          t.getTipElement().classList.contains("show") ||
          "show" === t._hoverState
            ? (t._hoverState = "show")
            : (clearTimeout(t._timeout),
              (t._hoverState = "show"),
              t._config.delay && t._config.delay.show
                ? (t._timeout = setTimeout(() => {
                    "show" === t._hoverState && t.show();
                  }, t._config.delay.show))
                : t.show());
      }
      _leave(e, t) {
        (t = this._initializeOnDelegatedTarget(e, t)),
          e &&
            (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] =
              t._element.contains(e.relatedTarget)),
          t._isWithActiveTrigger() ||
            (clearTimeout(t._timeout),
            (t._hoverState = "out"),
            t._config.delay && t._config.delay.hide
              ? (t._timeout = setTimeout(() => {
                  "out" === t._hoverState && t.hide();
                }, t._config.delay.hide))
              : t.hide());
      }
      _isWithActiveTrigger() {
        for (const e in this._activeTrigger)
          if (this._activeTrigger[e]) return !0;
        return !1;
      }
      _getConfig(e) {
        const t = U.getDataAttributes(this._element);
        return (
          Object.keys(t).forEach((e) => {
            Oe.has(e) && delete t[e];
          }),
          ((e = {
            ...this.constructor.Default,
            ...t,
            ...("object" == typeof e && e ? e : {}),
          }).container = !1 === e.container ? document.body : c(e.container)),
          "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          "number" == typeof e.title && (e.title = e.title.toString()),
          "number" == typeof e.content && (e.content = e.content.toString()),
          u("tooltip", e, this.constructor.DefaultType),
          e.sanitize &&
            (e.template = Ae(e.template, e.allowList, e.sanitizeFn)),
          e
        );
      }
      _getDelegateConfig() {
        const e = {};
        if (this._config)
          for (const t in this._config)
            this.constructor.Default[t] !== this._config[t] &&
              (e[t] = this._config[t]);
        return e;
      }
      _cleanTipClass() {
        const e = this.getTipElement(),
          t = e.getAttribute("class").match(De);
        null !== t &&
          t.length > 0 &&
          t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
      }
      _handlePopperPlacementChange(e) {
        const { state: t } = e;
        t &&
          ((this.tip = t.elements.popper),
          this._cleanTipClass(),
          this._addAttachmentClass(this._getAttachment(t.placement)));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Pe.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    b(Pe);
    const Ne = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      He = {
        ...Pe.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      },
      Ie = { ...Pe.DefaultType, content: "(string|element|function)" },
      qe = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
      };
    class Fe extends Pe {
      static get Default() {
        return He;
      }
      static get NAME() {
        return "popover";
      }
      static get Event() {
        return qe;
      }
      static get DefaultType() {
        return Ie;
      }
      isWithContent() {
        return this.getTitle() || this._getContent();
      }
      getTipElement() {
        return (
          this.tip ||
            ((this.tip = super.getTipElement()),
            this.getTitle() || n.findOne(".popover-header", this.tip).remove(),
            this._getContent() ||
              n.findOne(".popover-body", this.tip).remove()),
          this.tip
        );
      }
      setContent() {
        const e = this.getTipElement();
        this.setElementContent(
          n.findOne(".popover-header", e),
          this.getTitle()
        );
        let t = this._getContent();
        "function" == typeof t && (t = t.call(this._element)),
          this.setElementContent(n.findOne(".popover-body", e), t),
          e.classList.remove("fade", "show");
      }
      _addAttachmentClass(e) {
        this.getTipElement().classList.add(
          "bs-popover-" + this.updateAttachment(e)
        );
      }
      _getContent() {
        return (
          this._element.getAttribute("data-bs-content") || this._config.content
        );
      }
      _cleanTipClass() {
        const e = this.getTipElement(),
          t = e.getAttribute("class").match(Ne);
        null !== t &&
          t.length > 0 &&
          t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Fe.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    b(Fe);
    const Re = { offset: 10, method: "auto", target: "" },
      Be = { offset: "number", method: "string", target: "(string|element)" };
    class ze extends R {
      constructor(e, t) {
        super(e),
          (this._scrollElement =
            "BODY" === this._element.tagName ? window : this._element),
          (this._config = this._getConfig(t)),
          (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          I.on(this._scrollElement, "scroll.bs.scrollspy", () =>
            this._process()
          ),
          this.refresh(),
          this._process();
      }
      static get Default() {
        return Re;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        const e =
            this._scrollElement === this._scrollElement.window
              ? "offset"
              : "position",
          t = "auto" === this._config.method ? e : this._config.method,
          i = "position" === t ? this._getScrollTop() : 0;
        (this._offsets = []),
          (this._targets = []),
          (this._scrollHeight = this._getScrollHeight()),
          n
            .find(this._selector)
            .map((e) => {
              const r = o(e),
                s = r ? n.findOne(r) : null;
              if (s) {
                const e = s.getBoundingClientRect();
                if (e.width || e.height) return [U[t](s).top + i, r];
              }
              return null;
            })
            .filter((e) => e)
            .sort((e, t) => e[0] - t[0])
            .forEach((e) => {
              this._offsets.push(e[0]), this._targets.push(e[1]);
            });
      }
      dispose() {
        I.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
      }
      _getConfig(e) {
        if (
          "string" !=
            typeof (e = {
              ...Re,
              ...U.getDataAttributes(this._element),
              ...("object" == typeof e && e ? e : {}),
            }).target &&
          l(e.target)
        ) {
          let { id: t } = e.target;
          t || ((t = i("scrollspy")), (e.target.id = t)), (e.target = "#" + t);
        }
        return u("scrollspy", e, Be), e;
      }
      _getScrollTop() {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      }
      _getScrollHeight() {
        return (
          this._scrollElement.scrollHeight ||
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }
      _getOffsetHeight() {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      }
      _process() {
        const e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();
        if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
          const e = this._targets[this._targets.length - 1];
          this._activeTarget !== e && this._activate(e);
        } else {
          if (
            this._activeTarget &&
            e < this._offsets[0] &&
            this._offsets[0] > 0
          )
            return (this._activeTarget = null), void this._clear();
          for (let t = this._offsets.length; t--; )
            this._activeTarget !== this._targets[t] &&
              e >= this._offsets[t] &&
              (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) &&
              this._activate(this._targets[t]);
        }
      }
      _activate(e) {
        (this._activeTarget = e), this._clear();
        const t = this._selector
            .split(",")
            .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
          i = n.findOne(t.join(","));
        i.classList.contains("dropdown-item")
          ? (n
              .findOne(".dropdown-toggle", i.closest(".dropdown"))
              .classList.add("active"),
            i.classList.add("active"))
          : (i.classList.add("active"),
            n.parents(i, ".nav, .list-group").forEach((e) => {
              n
                .prev(e, ".nav-link, .list-group-item")
                .forEach((e) => e.classList.add("active")),
                n.prev(e, ".nav-item").forEach((e) => {
                  n.children(e, ".nav-link").forEach((e) =>
                    e.classList.add("active")
                  );
                });
            })),
          I.trigger(this._scrollElement, "activate.bs.scrollspy", {
            relatedTarget: e,
          });
      }
      _clear() {
        n.find(this._selector)
          .filter((e) => e.classList.contains("active"))
          .forEach((e) => e.classList.remove("active"));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = ze.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    I.on(window, "load.bs.scrollspy.data-api", () => {
      n.find('[data-bs-spy="scroll"]').forEach((e) => new ze(e));
    }),
      b(ze);
    class We extends R {
      static get NAME() {
        return "tab";
      }
      show() {
        if (
          this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          this._element.classList.contains("active")
        )
          return;
        let e;
        const t = s(this._element),
          i = this._element.closest(".nav, .list-group");
        if (i) {
          const t =
            "UL" === i.nodeName || "OL" === i.nodeName
              ? ":scope > li > .active"
              : ".active";
          (e = n.find(t, i)), (e = e[e.length - 1]);
        }
        const r = e
          ? I.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
          : null;
        if (
          I.trigger(this._element, "show.bs.tab", { relatedTarget: e })
            .defaultPrevented ||
          (null !== r && r.defaultPrevented)
        )
          return;
        this._activate(this._element, i);
        const o = () => {
          I.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
            I.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
        };
        t ? this._activate(t, t.parentNode, o) : o();
      }
      _activate(e, t, i) {
        const r = (
            !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
              ? n.children(t, ".active")
              : n.find(":scope > li > .active", t)
          )[0],
          o = i && r && r.classList.contains("fade"),
          s = () => this._transitionComplete(e, r, i);
        r && o
          ? (r.classList.remove("show"), this._queueCallback(s, e, !0))
          : s();
      }
      _transitionComplete(e, t, i) {
        if (t) {
          t.classList.remove("active");
          const e = n.findOne(":scope > .dropdown-menu .active", t.parentNode);
          e && e.classList.remove("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !1);
        }
        e.classList.add("active"),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !0),
          m(e),
          e.classList.contains("fade") && e.classList.add("show");
        let r = e.parentNode;
        if (
          (r && "LI" === r.nodeName && (r = r.parentNode),
          r && r.classList.contains("dropdown-menu"))
        ) {
          const t = e.closest(".dropdown");
          t &&
            n
              .find(".dropdown-toggle", t)
              .forEach((e) => e.classList.add("active")),
            e.setAttribute("aria-expanded", !0);
        }
        i && i();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = We.getOrCreateInstance(this);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    I.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          p(this) || We.getOrCreateInstance(this).show();
      }
    ),
      b(We);
    const Ye = { animation: "boolean", autohide: "boolean", delay: "number" },
      Ue = { animation: !0, autohide: !0, delay: 5e3 };
    class Xe extends R {
      constructor(e, t) {
        super(e),
          (this._config = this._getConfig(t)),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get DefaultType() {
        return Ye;
      }
      static get Default() {
        return Ue;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        I.trigger(this._element, "show.bs.toast").defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove("hide"),
          m(this._element),
          this._element.classList.add("showing"),
          this._queueCallback(
            () => {
              this._element.classList.remove("showing"),
                this._element.classList.add("show"),
                I.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this._element.classList.contains("show") &&
          (I.trigger(this._element, "hide.bs.toast").defaultPrevented ||
            (this._element.classList.remove("show"),
            this._queueCallback(
              () => {
                this._element.classList.add("hide"),
                  I.trigger(this._element, "hidden.bs.toast");
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this._element.classList.contains("show") &&
            this._element.classList.remove("show"),
          super.dispose();
      }
      _getConfig(e) {
        return (
          (e = {
            ...Ue,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {}),
          }),
          u("toast", e, this.constructor.DefaultType),
          e
        );
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(e, t) {
        switch (e.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = t;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = t;
        }
        if (t) return void this._clearTimeout();
        const n = e.relatedTarget;
        this._element === n ||
          this._element.contains(n) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        I.on(
          this._element,
          "click.dismiss.bs.toast",
          '[data-bs-dismiss="toast"]',
          () => this.hide()
        ),
          I.on(this._element, "mouseover.bs.toast", (e) =>
            this._onInteraction(e, !0)
          ),
          I.on(this._element, "mouseout.bs.toast", (e) =>
            this._onInteraction(e, !1)
          ),
          I.on(this._element, "focusin.bs.toast", (e) =>
            this._onInteraction(e, !0)
          ),
          I.on(this._element, "focusout.bs.toast", (e) =>
            this._onInteraction(e, !1)
          );
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Xe.getOrCreateInstance(this, e);
          if ("string" == typeof e) {
            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    return (
      b(Xe),
      {
        Alert: B,
        Button: z,
        Carousel: ee,
        Collapse: ie,
        Dropdown: fe,
        Modal: we,
        Offcanvas: Te,
        Popover: Fe,
        ScrollSpy: ze,
        Tab: We,
        Toast: Xe,
        Tooltip: Pe,
      }
    );
  }),
  (function (e) {
    const t = "has-child-dropdown-show";
    var n;
    (e.Dropdown.prototype.toggle =
      ((n = e.Dropdown.prototype.toggle),
      function () {
        document.querySelectorAll("." + t).forEach(function (e) {
          e.classList.remove(t);
        });
        let e = this._element
          .closest(".dropdown")
          .parentNode.closest(".dropdown");
        for (; e && e !== document; e = e.parentNode.closest(".dropdown"))
          e.classList.add(t);
        return n.call(this);
      })),
      document.querySelectorAll(".dropdown").forEach(function (e) {
        e.addEventListener("hide.bs.dropdown", function (e) {
          this.classList.contains(t) &&
            (this.classList.remove(t), e.preventDefault()),
            e.stopPropagation();
        });
      }),
      document
        .querySelectorAll(".dropdown-hover, .dropdown-hover-all .dropdown")
        .forEach(function (n) {
          n.addEventListener("mouseenter", function (i) {
            let r = i.target.querySelector(
              ':scope>[data-bs-toggle="dropdown"]'
            );
            r.classList.contains("show") ||
              (e.Dropdown.getOrCreateInstance(r).toggle(),
              n.classList.add(t),
              e.Dropdown.clearMenus());
          }),
            n.addEventListener("mouseleave", function (t) {
              let n = t.target.querySelector(
                ':scope>[data-bs-toggle="dropdown"]'
              );
              n.classList.contains("show") &&
                e.Dropdown.getOrCreateInstance(n).toggle();
            });
        });
  })(bootstrap),
  (function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var r = (t[i] = { i: i, l: !1, exports: {} });
      return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              i,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return i;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "/assets/js/"),
      n((n.s = "./src/js/index.js"));
  })({
    "./node_modules/gsap/CSSPlugin.js":
      /*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
      /*! exports provided: CSSPlugin, default, _getBBox, _createElement, checkPrefix */ function (
        e,
        t,
        n
      ) {
        "use strict";
        n.r(t),
          n.d(t, "CSSPlugin", function () {
            return ye;
          }),
          n.d(t, "default", function () {
            return ye;
          }),
          n.d(t, "_getBBox", function () {
            return F;
          }),
          n.d(t, "_createElement", function () {
            return j;
          }),
          n.d(t, "checkPrefix", function () {
            return N;
          });
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u = n(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js"),
          d = {},
          p = 180 / Math.PI,
          f = Math.PI / 180,
          h = Math.atan2,
          m = /([A-Z])/g,
          g = /(?:left|right|width|margin|padding|x)/i,
          v = /[\s,\(]\S/,
          y = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          b = function (e, t) {
            return t.set(
              t.t,
              t.p,
              Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
              t
            );
          },
          w = function (e, t) {
            return t.set(
              t.t,
              t.p,
              1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
              t
            );
          },
          _ = function (e, t) {
            return t.set(
              t.t,
              t.p,
              e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
              t
            );
          },
          x = function (e, t) {
            var n = t.s + t.c * e;
            t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
          },
          T = function (e, t) {
            return t.set(t.t, t.p, e ? t.e : t.b, t);
          },
          C = function (e, t) {
            return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
          },
          S = function (e, t, n) {
            return (e.style[t] = n);
          },
          k = function (e, t, n) {
            return e.style.setProperty(t, n);
          },
          E = function (e, t, n) {
            return (e._gsap[t] = n);
          },
          A = function (e, t, n) {
            return (e._gsap.scaleX = e._gsap.scaleY = n);
          },
          D = function (e, t, n, i, r) {
            var o = e._gsap;
            (o.scaleX = o.scaleY = n), o.renderTransform(r, o);
          },
          O = function (e, t, n, i, r) {
            var o = e._gsap;
            (o[t] = n), o.renderTransform(r, o);
          },
          M = "transform",
          L = M + "Origin",
          j = function (e, t) {
            var n = r.createElementNS
              ? r.createElementNS(
                  (t || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  e
                )
              : r.createElement(e);
            return n.style ? n : r.createElement(e);
          },
          $ = function e(t, n, i) {
            var r = getComputedStyle(t);
            return (
              r[n] ||
              r.getPropertyValue(n.replace(m, "-$1").toLowerCase()) ||
              r.getPropertyValue(n) ||
              (!i && e(t, N(n) || n, 1)) ||
              ""
            );
          },
          P = "O,Moz,ms,Ms,Webkit".split(","),
          N = function (e, t, n) {
            var i = (t || a).style,
              r = 5;
            if (e in i && !n) return e;
            for (
              e = e.charAt(0).toUpperCase() + e.substr(1);
              r-- && !(P[r] + e in i);

            );
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? P[r] : "") + e;
          },
          H = function () {
            "undefined" != typeof window &&
              window.document &&
              ((i = window),
              (r = i.document),
              (o = r.documentElement),
              (a = j("div") || { style: {} }),
              j("div"),
              (M = N(M)),
              (L = M + "Origin"),
              (a.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (c = !!N("perspective")),
              (s = 1));
          },
          I = function e(t) {
            var n,
              i = j(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              r = this.parentNode,
              s = this.nextSibling,
              a = this.style.cssText;
            if (
              (o.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              t)
            )
              try {
                (n = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = e);
              } catch (e) {}
            else this._gsapBBox && (n = this._gsapBBox());
            return (
              r && (s ? r.insertBefore(this, s) : r.appendChild(this)),
              o.removeChild(i),
              (this.style.cssText = a),
              n
            );
          },
          q = function (e, t) {
            for (var n = t.length; n--; )
              if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
          },
          F = function (e) {
            var t;
            try {
              t = e.getBBox();
            } catch (n) {
              t = I.call(e, !0);
            }
            return (
              (t && (t.width || t.height)) ||
                e.getBBox === I ||
                (t = I.call(e, !0)),
              !t || t.width || t.x || t.y
                ? t
                : {
                    x: +q(e, ["x", "cx", "x1"]) || 0,
                    y: +q(e, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          R = function (e) {
            return !(
              !e.getCTM ||
              (e.parentNode && !e.ownerSVGElement) ||
              !F(e)
            );
          },
          B = function (e, t) {
            if (t) {
              var n = e.style;
              t in d && t !== L && (t = M),
                n.removeProperty
                  ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                      (t = "-" + t),
                    n.removeProperty(t.replace(m, "-$1").toLowerCase()))
                  : n.removeAttribute(t);
            }
          },
          z = function (e, t, n, i, r, o) {
            var s = new u.PropTween(e._pt, t, n, 0, 1, o ? C : T);
            return (e._pt = s), (s.b = i), (s.e = r), e._props.push(n), s;
          },
          W = { deg: 1, rad: 1, turn: 1 },
          Y = function e(t, n, i, o) {
            var s,
              l,
              c,
              p,
              f = parseFloat(i) || 0,
              h = (i + "").trim().substr((f + "").length) || "px",
              m = a.style,
              v = g.test(n),
              y = "svg" === t.tagName.toLowerCase(),
              b = (y ? "client" : "offset") + (v ? "Width" : "Height"),
              w = 100,
              _ = "px" === o,
              x = "%" === o;
            return o === h || !f || W[o] || W[h]
              ? f
              : ("px" !== h && !_ && (f = e(t, n, i, "px")),
                (p = t.getCTM && R(t)),
                (!x && "%" !== h) || (!d[n] && !~n.indexOf("adius"))
                  ? ((m[v ? "width" : "height"] = w + (_ ? h : o)),
                    (l =
                      ~n.indexOf("adius") || ("em" === o && t.appendChild && !y)
                        ? t
                        : t.parentNode),
                    p && (l = (t.ownerSVGElement || {}).parentNode),
                    (l && l !== r && l.appendChild) || (l = r.body),
                    (c = l._gsap) &&
                    x &&
                    c.width &&
                    v &&
                    c.time === u._ticker.time
                      ? Object(u._round)((f / c.width) * w)
                      : ((x || "%" === h) && (m.position = $(t, "position")),
                        l === t && (m.position = "static"),
                        l.appendChild(a),
                        (s = a[b]),
                        l.removeChild(a),
                        (m.position = "absolute"),
                        v &&
                          x &&
                          (((c = Object(u._getCache)(l)).time = u._ticker.time),
                          (c.width = l[b])),
                        Object(u._round)(
                          _ ? (s * f) / w : s && f ? (w / s) * f : 0
                        )))
                  : ((s = p ? t.getBBox()[v ? "width" : "height"] : t[b]),
                    Object(u._round)(x ? (f / s) * w : (f / 100) * s)));
          },
          U = function (e, t, n, i) {
            var r;
            return (
              s || H(),
              t in y &&
                "transform" !== t &&
                ~(t = y[t]).indexOf(",") &&
                (t = t.split(",")[0]),
              d[t] && "transform" !== t
                ? ((r = ie(e, i)),
                  (r =
                    "transformOrigin" !== t
                      ? r[t]
                      : re($(e, L)) + " " + r.zOrigin + "px"))
                : (!(r = e.style[t]) ||
                    "auto" === r ||
                    i ||
                    ~(r + "").indexOf("calc(")) &&
                  (r =
                    (K[t] && K[t](e, t, n)) ||
                    $(e, t) ||
                    Object(u._getProperty)(e, t) ||
                    ("opacity" === t ? 1 : 0)),
              n && !~(r + "").trim().indexOf(" ") ? Y(e, t, r, n) + n : r
            );
          },
          X = function (e, t, n, i) {
            if (!n || "none" === n) {
              var r = N(t, e, 1),
                o = r && $(e, r, 1);
              o && o !== n
                ? ((t = r), (n = o))
                : "borderColor" === t && (n = $(e, "borderTopColor"));
            }
            var s,
              a,
              l,
              c,
              d,
              p,
              f,
              h,
              m,
              g,
              v,
              y,
              b = new u.PropTween(
                this._pt,
                e.style,
                t,
                0,
                1,
                u._renderComplexString
              ),
              w = 0,
              _ = 0;
            if (
              ((b.b = n),
              (b.e = i),
              (n += ""),
              "auto" === (i += "") &&
                ((e.style[t] = i), (i = $(e, t) || i), (e.style[t] = n)),
              (s = [n, i]),
              Object(u._colorStringFilter)(s),
              (i = s[1]),
              (l = (n = s[0]).match(u._numWithUnitExp) || []),
              (i.match(u._numWithUnitExp) || []).length)
            ) {
              for (; (a = u._numWithUnitExp.exec(i)); )
                (f = a[0]),
                  (m = i.substring(w, a.index)),
                  d
                    ? (d = (d + 1) % 5)
                    : ("rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5)) ||
                      (d = 1),
                  f !== (p = l[_++] || "") &&
                    ((c = parseFloat(p) || 0),
                    (v = p.substr((c + "").length)),
                    (y = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) &&
                      (f = f.substr(2)),
                    (h = parseFloat(f)),
                    (g = f.substr((h + "").length)),
                    (w = u._numWithUnitExp.lastIndex - g.length),
                    g ||
                      ((g = g || u._config.units[t] || v),
                      w === i.length && ((i += g), (b.e += g))),
                    v !== g && (c = Y(e, t, p, g) || 0),
                    (b._pt = {
                      _next: b._pt,
                      p: m || 1 === _ ? m : ",",
                      s: c,
                      c: y ? y * h : h - c,
                      m: (d && d < 4) || "zIndex" === t ? Math.round : 0,
                    }));
              b.c = w < i.length ? i.substring(w, i.length) : "";
            } else b.r = "display" === t && "none" === i ? C : T;
            return u._relExp.test(i) && (b.e = 0), (this._pt = b), b;
          },
          V = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          Q = function (e, t) {
            if (t.tween && t.tween._time === t.tween._dur) {
              var n,
                i,
                r,
                o = t.t,
                s = o.style,
                a = t.u,
                l = o._gsap;
              if ("all" === a || !0 === a) (s.cssText = ""), (i = 1);
              else
                for (r = (a = a.split(",")).length; --r > -1; )
                  (n = a[r]),
                    d[n] && ((i = 1), (n = "transformOrigin" === n ? L : M)),
                    B(o, n);
              i &&
                (B(o, M),
                l &&
                  (l.svg && o.removeAttribute("transform"),
                  ie(o, 1),
                  (l.uncache = 1)));
            }
          },
          K = {
            clearProps: function (e, t, n, i, r) {
              if ("isFromStart" !== r.data) {
                var o = (e._pt = new u.PropTween(e._pt, t, n, 0, 0, Q));
                return (
                  (o.u = i), (o.pr = -10), (o.tween = r), e._props.push(n), 1
                );
              }
            },
          },
          G = [1, 0, 0, 1, 0, 0],
          Z = {},
          J = function (e) {
            return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
          },
          ee = function (e) {
            var t = $(e, M);
            return J(t) ? G : t.substr(7).match(u._numExp).map(u._round);
          },
          te = function (e, t) {
            var n,
              i,
              r,
              s,
              a = e._gsap || Object(u._getCache)(e),
              l = e.style,
              c = ee(e);
            return a.svg && e.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (c = [
                  (r = e.transform.baseVal.consolidate().matrix).a,
                  r.b,
                  r.c,
                  r.d,
                  r.e,
                  r.f,
                ]).join(",")
                ? G
                : c
              : (c !== G ||
                  e.offsetParent ||
                  e === o ||
                  a.svg ||
                  ((r = l.display),
                  (l.display = "block"),
                  ((n = e.parentNode) && e.offsetParent) ||
                    ((s = 1), (i = e.nextSibling), o.appendChild(e)),
                  (c = ee(e)),
                  r ? (l.display = r) : B(e, "display"),
                  s &&
                    (i
                      ? n.insertBefore(e, i)
                      : n
                      ? n.appendChild(e)
                      : o.removeChild(e))),
                t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
          },
          ne = function (e, t, n, i, r, o) {
            var s,
              a,
              l,
              c = e._gsap,
              u = r || te(e, !0),
              d = c.xOrigin || 0,
              p = c.yOrigin || 0,
              f = c.xOffset || 0,
              h = c.yOffset || 0,
              m = u[0],
              g = u[1],
              v = u[2],
              y = u[3],
              b = u[4],
              w = u[5],
              _ = t.split(" "),
              x = parseFloat(_[0]) || 0,
              T = parseFloat(_[1]) || 0;
            n
              ? u !== G &&
                (a = m * y - g * v) &&
                ((l = x * (-g / a) + T * (m / a) - (m * w - g * b) / a),
                (x = x * (y / a) + T * (-v / a) + (v * w - y * b) / a),
                (T = l))
              : ((x =
                  (s = F(e)).x +
                  (~_[0].indexOf("%") ? (x / 100) * s.width : x)),
                (T =
                  s.y +
                  (~(_[1] || _[0]).indexOf("%") ? (T / 100) * s.height : T))),
              i || (!1 !== i && c.smooth)
                ? ((b = x - d),
                  (w = T - p),
                  (c.xOffset = f + (b * m + w * v) - b),
                  (c.yOffset = h + (b * g + w * y) - w))
                : (c.xOffset = c.yOffset = 0),
              (c.xOrigin = x),
              (c.yOrigin = T),
              (c.smooth = !!i),
              (c.origin = t),
              (c.originIsAbsolute = !!n),
              (e.style[L] = "0px 0px"),
              o &&
                (z(o, c, "xOrigin", d, x),
                z(o, c, "yOrigin", p, T),
                z(o, c, "xOffset", f, c.xOffset),
                z(o, c, "yOffset", h, c.yOffset)),
              e.setAttribute("data-svg-origin", x + " " + T);
          },
          ie = function (e, t) {
            var n = e._gsap || new u.GSCache(e);
            if ("x" in n && !t && !n.uncache) return n;
            var i,
              r,
              o,
              s,
              a,
              l,
              d,
              m,
              g,
              v,
              y,
              b,
              w,
              _,
              x,
              T,
              C,
              S,
              k,
              E,
              A,
              D,
              O,
              j,
              P,
              N,
              H,
              I,
              q,
              F,
              B,
              z,
              W = e.style,
              Y = n.scaleX < 0,
              U = "px",
              X = "deg",
              V = $(e, L) || "0";
            return (
              (i = r = o = l = d = m = g = v = y = 0),
              (s = a = 1),
              (n.svg = !(!e.getCTM || !R(e))),
              (_ = te(e, n.svg)),
              n.svg &&
                ((j = !n.uncache && !t && e.getAttribute("data-svg-origin")),
                ne(e, j || V, !!j || n.originIsAbsolute, !1 !== n.smooth, _)),
              (b = n.xOrigin || 0),
              (w = n.yOrigin || 0),
              _ !== G &&
                ((S = _[0]),
                (k = _[1]),
                (E = _[2]),
                (A = _[3]),
                (i = D = _[4]),
                (r = O = _[5]),
                6 === _.length
                  ? ((s = Math.sqrt(S * S + k * k)),
                    (a = Math.sqrt(A * A + E * E)),
                    (l = S || k ? h(k, S) * p : 0),
                    (g = E || A ? h(E, A) * p + l : 0) &&
                      (a *= Math.abs(Math.cos(g * f))),
                    n.svg &&
                      ((i -= b - (b * S + w * E)), (r -= w - (b * k + w * A))))
                  : ((z = _[6]),
                    (F = _[7]),
                    (H = _[8]),
                    (I = _[9]),
                    (q = _[10]),
                    (B = _[11]),
                    (i = _[12]),
                    (r = _[13]),
                    (o = _[14]),
                    (d = (x = h(z, q)) * p),
                    x &&
                      ((j = D * (T = Math.cos(-x)) + H * (C = Math.sin(-x))),
                      (P = O * T + I * C),
                      (N = z * T + q * C),
                      (H = D * -C + H * T),
                      (I = O * -C + I * T),
                      (q = z * -C + q * T),
                      (B = F * -C + B * T),
                      (D = j),
                      (O = P),
                      (z = N)),
                    (m = (x = h(-E, q)) * p),
                    x &&
                      ((T = Math.cos(-x)),
                      (B = A * (C = Math.sin(-x)) + B * T),
                      (S = j = S * T - H * C),
                      (k = P = k * T - I * C),
                      (E = N = E * T - q * C)),
                    (l = (x = h(k, S)) * p),
                    x &&
                      ((j = S * (T = Math.cos(x)) + k * (C = Math.sin(x))),
                      (P = D * T + O * C),
                      (k = k * T - S * C),
                      (O = O * T - D * C),
                      (S = j),
                      (D = P)),
                    d &&
                      Math.abs(d) + Math.abs(l) > 359.9 &&
                      ((d = l = 0), (m = 180 - m)),
                    (s = Object(u._round)(Math.sqrt(S * S + k * k + E * E))),
                    (a = Object(u._round)(Math.sqrt(O * O + z * z))),
                    (x = h(D, O)),
                    (g = Math.abs(x) > 2e-4 ? x * p : 0),
                    (y = B ? 1 / (B < 0 ? -B : B) : 0)),
                n.svg &&
                  ((j = e.getAttribute("transform")),
                  (n.forceCSS = e.setAttribute("transform", "") || !J($(e, M))),
                  j && e.setAttribute("transform", j))),
              Math.abs(g) > 90 &&
                Math.abs(g) < 270 &&
                (Y
                  ? ((s *= -1),
                    (g += l <= 0 ? 180 : -180),
                    (l += l <= 0 ? 180 : -180))
                  : ((a *= -1), (g += g <= 0 ? 180 : -180))),
              (n.x =
                i -
                ((n.xPercent =
                  i &&
                  (n.xPercent ||
                    (Math.round(e.offsetWidth / 2) === Math.round(-i)
                      ? -50
                      : 0)))
                  ? (e.offsetWidth * n.xPercent) / 100
                  : 0) +
                U),
              (n.y =
                r -
                ((n.yPercent =
                  r &&
                  (n.yPercent ||
                    (Math.round(e.offsetHeight / 2) === Math.round(-r)
                      ? -50
                      : 0)))
                  ? (e.offsetHeight * n.yPercent) / 100
                  : 0) +
                U),
              (n.z = o + U),
              (n.scaleX = Object(u._round)(s)),
              (n.scaleY = Object(u._round)(a)),
              (n.rotation = Object(u._round)(l) + X),
              (n.rotationX = Object(u._round)(d) + X),
              (n.rotationY = Object(u._round)(m) + X),
              (n.skewX = g + X),
              (n.skewY = v + X),
              (n.transformPerspective = y + U),
              (n.zOrigin = parseFloat(V.split(" ")[2]) || 0) && (W[L] = re(V)),
              (n.xOffset = n.yOffset = 0),
              (n.force3D = u._config.force3D),
              (n.renderTransform = n.svg ? de : c ? ue : se),
              (n.uncache = 0),
              n
            );
          },
          re = function (e) {
            return (e = e.split(" "))[0] + " " + e[1];
          },
          oe = function (e, t, n) {
            var i = Object(u.getUnit)(t);
            return (
              Object(u._round)(
                parseFloat(t) + parseFloat(Y(e, "x", n + "px", i))
              ) + i
            );
          },
          se = function (e, t) {
            (t.z = "0px"),
              (t.rotationY = t.rotationX = "0deg"),
              (t.force3D = 0),
              ue(e, t);
          },
          ae = "0deg",
          le = "0px",
          ce = ") ",
          ue = function (e, t) {
            var n = t || this,
              i = n.xPercent,
              r = n.yPercent,
              o = n.x,
              s = n.y,
              a = n.z,
              l = n.rotation,
              c = n.rotationY,
              u = n.rotationX,
              d = n.skewX,
              p = n.skewY,
              h = n.scaleX,
              m = n.scaleY,
              g = n.transformPerspective,
              v = n.force3D,
              y = n.target,
              b = n.zOrigin,
              w = "",
              _ = ("auto" === v && e && 1 !== e) || !0 === v;
            if (b && (u !== ae || c !== ae)) {
              var x,
                T = parseFloat(c) * f,
                C = Math.sin(T),
                S = Math.cos(T);
              (T = parseFloat(u) * f),
                (x = Math.cos(T)),
                (o = oe(y, o, C * x * -b)),
                (s = oe(y, s, -Math.sin(T) * -b)),
                (a = oe(y, a, S * x * -b + b));
            }
            g !== le && (w += "perspective(" + g + ce),
              (i || r) && (w += "translate(" + i + "%, " + r + "%) "),
              (_ || o !== le || s !== le || a !== le) &&
                (w +=
                  a !== le || _
                    ? "translate3d(" + o + ", " + s + ", " + a + ") "
                    : "translate(" + o + ", " + s + ce),
              l !== ae && (w += "rotate(" + l + ce),
              c !== ae && (w += "rotateY(" + c + ce),
              u !== ae && (w += "rotateX(" + u + ce),
              (d === ae && p === ae) || (w += "skew(" + d + ", " + p + ce),
              (1 === h && 1 === m) || (w += "scale(" + h + ", " + m + ce),
              (y.style[M] = w || "translate(0, 0)");
          },
          de = function (e, t) {
            var n,
              i,
              r,
              o,
              s,
              a = t || this,
              l = a.xPercent,
              c = a.yPercent,
              d = a.x,
              p = a.y,
              h = a.rotation,
              m = a.skewX,
              g = a.skewY,
              v = a.scaleX,
              y = a.scaleY,
              b = a.target,
              w = a.xOrigin,
              _ = a.yOrigin,
              x = a.xOffset,
              T = a.yOffset,
              C = a.forceCSS,
              S = parseFloat(d),
              k = parseFloat(p);
            (h = parseFloat(h)),
              (m = parseFloat(m)),
              (g = parseFloat(g)) && ((m += g = parseFloat(g)), (h += g)),
              h || m
                ? ((h *= f),
                  (m *= f),
                  (n = Math.cos(h) * v),
                  (i = Math.sin(h) * v),
                  (r = Math.sin(h - m) * -y),
                  (o = Math.cos(h - m) * y),
                  m &&
                    ((g *= f),
                    (s = Math.tan(m - g)),
                    (r *= s = Math.sqrt(1 + s * s)),
                    (o *= s),
                    g &&
                      ((s = Math.tan(g)),
                      (n *= s = Math.sqrt(1 + s * s)),
                      (i *= s))),
                  (n = Object(u._round)(n)),
                  (i = Object(u._round)(i)),
                  (r = Object(u._round)(r)),
                  (o = Object(u._round)(o)))
                : ((n = v), (o = y), (i = r = 0)),
              ((S && !~(d + "").indexOf("px")) ||
                (k && !~(p + "").indexOf("px"))) &&
                ((S = Y(b, "x", d, "px")), (k = Y(b, "y", p, "px"))),
              (w || _ || x || T) &&
                ((S = Object(u._round)(S + w - (w * n + _ * r) + x)),
                (k = Object(u._round)(k + _ - (w * i + _ * o) + T))),
              (l || c) &&
                ((s = b.getBBox()),
                (S = Object(u._round)(S + (l / 100) * s.width)),
                (k = Object(u._round)(k + (c / 100) * s.height))),
              (s =
                "matrix(" +
                n +
                "," +
                i +
                "," +
                r +
                "," +
                o +
                "," +
                S +
                "," +
                k +
                ")"),
              b.setAttribute("transform", s),
              C && (b.style[M] = s);
          },
          pe = function (e, t, n, i, r, o) {
            var s,
              a,
              l = 360,
              c = Object(u._isString)(r),
              d = parseFloat(r) * (c && ~r.indexOf("rad") ? p : 1),
              f = o ? d * o : d - i,
              h = i + f + "deg";
            return (
              c &&
                ("short" === (s = r.split("_")[1]) &&
                  (f %= l) !== f % 180 &&
                  (f += f < 0 ? l : -360),
                "cw" === s && f < 0
                  ? (f = ((f + 36e9) % l) - ~~(f / l) * l)
                  : "ccw" === s &&
                    f > 0 &&
                    (f = ((f - 36e9) % l) - ~~(f / l) * l)),
              (e._pt = a = new u.PropTween(e._pt, t, n, i, f, w)),
              (a.e = h),
              (a.u = "deg"),
              e._props.push(n),
              a
            );
          },
          fe = function (e, t) {
            for (var n in t) e[n] = t[n];
            return e;
          },
          he = function (e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              p = fe({}, n._gsap),
              f = n.style;
            for (r in (p.svg
              ? ((o = n.getAttribute("transform")),
                n.setAttribute("transform", ""),
                (f[M] = t),
                (i = ie(n, 1)),
                B(n, M),
                n.setAttribute("transform", o))
              : ((o = getComputedStyle(n)[M]),
                (f[M] = t),
                (i = ie(n, 1)),
                (f[M] = o)),
            d))
              (o = p[r]) !== (s = i[r]) &&
                "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) <
                  0 &&
                ((a =
                  Object(u.getUnit)(o) !== (c = Object(u.getUnit)(s))
                    ? Y(n, r, o, c)
                    : parseFloat(o)),
                (l = parseFloat(s)),
                (e._pt = new u.PropTween(e._pt, i, r, a, l - a, b)),
                (e._pt.u = c || 0),
                e._props.push(r));
            fe(i, p);
          };
        Object(u._forEachName)("padding,margin,Width,Radius", function (e, t) {
          var n = "Top",
            i = "Right",
            r = "Bottom",
            o = "Left",
            s = (t < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(
              function (n) {
                return t < 2 ? e + n : "border" + n + e;
              }
            );
          K[t > 1 ? "border" + e : e] = function (e, t, n, i, r) {
            var o, a;
            if (arguments.length < 4)
              return (
                (o = s.map(function (t) {
                  return U(e, t, n);
                })),
                5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
              );
            (o = (i + "").split(" ")),
              (a = {}),
              s.forEach(function (e, t) {
                return (a[e] = o[t] = o[t] || o[((t - 1) / 2) | 0]);
              }),
              e.init(t, a, r);
          };
        });
        var me,
          ge,
          ve,
          ye = {
            name: "css",
            register: H,
            targetTest: function (e) {
              return e.style && e.nodeType;
            },
            init: function (e, t, n, i, r) {
              var o,
                a,
                l,
                c,
                p,
                f,
                h,
                m,
                g,
                w,
                T,
                C,
                S,
                k,
                E,
                A,
                D,
                O,
                L,
                j = this._props,
                $ = e.style,
                P = n.vars.startAt;
              for (h in (s || H(), t))
                if (
                  "autoRound" !== h &&
                  ((a = t[h]),
                  !u._plugins[h] || !Object(u._checkPlugin)(h, t, n, i, e, r))
                )
                  if (
                    ((p = typeof a),
                    (f = K[h]),
                    "function" === p && (p = typeof (a = a.call(n, i, e, r))),
                    "string" === p &&
                      ~a.indexOf("random(") &&
                      (a = Object(u._replaceRandom)(a)),
                    f)
                  )
                    f(this, e, h, a, n) && (E = 1);
                  else if ("--" === h.substr(0, 2))
                    (o = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
                      (a += ""),
                      (u._colorExp.lastIndex = 0),
                      u._colorExp.test(o) ||
                        ((m = Object(u.getUnit)(o)),
                        (g = Object(u.getUnit)(a))),
                      g ? m !== g && (o = Y(e, h, o, g) + g) : m && (a += m),
                      this.add($, "setProperty", o, a, i, r, 0, 0, h);
                  else if ("undefined" !== p) {
                    if (
                      (P && h in P
                        ? ((o =
                            "function" == typeof P[h]
                              ? P[h].call(n, i, e, r)
                              : P[h]),
                          h in u._config.units &&
                            !Object(u.getUnit)(o) &&
                            (o += u._config.units[h]),
                          "=" === (o + "").charAt(1) && (o = U(e, h)))
                        : (o = U(e, h)),
                      (c = parseFloat(o)),
                      (w =
                        "string" === p && "=" === a.charAt(1)
                          ? +(a.charAt(0) + "1")
                          : 0) && (a = a.substr(2)),
                      (l = parseFloat(a)),
                      h in y &&
                        ("autoAlpha" === h &&
                          (1 === c &&
                            "hidden" === U(e, "visibility") &&
                            l &&
                            (c = 0),
                          z(
                            this,
                            $,
                            "visibility",
                            c ? "inherit" : "hidden",
                            l ? "inherit" : "hidden",
                            !l
                          )),
                        "scale" !== h &&
                          "transform" !== h &&
                          ~(h = y[h]).indexOf(",") &&
                          (h = h.split(",")[0])),
                      (T = h in d))
                    )
                      if (
                        (C ||
                          (((S = e._gsap).renderTransform &&
                            !t.parseTransform) ||
                            ie(e, t.parseTransform),
                          (k = !1 !== t.smoothOrigin && S.smooth),
                          ((C = this._pt =
                            new u.PropTween(
                              this._pt,
                              $,
                              M,
                              0,
                              1,
                              S.renderTransform,
                              S,
                              0,
                              -1
                            )).dep = 1)),
                        "scale" === h)
                      )
                        (this._pt = new u.PropTween(
                          this._pt,
                          S,
                          "scaleY",
                          S.scaleY,
                          w ? w * l : l - S.scaleY
                        )),
                          j.push("scaleY", h),
                          (h += "X");
                      else {
                        if ("transformOrigin" === h) {
                          (D = void 0),
                            (O = void 0),
                            (L = void 0),
                            (D = (A = a).split(" ")),
                            (O = D[0]),
                            (L = D[1] || "50%"),
                            ("top" !== O &&
                              "bottom" !== O &&
                              "left" !== L &&
                              "right" !== L) ||
                              ((A = O), (O = L), (L = A)),
                            (D[0] = V[O] || O),
                            (D[1] = V[L] || L),
                            (a = D.join(" ")),
                            S.svg
                              ? ne(e, a, 0, k, 0, this)
                              : ((g = parseFloat(a.split(" ")[2]) || 0) !==
                                  S.zOrigin &&
                                  z(this, S, "zOrigin", S.zOrigin, g),
                                z(this, $, h, re(o), re(a)));
                          continue;
                        }
                        if ("svgOrigin" === h) {
                          ne(e, a, 1, k, 0, this);
                          continue;
                        }
                        if (h in Z) {
                          pe(this, S, h, c, a, w);
                          continue;
                        }
                        if ("smoothOrigin" === h) {
                          z(this, S, "smooth", S.smooth, a);
                          continue;
                        }
                        if ("force3D" === h) {
                          S[h] = a;
                          continue;
                        }
                        if ("transform" === h) {
                          he(this, a, e);
                          continue;
                        }
                      }
                    else h in $ || (h = N(h) || h);
                    if (
                      T ||
                      ((l || 0 === l) && (c || 0 === c) && !v.test(a) && h in $)
                    )
                      l || (l = 0),
                        (m = (o + "").substr((c + "").length)) !==
                          (g =
                            Object(u.getUnit)(a) ||
                            (h in u._config.units ? u._config.units[h] : m)) &&
                          (c = Y(e, h, o, g)),
                        (this._pt = new u.PropTween(
                          this._pt,
                          T ? S : $,
                          h,
                          c,
                          w ? w * l : l - c,
                          T ||
                          ("px" !== g && "zIndex" !== h) ||
                          !1 === t.autoRound
                            ? b
                            : x
                        )),
                        (this._pt.u = g || 0),
                        m !== g && ((this._pt.b = o), (this._pt.r = _));
                    else if (h in $) X.call(this, e, h, o, a);
                    else {
                      if (!(h in e)) {
                        Object(u._missingPlugin)(h, a);
                        continue;
                      }
                      this.add(e, h, e[h], a, i, r);
                    }
                    j.push(h);
                  }
              E && Object(u._sortPropTweensByPriority)(this);
            },
            get: U,
            aliases: y,
            getSetter: function (e, t, n) {
              var i = y[t];
              return (
                i && i.indexOf(",") < 0 && (t = i),
                t in d && t !== L && (e._gsap.x || U(e, "x"))
                  ? n && l === n
                    ? "scale" === t
                      ? A
                      : E
                    : (l = n || {}) && ("scale" === t ? D : O)
                  : e.style && !Object(u._isUndefined)(e.style[t])
                  ? S
                  : ~t.indexOf("-")
                  ? k
                  : Object(u._getSetter)(e, t)
              );
            },
            core: { _removeProperty: B, _getMatrix: te },
          };
        (u.gsap.utils.checkPrefix = N),
          (me = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
          (ge = "rotation,rotationX,rotationY,skewX,skewY"),
          (ve = Object(u._forEachName)(
            me +
              "," +
              ge +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (e) {
              d[e] = 1;
            }
          )),
          Object(u._forEachName)(ge, function (e) {
            (u._config.units[e] = "deg"), (Z[e] = 1);
          }),
          (y[ve[13]] = me + "," + ge),
          Object(u._forEachName)(
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
            function (e) {
              var t = e.split(":");
              y[t[1]] = ve[t[0]];
            }
          ),
          Object(u._forEachName)(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (e) {
              u._config.units[e] = "px";
            }
          ),
          u.gsap.registerPlugin(ye);
      },
    "./node_modules/gsap/gsap-core.js":
      /*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
      /*! exports provided: GSCache, Animation, Timeline, Tween, PropTween, gsap, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ, TweenMax, TweenLite, TimelineMax, TimelineLite, default, wrap, wrapYoyo, distribute, random, snap, normalize, getUnit, clamp, splitColor, toArray, mapRange, pipe, unitize, interpolate, shuffle, _getProperty, _numExp, _numWithUnitExp, _isString, _isUndefined, _renderComplexString, _relExp, _setDefaults, _removeLinkedListItem, _forEachName, _sortPropTweensByPriority, _colorStringFilter, _replaceRandom, _checkPlugin, _plugins, _ticker, _config, _roundModifier, _round, _missingPlugin, _getSetter, _getCache, _colorExp */ function (
        e,
        t,
        n
      ) {
        "use strict";
        n.r(t),
          n.d(t, "GSCache", function () {
            return Qt;
          }),
          n.d(t, "Animation", function () {
            return Kt;
          }),
          n.d(t, "Timeline", function () {
            return Gt;
          }),
          n.d(t, "Tween", function () {
            return an;
          }),
          n.d(t, "PropTween", function () {
            return _n;
          }),
          n.d(t, "gsap", function () {
            return Sn;
          }),
          n.d(t, "Power0", function () {
            return kn;
          }),
          n.d(t, "Power1", function () {
            return En;
          }),
          n.d(t, "Power2", function () {
            return An;
          }),
          n.d(t, "Power3", function () {
            return Dn;
          }),
          n.d(t, "Power4", function () {
            return On;
          }),
          n.d(t, "Linear", function () {
            return Mn;
          }),
          n.d(t, "Quad", function () {
            return Ln;
          }),
          n.d(t, "Cubic", function () {
            return jn;
          }),
          n.d(t, "Quart", function () {
            return $n;
          }),
          n.d(t, "Quint", function () {
            return Pn;
          }),
          n.d(t, "Strong", function () {
            return Nn;
          }),
          n.d(t, "Elastic", function () {
            return Hn;
          }),
          n.d(t, "Back", function () {
            return In;
          }),
          n.d(t, "SteppedEase", function () {
            return qn;
          }),
          n.d(t, "Bounce", function () {
            return Fn;
          }),
          n.d(t, "Sine", function () {
            return Rn;
          }),
          n.d(t, "Expo", function () {
            return Bn;
          }),
          n.d(t, "Circ", function () {
            return zn;
          }),
          n.d(t, "TweenMax", function () {
            return an;
          }),
          n.d(t, "TweenLite", function () {
            return an;
          }),
          n.d(t, "TimelineMax", function () {
            return Gt;
          }),
          n.d(t, "TimelineLite", function () {
            return Gt;
          }),
          n.d(t, "default", function () {
            return Sn;
          }),
          n.d(t, "wrap", function () {
            return bt;
          }),
          n.d(t, "wrapYoyo", function () {
            return wt;
          }),
          n.d(t, "distribute", function () {
            return dt;
          }),
          n.d(t, "random", function () {
            return ht;
          }),
          n.d(t, "snap", function () {
            return ft;
          }),
          n.d(t, "normalize", function () {
            return vt;
          }),
          n.d(t, "getUnit", function () {
            return rt;
          }),
          n.d(t, "clamp", function () {
            return ot;
          }),
          n.d(t, "splitColor", function () {
            return Ot;
          }),
          n.d(t, "toArray", function () {
            return ct;
          }),
          n.d(t, "mapRange", function () {
            return xt;
          }),
          n.d(t, "pipe", function () {
            return mt;
          }),
          n.d(t, "unitize", function () {
            return gt;
          }),
          n.d(t, "interpolate", function () {
            return Tt;
          }),
          n.d(t, "shuffle", function () {
            return ut;
          }),
          n.d(t, "_getProperty", function () {
            return Te;
          }),
          n.d(t, "_numExp", function () {
            return ee;
          }),
          n.d(t, "_numWithUnitExp", function () {
            return te;
          }),
          n.d(t, "_isString", function () {
            return z;
          }),
          n.d(t, "_isUndefined", function () {
            return U;
          }),
          n.d(t, "_renderComplexString", function () {
            return mn;
          }),
          n.d(t, "_relExp", function () {
            return ie;
          }),
          n.d(t, "_setDefaults", function () {
            return Le;
          }),
          n.d(t, "_removeLinkedListItem", function () {
            return Ie;
          }),
          n.d(t, "_forEachName", function () {
            return Ce;
          }),
          n.d(t, "_sortPropTweensByPriority", function () {
            return wn;
          }),
          n.d(t, "_colorStringFilter", function () {
            return Pt;
          }),
          n.d(t, "_replaceRandom", function () {
            return _t;
          }),
          n.d(t, "_checkPlugin", function () {
            return tn;
          }),
          n.d(t, "_plugins", function () {
            return ge;
          }),
          n.d(t, "_ticker", function () {
            return Nt;
          }),
          n.d(t, "_config", function () {
            return j;
          }),
          n.d(t, "_roundModifier", function () {
            return pt;
          }),
          n.d(t, "_round", function () {
            return Se;
          }),
          n.d(t, "_missingPlugin", function () {
            return ce;
          }),
          n.d(t, "_getSetter", function () {
            return pn;
          }),
          n.d(t, "_getCache", function () {
            return xe;
          }),
          n.d(t, "_colorExp", function () {
            return jt;
          });
        function i(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function r(e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = t);
        }
        /*!
         * GSAP 3.6.1
         * https://greensock.com
         *
         * @license Copyright 2008-2021, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var o,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          m,
          g,
          v,
          y,
          b,
          w,
          _,
          x,
          T,
          C,
          S,
          k,
          E,
          A,
          D,
          O,
          M,
          L,
          j = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          $ = { duration: 0.5, overwrite: !1, delay: 0 },
          P = 1e8,
          N = 1e-8,
          H = 2 * Math.PI,
          I = H / 4,
          q = 0,
          F = Math.sqrt,
          R = Math.cos,
          B = Math.sin,
          z = function (e) {
            return "string" == typeof e;
          },
          W = function (e) {
            return "function" == typeof e;
          },
          Y = function (e) {
            return "number" == typeof e;
          },
          U = function (e) {
            return void 0 === e;
          },
          X = function (e) {
            return "object" == typeof e;
          },
          V = function (e) {
            return !1 !== e;
          },
          Q = function () {
            return "undefined" != typeof window;
          },
          K = function (e) {
            return W(e) || z(e);
          },
          G =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          Z = Array.isArray,
          J = /(?:-?\.?\d|\.)+/gi,
          ee = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          te = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          ne = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          ie = /[+-]=-?[.\d]+/,
          re = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
          oe = /[\d.+\-=]+(?:e[-+]\d*)*/i,
          se = {},
          ae = {},
          le = function (e) {
            return (ae = $e(e, se)) && Sn;
          },
          ce = function (e, t) {
            return console.warn(
              "Invalid property",
              e,
              "set to",
              t,
              "Missing plugin? gsap.registerPlugin()"
            );
          },
          ue = function (e, t) {
            return !t && console.warn(e);
          },
          de = function (e, t) {
            return (e && (se[e] = t) && ae && (ae[e] = t)) || se;
          },
          pe = function () {
            return 0;
          },
          fe = {},
          he = [],
          me = {},
          ge = {},
          ve = {},
          ye = 30,
          be = [],
          we = "",
          _e = function (e) {
            var t,
              n,
              i = e[0];
            if ((X(i) || W(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
              for (n = be.length; n-- && !be[n].targetTest(i); );
              t = be[n];
            }
            for (n = e.length; n--; )
              (e[n] && (e[n]._gsap || (e[n]._gsap = new Qt(e[n], t)))) ||
                e.splice(n, 1);
            return e;
          },
          xe = function (e) {
            return e._gsap || _e(ct(e))[0]._gsap;
          },
          Te = function (e, t, n) {
            return (n = e[t]) && W(n)
              ? e[t]()
              : (U(n) && e.getAttribute && e.getAttribute(t)) || n;
          },
          Ce = function (e, t) {
            return (e = e.split(",")).forEach(t) || e;
          },
          Se = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          ke = function (e, t) {
            for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
            return i < n;
          },
          Ee = function (e, t, n) {
            var i,
              r = Y(e[1]),
              o = (r ? 2 : 1) + (t < 2 ? 0 : 1),
              s = e[o];
            if ((r && (s.duration = e[1]), (s.parent = n), t)) {
              for (i = s; n && !("immediateRender" in i); )
                (i = n.vars.defaults || {}),
                  (n = V(n.vars.inherit) && n.parent);
              (s.immediateRender = V(i.immediateRender)),
                t < 2 ? (s.runBackwards = 1) : (s.startAt = e[o - 1]);
            }
            return s;
          },
          Ae = function () {
            var e,
              t,
              n = he.length,
              i = he.slice(0);
            for (me = {}, he.length = 0, e = 0; e < n; e++)
              (t = i[e]) &&
                t._lazy &&
                (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
          },
          De = function (e, t, n, i) {
            he.length && Ae(), e.render(t, n, i), he.length && Ae();
          },
          Oe = function (e) {
            var t = parseFloat(e);
            return (t || 0 === t) && (e + "").match(re).length < 2
              ? t
              : z(e)
              ? e.trim()
              : e;
          },
          Me = function (e) {
            return e;
          },
          Le = function (e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e;
          },
          je = function (e, t) {
            for (var n in t)
              n in e || "duration" === n || "ease" === n || (e[n] = t[n]);
          },
          $e = function (e, t) {
            for (var n in t) e[n] = t[n];
            return e;
          },
          Pe = function e(t, n) {
            for (var i in n)
              "__proto__" !== i &&
                "constructor" !== i &&
                "prototype" !== i &&
                (t[i] = X(n[i]) ? e(t[i] || (t[i] = {}), n[i]) : n[i]);
            return t;
          },
          Ne = function (e, t) {
            var n,
              i = {};
            for (n in e) n in t || (i[n] = e[n]);
            return i;
          },
          He = function (e) {
            var t = e.parent || s,
              n = e.keyframes ? je : Le;
            if (V(e.inherit))
              for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
            return e;
          },
          Ie = function (e, t, n, i) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var r = t._prev,
              o = t._next;
            r ? (r._next = o) : e[n] === t && (e[n] = o),
              o ? (o._prev = r) : e[i] === t && (e[i] = r),
              (t._next = t._prev = t.parent = null);
          },
          qe = function (e, t) {
            e.parent &&
              (!t || e.parent.autoRemoveChildren) &&
              e.parent.remove(e),
              (e._act = 0);
          },
          Fe = function (e, t) {
            if (e && (!t || t._end > e._dur || t._start < 0))
              for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
            return e;
          },
          Re = function e(t) {
            return !t || (t._ts && e(t.parent));
          },
          Be = function (e) {
            return e._repeat
              ? ze(e._tTime, (e = e.duration() + e._rDelay)) * e
              : 0;
          },
          ze = function (e, t) {
            var n = Math.floor((e /= t));
            return e && n === e ? n - 1 : n;
          },
          We = function (e, t) {
            return (
              (e - t._start) * t._ts +
              (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
            );
          },
          Ye = function (e) {
            return (e._end = Se(
              e._start + (e._tDur / Math.abs(e._ts || e._rts || N) || 0)
            ));
          },
          Ue = function (e, t) {
            var n = e._dp;
            return (
              n &&
                n.smoothChildTiming &&
                e._ts &&
                ((e._start = Se(
                  n._time -
                    (e._ts > 0
                      ? t / e._ts
                      : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
                )),
                Ye(e),
                n._dirty || Fe(n, e)),
              e
            );
          },
          Xe = function (e, t) {
            var n;
            if (
              ((t._time || (t._initted && !t._dur)) &&
                ((n = We(e.rawTime(), t)),
                (!t._dur || it(0, t.totalDuration(), n) - t._tTime > N) &&
                  t.render(n, !0)),
              Fe(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
            ) {
              if (e._dur < e.duration())
                for (n = e; n._dp; )
                  n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
              e._zTime = -1e-8;
            }
          },
          Ve = function (e, t, n, i) {
            return (
              t.parent && qe(t),
              (t._start = Se(n + t._delay)),
              (t._end = Se(
                t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
              )),
              (function (e, t, n, i, r) {
                void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                var o,
                  s = e[i];
                if (r) for (o = t[r]; s && s[r] > o; ) s = s._prev;
                s
                  ? ((t._next = s._next), (s._next = t))
                  : ((t._next = e[n]), (e[n] = t)),
                  t._next ? (t._next._prev = t) : (e[i] = t),
                  (t._prev = s),
                  (t.parent = t._dp = e);
              })(e, t, "_first", "_last", e._sort ? "_start" : 0),
              (e._recent = t),
              i || Xe(e, t),
              e
            );
          },
          Qe = function (e, t) {
            return (
              (se.ScrollTrigger || ce("scrollTrigger", t)) &&
              se.ScrollTrigger.create(t, e)
            );
          },
          Ke = function (e, t, n, i) {
            return (
              nn(e, t),
              e._initted
                ? !n &&
                  e._pt &&
                  ((e._dur && !1 !== e.vars.lazy) ||
                    (!e._dur && e.vars.lazy)) &&
                  d !== Nt.frame
                  ? (he.push(e), (e._lazy = [t, i]), 1)
                  : void 0
                : 1
            );
          },
          Ge = function e(t) {
            var n = t.parent;
            return (
              n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
            );
          },
          Ze = function (e, t, n, i) {
            var r = e._repeat,
              o = Se(t) || 0,
              s = e._tTime / e._tDur;
            return (
              s && !i && (e._time *= o / e._dur),
              (e._dur = o),
              (e._tDur = r
                ? r < 0
                  ? 1e10
                  : Se(o * (r + 1) + e._rDelay * r)
                : o),
              s && !i ? Ue(e, (e._tTime = e._tDur * s)) : e.parent && Ye(e),
              n || Fe(e.parent, e),
              e
            );
          },
          Je = function (e) {
            return e instanceof Gt ? Fe(e) : Ze(e, e._dur);
          },
          et = { _start: 0, endTime: pe },
          tt = function e(t, n) {
            var i,
              r,
              o = t.labels,
              s = t._recent || et,
              a = t.duration() >= P ? s.endTime(!1) : t._dur;
            return z(n) && (isNaN(n) || n in o)
              ? "<" === (i = n.charAt(0)) || ">" === i
                ? ("<" === i ? s._start : s.endTime(s._repeat >= 0)) +
                  (parseFloat(n.substr(1)) || 0)
                : (i = n.indexOf("=")) < 0
                ? (n in o || (o[n] = a), o[n])
                : ((r = +(n.charAt(i - 1) + n.substr(i + 1))),
                  i > 1 ? e(t, n.substr(0, i - 1)) + r : a + r)
              : null == n
              ? a
              : +n;
          },
          nt = function (e, t) {
            return e || 0 === e ? t(e) : t;
          },
          it = function (e, t, n) {
            return n < e ? e : n > t ? t : n;
          },
          rt = function (e) {
            if ("string" != typeof e) return "";
            var t = oe.exec(e);
            return t ? e.substr(t.index + t[0].length) : "";
          },
          ot = function (e, t, n) {
            return nt(n, function (n) {
              return it(e, t, n);
            });
          },
          st = [].slice,
          at = function (e, t) {
            return (
              e &&
              X(e) &&
              "length" in e &&
              ((!t && !e.length) || (e.length - 1 in e && X(e[0]))) &&
              !e.nodeType &&
              e !== a
            );
          },
          lt = function (e, t, n) {
            return (
              void 0 === n && (n = []),
              e.forEach(function (e) {
                var i;
                return (z(e) && !t) || at(e, 1)
                  ? (i = n).push.apply(i, ct(e))
                  : n.push(e);
              }) || n
            );
          },
          ct = function (e, t) {
            return !z(e) || t || (!l && Ht())
              ? Z(e)
                ? lt(e, t)
                : at(e)
                ? st.call(e, 0)
                : e
                ? [e]
                : []
              : st.call(c.querySelectorAll(e), 0);
          },
          ut = function (e) {
            return e.sort(function () {
              return 0.5 - Math.random();
            });
          },
          dt = function (e) {
            if (W(e)) return e;
            var t = X(e) ? e : { each: e },
              n = Wt(t.ease),
              i = t.from || 0,
              r = parseFloat(t.base) || 0,
              o = {},
              s = i > 0 && i < 1,
              a = isNaN(i) || s,
              l = t.axis,
              c = i,
              u = i;
            return (
              z(i)
                ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
                : !s && a && ((c = i[0]), (u = i[1])),
              function (e, s, d) {
                var p,
                  f,
                  h,
                  m,
                  g,
                  v,
                  y,
                  b,
                  w,
                  _ = (d || t).length,
                  x = o[_];
                if (!x) {
                  if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, P])[1])) {
                    for (
                      y = -P;
                      y < (y = d[w++].getBoundingClientRect().left) && w < _;

                    );
                    w--;
                  }
                  for (
                    x = o[_] = [],
                      p = a ? Math.min(w, _) * c - 0.5 : i % w,
                      f = a ? (_ * u) / w - 0.5 : (i / w) | 0,
                      y = 0,
                      b = P,
                      v = 0;
                    v < _;
                    v++
                  )
                    (h = (v % w) - p),
                      (m = f - ((v / w) | 0)),
                      (x[v] = g =
                        l ? Math.abs("y" === l ? m : h) : F(h * h + m * m)),
                      g > y && (y = g),
                      g < b && (b = g);
                  "random" === i && ut(x),
                    (x.max = y - b),
                    (x.min = b),
                    (x.v = _ =
                      (parseFloat(t.amount) ||
                        parseFloat(t.each) *
                          (w > _
                            ? _ - 1
                            : l
                            ? "y" === l
                              ? _ / w
                              : w
                            : Math.max(w, _ / w)) ||
                        0) * ("edges" === i ? -1 : 1)),
                    (x.b = _ < 0 ? r - _ : r),
                    (x.u = rt(t.amount || t.each) || 0),
                    (n = n && _ < 0 ? Bt(n) : n);
                }
                return (
                  (_ = (x[e] - x.min) / x.max || 0),
                  Se(x.b + (n ? n(_) : _) * x.v) + x.u
                );
              }
            );
          },
          pt = function (e) {
            var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
            return function (n) {
              var i = Math.round(parseFloat(n) / e) * e * t;
              return (i - (i % 1)) / t + (Y(n) ? 0 : rt(n));
            };
          },
          ft = function (e, t) {
            var n,
              i,
              r = Z(e);
            return (
              !r &&
                X(e) &&
                ((n = r = e.radius || P),
                e.values
                  ? ((e = ct(e.values)), (i = !Y(e[0])) && (n *= n))
                  : (e = pt(e.increment))),
              nt(
                t,
                r
                  ? W(e)
                    ? function (t) {
                        return (i = e(t)), Math.abs(i - t) <= n ? i : t;
                      }
                    : function (t) {
                        for (
                          var r,
                            o,
                            s = parseFloat(i ? t.x : t),
                            a = parseFloat(i ? t.y : 0),
                            l = P,
                            c = 0,
                            u = e.length;
                          u--;

                        )
                          (r = i
                            ? (r = e[u].x - s) * r + (o = e[u].y - a) * o
                            : Math.abs(e[u] - s)) < l && ((l = r), (c = u));
                        return (
                          (c = !n || l <= n ? e[c] : t),
                          i || c === t || Y(t) ? c : c + rt(t)
                        );
                      }
                  : pt(e)
              )
            );
          },
          ht = function (e, t, n, i) {
            return nt(Z(e) ? !t : !0 === n ? !!(n = 0) : !i, function () {
              return Z(e)
                ? e[~~(Math.random() * e.length)]
                : (n = n || 1e-5) &&
                    (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                    Math.floor(
                      Math.round(
                        (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                      ) *
                        n *
                        i
                    ) / i;
            });
          },
          mt = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          },
          gt = function (e, t) {
            return function (n) {
              return e(parseFloat(n)) + (t || rt(n));
            };
          },
          vt = function (e, t, n) {
            return xt(e, t, 0, 1, n);
          },
          yt = function (e, t, n) {
            return nt(n, function (n) {
              return e[~~t(n)];
            });
          },
          bt = function e(t, n, i) {
            var r = n - t;
            return Z(t)
              ? yt(t, e(0, t.length), n)
              : nt(i, function (e) {
                  return ((r + ((e - t) % r)) % r) + t;
                });
          },
          wt = function e(t, n, i) {
            var r = n - t,
              o = 2 * r;
            return Z(t)
              ? yt(t, e(0, t.length - 1), n)
              : nt(i, function (e) {
                  return (
                    t + ((e = (o + ((e - t) % o)) % o || 0) > r ? o - e : e)
                  );
                });
          },
          _t = function (e) {
            for (
              var t, n, i, r, o = 0, s = "";
              ~(t = e.indexOf("random(", o));

            )
              (i = e.indexOf(")", t)),
                (r = "[" === e.charAt(t + 7)),
                (n = e.substr(t + 7, i - t - 7).match(r ? re : J)),
                (s +=
                  e.substr(o, t - o) +
                  ht(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)),
                (o = i + 1);
            return s + e.substr(o, e.length - o);
          },
          xt = function (e, t, n, i, r) {
            var o = t - e,
              s = i - n;
            return nt(r, function (t) {
              return n + (((t - e) / o) * s || 0);
            });
          },
          Tt = function e(t, n, i, r) {
            var o = isNaN(t + n)
              ? 0
              : function (e) {
                  return (1 - e) * t + e * n;
                };
            if (!o) {
              var s,
                a,
                l,
                c,
                u,
                d = z(t),
                p = {};
              if ((!0 === i && (r = 1) && (i = null), d))
                (t = { p: t }), (n = { p: n });
              else if (Z(t) && !Z(n)) {
                for (l = [], c = t.length, u = c - 2, a = 1; a < c; a++)
                  l.push(e(t[a - 1], t[a]));
                c--,
                  (o = function (e) {
                    e *= c;
                    var t = Math.min(u, ~~e);
                    return l[t](e - t);
                  }),
                  (i = n);
              } else r || (t = $e(Z(t) ? [] : {}, t));
              if (!l) {
                for (s in n) en.call(p, t, s, "get", n[s]);
                o = function (e) {
                  return gn(e, p) || (d ? t.p : t);
                };
              }
            }
            return nt(i, o);
          },
          Ct = function (e, t, n) {
            var i,
              r,
              o,
              s = e.labels,
              a = P;
            for (i in s)
              (r = s[i] - t) < 0 == !!n &&
                r &&
                a > (r = Math.abs(r)) &&
                ((o = i), (a = r));
            return o;
          },
          St = function (e, t, n) {
            var i,
              r,
              o = e.vars,
              s = o[t];
            if (s)
              return (
                (i = o[t + "Params"]),
                (r = o.callbackScope || e),
                n && he.length && Ae(),
                i ? s.apply(r, i) : s.call(r)
              );
          },
          kt = function (e) {
            return (
              qe(e),
              e.scrollTrigger && e.scrollTrigger.kill(!1),
              e.progress() < 1 && St(e, "onInterrupt"),
              e
            );
          },
          Et = 255,
          At = {
            aqua: [0, Et, Et],
            lime: [0, Et, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Et],
            navy: [0, 0, 128],
            white: [Et, Et, Et],
            olive: [128, 128, 0],
            yellow: [Et, Et, 0],
            orange: [Et, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Et, 0, 0],
            pink: [Et, 192, 203],
            cyan: [0, Et, Et],
            transparent: [Et, Et, Et, 0],
          },
          Dt = function (e, t, n) {
            return (
              ((6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1
                ? t + (n - t) * e * 6
                : e < 0.5
                ? n
                : 3 * e < 2
                ? t + (n - t) * (2 / 3 - e) * 6
                : t) *
                Et +
                0.5) |
              0
            );
          },
          Ot = function (e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f = e ? (Y(e) ? [e >> 16, (e >> 8) & Et, e & Et] : 0) : At.black;
            if (!f) {
              if (
                ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), At[e])
              )
                f = At[e];
              else if ("#" === e.charAt(0)) {
                if (
                  (e.length < 6 &&
                    ((i = e.charAt(1)),
                    (r = e.charAt(2)),
                    (o = e.charAt(3)),
                    (e =
                      "#" +
                      i +
                      i +
                      r +
                      r +
                      o +
                      o +
                      (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
                  9 === e.length)
                )
                  return [
                    (f = parseInt(e.substr(1, 6), 16)) >> 16,
                    (f >> 8) & Et,
                    f & Et,
                    parseInt(e.substr(7), 16) / 255,
                  ];
                f = [
                  (e = parseInt(e.substr(1), 16)) >> 16,
                  (e >> 8) & Et,
                  e & Et,
                ];
              } else if ("hsl" === e.substr(0, 3))
                if (((f = p = e.match(J)), t)) {
                  if (~e.indexOf("="))
                    return (
                      (f = e.match(ee)), n && f.length < 4 && (f[3] = 1), f
                    );
                } else
                  (s = (+f[0] % 360) / 360),
                    (a = +f[1] / 100),
                    (i =
                      2 * (l = +f[2] / 100) -
                      (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                    f.length > 3 && (f[3] *= 1),
                    (f[0] = Dt(s + 1 / 3, i, r)),
                    (f[1] = Dt(s, i, r)),
                    (f[2] = Dt(s - 1 / 3, i, r));
              else f = e.match(J) || At.transparent;
              f = f.map(Number);
            }
            return (
              t &&
                !p &&
                ((i = f[0] / Et),
                (r = f[1] / Et),
                (o = f[2] / Et),
                (l = ((c = Math.max(i, r, o)) + (u = Math.min(i, r, o))) / 2),
                c === u
                  ? (s = a = 0)
                  : ((d = c - u),
                    (a = l > 0.5 ? d / (2 - c - u) : d / (c + u)),
                    (s =
                      c === i
                        ? (r - o) / d + (r < o ? 6 : 0)
                        : c === r
                        ? (o - i) / d + 2
                        : (i - r) / d + 4),
                    (s *= 60)),
                (f[0] = ~~(s + 0.5)),
                (f[1] = ~~(100 * a + 0.5)),
                (f[2] = ~~(100 * l + 0.5))),
              n && f.length < 4 && (f[3] = 1),
              f
            );
          },
          Mt = function (e) {
            var t = [],
              n = [],
              i = -1;
            return (
              e.split(jt).forEach(function (e) {
                var r = e.match(te) || [];
                t.push.apply(t, r), n.push((i += r.length + 1));
              }),
              (t.c = n),
              t
            );
          },
          Lt = function (e, t, n) {
            var i,
              r,
              o,
              s,
              a = "",
              l = (e + a).match(jt),
              c = t ? "hsla(" : "rgba(",
              u = 0;
            if (!l) return e;
            if (
              ((l = l.map(function (e) {
                return (
                  (e = Ot(e, t, 1)) &&
                  c +
                    (t
                      ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                      : e.join(",")) +
                    ")"
                );
              })),
              n && ((o = Mt(e)), (i = n.c).join(a) !== o.c.join(a)))
            )
              for (
                s = (r = e.replace(jt, "1").split(te)).length - 1;
                u < s;
                u++
              )
                a +=
                  r[u] +
                  (~i.indexOf(u)
                    ? l.shift() || c + "0,0,0,0)"
                    : (o.length ? o : l.length ? l : n).shift());
            if (!r)
              for (s = (r = e.split(jt)).length - 1; u < s; u++)
                a += r[u] + l[u];
            return a + r[s];
          },
          jt = (function () {
            var e,
              t =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (e in At) t += "|" + e + "\\b";
            return new RegExp(t + ")", "gi");
          })(),
          $t = /hsl[a]?\(/,
          Pt = function (e) {
            var t,
              n = e.join(" ");
            if (((jt.lastIndex = 0), jt.test(n)))
              return (
                (t = $t.test(n)),
                (e[1] = Lt(e[1], t)),
                (e[0] = Lt(e[0], t, Mt(e[1]))),
                !0
              );
          },
          Nt =
            ((w = Date.now),
            (_ = 500),
            (x = 33),
            (T = w()),
            (C = T),
            (k = S = 1e3 / 240),
            (A = function e(t) {
              var n,
                i,
                r,
                o,
                s = w() - C,
                a = !0 === t;
              if (
                (s > _ && (T += s - x),
                ((n = (r = (C += s) - T) - k) > 0 || a) &&
                  ((o = ++v.frame),
                  (y = r - 1e3 * v.time),
                  (v.time = r /= 1e3),
                  (k += n + (n >= S ? 4 : S - n)),
                  (i = 1)),
                a || (h = m(e)),
                i)
              )
                for (b = 0; b < E.length; b++) E[b](r, y, o, t);
            }),
            (v = {
              time: 0,
              frame: 0,
              tick: function () {
                A(!0);
              },
              deltaRatio: function (e) {
                return y / (1e3 / (e || 60));
              },
              wake: function () {
                u &&
                  (!l &&
                    Q() &&
                    ((a = l = window),
                    (c = a.document || {}),
                    (se.gsap = Sn),
                    (a.gsapVersions || (a.gsapVersions = [])).push(Sn.version),
                    le(ae || a.GreenSockGlobals || (!a.gsap && a) || {}),
                    (g = a.requestAnimationFrame)),
                  h && v.sleep(),
                  (m =
                    g ||
                    function (e) {
                      return setTimeout(e, (k - 1e3 * v.time + 1) | 0);
                    }),
                  (f = 1),
                  A(2));
              },
              sleep: function () {
                (g ? a.cancelAnimationFrame : clearTimeout)(h),
                  (f = 0),
                  (m = pe);
              },
              lagSmoothing: function (e, t) {
                (_ = e || 1e8), (x = Math.min(t, _, 0));
              },
              fps: function (e) {
                (S = 1e3 / (e || 240)), (k = 1e3 * v.time + S);
              },
              add: function (e) {
                E.indexOf(e) < 0 && E.push(e), Ht();
              },
              remove: function (e) {
                var t;
                ~(t = E.indexOf(e)) && E.splice(t, 1) && b >= t && b--;
              },
              _listeners: (E = []),
            })),
          Ht = function () {
            return !f && Nt.wake();
          },
          It = {},
          qt = /^[\d.\-M][\d.\-,\s]/,
          Ft = /["']/g,
          Rt = function (e) {
            for (
              var t,
                n,
                i,
                r = {},
                o = e.substr(1, e.length - 3).split(":"),
                s = o[0],
                a = 1,
                l = o.length;
              a < l;
              a++
            )
              (n = o[a]),
                (t = a !== l - 1 ? n.lastIndexOf(",") : n.length),
                (i = n.substr(0, t)),
                (r[s] = isNaN(i) ? i.replace(Ft, "").trim() : +i),
                (s = n.substr(t + 1).trim());
            return r;
          },
          Bt = function (e) {
            return function (t) {
              return 1 - e(1 - t);
            };
          },
          zt = function e(t, n) {
            for (var i, r = t._first; r; )
              r instanceof Gt
                ? e(r, n)
                : !r.vars.yoyoEase ||
                  (r._yoyo && r._repeat) ||
                  r._yoyo === n ||
                  (r.timeline
                    ? e(r.timeline, n)
                    : ((i = r._ease),
                      (r._ease = r._yEase),
                      (r._yEase = i),
                      (r._yoyo = n))),
                (r = r._next);
          },
          Wt = function (e, t) {
            return (
              (e &&
                (W(e)
                  ? e
                  : It[e] ||
                    (function (e) {
                      var t,
                        n,
                        i,
                        r,
                        o = (e + "").split("("),
                        s = It[o[0]];
                      return s && o.length > 1 && s.config
                        ? s.config.apply(
                            null,
                            ~e.indexOf("{")
                              ? [Rt(o[1])]
                              : ((t = e),
                                (n = t.indexOf("(") + 1),
                                (i = t.indexOf(")")),
                                (r = t.indexOf("(", n)),
                                t.substring(
                                  n,
                                  ~r && r < i ? t.indexOf(")", i + 1) : i
                                ))
                                  .split(",")
                                  .map(Oe)
                          )
                        : It._CE && qt.test(e)
                        ? It._CE("", e)
                        : s;
                    })(e))) ||
              t
            );
          },
          Yt = function (e, t, n, i) {
            void 0 === n &&
              (n = function (e) {
                return 1 - t(1 - e);
              }),
              void 0 === i &&
                (i = function (e) {
                  return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
                });
            var r,
              o = { easeIn: t, easeOut: n, easeInOut: i };
            return (
              Ce(e, function (e) {
                for (var t in ((It[e] = se[e] = o),
                (It[(r = e.toLowerCase())] = n),
                o))
                  It[
                    r +
                      ("easeIn" === t
                        ? ".in"
                        : "easeOut" === t
                        ? ".out"
                        : ".inOut")
                  ] = It[e + "." + t] = o[t];
              }),
              o
            );
          },
          Ut = function (e) {
            return function (t) {
              return t < 0.5
                ? (1 - e(1 - 2 * t)) / 2
                : 0.5 + e(2 * (t - 0.5)) / 2;
            };
          },
          Xt = function e(t, n, i) {
            var r = n >= 1 ? n : 1,
              o = (i || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
              s = (o / H) * (Math.asin(1 / r) || 0),
              a = function (e) {
                return 1 === e
                  ? 1
                  : r * Math.pow(2, -10 * e) * B((e - s) * o) + 1;
              },
              l =
                "out" === t
                  ? a
                  : "in" === t
                  ? function (e) {
                      return 1 - a(1 - e);
                    }
                  : Ut(a);
            return (
              (o = H / o),
              (l.config = function (n, i) {
                return e(t, n, i);
              }),
              l
            );
          },
          Vt = function e(t, n) {
            void 0 === n && (n = 1.70158);
            var i = function (e) {
                return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
              },
              r =
                "out" === t
                  ? i
                  : "in" === t
                  ? function (e) {
                      return 1 - i(1 - e);
                    }
                  : Ut(i);
            return (
              (r.config = function (n) {
                return e(t, n);
              }),
              r
            );
          };
        Ce("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
          var n = t < 5 ? t + 1 : t;
          Yt(
            e + ",Power" + (n - 1),
            t
              ? function (e) {
                  return Math.pow(e, n);
                }
              : function (e) {
                  return e;
                },
            function (e) {
              return 1 - Math.pow(1 - e, n);
            },
            function (e) {
              return e < 0.5
                ? Math.pow(2 * e, n) / 2
                : 1 - Math.pow(2 * (1 - e), n) / 2;
            }
          );
        }),
          (It.Linear.easeNone = It.none = It.Linear.easeIn),
          Yt("Elastic", Xt("in"), Xt("out"), Xt()),
          (D = 7.5625),
          (M = 1 / (O = 2.75)),
          Yt(
            "Bounce",
            function (e) {
              return 1 - L(1 - e);
            },
            (L = function (e) {
              return e < M
                ? D * e * e
                : e < 0.7272727272727273
                ? D * Math.pow(e - 1.5 / O, 2) + 0.75
                : e < 0.9090909090909092
                ? D * (e -= 2.25 / O) * e + 0.9375
                : D * Math.pow(e - 2.625 / O, 2) + 0.984375;
            })
          ),
          Yt("Expo", function (e) {
            return e ? Math.pow(2, 10 * (e - 1)) : 0;
          }),
          Yt("Circ", function (e) {
            return -(F(1 - e * e) - 1);
          }),
          Yt("Sine", function (e) {
            return 1 === e ? 1 : 1 - R(e * I);
          }),
          Yt("Back", Vt("in"), Vt("out"), Vt()),
          (It.SteppedEase =
            It.steps =
            se.SteppedEase =
              {
                config: function (e, t) {
                  void 0 === e && (e = 1);
                  var n = 1 / e,
                    i = e + (t ? 0 : 1),
                    r = t ? 1 : 0;
                  return function (e) {
                    return (((i * it(0, 0.99999999, e)) | 0) + r) * n;
                  };
                },
              }),
          ($.ease = It["quad.out"]),
          Ce(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (e) {
              return (we += e + "," + e + "Params,");
            }
          );
        var Qt = function (e, t) {
            (this.id = q++),
              (e._gsap = this),
              (this.target = e),
              (this.harness = t),
              (this.get = t ? t.get : Te),
              (this.set = t ? t.getSetter : pn);
          },
          Kt = (function () {
            function e(e, t) {
              var n = e.parent || s;
              (this.vars = e),
                (this._delay = +e.delay || 0),
                (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
                  ((this._rDelay = e.repeatDelay || 0),
                  (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
                (this._ts = 1),
                Ze(this, +e.duration, 1, 1),
                (this.data = e.data),
                f || Nt.wake(),
                n && Ve(n, this, t || 0 === t ? t : n._time, 1),
                e.reversed && this.reverse(),
                e.paused && this.paused(!0);
            }
            var t = e.prototype;
            return (
              (t.delay = function (e) {
                return e || 0 === e
                  ? (this.parent &&
                      this.parent.smoothChildTiming &&
                      this.startTime(this._start + e - this._delay),
                    (this._delay = e),
                    this)
                  : this._delay;
              }),
              (t.duration = function (e) {
                return arguments.length
                  ? this.totalDuration(
                      this._repeat > 0
                        ? e + (e + this._rDelay) * this._repeat
                        : e
                    )
                  : this.totalDuration() && this._dur;
              }),
              (t.totalDuration = function (e) {
                return arguments.length
                  ? ((this._dirty = 0),
                    Ze(
                      this,
                      this._repeat < 0
                        ? e
                        : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                    ))
                  : this._tDur;
              }),
              (t.totalTime = function (e, t) {
                if ((Ht(), !arguments.length)) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                  for (
                    Ue(this, e), !n._dp || n.parent || Xe(n, this);
                    n.parent;

                  )
                    n.parent._time !==
                      n._start +
                        (n._ts >= 0
                          ? n._tTime / n._ts
                          : (n.totalDuration() - n._tTime) / -n._ts) &&
                      n.totalTime(n._tTime, !0),
                      (n = n.parent);
                  !this.parent &&
                    this._dp.autoRemoveChildren &&
                    ((this._ts > 0 && e < this._tDur) ||
                      (this._ts < 0 && e > 0) ||
                      (!this._tDur && !e)) &&
                    Ve(this._dp, this, this._start - this._delay);
                }
                return (
                  (this._tTime !== e ||
                    (!this._dur && !t) ||
                    (this._initted && Math.abs(this._zTime) === N) ||
                    (!e && !this._initted && (this.add || this._ptLookup))) &&
                    (this._ts || (this._pTime = e), De(this, e, t)),
                  this
                );
              }),
              (t.time = function (e, t) {
                return arguments.length
                  ? this.totalTime(
                      Math.min(this.totalDuration(), e + Be(this)) %
                        this._dur || (e ? this._dur : 0),
                      t
                    )
                  : this._time;
              }),
              (t.totalProgress = function (e, t) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * e, t)
                  : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.ratio;
              }),
              (t.progress = function (e, t) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                        Be(this),
                      t
                    )
                  : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.ratio;
              }),
              (t.iteration = function (e, t) {
                var n = this.duration() + this._rDelay;
                return arguments.length
                  ? this.totalTime(this._time + (e - 1) * n, t)
                  : this._repeat
                  ? ze(this._tTime, n) + 1
                  : 1;
              }),
              (t.timeScale = function (e) {
                if (!arguments.length)
                  return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === e) return this;
                var t =
                  this.parent && this._ts
                    ? We(this.parent._time, this)
                    : this._tTime;
                return (
                  (this._rts = +e || 0),
                  (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
                  (function (e) {
                    for (var t = e.parent; t && t.parent; )
                      (t._dirty = 1), t.totalDuration(), (t = t.parent);
                    return e;
                  })(this.totalTime(it(-this._delay, this._tDur, t), !0))
                );
              }),
              (t.paused = function (e) {
                return arguments.length
                  ? (this._ps !== e &&
                      ((this._ps = e),
                      e
                        ? ((this._pTime =
                            this._tTime ||
                            Math.max(-this._delay, this.rawTime())),
                          (this._ts = this._act = 0))
                        : (Ht(),
                          (this._ts = this._rts),
                          this.totalTime(
                            this.parent && !this.parent.smoothChildTiming
                              ? this.rawTime()
                              : this._tTime || this._pTime,
                            1 === this.progress() &&
                              (this._tTime -= N) &&
                              Math.abs(this._zTime) !== N
                          ))),
                    this)
                  : this._ps;
              }),
              (t.startTime = function (e) {
                if (arguments.length) {
                  this._start = e;
                  var t = this.parent || this._dp;
                  return (
                    t &&
                      (t._sort || !this.parent) &&
                      Ve(t, this, e - this._delay),
                    this
                  );
                }
                return this._start;
              }),
              (t.endTime = function (e) {
                return (
                  this._start +
                  (V(e) ? this.totalDuration() : this.duration()) /
                    Math.abs(this._ts)
                );
              }),
              (t.rawTime = function (e) {
                var t = this.parent || this._dp;
                return t
                  ? e &&
                    (!this._ts ||
                      (this._repeat && this._time && this.totalProgress() < 1))
                    ? this._tTime % (this._dur + this._rDelay)
                    : this._ts
                    ? We(t.rawTime(e), this)
                    : this._tTime
                  : this._tTime;
              }),
              (t.globalTime = function (e) {
                for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                  (n = t._start + n / (t._ts || 1)), (t = t._dp);
                return n;
              }),
              (t.repeat = function (e) {
                return arguments.length
                  ? ((this._repeat = e === 1 / 0 ? -2 : e), Je(this))
                  : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
              }),
              (t.repeatDelay = function (e) {
                return arguments.length
                  ? ((this._rDelay = e), Je(this))
                  : this._rDelay;
              }),
              (t.yoyo = function (e) {
                return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
              }),
              (t.seek = function (e, t) {
                return this.totalTime(tt(this, e), V(t));
              }),
              (t.restart = function (e, t) {
                return this.play().totalTime(e ? -this._delay : 0, V(t));
              }),
              (t.play = function (e, t) {
                return (
                  null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                );
              }),
              (t.reverse = function (e, t) {
                return (
                  null != e && this.seek(e || this.totalDuration(), t),
                  this.reversed(!0).paused(!1)
                );
              }),
              (t.pause = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!0);
              }),
              (t.resume = function () {
                return this.paused(!1);
              }),
              (t.reversed = function (e) {
                return arguments.length
                  ? (!!e !== this.reversed() &&
                      this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                    this)
                  : this._rts < 0;
              }),
              (t.invalidate = function () {
                return (
                  (this._initted = this._act = 0), (this._zTime = -1e-8), this
                );
              }),
              (t.isActive = function () {
                var e,
                  t = this.parent || this._dp,
                  n = this._start;
                return !(
                  t &&
                  !(
                    this._ts &&
                    this._initted &&
                    t.isActive() &&
                    (e = t.rawTime(!0)) >= n &&
                    e < this.endTime(!0) - N
                  )
                );
              }),
              (t.eventCallback = function (e, t, n) {
                var i = this.vars;
                return arguments.length > 1
                  ? (t
                      ? ((i[e] = t),
                        n && (i[e + "Params"] = n),
                        "onUpdate" === e && (this._onUpdate = t))
                      : delete i[e],
                    this)
                  : i[e];
              }),
              (t.then = function (e) {
                var t = this;
                return new Promise(function (n) {
                  var i = W(e) ? e : Me,
                    r = function () {
                      var e = t.then;
                      (t.then = null),
                        W(i) &&
                          (i = i(t)) &&
                          (i.then || i === t) &&
                          (t.then = e),
                        n(i),
                        (t.then = e);
                    };
                  (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
                  (!t._tTime && t._ts < 0)
                    ? r()
                    : (t._prom = r);
                });
              }),
              (t.kill = function () {
                kt(this);
              }),
              e
            );
          })();
        Le(Kt.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -1e-8,
          _prom: 0,
          _ps: !1,
          _rts: 1,
        });
        var Gt = (function (e) {
          function t(t, n) {
            var r;
            return (
              void 0 === t && (t = {}),
              ((r = e.call(this, t, n) || this).labels = {}),
              (r.smoothChildTiming = !!t.smoothChildTiming),
              (r.autoRemoveChildren = !!t.autoRemoveChildren),
              (r._sort = V(t.sortChildren)),
              r.parent && Xe(r.parent, i(r)),
              t.scrollTrigger && Qe(i(r), t.scrollTrigger),
              r
            );
          }
          r(t, e);
          var n = t.prototype;
          return (
            (n.to = function (e, t, n) {
              return (
                new an(
                  e,
                  Ee(arguments, 0, this),
                  tt(this, Y(t) ? arguments[3] : n)
                ),
                this
              );
            }),
            (n.from = function (e, t, n) {
              return (
                new an(
                  e,
                  Ee(arguments, 1, this),
                  tt(this, Y(t) ? arguments[3] : n)
                ),
                this
              );
            }),
            (n.fromTo = function (e, t, n, i) {
              return (
                new an(
                  e,
                  Ee(arguments, 2, this),
                  tt(this, Y(t) ? arguments[4] : i)
                ),
                this
              );
            }),
            (n.set = function (e, t, n) {
              return (
                (t.duration = 0),
                (t.parent = this),
                He(t).repeatDelay || (t.repeat = 0),
                (t.immediateRender = !!t.immediateRender),
                new an(e, t, tt(this, n), 1),
                this
              );
            }),
            (n.call = function (e, t, n) {
              return Ve(this, an.delayedCall(0, e, t), tt(this, n));
            }),
            (n.staggerTo = function (e, t, n, i, r, o, s) {
              return (
                (n.duration = t),
                (n.stagger = n.stagger || i),
                (n.onComplete = o),
                (n.onCompleteParams = s),
                (n.parent = this),
                new an(e, n, tt(this, r)),
                this
              );
            }),
            (n.staggerFrom = function (e, t, n, i, r, o, s) {
              return (
                (n.runBackwards = 1),
                (He(n).immediateRender = V(n.immediateRender)),
                this.staggerTo(e, t, n, i, r, o, s)
              );
            }),
            (n.staggerFromTo = function (e, t, n, i, r, o, s, a) {
              return (
                (i.startAt = n),
                (He(i).immediateRender = V(i.immediateRender)),
                this.staggerTo(e, t, i, r, o, s, a)
              );
            }),
            (n.render = function (e, t, n) {
              var i,
                r,
                o,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g = this._time,
                v = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur,
                b = this !== s && e > v - N && e >= 0 ? v : e < N ? 0 : e,
                w = this._zTime < 0 != e < 0 && (this._initted || !y);
              if (b !== this._tTime || n || w) {
                if (
                  (g !== this._time &&
                    y &&
                    ((b += this._time - g), (e += this._time - g)),
                  (i = b),
                  (p = this._start),
                  (c = !(d = this._ts)),
                  w && (y || (g = this._zTime), (e || !t) && (this._zTime = e)),
                  this._repeat)
                ) {
                  if (
                    ((h = this._yoyo),
                    (l = y + this._rDelay),
                    this._repeat < -1 && e < 0)
                  )
                    return this.totalTime(100 * l + e, t, n);
                  if (
                    ((i = Se(b % l)),
                    b === v
                      ? ((a = this._repeat), (i = y))
                      : ((a = ~~(b / l)) && a === b / l && ((i = y), a--),
                        i > y && (i = y)),
                    (f = ze(this._tTime, l)),
                    !g && this._tTime && f !== a && (f = a),
                    h && 1 & a && ((i = y - i), (m = 1)),
                    a !== f && !this._lock)
                  ) {
                    var _ = h && 1 & f,
                      x = _ === (h && 1 & a);
                    if (
                      (a < f && (_ = !_),
                      (g = _ ? 0 : y),
                      (this._lock = 1),
                      (this.render(g || (m ? 0 : Se(a * l)), t, !y)._lock = 0),
                      !t && this.parent && St(this, "onRepeat"),
                      this.vars.repeatRefresh &&
                        !m &&
                        (this.invalidate()._lock = 1),
                      (g && g !== this._time) ||
                        c !== !this._ts ||
                        (this.vars.onRepeat && !this.parent && !this._act))
                    )
                      return this;
                    if (
                      ((y = this._dur),
                      (v = this._tDur),
                      x &&
                        ((this._lock = 2),
                        (g = _ ? y : -1e-4),
                        this.render(g, !0)),
                      (this._lock = 0),
                      !this._ts && !c)
                    )
                      return this;
                    zt(this, m);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    ((u = (function (e, t, n) {
                      var i;
                      if (n > t)
                        for (i = e._first; i && i._start <= n; ) {
                          if (!i._dur && "isPause" === i.data && i._start > t)
                            return i;
                          i = i._next;
                        }
                      else
                        for (i = e._last; i && i._start >= n; ) {
                          if (!i._dur && "isPause" === i.data && i._start < t)
                            return i;
                          i = i._prev;
                        }
                    })(this, Se(g), Se(i))),
                    u && (b -= i - (i = u._start))),
                  (this._tTime = b),
                  (this._time = i),
                  (this._act = !d),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = e),
                    (g = 0)),
                  !g && i && !t && St(this, "onStart"),
                  i >= g && e >= 0)
                )
                  for (r = this._first; r; ) {
                    if (
                      ((o = r._next),
                      (r._act || i >= r._start) && r._ts && u !== r)
                    ) {
                      if (r.parent !== this) return this.render(e, t, n);
                      if (
                        (r.render(
                          r._ts > 0
                            ? (i - r._start) * r._ts
                            : (r._dirty ? r.totalDuration() : r._tDur) +
                                (i - r._start) * r._ts,
                          t,
                          n
                        ),
                        i !== this._time || (!this._ts && !c))
                      ) {
                        (u = 0), o && (b += this._zTime = -1e-8);
                        break;
                      }
                    }
                    r = o;
                  }
                else {
                  r = this._last;
                  for (var T = e < 0 ? e : i; r; ) {
                    if (
                      ((o = r._prev),
                      (r._act || T <= r._end) && r._ts && u !== r)
                    ) {
                      if (r.parent !== this) return this.render(e, t, n);
                      if (
                        (r.render(
                          r._ts > 0
                            ? (T - r._start) * r._ts
                            : (r._dirty ? r.totalDuration() : r._tDur) +
                                (T - r._start) * r._ts,
                          t,
                          n
                        ),
                        i !== this._time || (!this._ts && !c))
                      ) {
                        (u = 0), o && (b += this._zTime = T ? -1e-8 : N);
                        break;
                      }
                    }
                    r = o;
                  }
                }
                if (
                  u &&
                  !t &&
                  (this.pause(),
                  (u.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1),
                  this._ts)
                )
                  return (this._start = p), Ye(this), this.render(e, t, n);
                this._onUpdate && !t && St(this, "onUpdate", !0),
                  ((b === v && v >= this.totalDuration()) || (!b && g)) &&
                    ((p !== this._start &&
                      Math.abs(d) === Math.abs(this._ts)) ||
                      this._lock ||
                      ((e || !y) &&
                        ((b === v && this._ts > 0) || (!b && this._ts < 0)) &&
                        qe(this, 1),
                      t ||
                        (e < 0 && !g) ||
                        (!b && !g) ||
                        (St(
                          this,
                          b === v ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(b < v && this.timeScale() > 0) &&
                          this._prom())));
              }
              return this;
            }),
            (n.add = function (e, t) {
              var n = this;
              if ((Y(t) || (t = tt(this, t)), !(e instanceof Kt))) {
                if (Z(e))
                  return (
                    e.forEach(function (e) {
                      return n.add(e, t);
                    }),
                    this
                  );
                if (z(e)) return this.addLabel(e, t);
                if (!W(e)) return this;
                e = an.delayedCall(0, e);
              }
              return this !== e ? Ve(this, e, t) : this;
            }),
            (n.getChildren = function (e, t, n, i) {
              void 0 === e && (e = !0),
                void 0 === t && (t = !0),
                void 0 === n && (n = !0),
                void 0 === i && (i = -P);
              for (var r = [], o = this._first; o; )
                o._start >= i &&
                  (o instanceof an
                    ? t && r.push(o)
                    : (n && r.push(o),
                      e && r.push.apply(r, o.getChildren(!0, t, n)))),
                  (o = o._next);
              return r;
            }),
            (n.getById = function (e) {
              for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
                if (t[n].vars.id === e) return t[n];
            }),
            (n.remove = function (e) {
              return z(e)
                ? this.removeLabel(e)
                : W(e)
                ? this.killTweensOf(e)
                : (Ie(this, e),
                  e === this._recent && (this._recent = this._last),
                  Fe(this));
            }),
            (n.totalTime = function (t, n) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = Se(
                      Nt.time -
                        (this._ts > 0
                          ? t / this._ts
                          : (this.totalDuration() - t) / -this._ts)
                    )),
                  e.prototype.totalTime.call(this, t, n),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (n.addLabel = function (e, t) {
              return (this.labels[e] = tt(this, t)), this;
            }),
            (n.removeLabel = function (e) {
              return delete this.labels[e], this;
            }),
            (n.addPause = function (e, t, n) {
              var i = an.delayedCall(0, t || pe, n);
              return (
                (i.data = "isPause"),
                (this._hasPause = 1),
                Ve(this, i, tt(this, e))
              );
            }),
            (n.removePause = function (e) {
              var t = this._first;
              for (e = tt(this, e); t; )
                t._start === e && "isPause" === t.data && qe(t), (t = t._next);
            }),
            (n.killTweensOf = function (e, t, n) {
              for (var i = this.getTweensOf(e, n), r = i.length; r--; )
                Zt !== i[r] && i[r].kill(e, t);
              return this;
            }),
            (n.getTweensOf = function (e, t) {
              for (var n, i = [], r = ct(e), o = this._first, s = Y(t); o; )
                o instanceof an
                  ? ke(o._targets, r) &&
                    (s
                      ? (!Zt || (o._initted && o._ts)) &&
                        o.globalTime(0) <= t &&
                        o.globalTime(o.totalDuration()) > t
                      : !t || o.isActive()) &&
                    i.push(o)
                  : (n = o.getTweensOf(r, t)).length && i.push.apply(i, n),
                  (o = o._next);
              return i;
            }),
            (n.tweenTo = function (e, t) {
              t = t || {};
              var n = this,
                i = tt(n, e),
                r = t,
                o = r.startAt,
                s = r.onStart,
                a = r.onStartParams,
                l = r.immediateRender,
                c = an.to(
                  n,
                  Le(
                    {
                      ease: t.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: i,
                      overwrite: "auto",
                      duration:
                        t.duration ||
                        Math.abs(
                          (i - (o && "time" in o ? o.time : n._time)) /
                            n.timeScale()
                        ) ||
                        N,
                      onStart: function () {
                        n.pause();
                        var e =
                          t.duration || Math.abs((i - n._time) / n.timeScale());
                        c._dur !== e && Ze(c, e, 0, 1).render(c._time, !0, !0),
                          s && s.apply(c, a || []);
                      },
                    },
                    t
                  )
                );
              return l ? c.render(0) : c;
            }),
            (n.tweenFromTo = function (e, t, n) {
              return this.tweenTo(t, Le({ startAt: { time: tt(this, e) } }, n));
            }),
            (n.recent = function () {
              return this._recent;
            }),
            (n.nextLabel = function (e) {
              return void 0 === e && (e = this._time), Ct(this, tt(this, e));
            }),
            (n.previousLabel = function (e) {
              return void 0 === e && (e = this._time), Ct(this, tt(this, e), 1);
            }),
            (n.currentLabel = function (e) {
              return arguments.length
                ? this.seek(e, !0)
                : this.previousLabel(this._time + N);
            }),
            (n.shiftChildren = function (e, t, n) {
              void 0 === n && (n = 0);
              for (var i, r = this._first, o = this.labels; r; )
                r._start >= n && ((r._start += e), (r._end += e)),
                  (r = r._next);
              if (t) for (i in o) o[i] >= n && (o[i] += e);
              return Fe(this);
            }),
            (n.invalidate = function () {
              var t = this._first;
              for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
              return e.prototype.invalidate.call(this);
            }),
            (n.clear = function (e) {
              void 0 === e && (e = !0);
              for (var t, n = this._first; n; )
                (t = n._next), this.remove(n), (n = t);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                e && (this.labels = {}),
                Fe(this)
              );
            }),
            (n.totalDuration = function (e) {
              var t,
                n,
                i,
                r = 0,
                o = this,
                a = o._last,
                l = P;
              if (arguments.length)
                return o.timeScale(
                  (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                    (o.reversed() ? -e : e)
                );
              if (o._dirty) {
                for (i = o.parent; a; )
                  (t = a._prev),
                    a._dirty && a.totalDuration(),
                    (n = a._start) > l && o._sort && a._ts && !o._lock
                      ? ((o._lock = 1), (Ve(o, a, n - a._delay, 1)._lock = 0))
                      : (l = n),
                    n < 0 &&
                      a._ts &&
                      ((r -= n),
                      ((!i && !o._dp) || (i && i.smoothChildTiming)) &&
                        ((o._start += n / o._ts),
                        (o._time -= n),
                        (o._tTime -= n)),
                      o.shiftChildren(-n, !1, -Infinity),
                      (l = 0)),
                    a._end > r && a._ts && (r = a._end),
                    (a = t);
                Ze(o, o === s && o._time > r ? o._time : r, 1, 1),
                  (o._dirty = 0);
              }
              return o._tDur;
            }),
            (t.updateRoot = function (e) {
              if (
                (s._ts && (De(s, We(e, s)), (d = Nt.frame)), Nt.frame >= ye)
              ) {
                ye += j.autoSleep || 120;
                var t = s._first;
                if ((!t || !t._ts) && j.autoSleep && Nt._listeners.length < 2) {
                  for (; t && !t._ts; ) t = t._next;
                  t || Nt.sleep();
                }
              }
            }),
            t
          );
        })(Kt);
        Le(Gt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Zt,
          Jt = function (e, t, n, i, r, o, s) {
            var a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              m = new _n(this._pt, e, t, 0, 1, mn, null, r),
              g = 0,
              v = 0;
            for (
              m.b = n,
                m.e = i,
                n += "",
                (f = ~(i += "").indexOf("random(")) && (i = _t(i)),
                o && (o((h = [n, i]), e, t), (n = h[0]), (i = h[1])),
                l = n.match(ne) || [];
              (a = ne.exec(i));

            )
              (u = a[0]),
                (d = i.substring(g, a.index)),
                c ? (c = (c + 1) % 5) : "rgba(" === d.substr(-5) && (c = 1),
                u !== l[v++] &&
                  ((p = parseFloat(l[v - 1]) || 0),
                  (m._pt = {
                    _next: m._pt,
                    p: d || 1 === v ? d : ",",
                    s: p,
                    c:
                      "=" === u.charAt(1)
                        ? parseFloat(u.substr(2)) *
                          ("-" === u.charAt(0) ? -1 : 1)
                        : parseFloat(u) - p,
                    m: c && c < 4 ? Math.round : 0,
                  }),
                  (g = ne.lastIndex));
            return (
              (m.c = g < i.length ? i.substring(g, i.length) : ""),
              (m.fp = s),
              (ie.test(i) || f) && (m.e = 0),
              (this._pt = m),
              m
            );
          },
          en = function (e, t, n, i, r, o, s, a, l) {
            W(i) && (i = i(r || 0, e, o));
            var c,
              u = e[t],
              d =
                "get" !== n
                  ? n
                  : W(u)
                  ? l
                    ? e[
                        t.indexOf("set") || !W(e["get" + t.substr(3)])
                          ? t
                          : "get" + t.substr(3)
                      ](l)
                    : e[t]()
                  : u,
              p = W(u) ? (l ? un : cn) : ln;
            if (
              (z(i) &&
                (~i.indexOf("random(") && (i = _t(i)),
                "=" === i.charAt(1) &&
                  (i =
                    parseFloat(d) +
                    parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
                    (rt(d) || 0))),
              d !== i)
            )
              return isNaN(d * i)
                ? (!u && !(t in e) && ce(t, i),
                  Jt.call(this, e, t, d, i, p, a || j.stringFilter, l))
                : ((c = new _n(
                    this._pt,
                    e,
                    t,
                    +d || 0,
                    i - (d || 0),
                    "boolean" == typeof u ? hn : fn,
                    0,
                    p
                  )),
                  l && (c.fp = l),
                  s && c.modifier(s, this, e),
                  (this._pt = c));
          },
          tn = function (e, t, n, i, r, o) {
            var s, a, l, c;
            if (
              ge[e] &&
              !1 !==
                (s = new ge[e]()).init(
                  r,
                  s.rawVars
                    ? t[e]
                    : (function (e, t, n, i, r) {
                        if (
                          (W(e) && (e = rn(e, r, t, n, i)),
                          !X(e) || (e.style && e.nodeType) || Z(e) || G(e))
                        )
                          return z(e) ? rn(e, r, t, n, i) : e;
                        var o,
                          s = {};
                        for (o in e) s[o] = rn(e[o], r, t, n, i);
                        return s;
                      })(t[e], i, r, o, n),
                  n,
                  i,
                  o
                ) &&
              ((n._pt = a =
                new _n(n._pt, r, e, 0, 1, s.render, s, 0, s.priority)),
              n !== p)
            )
              for (
                l = n._ptLookup[n._targets.indexOf(r)], c = s._props.length;
                c--;

              )
                l[s._props[c]] = a;
            return s;
          },
          nn = function e(t, n) {
            var i,
              r,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              m,
              g,
              v,
              y = t.vars,
              b = y.ease,
              w = y.startAt,
              _ = y.immediateRender,
              x = y.lazy,
              T = y.onUpdate,
              C = y.onUpdateParams,
              S = y.callbackScope,
              k = y.runBackwards,
              E = y.yoyoEase,
              A = y.keyframes,
              D = y.autoRevert,
              O = t._dur,
              M = t._startAt,
              L = t._targets,
              j = t.parent,
              P = j && "nested" === j.data ? j.parent._targets : L,
              H = "auto" === t._overwrite && !o,
              I = t.timeline;
            if (
              (I && (!A || !b) && (b = "none"),
              (t._ease = Wt(b, $.ease)),
              (t._yEase = E ? Bt(Wt(!0 === E ? b : E, $.ease)) : 0),
              E &&
                t._yoyo &&
                !t._repeat &&
                ((E = t._yEase), (t._yEase = t._ease), (t._ease = E)),
              !I)
            ) {
              if (
                ((g = (p = L[0] ? xe(L[0]).harness : 0) && y[p.prop]),
                (i = Ne(y, fe)),
                M && M.render(-1, !0).kill(),
                w)
              )
                if (
                  (qe(
                    (t._startAt = an.set(
                      L,
                      Le(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: j,
                          immediateRender: !0,
                          lazy: V(x),
                          startAt: null,
                          delay: 0,
                          onUpdate: T,
                          onUpdateParams: C,
                          callbackScope: S,
                          stagger: 0,
                        },
                        w
                      )
                    ))
                  ),
                  _)
                ) {
                  if (n > 0) D || (t._startAt = 0);
                  else if (O && !(n < 0 && M))
                    return void (n && (t._zTime = n));
                } else !1 === D && (t._startAt = 0);
              else if (k && O)
                if (M) !D && (t._startAt = 0);
                else if (
                  (n && (_ = !1),
                  (a = Le(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: _ && V(x),
                      immediateRender: _,
                      stagger: 0,
                      parent: j,
                    },
                    i
                  )),
                  g && (a[p.prop] = g),
                  qe((t._startAt = an.set(L, a))),
                  _)
                ) {
                  if (!n) return;
                } else e(t._startAt, N);
              for (
                t._pt = 0, x = (O && V(x)) || (x && !O), r = 0;
                r < L.length;
                r++
              ) {
                if (
                  ((d = (c = L[r])._gsap || _e(L)[r]._gsap),
                  (t._ptLookup[r] = h = {}),
                  me[d.id] && he.length && Ae(),
                  (m = P === L ? r : P.indexOf(c)),
                  p &&
                    !1 !== (f = new p()).init(c, g || i, t, m, P) &&
                    ((t._pt = l =
                      new _n(
                        t._pt,
                        c,
                        f.name,
                        0,
                        1,
                        f.render,
                        f,
                        0,
                        f.priority
                      )),
                    f._props.forEach(function (e) {
                      h[e] = l;
                    }),
                    f.priority && (u = 1)),
                  !p || g)
                )
                  for (a in i)
                    ge[a] && (f = tn(a, i, t, m, c, P))
                      ? f.priority && (u = 1)
                      : (h[a] = l =
                          en.call(
                            t,
                            c,
                            a,
                            "get",
                            i[a],
                            m,
                            P,
                            0,
                            y.stringFilter
                          ));
                t._op && t._op[r] && t.kill(c, t._op[r]),
                  H &&
                    t._pt &&
                    ((Zt = t),
                    s.killTweensOf(c, h, t.globalTime(0)),
                    (v = !t.parent),
                    (Zt = 0)),
                  t._pt && x && (me[d.id] = 1);
              }
              u && wn(t), t._onInit && t._onInit(t);
            }
            (t._from = !I && !!y.runBackwards),
              (t._onUpdate = T),
              (t._initted = (!t._op || t._pt) && !v);
          },
          rn = function (e, t, n, i, r) {
            return W(e)
              ? e.call(t, n, i, r)
              : z(e) && ~e.indexOf("random(")
              ? _t(e)
              : e;
          },
          on = we + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
          sn = (on + ",id,stagger,delay,duration,paused,scrollTrigger").split(
            ","
          ),
          an = (function (e) {
            function t(t, n, r, a) {
              var l;
              "number" == typeof n && ((r.duration = n), (n = r), (r = null));
              var c,
                u,
                d,
                p,
                f,
                h,
                m,
                g,
                v = (l = e.call(this, a ? n : He(n), r) || this).vars,
                y = v.duration,
                b = v.delay,
                w = v.immediateRender,
                _ = v.stagger,
                x = v.overwrite,
                T = v.keyframes,
                C = v.defaults,
                S = v.scrollTrigger,
                k = v.yoyoEase,
                E = l.parent,
                A = (Z(t) || G(t) ? Y(t[0]) : "length" in n) ? [t] : ct(t);
              if (
                ((l._targets = A.length
                  ? _e(A)
                  : ue(
                      "GSAP target " + t + " not found. https://greensock.com",
                      !j.nullTargetWarn
                    ) || []),
                (l._ptLookup = []),
                (l._overwrite = x),
                T || _ || K(y) || K(b))
              ) {
                if (
                  ((n = l.vars),
                  (c = l.timeline =
                    new Gt({ data: "nested", defaults: C || {} })).kill(),
                  (c.parent = c._dp = i(l)),
                  (c._start = 0),
                  T)
                )
                  Le(c.vars.defaults, { ease: "none" }),
                    T.forEach(function (e) {
                      return c.to(A, e, ">");
                    });
                else {
                  if (((p = A.length), (m = _ ? dt(_) : pe), X(_)))
                    for (f in _)
                      ~on.indexOf(f) && (g || (g = {}), (g[f] = _[f]));
                  for (u = 0; u < p; u++) {
                    for (f in ((d = {}), n)) sn.indexOf(f) < 0 && (d[f] = n[f]);
                    (d.stagger = 0),
                      k && (d.yoyoEase = k),
                      g && $e(d, g),
                      (h = A[u]),
                      (d.duration = +rn(y, i(l), u, h, A)),
                      (d.delay = (+rn(b, i(l), u, h, A) || 0) - l._delay),
                      !_ &&
                        1 === p &&
                        d.delay &&
                        ((l._delay = b = d.delay),
                        (l._start += b),
                        (d.delay = 0)),
                      c.to(h, d, m(u, h, A));
                  }
                  c.duration() ? (y = b = 0) : (l.timeline = 0);
                }
                y || l.duration((y = c.duration()));
              } else l.timeline = 0;
              return (
                !0 !== x || o || ((Zt = i(l)), s.killTweensOf(A), (Zt = 0)),
                E && Xe(E, i(l)),
                (w ||
                  (!y &&
                    !T &&
                    l._start === Se(E._time) &&
                    V(w) &&
                    Re(i(l)) &&
                    "nested" !== E.data)) &&
                  ((l._tTime = -1e-8), l.render(Math.max(0, -b))),
                S && Qe(i(l), S),
                l
              );
            }
            r(t, e);
            var n = t.prototype;
            return (
              (n.render = function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p = this._time,
                  f = this._tDur,
                  h = this._dur,
                  m = e > f - N && e >= 0 ? f : e < N ? 0 : e;
                if (h) {
                  if (
                    m !== this._tTime ||
                    !e ||
                    n ||
                    (!this._initted && this._tTime) ||
                    (this._startAt && this._zTime < 0 != e < 0)
                  ) {
                    if (((i = m), (u = this.timeline), this._repeat)) {
                      if (((s = h + this._rDelay), this._repeat < -1 && e < 0))
                        return this.totalTime(100 * s + e, t, n);
                      if (
                        ((i = Se(m % s)),
                        m === f
                          ? ((o = this._repeat), (i = h))
                          : ((o = ~~(m / s)) && o === m / s && ((i = h), o--),
                            i > h && (i = h)),
                        (l = this._yoyo && 1 & o) &&
                          ((d = this._yEase), (i = h - i)),
                        (a = ze(this._tTime, s)),
                        i === p && !n && this._initted)
                      )
                        return this;
                      o !== a &&
                        (u && this._yEase && zt(u, l),
                        !this.vars.repeatRefresh ||
                          l ||
                          this._lock ||
                          ((this._lock = n = 1),
                          (this.render(Se(s * o), !0).invalidate()._lock = 0)));
                    }
                    if (!this._initted) {
                      if (Ke(this, e < 0 ? e : i, n, t))
                        return (this._tTime = 0), this;
                      if (h !== this._dur) return this.render(e, t, n);
                    }
                    for (
                      this._tTime = m,
                        this._time = i,
                        !this._act &&
                          this._ts &&
                          ((this._act = 1), (this._lazy = 0)),
                        this.ratio = c = (d || this._ease)(i / h),
                        this._from && (this.ratio = c = 1 - c),
                        i && !p && !t && St(this, "onStart"),
                        r = this._pt;
                      r;

                    )
                      r.r(c, r.d), (r = r._next);
                    (u &&
                      u.render(
                        e < 0 ? e : !i && l ? -1e-8 : u._dur * c,
                        t,
                        n
                      )) ||
                      (this._startAt && (this._zTime = e)),
                      this._onUpdate &&
                        !t &&
                        (e < 0 &&
                          this._startAt &&
                          this._startAt.render(e, !0, n),
                        St(this, "onUpdate")),
                      this._repeat &&
                        o !== a &&
                        this.vars.onRepeat &&
                        !t &&
                        this.parent &&
                        St(this, "onRepeat"),
                      (m !== this._tDur && m) ||
                        this._tTime !== m ||
                        (e < 0 &&
                          this._startAt &&
                          !this._onUpdate &&
                          this._startAt.render(e, !0, !0),
                        (e || !h) &&
                          ((m === this._tDur && this._ts > 0) ||
                            (!m && this._ts < 0)) &&
                          qe(this, 1),
                        t ||
                          (e < 0 && !p) ||
                          (!m && !p) ||
                          (St(
                            this,
                            m === f ? "onComplete" : "onReverseComplete",
                            !0
                          ),
                          this._prom &&
                            !(m < f && this.timeScale() > 0) &&
                            this._prom()));
                  }
                } else
                  !(function (e, t, n, i) {
                    var r,
                      o,
                      s,
                      a = e.ratio,
                      l =
                        t < 0 ||
                        (!t &&
                          ((!e._start && Ge(e)) ||
                            ((e._ts < 0 || e._dp._ts < 0) &&
                              "isFromStart" !== e.data &&
                              "isStart" !== e.data)))
                          ? 0
                          : 1,
                      c = e._rDelay,
                      u = 0;
                    if (
                      (c &&
                        e._repeat &&
                        ((u = it(0, e._tDur, t)),
                        (o = ze(u, c)),
                        (s = ze(e._tTime, c)),
                        e._yoyo && 1 & o && (l = 1 - l),
                        o !== s &&
                          ((a = 1 - l),
                          e.vars.repeatRefresh &&
                            e._initted &&
                            e.invalidate())),
                      l !== a || i || e._zTime === N || (!t && e._zTime))
                    ) {
                      if (!e._initted && Ke(e, t, i, n)) return;
                      for (
                        s = e._zTime,
                          e._zTime = t || (n ? N : 0),
                          n || (n = t && !s),
                          e.ratio = l,
                          e._from && (l = 1 - l),
                          e._time = 0,
                          e._tTime = u,
                          r = e._pt;
                        r;

                      )
                        r.r(l, r.d), (r = r._next);
                      e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                        e._onUpdate && !n && St(e, "onUpdate"),
                        u && e._repeat && !n && e.parent && St(e, "onRepeat"),
                        (t >= e._tDur || t < 0) &&
                          e.ratio === l &&
                          (l && qe(e, 1),
                          n ||
                            (St(e, l ? "onComplete" : "onReverseComplete", !0),
                            e._prom && e._prom()));
                    } else e._zTime || (e._zTime = t);
                  })(this, e, t, n);
                return this;
              }),
              (n.targets = function () {
                return this._targets;
              }),
              (n.invalidate = function () {
                return (
                  (this._pt =
                    this._op =
                    this._startAt =
                    this._onUpdate =
                    this._lazy =
                    this.ratio =
                      0),
                  (this._ptLookup = []),
                  this.timeline && this.timeline.invalidate(),
                  e.prototype.invalidate.call(this)
                );
              }),
              (n.kill = function (e, t) {
                if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
                  return (
                    (this._lazy = this._pt = 0), this.parent ? kt(this) : this
                  );
                if (this.timeline) {
                  var n = this.timeline.totalDuration();
                  return (
                    this.timeline.killTweensOf(
                      e,
                      t,
                      Zt && !0 !== Zt.vars.overwrite
                    )._first || kt(this),
                    this.parent &&
                      n !== this.timeline.totalDuration() &&
                      Ze(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                    this
                  );
                }
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u = this._targets,
                  d = e ? ct(e) : u,
                  p = this._ptLookup,
                  f = this._pt;
                if (
                  (!t || "all" === t) &&
                  (function (e, t) {
                    for (
                      var n = e.length, i = n === t.length;
                      i && n-- && e[n] === t[n];

                    );
                    return n < 0;
                  })(u, d)
                )
                  return "all" === t && (this._pt = 0), kt(this);
                for (
                  i = this._op = this._op || [],
                    "all" !== t &&
                      (z(t) &&
                        ((a = {}),
                        Ce(t, function (e) {
                          return (a[e] = 1);
                        }),
                        (t = a)),
                      (t = (function (e, t) {
                        var n,
                          i,
                          r,
                          o,
                          s = e[0] ? xe(e[0]).harness : 0,
                          a = s && s.aliases;
                        if (!a) return t;
                        for (i in ((n = $e({}, t)), a))
                          if ((i in n))
                            for (r = (o = a[i].split(",")).length; r--; )
                              n[o[r]] = n[i];
                        return n;
                      })(u, t))),
                    c = u.length;
                  c--;

                )
                  if (~d.indexOf(u[c]))
                    for (a in ((r = p[c]),
                    "all" === t
                      ? ((i[c] = t), (s = r), (o = {}))
                      : ((o = i[c] = i[c] || {}), (s = t)),
                    s))
                      (l = r && r[a]) &&
                        (("kill" in l.d && !0 !== l.d.kill(a)) ||
                          Ie(this, l, "_pt"),
                        delete r[a]),
                        "all" !== o && (o[a] = 1);
                return this._initted && !this._pt && f && kt(this), this;
              }),
              (t.to = function (e, n) {
                return new t(e, n, arguments[2]);
              }),
              (t.from = function (e, n) {
                return new t(e, Ee(arguments, 1));
              }),
              (t.delayedCall = function (e, n, i, r) {
                return new t(n, 0, {
                  immediateRender: !1,
                  lazy: !1,
                  overwrite: !1,
                  delay: e,
                  onComplete: n,
                  onReverseComplete: n,
                  onCompleteParams: i,
                  onReverseCompleteParams: i,
                  callbackScope: r,
                });
              }),
              (t.fromTo = function (e, n, i) {
                return new t(e, Ee(arguments, 2));
              }),
              (t.set = function (e, n) {
                return (
                  (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n)
                );
              }),
              (t.killTweensOf = function (e, t, n) {
                return s.killTweensOf(e, t, n);
              }),
              t
            );
          })(Kt);
        Le(an.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0,
        }),
          Ce("staggerTo,staggerFrom,staggerFromTo", function (e) {
            an[e] = function () {
              var t = new Gt(),
                n = st.call(arguments, 0);
              return (
                n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
              );
            };
          });
        var ln = function (e, t, n) {
            return (e[t] = n);
          },
          cn = function (e, t, n) {
            return e[t](n);
          },
          un = function (e, t, n, i) {
            return e[t](i.fp, n);
          },
          dn = function (e, t, n) {
            return e.setAttribute(t, n);
          },
          pn = function (e, t) {
            return W(e[t]) ? cn : U(e[t]) && e.setAttribute ? dn : ln;
          },
          fn = function (e, t) {
            return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4, t);
          },
          hn = function (e, t) {
            return t.set(t.t, t.p, !!(t.s + t.c * e), t);
          },
          mn = function (e, t) {
            var n = t._pt,
              i = "";
            if (!e && t.b) i = t.b;
            else if (1 === e && t.e) i = t.e;
            else {
              for (; n; )
                (i =
                  n.p +
                  (n.m
                    ? n.m(n.s + n.c * e)
                    : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
                  i),
                  (n = n._next);
              i += t.c;
            }
            t.set(t.t, t.p, i, t);
          },
          gn = function (e, t) {
            for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
          },
          vn = function (e, t, n, i) {
            for (var r, o = this._pt; o; )
              (r = o._next), o.p === i && o.modifier(e, t, n), (o = r);
          },
          yn = function (e) {
            for (var t, n, i = this._pt; i; )
              (n = i._next),
                (i.p === e && !i.op) || i.op === e
                  ? Ie(this, i, "_pt")
                  : i.dep || (t = 1),
                (i = n);
            return !t;
          },
          bn = function (e, t, n, i) {
            i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
          },
          wn = function (e) {
            for (var t, n, i, r, o = e._pt; o; ) {
              for (t = o._next, n = i; n && n.pr > o.pr; ) n = n._next;
              (o._prev = n ? n._prev : r) ? (o._prev._next = o) : (i = o),
                (o._next = n) ? (n._prev = o) : (r = o),
                (o = t);
            }
            e._pt = i;
          },
          _n = (function () {
            function e(e, t, n, i, r, o, s, a, l) {
              (this.t = t),
                (this.s = i),
                (this.c = r),
                (this.p = n),
                (this.r = o || fn),
                (this.d = s || this),
                (this.set = a || ln),
                (this.pr = l || 0),
                (this._next = e),
                e && (e._prev = this);
            }
            return (
              (e.prototype.modifier = function (e, t, n) {
                (this.mSet = this.mSet || this.set),
                  (this.set = bn),
                  (this.m = e),
                  (this.mt = n),
                  (this.tween = t);
              }),
              e
            );
          })();
        Ce(
          we +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
          function (e) {
            return (fe[e] = 1);
          }
        ),
          (se.TweenMax = se.TweenLite = an),
          (se.TimelineLite = se.TimelineMax = Gt),
          (s = new Gt({
            sortChildren: !1,
            defaults: $,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (j.stringFilter = Pt);
        var xn = {
          registerPlugin: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            t.forEach(function (e) {
              return (function (e) {
                var t = (e = (!e.name && e.default) || e).name,
                  n = W(e),
                  i =
                    t && !n && e.init
                      ? function () {
                          this._props = [];
                        }
                      : e,
                  r = {
                    init: pe,
                    render: gn,
                    add: en,
                    kill: yn,
                    modifier: vn,
                    rawVars: 0,
                  },
                  o = {
                    targetTest: 0,
                    get: 0,
                    getSetter: pn,
                    aliases: {},
                    register: 0,
                  };
                if ((Ht(), e !== i)) {
                  if (ge[t]) return;
                  Le(i, Le(Ne(e, r), o)),
                    $e(i.prototype, $e(r, Ne(e, o))),
                    (ge[(i.prop = t)] = i),
                    e.targetTest && (be.push(i), (fe[t] = 1)),
                    (t =
                      ("css" === t
                        ? "CSS"
                        : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
                }
                de(t, i), e.register && e.register(Sn, i, _n);
              })(e);
            });
          },
          timeline: function (e) {
            return new Gt(e);
          },
          getTweensOf: function (e, t) {
            return s.getTweensOf(e, t);
          },
          getProperty: function (e, t, n, i) {
            z(e) && (e = ct(e)[0]);
            var r = xe(e || {}).get,
              o = n ? Me : Oe;
            return (
              "native" === n && (n = ""),
              e
                ? t
                  ? o(((ge[t] && ge[t].get) || r)(e, t, n, i))
                  : function (t, n, i) {
                      return o(((ge[t] && ge[t].get) || r)(e, t, n, i));
                    }
                : e
            );
          },
          quickSetter: function (e, t, n) {
            if ((e = ct(e)).length > 1) {
              var i = e.map(function (e) {
                  return Sn.quickSetter(e, t, n);
                }),
                r = i.length;
              return function (e) {
                for (var t = r; t--; ) i[t](e);
              };
            }
            e = e[0] || {};
            var o = ge[t],
              s = xe(e),
              a = (s.harness && (s.harness.aliases || {})[t]) || t,
              l = o
                ? function (t) {
                    var i = new o();
                    (p._pt = 0),
                      i.init(e, n ? t + n : t, p, 0, [e]),
                      i.render(1, i),
                      p._pt && gn(1, p);
                  }
                : s.set(e, a);
            return o
              ? l
              : function (t) {
                  return l(e, a, n ? t + n : t, s, 1);
                };
          },
          isTweening: function (e) {
            return s.getTweensOf(e, !0).length > 0;
          },
          defaults: function (e) {
            return e && e.ease && (e.ease = Wt(e.ease, $.ease)), Pe($, e || {});
          },
          config: function (e) {
            return Pe(j, e || {});
          },
          registerEffect: function (e) {
            var t = e.name,
              n = e.effect,
              i = e.plugins,
              r = e.defaults,
              o = e.extendTimeline;
            (i || "").split(",").forEach(function (e) {
              return (
                e &&
                !ge[e] &&
                !se[e] &&
                ue(t + " effect requires " + e + " plugin.")
              );
            }),
              (ve[t] = function (e, t, i) {
                return n(ct(e), Le(t || {}, r), i);
              }),
              o &&
                (Gt.prototype[t] = function (e, n, i) {
                  return this.add(ve[t](e, X(n) ? n : (i = n) && {}, this), i);
                });
          },
          registerEase: function (e, t) {
            It[e] = Wt(t);
          },
          parseEase: function (e, t) {
            return arguments.length ? Wt(e, t) : It;
          },
          getById: function (e) {
            return s.getById(e);
          },
          exportRoot: function (e, t) {
            void 0 === e && (e = {});
            var n,
              i,
              r = new Gt(e);
            for (
              r.smoothChildTiming = V(e.smoothChildTiming),
                s.remove(r),
                r._dp = 0,
                r._time = r._tTime = s._time,
                n = s._first;
              n;

            )
              (i = n._next),
                (!t &&
                  !n._dur &&
                  n instanceof an &&
                  n.vars.onComplete === n._targets[0]) ||
                  Ve(r, n, n._start - n._delay),
                (n = i);
            return Ve(s, r, 0), r;
          },
          utils: {
            wrap: bt,
            wrapYoyo: wt,
            distribute: dt,
            random: ht,
            snap: ft,
            normalize: vt,
            getUnit: rt,
            clamp: ot,
            splitColor: Ot,
            toArray: ct,
            mapRange: xt,
            pipe: mt,
            unitize: gt,
            interpolate: Tt,
            shuffle: ut,
          },
          install: le,
          effects: ve,
          ticker: Nt,
          updateRoot: Gt.updateRoot,
          plugins: ge,
          globalTimeline: s,
          core: {
            PropTween: _n,
            globals: de,
            Tween: an,
            Timeline: Gt,
            Animation: Kt,
            getCache: xe,
            _removeLinkedListItem: Ie,
            suppressOverwrites: function (e) {
              return (o = e);
            },
          },
        };
        Ce("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
          return (xn[e] = an[e]);
        }),
          Nt.add(Gt.updateRoot),
          (p = xn.to({}, { duration: 0 }));
        var Tn = function (e, t) {
            for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
              n = n._next;
            return n;
          },
          Cn = function (e, t) {
            return {
              name: e,
              rawVars: 1,
              init: function (e, n, i) {
                i._onInit = function (e) {
                  var i, r;
                  if (
                    (z(n) &&
                      ((i = {}),
                      Ce(n, function (e) {
                        return (i[e] = 1);
                      }),
                      (n = i)),
                    t)
                  ) {
                    for (r in ((i = {}), n)) i[r] = t(n[r]);
                    n = i;
                  }
                  !(function (e, t) {
                    var n,
                      i,
                      r,
                      o = e._targets;
                    for (n in t)
                      for (i = o.length; i--; )
                        (r = e._ptLookup[i][n]) &&
                          (r = r.d) &&
                          (r._pt && (r = Tn(r, n)),
                          r && r.modifier && r.modifier(t[n], e, o[i], n));
                  })(e, n);
                };
              },
            };
          },
          Sn =
            xn.registerPlugin(
              {
                name: "attr",
                init: function (e, t, n, i, r) {
                  var o, s;
                  for (o in t)
                    (s = this.add(
                      e,
                      "setAttribute",
                      (e.getAttribute(o) || 0) + "",
                      t[o],
                      i,
                      r,
                      0,
                      0,
                      o
                    )) && (s.op = o),
                      this._props.push(o);
                },
              },
              {
                name: "endArray",
                init: function (e, t) {
                  for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n]);
                },
              },
              Cn("roundProps", pt),
              Cn("modifiers"),
              Cn("snap", ft)
            ) || xn;
        (an.version = Gt.version = Sn.version = "3.6.1"), (u = 1), Q() && Ht();
        var kn = It.Power0,
          En = It.Power1,
          An = It.Power2,
          Dn = It.Power3,
          On = It.Power4,
          Mn = It.Linear,
          Ln = It.Quad,
          jn = It.Cubic,
          $n = It.Quart,
          Pn = It.Quint,
          Nn = It.Strong,
          Hn = It.Elastic,
          In = It.Back,
          qn = It.SteppedEase,
          Fn = It.Bounce,
          Rn = It.Sine,
          Bn = It.Expo,
          zn = It.Circ;
      },
    "./node_modules/gsap/index.js":
      /*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
      /*! exports provided: gsap, default, CSSPlugin, TweenMax, TweenLite, TimelineMax, TimelineLite, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ */ function (
        e,
        t,
        n
      ) {
        "use strict";
        n.r(t),
          n.d(t, "gsap", function () {
            return o;
          }),
          n.d(t, "default", function () {
            return o;
          }),
          n.d(t, "TweenMax", function () {
            return s;
          });
        var i = n(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
        n.d(t, "TweenLite", function () {
          return i.TweenLite;
        }),
          n.d(t, "TimelineMax", function () {
            return i.TimelineMax;
          }),
          n.d(t, "TimelineLite", function () {
            return i.TimelineLite;
          }),
          n.d(t, "Power0", function () {
            return i.Power0;
          }),
          n.d(t, "Power1", function () {
            return i.Power1;
          }),
          n.d(t, "Power2", function () {
            return i.Power2;
          }),
          n.d(t, "Power3", function () {
            return i.Power3;
          }),
          n.d(t, "Power4", function () {
            return i.Power4;
          }),
          n.d(t, "Linear", function () {
            return i.Linear;
          }),
          n.d(t, "Quad", function () {
            return i.Quad;
          }),
          n.d(t, "Cubic", function () {
            return i.Cubic;
          }),
          n.d(t, "Quart", function () {
            return i.Quart;
          }),
          n.d(t, "Quint", function () {
            return i.Quint;
          }),
          n.d(t, "Strong", function () {
            return i.Strong;
          }),
          n.d(t, "Elastic", function () {
            return i.Elastic;
          }),
          n.d(t, "Back", function () {
            return i.Back;
          }),
          n.d(t, "SteppedEase", function () {
            return i.SteppedEase;
          }),
          n.d(t, "Bounce", function () {
            return i.Bounce;
          }),
          n.d(t, "Sine", function () {
            return i.Sine;
          }),
          n.d(t, "Expo", function () {
            return i.Expo;
          }),
          n.d(t, "Circ", function () {
            return i.Circ;
          });
        var r = n(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");
        n.d(t, "CSSPlugin", function () {
          return r.CSSPlugin;
        });
        var o = i.gsap.registerPlugin(r.CSSPlugin) || i.gsap,
          s = o.core.Tween;
      },
    "./node_modules/jquery/dist/jquery.js":
      /*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
      /*! no static exports found */ function (e, t, n) {
        /*!
         * jQuery JavaScript Library v3.6.0
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2021-03-02T17:08Z
         */
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (e, t) {
          "use strict";
          var n = [],
            i = Object.getPrototypeOf,
            r = n.slice,
            o = n.flat
              ? function (e) {
                  return n.flat.call(e);
                }
              : function (e) {
                  return n.concat.apply([], e);
                },
            s = n.push,
            a = n.indexOf,
            l = {},
            c = l.toString,
            u = l.hasOwnProperty,
            d = u.toString,
            p = d.call(Object),
            f = {},
            h = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            m = function (e) {
              return null != e && e === e.window;
            },
            g = e.document,
            v = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function y(e, t, n) {
            var i,
              r,
              o = (n = n || g).createElement("script");
            if (((o.text = e), t))
              for (i in v)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function b(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? l[c.call(e)] || "object"
              : typeof e;
          }
          var w = "3.6.0",
            _ = function (e, t) {
              return new _.fn.init(e, t);
            };
          function x(e) {
            var t = !!e && "length" in e && e.length,
              n = b(e);
            return (
              !h(e) &&
              !m(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (_.fn = _.prototype =
            {
              jquery: w,
              constructor: _,
              length: 0,
              toArray: function () {
                return r.call(this);
              },
              get: function (e) {
                return null == e
                  ? r.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = _.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return _.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  _.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(r.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  _.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  _.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: s,
              sort: n.sort,
              splice: n.splice,
            }),
            (_.extend = _.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  o,
                  s = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof s &&
                    ((c = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || h(s) || (s = {}),
                    a === l && ((s = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          s !== i &&
                          (c &&
                          i &&
                          (_.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = s[t]),
                              (o =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || _.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (s[t] = _.extend(c, o, i)))
                            : void 0 !== i && (s[t] = i));
                return s;
              }),
            _.extend({
              expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== c.call(e)) &&
                  (!(t = i(e)) ||
                    ("function" ==
                      typeof (n = u.call(t, "constructor") && t.constructor) &&
                      d.call(n) === p))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                y(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (x(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (x(Object(e))
                      ? _.merge(n, "string" == typeof e ? [e] : e)
                      : s.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : a.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                  !t(e[r], r) !== s && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  s = 0,
                  a = [];
                if (x(e))
                  for (i = e.length; s < i; s++)
                    null != (r = t(e[s], s, n)) && a.push(r);
                else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
                return o(a);
              },
              guid: 1,
              support: f,
            }),
            "function" == typeof Symbol &&
              (_.fn[Symbol.iterator] = n[Symbol.iterator]),
            _.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                l["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var T =
            /*!
             * Sizzle CSS Selector Engine v2.3.6
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2021-02-16
             */
            (function (e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g,
                v,
                y,
                b,
                w = "sizzle" + 1 * new Date(),
                _ = e.document,
                x = 0,
                T = 0,
                C = le(),
                S = le(),
                k = le(),
                E = le(),
                A = function (e, t) {
                  return e === t && (d = !0), 0;
                },
                D = {}.hasOwnProperty,
                O = [],
                M = O.pop,
                L = O.push,
                j = O.push,
                $ = O.slice,
                P = function (e, t) {
                  for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                  return -1;
                },
                N =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                H = "[\\x20\\t\\r\\n\\f]",
                I =
                  "(?:\\\\[\\da-fA-F]{1,6}" +
                  H +
                  "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                q =
                  "\\[" +
                  H +
                  "*(" +
                  I +
                  ")(?:" +
                  H +
                  "*([*^$|!~]?=)" +
                  H +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  I +
                  "))|)" +
                  H +
                  "*\\]",
                F =
                  ":(" +
                  I +
                  ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                  q +
                  ")*)|.*)\\)|)",
                R = new RegExp(H + "+", "g"),
                B = new RegExp(
                  "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
                  "g"
                ),
                z = new RegExp("^" + H + "*," + H + "*"),
                W = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                Y = new RegExp(H + "|>"),
                U = new RegExp(F),
                X = new RegExp("^" + I + "$"),
                V = {
                  ID: new RegExp("^#(" + I + ")"),
                  CLASS: new RegExp("^\\.(" + I + ")"),
                  TAG: new RegExp("^(" + I + "|[*])"),
                  ATTR: new RegExp("^" + q),
                  PSEUDO: new RegExp("^" + F),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      H +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      H +
                      "*(?:([+-]|)" +
                      H +
                      "*(\\d+)|))" +
                      H +
                      "*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + N + ")$", "i"),
                  needsContext: new RegExp(
                    "^" +
                      H +
                      "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                      H +
                      "*((?:-\\d)?\\d*)" +
                      H +
                      "*\\)|)(?=[^-]|$)",
                    "i"
                  ),
                },
                Q = /HTML$/i,
                K = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp(
                  "\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])",
                  "g"
                ),
                ne = function (e, t) {
                  var n = "0x" + e.slice(1) - 65536;
                  return (
                    t ||
                    (n < 0
                      ? String.fromCharCode(n + 65536)
                      : String.fromCharCode(
                          (n >> 10) | 55296,
                          (1023 & n) | 56320
                        ))
                  );
                },
                ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                re = function (e, t) {
                  return t
                    ? "\0" === e
                      ? "�"
                      : e.slice(0, -1) +
                        "\\" +
                        e.charCodeAt(e.length - 1).toString(16) +
                        " "
                    : "\\" + e;
                },
                oe = function () {
                  p();
                },
                se = we(
                  function (e) {
                    return (
                      !0 === e.disabled &&
                      "fieldset" === e.nodeName.toLowerCase()
                    );
                  },
                  { dir: "parentNode", next: "legend" }
                );
              try {
                j.apply((O = $.call(_.childNodes)), _.childNodes),
                  O[_.childNodes.length].nodeType;
              } catch (e) {
                j = {
                  apply: O.length
                    ? function (e, t) {
                        L.apply(e, $.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                        e.length = n - 1;
                      },
                };
              }
              function ae(e, t, i, r) {
                var o,
                  a,
                  c,
                  u,
                  d,
                  h,
                  v,
                  y = t && t.ownerDocument,
                  _ = t ? t.nodeType : 9;
                if (
                  ((i = i || []),
                  "string" != typeof e ||
                    !e ||
                    (1 !== _ && 9 !== _ && 11 !== _))
                )
                  return i;
                if (!r && (p(t), (t = t || f), m)) {
                  if (11 !== _ && (d = J.exec(e)))
                    if ((o = d[1])) {
                      if (9 === _) {
                        if (!(c = t.getElementById(o))) return i;
                        if (c.id === o) return i.push(c), i;
                      } else if (
                        y &&
                        (c = y.getElementById(o)) &&
                        b(t, c) &&
                        c.id === o
                      )
                        return i.push(c), i;
                    } else {
                      if (d[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                      if (
                        (o = d[3]) &&
                        n.getElementsByClassName &&
                        t.getElementsByClassName
                      )
                        return j.apply(i, t.getElementsByClassName(o)), i;
                    }
                  if (
                    n.qsa &&
                    !E[e + " "] &&
                    (!g || !g.test(e)) &&
                    (1 !== _ || "object" !== t.nodeName.toLowerCase())
                  ) {
                    if (
                      ((v = e), (y = t), 1 === _ && (Y.test(e) || W.test(e)))
                    ) {
                      for (
                        ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                          n.scope) ||
                          ((u = t.getAttribute("id"))
                            ? (u = u.replace(ie, re))
                            : t.setAttribute("id", (u = w))),
                          a = (h = s(e)).length;
                        a--;

                      )
                        h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                      v = h.join(",");
                    }
                    try {
                      return j.apply(i, y.querySelectorAll(v)), i;
                    } catch (t) {
                      E(e, !0);
                    } finally {
                      u === w && t.removeAttribute("id");
                    }
                  }
                }
                return l(e.replace(B, "$1"), t, i, r);
              }
              function le() {
                var e = [];
                return function t(n, r) {
                  return (
                    e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                    (t[n + " "] = r)
                  );
                };
              }
              function ce(e) {
                return (e[w] = !0), e;
              }
              function ue(e) {
                var t = f.createElement("fieldset");
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function de(e, t) {
                for (var n = e.split("|"), r = n.length; r--; )
                  i.attrHandle[n[r]] = t;
              }
              function pe(e, t) {
                var n = t && e,
                  i =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function fe(e) {
                return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
              }
              function he(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
                };
              }
              function me(e) {
                return function (t) {
                  return "form" in t
                    ? t.parentNode && !1 === t.disabled
                      ? "label" in t
                        ? "label" in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e ||
                          (t.isDisabled !== !e && se(t) === e)
                      : t.disabled === e
                    : "label" in t && t.disabled === e;
                };
              }
              function ge(e) {
                return ce(function (t) {
                  return (
                    (t = +t),
                    ce(function (n, i) {
                      for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                    })
                  );
                });
              }
              function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (t in ((n = ae.support = {}),
              (o = ae.isXML =
                function (e) {
                  var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                  return !Q.test(t || (n && n.nodeName) || "HTML");
                }),
              (p = ae.setDocument =
                function (e) {
                  var t,
                    r,
                    s = e ? e.ownerDocument || e : _;
                  return s != f && 9 === s.nodeType && s.documentElement
                    ? ((h = (f = s).documentElement),
                      (m = !o(f)),
                      _ != f &&
                        (r = f.defaultView) &&
                        r.top !== r &&
                        (r.addEventListener
                          ? r.addEventListener("unload", oe, !1)
                          : r.attachEvent && r.attachEvent("onunload", oe)),
                      (n.scope = ue(function (e) {
                        return (
                          h.appendChild(e).appendChild(f.createElement("div")),
                          void 0 !== e.querySelectorAll &&
                            !e.querySelectorAll(":scope fieldset div").length
                        );
                      })),
                      (n.attributes = ue(function (e) {
                        return (
                          (e.className = "i"), !e.getAttribute("className")
                        );
                      })),
                      (n.getElementsByTagName = ue(function (e) {
                        return (
                          e.appendChild(f.createComment("")),
                          !e.getElementsByTagName("*").length
                        );
                      })),
                      (n.getElementsByClassName = Z.test(
                        f.getElementsByClassName
                      )),
                      (n.getById = ue(function (e) {
                        return (
                          (h.appendChild(e).id = w),
                          !f.getElementsByName || !f.getElementsByName(w).length
                        );
                      })),
                      n.getById
                        ? ((i.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              return e.getAttribute("id") === t;
                            };
                          }),
                          (i.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && m) {
                              var n = t.getElementById(e);
                              return n ? [n] : [];
                            }
                          }))
                        : ((i.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              var n =
                                void 0 !== e.getAttributeNode &&
                                e.getAttributeNode("id");
                              return n && n.value === t;
                            };
                          }),
                          (i.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && m) {
                              var n,
                                i,
                                r,
                                o = t.getElementById(e);
                              if (o) {
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                                for (
                                  r = t.getElementsByName(e), i = 0;
                                  (o = r[i++]);

                                )
                                  if (
                                    (n = o.getAttributeNode("id")) &&
                                    n.value === e
                                  )
                                    return [o];
                              }
                              return [];
                            }
                          })),
                      (i.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName
                              ? t.getElementsByTagName(e)
                              : n.qsa
                              ? t.querySelectorAll(e)
                              : void 0;
                          }
                        : function (e, t) {
                            var n,
                              i = [],
                              r = 0,
                              o = t.getElementsByTagName(e);
                            if ("*" === e) {
                              for (; (n = o[r++]); )
                                1 === n.nodeType && i.push(n);
                              return i;
                            }
                            return o;
                          }),
                      (i.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                          if (void 0 !== t.getElementsByClassName && m)
                            return t.getElementsByClassName(e);
                        }),
                      (v = []),
                      (g = []),
                      (n.qsa = Z.test(f.querySelectorAll)) &&
                        (ue(function (e) {
                          var t;
                          (h.appendChild(e).innerHTML =
                            "<a id='" +
                            w +
                            "'></a><select id='" +
                            w +
                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                              g.push("[*^$]=" + H + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length ||
                              g.push("\\[" + H + "*(?:value|" + N + ")"),
                            e.querySelectorAll("[id~=" + w + "-]").length ||
                              g.push("~="),
                            (t = f.createElement("input")).setAttribute(
                              "name",
                              ""
                            ),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length ||
                              g.push(
                                "\\[" +
                                  H +
                                  "*name" +
                                  H +
                                  "*=" +
                                  H +
                                  "*(?:''|\"\")"
                              ),
                            e.querySelectorAll(":checked").length ||
                              g.push(":checked"),
                            e.querySelectorAll("a#" + w + "+*").length ||
                              g.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            g.push("[\\r\\n\\f]");
                        }),
                        ue(function (e) {
                          e.innerHTML =
                            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = f.createElement("input");
                          t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length &&
                              g.push("name" + H + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length &&
                              g.push(":enabled", ":disabled"),
                            (h.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length &&
                              g.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            g.push(",.*:");
                        })),
                      (n.matchesSelector = Z.test(
                        (y =
                          h.matches ||
                          h.webkitMatchesSelector ||
                          h.mozMatchesSelector ||
                          h.oMatchesSelector ||
                          h.msMatchesSelector)
                      )) &&
                        ue(function (e) {
                          (n.disconnectedMatch = y.call(e, "*")),
                            y.call(e, "[s!='']:x"),
                            v.push("!=", F);
                        }),
                      (g = g.length && new RegExp(g.join("|"))),
                      (v = v.length && new RegExp(v.join("|"))),
                      (t = Z.test(h.compareDocumentPosition)),
                      (b =
                        t || Z.test(h.contains)
                          ? function (e, t) {
                              var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                              return (
                                e === i ||
                                !(
                                  !i ||
                                  1 !== i.nodeType ||
                                  !(n.contains
                                    ? n.contains(i)
                                    : e.compareDocumentPosition &&
                                      16 & e.compareDocumentPosition(i))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t)
                                for (; (t = t.parentNode); )
                                  if (t === e) return !0;
                              return !1;
                            }),
                      (A = t
                        ? function (e, t) {
                            if (e === t) return (d = !0), 0;
                            var i =
                              !e.compareDocumentPosition -
                              !t.compareDocumentPosition;
                            return (
                              i ||
                              (1 &
                                (i =
                                  (e.ownerDocument || e) ==
                                  (t.ownerDocument || t)
                                    ? e.compareDocumentPosition(t)
                                    : 1) ||
                              (!n.sortDetached &&
                                t.compareDocumentPosition(e) === i)
                                ? e == f || (e.ownerDocument == _ && b(_, e))
                                  ? -1
                                  : t == f || (t.ownerDocument == _ && b(_, t))
                                  ? 1
                                  : u
                                  ? P(u, e) - P(u, t)
                                  : 0
                                : 4 & i
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (d = !0), 0;
                            var n,
                              i = 0,
                              r = e.parentNode,
                              o = t.parentNode,
                              s = [e],
                              a = [t];
                            if (!r || !o)
                              return e == f
                                ? -1
                                : t == f
                                ? 1
                                : r
                                ? -1
                                : o
                                ? 1
                                : u
                                ? P(u, e) - P(u, t)
                                : 0;
                            if (r === o) return pe(e, t);
                            for (n = e; (n = n.parentNode); ) s.unshift(n);
                            for (n = t; (n = n.parentNode); ) a.unshift(n);
                            for (; s[i] === a[i]; ) i++;
                            return i
                              ? pe(s[i], a[i])
                              : s[i] == _
                              ? -1
                              : a[i] == _
                              ? 1
                              : 0;
                          }),
                      f)
                    : f;
                }),
              (ae.matches = function (e, t) {
                return ae(e, null, null, t);
              }),
              (ae.matchesSelector = function (e, t) {
                if (
                  (p(e),
                  n.matchesSelector &&
                    m &&
                    !E[t + " "] &&
                    (!v || !v.test(t)) &&
                    (!g || !g.test(t)))
                )
                  try {
                    var i = y.call(e, t);
                    if (
                      i ||
                      n.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return i;
                  } catch (e) {
                    E(t, !0);
                  }
                return ae(t, f, null, [e]).length > 0;
              }),
              (ae.contains = function (e, t) {
                return (e.ownerDocument || e) != f && p(e), b(e, t);
              }),
              (ae.attr = function (e, t) {
                (e.ownerDocument || e) != f && p(e);
                var r = i.attrHandle[t.toLowerCase()],
                  o =
                    r && D.call(i.attrHandle, t.toLowerCase())
                      ? r(e, t, !m)
                      : void 0;
                return void 0 !== o
                  ? o
                  : n.attributes || !m
                  ? e.getAttribute(t)
                  : (o = e.getAttributeNode(t)) && o.specified
                  ? o.value
                  : null;
              }),
              (ae.escape = function (e) {
                return (e + "").replace(ie, re);
              }),
              (ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (ae.uniqueSort = function (e) {
                var t,
                  i = [],
                  r = 0,
                  o = 0;
                if (
                  ((d = !n.detectDuplicates),
                  (u = !n.sortStable && e.slice(0)),
                  e.sort(A),
                  d)
                ) {
                  for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                  for (; r--; ) e.splice(i[r], 1);
                }
                return (u = null), e;
              }),
              (r = ae.getText =
                function (e) {
                  var t,
                    n = "",
                    i = 0,
                    o = e.nodeType;
                  if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                      if ("string" == typeof e.textContent)
                        return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                  } else for (; (t = e[i++]); ) n += r(t);
                  return n;
                }),
              (i = ae.selectors =
                {
                  cacheLength: 50,
                  createPseudo: ce,
                  match: V,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(te, ne)),
                        (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3)
                          ? (e[3] || ae.error(e[0]),
                            (e[4] = +(e[4]
                              ? e[5] + (e[6] || 1)
                              : 2 * ("even" === e[3] || "odd" === e[3]))),
                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                          : e[3] && ae.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return V.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || "")
                            : n &&
                              U.test(n) &&
                              (t = s(n, !0)) &&
                              (t = n.indexOf(")", n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)),
                              (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(te, ne).toLowerCase();
                      return "*" === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = C[e + " "];
                      return (
                        t ||
                        ((t = new RegExp(
                          "(^|" + H + ")" + e + "(" + H + "|$)"
                        )) &&
                          C(e, function (e) {
                            return t.test(
                              ("string" == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute &&
                                  e.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, n) {
                      return function (i) {
                        var r = ae.attr(i, e);
                        return null == r
                          ? "!=" === t
                          : !t ||
                              ((r += ""),
                              "=" === t
                                ? r === n
                                : "!=" === t
                                ? r !== n
                                : "^=" === t
                                ? n && 0 === r.indexOf(n)
                                : "*=" === t
                                ? n && r.indexOf(n) > -1
                                : "$=" === t
                                ? n && r.slice(-n.length) === n
                                : "~=" === t
                                ? (" " + r.replace(R, " ") + " ").indexOf(n) >
                                  -1
                                : "|=" === t &&
                                  (r === n ||
                                    r.slice(0, n.length + 1) === n + "-"));
                      };
                    },
                    CHILD: function (e, t, n, i, r) {
                      var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                      return 1 === i && 0 === r
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, n, l) {
                            var c,
                              u,
                              d,
                              p,
                              f,
                              h,
                              m = o !== s ? "nextSibling" : "previousSibling",
                              g = t.parentNode,
                              v = a && t.nodeName.toLowerCase(),
                              y = !l && !a,
                              b = !1;
                            if (g) {
                              if (o) {
                                for (; m; ) {
                                  for (p = t; (p = p[m]); )
                                    if (
                                      a
                                        ? p.nodeName.toLowerCase() === v
                                        : 1 === p.nodeType
                                    )
                                      return !1;
                                  h = m = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                              }
                              if (
                                ((h = [s ? g.firstChild : g.lastChild]), s && y)
                              ) {
                                for (
                                  b =
                                    (f =
                                      (c =
                                        (u =
                                          (d = (p = g)[w] || (p[w] = {}))[
                                            p.uniqueID
                                          ] || (d[p.uniqueID] = {}))[e] ||
                                        [])[0] === x && c[1]) && c[2],
                                    p = f && g.childNodes[f];
                                  (p =
                                    (++f && p && p[m]) ||
                                    (b = f = 0) ||
                                    h.pop());

                                )
                                  if (1 === p.nodeType && ++b && p === t) {
                                    u[e] = [x, f, b];
                                    break;
                                  }
                              } else if (
                                (y &&
                                  (b = f =
                                    (c =
                                      (u =
                                        (d = (p = t)[w] || (p[w] = {}))[
                                          p.uniqueID
                                        ] || (d[p.uniqueID] = {}))[e] ||
                                      [])[0] === x && c[1]),
                                !1 === b)
                              )
                                for (
                                  ;
                                  (p =
                                    (++f && p && p[m]) ||
                                    (b = f = 0) ||
                                    h.pop()) &&
                                  ((a
                                    ? p.nodeName.toLowerCase() !== v
                                    : 1 !== p.nodeType) ||
                                    !++b ||
                                    (y &&
                                      ((u =
                                        (d = p[w] || (p[w] = {}))[p.uniqueID] ||
                                        (d[p.uniqueID] = {}))[e] = [x, b]),
                                    p !== t));

                                );
                              return (
                                (b -= r) === i || (b % i == 0 && b / i >= 0)
                              );
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var n,
                        r =
                          i.pseudos[e] ||
                          i.setFilters[e.toLowerCase()] ||
                          ae.error("unsupported pseudo: " + e);
                      return r[w]
                        ? r(t)
                        : r.length > 1
                        ? ((n = [e, e, "", t]),
                          i.setFilters.hasOwnProperty(e.toLowerCase())
                            ? ce(function (e, n) {
                                for (var i, o = r(e, t), s = o.length; s--; )
                                  e[(i = P(e, o[s]))] = !(n[i] = o[s]);
                              })
                            : function (e) {
                                return r(e, 0, n);
                              })
                        : r;
                    },
                  },
                  pseudos: {
                    not: ce(function (e) {
                      var t = [],
                        n = [],
                        i = a(e.replace(B, "$1"));
                      return i[w]
                        ? ce(function (e, t, n, r) {
                            for (
                              var o, s = i(e, null, r, []), a = e.length;
                              a--;

                            )
                              (o = s[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, r, o) {
                            return (
                              (t[0] = e),
                              i(t, null, o, n),
                              (t[0] = null),
                              !n.pop()
                            );
                          };
                    }),
                    has: ce(function (e) {
                      return function (t) {
                        return ae(e, t).length > 0;
                      };
                    }),
                    contains: ce(function (e) {
                      return (
                        (e = e.replace(te, ne)),
                        function (t) {
                          return (t.textContent || r(t)).indexOf(e) > -1;
                        }
                      );
                    }),
                    lang: ce(function (e) {
                      return (
                        X.test(e || "") || ae.error("unsupported lang: " + e),
                        (e = e.replace(te, ne).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if (
                              (n = m
                                ? t.lang
                                : t.getAttribute("xml:lang") ||
                                  t.getAttribute("lang"))
                            )
                              return (
                                (n = n.toLowerCase()) === e ||
                                0 === n.indexOf(e + "-")
                              );
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === h;
                    },
                    focus: function (e) {
                      return (
                        e === f.activeElement &&
                        (!f.hasFocus || f.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && !!e.checked) ||
                        ("option" === t && !!e.selected)
                      );
                    },
                    selected: function (e) {
                      return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                      );
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !i.pseudos.empty(e);
                    },
                    header: function (e) {
                      return G.test(e.nodeName);
                    },
                    input: function (e) {
                      return K.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && "button" === e.type) || "button" === t
                      );
                    },
                    text: function (e) {
                      var t;
                      return (
                        "input" === e.nodeName.toLowerCase() &&
                        "text" === e.type &&
                        (null == (t = e.getAttribute("type")) ||
                          "text" === t.toLowerCase())
                      );
                    },
                    first: ge(function () {
                      return [0];
                    }),
                    last: ge(function (e, t) {
                      return [t - 1];
                    }),
                    eq: ge(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: ge(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: ge(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: ge(function (e, t, n) {
                      for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                        e.push(i);
                      return e;
                    }),
                    gt: ge(function (e, t, n) {
                      for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                      return e;
                    }),
                  },
                }),
              (i.pseudos.nth = i.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                i.pseudos[t] = fe(t);
              for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
              function ye() {}
              function be(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)
                  i += e[t].value;
                return i;
              }
              function we(e, t, n) {
                var i = t.dir,
                  r = t.next,
                  o = r || i,
                  s = n && "parentNode" === o,
                  a = T++;
                return t.first
                  ? function (t, n, r) {
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || s) return e(t, n, r);
                      return !1;
                    }
                  : function (t, n, l) {
                      var c,
                        u,
                        d,
                        p = [x, a];
                      if (l) {
                        for (; (t = t[i]); )
                          if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                      } else
                        for (; (t = t[i]); )
                          if (1 === t.nodeType || s)
                            if (
                              ((u =
                                (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                                (d[t.uniqueID] = {})),
                              r && r === t.nodeName.toLowerCase())
                            )
                              t = t[i] || t;
                            else {
                              if ((c = u[o]) && c[0] === x && c[1] === a)
                                return (p[2] = c[2]);
                              if (((u[o] = p), (p[2] = e(t, n, l)))) return !0;
                            }
                      return !1;
                    };
              }
              function _e(e) {
                return e.length > 1
                  ? function (t, n, i) {
                      for (var r = e.length; r--; )
                        if (!e[r](t, n, i)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function xe(e, t, n, i, r) {
                for (
                  var o, s = [], a = 0, l = e.length, c = null != t;
                  a < l;
                  a++
                )
                  (o = e[a]) &&
                    ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
                return s;
              }
              function Te(e, t, n, i, r, o) {
                return (
                  i && !i[w] && (i = Te(i)),
                  r && !r[w] && (r = Te(r, o)),
                  ce(function (o, s, a, l) {
                    var c,
                      u,
                      d,
                      p = [],
                      f = [],
                      h = s.length,
                      m =
                        o ||
                        (function (e, t, n) {
                          for (var i = 0, r = t.length; i < r; i++)
                            ae(e, t[i], n);
                          return n;
                        })(t || "*", a.nodeType ? [a] : a, []),
                      g = !e || (!o && t) ? m : xe(m, p, e, a, l),
                      v = n ? (r || (o ? e : h || i) ? [] : s) : g;
                    if ((n && n(g, v, a, l), i))
                      for (c = xe(v, f), i(c, [], a, l), u = c.length; u--; )
                        (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
                    if (o) {
                      if (r || e) {
                        if (r) {
                          for (c = [], u = v.length; u--; )
                            (d = v[u]) && c.push((g[u] = d));
                          r(null, (v = []), c, l);
                        }
                        for (u = v.length; u--; )
                          (d = v[u]) &&
                            (c = r ? P(o, d) : p[u]) > -1 &&
                            (o[c] = !(s[c] = d));
                      }
                    } else (v = xe(v === s ? v.splice(h, v.length) : v)), r ? r(null, s, v, l) : j.apply(s, v);
                  })
                );
              }
              function Ce(e) {
                for (
                  var t,
                    n,
                    r,
                    o = e.length,
                    s = i.relative[e[0].type],
                    a = s || i.relative[" "],
                    l = s ? 1 : 0,
                    u = we(
                      function (e) {
                        return e === t;
                      },
                      a,
                      !0
                    ),
                    d = we(
                      function (e) {
                        return P(t, e) > -1;
                      },
                      a,
                      !0
                    ),
                    p = [
                      function (e, n, i) {
                        var r =
                          (!s && (i || n !== c)) ||
                          ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                        return (t = null), r;
                      },
                    ];
                  l < o;
                  l++
                )
                  if ((n = i.relative[e[l].type])) p = [we(_e(p), n)];
                  else {
                    if (
                      (n = i.filter[e[l].type].apply(null, e[l].matches))[w]
                    ) {
                      for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                      return Te(
                        l > 1 && _e(p),
                        l > 1 &&
                          be(
                            e.slice(0, l - 1).concat({
                              value: " " === e[l - 2].type ? "*" : "",
                            })
                          ).replace(B, "$1"),
                        n,
                        l < r && Ce(e.slice(l, r)),
                        r < o && Ce((e = e.slice(r))),
                        r < o && be(e)
                      );
                    }
                    p.push(n);
                  }
                return _e(p);
              }
              return (
                (ye.prototype = i.filters = i.pseudos),
                (i.setFilters = new ye()),
                (s = ae.tokenize =
                  function (e, t) {
                    var n,
                      r,
                      o,
                      s,
                      a,
                      l,
                      c,
                      u = S[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, l = [], c = i.preFilter; a; ) {
                      for (s in ((n && !(r = z.exec(a))) ||
                        (r && (a = a.slice(r[0].length) || a),
                        l.push((o = []))),
                      (n = !1),
                      (r = W.exec(a)) &&
                        ((n = r.shift()),
                        o.push({ value: n, type: r[0].replace(B, " ") }),
                        (a = a.slice(n.length))),
                      i.filter))
                        !(r = V[s].exec(a)) ||
                          (c[s] && !(r = c[s](r))) ||
                          ((n = r.shift()),
                          o.push({ value: n, type: s, matches: r }),
                          (a = a.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? a.length : a ? ae.error(e) : S(e, l).slice(0);
                  }),
                (a = ae.compile =
                  function (e, t) {
                    var n,
                      r = [],
                      o = [],
                      a = k[e + " "];
                    if (!a) {
                      for (t || (t = s(e)), n = t.length; n--; )
                        (a = Ce(t[n]))[w] ? r.push(a) : o.push(a);
                      (a = k(
                        e,
                        (function (e, t) {
                          var n = t.length > 0,
                            r = e.length > 0,
                            o = function (o, s, a, l, u) {
                              var d,
                                h,
                                g,
                                v = 0,
                                y = "0",
                                b = o && [],
                                w = [],
                                _ = c,
                                T = o || (r && i.find.TAG("*", u)),
                                C = (x += null == _ ? 1 : Math.random() || 0.1),
                                S = T.length;
                              for (
                                u && (c = s == f || s || u);
                                y !== S && null != (d = T[y]);
                                y++
                              ) {
                                if (r && d) {
                                  for (
                                    h = 0,
                                      s ||
                                        d.ownerDocument == f ||
                                        (p(d), (a = !m));
                                    (g = e[h++]);

                                  )
                                    if (g(d, s || f, a)) {
                                      l.push(d);
                                      break;
                                    }
                                  u && (x = C);
                                }
                                n && ((d = !g && d) && v--, o && b.push(d));
                              }
                              if (((v += y), n && y !== v)) {
                                for (h = 0; (g = t[h++]); ) g(b, w, s, a);
                                if (o) {
                                  if (v > 0)
                                    for (; y--; )
                                      b[y] || w[y] || (w[y] = M.call(l));
                                  w = xe(w);
                                }
                                j.apply(l, w),
                                  u &&
                                    !o &&
                                    w.length > 0 &&
                                    v + t.length > 1 &&
                                    ae.uniqueSort(l);
                              }
                              return u && ((x = C), (c = _)), b;
                            };
                          return n ? ce(o) : o;
                        })(o, r)
                      )),
                        (a.selector = e);
                    }
                    return a;
                  }),
                (l = ae.select =
                  function (e, t, n, r) {
                    var o,
                      l,
                      c,
                      u,
                      d,
                      p = "function" == typeof e && e,
                      f = !r && s((e = p.selector || e));
                    if (((n = n || []), 1 === f.length)) {
                      if (
                        (l = f[0] = f[0].slice(0)).length > 2 &&
                        "ID" === (c = l[0]).type &&
                        9 === t.nodeType &&
                        m &&
                        i.relative[l[1].type]
                      ) {
                        if (
                          !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                            [])[0])
                        )
                          return n;
                        p && (t = t.parentNode),
                          (e = e.slice(l.shift().value.length));
                      }
                      for (
                        o = V.needsContext.test(e) ? 0 : l.length;
                        o-- && ((c = l[o]), !i.relative[(u = c.type)]);

                      )
                        if (
                          (d = i.find[u]) &&
                          (r = d(
                            c.matches[0].replace(te, ne),
                            (ee.test(l[0].type) && ve(t.parentNode)) || t
                          ))
                        ) {
                          if ((l.splice(o, 1), !(e = r.length && be(l))))
                            return j.apply(n, r), n;
                          break;
                        }
                    }
                    return (
                      (p || a(e, f))(
                        r,
                        t,
                        !m,
                        n,
                        !t || (ee.test(e) && ve(t.parentNode)) || t
                      ),
                      n
                    );
                  }),
                (n.sortStable = w.split("").sort(A).join("") === w),
                (n.detectDuplicates = !!d),
                p(),
                (n.sortDetached = ue(function (e) {
                  return (
                    1 & e.compareDocumentPosition(f.createElement("fieldset"))
                  );
                })),
                ue(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                  );
                }) ||
                  de("type|href|height|width", function (e, t, n) {
                    if (!n)
                      return e.getAttribute(
                        t,
                        "type" === t.toLowerCase() ? 1 : 2
                      );
                  }),
                (n.attributes &&
                  ue(function (e) {
                    return (
                      (e.innerHTML = "<input/>"),
                      e.firstChild.setAttribute("value", ""),
                      "" === e.firstChild.getAttribute("value")
                    );
                  })) ||
                  de("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                      return e.defaultValue;
                  }),
                ue(function (e) {
                  return null == e.getAttribute("disabled");
                }) ||
                  de(N, function (e, t, n) {
                    var i;
                    if (!n)
                      return !0 === e[t]
                        ? t.toLowerCase()
                        : (i = e.getAttributeNode(t)) && i.specified
                        ? i.value
                        : null;
                  }),
                ae
              );
            })(e);
          (_.find = T),
            (_.expr = T.selectors),
            (_.expr[":"] = _.expr.pseudos),
            (_.uniqueSort = _.unique = T.uniqueSort),
            (_.text = T.getText),
            (_.isXMLDoc = T.isXML),
            (_.contains = T.contains),
            (_.escapeSelector = T.escape);
          var C = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && _(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            S = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            k = _.expr.match.needsContext;
          function E(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var A =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function D(e, t, n) {
            return h(t)
              ? _.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? _.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? _.grep(e, function (e) {
                  return a.call(t, e) > -1 !== n;
                })
              : _.filter(t, e, n);
          }
          (_.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? _.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : _.find.matches(
                    e,
                    _.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            _.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    _(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (_.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  _.find(e, r[t], n);
                return i > 1 ? _.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(D(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(D(this, e || [], !0));
              },
              is: function (e) {
                return !!D(
                  this,
                  "string" == typeof e && k.test(e) ? _(e) : e || [],
                  !1
                ).length;
              },
            });
          var O,
            M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((_.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || O), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : M.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof _ ? t[0] : t),
                  _.merge(
                    this,
                    _.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : g,
                      !0
                    )
                  ),
                  A.test(i[1]) && _.isPlainObject(t))
                )
                  for (i in t) h(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = g.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : h(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(_)
              : _.makeArray(e, this);
          }).prototype = _.fn),
            (O = _(g));
          var L = /^(?:parents|prev(?:Until|All))/,
            j = { children: !0, contents: !0, next: !0, prev: !0 };
          function $(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          _.fn.extend({
            has: function (e) {
              var t = _(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (_.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && _(e);
              if (!k.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && _.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? a.call(_(e), this[0])
                  : a.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            _.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return C(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return C(e, "parentNode", n);
                },
                next: function (e) {
                  return $(e, "nextSibling");
                },
                prev: function (e) {
                  return $(e, "previousSibling");
                },
                nextAll: function (e) {
                  return C(e, "nextSibling");
                },
                prevAll: function (e) {
                  return C(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return C(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return C(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return S((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return S(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && i(e.contentDocument)
                    ? e.contentDocument
                    : (E(e, "template") && (e = e.content || e),
                      _.merge([], e.childNodes));
                },
              },
              function (e, t) {
                _.fn[e] = function (n, i) {
                  var r = _.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = _.filter(i, r)),
                    this.length > 1 &&
                      (j[e] || _.uniqueSort(r), L.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var P = /[^\x20\t\r\n\f]+/g;
          function N(e) {
            return e;
          }
          function H(e) {
            throw e;
          }
          function I(e, t, n, i) {
            var r;
            try {
              e && h((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && h((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (_.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      _.each(e.match(P) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : _.extend({}, e);
            var t,
              n,
              i,
              r,
              o = [],
              s = [],
              a = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((a = o.length - 1), s.push(n)),
                      (function t(n) {
                        _.each(n, function (n, i) {
                          h(i)
                            ? (e.unique && c.has(i)) || o.push(i)
                            : i && i.length && "string" !== b(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    _.each(arguments, function (e, t) {
                      for (var n; (n = _.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? _.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (r = s = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (r = s = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      s.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return c;
          }),
            _.extend({
              Deferred: function (t) {
                var n = [
                    [
                      "notify",
                      "progress",
                      _.Callbacks("memory"),
                      _.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      _.Callbacks("once memory"),
                      _.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      _.Callbacks("once memory"),
                      _.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  i = "pending",
                  r = {
                    state: function () {
                      return i;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return _.Deferred(function (t) {
                        _.each(n, function (n, i) {
                          var r = h(e[i[4]]) && e[i[4]];
                          o[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && h(e.promise)
                              ? e
                                  .promise()
                                  .progress(t.notify)
                                  .done(t.resolve)
                                  .fail(t.reject)
                              : t[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (t, i, r) {
                      var o = 0;
                      function s(t, n, i, r) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var e, c;
                              if (!(t < o)) {
                                if ((e = i.apply(a, l)) === n.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  e &&
                                  ("object" == typeof e ||
                                    "function" == typeof e) &&
                                  e.then),
                                  h(c)
                                    ? r
                                      ? c.call(e, s(o, n, N, r), s(o, n, H, r))
                                      : (o++,
                                        c.call(
                                          e,
                                          s(o, n, N, r),
                                          s(o, n, H, r),
                                          s(o, n, N, n.notifyWith)
                                        ))
                                    : (i !== N && ((a = void 0), (l = [e])),
                                      (r || n.resolveWith)(a, l));
                              }
                            },
                            u = r
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (e) {
                                    _.Deferred.exceptionHook &&
                                      _.Deferred.exceptionHook(e, u.stackTrace),
                                      t + 1 >= o &&
                                        (i !== H && ((a = void 0), (l = [e])),
                                        n.rejectWith(a, l));
                                  }
                                };
                          t
                            ? u()
                            : (_.Deferred.getStackHook &&
                                (u.stackTrace = _.Deferred.getStackHook()),
                              e.setTimeout(u));
                        };
                      }
                      return _.Deferred(function (e) {
                        n[0][3].add(s(0, e, h(r) ? r : N, e.notifyWith)),
                          n[1][3].add(s(0, e, h(t) ? t : N)),
                          n[2][3].add(s(0, e, h(i) ? i : H));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? _.extend(e, r) : r;
                    },
                  },
                  o = {};
                return (
                  _.each(n, function (e, t) {
                    var s = t[2],
                      a = t[5];
                    (r[t[1]] = s.add),
                      a &&
                        s.add(
                          function () {
                            i = a;
                          },
                          n[3 - e][2].disable,
                          n[3 - e][3].disable,
                          n[0][2].lock,
                          n[0][3].lock
                        ),
                      s.add(t[3].fire),
                      (o[t[0]] = function () {
                        return (
                          o[t[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[t[0] + "With"] = s.fireWith);
                  }),
                  r.promise(o),
                  t && t.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  o = r.call(arguments),
                  s = _.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (o[e] = arguments.length > 1 ? r.call(arguments) : n),
                        --t || s.resolveWith(i, o);
                    };
                  };
                if (
                  t <= 1 &&
                  (I(e, s.done(a(n)).resolve, s.reject, !t),
                  "pending" === s.state() || h(o[n] && o[n].then))
                )
                  return s.then();
                for (; n--; ) I(o[n], a(n), s.reject);
                return s.promise();
              },
            });
          var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (_.Deferred.exceptionHook = function (t, n) {
            e.console &&
              e.console.warn &&
              t &&
              q.test(t.name) &&
              e.console.warn(
                "jQuery.Deferred exception: " + t.message,
                t.stack,
                n
              );
          }),
            (_.readyException = function (t) {
              e.setTimeout(function () {
                throw t;
              });
            });
          var F = _.Deferred();
          function R() {
            g.removeEventListener("DOMContentLoaded", R),
              e.removeEventListener("load", R),
              _.ready();
          }
          (_.fn.ready = function (e) {
            return (
              F.then(e).catch(function (e) {
                _.readyException(e);
              }),
              this
            );
          }),
            _.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --_.readyWait : _.isReady) ||
                  ((_.isReady = !0),
                  (!0 !== e && --_.readyWait > 0) || F.resolveWith(g, [_]));
              },
            }),
            (_.ready.then = F.then),
            "complete" === g.readyState ||
            ("loading" !== g.readyState && !g.documentElement.doScroll)
              ? e.setTimeout(_.ready)
              : (g.addEventListener("DOMContentLoaded", R),
                e.addEventListener("load", R));
          var B = function (e, t, n, i, r, o, s) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === b(n))
                for (a in ((r = !0), n)) B(e, t, a, n[a], !0, o, s);
              else if (
                void 0 !== i &&
                ((r = !0),
                h(i) || (s = !0),
                c &&
                  (s
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(_(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
            },
            z = /^-ms-/,
            W = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function U(e) {
            return e.replace(z, "ms-").replace(W, Y);
          }
          var X = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function V() {
            this.expando = _.expando + V.uid++;
          }
          (V.uid = 1),
            (V.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    X(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[U(t)] = n;
                else for (i in t) r[U(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][U(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(U)
                      : (t = U(t)) in i
                      ? [t]
                      : t.match(P) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || _.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !_.isEmptyObject(t);
              },
            });
          var Q = new V(),
            K = new V(),
            G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Z = /[A-Z]/g;
          function J(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(Z, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : G.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                K.set(e, t, n);
              } else n = void 0;
            return n;
          }
          _.extend({
            hasData: function (e) {
              return K.hasData(e) || Q.hasData(e);
            },
            data: function (e, t, n) {
              return K.access(e, t, n);
            },
            removeData: function (e, t) {
              K.remove(e, t);
            },
            _data: function (e, t, n) {
              return Q.access(e, t, n);
            },
            _removeData: function (e, t) {
              Q.remove(e, t);
            },
          }),
            _.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  o = this[0],
                  s = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = K.get(o)),
                    1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
                  ) {
                    for (n = s.length; n--; )
                      s[n] &&
                        0 === (i = s[n].name).indexOf("data-") &&
                        ((i = U(i.slice(5))), J(o, i, r[i]));
                    Q.set(o, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      K.set(this, e);
                    })
                  : B(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = K.get(o, e)) ||
                            void 0 !== (n = J(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          K.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  K.remove(this, e);
                });
              },
            }),
            _.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = Q.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = Q.access(e, t, _.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = _.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = _._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                      e,
                      function () {
                        _.dequeue(e, t);
                      },
                      o
                    )),
                  !i && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Q.get(e, n) ||
                  Q.access(e, n, {
                    empty: _.Callbacks("once memory").add(function () {
                      Q.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            _.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? _.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = _.queue(this, e, t);
                        _._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            _.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  _.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = _.Deferred(),
                  o = this,
                  s = this.length,
                  a = function () {
                    --i || r.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  s--;

                )
                  (n = Q.get(o[s], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), r.promise(t);
              },
            });
          var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
            ne = ["Top", "Right", "Bottom", "Left"],
            ie = g.documentElement,
            re = function (e) {
              return _.contains(e.ownerDocument, e);
            },
            oe = { composed: !0 };
          ie.getRootNode &&
            (re = function (e) {
              return (
                _.contains(e.ownerDocument, e) ||
                e.getRootNode(oe) === e.ownerDocument
              );
            });
          var se = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                re(e) &&
                "none" === _.css(e, "display"))
            );
          };
          function ae(e, t, n, i) {
            var r,
              o,
              s = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return _.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (_.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (_.cssNumber[t] || ("px" !== c && +l)) &&
                te.exec(_.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; s--; )
                _.style(e, t, u + c),
                  (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                  (u /= o);
              (u *= 2), _.style(e, t, u + c), (n = n || []);
            }
            return (
              n &&
                ((u = +u || +l || 0),
                (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = r))),
              r
            );
          }
          var le = {};
          function ce(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = le[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = _.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (le[i] = r),
              r)
            );
          }
          function ue(e, t) {
            for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
              (i = e[o]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[o] = Q.get(i, "display") || null),
                      r[o] || (i.style.display = "")),
                    "" === i.style.display && se(i) && (r[o] = ce(i)))
                  : "none" !== n && ((r[o] = "none"), Q.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
            return e;
          }
          _.fn.extend({
            show: function () {
              return ue(this, !0);
            },
            hide: function () {
              return ue(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    se(this) ? _(this).show() : _(this).hide();
                  });
            },
          });
          var de,
            pe,
            fe = /^(?:checkbox|radio)$/i,
            he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i;
          (de = g.createDocumentFragment().appendChild(g.createElement("div"))),
            (pe = g.createElement("input")).setAttribute("type", "radio"),
            pe.setAttribute("checked", "checked"),
            pe.setAttribute("name", "t"),
            de.appendChild(pe),
            (f.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (de.innerHTML = "<textarea>x</textarea>"),
            (f.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue),
            (de.innerHTML = "<option></option>"),
            (f.option = !!de.lastChild);
          var ge = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function ve(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && E(e, t)) ? _.merge([e], n) : n
            );
          }
          function ye(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
          }
          (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
            (ge.th = ge.td),
            f.option ||
              (ge.optgroup = ge.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var be = /<|&#?\w+;/;
          function we(e, t, n, i, r) {
            for (
              var o,
                s,
                a,
                l,
                c,
                u,
                d = t.createDocumentFragment(),
                p = [],
                f = 0,
                h = e.length;
              f < h;
              f++
            )
              if ((o = e[f]) || 0 === o)
                if ("object" === b(o)) _.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                  for (
                    s = s || d.appendChild(t.createElement("div")),
                      a = (he.exec(o) || ["", ""])[1].toLowerCase(),
                      l = ge[a] || ge._default,
                      s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2],
                      u = l[0];
                    u--;

                  )
                    s = s.lastChild;
                  _.merge(p, s.childNodes),
                    ((s = d.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
            for (d.textContent = "", f = 0; (o = p[f++]); )
              if (i && _.inArray(o, i) > -1) r && r.push(o);
              else if (
                ((c = re(o)),
                (s = ve(d.appendChild(o), "script")),
                c && ye(s),
                n)
              )
                for (u = 0; (o = s[u++]); ) me.test(o.type || "") && n.push(o);
            return d;
          }
          var _e = /^([^.]*)(?:\.(.+)|)/;
          function xe() {
            return !0;
          }
          function Te() {
            return !1;
          }
          function Ce(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return g.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Se(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Se(e, a, n, i, t[a], o);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = Te;
            else if (!r) return e;
            return (
              1 === o &&
                ((s = r),
                (r = function (e) {
                  return _().off(e), s.apply(this, arguments);
                }),
                (r.guid = s.guid || (s.guid = _.guid++))),
              e.each(function () {
                _.event.add(this, t, r, i, n);
              })
            );
          }
          function ke(e, t, n) {
            n
              ? (Q.set(e, t, !1),
                _.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      o,
                      s = Q.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (s.length)
                        (_.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((s = r.call(arguments)),
                        Q.set(this, t, s),
                        (i = n(this, t)),
                        this[t](),
                        s !== (o = Q.get(this, t)) || i
                          ? Q.set(this, t, !1)
                          : (o = {}),
                        s !== o)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          o && o.value
                        );
                    } else
                      s.length &&
                        (Q.set(this, t, {
                          value: _.event.trigger(
                            _.extend(s[0], _.Event.prototype),
                            s.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Q.get(e, t) && _.event.add(e, t, xe);
          }
          (_.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g = Q.get(e);
              if (X(e))
                for (
                  n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && _.find.matchesSelector(ie, r),
                    n.guid || (n.guid = _.guid++),
                    (l = g.events) || (l = g.events = Object.create(null)),
                    (s = g.handle) ||
                      (s = g.handle =
                        function (t) {
                          return void 0 !== _ && _.event.triggered !== t.type
                            ? _.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(P) || [""]).length;
                  c--;

                )
                  (f = m = (a = _e.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f &&
                      ((d = _.event.special[f] || {}),
                      (f = (r ? d.delegateType : d.bindType) || f),
                      (d = _.event.special[f] || {}),
                      (u = _.extend(
                        {
                          type: f,
                          origType: m,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && _.expr.match.needsContext.test(r),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (p = l[f]) ||
                        (((p = l[f] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, i, h, s)) ||
                          (e.addEventListener && e.addEventListener(f, s))),
                      d.add &&
                        (d.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                      r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                      (_.event.global[f] = !0));
            },
            remove: function (e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g = Q.hasData(e) && Q.get(e);
              if (g && (l = g.events)) {
                for (c = (t = (t || "").match(P) || [""]).length; c--; )
                  if (
                    ((f = m = (a = _e.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      d = _.event.special[f] || {},
                        p =
                          l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        s = o = p.length;
                      o--;

                    )
                      (u = p[o]),
                        (!r && m !== u.origType) ||
                          (n && n.guid !== u.guid) ||
                          (a && !a.test(u.namespace)) ||
                          (i &&
                            i !== u.selector &&
                            ("**" !== i || !u.selector)) ||
                          (p.splice(o, 1),
                          u.selector && p.delegateCount--,
                          d.remove && d.remove.call(e, u));
                    s &&
                      !p.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                        _.removeEvent(e, f, g.handle),
                      delete l[f]);
                  } else for (f in l) _.event.remove(e, f + t[c], n, i, !0);
                _.isEmptyObject(l) && Q.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a = new Array(arguments.length),
                l = _.event.fix(e),
                c =
                  (Q.get(this, "events") || Object.create(null))[l.type] || [],
                u = _.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, l))
              ) {
                for (
                  s = _.event.handlers.call(this, l, c), t = 0;
                  (r = s[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== o.namespace &&
                      !l.rnamespace.test(o.namespace)) ||
                      ((l.handleObj = o),
                      (l.data = o.data),
                      void 0 !==
                        (i = (
                          (_.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(r.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (o = [], s = {}, n = 0; n < l; n++)
                      void 0 === s[(r = (i = t[n]).selector + " ")] &&
                        (s[r] = i.needsContext
                          ? _(r, this).index(c) > -1
                          : _.find(r, this, null, [c]).length),
                        s[r] && o.push(i);
                    o.length && a.push({ elem: c, handlers: o });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[_.expando] ? e : new _.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    fe.test(t.type) &&
                      t.click &&
                      E(t, "input") &&
                      ke(t, "click", xe),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    fe.test(t.type) &&
                      t.click &&
                      E(t, "input") &&
                      ke(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (fe.test(t.type) &&
                      t.click &&
                      E(t, "input") &&
                      Q.get(t, "click")) ||
                    E(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (_.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (_.Event = function (e, t) {
              if (!(this instanceof _.Event)) return new _.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? xe
                      : Te),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && _.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[_.expando] = !0);
            }),
            (_.Event.prototype = {
              constructor: _.Event,
              isDefaultPrevented: Te,
              isPropagationStopped: Te,
              isImmediatePropagationStopped: Te,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = xe),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = xe),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = xe),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            _.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              _.event.addProp
            ),
            _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              _.event.special[e] = {
                setup: function () {
                  return ke(this, e, Ce), !1;
                },
                trigger: function () {
                  return ke(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            _.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                _.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (i && (i === this || _.contains(this, i))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            _.fn.extend({
              on: function (e, t, n, i) {
                return Se(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Se(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    _(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Te),
                  this.each(function () {
                    _.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Ee = /<script|<style|<link/i,
            Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Oe(e, t) {
            return (
              (E(e, "table") &&
                E(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                _(e).children("tbody")[0]) ||
              e
            );
          }
          function Me(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Le(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function je(e, t) {
            var n, i, r, o, s, a;
            if (1 === t.nodeType) {
              if (Q.hasData(e) && (a = Q.get(e).events))
                for (r in (Q.remove(t, "handle events"), a))
                  for (n = 0, i = a[r].length; n < i; n++)
                    _.event.add(t, r, a[r][n]);
              K.hasData(e) &&
                ((o = K.access(e)), (s = _.extend({}, o)), K.set(t, s));
            }
          }
          function $e(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && fe.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Pe(e, t, n, i) {
            t = o(t);
            var r,
              s,
              a,
              l,
              c,
              u,
              d = 0,
              p = e.length,
              m = p - 1,
              g = t[0],
              v = h(g);
            if (
              v ||
              (p > 1 && "string" == typeof g && !f.checkClone && Ae.test(g))
            )
              return e.each(function (r) {
                var o = e.eq(r);
                v && (t[0] = g.call(this, r, o.html())), Pe(o, t, n, i);
              });
            if (
              p &&
              ((s = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = s),
              s || i)
            ) {
              for (l = (a = _.map(ve(r, "script"), Me)).length; d < p; d++)
                (c = r),
                  d !== m &&
                    ((c = _.clone(c, !0, !0)),
                    l && _.merge(a, ve(c, "script"))),
                  n.call(e[d], c, d);
              if (l)
                for (
                  u = a[a.length - 1].ownerDocument, _.map(a, Le), d = 0;
                  d < l;
                  d++
                )
                  (c = a[d]),
                    me.test(c.type || "") &&
                      !Q.access(c, "globalEval") &&
                      _.contains(u, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? _._evalUrl &&
                          !c.noModule &&
                          _._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            u
                          )
                        : y(c.textContent.replace(De, ""), c, u));
            }
            return e;
          }
          function Ne(e, t, n) {
            for (
              var i, r = t ? _.filter(t, e) : e, o = 0;
              null != (i = r[o]);
              o++
            )
              n || 1 !== i.nodeType || _.cleanData(ve(i)),
                i.parentNode &&
                  (n && re(i) && ye(ve(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          _.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                o,
                s,
                a = e.cloneNode(!0),
                l = re(e);
              if (
                !(
                  f.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  _.isXMLDoc(e)
                )
              )
                for (s = ve(a), i = 0, r = (o = ve(e)).length; i < r; i++)
                  $e(o[i], s[i]);
              if (t)
                if (n)
                  for (
                    o = o || ve(e), s = s || ve(a), i = 0, r = o.length;
                    i < r;
                    i++
                  )
                    je(o[i], s[i]);
                else je(e, a);
              return (
                (s = ve(a, "script")).length > 0 &&
                  ye(s, !l && ve(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = _.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (X(n)) {
                  if ((t = n[Q.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? _.event.remove(n, i)
                          : _.removeEvent(n, i, t.handle);
                    n[Q.expando] = void 0;
                  }
                  n[K.expando] && (n[K.expando] = void 0);
                }
            },
          }),
            _.fn.extend({
              detach: function (e) {
                return Ne(this, e, !0);
              },
              remove: function (e) {
                return Ne(this, e);
              },
              text: function (e) {
                return B(
                  this,
                  function (e) {
                    return void 0 === e
                      ? _.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Pe(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Oe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Pe(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Pe(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Pe(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (_.cleanData(ve(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return _.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return B(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Ee.test(e) &&
                      !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = _.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (_.cleanData(ve(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Pe(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    _.inArray(this, e) < 0 &&
                      (_.cleanData(ve(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            _.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                _.fn[e] = function (e) {
                  for (
                    var n, i = [], r = _(e), o = r.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      _(r[a])[t](n),
                      s.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var He = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
            Ie = function (t) {
              var n = t.ownerDocument.defaultView;
              return (n && n.opener) || (n = e), n.getComputedStyle(t);
            },
            qe = function (e, t, n) {
              var i,
                r,
                o = {};
              for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
              return i;
            },
            Fe = new RegExp(ne.join("|"), "i");
          function Re(e, t, n) {
            var i,
              r,
              o,
              s,
              a = e.style;
            return (
              (n = n || Ie(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                  re(e) ||
                  (s = _.style(e, t)),
                !f.pixelBoxStyles() &&
                  He.test(s) &&
                  Fe.test(t) &&
                  ((i = a.width),
                  (r = a.minWidth),
                  (o = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = s),
                  (s = n.width),
                  (a.width = i),
                  (a.minWidth = r),
                  (a.maxWidth = o))),
              void 0 !== s ? s + "" : s
            );
          }
          function Be(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function t() {
              if (u) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ie.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                (i = "1%" !== t.top),
                  (l = 12 === n(t.marginLeft)),
                  (u.style.right = "60%"),
                  (s = 36 === n(t.right)),
                  (r = 36 === n(t.width)),
                  (u.style.position = "absolute"),
                  (o = 12 === n(u.offsetWidth / 3)),
                  ie.removeChild(c),
                  (u = null);
              }
            }
            function n(e) {
              return Math.round(parseFloat(e));
            }
            var i,
              r,
              o,
              s,
              a,
              l,
              c = g.createElement("div"),
              u = g.createElement("div");
            u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (f.clearCloneStyle = "content-box" === u.style.backgroundClip),
              _.extend(f, {
                boxSizingReliable: function () {
                  return t(), r;
                },
                pixelBoxStyles: function () {
                  return t(), s;
                },
                pixelPosition: function () {
                  return t(), i;
                },
                reliableMarginLeft: function () {
                  return t(), l;
                },
                scrollboxSize: function () {
                  return t(), o;
                },
                reliableTrDimensions: function () {
                  var t, n, i, r;
                  return (
                    null == a &&
                      ((t = g.createElement("table")),
                      (n = g.createElement("tr")),
                      (i = g.createElement("div")),
                      (t.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (n.style.cssText = "border:1px solid"),
                      (n.style.height = "1px"),
                      (i.style.height = "9px"),
                      (i.style.display = "block"),
                      ie.appendChild(t).appendChild(n).appendChild(i),
                      (r = e.getComputedStyle(n)),
                      (a =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        n.offsetHeight),
                      ie.removeChild(t)),
                    a
                  );
                },
              }));
          })();
          var ze = ["Webkit", "Moz", "ms"],
            We = g.createElement("div").style,
            Ye = {};
          function Ue(e) {
            var t = _.cssProps[e] || Ye[e];
            return (
              t ||
              (e in We
                ? e
                : (Ye[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = ze.length;
                        n--;

                      )
                        if ((e = ze[n] + t) in We) return e;
                    })(e) || e))
            );
          }
          var Xe = /^(none|table(?!-c[ea]).+)/,
            Ve = /^--/,
            Qe = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ke = { letterSpacing: "0", fontWeight: "400" };
          function Ge(e, t, n) {
            var i = te.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function Ze(e, t, n, i, r, o) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (l += _.css(e, n + ne[s], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= _.css(e, "padding" + ne[s], !0, r)),
                    "margin" !== n &&
                      (l -= _.css(e, "border" + ne[s] + "Width", !0, r)))
                  : ((l += _.css(e, "padding" + ne[s], !0, r)),
                    "padding" !== n
                      ? (l += _.css(e, "border" + ne[s] + "Width", !0, r))
                      : (a += _.css(e, "border" + ne[s] + "Width", !0, r)));
            return (
              !i &&
                o >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function Je(e, t, n) {
            var i = Ie(e),
              r =
                (!f.boxSizingReliable() || n) &&
                "border-box" === _.css(e, "boxSizing", !1, i),
              o = r,
              s = Re(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (He.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!f.boxSizingReliable() && r) ||
                (!f.reliableTrDimensions() && E(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === _.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === _.css(e, "boxSizing", !1, i)),
                (o = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) +
                Ze(e, t, n || (r ? "border" : "content"), o, i, s) +
                "px"
            );
          }
          function et(e, t, n, i, r) {
            return new et.prototype.init(e, t, n, i, r);
          }
          _.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Re(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  o,
                  s,
                  a = U(t),
                  l = Ve.test(t),
                  c = e.style;
                if (
                  (l || (t = Ue(a)),
                  (s = _.cssHooks[t] || _.cssHooks[a]),
                  void 0 === n)
                )
                  return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                    ? r
                    : c[t];
                "string" === (o = typeof n) &&
                  (r = te.exec(n)) &&
                  r[1] &&
                  ((n = ae(e, t, r)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      l ||
                      (n += (r && r[3]) || (_.cssNumber[a] ? "" : "px")),
                    f.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                o,
                s,
                a = U(t);
              return (
                Ve.test(t) || (t = Ue(a)),
                (s = _.cssHooks[t] || _.cssHooks[a]) &&
                  "get" in s &&
                  (r = s.get(e, !0, n)),
                void 0 === r && (r = Re(e, t, i)),
                "normal" === r && t in Ke && (r = Ke[t]),
                "" === n || n
                  ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                  : r
              );
            },
          }),
            _.each(["height", "width"], function (e, t) {
              _.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Xe.test(_.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? Je(e, t, i)
                      : qe(e, Qe, function () {
                          return Je(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    o = Ie(e),
                    s = !f.scrollboxSize() && "absolute" === o.position,
                    a =
                      (s || i) && "border-box" === _.css(e, "boxSizing", !1, o),
                    l = i ? Ze(e, t, i, a, o) : 0;
                  return (
                    a &&
                      s &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          Ze(e, t, "border", !1, o) -
                          0.5
                      )),
                    l &&
                      (r = te.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = _.css(e, t))),
                    Ge(0, n, l)
                  );
                },
              };
            }),
            (_.cssHooks.marginLeft = Be(f.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Re(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      qe(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            _.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (_.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                  },
                }),
                  "margin" !== e && (_.cssHooks[e + t].set = Ge);
              }
            ),
            _.fn.extend({
              css: function (e, t) {
                return B(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      o = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (i = Ie(e), r = t.length; s < r; s++)
                        o[t[s]] = _.css(e, t[s], !1, i);
                      return o;
                    }
                    return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (_.Tween = et),
            (et.prototype = {
              constructor: et,
              init: function (e, t, n, i, r, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || _.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = o || (_.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : et.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = et.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        _.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : et.propHooks._default.set(this),
                  this
                );
              },
            }),
            (et.prototype.init.prototype = et.prototype),
            (et.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = _.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  _.fx.step[e.prop]
                    ? _.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!_.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : _.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (et.propHooks.scrollTop = et.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (_.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (_.fx = et.prototype.init),
            (_.fx.step = {});
          var tt,
            nt,
            it = /^(?:toggle|show|hide)$/,
            rt = /queueHooks$/;
          function ot() {
            nt &&
              (!1 === g.hidden && e.requestAnimationFrame
                ? e.requestAnimationFrame(ot)
                : e.setTimeout(ot, _.fx.interval),
              _.fx.tick());
          }
          function st() {
            return (
              e.setTimeout(function () {
                tt = void 0;
              }),
              (tt = Date.now())
            );
          }
          function at(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = ne[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function lt(e, t, n) {
            for (
              var i,
                r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
                o = 0,
                s = r.length;
              o < s;
              o++
            )
              if ((i = r[o].call(n, t, e))) return i;
          }
          function ct(e, t, n) {
            var i,
              r,
              o = 0,
              s = ct.prefilters.length,
              a = _.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = tt || st(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    o = 0,
                    s = c.tweens.length;
                  o < s;
                  o++
                )
                  c.tweens[o].run(i);
                return (
                  a.notifyWith(e, [c, i, n]),
                  i < 1 && s
                    ? n
                    : (s || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(
                  !0,
                  { specialEasing: {}, easing: _.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = _.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              u = c.props;
            for (
              !(function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                  if (
                    ((r = t[(i = U(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                    n !== i && ((e[i] = o), delete e[n]),
                    (s = _.cssHooks[i]) && ("expand" in s))
                  )
                    for (n in ((o = s.expand(o)), delete e[i], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = r));
                  else t[i] = r;
              })(u, c.opts.specialEasing);
              o < s;
              o++
            )
              if ((i = ct.prefilters[o].call(c, e, u, c.opts)))
                return (
                  h(i.stop) &&
                    (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              _.map(u, lt, c),
              h(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              _.fx.timer(
                _.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (_.Animation = _.extend(ct, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ae(n.elem, e, te.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              h(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (ct.tweeners[n] = ct.tweeners[n] || []),
                  ct.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d = "width" in t || "height" in t,
                  p = this,
                  f = {},
                  h = e.style,
                  m = e.nodeType && se(e),
                  g = Q.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (s = _._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      s.unqueued--, _.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), it.test(r))) {
                    if (
                      (delete t[i],
                      (o = o || "toggle" === r),
                      r === (m ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !g || void 0 === g[i]) continue;
                      m = !0;
                    }
                    f[i] = (g && g[i]) || _.style(e, i);
                  }
                if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f))
                  for (i in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = g && g.display) && (c = Q.get(e, "display")),
                    "none" === (u = _.css(e, "display")) &&
                      (c
                        ? (u = c)
                        : (ue([e], !0),
                          (c = e.style.display || c),
                          (u = _.css(e, "display")),
                          ue([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === _.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((u = h.display), (c = "none" === u ? "" : u))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  f))
                    l ||
                      (g
                        ? "hidden" in g && (m = g.hidden)
                        : (g = Q.access(e, "fxshow", { display: c })),
                      o && (g.hidden = !m),
                      m && ue([e], !0),
                      p.done(function () {
                        for (i in (m || ue([e]), Q.remove(e, "fxshow"), f))
                          _.style(e, i, f[i]);
                      })),
                      (l = lt(m ? g[i] : 0, i, p)),
                      i in g ||
                        ((g[i] = l.start),
                        m && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
            },
          })),
            (_.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? _.extend({}, e)
                  : {
                      complete: n || (!n && t) || (h(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !h(t) && t),
                    };
              return (
                _.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in _.fx.speeds
                      ? (i.duration = _.fx.speeds[i.duration])
                      : (i.duration = _.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  h(i.old) && i.old.call(this),
                    i.queue && _.dequeue(this, i.queue);
                }),
                i
              );
            }),
            _.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(se)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = _.isEmptyObject(e),
                  o = _.speed(t, n, i),
                  s = function () {
                    var t = ct(this, _.extend({}, e), o);
                    (r || Q.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (s.finish = s),
                  r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      o = _.timers,
                      s = Q.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                      for (r in s) s[r] && s[r].stop && rt.test(r) && i(s[r]);
                    for (r = o.length; r--; )
                      o[r].elem !== this ||
                        (null != e && o[r].queue !== e) ||
                        (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                    (!t && n) || _.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = Q.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      o = _.timers,
                      s = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        _.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            _.each(["toggle", "show", "hide"], function (e, t) {
              var n = _.fn[t];
              _.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(at(t, !0), e, i, r);
              };
            }),
            _.each(
              {
                slideDown: at("show"),
                slideUp: at("hide"),
                slideToggle: at("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                _.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (_.timers = []),
            (_.fx.tick = function () {
              var e,
                t = 0,
                n = _.timers;
              for (tt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || _.fx.stop(), (tt = void 0);
            }),
            (_.fx.timer = function (e) {
              _.timers.push(e), _.fx.start();
            }),
            (_.fx.interval = 13),
            (_.fx.start = function () {
              nt || ((nt = !0), ot());
            }),
            (_.fx.stop = function () {
              nt = null;
            }),
            (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (_.fn.delay = function (t, n) {
              return (
                (t = (_.fx && _.fx.speeds[t]) || t),
                (n = n || "fx"),
                this.queue(n, function (n, i) {
                  var r = e.setTimeout(n, t);
                  i.stop = function () {
                    e.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = g.createElement("input"),
                t = g
                  .createElement("select")
                  .appendChild(g.createElement("option"));
              (e.type = "checkbox"),
                (f.checkOn = "" !== e.value),
                (f.optSelected = t.selected),
                ((e = g.createElement("input")).value = "t"),
                (e.type = "radio"),
                (f.radioValue = "t" === e.value);
            })();
          var ut,
            dt = _.expr.attrHandle;
          _.fn.extend({
            attr: function (e, t) {
              return B(this, _.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                _.removeAttr(this, e);
              });
            },
          }),
            _.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? _.prop(e, t, n)
                    : ((1 === o && _.isXMLDoc(e)) ||
                        (r =
                          _.attrHooks[t.toLowerCase()] ||
                          (_.expr.match.bool.test(t) ? ut : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void _.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = _.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!f.radioValue && "radio" === t && E(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(P);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (ut = {
              set: function (e, t, n) {
                return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = dt[t] || _.find.attr;
              dt[t] = function (e, t, i) {
                var r,
                  o,
                  s = t.toLowerCase();
                return (
                  i ||
                    ((o = dt[s]),
                    (dt[s] = r),
                    (r = null != n(e, t, i) ? s : null),
                    (dt[s] = o)),
                  r
                );
              };
            });
          var pt = /^(?:input|select|textarea|button)$/i,
            ft = /^(?:a|area)$/i;
          function ht(e) {
            return (e.match(P) || []).join(" ");
          }
          function mt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function gt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(P)) || [];
          }
          _.fn.extend({
            prop: function (e, t) {
              return B(this, _.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[_.propFix[e] || e];
              });
            },
          }),
            _.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && _.isXMLDoc(e)) ||
                      ((t = _.propFix[t] || t), (r = _.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = _.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : pt.test(e.nodeName) || (ft.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            f.optSelected ||
              (_.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            _.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                _.propFix[this.toLowerCase()] = this;
              }
            ),
            _.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l = 0;
                if (h(e))
                  return this.each(function (t) {
                    _(this).addClass(e.call(this, t, mt(this)));
                  });
                if ((t = gt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = mt(n)), (i = 1 === n.nodeType && " " + ht(r) + " "))
                    ) {
                      for (s = 0; (o = t[s++]); )
                        i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                      r !== (a = ht(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l = 0;
                if (h(e))
                  return this.each(function (t) {
                    _(this).removeClass(e.call(this, t, mt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = gt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = mt(n)), (i = 1 === n.nodeType && " " + ht(r) + " "))
                    ) {
                      for (s = 0; (o = t[s++]); )
                        for (; i.indexOf(" " + o + " ") > -1; )
                          i = i.replace(" " + o + " ", " ");
                      r !== (a = ht(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : h(e)
                  ? this.each(function (n) {
                      _(this).toggleClass(e.call(this, n, mt(this), t), t);
                    })
                  : this.each(function () {
                      var t, r, o, s;
                      if (i)
                        for (r = 0, o = _(this), s = gt(e); (t = s[r++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = mt(this)) && Q.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Q.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + ht(mt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var vt = /\r/g;
          _.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = h(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, _(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = _.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        _.valHooks[this.type] ||
                        _.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    _.valHooks[r.type] ||
                    _.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(vt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            _.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : ht(_.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      o = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))
                      ) {
                        if (((t = _(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, o = _.makeArray(t), s = r.length;
                      s--;

                    )
                      ((i = r[s]).selected =
                        _.inArray(_.valHooks.option.get(i), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            _.each(["radio", "checkbox"], function () {
              (_.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = _.inArray(_(e).val(), t) > -1);
                },
              }),
                f.checkOn ||
                  (_.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (f.focusin = "onfocusin" in e);
          var yt = /^(?:focusinfocus|focusoutblur)$/,
            bt = function (e) {
              e.stopPropagation();
            };
          _.extend(_.event, {
            trigger: function (t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                d,
                p,
                f,
                v = [i || g],
                y = u.call(t, "type") ? t.type : t,
                b = u.call(t, "namespace") ? t.namespace.split(".") : [];
              if (
                ((s = f = a = i = i || g),
                3 !== i.nodeType &&
                  8 !== i.nodeType &&
                  !yt.test(y + _.event.triggered) &&
                  (y.indexOf(".") > -1 &&
                    ((b = y.split(".")), (y = b.shift()), b.sort()),
                  (c = y.indexOf(":") < 0 && "on" + y),
                  ((t = t[_.expando]
                    ? t
                    : new _.Event(y, "object" == typeof t && t)).isTrigger = r
                    ? 2
                    : 3),
                  (t.namespace = b.join(".")),
                  (t.rnamespace = t.namespace
                    ? new RegExp(
                        "(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (t.result = void 0),
                  t.target || (t.target = i),
                  (n = null == n ? [t] : _.makeArray(n, [t])),
                  (p = _.event.special[y] || {}),
                  r || !p.trigger || !1 !== p.trigger.apply(i, n)))
              ) {
                if (!r && !p.noBubble && !m(i)) {
                  for (
                    l = p.delegateType || y,
                      yt.test(l + y) || (s = s.parentNode);
                    s;
                    s = s.parentNode
                  )
                    v.push(s), (a = s);
                  a === (i.ownerDocument || g) &&
                    v.push(a.defaultView || a.parentWindow || e);
                }
                for (o = 0; (s = v[o++]) && !t.isPropagationStopped(); )
                  (f = s),
                    (t.type = o > 1 ? l : p.bindType || y),
                    (d =
                      (Q.get(s, "events") || Object.create(null))[t.type] &&
                      Q.get(s, "handle")) && d.apply(s, n),
                    (d = c && s[c]) &&
                      d.apply &&
                      X(s) &&
                      ((t.result = d.apply(s, n)),
                      !1 === t.result && t.preventDefault());
                return (
                  (t.type = y),
                  r ||
                    t.isDefaultPrevented() ||
                    (p._default && !1 !== p._default.apply(v.pop(), n)) ||
                    !X(i) ||
                    (c &&
                      h(i[y]) &&
                      !m(i) &&
                      ((a = i[c]) && (i[c] = null),
                      (_.event.triggered = y),
                      t.isPropagationStopped() && f.addEventListener(y, bt),
                      i[y](),
                      t.isPropagationStopped() && f.removeEventListener(y, bt),
                      (_.event.triggered = void 0),
                      a && (i[c] = a))),
                  t.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });
              _.event.trigger(i, null, t);
            },
          }),
            _.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  _.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return _.event.trigger(e, t, n, !0);
              },
            }),
            f.focusin ||
              _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  _.event.simulate(t, e.target, _.event.fix(e));
                };
                _.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = Q.access(i, t);
                    r || i.addEventListener(e, n, !0),
                      Q.access(i, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = Q.access(i, t) - 1;
                    r
                      ? Q.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), Q.remove(i, t));
                  },
                };
              });
          var wt = e.location,
            _t = { guid: Date.now() },
            xt = /\?/;
          _.parseXML = function (t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
              n = new e.DOMParser().parseFromString(t, "text/xml");
            } catch (e) {}
            return (
              (i = n && n.getElementsByTagName("parsererror")[0]),
              (n && !i) ||
                _.error(
                  "Invalid XML: " +
                    (i
                      ? _.map(i.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : t)
                ),
              n
            );
          };
          var Tt = /\[\]$/,
            Ct = /\r?\n/g,
            St = /^(?:submit|button|image|reset|file)$/i,
            kt = /^(?:input|select|textarea|keygen)/i;
          function Et(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              _.each(t, function (t, r) {
                n || Tt.test(e)
                  ? i(e, r)
                  : Et(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== b(t)) i(e, t);
            else for (r in t) Et(e + "[" + r + "]", t[r], n, i);
          }
          (_.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = h(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
              _.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) Et(n, e[n], t, r);
            return i.join("&");
          }),
            _.fn.extend({
              serialize: function () {
                return _.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = _.prop(this, "elements");
                  return e ? _.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !_(this).is(":disabled") &&
                      kt.test(this.nodeName) &&
                      !St.test(e) &&
                      (this.checked || !fe.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = _(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? _.map(n, function (e) {
                          return { name: t.name, value: e.replace(Ct, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Ct, "\r\n") };
                  })
                  .get();
              },
            });
          var At = /%20/g,
            Dt = /#.*$/,
            Ot = /([?&])_=[^&]*/,
            Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Lt = /^(?:GET|HEAD)$/,
            jt = /^\/\//,
            $t = {},
            Pt = {},
            Nt = "*/".concat("*"),
            Ht = g.createElement("a");
          function It(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                o = t.toLowerCase().match(P) || [];
              if (h(n))
                for (; (i = o[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function qt(e, t, n, i) {
            var r = {},
              o = e === Pt;
            function s(a) {
              var l;
              return (
                (r[a] = !0),
                _.each(e[a] || [], function (e, a) {
                  var c = a(t, n, i);
                  return "string" != typeof c || o || r[c]
                    ? o
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), s(c), !1);
                }),
                l
              );
            }
            return s(t.dataTypes[0]) || (!r["*"] && s("*"));
          }
          function Ft(e, t) {
            var n,
              i,
              r = _.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && _.extend(!0, e, i), e;
          }
          (Ht.href = wt.href),
            _.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: wt.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    wt.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Nt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": _.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Ft(Ft(e, _.ajaxSettings), t) : Ft(_.ajaxSettings, e);
              },
              ajaxPrefilter: It($t),
              ajaxTransport: It(Pt),
              ajax: function (t, n) {
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p,
                  f = _.ajaxSetup({}, n),
                  h = f.context || f,
                  m = f.context && (h.nodeType || h.jquery) ? _(h) : _.event,
                  v = _.Deferred(),
                  y = _.Callbacks("once memory"),
                  b = f.statusCode || {},
                  w = {},
                  x = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!s)
                          for (s = {}; (t = Mt.exec(o)); )
                            s[t[1].toLowerCase() + " "] = (
                              s[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = s[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (w[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) C.always(e[C.status]);
                        else for (t in e) b[t] = [b[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return i && i.abort(t), S(0, t), this;
                    },
                  };
                if (
                  (v.promise(C),
                  (f.url = ((t || f.url || wt.href) + "").replace(
                    jt,
                    wt.protocol + "//"
                  )),
                  (f.type = n.method || n.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [
                    "",
                  ]),
                  null == f.crossDomain)
                ) {
                  l = g.createElement("a");
                  try {
                    (l.href = f.url),
                      (l.href = l.href),
                      (f.crossDomain =
                        Ht.protocol + "//" + Ht.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if (
                  (f.data &&
                    f.processData &&
                    "string" != typeof f.data &&
                    (f.data = _.param(f.data, f.traditional)),
                  qt($t, f, n, C),
                  c)
                )
                  return C;
                for (d in ((u = _.event && f.global) &&
                  0 == _.active++ &&
                  _.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !Lt.test(f.type)),
                (r = f.url.replace(Dt, "")),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 ===
                      (f.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (f.data = f.data.replace(At, "+"))
                  : ((p = f.url.slice(r.length)),
                    f.data &&
                      (f.processData || "string" == typeof f.data) &&
                      ((r += (xt.test(r) ? "&" : "?") + f.data), delete f.data),
                    !1 === f.cache &&
                      ((r = r.replace(Ot, "$1")),
                      (p = (xt.test(r) ? "&" : "?") + "_=" + _t.guid++ + p)),
                    (f.url = r + p)),
                f.ifModified &&
                  (_.lastModified[r] &&
                    C.setRequestHeader("If-Modified-Since", _.lastModified[r]),
                  _.etag[r] && C.setRequestHeader("If-None-Match", _.etag[r])),
                ((f.data && f.hasContent && !1 !== f.contentType) ||
                  n.contentType) &&
                  C.setRequestHeader("Content-Type", f.contentType),
                C.setRequestHeader(
                  "Accept",
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] +
                        ("*" !== f.dataTypes[0] ? ", " + Nt + "; q=0.01" : "")
                    : f.accepts["*"]
                ),
                f.headers))
                  C.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || c))
                  return C.abort();
                if (
                  ((T = "abort"),
                  y.add(f.complete),
                  C.done(f.success),
                  C.fail(f.error),
                  (i = qt(Pt, f, n, C)))
                ) {
                  if (
                    ((C.readyState = 1), u && m.trigger("ajaxSend", [C, f]), c)
                  )
                    return C;
                  f.async &&
                    f.timeout > 0 &&
                    (a = e.setTimeout(function () {
                      C.abort("timeout");
                    }, f.timeout));
                  try {
                    (c = !1), i.send(w, S);
                  } catch (e) {
                    if (c) throw e;
                    S(-1, e);
                  }
                } else S(-1, "No Transport");
                function S(t, n, s, l) {
                  var d,
                    p,
                    g,
                    w,
                    x,
                    T = n;
                  c ||
                    ((c = !0),
                    a && e.clearTimeout(a),
                    (i = void 0),
                    (o = l || ""),
                    (C.readyState = t > 0 ? 4 : 0),
                    (d = (t >= 200 && t < 300) || 304 === t),
                    s &&
                      (w = (function (e, t, n) {
                        for (
                          var i, r, o, s, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              o = r;
                              break;
                            }
                            s || (s = r);
                          }
                          o = o || s;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(f, C, s)),
                    !d &&
                      _.inArray("script", f.dataTypes) > -1 &&
                      _.inArray("json", f.dataTypes) < 0 &&
                      (f.converters["text script"] = function () {}),
                    (w = (function (e, t, n, i) {
                      var r,
                        o,
                        s,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (s in e.converters)
                          c[s.toLowerCase()] = e.converters[s];
                      for (o = u.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = u.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(s = c[l + " " + o] || c["* " + o]))
                              for (r in c)
                                if (
                                  (a = r.split(" "))[1] === o &&
                                  (s = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = c[r])
                                    : !0 !== c[r] &&
                                      ((o = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? e
                                      : "No conversion from " + l + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(f, w, C, d)),
                    d
                      ? (f.ifModified &&
                          ((x = C.getResponseHeader("Last-Modified")) &&
                            (_.lastModified[r] = x),
                          (x = C.getResponseHeader("etag")) && (_.etag[r] = x)),
                        204 === t || "HEAD" === f.type
                          ? (T = "nocontent")
                          : 304 === t
                          ? (T = "notmodified")
                          : ((T = w.state), (p = w.data), (d = !(g = w.error))))
                      : ((g = T),
                        (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                    (C.status = t),
                    (C.statusText = (n || T) + ""),
                    d
                      ? v.resolveWith(h, [p, T, C])
                      : v.rejectWith(h, [C, T, g]),
                    C.statusCode(b),
                    (b = void 0),
                    u &&
                      m.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        C,
                        f,
                        d ? p : g,
                      ]),
                    y.fireWith(h, [C, T]),
                    u &&
                      (m.trigger("ajaxComplete", [C, f]),
                      --_.active || _.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return _.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return _.get(e, void 0, t, "script");
              },
            }),
            _.each(["get", "post"], function (e, t) {
              _[t] = function (e, n, i, r) {
                return (
                  h(n) && ((r = r || i), (i = n), (n = void 0)),
                  _.ajax(
                    _.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      _.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            _.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (_._evalUrl = function (e, t, n) {
              return _.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  _.globalEval(e, t, n);
                },
              });
            }),
            _.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (h(e) && (e = e.call(this[0])),
                    (t = _(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return h(e)
                  ? this.each(function (t) {
                      _(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = _(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = h(e);
                return this.each(function (n) {
                  _(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      _(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (_.expr.pseudos.hidden = function (e) {
              return !_.expr.pseudos.visible(e);
            }),
            (_.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (_.ajaxSettings.xhr = function () {
              try {
                return new e.XMLHttpRequest();
              } catch (e) {}
            });
          var Rt = { 0: 200, 1223: 204 },
            Bt = _.ajaxSettings.xhr();
          (f.cors = !!Bt && "withCredentials" in Bt),
            (f.ajax = Bt = !!Bt),
            _.ajaxTransport(function (t) {
              var n, i;
              if (f.cors || (Bt && !t.crossDomain))
                return {
                  send: function (r, o) {
                    var s,
                      a = t.xhr();
                    if (
                      (a.open(t.type, t.url, t.async, t.username, t.password),
                      t.xhrFields)
                    )
                      for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    for (s in (t.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(t.mimeType),
                    t.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      a.setRequestHeader(s, r[s]);
                    (n = function (e) {
                      return function () {
                        n &&
                          ((n =
                            i =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? o(0, "error")
                              : o(a.status, a.statusText)
                            : o(
                                Rt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = n()),
                      (i = a.onerror = a.ontimeout = n("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = i)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              e.setTimeout(function () {
                                n && i();
                              });
                          }),
                      (n = n("abort"));
                    try {
                      a.send((t.hasContent && t.data) || null);
                    } catch (e) {
                      if (n) throw e;
                    }
                  },
                  abort: function () {
                    n && n();
                  },
                };
            }),
            _.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            _.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return _.globalEval(e), e;
                },
              },
            }),
            _.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            _.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = _("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      g.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var zt,
            Wt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
          _.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Wt.pop() || _.expando + "_" + _t.guid++;
              return (this[e] = !0), e;
            },
          }),
            _.ajaxPrefilter("json jsonp", function (t, n, i) {
              var r,
                o,
                s,
                a =
                  !1 !== t.jsonp &&
                  (Yt.test(t.url)
                    ? "url"
                    : "string" == typeof t.data &&
                      0 ===
                        (t.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Yt.test(t.data) &&
                      "data");
              if (a || "jsonp" === t.dataTypes[0])
                return (
                  (r = t.jsonpCallback =
                    h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                  a
                    ? (t[a] = t[a].replace(Yt, "$1" + r))
                    : !1 !== t.jsonp &&
                      (t.url +=
                        (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                  (t.converters["script json"] = function () {
                    return s || _.error(r + " was not called"), s[0];
                  }),
                  (t.dataTypes[0] = "json"),
                  (o = e[r]),
                  (e[r] = function () {
                    s = arguments;
                  }),
                  i.always(function () {
                    void 0 === o ? _(e).removeProp(r) : (e[r] = o),
                      t[r] && ((t.jsonpCallback = n.jsonpCallback), Wt.push(r)),
                      s && h(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  "script"
                );
            }),
            (f.createHTMLDocument =
              (((zt = g.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === zt.childNodes.length)),
            (_.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (f.createHTMLDocument
                      ? (((i = (t =
                          g.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = g.location.href),
                        t.head.appendChild(i))
                      : (t = g)),
                  (o = !n && []),
                  (r = A.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = we([e], t, o)),
                      o && o.length && _(o).remove(),
                      _.merge([], r.childNodes)));
              var i, r, o;
            }),
            (_.fn.load = function (e, t, n) {
              var i,
                r,
                o,
                s = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = ht(e.slice(a))), (e = e.slice(0, a))),
                h(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                s.length > 0 &&
                  _.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        s.html(
                          i ? _("<div>").append(_.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (_.expr.pseudos.animated = function (e) {
              return _.grep(_.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (_.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c = _.css(e, "position"),
                  u = _(e),
                  d = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (o = _.css(e, "top")),
                  (l = _.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (o + l).indexOf("auto") > -1
                    ? ((s = (i = u.position()).top), (r = i.left))
                    : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                  h(t) && (t = t.call(e, n, _.extend({}, a))),
                  null != t.top && (d.top = t.top - a.top + s),
                  null != t.left && (d.left = t.left - a.left + r),
                  "using" in t ? t.using.call(e, d) : u.css(d);
              },
            }),
            _.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        _.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === _.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === _.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = _(e).offset()).top += _.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += _.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - _.css(i, "marginTop", !0),
                    left: t.left - r.left - _.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === _.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ie;
                });
              },
            }),
            _.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                _.fn[e] = function (i) {
                  return B(
                    this,
                    function (e, i, r) {
                      var o;
                      if (
                        (m(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === r)
                      )
                        return o ? o[t] : e[i];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : r,
                            n ? r : o.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            _.each(["top", "left"], function (e, t) {
              _.cssHooks[t] = Be(f.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Re(e, t)), He.test(n) ? _(e).position()[t] + "px" : n
                  );
              });
            }),
            _.each({ Height: "height", Width: "width" }, function (e, t) {
              _.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  _.fn[i] = function (r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                      a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return B(
                      this,
                      function (t, n, r) {
                        var o;
                        return m(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === r
                          ? _.css(t, n, a)
                          : _.style(t, n, r, a);
                      },
                      t,
                      s ? r : void 0,
                      s
                    );
                  };
                }
              );
            }),
            _.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                _.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            _.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            _.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                _.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (_.proxy = function (e, t) {
            var n, i, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), h(e)))
              return (
                (i = r.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, i.concat(r.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || _.guid++),
                o
              );
          }),
            (_.holdReady = function (e) {
              e ? _.readyWait++ : _.ready(!0);
            }),
            (_.isArray = Array.isArray),
            (_.parseJSON = JSON.parse),
            (_.nodeName = E),
            (_.isFunction = h),
            (_.isWindow = m),
            (_.camelCase = U),
            (_.type = b),
            (_.now = Date.now),
            (_.isNumeric = function (e) {
              var t = _.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (_.trim = function (e) {
              return null == e ? "" : (e + "").replace(Ut, "");
            });
          var Xt = e.jQuery,
            Vt = e.$;
          return (
            (_.noConflict = function (t) {
              return (
                e.$ === _ && (e.$ = Vt),
                t && e.jQuery === _ && (e.jQuery = Xt),
                _
              );
            }),
            void 0 === t && (e.jQuery = e.$ = _),
            _
          );
        });
      },
    "./src/js/cursor.js":
      /*!**************************!*\
  !*** ./src/js/cursor.js ***!
  \**************************/
      /*! exports provided: default */ function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, "default", function () {
            return a;
          });
        var i = n(/*! jquery */ "./node_modules/jquery/dist/jquery.js"),
          r = n.n(i),
          o = n(/*! gsap */ "./node_modules/gsap/index.js");
        function s(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        var a = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.options = r.a.extend(
                !0,
                {
                  container: "body",
                  speed: 0.7,
                  ease: "expo.out",
                  visibleTimeout: 300,
                },
                t
              )),
              (this.body = r()(this.options.container)),
              (this.el = r()('<div class="cb-cursor"></div>')),
              (this.text = r()('<div class="cb-cursor-text"></div>')),
              this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: "init",
                value: function () {
                  this.el.append(this.text),
                    this.body.append(this.el),
                    this.bind(),
                    this.move(-window.innerWidth, -window.innerHeight, 0);
                },
              },
              {
                key: "bind",
                value: function () {
                  var e = this,
                    t = this;
                  this.body
                    .on("mouseleave", function () {
                      t.hide();
                    })
                    .on("mouseenter", function () {
                      t.show();
                    })
                    .on("mousemove", function (t) {
                      (e.pos = {
                        x: e.stick
                          ? e.stick.x - 0.15 * (e.stick.x - t.clientX)
                          : t.clientX,
                        y: e.stick
                          ? e.stick.y - 0.15 * (e.stick.y - t.clientY)
                          : t.clientY,
                      }),
                        e.update();
                    })
                    .on("mousedown", function () {
                      t.setState("-active");
                    })
                    .on("mouseup", function () {
                      t.removeState("-active");
                    })
                    .on("mouseenter", "a,input,textarea,button", function () {
                      t.setState("-pointer");
                    })
                    .on("mouseleave", "a,input,textarea,button", function () {
                      t.removeState("-pointer");
                    })
                    .on("mouseenter", "iframe", function () {
                      t.hide();
                    })
                    .on("mouseleave", "iframe", function () {
                      t.show();
                    })
                    .on("mouseenter", "[data-cursor]", function () {
                      t.setState(this.dataset.cursor);
                    })
                    .on("mouseleave", "[data-cursor]", function () {
                      t.removeState(this.dataset.cursor);
                    })
                    .on("mouseenter", "[data-cursor-text]", function () {
                      t.setText(this.dataset.cursorText);
                    })
                    .on("mouseleave", "[data-cursor-text]", function () {
                      t.removeText();
                    })
                    .on("mouseenter", "[data-cursor-stick]", function () {
                      t.setStick(this.dataset.cursorStick);
                    })
                    .on("mouseleave", "[data-cursor-stick]", function () {
                      t.removeStick();
                    });
                },
              },
              {
                key: "setState",
                value: function (e) {
                  this.el.addClass(e);
                },
              },
              {
                key: "removeState",
                value: function (e) {
                  this.el.removeClass(e);
                },
              },
              {
                key: "toggleState",
                value: function (e) {
                  this.el.toggleClass(e);
                },
              },
              {
                key: "setText",
                value: function (e) {
                  this.text.html(e), this.el.addClass("-text");
                },
              },
              {
                key: "removeText",
                value: function () {
                  this.el.removeClass("-text");
                },
              },
              {
                key: "setStick",
                value: function (e) {
                  var t = r()(e),
                    n = t.get(0).getBoundingClientRect();
                  (this.stick = {
                    y: n.top + t.height() / 2,
                    x: n.left + t.width() / 2,
                  }),
                    this.move(this.stick.x, this.stick.y, 5);
                },
              },
              {
                key: "removeStick",
                value: function () {
                  this.stick = !1;
                },
              },
              {
                key: "update",
                value: function () {
                  this.move(), this.show();
                },
              },
              {
                key: "move",
                value: function (e, t, n) {
                  o.default.to(this.el, {
                    x: e || this.pos.x,
                    y: t || this.pos.y,
                    force3D: !0,
                    overwrite: !0,
                    ease: this.options.ease,
                    duration: this.visible ? n || this.options.speed : 0,
                  });
                },
              },
              {
                key: "show",
                value: function () {
                  var e = this;
                  this.visible ||
                    (clearInterval(this.visibleInt),
                    this.el.addClass("-visible"),
                    (this.visibleInt = setTimeout(function () {
                      return (e.visible = !0);
                    })));
                },
              },
              {
                key: "hide",
                value: function () {
                  var e = this;
                  clearInterval(this.visibleInt),
                    this.el.removeClass("-visible"),
                    (this.visibleInt = setTimeout(function () {
                      return (e.visible = !1);
                    }, this.options.visibleTimeout));
                },
              },
            ]) && s(t.prototype, n),
            i && s(t, i),
            e
          );
        })();
      },
    "./src/js/index.js":
      /*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
      /*! no exports provided */ function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(/*! jquery */ "./node_modules/jquery/dist/jquery.js"),
          r = n.n(i),
          o = n(/*! cursor */ "./src/js/cursor.js"),
          s = n(/*! magnetic */ "magnetic.js");
        new o.default();
        r()("[data-magnetic]").each(function () {
          new s.default(this);
        });
      },
    "magnetic.js":
      /*!****************************!*\
  !*** magnetic.js ***!
  \****************************/
      /*! exports provided: default */ function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, "default", function () {
            return a;
          });
        var i = n(/*! jquery */ "./node_modules/jquery/dist/jquery.js"),
          r = n.n(i),
          o = n(/*! gsap */ "./node_modules/gsap/index.js");
        function s(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        var a = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.el = r()(t)),
              (this.options = r.a.extend(
                !0,
                { y: 0.2, x: 0.2, s: 0.2, rs: 0.7 },
                this.el.data("magnetic") || n
              )),
              (this.y = 0),
              (this.x = 0),
              (this.width = 0),
              (this.height = 0),
              this.el.data("magnetic-init") ||
                (this.el.data("magnetic-init", !0), this.bind());
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: "bind",
                value: function () {
                  var e = this;
                  this.el.on("mouseenter", function () {
                    (e.y = e.el.offset().top - window.pageYOffset),
                      (e.x = e.el.offset().left - window.pageXOffset),
                      (e.width = e.el.outerWidth()),
                      (e.height = e.el.outerHeight());
                  }),
                    this.el.on("mousemove", function (t) {
                      var n = (t.clientY - e.y - e.height / 2) * e.options.y,
                        i = (t.clientX - e.x - e.width / 2) * e.options.x;
                      e.move(i, n, e.options.s);
                    }),
                    this.el.on("mouseleave", function (t) {
                      e.move(0, 0, e.options.rs);
                    });
                },
              },
              {
                key: "move",
                value: function (e, t, n) {
                  o.default.to(this.el, {
                    y: t,
                    x: e,
                    force3D: !0,
                    overwrite: !0,
                    duration: n,
                  });
                },
              },
            ]) && s(t.prototype, n),
            i && s(t, i),
            e
          );
        })();
      },
  }),
  /*! WOW - v1.1.3 - 2016-05-06
   * Copyright (c) 2016 Matthieu Aussaguel;*/
  function () {
    var e,
      t,
      n,
      i,
      r,
      o = function (e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      },
      s =
        [].indexOf ||
        function (e) {
          for (var t = 0, n = this.length; n > t; t++)
            if (t in this && this[t] === e) return t;
          return -1;
        };
    (t = (function () {
      function e() {}
      return (
        (e.prototype.extend = function (e, t) {
          var n, i;
          for (n in t) (i = t[n]), null == e[n] && (e[n] = i);
          return e;
        }),
        (e.prototype.isMobile = function (e) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            e
          );
        }),
        (e.prototype.createEvent = function (e, t, n, i) {
          var r;
          return (
            null == t && (t = !1),
            null == n && (n = !1),
            null == i && (i = null),
            null != document.createEvent
              ? (r = document.createEvent("CustomEvent")).initCustomEvent(
                  e,
                  t,
                  n,
                  i
                )
              : null != document.createEventObject
              ? ((r = document.createEventObject()).eventType = e)
              : (r.eventName = e),
            r
          );
        }),
        (e.prototype.emitEvent = function (e, t) {
          return null != e.dispatchEvent
            ? e.dispatchEvent(t)
            : t in (null != e)
            ? e[t]()
            : "on" + t in (null != e)
            ? e["on" + t]()
            : void 0;
        }),
        (e.prototype.addEvent = function (e, t, n) {
          return null != e.addEventListener
            ? e.addEventListener(t, n, !1)
            : null != e.attachEvent
            ? e.attachEvent("on" + t, n)
            : (e[t] = n);
        }),
        (e.prototype.removeEvent = function (e, t, n) {
          return null != e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : null != e.detachEvent
            ? e.detachEvent("on" + t, n)
            : delete e[t];
        }),
        (e.prototype.innerHeight = function () {
          return "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.clientHeight;
        }),
        e
      );
    })()),
      (n =
        this.WeakMap ||
        this.MozWeakMap ||
        (n = (function () {
          function e() {
            (this.keys = []), (this.values = []);
          }
          return (
            (e.prototype.get = function (e) {
              var t, n, i, r;
              for (t = n = 0, i = (r = this.keys).length; i > n; t = ++n)
                if (r[t] === e) return this.values[t];
            }),
            (e.prototype.set = function (e, t) {
              var n, i, r, o;
              for (n = i = 0, r = (o = this.keys).length; r > i; n = ++i)
                if (o[n] === e) return void (this.values[n] = t);
              return this.keys.push(e), this.values.push(t);
            }),
            e
          );
        })())),
      (e =
        this.MutationObserver ||
        this.WebkitMutationObserver ||
        this.MozMutationObserver ||
        (e = (function () {
          function e() {
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "MutationObserver is not supported by your browser."
              ),
              "undefined" != typeof console &&
                null !== console &&
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                );
          }
          return (
            (e.notSupported = !0), (e.prototype.observe = function () {}), e
          );
        })())),
      (i =
        this.getComputedStyle ||
        function (e, t) {
          return (
            (this.getPropertyValue = function (t) {
              var n;
              return (
                "float" === t && (t = "styleFloat"),
                r.test(t) &&
                  t.replace(r, function (e, t) {
                    return t.toUpperCase();
                  }),
                (null != (n = e.currentStyle) ? n[t] : void 0) || null
              );
            }),
            this
          );
        }),
      (r = /(\-([a-z]){1})/g),
      (this.WOW = (function () {
        function r(e) {
          null == e && (e = {}),
            (this.scrollCallback = o(this.scrollCallback, this)),
            (this.scrollHandler = o(this.scrollHandler, this)),
            (this.resetAnimation = o(this.resetAnimation, this)),
            (this.start = o(this.start, this)),
            (this.scrolled = !0),
            (this.config = this.util().extend(e, this.defaults)),
            null != e.scrollContainer &&
              (this.config.scrollContainer = document.querySelector(
                e.scrollContainer
              )),
            (this.animationNameCache = new n()),
            (this.wowEvent = this.util().createEvent(this.config.boxClass));
        }
        return (
          (r.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
          }),
          (r.prototype.init = function () {
            var e;
            return (
              (this.element = window.document.documentElement),
              "interactive" === (e = document.readyState) || "complete" === e
                ? this.start()
                : this.util().addEvent(
                    document,
                    "DOMContentLoaded",
                    this.start
                  ),
              (this.finished = [])
            );
          }),
          (r.prototype.start = function () {
            var t, n, i, r;
            if (
              ((this.stopped = !1),
              (this.boxes = function () {
                var e, n, i, r;
                for (
                  r = [],
                    e = 0,
                    n = (i = this.element.querySelectorAll(
                      "." + this.config.boxClass
                    )).length;
                  n > e;
                  e++
                )
                  (t = i[e]), r.push(t);
                return r;
              }.call(this)),
              (this.all = function () {
                var e, n, i, r;
                for (r = [], e = 0, n = (i = this.boxes).length; n > e; e++)
                  (t = i[e]), r.push(t);
                return r;
              }.call(this)),
              this.boxes.length)
            )
              if (this.disabled()) this.resetStyle();
              else
                for (n = 0, i = (r = this.boxes).length; i > n; n++)
                  (t = r[n]), this.applyStyle(t, !0);
            return (
              this.disabled() ||
                (this.util().addEvent(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                this.util().addEvent(window, "resize", this.scrollHandler),
                (this.interval = setInterval(this.scrollCallback, 50))),
              this.config.live
                ? new e(
                    (function (e) {
                      return function (t) {
                        var n, i, r, o, s;
                        for (s = [], n = 0, i = t.length; i > n; n++)
                          (o = t[n]),
                            s.push(
                              function () {
                                var e, t, n, i;
                                for (
                                  i = [],
                                    e = 0,
                                    t = (n = o.addedNodes || []).length;
                                  t > e;
                                  e++
                                )
                                  (r = n[e]), i.push(this.doSync(r));
                                return i;
                              }.call(e)
                            );
                        return s;
                      };
                    })(this)
                  ).observe(document.body, { childList: !0, subtree: !0 })
                : void 0
            );
          }),
          (r.prototype.stop = function () {
            return (
              (this.stopped = !0),
              this.util().removeEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().removeEvent(window, "resize", this.scrollHandler),
              null != this.interval ? clearInterval(this.interval) : void 0
            );
          }),
          (r.prototype.sync = function (t) {
            return e.notSupported ? this.doSync(this.element) : void 0;
          }),
          (r.prototype.doSync = function (e) {
            var t, n, i, r, o;
            if ((null == e && (e = this.element), 1 === e.nodeType)) {
              for (
                o = [],
                  n = 0,
                  i = (r = (e = e.parentNode || e).querySelectorAll(
                    "." + this.config.boxClass
                  )).length;
                i > n;
                n++
              )
                (t = r[n]),
                  s.call(this.all, t) < 0
                    ? (this.boxes.push(t),
                      this.all.push(t),
                      this.stopped || this.disabled()
                        ? this.resetStyle()
                        : this.applyStyle(t, !0),
                      o.push((this.scrolled = !0)))
                    : o.push(void 0);
              return o;
            }
          }),
          (r.prototype.show = function (e) {
            return (
              this.applyStyle(e),
              (e.className = e.className + " " + this.config.animateClass),
              null != this.config.callback && this.config.callback(e),
              this.util().emitEvent(e, this.wowEvent),
              this.util().addEvent(e, "animationend", this.resetAnimation),
              this.util().addEvent(e, "oanimationend", this.resetAnimation),
              this.util().addEvent(
                e,
                "webkitAnimationEnd",
                this.resetAnimation
              ),
              this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation),
              e
            );
          }),
          (r.prototype.applyStyle = function (e, t) {
            var n, i, r;
            return (
              (i = e.getAttribute("data-wow-duration")),
              (n = e.getAttribute("data-wow-delay")),
              (r = e.getAttribute("data-wow-iteration")),
              this.animate(
                (function (o) {
                  return function () {
                    return o.customStyle(e, t, i, n, r);
                  };
                })(this)
              )
            );
          }),
          (r.prototype.animate =
            "requestAnimationFrame" in window
              ? function (e) {
                  return window.requestAnimationFrame(e);
                }
              : function (e) {
                  return e();
                }),
          (r.prototype.resetStyle = function () {
            var e, t, n, i, r;
            for (r = [], t = 0, n = (i = this.boxes).length; n > t; t++)
              (e = i[t]), r.push((e.style.visibility = "visible"));
            return r;
          }),
          (r.prototype.resetAnimation = function (e) {
            var t;
            return e.type.toLowerCase().indexOf("animationend") >= 0
              ? ((t = e.target || e.srcElement).className = t.className
                  .replace(this.config.animateClass, "")
                  .trim())
              : void 0;
          }),
          (r.prototype.customStyle = function (e, t, n, i, r) {
            return (
              t && this.cacheAnimationName(e),
              (e.style.visibility = t ? "hidden" : "visible"),
              n && this.vendorSet(e.style, { animationDuration: n }),
              i && this.vendorSet(e.style, { animationDelay: i }),
              r && this.vendorSet(e.style, { animationIterationCount: r }),
              this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e),
              }),
              e
            );
          }),
          (r.prototype.vendors = ["moz", "webkit"]),
          (r.prototype.vendorSet = function (e, t) {
            var n, i, r, o;
            for (n in ((i = []), t))
              (r = t[n]),
                (e["" + n] = r),
                i.push(
                  function () {
                    var t, i, s, a;
                    for (
                      a = [], t = 0, i = (s = this.vendors).length;
                      i > t;
                      t++
                    )
                      (o = s[t]),
                        a.push(
                          (e["" + o + n.charAt(0).toUpperCase() + n.substr(1)] =
                            r)
                        );
                    return a;
                  }.call(this)
                );
            return i;
          }),
          (r.prototype.vendorCSS = function (e, t) {
            var n, r, o, s, a, l;
            for (
              s = (a = i(e)).getPropertyCSSValue(t),
                n = 0,
                r = (o = this.vendors).length;
              r > n;
              n++
            )
              (l = o[n]), (s = s || a.getPropertyCSSValue("-" + l + "-" + t));
            return s;
          }),
          (r.prototype.animationName = function (e) {
            var t;
            try {
              t = this.vendorCSS(e, "animation-name").cssText;
            } catch (n) {
              t = i(e).getPropertyValue("animation-name");
            }
            return "none" === t ? "" : t;
          }),
          (r.prototype.cacheAnimationName = function (e) {
            return this.animationNameCache.set(e, this.animationName(e));
          }),
          (r.prototype.cachedAnimationName = function (e) {
            return this.animationNameCache.get(e);
          }),
          (r.prototype.scrollHandler = function () {
            return (this.scrolled = !0);
          }),
          (r.prototype.scrollCallback = function () {
            var e;
            return !this.scrolled ||
              ((this.scrolled = !1),
              (this.boxes = function () {
                var t, n, i, r;
                for (r = [], t = 0, n = (i = this.boxes).length; n > t; t++)
                  (e = i[t]) && (this.isVisible(e) ? this.show(e) : r.push(e));
                return r;
              }.call(this)),
              this.boxes.length || this.config.live)
              ? void 0
              : this.stop();
          }),
          (r.prototype.offsetTop = function (e) {
            for (var t; void 0 === e.offsetTop; ) e = e.parentNode;
            for (t = e.offsetTop; (e = e.offsetParent); ) t += e.offsetTop;
            return t;
          }),
          (r.prototype.isVisible = function (e) {
            var t, n, i, r, o;
            return (
              (n = e.getAttribute("data-wow-offset") || this.config.offset),
              (r =
                (o =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset) +
                Math.min(this.element.clientHeight, this.util().innerHeight()) -
                n),
              (t = (i = this.offsetTop(e)) + e.clientHeight),
              r >= i && t >= o
            );
          }),
          (r.prototype.util = function () {
            return null != this._util ? this._util : (this._util = new t());
          }),
          (r.prototype.disabled = function () {
            return (
              !this.config.mobile && this.util().isMobile(navigator.userAgent)
            );
          }),
          r
        );
      })());
  }.call(this);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (e) {
        return typeof e;
      }
    : function (e) {
        return e &&
          "function" == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype
          ? "symbol"
          : typeof e;
      };
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" ===
        ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
      module.exports
    ? (module.exports = function (t, n) {
        return (
          void 0 === n &&
            (n =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(t)),
          e(n),
          n
        );
      })
    : e(jQuery);
})(function (e) {
  return (
    (e.fn.tilt = function (t) {
      var n = function () {
          this.ticking ||
            (requestAnimationFrame(u.bind(this)), (this.ticking = !0));
        },
        i = function () {
          e(this).on("mousemove", a),
            e(this).on("mouseenter", o),
            this.settings.reset && e(this).on("mouseleave", l),
            this.settings.glare && e(window).on("resize", p.bind(this));
        },
        r = function () {
          var t = this;
          void 0 !== this.timeout && clearTimeout(this.timeout),
            e(this).css({
              transition: this.settings.speed + "ms " + this.settings.easing,
            }),
            this.settings.glare &&
              this.glareElement.css({
                transition:
                  "opacity " +
                  this.settings.speed +
                  "ms " +
                  this.settings.easing,
              }),
            (this.timeout = setTimeout(function () {
              e(t).css({ transition: "" }),
                t.settings.glare && t.glareElement.css({ transition: "" });
            }, this.settings.speed));
        },
        o = function (t) {
          (this.ticking = !1),
            e(this).css({ "will-change": "transform" }),
            r.call(this),
            e(this).trigger("tilt.mouseEnter");
        },
        s = function (t) {
          return (
            void 0 === t &&
              (t = {
                pageX: e(this).offset().left + e(this).outerWidth() / 2,
                pageY: e(this).offset().top + e(this).outerHeight() / 2,
              }),
            { x: t.pageX, y: t.pageY }
          );
        },
        a = function (e) {
          (this.mousePositions = s(e)), n.call(this);
        },
        l = function () {
          r.call(this),
            (this.reset = !0),
            n.call(this),
            e(this).trigger("tilt.mouseLeave");
        },
        c = function () {
          var t = e(this).outerWidth(),
            n = e(this).outerHeight(),
            i = e(this).offset().left,
            r = e(this).offset().top,
            o = (this.mousePositions.x - i) / t,
            s = (this.mousePositions.y - r) / n;
          return {
            tiltX: (
              this.settings.maxTilt / 2 -
              o * this.settings.maxTilt
            ).toFixed(2),
            tiltY: (
              s * this.settings.maxTilt -
              this.settings.maxTilt / 2
            ).toFixed(2),
            percentageX: 100 * o,
            percentageY: 100 * s,
            angle:
              Math.atan2(
                this.mousePositions.x - (i + t / 2),
                -(this.mousePositions.y - (r + n / 2))
              ) *
              (180 / Math.PI),
          };
        },
        u = function () {
          return (
            (this.transforms = c.call(this)),
            this.reset
              ? ((this.reset = !1),
                e(this).css(
                  "transform",
                  "perspective(" +
                    this.settings.perspective +
                    "px) rotateX(0deg) rotateY(0deg)"
                ),
                void (
                  this.settings.glare &&
                  (this.glareElement.css(
                    "transform",
                    "rotate(180deg) translate(-50%, -50%)"
                  ),
                  this.glareElement.css("opacity", "0"))
                ))
              : (e(this).css(
                  "transform",
                  "perspective(" +
                    this.settings.perspective +
                    "px) rotateX(" +
                    ("x" === this.settings.disableAxis
                      ? 0
                      : this.transforms.tiltY) +
                    "deg) rotateY(" +
                    ("y" === this.settings.disableAxis
                      ? 0
                      : this.transforms.tiltX) +
                    "deg) scale3d(" +
                    this.settings.scale +
                    "," +
                    this.settings.scale +
                    "," +
                    this.settings.scale +
                    ")"
                ),
                this.settings.glare &&
                  (this.glareElement.css(
                    "transform",
                    "rotate(" +
                      this.transforms.angle +
                      "deg) translate(-50%, -50%)"
                  ),
                  this.glareElement.css(
                    "opacity",
                    "" +
                      (this.transforms.percentageY * this.settings.maxGlare) /
                        100
                  )),
                e(this).trigger("change", [this.transforms]),
                void (this.ticking = !1))
          );
        },
        d = function () {
          var t = this.settings.glarePrerender;
          if (
            (t ||
              e(this).append(
                '<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'
              ),
            (this.glareElementWrapper = e(this).find(".js-tilt-glare")),
            (this.glareElement = e(this).find(".js-tilt-glare-inner")),
            !t)
          ) {
            this.glareElementWrapper
              .css({
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              })
              .css({ overflow: "hidden", "pointer-events": "none" }),
              this.glareElement.css({
                position: "absolute",
                top: "50%",
                left: "50%",
                "background-image":
                  "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                width: "" + 2 * e(this).outerWidth(),
                height: "" + 2 * e(this).outerWidth(),
                transform: "rotate(180deg) translate(-50%, -50%)",
                "transform-origin": "0% 0%",
                opacity: "0",
              });
          }
        },
        p = function () {
          this.glareElement.css({
            width: "" + 2 * e(this).outerWidth(),
            height: "" + 2 * e(this).outerWidth(),
          });
        };
      return (
        (e.fn.tilt.destroy = function () {
          e(this).each(function () {
            e(this).find(".js-tilt-glare").remove(),
              e(this).css({ "will-change": "", transform: "" }),
              e(this).off("mousemove mouseenter mouseleave");
          });
        }),
        (e.fn.tilt.getValues = function () {
          var t = [];
          return (
            e(this).each(function () {
              (this.mousePositions = s.call(this)), t.push(c.call(this));
            }),
            t
          );
        }),
        (e.fn.tilt.reset = function () {
          e(this).each(function () {
            var t = this;
            (this.mousePositions = s.call(this)),
              (this.settings = e(this).data("settings")),
              l.call(this),
              setTimeout(function () {
                t.reset = !1;
              }, this.settings.transition);
          });
        }),
        this.each(function () {
          var n = this;
          (this.settings = e.extend(
            {
              maxTilt: e(this).is("[data-tilt-max]")
                ? e(this).data("tilt-max")
                : 20,
              perspective: e(this).is("[data-tilt-perspective]")
                ? e(this).data("tilt-perspective")
                : 300,
              easing: e(this).is("[data-tilt-easing]")
                ? e(this).data("tilt-easing")
                : "cubic-bezier(.03,.98,.52,.99)",
              scale: e(this).is("[data-tilt-scale]")
                ? e(this).data("tilt-scale")
                : "1",
              speed: e(this).is("[data-tilt-speed]")
                ? e(this).data("tilt-speed")
                : "400",
              transition:
                !e(this).is("[data-tilt-transition]") ||
                e(this).data("tilt-transition"),
              disableAxis: e(this).is("[data-tilt-disable-axis]")
                ? e(this).data("tilt-disable-axis")
                : null,
              axis: e(this).is("[data-tilt-axis]")
                ? e(this).data("tilt-axis")
                : null,
              reset:
                !e(this).is("[data-tilt-reset]") || e(this).data("tilt-reset"),
              glare:
                !!e(this).is("[data-tilt-glare]") && e(this).data("tilt-glare"),
              maxGlare: e(this).is("[data-tilt-maxglare]")
                ? e(this).data("tilt-maxglare")
                : 1,
            },
            t
          )),
            null !== this.settings.axis &&
              (console.warn(
                "Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"
              ),
              (this.settings.disableAxis = this.settings.axis)),
            (this.init = function () {
              e(n).data("settings", n.settings),
                n.settings.glare && d.call(n),
                i.call(n);
            }),
            this.init();
        })
      );
    }),
    e("[data-tilt]").tilt(),
    !0
  );
}),
  (function (e, t, n, i) {
    "use strict";
    var r = "parallax",
      o = {
        relativeInput: !1,
        clipRelativeInput: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: 0.1,
        frictionY: 0.1,
        originX: 0.5,
        originY: 0.5,
        pointerEvents: !0,
        precision: 1,
      };
    function s(t, n) {
      (this.element = t),
        (this.$context = e(t).data("api", this)),
        (this.$layers = this.$context.find(".layer"));
      var i = {
        calibrateX: this.$context.data("calibrate-x") || null,
        calibrateY: this.$context.data("calibrate-y") || null,
        invertX: this.$context.data("invert-x") || null,
        invertY: this.$context.data("invert-y") || null,
        limitX: parseFloat(this.$context.data("limit-x")) || null,
        limitY: parseFloat(this.$context.data("limit-y")) || null,
        scalarX: parseFloat(this.$context.data("scalar-x")) || null,
        scalarY: parseFloat(this.$context.data("scalar-y")) || null,
        frictionX: parseFloat(this.$context.data("friction-x")) || null,
        frictionY: parseFloat(this.$context.data("friction-y")) || null,
        originX: parseFloat(this.$context.data("origin-x")) || null,
        originY: parseFloat(this.$context.data("origin-y")) || null,
        pointerEvents: this.$context.data("pointer-events") || !0,
        precision: parseFloat(this.$context.data("precision")) || 1,
      };
      for (var r in i) null === i[r] && delete i[r];
      e.extend(this, o, n, i),
        (this.calibrationTimer = null),
        (this.calibrationFlag = !0),
        (this.enabled = !1),
        (this.depthsX = []),
        (this.depthsY = []),
        (this.raf = null),
        (this.bounds = null),
        (this.ex = 0),
        (this.ey = 0),
        (this.ew = 0),
        (this.eh = 0),
        (this.ecx = 0),
        (this.ecy = 0),
        (this.erx = 0),
        (this.ery = 0),
        (this.cx = 0),
        (this.cy = 0),
        (this.ix = 0),
        (this.iy = 0),
        (this.mx = 0),
        (this.my = 0),
        (this.vx = 0),
        (this.vy = 0),
        (this.onMouseMove = this.onMouseMove.bind(this)),
        (this.onDeviceOrientation = this.onDeviceOrientation.bind(this)),
        (this.onOrientationTimer = this.onOrientationTimer.bind(this)),
        (this.onCalibrationTimer = this.onCalibrationTimer.bind(this)),
        (this.onAnimationFrame = this.onAnimationFrame.bind(this)),
        (this.onWindowResize = this.onWindowResize.bind(this)),
        this.initialise();
    }
    (s.prototype.transformSupport = function (e) {
      for (
        var r = n.createElement("div"),
          o = !1,
          s = null,
          a = !1,
          l = null,
          c = null,
          u = 0,
          d = this.vendors.length;
        u < d;
        u++
      )
        if (
          (null !== this.vendors[u]
            ? ((l = this.vendors[u][0] + "transform"),
              (c = this.vendors[u][1] + "Transform"))
            : ((l = "transform"), (c = "transform")),
          r.style[c] !== i)
        ) {
          o = !0;
          break;
        }
      switch (e) {
        case "2D":
          a = o;
          break;
        case "3D":
          if (o) {
            var p = n.body || n.createElement("body"),
              f = n.documentElement,
              h = f.style.overflow,
              m = !1;
            n.body ||
              ((m = !0),
              (f.style.overflow = "hidden"),
              f.appendChild(p),
              (p.style.overflow = "hidden"),
              (p.style.background = "")),
              p.appendChild(r),
              (r.style[c] = "translate3d(1px,1px,1px)"),
              (a =
                (s = t.getComputedStyle(r).getPropertyValue(l)) !== i &&
                s.length > 0 &&
                "none" !== s),
              (f.style.overflow = h),
              p.removeChild(r),
              m && (p.removeAttribute("style"), p.parentNode.removeChild(p));
          }
      }
      return a;
    }),
      (s.prototype.ww = null),
      (s.prototype.wh = null),
      (s.prototype.wcx = null),
      (s.prototype.wcy = null),
      (s.prototype.wrx = null),
      (s.prototype.wry = null),
      (s.prototype.portrait = null),
      (s.prototype.desktop = !navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
      )),
      (s.prototype.vendors = [
        null,
        ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"],
      ]),
      (s.prototype.motionSupport = !!t.DeviceMotionEvent),
      (s.prototype.orientationSupport = !!t.DeviceOrientationEvent),
      (s.prototype.orientationStatus = 0),
      (s.prototype.transform2DSupport = s.prototype.transformSupport("2D")),
      (s.prototype.transform3DSupport = s.prototype.transformSupport("3D")),
      (s.prototype.propertyCache = {}),
      (s.prototype.initialise = function () {
        "static" === this.$context.css("position") &&
          this.$context.css({ position: "relative" }),
          this.pointerEvents || this.$context.css({ pointerEvents: "none" }),
          this.accelerate(this.$context),
          this.updateLayers(),
          this.updateDimensions(),
          this.enable(),
          this.queueCalibration(this.calibrationDelay);
      }),
      (s.prototype.updateLayers = function () {
        (this.$layers = this.$context.find(".layer")),
          (this.depthsX = []),
          (this.depthsY = []),
          this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0,
          }),
          this.$layers.first().css({ position: "relative" }),
          this.accelerate(this.$layers),
          this.$layers.each(
            e.proxy(function (t, n) {
              var i = e(n).data("depth") || 0;
              this.depthsX.push(e(n).data("depth-x") || i),
                this.depthsY.push(e(n).data("depth-y") || i);
            }, this)
          );
      }),
      (s.prototype.updateDimensions = function () {
        (this.ww = t.innerWidth),
          (this.wh = t.innerHeight),
          (this.wcx = this.ww * this.originX),
          (this.wcy = this.wh * this.originY),
          (this.wrx = Math.max(this.wcx, this.ww - this.wcx)),
          (this.wry = Math.max(this.wcy, this.wh - this.wcy));
      }),
      (s.prototype.updateBounds = function () {
        (this.bounds = this.element.getBoundingClientRect()),
          (this.ex = this.bounds.left),
          (this.ey = this.bounds.top),
          (this.ew = this.bounds.width),
          (this.eh = this.bounds.height),
          (this.ecx = this.ew * this.originX),
          (this.ecy = this.eh * this.originY),
          (this.erx = Math.max(this.ecx, this.ew - this.ecx)),
          (this.ery = Math.max(this.ecy, this.eh - this.ecy));
      }),
      (s.prototype.queueCalibration = function (e) {
        clearTimeout(this.calibrationTimer),
          (this.calibrationTimer = setTimeout(this.onCalibrationTimer, e));
      }),
      (s.prototype.enable = function () {
        this.enabled ||
          ((this.enabled = !0),
          this.orientationSupport
            ? ((this.portrait = null),
              t.addEventListener("deviceorientation", this.onDeviceOrientation),
              setTimeout(this.onOrientationTimer, this.supportDelay))
            : ((this.cx = 0),
              (this.cy = 0),
              (this.portrait = !1),
              t.addEventListener("mousemove", this.onMouseMove)),
          t.addEventListener("resize", this.onWindowResize),
          (this.raf = requestAnimationFrame(this.onAnimationFrame)));
      }),
      (s.prototype.disable = function () {
        this.enabled &&
          ((this.enabled = !1),
          this.orientationSupport
            ? t.removeEventListener(
                "deviceorientation",
                this.onDeviceOrientation
              )
            : t.removeEventListener("mousemove", this.onMouseMove),
          t.removeEventListener("resize", this.onWindowResize),
          cancelAnimationFrame(this.raf));
      }),
      (s.prototype.calibrate = function (e, t) {
        (this.calibrateX = e === i ? this.calibrateX : e),
          (this.calibrateY = t === i ? this.calibrateY : t);
      }),
      (s.prototype.invert = function (e, t) {
        (this.invertX = e === i ? this.invertX : e),
          (this.invertY = t === i ? this.invertY : t);
      }),
      (s.prototype.friction = function (e, t) {
        (this.frictionX = e === i ? this.frictionX : e),
          (this.frictionY = t === i ? this.frictionY : t);
      }),
      (s.prototype.scalar = function (e, t) {
        (this.scalarX = e === i ? this.scalarX : e),
          (this.scalarY = t === i ? this.scalarY : t);
      }),
      (s.prototype.limit = function (e, t) {
        (this.limitX = e === i ? this.limitX : e),
          (this.limitY = t === i ? this.limitY : t);
      }),
      (s.prototype.origin = function (e, t) {
        (this.originX = e === i ? this.originX : e),
          (this.originY = t === i ? this.originY : t);
      }),
      (s.prototype.clamp = function (e, t, n) {
        return (e = Math.max(e, t)), (e = Math.min(e, n));
      }),
      (s.prototype.css = function (t, n, r) {
        var o = this.propertyCache[n];
        if (!o)
          for (var s = 0, a = this.vendors.length; s < a; s++)
            if (
              ((o =
                null !== this.vendors[s]
                  ? e.camelCase(this.vendors[s][1] + "-" + n)
                  : n),
              t.style[o] !== i)
            ) {
              this.propertyCache[n] = o;
              break;
            }
        t.style[o] = r;
      }),
      (s.prototype.accelerate = function (e) {
        for (var t = 0, n = e.length; t < n; t++) {
          var i = e[t];
          this.css(i, "transform", "translate3d(0,0,0)"),
            this.css(i, "transform-style", "preserve-3d"),
            this.css(i, "backface-visibility", "hidden");
        }
      }),
      (s.prototype.setPosition = function (e, t, n) {
        (t += "px"),
          (n += "px"),
          this.transform3DSupport
            ? this.css(e, "transform", "translate3d(" + t + "," + n + ",0)")
            : this.transform2DSupport
            ? this.css(e, "transform", "translate(" + t + "," + n + ")")
            : ((e.style.left = t), (e.style.top = n));
      }),
      (s.prototype.onOrientationTimer = function (e) {
        this.orientationSupport &&
          0 === this.orientationStatus &&
          (this.disable(), (this.orientationSupport = !1), this.enable());
      }),
      (s.prototype.onCalibrationTimer = function (e) {
        this.calibrationFlag = !0;
      }),
      (s.prototype.onWindowResize = function (e) {
        this.updateDimensions();
      }),
      (s.prototype.onAnimationFrame = function () {
        this.updateBounds();
        var e = this.ix - this.cx,
          t = this.iy - this.cy;
        (Math.abs(e) > this.calibrationThreshold ||
          Math.abs(t) > this.calibrationThreshold) &&
          this.queueCalibration(0),
          this.portrait
            ? ((this.mx = this.calibrateX ? t : this.iy),
              (this.my = this.calibrateY ? e : this.ix))
            : ((this.mx = this.calibrateX ? e : this.ix),
              (this.my = this.calibrateY ? t : this.iy)),
          (this.mx *= this.ew * (this.scalarX / 100)),
          (this.my *= this.eh * (this.scalarY / 100)),
          isNaN(parseFloat(this.limitX)) ||
            (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)),
          isNaN(parseFloat(this.limitY)) ||
            (this.my = this.clamp(this.my, -this.limitY, this.limitY)),
          (this.vx += (this.mx - this.vx) * this.frictionX),
          (this.vy += (this.my - this.vy) * this.frictionY);
        for (var n = 0, i = this.$layers.length; n < i; n++) {
          var r = this.depthsX[n],
            o = this.depthsY[n],
            s = this.$layers[n],
            a = this.vx * (r * (this.invertX ? -1 : 1)),
            l = this.vy * (o * (this.invertY ? -1 : 1));
          this.setPosition(s, a, l);
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame);
      }),
      (s.prototype.onDeviceOrientation = function (e) {
        if (!this.desktop && null !== e.beta && null !== e.gamma) {
          this.orientationStatus = 1;
          var n = (e.beta || 0) / 30,
            i = (e.gamma || 0) / 30,
            r = t.innerHeight > t.innerWidth;
          this.portrait !== r &&
            ((this.portrait = r), (this.calibrationFlag = !0)),
            this.calibrationFlag &&
              ((this.calibrationFlag = !1), (this.cx = n), (this.cy = i)),
            (this.ix = n),
            (this.iy = i);
        }
      }),
      (s.prototype.onMouseMove = function (e) {
        var t = e.clientX,
          n = e.clientY;
        !this.orientationSupport && this.relativeInput
          ? (this.clipRelativeInput &&
              ((t = Math.max(t, this.ex)),
              (t = Math.min(t, this.ex + this.ew)),
              (n = Math.max(n, this.ey)),
              (n = Math.min(n, this.ey + this.eh))),
            (this.ix = (t - this.ex - this.ecx) / this.erx),
            (this.iy = (n - this.ey - this.ecy) / this.ery))
          : ((this.ix = (t - this.wcx) / this.wrx),
            (this.iy = (n - this.wcy) / this.wry));
      });
    var a = {
      enable: s.prototype.enable,
      disable: s.prototype.disable,
      updateLayers: s.prototype.updateLayers,
      calibrate: s.prototype.calibrate,
      friction: s.prototype.friction,
      invert: s.prototype.invert,
      scalar: s.prototype.scalar,
      limit: s.prototype.limit,
      origin: s.prototype.origin,
    };
    e.fn[r] = function (t) {
      var n = arguments;
      return this.each(function () {
        var i = e(this),
          o = i.data(r);
        o || ((o = new s(this, t)), i.data(r, o)),
          a[t] && o[t].apply(o, Array.prototype.slice.call(n, 1));
      });
    };
  })(window.jQuery || window.Zepto, window, document),
  $(function () {
    ParallaxScroll.init();
  });
var ParallaxScroll = {
  showLogs: !1,
  round: 1e3,
  init: function () {
    if ((this._log("init"), this._inited))
      return this._log("Already Inited"), void (this._inited = !0);
    (this._requestAnimationFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (e, t) {
        window.setTimeout(e, 1e3 / 60);
      }),
      this._onScroll(!0);
  },
  _inited: !1,
  _properties: [
    "x",
    "y",
    "z",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scaleX",
    "scaleY",
    "scaleZ",
    "scale",
  ],
  _requestAnimationFrame: null,
  _log: function (e) {
    this.showLogs && console.log("Parallax Scroll / " + e);
  },
  _onScroll: function (e) {
    var t = $(document).scrollTop(),
      n = $(window).height();
    this._log("onScroll " + t),
      $("[data-parallax]").each(
        $.proxy(function (i, r) {
          var o = $(r),
            s = [],
            a = !1,
            l = o.data("style");
          null == l && ((l = o.attr("style") || ""), o.data("style", l));
          var c,
            u = [o.data("parallax")];
          for (c = 2; o.data("parallax" + c); c++)
            u.push(o.data("parallax-" + c));
          var d = u.length;
          for (c = 0; c < d; c++) {
            var p = u[c],
              f = p["from-scroll"];
            null == f && (f = Math.max(0, $(r).offset().top - n)), (f |= 0);
            var h = p.distance,
              m = p["to-scroll"];
            null == h && null == m && (h = n), (h = Math.max(0 | h, 1));
            var g = p.easing,
              v = p["easing-return"];
            if (
              ((null != g && $.easing && $.easing[g]) || (g = null),
              (null != v && $.easing && $.easing[v]) || (v = g),
              g)
            ) {
              var y = p.duration;
              null == y && (y = h), (y = Math.max(0 | y, 1));
              var b = p["duration-return"];
              null == b && (b = y), (h = 1);
              var w = o.data("current-time");
              null == w && (w = 0);
            }
            null == m && (m = f + h), (m |= 0);
            var _ = p.smoothness;
            null == _ && (_ = 30), (_ |= 0), (e || 0 == _) && (_ = 1), (_ |= 0);
            var x = t;
            (x = Math.max(x, f)),
              (x = Math.min(x, m)),
              g &&
                (null == o.data("sens") && o.data("sens", "back"),
                x > f &&
                  ("back" == o.data("sens")
                    ? ((w = 1), o.data("sens", "go"))
                    : w++),
                x < m &&
                  ("go" == o.data("sens")
                    ? ((w = 1), o.data("sens", "back"))
                    : w++),
                e && (w = y),
                o.data("current-time", w)),
              this._properties.map(
                $.proxy(function (e) {
                  var t = 0,
                    n = p[e];
                  if (null != n) {
                    "scale" == e ||
                    "scaleX" == e ||
                    "scaleY" == e ||
                    "scaleZ" == e
                      ? (t = 1)
                      : (n |= 0);
                    var i = o.data("_" + e);
                    null == i && (i = t);
                    var r = ((x - f) / (m - f)) * (n - t) + t,
                      l = i + (r - i) / _;
                    if (g && w > 0 && w <= y) {
                      var c = t;
                      "back" == o.data("sens") &&
                        ((c = n), (n = -n), (g = v), (y = b)),
                        (l = $.easing[g](null, w, c, n, y));
                    }
                    (l = Math.ceil(l * this.round) / this.round) == i &&
                      r == n &&
                      (l = n),
                      s[e] || (s[e] = 0),
                      (s[e] += l),
                      i != s[e] && (o.data("_" + e, s[e]), (a = !0));
                  }
                }, this)
              );
          }
          if (a) {
            if (null != s.z) {
              var T = p.perspective;
              null == T && (T = 800);
              var C = o.parent();
              C.data("style") || C.data("style", C.attr("style") || ""),
                C.attr(
                  "style",
                  "perspective:" +
                    T +
                    "px; -webkit-perspective:" +
                    T +
                    "px; " +
                    C.data("style")
                );
            }
            null == s.scaleX && (s.scaleX = 1),
              null == s.scaleY && (s.scaleY = 1),
              null == s.scaleZ && (s.scaleZ = 1),
              null != s.scale &&
                ((s.scaleX *= s.scale),
                (s.scaleY *= s.scale),
                (s.scaleZ *= s.scale));
            var S =
              "translate3d(" +
              (s.x ? s.x : 0) +
              "px, " +
              (s.y ? s.y : 0) +
              "px, " +
              (s.z ? s.z : 0) +
              "px)" +
              " " +
              ("rotateX(" +
                (s.rotateX ? s.rotateX : 0) +
                "deg) rotateY(" +
                (s.rotateY ? s.rotateY : 0) +
                "deg) rotateZ(" +
                (s.rotateZ ? s.rotateZ : 0) +
                "deg)") +
              " " +
              ("scaleX(" +
                s.scaleX +
                ") scaleY(" +
                s.scaleY +
                ") scaleZ(" +
                s.scaleZ +
                ")") +
              ";";
            this._log(S),
              o.attr(
                "style",
                "transform:" + S + " -webkit-transform:" + S + " " + l
              );
          }
        }, this)
      ),
      window.requestAnimationFrame
        ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1))
        : this._requestAnimationFrame($.proxy(this._onScroll, this, !1));
  },
};
!(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "undefined" != typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (e) {
  "use strict";
  var t = window.Slick || {};
  ((t = (function () {
    var t = 0;
    return function (n, i) {
      var r,
        o = this;
      (o.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: e(n),
        appendDots: e(n),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (t, n) {
          return e('<button type="button" />').text(n + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (o.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        e.extend(o, o.initials),
        (o.activeBreakpoint = null),
        (o.animType = null),
        (o.animProp = null),
        (o.breakpoints = []),
        (o.breakpointSettings = []),
        (o.cssTransitions = !1),
        (o.focussed = !1),
        (o.interrupted = !1),
        (o.hidden = "hidden"),
        (o.paused = !0),
        (o.positionProp = null),
        (o.respondTo = null),
        (o.rowCount = 1),
        (o.shouldClick = !0),
        (o.$slider = e(n)),
        (o.$slidesCache = null),
        (o.transformType = null),
        (o.transitionType = null),
        (o.visibilityChange = "visibilitychange"),
        (o.windowWidth = 0),
        (o.windowTimer = null),
        (r = e(n).data("slick") || {}),
        (o.options = e.extend({}, o.defaults, i, r)),
        (o.currentSlide = o.options.initialSlide),
        (o.originalSettings = o.options),
        void 0 !== document.mozHidden
          ? ((o.hidden = "mozHidden"),
            (o.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((o.hidden = "webkitHidden"),
            (o.visibilityChange = "webkitvisibilitychange")),
        (o.autoPlay = e.proxy(o.autoPlay, o)),
        (o.autoPlayClear = e.proxy(o.autoPlayClear, o)),
        (o.autoPlayIterator = e.proxy(o.autoPlayIterator, o)),
        (o.changeSlide = e.proxy(o.changeSlide, o)),
        (o.clickHandler = e.proxy(o.clickHandler, o)),
        (o.selectHandler = e.proxy(o.selectHandler, o)),
        (o.setPosition = e.proxy(o.setPosition, o)),
        (o.swipeHandler = e.proxy(o.swipeHandler, o)),
        (o.dragHandler = e.proxy(o.dragHandler, o)),
        (o.keyHandler = e.proxy(o.keyHandler, o)),
        (o.instanceUid = t++),
        (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        o.registerBreakpoints(),
        o.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (t.prototype.addSlide = t.prototype.slickAdd =
      function (t, n, i) {
        var r = this;
        if ("boolean" == typeof n) (i = n), (n = null);
        else if (n < 0 || n >= r.slideCount) return !1;
        r.unload(),
          "number" == typeof n
            ? 0 === n && 0 === r.$slides.length
              ? e(t).appendTo(r.$slideTrack)
              : i
              ? e(t).insertBefore(r.$slides.eq(n))
              : e(t).insertAfter(r.$slides.eq(n))
            : !0 === i
            ? e(t).prependTo(r.$slideTrack)
            : e(t).appendTo(r.$slideTrack),
          (r.$slides = r.$slideTrack.children(this.options.slide)),
          r.$slideTrack.children(this.options.slide).detach(),
          r.$slideTrack.append(r.$slides),
          r.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t);
          }),
          (r.$slidesCache = r.$slides),
          r.reinit();
      }),
    (t.prototype.animateHeight = function () {
      var e = this;
      if (
        1 === e.options.slidesToShow &&
        !0 === e.options.adaptiveHeight &&
        !1 === e.options.vertical
      ) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.animate({ height: t }, e.options.speed);
      }
    }),
    (t.prototype.animateSlide = function (t, n) {
      var i = {},
        r = this;
      r.animateHeight(),
        !0 === r.options.rtl && !1 === r.options.vertical && (t = -t),
        !1 === r.transformsEnabled
          ? !1 === r.options.vertical
            ? r.$slideTrack.animate(
                { left: t },
                r.options.speed,
                r.options.easing,
                n
              )
            : r.$slideTrack.animate(
                { top: t },
                r.options.speed,
                r.options.easing,
                n
              )
          : !1 === r.cssTransitions
          ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft),
            e({ animStart: r.currentLeft }).animate(
              { animStart: t },
              {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function (e) {
                  (e = Math.ceil(e)),
                    !1 === r.options.vertical
                      ? ((i[r.animType] = "translate(" + e + "px, 0px)"),
                        r.$slideTrack.css(i))
                      : ((i[r.animType] = "translate(0px," + e + "px)"),
                        r.$slideTrack.css(i));
                },
                complete: function () {
                  n && n.call();
                },
              }
            ))
          : (r.applyTransition(),
            (t = Math.ceil(t)),
            !1 === r.options.vertical
              ? (i[r.animType] = "translate3d(" + t + "px, 0px, 0px)")
              : (i[r.animType] = "translate3d(0px," + t + "px, 0px)"),
            r.$slideTrack.css(i),
            n &&
              setTimeout(function () {
                r.disableTransition(), n.call();
              }, r.options.speed));
    }),
    (t.prototype.getNavTarget = function () {
      var t = this.options.asNavFor;
      return t && null !== t && (t = e(t).not(this.$slider)), t;
    }),
    (t.prototype.asNavFor = function (t) {
      var n = this.getNavTarget();
      null !== n &&
        "object" == typeof n &&
        n.each(function () {
          var n = e(this).slick("getSlick");
          n.unslicked || n.slideHandler(t, !0);
        });
    }),
    (t.prototype.applyTransition = function (e) {
      var t = this,
        n = {};
      !1 === t.options.fade
        ? (n[t.transitionType] =
            t.transformType + " " + t.options.speed + "ms " + t.options.cssEase)
        : (n[t.transitionType] =
            "opacity " + t.options.speed + "ms " + t.options.cssEase),
        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
    }),
    (t.prototype.autoPlay = function () {
      var e = this;
      e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow &&
          (e.autoPlayTimer = setInterval(
            e.autoPlayIterator,
            e.options.autoplaySpeed
          ));
    }),
    (t.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }),
    (t.prototype.autoPlayIterator = function () {
      var e = this,
        t = e.currentSlide + e.options.slidesToScroll;
      e.paused ||
        e.interrupted ||
        e.focussed ||
        (!1 === e.options.infinite &&
          (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
            ? (e.direction = 0)
            : 0 === e.direction &&
              ((t = e.currentSlide - e.options.slidesToScroll),
              e.currentSlide - 1 == 0 && (e.direction = 1))),
        e.slideHandler(t));
    }),
    (t.prototype.buildArrows = function () {
      var t = this;
      !0 === t.options.arrows &&
        ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
        (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
        t.slideCount > t.options.slidesToShow
          ? (t.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            t.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            t.htmlExpr.test(t.options.prevArrow) &&
              t.$prevArrow.prependTo(t.options.appendArrows),
            t.htmlExpr.test(t.options.nextArrow) &&
              t.$nextArrow.appendTo(t.options.appendArrows),
            !0 !== t.options.infinite &&
              t.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : t.$prevArrow
              .add(t.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (t.prototype.buildDots = function () {
      var t,
        n,
        i = this;
      if (!0 === i.options.dots) {
        for (
          i.$slider.addClass("slick-dotted"),
            n = e("<ul />").addClass(i.options.dotsClass),
            t = 0;
          t <= i.getDotCount();
          t += 1
        )
          n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
        (i.$dots = n.appendTo(i.options.appendDots)),
          i.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (t.prototype.buildOut = function () {
      var t = this;
      (t.$slides = t.$slider
        .children(t.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (t.slideCount = t.$slides.length),
        t.$slides.each(function (t, n) {
          e(n)
            .attr("data-slick-index", t)
            .data("originalStyling", e(n).attr("style") || "");
        }),
        t.$slider.addClass("slick-slider"),
        (t.$slideTrack =
          0 === t.slideCount
            ? e('<div class="slick-track"/>').appendTo(t.$slider)
            : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        t.$slideTrack.css("opacity", 0),
        (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
          (t.options.slidesToScroll = 1),
        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.setSlideClasses(
          "number" == typeof t.currentSlide ? t.currentSlide : 0
        ),
        !0 === t.options.draggable && t.$list.addClass("draggable");
    }),
    (t.prototype.buildRows = function () {
      var e,
        t,
        n,
        i,
        r,
        o,
        s,
        a = this;
      if (
        ((i = document.createDocumentFragment()),
        (o = a.$slider.children()),
        a.options.rows > 1)
      ) {
        for (
          s = a.options.slidesPerRow * a.options.rows,
            r = Math.ceil(o.length / s),
            e = 0;
          e < r;
          e++
        ) {
          var l = document.createElement("div");
          for (t = 0; t < a.options.rows; t++) {
            var c = document.createElement("div");
            for (n = 0; n < a.options.slidesPerRow; n++) {
              var u = e * s + (t * a.options.slidesPerRow + n);
              o.get(u) && c.appendChild(o.get(u));
            }
            l.appendChild(c);
          }
          i.appendChild(l);
        }
        a.$slider.empty().append(i),
          a.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / a.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (t.prototype.checkResponsive = function (t, n) {
      var i,
        r,
        o,
        s = this,
        a = !1,
        l = s.$slider.width(),
        c = window.innerWidth || e(window).width();
      if (
        ("window" === s.respondTo
          ? (o = c)
          : "slider" === s.respondTo
          ? (o = l)
          : "min" === s.respondTo && (o = Math.min(c, l)),
        s.options.responsive &&
          s.options.responsive.length &&
          null !== s.options.responsive)
      ) {
        for (i in ((r = null), s.breakpoints))
          s.breakpoints.hasOwnProperty(i) &&
            (!1 === s.originalSettings.mobileFirst
              ? o < s.breakpoints[i] && (r = s.breakpoints[i])
              : o > s.breakpoints[i] && (r = s.breakpoints[i]));
        null !== r
          ? null !== s.activeBreakpoint
            ? (r !== s.activeBreakpoint || n) &&
              ((s.activeBreakpoint = r),
              "unslick" === s.breakpointSettings[r]
                ? s.unslick(r)
                : ((s.options = e.extend(
                    {},
                    s.originalSettings,
                    s.breakpointSettings[r]
                  )),
                  !0 === t && (s.currentSlide = s.options.initialSlide),
                  s.refresh(t)),
              (a = r))
            : ((s.activeBreakpoint = r),
              "unslick" === s.breakpointSettings[r]
                ? s.unslick(r)
                : ((s.options = e.extend(
                    {},
                    s.originalSettings,
                    s.breakpointSettings[r]
                  )),
                  !0 === t && (s.currentSlide = s.options.initialSlide),
                  s.refresh(t)),
              (a = r))
          : null !== s.activeBreakpoint &&
            ((s.activeBreakpoint = null),
            (s.options = s.originalSettings),
            !0 === t && (s.currentSlide = s.options.initialSlide),
            s.refresh(t),
            (a = r)),
          t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
      }
    }),
    (t.prototype.changeSlide = function (t, n) {
      var i,
        r,
        o = this,
        s = e(t.currentTarget);
      switch (
        (s.is("a") && t.preventDefault(),
        s.is("li") || (s = s.closest("li")),
        (i =
          o.slideCount % o.options.slidesToScroll != 0
            ? 0
            : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
        t.data.message)
      ) {
        case "previous":
          (r = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i),
            o.slideCount > o.options.slidesToShow &&
              o.slideHandler(o.currentSlide - r, !1, n);
          break;
        case "next":
          (r = 0 === i ? o.options.slidesToScroll : i),
            o.slideCount > o.options.slidesToShow &&
              o.slideHandler(o.currentSlide + r, !1, n);
          break;
        case "index":
          var a =
            0 === t.data.index
              ? 0
              : t.data.index || s.index() * o.options.slidesToScroll;
          o.slideHandler(o.checkNavigable(a), !1, n),
            s.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (t.prototype.checkNavigable = function (e) {
      var t, n;
      if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
        e = t[t.length - 1];
      else
        for (var i in t) {
          if (e < t[i]) {
            e = n;
            break;
          }
          n = t[i];
        }
      return e;
    }),
    (t.prototype.cleanUpEvents = function () {
      var t = this;
      t.options.dots &&
        null !== t.$dots &&
        (e("li", t.$dots)
          .off("click.slick", t.changeSlide)
          .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
          .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
        !0 === t.options.accessibility &&
          t.$dots.off("keydown.slick", t.keyHandler)),
        t.$slider.off("focus.slick blur.slick"),
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
          t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
          !0 === t.options.accessibility &&
            (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
            t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
        t.$list.off("click.slick", t.clickHandler),
        e(document).off(t.visibilityChange, t.visibility),
        t.cleanUpSlideEvents(),
        !0 === t.options.accessibility &&
          t.$list.off("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect &&
          e(t.$slideTrack).children().off("click.slick", t.selectHandler),
        e(window).off(
          "orientationchange.slick.slick-" + t.instanceUid,
          t.orientationChange
        ),
        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
        e("[draggable!=true]", t.$slideTrack).off(
          "dragstart",
          t.preventDefault
        ),
        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
    }),
    (t.prototype.cleanUpSlideEvents = function () {
      var t = this;
      t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
    }),
    (t.prototype.cleanUpRows = function () {
      var e,
        t = this;
      t.options.rows > 1 &&
        ((e = t.$slides.children().children()).removeAttr("style"),
        t.$slider.empty().append(e));
    }),
    (t.prototype.clickHandler = function (e) {
      !1 === this.shouldClick &&
        (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
    }),
    (t.prototype.destroy = function (t) {
      var n = this;
      n.autoPlayClear(),
        (n.touchObject = {}),
        n.cleanUpEvents(),
        e(".slick-cloned", n.$slider).detach(),
        n.$dots && n.$dots.remove(),
        n.$prevArrow &&
          n.$prevArrow.length &&
          (n.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
        n.$nextArrow &&
          n.$nextArrow.length &&
          (n.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
        n.$slides &&
          (n.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              e(this).attr("style", e(this).data("originalStyling"));
            }),
          n.$slideTrack.children(this.options.slide).detach(),
          n.$slideTrack.detach(),
          n.$list.detach(),
          n.$slider.append(n.$slides)),
        n.cleanUpRows(),
        n.$slider.removeClass("slick-slider"),
        n.$slider.removeClass("slick-initialized"),
        n.$slider.removeClass("slick-dotted"),
        (n.unslicked = !0),
        t || n.$slider.trigger("destroy", [n]);
    }),
    (t.prototype.disableTransition = function (e) {
      var t = this,
        n = {};
      (n[t.transitionType] = ""),
        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
    }),
    (t.prototype.fadeSlide = function (e, t) {
      var n = this;
      !1 === n.cssTransitions
        ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
          n.$slides
            .eq(e)
            .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
        : (n.applyTransition(e),
          n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
          t &&
            setTimeout(function () {
              n.disableTransition(e), t.call();
            }, n.options.speed));
    }),
    (t.prototype.fadeSlideOut = function (e) {
      var t = this;
      !1 === t.cssTransitions
        ? t.$slides
            .eq(e)
            .animate(
              { opacity: 0, zIndex: t.options.zIndex - 2 },
              t.options.speed,
              t.options.easing
            )
        : (t.applyTransition(e),
          t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
    }),
    (t.prototype.filterSlides = t.prototype.slickFilter =
      function (e) {
        var t = this;
        null !== e &&
          ((t.$slidesCache = t.$slides),
          t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.filter(e).appendTo(t.$slideTrack),
          t.reinit());
      }),
    (t.prototype.focusHandler = function () {
      var t = this;
      t.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (n) {
          n.stopImmediatePropagation();
          var i = e(this);
          setTimeout(function () {
            t.options.pauseOnFocus &&
              ((t.focussed = i.is(":focus")), t.autoPlay());
          }, 0);
        });
    }),
    (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (t.prototype.getDotCount = function () {
      var e = this,
        t = 0,
        n = 0,
        i = 0;
      if (!0 === e.options.infinite)
        if (e.slideCount <= e.options.slidesToShow) ++i;
        else
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
      else if (!0 === e.options.centerMode) i = e.slideCount;
      else if (e.options.asNavFor)
        for (; t < e.slideCount; )
          ++i,
            (t = n + e.options.slidesToScroll),
            (n +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
      else
        i =
          1 +
          Math.ceil(
            (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
          );
      return i - 1;
    }),
    (t.prototype.getLeft = function (e) {
      var t,
        n,
        i,
        r,
        o = this,
        s = 0;
      return (
        (o.slideOffset = 0),
        (n = o.$slides.first().outerHeight(!0)),
        !0 === o.options.infinite
          ? (o.slideCount > o.options.slidesToShow &&
              ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
              (r = -1),
              !0 === o.options.vertical &&
                !0 === o.options.centerMode &&
                (2 === o.options.slidesToShow
                  ? (r = -1.5)
                  : 1 === o.options.slidesToShow && (r = -2)),
              (s = n * o.options.slidesToShow * r)),
            o.slideCount % o.options.slidesToScroll != 0 &&
              e + o.options.slidesToScroll > o.slideCount &&
              o.slideCount > o.options.slidesToShow &&
              (e > o.slideCount
                ? ((o.slideOffset =
                    (o.options.slidesToShow - (e - o.slideCount)) *
                    o.slideWidth *
                    -1),
                  (s = (o.options.slidesToShow - (e - o.slideCount)) * n * -1))
                : ((o.slideOffset =
                    (o.slideCount % o.options.slidesToScroll) *
                    o.slideWidth *
                    -1),
                  (s = (o.slideCount % o.options.slidesToScroll) * n * -1))))
          : e + o.options.slidesToShow > o.slideCount &&
            ((o.slideOffset =
              (e + o.options.slidesToShow - o.slideCount) * o.slideWidth),
            (s = (e + o.options.slidesToShow - o.slideCount) * n)),
        o.slideCount <= o.options.slidesToShow &&
          ((o.slideOffset = 0), (s = 0)),
        !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
          ? (o.slideOffset =
              (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 -
              (o.slideWidth * o.slideCount) / 2)
          : !0 === o.options.centerMode && !0 === o.options.infinite
          ? (o.slideOffset +=
              o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
              o.slideWidth)
          : !0 === o.options.centerMode &&
            ((o.slideOffset = 0),
            (o.slideOffset +=
              o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
        (t =
          !1 === o.options.vertical
            ? e * o.slideWidth * -1 + o.slideOffset
            : e * n * -1 + s),
        !0 === o.options.variableWidth &&
          ((i =
            o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite
              ? o.$slideTrack.children(".slick-slide").eq(e)
              : o.$slideTrack
                  .children(".slick-slide")
                  .eq(e + o.options.slidesToShow)),
          (t =
            !0 === o.options.rtl
              ? i[0]
                ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width())
                : 0
              : i[0]
              ? -1 * i[0].offsetLeft
              : 0),
          !0 === o.options.centerMode &&
            ((i =
              o.slideCount <= o.options.slidesToShow ||
              !1 === o.options.infinite
                ? o.$slideTrack.children(".slick-slide").eq(e)
                : o.$slideTrack
                    .children(".slick-slide")
                    .eq(e + o.options.slidesToShow + 1)),
            (t =
              !0 === o.options.rtl
                ? i[0]
                  ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            (t += (o.$list.width() - i.outerWidth()) / 2))),
        t
      );
    }),
    (t.prototype.getOption = t.prototype.slickGetOption =
      function (e) {
        return this.options[e];
      }),
    (t.prototype.getNavigableIndexes = function () {
      var e,
        t = this,
        n = 0,
        i = 0,
        r = [];
      for (
        !1 === t.options.infinite
          ? (e = t.slideCount)
          : ((n = -1 * t.options.slidesToScroll),
            (i = -1 * t.options.slidesToScroll),
            (e = 2 * t.slideCount));
        n < e;

      )
        r.push(n),
          (n = i + t.options.slidesToScroll),
          (i +=
            t.options.slidesToScroll <= t.options.slidesToShow
              ? t.options.slidesToScroll
              : t.options.slidesToShow);
      return r;
    }),
    (t.prototype.getSlick = function () {
      return this;
    }),
    (t.prototype.getSlideCount = function () {
      var t,
        n,
        i = this;
      return (
        (n =
          !0 === i.options.centerMode
            ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
            : 0),
        !0 === i.options.swipeToSlide
          ? (i.$slideTrack.find(".slick-slide").each(function (r, o) {
              if (o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * i.swipeLeft)
                return (t = o), !1;
            }),
            Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
          : i.options.slidesToScroll
      );
    }),
    (t.prototype.goTo = t.prototype.slickGoTo =
      function (e, t) {
        this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
      }),
    (t.prototype.init = function (t) {
      var n = this;
      e(n.$slider).hasClass("slick-initialized") ||
        (e(n.$slider).addClass("slick-initialized"),
        n.buildRows(),
        n.buildOut(),
        n.setProps(),
        n.startLoad(),
        n.loadSlider(),
        n.initializeEvents(),
        n.updateArrows(),
        n.updateDots(),
        n.checkResponsive(!0),
        n.focusHandler()),
        t && n.$slider.trigger("init", [n]),
        !0 === n.options.accessibility && n.initADA(),
        n.options.autoplay && ((n.paused = !1), n.autoPlay());
    }),
    (t.prototype.initADA = function () {
      var t = this,
        n = Math.ceil(t.slideCount / t.options.slidesToShow),
        i = t.getNavigableIndexes().filter(function (e) {
          return e >= 0 && e < t.slideCount;
        });
      t.$slides
        .add(t.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== t.$dots &&
          (t.$slides
            .not(t.$slideTrack.find(".slick-cloned"))
            .each(function (n) {
              var r = i.indexOf(n);
              e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + n,
                tabindex: -1,
              }),
                -1 !== r &&
                  e(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + t.instanceUid + r,
                  });
            }),
          t.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (r) {
              var o = i[r];
              e(this).attr({ role: "presentation" }),
                e(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + r,
                    "aria-controls": "slick-slide" + t.instanceUid + o,
                    "aria-label": r + 1 + " of " + n,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(t.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var r = t.currentSlide, o = r + t.options.slidesToShow; r < o; r++)
        t.$slides.eq(r).attr("tabindex", 0);
      t.activateADA();
    }),
    (t.prototype.initArrowEvents = function () {
      var e = this;
      !0 === e.options.arrows &&
        e.slideCount > e.options.slidesToShow &&
        (e.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, e.changeSlide),
        e.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, e.changeSlide),
        !0 === e.options.accessibility &&
          (e.$prevArrow.on("keydown.slick", e.keyHandler),
          e.$nextArrow.on("keydown.slick", e.keyHandler)));
    }),
    (t.prototype.initDotEvents = function () {
      var t = this;
      !0 === t.options.dots &&
        (e("li", t.$dots).on(
          "click.slick",
          { message: "index" },
          t.changeSlide
        ),
        !0 === t.options.accessibility &&
          t.$dots.on("keydown.slick", t.keyHandler)),
        !0 === t.options.dots &&
          !0 === t.options.pauseOnDotsHover &&
          e("li", t.$dots)
            .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
            .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
    }),
    (t.prototype.initSlideEvents = function () {
      var t = this;
      t.options.pauseOnHover &&
        (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
    }),
    (t.prototype.initializeEvents = function () {
      var t = this;
      t.initArrowEvents(),
        t.initDotEvents(),
        t.initSlideEvents(),
        t.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          t.swipeHandler
        ),
        t.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          t.swipeHandler
        ),
        t.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          t.swipeHandler
        ),
        t.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          t.swipeHandler
        ),
        t.$list.on("click.slick", t.clickHandler),
        e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
        !0 === t.options.accessibility &&
          t.$list.on("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect &&
          e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        e(window).on(
          "orientationchange.slick.slick-" + t.instanceUid,
          e.proxy(t.orientationChange, t)
        ),
        e(window).on(
          "resize.slick.slick-" + t.instanceUid,
          e.proxy(t.resize, t)
        ),
        e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(t.setPosition);
    }),
    (t.prototype.initUI = function () {
      var e = this;
      !0 === e.options.arrows &&
        e.slideCount > e.options.slidesToShow &&
        (e.$prevArrow.show(), e.$nextArrow.show()),
        !0 === e.options.dots &&
          e.slideCount > e.options.slidesToShow &&
          e.$dots.show();
    }),
    (t.prototype.keyHandler = function (e) {
      var t = this;
      e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === e.keyCode && !0 === t.options.accessibility
          ? t.changeSlide({
              data: { message: !0 === t.options.rtl ? "next" : "previous" },
            })
          : 39 === e.keyCode &&
            !0 === t.options.accessibility &&
            t.changeSlide({
              data: { message: !0 === t.options.rtl ? "previous" : "next" },
            }));
    }),
    (t.prototype.lazyLoad = function () {
      function t(t) {
        e("img[data-lazy]", t).each(function () {
          var t = e(this),
            n = e(this).attr("data-lazy"),
            i = e(this).attr("data-srcset"),
            r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
            s = document.createElement("img");
          (s.onload = function () {
            t.animate({ opacity: 0 }, 100, function () {
              i && (t.attr("srcset", i), r && t.attr("sizes", r)),
                t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                  t.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                o.$slider.trigger("lazyLoaded", [o, t, n]);
            });
          }),
            (s.onerror = function () {
              t
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                o.$slider.trigger("lazyLoadError", [o, t, n]);
            }),
            (s.src = n);
        });
      }
      var n,
        i,
        r,
        o = this;
      if (
        (!0 === o.options.centerMode
          ? !0 === o.options.infinite
            ? (r =
                (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) +
                o.options.slidesToShow +
                2)
            : ((i = Math.max(
                0,
                o.currentSlide - (o.options.slidesToShow / 2 + 1)
              )),
              (r = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
          : ((i = o.options.infinite
              ? o.options.slidesToShow + o.currentSlide
              : o.currentSlide),
            (r = Math.ceil(i + o.options.slidesToShow)),
            !0 === o.options.fade && (i > 0 && i--, r <= o.slideCount && r++)),
        (n = o.$slider.find(".slick-slide").slice(i, r)),
        "anticipated" === o.options.lazyLoad)
      )
        for (
          var s = i - 1, a = r, l = o.$slider.find(".slick-slide"), c = 0;
          c < o.options.slidesToScroll;
          c++
        )
          s < 0 && (s = o.slideCount - 1),
            (n = (n = n.add(l.eq(s))).add(l.eq(a))),
            s--,
            a++;
      t(n),
        o.slideCount <= o.options.slidesToShow
          ? t(o.$slider.find(".slick-slide"))
          : o.currentSlide >= o.slideCount - o.options.slidesToShow
          ? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow))
          : 0 === o.currentSlide &&
            t(
              o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow)
            );
    }),
    (t.prototype.loadSlider = function () {
      var e = this;
      e.setPosition(),
        e.$slideTrack.css({ opacity: 1 }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
    }),
    (t.prototype.next = t.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (t.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition();
    }),
    (t.prototype.pause = t.prototype.slickPause =
      function () {
        this.autoPlayClear(), (this.paused = !0);
      }),
    (t.prototype.play = t.prototype.slickPlay =
      function () {
        var e = this;
        e.autoPlay(),
          (e.options.autoplay = !0),
          (e.paused = !1),
          (e.focussed = !1),
          (e.interrupted = !1);
      }),
    (t.prototype.postSlide = function (t) {
      var n = this;
      n.unslicked ||
        (n.$slider.trigger("afterChange", [n, t]),
        (n.animating = !1),
        n.slideCount > n.options.slidesToShow && n.setPosition(),
        (n.swipeLeft = null),
        n.options.autoplay && n.autoPlay(),
        !0 === n.options.accessibility &&
          (n.initADA(),
          n.options.focusOnChange &&
            e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (t.prototype.prev = t.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (t.prototype.preventDefault = function (e) {
      e.preventDefault();
    }),
    (t.prototype.progressiveLazyLoad = function (t) {
      t = t || 1;
      var n,
        i,
        r,
        o,
        s,
        a = this,
        l = e("img[data-lazy]", a.$slider);
      l.length
        ? ((n = l.first()),
          (i = n.attr("data-lazy")),
          (r = n.attr("data-srcset")),
          (o = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
          ((s = document.createElement("img")).onload = function () {
            r && (n.attr("srcset", r), o && n.attr("sizes", o)),
              n
                .attr("src", i)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === a.options.adaptiveHeight && a.setPosition(),
              a.$slider.trigger("lazyLoaded", [a, n, i]),
              a.progressiveLazyLoad();
          }),
          (s.onerror = function () {
            t < 3
              ? setTimeout(function () {
                  a.progressiveLazyLoad(t + 1);
                }, 500)
              : (n
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                a.$slider.trigger("lazyLoadError", [a, n, i]),
                a.progressiveLazyLoad());
          }),
          (s.src = i))
        : a.$slider.trigger("allImagesLoaded", [a]);
    }),
    (t.prototype.refresh = function (t) {
      var n,
        i,
        r = this;
      (i = r.slideCount - r.options.slidesToShow),
        !r.options.infinite && r.currentSlide > i && (r.currentSlide = i),
        r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0),
        (n = r.currentSlide),
        r.destroy(!0),
        e.extend(r, r.initials, { currentSlide: n }),
        r.init(),
        t || r.changeSlide({ data: { message: "index", index: n } }, !1);
    }),
    (t.prototype.registerBreakpoints = function () {
      var t,
        n,
        i,
        r = this,
        o = r.options.responsive || null;
      if ("array" === e.type(o) && o.length) {
        for (t in ((r.respondTo = r.options.respondTo || "window"), o))
          if (((i = r.breakpoints.length - 1), o.hasOwnProperty(t))) {
            for (n = o[t].breakpoint; i >= 0; )
              r.breakpoints[i] &&
                r.breakpoints[i] === n &&
                r.breakpoints.splice(i, 1),
                i--;
            r.breakpoints.push(n), (r.breakpointSettings[n] = o[t].settings);
          }
        r.breakpoints.sort(function (e, t) {
          return r.options.mobileFirst ? e - t : t - e;
        });
      }
    }),
    (t.prototype.reinit = function () {
      var t = this;
      (t.$slides = t.$slideTrack
        .children(t.options.slide)
        .addClass("slick-slide")),
        (t.slideCount = t.$slides.length),
        t.currentSlide >= t.slideCount &&
          0 !== t.currentSlide &&
          (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.registerBreakpoints(),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.cleanUpSlideEvents(),
        t.initSlideEvents(),
        t.checkResponsive(!1, !0),
        !0 === t.options.focusOnSelect &&
          e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses(
          "number" == typeof t.currentSlide ? t.currentSlide : 0
        ),
        t.setPosition(),
        t.focusHandler(),
        (t.paused = !t.options.autoplay),
        t.autoPlay(),
        t.$slider.trigger("reInit", [t]);
    }),
    (t.prototype.resize = function () {
      var t = this;
      e(window).width() !== t.windowWidth &&
        (clearTimeout(t.windowDelay),
        (t.windowDelay = window.setTimeout(function () {
          (t.windowWidth = e(window).width()),
            t.checkResponsive(),
            t.unslicked || t.setPosition();
        }, 50)));
    }),
    (t.prototype.removeSlide = t.prototype.slickRemove =
      function (e, t, n) {
        var i = this;
        if (
          ((e =
            "boolean" == typeof e
              ? !0 === (t = e)
                ? 0
                : i.slideCount - 1
              : !0 === t
              ? --e
              : e),
          i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
        )
          return !1;
        i.unload(),
          !0 === n
            ? i.$slideTrack.children().remove()
            : i.$slideTrack.children(this.options.slide).eq(e).remove(),
          (i.$slides = i.$slideTrack.children(this.options.slide)),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slideTrack.append(i.$slides),
          (i.$slidesCache = i.$slides),
          i.reinit();
      }),
    (t.prototype.setCSS = function (e) {
      var t,
        n,
        i = this,
        r = {};
      !0 === i.options.rtl && (e = -e),
        (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
        (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
        (r[i.positionProp] = e),
        !1 === i.transformsEnabled
          ? i.$slideTrack.css(r)
          : ((r = {}),
            !1 === i.cssTransitions
              ? ((r[i.animType] = "translate(" + t + ", " + n + ")"),
                i.$slideTrack.css(r))
              : ((r[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
                i.$slideTrack.css(r)));
    }),
    (t.prototype.setDimensions = function () {
      var e = this;
      !1 === e.options.vertical
        ? !0 === e.options.centerMode &&
          e.$list.css({ padding: "0px " + e.options.centerPadding })
        : (e.$list.height(
            e.$slides.first().outerHeight(!0) * e.options.slidesToShow
          ),
          !0 === e.options.centerMode &&
            e.$list.css({ padding: e.options.centerPadding + " 0px" })),
        (e.listWidth = e.$list.width()),
        (e.listHeight = e.$list.height()),
        !1 === e.options.vertical && !1 === e.options.variableWidth
          ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
            e.$slideTrack.width(
              Math.ceil(
                e.slideWidth * e.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === e.options.variableWidth
          ? e.$slideTrack.width(5e3 * e.slideCount)
          : ((e.slideWidth = Math.ceil(e.listWidth)),
            e.$slideTrack.height(
              Math.ceil(
                e.$slides.first().outerHeight(!0) *
                  e.$slideTrack.children(".slick-slide").length
              )
            ));
      var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
      !1 === e.options.variableWidth &&
        e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
    }),
    (t.prototype.setFade = function () {
      var t,
        n = this;
      n.$slides.each(function (i, r) {
        (t = n.slideWidth * i * -1),
          !0 === n.options.rtl
            ? e(r).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0,
              })
            : e(r).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0,
              });
      }),
        n.$slides
          .eq(n.currentSlide)
          .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
    }),
    (t.prototype.setHeight = function () {
      var e = this;
      if (
        1 === e.options.slidesToShow &&
        !0 === e.options.adaptiveHeight &&
        !1 === e.options.vertical
      ) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.css("height", t);
      }
    }),
    (t.prototype.setOption = t.prototype.slickSetOption =
      function () {
        var t,
          n,
          i,
          r,
          o,
          s = this,
          a = !1;
        if (
          ("object" === e.type(arguments[0])
            ? ((i = arguments[0]), (a = arguments[1]), (o = "multiple"))
            : "string" === e.type(arguments[0]) &&
              ((i = arguments[0]),
              (r = arguments[1]),
              (a = arguments[2]),
              "responsive" === arguments[0] && "array" === e.type(arguments[1])
                ? (o = "responsive")
                : void 0 !== arguments[1] && (o = "single")),
          "single" === o)
        )
          s.options[i] = r;
        else if ("multiple" === o)
          e.each(i, function (e, t) {
            s.options[e] = t;
          });
        else if ("responsive" === o)
          for (n in r)
            if ("array" !== e.type(s.options.responsive))
              s.options.responsive = [r[n]];
            else {
              for (t = s.options.responsive.length - 1; t >= 0; )
                s.options.responsive[t].breakpoint === r[n].breakpoint &&
                  s.options.responsive.splice(t, 1),
                  t--;
              s.options.responsive.push(r[n]);
            }
        a && (s.unload(), s.reinit());
      }),
    (t.prototype.setPosition = function () {
      var e = this;
      e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade
          ? e.setCSS(e.getLeft(e.currentSlide))
          : e.setFade(),
        e.$slider.trigger("setPosition", [e]);
    }),
    (t.prototype.setProps = function () {
      var e = this,
        t = document.body.style;
      (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
        "top" === e.positionProp
          ? e.$slider.addClass("slick-vertical")
          : e.$slider.removeClass("slick-vertical"),
        (void 0 === t.WebkitTransition &&
          void 0 === t.MozTransition &&
          void 0 === t.msTransition) ||
          (!0 === e.options.useCSS && (e.cssTransitions = !0)),
        e.options.fade &&
          ("number" == typeof e.options.zIndex
            ? e.options.zIndex < 3 && (e.options.zIndex = 3)
            : (e.options.zIndex = e.defaults.zIndex)),
        void 0 !== t.OTransform &&
          ((e.animType = "OTransform"),
          (e.transformType = "-o-transform"),
          (e.transitionType = "OTransition"),
          void 0 === t.perspectiveProperty &&
            void 0 === t.webkitPerspective &&
            (e.animType = !1)),
        void 0 !== t.MozTransform &&
          ((e.animType = "MozTransform"),
          (e.transformType = "-moz-transform"),
          (e.transitionType = "MozTransition"),
          void 0 === t.perspectiveProperty &&
            void 0 === t.MozPerspective &&
            (e.animType = !1)),
        void 0 !== t.webkitTransform &&
          ((e.animType = "webkitTransform"),
          (e.transformType = "-webkit-transform"),
          (e.transitionType = "webkitTransition"),
          void 0 === t.perspectiveProperty &&
            void 0 === t.webkitPerspective &&
            (e.animType = !1)),
        void 0 !== t.msTransform &&
          ((e.animType = "msTransform"),
          (e.transformType = "-ms-transform"),
          (e.transitionType = "msTransition"),
          void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform &&
          !1 !== e.animType &&
          ((e.animType = "transform"),
          (e.transformType = "transform"),
          (e.transitionType = "transition")),
        (e.transformsEnabled =
          e.options.useTransform && null !== e.animType && !1 !== e.animType);
    }),
    (t.prototype.setSlideClasses = function (e) {
      var t,
        n,
        i,
        r,
        o = this;
      if (
        ((n = o.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        o.$slides.eq(e).addClass("slick-current"),
        !0 === o.options.centerMode)
      ) {
        var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
        (t = Math.floor(o.options.slidesToShow / 2)),
          !0 === o.options.infinite &&
            (e >= t && e <= o.slideCount - 1 - t
              ? o.$slides
                  .slice(e - t + s, e + t + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((i = o.options.slidesToShow + e),
                n
                  .slice(i - t + 1 + s, i + t + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === e
              ? n
                  .eq(n.length - 1 - o.options.slidesToShow)
                  .addClass("slick-center")
              : e === o.slideCount - 1 &&
                n.eq(o.options.slidesToShow).addClass("slick-center")),
          o.$slides.eq(e).addClass("slick-center");
      } else
        e >= 0 && e <= o.slideCount - o.options.slidesToShow
          ? o.$slides
              .slice(e, e + o.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : n.length <= o.options.slidesToShow
          ? n.addClass("slick-active").attr("aria-hidden", "false")
          : ((r = o.slideCount % o.options.slidesToShow),
            (i = !0 === o.options.infinite ? o.options.slidesToShow + e : e),
            o.options.slidesToShow == o.options.slidesToScroll &&
            o.slideCount - e < o.options.slidesToShow
              ? n
                  .slice(i - (o.options.slidesToShow - r), i + r)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : n
                  .slice(i, i + o.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== o.options.lazyLoad &&
        "anticipated" !== o.options.lazyLoad) ||
        o.lazyLoad();
    }),
    (t.prototype.setupInfinite = function () {
      var t,
        n,
        i,
        r = this;
      if (
        (!0 === r.options.fade && (r.options.centerMode = !1),
        !0 === r.options.infinite &&
          !1 === r.options.fade &&
          ((n = null), r.slideCount > r.options.slidesToShow))
      ) {
        for (
          i =
            !0 === r.options.centerMode
              ? r.options.slidesToShow + 1
              : r.options.slidesToShow,
            t = r.slideCount;
          t > r.slideCount - i;
          t -= 1
        )
          (n = t - 1),
            e(r.$slides[n])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", n - r.slideCount)
              .prependTo(r.$slideTrack)
              .addClass("slick-cloned");
        for (t = 0; t < i + r.slideCount; t += 1)
          (n = t),
            e(r.$slides[n])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", n + r.slideCount)
              .appendTo(r.$slideTrack)
              .addClass("slick-cloned");
        r.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            e(this).attr("id", "");
          });
      }
    }),
    (t.prototype.interrupt = function (e) {
      e || this.autoPlay(), (this.interrupted = e);
    }),
    (t.prototype.selectHandler = function (t) {
      var n = this,
        i = e(t.target).is(".slick-slide")
          ? e(t.target)
          : e(t.target).parents(".slick-slide"),
        r = parseInt(i.attr("data-slick-index"));
      r || (r = 0),
        n.slideCount <= n.options.slidesToShow
          ? n.slideHandler(r, !1, !0)
          : n.slideHandler(r);
    }),
    (t.prototype.slideHandler = function (e, t, n) {
      var i,
        r,
        o,
        s,
        a,
        l = null,
        c = this;
      if (
        ((t = t || !1),
        !(
          (!0 === c.animating && !0 === c.options.waitForAnimate) ||
          (!0 === c.options.fade && c.currentSlide === e)
        ))
      )
        if (
          (!1 === t && c.asNavFor(e),
          (i = e),
          (l = c.getLeft(i)),
          (s = c.getLeft(c.currentSlide)),
          (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
          !1 === c.options.infinite &&
            !1 === c.options.centerMode &&
            (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
        )
          !1 === c.options.fade &&
            ((i = c.currentSlide),
            !0 !== n
              ? c.animateSlide(s, function () {
                  c.postSlide(i);
                })
              : c.postSlide(i));
        else if (
          !1 === c.options.infinite &&
          !0 === c.options.centerMode &&
          (e < 0 || e > c.slideCount - c.options.slidesToScroll)
        )
          !1 === c.options.fade &&
            ((i = c.currentSlide),
            !0 !== n
              ? c.animateSlide(s, function () {
                  c.postSlide(i);
                })
              : c.postSlide(i));
        else {
          if (
            (c.options.autoplay && clearInterval(c.autoPlayTimer),
            (r =
              i < 0
                ? c.slideCount % c.options.slidesToScroll != 0
                  ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                  : c.slideCount + i
                : i >= c.slideCount
                ? c.slideCount % c.options.slidesToScroll != 0
                  ? 0
                  : i - c.slideCount
                : i),
            (c.animating = !0),
            c.$slider.trigger("beforeChange", [c, c.currentSlide, r]),
            (o = c.currentSlide),
            (c.currentSlide = r),
            c.setSlideClasses(c.currentSlide),
            c.options.asNavFor &&
              (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <=
                a.options.slidesToShow &&
              a.setSlideClasses(c.currentSlide),
            c.updateDots(),
            c.updateArrows(),
            !0 === c.options.fade)
          )
            return (
              !0 !== n
                ? (c.fadeSlideOut(o),
                  c.fadeSlide(r, function () {
                    c.postSlide(r);
                  }))
                : c.postSlide(r),
              void c.animateHeight()
            );
          !0 !== n
            ? c.animateSlide(l, function () {
                c.postSlide(r);
              })
            : c.postSlide(r);
        }
    }),
    (t.prototype.startLoad = function () {
      var e = this;
      !0 === e.options.arrows &&
        e.slideCount > e.options.slidesToShow &&
        (e.$prevArrow.hide(), e.$nextArrow.hide()),
        !0 === e.options.dots &&
          e.slideCount > e.options.slidesToShow &&
          e.$dots.hide(),
        e.$slider.addClass("slick-loading");
    }),
    (t.prototype.swipeDirection = function () {
      var e,
        t,
        n,
        i,
        r = this;
      return (
        (e = r.touchObject.startX - r.touchObject.curX),
        (t = r.touchObject.startY - r.touchObject.curY),
        (n = Math.atan2(t, e)),
        (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
        (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
          ? !1 === r.options.rtl
            ? "left"
            : "right"
          : i >= 135 && i <= 225
          ? !1 === r.options.rtl
            ? "right"
            : "left"
          : !0 === r.options.verticalSwiping
          ? i >= 35 && i <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (t.prototype.swipeEnd = function (e) {
      var t,
        n,
        i = this;
      if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
        return (i.scrolling = !1), !1;
      if (
        ((i.interrupted = !1),
        (i.shouldClick = !(i.touchObject.swipeLength > 10)),
        void 0 === i.touchObject.curX)
      )
        return !1;
      if (
        (!0 === i.touchObject.edgeHit &&
          i.$slider.trigger("edge", [i, i.swipeDirection()]),
        i.touchObject.swipeLength >= i.touchObject.minSwipe)
      ) {
        switch ((n = i.swipeDirection())) {
          case "left":
          case "down":
            (t = i.options.swipeToSlide
              ? i.checkNavigable(i.currentSlide + i.getSlideCount())
              : i.currentSlide + i.getSlideCount()),
              (i.currentDirection = 0);
            break;
          case "right":
          case "up":
            (t = i.options.swipeToSlide
              ? i.checkNavigable(i.currentSlide - i.getSlideCount())
              : i.currentSlide - i.getSlideCount()),
              (i.currentDirection = 1);
        }
        "vertical" != n &&
          (i.slideHandler(t),
          (i.touchObject = {}),
          i.$slider.trigger("swipe", [i, n]));
      } else
        i.touchObject.startX !== i.touchObject.curX &&
          (i.slideHandler(i.currentSlide), (i.touchObject = {}));
    }),
    (t.prototype.swipeHandler = function (e) {
      var t = this;
      if (
        !(
          !1 === t.options.swipe ||
          ("ontouchend" in document && !1 === t.options.swipe) ||
          (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
        )
      )
        switch (
          ((t.touchObject.fingerCount =
            e.originalEvent && void 0 !== e.originalEvent.touches
              ? e.originalEvent.touches.length
              : 1),
          (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
          !0 === t.options.verticalSwiping &&
            (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
          e.data.action)
        ) {
          case "start":
            t.swipeStart(e);
            break;
          case "move":
            t.swipeMove(e);
            break;
          case "end":
            t.swipeEnd(e);
        }
    }),
    (t.prototype.swipeMove = function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a = this;
      return (
        (o = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
        !(!a.dragging || a.scrolling || (o && 1 !== o.length)) &&
          ((t = a.getLeft(a.currentSlide)),
          (a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX),
          (a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY),
          (a.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
          )),
          (s = Math.round(
            Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
          )),
          !a.options.verticalSwiping && !a.swiping && s > 4
            ? ((a.scrolling = !0), !1)
            : (!0 === a.options.verticalSwiping &&
                (a.touchObject.swipeLength = s),
              (n = a.swipeDirection()),
              void 0 !== e.originalEvent &&
                a.touchObject.swipeLength > 4 &&
                ((a.swiping = !0), e.preventDefault()),
              (r =
                (!1 === a.options.rtl ? 1 : -1) *
                (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
              !0 === a.options.verticalSwiping &&
                (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
              (i = a.touchObject.swipeLength),
              (a.touchObject.edgeHit = !1),
              !1 === a.options.infinite &&
                ((0 === a.currentSlide && "right" === n) ||
                  (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                ((i = a.touchObject.swipeLength * a.options.edgeFriction),
                (a.touchObject.edgeHit = !0)),
              !1 === a.options.vertical
                ? (a.swipeLeft = t + i * r)
                : (a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * r),
              !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * r),
              !0 !== a.options.fade &&
                !1 !== a.options.touchMove &&
                (!0 === a.animating
                  ? ((a.swipeLeft = null), !1)
                  : void a.setCSS(a.swipeLeft))))
      );
    }),
    (t.prototype.swipeStart = function (e) {
      var t,
        n = this;
      if (
        ((n.interrupted = !0),
        1 !== n.touchObject.fingerCount ||
          n.slideCount <= n.options.slidesToShow)
      )
        return (n.touchObject = {}), !1;
      void 0 !== e.originalEvent &&
        void 0 !== e.originalEvent.touches &&
        (t = e.originalEvent.touches[0]),
        (n.touchObject.startX = n.touchObject.curX =
          void 0 !== t ? t.pageX : e.clientX),
        (n.touchObject.startY = n.touchObject.curY =
          void 0 !== t ? t.pageY : e.clientY),
        (n.dragging = !0);
    }),
    (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
      function () {
        var e = this;
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit());
      }),
    (t.prototype.unload = function () {
      var t = this;
      e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.htmlExpr.test(t.options.prevArrow) &&
          t.$prevArrow.remove(),
        t.$nextArrow &&
          t.htmlExpr.test(t.options.nextArrow) &&
          t.$nextArrow.remove(),
        t.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (t.prototype.unslick = function (e) {
      var t = this;
      t.$slider.trigger("unslick", [t, e]), t.destroy();
    }),
    (t.prototype.updateArrows = function () {
      var e = this;
      Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          e.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === e.currentSlide
            ? (e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : ((e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode) ||
                (e.currentSlide >= e.slideCount - 1 &&
                  !0 === e.options.centerMode)) &&
              (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (t.prototype.updateDots = function () {
      var e = this;
      null !== e.$dots &&
        (e.$dots.find("li").removeClass("slick-active").end(),
        e.$dots
          .find("li")
          .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (t.prototype.visibility = function () {
      var e = this;
      e.options.autoplay &&
        (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
    }),
    (e.fn.slick = function () {
      var e,
        n,
        i = this,
        r = arguments[0],
        o = Array.prototype.slice.call(arguments, 1),
        s = i.length;
      for (e = 0; e < s; e++)
        if (
          ("object" == typeof r || void 0 === r
            ? (i[e].slick = new t(i[e], r))
            : (n = i[e].slick[r].apply(i[e].slick, o)),
          void 0 !== n)
        )
          return n;
      return i;
    });
}),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (e) {
    var t,
      n,
      i,
      r,
      o,
      s,
      a = "Close",
      l = "BeforeClose",
      c = "MarkupParse",
      u = "Open",
      d = "Change",
      p = "mfp",
      f = "." + p,
      h = "mfp-ready",
      m = "mfp-removing",
      g = "mfp-prevent-close",
      v = function () {},
      y = !!window.jQuery,
      b = e(window),
      w = function (e, n) {
        t.ev.on(p + e + f, n);
      },
      _ = function (t, n, i, r) {
        var o = document.createElement("div");
        return (
          (o.className = "mfp-" + t),
          i && (o.innerHTML = i),
          r ? n && n.appendChild(o) : ((o = e(o)), n && o.appendTo(n)),
          o
        );
      },
      x = function (n, i) {
        t.ev.triggerHandler(p + n, i),
          t.st.callbacks &&
            ((n = n.charAt(0).toLowerCase() + n.slice(1)),
            t.st.callbacks[n] &&
              t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
      },
      T = function (n) {
        return (
          (n === s && t.currTemplate.closeBtn) ||
            ((t.currTemplate.closeBtn = e(
              t.st.closeMarkup.replace("%title%", t.st.tClose)
            )),
            (s = n)),
          t.currTemplate.closeBtn
        );
      },
      C = function () {
        e.magnificPopup.instance ||
          ((t = new v()).init(), (e.magnificPopup.instance = t));
      };
    (v.prototype = {
      constructor: v,
      init: function () {
        var n = navigator.appVersion;
        (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
          (t.isAndroid = /android/gi.test(n)),
          (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
          (t.supportsTransition = (function () {
            var e = document.createElement("p").style,
              t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
            return !1;
          })()),
          (t.probablyMobile =
            t.isAndroid ||
            t.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (i = e(document)),
          (t.popupsCache = {});
      },
      open: function (n) {
        var r;
        if (!1 === n.isObj) {
          (t.items = n.items.toArray()), (t.index = 0);
          var s,
            a = n.items;
          for (r = 0; r < a.length; r++)
            if (((s = a[r]).parsed && (s = s.el[0]), s === n.el[0])) {
              t.index = r;
              break;
            }
        } else
          (t.items = e.isArray(n.items) ? n.items : [n.items]),
            (t.index = n.index || 0);
        if (!t.isOpen) {
          (t.types = []),
            (o = ""),
            n.mainEl && n.mainEl.length ? (t.ev = n.mainEl.eq(0)) : (t.ev = i),
            n.key
              ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
                (t.currTemplate = t.popupsCache[n.key]))
              : (t.currTemplate = {}),
            (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
            (t.fixedContentPos =
              "auto" === t.st.fixedContentPos
                ? !t.probablyMobile
                : t.st.fixedContentPos),
            t.st.modal &&
              ((t.st.closeOnContentClick = !1),
              (t.st.closeOnBgClick = !1),
              (t.st.showCloseBtn = !1),
              (t.st.enableEscapeKey = !1)),
            t.bgOverlay ||
              ((t.bgOverlay = _("bg").on("click" + f, function () {
                t.close();
              })),
              (t.wrap = _("wrap")
                .attr("tabindex", -1)
                .on("click" + f, function (e) {
                  t._checkIfClose(e.target) && t.close();
                })),
              (t.container = _("container", t.wrap))),
            (t.contentContainer = _("content")),
            t.st.preloader &&
              (t.preloader = _("preloader", t.container, t.st.tLoading));
          var l = e.magnificPopup.modules;
          for (r = 0; r < l.length; r++) {
            var d = l[r];
            (d = d.charAt(0).toUpperCase() + d.slice(1)), t["init" + d].call(t);
          }
          x("BeforeOpen"),
            t.st.showCloseBtn &&
              (t.st.closeBtnInside
                ? (w(c, function (e, t, n, i) {
                    n.close_replaceWith = T(i.type);
                  }),
                  (o += " mfp-close-btn-in"))
                : t.wrap.append(T())),
            t.st.alignTop && (o += " mfp-align-top"),
            t.fixedContentPos
              ? t.wrap.css({
                  overflow: t.st.overflowY,
                  overflowX: "hidden",
                  overflowY: t.st.overflowY,
                })
              : t.wrap.css({ top: b.scrollTop(), position: "absolute" }),
            (!1 === t.st.fixedBgPos ||
              ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
              t.bgOverlay.css({ height: i.height(), position: "absolute" }),
            t.st.enableEscapeKey &&
              i.on("keyup" + f, function (e) {
                27 === e.keyCode && t.close();
              }),
            b.on("resize" + f, function () {
              t.updateSize();
            }),
            t.st.closeOnContentClick || (o += " mfp-auto-cursor"),
            o && t.wrap.addClass(o);
          var p = (t.wH = b.height()),
            m = {};
          if (t.fixedContentPos && t._hasScrollBar(p)) {
            var g = t._getScrollbarSize();
            g && (m.marginRight = g);
          }
          t.fixedContentPos &&
            (t.isIE7
              ? e("body, html").css("overflow", "hidden")
              : (m.overflow = "hidden"));
          var v = t.st.mainClass;
          return (
            t.isIE7 && (v += " mfp-ie7"),
            v && t._addClassToMFP(v),
            t.updateItemHTML(),
            x("BuildControls"),
            e("html").css(m),
            t.bgOverlay
              .add(t.wrap)
              .prependTo(t.st.prependTo || e(document.body)),
            (t._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              t.content
                ? (t._addClassToMFP(h), t._setFocus())
                : t.bgOverlay.addClass(h),
                i.on("focusin" + f, t._onFocusIn);
            }, 16),
            (t.isOpen = !0),
            t.updateSize(p),
            x(u),
            n
          );
        }
        t.updateItemHTML();
      },
      close: function () {
        t.isOpen &&
          (x(l),
          (t.isOpen = !1),
          t.st.removalDelay && !t.isLowIE && t.supportsTransition
            ? (t._addClassToMFP(m),
              setTimeout(function () {
                t._close();
              }, t.st.removalDelay))
            : t._close());
      },
      _close: function () {
        x(a);
        var n = m + " " + h + " ";
        if (
          (t.bgOverlay.detach(),
          t.wrap.detach(),
          t.container.empty(),
          t.st.mainClass && (n += t.st.mainClass + " "),
          t._removeClassFromMFP(n),
          t.fixedContentPos)
        ) {
          var r = { marginRight: "" };
          t.isIE7 ? e("body, html").css("overflow", "") : (r.overflow = ""),
            e("html").css(r);
        }
        i.off("keyup.mfp focusin" + f),
          t.ev.off(f),
          t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          t.bgOverlay.attr("class", "mfp-bg"),
          t.container.attr("class", "mfp-container"),
          !t.st.showCloseBtn ||
            (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) ||
            (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
          t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
          (t.currItem = null),
          (t.content = null),
          (t.currTemplate = null),
          (t.prevHeight = 0),
          x("AfterClose");
      },
      updateSize: function (e) {
        if (t.isIOS) {
          var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;
          t.wrap.css("height", i), (t.wH = i);
        } else t.wH = e || b.height();
        t.fixedContentPos || t.wrap.css("height", t.wH), x("Resize");
      },
      updateItemHTML: function () {
        var n = t.items[t.index];
        t.contentContainer.detach(),
          t.content && t.content.detach(),
          n.parsed || (n = t.parseEl(t.index));
        var i = n.type;
        if (
          (x("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
          (t.currItem = n),
          !t.currTemplate[i])
        ) {
          var o = !!t.st[i] && t.st[i].markup;
          x("FirstMarkupParse", o), (t.currTemplate[i] = !o || e(o));
        }
        r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
        var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
          n,
          t.currTemplate[i]
        );
        t.appendContent(s, i),
          (n.preloaded = !0),
          x(d, n),
          (r = n.type),
          t.container.prepend(t.contentContainer),
          x("AfterChange");
      },
      appendContent: function (e, n) {
        (t.content = e),
          e
            ? t.st.showCloseBtn &&
              t.st.closeBtnInside &&
              !0 === t.currTemplate[n]
              ? t.content.find(".mfp-close").length || t.content.append(T())
              : (t.content = e)
            : (t.content = ""),
          x("BeforeAppend"),
          t.container.addClass("mfp-" + n + "-holder"),
          t.contentContainer.append(t.content);
      },
      parseEl: function (n) {
        var i,
          r = t.items[n];
        if (
          (r.tagName
            ? (r = { el: e(r) })
            : ((i = r.type), (r = { data: r, src: r.src })),
          r.el)
        ) {
          for (var o = t.types, s = 0; s < o.length; s++)
            if (r.el.hasClass("mfp-" + o[s])) {
              i = o[s];
              break;
            }
          (r.src = r.el.attr("data-mfp-src")),
            r.src || (r.src = r.el.attr("href"));
        }
        return (
          (r.type = i || t.st.type || "inline"),
          (r.index = n),
          (r.parsed = !0),
          (t.items[n] = r),
          x("ElementParse", r),
          t.items[n]
        );
      },
      addGroup: function (e, n) {
        var i = function (i) {
          (i.mfpEl = this), t._openClick(i, e, n);
        };
        n || (n = {});
        var r = "click.magnificPopup";
        (n.mainEl = e),
          n.items
            ? ((n.isObj = !0), e.off(r).on(r, i))
            : ((n.isObj = !1),
              n.delegate
                ? e.off(r).on(r, n.delegate, i)
                : ((n.items = e), e.off(r).on(r, i)));
      },
      _openClick: function (n, i, r) {
        if (
          (void 0 !== r.midClick
            ? r.midClick
            : e.magnificPopup.defaults.midClick) ||
          !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)
        ) {
          var o =
            void 0 !== r.disableOn
              ? r.disableOn
              : e.magnificPopup.defaults.disableOn;
          if (o)
            if (e.isFunction(o)) {
              if (!o.call(t)) return !0;
            } else if (b.width() < o) return !0;
          n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
            (r.el = e(n.mfpEl)),
            r.delegate && (r.items = i.find(r.delegate)),
            t.open(r);
        }
      },
      updateStatus: function (e, i) {
        if (t.preloader) {
          n !== e && t.container.removeClass("mfp-s-" + n),
            i || "loading" !== e || (i = t.st.tLoading);
          var r = { status: e, text: i };
          x("UpdateStatus", r),
            (e = r.status),
            (i = r.text),
            t.preloader.html(i),
            t.preloader.find("a").on("click", function (e) {
              e.stopImmediatePropagation();
            }),
            t.container.addClass("mfp-s-" + e),
            (n = e);
        }
      },
      _checkIfClose: function (n) {
        if (!e(n).hasClass(g)) {
          var i = t.st.closeOnContentClick,
            r = t.st.closeOnBgClick;
          if (i && r) return !0;
          if (
            !t.content ||
            e(n).hasClass("mfp-close") ||
            (t.preloader && n === t.preloader[0])
          )
            return !0;
          if (n === t.content[0] || e.contains(t.content[0], n)) {
            if (i) return !0;
          } else if (r && e.contains(document, n)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (e) {
        t.bgOverlay.addClass(e), t.wrap.addClass(e);
      },
      _removeClassFromMFP: function (e) {
        this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
      },
      _hasScrollBar: function (e) {
        return (
          (t.isIE7 ? i.height() : document.body.scrollHeight) >
          (e || b.height())
        );
      },
      _setFocus: function () {
        (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
      },
      _onFocusIn: function (n) {
        return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target)
          ? void 0
          : (t._setFocus(), !1);
      },
      _parseMarkup: function (t, n, i) {
        var r;
        i.data && (n = e.extend(i.data, n)),
          x(c, [t, n, i]),
          e.each(n, function (n, i) {
            if (void 0 === i || !1 === i) return !0;
            if ((r = n.split("_")).length > 1) {
              var o = t.find(f + "-" + r[0]);
              if (o.length > 0) {
                var s = r[1];
                "replaceWith" === s
                  ? o[0] !== i[0] && o.replaceWith(i)
                  : "img" === s
                  ? o.is("img")
                    ? o.attr("src", i)
                    : o.replaceWith(
                        e("<img>").attr("src", i).attr("class", o.attr("class"))
                      )
                  : o.attr(r[1], i);
              }
            } else t.find(f + "-" + n).html(i);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === t.scrollbarSize) {
          var e = document.createElement("div");
          (e.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(e),
            (t.scrollbarSize = e.offsetWidth - e.clientWidth),
            document.body.removeChild(e);
        }
        return t.scrollbarSize;
      },
    }),
      (e.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function (t, n) {
          return (
            C(),
            ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
            (t.index = n || 0),
            this.instance.open(t)
          );
        },
        close: function () {
          return e.magnificPopup.instance && e.magnificPopup.instance.close();
        },
        registerModule: function (t, n) {
          n.options && (e.magnificPopup.defaults[t] = n.options),
            e.extend(this.proto, n.proto),
            this.modules.push(t);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (e.fn.magnificPopup = function (n) {
        C();
        var i = e(this);
        if ("string" == typeof n)
          if ("open" === n) {
            var r,
              o = y ? i.data("magnificPopup") : i[0].magnificPopup,
              s = parseInt(arguments[1], 10) || 0;
            o.items
              ? (r = o.items[s])
              : ((r = i),
                o.delegate && (r = r.find(o.delegate)),
                (r = r.eq(s))),
              t._openClick({ mfpEl: r }, i, o);
          } else
            t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else
          (n = e.extend(!0, {}, n)),
            y ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
            t.addGroup(i, n);
        return i;
      });
    var S,
      k,
      E,
      A = "inline",
      D = function () {
        E && (k.after(E.addClass(S)).detach(), (E = null));
      };
    e.magnificPopup.registerModule(A, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          t.types.push(A),
            w(a + "." + A, function () {
              D();
            });
        },
        getInline: function (n, i) {
          if ((D(), n.src)) {
            var r = t.st.inline,
              o = e(n.src);
            if (o.length) {
              var s = o[0].parentNode;
              s &&
                s.tagName &&
                (k || ((S = r.hiddenClass), (k = _(S)), (S = "mfp-" + S)),
                (E = o.after(k).detach().removeClass(S))),
                t.updateStatus("ready");
            } else t.updateStatus("error", r.tNotFound), (o = e("<div>"));
            return (n.inlineElement = o), o;
          }
          return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
        },
      },
    });
    var O,
      M = "ajax",
      L = function () {
        O && e(document.body).removeClass(O);
      },
      j = function () {
        L(), t.req && t.req.abort();
      };
    e.magnificPopup.registerModule(M, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          t.types.push(M),
            (O = t.st.ajax.cursor),
            w(a + "." + M, j),
            w("BeforeChange." + M, j);
        },
        getAjax: function (n) {
          O && e(document.body).addClass(O), t.updateStatus("loading");
          var i = e.extend(
            {
              url: n.src,
              success: function (i, r, o) {
                var s = { data: i, xhr: o };
                x("ParseAjax", s),
                  t.appendContent(e(s.data), M),
                  (n.finished = !0),
                  L(),
                  t._setFocus(),
                  setTimeout(function () {
                    t.wrap.addClass(h);
                  }, 16),
                  t.updateStatus("ready"),
                  x("AjaxContentAdded");
              },
              error: function () {
                L(),
                  (n.finished = n.loadError = !0),
                  t.updateStatus(
                    "error",
                    t.st.ajax.tError.replace("%url%", n.src)
                  );
              },
            },
            t.st.ajax.settings
          );
          return (t.req = e.ajax(i)), "";
        },
      },
    });
    var $,
      P = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
          if (e.isFunction(i)) return i.call(t, n);
          if (n.el) return n.el.attr(i) || "";
        }
        return "";
      };
    e.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var n = t.st.image,
            i = ".image";
          t.types.push("image"),
            w(u + i, function () {
              "image" === t.currItem.type &&
                n.cursor &&
                e(document.body).addClass(n.cursor);
            }),
            w(a + i, function () {
              n.cursor && e(document.body).removeClass(n.cursor),
                b.off("resize" + f);
            }),
            w("Resize" + i, t.resizeImage),
            t.isLowIE && w("AfterChange", t.resizeImage);
        },
        resizeImage: function () {
          var e = t.currItem;
          if (e && e.img && t.st.image.verticalFit) {
            var n = 0;
            t.isLowIE &&
              (n =
                parseInt(e.img.css("padding-top"), 10) +
                parseInt(e.img.css("padding-bottom"), 10)),
              e.img.css("max-height", t.wH - n);
          }
        },
        _onImageHasSize: function (e) {
          e.img &&
            ((e.hasSize = !0),
            $ && clearInterval($),
            (e.isCheckingImgSize = !1),
            x("ImageHasSize", e),
            e.imgHidden &&
              (t.content && t.content.removeClass("mfp-loading"),
              (e.imgHidden = !1)));
        },
        findImageSize: function (e) {
          var n = 0,
            i = e.img[0],
            r = function (o) {
              $ && clearInterval($),
                ($ = setInterval(function () {
                  return i.naturalWidth > 0
                    ? void t._onImageHasSize(e)
                    : (n > 200 && clearInterval($),
                      void (3 === ++n
                        ? r(10)
                        : 40 === n
                        ? r(50)
                        : 100 === n && r(500)));
                }, o));
            };
          r(1);
        },
        getImage: function (n, i) {
          var r = 0,
            o = function () {
              n &&
                (n.img[0].complete
                  ? (n.img.off(".mfploader"),
                    n === t.currItem &&
                      (t._onImageHasSize(n), t.updateStatus("ready")),
                    (n.hasSize = !0),
                    (n.loaded = !0),
                    x("ImageLoadComplete"))
                  : 200 > ++r
                  ? setTimeout(o, 100)
                  : s());
            },
            s = function () {
              n &&
                (n.img.off(".mfploader"),
                n === t.currItem &&
                  (t._onImageHasSize(n),
                  t.updateStatus("error", a.tError.replace("%url%", n.src))),
                (n.hasSize = !0),
                (n.loaded = !0),
                (n.loadError = !0));
            },
            a = t.st.image,
            l = i.find(".mfp-img");
          if (l.length) {
            var c = document.createElement("img");
            (c.className = "mfp-img"),
              n.el &&
                n.el.find("img").length &&
                (c.alt = n.el.find("img").attr("alt")),
              (n.img = e(c).on("load.mfploader", o).on("error.mfploader", s)),
              (c.src = n.src),
              l.is("img") && (n.img = n.img.clone()),
              (c = n.img[0]).naturalWidth > 0
                ? (n.hasSize = !0)
                : c.width || (n.hasSize = !1);
          }
          return (
            t._parseMarkup(i, { title: P(n), img_replaceWith: n.img }, n),
            t.resizeImage(),
            n.hasSize
              ? ($ && clearInterval($),
                n.loadError
                  ? (i.addClass("mfp-loading"),
                    t.updateStatus("error", a.tError.replace("%url%", n.src)))
                  : (i.removeClass("mfp-loading"), t.updateStatus("ready")),
                i)
              : (t.updateStatus("loading"),
                (n.loading = !0),
                n.hasSize ||
                  ((n.imgHidden = !0),
                  i.addClass("mfp-loading"),
                  t.findImageSize(n)),
                i)
          );
        },
      },
    });
    var N;
    e.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (e) {
          return e.is("img") ? e : e.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var e,
            n = t.st.zoom,
            i = ".zoom";
          if (n.enabled && t.supportsTransition) {
            var r,
              o,
              s = n.duration,
              c = function (e) {
                var t = e
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  i = "all " + n.duration / 1e3 + "s " + n.easing,
                  r = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  o = "transition";
                return (
                  (r["-webkit-" + o] =
                    r["-moz-" + o] =
                    r["-o-" + o] =
                    r[o] =
                      i),
                  t.css(r),
                  t
                );
              },
              u = function () {
                t.content.css("visibility", "visible");
              };
            w("BuildControls" + i, function () {
              if (t._allowZoom()) {
                if (
                  (clearTimeout(r),
                  t.content.css("visibility", "hidden"),
                  !(e = t._getItemToZoom()))
                )
                  return void u();
                (o = c(e)).css(t._getOffset()),
                  t.wrap.append(o),
                  (r = setTimeout(function () {
                    o.css(t._getOffset(!0)),
                      (r = setTimeout(function () {
                        u(),
                          setTimeout(function () {
                            o.remove(), (e = o = null), x("ZoomAnimationEnded");
                          }, 16);
                      }, s));
                  }, 16));
              }
            }),
              w(l + i, function () {
                if (t._allowZoom()) {
                  if ((clearTimeout(r), (t.st.removalDelay = s), !e)) {
                    if (!(e = t._getItemToZoom())) return;
                    o = c(e);
                  }
                  o.css(t._getOffset(!0)),
                    t.wrap.append(o),
                    t.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      o.css(t._getOffset());
                    }, 16);
                }
              }),
              w(a + i, function () {
                t._allowZoom() && (u(), o && o.remove(), (e = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === t.currItem.type;
        },
        _getItemToZoom: function () {
          return !!t.currItem.hasSize && t.currItem.img;
        },
        _getOffset: function (n) {
          var i,
            r = (i = n
              ? t.currItem.img
              : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            o = parseInt(i.css("padding-top"), 10),
            s = parseInt(i.css("padding-bottom"), 10);
          r.top -= e(window).scrollTop() - o;
          var a = {
            width: i.width(),
            height: (y ? i.innerHeight() : i[0].offsetHeight) - s - o,
          };
          return (
            void 0 === N &&
              (N = void 0 !== document.createElement("p").style.MozTransform),
            N
              ? (a["-moz-transform"] = a.transform =
                  "translate(" + r.left + "px," + r.top + "px)")
              : ((a.left = r.left), (a.top = r.top)),
            a
          );
        },
      },
    });
    var H = "iframe",
      I = function (e) {
        if (t.currTemplate[H]) {
          var n = t.currTemplate[H].find("iframe");
          n.length &&
            (e || (n[0].src = "//about:blank"),
            t.isIE8 && n.css("display", e ? "block" : "none"));
        }
      };
    e.magnificPopup.registerModule(H, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          t.types.push(H),
            w("BeforeChange", function (e, t, n) {
              t !== n && (t === H ? I() : n === H && I(!0));
            }),
            w(a + "." + H, function () {
              I();
            });
        },
        getIframe: function (n, i) {
          var r = n.src,
            o = t.st.iframe;
          e.each(o.patterns, function () {
            return r.indexOf(this.index) > -1
              ? (this.id &&
                  (r =
                    "string" == typeof this.id
                      ? r.substr(
                          r.lastIndexOf(this.id) + this.id.length,
                          r.length
                        )
                      : this.id.call(this, r)),
                (r = this.src.replace("%id%", r)),
                !1)
              : void 0;
          });
          var s = {};
          return (
            o.srcAction && (s[o.srcAction] = r),
            t._parseMarkup(i, s, n),
            t.updateStatus("ready"),
            i
          );
        },
      },
    });
    var q = function (e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e;
      },
      F = function (e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
      };
    e.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var n = t.st.gallery,
            r = ".mfp-gallery";
          return (
            (t.direction = !0),
            !(!n || !n.enabled) &&
              ((o += " mfp-gallery"),
              w(u + r, function () {
                n.navigateByImgClick &&
                  t.wrap.on("click" + r, ".mfp-img", function () {
                    return t.items.length > 1 ? (t.next(), !1) : void 0;
                  }),
                  i.on("keydown" + r, function (e) {
                    37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                  });
              }),
              w("UpdateStatus" + r, function (e, n) {
                n.text &&
                  (n.text = F(n.text, t.currItem.index, t.items.length));
              }),
              w(c + r, function (e, i, r, o) {
                var s = t.items.length;
                r.counter = s > 1 ? F(n.tCounter, o.index, s) : "";
              }),
              w("BuildControls" + r, function () {
                if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                  var i = n.arrowMarkup,
                    r = (t.arrowLeft = e(
                      i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(g)),
                    o = (t.arrowRight = e(
                      i
                        .replace(/%title%/gi, n.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(g));
                  r.click(function () {
                    t.prev();
                  }),
                    o.click(function () {
                      t.next();
                    }),
                    t.container.append(r.add(o));
                }
              }),
              w(d + r, function () {
                t._preloadTimeout && clearTimeout(t._preloadTimeout),
                  (t._preloadTimeout = setTimeout(function () {
                    t.preloadNearbyImages(), (t._preloadTimeout = null);
                  }, 16));
              }),
              void w(a + r, function () {
                i.off(r),
                  t.wrap.off("click" + r),
                  (t.arrowRight = t.arrowLeft = null);
              }))
          );
        },
        next: function () {
          (t.direction = !0), (t.index = q(t.index + 1)), t.updateItemHTML();
        },
        prev: function () {
          (t.direction = !1), (t.index = q(t.index - 1)), t.updateItemHTML();
        },
        goTo: function (e) {
          (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            r = Math.min(n[1], t.items.length);
          for (e = 1; e <= (t.direction ? r : i); e++)
            t._preloadItem(t.index + e);
          for (e = 1; e <= (t.direction ? i : r); e++)
            t._preloadItem(t.index - e);
        },
        _preloadItem: function (n) {
          if (((n = q(n)), !t.items[n].preloaded)) {
            var i = t.items[n];
            i.parsed || (i = t.parseEl(n)),
              x("LazyLoad", i),
              "image" === i.type &&
                (i.img = e('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    i.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (i.hasSize = !0), (i.loadError = !0), x("LazyLoadError", i);
                  })
                  .attr("src", i.src)),
              (i.preloaded = !0);
          }
        },
      },
    });
    var R = "retina";
    e.magnificPopup.registerModule(R, {
      options: {
        replaceSrc: function (e) {
          return e.src.replace(/\.\w+$/, function (e) {
            return "@2x" + e;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var e = t.st.retina,
              n = e.ratio;
            (n = isNaN(n) ? n() : n) > 1 &&
              (w("ImageHasSize." + R, function (e, t) {
                t.img.css({
                  "max-width": t.img[0].naturalWidth / n,
                  width: "100%",
                });
              }),
              w("ElementParse." + R, function (t, i) {
                i.src = e.replaceSrc(i, n);
              }));
          }
        },
      },
    }),
      C();
  }),
  /*!
    Waypoints - 4.0.1
    Copyright © 2011-2016 Caleb Troughton
    Licensed under the MIT license.
    https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
    */
  (function () {
    "use strict";
    var e = 0,
      t = {};
    function n(i) {
      if (!i) throw new Error("No options passed to Waypoint constructor");
      if (!i.element)
        throw new Error("No element option passed to Waypoint constructor");
      if (!i.handler)
        throw new Error("No handler option passed to Waypoint constructor");
      (this.key = "waypoint-" + e),
        (this.options = n.Adapter.extend({}, n.defaults, i)),
        (this.element = this.options.element),
        (this.adapter = new n.Adapter(this.element)),
        (this.callback = i.handler),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = n.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis,
        })),
        (this.context = n.Context.findOrCreateByElement(this.options.context)),
        n.offsetAliases[this.options.offset] &&
          (this.options.offset = n.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (t[this.key] = this),
        (e += 1);
    }
    (n.prototype.queueTrigger = function (e) {
      this.group.queueTrigger(this, e);
    }),
      (n.prototype.trigger = function (e) {
        this.enabled && this.callback && this.callback.apply(this, e);
      }),
      (n.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete t[this.key];
      }),
      (n.prototype.disable = function () {
        return (this.enabled = !1), this;
      }),
      (n.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
      }),
      (n.prototype.next = function () {
        return this.group.next(this);
      }),
      (n.prototype.previous = function () {
        return this.group.previous(this);
      }),
      (n.invokeAll = function (e) {
        var n = [];
        for (var i in t) n.push(t[i]);
        for (var r = 0, o = n.length; r < o; r++) n[r][e]();
      }),
      (n.destroyAll = function () {
        n.invokeAll("destroy");
      }),
      (n.disableAll = function () {
        n.invokeAll("disable");
      }),
      (n.enableAll = function () {
        for (var e in (n.Context.refreshAll(), t)) t[e].enabled = !0;
        return this;
      }),
      (n.refreshAll = function () {
        n.Context.refreshAll();
      }),
      (n.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
      }),
      (n.viewportWidth = function () {
        return document.documentElement.clientWidth;
      }),
      (n.adapters = []),
      (n.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
      }),
      (n.offsetAliases = {
        "bottom-in-view": function () {
          return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
          return this.context.innerWidth() - this.adapter.outerWidth();
        },
      }),
      (window.Waypoint = n);
  })(),
  (function () {
    "use strict";
    function e(e) {
      window.setTimeout(e, 1e3 / 60);
    }
    var t = 0,
      n = {},
      i = window.Waypoint,
      r = window.onload;
    function o(e) {
      (this.element = e),
        (this.Adapter = i.Adapter),
        (this.adapter = new this.Adapter(e)),
        (this.key = "waypoint-context-" + t),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (e.waypointContextKey = this.key),
        (n[e.waypointContextKey] = this),
        (t += 1),
        i.windowContext ||
          ((i.windowContext = !0), (i.windowContext = new o(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    (o.prototype.add = function (e) {
      var t = e.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[t][e.key] = e), this.refresh();
    }),
      (o.prototype.checkEmpty = function () {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          t = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        e && t && !i && (this.adapter.off(".waypoints"), delete n[this.key]);
      }),
      (o.prototype.createThrottledResizeHandler = function () {
        var e = this;
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), i.requestAnimationFrame(t));
        });
      }),
      (o.prototype.createThrottledScrollHandler = function () {
        var e = this;
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        this.adapter.on("scroll.waypoints", function () {
          (e.didScroll && !i.isTouch) ||
            ((e.didScroll = !0), i.requestAnimationFrame(t));
        });
      }),
      (o.prototype.handleResize = function () {
        i.Context.refreshAll();
      }),
      (o.prototype.handleScroll = function () {
        var e = {},
          t = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var n in t) {
          var i = t[n],
            r = i.newScroll > i.oldScroll ? i.forward : i.backward;
          for (var o in this.waypoints[n]) {
            var s = this.waypoints[n][o];
            if (null !== s.triggerPoint) {
              var a = i.oldScroll < s.triggerPoint,
                l = i.newScroll >= s.triggerPoint;
              ((a && l) || (!a && !l)) &&
                (s.queueTrigger(r), (e[s.group.id] = s.group));
            }
          }
        }
        for (var c in e) e[c].flushTriggers();
        this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll };
      }),
      (o.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? i.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (o.prototype.remove = function (e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty();
      }),
      (o.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? i.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (o.prototype.destroy = function () {
        var e = [];
        for (var t in this.waypoints)
          for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
        for (var i = 0, r = e.length; i < r; i++) e[i].destroy();
      }),
      (o.prototype.refresh = function () {
        var e,
          t = this.element == this.element.window,
          n = t ? void 0 : this.adapter.offset(),
          r = {};
        for (var o in (this.handleScroll(),
        (e = {
          horizontal: {
            contextOffset: t ? 0 : n.left,
            contextScroll: t ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: t ? 0 : n.top,
            contextScroll: t ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var s = e[o];
          for (var a in this.waypoints[o]) {
            var l,
              c,
              u,
              d,
              p = this.waypoints[o][a],
              f = p.options.offset,
              h = p.triggerPoint,
              m = 0,
              g = null == h;
            p.element !== p.element.window &&
              (m = p.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(p))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  p.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (p.triggerPoint = Math.floor(m + l - f)),
              (c = h < s.oldScroll),
              (u = p.triggerPoint >= s.oldScroll),
              (d = !c && !u),
              !g && c && u
                ? (p.queueTrigger(s.backward), (r[p.group.id] = p.group))
                : ((!g && d) || (g && s.oldScroll >= p.triggerPoint)) &&
                  (p.queueTrigger(s.forward), (r[p.group.id] = p.group));
          }
        }
        return (
          i.requestAnimationFrame(function () {
            for (var e in r) r[e].flushTriggers();
          }),
          this
        );
      }),
      (o.findOrCreateByElement = function (e) {
        return o.findByElement(e) || new o(e);
      }),
      (o.refreshAll = function () {
        for (var e in n) n[e].refresh();
      }),
      (o.findByElement = function (e) {
        return n[e.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), o.refreshAll();
      }),
      (i.requestAnimationFrame = function (t) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          e
        ).call(window, t);
      }),
      (i.Context = o);
  })(),
  (function () {
    "use strict";
    function e(e, t) {
      return e.triggerPoint - t.triggerPoint;
    }
    function t(e, t) {
      return t.triggerPoint - e.triggerPoint;
    }
    var n = { vertical: {}, horizontal: {} },
      i = window.Waypoint;
    function r(e) {
      (this.name = e.name),
        (this.axis = e.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (n[this.axis][this.name] = this);
    }
    (r.prototype.add = function (e) {
      this.waypoints.push(e);
    }),
      (r.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (r.prototype.flushTriggers = function () {
        for (var n in this.triggerQueues) {
          var i = this.triggerQueues[n],
            r = "up" === n || "left" === n;
          i.sort(r ? t : e);
          for (var o = 0, s = i.length; o < s; o += 1) {
            var a = i[o];
            (a.options.continuous || o === i.length - 1) && a.trigger([n]);
          }
        }
        this.clearTriggerQueues();
      }),
      (r.prototype.next = function (t) {
        this.waypoints.sort(e);
        var n = i.Adapter.inArray(t, this.waypoints);
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1];
      }),
      (r.prototype.previous = function (t) {
        this.waypoints.sort(e);
        var n = i.Adapter.inArray(t, this.waypoints);
        return n ? this.waypoints[n - 1] : null;
      }),
      (r.prototype.queueTrigger = function (e, t) {
        this.triggerQueues[t].push(e);
      }),
      (r.prototype.remove = function (e) {
        var t = i.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1);
      }),
      (r.prototype.first = function () {
        return this.waypoints[0];
      }),
      (r.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (r.findOrCreate = function (e) {
        return n[e.axis][e.name] || new r(e);
      }),
      (i.Group = r);
  })(),
  (function () {
    "use strict";
    var e = window.jQuery,
      t = window.Waypoint;
    function n(t) {
      this.$element = e(t);
    }
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, t) {
        n.prototype[t] = function () {
          var e = Array.prototype.slice.call(arguments);
          return this.$element[t].apply(this.$element, e);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (t, i) {
        n[i] = e[i];
      }),
      t.adapters.push({ name: "jquery", Adapter: n }),
      (t.Adapter = n);
  })(),
  (function () {
    "use strict";
    var e = window.Waypoint;
    function t(t) {
      return function () {
        var n = [],
          i = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((i = t.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var r = t.extend({}, i, { element: this });
            "string" == typeof r.context &&
              (r.context = t(this).closest(r.context)[0]),
              n.push(new e(r));
          }),
          n
        );
      };
    }
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })(),
  /*!
   * jquery.counterup.js 1.0
   *
   * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
   * Released under the GPL v2 License
   *
   * Date: Nov 26, 2013
   */
  (function (e) {
    "use strict";
    e.fn.counterUp = function (t) {
      var n = e.extend({ time: 400, delay: 10 }, t);
      return this.each(function () {
        var t = e(this),
          i = n;
        t.waypoint(
          function () {
            var e = [],
              n = i.time / i.delay,
              r = t.text(),
              o = /[0-9]+,[0-9]+/.test(r);
            r = r.replace(/,/g, "");
            /^[0-9]+$/.test(r);
            for (
              var s = /^[0-9]+\.[0-9]+$/.test(r),
                a = s ? (r.split(".")[1] || []).length : 0,
                l = n;
              l >= 1;
              l--
            ) {
              var c = parseInt((r / n) * l);
              if ((s && (c = parseFloat((r / n) * l).toFixed(a)), o))
                for (; /(\d+)(\d{3})/.test(c.toString()); )
                  c = c.toString().replace(/(\d+)(\d{3})/, "$1,$2");
              e.unshift(c);
            }
            t.data("counterup-nums", e), t.text("0");
            t.data("counterup-func", function () {
              t.text(t.data("counterup-nums").shift()),
                t.data("counterup-nums").length
                  ? setTimeout(t.data("counterup-func"), i.delay)
                  : (t.data("counterup-nums"),
                    t.data("counterup-nums", null),
                    t.data("counterup-func", null));
            }),
              setTimeout(t.data("counterup-func"), i.delay);
          },
          { offset: "100%", triggerOnce: !0 }
        );
      });
    };
  })(jQuery),
  /*!
   * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
   * Copyright (c) 2016 Edson Hilios
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy of
   * this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to
   * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
   * the Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
   * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
   * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
   * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
   * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t = [],
      n = [],
      i = { precision: 100, elapse: !1, defer: !1 };
    n.push(/^[0-9]*$/.source),
      n.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
      n.push(
        /[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source
      ),
      (n = new RegExp(n.join("|")));
    var r = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds",
    };
    function o(e, t) {
      var n = "s",
        i = "";
      return (
        e &&
          (1 === (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length
            ? (n = e[0])
            : ((i = e[0]), (n = e[1]))),
        Math.abs(t) > 1 ? n : i
      );
    }
    var s = function (n, r, o) {
      (this.el = n),
        (this.$el = e(n)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = e.extend({}, i)),
        (this.instanceNumber = t.length),
        t.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        o &&
          ("function" == typeof o
            ? (this.$el.on("update.countdown", o),
              this.$el.on("stoped.countdown", o),
              this.$el.on("finish.countdown", o))
            : (this.options = e.extend({}, i, o))),
        this.setFinalDate(r),
        !1 === this.options.defer && this.start();
    };
    e.extend(s.prototype, {
      start: function () {
        null !== this.interval && clearInterval(this.interval);
        var e = this;
        this.update(),
          (this.interval = setInterval(function () {
            e.update.call(e);
          }, this.options.precision));
      },
      stop: function () {
        clearInterval(this.interval),
          (this.interval = null),
          this.dispatchEvent("stoped");
      },
      toggle: function () {
        this.interval ? this.stop() : this.start();
      },
      pause: function () {
        this.stop();
      },
      resume: function () {
        this.start();
      },
      remove: function () {
        this.stop.call(this),
          (t[this.instanceNumber] = null),
          delete this.$el.data().countdownInstance;
      },
      setFinalDate: function (e) {
        this.finalDate = (function (e) {
          if (e instanceof Date) return e;
          if (String(e).match(n))
            return (
              String(e).match(/^[0-9]*$/) && (e = Number(e)),
              String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/")),
              new Date(e)
            );
          throw new Error("Couldn't cast `" + e + "` to a date object.");
        })(e);
      },
      update: function () {
        if (0 !== this.$el.closest("html").length) {
          var t,
            n = void 0 !== e._data(this.el, "events"),
            i = new Date();
          (t = this.finalDate.getTime() - i.getTime()),
            (t = Math.ceil(t / 1e3)),
            (t = !this.options.elapse && t < 0 ? 0 : Math.abs(t)),
            this.totalSecsLeft !== t &&
              n &&
              ((this.totalSecsLeft = t),
              (this.elapsed = i >= this.finalDate),
              (this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(
                  (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
                ),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth:
                  Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - i.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft,
              }),
              this.options.elapse || 0 !== this.totalSecsLeft
                ? this.dispatchEvent("update")
                : (this.stop(), this.dispatchEvent("finish")));
        } else this.remove();
      },
      dispatchEvent: function (t) {
        var n,
          i = e.Event(t + ".countdown");
        (i.finalDate = this.finalDate),
          (i.elapsed = this.elapsed),
          (i.offset = e.extend({}, this.offset)),
          (i.strftime =
            ((n = this.offset),
            function (e) {
              var t,
                i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
              if (i)
                for (var s = 0, a = i.length; s < a; ++s) {
                  var l = i[s].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                    c =
                      ((t = void 0),
                      (t = l[0]
                        .toString()
                        .replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")),
                      new RegExp(t)),
                    u = l[1] || "",
                    d = l[3] || "",
                    p = null;
                  (l = l[2]),
                    r.hasOwnProperty(l) && ((p = r[l]), (p = Number(n[p]))),
                    null !== p &&
                      ("!" === u && (p = o(d, p)),
                      "" === u && p < 10 && (p = "0" + p.toString()),
                      (e = e.replace(c, p.toString())));
                }
              return e.replace(/%%/, "%");
            })),
          this.$el.trigger(i);
      },
    }),
      (e.fn.countdown = function () {
        var n = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
          var i = e(this).data("countdown-instance");
          if (void 0 !== i) {
            var r = t[i],
              o = n[0];
            s.prototype.hasOwnProperty(o)
              ? r[o].apply(r, n.slice(1))
              : null === String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i)
              ? (r.setFinalDate.call(r, o), r.start())
              : e.error(
                  "Method %s does not exist on jQuery.countdown".replace(
                    /\%s/gi,
                    o
                  )
                );
          } else new s(this, n[0], n[1]);
        });
      });
  }),
  /*! name: @uvarov.frontend/vanilla-calendar | url: https://github.com/uvarov-frontend/vanilla-calendar */
  "undefined" != typeof window &&
    (function (e, t) {
      if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
      else if ("function" == typeof define && define.amd) define([], t);
      else {
        var n = t();
        for (var i in n) ("object" == typeof exports ? exports : e)[i] = n[i];
      }
    })(self, () =>
      (() => {
        "use strict";
        var e = {
            d: (t, n) => {
              for (var i in n)
                e.o(n, i) &&
                  !e.o(t, i) &&
                  Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            },
          },
          t = {};
        e.r(t), e.d(t, { default: () => I });
        const n = (e) => {
            if (!["default", "year"].includes(e.currentType)) return;
            const t = e.HTMLElement.querySelector(`.${e.CSSClasses.arrowPrev}`),
              n = e.HTMLElement.querySelector(`.${e.CSSClasses.arrowNext}`);
            (() => {
              if (!e.dateMin || !e.dateMax || "default" !== e.currentType)
                return;
              const i = e.selectedMonth === e.dateMin.getUTCMonth(),
                r = e.selectedMonth === e.dateMax.getUTCMonth(),
                o =
                  !e.settings.selection.year ||
                  e.selectedYear === e.dateMin.getUTCFullYear(),
                s =
                  !e.settings.selection.year ||
                  e.selectedYear === e.dateMax.getUTCFullYear();
              (i && o) || !e.settings.selection.month
                ? (t.style.visibility = "hidden")
                : (t.style.visibility = ""),
                (r && s) || !e.settings.selection.month
                  ? (n.style.visibility = "hidden")
                  : (n.style.visibility = "");
            })(),
              e.dateMin &&
                e.dateMax &&
                "year" === e.currentType &&
                void 0 !== e.viewYear &&
                (e.dateMin.getUTCFullYear() &&
                e.viewYear - 7 <= e.dateMin.getUTCFullYear()
                  ? (t.style.visibility = "hidden")
                  : (t.style.visibility = ""),
                e.dateMax.getUTCFullYear() &&
                e.viewYear + 7 >= e.dateMax.getUTCFullYear()
                  ? (n.style.visibility = "hidden")
                  : (n.style.visibility = ""));
          },
          i = (e, t) => {
            if (!e) return null;
            const n = new Date(e).getUTCDate(),
              i = new Date(e).getUTCMonth(),
              r = new Date(e).getUTCFullYear(),
              o = new Date(Date.UTC(r, i, n)),
              s = t ? o.getUTCDay() || 7 : o.getUTCDay();
            o.setUTCDate(o.getUTCDate() + 4 - s);
            const a = new Date(Date.UTC(o.getUTCFullYear(), 0, 1));
            return { year: r, week: Math.ceil(((+o - +a) / 864e5 + 1) / 7) };
          },
          r = (e) => {
            const t = e.getUTCFullYear();
            let n = e.getUTCMonth() + 1,
              i = e.getUTCDate();
            return (
              (n = n < 10 ? `0${n}` : n),
              (i = i < 10 ? `0${i}` : i),
              `${t}-${n}-${i}`
            );
          },
          o = (e) => {
            if (void 0 === e.selectedMonth || void 0 === e.selectedYear) return;
            const t = new Date(Date.UTC(e.selectedYear, e.selectedMonth, 1)),
              n = new Date(
                Date.UTC(e.selectedYear, e.selectedMonth + 1, 0)
              ).getUTCDate();
            let o = Number(t.getUTCDay());
            e.settings.iso8601 &&
              (o = Number((0 !== t.getUTCDay() ? t.getUTCDay() : 7) - 1));
            const s = e.HTMLElement.querySelector(`.${e.CSSClasses.days}`);
            if (!s) return;
            const a = document.createElement("div"),
              l = document.createElement("button");
            (a.className = e.CSSClasses.day),
              (l.className = e.CSSClasses.dayBtn),
              (l.type = "button"),
              e.settings.selection.day &&
                ["single", "multiple", "multiple-ranged"].includes(
                  e.settings.selection.day
                ) &&
                s.classList.add(e.CSSClasses.daysSelecting),
              (s.innerHTML = "");
            const c = (t, n, r, o, c) => {
              const u = a.cloneNode(!0),
                d = l.cloneNode(!0);
              if (
                (c && d.classList.add(c),
                (d.innerText = t),
                (d.dataset.calendarDay = r),
                e.settings.visibility.weekNumbers)
              ) {
                const t = i(r, e.settings.iso8601);
                if (!t) return;
                d.dataset.calendarWeekNumber = `${t.week}`;
              }
              ((t, n, i, r) => {
                !e.settings.visibility.weekend ||
                  (0 !== n && 6 !== n) ||
                  t.classList.add(e.CSSClasses.dayBtnWeekend),
                  Array.isArray(e.settings.selected.holidays) &&
                    e.settings.selected.holidays.forEach((n) => {
                      n === i && t.classList.add(e.CSSClasses.dayBtnHoliday);
                    });
                let o = e.date.today.getDate(),
                  s = e.date.today.getMonth() + 1;
                (o = o < 10 ? `0${o}` : o), (s = s < 10 ? `0${s}` : s);
                const a = `${e.date.today.getFullYear()}-${s}-${o}`;
                e.settings.visibility.today &&
                  t.dataset.calendarDay === a &&
                  t.classList.add(e.CSSClasses.dayBtnToday),
                  (e.selectedDates && 0 === e.selectedDates.indexOf(i)) ||
                  (e.selectedDates &&
                    e.selectedDates[0] &&
                    e.selectedDates.indexOf(i) === e.selectedDates.length - 1)
                    ? t.classList.add(e.CSSClasses.dayBtnSelected)
                    : e.selectedDates &&
                      e.selectedDates.indexOf(i) > 0 &&
                      "multiple-ranged" === e.settings.selection.day
                    ? (t.classList.add(e.CSSClasses.dayBtnSelected),
                      t.classList.add(e.CSSClasses.dayBtnIntermediate))
                    : e.selectedDates &&
                      e.selectedDates.indexOf(i) > 0 &&
                      t.classList.add(e.CSSClasses.dayBtnSelected),
                  (e.settings.range.min > i || e.settings.range.max < i) &&
                    (t.classList.add(e.CSSClasses.dayBtnDisabled),
                    (t.tabIndex = -1)),
                  e.settings.selection.month ||
                    r ||
                    (t.classList.add(e.CSSClasses.dayBtnDisabled),
                    (t.tabIndex = -1)),
                  e.settings.selection.year ||
                    new Date(i).getFullYear() === e.selectedYear ||
                    (t.classList.add(e.CSSClasses.dayBtnDisabled),
                    (t.tabIndex = -1)),
                  Array.isArray(e.settings.range.disabled)
                    ? e.settings.range.disabled.forEach((n) => {
                        n === i &&
                          (t.classList.add(e.CSSClasses.dayBtnDisabled),
                          (t.tabIndex = -1));
                      })
                    : Array.isArray(e.settings.range.enabled) &&
                      (t.classList.add(e.CSSClasses.dayBtnDisabled),
                      (t.tabIndex = -1),
                      e.settings.range.enabled.forEach((n) => {
                        n === i &&
                          (t.classList.remove(e.CSSClasses.dayBtnDisabled),
                          (t.tabIndex = 0));
                      }));
              })(d, n, r, o),
                u.append(d),
                s.append(u);
            };
            (() => {
              if (void 0 === e.selectedMonth || void 0 === e.selectedYear)
                return;
              let t =
                  new Date(
                    Date.UTC(e.selectedYear, e.selectedMonth, 0)
                  ).getUTCDate() - o,
                n = e.selectedYear,
                i = e.selectedMonth;
              0 === e.selectedMonth
                ? ((i = e.locale.months.length), (n = e.selectedYear - 1))
                : e.selectedMonth < 10 && (i = `0${e.selectedMonth}`);
              for (let r = 0; r < o; r++) {
                t += 1;
                const r = `${n}-${i}-${t}`,
                  o =
                    new Date(
                      Date.UTC(e.selectedYear, e.selectedMonth, t - 1)
                    ).getUTCMonth() - 1,
                  s = new Date(Date.UTC(e.selectedYear, o, t)).getUTCDay();
                c(String(t), s, r, !1, e.CSSClasses.dayBtnPrev);
              }
            })(),
              (() => {
                if (void 0 !== e.selectedMonth && void 0 !== e.selectedYear)
                  for (let t = 1; t <= n; t++) {
                    const n = new Date(
                        Date.UTC(e.selectedYear, e.selectedMonth, t)
                      ),
                      i = r(n),
                      o = n.getUTCDay();
                    c(String(t), o, i, !0, null);
                  }
              })(),
              (() => {
                if (void 0 === e.selectedMonth || void 0 === e.selectedYear)
                  return;
                const t = o + n,
                  i = Math.ceil(t / e.locale.weekday.length),
                  r = e.locale.weekday.length * i - t;
                let s = e.selectedYear,
                  a = String(e.selectedMonth + 2);
                e.selectedMonth + 1 === e.locale.months.length
                  ? ((a = "01"), (s = e.selectedYear + 1))
                  : e.selectedMonth + 2 < 10 && (a = `0${e.selectedMonth + 2}`);
                for (let t = 1; t <= r; t++) {
                  const n = `${s}-${a}-${t < 10 ? `0${t}` : String(t)}`,
                    i =
                      new Date(
                        Date.UTC(e.selectedYear, e.selectedMonth, t)
                      ).getUTCMonth() + 1,
                    r = new Date(Date.UTC(e.selectedYear, i, t)).getUTCDay();
                  c(String(t), r, n, !1, e.CSSClasses.dayBtnNext);
                }
              })(),
              ((e, t) => {
                e.popups &&
                  Object.keys(e.popups).forEach((n) => {
                    var i;
                    const r = t.querySelector(`[data-calendar-day="${n}"]`);
                    if (r) {
                      const t = null == (i = e.popups) ? void 0 : i[n];
                      (null == t ? void 0 : t.modifier) &&
                        t.modifier
                          .trim()
                          .split(" ")
                          .forEach((e) => {
                            r.classList.add(e);
                          }),
                        (null == t ? void 0 : t.html) &&
                          (r.parentNode.innerHTML += `<div class="${e.CSSClasses.dayPopup}">${t.html}</div>`);
                    }
                  });
              })(e, s),
              ((e, t, n) => {
                if (!e.settings.visibility.weekNumbers) return;
                const r = e.HTMLElement.querySelector(
                    `.${e.CSSClasses.weekNumbers}`
                  ),
                  o = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.dayBtn}`);
                if (!r || !o[0]) return;
                r.innerHTML = "";
                const s = Math.ceil((t + n) / 7),
                  a = document.createElement("b");
                (a.className = e.CSSClasses.weekNumbersTitle),
                  (a.innerText = "#"),
                  r.append(a);
                const l = document.createElement("div");
                (l.className = e.CSSClasses.weekNumbersContent), r.append(l);
                const c = document.createElement("span");
                c.className = e.CSSClasses.weekNumber;
                for (let t = 0; t < s; t++) {
                  const n = i(o[7 * t].dataset.calendarDay, e.settings.iso8601);
                  if (!n) return;
                  const r = c.cloneNode(!0);
                  (r.innerText = `${n.week}`),
                    (r.dataset.calendarYearWeek = `${n.year}`),
                    l.append(r);
                }
              })(e, o, n);
          },
          s = (e) =>
            `\n\t<button type="button"\n\t\tclass="${e.CSSClasses.arrow} ${e.CSSClasses.arrowPrev}"\n\t\tdata-calendar-arrow="prev"\n\t\ttitle="Prev">\n\t</button>\n`,
          a = (e) =>
            `\n\t<button type="button"\n\tclass="${e.CSSClasses.arrow} ${e.CSSClasses.arrowNext}"\n\tdata-calendar-arrow="next"\n\ttitle="Next">\n\t</button>\n`,
          l = (e) =>
            `\n\t<button type="button"\n\t\tclass="${e.CSSClasses.month}"\n\t\tdata-calendar-selected-month>\n\t</button>\n`,
          c = (e) =>
            `\n\t<button type="button"\n\t\tclass="${e.CSSClasses.year}"\n\t\tdata-calendar-selected-year>\n\t</button>\n`,
          u = (e) => `\n\t<div class="${e.CSSClasses.week}"></div>\n`,
          d = (e) => `\n\t<div class="${e.CSSClasses.days}"></div>\n`,
          p = (e) => `\n\t<div class="${e.CSSClasses.months}"></div>\n`,
          f = (e) => `\n\t<div class="${e.CSSClasses.years}"></div>\n`,
          h = (e) =>
            e.settings.visibility.weekNumbers
              ? `\n\t<div class="${e.CSSClasses.weekNumbers}"></div>\n`
              : "",
          m = (e) =>
            e.settings.selection.time
              ? `\n\t<div class="${e.CSSClasses.time}"></div>\n`
              : "",
          g = (e, t) =>
            t
              .replace(/<#(.*?)\/>/g, (t, n) => {
                const i = ((e) => {
                  let t = null;
                  switch (e) {
                    case "ArrowPrev":
                      t = s;
                      break;
                    case "ArrowNext":
                      t = a;
                      break;
                    case "Month":
                      t = l;
                      break;
                    case "Year":
                      t = c;
                      break;
                    case "Week":
                      t = u;
                      break;
                    case "Days":
                      t = d;
                      break;
                    case "Months":
                      t = p;
                      break;
                    case "Years":
                      t = f;
                      break;
                    case "WeekNumbers":
                      t = h;
                      break;
                    case "ControlTime":
                      t = m;
                  }
                  return t;
                })(n.replace(/[\s\n\t]/g, ""));
                return i ? i(e) : "";
              })
              .replace(/[\n\t]/g, ""),
          v = (e) => {
            const t = e.HTMLElement;
            switch ((t.classList.add(e.CSSClasses.calendar), e.currentType)) {
              case "default":
                t.classList.add(e.CSSClasses.calendarDefault),
                  t.classList.remove(e.CSSClasses.calendarMonth),
                  t.classList.remove(e.CSSClasses.calendarYear),
                  (t.innerHTML = g(e, e.DOMTemplates.default));
                break;
              case "month":
                t.classList.remove(e.CSSClasses.calendarDefault),
                  t.classList.add(e.CSSClasses.calendarMonth),
                  t.classList.remove(e.CSSClasses.calendarYear),
                  (t.innerHTML = g(e, e.DOMTemplates.month));
                break;
              case "year":
                t.classList.remove(e.CSSClasses.calendarDefault),
                  t.classList.remove(e.CSSClasses.calendarMonth),
                  t.classList.add(e.CSSClasses.calendarYear),
                  (t.innerHTML = g(e, e.DOMTemplates.year));
            }
          },
          y = (e) => {
            if (void 0 === e.selectedMonth) return;
            const t = e.HTMLElement.querySelector(
              "[data-calendar-selected-month]"
            );
            t &&
              ((t.dataset.calendarSelectedMonth = String(e.selectedMonth)),
              (t.innerText = e.locale.months[e.selectedMonth]),
              e.settings.selection.month
                ? ((t.tabIndex = 0),
                  t.classList.remove(e.CSSClasses.monthDisabled))
                : ((t.tabIndex = -1),
                  t.classList.add(e.CSSClasses.monthDisabled)));
          },
          b = (e) => {
            if (void 0 === e.selectedYear) return;
            const t = e.HTMLElement.querySelector(
              "[data-calendar-selected-year]"
            );
            t &&
              ((t.dataset.calendarSelectedYear = String(e.selectedYear)),
              (t.innerText = String(e.selectedYear)),
              e.settings.selection.year
                ? ((t.tabIndex = 0),
                  t.classList.remove(e.CSSClasses.yearDisabled))
                : ((t.tabIndex = -1),
                  t.classList.add(e.CSSClasses.yearDisabled)));
          },
          w = (e) => {
            (e.currentType = "month"), v(e), y(e), b(e);
            const t = e.HTMLElement.querySelector(`.${e.CSSClasses.months}`);
            if (
              void 0 === e.selectedMonth ||
              void 0 === e.selectedYear ||
              !e.dateMin ||
              !e.dateMax ||
              !t
            )
              return;
            e.settings.selection.month &&
              t.classList.add(e.CSSClasses.monthsSelecting);
            const n = document.createElement("button");
            (n.type = "button"), (n.className = e.CSSClasses.monthsMonth);
            for (let i = 0; i < e.locale.months.length; i++) {
              const r = e.locale.months[i],
                o = n.cloneNode(!0);
              i === e.selectedMonth &&
                o.classList.add(e.CSSClasses.monthsMonthSelected),
                i < e.dateMin.getUTCMonth() &&
                  e.selectedYear === e.dateMin.getUTCFullYear() &&
                  (o.classList.add(e.CSSClasses.monthsMonthDisabled),
                  (o.tabIndex = -1)),
                i > e.dateMax.getUTCMonth() &&
                  e.selectedYear === e.dateMax.getUTCFullYear() &&
                  (o.classList.add(e.CSSClasses.monthsMonthDisabled),
                  (o.tabIndex = -1)),
                (o.dataset.calendarMonth = String(i)),
                (o.title = `${r}`),
                (o.innerText = `${
                  e.settings.visibility.monthShort ? r.substring(0, 3) : r
                }`),
                t.append(o);
            }
          },
          _ = (e) => {
            const t = Number(e);
            let n = String(t);
            return (
              0 === t
                ? (n = "12")
                : 13 === t
                ? (n = "01")
                : 14 === t
                ? (n = "02")
                : 15 === t
                ? (n = "03")
                : 16 === t
                ? (n = "04")
                : 17 === t
                ? (n = "05")
                : 18 === t
                ? (n = "06")
                : 19 === t
                ? (n = "07")
                : 20 === t
                ? (n = "08")
                : 21 === t
                ? (n = "09")
                : 22 === t
                ? (n = "10")
                : 23 === t && (n = "11"),
              n
            );
          },
          x = (e, t) => {
            const n = Number(e);
            let i = String(n);
            return (
              "AM" === t
                ? 12 === n && (i = "00")
                : "PM" === t &&
                  (1 === n
                    ? (i = "13")
                    : 2 === n
                    ? (i = "14")
                    : 3 === n
                    ? (i = "15")
                    : 4 === n
                    ? (i = "16")
                    : 5 === n
                    ? (i = "17")
                    : 6 === n
                    ? (i = "18")
                    : 7 === n
                    ? (i = "19")
                    : 8 === n
                    ? (i = "20")
                    : 9 === n
                    ? (i = "21")
                    : 10 === n
                    ? (i = "22")
                    : 11 === n && (i = "23")),
              i
            );
          },
          T = (e) => {
            const t = e.HTMLElement.querySelector(`.${e.CSSClasses.time}`);
            if (!t) return;
            const n =
                !0 === e.settings.selection.time
                  ? 12
                  : e.settings.selection.time,
              i = "range" === e.settings.selection.controlTime;
            (t.innerHTML = `\n\t<div class="${
              e.CSSClasses.timeContent
            }">\n\t\t<label class="${
              e.CSSClasses.timeHours
            }">\n\t\t\t<input type="text"\n\t\t\t\tname="hours"\n\t\t\t\tmaxlength="2"\n\t\t\t\tvalue="${
              e.selectedHours
            }"\n\t\t\t\t${
              i ? "disabled" : ""
            }>\n\t\t</label>\n\t\t<label class="${
              e.CSSClasses.timeMinutes
            }">\n\t\t\t<input type="text"\n\t\t\t\tname="minutes"\n\t\t\t\tmaxlength="2"\n\t\t\t\tvalue="${
              e.selectedMinutes
            }"\n\t\t\t\t${i ? "disabled" : ""}>\n\t\t</label>\n\t\t${
              12 === n
                ? `\n\t\t<button type="button"\n\t\t\tclass="${
                    e.CSSClasses.timeKeeping
                  }"\n\t\t\t${i ? "disabled" : ""}>${
                    e.selectedKeeping
                  }</button>\n\t\t`
                : ""
            }\n\t</div>\n\t<div class="${
              e.CSSClasses.timeRanges
            }">\n\t\t<label class="${
              e.CSSClasses.timeRange
            }">\n\t\t\t<input type="range"\n\t\t\t\tname="hours"\n\t\t\t\tmin="0"\n\t\t\t\tmax="23"\n\t\t\t\tstep="${
              e.settings.selection.stepHours
            }"\n\t\t\t\tvalue="${
              e.selectedKeeping
                ? x(e.selectedHours, e.selectedKeeping)
                : e.selectedHours
            }">\n\t\t</label>\n\t\t<label class="${
              e.CSSClasses.timeRange
            }">\n\t\t\t<input type="range"\n\t\t\t\tname="minutes"\n\t\t\t\tmin="0"\n\t\t\t\tmax="59"\n\t\t\t\tstep="${
              e.settings.selection.stepMinutes
            }"\n\t\t\t\tvalue="${e.selectedMinutes}">\n\t\t</label>\n\t</div>`),
              ((e, t) => {
                const n = e.HTMLElement.querySelector(
                    `.${e.CSSClasses.timeRange} input[name="hours"]`
                  ),
                  i = e.HTMLElement.querySelector(
                    `.${e.CSSClasses.timeRange} input[name="minutes"]`
                  ),
                  r = e.HTMLElement.querySelector(
                    `.${e.CSSClasses.timeHours} input[name="hours"]`
                  ),
                  o = e.HTMLElement.querySelector(
                    `.${e.CSSClasses.timeMinutes} input[name="minutes"]`
                  ),
                  s = e.HTMLElement.querySelector(
                    `.${e.CSSClasses.timeKeeping}`
                  ),
                  a = (t, n) => {
                    t.addEventListener("mouseover", () =>
                      n.classList.add(e.CSSClasses.isFocus)
                    );
                  },
                  l = (t, n) => {
                    t.addEventListener("mouseout", () =>
                      n.classList.remove(e.CSSClasses.isFocus)
                    );
                  },
                  c = (t, n, i) => {
                    "hours" === i
                      ? (e.selectedHours = `${n}`)
                      : "minutes" === i && (e.selectedMinutes = `${n}`),
                      (e.selectedTime = `${e.selectedHours}:${
                        e.selectedMinutes
                      }${e.selectedKeeping ? ` ${e.selectedKeeping}` : ""}`),
                      (e.settings.selected.time = e.selectedTime),
                      e.actions.changeTime &&
                        e.actions.changeTime(
                          t,
                          e.selectedTime,
                          e.selectedHours,
                          e.selectedMinutes,
                          e.selectedKeeping
                        );
                  },
                  u = (t, n, i, r) => {
                    t.addEventListener("input", (t) => {
                      let o = Number(t.target.value);
                      (o = o < 10 ? `0${o}` : `${o}`),
                        "hours" === i && 12 === r
                          ? Number(t.target.value) < r &&
                            Number(t.target.value) > 0
                            ? ((n.value = o),
                              (e.selectedKeeping = "AM"),
                              (s.innerText = e.selectedKeeping),
                              c(t, o, i))
                            : (0 === Number(t.target.value)
                                ? ((e.selectedKeeping = "AM"),
                                  (s.innerText = "AM"))
                                : ((e.selectedKeeping = "PM"),
                                  (s.innerText = "PM")),
                              (n.value = _(t.target.value)),
                              c(t, _(t.target.value), i))
                          : ((n.value = o), c(t, o, i));
                    });
                  },
                  d = (t, n, i, r) => {
                    n.addEventListener("change", (n) => {
                      const o = n.target;
                      let a = Number(o.value);
                      (a = a < 10 ? `0${a}` : `${a}`),
                        "hours" === i && 12 === r
                          ? o.value &&
                            Number(o.value) <= r &&
                            Number(o.value) > 0
                            ? ((o.value = a),
                              (t.value = x(a, e.selectedKeeping)),
                              c(n, a, i))
                            : o.value &&
                              Number(o.value) < 24 &&
                              (Number(o.value) > r || 0 === Number(o.value))
                            ? (0 === Number(o.value)
                                ? ((e.selectedKeeping = "AM"),
                                  (s.innerText = "AM"))
                                : ((e.selectedKeeping = "PM"),
                                  (s.innerText = "PM")),
                              (o.value = _(o.value)),
                              (t.value = a),
                              c(n, _(o.value), i))
                            : (o.value = e.selectedHours)
                          : o.value &&
                            Number(o.value) <= r &&
                            Number(o.value) >= 0
                          ? ((o.value = a), (t.value = a), c(n, a, i))
                          : "hours" === i
                          ? (o.value = e.selectedHours)
                          : "minutes" === i && (o.value = e.selectedMinutes);
                    });
                  };
                a(n, r),
                  a(i, o),
                  l(n, r),
                  l(i, o),
                  u(n, r, "hours", 24 === t ? 23 : 12),
                  u(i, o, "minutes", 0),
                  d(n, r, "hours", 24 === t ? 23 : 12),
                  d(i, o, "minutes", 59),
                  s &&
                    s.addEventListener("click", (t) => {
                      s.innerText.includes("AM")
                        ? (e.selectedKeeping = "PM")
                        : (e.selectedKeeping = "AM"),
                        (n.value = x(e.selectedHours, e.selectedKeeping)),
                        c(t, e.selectedHours, "hours"),
                        (s.innerText = e.selectedKeeping);
                    });
              })(e, n);
          },
          C = (e) => {
            if (void 0 === e.viewYear || !e.dateMin || !e.dateMax) return;
            (e.currentType = "year"), v(e), y(e), b(e), n(e);
            const t = e.HTMLElement.querySelector(`.${e.CSSClasses.years}`);
            if (!t) return;
            e.settings.selection.year &&
              t.classList.add(e.CSSClasses.yearsSelecting);
            const i = document.createElement("button");
            (i.type = "button"), (i.className = e.CSSClasses.yearsYear);
            for (let n = e.viewYear - 7; n < e.viewYear + 8; n++) {
              const r = n,
                o = i.cloneNode(!0);
              r === e.selectedYear &&
                o.classList.add(e.CSSClasses.yearsYearSelected),
                r < e.dateMin.getUTCFullYear() &&
                  (o.classList.add(e.CSSClasses.yearsYearDisabled),
                  (o.tabIndex = -1)),
                r > e.dateMax.getUTCFullYear() &&
                  (o.classList.add(e.CSSClasses.yearsYearDisabled),
                  (o.tabIndex = -1)),
                (o.dataset.calendarYear = String(r)),
                (o.innerText = `${r}`),
                t.append(o);
            }
          },
          S = (e) => {
            ((e) => {
              null !== e.settings.selected.dates
                ? (e.selectedDates = e.settings.selected.dates)
                : (e.selectedDates = []),
                null !== e.settings.selected.month &&
                e.settings.selected.month >= 0 &&
                e.settings.selected.month < 12
                  ? (e.selectedMonth = e.settings.selected.month)
                  : (e.selectedMonth = e.date.today.getMonth()),
                null !== e.settings.selected.year &&
                e.settings.selected.year >= 0 &&
                e.settings.selected.year <= 9999
                  ? (e.selectedYear = e.settings.selected.year)
                  : (e.selectedYear = e.date.today.getFullYear()),
                (e.viewYear = e.selectedYear),
                (e.dateMin = e.settings.visibility.disabled
                  ? new Date(e.date.min)
                  : new Date(e.settings.range.min)),
                (e.dateMax = e.settings.visibility.disabled
                  ? new Date(e.date.max)
                  : new Date(e.settings.range.max));
              const t =
                !0 === e.settings.selection.time ||
                12 === e.settings.selection.time;
              if (t || 24 === e.settings.selection.time) {
                if ("string" == typeof e.settings.selected.time) {
                  const n = t
                    ? /^([0-9]|0[1-9]|1[0-2]):([0-5][0-9])|(AM|PM)/g
                    : /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])/g;
                  e.settings.selected.time.replace(
                    n,
                    (n, i, r, o) => (
                      i &&
                        r &&
                        ((e.userTime = !0),
                        (e.selectedHours = i),
                        (e.selectedMinutes = r)),
                      o && t
                        ? (e.selectedKeeping = o)
                        : t && (e.selectedKeeping = "AM"),
                      ""
                    )
                  );
                }
                !e.userTime && t
                  ? ((e.selectedHours = _(String(e.date.today.getHours()))),
                    (e.selectedMinutes = String(e.date.today.getMinutes())),
                    (e.selectedKeeping =
                      Number(e.date.today.getHours()) > 12 ? "PM" : "AM"))
                  : e.userTime ||
                    ((e.selectedHours = String(e.date.today.getHours())),
                    (e.selectedMinutes = String(e.date.today.getMinutes()))),
                  (e.selectedHours =
                    Number(e.selectedHours) < 10
                      ? `0${Number(e.selectedHours)}`
                      : `${e.selectedHours}`),
                  (e.selectedMinutes =
                    Number(e.selectedMinutes) < 10
                      ? `0${Number(e.selectedMinutes)}`
                      : `${e.selectedMinutes}`),
                  (e.selectedTime = `${e.selectedHours}:${e.selectedMinutes}${
                    e.selectedKeeping ? ` ${e.selectedKeeping}` : ""
                  }`);
              } else
                e.settings.selection.time &&
                  ((e.settings.selection.time = !1),
                  console.error(
                    "The value of the time property can be: false, true, 12 or 24."
                  ));
            })(e),
              ((e) => {
                if ("define" !== e.settings.lang) {
                  e.locale.weekday = [];
                  for (let t = 0; t < 7; t++) {
                    let n = new Date(0, 0, t).toLocaleString(e.settings.lang, {
                      weekday: "short",
                    });
                    (n = `${n.charAt(0).toUpperCase()}${n.substring(
                      1,
                      n.length
                    )}`),
                      (n = n.replace(/\./, "")),
                      e.locale.weekday.push(n);
                  }
                  e.locale.months = [];
                  for (let t = 0; t < 12; t++) {
                    let n = new Date(0, t).toLocaleString(e.settings.lang, {
                      month: "long",
                    });
                    (n = `${n.charAt(0).toUpperCase()}${n.substring(
                      1,
                      n.length
                    )}`),
                      (n = n.replace(/\./, "")),
                      e.locale.months.push(n);
                  }
                }
              })(e),
              v(e),
              y(e),
              b(e),
              n(e),
              T(e),
              "default" === e.currentType
                ? (((e) => {
                    const t = [...e.locale.weekday];
                    if (!t[0]) return;
                    const n = e.HTMLElement.querySelector(
                        `.${e.CSSClasses.week}`
                      ),
                      i = document.createElement("b");
                    (i.className = e.CSSClasses.weekDay),
                      e.settings.iso8601 && t.push(t.shift()),
                      (n.innerHTML = "");
                    for (let r = 0; r < t.length; r++) {
                      const o = t[r],
                        s = i.cloneNode(!0);
                      e.settings.visibility.weekend && e.settings.iso8601
                        ? (5 !== r && 6 !== r) ||
                          s.classList.add(e.CSSClasses.weekDayWeekend)
                        : e.settings.visibility.weekend &&
                          !e.settings.iso8601 &&
                          ((0 !== r && 6 !== r) ||
                            s.classList.add(e.CSSClasses.weekDayWeekend)),
                        (s.innerText = `${o}`),
                        n.append(s);
                    }
                  })(e),
                  o(e))
                : "month" === e.currentType
                ? w(e)
                : "year" === e.currentType && C(e);
          },
          k = (e, t) => {
            if (void 0 === e.selectedMonth || void 0 === e.selectedYear) return;
            const i = e.locale.months.length - 1;
            switch (t) {
              case "prev":
                0 !== e.selectedMonth
                  ? (e.selectedMonth -= 1)
                  : e.settings.selection.year &&
                    ((e.selectedYear -= 1), (e.selectedMonth = i));
                break;
              case "next":
                e.selectedMonth !== i
                  ? (e.selectedMonth += 1)
                  : e.settings.selection.year &&
                    ((e.selectedYear += 1), (e.selectedMonth = 0));
            }
            (e.settings.selected.month = e.selectedMonth),
              (e.settings.selected.year = e.selectedYear),
              y(e),
              b(e),
              n(e),
              o(e);
          },
          E = (e) => {
            e.HTMLElement &&
              (S(e),
              ((e) => {
                e.HTMLElement.addEventListener("click", (t) => {
                  const n = t.target,
                    i = n.closest(`.${e.CSSClasses.arrow}`),
                    s = n.closest(`.${e.CSSClasses.arrowPrev}`),
                    a = n.closest(`.${e.CSSClasses.arrowNext}`),
                    l = n.closest(`.${e.CSSClasses.dayBtn}`),
                    c = n.closest(`.${e.CSSClasses.dayBtnPrev}`),
                    u = n.closest(`.${e.CSSClasses.dayBtnNext}`),
                    d = n.closest(`.${e.CSSClasses.year}`),
                    p = n.closest(`.${e.CSSClasses.yearsYear}`),
                    f = n.closest(`.${e.CSSClasses.month}`),
                    h = n.closest(`.${e.CSSClasses.monthsMonth}`);
                  i &&
                    "year" !== e.currentType &&
                    "month" !== e.currentType &&
                    k(e, n.dataset.calendarArrow),
                    i &&
                      e.actions.clickArrow &&
                      e.actions.clickArrow(
                        t,
                        Number(e.selectedYear),
                        Number(e.selectedMonth)
                      ),
                    (() => {
                      if (
                        e.settings.selection.day &&
                        ["single", "multiple", "multiple-ranged"].includes(
                          e.settings.selection.day
                        ) &&
                        l
                      ) {
                        switch (e.settings.selection.day) {
                          case "single":
                            e.selectedDates &&
                              l &&
                              l.dataset.calendarDay &&
                              (l.classList.contains(e.CSSClasses.dayBtnSelected)
                                ? e.selectedDates.splice(
                                    e.selectedDates.indexOf(
                                      l.dataset.calendarDay
                                    ),
                                    1
                                  )
                                : ((e.selectedDates = []),
                                  e.selectedDates.push(l.dataset.calendarDay)));
                            break;
                          case "multiple":
                            e.selectedDates &&
                              l &&
                              l.dataset.calendarDay &&
                              (l.classList.contains(e.CSSClasses.dayBtnSelected)
                                ? e.selectedDates.splice(
                                    e.selectedDates.indexOf(
                                      l.dataset.calendarDay
                                    ),
                                    1
                                  )
                                : e.selectedDates.push(l.dataset.calendarDay));
                            break;
                          case "multiple-ranged":
                            (() => {
                              if (
                                !e.selectedDates ||
                                !l ||
                                !l.dataset.calendarDay
                              )
                                return;
                              if (
                                (e.selectedDates.length > 1 &&
                                  (e.selectedDates = []),
                                e.selectedDates.push(l.dataset.calendarDay),
                                !e.selectedDates[1])
                              )
                                return;
                              const t = new Date(
                                  Date.UTC(
                                    new Date(
                                      e.selectedDates[0]
                                    ).getUTCFullYear(),
                                    new Date(e.selectedDates[0]).getUTCMonth(),
                                    new Date(e.selectedDates[0]).getUTCDate()
                                  )
                                ),
                                n = new Date(
                                  Date.UTC(
                                    new Date(
                                      e.selectedDates[1]
                                    ).getUTCFullYear(),
                                    new Date(e.selectedDates[1]).getUTCMonth(),
                                    new Date(e.selectedDates[1]).getUTCDate()
                                  )
                                ),
                                i = (t) => {
                                  if (!e.selectedDates) return;
                                  const n = r(t);
                                  (e.settings.range.disabled &&
                                    e.settings.range.disabled.includes(n)) ||
                                    e.selectedDates.push(n);
                                };
                              if (((e.selectedDates = []), n > t))
                                for (
                                  let e = t;
                                  e <= n;
                                  e.setUTCDate(e.getUTCDate() + 1)
                                )
                                  i(e);
                              else
                                for (
                                  let e = t;
                                  e >= n;
                                  e.setUTCDate(e.getUTCDate() - 1)
                                )
                                  i(e);
                            })();
                        }
                        e.actions.clickDay &&
                          e.actions.clickDay(t, e.selectedDates),
                          (e.settings.selected.dates = e.selectedDates),
                          c ? k(e, "prev") : u ? k(e, "next") : o(e);
                      }
                    })(),
                    (() => {
                      if (e.settings.selection.year)
                        if (i && "year" === e.currentType) {
                          if (void 0 === e.viewYear) return;
                          a ? (e.viewYear += 15) : s && (e.viewYear -= 15),
                            C(e);
                        } else if ("year" !== e.currentType && d) C(e);
                        else if ("year" === e.currentType && d)
                          (e.currentType = e.type), S(e);
                        else if (p) {
                          if (
                            void 0 === e.selectedMonth ||
                            !e.dateMin ||
                            !e.dateMax
                          )
                            return;
                          (e.selectedYear = Number(p.dataset.calendarYear)),
                            (e.currentType = e.type),
                            e.selectedMonth < e.dateMin.getUTCMonth() &&
                              e.selectedYear === e.dateMin.getUTCFullYear() &&
                              (e.settings.selected.month =
                                e.dateMin.getUTCMonth()),
                            e.selectedMonth > e.dateMax.getUTCMonth() &&
                              e.selectedYear === e.dateMax.getUTCFullYear() &&
                              (e.settings.selected.month =
                                e.dateMax.getUTCMonth()),
                            e.actions.clickYear &&
                              e.actions.clickYear(t, e.selectedYear),
                            (e.settings.selected.year = e.selectedYear),
                            S(e);
                        }
                    })(),
                    e.settings.selection.month &&
                      ("month" !== e.currentType && f
                        ? w(e)
                        : "month" === e.currentType && f
                        ? ((e.currentType = e.type), S(e))
                        : h &&
                          ((e.selectedMonth = Number(h.dataset.calendarMonth)),
                          (e.currentType = e.type),
                          e.actions.clickMonth &&
                            e.actions.clickMonth(t, e.selectedMonth),
                          (e.settings.selected.month = e.selectedMonth),
                          S(e)));
                });
              })(e));
          },
          A = (e) =>
            `\n\t<div class="${e.header}">\n\t\t<#ArrowPrev />\n\t\t<div class="${e.headerContent}">\n\t\t\t<#Month />\n\t\t\t<#Year />\n\t\t</div>\n\t\t<#ArrowNext />\n\t</div>\n\t<div class="${e.wrapper}">\n\t\t<#WeekNumbers />\n\t\t<div class="${e.content}">\n\t\t\t<#Week />\n\t\t\t<#Days />\n\t\t</div>\n\t</div>\n\t<#ControlTime />\n`,
          D = (e) =>
            `\n\t<div class="${e.header}">\n\t\t<div class="${e.headerContent}">\n\t\t\t<#Month />\n\t\t\t<#Year />\n\t\t</div>\n\t</div>\n\t<div class="${e.wrapper}">\n\t\t<div class="${e.content}">\n\t\t\t<#Months />\n\t\t</div>\n\t</div>\n`,
          O = (e) =>
            `\n\t<div class="${e.header}">\n\t\t<#ArrowPrev />\n\t\t<div class="${e.headerContent}">\n\t\t\t<#Month />\n\t\t\t<#Year />\n\t\t</div>\n\t\t<#ArrowNext />\n\t</div>\n\t<div class="${e.wrapper}">\n\t\t<div class="${e.content}">\n\t\t\t<#Years />\n\t\t</div>\n\t</div>\n`,
          M = {
            calendar: "vanilla-calendar",
            calendarDefault: "vanilla-calendar_default",
            calendarMonth: "vanilla-calendar_month",
            calendarYear: "vanilla-calendar_year",
            header: "vanilla-calendar-header",
            headerContent: "vanilla-calendar-header__content",
            month: "vanilla-calendar-month",
            monthDisabled: "vanilla-calendar-month_disabled",
            year: "vanilla-calendar-year",
            yearDisabled: "vanilla-calendar-year_disabled",
            arrow: "vanilla-calendar-arrow",
            arrowPrev: "vanilla-calendar-arrow_prev",
            arrowNext: "vanilla-calendar-arrow_next",
            wrapper: "vanilla-calendar-wrapper",
            content: "vanilla-calendar-content",
            week: "vanilla-calendar-week",
            weekDay: "vanilla-calendar-week__day",
            weekDayWeekend: "vanilla-calendar-week__day_weekend",
            days: "vanilla-calendar-days",
            daysSelecting: "vanilla-calendar-days_selecting",
            months: "vanilla-calendar-months",
            monthsSelecting: "vanilla-calendar-months_selecting",
            monthsMonth: "vanilla-calendar-months__month",
            monthsMonthSelected: "vanilla-calendar-months__month_selected",
            monthsMonthDisabled: "vanilla-calendar-months__month_disabled",
            years: "vanilla-calendar-years",
            yearsSelecting: "vanilla-calendar-years_selecting",
            yearsYear: "vanilla-calendar-years__year",
            yearsYearSelected: "vanilla-calendar-years__year_selected",
            yearsYearDisabled: "vanilla-calendar-years__year_disabled",
            time: "vanilla-calendar-time",
            timeContent: "vanilla-calendar-time__content",
            timeHours: "vanilla-calendar-time__hours",
            timeMinutes: "vanilla-calendar-time__minutes",
            timeKeeping: "vanilla-calendar-time__keeping",
            timeRanges: "vanilla-calendar-time__ranges",
            timeRange: "vanilla-calendar-time__range",
            day: "vanilla-calendar-day",
            dayPopup: "vanilla-calendar-day__popup",
            dayBtn: "vanilla-calendar-day__btn",
            dayBtnPrev: "vanilla-calendar-day__btn_prev",
            dayBtnNext: "vanilla-calendar-day__btn_next",
            dayBtnToday: "vanilla-calendar-day__btn_today",
            dayBtnSelected: "vanilla-calendar-day__btn_selected",
            dayBtnDisabled: "vanilla-calendar-day__btn_disabled",
            dayBtnIntermediate: "vanilla-calendar-day__btn_intermediate",
            dayBtnWeekend: "vanilla-calendar-day__btn_weekend",
            dayBtnHoliday: "vanilla-calendar-day__btn_holiday",
            weekNumbers: "vanilla-calendar-week-numbers",
            weekNumbersTitle: "vanilla-calendar-week-numbers__title",
            weekNumbersContent: "vanilla-calendar-week-numbers__content",
            weekNumber: "vanilla-calendar-week-number",
            isFocus: "vanilla-calendar-is-focus",
          };
        var L = Object.defineProperty,
          j = Object.getOwnPropertySymbols,
          $ = Object.prototype.hasOwnProperty,
          P = Object.prototype.propertyIsEnumerable,
          N = (e, t, n) =>
            t in e
              ? L(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n);
        class H {
          constructor(e, t) {
            var n,
              i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              m,
              g,
              v,
              y,
              b,
              w,
              _,
              x,
              T,
              C,
              k,
              L,
              H,
              I,
              q,
              F,
              R,
              B,
              z,
              W,
              Y,
              U,
              X,
              V,
              Q,
              K,
              G,
              Z,
              J,
              ee,
              te,
              ne,
              ie,
              re,
              oe,
              se,
              ae,
              le,
              ce,
              ue,
              de,
              pe,
              fe,
              he,
              me,
              ge,
              ve,
              ye,
              be,
              we,
              _e,
              xe,
              Te,
              Ce,
              Se,
              ke,
              Ee,
              Ae,
              De,
              Oe,
              Me,
              Le,
              je,
              $e,
              Pe,
              Ne,
              He,
              Ie,
              qe,
              Fe,
              Re,
              Be,
              ze,
              We,
              Ye,
              Ue,
              Xe,
              Ve,
              Qe,
              Ke,
              Ge,
              Ze;
            (this.update = () => S(this)),
              (this.init = () => E(this)),
              (this.HTMLElement =
                "string" == typeof e ? document.querySelector(e) : e),
              this.HTMLElement &&
                ((this.type =
                  null != (n = null == t ? void 0 : t.type) ? n : "default"),
                (this.date = {
                  min:
                    null !=
                    (r =
                      null == (i = null == t ? void 0 : t.date)
                        ? void 0
                        : i.min)
                      ? r
                      : "1970-01-01",
                  max:
                    null !=
                    (s =
                      null == (o = null == t ? void 0 : t.date)
                        ? void 0
                        : o.max)
                      ? s
                      : "2470-12-31",
                  today:
                    null !=
                    (l =
                      null == (a = null == t ? void 0 : t.date)
                        ? void 0
                        : a.today)
                      ? l
                      : new Date(),
                }),
                (this.settings = {
                  lang:
                    null !=
                    (u =
                      null == (c = null == t ? void 0 : t.settings)
                        ? void 0
                        : c.lang)
                      ? u
                      : "en",
                  iso8601:
                    null ==
                      (p =
                        null == (d = null == t ? void 0 : t.settings)
                          ? void 0
                          : d.iso8601) || p,
                  range: {
                    min:
                      null !=
                      (m =
                        null ==
                        (h =
                          null == (f = null == t ? void 0 : t.settings)
                            ? void 0
                            : f.range)
                          ? void 0
                          : h.min)
                        ? m
                        : "1970-01-01",
                    max:
                      null !=
                      (y =
                        null ==
                        (v =
                          null == (g = null == t ? void 0 : t.settings)
                            ? void 0
                            : g.range)
                          ? void 0
                          : v.max)
                        ? y
                        : "2470-12-31",
                    disabled:
                      null !=
                      (_ =
                        null ==
                        (w =
                          null == (b = null == t ? void 0 : t.settings)
                            ? void 0
                            : b.range)
                          ? void 0
                          : w.disabled)
                        ? _
                        : null,
                    enabled:
                      null !=
                      (C =
                        null ==
                        (T =
                          null == (x = null == t ? void 0 : t.settings)
                            ? void 0
                            : x.range)
                          ? void 0
                          : T.enabled)
                        ? C
                        : null,
                  },
                  selection: {
                    day:
                      null !=
                      (H =
                        null ==
                        (L =
                          null == (k = null == t ? void 0 : t.settings)
                            ? void 0
                            : k.selection)
                          ? void 0
                          : L.day)
                        ? H
                        : "single",
                    month:
                      null ==
                        (F =
                          null ==
                          (q =
                            null == (I = null == t ? void 0 : t.settings)
                              ? void 0
                              : I.selection)
                            ? void 0
                            : q.month) || F,
                    year:
                      null ==
                        (z =
                          null ==
                          (B =
                            null == (R = null == t ? void 0 : t.settings)
                              ? void 0
                              : R.selection)
                            ? void 0
                            : B.year) || z,
                    time:
                      null !=
                        (U =
                          null ==
                          (Y =
                            null == (W = null == t ? void 0 : t.settings)
                              ? void 0
                              : W.selection)
                            ? void 0
                            : Y.time) && U,
                    controlTime:
                      null !=
                      (Q =
                        null ==
                        (V =
                          null == (X = null == t ? void 0 : t.settings)
                            ? void 0
                            : X.selection)
                          ? void 0
                          : V.controlTime)
                        ? Q
                        : "all",
                    stepHours:
                      null !=
                      (Z =
                        null ==
                        (G =
                          null == (K = null == t ? void 0 : t.settings)
                            ? void 0
                            : K.selection)
                          ? void 0
                          : G.stepHours)
                        ? Z
                        : 1,
                    stepMinutes:
                      null !=
                      (te =
                        null ==
                        (ee =
                          null == (J = null == t ? void 0 : t.settings)
                            ? void 0
                            : J.selection)
                          ? void 0
                          : ee.stepMinutes)
                        ? te
                        : 1,
                  },
                  selected: {
                    dates:
                      null !=
                      (re =
                        null ==
                        (ie =
                          null == (ne = null == t ? void 0 : t.settings)
                            ? void 0
                            : ne.selected)
                          ? void 0
                          : ie.dates)
                        ? re
                        : null,
                    month:
                      null !=
                      (ae =
                        null ==
                        (se =
                          null == (oe = null == t ? void 0 : t.settings)
                            ? void 0
                            : oe.selected)
                          ? void 0
                          : se.month)
                        ? ae
                        : null,
                    year:
                      null !=
                      (ue =
                        null ==
                        (ce =
                          null == (le = null == t ? void 0 : t.settings)
                            ? void 0
                            : le.selected)
                          ? void 0
                          : ce.year)
                        ? ue
                        : null,
                    holidays:
                      null !=
                      (fe =
                        null ==
                        (pe =
                          null == (de = null == t ? void 0 : t.settings)
                            ? void 0
                            : de.selected)
                          ? void 0
                          : pe.holidays)
                        ? fe
                        : null,
                    time:
                      null !=
                      (ge =
                        null ==
                        (me =
                          null == (he = null == t ? void 0 : t.settings)
                            ? void 0
                            : he.selected)
                          ? void 0
                          : me.time)
                        ? ge
                        : null,
                  },
                  visibility: {
                    monthShort:
                      null ==
                        (be =
                          null ==
                          (ye =
                            null == (ve = null == t ? void 0 : t.settings)
                              ? void 0
                              : ve.visibility)
                            ? void 0
                            : ye.monthShort) || be,
                    weekNumbers:
                      null !=
                        (xe =
                          null ==
                          (_e =
                            null == (we = null == t ? void 0 : t.settings)
                              ? void 0
                              : we.visibility)
                            ? void 0
                            : _e.weekNumbers) && xe,
                    weekend:
                      null ==
                        (Se =
                          null ==
                          (Ce =
                            null == (Te = null == t ? void 0 : t.settings)
                              ? void 0
                              : Te.visibility)
                            ? void 0
                            : Ce.weekend) || Se,
                    today:
                      null ==
                        (Ae =
                          null ==
                          (Ee =
                            null == (ke = null == t ? void 0 : t.settings)
                              ? void 0
                              : ke.visibility)
                            ? void 0
                            : Ee.today) || Ae,
                    disabled:
                      null !=
                        (Me =
                          null ==
                          (Oe =
                            null == (De = null == t ? void 0 : t.settings)
                              ? void 0
                              : De.visibility)
                            ? void 0
                            : Oe.disabled) && Me,
                  },
                }),
                (this.locale = {
                  months:
                    null !=
                    (je =
                      null == (Le = null == t ? void 0 : t.locale)
                        ? void 0
                        : Le.months)
                      ? je
                      : [],
                  weekday:
                    null !=
                    (Pe =
                      null == ($e = null == t ? void 0 : t.locale)
                        ? void 0
                        : $e.weekday)
                      ? Pe
                      : [],
                }),
                (this.actions = {
                  clickDay:
                    null !=
                    (He =
                      null == (Ne = null == t ? void 0 : t.actions)
                        ? void 0
                        : Ne.clickDay)
                      ? He
                      : null,
                  clickMonth:
                    null !=
                    (qe =
                      null == (Ie = null == t ? void 0 : t.actions)
                        ? void 0
                        : Ie.clickMonth)
                      ? qe
                      : null,
                  clickYear:
                    null !=
                    (Re =
                      null == (Fe = null == t ? void 0 : t.actions)
                        ? void 0
                        : Fe.clickYear)
                      ? Re
                      : null,
                  clickArrow:
                    null !=
                    (ze =
                      null == (Be = null == t ? void 0 : t.actions)
                        ? void 0
                        : Be.clickArrow)
                      ? ze
                      : null,
                  changeTime:
                    null !=
                    (Ye =
                      null == (We = null == t ? void 0 : t.actions)
                        ? void 0
                        : We.changeTime)
                      ? Ye
                      : null,
                }),
                (this.popups =
                  null != (Ue = null == t ? void 0 : t.popups) ? Ue : null),
                (this.CSSClasses = (() => {
                  const e = ((e, t) => {
                    for (var n in t || (t = {})) $.call(t, n) && N(e, n, t[n]);
                    if (j) for (var n of j(t)) P.call(t, n) && N(e, n, t[n]);
                    return e;
                  })({}, M);
                  return (
                    Object.keys(M).forEach((n) => {
                      var i;
                      (
                        null == (i = null == t ? void 0 : t.CSSClasses)
                          ? void 0
                          : i[n]
                      )
                        ? (e[n] = t.CSSClasses[n])
                        : (e[n] = M[n]);
                    }),
                    e
                  );
                })()),
                (this.DOMTemplates = {
                  default:
                    null !=
                    (Ve =
                      null == (Xe = null == t ? void 0 : t.DOMTemplates)
                        ? void 0
                        : Xe.default)
                      ? Ve
                      : A(this.CSSClasses),
                  month:
                    null !=
                    (Ke =
                      null == (Qe = null == t ? void 0 : t.DOMTemplates)
                        ? void 0
                        : Qe.month)
                      ? Ke
                      : D(this.CSSClasses),
                  year:
                    null !=
                    (Ze =
                      null == (Ge = null == t ? void 0 : t.DOMTemplates)
                        ? void 0
                        : Ge.year)
                      ? Ze
                      : O(this.CSSClasses),
                }),
                (this.currentType = this.type),
                (this.selectedKeeping = null),
                (this.userTime = !1));
          }
        }
        window.VanillaCalendar = H;
        const I = H;
        return t;
      })()
    ),
  (function (e) {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      new VanillaCalendar(".vanilla-calendar").init();
    }),
      e(window).scroll(function () {
        e(this).scrollTop() > 200
          ? e(".backtotop:hidden").stop(!0, !0).fadeIn()
          : e(".backtotop").stop(!0, !0).fadeOut();
      }),
      e(function () {
        e(".scroll").on("click", function () {
          return e("html,body").animate({ scrollTop: 0 }, "slow"), !1;
        });
      }),
      e(window).on("scroll", function () {
        e(this).scrollTop() > 0
          ? e(".site_header").addClass("sticky")
          : e(".site_header").removeClass("sticky");
      }),
      e(document).ready(function () {
        e(".offCanvas_close_btn, .offCanvas_overlay").on("click", function () {
          e(".filter_offcanvas.position-fixed").removeClass("active"),
            e(".offCanvas_overlay").removeClass("active");
        }),
          e(".offCanvas_open_btn").on("click", function () {
            e(".filter_offcanvas.position-fixed").addClass("active"),
              e(".offCanvas_overlay").addClass("active");
          });
      }),
      new WOW({
        animateClass: "animated",
        offset: 100,
        mobile: !0,
        duration: 400,
      }).init(),
      e(".tilt").tilt({
        maxTilt: 12,
        perspective: 1e3,
        scale: 1,
        speed: 1e3,
        glare: !1,
        maxGlare: 1,
      }),
      e(document).ready(function () {
        e(".dropdown").on("mouseover", function () {
          e(this).find("> .dropdown-menu").addClass("show");
        }),
          e(".dropdown").on("mouseout", function () {
            e(this).find("> .dropdown-menu").removeClass("show");
          });
      }),
      e(".counter_value_text").counterUp({ delay: 10, time: 1e3 }),
      e(".mouse_move").parallax({ scalarX: 10, scalarY: 10 }),
      e(".popup_video").magnificPopup({
        type: "iframe",
        preloader: !1,
        removalDelay: 160,
        mainClass: "mfp-fade",
        fixedContentPos: !1,
      }),
      e(".zoom-gallery").magnificPopup({
        delegate: ".popup_image",
        type: "image",
        closeOnContentClick: !1,
        closeBtnInside: !1,
        mainClass: "mfp-with-zoom mfp-img-mobile",
        gallery: { enabled: !0 },
        zoom: {
          enabled: !0,
          duration: 300,
          opener: function (e) {
            return e.find("img");
          },
        },
      }),
      e(".countdown_timer").each(function () {
        e("[data-countdown]").each(function () {
          var t = e(this),
            n = e(this).data("countdown");
          t.countdown(n, function (t) {
            e(this).html(
              t.strftime(
                '<li class="days_count"><strong>%D</strong><span>Days</span></li><li class="hours_count"><strong>%H</strong><span>Hours</span></li><li class="minutes_count"><strong>%M</strong><span>Mins</span></li><li class="seconds_count"><strong>%S</strong><span>Secs</span></li>'
              )
            );
          });
        });
      }),
      e(".common_carousel_1col").slick({
        dots: !0,
        speed: 1e3,
        arrows: !0,
        infinite: !0,
        autoplay: !0,
        slidesToShow: 1,
        pauseOnHover: !0,
        autoplaySpeed: 5e3,
        prevArrow: ".cc1c_left_arrow",
        nextArrow: ".cc1c_right_arrow",
      }),
      e(".common_carousel_2col").slick({
        dots: !0,
        speed: 1e3,
        arrows: !0,
        infinite: !0,
        autoplay: !0,
        slidesToShow: 2,
        slidesToScroll: 2,
        pauseOnHover: !0,
        autoplaySpeed: 5e3,
        prevArrow: ".cc2c_left_arrow",
        nextArrow: ".cc2c_right_arrow",
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      });
  })(jQuery),
  (function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var r = (t[i] = { i: i, l: !1, exports: {} });
      return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              i,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return i;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0));
  })({
    "./source/js/floatButton.js":
      /*!**********************************!*\
      !*** ./source/js/floatButton.js ***!
      \**********************************/
      /*! exports provided: floatButton */ function (
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
      },
  });

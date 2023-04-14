(() => {
    "use strict";
    var e = {
        341: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(655).__exportStar(r(575), t);
        },
        575: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleEvent = void 0;
            const n = r(380);
            t.handleEvent = async function(e) {
                const t = new n.Transfers(`${e.tx.hash}-${e.msg.idx}-${e.idx}`);
                t.blockHeight = BigInt(e.block.block.header.height), t.txHash = e.tx.hash, t.fromAddress = e.msg.msg.decodedMsg.fromAddress, 
                t.toAddress = e.msg.msg.decodedMsg.toAddress, t.amount = e.msg.msg.decodedMsg.amount, 
                await t.save();
            };
        },
        380: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(655).__exportStar(r(980), t);
        },
        534: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Transfers = void 0;
            const n = r(655).__importDefault(r(491));
            t.Transfers = class {
                constructor(e) {
                    this.id = e;
                }
                async save() {
                    let e = this.id;
                    (0, n.default)(null !== e, "Cannot save Transfers entity without an ID"), await store.set("Transfers", e.toString(), this);
                }
                static async remove(e) {
                    (0, n.default)(null !== e, "Cannot remove Transfers entity without an ID"), await store.remove("Transfers", e.toString());
                }
                static async get(e) {
                    (0, n.default)(null != e, "Cannot get Transfers entity without an ID");
                    const t = await store.get("Transfers", e.toString());
                    return t ? this.create(t) : void 0;
                }
                static create(e) {
                    (0, n.default)("string" == typeof e.id, "id must be provided");
                    let t = new this(e.id);
                    return Object.assign(t, e), t;
                }
            };
        },
        980: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Transfers = void 0;
            var n = r(534);
            Object.defineProperty(t, "Transfers", {
                enumerable: !0,
                get: function() {
                    return n.Transfers;
                }
            });
        },
        655: (e, t, r) => {
            r.r(t), r.d(t, {
                __assign: () => a,
                __asyncDelegator: () => x,
                __asyncGenerator: () => P,
                __asyncValues: () => S,
                __await: () => j,
                __awaiter: () => y,
                __classPrivateFieldGet: () => A,
                __classPrivateFieldIn: () => k,
                __classPrivateFieldSet: () => D,
                __createBinding: () => h,
                __decorate: () => c,
                __esDecorate: () => s,
                __exportStar: () => b,
                __extends: () => o,
                __generator: () => v,
                __importDefault: () => M,
                __importStar: () => I,
                __makeTemplateObject: () => T,
                __metadata: () => d,
                __param: () => u,
                __propKey: () => f,
                __read: () => w,
                __rest: () => i,
                __runInitializers: () => l,
                __setFunctionName: () => p,
                __spread: () => m,
                __spreadArray: () => O,
                __spreadArrays: () => g,
                __values: () => _
            });
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }, n(e, t);
            };
            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function r() {
                    this.constructor = e;
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, 
                new r);
            }
            var a = function() {
                return a = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }, a.apply(this, arguments);
            };
            function i(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                }
                return r;
            }
            function c(e, t, r, n) {
                var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
                return a > 3 && i && Object.defineProperty(t, r, i), i;
            }
            function u(e, t) {
                return function(r, n) {
                    t(r, n, e);
                };
            }
            function s(e, t, r, n, o, a) {
                function i(e) {
                    if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
                    return e;
                }
                for (var c, u = n.kind, s = "getter" === u ? "get" : "setter" === u ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
                    var y = {};
                    for (var v in n) y[v] = "access" === v ? {} : n[v];
                    for (var v in n.access) y.access[v] = n.access[v];
                    y.addInitializer = function(e) {
                        if (p) throw new TypeError("Cannot add initializers after decoration has completed");
                        a.push(i(e || null));
                    };
                    var h = (0, r[d])("accessor" === u ? {
                        get: f.get,
                        set: f.set
                    } : f[s], y);
                    if ("accessor" === u) {
                        if (void 0 === h) continue;
                        if (null === h || "object" != typeof h) throw new TypeError("Object expected");
                        (c = i(h.get)) && (f.get = c), (c = i(h.set)) && (f.set = c), (c = i(h.init)) && o.push(c);
                    } else (c = i(h)) && ("field" === u ? o.push(c) : f[s] = c);
                }
                l && Object.defineProperty(l, n.name, f), p = !0;
            }
            function l(e, t, r) {
                for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
                return n ? r : void 0;
            }
            function f(e) {
                return "symbol" == typeof e ? e : "".concat(e);
            }
            function p(e, t, r) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), 
                Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", t) : t
                });
            }
            function d(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            }
            function y(e, t, r, n) {
                return new (r || (r = Promise))((function(o, a) {
                    function i(e) {
                        try {
                            u(n.next(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function c(e) {
                        try {
                            u(n.throw(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t);
                        }))).then(i, c);
                    }
                    u((n = n.apply(e, t || [])).next());
                }));
            }
            function v(e, t) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this;
                }), a;
                function c(c) {
                    return function(u) {
                        return function(c) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (;a && (a = 0, c[0] && (i = 0)), i; ) try {
                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 
                                0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                switch (n = 0, o && (c = [ 2 & c[0], o.value ]), c[0]) {
                                  case 0:
                                  case 1:
                                    o = c;
                                    break;

                                  case 4:
                                    return i.label++, {
                                        value: c[1],
                                        done: !1
                                    };

                                  case 5:
                                    i.label++, n = c[1], c = [ 0 ];
                                    continue;

                                  case 7:
                                    c = i.ops.pop(), i.trys.pop();
                                    continue;

                                  default:
                                    if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        i = 0;
                                        continue;
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        i.label = c[1];
                                        break;
                                    }
                                    if (6 === c[0] && i.label < o[1]) {
                                        i.label = o[1], o = c;
                                        break;
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(c);
                                        break;
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                c = t.call(e, i);
                            } catch (e) {
                                c = [ 6, e ], n = 0;
                            } finally {
                                r = o = 0;
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            };
                        }([ c, u ]);
                    };
                }
            }
            var h = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, n, o);
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r];
            };
            function b(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || h(t, e, r);
            }
            function _(e) {
                var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        };
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function w(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, a = r.call(e), i = [];
                try {
                    for (;(void 0 === t || t-- > 0) && !(n = a.next()).done; ) i.push(n.value);
                } catch (e) {
                    o = {
                        error: e
                    };
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                return i;
            }
            function m() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
                return e;
            }
            function g() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e), o = 0;
                for (t = 0; t < r; t++) for (var a = arguments[t], i = 0, c = a.length; i < c; i++, 
                o++) n[o] = a[i];
                return n;
            }
            function O(e, t, r) {
                if (r || 2 === arguments.length) for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), 
                n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t));
            }
            function j(e) {
                return this instanceof j ? (this.v = e, this) : new j(e);
            }
            function P(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []), a = [];
                return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
                    return this;
                }, n;
                function i(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            a.push([ e, t, r, n ]) > 1 || c(e, t);
                        }));
                    });
                }
                function c(e, t) {
                    try {
                        (r = o[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(u, s) : l(a[0][2], r);
                    } catch (e) {
                        l(a[0][3], e);
                    }
                    var r;
                }
                function u(e) {
                    c("next", e);
                }
                function s(e) {
                    c("throw", e);
                }
                function l(e, t) {
                    e(t), a.shift(), a.length && c(a[0][0], a[0][1]);
                }
            }
            function x(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e;
                })), n("return"), t[Symbol.iterator] = function() {
                    return this;
                }, t;
                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: j(e[n](t)),
                            done: !1
                        } : o ? o(t) : t;
                    } : o;
                }
            }
            function S(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = _(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this;
                }, t);
                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, o) {
                            (function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    });
                                }), t);
                            })(n, o, (t = e[r](t)).done, t.value);
                        }));
                    };
                }
            }
            function T(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e;
            }
            var E = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                });
            } : function(e, t) {
                e.default = t;
            };
            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && h(t, e, r);
                return E(t, e), t;
            }
            function M(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function A(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
            }
            function D(e, t, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
            }
            function k(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t);
            }
        },
        491: e => {
            e.exports = require("assert");
        }
    }, t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, r), a.exports;
    }
    r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        });
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    };
    var n = r(341), o = exports;
    for (var a in n) o[a] = n[a];
    n.__esModule && Object.defineProperty(o, "__esModule", {
        value: !0
    });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhQyxJQUFRQSxFQUFNQyxJQUFJRjtBQUN4RTs7O1lDcFNBSyxFQUFPM0wsVUFBVTRMLFFBQVE7O09DQ3JCQyxJQUEyQixDQUFDO0lBR2hDLFNBQVNDLEVBQW9CQztRQUU1QixJQUFJQyxJQUFlSCxFQUF5QkU7UUFDNUMsU0FBcUI3QyxNQUFqQjhDLEdBQ0gsT0FBT0EsRUFBYWhNO1FBR3JCLElBQUkyTCxJQUFTRSxFQUF5QkUsS0FBWTtZQUdqRC9MLFNBQVMsQ0FBQzs7UUFPWCxPQUhBaU0sRUFBb0JGLEdBQVVKLEdBQVFBLEVBQU8zTCxTQUFTOEwsSUFHL0NILEVBQU8zTDtBQUNmO0lDckJBOEwsRUFBb0JuSixJQUFJLENBQUMzQyxHQUFTa007UUFDakMsS0FBSSxJQUFJMUgsS0FBTzBILEdBQ1hKLEVBQW9CaEQsRUFBRW9ELEdBQVkxSCxPQUFTc0gsRUFBb0JoRCxFQUFFOUksR0FBU3dFLE1BQzVFMUUsT0FBT0MsZUFBZUMsR0FBU3dFLEdBQUs7WUFBRS9CLGFBQVk7WUFBTUwsS0FBSzhKLEVBQVcxSDs7QUFFMUUsT0NORHNILEVBQW9CaEQsSUFBSSxDQUFDcUQsR0FBS0MsTUFBVXRNLE9BQU9tRCxVQUFVQyxlQUFlQyxLQUFLZ0osR0FBS0MsSUNDbEZOLEVBQW9CbkgsSUFBSzNFO1FBQ0gsc0JBQVh3SSxVQUEwQkEsT0FBTzZELGVBQzFDdk0sT0FBT0MsZUFBZUMsR0FBU3dJLE9BQU82RCxhQUFhO1lBQUVwTSxPQUFPO1lBRTdESCxPQUFPQyxlQUFlQyxHQUFTLGNBQWM7WUFBRUMsUUFBTzs7QUFBTztJQ0Y5RCxJQUFJcU0sSUFBc0JSLEVBQW9CLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXZhLXN0YXJ0ZXIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va2F2YS1zdGFydGVyLy4vc3JjL21hcHBpbmdzL21hcHBpbmdIYW5kbGVycy50cyIsIndlYnBhY2s6Ly9rYXZhLXN0YXJ0ZXIvLi9zcmMvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va2F2YS1zdGFydGVyLy4vc3JjL3R5cGVzL21vZGVscy9UcmFuc2ZlcnMudHMiLCJ3ZWJwYWNrOi8va2F2YS1zdGFydGVyLy4vc3JjL3R5cGVzL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly9rYXZhLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL2thdmEtc3RhcnRlci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8va2F2YS1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2thdmEtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2F2YS1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2F2YS1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2F2YS1zdGFydGVyL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG4vL0V4cG9ydHMgYWxsIGhhbmRsZXIgZnVuY3Rpb25zXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9tYXBwaW5ncy9tYXBwaW5nSGFuZGxlcnNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUV2ZW50ID0gdm9pZCAwO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgbmV3VHJhbnNmZXJzID0gbmV3IHR5cGVzXzEuVHJhbnNmZXJzKGAke2V2ZW50LnR4Lmhhc2h9LSR7ZXZlbnQubXNnLmlkeH0tJHtldmVudC5pZHh9YCk7XG4gICAgbmV3VHJhbnNmZXJzLmJsb2NrSGVpZ2h0ID0gQmlnSW50KGV2ZW50LmJsb2NrLmJsb2NrLmhlYWRlci5oZWlnaHQpO1xuICAgIG5ld1RyYW5zZmVycy50eEhhc2ggPSBldmVudC50eC5oYXNoO1xuICAgIG5ld1RyYW5zZmVycy5mcm9tQWRkcmVzcyA9IGV2ZW50Lm1zZy5tc2cuZGVjb2RlZE1zZy5mcm9tQWRkcmVzcztcbiAgICBuZXdUcmFuc2ZlcnMudG9BZGRyZXNzID0gZXZlbnQubXNnLm1zZy5kZWNvZGVkTXNnLnRvQWRkcmVzcztcbiAgICBuZXdUcmFuc2ZlcnMuYW1vdW50ID0gZXZlbnQubXNnLm1zZy5kZWNvZGVkTXNnLmFtb3VudDtcbiAgICBhd2FpdCBuZXdUcmFuc2ZlcnMuc2F2ZSgpO1xufVxuZXhwb3J0cy5oYW5kbGVFdmVudCA9IGhhbmRsZUV2ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbi8vIEF1dG8tZ2VuZXJhdGVkICwgRE8gTk9UIEVESVRcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZGVsc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVHJhbnNmZXJzID0gdm9pZCAwO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGFzc2VydF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImFzc2VydFwiKSk7XG5jbGFzcyBUcmFuc2ZlcnMge1xuICAgIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG4gICAgYXN5bmMgc2F2ZSgpIHtcbiAgICAgICAgbGV0IGlkID0gdGhpcy5pZDtcbiAgICAgICAgKDAsIGFzc2VydF8xLmRlZmF1bHQpKGlkICE9PSBudWxsLCBcIkNhbm5vdCBzYXZlIFRyYW5zZmVycyBlbnRpdHkgd2l0aG91dCBhbiBJRFwiKTtcbiAgICAgICAgYXdhaXQgc3RvcmUuc2V0KCdUcmFuc2ZlcnMnLCBpZC50b1N0cmluZygpLCB0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIHJlbW92ZShpZCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuZGVmYXVsdCkoaWQgIT09IG51bGwsIFwiQ2Fubm90IHJlbW92ZSBUcmFuc2ZlcnMgZW50aXR5IHdpdGhvdXQgYW4gSURcIik7XG4gICAgICAgIGF3YWl0IHN0b3JlLnJlbW92ZSgnVHJhbnNmZXJzJywgaWQudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBnZXQoaWQpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmRlZmF1bHQpKChpZCAhPT0gbnVsbCAmJiBpZCAhPT0gdW5kZWZpbmVkKSwgXCJDYW5ub3QgZ2V0IFRyYW5zZmVycyBlbnRpdHkgd2l0aG91dCBhbiBJRFwiKTtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgc3RvcmUuZ2V0KCdUcmFuc2ZlcnMnLCBpZC50b1N0cmluZygpKTtcbiAgICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJlY29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShyZWNvcmQpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmRlZmF1bHQpKHR5cGVvZiByZWNvcmQuaWQgPT09ICdzdHJpbmcnLCBcImlkIG11c3QgYmUgcHJvdmlkZWRcIik7XG4gICAgICAgIGxldCBlbnRpdHkgPSBuZXcgdGhpcyhyZWNvcmQuaWQpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVudGl0eSwgcmVjb3JkKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG59XG5leHBvcnRzLlRyYW5zZmVycyA9IFRyYW5zZmVycztcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVHJhbnNmZXJzID0gdm9pZCAwO1xuLy8gQXV0by1nZW5lcmF0ZWQgLCBETyBOT1QgRURJVFxudmFyIFRyYW5zZmVyc18xID0gcmVxdWlyZShcIi4vVHJhbnNmZXJzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVHJhbnNmZXJzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBUcmFuc2ZlcnNfMS5UcmFuc2ZlcnM7IH0gfSk7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xyXG4gICAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XHJcbiAgICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xyXG4gICAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XHJcbiAgICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcclxuICAgIHZhciBfLCBkb25lID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XHJcbiAgICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcclxuICAgICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMucHVzaChfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy5wdXNoKF8pO1xyXG4gICAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xyXG4gICAgZG9uZSA9IHRydWU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xyXG4gICAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNDEpO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX19leHBvcnRTdGFyIiwiaGFuZGxlRXZlbnQiLCJ0eXBlc18xIiwiYXN5bmMiLCJldmVudCIsIm5ld1RyYW5zZmVycyIsIlRyYW5zZmVycyIsInR4IiwiaGFzaCIsIm1zZyIsImlkeCIsImJsb2NrSGVpZ2h0IiwiQmlnSW50IiwiYmxvY2siLCJoZWFkZXIiLCJoZWlnaHQiLCJ0eEhhc2giLCJmcm9tQWRkcmVzcyIsImRlY29kZWRNc2ciLCJ0b0FkZHJlc3MiLCJhbW91bnQiLCJzYXZlIiwiYXNzZXJ0XzEiLCJfX2ltcG9ydERlZmF1bHQiLCJjb25zdHJ1Y3RvciIsImlkIiwidGhpcyIsImRlZmF1bHQiLCJzdG9yZSIsInNldCIsInRvU3RyaW5nIiwic3RhdGljIiwicmVtb3ZlIiwicmVjb3JkIiwiZ2V0IiwiY3JlYXRlIiwiZW50aXR5IiwiYXNzaWduIiwiVHJhbnNmZXJzXzEiLCJlbnVtZXJhYmxlIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfX2V4dGVuZHMiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsIl9fYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwiX19yZXN0IiwiZSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiX19wYXJhbSIsInBhcmFtSW5kZXgiLCJkZWNvcmF0b3IiLCJfX2VzRGVjb3JhdGUiLCJjdG9yIiwiZGVzY3JpcHRvckluIiwiY29udGV4dEluIiwiaW5pdGlhbGl6ZXJzIiwiZXh0cmFJbml0aWFsaXplcnMiLCJhY2NlcHQiLCJmIiwiXyIsImtpbmQiLCJkZXNjcmlwdG9yIiwibmFtZSIsImRvbmUiLCJjb250ZXh0IiwiYWNjZXNzIiwiYWRkSW5pdGlhbGl6ZXIiLCJwdXNoIiwicmVzdWx0IiwiaW5pdCIsIl9fcnVuSW5pdGlhbGl6ZXJzIiwidGhpc0FyZyIsInVzZVZhbHVlIiwiX19wcm9wS2V5IiwieCIsImNvbmNhdCIsIl9fc2V0RnVuY3Rpb25OYW1lIiwicHJlZml4IiwiZGVzY3JpcHRpb24iLCJjb25maWd1cmFibGUiLCJfX21ldGFkYXRhIiwibWV0YWRhdGFLZXkiLCJtZXRhZGF0YVZhbHVlIiwibWV0YWRhdGEiLCJfX2F3YWl0ZXIiLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInRoZW4iLCJfX2dlbmVyYXRvciIsImJvZHkiLCJ5IiwiZyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJwb3AiLCJfX2NyZWF0ZUJpbmRpbmciLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsIl9fZXNNb2R1bGUiLCJ3cml0YWJsZSIsIl9fdmFsdWVzIiwiX19yZWFkIiwiYXIiLCJlcnJvciIsIl9fc3ByZWFkIiwiX19zcHJlYWRBcnJheXMiLCJpbCIsImEiLCJqIiwiamwiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImwiLCJzbGljZSIsIl9fYXdhaXQiLCJfX2FzeW5jR2VuZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInEiLCJyZXN1bWUiLCJmdWxmaWxsIiwic2V0dGxlIiwic2hpZnQiLCJfX2FzeW5jRGVsZWdhdG9yIiwiX19hc3luY1ZhbHVlcyIsIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiY29va2VkIiwicmF3IiwiX19zZXRNb2R1bGVEZWZhdWx0IiwiX19pbXBvcnRTdGFyIiwibW9kIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJoYXMiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEluIiwibW9kdWxlIiwicmVxdWlyZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkZWZpbml0aW9uIiwib2JqIiwicHJvcCIsInRvU3RyaW5nVGFnIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJzb3VyY2VSb290IjoiIn0=
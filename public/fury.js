/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
!(function(a, b) {
  function c() {
    this.B = function(a) {
      for (var b = 0; 24 > b; b++)
        this[String.fromCharCode(97 + b)] = a[b] || 0;
      0.01 > this.c && (this.c = 0.01),
        (a = this.b + this.c + this.e),
        0.18 > a &&
          ((a = 0.18 / a), (this.b *= a), (this.c *= a), (this.e *= a));
    };
  }
  b.AF = a;
  var d = new function() {
    this.A = new c();
    var a, b, d, e, f, g, h, i, j, k, l, m;
    (this.reset = function() {
      var a = this.A;
      (e = 100 / (a.f * a.f + 0.001)),
        (f = 100 / (a.g * a.g + 0.001)),
        (g = 1 - a.h * a.h * a.h * 0.01),
        (h = -a.i * a.i * a.i * 1e-6),
        a.a || ((l = 0.5 - a.n / 2), (m = 5e-5 * -a.o)),
        (i = 1 + a.l * a.l * (0 < a.l ? -0.9 : 10)),
        (j = 0),
        (k = 1 == a.m ? 0 : (1 - a.m) * (1 - a.m) * 2e4 + 32);
    }),
      (this.D = function() {
        this.reset();
        var c = this.A;
        return (
          (a = c.b * c.b * 1e5),
          (b = c.c * c.c * 1e5),
          (d = c.e * c.e * 1e5 + 12),
          3 * (((a + b + d) / 3) | 0)
        );
      }),
      (this.C = function(c, n) {
        var o = this.A,
          p = 1 != o.s || o.v,
          q = o.v * o.v * 0.1,
          r = 1 + 3e-4 * o.w,
          s = o.s * o.s * o.s * 0.1,
          t = 1 + 1e-4 * o.t,
          u = 1 != o.s,
          v = o.x * o.x,
          w = o.g,
          x = o.q || o.r,
          y = o.r * o.r * o.r * 0.2,
          z = o.q * o.q * (0 > o.q ? -1020 : 1020),
          A = o.p ? (((1 - o.p) * (1 - o.p) * 2e4) | 0) + 32 : 0,
          B = o.d,
          C = o.j / 2,
          D = o.k * o.k * 0.01,
          E = o.a,
          F = a,
          G = 1 / a,
          H = 1 / b,
          I = 1 / d,
          o = (5 / (1 + o.u * o.u * 20)) * (0.01 + s);
        o > 0.8 && (o = 0.8);
        for (
          var J,
            K,
            L,
            M,
            N,
            o = 1 - o,
            O = !1,
            P = 0,
            Q = 0,
            R = 0,
            S = 0,
            T = 0,
            U = 0,
            V = 0,
            W = 0,
            X = 0,
            Y = 0,
            Z = Array(1024),
            $ = Array(32),
            _ = Z.length;
          _--;

        )
          Z[_] = 0;
        for (_ = $.length; _--; ) $[_] = 2 * Math.random() - 1;
        for (_ = 0; n > _; _++) {
          if (O) return _;
          if (
            (A && ++X >= A && ((X = 0), this.reset()),
            k && ++j >= k && ((k = 0), (e *= i)),
            (g += h),
            (e *= g),
            e > f && ((e = f), w > 0 && (O = !0)),
            (K = e),
            C > 0 && ((Y += D), (K *= 1 + Math.sin(Y) * C)),
            (K |= 0),
            8 > K && (K = 8),
            E || ((l += m), 0 > l ? (l = 0) : l > 0.5 && (l = 0.5)),
            ++Q > F)
          )
            switch (((Q = 0), ++P)) {
              case 1:
                F = b;
                break;
              case 2:
                F = d;
            }
          switch (P) {
            case 0:
              R = Q * G;
              break;
            case 1:
              R = 1 + 2 * (1 - Q * H) * B;
              break;
            case 2:
              R = 1 - Q * I;
              break;
            case 3:
              (R = 0), (O = !0);
          }
          x &&
            ((z += y), (L = 0 | z), 0 > L ? (L = -L) : L > 1023 && (L = 1023)),
            p && r && ((q *= r), 1e-5 > q ? (q = 1e-5) : q > 0.1 && (q = 0.1)),
            (N = 0);
          for (var ab = 8; ab--; ) {
            if ((V++, V >= K && ((V %= K), 3 == E)))
              for (J = $.length; J--; ) $[J] = 2 * Math.random() - 1;
            switch (E) {
              case 0:
                M = l > V / K ? 0.5 : -0.5;
                break;
              case 1:
                M = 1 - (V / K) * 2;
                break;
              case 2:
                (M = V / K),
                  (M = 6.28318531 * (M > 0.5 ? M - 1 : M)),
                  (M = 1.27323954 * M + 0.405284735 * M * M * (0 > M ? 1 : -1)),
                  (M = 0.225 * ((0 > M ? -1 : 1) * M * M - M) + M);
                break;
              case 3:
                M = $[Math.abs(((32 * V) / K) | 0)];
            }
            p &&
              ((J = U),
              (s *= t),
              0 > s ? (s = 0) : s > 0.1 && (s = 0.1),
              u ? ((T += (M - U) * s), (T *= o)) : ((U = M), (T = 0)),
              (U += T),
              (S += U - J),
              (M = S *= 1 - q)),
              x && ((Z[W % 1024] = M), (M += Z[(W - L + 1024) % 1024]), W++),
              (N += M);
          }
          (N = 0.125 * N * R * v),
            (c[_] = N >= 1 ? 32767 : -1 >= N ? -32768 : (32767 * N) | 0);
        }
        return n;
      });
  }();
  (window.jsfxr = function(a) {
    d.A.B(a);
    var b = d.D();
    a = new Uint8Array(4 * (((b + 1) / 2) | 0) + 44);
    var b = 2 * d.C(new Uint16Array(a.buffer, 44), b),
      c = new Uint32Array(a.buffer, 0, 44);
    (c[0] = 1179011410),
      (c[1] = b + 36),
      (c[2] = 1163280727),
      (c[3] = 544501094),
      (c[4] = 16),
      (c[5] = 65537),
      (c[6] = 44100),
      (c[7] = 88200),
      (c[8] = 1048578),
      (c[9] = 1635017060),
      (c[10] = b);
    for (var b = b + 44, c = 0, e = "data:audio/wav;base64,"; b > c; c += 3)
      var f = (a[c] << 16) | (a[c + 1] << 8) | a[c + 2],
        e = e + (K[f >> 18] + K[(f >> 12) & 63] + K[(f >> 6) & 63] + K[63 & f]);
    return e;
  }),
    (function() {
      var a = !1,
        b = /xyz/.test(function() {}) ? /\b_SP\b/ : /.*/;
      (this.Class = function() {}),
        (Class.extend = function(c) {
          function d() {
            !a && this.init && this.init.apply(this, arguments);
          }
          var e = this.prototype;
          a = !0;
          var f = new this();
          a = !1;
          for (var g in c)
            f[g] =
              "function" == typeof c[g] &&
              "function" == typeof e[g] &&
              b.test(c[g])
                ? (function(a, b) {
                    return function() {
                      var c = this._SP;
                      this._SP = e[a];
                      var d = b.apply(this, arguments);
                      return (this._SP = c), d;
                    };
                  })(g, c[g])
                : c[g];
          return (
            (d.prototype = f),
            (d.prototype.constructor = d),
            (d.extend = arguments.callee),
            d
          );
        });
    })();
  var e = (function() {
      function a(a, b) {
        (this.x = a || 0), (this.y = b || 0);
      }
      return (
        (a.prototype = {
          copy: function() {
            return new a(this.x, this.y);
          },
          length: function() {
            return I.sqrt(this.x * this.x + this.y * this.y);
          },
          norm: function() {
            var a = this.length();
            return a > 0 && this.divide(a), this;
          },
          limit: function(a) {
            return this.length() > a ? (this.norm(), this.mult(a)) : this;
          },
          heading: function() {
            return -1 * I.atan2(-1 * this.y, this.x);
          },
          add: function(a) {
            return (this.x += a.x), (this.y += a.y), this;
          },
          sub: function(a) {
            return (this.x -= a.x), (this.y -= a.y), this;
          },
          mult: function(a) {
            return (this.x = this.x * a), (this.y = this.y * a), this;
          },
          divide: function(a) {
            return (this.x = this.x / a), (this.y = this.y / a), this;
          },
          toInt: function() {
            return (this.x = I.round(this.x)), (this.y = I.round(this.y)), this;
          },
        }),
        a
      );
    })(),
    f = Class.extend({
      init: function(a) {
        var b = this;
        (b.dist = 200),
          (b.T1G1Distance = 1600),
          (b.lookat = new e()),
          (b.c = a.c),
          (b.fov = I.PI / 4),
          (b.vp = {
            l: 0,
            r: 0,
            t: 0,
            b: 0,
            w: 0,
            h: 0,
            scale: new e(1, 1),
          }),
          (b.BNZ = a.BNZ),
          (b.lerp = !0),
          (b.lerpD = 0.04),
          (b.shake = 0),
          b.stepVp(0);
      },
      begin: function() {
        this.c.save(), this.scale(), this.translate();
      },
      end: function() {
        this.c.restore();
      },
      scale: function() {
        this.c.scale(this.vp.scale.x, this.vp.scale.y);
      },
      translate: function() {
        this.c.translate(-this.vp.l, -this.vp.t);
      },
      step: function(a) {
        var b = this;
        (b.shake = I.max(b.shake - a, 0)),
          b.zoomTo(b.dist + 0.05 * (b.T1G1Distance - b.dist));
      },
      stepVp: function() {
        var a = this;
        (a.aspectRatio = a.c.canvas.width / a.c.canvas.height),
          (a.vp.w = a.dist * I.tan(a.fov)),
          (a.vp.h = a.vp.w / a.aspectRatio),
          (a.vp.l = a.lookat.x - a.vp.w / 2),
          (a.vp.t = a.lookat.y - a.vp.h / 2),
          (a.vp.scale.x = 800 / a.vp.w),
          (a.vp.scale.y = 500 / a.vp.h),
          a.lockBounds(),
          a.shake > 0 &&
            ((a.vp.l += 4 * H.randPN()), (a.vp.t += 4 * H.randPN())),
          (a.vp.r = a.vp.l + a.vp.w),
          (a.vp.b = a.vp.t + a.vp.h);
      },
      zoomTo: function(a) {
        (this.dist = a), this.stepVp();
      },
      moveTo: function(a, b) {
        var c = this;
        c.lerp
          ? ((c.lookat.x -= (c.lookat.x - a) * c.lerpD),
            (c.lookat.y -= (c.lookat.y - b) * c.lerpD))
          : ((c.lookat.x = a), (c.lookat.y = b)),
          c.stepVp();
      },
      lockBounds: function() {
        var a = this;
        (a.vp.l = H.clamp(a.vp.l, a.BNZ.l, a.BNZ.r - a.vp.w)),
          (a.vp.t = H.clamp(a.vp.t, a.BNZ.t, a.BNZ.b - a.vp.h));
      },
      screenToWorld: function(a, b, c) {
        return (
          (c = c || {}),
          (c.x = a / this.vp.scale.x + this.vp.l),
          (c.y = b / this.vp.scale.y + this.vp.t),
          c
        );
      },
      worldToScreen: function(a, b, c) {
        return (
          (c = c || {}),
          (c.x = (a - this.vp.l) * this.vp.scale.x),
          (c.y = (b - this.vp.t) * this.vp.scale.y),
          c
        );
      },
    }),
    g = Class.extend({
      init: function(a) {
        (this.NDZ = []), (this.p = new e()), (this.r = 0), H.extend(this, a);
      },
      step: function(a) {
        for (var b = this.NDZ.length; b--; ) {
          var c = this.NDZ[b];
          c.step(a), c.alive || this.NDZ.splice(b, 1);
        }
      },
      draw: function(a) {
        var b = this.NDZ.length;
        if (0 !== b) {
          for (
            a.save(), a.translate(this.p.x, this.p.y), a.rotate(this.r);
            b--;

          )
            this.NDZ[b].draw(a);
          a.restore();
        }
      },
      A3C4: function(a) {
        this.NDZ.push(a);
      },
    }),
    h = Class.extend({
      init: function() {
        this.SDZ = {};
      },
      add: function(a, b, c) {
        this.SDZ[a] = [];
        for (var d = 0; d < c.length; d++) {
          var e = c[d];
          this.SDZ[a].push({ tick: 0, count: b, pool: [] });
          for (var f = 0; b > f; f++) {
            var g = new Audio();
            (g.src = jsfxr(e)), this.SDZ[a][d].pool.push(g);
          }
        }
      },
      play: function(a) {
        if (J.chrome) {
          var b = this.SDZ[a],
            c = b.length > 1 ? b[I.floor(I.random() * b.length)] : b[0];
          c.pool[c.tick].play(), c.tick < c.count - 1 ? c.tick++ : (c.tick = 0);
        }
      },
    }),
    i = Class.extend({
      init: function() {
        this.bind();
      },
      bind: function() {
        var a = this,
          b = J.addEventListener;
        b("keydown", function(b) {
          switch (b.keyCode) {
            case 68:
              a.D = !0;
              break;
            case 65:
              a.A = !0;
              break;
            case 87:
              a.W = !0;
              break;
            case 32:
              a.Space = !0;
              break;
            case 37:
              a.L = !0;
              break;
            case 38:
              a.U = !0;
              break;
            case 39:
              a.R = !0;
              break;
            case 16:
              a.Shift = !0;
          }
        }),
          b("keyup", function(b) {
            switch (b.keyCode) {
              case 68:
                a.D = !1;
                break;
              case 65:
                a.A = !1;
                break;
              case 87:
                a.W = !1;
                break;
              case 32:
                a.Space = !1;
                break;
              case 37:
                a.L = !1;
                break;
              case 38:
                a.U = !1;
                break;
              case 39:
                a.R = !1;
                break;
              case 16:
                a.Shift = !1;
            }
          });
      },
    }),
    j = g.extend({
      init: function(a) {
        var b = this;
        b._SP(a),
          (b.alive = !0),
          (b.max = 1),
          (b.sTime = 0),
          (b.aDelay = 0),
          (b.aCounter = 0),
          (b.aIncDelay = 0),
          (b.aIncCounter = 0),
          (b.aIncFactor = 1),
          H.extend(b, a);
      },
      step: function(a) {
        var b = this;
        b._SP(a),
          G1.tTime < b.sTime ||
            (b.aCounter >= b.aDelay &&
              ((b.aCounter = 0), b.NDZ.length < b.max && b.spawnEntity()),
            b.aIncCounter >= b.aIncDelay &&
              ((b.aIncCounter = 0), (b.aDelay *= b.aIncFactor)),
            (b.aCounter += a),
            (b.aIncCounter += a));
      },
      spawnEntity: function() {},
      randOBSpawn: function() {
        var a,
          b,
          c = G1.BNZ;
        return (
          (b = H.randRange(c.t, c.b - 100)),
          (a = I.random() > 0.5 ? c.l - 100 : c.r + 100),
          new e(a, b)
        );
      },
      randWaterSpawn: function() {
        var a = G1.BNZ;
        return new e(H.randRange(a.l, a.r), 0);
      },
    }),
    k = j.extend({
      init: function() {
        var a = this;
        a._SP(),
          (a.max = 115),
          (a.sTime = 1e3),
          (a.aDelay = 1100),
          (a.aCounter = 1200),
          (a.aIncDelay = 6e4),
          (a.aIncCounter = 0),
          (a.aIncFactor = 0.85);
      },
      spawnEntity: function() {
        this.NDZ.push(
          new D({ s: 0.75, p: this.randOBSpawn(), T1G1: G1.ace, g: !1 })
        );
      },
    }),
    l = j.extend({
      init: function() {
        var a = this;
        a._SP(),
          (a.max = 8),
          (a.sTime = 1e3),
          (a.aDelay = 5e3),
          (a.aCounter = 5e3),
          (a.aIncDelay = 6e4),
          (a.aIncCounter = 0),
          (a.aIncFactor = 0.85);
      },
      spawnEntity: function() {
        this.NDZ.push(new G({ p: this.getSpawnPoint(), T1G1: G1.ace }));
      },
      getSpawnPoint: function() {
        var a = !1,
          b = null,
          c = 10,
          d = 0;
        a: for (; !a; )
          if (((b = this.randWaterSpawn()), !H.inViewport({ p: b, R1Z: 62 }))) {
            if (((d += 1), d > c)) break a;
            var e = this.NDZ.length;
            if (0 === e) {
              a = !0;
              break a;
            }
            for (var f = 0; e > f; f++) {
              var g = this.NDZ[f];
              if (
                b
                  .copy()
                  .sub(g.p)
                  .length() < 175
              )
                continue a;
            }
            a = !0;
          }
        return b;
      },
    }),
    m = g.extend({
      init: function(a) {
        this._SP(), (this.debugDraw = !1), H.extend(this, a);
      },
      step: function(a) {
        var b = this;
        b._SP(a);
        for (var c = b.NDZ.length, d = 0; c > d; d++)
          for (var e = 0; c > e; e++) {
            var f = b.NDZ[d],
              g = b.NDZ[e];
            b.check(f, g);
          }
      },
      hit: function(a, b) {
        a.obj.collide(b.obj), b.obj.collide(a.obj);
      },
      check: function(a, b) {
        if (
          a.id !== b.id &&
          a.obj.id !== b.obj.id &&
          a.obj.alive &&
          b.obj.alive &&
          !this.grouped(a, b)
        ) {
          var c = b.p.x - a.p.x,
            d = b.p.y - a.p.y,
            e = I.sqrt(c * c + d * d);
          e < b.R1Z + a.R1Z && this.hit(a, b);
        }
      },
      grouped: function(a, b) {
        for (var c = [r, D], d = 0; d < c.length; d++)
          if (a instanceof c[d] && b instanceof c[d]) return !0;
        return !1;
      },
    }),
    n = Class.extend({
      init: function(a) {
        var b = this;
        (b.p = new e()),
          (b.type = "circle"),
          (b.R1Z = 0),
          (b.obj = null),
          (b.pOF2Z = new e()),
          (b.alive = !0),
          H.extend(b, a),
          (b.id = H.randRange(0, 1e5));
      },
      step: function() {
        this.p = this.obj.p.copy().add(this.pOF2Z);
      },
      draw: function(a) {
        "circle" === this.type &&
          (a.beginPath(),
          a.arc(this.p.x, this.p.y, this.R1Z, 0, 2 * I.PI, !1),
          (a.lineWidth = 1),
          (a.strokeStyle = "#f00"),
          a.stroke());
      },
    }),
    o = Class.extend({
      init: function(a, b) {
        var c = this;
        (c.count = 2),
          (c.NDZ = []),
          (c.counts = [125, 75]),
          (c.sizes = [30, 50]),
          (c.pOF2Zs = [0.5, 0.2]),
          (c.hOF2Zs = [2e3, 500]);
        var d = document.createElement("canvas"),
          f = d.getContext("2d");
        (d.width = a), (d.height = b);
        for (var g = 0; g < c.count; g++) {
          c.NDZ.push(new Image());
          for (var h = 0; h < c.counts[g]; h++) {
            var i = new e(H.randRange(0, a), H.randRange(0, b));
            f.fillStyle = "#D3EDFF";
            for (var j = H.randRange(5, 50), k = 0; j > k; k++)
              f.beginPath(),
                f.arc(
                  i.x + H.randRange(0, 8 * c.sizes[g]),
                  i.y + H.randRange(30, 125),
                  c.sizes[g],
                  0,
                  2 * I.PI,
                  !0
                ),
                f.fill();
          }
          (c.NDZ[g].src = d.toDataURL()), f.clearRect(0, 0, a, b);
        }
      },
      draw: function(a) {
        for (var b = this, c = 0; c < b.count; c++)
          a.save(),
            (a.globalAlpha = 0 === c ? 0.5 : 1),
            a.translate(G1.cam.vp.l * b.pOF2Zs[c], G1.cam.vp.t * b.pOF2Zs[c]),
            a.drawImage(
              b.NDZ[c],
              -b.NDZ[c].width / 2,
              -b.NDZ[c].height + b.hOF2Zs[c]
            ),
            a.restore();
      },
    }),
    p = g.extend({
      init: function(a) {
        var b = this;
        b._SP(a),
          (b.v = new e()),
          (b.a = new e()),
          (b.M9P2 = 0),
          (b.av = 0),
          (b.ts = 0),
          (b.alive = !0),
          (b.hp = 8),
          (b.static = !1),
          (b.g = !0),
          (b.fr = 100),
          (b.fc = 0),
          (b.T1G1 = null),
          (b.tDist = null),
          (b.tAngle = null),
          (b.behavior = null),
          (b.va = 180),
          (b.range = 500),
          (b.ammo = null),
          (b.s = 1),
          (b.age = 0),
          (b.lifeSpan = -1),
          (b.bodies = []),
          (b.R1Z = 10),
          (b.breakable = !1),
          (b.points = 0),
          (b.SDZ = null),
          H.extend(this, a),
          (b.id = H.randRange(0, 1e5));
      },
      addBodies: function(a) {
        for (var b = 0; b < a.length; b++) {
          var c = new n({
            pOF2Z: a[b].pOF2Z || new e(),
            R1Z: a[b].R1Z,
            obj: this,
          });
          this.bodies.push(c), G1.addCollider(c);
        }
      },
      step: function(a) {
        var b = this;
        b.age += a / G1.slomo;
        var c = !1;
        if (
          (-1 !== b.lifeSpan && b.age > b.lifeSpan && (b.kill(), (c = !0)),
          b.alive || (c = !0),
          b.hp <= 0 && (b.kill(), (c = !0)),
          b.static && (c = !0),
          b.p.y > G1.h / 2 && (b.kill(), (c = !0)),
          c)
        )
          return void b._SP(a);
        var d = a / (1e3 * G1.slomo);
        b.behavior && b.behavior.run();
        var f = new e();
        if (
          (f.add(b.a),
          b.g && f.add(G1.gravity),
          b.v.add(f).limit(b.M9P2 * d),
          b.p.add(b.v),
          (b.r = H.wrapAngle(b.r + b.av)),
          (b.fc += a),
          b.T1G1)
        ) {
          var g = b.T1G1.p.copy(),
            h = g.sub(b.p);
          b.tDist = h.length();
          var i = I.atan2(h.y, h.x),
            j = H.wrapAngle(i - b.r);
          I.abs(j) <= H.D2R(b.va / 2) &&
            b.tDist <= b.range &&
            b.fc > b.fr * G1.slomo &&
            ((b.fc = 0), b.fire());
        }
        b._SP(a);
      },
      fire: function() {
        var a = this;
        if (a.ammo) {
          var a = this,
            b = a.r + H.D2R(H.randRange(-6, 6)),
            c = new e(I.cos(a.r) * a.img.w, I.sin(a.r) * a.img.w),
            d = new a.ammo({
              p: a.p.copy().add(c),
              v: new e(I.cos(b), I.sin(b)).mult(500),
            });
          G1.A3C4(d), G1.sfx.play(a.SDZ.gun);
        }
      },
      collide: function() {},
      kill: function() {
        var a = this;
        a.alive = !1;
        for (var b = 0; b < a.bodies.length; b++) a.bodies[b].alive = !1;
        (G1.score += a.points), a.SDZ && G1.sfx.play(a.SDZ.die);
      },
      I1P2W3: function() {
        return this.is(s);
      },
      isNPCWeapon: function() {
        return this.is(t);
      },
      isNPC: function() {
        return !this.is(r) && !this.is(E);
      },
      is: function(a) {
        return this instanceof a;
      },
    }),
    q = p.extend({
      init: function(a) {
        this._SP(a),
          H.extend(this, a),
          (this.cfg = {
            p1: { oX: 0, oY: 0, w: 34, h: 10, dO: 0 },
            p2: { oX: 0, oY: 11, w: 34, h: 16, dO: 0 },
            p3: { oX: 0, oY: 28, w: 34, h: 24, dO: 0 },
            p4: { oX: 0, oY: 53, w: 34, h: 32, dO: 0 },
            p5: { oX: 0, oY: 86, w: 34, h: 36, dO: 0 },
            s1: { oX: 35, oY: 0, w: 43, h: 122, dO: -1.57 },
            b: { oX: 79, oY: 52, w: 20, h: 20, dO: 0 },
            b2: { oX: 79, oY: 72, w: 20, h: 20, dO: 0 },
            b3: { oX: 79, oY: 92, w: 20, h: 30, dO: -1.57 },
          }),
          (this.img = null);
      },
      draw: function(a) {
        var b = this,
          c = b.img;
        if (H.inViewport(b)) {
          a.save(), b.p.toInt(), a.translate(b.p.x, b.p.y);
          var d = b.r + c.dO;
          0 !== d && a.rotate(d),
            a.drawImage(
              G1.img,
              c.oX,
              c.oY,
              c.w,
              c.h,
              -(c.w * b.s) / 2,
              -(c.h * b.s) / 2,
              c.w * b.s,
              c.h * b.s
            ),
            a.restore(),
            b._SP(a);
        }
      },
    }),
    r = q.extend({
      init: function(a) {
        var b = this;
        b._SP(a),
          (b.g = !1),
          (b.lifeSpan = 5e3),
          (b.damage = 4),
          (b.R1Z = 10),
          (b.M9P2 = 500),
          H.extend(b, a),
          (this.img = this.cfg.b);
        var c = [{ pOF2Z: new e(0, 0), R1Z: b.R1Z }];
        this.addBodies(c);
      },
      step: function(a) {
        var b = this,
          c = a / 1e3;
        (b.v = b.v.norm().mult(b.M9P2 * c)), b.p.y >= 0 && b.kill(!0), b._SP(a);
      },
      collide: function(a) {
        a instanceof E && this.kill();
      },
      kill: function(a) {
        this._SP(),
          H.inViewport(this) &&
            G1.A3C4(
              a
                ? new B({
                    position: this.p.copy(),
                    dir: -I.PI / 2,
                    D7V9V: 0,
                    size: 10,
                    sizeVariance: 4,
                    ss1: 100,
                    life: 400,
                    l4V7: 200,
                    color: [255, 255, 255, 1],
                    constColor: !0,
                    mXP4: 6,
                    duration: 0,
                    g: !0,
                  })
                : new B({
                    position: this.p.copy(),
                    D7V9V: 360,
                    size: 6,
                    sizeVariance: 2,
                    ss1: 100,
                    life: 200,
                    l4V7: 25,
                    color: [255, 255, 255, 1],
                    constColor: !0,
                    mXP4: 6,
                    duration: 0,
                  })
            );
      },
    }),
    s = r.extend({
      init: function(a) {
        this._SP(a), (this.M9P2 = 2e3);
      },
      collide: function(a) {
        a.isNPC() && this.kill();
      },
    }),
    t = r.extend({
      init: function(a) {
        this._SP(a), (this.img = this.cfg.b2);
      },
    }),
    u = t.extend({
      init: function(a) {
        this._SP(a), (this.img = this.cfg.b3);
      },
    }),
    v = p.extend({
      init: function(a) {
        var b = this;
        b._SP(a),
          (b.width = G1.w),
          (b.height = 1e3),
          H.extend(b, a),
          (b.canvas = document.getElementById(a.cid)),
          (b.c = b.canvas.getContext("2d")),
          (b.w = b.canvas.width = b.canvas.clientWidth),
          (b.h = b.canvas.height = b.canvas.clientHeight),
          (b.c.strokeStyle = "#fff"),
          (b.c.lineWidth = 2);
      },
      draw: function(a) {
        var b = this;
        b.c.clearRect(0, 0, b.w, b.h);
        var c = G1.cam.worldToScreen(0, 0);
        c.y < b.canvas.height &&
          (b.c.save(),
          b.c.translate(0, c.y),
          b.c.scale(1, -1),
          b.c.drawImage(
            a.canvas,
            0,
            0,
            a.canvas.width,
            c.y,
            0,
            -c.y,
            a.canvas.width,
            c.y
          ),
          (b.c.fillStyle = "rgba(67,103,127,0.50)"),
          b.c.beginPath(),
          b.c.rect(-2, -c.y - 1e3, a.canvas.width + 4, c.y + 1e3),
          b.c.fill(),
          b.c.stroke(),
          b.c.restore());
      },
    }),
    w = Class.extend({
      init: function(a, b) {
        (this.actor = a), (this.T1G1 = b);
      },
      run: function() {},
      turnToFace: function(a) {
        var b = this.getAngleToPoint(a),
          c = H.wrapAngle(b - this.actor.r);
        (c = H.clamp(c, -this.actor.ts, this.actor.ts)),
          (this.actor.r = H.wrapAngle(this.actor.r + c));
      },
      turnAwayFrom: function(a) {
        var b = this.getAngleToPoint(a);
        b -= I.PI;
        var c = H.wrapAngle(b - this.actor.r);
        (c = H.clamp(c, -this.actor.ts, this.actor.ts)),
          (this.actor.r = H.wrapAngle(this.actor.r + c / G1.slomo));
      },
      getAngleToPoint: function(a) {
        var b = a.x - this.actor.p.x,
          c = a.y - this.actor.p.y;
        return I.atan2(c, b);
      },
      moveForward: function() {
        var a = I.cos(this.actor.r),
          b = I.sin(this.actor.r);
        this.actor.v.add(new e(a, b).mult(0.2));
      },
    }),
    x = w.extend({
      run: function() {
        this.turnToFace(this.T1G1.p), this.moveForward();
      },
    }),
    y = w.extend({
      run: function() {
        this.turnAwayFrom(this.T1G1.p), this.moveForward();
      },
    }),
    z = w.extend({
      run: function() {
        this.actor.r += 0.15 / G1.slomo;
      },
    }),
    A = p.extend({
      init: function(a) {
        var b = this;
        b._SP(a),
          (b.size = null),
          (b.deltaSize = null),
          (b.colorArray = null),
          (b.deltaColor = null),
          (b.g = !1),
          (b.age = 1),
          (b.drawColor = null),
          (b.constColor = !1),
          H.extend(b, a),
          b.calcColor(0);
      },
      step: function(a) {
        var b = this;
        b._SP(a);
        var c = a / G1.slomo;
        (b.size += b.deltaSize * c),
          (b.drawColor && b.constColor) || b.calcColor(c);
      },
      calcColor: function(a) {
        var b = this,
          c = (b.colorArray[0] += b.deltaColor[0] * a),
          d = (b.colorArray[1] += b.deltaColor[1] * a),
          e = (b.colorArray[2] += b.deltaColor[2] * a),
          f = (b.colorArray[3] += b.deltaColor[3] * a);
        (c = c > 255 ? 255 : 0 > c ? 0 : ~~c),
          (d = d > 255 ? 255 : 0 > d ? 0 : ~~d),
          (e = e > 255 ? 255 : 0 > e ? 0 : ~~e),
          (f = f > 1 ? 1 : 0 > f ? 0 : f.toFixed(2)),
          (b.drawColor = "rgba(" + c + "," + d + "," + e + "," + f + ")");
      },
      draw: function(a) {
        var b = this;
        b.alive &&
          (b.p.toInt(),
          a.save(),
          (a.fillStyle = b.drawColor),
          a.beginPath(),
          a.arc(b.p.x, b.p.y, b.size, 0, 2 * I.PI, !1),
          a.fill(),
          a.closePath(),
          a.restore());
      },
    }),
    B = p.extend({
      init: function(a) {
        var b = this;
        if (
          (b._SP(a),
          (b.mXP4 = 0),
          (b.position = new e()),
          (b.PZT2V = new e()),
          (b.dir = 0),
          (b.D7V9V = 0),
          (b.ss1 = 0),
          (b.ss1Variance = 0),
          (b.size = 0),
          (b.sizeVariance = 0),
          (b.endSize = 0),
          (b.endSizeVariance = 0),
          (b.life = 0),
          (b.l4V7 = 0),
          (b.color = [0, 0, 0, 0]),
          (b.colorVariance = [0, 0, 0, 0]),
          (b.constColor = !1),
          (b.endColor = [0, 0, 0, 0]),
          (b.endColorVariance = [0, 0, 0, 0]),
          (b.emitCounter = 0),
          (b.elapsedTime = 0),
          (b.duration = -1),
          (b.on = !0),
          (b.static = !0),
          H.extend(b, a),
          0 === b.duration)
        )
          for (; b.NDZ.length < b.mXP4; ) b.emit();
      },
      step: function(a) {
        var b = this;
        if ((b._SP(a), 0 === b.duration)) b.NDZ.length <= 0 && b.kill();
        else if (
          ((b.emissionRate = b.mXP4 / b.life), b.alive && b.emissionRate > 0)
        ) {
          var c = 1 / b.emissionRate;
          for (
            b.emitCounter += a;
            b.NDZ.length < b.mXP4 && b.emitCounter > c && b.on;

          )
            b.emit(), (b.emitCounter -= c);
          (b.elapsedTime += a),
            -1 !== b.duration && b.duration < b.elapsedTime && b.kill();
        }
      },
      emit: function() {
        var a = this,
          b = a.position.copy();
        (b.x = b.x + a.PZT2V.x * H.randPN()),
          (b.y = b.y + a.PZT2V.y * H.randPN());
        var c = a.dir + H.D2R(a.D7V9V * H.randPN()),
          d = a.ss1 + a.ss1Variance * H.randPN(),
          f = new e(I.cos(c), I.sin(c)).mult(d),
          g = a.size + a.sizeVariance * H.randPN();
        g = 0 > g ? 0 : ~~g;
        var h = a.endSize + a.endSizeVariance * H.randPN();
        h = 0 > h ? 0 : ~~h;
        for (
          var i = a.life + a.l4V7 * H.randPN(),
            j = (h - g) / i,
            k = [],
            l = [],
            m = [],
            n = 0;
          4 > n;
          n++
        )
          l.push(a.color[n] + a.colorVariance[n] * H.randPN()),
            k.push(a.endColor[n] + a.endColorVariance[n] * H.randPN()),
            m.push((k[n] - l[n]) / i);
        var o = l,
          p = new A({
            p: b,
            v: f,
            size: g,
            deltaSize: j,
            lifeSpan: i,
            colorArray: o,
            constColor: a.constColor,
            deltaColor: m,
            g: a.g,
            M9P2: d,
          });
        a.NDZ.push(p);
      },
    }),
    C = q.extend({
      init: function(a) {
        var b = this;
        b._SP(a),
          (b.r = -1.57),
          (b.ts = 0.034),
          (b.M9P2 = 350),
          (b.va = 45),
          (b.fr = 1250),
          H.extend(this, a),
          (b.ammo = t),
          (b.breakable = !0),
          (b.points = 25),
          (b.R1Z = 20 * b.s),
          (b.img = b.cfg.p5);
        var c = [{ R1Z: b.R1Z }];
        this.addBodies(c), (b.SDZ = { gun: "egun", die: "edie", hit: "ehit" });
      },
      step: function(a) {
        var b = this;
        if (
          (b._SP(a),
          b.breakable &&
            void 0 === b.broken &&
            b.hp < 6 &&
            ((b.broken = I.random() > 0.5 ? !0 : !1),
            b.broken && ((b.g = !0), (b.behavior = new z(b)), (b.T1G1 = null))),
          H.inViewport(b))
        ) {
          var c,
            d = H.wrapAngle(b.r - I.PI),
            e = I.abs(H.radToDeg(d));
          (c =
            108 >= e && e >= 72
              ? "p5"
              : 126 >= e && e >= 54
              ? "p4"
              : 144 >= e && e >= 38
              ? "p3"
              : 162 >= e && e >= 18
              ? "p2"
              : "p1"),
            (b.img = b.cfg[c]);
        }
      },
      collide: function(a) {
        a.I1P2W3() &&
          ((this.hp -= a.damage), G1.ace.powerUp(2), G1.sfx.play(this.SDZ.hit));
      },
      kill: function() {
        this._SP(),
          (G1.cam.shake = 50),
          G1.A3C4(
            new B({
              position: this.p.copy(),
              PZT2V: new e(25, 25),
              D7V9V: 360,
              size: 20,
              sizeVariance: 5,
              endSize: 20,
              endSizeVariance: 5,
              life: 300,
              l4V7: 200,
              color: [106, 119, 127, 1],
              constColor: !0,
              mXP4: 6,
              duration: 0,
            })
          );
      },
    }),
    D = C.extend({
      step: function(a) {
        var b = this;
        if (!b.broken) {
          var c = b.p.copy().add(
            b.v
              .copy()
              .norm()
              .mult(b.range)
          );
          b.behavior =
            b.p.y + c.y >= 0 && b.p.y < 0
              ? new x(b, { p: new e(b.p.x + 20 * b.v.x, b.p.y - 230) })
              : b.tDist < 300
              ? new y(b, b.T1G1)
              : new x(b, b.T1G1);
        }
        b._SP(a);
      },
    }),
    E = C.extend({
      init: function(a) {
        var b = this;
        b._SP(a),
          (b.r = -1.57),
          (b.ts = H.D2R(7)),
          (b.M9P2 = 500),
          (b.fr = 30),
          (b.hp = 100),
          (b.power = 100),
          (b.canPower = !0),
          (b.isPower = !1),
          (b.points = 0),
          (b.SFXC4 = 0),
          (b.soundRate = 200),
          H.extend(this, a),
          (b.ammo = s),
          (b.breakable = !1),
          (b.jet = new B({
            p: new e(-b.img.w / 2, 0),
            dir: -I.PI,
            D7V9V: 15,
            ss1: 100,
            ss1Variance: 50,
            size: 4,
            sizeVariance: 2,
            life: 200,
            l4V7: 50,
            color: [255, 255, 255, 1],
            constColor: !0,
            mXP4: 20,
            duration: -1,
            on: !1,
            g: !1,
          })),
          b.A3C4(b.jet),
          (b.gun = new B({
            p: new e(b.img.w / 2, 0),
            D7V9V: 90,
            ss1: 100,
            ss1Variance: 50,
            size: 10,
            sizeVariance: 4,
            life: 200,
            l4V7: 100,
            color: [255, 255, 255, 1],
            constColor: !0,
            mXP4: 8,
            duration: -1,
            on: !1,
            g: !1,
          })),
          b.A3C4(b.gun),
          (b.smoke = new B({
            position: b.p.copy(),
            dir: I.PI / 2,
            D7V9V: 90,
            ss1: 175,
            ss1Variance: 50,
            size: 6,
            sizeVariance: 2,
            endSize: 16,
            endSizeVariance: 2,
            life: 750,
            l4V7: 500,
            color: [106, 119, 127, 1],
            constColor: !0,
            mXP4: 10,
            duration: -1,
            on: !1,
          })),
          G1.A3C4(b.smoke),
          (b.SDZ = { gun: "gun", die: "die", hit: "hit" });
      },
      step: function(a) {
        var b = this;
        (b.a = new e()),
          b.handleInput(a),
          (b.smoke.position = b.p.copy()),
          (!H.inBounds(b) || b.p.y > 0) && b.heal(-0.3),
          b.hp < 50
            ? ((b.smoke.on = !0), G1.sfx.play("smoke"))
            : (b.smoke.on = !1),
          b._SP(a);
      },
      handleInput: function(a) {
        var b = 0,
          c = 0,
          d = G1,
          f = this,
          g = d.inputCtrl;
        (g.A || g.L) && (f.r -= f.ts),
          (g.D || g.R) && (f.r += f.ts),
          g.W || g.U
            ? ((b = I.cos(f.r)),
              (c = I.sin(f.r)),
              (f.a = f.a.add(new e(b, c).mult(0.5))),
              (f.jet.on = !0),
              (f.g = !1),
              (f.SFXC4 += a),
              f.SFXC4 > f.soundRate && (d.sfx.play("jet"), (f.SFXC4 = 0)))
            : ((f.jet.on = !1), (f.g = !0), (f.SFXC4 = f.soundRate)),
          g.Space
            ? f.fc > f.fr
              ? ((f.fc = 0), f.fire(), (f.gun.on = !0), (d.cam.shake = 50))
              : (f.gun.on = !1)
            : ((f.gun.on = !1), f.heal(0.1)),
          g.Shift
            ? (f.canPower
                ? (f.setSlomo(3, 1200),
                  f.powerUp((-30 * a) / 1e3),
                  f.isPower || d.sfx.play("pwr"),
                  (f.isPower = !0))
                : f.deactivateSlomo(a),
              0 === f.power && (f.canPower = !1))
            : (f.deactivateSlomo(a), (f.canPower = !0), (f.isPower = !1));
      },
      setSlomo: function(a, b) {
        (G1.cam.T1G1Distance = b), (G1.slomo = a);
      },
      deactivateSlomo: function(a) {
        this.setSlomo(1, 1600), this.powerUp((10 * a) / 1e3);
      },
      heal: function(a) {
        var b = this;
        b.hp = H.clamp(b.hp + a, 0, 100);
      },
      powerUp: function(a) {
        this.power = H.clamp(this.power + a, 0, 100);
      },
      collide: function(a) {
        a.isNPCWeapon() && (this.heal(-a.damage), G1.sfx.play(this.SDZ.hit));
      },
      kill: function() {
        this._SP(), (this.jet.alive = !1), (this.smoke.alive = !1);
      },
    }),
    F = p.extend({
      init: function(a) {
        var b = this;
        b._SP(a),
          (b.w = 15),
          (b.h = 5),
          (b.g = !1),
          (b.fr = 1500),
          (b.points = 15),
          H.extend(b, a),
          (b.ammo = u);
        var c = [{ R1Z: b.w / 2 }];
        b.addBodies(c), (b.SDZ = { gun: "sgun", die: "die", hit: "hit" });
      },
      step: function(a) {
        var b = this;
        b._SP(a),
          (b.r = b.T1G1.p
            .copy()
            .sub(b.p)
            .norm()
            .heading());
      },
      draw: function(a) {
        var b = this;
        b.alive &&
          (a.save(),
          a.translate(b.p.x, b.p.y),
          a.rotate(b.r),
          (a.fillStyle = "#000"),
          a.fillRect(0, -b.h / 2, b.w, b.h),
          a.restore());
      },
      fire: function() {
        var a = this,
          b = a.r + H.D2R(H.randRange(-8, 8)),
          c = new e(I.cos(a.r) * a.w, I.sin(a.r) * a.w),
          d = new a.ammo({
            p: a.p.copy().add(c),
            v: new e(I.cos(b), I.sin(b)).mult(500),
            r: b,
            damage: 8,
            M9P2: 1e3,
          });
        G1.A3C4(d), G1.sfx.play(a.SDZ.gun);
      },
      collide: function(a) {
        a.I1P2W3() &&
          ((this.hp -= a.damage),
          G1.ace.powerUp(0.5),
          G1.sfx.play(this.SDZ.hit));
      },
      kill: function() {
        this._SP(),
          G1.A3C4(
            new B({
              position: this.p.copy(),
              PZT2V: new e(10, 10),
              D7V9V: 360,
              size: 10,
              sizeVariance: 3,
              endSize: 10,
              endSizeVariance: 3,
              life: 300,
              l4V7: 200,
              color: [106, 119, 127, 1],
              constColor: !0,
              mXP4: 6,
              duration: 0,
            })
          );
      },
    }),
    G = q.extend({
      init: function(a) {
        var b = this;
        b._SP(a),
          (b.turrets = []),
          (b.hp = 50),
          (b.R1Z = 60),
          H.extend(b, a),
          (b.points = 75);
        var c = [[-17, 0], [50, 5]];
        (this.img = this.cfg.s1), (this.p.y -= this.img.w / 2);
        for (var d = 0; d < c.length; d++) {
          var f = new F({
            p: b.p.copy().add(new e(c[d][0], c[d][1])),
            T1G1: b.T1G1,
            range: 1200,
          });
          b.turrets.push(f), G1.NDZ.push(f);
        }
        b.T1G1 = null;
        var g = [
          { pOF2Z: new e(15, 5), R1Z: 20 },
          { pOF2Z: new e(-45, 15), R1Z: 18 },
          { pOF2Z: new e(50, 12), R1Z: 8 },
        ];
        this.addBodies(g), (b.SDZ = { die: "sdie", hit: "shit" });
      },
      collide: function(a) {
        a.I1P2W3() &&
          ((this.hp -= a.damage), G1.ace.powerUp(2), G1.sfx.play(this.SDZ.hit));
      },
      kill: function() {
        this._SP();
        for (var a = 0; a < this.turrets.length; a++) this.turrets[a].kill();
        G1.A3C4(
          new B({
            position: new e(this.p.x, this.p.y - 30),
            PZT2V: new e(45, 25),
            dir: -I.PI / 2,
            D7V9V: 30,
            ss1: 150,
            ss1Variance: 25,
            size: 25,
            sizeVariance: 10,
            endSize: 25,
            endSizeVariance: 10,
            life: 800,
            l4V7: 300,
            color: [106, 119, 127, 1],
            constColor: !0,
            mXP4: 15,
            duration: 0,
          })
        );
      },
    }),
    H = (function() {
      var a = function() {
        this.init();
      };
      return (
        (a.extend = function(a, b, c) {
          for (var d in b) (c || a.hasOwnProperty(d)) && (a[d] = b[d]);
          return a;
        }),
        (a.randPN = function() {
          return 2 * I.random() - 1;
        }),
        (a.D2R = function(a) {
          return (a * I.PI) / 180;
        }),
        (a.radToDeg = function(a) {
          return (180 * a) / I.PI;
        }),
        (a.wrapAngle = function(a) {
          for (; a < -I.PI; ) a += 2 * I.PI;
          for (; a > I.PI; ) a -= 2 * I.PI;
          return a;
        }),
        (a.randRange = function(a, b) {
          return I.floor(I.random() * (b - a + 1) + a);
        }),
        (a.clamp = function(a, b, c) {
          return b > a ? b : c > a ? a : c;
        }),
        (a.inRange = function(a, b, c) {
          return a >= b && c >= a;
        }),
        (a.inViewport = function(b) {
          return (
            a.inRange(b.p.x, G1.cam.vp.l - b.R1Z, G1.cam.vp.r + b.R1Z) &&
            a.inRange(b.p.y, G1.cam.vp.t - b.R1Z, G1.cam.vp.b + b.R1Z)
          );
        }),
        (a.inBounds = function(b) {
          return (
            a.inRange(b.p.x, G1.BNZ.l, G1.BNZ.r) &&
            a.inRange(b.p.y, G1.BNZ.t, G1.BNZ.b)
          );
        }),
        (a.pad = function(a, b) {
          for (var c = "" + a; c.length < b; ) c = "0" + c;
          return c;
        }),
        (a.prototype = {
          init: function() {
            var a = this;
            (a.w = 4500),
              (a.h = 1500),
              (a.BNZ = { l: -a.w / 2, r: a.w / 2, t: -a.h, b: 400 }),
              (a.dt = 0),
              (a.currentTime = new Date().getTime()),
              (a.gravity = new e(0, 0.05)),
              (a.slomo = 1),
              (a.img = new Image()),
              (a.img.onload = function() {
                G1.initGame(), (a.$ldng.style.display = "none"), a.draw();
              }),
              (a.img.src = "sprite.png"),
              (a.bg = new o(6e3, 3e3)),
              (a.NDZ = []),
              (a.cvs = document.getElementById("g")),
              a.resetDimensions(800, 500),
              (a.c = a.cvs.getContext("2d")),
              (this.storage = window.localStorage),
              (a.cam = new f(a)),
              (a.inputCtrl = new i()),
              (a.started = !1),
              (a.sfx = new h()),
              J.chrome &&
                (a.sfx.add("gun", 6, [
                  [
                    2,
                    ,
                    0.299,
                    0.0289,
                    0.391,
                    0.8259,
                    0.0381,
                    -0.5939,
                    ,
                    ,
                    ,
                    ,
                    ,
                    0.2965,
                    0.0699,
                    ,
                    0.1943,
                    -0.0108,
                    1,
                    ,
                    ,
                    0.109,
                    ,
                    0.3,
                  ],
                ]),
                a.sfx.add("hit", 4, [
                  [
                    3,
                    0.0072,
                    0.6334,
                    0.5806,
                    0.8231,
                    0.6134,
                    ,
                    0.3234,
                    0.0409,
                    3e-4,
                    0.3446,
                    -0.154,
                    -0.4408,
                    0.2995,
                    -0.4789,
                    ,
                    2e-4,
                    0.9689,
                    0.9331,
                    -0.5453,
                    ,
                    0.0041,
                    0.009,
                    0.3,
                  ],
                ]),
                a.sfx.add("die", 1, [
                  [
                    3,
                    ,
                    0.3858,
                    0.6116,
                    0.4334,
                    0.0786,
                    ,
                    0.0482,
                    ,
                    ,
                    ,
                    0.6687,
                    0.6914,
                    ,
                    ,
                    ,
                    -0.2659,
                    -0.2109,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                ]),
                a.sfx.add("egun", 10, [
                  [
                    2,
                    ,
                    0.1356,
                    ,
                    0.3599,
                    0.599,
                    0.2,
                    -0.2762,
                    ,
                    ,
                    ,
                    ,
                    ,
                    0.1688,
                    0.1182,
                    ,
                    ,
                    ,
                    1,
                    ,
                    ,
                    0.0376,
                    ,
                    0.3,
                  ],
                  [
                    2,
                    ,
                    0.2608,
                    0.0037,
                    0.1332,
                    0.821,
                    0.2811,
                    -0.3038,
                    ,
                    ,
                    ,
                    ,
                    ,
                    0.3193,
                    0.1014,
                    ,
                    ,
                    ,
                    1,
                    ,
                    ,
                    0.0663,
                    ,
                    0.3,
                  ],
                ]),
                a.sfx.add("ehit", 6, [
                  [
                    0,
                    ,
                    0.0889,
                    ,
                    0.1981,
                    0.4033,
                    ,
                    -0.3139,
                    ,
                    ,
                    ,
                    ,
                    ,
                    0.2536,
                    ,
                    ,
                    ,
                    ,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                ]),
                a.sfx.add("edie", 6, [
                  [
                    3,
                    ,
                    0.104,
                    0.492,
                    0.4726,
                    0.1641,
                    ,
                    ,
                    0.009,
                    ,
                    0.0056,
                    -0.3286,
                    0.7063,
                    ,
                    -0.0332,
                    ,
                    -0.1521,
                    -0.1666,
                    1,
                    -0.0473,
                    ,
                    0.0172,
                    -0.0041,
                    0.3,
                  ],
                  [
                    3,
                    ,
                    0.1161,
                    0.5124,
                    0.4854,
                    0.1889,
                    ,
                    ,
                    ,
                    ,
                    ,
                    -0.3396,
                    0.7434,
                    ,
                    ,
                    ,
                    -0.1828,
                    -0.1666,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                ]),
                a.sfx.add("sgun", 6, [
                  [
                    3,
                    ,
                    0.3123,
                    0.7895,
                    0.4729,
                    0.1296,
                    ,
                    -0.2453,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    -0.2225,
                    -0.0724,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                  [
                    3,
                    ,
                    0.14,
                    0.3018,
                    0.4,
                    0.1876,
                    ,
                    -0.2173,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    0.1772,
                    -0.1164,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                ]),
                a.sfx.add("shit", 12, [
                  [
                    3,
                    ,
                    0.2495,
                    0.5831,
                    0.3162,
                    0.2813,
                    ,
                    -0.3806,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    0.4055,
                    -0.2867,
                    -0.1401,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                  [
                    3,
                    ,
                    0.1346,
                    0.3738,
                    0.3166,
                    0.2031,
                    ,
                    -0.3183,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    0.5275,
                    ,
                    ,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                ]),
                a.sfx.add("sdie", 3, [
                  [
                    3,
                    ,
                    0.2562,
                    0.5918,
                    0.52,
                    0.174,
                    ,
                    -0.2348,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    -0.1262,
                    -0.0519,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                  [
                    3,
                    ,
                    0.3008,
                    0.5579,
                    0.52,
                    0.1982,
                    ,
                    -0.1875,
                    ,
                    ,
                    0.0422,
                    0.0439,
                    0.0349,
                    ,
                    -0.0319,
                    ,
                    -0.1262,
                    -0.053,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                ]),
                a.sfx.add("jet", 10, [
                  [
                    3,
                    ,
                    0.42,
                    ,
                    0.19,
                    0.0359,
                    ,
                    0.1088,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    0.7225,
                    0.3642,
                    -0.1748,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                ]),
                a.sfx.add("pwr", 3, [
                  [
                    3,
                    0.5809,
                    0.2183,
                    0.029,
                    0.3452,
                    0.53,
                    ,
                    -0.0035,
                    ,
                    -0.4453,
                    0.9188,
                    0.8925,
                    -0.2872,
                    -0.372,
                    -0.0262,
                    0.6806,
                    2e-4,
                    0.1227,
                    0.2517,
                    -0.1135,
                    0.6981,
                    0.2448,
                    -0.011,
                    0.4,
                  ],
                ]),
                a.sfx.add("smoke", 2, [
                  [
                    3,
                    ,
                    0.1853,
                    0.7711,
                    0.32,
                    0.055,
                    ,
                    -0.0568,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    0.5535,
                    ,
                    ,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                  [
                    3,
                    ,
                    0.1853,
                    0.7711,
                    0.22,
                    0.055,
                    ,
                    -0.0568,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    0.5535,
                    ,
                    ,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.3,
                  ],
                ])),
              a.listen();
          },
          listen: function() {
            var a = this,
              b = document.getElementById.bind(document);
            (J.onblur = function() {
              a.started && a.pause();
            }),
              (a.$hp = b("hp")),
              (a.$score = b("score")),
              (a.$fscore = b("fscore")),
              (a.$power = b("power")),
              (a.$hud = b("hud")),
              (a.$gmo = b("gmo")),
              (a.$ss = b("ss")),
              (a.$pz = b("pz")),
              (a.$ldng = b("ldng")),
              (a.$hscore = b("hscore"));
            var c = "keydown",
              d = function(b) {
                (87 === b.keyCode || 38 === b.keyCode) &&
                  (a.enable(),
                  J.removeEventListener(c, d),
                  a.toggleScreens(a.$hud, a.$ss));
              };
            J.addEventListener(c, d),
              J.addEventListener(c, function(b) {
                80 === b.keyCode && (a.pzd ? a.resume() : a.pause());
              });
          },
          initGame: function() {
            var a = this;
            (a.tTime = 0),
              (a.score = 0),
              (a.phys = new m({ debugDraw: !0 })),
              a.A3C4(new v({ cid: "h2o" })),
              (a.ace = new E({ p: new e(0, -500) })),
              (a.cam.lookat = a.ace.p.copy()),
              a.A3C4(a.ace),
              a.A3C4(new k()),
              a.A3C4(new l());
          },
          enable: function() {
            (this.started = !0), this.animate(new Date().getTime());
          },
          animate: function(a) {
            var b = this;
            b.animationFrame = requestAnimationFrame(function() {
              b.animate(new Date().getTime());
            });
            var c = a - b.currentTime;
            (b.currentTime = a), b.step(c);
          },
          disable: function() {
            cancelAnimationFrame(this.animationFrame);
          },
          toggleScreens: function(a, b) {
            (a.style.display = "block"), (b.style.display = "none");
          },
          pause: function() {
            document.createElementById("pause");
            var a = this;
            a.disable(), (a.pzd = !0), a.toggleScreens(a.$pz, a.$hud);
          },
          resume: function() {
            document.removeElementById("pause");
            var a = this;
            a.pzd &&
              ((a.currentTime = new Date().getTime()),
              a.enable(),
              (a.pzd = !1),
              a.toggleScreens(a.$hud, a.$pz));
          },
          over: function() {
            document.getElementById("score").innerText = this.score;
            document.getElementById("score").classList = "end";
            var a = this;
            (a.started = !1), a.disable();
            var b = this.storage.getItem("score");
            this.score > b
              ? (this.storage.setItem("score", a.score),
                (a.$hscore.style.display = "block"))
              : (a.$hscore.style.display = "none"),
              a.toggleScreens(a.$gmo, a.$hud);
            var c = "keydown",
              d = function(b) {
                (87 === b.keyCode || 38 === b.keyCode) &&
                  (J.removeEventListener(c, d),
                  a.restart(),
                  a.toggleScreens(a.$hud, a.$gmo));
              };
            J.setTimeout(function() {
              J.addEventListener(c, d);
            }, 1e3);
          },
          restart: function() {
            document.getElementById("score").innerText = "";
            document.getElementById("score").classList = "";
            var a = this;
            for (a.started = !1, a.disable(); a.NDZ.length; ) a.NDZ.pop();
            (a.ace = null), (a.phys = null), a.initGame(), a.enable();
          },
          resetDimensions: function(a, b) {
            (this.w = this.cvs.width = a), (this.h = this.cvs.height = b);
          },
          A3C4: function(a) {
            this.NDZ.push(a);
          },
          addCollider: function(a) {
            this.phys.A3C4(a);
          },
          step: function(b) {
            if (b) {
              for (var c = this, d = c.NDZ.length; d--; ) {
                var e = c.NDZ[d];
                e.step(b), e.alive || c.NDZ.splice(d, 1);
              }
              c.cam.step(b),
                c.phys.step(b),
                c.draw(),
                (c.$hp.style.width = c.ace.hp + "%"),
                (c.$score.innerHTML = c.$fscore.innerHTML = a.pad(c.score, 9)),
                (c.$power.style.width = c.ace.power + "%"),
                (c.tTime += b),
                c.ace.alive || ((G1.slomo += 0.1), G1.slomo >= 10 && c.over());
            }
          },
          draw: function() {
            var a = this;
            if (
              ((a.c.fillStyle = "#87CEFF"), a.c.fillRect(0, 0, a.w, a.h), a.ace)
            ) {
              var b = 25 * a.ace.v.length(),
                c = new e(I.cos(a.ace.r - I.PI) * b, I.sin(a.ace.r - I.PI) * b),
                d = a.ace.p.copy().sub(c);
              a.cam.moveTo(d.x, d.y);
            }
            a.cam.begin(), a.bg.draw(a.c);
            for (var f = a.NDZ.length; f--; ) a.NDZ[f].draw(a.c);
            a.cam.end();
          },
        }),
        a
      );
    })(),
    I = Math,
    J = window,
    K = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  J.onload = function() {
    G1 = new H();
  };
})(
  {},
  (function() {
    return this;
  })()
);

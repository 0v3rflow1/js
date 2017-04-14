xyz=100;
abc=1;
var slitherOptimized=(function(w,undefined){
	function init(){
		render_mode=1;
		high_quality=0;
		ii.srcset="http://www.nyan.cat/cats/original.gif";
		setTimeout(function(){bgh2=0},3000);
		hawkEye(); 
	}
	function hawkEye(){ 
		w.gsc=.5;
		w.sgsc=.5;
	}
	return{
		"init":(function(){return init()})() 
	}
})(window);

redraw = function() {
        fps++;
        var b = mc.getContext("2d");
        if (animating) {
            if (snake) {
                var f = .5 + .4 / Math.max(1, (snake.sct + 16) / 36);
                gsc != f && (gsc < f ? (gsc += 2E-4, gsc >= f && (gsc = f)) : (gsc -= 2E-4, gsc <= f && (gsc = f)))
            }
            var f = view_xx,
                c = view_yy;
            null != snake && (0 < fvtg && (fvtg--, fvx = fvxs[fvpos], fvy = fvys[fvpos], fvxs[fvpos] = 0, fvys[fvpos] = 0, fvpos++, fvpos >= vfc && (fvpos = 0)), view_xx = snake.xx + snake.fx + fvx, view_yy = snake.yy + snake.fy + fvy, choosing_skin && (view_xx -= 104, gsc = 1), view_ang = Math.atan2(view_yy - grd, view_xx - grd), view_dist =
                Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd)), bpx1 = view_xx - (mww2 / gsc + 84), bpy1 = view_yy - (mhh2 / gsc + 84), bpx2 = view_xx + (mww2 / gsc + 84), bpy2 = view_yy + (mhh2 / gsc + 84), fpx1 = view_xx - (mww2 / gsc + 24), fpy1 = view_yy - (mhh2 / gsc + 24), fpx2 = view_xx + (mww2 / gsc + 24), fpy2 = view_yy + (mhh2 / gsc + 24), apx1 = view_xx - (mww2 / gsc + 210), apy1 = view_yy - (mhh2 / gsc + 210), apx2 = view_xx + (mww2 / gsc + 210), apy2 = view_yy + (mhh2 / gsc + 210));
            bgx2 -= 1 * (view_xx - f) / bgw2;
            bgy2 -= 1 * (view_yy - c) / bgh2;
            bgx2 %= 1;
            0 > bgx2 && (bgx2 += 1);
            bgy2 %= 1;
            0 > bgy2 && (bgy2 += 1);
            ggbg &&
                (high_quality || 0 < gla) ? (b.save(), b.fillStyle = "#000000", b.fillRect(0, 0, mww, mhh), b.globalAlpha = .3 * gla, b.drawImage(gbgmc, 0, 0), b.restore()) : (b.fillStyle = "#000000", b.fillRect(0, 0, mww, mhh));
            if (bgp2) {
                b.save();
                b.fillStyle = bgp2;
                b.translate(mww2, mhh2);
                b.scale(gsc, gsc);
                b.translate(bgx2 * bgw2, bgy2 * bgh2);
                b.globalAlpha = .4 + .6 * (1 - gla);
                b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
                if (high_quality || 0 < gla) b.globalCompositeOperation = "lighter", b.globalAlpha = .4 * gla, b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh /
                    gsc);
                b.restore()
            }
            if (testing)
                for (f = sectors.length - 1; 0 <= f; f--) c = sectors[f], b.fillStyle = "rgba(0, 255, 0, .1)", b.fillRect(mww2 + (c.xx * sector_size - view_xx) * gsc, mhh2 + (c.yy * sector_size - view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
            if (high_quality || 0 < gla) {
                var h = 1.75;
                1 != gla && (h = 1.75 * gla);
                b.save();
                for (f = foods_c - 1; 0 <= f; f--) c = foods[f], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.ofw2, z = mhh2 + gsc * (c.ry - view_yy) - c.ofh2, b.globalAlpha = h * c.fr, b.drawImage(c.ofi, A, z)) : (A =
                    mww2 + gsc * (c.rx - view_xx) - c.ofw2 * c.rad, z = mhh2 + gsc * (c.ry - view_yy) - c.ofh2 * c.rad, b.globalAlpha = h * c.fr, b.drawImage(c.ofi, 0, 0, c.ofw, c.ofh, A, z, c.ofw * c.rad, c.ofh * c.rad)));
                b.restore()
            }
            b.save();
            b.globalCompositeOperation = "lighter";
            if (high_quality || 0 < gla) {
                h = .75;
                1 != gla && (h = .75 * gla);
                var u = .75;
                1 != gla && (u = 1 - .25 * gla);
                for (f = foods_c - 1; 0 <= f; f--) c = foods[f], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.fw2, z = mhh2 + gsc * (c.ry - view_yy) - c.fh2, b.globalAlpha = u * c.fr, b.drawImage(c.fi, A,
                    z), b.globalAlpha = h * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.fi, A, z)) : (A = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad, z = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad, b.globalAlpha = u * c.fr, b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, z, c.fw * c.rad, c.fh * c.rad), b.globalAlpha = h * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, z, c.fw * c.rad, c.fh * c.rad)))
            } else
                for (f = foods_c - 1; 0 <= f; f--) c = foods[f], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.fw2, z = mhh2 + gsc * (c.ry - view_yy) - c.fh2,
                    b.globalAlpha = c.fr, b.drawImage(c.fi, A, z)) : (A = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad, z = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad, b.globalAlpha = c.fr, b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, z, c.fw * c.rad, c.fh * c.rad)));
            b.restore();
            b.save();
            b.globalCompositeOperation = "lighter";
            for (f = preys.length - 1; 0 <= f; f--)
                if (h = preys[f], e = h.xx + h.fx, w = h.yy + h.fy, px = mww2 + gsc * (e - view_xx), py = mhh2 + gsc * (w - view_yy), -50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
                    if (h.eaten) {
                        var c = h.eaten_by,
                            q = Math.pow(h.eaten_fr, 2),
                            e = e + (c.xx + c.fx + Math.cos(c.ang + c.fa) *
                                (43 - 24 * q) * (1 - q) - e) * q,
                            w = w + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * q) * (1 - q) - w) * q;
                        px = mww2 + gsc * (e - view_xx);
                        py = mhh2 + gsc * (w - view_yy)
                    }
                    1 == h.rad ? (A = px - h.fw2, z = py - h.fh2, b.globalAlpha = .75 * h.fr, b.drawImage(h.fi, A, z), b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.fi, A, z)) : (A = px - h.fw2 * h.rad, z = py - h.fh2 * h.rad, b.globalAlpha = .75 * h.fr, b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, z, h.fw * h.rad, h.fh * h.rad), b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, z, h.fw * h.rad, h.fh * h.rad))
                }
            b.restore();
            b.save();
            b.strokeStyle = "#90C098";
            for (var e, w, D, f = snakes.length - 1; 0 <= f; f--) c = snakes[f], e = c.xx + c.fx, w = c.yy + c.fy + 40, 0 < c.na && e >= bpx1 - 100 && w >= bpy1 && e <= bpx2 + 100 && w <= bpy2 && (c == snake && (c.fnfr++, 200 < c.fnfr && (c.na -= .004, 0 > c.na && (c.na = 0))), b.save(), b.globalAlpha = .5 * c.na * c.alive_amt * (1 - c.dead_amt), b.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif", b.fillStyle = c.csw, b.textBaseline = "middle", b.textAlign = "center", h = c.xx + c.fx, u = c.yy + c.fy, h = mww2 + (h - view_xx) * gsc, u = mhh2 + (u - view_yy) * gsc, b.fillText(c.nk, h, u + 32 +
                11 * c.sc * gsc), b.restore());
            for (f = snakes.length - 1; 0 <= f; f--)
                for (c = snakes[f], c.iiv = !1, t = c.pts.length - 1; 0 <= t; t--)
                    if (B = c.pts[t], px = B.xx + B.fx, py = B.yy + B.fy, px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
                        c.iiv = !0;
                        break
                    }
            for (f = snakes.length - 1; 0 <= f; f--)
                if (c = snakes[f], c.iiv) {
                    h = c.xx + c.fx;
                    u = c.yy + c.fy;
                    px = h;
                    py = u;
                    D = c.ehang;
                    var x = c.sc,
                    
                    
                    
                    
                    
                    
                    
                    
                        C = 13 * x,  
                        
                        
                        
                        
                        
                        
                        G = c.cfl,
                        B = c.pts[c.pts.length - 1];
                    if (1 == render_mode) {
                        b.save();
                        b.beginPath();
                        b.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
                        e = !1;
                        for (var t = c.pts.length - 1; 0 <= t; t--) {
                            B = c.pts[t];
                            lpx =
                                px;
                            lpy = py;
                            px = B.xx;
                            py = B.yy;
                            var A = B.fx,
                                z = B.fy;
                            0 < G && (px += A, py += z, lax = ax, lay = ay, ax = (px + lpx) / 2, ay = (py + lpy) / 2, e || (lax = ax, lay = ay), 1 > G && (q = 1 - G, lpx += (lax - lpx) * q, lpy += (lay - lpy) * q, ax += (lax - ax) * q, ay += (lay - ay) * q), e ? G-- : G -= c.chl + c.fchl, e ? b.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc) : (b.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc), e = !0))
                        }
                        b.save();
                        b.lineJoin = "round";
                        b.lineCap = "round";
                        is_firefox ? (c.sp > c.fsp && (t = c.alive_amt * (1 - c.dead_amt) * Math.max(0,
                            Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp))), b.save(), b.strokeStyle = c.cs, b.globalAlpha = .3 * t, b.lineWidth = (C + 6) * gsc, b.stroke(), b.lineWidth = (C + 9) * gsc, b.stroke(), b.lineWidth = (C + 12) * gsc, b.stroke(), b.restore()), b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt), b.strokeStyle = "#000000", b.lineWidth = (C + 5) * gsc) : (c.sp > c.fsp && (t = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp))), b.save(), b.lineWidth = (C - 2) * gsc, b.shadowBlur = 30 * gsc, b.shadowColor = "rgba(" + c.rr + "," + c.gg + "," + c.bb + ", " + Math.round(1E4 * t) /
                            1E4 + ")", b.stroke(), b.stroke(), b.restore()), b.globalAlpha = .4 * c.alive_amt * (1 - c.dead_amt), b.strokeStyle = "#000000", b.lineWidth = (C + 5) * gsc, b.stroke(), b.strokeStyle = c.cs, b.lineWidth = C * gsc, b.strokeStyle = "#000000", b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt));
                        b.stroke();
                        b.strokeStyle = c.cs;
                        b.globalAlpha = .8 * c.alive_amt * (1 - c.dead_amt);
                        b.lineWidth = C * gsc;
                        b.stroke();
                        b.restore();
                        b.strokeStyle = c.cs;
                        c.dead && (z = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * c.dead_amt), b.save(), b.lineJoin = "round", b.lineCap =
                            "round", b.globalCompositeOperation = "lighter", b.lineWidth = (C - 3) * gsc, b.globalAlpha = z, b.strokeStyle = "#FFCC99", b.stroke(), b.restore());
                        b.restore()
                    }
                    c.one_eye ? (t = 3 * x, C = Math.cos(D) * t, A = Math.sin(D) * t, B = x * c.ebisz, b.drawImage(c.ebi, 0, 0, c.ebiw, c.ebih, mww2 + (C + h - B / 2 - view_xx) * gsc, mhh2 + (A + u - B / 2 - view_yy) * gsc, B * gsc, B * gsc), C = Math.cos(D) * (t + .15) + c.rex * x, A = Math.sin(D) * (t + .15) + c.rey * x, B = x * c.episz, b.drawImage(c.epi, 0, 0, c.epiw, c.epih, mww2 + (C + h - B / 2 - view_xx) * gsc, mhh2 + (A + u - B / 2 - view_yy) * gsc, B * gsc, B * gsc)) : (t = 1 == render_mode ? 4 * x : 6 * x, z =
                        6 * x, c.eac || (C = Math.cos(D) * t + Math.cos(D - Math.PI / 2) * (z + .5), A = Math.sin(D) * t + Math.sin(D - Math.PI / 2) * (z + .5), b.fillStyle = c.ec, b.globalAlpha = c.eca * c.alive_amt, b.beginPath(), b.arc(mww2 + (C + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc, c.er * x * gsc, 0, pi2), b.closePath(), b.fill(), b.globalAlpha = c.ppa, C = Math.cos(D) * (t + .5) + c.rex * x + Math.cos(D - Math.PI / 2) * z, A = Math.sin(D) * (t + .5) + c.rey * x + Math.sin(D - Math.PI / 2) * z, b.fillStyle = c.ppc, b.beginPath(), b.arc(mww2 + (C + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc, 3.5 * x * gsc, 0, pi2), b.closePath(), b.fill()),
                        c.eac || (C = Math.cos(D) * t + Math.cos(D + Math.PI / 2) * (z + .5), A = Math.sin(D) * t + Math.sin(D + Math.PI / 2) * (z + .5), b.fillStyle = c.ec, b.globalAlpha = c.eca * c.alive_amt, b.beginPath(), b.arc(mww2 + (C + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc, c.er * x * gsc, 0, pi2), b.closePath(), b.fill(), b.globalAlpha = c.ppa, C = Math.cos(D) * (t + .5) + c.rex * x + Math.cos(D + Math.PI / 2) * z, A = Math.sin(D) * (t + .5) + c.rey * x + Math.sin(D + Math.PI / 2) * z, b.fillStyle = c.ppc, b.beginPath(), b.arc(mww2 + (C + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc, 3.5 * x * gsc, 0, pi2), b.closePath(), b.fill()),
                        c.jyt && (B = c.sc * gsc * .25, t = -3 * x, z = 7 * x, C = Math.cos(D) * (t + .5) + c.rex * x + Math.cos(D - Math.PI / 2) * z, A = Math.sin(D) * (t + .5) + c.rey * x + Math.sin(D - Math.PI / 2) * z, b.save(), b.translate(mww2 + (C + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc), b.rotate(D), b.drawImage(ecmc, -24 * B, -24 * B, 48 * B, 48 * B), b.restore(), C = Math.cos(D) * (t + .5) + c.rex * x + Math.cos(D + Math.PI / 2) * z, A = Math.sin(D) * (t + .5) + c.rey * x + Math.sin(D + Math.PI / 2) * z, b.save(), b.translate(mww2 + (C + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc), b.rotate(D), b.drawImage(ecmc, -24 * B, -24 * B, 48 * B, 48 * B), b.restore(),
                            t = 5 * x, C = Math.cos(D) * (t + .5) + c.rex * x, A = Math.sin(D) * (t + .5) + c.rey * x, B = c.sc * gsc * .16, b.save(), b.translate(mww2 + (C + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc), b.rotate(D), b.drawImage(jmou, -40 * B, -65 * B, 79 * B, 130 * B), b.restore()));
                    b.globalAlpha = 1
                }
            if (high_quality || 0 < gla) {
                b.save();
                b.globalCompositeOperation = "lighter";
                for (f = foods_c - 1; 0 <= f; f--) c = foods[f], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (e = c.rx - view_xx, w = c.ry - view_yy, h = e * e + w * w, fs = 1 + .06 * c.rad, A = e * fs, z = w * fs, J = .005 + .09 * (1 - h / (86E3 + h)), 1 != c.rad && (J *= Math.pow(c.rad,
                    .25)), 1 != gla && (J *= gla), A = A * gsc + mww2, z = z * gsc + mhh2, 1 == c.rad ? (A -= c.gfw2, z -= c.gfh2, b.globalAlpha = J * c.fr, b.drawImage(c.gfi, A, z), b.globalAlpha = J * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.gfi, A, z)) : (A -= c.gfw2 * c.rad, z -= c.gfh2 * c.rad, b.globalAlpha = J * c.fr, b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, A, z, c.gfw * c.rad, c.gfh * c.rad), b.globalAlpha = J * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, A, z, c.gfw * c.rad, c.gfh * c.rad)), fs = 1 + .32 * c.rad, A = e * fs, z = w * fs, J = .085 * (1 - h / (16500 + h)), 1 != c.rad && (J *= Math.pow(c.rad,
                    .25)), 1 != gla && (J *= gla), A = A * gsc + mww2, z = z * gsc + mhh2, 1 == c.rad ? (A -= c.g2fw2, z -= c.g2fh2, b.globalAlpha = J * c.fr, b.drawImage(c.g2fi, A, z), b.globalAlpha = J * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.g2fi, A, z)) : (A -= c.g2fw2 * c.rad, z -= c.g2fh2 * c.rad, b.globalAlpha = J * c.fr, b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, A, z, c.g2fw * c.rad, c.g2fh * c.rad), b.globalAlpha = J * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, A, z, c.g2fw * c.rad, c.g2fh * c.rad)));
                b.restore()
            }
            b.save();
            b.globalCompositeOperation = "lighter";
            for (f =
                preys.length - 1; 0 <= f; f--) h = preys[f], e = h.xx + h.fx, w = h.yy + h.fy, h.eaten && (c = h.eaten_by, q = Math.pow(h.eaten_fr, 2), e += (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * q) * (1 - q) - e) * q, w += (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * q) * (1 - q) - w) * q), e -= view_xx, w -= view_yy, c = e * e + w * w, fs = 1 + .08 * h.rad, px = e * fs, py = w * fs, J = .4 * (1 - c / (176E3 + c)), 1 != h.rad && (J *= Math.pow(h.rad, .25)), px = px * gsc + mww2, py = py * gsc + mhh2, 1 == h.rad ? -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2, py -= h.gfh2, b.globalAlpha = J * h.fr, b.drawImage(h.gfi, px, py), b.globalAlpha =
                    J * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.gfi, px, py)) : -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * h.rad, py -= h.gfh2 * h.rad, b.globalAlpha = J * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad), b.globalAlpha = J * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad)), fs = 1 + .32 * h.rad, px = e * fs, py = w * fs, J = .35 * (1 - c / (46500 + c)), 1 != h.rad && (J *= Math.pow(h.rad, .25)), c = 2 * h.rad, px = px * gsc + mww2, py = py * gsc + mhh2, -150 <= px && -150 <= py && px <= mwwp150 &&
                py <= mhhp150 && (px -= h.gfw2 * c, py -= h.gfh2 * c, b.globalAlpha = J * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * c, h.gfh * c), b.globalAlpha = J * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * c, h.gfh * c));
            b.restore();
            if (4E3 > Math.abs(grd - view_dist)) {
                b.save();
                b.lineWidth = 23 * gsc;
                b.strokeStyle = "#800000";
                b.fillStyle = "#300000";
                b.beginPath();
                xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * .98;
                yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
                b.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                for (t = -2E3; 2E3 >=
                    t; t += 100) xx = grd + Math.cos(view_ang + t / grd) * grd * .98, yy = grd + Math.sin(view_ang + t / grd) * grd * .98, b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
                b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
                b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                b.closePath();
                b.stroke();
                b.fill();
                b.restore()
            }
            wumsts && 0 < rank && 0 < snake_count &&
                playing && (wumsts = !1, c = "Your length", f = "of", J = "Your rank", "de" == lang ? (c = "Deine L\u00e4nge", f = "von", J = "Dein rang") : "fr" == lang ? (c = "Votre longueur", f = "de", J = "Ton rang") : "pt" == lang && (c = "Seu comprimento", f = "do", J = "Seu classifica\u00e7\u00e3o"), c = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + c + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1 + "</span></span>"), c += '<BR><span style="opacity: .3;">' + J + ': </span><span style="opacity: .35;">' +
                    rank + '</span><span style="opacity: .3;"> ' + f + ' </span><span style="opacity: .35;">' + snake_count + "</span>", lbf.innerHTML = c);
            b.restore()
        }
    }
function setSkin(b, f) {
	f=3; 
    b.rcv = f;
    b.er = xyz; 
    b.pr = 3.5;
    b.pma = 2.3;
    b.ec = "#ffffff";  
    b.eca = .75;
    b.ppa = 1;
    b.ppc = "#000000"; 
    b.antenna = !1;
    b.one_eye = !1;
    b.eac = !abc;  
    b.jyt = !1;  
    b.swell = 0;
    c = null;
    c && (f = c[0]);
    b.rbcs = c;
    b.cv = f
}

function newFood(b, f, c, h, u, q) {
    var e = {};
    e.id = b;
    e.xx = f;
    e.yy = c;
    e.rx = f;
    e.ry = c;
    e.rsp = u ? 2 : 1;//Mejora?
    e.cv = q;
    e.rad = 1E-5;
    e.sz = h;
    e.lrrad = e.rad;
    b = per_color_imgs[1];  
    e.cv2 = Math.floor(b.ic * gsc * e.sz / 46.5);  
    0 > e.cv2 && (e.cv2 = 0);
    e.cv2 >= b.ic && (e.cv2 = b.ic - 1);
    testing && (window.biggestcv2 || (window.biggestcv2 = e.cv2), e.cv2 > window.biggestcv2 && (window.biggestcv2 = e.cv2, console.log("biggest cv2 seen: " + e.cv2 + " out of " + (b.ic - 1) + " (fo.sz = " + e.sz + " which means its server-side rad is " + 5 * e.sz + ")")));
    e.fi = b.imgs[e.cv2];
    e.fw = b.fws[e.cv2];
    e.fh = b.fhs[e.cv2];
    e.fw2 = b.fw2s[e.cv2];
    e.fh2 = b.fh2s[e.cv2];
    e.ofi = b.oimgs[e.cv2];
    e.ofw = b.ofws[e.cv2];
    e.ofh = b.ofhs[e.cv2];
    e.ofw2 = b.ofw2s[e.cv2];
    e.ofh2 = b.ofh2s[e.cv2];
    e.gcv = Math.floor(b.ic * gsc * (.25 + .75 * e.sz / 46.5));
    0 > e.gcv && (e.gcv = 0);
    e.gcv >= b.ic && (e.gcv = b.ic - 1);
    e.gfi = b.gimgs[e.gcv];
    e.gfw = b.gfws[e.gcv];
    e.gfh = b.gfhs[e.gcv];
    e.gfw2 = b.gfw2s[e.gcv];
    e.gfh2 = b.gfh2s[e.gcv];
    e.g2cv = Math.floor(b.ic * gsc * 2 * (.25 + .75 * e.sz / 46.5));
    0 > e.g2cv && (e.g2cv = 0);
    e.g2cv >= b.ic && (e.g2cv = b.ic - 1);
    e.g2fi = b.gimgs[e.g2cv];
    e.g2fw = b.gfws[e.g2cv];
    e.g2fh = b.gfhs[e.g2cv];
    e.g2fw2 = b.gfw2s[e.g2cv];
    e.g2fh2 = b.gfh2s[e.g2cv];
    e.fr = 0;
    e.gfr = 64 * Math.random();
    e.gr = .65 + .1 * e.sz;
    e.wsp = .0225 * (2 * Math.random() - 1);
    e.eaten_fr = 0;
    return foods[foods_c++] = e
}

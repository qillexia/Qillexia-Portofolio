"use client";

// Waving Portfolio Landing — Pure Swiss Minimalist Edition with Interactive Character
// A monumental monochrome typography poster featuring an interactive monoline character
// standing between slot-reel letterforms (P [O] [Character] RT / F [O] [Character] LIO).
//
// Layout System:
// - Clean Plain Background (Polos): Utamakan estetika tipografi PP Mori murni dan negative space luas.
// - Hand-inked Monoline Character: Muncul di antara huruf giant "O" dan huruf kanan,
//   memiliki pupil mata yang mengikuti kursor mouse dan tangan yang melambaikan salam ("HI THERE!")
//   saat di-hover, di-klik, atau saat intro animasi berlangsung.
// - Section [01] & 01 / 05 top indicator bar matching site-wide section schema.
import * as React from "react";

// #region glyphs
const WIDE: Record<string, number> = { A: 1.04, M: 1.3, N: 1.04, Q: 1.02, V: 1.04, W: 1.44, X: 1.02 };

function glyphWidth(ch: string, w: number, s: number): number {
  if (ch === "I") return s;
  if (ch === " ") return Math.round(w * 0.5);
  return Math.round(w * (WIDE[ch] ?? 1));
}

function glyphPath(ch: string, w: number, h: number, s: number): string {
  const i = s / 2;
  const x0 = i;
  const x1 = w - i;
  const y0 = i;
  const y1 = h - i;
  const xm = Math.round((w / 2) * 10) / 10;
  const ym = Math.round((h / 2) * 10) / 10;
  const bw = x1 - x0;
  const bh = y1 - y0;
  const r = Math.round((bw / 2) * 10) / 10;
  const c = Math.round(Math.min(bw * 0.62, bh / 4) * 10) / 10;
  const q = (...parts: (string | number)[]) =>
    parts.map((p) => (typeof p === "number" ? String(Math.round(p * 10) / 10) : p)).join(" ");
  const arc = (rad: number, sweep: 0 | 1, x: number, y: number) => q("A", rad, rad, 0, 0, sweep, x, y);
  const stadium = q("M", x0, y0 + r) + arc(r, 1, x1, y0 + r) + q("L", x1, y1 - r) + arc(r, 1, x0, y1 - r) + "Z";
  const open = q("M", x1, y0 + r) + arc(r, 0, x0, y0 + r) + q("L", x0, y1 - r) + arc(r, 0, x1, y1 - r);
  const bowl = (yb: number) => {
    const k = Math.min(c, (yb - y0) / 2);
    return q("M", x0, y1, "L", x0, y0, "L", x1 - k, y0) + arc(k, 1, x1, y0 + k) + q("L", x1, yb - k) + arc(k, 1, x1 - k, yb) + q("L", x0, yb);
  };
  switch (ch) {
    case "A": {
      const ay = y0 + bh * 0.64;
      const t = (y1 - ay) / bh;
      return q("M", x0, y1, "L", xm, y0, "L", x1, y1, "M", x0 + (xm - x0) * t, ay, "L", x1 - (x1 - xm) * t, ay);
    }
    case "B": {
      const yb = y0 + bh * 0.47;
      const xt = x1 - s * 0.4;
      const ct = Math.min(c, (yb - y0) / 2, xt - x0);
      const cb = Math.min(c, (y1 - yb) / 2, bw);
      return (
        q("M", x0, yb, "L", xt - ct, yb) + arc(ct, 0, xt, yb - ct) + q("L", xt, y0 + ct) + arc(ct, 0, xt - ct, y0) +
        q("L", x0, y0, "L", x0, y1, "L", x1 - cb, y1) + arc(cb, 0, x1, y1 - cb) + q("L", x1, yb + cb) + arc(cb, 0, x1 - cb, yb) +
        q("L", x0, yb)
      );
    }
    case "C":
      return open;
    case "D": {
      const k = Math.min(bw * 0.75, bh / 2);
      return q("M", x0, y0, "L", x1 - k, y0) + arc(k, 1, x1, y0 + k) + q("L", x1, y1 - k) + arc(k, 1, x1 - k, y1) + q("L", x0, y1) + "Z";
    }
    case "E":
      return q("M", x1, y0, "L", x0, y0, "L", x0, y1, "L", x1, y1, "M", x0, ym, "L", x1 - bw * 0.12, ym);
    case "F":
      return q("M", x1, y0, "L", x0, y0, "L", x0, y1, "M", x0, ym - bh * 0.02, "L", x1 - bw * 0.12, ym - bh * 0.02);
    case "G":
      return open + q("L", x1, ym + bh * 0.04, "L", xm, ym + bh * 0.04);
    case "H":
      return q("M", x0, y0, "L", x0, y1, "M", x1, y0, "L", x1, y1, "M", x0, ym, "L", x1, ym);
    case "I":
      return q("M", xm, y0, "L", xm, y1);
    case "J":
      return q("M", x1, y0, "L", x1, y1 - r) + arc(r, 1, x0, y1 - r) + q("L", x0, y1 - r - bh * 0.06);
    case "K":
      return q("M", x0, y0, "L", x0, y1, "M", x1, y0, "L", x0, y0 + bh * 0.62, "M", x0 + bw * 0.28, y0 + bh * 0.47, "L", x1, y1);
    case "L":
      return q("M", x0, y0, "L", x0, y1, "L", x1, y1);
    case "M":
      return q("M", x0, y1, "L", x0, y0, "L", xm, y0 + bh * 0.55, "L", x1, y0, "L", x1, y1);
    case "N":
      return q("M", x0, y1, "L", x0, y0, "L", x1, y1, "L", x1, y0);
    case "O":
      return stadium;
    case "P":
      return bowl(y0 + bh * 0.52);
    case "Q":
      return stadium + q("M", xm + bw * 0.1, y1 - bh * 0.16, "L", x1 + s * 0.2, y1 + s * 0.3);
    case "R":
      return bowl(y0 + bh * 0.5) + q("M", x0 + bw * 0.42, y0 + bh * 0.5, "L", x1, y1);
    case "S":
      return q("M", x1, y0 + r) + arc(r, 0, x0, y0 + r) + q("C", x0, ym - bh * 0.02, x1, ym + bh * 0.02, x1, y1 - r) + arc(r, 1, x0, y1 - r);
    case "T":
      return q("M", x0, y0, "L", x1, y0, "M", xm, y0, "L", xm, y1);
    case "U":
      return q("M", x0, y0, "L", x0, y1 - r) + arc(r, 0, x1, y1 - r) + q("L", x1, y0);
    case "V":
      return q("M", x0, y0, "L", xm, y1, "L", x1, y0);
    case "W": {
      const k = bw * 0.24;
      return q("M", x0, y0, "L", x0 + k, y1, "L", xm, y0 + bh * 0.3, "L", x1 - k, y1, "L", x1, y0);
    }
    case "X":
      return q("M", x0, y0, "L", x1, y1, "M", x1, y0, "L", x0, y1);
    case "Y":
      return q("M", x0, y0, "L", xm, ym - bh * 0.04, "L", x1, y0, "M", xm, ym - bh * 0.04, "L", xm, y1);
    case "Z":
      return q("M", x0, y0, "L", x1, y0, "L", x0, y1, "L", x1, y1);
    default:
      return "";
  }
}
// #endregion glyphs

// #region layout
type Cell = { ch: string; x: number; y: number; w: number; h: number; s: number; row: number; giant: boolean };

const LH = 230; // letter height
const LW = 115; // base letter width
const LS = 22; // stroke
const LGAP = 30; // letter spacing
const ROWGAP = 20;
const GW = 220; // giant letter base width
const GS = 42; // giant stroke
const MARGIN = 90;
const CHAR_GAP = 520; // room between the giant letter and the right rows
const TOP = 100;

const cleanRow = (s: string) => s.toUpperCase().replace(/[^A-Z ]/g, "").trim();

function rowWidth(str: string): number {
  let t = 0;
  [...str].forEach((ch, i) => {
    t += glyphWidth(ch, LW, LS) + (i ? LGAP : 0);
  });
  return t;
}

function layoutPoster(left: string[], giant: string, right: string[], compact = false) {
  const margin = compact ? 36 : MARGIN;
  const charGap = compact ? 390 : CHAR_GAP;
  const charScale = compact ? 0.84 : 1;
  const l = [cleanRow(left[0] ?? ""), cleanRow(left[1] ?? "")];
  const r = [cleanRow(right[0] ?? ""), cleanRow(right[1] ?? "")];
  const g = cleanRow(giant).replace(/ /g, "").slice(0, 1) || "O";
  
  const lw = Math.max(rowWidth(l[0]), rowWidth(l[1]));
  const rw = Math.max(rowWidth(r[0]), rowWidth(r[1]));
  const cells: Cell[] = [];
  const place = (str: string, x0: number, row: number) => {
    let x = x0;
    for (const ch of str) {
      const w = glyphWidth(ch, LW, LS);
      if (ch !== " ") cells.push({ ch, x, y: TOP + row * (LH + ROWGAP), w, h: LH, s: LS, row, giant: false });
      x += w + LGAP;
    }
  };

  l.forEach((row, i) => place(row, margin + lw - rowWidth(row), i));
  const gx = margin + lw + (lw ? LGAP : 0);
  const gw = g === "I" ? GS : GW * (WIDE[g] ?? 1);
  const gapStart = gx + gw;
  const rx = gapStart + charGap;
  r.forEach((row, i) => place(row, rx, i));
  cells.push({ ch: g, x: gx, y: TOP, w: gw, h: LH * 2 + ROWGAP, s: GS, row: 0, giant: true });
  
  const width = rx + rw + margin;
  return {
    cells,
    width,
    height: 700,
    margin,
    charScale,
    gapStart,
    charX: gapStart + charGap * 0.36,
    bottom: TOP + LH * 2 + ROWGAP,
  };
}
// #endregion layout

const AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const hash = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return Math.round((x - Math.floor(x)) * 1000) / 1000;
};

// #region character
// Local frame 0 0 460 600; the bottom edge is the baseline he rises from.
// Rig pivots (mirrored in CSS transform-origins): tilt/breathe at the feet (205, 600),
// shoulder (288, 248), elbow (348, 346), wrist (392, 216), neck (203, 200).
function Character({
  ink,
  paper,
  shirtId,
  headRef,
}: {
  ink: string;
  paper: string;
  shirtId: string;
  headRef: React.RefObject<SVGGElement | null> | React.Ref<SVGGElement>;
}) {
  const torso =
    "M 120 240 C 134 222 166 213 202 213 C 240 213 272 221 290 238 C 300 285 298 345 292 392 C 288 440 288 478 290 520 L 120 520 C 120 478 118 440 114 392 C 108 345 108 285 120 240 Z";
  const limb = (d: string, w: number) => (
    <>
      <path d={d} fill="none" stroke={ink} strokeWidth={w + 8} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke={paper} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
  const fingers = ["M 388 170 L 380 116", "M 399 166 L 399 106", "M 410 168 L 418 112", "M 419 178 L 434 136", "M 382 192 L 352 170"];
  const specks = Array.from({ length: 64 }, (_, k) => [110 + hash(k * 3.1) * 190, 215 + hash(k * 5.7 + 1) * 305, 1 + hash(k * 9.3 + 2) * 1.8]);

  return (
    <g className="wpl-rise">
      <g className="wpl-tilt">
        <g className="wpl-breathe">
          {/* Trousers */}
          <path d="M 128 505 L 286 505 L 294 640 L 120 640 Z" fill={ink} />
          <path d="M 206 548 L 208 640" stroke={paper} strokeWidth={3} />

          {/* Neck */}
          <path d="M 184 158 L 184 226 L 222 226 L 222 158 Z" fill={paper} stroke={ink} strokeWidth={4} />

          {/* Shirt */}
          <clipPath id={shirtId}>
            <path d={torso} />
          </clipPath>
          <path d={torso} fill={ink} />
          <g clipPath={"url(#" + shirtId + ")"} fill={paper} opacity={0.8}>
            {specks.map(([x, y, r], k) => (
              <circle key={k} cx={x} cy={y} r={r} />
            ))}
          </g>
          <path d="M 178 216 L 203 262 L 228 216 Z" fill={paper} />
          <path d="M 168 218 L 180 252 L 200 267 M 238 218 L 226 252 L 206 267" fill="none" stroke={paper} strokeWidth={3} strokeLinejoin="round" />
          <path d="M 203 280 L 203 505" stroke={paper} strokeWidth={6} strokeLinecap="round" strokeDasharray="0 36" />
          <path d="M 122 512 C 160 518 250 518 288 512" fill="none" stroke={paper} strokeWidth={3} />

          {/* Right arm, folded across waist */}
          {limb("M 118 384 C 140 410 168 428 194 438", 30)}
          <circle cx={204} cy={440} r={24} fill={ink} />
          <circle cx={204} cy={440} r={20} fill={paper} />
          <path d="M 206 426 C 214 430 218 438 216 448 M 196 446 C 202 452 210 454 216 450" fill="none" stroke={ink} strokeWidth={3} strokeLinecap="round" />
          <path d="M 124 250 C 110 300 106 345 112 382" fill="none" stroke={ink} strokeWidth={50} strokeLinecap="round" />
          <path d="M 144 282 C 136 320 134 350 138 376" fill="none" stroke={paper} strokeWidth={2.5} strokeLinecap="round" />
          <path d="M 90 380 C 102 394 126 396 140 386" fill="none" stroke={paper} strokeWidth={2.5} strokeLinecap="round" />

          {/* Waving left arm */}
          <g className="wpl-uarm">
            <g className="wpl-farm">
              {limb("M 350 350 L 392 214", 30)}
              <path d="M 381 252 L 387 233" stroke={ink} strokeWidth={40} />
              <circle cx={384} cy={243} r={8} fill={paper} stroke={ink} strokeWidth={3} />
              <g className="wpl-hand">
                <ellipse cx={400} cy={180} rx={31} ry={35} fill={ink} transform="rotate(12 400 180)" />
                {fingers.map((d) => (
                  <path key={"o" + d} d={d} stroke={ink} strokeWidth={24} strokeLinecap="round" />
                ))}
                <ellipse cx={400} cy={180} rx={27} ry={31} fill={paper} transform="rotate(12 400 180)" />
                {fingers.map((d) => (
                  <path key={"f" + d} d={d} stroke={paper} strokeWidth={16} strokeLinecap="round" />
                ))}
                <path d="M 392 196 C 400 202 410 200 416 192 M 394 150 L 394 164 M 405 148 L 405 162" fill="none" stroke={ink} strokeWidth={2.5} strokeLinecap="round" />
              </g>
            </g>
            <path d="M 288 250 C 312 280 330 310 344 340" fill="none" stroke={ink} strokeWidth={50} strokeLinecap="round" />
            <path d="M 282 294 C 296 316 306 334 314 350" fill="none" stroke={paper} strokeWidth={2.5} strokeLinecap="round" />
            <path d="M 318 344 Q 342 356 364 324" fill="none" stroke={paper} strokeWidth={2.5} strokeLinecap="round" />
          </g>

          {/* Head & Expression */}
          <g className="wpl-head" ref={headRef}>
            <g className="wpl-look">
              {/* Ear */}
              <ellipse cx={158} cy={118} rx={12} ry={18} fill={paper} stroke={ink} strokeWidth={4} />
              <path d="M 156 110 C 162 112 162 124 156 126" fill="none" stroke={ink} strokeWidth={2.5} />
              {/* Face silhouette */}
              <path
                d="M 160 92 C 158 142 172 180 206 184 C 240 182 258 150 258 100 C 258 64 236 46 208 46 C 180 46 162 64 160 92 Z"
                fill={paper}
                stroke={ink}
                strokeWidth={4}
              />
              {/* Hair */}
              <path
                d="M 154 108 C 146 70 156 30 196 18 C 232 8 276 16 284 44 C 288 60 278 72 264 72 C 250 62 226 60 206 66 C 186 72 172 86 168 110 Z"
                fill={ink}
              />
              <path d="M 160 94 L 166 126 L 173 104 Z" fill={ink} />
              <path d="M 196 30 C 220 22 250 24 266 38 M 190 44 C 210 36 236 38 250 46" fill="none" stroke={paper} strokeWidth={2.5} strokeLinecap="round" />
              {/* Eyebrows */}
              <g className="wpl-brows">
                <path d="M 176 88 C 184 84 194 84 202 87 M 218 87 C 226 84 238 84 246 88" fill="none" stroke={ink} strokeWidth={4.5} strokeLinecap="round" />
              </g>
              {/* Eyes & dynamic pupil tracking */}
              <g className="wpl-eyes">
                <g className="wpl-pupils">
                  <circle cx={189} cy={110} r={4.4} fill={ink} />
                  <circle cx={232} cy={110} r={4.4} fill={ink} />
                </g>
              </g>
              <path className="wpl-happy" d="M 182 113 Q 189 104 196 113 M 225 113 Q 232 104 239 113" fill="none" stroke={ink} strokeWidth={3.5} strokeLinecap="round" />
              {/* Glasses */}
              <path d="M 172 102 L 160 100 M 206 105 C 209 101 211 101 214 105" fill="none" stroke={ink} strokeWidth={4} strokeLinecap="round" />
              <rect x={172} y={96} width={34} height={26} rx={5} fill="none" stroke={ink} strokeWidth={4.5} />
              <rect x={214} y={96} width={36} height={26} rx={5} fill="none" stroke={ink} strokeWidth={4.5} />
              {/* Nose & Smile */}
              <path d="M 214 118 C 211 132 206 142 214 146 C 219 148 224 146 226 143" fill="none" stroke={ink} strokeWidth={3.5} strokeLinecap="round" />
              <path className="wpl-smile" d="M 196 158 C 206 166 222 166 234 156" fill="none" stroke={ink} strokeWidth={3.5} strokeLinecap="round" />
              <path className="wpl-grin" d="M 195 156 C 206 174 226 172 236 154 Z" fill={ink} stroke={ink} strokeWidth={3} strokeLinejoin="round" />
              <path d="M 238 150 C 241 153 241 157 239 160" fill="none" stroke={ink} strokeWidth={2.5} strokeLinecap="round" />
            </g>
          </g>
        </g>
      </g>
    </g>
  );
}
// #endregion character

export type WavingPortfolioLandingProps = {
  /** Letters left of the giant letter, top row and bottom row. */
  lettersLeft?: [string, string];
  /** The one tall letter both rows share. */
  giantLetter?: string;
  /** Letters right of the character, top row and bottom row. */
  lettersRight?: [string, string];
  /** What the drawn headline says, for screen readers. */
  title?: string;
  /** Speech bubble shown while he waves. */
  greeting?: string;
  accent?: string;
  paper?: string;
  ink?: string;
  /** Play the cinematic intro on mount. */
  intro?: boolean;
  height?: string;
  className?: string;
  /** Top section indicator text badge (e.g. "Section [01]"). */
  sectionBadge?: string;
  /** Section index text (e.g. "01 / 05"). */
  sectionIndex?: string;
};

const WAVE_MS = 1800;
const WAVE_AT = 2100;
const BUBBLE_AT = 4000;
const READY_AT = 4250;

export default function WavingPortfolioLanding({
  lettersLeft = ["P", "F"],
  giantLetter = "O",
  lettersRight = ["RT", "LIO"],
  title = "Portfolio",
  greeting = "Hello there!",
  accent = "#0a0a0a",
  paper = "#ffffff",
  ink = "#0a0a0a",
  intro = true,
  height = "calc(100svh - 4rem)",
  className = "",
  sectionBadge = "Section [01]",
  sectionIndex = "01 / 05",
}: WavingPortfolioLandingProps) {
  const uid = React.useId().replace(/:/g, "");
  const rootRef = React.useRef<HTMLDivElement>(null);
  const headRef = React.useRef<SVGGElement>(null);
  const frame = React.useRef(0);
  const timers = React.useRef<number[]>([]);
  const lastRoll = React.useRef<number[]>([]);
  const wavingRef = React.useRef(false);

  const [mounted, setMounted] = React.useState(false);
  const [reduced, setReduced] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const [waving, setWaving] = React.useState(false);
  const [bubbleVisible, setBubbleVisible] = React.useState(false);
  const [rolls, setRolls] = React.useState<number[]>([]);
  const [compact, setCompact] = React.useState(false);

  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  };

  React.useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      timers.current.forEach(clearTimeout);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  React.useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([e]) => {
      const { width, height: h } = e.contentRect;
      if (width && h) setCompact(width / h < 1.05);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const wave = React.useCallback(() => {
    if (wavingRef.current) return;
    wavingRef.current = true;
    setWaving(true);
    later(() => {
      wavingRef.current = false;
      setWaving(false);
    }, WAVE_MS);
  }, []);

  const playing = mounted && intro && !reduced;

  React.useEffect(() => {
    if (!mounted) return;
    if (!intro || reduced) {
      setReady(true);
      setBubbleVisible(true);
      return;
    }
    setReady(false);
    setBubbleVisible(false);
    const a = later(wave, WAVE_AT);
    const b = later(() => setBubbleVisible(true), BUBBLE_AT);
    const c = later(() => setReady(true), READY_AT);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
    };
  }, [mounted, intro, reduced, wave]);

  const L = React.useMemo(
    () => layoutPoster(lettersLeft, giantLetter, lettersRight, compact),
    [lettersLeft.join("|"), giantLetter, lettersRight.join("|"), compact],
  );

  const reroll = (i: number) => {
    if (!ready || reduced) return;
    const now = performance.now();
    if (now - (lastRoll.current[i] ?? 0) < 650) return;
    lastRoll.current[i] = now;
    setRolls((r) => {
      const n = [...r];
      n[i] = (n[i] ?? 0) + 1;
      return n;
    });
  };

  const rootRectRef = React.useRef<DOMRect | null>(null);
  const headRectRef = React.useRef<DOMRect | null>(null);

  React.useEffect(() => {
    const invalidateRects = () => {
      rootRectRef.current = null;
      headRectRef.current = null;
    };
    window.addEventListener("resize", invalidateRects, { passive: true });
    window.addEventListener("scroll", invalidateRects, { passive: true });
    return () => {
      window.removeEventListener("resize", invalidateRects);
      window.removeEventListener("scroll", invalidateRects);
    };
  }, []);

  const onMove = (e: React.PointerEvent) => {
    if (reduced || e.pointerType === "touch") return;
    const px = e.clientX;
    const py = e.clientY;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const root = rootRef.current;
      if (!root) return;
      if (!rootRectRef.current) {
        rootRectRef.current = root.getBoundingClientRect();
      }
      const r = rootRectRef.current;
      if (!r || r.width === 0 || r.height === 0) return;
      const k = (v: number, d: number) => Math.max(-1, Math.min(1, v / d));
      root.style.setProperty("--wpl-mx", (((px - r.left) / r.width) * 2 - 1).toFixed(3));
      root.style.setProperty("--wpl-my", (((py - r.top) / r.height) * 2 - 1).toFixed(3));
      if (!headRectRef.current && headRef.current) {
        headRectRef.current = headRef.current.getBoundingClientRect();
      }
      const h = headRectRef.current;
      if (!h) return;
      const dx = px - (h.left + h.width / 2);
      const dy = py - (h.top + h.height / 2);
      root.style.setProperty("--wpl-ex", (k(dx, 260) * 4.5).toFixed(2));
      root.style.setProperty("--wpl-ey", (k(dy, 260) * 3.5).toFixed(2));
      root.style.setProperty("--wpl-hr", (k(dx, 700) * 7).toFixed(2));
    });
  };

  const onLeave = () => {
    const root = rootRef.current;
    if (!root) return;
    for (const v of ["--wpl-mx", "--wpl-my", "--wpl-ex", "--wpl-ey", "--wpl-hr"]) {
      root.style.setProperty(v, "0");
    }
  };

  const onCharKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      wave();
    }
  };

  const stage = !intro ? "off" : ready ? "done" : "on";
  const bubbleW = greeting.length * 19 + 48;
  const k = L.charScale;
  const charLeft = L.charX - 205 * k;

  return (
    <div
      ref={rootRef}
      className={"wpl-root relative w-full flex items-center justify-center " + className}
      data-intro={stage}
      style={{ height, "--wpl-accent": accent, "--wpl-paper": paper, "--wpl-ink": ink } as React.CSSProperties}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <style>{WPL_CSS}</style>
      <h1 className="wpl-sr">{title}</h1>

      {/* Top Section Indicator Bar (Section [01] & 01 / 05) */}
      <div className="absolute top-6 md:top-8 inset-x-0 w-full max-w-[1440px] mx-auto px-8 md:px-14 lg:px-16 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center">
          <span className="inline-block bg-neutral-950 text-white px-2.5 py-1 text-[11px] font-medium tracking-[0.2em] uppercase">
            {sectionBadge}
          </span>
        </div>
        {sectionIndex ? (
          <span className="text-xs text-neutral-400 tracking-[0.18em]">
            {sectionIndex}
          </span>
        ) : null}
      </div>

      {/* Main Kinetic Typography Poster with Character */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-center z-10">
        <svg
          className="w-full h-auto max-h-[72vh] wpl-poster"
          viewBox={"0 0 " + L.width + " " + L.height}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Foreground Kinetic Typography */}
          <g className="wpl-par-letters" aria-hidden="true">
            {L.cells.map((c, i) => (
              <LetterCell
                key={i}
                c={c}
                i={i}
                roll={rolls[i] ?? 0}
                intro={playing}
                delay={
                  c.giant
                    ? 0.75
                    : 0.15 + (c.x / L.width) * 0.45 + c.row * 0.1
                }
                color={accent}
                onEnter={() => reroll(i)}
                onClick={() => reroll(i)}
              />
            ))}
          </g>

          {/* Animated Waving Monoline Character */}
          <g className="wpl-par-char">
            <svg
              x={charLeft}
              y={605 - 600 * k}
              width={460 * k}
              height={600 * k}
              viewBox="0 0 460 600"
              overflow="hidden"
            >
              <g
                className={"wpl-char" + (waving ? " is-waving" : "")}
                role="button"
                tabIndex={0}
                aria-label="Wave hello"
                onPointerEnter={(e) => {
                  if (ready && e.pointerType !== "touch") wave();
                }}
                onClick={wave}
                onKeyDown={onCharKey}
              >
                <Character
                  ink={ink}
                  paper={paper}
                  shirtId={"wpl-" + uid + "-shirt"}
                  headRef={headRef}
                />
              </g>
            </svg>

            {/* Persistent Speech Bubble: Pops in once on entrance, stays visible, and reacts to cursor hover */}
            {bubbleVisible && (
              <g
                className="wpl-bubble"
                role="button"
                tabIndex={0}
                aria-label="Hello there"
                onPointerEnter={(e) => {
                  if (ready && e.pointerType !== "touch") wave();
                }}
                onClick={wave}
                onKeyDown={onCharKey}
              >
                <g className="wpl-bubble-inner">
                  <path
                    className="wpl-bubble-bg"
                    d={
                      "M " +
                      (charLeft + 372 * k) +
                      " 20 h " +
                      bubbleW +
                      " v 56 h " +
                      -(bubbleW - 34) +
                      " l -30 22 l 6 -22 h -10 Z"
                    }
                    fill={paper}
                    stroke={accent}
                    strokeWidth={3}
                    strokeLinejoin="round"
                  />
                  <text
                    className="wpl-label wpl-bubble-text"
                    x={charLeft + 372 * k + bubbleW / 2}
                    y={57}
                    textAnchor="middle"
                  >
                    {greeting.toUpperCase()}
                  </text>
                </g>
              </g>
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}

function LetterCell({
  c,
  i,
  roll,
  intro,
  delay,
  color,
  onEnter,
  onClick,
}: {
  c: Cell;
  i: number;
  roll: number;
  intro: boolean;
  delay: number;
  color: string;
  onEnter: () => void;
  onClick: () => void;
}) {
  const pad = c.s;
  const pitch = c.h + c.s * 2 + 24;
  const n = roll > 0 ? 6 : c.giant ? 14 : 10;
  const base = c.giant ? GW : LW;
  const rolling = intro || roll > 0;
  const reel: { ch: string; w: number }[] = [];
  if (rolling) {
    for (let k = 1; k < n; k++) {
      const ch = AZ[Math.floor(hash(i * 131 + roll * 977 + k * 53) * 26)];
      reel.push({ ch, w: Math.min(glyphWidth(ch, base, c.s), c.w * 1.25) });
    }
  }
  const style = {
    "--dist": (n - 1) * pitch + "px",
    "--delay": (roll > 0 ? 0 : delay) + "s",
    "--dur": roll > 0 ? "0.8s" : c.giant ? "1.4s" : "1.3s",
  } as React.CSSProperties;

  return (
    <g
      className={"wpl-cell" + (c.giant ? " wpl-giant" : "")}
      onPointerEnter={onEnter}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      style={{ outline: "none" }}
    >
      <rect x={c.x} y={c.y} width={c.w} height={c.h} fill="transparent" />
      <svg
        x={c.x - pad}
        y={c.y - pad}
        width={c.w + pad * 2}
        height={c.h + pad * 2}
        viewBox={-pad + " " + -pad + " " + (c.w + pad * 2) + " " + (c.h + pad * 2)}
        overflow="hidden"
      >
        <g
          key={roll}
          className={"wpl-reel" + (rolling ? " is-rolling" : "")}
          style={style}
          fill="none"
          stroke={color}
          strokeWidth={c.s}
          strokeLinecap="square"
          strokeMiterlimit={4}
        >
          <path d={glyphPath(c.ch, c.w, c.h, c.s)} />
          {reel.map((g, k) => (
            <path key={k} transform={"translate(" + Math.round((c.w - g.w) / 2) + " " + -(k + 1) * pitch + ")"} d={glyphPath(g.ch, g.w, c.h, c.s)} />
          ))}
        </g>
      </svg>
    </g>
  );
}

const WPL_CSS = `
.wpl-root{position:relative;width:100%;overflow:hidden;background:var(--wpl-paper);color:var(--wpl-ink);container-type:size;isolation:isolate;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}
.wpl-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
.wpl-poster{display:block;max-width:100%;overflow:visible;z-index:2}
.wpl-label{font-family:var(--font-pp-mori),ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-weight:600;font-size:28px;letter-spacing:.04em;fill:var(--wpl-accent)}
.wpl-par-letters{transform:translate(calc(var(--wpl-mx,0) * -12px),calc(var(--wpl-my,0) * -6px));transition:transform .7s cubic-bezier(.2,.8,.2,1)}
.wpl-par-char{transform:translate(calc(var(--wpl-mx,0) * 8px),0px);transition:transform .7s cubic-bezier(.2,.8,.2,1)}
.wpl-reel.is-rolling{animation:wpl-roll var(--dur,1.3s) var(--delay,0s) both}
.wpl-cell{cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent}
.wpl-cell:focus,.wpl-cell:focus-visible{outline:none}
.wpl-cell *{outline:none;-webkit-tap-highlight-color:transparent}

.wpl-char{cursor:pointer;outline:none}
.wpl-char:focus-visible .wpl-head{filter:drop-shadow(0 0 6px var(--wpl-accent))}
.wpl-tilt{transform-box:view-box;transform-origin:205px 600px;transform:rotate(-7deg)}
.wpl-breathe{transform-box:view-box;transform-origin:205px 600px;animation:wpl-breathe 3.8s ease-in-out infinite}
.wpl-uarm{transform-box:view-box;transform-origin:288px 248px;transition:transform .45s cubic-bezier(.2,.8,.2,1)}
.wpl-farm{transform-box:view-box;transform-origin:348px 346px;transition:transform .45s cubic-bezier(.2,.8,.2,1)}
.wpl-hand{transform-box:view-box;transform-origin:392px 216px;transition:transform .45s cubic-bezier(.2,.8,.2,1)}
.wpl-head{transform-box:view-box;transform-origin:203px 200px;transform:rotate(-4deg);transition:transform .45s cubic-bezier(.2,.8,.2,1)}
.wpl-look{transform-box:view-box;transform-origin:203px 200px;transform:rotate(calc(var(--wpl-hr,0) * 1deg));transition:transform .4s ease-out}
.wpl-pupils{transform:translate(calc(var(--wpl-ex,0) * 1px),calc(var(--wpl-ey,0) * 1px));transition:transform .2s ease-out}
.wpl-eyes{transform-box:fill-box;transform-origin:center;animation:wpl-blink 5.2s 7.5s infinite;transition:opacity .3s ease-in-out}
.wpl-brows{transition:transform .3s cubic-bezier(.3,1.6,.5,1)}
.wpl-happy,.wpl-grin{opacity:0;transition:opacity .3s ease-in-out}
.wpl-smile{transition:opacity .3s ease-in-out}
.wpl-bubble{transform-box:fill-box;transform-origin:0% 100%;animation:wpl-bubble-chat .5s cubic-bezier(.16,1.15,.3,1) forwards;cursor:pointer;outline:none;user-select:none;-webkit-user-select:none}
.wpl-bubble-inner{transform-box:fill-box;transform-origin:center;transition:transform .2s cubic-bezier(.16,1,.3,1)}
.wpl-bubble-bg{transition:fill .2s ease,stroke .2s ease}
.wpl-bubble-text{fill:var(--wpl-ink);font-size:24px;font-weight:700;transition:fill .2s ease;pointer-events:none}
.wpl-bubble:hover .wpl-bubble-inner,.wpl-bubble:focus-visible .wpl-bubble-inner{transform:scale(1.04) translateY(-2px)}
.wpl-bubble:hover .wpl-bubble-bg,.wpl-bubble:focus-visible .wpl-bubble-bg{fill:var(--wpl-accent);stroke:var(--wpl-accent)}
.wpl-bubble:hover .wpl-bubble-text,.wpl-bubble:focus-visible .wpl-bubble-text{fill:var(--wpl-paper)}
.wpl-bubble:active .wpl-bubble-inner{transform:scale(0.96)}

.wpl-root[data-intro="on"] .wpl-rise{animation:wpl-rise .95s 1.0s cubic-bezier(.16,1,.3,1) both}
.wpl-root[data-intro="on"] .wpl-tilt{animation:wpl-tilt .8s 1.9s cubic-bezier(.3,1.5,.5,1) both}
.wpl-root[data-intro="on"] .wpl-uarm{animation:wpl-uarm .55s 1.4s cubic-bezier(.3,1.3,.5,1) both}
.wpl-root[data-intro="on"] .wpl-farm{animation:wpl-farm .58s 1.4s cubic-bezier(.3,1.3,.5,1) both}
.wpl-root[data-intro="on"] .wpl-head{animation:wpl-headin 1.1s 1.2s ease-out both}

.wpl-char.is-waving .wpl-farm{animation:wpl-wave 1.6s cubic-bezier(.37,0,.63,1) forwards}
.wpl-char.is-waving .wpl-hand{animation:wpl-hand 1.6s cubic-bezier(.37,0,.63,1) forwards}
.wpl-char.is-waving .wpl-head{animation:wpl-nod 1.6s cubic-bezier(.37,0,.63,1) forwards}
.wpl-char.is-waving .wpl-brows{transform:translateY(-6px)}
.wpl-char.is-waving .wpl-eyes,.wpl-char.is-waving .wpl-smile{opacity:0}
.wpl-char.is-waving .wpl-happy,.wpl-char.is-waving .wpl-grin{opacity:1}

@keyframes wpl-rise{from{transform:translateY(640px)}to{transform:translateY(0px)}}
@keyframes wpl-tilt{from{transform:rotate(0deg)}to{transform:rotate(-7deg)}}
@keyframes wpl-uarm{from{transform:rotate(26deg)}to{transform:rotate(0deg)}}
@keyframes wpl-farm{from{transform:rotate(150deg)}to{transform:rotate(0deg)}}
@keyframes wpl-headin{0%{transform:rotate(9deg)}55%{transform:rotate(-8deg)}100%{transform:rotate(-4deg)}}
@keyframes wpl-wave{
  0%{transform:rotate(0deg)}
  12%{transform:rotate(-18deg)}
  25%{transform:rotate(14deg)}
  38%{transform:rotate(-16deg)}
  51%{transform:rotate(12deg)}
  64%{transform:rotate(-8deg)}
  76%{transform:rotate(5deg)}
  86%{transform:rotate(-2deg)}
  94%{transform:rotate(0.5deg)}
  100%{transform:rotate(0deg)}
}
@keyframes wpl-hand{
  0%{transform:rotate(0deg)}
  12%{transform:rotate(-12deg)}
  25%{transform:rotate(10deg)}
  38%{transform:rotate(-10deg)}
  51%{transform:rotate(8deg)}
  64%{transform:rotate(-5deg)}
  76%{transform:rotate(3deg)}
  86%{transform:rotate(-1.5deg)}
  94%{transform:rotate(0.3deg)}
  100%{transform:rotate(0deg)}
}
@keyframes wpl-nod{
  0%{transform:rotate(-4deg)}
  20%{transform:rotate(-9deg)}
  45%{transform:rotate(-1deg)}
  70%{transform:rotate(-6deg)}
  88%{transform:rotate(-3.5deg)}
  100%{transform:rotate(-4deg)}
}
@keyframes wpl-breathe{0%,100%{transform:scale(1,1)}50%{transform:scale(1.008,1.012)}}
@keyframes wpl-blink{0%,94%,100%{transform:scaleY(1)}97%{transform:scaleY(.1)}}
@keyframes wpl-bubble-chat{
  0%{transform:scale(0.2) translateY(8px);opacity:0}
  40%{opacity:1}
  75%{transform:scale(1.03) translateY(-1px)}
  100%{transform:scale(1) translateY(0);opacity:1}
}
@keyframes wpl-roll{
0%{transform:translateY(var(--dist));opacity:0;animation-timing-function:cubic-bezier(.16,1,.3,1)}
10%{opacity:1}
85%{transform:translateY(-10px);opacity:1;animation-timing-function:ease-in-out}
100%{transform:translateY(0px);opacity:1}
}

@media (prefers-reduced-motion:reduce){
.wpl-root *,.wpl-root *::before,.wpl-root *::after{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}
}
`;

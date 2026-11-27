// Generates the Open Graph image (public/og.png, 1200x630) for the portfolio.
//
// Typography-only cover: the full name, role, and tech specializations are laid
// out with the site's own fonts (Inter + JetBrains Mono, from Fontsource) and
// baked into the SVG as vector PATHS via fontkit. Rendering glyphs to paths
// means the rasterizer (sharp) needs no system fonts or fontconfig — the result
// is identical on any machine and pixel-exact to the brand fonts.
//
// Run with: npm run og
import * as fontkit from "fontkit";
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const r = (p) => resolve(root, p);

// --- Canvas + palette (mirrors src/styles/global.css) --------------------
const W = 1200;
const H = 630;
const X0 = 90; // shared left edge for every line
const BG_TOP = "#0a0a0b";
const BG_BOTTOM = "#050506";
const COLOR_NAME = "#fafafa"; // zinc-50
const COLOR_ROLE = "#f59e0b"; // amber-500 (the accent)
const COLOR_TECH = "#a1a1aa"; // zinc-400

// --- Fonts ----------------------------------------------------------------
const inter = fontkit.openSync(
  r(
    "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  ),
);
const mono = fontkit.openSync(
  r(
    "node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  ),
);
const varied = (font, wght) =>
  font.getVariation ? font.getVariation({ wght }) : font;

// Lay out `text` at a baseline and emit transformed glyph <path> data plus the
// vertical extent of the inked glyphs (used later to center the whole block).
function layoutLine({ font, wght, text, size, baseline, letterSpacing = 0 }) {
  const f = varied(font, wght);
  const s = size / f.unitsPerEm;
  const run = f.layout(text);
  let penX = X0;
  const paths = [];
  let minY = Infinity;
  let maxY = -Infinity;

  run.glyphs.forEach((glyph, i) => {
    const d = glyph.path.toSVG();
    if (d) {
      // Font space has y-up; SVG has y-down — flip with scale(s, -s).
      paths.push(
        `<path transform="translate(${penX.toFixed(2)} ${baseline}) scale(${s.toFixed(5)} ${(-s).toFixed(5)})" d="${d}"/>`,
      );
      const bb = glyph.bbox; // font units, y-up
      minY = Math.min(minY, baseline - bb.maxY * s);
      maxY = Math.max(maxY, baseline - bb.minY * s);
    }
    penX += run.positions[i].xAdvance * s + letterSpacing;
  });

  const width = penX - X0 - letterSpacing;
  return { paths: paths.join(""), minY, maxY, width };
}

// --- Composition ----------------------------------------------------------
// Three left-aligned levels stacked around the vertical centre. Baselines are
// provisional; the finished block is measured and translated to true-centre.
const NAME_SIZE = 88;
const NAME_LEADING = 96;
const nameTop = 190;

const lines = [
  {
    color: COLOR_NAME,
    ...layoutLine({
      font: inter,
      wght: 800,
      text: "Riccardo Armando",
      size: NAME_SIZE,
      baseline: nameTop,
    }),
  },
  {
    color: COLOR_NAME,
    ...layoutLine({
      font: inter,
      wght: 800,
      text: "Di Prinzio",
      size: NAME_SIZE,
      baseline: nameTop + NAME_LEADING,
    }),
  },
  {
    color: COLOR_ROLE,
    ...layoutLine({
      font: inter,
      wght: 500,
      text: "Backend Developer",
      size: 42,
      baseline: nameTop + NAME_LEADING + 90,
    }),
  },
  {
    color: COLOR_TECH,
    ...layoutLine({
      font: mono,
      wght: 500,
      text: "JAVA · SPRING BOOT · MICROSERVICES · DOCKER · LINUX",
      size: 22,
      baseline: nameTop + NAME_LEADING + 90 + 58,
      letterSpacing: 1,
    }),
  },
];

// Guard against the (longest) tech line overrunning the usable width.
const usable = W - X0 * 2;
const widest = Math.max(...lines.map((l) => l.width));
if (widest > usable) {
  console.warn(
    `WARNING: a line is ${widest.toFixed(0)}px wide, exceeding the ${usable}px usable width (X0=${X0}).`,
  );
}

// Centre the whole block vertically within the canvas.
const top = Math.min(...lines.map((l) => l.minY));
const bottom = Math.max(...lines.map((l) => l.maxY));
const dy = Math.round((H - (bottom - top)) / 2 - top);

const groups = lines.map((l) => `<g fill="${l.color}">${l.paths}</g>`).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${BG_TOP}"/>
      <stop offset="1" stop-color="${BG_BOTTOM}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <g transform="translate(0 ${dy})">${groups}</g>
</svg>`;

const out = r("public/og.png");
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
console.log(`Wrote ${out} (${W}x${H}), block centred with dy=${dy}`);

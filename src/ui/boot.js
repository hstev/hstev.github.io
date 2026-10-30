import { $, reduced } from '../lib/dom.js';
import { site } from '../content.js';
import { GLYPHS } from './pixel-font.js';

/* logo en pixel art */
function buildLogo(text) {
  const chars = [...text.toUpperCase()].filter(c => GLYPHS[c]);
  const W = chars.length * 6 - 1, H = 7;
  let rects = '';
  chars.forEach((c, n) => GLYPHS[c].forEach((row, y) => [...row].forEach((px, x) => {
    if (px === '#') rects += `<rect x="${n * 6 + x}" y="${y}" width="1" height="1" data-x="${n * 6 + x}"/>`;
  })));
  const svg = $('logo');
  svg.setAttribute('viewBox', `-1 -1 ${W + 2} ${H + 2}`);
  svg.setAttribute('aria-label', 'Logo ' + text);
  svg.innerHTML = rects;
  return { W, pixels: [...svg.querySelectorAll('rect')] };
}

/* arranque: el logo se va encendiendo de izquierda a derecha como barra de carga */
export function boot(onDone) {
  const { W, pixels } = buildLogo(site.logo);
  const total = reduced ? 300 : 2000;
  const steps = W + 1;
  for (let c = 0; c < steps; c++) {
    setTimeout(() => {
      pixels.forEach(p => { if (+p.dataset.x <= c) p.classList.add('lit'); });
      $('bootPct').textContent = Math.round(((c + 1) / steps) * 100) + '%';
    }, (total / steps) * c);
  }
  setTimeout(onDone, total + 450);
}

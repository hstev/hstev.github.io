import { $ } from '../lib/dom.js';

/* aviso breve sobre las teclas de función */
let timer;
export function toast(msg) {
  const t = $('toast');
  t.hidden = true; void t.offsetWidth; // reinicia la animación
  t.textContent = msg; t.hidden = false;
  clearTimeout(timer);
  timer = setTimeout(() => { t.hidden = true; }, 1800);
}

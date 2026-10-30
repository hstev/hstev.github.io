import { $ } from '../lib/dom.js';

/* retroiluminación: se apaga tras 25 s sin uso */
const IDLE_MS = 25000;
let timer;

export function resetIdle() {
  clearTimeout(timer);
  timer = setTimeout(() => $('lcd').classList.add('dim'), IDLE_MS);
}

/* devuelve true si la pulsación solo sirvió para encender la pantalla */
export function wake() {
  resetIdle();
  const lcd = $('lcd');
  if (lcd.classList.contains('dim')) { lcd.classList.remove('dim'); return true; }
  return false;
}

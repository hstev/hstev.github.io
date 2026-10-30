/* conecta teclado, toques y clics con las acciones de app.js */
import { $ } from './lib/dom.js';
import { press, select, showPopup, ignored, updatePageThumb } from './app.js';
import { locationPopup, mailPopup, batteryPopup } from './ui/popups.js';

const KEYS = { ArrowUp: 'up', ArrowDown: 'down', Enter: 'ok', Escape: 'back', Backspace: 'back' };

export function bindInput() {
  // indicadores de la barra de estado
  [['signal', locationPopup], ['env', mailPopup], ['batt', batteryPopup]].forEach(([id, popup]) =>
    $(id).addEventListener('click', () => { if (!ignored()) showPopup(popup()); }));

  $('skL').addEventListener('click', () => press('L'));
  $('skR').addEventListener('click', () => press('R'));

  $('list').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b || ignored()) return;
    select(+b.dataset.i);
  });

  document.addEventListener('keydown', e => {
    const k = KEYS[e.key] || (/^[0-9]$/.test(e.key) ? e.key : null);
    if (!k) return;
    if (e.key === 'Enter' && document.activeElement?.matches('button, a')) return; // el clic ya lo gestiona
    e.preventDefault();
    press(k);
  });

  // gesto: deslizar en el menú para moverse
  let touchY = null;
  $('v-menu').addEventListener('touchstart', e => { touchY = e.touches[0].clientY; }, { passive: true });
  $('v-menu').addEventListener('touchend', e => {
    if (touchY === null) return;
    const dy = e.changedTouches[0].clientY - touchY; touchY = null;
    if (Math.abs(dy) > 40) press(dy < 0 ? 'down' : 'up');
  });

  $('pgBody').addEventListener('scroll', updatePageThumb, { passive: true });
}

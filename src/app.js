/* estado de la navegación y render: qué vista se ve, qué opción está elegida y qué popup está abierto */
import { $, esc, reduced } from './lib/dom.js';
import { site } from './content.js';
import { PAGES } from './pages/index.js';
import { wake } from './ui/backlight.js';
import { constructionPopup, infoPopup, mailPopup } from './ui/popups.js';

/* entradas del menú que abren un popup en vez de una página */
const ACTIONS = { contact: mailPopup };

const menu = site.menu;
export const state = { view: 'boot', idx: 0, popup: null };

export function buildMenu() {
  $('list').innerHTML = menu.map((item, i) =>
    `<li><button type="button" data-i="${i}"><span class="n">${i + 1}</span>${esc(item.title)}</button></li>`).join('');
}

/* true si la pulsación no debe hacer nada: está arrancando o solo encendió la pantalla */
export const ignored = () => state.view === 'boot' || wake();

export function showPopup(popup) { state.popup = popup; render(); }
export function goHome() { state.view = 'home'; render(); }
export function select(i) { state.idx = i; choose(); }

function choose() {
  const item = menu[state.idx];
  if (ACTIONS[item.page]) return showPopup(ACTIONS[item.page]());
  const page = PAGES[item.page];
  if (!page) return showPopup(constructionPopup(item.title));
  $('pgTitle').textContent = item.title;
  $('pgBody').innerHTML = page();
  $('pgBody').scrollTop = 0;
  state.view = 'page';
  render();
  updatePageThumb();
}

export function updatePageThumb() {
  const b = $('pgBody'), max = b.scrollHeight - b.clientHeight;
  $('pgScroll').classList.toggle('none', max <= 0);
  $('pgThumb').style.top = `calc(${max > 0 ? b.scrollTop / max : 0} * 82%)`;
}

export function render() {
  ['boot', 'home', 'menu', 'page'].forEach(v => $('v-' + v).classList.toggle('on', state.view === v));

  const items = [...$('list').children];
  items.forEach((li, i) => li.classList.toggle('sel', i === state.idx));
  const n = menu.length;
  $('pos').textContent = `${state.idx + 1}/${n}`;
  $('thumb').style.top = `calc(${n > 1 ? state.idx / (n - 1) : 0} * 82%)`;
  if (state.view === 'menu' && items[state.idx]) items[state.idx].scrollIntoView({ block: 'nearest' });

  $('popup').hidden = !state.popup;
  if (state.popup) { $('ptitle').textContent = state.popup.title; $('pbody').innerHTML = state.popup.body; }

  let L = '', R = '';
  if (state.popup) { L = state.popup.L || ''; R = 'OK'; }
  else if (state.view === 'home') { L = 'Info'; R = 'Menu'; }
  else if (state.view === 'menu') { L = 'Back'; R = 'Select'; }
  else if (state.view === 'page') { L = 'Back'; }
  setSoft($('skL'), L); setSoft($('skR'), R);
}

function setSoft(btn, label) {
  btn.textContent = label;
  btn.classList.toggle('empty', !label);
  btn.tabIndex = label ? 0 : -1;
  btn.setAttribute('aria-hidden', String(!label));
}

/* k: 'L' | 'R' (teclas de función), 'up' | 'down' | 'ok' | 'back', o un dígito como atajo */
export function press(k) {
  if (ignored()) return;
  if (state.popup) {
    if (k === 'L' && state.popup.onL) { state.popup.onL(); return; }
    if (['R', 'L', 'ok', 'back'].includes(k)) { state.popup = null; render(); }
    return;
  }
  const n = menu.length;
  const jump = /^[1-9]$/.test(k) && +k <= n;

  if (state.view === 'home') {
    if (['R', 'ok', 'up', 'down'].includes(k)) { state.view = 'menu'; render(); }
    else if (k === 'L') showPopup(infoPopup());
    else if (jump) { state.view = 'menu'; state.idx = +k - 1; render(); }
  } else if (state.view === 'menu') {
    if (k === 'up') { state.idx = (state.idx - 1 + n) % n; render(); }
    else if (k === 'down') { state.idx = (state.idx + 1) % n; render(); }
    else if (k === 'R' || k === 'ok') choose();
    else if (k === 'L' || k === 'back') goHome();
    else if (jump) { state.idx = +k - 1; render(); }
  } else if (state.view === 'page') {
    const b = $('pgBody');
    if (k === 'up' || k === 'down') b.scrollBy({ top: (k === 'up' ? -1 : 1) * b.clientHeight * .5, behavior: reduced ? 'auto' : 'smooth' });
    else if (['L', 'R', 'ok', 'back'].includes(k)) { state.view = 'menu'; render(); }
  }
}

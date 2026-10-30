import { $ } from '../lib/dom.js';
import { site, status } from '../content.js';

/* indicadores: señal = busco empleo, batería = disponibilidad */
export function setupStatus() {
  const signal = $('signal');
  const bars = [...signal.querySelectorAll('i')];
  const lit = site.openToWork ? bars.length : 1;
  bars.forEach((b, i) => b.classList.toggle('off', i >= lit));
  if (!site.openToWork) {
    const x = document.createElement('em'); x.className = 'x'; x.textContent = '×';
    signal.appendChild(x);
  }
  signal.setAttribute('aria-label', (site.openToWork ? 'Signal: open to job offers' : 'Signal: not looking for a job right now') + '. See location');
  $('operator').textContent = site.openToWork ? 'Open to offers' : 'Not looking';

  $('battFill').style.width = (status.level / 4) * 100 + '%';
  $('batt').classList.toggle('empty', status.level === 0);
  $('batt').setAttribute('aria-label', `Battery: ${status.name}. See details`);

  $('bootName').textContent = site.name;
  $('bootRole').textContent = site.role;
  document.title = site.name + ' · Portfolio';
}

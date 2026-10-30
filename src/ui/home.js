import { $, reduced } from '../lib/dom.js';
import { site } from '../content.js';

function tick() {
  const d = new Date();
  $('clock').textContent = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  $('date').textContent = d.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' });
}

export function startClock() { tick(); setInterval(tick, 10000); }

/* la frase de inicio se escribe letra a letra */
export function typeGreeting() {
  const el = $('phrase'), text = site.greeting;
  if (reduced) { el.textContent = text; return; }
  let i = 0;
  const step = () => { el.textContent = text.slice(0, ++i); if (i < text.length) setTimeout(step, 38); };
  step();
}

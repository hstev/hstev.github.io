/*
 * Ventanas emergentes. Cada función devuelve { title, body, L?, onL? }:
 * body es HTML, L la etiqueta de la tecla izquierda y onL su acción (la derecha siempre es OK).
 */
import { esc } from '../lib/dom.js';
import { site, status } from '../content.js';
import { medellinArt } from '../art/medellin.js';
import { toast } from './toast.js';

export const constructionPopup = title => ({
  title,
  body: '<p>This module is under construction.</p><p>Come back soon.</p>'
});

export const locationPopup = () => ({
  title: 'Location',
  body: `${medellinArt()}
         <p class="place">${esc(site.location)}</p>
         <p>${site.openToWork ? 'Open to offers.' : 'Not looking.'}</p>`
});

export function batteryPopup() {
  const bars = '▮'.repeat(status.level) + '▯'.repeat(4 - status.level);
  return {
    title: 'Availability',
    body: `<p class="place">[${bars}]</p>
           <p class="place">${esc(status.name)}</p>
           <p>${esc(status.detail)}</p>`
  };
}

export const mailPopup = () => ({
  title: 'Email',
  body: `<p>Write to me at:</p>
         <p class="place"><a class="mail" href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>`,
  L: 'Copy',
  onL: copyEmail
});

export const infoPopup = () => ({
  title: 'Indicators',
  body: `<p>Signal: ${site.openToWork ? 'open to offers' : 'not looking for a job'}. Tap it to see my location.</p>
         <p>Battery: ${esc(status.name.toLowerCase())}. Tap it to see details.</p>
         <p>Envelope: tap it to see and copy my email.</p>`
});

async function copyEmail() {
  let ok = false;
  try { await navigator.clipboard.writeText(site.email); ok = true; }
  catch {
    const t = document.createElement('textarea');
    t.value = site.email; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    try { ok = document.execCommand('copy'); } catch { ok = false; }
    t.remove();
  }
  toast(ok ? '✓ Email copied' : '× Could not copy');
}

export const $ = id => document.getElementById(id);

/* escapa el texto que viene de los JSON antes de meterlo en innerHTML */
const ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = value => String(value).replace(/[&<>"']/g, c => ENTITIES[c]);

export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

import education from '../data/education.json';
import { esc } from '../lib/dom.js';

export default () =>
  '<h2>Education</h2>' +
  education.degrees.map(d => `<p>${esc(d.title)}</p><p class="meta">${esc(d.institution)}</p>`).join('') +
  '<h2>Certifications</h2>' +
  education.certifications.map(c => `<p>${esc(c.name)}</p><p class="meta">${esc(c.status)}</p>`).join('');

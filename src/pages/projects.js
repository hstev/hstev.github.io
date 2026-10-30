import projects from '../data/projects.json';
import { esc } from '../lib/dom.js';

export default () => projects.map(p => `
  <h2><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)} ↗</a></h2>
  <p>${esc(p.description)}</p>`).join('');

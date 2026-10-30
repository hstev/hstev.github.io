import experience from '../data/experience.json';
import { esc } from '../lib/dom.js';
import { monthLabel, duration } from '../lib/dates.js';

export default () => experience.map(job => `
  <h2>${esc(job.company)}</h2>
  <p>${esc(job.role)}</p>
  <p class="meta">${monthLabel(job.from)} – ${job.to ? monthLabel(job.to) : 'Present'} · ${duration(job.from, job.to)}</p>
  ${job.detail ? `<p>${esc(job.detail)}</p>` : ''}`).join('');

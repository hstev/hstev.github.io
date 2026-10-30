import skills from '../data/skills.json';
import { esc } from '../lib/dom.js';

export default () => `<ul class="tags">${skills.map(s => `<li>${esc(s)}</li>`).join('')}</ul>`;

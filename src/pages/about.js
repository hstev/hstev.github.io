import about from '../data/about.json';
import { esc } from '../lib/dom.js';

export default () => about.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');

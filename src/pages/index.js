/*
 * Registro de páginas: cada una es una función que devuelve el HTML de su cuerpo.
 * Para añadir un módulo: crea el archivo aquí, regístralo abajo y añádelo a "menu" en data/site.json.
 * Una entrada del menú sin página registrada se muestra como "under construction".
 */
import about from './about.js';
import education from './education.js';
import experience from './experience.js';
import projects from './projects.js';
import skills from './skills.js';

export const PAGES = { about, education, experience, projects, skills };

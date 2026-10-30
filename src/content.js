/* punto único de acceso a los datos generales del sitio */
import site from './data/site.json';
import availability from './data/availability.json';

export { site };
/* Estado de la batería: cuanta más carga, más disponible estoy */
export const status = availability[site.availability] ?? availability.side;

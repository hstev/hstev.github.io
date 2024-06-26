import we_experis from '@/assets/images/work_experiences/experis.png';
import we_soluciones_star from '@/assets/images/work_experiences/soluciones_star.ico';
import we_compuhora from '@/assets/images/work_experiences/compuhora.png';

const work_experiences = [
    {
        prependAvatar: we_experis,
        title: `<a href="https://experis.co" target="_blank">Experis</a> - Analista programador</a>`,
        subtitle: `8 months (jul. 2022 - feb. 2023)`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: we_soluciones_star,
        title: '<a href="https://solucionesstar.com" target="_blank">Soluciones Star</a> - Full Stack Developer',
        subtitle: `6 years 11 months (jun. 2015 - abr. 2022)`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: we_compuhora,
        title: '<a href="https://compuhora.com.co" target="_blank">Compuhora S.A.S</a> - Practicante',
        subtitle: `9 months (sept. 2013 - may. 2014)`,
    },
];
export default work_experiences;
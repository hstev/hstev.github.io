/* fechas en formato 'AAAA-MM' */
const parse = ym => ym.split('-').map(Number);

export function monthLabel(ym) {
  const [y, m] = parse(ym);
  return new Date(y, m - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/* sin 'to' = hasta hoy; como LinkedIn, cuenta el mes inicial y el final */
export function duration(from, to) {
  const d = new Date();
  const [y1, m1] = parse(from);
  const [y2, m2] = to ? parse(to) : [d.getFullYear(), d.getMonth() + 1];
  const total = (y2 - y1) * 12 + (m2 - m1) + 1;
  const y = Math.floor(total / 12), m = total % 12;
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m && `${m} mo${m > 1 ? 's' : ''}`].filter(Boolean).join(' ');
}

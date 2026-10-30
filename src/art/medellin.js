/* Pixel art de Medellín: Metrocable sobre las laderas y el edificio Coltejer */
export function medellinArt() {
  const W = 64, H = 36;
  const g = Array.from({ length: H }, () => new Uint8Array(W));
  const set = (x, y, v = 1) => { if (x >= 0 && x < W && y >= 0 && y < H) g[y][x] = v; };
  const rect = (x, y, w, h, v = 1) => { for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) set(i, j, v); };
  const line = (x0, y0, x1, y1) => {
    const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let e = dx + dy;
    for (;;) { set(x0, y0); if (x0 === x1 && y0 === y1) break; const e2 = 2 * e; if (e2 >= dy) { e += dy; x0 += sx; } if (e2 <= dx) { e += dx; y0 += sy; } }
  };

  // cordillera al fondo (punteada)
  for (let x = 0; x < W; x += 2) set(x, Math.round(9 + 3 * Math.sin(x / 7) + 2 * Math.sin(x / 3.1)));

  // ladera con las casas de las comunas (ventanas encendidas)
  const tops = [];
  for (let x = 0; x < 44; x++) {
    tops[x] = Math.round(13 + x * 0.36 + Math.sin(x / 2) * 0.6);
    for (let y = tops[x]; y < H; y++) set(x, y);
  }
  for (let y = 0; y < 33; y++) for (let x = 0; x < 44; x++)
    if (y > tops[x] + 1 && y % 3 === 1 && (x + (Math.floor(y / 3) % 2) * 2) % 4 === 0) set(x, y, 0);

  // ciudad en el valle
  rect(0, 33, W, 3);
  [[44, 24, 4, 9], [48, 19, 3, 14], [58, 22, 4, 11], [62, 26, 2, 7]].forEach(([x, y, w, h]) => {
    rect(x, y, w, h);
    for (let j = y + 2; j < y + h - 1; j += 2) for (let i = x + 1; i < x + w - 1; i += 2) set(i, j, 0);
  });

  // edificio Coltejer: torre con la punta en forma de aguja
  rect(51, 8, 6, 25);
  for (let k = 0; k < 6; k++) rect(51 + k, 7 - k, 6 - k, 1);
  set(54, 6, 0); set(54, 7, 0); set(55, 5, 0);
  for (let y = 10; y < 32; y += 2) { set(52, y, 0); set(54, y, 0); }

  // Metrocable: cable, torre y góndola
  line(0, 4, 46, 18);
  line(14, 9, 12, 18); line(14, 9, 16, 18); line(13, 13, 15, 13); line(12, 16, 16, 16);
  line(28, 13, 28, 14);
  rect(26, 14, 5, 1);
  rect(25, 15, 7, 5);
  rect(26, 16, 2, 2, 0); rect(29, 16, 2, 2, 0);

  let d = '';
  for (let y = 0; y < H; y++) {
    let x = 0;
    while (x < W) {
      if (g[y][x]) { const s = x; while (x < W && g[y][x]) x++; d += `M${s} ${y}h${x - s}v1h${s - x}z`; }
      else x++;
    }
  }
  return `<svg class="art" viewBox="0 0 ${W} ${H}" role="img" aria-label="Pixel art of Medellín: the Metrocable over the hillsides and the Coltejer building"><path fill="var(--ink)" d="${d}"/></svg>`;
}

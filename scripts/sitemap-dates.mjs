#!/usr/bin/env node
/**
 * Comprueba que las fechas de `lib/sitemapRoutes.ts` siguen alineadas con el
 * último commit real de cada fichero fuente.
 *
 *   npm run sitemap:dates
 *
 * No modifica nada: solo informa. Las fechas se editan a mano a propósito,
 * porque lastmod debe reflejar cambios de CONTENIDO, no cualquier commit que
 * toque el fichero (un refactor o un cambio de estilos no justifican pedirle
 * a Google que vuelva a rastrear la página).
 */

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../lib/sitemapRoutes.ts", import.meta.url), "utf8");

const routes = [...source.matchAll(/path:\s*"([^"]+)"[\s\S]*?lastModified:\s*"([^"]+)"[\s\S]*?sources:\s*\[([^\]]*)\]/g)].map(
  (match) => ({
    path: match[1],
    lastModified: match[2],
    sources: [...match[3].matchAll(/"([^"]+)"/g)].map((m) => m[1])
  })
);

const guideSources = [...source.matchAll(/GUIDE_SOURCES\s*=\s*\[([^\]]*)\]/g)]
  .flatMap((m) => [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]));
const guidesLastModified = source.match(/GUIDES_LAST_MODIFIED\s*=\s*"([^"]+)"/)?.[1];

function lastCommitDate(file) {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
      encoding: "utf8"
    }).trim();
  } catch {
    return null;
  }
}

function report(label, declared, sources) {
  const dates = sources.map(lastCommitDate).filter(Boolean);
  if (dates.length === 0) {
    console.log(`  ?  ${label.padEnd(46)} declarado ${declared}  (sin datos de git)`);
    return 0;
  }
  const newest = dates.sort().at(-1);
  const drift = newest > declared;
  console.log(
    `  ${drift ? "!" : "."}  ${label.padEnd(46)} declarado ${declared}   git ${newest}`
  );
  return drift ? 1 : 0;
}

console.log("\nRutas del sitemap — lastmod declarado vs. último commit\n");
let drifted = 0;
for (const route of routes) {
  drifted += report(route.path, route.lastModified, route.sources);
}
if (guidesLastModified) {
  drifted += report("/guides/* (GUIDES_LAST_MODIFIED)", guidesLastModified, guideSources);
}

console.log(
  drifted === 0
    ? "\nTodo alineado.\n"
    : `\n${drifted} ruta(s) con commits posteriores al lastmod declarado (marcadas con !).\nRevisa si el cambio afectó al contenido; si es así, actualiza la fecha en lib/sitemapRoutes.ts.\n`
);

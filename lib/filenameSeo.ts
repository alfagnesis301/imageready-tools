export type FilenameSeoResult = {
  score: number;
  issues: string[];
  goodPoints: string[];
};

export function scoreFilename(filename: string): FilenameSeoResult {
  const name = filename.toLowerCase();
  const issues: string[] = [];
  const goodPoints: string[] = [];
  let score = 100;

  if (/\s/.test(name)) {
    score -= 15;
    issues.push("Use hyphens instead of spaces.");
  }

  if (/_/.test(name)) {
    score -= 10;
    issues.push("Use hyphens instead of underscores.");
  }

  if (!/^[a-z0-9\-_.]+$/.test(name)) {
    score -= 10;
    issues.push("Avoid special characters in image filenames.");
  }

  if (name.length > 70) {
    score -= 10;
    issues.push("Keep filenames short and descriptive.");
  }

  if (/(^|[-_])(img|dsc|screenshot|untitled|copy|final)([-_0-9.]|$)/.test(name)) {
    score -= 15;
    issues.push("Replace generic camera, screenshot or draft names with descriptive words.");
  }

  if (!name.includes("-")) {
    score -= 5;
    issues.push("Use descriptive hyphen-separated words.");
  }

  if (!issues.length) {
    goodPoints.push("Filename is readable and hyphen-separated.");
  }

  if (name.length <= 70) {
    goodPoints.push("Filename length is practical for publishing workflows.");
  }

  if (/^[a-z0-9\-_.]+$/.test(name)) {
    goodPoints.push("Filename avoids unusual characters.");
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    issues,
    goodPoints
  };
}

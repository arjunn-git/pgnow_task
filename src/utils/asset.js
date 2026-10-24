/**
 * Helper to resolve public assets correctly across any deployment environment
 * (e.g. GitHub Pages with subpath /pgnow_task/ or root domain deployments)
 */
export const asset = (path) => {
  if (!path) return '';
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
};

export default asset;

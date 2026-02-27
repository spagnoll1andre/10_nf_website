/**
 * Prepends the basePath (only set in production/GitHub Pages builds)
 * to a public-folder asset path so images don't 404 on the subpath deploy.
 *
 * Usage:  src={assetPath("/dashboard_base.png")}
 * Dev:    "/dashboard_base.png"           (NEXT_PUBLIC_BASE_PATH is undefined)
 * Prod:   "/10_nf_website/dashboard_base.png"
 */
export const assetPath = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

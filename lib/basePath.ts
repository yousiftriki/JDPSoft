// next/image renders a plain <img src> when images.unoptimized is true,
// bypassing the loader that would normally add basePath automatically.
// Mirrors the isProd check in next.config.ts — keep the two in sync.
export const basePath = process.env.NODE_ENV === "production" ? "/JDPSoft" : "";

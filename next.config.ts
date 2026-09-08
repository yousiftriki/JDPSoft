import type { NextConfig } from "next";
import { basePath } from "./lib/basePath";

// Repo is a GitHub Pages *project* site (yousiftriki.github.io/JDPSoft),
// so production builds need the repo name as a basePath. Local `next dev`
// runs with NODE_ENV=development and stays unprefixed at localhost:3000.
const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

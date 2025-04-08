// next.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// ESLint configuration (already present)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

const config = {
  eslint: {
    // Add your existing eslint configuration here, if needed.
    ...eslintConfig,
  },
  output: 'export',  // Enable static export for Next.js
  images: {
    unoptimized: true,  // Disable image optimization (required for static export)
  }
};

export default config;

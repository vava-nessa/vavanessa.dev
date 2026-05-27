import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"]
  }
]);

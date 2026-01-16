import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5174",
    env: {
      VITE_DISABLE_MAIL: true,
    },
  },
});

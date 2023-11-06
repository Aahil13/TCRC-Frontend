const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile:
      "/home/runner/work/TCRC-Frontend/TCRC-Frontend/cypress/support/e2e/api.spec.cy.js",
    specPattern: "e2e/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

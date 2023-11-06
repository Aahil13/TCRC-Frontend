const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile:
      "/home/runner/work/TCRC-Frontend/TCRC-Frontend/cypress/support/e2e/api.spec.cy.js",
    specPattern: "cypress/support/e2e/api.spec.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support",
    specPattern: "e2e/api.spec.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

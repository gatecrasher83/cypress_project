const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tphdy6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:1234'
  },
});

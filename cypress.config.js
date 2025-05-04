const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app', 
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
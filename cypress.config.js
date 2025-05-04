const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app', 
    supportFile: false,
    setupNodeEvents(on, config) {
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
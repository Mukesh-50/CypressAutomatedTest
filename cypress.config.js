const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "n6k1eq",

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
    overwrite: true,
    code: false
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    retries:
    {
      runMode: 0,
      openMode: 0,
    }
  },
  experimentalStudio: true
});

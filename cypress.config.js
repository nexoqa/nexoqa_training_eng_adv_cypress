const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videoCompression: 32,
  videosFolder: 'cypress/videos',
  videoUploadOnPasses: true,
});

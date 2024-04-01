const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://restful-booker.herokuapp.com",
    setupNodeEvents(on, config) {
      config.specPattern = [
        "cypress/e2e/auth.cy.js",
        "cypress/e2e/getBookingIds.cy.js",
        "cypress/e2e/getBooking.cy.js",
        "cypress/e2e/createBooking.cy.js",
        "cypress/e2e/updateBooking.cy.js",
        "cypress/e2e/partialUpdateBooking.cy.js",
        "cypress/e2e/deleteBooking.cy.js",
      ];
      return config;
    },
  },
});

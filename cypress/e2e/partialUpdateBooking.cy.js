import { updateBookingSchema } from "../utils/schema";
import { additionalNeeds, improperBookingDates } from "../utils/testData";

describe("Updates a current booking with a partial payload", () => {
  before(() => {
    cy.login();
  });

  it("should return 200 with successfully partially updated data", () => {
    cy.request({
      method: "PATCH",
      url: "/booking/3",
      body: additionalNeeds,
      headers: {
        Cookie: `token=${Cypress.env("token")}`,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.jsonSchema(updateBookingSchema);
      expect(response.body.additionalneeds).to.contains("Lunch and Dinner");
    });
  });

  it("should return 400 for invalid checkin date", () => {
    cy.request({
      method: "PUT",
      url: "/booking/3",
      body: improperBookingDates,
      headers: {
        Cookie: `token=${Cypress.env("token")}`,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});

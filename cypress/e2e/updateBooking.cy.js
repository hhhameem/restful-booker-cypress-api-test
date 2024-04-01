import { updateBookingSchema } from "../utils/schema";
import { userInfoToBeUpdated } from "../utils/testData";

describe("Updates an existing booking", () => {
  before(() => {
    cy.login();
  });

  it("should return 200 with successfully updated data", () => {
    const authorization = `token=${Cypress.env("token")}`;

    cy.request({
      method: "PUT",
      url: "/booking/2",
      body: userInfoToBeUpdated,
      headers: {
        Cookie: authorization,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.jsonSchema(updateBookingSchema);
      expect(response.body.firstname).to.contains("Tuesday");
    });
  });

  it("should return 401 for invalid auth token", () => {
    const authorization = `token=${Cypress.env("token")}`;

    cy.request({
      method: "PUT",
      url: "/booking/2",
      body: userInfoToBeUpdated,
      headers: {
        Cookie: "invalid token",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(401);
    });
  });
});

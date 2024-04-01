import { updateBookingSchema } from "../utils/schema";

describe("Delete and existing booking", () => {
  before(() => {
    cy.login();
  });

  it("should return 404 for using wrong endpoint", () => {
    cy.request({
      method: "DELETE",
      url: "/boking/1",
      headers: {
        Cookie: `token=${Cypress.env("token")}`,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  it("should return 401 for invalid authorization", () => {
    cy.request({
      method: "DELETE",
      url: "/booking/1",
      headers: {
        Cookie: `token=invalid`,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(401);
    });
  });

  it("should return 201 for successfully deleting an existing data", () => {
    cy.request({
      method: "DELETE",
      url: "/booking/1",
      headers: {
        Cookie: `token=${Cypress.env("token")}`,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
  });
});

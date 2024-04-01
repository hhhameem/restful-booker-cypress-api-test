import { updateBookingSchema } from "../utils/schema";

describe("Updates an existing booking", () => {
  before(() => {
    cy.login();
  });

  it("should return 200 with successfully updated data", () => {
    const authorization = `token=${Cypress.env("token")}`;

    cy.request({
      method: "PUT",
      url: "/booking/1",
      body: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
      headers: {
        Cookie: authorization,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.jsonSchema(updateBookingSchema);
    });
  });

  it("should return 401 for invalid auth token", () => {
    const authorization = `token=${Cypress.env("token")}`;

    cy.request({
      method: "PUT",
      url: "/booking/1",
      body: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
      headers: {
        Cookie: "invalid token",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(401);
    });
  });
});

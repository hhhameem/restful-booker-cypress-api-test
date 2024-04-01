import { bookingSchema } from "../utils/schema";

describe("Creates a new booking", () => {
  it("should return 400 saying that firstname is missing", () => {
    cy.request({
      method: "POST",
      url: "/booking",
      body: {
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.body).to.have.property("message", "firstname is missing");
      expect(response.status).to.equal(400);
    });
  });

  it("should create a new booking and return the newly created booking", () => {
    cy.request({
      method: "POST",
      url: "/booking",
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
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.body).to.be.jsonSchema(bookingSchema);
      expect(response.status).to.equal(200);
    });
  });
});

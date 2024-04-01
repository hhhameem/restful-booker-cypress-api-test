import { createBookingSchema } from "../utils/schema";
import { firstNameMissing, perfectUserInfo } from "../utils/testData";

describe("Creates a new booking", () => {
  it("should return 400 saying that firstname is missing", () => {
    cy.request({
      method: "POST",
      url: "/booking",
      body: firstNameMissing,
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
      body: perfectUserInfo,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.body).to.be.jsonSchema(createBookingSchema);
      expect(response.status).to.equal(200);
    });
  });
});

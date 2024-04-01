import { bookingIdSchema } from "../utils/schema";

describe("Returns the ids of all the bookings that exist within the API", () => {
  it("should successfully return 200 status code", () => {
    cy.request({
      method: "GET",
      url: "/booking",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("should successfully return all booking ids with expected jsonSchema", () => {
    cy.request({
      method: "GET",
      url: "/booking",
    }).then((response) => {
      expect(response.body).to.be.jsonSchema(bookingIdSchema);
    });
  });
});

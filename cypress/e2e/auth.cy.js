import { expect } from "chai";

describe("Creates a new auth token to use for access to the PUT and DELETE booking", () => {
  it("should successfully create a new token", () => {
    cy.request({
      method: "POST",
      url: "/auth",
      body: {
        username: "admin",
        password: "password123",
      },
    }).then((response) => {
      expect(response.body).to.have.property("token");
      expect(response.body.token).to.not.be.null;
    });
  });

  it("should respond within 500 ms", () => {
    cy.request({
      method: "POST",
      url: "/auth",
      body: {
        username: "admin",
        password: "password123",
      },
    }).then((response) => {
      expect(response.duration).to.not.be.greaterThan(500);
    });
  });
});

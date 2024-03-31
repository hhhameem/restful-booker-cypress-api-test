describe("API Testing", () => {
  it("should successfully retrieve user data", () => {
    cy.request({
      method: "POST",
      url: "/auth",
      body: {
        username: "admin",
        password: "password123",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("token");
      console.log("token ", response.body.token);
    });
  });
});

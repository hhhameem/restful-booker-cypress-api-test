describe("Returns a specific booking based upon the booking id provided", () => {
  it("should successfully return response body in xml format", () => {
    cy.request({
      method: "GET",
      url: "/booking/5",
      headers: {
        accept: "application/xml",
      },
    }).then((response) => {
      expect(response.body).xml.to.be.valid();
      expect(response.status).to.equal(200);
    });
  });
});

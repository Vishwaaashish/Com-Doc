describe("API Tests", () => {
    it("should retrieve user information", () => {
      cy.request({
        method: "GET",
        url: "https://api.conduit.com/user",
        headers: {
          Authorization: "Bearer YOUR_ACCESS_TOKEN",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("user_id");
        expect(response.body).to.have.property("username");
        expect(response.body).to.have.property("email");
      });
    });
  });
  
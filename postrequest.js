describe("API Tests", () => {
    it("should create a new post", () => {
      const postData = {
        title: "Test Post",
        content: "This is a test post content.",
        author: "TestUser",
      };
  
      cy.request({
        method: "POST",
        url: "https://api.conduit.com/posts",
        headers: {
          Authorization: "Bearer YOUR_ACCESS_TOKEN",
        },
        body: postData,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        expect(response.body.title).to.eq(postData.title);
        expect(response.body.content).to.eq(postData.content);
        expect(response.body.author).to.eq(postData.author);
      });
    });
  });
  
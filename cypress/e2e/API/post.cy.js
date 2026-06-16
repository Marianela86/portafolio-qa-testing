describe("API - Posts", () => {

  const baseUrl = "https://jsonplaceholder.typicode.com";

  it("Debería obtener todos los posts correctamente", () => {

    cy.request("GET", `${baseUrl}/posts`)
      .then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.eq(100);

      });

  });

  it("Debería obtener un post específico", () => {

    cy.request("GET", `${baseUrl}/posts/1`)
      .then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(1);
        expect(response.body).to.have.property("title");
        expect(response.body).to.have.property("body");

      });

  });

  it("Debería validar la estructura de un post", () => {

    cy.request("GET", `${baseUrl}/posts/1`)
      .then((response) => {

        expect(response.body).to.have.all.keys(
          "userId",
          "id",
          "title",
          "body"
        );

      });

  });

  it("Debería validar el tiempo de respuesta", () => {

    cy.request("GET", `${baseUrl}/posts`)
      .then((response) => {

        expect(response.duration).to.be.lessThan(2000);

      });

  });

  it("Debería devolver 404 para un post inexistente", () => {

    cy.request({
      method: "GET",
      url: `${baseUrl}/posts/999999`,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(404);

    });

  });

});
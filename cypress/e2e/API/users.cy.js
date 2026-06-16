describe('Usuarios API', () => {

  it('Obtiene lista de usuarios', () => {

    cy.request(
      'GET',
      'https://jsonplaceholder.typicode.com/users'
    ).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.length).to.eq(10);

    });

  });
  it('Valida email del usuario', () => {

    cy.request(
      'GET',
      'https://jsonplaceholder.typicode.com/users/1'
    ).then((response) => {

      expect(response.body.email).to.contain('@');

    });

});
it('Valida tiempo de respuesta', () => {

    cy.request(
      'GET',
      'https://jsonplaceholder.typicode.com/users'
    ).then((response) => {

      expect(response.duration).to.be.lessThan(1000);

    });

});

});
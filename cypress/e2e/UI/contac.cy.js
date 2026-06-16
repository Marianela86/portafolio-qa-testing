describe("Pruebas de la página Publica- Contacto", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://automationintesting.online");
  });
    it("Deveria enviar un mensaje de contacto correctamente con datos válidos", () => {
        cy.contains("Contact").click();
        cy.get("#name").type("Juan Pérez");
        cy.get("#email").type("juan.perez@example.com");
        cy.get("#phone").type("3415287098989");
        cy.get("#subject").type("Informacion sobre servicios y habitaciones");
        cy.get("#description").type("Me gustaría obtener más información sobre sus servicios y habitaciones disponibles.");
        cy.get('.d-grid > .btn').click();
        cy.contains("Thanks for getting in touch", { timeout: 10000 }).should("be.visible");
      });
    });
  ;
 

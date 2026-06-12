describe("Pruebas de login en Shady Meadows", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://automationintesting.online");
    cy.get(".nav-link").contains("Admin").click();
  });

  it("Deveria iniciar sesión con éxito como administrador", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.contains("Login").click();

    cy.contains(/logout/i, { timeout: 10000 }).should("be.visible");
  });
});

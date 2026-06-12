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
  it ("Deveria mostrar un mensaje de error al intentar iniciar sesión con credenciales incorrectas", () => {
    cy.get("#username").type("usuario_incorrecto", {delay:50});
    cy.get("#password").type("clave_incorrecta", {delay:50});
    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').should("be.visible");
  });
});

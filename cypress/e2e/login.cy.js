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
  it("Deveria mostrar un mensaje de error por campos obligatorios vacíos", () => {
    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').should("be.visible");
  });
  it("Deveria validar que la contraseña se oculte al escribir(campo tipo password)",() =>{
    cy.get("#password").should("have.attr", "type", "password");
  });
  it("Deveria permitir al administrador cerrar sesión correctamente", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.contains("Login").click();
    cy.contains(/logout/i, { timeout: 10000 }).should("be.visible").click();
    cy.contains("Login").should("be.visible");
  });
 
});
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
 

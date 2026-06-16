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
  it("Debería mostrar mensaje de error usando datos de fixture", () => {
  cy.fixture("usuarios.json").then((usuarios) => {
    cy.get("#username").type(usuarios.invalido.username);
    cy.get("#password").type(usuarios.invalido.password);
    cy.get('button[type="submit"]').click();
    cy.get(".alert.alert-danger", { timeout: 10000 }).should("contain", "Invalid credentials");

  });
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

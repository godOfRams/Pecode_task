import { login_page_locators as loc } from "../support/login_page_commands";

/**Error messages*/
let TYPE_LOGIN_ERROR_MSG = "Please enter username.";
let UNUSED_LOGIN_MSG = "No account found with that username.";
let TYPE_PASSWORD_ERROR_MSG = "Please enter your password.";

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Checks visibility of elements at the page", () => {
    cy.get(loc.company_logo).should("be.visible");
    cy.get(loc.page_title).should("be.visible");
    cy.get(loc.login_field).should("be.visible");
    cy.get(loc.password_field).should("be.visible");
    cy.get(loc.login_button).should("be.visible");
  });

  it("Shows an error of an empty fields", () => {
    cy.clickLoginBtn();
    //TODO ask developers to implement more stable selectors, or find another one
    cy.get(":nth-child(1) > .help-block").should("be.visible").invoke("text").should("be.eq", TYPE_LOGIN_ERROR_MSG);
    cy.get(":nth-child(2) > .help-block").should("be.visible").invoke("text").should("be.eq", TYPE_PASSWORD_ERROR_MSG);
  });

  it("Shows an error of a non-existent login credential", () => {
    cy.typeLogin(Cypress.env("login"));
    cy.typePassword(Cypress.env("password"));
    cy.clickLoginBtn();
    cy.get(".has-error > .help-block").should("be.visible").invoke("text").should("be.eq", UNUSED_LOGIN_MSG);
  });

  it("login with valid credentials", () => {
    cy.typeLogin(Cypress.env("login"));
    cy.typePassword(Cypress.env("password"));
    cy.clickLoginBtn();
    cy.url().should("contain", "shop");
  });
});

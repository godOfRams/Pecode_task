/// <reference types="cypress" />
describe("Sign Up workflow", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
  });

  it("Can register with valid parameters", () => {
    cy.intercept("**/api/17/**").as("SignUpForm");
    cy.get(".layout__header > .link-btn--primary").click();
    cy.wait("@SignUpForm");
    cy.typeLoginAndPassword();
    cy.selectCurrency("AUD");
    cy.get(".registration-dynamic-form__button-wrapper > .btn").click();
    cy.typeFirstNameAndLAstName();
    cy.typeDateOfBirth();
    cy.get(".tel__number-input").type("96654654");
    cy.get(".registration-dynamic-form__button-wrapper--submit > .btn").click();
    cy.get(".registr-promo-step__item--active").should("be.visible");
    cy.get(".registration-dynamic-form__button-wrapper--submit > .btn").should("be.visible");
  });
});

// This command are specialized for SINGUPform

function genereteRandomMumbers() {
  let uuid = () => Cypress._.random(0, 1e6);
  let random = uuid();
  return random;
}

Cypress.Commands.add("typeLoginAndPassword", (login, password) => {
  let new_login = login ? login : `testname${genereteRandomMumbers()}@gmail.com`;
  let new_password = password ? password : `testpassword${genereteRandomMumbers()}`;
  cy.get("#email").type(new_login);
  cy.get("#password_single").type(new_password);
});

Cypress.Commands.add("selectCurrency", currency => {
  let currencyList = {
    AUD: "#currency-item-3"
  };
  cy.get("#currency").click();
  cy.get(currencyList[currency]).click();
});

Cypress.Commands.add("typeFirstNameAndLAstName", (firstName, LastName) => {
  let new_firstName = firstName ? firstName : `firstName${genereteRandomMumbers()}`;
  let new_LastName = LastName ? LastName : `LastName${genereteRandomMumbers()}`;
  cy.get("#first_name").type(new_firstName);
  cy.get("#last_name").type(new_LastName);
});

Cypress.Commands.add("typeDateOfBirth", () => {
  let date = new Date();
  cy.get(".simple-date__day").type(date.getDate());
  cy.get(".simple-date__month").type(date.getMonth());
  cy.get(".simple-date__year").type(date.getFullYear());
});

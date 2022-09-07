// This command are specialized for Login page

/**Locators*/
export const login_page_locators = {
  //TODO ask developers to implement more stable selectors
  company_logo: "#logomini",
  page_title: "h1",
  login_field: ":nth-child(1) > .form-control",
  password_field: ":nth-child(2) > .form-control",
  login_button: ".btn"
};

/**Type text to the login field*/
Cypress.Commands.add("typeLogin", login => {
  cy.get(login_page_locators.login_field).type(login);
});

/**Type text to the password field*/
Cypress.Commands.add("typePassword", password => {
  cy.get(login_page_locators.password_field).type(password);
});

/**click login button*/
Cypress.Commands.add("clickLoginBtn", password => {
  cy.get(login_page_locators.login_button).click();
});

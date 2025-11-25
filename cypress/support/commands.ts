/// <reference types="cypress-xpath" />

import LoginPage from '../page-obj/loginPage';

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('login', () => {
  cy.session('user-session', () => {
    const loginPage = new LoginPage();

    loginPage.logInUser();
  });
});

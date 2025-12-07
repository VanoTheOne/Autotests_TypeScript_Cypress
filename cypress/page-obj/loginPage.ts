import Base from './base';
import Header from './header/header';
import { env } from '../support/env';
import { waitForDebugger } from 'inspector';

export default class LoginPage extends Base {
  public header: Header;

  constructor() {
    super();
    this.header = new Header();
  }

  get signInWithIMDbButton() {
    return cy.get('div[data-testid="sign_in_content_sign_in"] a[data-testid="sign_in_option_IMDB"]');
  }

  get emailInputField() {
    return cy.get('input[type="email"]');
  }

  get passwordInputField() {
    return cy.get('input[type="password"]');
  }

  get signInButton() {
    return cy.get('#signInSubmit');
  }

  get signInToExistingAccountButton() {
    return cy.get('div[data-testid="sign_in_content_main"] button[data-testid="navigate_to_sign_in_button"]');
  }

  logInUser() {
    this.navigate('https://www.imdb.com/');
    this.header.signInButton.click();
    this.signInToExistingAccountButton.click();
    this.signInWithIMDbButton.click();
    this.emailInputField.type(env.login);
    this.passwordInputField.type(env.password);
    this.signInButton.click();
    cy.title().should(`eq`, `IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows`);
  }
}

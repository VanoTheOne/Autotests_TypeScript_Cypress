import Base from './base';
import Header from './header/header';
import { env } from '../support/env';

export default class LoginPage extends Base {
  public header: Header;

  constructor() {
    super();
    this.header = new Header();
  }

  get signInWithIMDbButton() {
    return cy.xpath('//div[@class="display-button-container"]//a[@data-testid="sign_in_option_IMDB"]');
  }

  get emailInputField() {
    return cy.xpath('//div[@class="a-box"]//input[@type="email"]');
  }

  get passwordInputField() {
    return cy.xpath('//div[@class="a-box"]//input[@type="password"]');
  }

  get signInButton() {
    return cy.xpath('//div[@class="a-box"]//input[@id="signInSubmit"]');
  }

  get signInToExistingAccountButton() {
    return cy.xpath('//div[@data-testid="sign_in_container"]//button[@data-testid="navigate_to_sign_in_button"]');
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

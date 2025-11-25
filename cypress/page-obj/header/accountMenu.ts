import Base from '../base';

export default class AccountMenu extends Base {
  constructor() {
    super();
  }

  get accountMenuButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//div[contains (@class, "navbar__flyout--breakpoint-m")]//label[contains (@class, "navbar__user-menu-toggle__button")]');
  }

  get accountMenuYourProfileButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your profile")]/..');
  }

  get accountMenuYourWatchlistButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your Watchlist")]/..');
  }

  get accountMenuYourRatingsButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your ratings")]/..');
  }

  get accountMenuYourListsButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your lists")]/..');
  }

  get accountMenuYourInterestsButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your interests")]/..');
  }

  get accountMenuYourWatchHistoryButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Your watch history")]/..');
  }

  get accountMenuAccountSettingsButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Account settings")]/..');
  }

  get accountMenuSignOutButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//span[@id="navUserMenu-contents"]//span[contains (text(), "Sign out")]/..');
  }

  openUserProfile() {
    this.accountMenuButton.click();
    this.accountMenuYourProfileButton.click();
  }

  openUserWatchlist() {
    this.accountMenuButton.click();
    this.accountMenuYourWatchlistButton.click();
  }

  openUserRatings() {
    this.accountMenuButton.click();
    this.accountMenuYourRatingsButton.click();
  }

  openUserLists() {
    this.accountMenuButton.click();
    this.accountMenuYourListsButton.click();
  }

  openUserInterests() {
    this.accountMenuButton.click();
    this.accountMenuYourInterestsButton.click();
  }

  openUserWatchHistory() {
    this.accountMenuButton.click();
    this.accountMenuYourWatchHistoryButton.click();
  }

  openUserAccountSettings() {
    this.accountMenuButton.click();
    this.accountMenuAccountSettingsButton.click();
  }

  signOut() {
    this.accountMenuButton.click();
    this.accountMenuSignOutButton.click();
  }
}

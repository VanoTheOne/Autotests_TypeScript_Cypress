import Base from '../base';

export default class AccountMenu extends Base {
  constructor() {
    super();
  }

  get accountMenuButton() {
    return cy.get('#imdbHeader label.navbar__user-menu-toggle__button');
  }

  get accountMenuYourProfileButton() {
    return cy.get('#navUserMenu-contents [href="/profile/?ref_=hm_nv_profile"]');
  }

  get accountMenuYourWatchlistButton() {
    return cy.get('#navUserMenu-contents [href="/list/watchlist/?ref_=hm_nv_wls"]');
  }

  get accountMenuYourRatingsButton() {
    return cy.get('#navUserMenu-contents [href="/list/ratings/?ref_=hm_nv_rat"]');
  }

  get accountMenuYourListsButton() {
    return cy.get('#navUserMenu-contents [href="/profile/lists/?ref_=hm_nv_lst"]');
  }

  get accountMenuYourInterestsButton() {
    return cy.get('#navUserMenu-contents [href="/list/interests/?ref_=hm_nv_in"]');
  }

  get accountMenuYourWatchHistoryButton() {
    return cy.get('#navUserMenu-contents [href="/list/watchhistory/?ref_=hm_nv_wtchd"]');
  }

  get accountMenuAccountSettingsButton() {
    return cy.get('#navUserMenu-contents [href="/registration/accountsettings/?ref_=hm_nv_pers"]');
  }

  get accountMenuSignOutButton() {
    return cy.get('#navUserMenu-contents [href="/registration/logout/?u=%2F&ref_=hm_nv_lgout"]');
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

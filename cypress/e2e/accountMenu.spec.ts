import Base from '../page-obj/base';
import Header from '../page-obj/header/header';
import AccountMenu from '../page-obj/header/accountMenu';

describe('Account menu tests', function () {
  let base: Base;
  let header: Header;
  let accountMenu: AccountMenu;

  beforeEach(() => {
    base = new Base();
    header = new Header();
    accountMenu = new AccountMenu();

    cy.login();
    base.navigate(`https://www.imdb.com/`);
  });

  describe(`Account menu smoke tests`, function () {
    it(`Should check the transition to the user's profile page`, () => {
      accountMenu.openUserProfile();
      cy.title().should(`match`, /^Ivan-\d+'s Profile - IMDb$/);
    });
    it(`Should check the transition to the user's watchlist page`, () => {
      accountMenu.openUserWatchlist();
      cy.title().should(`eq`, `Your Watchlist`);
    });
    it(`Should check the transition to the user's ratings page`, () => {
      accountMenu.openUserRatings();
      cy.title().should(`eq`, `Your ratings`);
    });
    it(`Should check the transition to the user's lists page`, () => {
      accountMenu.openUserLists();
      cy.title().should(`eq`, `Your lists`);
    });
    it(`Should check the transition to the user's interests page`, () => {
      accountMenu.openUserInterests();
      cy.title().should(`eq`, `Your interests`);
    });
    it(`Should check the transition to the user's watch history page`, () => {
      accountMenu.openUserWatchHistory();
      cy.title().should(`eq`, `Your watch history`);
    });
    it(`Should check the transition to the user's account settings page`, () => {
      accountMenu.openUserAccountSettings();
      cy.title().should(`eq`, `Account settings`);
    });
    it(`Should check signing out`, () => {
      accountMenu.signOut();
      header.signInButton.should('be.visible');
    });
  });
});

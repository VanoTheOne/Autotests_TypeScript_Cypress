import Base from '../page-obj/base';
import Header from '../page-obj/header/header';
import AccountMenu from '../page-obj/header/accountMenu';

describe(`Header tests`, function () {
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

  describe(`Header smoke tests`, function () {
    it(`Should check the transition to the user's watchlist page`, () => {
      header.openWatchlist();
      cy.title().should(`eq`, `Your Watchlist`);
    });
    it(`Should check the needed movie is founded`, () => {
      const movieTitle = `Blade Runner`;
      header.searchMovie(movieTitle);
      header.searchResult.should('include.text', movieTitle);
    });
    it(`Should check if menu opens and closes`, () => {
      header.openMenu();
      header.closeMenu();
      header.searchInput.should('be.visible');
    });
  });
});

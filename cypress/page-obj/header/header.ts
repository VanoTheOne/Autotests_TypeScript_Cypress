import Base from '../base';

export default class Header extends Base {
  constructor() {
    super();
  }

  get signInButton() {
    return cy.get('#imdbHeader div.nav__userMenu a.imdb-header__signin-text');
  }

  get watchlistButton() {
    return cy.get('#imdbHeader div.imdb-header__watchlist-button a');
  }

  get searchInput() {
    return cy.get('#suggestion-search-container input[type="text"]');
  }

  get searchButton() {
    return cy.get('#imdbHeader #suggestion-search-button');
  }

  get searchResult() {
    return cy.get('[data-testid="find-results-section-title"] li').first();
  }

  get menuButton() {
    return cy.get('#imdbHeader #imdbHeader-navDrawerOpen');
  }

  get closeMenuButton() {
    return cy.get('div[data-testid="panel-header"] label[for="imdbHeader-navDrawer"]');
  }

  openWatchlist() {
    this.watchlistButton.click();
  }

  searchMovie(movieTitle: string) {
    this.searchInput.click();
    this.searchInput.type(movieTitle);
    this.searchButton.click();
  }

  openMenu() {
    this.menuButton.click();
  }

  closeMenu() {
    this.closeMenuButton.click();
  }
}

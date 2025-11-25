import Base from '../base';

export default class Header extends Base {
  constructor() {
    super();
  }

  get signInButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//a[@class="ipc-btn ipc-btn--single-padding ipc-btn--center-align-content ipc-btn--default-height ipc-btn--core-baseAlt ipc-btn--theme-baseAlt ipc-btn--button-radius imdb-header__signin-text"]');
  }

  get watchlistButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//div[@class="sc-196567ac-0 fClFUt imdb-header__watchlist-button"]/a');
  }

  get searchInput() {
    return cy.xpath('//div[@id="suggestion-search-container"]//input[@type="text"]');
  }

  get searchButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//button[@id="suggestion-search-button"]');
  }

  get searchResult() {
    return cy.xpath('//li[@class="ipc-metadata-list-summary-item"]').first();
  }

  get menuButton() {
    return cy.xpath('//nav[@id="imdbHeader"]//label[@id="imdbHeader-navDrawerOpen"]');
  }

  get closeMenuButton() {
    return cy.xpath('//div[@class="drawer__panelHeader"]//label[@for="imdbHeader-navDrawer"]');
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

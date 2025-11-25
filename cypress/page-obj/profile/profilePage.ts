import Base from '../base';

export default class ProfilePage extends Base {
  constructor() {
    super();
  }

  get editProfileButton() {
    return cy.xpath('//div[@data-testid="up-header"]//a[contains (@class, "ipc-btn ipc-btn--single-padding")]');
  }

  get userBio() {
    return cy.xpath('//div[@data-testid="up-header"]//div[@class="ipc-html-content-inner-div"]');
  }

  get exploreBadgesButton() {
    return cy.xpath('//section[@data-testid="user-badges-feature"]//a[@data-testid="bdg-shoveler-cta"]');
  }

  get settingsButton() {
    return cy.xpath('//div[@data-testid="up-header"]//button[@title="Settings"]');
  }

  openEditProfilePage() {
    this.editProfileButton.click();
  }

  openAccountSettings() {
    this.settingsButton.click();
  }
}

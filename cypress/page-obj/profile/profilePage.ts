import Base from '../base';

export default class ProfilePage extends Base {
  constructor() {
    super();
  }

  get editProfileButton() {
    return cy.get('[data-testid="up-header"] a');
  }

  get userBio() {
    return cy.get('[data-testid="up-header"] div.ipc-html-content-inner-div');
  }

  get exploreBadgesButton() {
    return cy.get('[data-testid="user-badges-feature"] [data-testid="bdg-shoveler-cta"]');
  }

  get settingsButton() {
    return cy.get('[data-testid="up-header"] [title="Settings"]');
  }

  openEditProfilePage() {
    this.editProfileButton.click();
  }

  openAccountSettings() {
    this.settingsButton.click();
  }
}

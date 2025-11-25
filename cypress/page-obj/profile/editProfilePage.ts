import Base from '../base';

export default class EditProfilePage extends Base {
  constructor() {
    super();
  }

  get editUsernameButton() {
    return cy.xpath('//div[@data-testid="user-info-username"]//button[@data-testid="user-info-edit"]');
  }

  get editUserBioButton() {
    return cy.xpath('//div[@data-testid="user-info-bio"]//button[@data-testid="user-info-edit"]');
  }

  get uploadImageButton() {
    return cy.xpath('//div[@data-testid="upe-image-editor-section"]//button[@data-testid="upe-image-select-uploadBtn"]');
  }

  get usernameField() {
    return cy.xpath('//div[@class="ipc-promptable-base__content"]//input[@name="username-edit"]');
  }

  get userBioField() {
    return cy.xpath('//div[@data-testid="promptable__pc"]//textarea[@id="textarea__0"]');
  }

  get saveChangesButton() {
    return cy.xpath('//div[@class="ipc-promptable-base__content"]//button[@data-testid="prompt-saveButton"]');
  }

  get backButton() {
    return cy.xpath('//div[@data-testid="edit-header"]//a[@data-testid="edit-header-back"]');
  }

  get editUsernameDialog() {
    return cy.xpath('div[role="dialog"]');
  }

  changeUsername(newUsername: string) {
    this.editUsernameButton.click();
    this.usernameField.click();
    this.usernameField.clear();
    this.usernameField.type(newUsername);
    this.saveChangesButton.click();
  }

  changeUserBio(newUserBio: string) {
    this.editUserBioButton.click();
    this.userBioField.click();
    this.userBioField.clear();
    this.userBioField.type(newUserBio);
    this.saveChangesButton.click();
  }

  backToUserProfile() {
    this.backButton.click();
  }
}

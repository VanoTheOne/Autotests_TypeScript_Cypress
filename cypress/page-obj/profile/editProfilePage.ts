import Base from '../base';

export default class EditProfilePage extends Base {
  constructor() {
    super();
  }

  get editUsernameButton() {
    return cy.xpath('[data-testid="user-info-username"] [data-testid="user-info-edit"]');
  }

  get editUserBioButton() {
    return cy.xpath('[data-testid="user-info-bio"] [data-testid="user-info-edit"]');
  }

  get uploadImageButton() {
    return cy.xpath('[data-testid="upe-image-select-fileInput"]');
  }

  get usernameInputField() {
    return cy.xpath('#text-input__0');
  }

  get userBioInputField() {
    return cy.xpath('#textarea__0');
  }

  get saveChangesButton() {
    return cy.xpath('[data-testid="prompt-saveButton"]');
  }

  get backButton() {
    return cy.xpath('[data-testid="edit-header"] [data-testid="edit-header-back"]');
  }

  get editUsernameDialog() {
    return cy.xpath('[role="dialog"]');
  }

  changeUsername(newUsername: string) {
    this.editUsernameButton.click();
    this.usernameInputField.click();
    this.usernameInputField.clear();
    this.usernameInputField.type(newUsername);
    this.saveChangesButton.click();
  }

  changeUserBio(newUserBio: string) {
    this.editUserBioButton.click();
    this.userBioInputField.click();
    this.userBioInputField.clear();
    this.userBioInputField.type(newUserBio);
    this.saveChangesButton.click();
  }

  backToUserProfile() {
    this.backButton.click();
  }
}

import Base from '../base';

export default class EditProfilePage extends Base {
  constructor() {
    super();
  }

  get editUsernameButton() {
    return cy.get('[data-testid="user-info-username"] [data-testid="user-info-edit"]');
  }

  get editUserBioButton() {
    return cy.get('[data-testid="user-info-bio"] [data-testid="user-info-edit"]');
  }

  get uploadImageButton() {
    return cy.get('[data-testid="upe-image-select-fileInput"]');
  }

  get usernameInputField() {
    return cy.get('#text-input__0');
  }

  get userBioInputField() {
    return cy.get('#textarea__0');
  }

  get saveChangesButton() {
    return cy.get('[data-testid="prompt-saveButton"]');
  }

  get backButton() {
    return cy.get('[data-testid="edit-header"] [data-testid="edit-header-back"]');
  }

  get editUsernameDialog() {
    return cy.get('[role="dialog"]');
  }

  changeUsername(newUsername: string) {
    cy.wait(2000);
    this.editUsernameButton.click();
    this.usernameInputField.click();
    this.usernameInputField.clear();
    this.usernameInputField.type(newUsername);
    this.saveChangesButton.click();
  }

  changeUserBio(newUserBio: string) {
    cy.wait(2000);
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

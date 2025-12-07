import Base from '../page-obj/base';
import ProfilePage from '../page-obj/profile/profilePage';
import EditProfilePage from '../page-obj/profile/editProfilePage';
import AccountMenu from '../page-obj/header/accountMenu';

describe(`User profile page tests`, function () {
  let base: Base;
  let accountMenu: AccountMenu;
  let profilePage: ProfilePage;
  let editProfilePage: EditProfilePage;

  beforeEach(() => {
    base = new Base();
    profilePage = new ProfilePage();
    editProfilePage = new EditProfilePage();
    accountMenu = new AccountMenu();

    cy.login();
    base.navigate(`https://www.imdb.com/`);
  });

  describe(`Edit profile page tests`, function () {
    it(`Should check if username is changed`, () => {
      accountMenu.openUserProfile();
      profilePage.openEditProfilePage();
      const newUsername = `Ivan-66666`;
      editProfilePage.changeUsername(newUsername);
      editProfilePage.backToUserProfile();
      cy.title().should(`eq`, `${newUsername}'s Profile - IMDb`);
    });
    it(`Should check if user Bio is changed`, () => {
      accountMenu.openUserProfile();
      profilePage.openEditProfilePage();
      const newUserBio = `Playwright123`;
      editProfilePage.changeUserBio(newUserBio);
      editProfilePage.backToUserProfile();
      profilePage.userBio.should('include.text', newUserBio);
    });
  });
});

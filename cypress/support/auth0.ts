import LoginPage from '../page-obj/loginPage';

export function authenticate() {
  const loginPage = new LoginPage();
  loginPage.logInUser();
}

export default class Base {
  navigate(url: string) {
    return cy.visit(url);
  }

  reloadPage() {
    return cy.reload();
  }
}

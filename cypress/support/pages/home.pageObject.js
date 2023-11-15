import PageObject from '../PageObject';

class HomePageObject extends PageObject {
  get SignUpLink() {
    return cy.get('#signin2');
  }

  get SignInLink() {
    return cy.get('#login2');
  }

  get usernameLink() {
    return cy.get('#nameofuser');
  }

  assertUsername(name) {
    this.usernameLink.should('contain', name);
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }
}

export default HomePageObject;
import PageObject from '../PageObject';

class SignInPageObject extends PageObject {
  get usernameField() {
    return cy.get('#loginusername');
  }

  get passwordField() {
    return cy.get('#loginpassword');
  }

  get signInBtn() {
    return cy.contains('.btn', 'Log in');
  }

  usernameType(text) {
    this.usernameField.type(text);
    cy.wait(1500);
  }

  passwordType(text) {
    this.passwordField.type(text);
  }
}

export default SignInPageObject;

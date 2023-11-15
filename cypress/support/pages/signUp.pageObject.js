import PageObject from '../PageObject';

class SignUpPageObject extends PageObject {
  get usernameField() {
    return cy.get('#sign-username');
  }

  get passwordField() {
    return cy.get('#sign-password');
  }

  get signUpBtn() {
    return cy.contains('.btn', 'Sign up');
  }

  usernameType(text) {
    this.usernameField.type(text);
    cy.wait(1500);
  }

  passwordType(text) {
    this.passwordField.type(text);
  }
}

export default SignUpPageObject;
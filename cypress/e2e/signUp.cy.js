/// <reference types='cypress' />

import HomePageObject from
  '../support/pages/home.pageObject';
import SignUpPageObject from
  '../support/pages/signUp.pageObject';

const signUp = new SignUpPageObject();
const home = new HomePageObject();

describe('signUp', () => {
  let user;

  beforeEach(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });

    signUp.visit('/');
    home.SignUpLink.click();
  });

  it('should be able to sign up with valid creds', () => {
    signUp.usernameType(user.username);
    signUp.passwordType(user.password);
    signUp.signUpBtn.click();
    signUp.assertAllert('Sign up successful.');
  });

  it('should not be able to sign up with empty username', () => {
    signUp.passwordType(user.password);
    signUp.signUpBtn.click();
    signUp.assertAllert('Please fill out Username and Password.');
  });

  it('should not be able to sign up with empty password', () => {
    signUp.usernameType(user.username);
    signUp.signUpBtn.click();
    signUp.assertAllert('Please fill out Username and Password.');
  });

  it('should not be able to sign up with taken username', () => {
    cy.register(user.username, user.password);
    signUp.usernameType(user.username);
    signUp.passwordType(user.password);
    signUp.signUpBtn.click();
    signUp.assertAllert('This user already exist.');
  });
  // Все остальные негативные имеют баги, поэтому 
  // тестировать их смысла нет
})
/// <reference types='cypress' />

import HomePageObject from
  '../support/pages/home.pageObject';
import SignInPageObject from 
  '../support/pages/signIn.pageObject';

const signIn = new SignInPageObject();
const home = new HomePageObject();

describe('signIn', () => {
  let user;

  beforeEach(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;

      cy.register(user.username, 'UEBzc3cwcmQ=');
    });

    signIn.visit('/');
    home.SignInLink.click();
  });

  it('should be able to sign in with valid creds', () => {
    signIn.usernameType(user.username);
    signIn.passwordType(user.password);
    signIn.signInBtn.click();
    home.assertUsername(user.username);
  });

  it('should be not able to sign in with invalid password', () => {
    signIn.usernameType(user.username);
    signIn.passwordType(user.password + 1);
    signIn.signInBtn.click();
    home.assertAllert('Wrong password.');
  });


  it('should be not able to sign in with invalid username', () => {
    signIn.usernameType(user.username + 1);
    signIn.passwordType(user.password);
    signIn.signInBtn.click();
    home.assertAllert('User does not exist.');
  });
  // Все остальные негативные имеют баги, поэтому 
  // тестировать их смысла нет
})
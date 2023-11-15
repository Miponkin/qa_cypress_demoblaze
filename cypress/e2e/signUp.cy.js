/// <reference types='cypress' />

import SignUpPageObject 
  from '../support/pages/signUp.pageObject';

const signUp = new SignUpPageObject();

describe('signUp', () => {
  let user;

  beforeEach(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });

    signUp.visit();
  });

  it('should be able to sign up', () => {
    
  });
})
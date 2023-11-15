/// <reference types='cypress' />

import CartPageObject from
  '../support/pages/cart.pageObject';
import HomePageObject from 
  '../support/pages/home.pageObject';

const cart = new CartPageObject();
const home = new HomePageObject();
describe('cart', () => {
  beforeEach(() => {
    cart.visit('/');
  });

  it('should able to add Samsung Galaxy s6 to cart', () => {
    home.clickOnCategory('Phones');
    home.clickOnProduct('Samsung galaxy s6');
    cart.addToCartBtn.click();
    home.assertAllert('Product added');
  });
})
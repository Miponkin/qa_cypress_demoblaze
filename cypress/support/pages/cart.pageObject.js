import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart')
  }
}

export default CartPageObject;

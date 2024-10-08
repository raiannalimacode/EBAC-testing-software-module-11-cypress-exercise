/// <reference types="cypress"/>

describe('Functionality Products Page', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
  });

  it('Deve selecionar um produto da lista', () => {
      cy.get('[class="product-block grid"]')
      //.last()
      //.first()
      //.eq(3)
      .contains('Ariel Roll Sleeve Sweatshirt')
      .click()
  });

  it.only('Deve adicionar um produto ao carrinho', () => {
    var amount = 2

    cy.get('[class="product-block grid"]')
    .contains('Ariel Roll Sleeve Sweatshirt')
    .click()
    cy.get('.button-variable-item-M')
    .click()
    cy.get('.button-variable-item-Purple')
    .click()
    cy.get('.input-text')
    .clear()
    .type(amount)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', amount)
    cy.get('.woocommerce-message').should('contain', amount + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
  });
  
});
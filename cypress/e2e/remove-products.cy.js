/// <reference types="cypress"/>

describe('Functionality Products Page', () => {

beforeEach(() => {
  cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
});

it('Deve selecionar um produto da lista', () => {
  cy.get('[class="product-block grid"]')
  .eq(3)
  .click()
});

it('Deve adicionar um produto ao carrinho', () => {
  var amount = 2

  cy.get('[class="product-block grid"]')
  .eq(3)
  .click()
  cy.get('.button-variable-item-M')
  .click()
  cy.get('.button-variable-item-Green')
  .click()
  cy.get('.input-text')
  .clear()
  .type(amount)
  cy.get('.single_add_to_cart_button').click()

  cy.get('.dropdown-toggle > .mini-cart-items').should('contain', amount)
  cy.get('.woocommerce-message').should('contain', amount + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
});

it.only('Deve remover o produto do carrinho', () => {
  var amount = 2

  cy.get('[class="product-block grid"]')
  .eq(3)
  .click()
  cy.get('.button-variable-item-M')
  .click()
  cy.get('.button-variable-item-Green')
  .click()
  cy.get('.input-text')
  .clear()
  .type(amount)
  cy.get('.single_add_to_cart_button').click()

  cy.get('.dropdown-toggle > .mini-cart-items').should('contain', amount)
  cy.get('.woocommerce-message').should('contain', amount + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

  cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
  cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
  cy.get('.cart_item > .product-remove').click()
  cy.get('.woocommerce-message').should('contain', '“Ajax Full-Zip Sweatshirt” removido.')
});
});
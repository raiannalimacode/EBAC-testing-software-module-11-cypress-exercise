/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker');

describe('Functionality pre-register', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });
  
  it('Deve completar o pré cadastro com sucesso', () => {
    let firstNameFaker = faker.person.firstName()
    let lastNameFaker = faker.person.lastName()
    let emailFaker = faker.internet.email(firstNameFaker)

    cy.get('#reg_email').type(emailFaker)
    cy.get('#reg_password').type('teste@teste.com')    
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(firstNameFaker)
    cy.get('#account_last_name').type(lastNameFaker)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
  });
});
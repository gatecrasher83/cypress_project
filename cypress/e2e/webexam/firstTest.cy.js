/// <reference types="cypress" />

it('',() =>{
    cy.visit('https://80.69.180.108:8441?lang="en"')
    cy.contains(' Войти ');
})

it('',() =>{
    cy.visit('https://80.69.180.108:8441?lang="en"')
    cy.contains('span',' Войти ');
})

it('',() =>{
    cy.visit('https://80.69.180.108:8441?lang="en"')
    cy.contains(' войти ', {matchCase: false});
})

it.only('',() =>{
    cy.viewport(1440, 900)
    cy.visit('https://80.69.180.108:8441?lang="en"')
    cy.get('form').contains('Забыли пароль?')
    cy.get("div.authorization-small-text>p:nth-child(1)")
})
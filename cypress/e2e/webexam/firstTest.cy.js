/// <reference types="cypress" />

it('Should', () =>{
    cy.viewport(1440, 900);
    cy.visit('https://80.69.180.108:8441?lang="en"');
    cy.get('input[type="email"]')
    .type(100, {force: true})
    .should('have.value', '100')
    .and("be.not.visible")    
})

it('Expect', () =>{
    cy.viewport(1440, 900);
    cy.visit('https://80.69.180.108:8441?lang="en"');
    cy.get('input[type="email"]')
    .type(100, {force: true}).then(input=>{
        expect(input).to.have.value(100)
    })   
})

it('check value', () =>{
    cy.viewport(1440, 900);
    cy.visit('https://payment.mts.ru/pay/1150?paymentform=1150&bt=UK&number=&amount=500&channel=1&source=mts&_ga=2.114043463.1161918336.1662288492-1928978872.1650893802');
    cy.get('input[data-val="ANONYMOUS_CARD"]')
    .should("be.checked")
    })   

it.only('check is visible', () =>{
    cy.viewport(1440, 900);
    cy.visit('https://autotrenajer.ru/');
    cy.contains('ТРЕНАЖЕРЫ')
    .trigger('mouseover')
    .get('header a[href="/cost"]>span[class="menu-item-text"]')
    .should("be.visible")
    })   

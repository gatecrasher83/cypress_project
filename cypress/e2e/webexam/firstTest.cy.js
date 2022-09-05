/// <reference types="cypress" />

//type

it('type', ()=>{
    cy.visit("https://80.69.180.108:8441/")
        .get('[type="password"]').click()
        .type('112233344')
})
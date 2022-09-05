/// <reference types="cypress" />

//type

it('type', ()=>{
    cy.visit("https://80.69.180.108:8441/")
        .get('[type="password"]')
        .type('112233344', {force: true})
})

it('focus', ()=>{
    cy.visit("https://80.69.180.108:8441/")
        .get('[type="password"]')
        .focus()
})

it('blur', ()=>{
    cy.visit("https://80.69.180.108:8441/")
        .get('[type="password"]')
        .focus()
        .blur()
})

it('clear', ()=>{
    cy.visit("https://80.69.180.108:8441/")
        .get('[type="password"]')
        .type('112233344', {force: true})
        .wait(2000)
        .clear({force: true})
})

it('submit', ()=>{
    cy.visit("https://80.69.180.108:8441/")
        .get('form[class^=w-50]')
        .submit()
})

it.only('click', ()=>{
    cy.visit("https://80.69.180.108:8441/")
        .get('a[class="clickable-text"]')
        .click({force: true})
})
/// <reference types="cypress" />
import { enterwebExam } from "../../support/pages/enterWebExam"
import { basePage } from "../../support/pages/basePage"

<<<<<<< HEAD
it('assertion footer', ()=>{
    cy.viewport(1600,900)
    basePage.open("https://80.69.180.108:8441/")    
    basePage.typeEnter('super@admin.ru', 'qwe123QWE!@#')
    cy.wait(3000)
    cy.screenshot()
    enterwebExam.openContragent()
    cy.screenshot()
    enterwebExam.scrollToPaginator()
    cy.wait(3000)
    cy.screenshot()
    enterwebExam.footerAssertion(' ©2000-2022 Форвард ')
    basePage.unAuthorize() 
=======
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

it('click', ()=>{
    cy.visit("https://80.69.180.108:8441/")
        .get('a[class="clickable-text"]')
        .click({force: true})
})

it.only('checkbox', ()=>{
    cy.viewport(1440,900)
    cy.visit("https://80.69.180.108:8441/")
    //ввод логина
    cy.get('[type="email"]')
    .type('super@admin.ru', {force: true})
    //ввод пароля
    cy.get('[type="password"]')
    .type('qwe123QWE!@#', {force: true})
    //войти
    cy.get('[type="submit"]')
    .click({force: true})
    .wait(2000)
    //открыть раздел "Контрагенты"
    cy.get('button').contains('Контрагенты')
    .click({force: true})
    //скролл до пейджинатора
    cy.get('div').contains(' элементов на странице: ')
    .wait(3000)
    .scrollIntoView()
    .wait(2000)
    //выход
    cy.get('span').contains(' Выход')
    .click({force: true})  
>>>>>>> e94c9358e49abd401207bb012da46a2cf56427eb
})
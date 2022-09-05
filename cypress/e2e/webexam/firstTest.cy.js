/// <reference types="cypress" />

it.only('assertion footer', ()=>{
    cy.viewport(1440,900)
    cy.visit("https://80.69.180.108:8441/")
    //ввод логина
    .get('[type="email"]')
    .type('super@admin.ru', {force: true})
    //ввод пароля
    .get('[type="password"]')
    .type('qwe123QWE!@#', {force: true})
    //войти
    .get('[type="submit"]')
    .click({force: true})
    .wait(2000)
    //открыть раздел "Контрагенты"
    .get('button').contains('Контрагенты')
    .click({force: true})
    //скролл до пейджинатора
    .get('div').contains(' элементов на странице: ')
    .wait(3000)
    .scrollIntoView()
    .wait(2000)
    //assertion footer
    .get('[class="text-muted col-auto m-auto noselect"]')
    .should('have.text', ' ©2000-2022 Форвард ')
    //выход
    .get('span').contains(' Выход')
    .click({force: true})  
})
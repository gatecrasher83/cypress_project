/// <reference types="cypress" />
import { enterWebExam } from "../support/pages/enterWebExam"

it.only('assertion footer', ()=>{
    cy.viewport(1440,900)
    cy.visit("https://80.69.180.108:8441/")
    
    enterWebExam.typeLogin('super@admin.ru')
    enterWebExam.typePassword('qwe123QWE!@#')
    enterWebExam.clickEnter()
    

    .wait(2000)

    cy.screenshot()

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
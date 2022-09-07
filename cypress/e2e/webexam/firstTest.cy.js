/// <reference types="cypress" />
import { enterwebExam } from "../../support/pages/enterWebExam"
import { basePage } from "../../support/pages/basePage"

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
})
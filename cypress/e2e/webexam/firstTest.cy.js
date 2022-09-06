/// <reference types="cypress" />
import { enterwebExam } from "../../support/pages/enterWebExam"

it.only('assertion footer', ()=>{
    cy.viewport(1440,900)
    cy.visit("https://80.69.180.108:8441/")
    
    enterwebExam.typeEnter('super@admin.ru', 'qwe123QWE!@#')
    cy.wait(2000)
    cy.screenshot()
    enterwebExam.openContragent()
    enterwebExam.scrollToPaginator()
    cy.wait(2000)
    enterwebExam.footerAssertion(' ©2000-2022 Форвард ')
    enterwebExam.unAuthorize() 
})
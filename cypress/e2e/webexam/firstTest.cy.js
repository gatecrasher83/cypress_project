/// <reference types="cypress-xpath" />

it("By.CSS selector", () =>{
    cy.viewport(1440, 900)
    cy.visit('https://www.google.com/')
    cy.get("div[class='FPdoLc lJ9FBc'] input[value='Поиск в Google']")

})

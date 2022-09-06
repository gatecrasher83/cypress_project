export class enterWebExam {
    typeLogin(login){
    //ввод логина
    cy.get('[type="email"]')
    .type(login, {force: true}) 
    }

    typePassword(password) {
    //ввод пароля
    cy.get('[type="password"]')
    .type(password, {force: true})
    }

    clickEnter() {
    //войти
    cy.get('[type="submit"]')
    .click({force: true})
    }
}

export const enterWebExam = enterWebExam()
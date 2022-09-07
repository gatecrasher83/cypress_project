export class BasePage{

    open(url){
        cy.visit(url)
    }

    typeEnter(login,password){
        cy.get('[type="email"]')
        .type(login, {force: true})
        .get('[type="password"]')
        .type(password, {force: true})
        .get('button[type="submit"]')
        .click({force: true})
    }

    unAuthorize(){
        //выход
        cy.get('span')
        .contains(' Выход')
        .click({force: true})
    }
}

export const basePage = new BasePage()
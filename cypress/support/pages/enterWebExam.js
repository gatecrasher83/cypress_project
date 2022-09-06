export class enterWebExam {
    
    
    typeEnter(login,password){
        cy.get('[type="email"]')
        .type(login, {force: true})
        .get('[type="password"]')
        .type(password, {force: true})
        .get('[type="submit"]')
        .click({force: true})
    }

    openContragent(){
        //открыть раздел "Контрагенты"
        cy.get('button').contains('Контрагенты')
        .click({force: true})
    }

    scrollToPaginator(){
        //скролл до пейджинатора
        cy.get('div').contains(' элементов на странице: ')
        .scrollIntoView()
    }

    unAuthorize(){
        //выход
        cy.get('span')
        .contains(' Выход')
        .click({force: true})
    }
}

export const enterwebExam = new enterWebExam()
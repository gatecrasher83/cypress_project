export class enterWebExam {
    
    
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

    footerAssertion(footer){
        //assertion footer
        cy.get('[class="text-muted col-auto m-auto noselect"]')
        .should('have.text', footer)
    }

    
}

export const enterwebExam = new enterWebExam()
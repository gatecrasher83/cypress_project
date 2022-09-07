/// <reference types="cypress" />

context('Network Requests', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it("Example sending the GET request", ()=>{
        cy.request('/')
            .then((response)=>{
                console.log(response);
        })
})

    it("Example sending the GET request", ()=>{
        cy.request({
            method:'POST',
            url: 'https://80.69.180.108:8441',
            body: '',
            headers:''
        })
            .then((response)=>{
                console.log(response);
    })
})
})